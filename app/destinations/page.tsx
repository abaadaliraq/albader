"use client";

import Link from "next/link";
import type { Lang } from "@/components/Sidebar";
import { useStoredLang } from "@/hooks/useStoredLang";

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    label: "05 / الوجهات المقترحة",
    title: "الوجهات المقترحة",
    intro:
      "وجهات مختارة تعرض العراق كمسار ثقافي فاخر يجمع بين بغداد، الجنوب، وكردستان العراق.",
    langLabel: "اللغة",
    fitLabel: "مناسب للوفود لأنه",
    regions: [
      {
        name: "بغداد",
        summary: "قلب المسار الرسمي والثقافي، وفيها ذاكرة المدينة وأسواقها ومتاحفها.",
        points: ["هوية ثقافية واضحة", "مناسبة لبداية رسمية", "تنقلات قصيرة ومركزة"],
        items: [
          {
            name: "بغداد التاريخية",
            text: "المتحف العراقي، شارع المتنبي، القشلة، المدرسة المستنصرية، وسوق الصفافير.",
            image: "/images/destinations/baghdad.jpg",
          },
          {
            name: "بيت التحفيات",
            text: "وجهة تراثية وثقافية خاصة، وليست فندقاً أو مكان إقامة.",
            image: "/images/destinations/house-of-antiques.jpg",
          },
        ],
      },
      {
        name: "الجنوب",
        summary: "جذور الحضارة العراقية ومشهد الأهوار والبوابة الجنوبية.",
        points: ["رموز حضارية كبرى", "صور قوية للمواد الإعلامية", "طبيعة وثقافة محلية"],
        items: [
          {
            name: "أور والزقورة",
            text: "أحد أهم رموز الحضارة الرافدينية.",
            image: "/images/destinations/ur.jpg",
          },
          {
            name: "الأهوار",
            text: "مشهد طبيعي وثقافي فريد في جنوب العراق.",
            image: "/images/destinations/marshes.jpg",
          },
          {
            name: "البصرة",
            text: "بوابة العراق الجنوبية ومركز اقتصادي وثقافي مهم.",
            image: "/images/destinations/basra.jpg",
          },
        ],
      },
      {
        name: "كردستان",
        summary: "طبيعة جبلية ومدن تاريخية تمنح الوفد تجربة عراقية أوسع.",
        points: ["تنوع بصري وجغرافي", "مدن مناسبة للوفود الدولية", "طبيعة هادئة ومختلفة"],
        items: [
          {
            name: "أربيل",
            text: "مدينة تاريخية ووجهة مناسبة للوفود الدولية.",
            image: "/images/destinations/erbil.jpg",
          },
          {
            name: "دهوك",
            text: "طبيعة جبلية وتجربة هادئة للوفود.",
            image: "/images/destinations/duhok.jpg",
          },
          {
            name: "السليمانية",
            text: "مدينة ثقافية تجمع بين الطبيعة والهوية الكردية.",
            image: "/images/destinations/sulaymaniyah.jpg",
          },
        ],
      },
    ],
  },
  en: {
    dir: "ltr",
    back: "Back to Home",
    label: "05 / Proposed Destinations",
    title: "Proposed Destinations",
    intro:
      "Selected destinations presenting Iraq as a premium cultural route across Baghdad, the South, and Iraqi Kurdistan.",
    langLabel: "Language",
    fitLabel: "Suitable for delegations because",
    regions: [
      {
        name: "Baghdad",
        summary: "The official and cultural starting point with city memory, markets, and museums.",
        points: ["Clear cultural identity", "Strong official opening", "Short focused movement"],
        items: [
          {
            name: "Historic Baghdad",
            text: "Iraq Museum, Al-Mutanabbi Street, Al-Qishla, Al-Mustansiriya School, and Souq Al-Safafeer.",
            image: "/images/destinations/baghdad.jpg",
          },
          {
            name: "House of Antiques",
            text: "A private cultural heritage destination, not a hotel or accommodation.",
            image: "/images/destinations/house-of-antiques.jpg",
          },
        ],
      },
      {
        name: "South",
        summary: "Iraq's civilizational roots, marshland views, and southern gateway.",
        points: ["Major civilizational icons", "Strong media visuals", "Local nature and culture"],
        items: [
          {
            name: "Ur & Ziggurat",
            text: "One of the most important symbols of Mesopotamian civilization.",
            image: "/images/destinations/ur.jpg",
          },
          {
            name: "Marshes",
            text: "A unique natural and cultural landscape in southern Iraq.",
            image: "/images/destinations/marshes.jpg",
          },
          {
            name: "Basra",
            text: "Iraq's southern gateway and an important economic and cultural center.",
            image: "/images/destinations/basra.jpg",
          },
        ],
      },
      {
        name: "Kurdistan",
        summary: "Mountain landscapes and historic cities that widen the Iraqi experience.",
        points: ["Visual and geographic variety", "Cities suited to international delegations", "Calm distinct nature"],
        items: [
          {
            name: "Erbil",
            text: "A historic city suitable for international delegations.",
            image: "/images/destinations/erbil.jpg",
          },
          {
            name: "Duhok",
            text: "Mountain nature and a calm delegation experience.",
            image: "/images/destinations/duhok.jpg",
          },
          {
            name: "Sulaymaniyah",
            text: "A cultural city combining nature and Kurdish identity.",
            image: "/images/destinations/sulaymaniyah.jpg",
          },
        ],
      },
    ],
  },
  zh: {
    dir: "ltr",
    back: "返回首页",
    label: "05 / 推荐目的地",
    title: "推荐目的地",
    intro:
      "精选目的地将伊拉克呈现为覆盖巴格达、南部与伊拉克库尔德斯坦的高端文化路线。",
    langLabel: "语言",
    fitLabel: "适合代表团的原因",
    regions: [
      {
        name: "巴格达",
        summary: "官方与文化路线的起点，包含城市记忆、市场与博物馆。",
        points: ["清晰文化身份", "适合正式开场", "短程集中移动"],
        items: [
          {
            name: "历史巴格达",
            text: "伊拉克博物馆、穆塔纳比街、卡什拉、穆斯坦西里亚学校和萨法菲尔市场。",
            image: "/images/destinations/baghdad.jpg",
          },
          {
            name: "古董之家",
            text: "私人文化遗产目的地，不是酒店或住宿地点。",
            image: "/images/destinations/house-of-antiques.jpg",
          },
        ],
      },
      {
        name: "南部",
        summary: "伊拉克文明根源、湿地景观和南部门户。",
        points: ["重要文明符号", "强烈媒体画面", "本地自然与文化"],
        items: [
          {
            name: "乌尔与神庙",
            text: "美索不达米亚文明最重要的象征之一。",
            image: "/images/destinations/ur.jpg",
          },
          {
            name: "湿地",
            text: "伊拉克南部独特的自然与文化景观。",
            image: "/images/destinations/marshes.jpg",
          },
          {
            name: "巴士拉",
            text: "伊拉克南部门户和重要的经济文化中心。",
            image: "/images/destinations/basra.jpg",
          },
        ],
      },
      {
        name: "库尔德斯坦",
        summary: "山地景观与历史城市，拓展完整的伊拉克体验。",
        points: ["视觉与地理多样性", "适合国际代表团的城市", "安静而独特的自然"],
        items: [
          {
            name: "埃尔比勒",
            text: "适合国际代表团访问的历史城市。",
            image: "/images/destinations/erbil.jpg",
          },
          {
            name: "杜胡克",
            text: "山地自然与安静的代表团体验。",
            image: "/images/destinations/duhok.jpg",
          },
          {
            name: "苏莱曼尼亚",
            text: "融合自然与库尔德文化身份的文化城市。",
            image: "/images/destinations/sulaymaniyah.jpg",
          },
        ],
      },
    ],
  },
} as const;

const langLinks: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export default function DestinationsPage() {
  const [lang, setLang] = useStoredLang();
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-[#fffaf6] text-[#201815]">
      <section
        className="relative min-h-[74vh] overflow-hidden px-5 py-8 text-white md:px-10 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg,rgba(32,24,21,0.72),rgba(181,18,27,0.42)),url('/images/destinations/destinations-hero.jpg'),linear-gradient(135deg,#201815,#b5121b 64%,#d9a441)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(74vh-4rem)] max-w-[1450px] flex-col justify-between">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="border border-white/25 bg-black/20 px-5 py-3 text-sm font-black backdrop-blur-md transition-all hover:bg-[#b5121b]"
            >
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
            <h1 className="font-black uppercase leading-[0.86] tracking-normal text-white text-[14vw] md:text-[7.4vw] lg:text-[5.6vw]">
              {t.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-black leading-9 text-white/78 md:text-2xl md:leading-10">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 md:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:98px_98px]" />
        <div className="pointer-events-none absolute right-4 top-8 animate-watermark-drift text-[19vw] font-black text-[#b5121b]/[0.045]">
          文化路线
        </div>

        <div className="relative z-10 mx-auto max-w-[1450px] space-y-16">
          {t.regions.map((region, regionIndex) => (
            <article key={region.name} className="border-t border-[#201815]/14 pt-10">
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b5121b]">
                    {String(regionIndex + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-5xl font-black leading-none text-[#201815] md:text-7xl">
                    {region.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg font-black leading-8 text-[#201815]/72">
                    {region.summary}
                  </p>

                  <div className="mt-7 border-y border-[#201815]/12 py-5">
                    <h3 className="text-sm font-black text-[#b5121b]">
                      {t.fitLabel}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {region.points.map((point) => (
                        <span
                          key={point}
                          className="border border-[#201815]/12 bg-white/40 px-3 py-2 text-xs font-black text-[#201815]/68"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {region.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className={[
                        "group relative min-h-[360px] overflow-hidden bg-[#201815] shadow-xl shadow-[#201815]/10",
                        itemIndex === 0 ? "md:col-span-2 md:min-h-[440px]" : "",
                      ].join(" ")}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `linear-gradient(120deg,rgba(181,18,27,0.36),rgba(32,24,21,0.28)),url('${item.image}'),linear-gradient(135deg,#b5121b,#201815 60%,#d9a441)`,
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6">
                        <p className="mb-2 inline-flex bg-[#b5121b] px-3 py-1 text-xs font-black text-white">
                          {region.name}
                        </p>
                        <h3 className="text-3xl font-black leading-9 text-white">
                          {item.name}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm font-bold leading-7 text-white/70">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
