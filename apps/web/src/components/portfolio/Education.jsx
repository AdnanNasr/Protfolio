import { useLanguage } from '@/lib/LanguageContext';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const { lang } = useLanguage();
    const isRTL = lang === 'ar';

    return (
        <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {isRTL ? 'التعليم' : 'Education'}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {isRTL ? 'التعليم' : 'Education'}
                </h2>
            </div>

            <div className="glow-border mt-12 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                    <GraduationCap className="h-5 w-5" strokeWidth={2} />
                </span>

                <h3 className={`mt-5 text-2xl font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL
                        ? 'مساعد تقنية معلومات (تركيز على البرمجة والشبكات وإنترنت الأشياء)'
                        : 'IT Assistant (Focus on Programming, Networks & IoT)'}
                </h3>
                <p className={`mt-3 text-sm text-slate-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                    OSZ IMT
                </p>
            </div>
        </section>
    );
};

export default Education;