import Link from "next/link";
import type { Lang } from "@/components/Sidebar";

type VisionPageProps = {
  searchParams?: Promise<{
    lang?: string | string[];
  }>;
};

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    label: "02 / تفاصيل الرؤية",
    title: "الرؤية الاستراتيجية",
    intro:
      "منظومة استقبال وإدارة تربط الوفود بالمسارات الثقافية والخدمات الرقمية والتبادل الاقتصادي، ضمن تجربة عراقية منظمة ومختصرة بصرياً.",
    langLabel: "اللغة",
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
    destinations: [
      "بغداد",
      "الزقورة / أور",
      "الأهوار",
      "أربيل",
      "دهوك",
      "السليمانية",
      "بيت التحفيات كوجهة تراثية وثقافية فقط",
    ],
  },
  en: {
    dir: "ltr",
    back: "Back to Home",
    label: "02 / Vision Details",
    title: "Strategic Vision",
    intro:
      "A reception and management system connecting delegations with cultural routes, digital services, and economic exchange through a structured Iraqi experience.",
    langLabel: "Language",
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
    destinations: [
      "Baghdad",
      "Ziggurat / Ur",
      "Marshes",
      "Erbil",
      "Duhok",
      "Sulaymaniyah",
      "House of Antiques as a cultural heritage destination only",
    ],
  },
  zh: {
    dir: "ltr",
    back: "返回首页",
    label: "02 / 愿景详情",
    title: "战略愿景",
    intro:
      "一套接待与管理体系，将代表团与文化路线、数字服务和经济交流连接成有组织的伊拉克体验。",
    langLabel: "语言",
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
    destinations: [
      "巴格达",
      "神庙 / 乌尔",
      "湿地",
      "埃尔比勒",
      "杜胡克",
      "苏莱曼尼亚",
      "古董之家仅作为文化遗产目的地",
    ],
  },
} as const;

const destinationImages = [
  "/images/destinations/baghdad.jpg",
  "/images/destinations/ur.jpg",
  "/images/destinations/marshes.jpg",
  "/images/destinations/erbil.jpg",
  "/images/destinations/duhok.jpg",
  "/images/destinations/sulaymaniyah.jpg",
  "/images/destinations/house-of-antiques.jpg",
];

const langLinks: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

function normalizeLang(value: string | string[] | undefined): Lang {
  const next = Array.isArray(value) ? value[0] : value;
  return next === "en" || next === "zh" || next === "ar" ? next : "ar";
}

export default async function VisionPage({ searchParams }: VisionPageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params?.lang);
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-[#fffaf6] text-[#201815]">
      <section
        className="relative min-h-[72vh] overflow-hidden px-5 py-8 text-white md:px-10 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg,rgba(32,24,21,0.78),rgba(181,18,27,0.42)),url('/images/vision-hero.jpg'),linear-gradient(135deg,#201815,#b5121b 62%,#d9a441)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:86px_86px] opacity-20" />
        <div className="relative z-10 mx-auto flex min-h-[calc(72vh-4rem)] max-w-[1450px] flex-col justify-between">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="border border-white/25 bg-black/20 px-5 py-3 text-sm font-black backdrop-blur-md transition-all hover:bg-[#b5121b]">
              {t.back}
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
                {t.langLabel}
              </span>
              {langLinks.map((item) => (
                <Link
                  key={item.code}
                  href={`/vision?lang=${item.code}`}
                  className={[
                    "px-4 py-2 text-xs font-black transition-all",
                    lang === item.code
                      ? "bg-white text-[#b5121b]"
                      : "border border-white/20 text-white/65 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
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

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="grid gap-7 md:grid-cols-2">
            {t.pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group grid gap-6 border-t border-[#201815]/14 py-8 transition-all duration-500 hover:-translate-y-1 lg:grid-cols-[0.42fr_0.58fr]"
              >
                <div
                  className="min-h-48 bg-[#201815]/10"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,rgba(255,250,246,0.82),rgba(217,164,65,0.25)),linear-gradient(135deg,#fbf7f2,#fffaf6 58%,#d9a441)",
                  }}
                />
                <div>
                  <p className="mb-4 text-6xl font-black leading-none text-[#b5121b]/20">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl font-black leading-8 text-[#201815]">
                    {pillar.title}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm font-bold leading-7 text-[#201815]/70">
                        <span className="mt-3 h-px w-7 shrink-0 bg-[#d9a441]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 overflow-hidden border-y border-[#201815]/14 py-8">
            <div className="flex w-max animate-slide-marquee gap-5">
              {[
                ...t.destinations,
                ...t.destinations,
                ...t.destinations,
              ].map((name, index) => (
                <a
                  key={`${name}-${index}`}
                  href={destinationImages[index % destinationImages.length]}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[280px] shrink-0 transition-all duration-300 hover:-translate-y-1 md:w-[360px]"
                >
                  <div
                    className="h-48 bg-[#201815]"
                    style={{
                      backgroundImage: `url('${destinationImages[index % destinationImages.length]}'),linear-gradient(135deg,#b5121b,#201815 58%,#d9a441)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                  <p className="mt-4 text-lg font-black text-[#201815]">{name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
