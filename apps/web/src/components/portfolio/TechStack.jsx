/** Tech Stack: grouped glowing category cards with per-tool icon boxes. */
import { Smartphone, Server, Database, Cloud, Wrench } from 'lucide-react';
import {
    SiFlutter, SiDart, SiAndroid, SiApple,
    SiPython, SiFastapi, SiN8N, SiFirebase, SiSupabase, SiStrapi,
    SiPostgresql, SiMysql, SiSqlite,
    SiDocker, SiLinux, SiNginx, SiGooglecloud, SiDigitalocean, SiApache,
    SiPostman, SiWordpress, SiWoo,
} from 'react-icons/si';
import { useLanguage } from '@/lib/LanguageContext';


const GROUP_ITEMS = {
    mobile: {
        icon: Smartphone,
        items: [
            { name: 'Flutter', icon: SiFlutter },
            { name: 'Dart', icon: SiDart },
            { name: 'Android', icon: SiAndroid },
            { name: 'iOS', icon: SiApple },
        ],
    },
    backend: {
        icon: Server,
        items: [
            { name: 'Python', icon: SiPython },
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'n8n', icon: SiN8N },
            { name: 'Firebase', icon: SiFirebase },
            { name: 'Supabase', icon: SiSupabase },
            { name: 'Strapi', icon: SiStrapi },
        ],
    },
    databases: {
        icon: Database,
        items: [
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'MySQL', icon: SiMysql },
            { name: 'SQLite', icon: SiSqlite },
            { name: 'Isar', icon: Database },
        ],
    },
    devops: {
        icon: Cloud,
        items: [
            { name: 'Docker', icon: SiDocker },
            { name: 'Linux Server', icon: SiLinux },
            { name: 'Nginx', icon: SiNginx },
            { name: 'Google Cloud', icon: SiGooglecloud },
            { name: 'DigitalOcean', icon: SiDigitalocean },
            { name: 'Apache', icon: SiApache },
        ],
    },
    tools: {
        icon: Wrench,
        items: [
            { name: 'Postman', icon: SiPostman },
            { name: 'WordPress', icon: SiWordpress },
            { name: 'WooCommerce', icon: SiWoo },
        ],
    },
};

const TechStack = () => {
    const { t } = useLanguage();

    return (
        <section id="tech" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:py-28">
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{t.tech.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {t.tech.title}
                </h2>
                <p className="mt-4 text-slate-400">{t.tech.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(GROUP_ITEMS).map(([key, { icon: Icon, items }]) => (
                    <div
                        key={key}
                        className="glow-border group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20 transition-transform group-hover:scale-105">
                                <Icon className="h-5 w-5" strokeWidth={2} />
                            </span>
                            <h3 className="text-lg font-semibold text-white">{t.tech.groups[key]}</h3>
                        </div>

                        <div className="mt-5 grid grid-cols-4 gap-2.5" dir="ltr">
                            {items.map(({ name, icon: ItemIcon }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3 text-center transition-colors group-hover:border-cyan-400/20">
                                    {ItemIcon ? (
                                        <ItemIcon className="h-5 w-5 shrink-0 text-slate-300" />
                                    ) : (
                                        <span className="h-5 w-5 shrink-0" />
                                    )}
                                    <span className="w-full truncate text-[11px] font-medium leading-tight text-slate-400">
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        
    );
};

export default TechStack;