import Link from "next/link";
import type { Lang } from "@/components/Sidebar";

type PlansPageProps = {
  searchParams?: Promise<{
    lang?: string | string[];
  }>;
};

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    label: "03 / تفاصيل الخطط",
    title: "تفاصيل خطط استقبال الوفود",
    intro:
      "ثلاث خطط تشغيلية مصممة كمسارات زيارة واضحة، من بغداد المختصرة إلى تجربة العراق الكاملة.",
    langLabel: "اللغة",
    fields: {
      goal: "الهدف",
      duration: "المدة",
      delegation: "الوفد المناسب",
      route: "المسار",
      services: "الخدمات الأساسية",
    },
    plans: [
      {
        code: "A",
        name: "بغداد الرسمية",
        image: "/images/plan-baghdad.jpg",
        tag: "Best for short official visits",
        goal: "زيارة قصيرة ومنظمة تعطي انطباعاً رسمياً وثقافياً عن العاصمة.",
        duration: "2-3 أيام",
        delegation: "الوفود الرسمية والزيارات السريعة.",
        route: ["اليوم الأول: استقبال VIP وفندق 5 نجوم", "اليوم الثاني: المتحف العراقي وشارع المتنبي", "اليوم الثالث: بيت التحفيات كوجهة تراثية وثقافية"],
        services: ["نقل آمن", "ترجمة ومرافقة", "جدول رقمي مختصر"],
      },
      {
        code: "B",
        name: "بغداد والجنوب",
        image: "/images/plan-south.jpg",
        tag: "Culture + economy route",
        goal: "ربط بغداد بجذور الحضارة العراقية في الجنوب.",
        duration: "4-5 أيام",
        delegation: "الوفود الثقافية والاقتصادية.",
        route: ["بغداد التاريخية", "أور والزقورة", "الأهوار والبصرة"],
        services: ["تنسيق تنقلات", "إرشاد ثقافي", "خرائط وبرنامج رقمي"],
      },
      {
        code: "C",
        name: "العراق الكامل",
        image: "/images/plan-kurdistan.jpg",
        tag: "Full delegation journey",
        goal: "تجربة واسعة تجمع الحضارة والطبيعة والأسواق.",
        duration: "6-7 أيام",
        delegation: "الوفود الإعلامية أو الاستثمارية.",
        route: ["بغداد والجنوب", "أربيل ودهوك", "السليمانية والطبيعة الجبلية"],
        services: ["إدارة حركة متكاملة", "فريق مرافقة وترجمة", "لوحة تحكم للجدول"],
      },
    ],
    destinations: ["بغداد", "أور", "الأهوار", "أربيل", "دهوك", "السليمانية"],
  },
  en: {
    dir: "ltr",
    back: "Back to Home",
    label: "03 / Plan Details",
    title: "Delegation Reception Plan Details",
    intro:
      "Three operating plans shaped as clear visit routes, from compact Baghdad to the full Iraq experience.",
    langLabel: "Language",
    fields: {
      goal: "Goal",
      duration: "Duration",
      delegation: "Best Delegation",
      route: "Route",
      services: "Core Services",
    },
    plans: [
      {
        code: "A",
        name: "Official Baghdad",
        image: "/images/plan-baghdad.jpg",
        tag: "Best for short official visits",
        goal: "A short, organized visit that creates a formal and cultural impression of the capital.",
        duration: "2-3 Days",
        delegation: "Official delegations and short visits.",
        route: ["Day 1: VIP reception and 5-star hotel", "Day 2: Iraq Museum and Al-Mutanabbi Street", "Day 3: House of Antiques as a cultural heritage destination"],
        services: ["Secure transport", "Translation and escort", "Compact digital schedule"],
      },
      {
        code: "B",
        name: "Baghdad & South",
        image: "/images/plan-south.jpg",
        tag: "Culture + economy route",
        goal: "Connect Baghdad with Iraq's civilizational roots in the South.",
        duration: "4-5 Days",
        delegation: "Cultural and economic delegations.",
        route: ["Historic Baghdad", "Ur and the Ziggurat", "Marshes and Basra"],
        services: ["Movement coordination", "Cultural guidance", "Maps and digital program"],
      },
      {
        code: "C",
        name: "Complete Iraq",
        image: "/images/plan-kurdistan.jpg",
        tag: "Full delegation journey",
        goal: "A wide experience combining civilization, nature, and markets.",
        duration: "6-7 Days",
        delegation: "Media or investment delegations.",
        route: ["Baghdad and the South", "Erbil and Duhok", "Sulaymaniyah and mountain landscapes"],
        services: ["Integrated movement management", "Escort and translation team", "Schedule dashboard"],
      },
    ],
    destinations: ["Baghdad", "Ur", "Marshes", "Erbil", "Duhok", "Sulaymaniyah"],
  },
  zh: {
    dir: "ltr",
    back: "返回首页",
    label: "03 / 方案详情",
    title: "代表团接待方案详情",
    intro: "三套清晰的访问路线，从精简巴格达到完整伊拉克体验。",
    langLabel: "语言",
    fields: {
      goal: "目标",
      duration: "时长",
      delegation: "适合代表团",
      route: "路线",
      services: "核心服务",
    },
    plans: [
      {
        code: "A",
        name: "官方巴格达",
        image: "/images/plan-baghdad.jpg",
        tag: "适合短期官方访问",
        goal: "一次短程、有组织的访问，形成首都的正式与文化印象。",
        duration: "2-3天",
        delegation: "官方代表团与短期访问。",
        route: ["第1天：贵宾接待与五星级酒店", "第2天：伊拉克博物馆与穆塔纳比街", "第3天：古董之家作为文化遗产目的地"],
        services: ["安全交通", "翻译与陪同", "简明数字日程"],
      },
      {
        code: "B",
        name: "巴格达与南部",
        image: "/images/plan-south.jpg",
        tag: "文化 + 经济路线",
        goal: "连接巴格达与伊拉克南部文明根源。",
        duration: "4-5天",
        delegation: "文化与经济代表团。",
        route: ["历史巴格达", "乌尔与神庙", "湿地与巴士拉"],
        services: ["行程协调", "文化导览", "地图与数字方案"],
      },
      {
        code: "C",
        name: "完整伊拉克",
        image: "/images/plan-kurdistan.jpg",
        tag: "完整代表团旅程",
        goal: "融合文明、自然与市场的广泛体验。",
        duration: "6-7天",
        delegation: "媒体或投资代表团。",
        route: ["巴格达与南部", "埃尔比勒与杜胡克", "苏莱曼尼亚与山地景观"],
        services: ["综合行程管理", "陪同与翻译团队", "日程管理面板"],
      },
    ],
    destinations: ["巴格达", "乌尔", "湿地", "埃尔比勒", "杜胡克", "苏莱曼尼亚"],
  },
} as const;

const langLinks: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

const destinationImages = [
  "/images/destinations/baghdad.jpg",
  "/images/destinations/ur.jpg",
  "/images/destinations/marshes.jpg",
  "/images/destinations/erbil.jpg",
  "/images/destinations/duhok.jpg",
  "/images/destinations/sulaymaniyah.jpg",
];

function normalizeLang(value: string | string[] | undefined): Lang {
  const next = Array.isArray(value) ? value[0] : value;
  return next === "en" || next === "zh" || next === "ar" ? next : "ar";
}

export default async function PlansPage({ searchParams }: PlansPageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params?.lang);
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-[#fffaf6] text-[#201815]">
      <section
        className="relative min-h-[72vh] overflow-hidden px-5 py-8 text-white md:px-10 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg,rgba(32,24,21,0.78),rgba(181,18,27,0.42)),url('/images/plans-hero.jpg'),linear-gradient(135deg,#201815,#b5121b 62%,#d9a441)",
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
                  href={`/plans?lang=${item.code}`}
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
            <h1 className="font-black uppercase leading-[0.86] tracking-normal text-white text-[13vw] md:text-[7vw] lg:text-[5.2vw]">
              {t.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-black leading-9 text-white/78 md:text-2xl md:leading-10">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 md:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:104px_104px]" />
        <div className="pointer-events-none absolute right-4 top-8 animate-watermark-drift text-[19vw] font-black text-[#b5121b]/[0.045]">
          三条路线
        </div>

        <div className="relative z-10 mx-auto max-w-[1450px] space-y-14">
          {t.plans.map((plan, index) => (
            <article
              key={plan.code}
              className="grid min-h-[62vh] overflow-hidden border-y border-[#201815]/14 py-8 lg:grid-cols-2 lg:items-center"
            >
              <div
                className={[
                  "relative min-h-[420px] overflow-hidden bg-[#201815] transition-all duration-300 hover:-translate-y-1",
                  index % 2 === 1 ? "lg:order-2" : "",
                ].join(" ")}
                style={{
                  backgroundImage: `url('${plan.image}'),linear-gradient(135deg,#b5121b,#201815 58%,#d9a441)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <a
                  href={plan.image}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                  aria-label={plan.name}
                />
                <div className="pointer-events-none absolute bottom-7 left-7 text-8xl font-black text-white/18">
                  {plan.code}
                </div>
              </div>

              <div className="p-0 pt-8 lg:p-12">
                <div className="mb-7 flex items-center gap-4">
                  <span className="grid h-16 w-16 place-items-center bg-[#b5121b] text-3xl font-black text-white">
                    {plan.code}
                  </span>
                  <span className="border border-[#d9a441]/50 px-4 py-2 text-xs font-black text-[#b5121b]">
                    {plan.tag}
                  </span>
                </div>
                <h2 className="text-4xl font-black leading-10 text-[#201815] md:text-5xl">
                  {plan.name}
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <Info label={t.fields.goal} value={plan.goal} />
                  <Info label={t.fields.duration} value={plan.duration} />
                  <Info label={t.fields.delegation} value={plan.delegation} />
                  <List label={t.fields.services} items={plan.services} />
                </div>

                <div className="mt-8 border-t border-[#201815]/14 pt-6">
                  <h3 className="mb-5 text-sm font-black text-[#b5121b]">
                    {t.fields.route}
                  </h3>
                  <div className="relative grid gap-4 md:grid-cols-3">
                    <div className="absolute left-0 right-0 top-5 hidden h-px overflow-hidden bg-[#201815]/14 md:block">
                      <div className="h-full animate-route-move bg-gradient-to-r from-transparent via-[#b5121b] to-transparent" />
                    </div>
                    {plan.route.map((step, stepIndex) => (
                      <div key={step} className="relative bg-[#fffaf6] pr-3">
                        <span className="mb-3 grid h-10 w-10 place-items-center bg-[#b5121b] text-xs font-black text-white shadow-[0_0_18px_rgba(181,18,27,0.35)]">
                          {stepIndex + 1}
                        </span>
                        <p className="text-sm font-bold leading-7 text-[#201815]/72">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="overflow-hidden border-y border-[#201815]/14 py-8">
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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[#201815]/12 pt-5">
      <h3 className="text-sm font-black text-[#b5121b]">{label}</h3>
      <p className="mt-3 text-base font-bold leading-8 text-[#201815]/72">
        {value}
      </p>
    </div>
  );
}

function List({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="border-t border-[#201815]/12 pt-5">
      <h3 className="text-sm font-black text-[#b5121b]">{label}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-bold leading-7 text-[#201815]/70">
            <span className="mt-3 h-px w-7 shrink-0 bg-[#d9a441]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
