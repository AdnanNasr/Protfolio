import { useLanguage } from '@/lib/LanguageContext';
import { Smartphone, Server, Database } from 'lucide-react';

const SERVICES = [
    {
        icon: Smartphone,
        title_en: 'Mobile App Development',
        title_ar: 'تطوير تطبيقات الجوال',
        desc_en: 'Building cross-platform mobile apps with a full-stack mindset, from UI to backend integration, using Flutter and Clean Architecture.',
        desc_ar: 'تطوير تطبيقات جوال متعددة المنصات بعقلية Full-Stack، من الواجهة وحتى الربط بالباك إند، باستخدام Flutter ومبادئ Clean Architecture.',
    },
    {
        icon: Server,
        title_en: 'Backend & API Systems',
        title_ar: 'أنظمة الباك إند وواجهات البرمجة',
        desc_en: 'Developing high-performance backend services and RESTful APIs with FastAPI and Python, built to scale.',
        desc_ar: 'تطوير خدمات باك إند عالية الأداء وواجهات برمجة (APIs) باستخدام FastAPI وPython، مبنية لتتحمل النمو والتوسع.',
    },
    {
        icon: Database,
        title_en: 'Server & Infrastructure Management',
        title_ar: 'إدارة السيرفرات والبنية التحتية',
        desc_en: 'Setting up and managing servers, containers, and deployment pipelines with Docker for reliable, production-ready systems.',
        desc_ar: 'إعداد وإدارة السيرفرات والحاويات وخطوط النشر باستخدام Docker، للوصول لأنظمة موثوقة وجاهزة للإنتاج.',
    },
];

const Services = () => {
    const { lang } = useLanguage();
    const isRTL = lang === 'ar';

    return (
        <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {isRTL ? 'خدماتي' : 'What I Offer'}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {isRTL ? 'الخدمات' : 'Services'}
                </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map(({ icon: Icon, title_en, title_ar, desc_en, desc_ar }, i) => (
                    <div
                        key={i}
                        className="glow-border group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
                    >
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20 transition-transform group-hover:scale-105">
                            <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <h3 className={`mt-4 text-lg font-semibold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                            {isRTL ? title_ar : title_en}
                        </h3>
                        <p className={`mt-2 text-sm leading-relaxed text-slate-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {isRTL ? desc_ar : desc_en}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;