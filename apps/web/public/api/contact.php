<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, string $message)
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, 'Method not allowed.');
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    if (!is_string($originHost) || strcasecmp($originHost, preg_replace('/:\d+$/', '', $host)) !== 0) {
        respond(403, 'Invalid request origin.');
    }
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') !== 0) {
    respond(415, 'JSON request required.');
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    respond(400, 'Invalid request body.');
}

// Honeypot: bots commonly fill hidden fields.
if (trim((string)($data['website'] ?? '')) !== '') {
    respond(200, 'Message accepted.');
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || mb_strlen($name) > 120) {
    respond(422, 'Please enter a valid name.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254) {
    respond(422, 'Please enter a valid email.');
}
if (mb_strlen($message) < 10 || mb_strlen($message) > 5000) {
    respond(422, 'Message must contain between 10 and 5000 characters.');
}

// Simple per-IP limit: five submissions per ten minutes.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/portfolio-contact-' . hash('sha256', $ip) . '.json';
$now = time();
$attempts = [];
if (is_file($rateFile)) {
    $stored = json_decode((string)file_get_contents($rateFile), true);
    if (is_array($stored)) {
        $attempts = array_values(array_filter($stored, static fn($timestamp) => is_int($timestamp) && $timestamp > $now - 600));
    }
}
if (count($attempts) >= 5) {
    respond(429, 'Too many messages. Please try again later.');
}
$attempts[] = $now;
@file_put_contents($rateFile, json_encode($attempts), LOCK_EX);

$config = [
    'RESEND_API_KEY' => getenv('RESEND_API_KEY') ?: '',
    'PORTFOLIO_CONTACT_EMAIL' => getenv('PORTFOLIO_CONTACT_EMAIL') ?: '',
    'RESEND_FROM_ADDRESS' => getenv('RESEND_FROM_ADDRESS') ?: '',
];

// On shared hosting, keep this file one level above public_html.
$secretFile = dirname((string)($_SERVER['DOCUMENT_ROOT'] ?? __DIR__)) . '/portfolio-secrets.php';
if (is_file($secretFile)) {
    $fileConfig = require $secretFile;
    if (is_array($fileConfig)) {
        $config = array_merge($config, array_intersect_key($fileConfig, $config));
    }
}

$apiKey = trim((string)$config['RESEND_API_KEY']);
$ownerEmail = trim((string)$config['PORTFOLIO_CONTACT_EMAIL']);
$fromAddress = trim((string)$config['RESEND_FROM_ADDRESS']);
if ($fromAddress === '') {
    $fromAddress = 'Adnan Nasr Portfolio <onboarding@resend.dev>';
}

if ($apiKey === '' || !filter_var($ownerEmail, FILTER_VALIDATE_EMAIL)) {
    error_log('Portfolio contact form is missing its Resend configuration.');
    respond(503, 'Contact service is temporarily unavailable.');
}

$safeName = htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
$payload = json_encode([
    'from' => $fromAddress,
    'to' => [$ownerEmail],
    'reply_to' => $email,
    'subject' => 'Portfolio message from ' . $name,
    'html' => "<h2>New portfolio contact message</h2><p><strong>Name:</strong> {$safeName}</p><p><strong>Email:</strong> {$safeEmail}</p><p><strong>Message:</strong></p><p>{$safeMessage}</p>",
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if (!function_exists('curl_init')) {
    error_log('The PHP cURL extension is required for the portfolio contact form.');
    respond(503, 'Contact service is temporarily unavailable.');
}

$curl = curl_init('https://api.resend.com/emails');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_TIMEOUT => 20,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_POSTFIELDS => $payload,
]);
$responseBody = curl_exec($curl);
$status = (int)curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
$curlError = curl_error($curl);
curl_close($curl);

if ($responseBody === false || $status < 200 || $status >= 300) {
    error_log('Resend contact failure. HTTP ' . $status . ($curlError !== '' ? ' — ' . $curlError : ''));
    respond(502, 'The email provider rejected the request.');
}

respond(200, 'Message sent successfully.');
