import { Github, Sparkle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
const p1 = '/imgs/zad.jpg';

const GooglePlayIcon = props => <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0c-9.5 5.1-16 15.5-16 27.9v456.4c0 12.4 6.5 22.8 16 27.9l253.9-256.1L47 0zm425.2 213.4L361.8 148 288 213.4l73.8 65.4 110.4-65.4zm-155.8 200.1l-64.9 65.4L472.2 298.6 361.8 233.2l-45.4 180.3z"/>
    </svg>;


const PROJECT_META = [{
    key: 'zad',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Isar DB', 'Clean Architecture', 'Open-Source (GPL-2.0)'],
    github: 'https://github.com/AdnanNasr/Zad_Al-Muslim',
    live: 'https://play.google.com/store/apps/details?id=com.zad_al_muslim.adnan',
},];
const STANDARD_PROJECT_META = [{
    key: 'tafseer',
    tags: ['Python', 'FastAPI', 'Docker', 'Uvicorn'],
    github: 'https://github.com/AdnanNasr/tafseer_backend_app',
}, {
    key: 'aiTools',
    tags: ['Python', 'FastAPI', 'Alembic', 'Uvicorn'],
    github: 'https://github.com/AdnanNasr/ai_backend_api',
}, {
    key: 'ghadEbdai',
    tags: ['Python', 'Telegram Bot API', 'yt-dlp', 'AssemblyAI'],
    github: 'https://github.com/AdnanNasr/Ghad-Ebdai_Media',
}];
const PLACEHOLDER_COUNT = 1;


const FeaturedCard = ({ meta, copy, t }) => (
    
    <article className="glow-border relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:col-span-2 md:flex-row md:items-center md:gap-8 md:p-8">
        {/* Image — stacks on top on mobile, sits beside content on desktop */}
        <div className="w-full shrink-0 md:w-80 lg:w-96">
            <img
                src={p1}
                alt={copy.title}
                className="h-56 w-full rounded-xl object-contain"
            />
        </div>

        <div className="mt-6 flex-1 md:mt-0">
            <div className="relative">
                <div className="absolute -top-2 right-0 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 rtl:right-auto rtl:left-0 md:static md:mb-3 md:inline-flex">
                    <Sparkle className="h-3.5 w-3.5" /> {t.projects.featured}
                </div>
            </div>
            <h3 className="max-w-md pt-10 text-2xl font-bold text-white md:pt-0">{copy.title}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">{copy.description}</p>
            <div className="mt-5 flex flex-wrap gap-2" dir="ltr">
                {meta.tags.map(tag => <span key={tag} className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-400/20">
                        {tag}
                    </span>)}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
                <a href={meta.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/10 active:scale-[0.98]">
                    <Github className="h-4 w-4" /> {t.projects.github}
                </a>
                <a href={meta.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-300 active:scale-[0.98]"><GooglePlayIcon className="h-4 w-4" /> {t.projects.googlePlay}</a>
            </div>
        </div>
    </article>
    
);

const StandardCard = ({ meta, copy }) => (
    <article className="glow-border relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6">
        <h3 className="text-lg font-bold text-white">{copy.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{copy.description}</p>
        <div className="mt-5 flex flex-wrap gap-2" dir="ltr">
            {meta.tags.map(tag => <span key={tag} className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-400/20">
                    {tag}
                </span>)}
        </div>
        <div className="mt-6">
            <a href={meta.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/10 active:scale-[0.98]">
                <Github className="h-4 w-4" /> GitHub
            </a>
        </div>
    </article>
);

const PlaceholderCard = ({ t }) => (
    <article className="relative flex min-h-[220px] flex-col justify-between rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 transition-colors hover:border-cyan-400/30">
        <div>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                {t.projects.upcoming}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-300">{t.projects.placeholderTitle}</h3>
            <p className="mt-2 text-sm text-slate-500">{t.projects.placeholderDesc}</p>
        </div>
        {/* blurred placeholder tags */}
        <div className="mt-6 flex flex-wrap gap-2 blur-[3px] select-none" aria-hidden dir="ltr">
            {['Flutter', 'FastAPI', 'Docker'].map(tag => <span key={tag} className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-slate-300">{tag}</span>)}
        </div>
    </article>
);

const Projects = () => {
    const { t } = useLanguage();
    return (
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{t.projects.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {t.projects.title}
                </h2>
                <p className="mt-4 text-slate-400">{t.projects.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
                {PROJECT_META.map(meta => (
                    <FeaturedCard key={meta.key} meta={meta} copy={t.projects[meta.key]} t={t} />
                ))}
                {STANDARD_PROJECT_META.map(meta => (
                    <StandardCard key={meta.key} meta={meta} copy={t.projects[meta.key]} />
                ))}
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => <PlaceholderCard key={i} t={t} />)}
            </div>
        </section>
    );
};

export default Projects;
