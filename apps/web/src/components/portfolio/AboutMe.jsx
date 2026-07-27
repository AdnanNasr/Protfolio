import { useLanguage } from "@/lib/LanguageContext";
const ABOUT_IMAGE = "/imgs/photo.png";

const Highlight = ({ children }) => (
  <span className="font-semibold text-cyan-300">{children}</span>
);

const AboutMe = () => {
  const { lang, toggleLang, t } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {isRTL ? "نبذة عني" : "About Me"}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {isRTL ? "نبذة عني" : "About Me"}
        </h2>
      </div>

      <div className="mt-12 flex flex-col items-center gap-10 md:flex-row">
        {/* Image */}
        <div className="shrink-0">
          <div className="h-64 w-64 overflow-hidden rounded-full ring-4 ring-cyan-400/30 sm:h-80 sm:w-80">
            <img
              src={ABOUT_IMAGE}
              alt="Adnan Nasr"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className={isRTL ? "text-right" : "text-left"}>
          <p className="text-lg font-semibold text-cyan-300">
            {isRTL ? "مرحباً! أنا عدنان" : "Hi! I'm Adnan"}
          </p>

          {isRTL ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              أنا مطور <Highlight>Full-Stack</Highlight> متخصص في تطوير تطبيقات
              الهاتف والأنظمة الخلفية، وأهتم ببناء حلول برمجية سريعة، آمنة،
              وسهلة التوسع. أعمل باستخدام <Highlight>Flutter</Highlight> و
              <Highlight>Dart</Highlight> لتطوير التطبيقات، و
              <Highlight>Python</Highlight> و<Highlight>FastAPI</Highlight>{" "}
              لبناء الأنظمة الخلفية وواجهات البرمجة، مع خبرة في إدارة قواعد
              البيانات ونشر المشاريع باستخدام <Highlight>Docker</Highlight>.
              <br />
              <br />
              أؤمن بأهمية كتابة كود نظيف ومنظم، وأستمتع ببناء حلول عملية تساعد
              على تبسيط العمل وتحسين تجربة المستخدم. كما أشارك خبرتي من خلال
              موقعي وقناتي التعليمية، حيث أشرح المفاهيم التقنية وأبسطها
              للمبتدئين والمحترفين.
            </p>
          ) : (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I'm a <Highlight>Full-Stack Developer</Highlight> specializing in
              mobile applications and backend development. I enjoy building
              secure, scalable, and high-performance software using{" "}
              <Highlight>Flutter</Highlight> and <Highlight>Dart</Highlight> for
              mobile apps, and <Highlight>Python</Highlight> with{" "}
              <Highlight>FastAPI</Highlight> for backend systems and APIs. I
              also have experience with databases, <Highlight>Docker</Highlight>
              , and modern deployment workflows.
              <br />
              <br />I believe in writing clean, maintainable code and creating
              practical solutions that deliver a great user experience. Beyond
              development, I share technical knowledge through my website and
              educational channel.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
