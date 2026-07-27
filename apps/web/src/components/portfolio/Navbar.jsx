import { useEffect, useState } from "react";
import { Menu, X, Download, Code2, Languages } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
const logo = "/imgs/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const LINKS = [
    { label: t.nav.about, href: "#about" },
    { label: lang === "ar" ? "التعليم" : "Education", href: "#education" },
    { label: lang === "ar" ? "الخبرة" : "Experience", href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.tech, href: "#tech" },
    { label: lang === "ar" ? "الخدمات" : "Services", href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LangToggle = ({ className = "" }) => (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className={`inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 active:scale-[0.97] ${className}`}
    >
      <Languages className="h-3.5 w-3.5" strokeWidth={2.2} />
      <span className={lang === "en" ? "text-cyan-300" : "text-slate-500"}>
        EN
      </span>
      <span className="text-slate-600">/</span>
      <span className={lang === "ar" ? "text-cyan-300" : "text-slate-500"}>
        AR
      </span>
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0B0C10]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className="flex items-center gap-2 font-bold tracking-tight text-white"
        >
          <img src={logo} alt="Adnan Nasr" className="h-8 w-8 rounded-lg" />
          Adnan<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
            >
              {l.label}
            </a>
          ))}
          <LangToggle />
          <a
            href="/adnan-nasr-cv.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_20px_-4px_rgba(34,211,238,.6)] transition-all hover:bg-cyan-300 active:scale-[0.97]"
          >
            <Download className="h-4 w-4" strokeWidth={2.4} />
            {t.nav.downloadCv}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-300 ring-1 ring-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0B0C10]/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/adnan-nasr-cv.pdf"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950"
            >
              <Download className="h-4 w-4" /> {t.nav.downloadCv}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
