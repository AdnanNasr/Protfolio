/** Hero: gradient name, typing subtitle, summary, CTA buttons. */
import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const HERO_IMAGE = 'https://images.hostinger.com/a1cf495e-973d-49c7-b4fb-5a74854a3b0f.png';

/** Small typewriter that cycles through a list of role strings. */
const useTypewriter = (words, typing = 70, deleting = 40, pause = 1400) => {
    const [text, setText] = useState('');
    const [i, setI] = useState(0);
    const [del, setDel] = useState(false);

    useEffect(() => {
        setText('');
        setI(0);
        setDel(false);
    }, [words]);

    useEffect(() => {
        const word = words[i % words.length] || '';
        if (!del && text === word) {
            const t = setTimeout(() => setDel(true), pause);
            return () => clearTimeout(t);
        }
        if (del && text === '') {
            setDel(false);
            setI((v) => v + 1);
            return;
        }
        const t = setTimeout(() => {
            setText((cur) => (del ? cur.slice(0, -1) : word.slice(0, cur.length + 1)));
        }, del ? deleting : typing);
        return () => clearTimeout(t);
    }, [text, del, i, words, typing, deleting, pause]);

    return text;
};

const Hero = () => {
    const { t, lang } = useLanguage();
    const typed = useTypewriter(t.hero.roles);
    const isRTL = lang === 'ar';

    return (
        <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
            {/* faint hero backdrop */}
            <img
                src={HERO_IMAGE}
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />
            <div className="relative mx-auto max-w-4xl px-5 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5" /> {t.hero.badge}
                </span>

                <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                    <span className="text-gradient">{t.hero.name}</span>
                </h1>

                <p
                    className="mt-5 flex items-center justify-center gap-2 text-lg text-slate-300 sm:text-2xl"
                    style={!isRTL ? { fontFamily: '"JetBrains Mono", monospace' } : undefined}
                    dir={isRTL ? 'rtl' : 'ltr'}
                >
                    <span className="text-cyan-400" aria-hidden dir="ltr">&gt;</span>
                    <span>{typed}</span>
                    <span className="caret text-cyan-400" aria-hidden>|</span>
                </p>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                    {t.hero.summary}
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                        href="#projects"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_-6px_rgba(34,211,238,.7)] transition-all hover:bg-cyan-300 active:scale-[0.98] sm:w-auto"
                    >
                        {t.hero.ctaPrimary}
                        <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-cyan-400/40 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
                    >
                        {t.hero.ctaSecondary}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
