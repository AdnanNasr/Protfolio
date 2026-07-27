/** Quiet footer with brand + copyright. */
import { Globe, Mail, Github } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="border-t border-white/10 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
                <p className="text-sm font-semibold text-white">
                    Adnan Nasr<span className="text-cyan-400">.</span>
                </p>
                <div className="flex items-center gap-4 text-slate-400">
                    <a href="https://ghad-ebdai.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300" aria-label="Website"><Globe className="h-5 w-5" /></a>
                    <a href="mailto:adnzed00@gmail.com" className="transition-colors hover:text-cyan-300" aria-label="Email"><Mail className="h-5 w-5" /></a>
                    <a href="https://github.com/AdnanNasr" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-300" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                </div>
                <p className="text-xs text-slate-500">© {new Date().getFullYear()} Adnan Nasr. {t.footer.rights}</p>
            </div>
        </footer>
    );
};

export default Footer;
