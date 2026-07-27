/**
 * Contact section: validated form + social icon badges.
 * On submit it saves the message to PocketBase, which triggers a server-side
 * hook that emails the message to adnzed00@gmail.com.
 */
import { useState } from 'react';
import { Globe, Mail, Github,Youtube, Send, CheckCircle2, Loader2 ,ArrowUpRight } from 'lucide-react';
import pocketbaseClient from '@/lib/pocketbaseClient';
import { useLanguage } from '@/lib/LanguageContext';

const CONTACT_EMAIL = 'adnzed00@gmail.com';

const Contact = () => {
    const { t } = useLanguage();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const SOCIALS = [
        { icon: Globe, label: 'ghad-ebdai.com', href: 'https://ghad-ebdai.com' },
        { icon: Mail, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
        { icon: Github, label: 'github.com/AdnanNasr', href: 'https://github.com/AdnanNasr' },
        { icon: Youtube, label: 'youtube.com/@appsbyadnan', href: 'https://youtube.com/@appsbyadnan' },
    ];

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = t.contact.form.errors.name;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.contact.form.errors.email;
        if (form.message.trim().length < 10) e.message = t.contact.form.errors.message;
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const onSubmit = async (ev) => {
        ev.preventDefault();
        setSubmitError('');
        if (!validate()) return;
        setSubmitting(true);
        try {
            await pocketbaseClient.collection('contact_messages').create({
                name: form.name.trim(),
                email: form.email.trim(),
                message: form.message.trim(),
            });
            setSent(true);
        } catch (err) {
            setSubmitError(t.contact.form.errorMsg);
        } finally {
            setSubmitting(false);
        }
    };

    const field = (name, type, label, placeholder, textarea) => (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-sm font-medium text-slate-300">{label}</label>
            {textarea ? (
                <textarea
                    id={name}
                    rows={5}
                    value={form[name]}
                    onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
                    placeholder={placeholder}
                    className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    value={form[name]}
                    onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
                    placeholder={placeholder}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                />
            )}
            {errors[name] && <span className="text-xs text-red-400">{errors[name]}</span>}
        </div>
    );

    return (
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{t.contact.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {t.contact.title}
                    </h2>
                    <p className="mt-4 max-w-md text-slate-400">
                        {t.contact.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col gap-3">
                        {SOCIALS.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noreferrer"
                                dir="ltr"
                                className="glow-border group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300"
                            >
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                                    <Icon className="h-4 w-4" />
                                </span>
                                <span className="flex-1 truncate group-hover:text-cyan-100">{label}</span>
                                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Form */}
                {sent ? (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-10 text-center">
                        <CheckCircle2 className="h-12 w-12 text-cyan-300" />
                        <h3 className="mt-4 text-xl font-semibold text-white">{t.contact.form.thanks}, {form.name || t.contact.form.friend}!</h3>
                        <p className="mt-2 text-sm text-slate-400">
                            {t.contact.form.successMsg}{' '}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-300 underline" dir="ltr">{CONTACT_EMAIL}</a>.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                        {field('name', 'text', t.contact.form.name, t.contact.form.namePlaceholder)}
                        {field('email', 'email', t.contact.form.email, t.contact.form.emailPlaceholder)}
                        {field('message', 'text', t.contact.form.message, t.contact.form.messagePlaceholder, true)}
                        {submitError && (
                            <p className="text-sm text-red-400">{submitError}</p>
                        )}
                        <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_-6px_rgba(34,211,238,.7)] transition-all hover:bg-cyan-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {submitting ? (
                                <><Loader2 className="h-4 w-4 animate-spin" /> {t.contact.form.sending}</>
                            ) : (
                                <><Send className="h-4 w-4" /> {t.contact.form.send}</>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
