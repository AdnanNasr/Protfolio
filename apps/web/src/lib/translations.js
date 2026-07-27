/**
 * Central translation dictionary for the portfolio.
 * Technology / tool names (Flutter, Python, Docker, etc.) are intentionally
 * kept identical in both languages — do not translate or transliterate them.
 */
export const translations = {
    en: {
        nav: {
            about: 'About',
            tech: 'Tech Stack',
            projects: 'Projects',
            contact: 'Contact',
            downloadCv: 'Download CV',
        },
        hero: {
            badge: 'Available for freelance & collaboration',
            greeting: "Hi, I'm",
            name: 'Adnan Nasr',
            roles: [
                'Full-Stack Developer',
                'Mobile & Backend Specialist',
                'Flutter Craftsman',
                'FastAPI Architect',
            ],
            summary:
                'I build robust, end-to-end applications—crafting seamless mobile experiences with Flutter, designing high-performance backends with FastAPI, and orchestrating server infrastructures.',
            ctaPrimary: 'View My Work',
            ctaSecondary: "Let's Connect",
        },
        tech: {
            eyebrow: 'Tech Stack',
            title: 'Tools I use to ship end-to-end',
            subtitle: 'A pragmatic toolkit spanning mobile, backend, data, and infrastructure.',
            groups: {
                mobile: 'Mobile Development',
                backend: 'Backend & Automation',
                databases: 'Databases',
                devops: 'DevOps & Cloud',
                tools: 'Testing & Tools',
            },
        },
        projects: {
            eyebrow: 'Projects',
            title: "Selected work & what's next",
            subtitle: 'A featured shipped product, with more in the pipeline.',
            featured: 'Featured',
            github: 'GitHub Codebase',
            googlePlay: 'Get it on Google Play',
            upcoming: 'Upcoming Release',
            placeholderTitle: 'Project Under Development',
            placeholderDesc: 'Something new is being crafted. Check back soon.',
            zad: {
                title: 'Zad Al-Muslim (زاد المسلم)',
                description:
                    'A comprehensive, high-performance, ad-free Islamic application built with Flutter & Dart following Clean Architecture and Riverpod. Features precise offline prayer times, Qibla compass, a complete Sahih al-Bukhari database, daily Azkar, and an advanced audio player with background playback and download manager.',
            },
            tafseer: {
                title: 'Zad Al-Muslim — Tafseer Backend',
                description:
                    'A lightweight FastAPI backend server for Quran Tafseer, used by the Noor Al-Bayan application. Serves pre-generated Tafseer JSON files with two endpoints — one to fetch a specific Tafseer file and one to list all available files with download URLs — plus a helper script that syncs data from the AlQuran API. Containerized with Docker for easy deployment.',
            },
            aiTools: {
                title: 'AI Tools API',
                description:
                    'A RESTful API built with FastAPI for discovering, categorizing, and managing AI tools. Supports full CRUD on tools and categories, user favorites/bookmarks, and Alembic-managed database migrations.',
            },
            ghadEbdai: {
                title: 'Ghad Ebdai Media Bot',
                description:
                    'An open-source Telegram bot built with Python that downloads, extracts, and processes multimedia from YouTube and hundreds of yt-dlp-supported sites. Supports video downloads, audio extraction, thumbnail and subtitle retrieval, AI-powered speech transcription via AssemblyAI with automatic language detection, and channel-subscription gating.',
            },
        },
        contact: {
            eyebrow: 'Contact',
            title: "Let's build something great",
            subtitle: "Have a project, a role, or an idea in mind? Drop me a message and I'll get back to you.",
            socials: {
                website: 'Website',
                email: 'Email',
                github: 'GitHub',
            },
            form: {
                name: 'Name',
                namePlaceholder: 'Your name',
                email: 'Email',
                emailPlaceholder: 'you@example.com',
                message: 'Message',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message',
                sending: 'Sending...',
                thanks: 'Thanks',
                friend: 'friend',
                successMsg: "Your message has been sent. I'll get back to you soon. You can also reach me at",
                errorMsg: 'Something went wrong sending your message. Please try again or email me directly.',
                errors: {
                    name: 'Please enter your name.',
                    email: 'Enter a valid email address.',
                    message: 'Message must be at least 10 characters.',
                },
            },
        },
        footer: {
            rights: 'All rights reserved.',
        },
    },
    ar: {
        nav: {
            about: 'نبذة',
            tech: 'المهارات التقنية',
            projects: 'المشاريع',
            contact: 'تواصل',
            downloadCv: 'تحميل السيرة الذاتية',
        },
        hero: {
            badge: 'متاح للعمل الحر والتعاون',
            greeting: 'مرحباً، أنا',
            name: 'عدنان نصر',
            roles: [
                'مطوّر Full-Stack',
                'متخصص Mobile & Backend',
                'حِرَفي Flutter',
                'مُهندس FastAPI',
            ],
            summary:
                'أبني تطبيقات متكاملة وقوية—أصمم تجارب موبايل سلسة باستخدام Flutter، وأطوّر واجهات خلفية عالية الأداء باستخدام FastAPI، وأدير البنية التحتية للخوادم.',
            ctaPrimary: 'شاهد أعمالي',
            ctaSecondary: 'لنتواصل',
        },
        tech: {
            eyebrow: 'المهارات التقنية',
            title: 'الأدوات التي أستخدمها لتسليم المشاريع كاملة',
            subtitle: 'مجموعة أدوات عملية تمتد بين الموبايل، الباك إند، البيانات، والبنية التحتية.',
            groups: {
                mobile: 'تطوير الموبايل',
                backend: 'الباك إند والأتمتة',
                databases: 'قواعد البيانات',
                devops: 'DevOps والحوسبة السحابية',
                tools: 'الاختبار والأدوات',
            },
        },
        projects: {
            eyebrow: 'المشاريع',
            title: 'أعمال مختارة وما هو قادم',
            subtitle: 'منتج مميز تم إطلاقه، مع المزيد قيد التطوير.',
            featured: 'مميز',
            github: 'الكود على GitHub',
            googlePlay: 'احصل عليه من Google Play',
            upcoming: 'إصدار قادم',
            placeholderTitle: 'مشروع قيد التطوير',
            placeholderDesc: 'شيء جديد قيد الإعداد. تابعونا قريباً.',
            zad: {
                title: 'زاد المسلم (Zad Al-Muslim)',
                description:
                    'تطبيق إسلامي شامل وعالي الأداء وخالٍ من الإعلانات، مبني باستخدام Flutter و Dart باتباع منهجية Clean Architecture و Riverpod. يتضمن مواقيت صلاة دقيقة تعمل دون إنترنت، واتجاه القبلة، وقاعدة بيانات كاملة لصحيح البخاري، وأذكار يومية، ومشغل صوتي متقدم مع التشغيل في الخلفية ومدير تحميل.',
            },
            tafseer: {
                title: 'زاد المسلم — Tafseer Backend',
                description:
                    'خادم خلفي خفيف مبني بـ FastAPI لتفسير القرآن، يُستخدم في تطبيق نور البيان. يقدّم ملفات JSON مُعدّة مسبقاً عبر نقطتي وصول — واحدة لجلب ملف تفسير محدد وأخرى لعرض جميع الملفات المتاحة مع روابط تحميلها — إضافة إلى سكريبت مساعد لمزامنة البيانات من AlQuran API. مُحزَّم بواسطة Docker لتسهيل النشر.',
            },
            aiTools: {
                title: 'واجهة أدوات الذكاء الاصطناعي',
                description:
                    'واجهة برمجية RESTful مبنية بـ FastAPI لاكتشاف وتصنيف وإدارة أدوات الذكاء الاصطناعي. تدعم عمليات CRUD كاملة للأدوات والتصنيفات، والمفضلة لدى المستخدمين، وإدارة قاعدة البيانات عبر Alembic.',
            },
            ghadEbdai: {
                title: 'بوت غد إبداعي للوسائط',
                description:
                    'بوت تيليجرام مفتوح المصدر مبني بلغة Python لتحميل واستخراج ومعالجة الوسائط من يوتيوب ومئات المواقع التي يدعمها yt-dlp. يدعم تحميل الفيديو، استخراج الصوت، جلب الصورة المصغرة والترجمة، وتحويل الكلام إلى نص بالذكاء الاصطناعي عبر AssemblyAI مع كشف تلقائي للغة، بالإضافة إلى التحقق من الاشتراك في القناة.',
            },
        },
        contact: {
            eyebrow: 'تواصل',
            title: 'لنبني شيئاً عظيماً معاً',
            subtitle: 'لديك مشروع أو وظيفة أو فكرة في بالك؟ أرسل لي رسالة وسأرد عليك.',
            socials: {
                website: 'الموقع الإلكتروني',
                email: 'البريد الإلكتروني',
                github: 'GitHub',
            },
            form: {
                name: 'الاسم',
                namePlaceholder: 'اسمك',
                email: 'البريد الإلكتروني',
                emailPlaceholder: 'you@example.com',
                message: 'الرسالة',
                messagePlaceholder: 'أخبرني عن مشروعك...',
                send: 'إرسال الرسالة',
                sending: 'جاري الإرسال...',
                thanks: 'شكراً',
                friend: 'صديقي',
                successMsg: 'تم إرسال رسالتك. سأرد عليك قريباً. يمكنك أيضاً التواصل معي عبر',
                errorMsg: 'حدث خطأ ما أثناء إرسال رسالتك. حاول مرة أخرى أو راسلني مباشرة.',
                errors: {
                    name: 'يرجى إدخال اسمك.',
                    email: 'أدخل بريداً إلكترونياً صالحاً.',
                    message: 'يجب أن تحتوي الرسالة على 10 أحرف على الأقل.',
                },
            },
        },
        footer: {
            rights: 'جميع الحقوق محفوظة.',
        },
    },
};
