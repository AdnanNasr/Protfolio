import { useLanguage } from '@/lib/LanguageContext';
import { Smartphone, Server, Network } from 'lucide-react';
const AREAS = [
    {
        icon: Smartphone,
        title_en: 'Full-Stack & Mobile Development',
        title_ar: 'تطوير التطبيقات المتكاملة والجوال',
        desc_en: 'Building cross-platform mobile apps (like Zad Al-Muslim) using Clean Architecture principles for the best performance and scalability.',
        desc_ar: 'تطوير تطبيقات جوال متعددة المنصات (مثل تطبيق Zad Al-Muslim) باستخدام مبادئ Clean Architecture للوصول لأفضل أداء وسهولة في التوسع.',
    },
    {
        icon: Server,
        title_en: 'Backend & Cloud Infrastructure',
        title_ar: 'البنية التحتية الخلفية والسحابية',
        desc_en: 'Developing APIs with FastAPI and Python, and setting up containers and environments using Docker Compose and Traefik Reverse Proxy with SSL encryption.',
        desc_ar: 'بناء وتطوير خدمات APIs باستخدام FastAPI وPython، وإعداد الحاويات والبيئات باستخدام Docker Compose وTraefik Reverse Proxy مع تشفير SSL.',
    },
    {
        icon: Network,
        title_en: 'Networks & Systems',
        title_ar: 'الشبكات والأنظمة',
        desc_en: 'Experience with computer network setup, Active Directory management, routing protocols (RIPv2), and CCNA certification preparation.',
        desc_ar: 'خبرة في إعداد شبكات الحاسوب، إدارة Active Directory، وبروتوكولات التوجيه (RIPv2)، والتحضير لشهادة CCNA.',
    },
];

const AreasOfExperience = () => {
    const { lang } = useLanguage();
    const isRTL = lang === 'ar';

    return (
        <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 sm:py-28">
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {isRTL ? 'مجالات الخبرة' : 'What I Work On'}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {isRTL ? 'مجالات الخبرة' : 'Areas of Experience'}
                </h2>
            </div>

            <div className="relative mt-14">
                {/* the vertical "road" line */}
                <div className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent ${isRTL ? 'right-6' : 'left-6'}`} />
                <div className="flex flex-col gap-10">
                    {AREAS.map(({ icon: Icon, title_en, title_ar, desc_en, desc_ar }, i) => (
                        <div key={i} className={`relative flex gap-6 rtl:flex-row-reverse' : ''}`}>
                            {/* node on the road */}
                            <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-400/40 bg-[#0B0C10] text-cyan-300 ring-4 ring-cyan-400/10">
                                <Icon className="h-5 w-5" strokeWidth={2} />
                            </span>

                            <div className={isRTL ? 'text-right' : 'text-left'}>
                                <h3 className="text-lg font-semibold text-white">
                                    {isRTL ? title_ar : title_en}
                                </h3>
                                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                                    {isRTL ? desc_ar : desc_en}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AreasOfExperience;