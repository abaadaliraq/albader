"use client";

import Link from "next/link";
import type { Lang } from "@/components/Sidebar";
import VisionRouteGallery from "@/components/VisionRouteGallery";
import { useStoredLang } from "@/hooks/useStoredLang";

const pillarImages = [
  "/images/vision/reception.jpg",
  "/images/vision/cultural-routes.jpg",
  "/images/vision/economic-impact.jpg",
  "/images/vision/digital-services.jpg",
] as const;

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    label: "02 / تفاصيل الرؤية",
    title: "الرؤية الاستراتيجية",
    intro:
      "رؤية تشغيلية تربط استقبال الوفود بالمسارات الثقافية والخدمات الرقمية والأثر الاقتصادي، ضمن تجربة عراقية منظمة وقابلة للتوسع.",
    langLabel: "اللغة",
    routeTitle: "خارطة المسارات الثقافية",
    routeSubtitle:
      "لا تعتمد الرؤية على مسار واحد، بل على شبكة وجهات عراقية يمكن تفعيلها حسب مدة الزيارة ونوع الوفد وأهدافه.",
    pillars: [
      {
        title: "استقبال وإدارة الوفود",
        points: [
          "استقبال VIP في المطار",
          "تنسيق الإقامة والنقل",
          "بروتوكول وترجمة",
          "جدول حركة واضح وآمن",
        ],
      },
      {
        title: "المسارات الثقافية والتراثية",
        points: [
          "بغداد التاريخية",
          "بيت التحفيات كوجهة تراثية وثقافية فقط",
          "الزقورة وأور والأهوار",
          "أربيل ودهوك والسليمانية",
        ],
      },
      {
        title: "الأثر الاقتصادي والثقافي",
        points: [
          "تنشيط الفنادق والنقل",
          "دعم الأسواق والحرف",
          "فتح فرص تعاون",
          "تعزيز صورة العراق كوجهة منفتحة",
        ],
      },
      {
        title: "الخدمات الإلكترونية المساندة",
        points: [
          "منصة تعريفية بالمسارات",
          "حجز وتنظيم الوفود",
          "خرائط وQR ودليل رقمي",
          "لوحة تحكم للجدول والحركة",
        ],
      },
    ],
    groups: [
      {
        title: "بغداد التاريخية والثقافية",
        destinations: [
          "المتحف العراقي",
          "شارع المتنبي",
          "القشلة",
          "المدرسة المستنصرية",
          "القصر العباسي",
          "سوق الصفافير",
          "بيت التحفيات كوجهة تراثية وثقافية",
        ],
        description:
          "مسار يعرض بغداد كمدينة معرفة وكتب وأسواق وعمارة عباسية وتراث بغدادي حي.",
      },
      {
        title: "بغداد الدينية والمعمارية",
        destinations: [
          "الكاظمية",
          "جامع أم الطبول",
          "الجوامع التاريخية",
          "العمارة الإسلامية في بغداد",
        ],
        description:
          "مسار مناسب للوفود المهتمة بالعمارة الإسلامية والرموز الدينية والتاريخ الحضري.",
      },
      {
        title: "محيط بغداد والآثار الكبرى",
        destinations: ["طاق كسرى", "المواقع الأثرية القريبة من بغداد"],
        description:
          "مسار قصير خارج العاصمة يضيف بعداً تاريخياً مهماً للبرنامج.",
      },
      {
        title: "الجنوب الحضاري والديني",
        destinations: [
          "أور",
          "الزقورة",
          "الأهوار",
          "البصرة",
          "كربلاء",
          "النجف",
          "الأضرحة والمراقد الدينية",
        ],
        description:
          "مسار يجمع بين جذور الحضارة الرافدينية، الطبيعة، والمكانة الدينية.",
      },
      {
        title: "الموصل والتراث الشمالي",
        destinations: [
          "منارة الحدباء",
          "جامع النوري",
          "الجوامع والكنائس التاريخية",
          "الأسواق القديمة",
        ],
        description:
          "مسار يبرز التنوع الديني والمعماري والتراثي في شمال العراق.",
      },
      {
        title: "كردستان العراق",
        destinations: [
          "أربيل",
          "دهوك",
          "السليمانية",
          "الطبيعة الجبلية",
          "الأسواق والمراكز الثقافية",
        ],
        description:
          "مسار يضيف بعد الطبيعة والهدوء والضيافة الجبلية إلى تجربة الوفد.",
      },
    ],
  },
  en: {
    dir: "ltr",
    back: "Back to Home",
    label: "02 / Vision Details",
    title: "Strategic Vision",
    intro:
      "An operational vision connecting delegation reception with cultural routes, digital services, and economic impact through a structured Iraqi experience.",
    langLabel: "Language",
    routeTitle: "Cultural Route Map",
    routeSubtitle:
      "The vision is not based on one route, but on a network of Iraqi destinations that can be activated according to visit duration, delegation type, and objectives.",
    pillars: [
      {
        title: "Delegation Reception & Management",
        points: [
          "VIP airport reception",
          "Hotel and transport coordination",
          "Protocol and translation",
          "Clear and secure movement schedule",
        ],
      },
      {
        title: "Cultural & Heritage Routes",
        points: [
          "Historic Baghdad",
          "House of Antiques as a cultural heritage destination only",
          "Ziggurat, Ur, and the Marshes",
          "Erbil, Duhok, and Sulaymaniyah",
        ],
      },
      {
        title: "Cultural & Economic Impact",
        points: [
          "Activating hotels and transport",
          "Supporting markets and crafts",
          "Opening cooperation opportunities",
          "Positioning Iraq as an open destination",
        ],
      },
      {
        title: "Supporting Digital Services",
        points: [
          "Route presentation platform",
          "Delegation booking and organization",
          "Maps, QR, and digital guide",
          "Dashboard for schedule and movement",
        ],
      },
    ],
    groups: [
      {
        title: "Historic & Cultural Baghdad",
        destinations: [
          "Iraq Museum",
          "Al-Mutanabbi Street",
          "Al-Qishla",
          "Al-Mustansiriya School",
          "Abbasid Palace",
          "Copper Market",
          "House of Antiques as a cultural heritage destination",
        ],
        description:
          "A route presenting Baghdad as a city of knowledge, books, markets, Abbasid architecture, and living heritage.",
      },
      {
        title: "Religious & Architectural Baghdad",
        destinations: [
          "Al-Kadhimiya",
          "Umm Al-Taboul Mosque",
          "Historic mosques",
          "Islamic architecture in Baghdad",
        ],
        description:
          "A route suitable for delegations interested in Islamic architecture, religious symbols, and urban history.",
      },
      {
        title: "Greater Baghdad & Major Antiquities",
        destinations: ["Taq Kasra", "Archaeological sites near Baghdad"],
        description:
          "A short route outside the capital that adds an important historical dimension to the program.",
      },
      {
        title: "Civilizational & Religious South",
        destinations: [
          "Ur",
          "Ziggurat",
          "Marshes",
          "Basra",
          "Karbala",
          "Najaf",
          "Shrines and religious landmarks",
        ],
        description:
          "A route combining Mesopotamian roots, nature, and religious significance.",
      },
      {
        title: "Mosul & Northern Heritage",
        destinations: [
          "Al-Hadba Minaret",
          "Al-Nuri Mosque",
          "Historic mosques and churches",
          "Old markets",
        ],
        description:
          "A route highlighting religious, architectural, and cultural diversity in northern Iraq.",
      },
      {
        title: "Iraqi Kurdistan",
        destinations: [
          "Erbil",
          "Duhok",
          "Sulaymaniyah",
          "Mountain landscapes",
          "Markets and cultural centers",
        ],
        description:
          "A route adding nature, calmness, and mountain hospitality to the delegation experience.",
      },
    ],
  },
  zh: {
    dir: "ltr",
    back: "返回首页",
    label: "02 / 愿景详情",
    title: "战略愿景",
    intro:
      "一套运营愿景，将代表团接待、文化路线、数字服务与经济影响连接成结构化的伊拉克体验。",
    langLabel: "语言",
    routeTitle: "文化路线地图",
    routeSubtitle:
      "该愿景并非依赖单一路线，而是基于可根据访问时间、代表团类型和目标灵活启用的伊拉克目的地网络。",
    pillars: [
      {
        title: "代表团接待与管理",
        points: ["机场贵宾接待", "酒店与交通协调", "礼宾与翻译", "清晰安全的行程安排"],
      },
      {
        title: "文化与遗产路线",
        points: [
          "历史巴格达",
          "古董之家仅作为文化遗产目的地",
          "神庙、乌尔与湿地",
          "埃尔比勒、杜胡克与苏莱曼尼亚",
        ],
      },
      {
        title: "文化与经济影响",
        points: [
          "带动酒店与交通",
          "支持市场与手工艺",
          "开启合作机会",
          "塑造开放目的地形象",
        ],
      },
      {
        title: "数字化支持服务",
        points: ["路线展示平台", "代表团预订与组织", "地图、二维码与数字指南", "日程与行程管理面板"],
      },
    ],
    groups: [
      {
        title: "历史与文化巴格达",
        destinations: [
          "伊拉克博物馆",
          "穆塔纳比街",
          "卡什拉",
          "穆斯坦西里亚学校",
          "阿拔斯宫",
          "铜器市场",
          "古董之家作为文化遗产目的地",
        ],
        description:
          "展示巴格达作为知识、书籍、市场、阿拔斯建筑与活态遗产之城的路线。",
      },
      {
        title: "宗教与建筑巴格达",
        destinations: ["卡迪米亚", "乌姆塔布尔清真寺", "历史清真寺", "巴格达伊斯兰建筑"],
        description:
          "适合关注伊斯兰建筑、宗教象征与城市历史的代表团路线。",
      },
      {
        title: "巴格达周边与重要遗址",
        destinations: ["泰西封拱门", "巴格达周边考古遗址"],
        description:
          "首都外短途路线，为项目增加重要历史维度。",
      },
      {
        title: "文明与宗教南部",
        destinations: ["乌尔", "神庙", "湿地", "巴士拉", "卡尔巴拉", "纳杰夫", "宗教圣地与地标"],
        description:
          "结合美索不达米亚文明根源、自然景观与宗教地位的路线。",
      },
      {
        title: "摩苏尔与北部遗产",
        destinations: ["哈德巴宣礼塔", "努里清真寺", "历史清真寺与教堂", "老市场"],
        description:
          "突出伊拉克北部宗教、建筑与文化多样性的路线。",
      },
      {
        title: "伊拉克库尔德斯坦",
        destinations: ["埃尔比勒", "杜胡克", "苏莱曼尼亚", "山地景观", "市场与文化中心"],
        description:
          "为代表团体验增添自然、宁静与山地接待特色的路线。",
      },
    ],
  },
} as const;

const langLinks: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export default function VisionPage() {
  const [lang, setLang] = useStoredLang();
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-[#fffaf6] text-[#201815]">
      <section
        className="relative min-h-[70vh] overflow-hidden px-5 py-8 text-white md:px-10 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg,rgba(32,24,21,0.76),rgba(181,18,27,0.46)),url('/images/vision/vision-hero.jpg'),linear-gradient(135deg,#201815,#b5121b 62%,#d9a441)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:86px_86px] opacity-20" />
        <div className="relative z-10 mx-auto flex min-h-[calc(70vh-4rem)] max-w-[1450px] flex-col justify-between">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="border border-white/25 bg-black/20 px-5 py-3 text-sm font-black backdrop-blur-md transition-all hover:bg-[#b5121b]">
              {t.back}
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
                {t.langLabel}
              </span>
              {langLinks.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLang(item.code)}
                  className={[
                    "px-4 py-2 text-xs font-black transition-all",
                    lang === item.code
                      ? "bg-white text-[#b5121b]"
                      : "border border-white/20 text-white/65 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </header>

          <div className="max-w-5xl pb-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#d9a441]">
              {t.label}
            </p>
            <h1 className="font-black uppercase leading-[0.86] tracking-normal text-white text-[16vw] md:text-[8vw] lg:text-[6vw]">
              {t.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-black leading-9 text-white/78 md:text-2xl md:leading-10">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 md:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:96px_96px]" />
        <div className="pointer-events-none absolute right-4 top-8 animate-watermark-drift text-[18vw] font-black text-[#b5121b]/[0.045]">
          中伊文化旅游桥梁
        </div>

        <div className="relative z-10 mx-auto max-w-[1450px] space-y-10">
          {t.pillars.map((pillar, index) => {
            const image = pillarImages[index];
            const reverse = index % 2 === 1;

            return (
              <article
                key={pillar.title}
                className="group grid gap-7 border-t border-[#201815]/14 py-10 transition-all duration-500 hover:-translate-y-1 lg:grid-cols-2 lg:items-center"
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div
                    className="relative min-h-[320px] overflow-hidden bg-[#201815] shadow-xl shadow-[#201815]/10 md:min-h-[420px]"
                    style={{
                      backgroundImage: `linear-gradient(120deg,rgba(181,18,27,0.32),rgba(32,24,21,0.22)),url('${image}'),linear-gradient(135deg,#b5121b,#201815 58%,#d9a441)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <span className="absolute left-5 top-5 h-12 w-12 border-l border-t border-white/60" />
                    <span className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-white/60" />
                    <div className="absolute inset-x-0 top-0 h-px bg-[#ff1d2d] opacity-0 shadow-[0_0_20px_rgba(255,29,45,0.75)] transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <p className="mb-4 text-8xl font-black leading-none text-[#b5121b]/12">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="mb-6 h-px w-32 bg-[#b5121b]" />
                  <h2 className="max-w-2xl text-3xl font-black leading-10 text-[#201815] md:text-5xl md:leading-tight">
                    {pillar.title}
                  </h2>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="border border-[#201815]/12 bg-white/45 px-4 py-3 text-sm font-bold leading-6 text-[#201815]/72"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf6] px-5 py-16 md:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:98px_98px]" />
        <div className="pointer-events-none absolute -right-4 top-10 animate-watermark-drift text-[20vw] font-black text-[#b5121b]/[0.045]">
          文化路线
        </div>

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.34em] text-[#b5121b]">
                02 / ROUTE MAP
              </p>
              <h2 className="text-5xl font-black leading-none text-[#201815] md:text-7xl">
                {t.routeTitle}
              </h2>
            </div>
            <p className="max-w-3xl border-t border-[#201815]/14 pt-6 text-lg font-black leading-8 text-[#201815]/72 md:text-2xl md:leading-10">
              {t.routeSubtitle}
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-[5%] right-[5%] top-1/2 hidden h-px overflow-hidden bg-[#201815]/14 lg:block">
              <div className="h-full animate-route-flow bg-gradient-to-r from-transparent via-[#b5121b] to-transparent" />
            </div>
            <span className="absolute left-[8%] top-1/2 hidden h-3 w-3 -translate-y-1/2 animate-pulse-dot rounded-full bg-[#b5121b] shadow-[0_0_18px_rgba(181,18,27,0.7)] lg:block" />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {t.groups.map((group, index) => (
                <article
                  key={group.title}
                  className="group relative border-t border-[#201815]/14 bg-[#fffaf6]/72 p-6 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute left-0 top-0 h-px w-16 bg-[#b5121b] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_18px_rgba(181,18,27,0.45)]" />
                  <p className="text-7xl font-black leading-none text-[#b5121b]/12">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-black leading-8 text-[#201815]">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm font-bold leading-7 text-[#201815]/65">
                    {group.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.destinations.map((destination) => (
                      <span
                        key={destination}
                        className="border border-[#201815]/12 bg-white/55 px-3 py-2 text-xs font-black text-[#201815]/66 transition-colors duration-300 group-hover:border-[#b5121b]/30 group-hover:bg-[#b5121b]/8"
                      >
                        {destination}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VisionRouteGallery lang={lang} />
    </main>
  );
}
