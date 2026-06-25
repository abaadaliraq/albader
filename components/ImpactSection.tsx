"use client";

import type { Lang } from "./Sidebar";

type ImpactSectionProps = {
  lang: Lang;
};

const copy = {
  ar: {
    dir: "rtl",
    sectionNumber: "06",
    eyebrow: "الخلاصة الاستراتيجية",
    title: "الأثر المتوقع",
    subtitle:
      "من خلال هذا المشروع، تتحول زيارة الوفود إلى قناة عملية لتعزيز صورة العراق، وتنشيط السياحة، وفتح مسارات تعاون ثقافي واقتصادي ورقمي.",
    closingTitle:
      "العراق لا ينتظر العالم، بل يفتح أبوابه بثقة.",
    closingText:
      "هذه المبادرة تقدم نموذجاً عملياً لاستقبال الوفود الصينية ضمن تجربة آمنة، منظمة، ثقافية، وقابلة للتوسع.",
    cta: "اعتماد الرؤية التشغيلية",
    items: [
      {
        label: "ثقافياً",
        title: "تعزيز صورة العراق الحضارية",
        description:
          "تقديم العراق كبلد يمتلك تاريخاً عميقاً وتجربة ضيافة قادرة على استقبال الوفود الدولية.",
      },
      {
        label: "اقتصادياً",
        title: "تنشيط قطاعات السياحة والخدمات",
        description:
          "دعم الفنادق، النقل، الأسواق، الحرف، والمنتجات المحلية من خلال برامج وفود منظمة.",
      },
      {
        label: "رقمياً",
        title: "بناء منظومة إدارة حديثة",
        description:
          "تحويل استقبال الوفود إلى نظام رقمي للحجز، الخرائط، الترجمة، وجدولة الحركة.",
      },
      {
        label: "دولياً",
        title: "فتح قنوات تعاون جديدة",
        description:
          "خلق فرص للتبادل الثقافي، العلاقات السياحية، الاستثمارات، والشراكات المستقبلية.",
      },
    ],
  },
  en: {
    dir: "ltr",
    sectionNumber: "06",
    eyebrow: "Strategic Conclusion",
    title: "Expected Impact",
    subtitle:
      "Through this project, delegation visits become a practical channel to strengthen Iraq's image, activate tourism, and open cultural, economic, and digital cooperation paths.",
    closingTitle:
      "Iraq does not wait for the world; it opens its doors with confidence.",
    closingText:
      "This initiative presents a practical model for hosting Chinese delegations through a safe, organized, cultural, and scalable experience.",
    cta: "Approve the Operational Vision",
    items: [
      {
        label: "Cultural",
        title: "Strengthening Iraq's civilizational image",
        description:
          "Presenting Iraq as a country with deep history and a hospitality experience capable of receiving international delegations.",
      },
      {
        label: "Economic",
        title: "Activating tourism and service sectors",
        description:
          "Supporting hotels, transport, markets, crafts, and local products through organized delegation programs.",
      },
      {
        label: "Digital",
        title: "Building a modern management system",
        description:
          "Transforming delegation reception into a digital system for booking, maps, translation, and movement scheduling.",
      },
      {
        label: "International",
        title: "Opening new cooperation channels",
        description:
          "Creating opportunities for cultural exchange, tourism relations, investment, and future partnerships.",
      },
    ],
  },
  zh: {
    dir: "ltr",
    sectionNumber: "06",
    eyebrow: "战略总结",
    title: "预期影响",
    subtitle:
      "通过该项目，代表团访问将成为提升伊拉克形象、激活旅游业并开启文化、经济和数字合作路径的实际渠道。",
    closingTitle:
      "伊拉克不等待世界，而是自信地敞开大门。",
    closingText:
      "该倡议为接待中国代表团提供了安全、有组织、文化化且可扩展的实践模式。",
    cta: "批准执行愿景",
    items: [
      {
        label: "文化层面",
        title: "提升伊拉克文明形象",
        description:
          "展示伊拉克深厚历史以及接待国际代表团的高水平服务能力。",
      },
      {
        label: "经济层面",
        title: "激活旅游与服务行业",
        description:
          "通过有组织的代表团项目，支持酒店、交通、市场、手工艺和本地产品。",
      },
      {
        label: "数字层面",
        title: "建立现代管理系统",
        description:
          "将代表团接待转变为涵盖预订、地图、翻译和行程安排的数字系统。",
      },
      {
        label: "国际层面",
        title: "开启新的合作渠道",
        description:
          "创造文化交流、旅游关系、投资与未来伙伴关系的机会。",
      },
    ],
  },
} as const;

export default function ImpactSection({ lang }: ImpactSectionProps) {
  const t = copy[lang];

  return (
    <section
      id="section-6"
      dir={t.dir}
      className="relative min-h-screen overflow-hidden bg-[#120204] px-5 py-16 text-white md:px-10 lg:pl-[82px]"
      style={{
        backgroundImage:
          "linear-gradient(120deg,rgba(18,2,4,0.86),rgba(57,5,8,0.78),rgba(116,7,12,0.66)),url('/images/impact-hero.jpg'),linear-gradient(135deg,#120204,#390508 52%,#74070c)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-[0.13] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:86px_86px]" />
      <div className="pointer-events-none absolute -right-8 top-8 animate-slow-watermark select-none text-[26vw] font-black leading-none text-white/[0.045] lg:text-[15vw]">
        影响
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-[3px] bg-[#ff1d2d] shadow-[0_0_28px_rgba(255,29,45,0.55)] lg:block" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1500px] flex-col justify-center">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div className="animate-fade-rise">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.36em] text-[#ffb3b9]">
              {t.sectionNumber} / {t.eyebrow}
            </p>
            <h2
              className={[
                "max-w-5xl font-black uppercase leading-[0.86] tracking-normal text-white",
                lang === "zh"
                  ? "text-[17vw] md:text-[8vw] lg:text-[6vw]"
                  : "text-[14vw] md:text-[7vw] lg:text-[5.35vw]",
              ].join(" ")}
            >
              {t.title}
            </h2>
          </div>

          <p className="animate-fade-rise max-w-3xl border-t border-white/15 pt-7 text-lg font-black leading-8 text-white/76 md:text-2xl md:leading-10">
            {t.subtitle}
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px overflow-hidden bg-white/12 lg:block">
            <div className="h-full animate-route-flow bg-gradient-to-r from-transparent via-[#ff1d2d] to-transparent" />
          </div>
          <span className="absolute left-[12%] top-1/2 hidden h-3 w-3 -translate-y-1/2 animate-pulse-dot rounded-full bg-[#ff1d2d] shadow-[0_0_24px_rgba(255,29,45,0.8)] lg:block" />
          <span className="absolute right-[18%] top-1/2 hidden h-3 w-3 -translate-y-1/2 animate-pulse-dot rounded-full bg-[#d9a441] shadow-[0_0_24px_rgba(217,164,65,0.75)] lg:block" />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.items.map((item, index) => (
              <article
                key={item.label}
                className="group relative border border-white/10 bg-black/38 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ff1d2d] hover:shadow-[0_0_32px_rgba(255,29,45,0.22)]"
              >
                <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#d9a441]/70" />
                <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#d9a441]/70" />
                <p className="text-7xl font-black leading-none text-white/10 transition-colors duration-300 group-hover:text-[#ff1d2d]/25">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-[#d9a441]">
                  {item.label}
                </p>
                <h3 className="mt-4 text-2xl font-black leading-8 text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-bold leading-7 text-white/62">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h3 className="max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            {t.closingTitle}
          </h3>
          <div>
            <p className="text-base font-bold leading-8 text-white/68 md:text-lg">
              {t.closingText}
            </p>
            <button className="mt-7 bg-white px-7 py-4 text-sm font-black text-[#74070c] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff1d2d] hover:text-white hover:shadow-[0_0_34px_rgba(255,29,45,0.38)]">
              {t.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
