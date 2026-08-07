import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Server,
  Smartphone,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

const copy = {
  en: {
    nav: ["Work", "Capabilities", "Journey", "About"],
    available:
      "Berlin · Open to internships, technical Minijobs & selected freelance",
    eyebrow: "Junior Software Engineer",
    title: "I build software from product idea to",
    titleAccent: "working release.",
    intro:
      "Mobile, backend and infrastructure — brought together with careful planning, maintainable code and a focus on the people using the product.",
    contact: "Start a conversation",
    work: "Explore selected work",
    cv: "Download CV",
    since: "Building software since 2020",
    proof: [
      ["05", "product releases"],
      ["3.31k", "Play Store impressions · 28 days"],
      ["+100", "user acquisitions"],
      ["2020", "started building"],
    ],
    workEyebrow: "Selected work",
    workTitle: "Proof, not promises.",
    workIntro:
      "Products and systems that show how I think, build, test and improve.",
    featured: "Shipped mobile product",
    zadTitle: "Zad Al-Muslim",
    zadDesc:
      "An offline-first Islamic companion built independently with Flutter. I designed the experience, structured the app, shipped it to Google Play and kept improving it through five release cycles.",
    zadFacts: [
      "Flutter · Riverpod · Isar",
      "Offline audio downloads",
      "RTL product design",
      "Post-launch iteration",
    ],
    caseStudy: "View case study",
    store: "Google Play",
    backend: "Backend engineering",
    aiTitle: "AI Tools API",
    aiDesc:
      "A public FastAPI service for saving, categorising and returning to useful AI tools — with PostgreSQL, migrations, authentication, authorisation and rate limiting.",
    confidential: "Paid client engagement · In progress",
    clientTitle: "Confidential mobile product",
    clientDesc:
      "Independently responsible for product design, Flutter development, on-device AI integration, in-app purchase preparation, testing and release planning.",
    capabilitiesEyebrow: "Capabilities",
    capabilitiesTitle: "One engineer across the product path.",
    capabilities: [
      [
        "Mobile products",
        "Cross-platform Android and iOS applications with responsive interfaces, local data and considered state management.",
      ],
      [
        "Backend & APIs",
        "FastAPI services, relational databases, authentication, permissions and clear REST interfaces.",
      ],
      [
        "Automation tools",
        "Python utilities and Telegram bots for files, media, import/export and repetitive workflows.",
      ],
      [
        "Delivery support",
        "WordPress and WooCommerce delivery, VPS setup, containers, proxy routing and troubleshooting.",
      ],
    ],
    toolbox: "Engineering toolbox",
    core: "Core · proven in substantial work",
    working: "Working knowledge",
    learning: "Currently developing",
    journeyEyebrow: "Journey",
    journeyTitle: "Built step by step.",
    timeline: [
      [
        "2020",
        "Python & networks",
        "Started with automation, media tools and network utilities.",
      ],
      [
        "2022",
        "Backend systems",
        "Moved into FastAPI, REST APIs and relational data.",
      ],
      [
        "2023",
        "Cross-platform mobile",
        "Learned Dart and Flutter through independent products.",
      ],
      [
        "2024",
        "First shipped product",
        "Published Zad Al-Muslim and began the IT Assistant program at OSZ IMT.",
      ],
      [
        "2026",
        "First paid client product",
        "Owning design and implementation of a commercial Flutter application.",
      ],
      [
        "2027",
        "Next step",
        "Seeking a mandatory software, networking or IoT internship in Berlin.",
      ],
    ],
    processEyebrow: "How I work",
    processTitle: "Outcome first. Evidence at every step.",
    process: [
      "Define the outcome",
      "Shape the MVP",
      "Map flows & architecture",
      "Document while building",
      "Test on real devices",
      "Release, observe, improve",
    ],
    education: "Education & credentials",
    osz: "IT Assistant · OSZ IMT",
    oszDate: "Berlin · 2024—2027",
    cisco: "Cisco Networking Academy",
    cert: "IT Essentials · Certificate & Badge",
    modules:
      "Module achievements: Basic Cisco Configuration, System Safeguards, Threat Analysis, Cybersecurity Administration.",
    aboutEyebrow: "About",
    aboutTitle: "Curious by nature. Disciplined by practice.",
    about:
      "I am a self-taught developer and IT student based in Berlin. What motivates me is not code for its own sake, but turning useful ideas into software people can actually use. I value clear planning, thoughtful experiences and continuous improvement after release.",
    personal:
      "Away from software, I reset through reading, swimming, games and time with my family.",
    languages: "Arabic · Native  /  German · B2  /  English · B1",
    contactEyebrow: "Contact",
    contactTitle: "Have a role or a product in mind?",
    contactText:
      "I am open to internships in Berlin, technical Minijobs, future Junior opportunities and selected freelance projects.",
    email: "Write an email",
    github: "View GitHub",
    blog: "Read my writing",
    footer: "Designed around real work. Built with care in Berlin.",
  },
  ar: {
    nav: ["الأعمال", "القدرات", "الرحلة", "عني"],
    available: "برلين · متاح للتدريب، Minijob تقني ومشاريع حرة مختارة",
    eyebrow: "مهندس برمجيات Junior",
    title: "أحوّل فكرة المنتج إلى",
    titleAccent: "إصدار يعمل فعلاً.",
    intro:
      "تطبيقات، أنظمة خلفية وبنية تحتية — أجمعها بتخطيط واضح، وكود قابل للصيانة، واهتمام حقيقي بمن يستخدم المنتج.",
    contact: "ابدأ محادثة",
    work: "استكشف أعمالي",
    cv: "تحميل السيرة",
    since: "أبني البرمجيات منذ 2020",
    proof: [
      ["05", "إصدارات للمنتج"],
      ["3.31K", "ظهور على المتجر · 28 يوماً"],
      ["+100", "عملية اكتساب"],
      ["2020", "بداية الرحلة"],
    ],
    workEyebrow: "أعمال مختارة",
    workTitle: "أدلة، لا ادعاءات.",
    workIntro: "منتجات وأنظمة توضّح كيف أفكر وأبني وأختبر وأحسّن.",
    featured: "منتج موبايل منشور",
    zadTitle: "زاد المسلم",
    zadDesc:
      "تطبيق إسلامي يعمل دون اتصال، بنيته مستقلاً باستخدام Flutter. صممت التجربة وهيكلت التطبيق ونشرته على Google Play، ثم واصلت تطويره عبر خمس دورات إصدار.",
    zadFacts: [
      "Flutter · Riverpod · Isar",
      "تحميل الصوت دون اتصال",
      "تصميم RTL",
      "تحسين مستمر بعد الإطلاق",
    ],
    caseStudy: "دراسة المشروع",
    store: "Google Play",
    backend: "هندسة الأنظمة الخلفية",
    aiTitle: "AI Tools API",
    aiDesc:
      "خدمة FastAPI عامة لحفظ وتصنيف أدوات الذكاء الاصطناعي والعودة إليها، مع PostgreSQL والترحيلات والمصادقة والصلاحيات وتحديد معدل الطلبات.",
    confidential: "مشروع عميل مدفوع · قيد التطوير",
    clientTitle: "منتج موبايل سري",
    clientDesc:
      "مسؤول بشكل مستقل عن تصميم المنتج، تطوير Flutter، دمج AI محلي، تجهيز المشتريات، الاختبار وخطة الإطلاق.",
    capabilitiesEyebrow: "القدرات",
    capabilitiesTitle: "مطور واحد عبر مسار المنتج.",
    capabilities: [
      [
        "منتجات الموبايل",
        "تطبيقات Android وiOS بواجهات متجاوبة، بيانات محلية وإدارة حالة مدروسة.",
      ],
      [
        "Backend وAPIs",
        "خدمات FastAPI، قواعد بيانات علائقية، مصادقة وصلاحيات وواجهات REST واضحة.",
      ],
      [
        "أدوات الأتمتة",
        "سكريبتات Python وبوتات Telegram للملفات والوسائط والاستيراد والتصدير.",
      ],
      [
        "الدعم والنشر",
        "WordPress وWooCommerce وإعداد VPS والحاويات والـProxy وحل المشكلات.",
      ],
    ],
    toolbox: "صندوق الأدوات الهندسي",
    core: "أساسي · مثبت بمشاريع حقيقية",
    working: "معرفة عملية",
    learning: "أطوّرها حالياً",
    journeyEyebrow: "الرحلة",
    journeyTitle: "تطور مبني خطوة بخطوة.",
    timeline: [
      ["2020", "Python والشبكات", "بدأت بالأتمتة وأدوات الوسائط والشبكات."],
      [
        "2022",
        "الأنظمة الخلفية",
        "انتقلت إلى FastAPI وREST APIs والبيانات العلائقية.",
      ],
      [
        "2023",
        "تطبيقات متعددة المنصات",
        "تعلمت Dart وFlutter من خلال منتجات مستقلة.",
      ],
      [
        "2024",
        "أول منتج منشور",
        "نشرت زاد المسلم وبدأت برنامج IT Assistant في OSZ IMT.",
      ],
      [
        "2026",
        "أول مشروع عميل مدفوع",
        "أتولى تصميم وتنفيذ تطبيق Flutter تجاري.",
      ],
      [
        "2027",
        "الخطوة التالية",
        "أبحث عن تدريب إلزامي في البرمجة أو الشبكات أو IoT في برلين.",
      ],
    ],
    processEyebrow: "طريقة عملي",
    processTitle: "النتيجة أولاً. ودليل في كل مرحلة.",
    process: [
      "تحديد النتيجة",
      "صياغة MVP",
      "تخطيط التدفقات والبنية",
      "التوثيق أثناء البناء",
      "اختبار على أجهزة حقيقية",
      "إطلاق، متابعة، تحسين",
    ],
    education: "التعليم والشهادات",
    osz: "IT Assistant · OSZ IMT",
    oszDate: "برلين · 2024—2027",
    cisco: "Cisco Networking Academy",
    cert: "IT Essentials · شهادة وBadge",
    modules:
      "إنجازات وحدات: Basic Cisco Configuration، System Safeguards، Threat Analysis، Cybersecurity Administration.",
    aboutEyebrow: "عني",
    aboutTitle: "فضول يدفعني. وانضباط يوجّهني.",
    about:
      "أنا مطور تعلمت ذاتياً وطالب IT في برلين. لا يحفزني الكود لذاته، بل تحويل الأفكار المفيدة إلى برمجيات يستخدمها الناس فعلاً. أقدّر التخطيط الواضح والتجارب المدروسة والتحسين المستمر بعد الإطلاق.",
    personal:
      "بعيداً عن البرمجة، أستعيد توازني بالقراءة والسباحة والألعاب والوقت مع عائلتي.",
    languages: "العربية · لغة أم  /  الألمانية · B2  /  الإنجليزية · B1",
    contactEyebrow: "تواصل",
    contactTitle: "لديك فرصة أو منتج تريد بناءه؟",
    contactText:
      "أنا متاح للتدريب في برلين، Minijob تقني، فرص Junior المستقبلية ومشاريع حرة مختارة.",
    email: "راسلني",
    github: "GitHub",
    blog: "اقرأ مقالاتي",
    footer: "مصمم حول عمل حقيقي. مبني بعناية في برلين.",
  },
};

copy.de = {
  ...copy.en,
  nav: ["Projekte", "Kompetenzen", "Werdegang", "Über mich"],
  available:
    "Berlin · Offen für Praktikum, technischen Minijob & ausgewählte Freelance-Projekte",
  eyebrow: "Junior Software Engineer",
  title: "Ich entwickle Software von der Produktidee bis zum",
  titleAccent: "funktionierenden Release.",
  intro:
    "Mobile, Backend und Infrastruktur — verbunden durch klare Planung, wartbaren Code und den Blick auf die Menschen, die das Produkt nutzen.",
  contact: "Kontakt aufnehmen",
  work: "Projekte entdecken",
  cv: "Lebenslauf",
  since: "Softwareentwicklung seit 2020",
  workEyebrow: "Ausgewählte Projekte",
  workTitle: "Belege statt Behauptungen.",
  workIntro:
    "Produkte und Systeme, die zeigen, wie ich denke, entwickle, teste und verbessere.",
  capabilitiesEyebrow: "Kompetenzen",
  capabilitiesTitle: "Ein Entwickler entlang des Produktwegs.",
  journeyEyebrow: "Werdegang",
  journeyTitle: "Schritt für Schritt aufgebaut.",
  processEyebrow: "Arbeitsweise",
  processTitle: "Das Ergebnis zuerst. Belege in jedem Schritt.",
  education: "Ausbildung & Nachweise",
  aboutEyebrow: "Über mich",
  aboutTitle: "Neugierig im Denken. Diszipliniert im Handeln.",
  about:
    "Ich bin ein autodidaktischer Entwickler und IT-Schüler aus Berlin. Mich motiviert nicht Code um seiner selbst willen, sondern nützliche Ideen in Software zu verwandeln, die Menschen wirklich verwenden können.",
  personal:
    "Außerhalb der Software finde ich Ausgleich beim Lesen, Schwimmen, Spielen und mit meiner Familie.",
  languages: "Arabisch · Muttersprache  /  Deutsch · B2  /  Englisch · B1",
  contactEyebrow: "Kontakt",
  contactTitle: "Haben Sie eine Rolle oder ein Produkt im Kopf?",
  contactText:
    "Ich bin offen für Praktika in Berlin, technische Minijobs, zukünftige Junior-Stellen und ausgewählte Freelance-Projekte.",
  email: "E-Mail schreiben",
  github: "GitHub ansehen",
  blog: "Meine Artikel",
  footer: "Auf echter Arbeit aufgebaut. Mit Sorgfalt in Berlin entwickelt.",
};

const icons = [Smartphone, Server, Code2, Network];
const coreSkills = [
  "Flutter",
  "Dart",
  "Riverpod",
  "Isar",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "REST APIs",
  "Git",
];
const workingSkills = [
  "Docker",
  "MySQL",
  "Linux",
  "VPS",
  "WordPress",
  "WooCommerce",
  "Proxy Routing",
  "SIP / VoIP",
];
const learningSkills = ["HTML", "Web fundamentals"];

function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#edf4ef" : "#07110e");
  }, [theme]);
  const headerLinks =
    {
      en: [
        ["Home", "top"],
        ["Journey", "journey"],
        ["Focus", "capabilities"],
        ["Projects", "work"],
        ["About", "about"],
        ["Skills", "toolbox"],
        ["Certificates", "education"],
        ["Contact", "contact"],
      ],
      ar: [
        ["الرئيسية", "top"],
        ["الرحلة", "journey"],
        ["التخصصات", "capabilities"],
        ["المشاريع", "work"],
        ["عني", "about"],
        ["المهارات", "toolbox"],
        ["الشهادات", "education"],
        ["تواصل", "contact"],
      ],
      de: [
        ["Start", "top"],
        ["Werdegang", "journey"],
        ["Fokus", "capabilities"],
        ["Projekte", "work"],
        ["Über mich", "about"],
        ["Skills", "toolbox"],
        ["Nachweise", "education"],
        ["Kontakt", "contact"],
      ],
    }[lang] || [];
  return (
    <header className="site-header">
      <a className="header-name" href="#top" aria-label="Adnan Nasr home">
        Adnan Nasr
      </a>
      <nav
        className={open ? "nav-links open" : "nav-links"}
        aria-label="Primary navigation"
      >
        {headerLinks.map(([label, id], i) => (
          <a
            className={i === 0 ? "active" : ""}
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <label className="language-pill">
          <Globe2 size={16} />
          <select
            aria-label="Language"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="de">DE</option>
          </select>
        </label>
        <button
          className="header-icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <a
          className="header-icon"
          href="https://github.com/AdnanNasr"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

const SectionHead = ({ eyebrow, title, intro }) => (
  <div className="section-head">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {intro && <p>{intro}</p>}
  </div>
);

function ContactForm({ lang }) {
  const labels =
    {
      en: [
        "Name",
        "Email",
        "Tell me about the role or project",
        "Send message",
        "Message sent. I will reply soon.",
        "Please complete all fields with a valid email.",
      ],
      ar: [
        "الاسم",
        "البريد الإلكتروني",
        "أخبرني عن الفرصة أو المشروع",
        "إرسال الرسالة",
        "تم إرسال رسالتك. سأرد قريباً.",
        "يرجى إكمال جميع الحقول ببريد صحيح.",
      ],
      de: [
        "Name",
        "E-Mail",
        "Erzählen Sie mir von der Stelle oder dem Projekt",
        "Nachricht senden",
        "Nachricht gesendet. Ich antworte bald.",
        "Bitte füllen Sie alle Felder mit einer gültigen E-Mail aus.",
      ],
    }[lang] || [];
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [state, setState] = useState("idle");
  const submit = async (event) => {
    event.preventDefault();
    if (form.website) return;
    if (
      !form.name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
      form.message.trim().length < 10
    )
      return setState("invalid");
    setState("sending");
    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: form.website,
        }),
      });
      if (!response.ok) throw new Error("Contact request failed");
      setState("sent");
    } catch {
      setState("error");
    }
  };
  if (state === "sent")
    return (
      <div className="form-success">
        <Check size={22} />
        {labels[4]}
      </div>
    );
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <input
        aria-label={labels[0]}
        placeholder={labels[0]}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        aria-label={labels[1]}
        type="email"
        placeholder={labels[1]}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        aria-label={labels[2]}
        placeholder={labels[2]}
        rows="5"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <input
        className="honeypot"
        tabIndex="-1"
        autoComplete="off"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        aria-hidden="true"
      />
      {(state === "invalid" || state === "error") && (
        <p className="form-error">
          {state === "invalid"
            ? labels[5]
            : "Please email me directly if the form remains unavailable."}
        </p>
      )}
      <button className="button primary" disabled={state === "sending"}>
        {state === "sending" ? "…" : labels[3]}
        <ArrowUpRight size={16} />
      </button>
    </form>
  );
}

function Pipeline() {
  return (
    <div className="pipeline" aria-label="Product delivery pipeline">
      <div className="pipeline-orbit orbit-one" />
      <div className="pipeline-orbit orbit-two" />
      <div className="pipeline-core">
        <span>AN</span>
        <small>BUILD SYSTEM</small>
      </div>
      {[
        ["IDEA", Sparkles],
        ["MOBILE", Smartphone],
        ["API", Server],
        ["DATA", Database],
        ["SHIP", Boxes],
      ].map(([name, Icon], i) => (
        <div key={name} className={`pipeline-node node-${i}`}>
          <Icon size={18} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const { locale } = useParams();
  const navigate = useNavigate();
  const { lang, setLang } = useLanguage();
  const active = ["en", "ar", "de"].includes(locale) ? locale : lang;
  const t = copy[active] || copy.en;

  useEffect(() => {
    if (!locale) navigate(`/${lang}`, { replace: true });
    else if (locale !== lang && ["en", "ar", "de"].includes(locale))
      setLang(locale);
  }, [locale, lang, navigate, setLang]);
  const changeLanguage = (value) => {
    setLang(value);
    navigate(`/${value}`);
  };

  return (
    <div className="portfolio-shell" id="top">
      <div className="noise" aria-hidden="true" />
      <Header t={t} lang={active} setLang={changeLanguage} />
      <main>
        <section className="hero section">
          <div className="hero-copy">
            <div className="availability">
              <span />
              <MapPin size={14} />
              {t.available}
            </div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              {t.title}
              <br />
              <em>{t.titleAccent}</em>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                {t.contact}
                <ArrowUpRight size={17} />
              </a>
              <a className="button ghost" href="#work">
                {t.work}
                <ChevronRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <span className="status-dot" />
                {t.since}
              </span>
              <a href="/adnan-nasr-cv.pdf" download>
                <Download size={15} />
                {t.cv}
              </a>
            </div>
          </div>
          <Pipeline />
        </section>

        <section className="proof" aria-label="Verified highlights">
          {t.proof.map(([num, label]) => (
            <div key={label}>
              <strong>{num}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section" id="work">
          <SectionHead
            eyebrow={t.workEyebrow}
            title={t.workTitle}
            intro={t.workIntro}
          />
          <article className="project featured-project">
            <div className="project-copy">
              <span className="project-label">
                <Check size={14} />
                {t.featured}
              </span>
              <h3>{t.zadTitle}</h3>
              <p>{t.zadDesc}</p>
              <ul>
                {t.zadFacts.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.zad_al_muslim.adnan"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.store}
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://github.com/AdnanNasr/Zad_Al-Muslim"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
            <div className="phone-stage">
              <div className="phone promo-mockup">
                <img
                  src="/imgs/zad-promo.png"
                  alt="Zad Al-Muslim application overview"
                />
              </div>
              <span className="release-badge">
                RELEASE
                <br />
                <b>05</b>
              </span>
            </div>
          </article>
          <div className="project-grid">
            <article className="project compact">
              <span className="project-label">{t.backend}</span>
              <Server />
              <h3>{t.aiTitle}</h3>
              <p>{t.aiDesc}</p>
              <a
                href="https://github.com/AdnanNasr/ai_backend_api"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                Public repository
              </a>
            </article>
            <article className="project compact confidential">
              <span className="project-label">{t.confidential}</span>
              <Layers3 />
              <h3>{t.clientTitle}</h3>
              <p>{t.clientDesc}</p>
              <span className="privacy">
                <span />
                NDA-minded presentation
              </span>
            </article>
          </div>
        </section>

        <section className="section" id="capabilities">
          <SectionHead
            eyebrow={t.capabilitiesEyebrow}
            title={t.capabilitiesTitle}
          />
          <div className="capability-grid">
            {t.capabilities.map(([title, desc], i) => {
              const Icon = icons[i];
              return (
                <article key={title}>
                  <span className="index">0{i + 1}</span>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              );
            })}
          </div>
          <div className="toolbox" id="toolbox">
            <div>
              <p className="eyebrow">{t.toolbox}</p>
              <h3>{t.core}</h3>
              <div className="skill-list core">
                {coreSkills.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
            <div className="skill-columns">
              <div>
                <h4>{t.working}</h4>
                <div className="skill-list">
                  {workingSkills.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4>{t.learning}</h4>
                <div className="skill-list learning">
                  {learningSkills.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section split-section" id="journey">
          <div>
            <SectionHead eyebrow={t.journeyEyebrow} title={t.journeyTitle} />
            <div className="timeline">
              {t.timeline.map(([year, title, desc]) => (
                <article key={year + title}>
                  <time>{year}</time>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="process-card">
            <p className="eyebrow">{t.processEyebrow}</p>
            <h2>{t.processTitle}</h2>
            <ol>
              {t.process.map((x, i) => (
                <li key={x}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {x}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section education-section" id="education">
          <SectionHead eyebrow="OSZ IMT · CISCO NETACAD" title={t.education} />
          <div className="education-grid">
            <article>
              <GraduationCap />
              <div>
                <h3>{t.osz}</h3>
                <p>{t.oszDate}</p>
                <span>Three-year school-based vocational program</span>
              </div>
            </article>
            <article>
              <Network />
              <div>
                <h3>{t.cisco}</h3>
                <p>{t.cert}</p>
                <span>{t.modules}</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-mark">
            AN<span>.</span>
          </div>
          <div>
            <SectionHead eyebrow={t.aboutEyebrow} title={t.aboutTitle} />
            <p className="about-lead">{t.about}</p>
            <p>{t.personal}</p>
            <div className="language-line">
              <Globe2 size={18} />
              {t.languages}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="contact-actions">
              <a className="button ghost" href="mailto:adnannasr5319@gmail.com">
                <Mail size={17} />
                {t.email}
              </a>
              <a
                className="button ghost"
                href="https://github.com/AdnanNasr"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                {t.github}
              </a>
              <a
                className="button ghost"
                href="https://ghad-ebdai.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BookOpen size={17} />
                {t.blog}
              </a>
            </div>
          </div>
          <ContactForm lang={active} />
        </section>
      </main>
      <footer>
        <a className="monogram" href="#top">
          AN<span>.</span>
        </a>
        <p>{t.footer}</p>
        <p>© {new Date().getFullYear()} Adnan Nasr</p>
      </footer>
    </div>
  );
}
