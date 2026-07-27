/// <reference path="../pb_data/types.d.ts" />

// Send an email to the site owner whenever a contact message is submitted.
// Delivered via the Resend API.
onRecordAfterCreateSuccess((e) => {
    const record = e.record;
    const name = record.get('name');
    const email = record.get('email');
    const message = record.get('message');

    const OWNER_EMAIL = 'adnzed00@gmail.com';
    const RESEND_API_KEY = 're_dJaVTGLE_4BFq4bVm8CPagiGX4g3cQYfq';
    const FROM_ADDRESS = 'Adnan Nasr Portfolio <onboarding@resend.dev>';

    try {
        const html = `
            <h2>New portfolio contact message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap">${message}</p>
        `;

        const payload = {
            from: FROM_ADDRESS,
            to: [OWNER_EMAIL],
            reply_to: email,
            subject: `Portfolio message from ${name}`,
            html: html,
        };

        const response = $http.send({
            url: 'https://api.resend.com/emails',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.statusCode >= 400) {
            e.app.logger().error('Failed to send contact email via Resend', 'status', response.statusCode, 'body', response.raw);
        }
    } catch (err) {
        e.app.logger().error('Failed to send contact email', 'error', String(err));
    }

    e.next();
}, 'contact_messages');
