"use client";

import Link from "next/link";
import type { Lang } from "./Sidebar";

type VisionSectionProps = {
  lang: Lang;
};

const copy = {
  ar: {
    dir: "rtl",
    eyebrow: "02 / الرؤية",
    title: "الرؤية الاستراتيجية",
    subtitle: [
      "مشروع يحوّل استقبال الوفود من زيارة بروتوكولية إلى تجربة ثقافية واقتصادية منظمة.",
      "يربط المسارات التراثية بإدارة VIP وخدمات رقمية قبل وأثناء وبعد الزيارة.",
    ],
    button: "عرض التفاصيل",
    labels: [
      "استقبال الوفود",
      "المسارات الثقافية",
      "الأثر الاقتصادي",
      "الخدمات الرقمية",
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "02 / Vision",
    title: "Strategic Vision",
    subtitle: [
      "A program that transforms delegation visits into a structured cultural and economic experience.",
      "It connects heritage routes with VIP management and digital services before, during, and after the visit.",
    ],
    button: "View Details",
    labels: [
      "Delegation Reception",
      "Cultural Routes",
      "Economic Impact",
      "Digital Services",
    ],
  },
  zh: {
    dir: "ltr",
    eyebrow: "02 / 愿景",
    title: "战略愿景",
    subtitle: [
      "一个将代表团访问转化为有组织文化与经济体验的项目。",
      "将文化路线、贵宾管理与访问前中后的数字服务连接起来。",
    ],
    button: "查看详情",
    labels: ["代表团接待", "文化路线", "经济影响", "数字服务"],
  },
} as const;

export default function VisionSection({ lang }: VisionSectionProps) {
  const t = copy[lang];

  return (
    <section
      id="section-2"
      dir={t.dir}
      className="relative min-h-[85vh] overflow-hidden bg-[#fffaf6] px-5 py-16 text-[#201815] md:px-10 lg:pl-[82px]"
    >
      <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9a441]/70 to-transparent" />
      <div className="absolute left-0 top-0 hidden h-full w-[3px] bg-[#b5121b] lg:block" />
      <div className="pointer-events-none absolute -right-10 top-8 animate-watermark-drift select-none text-[20vw] font-black leading-none text-[#b5121b]/[0.045] lg:text-[13vw]">
        文化桥梁
      </div>
      <div className="pointer-events-none absolute bottom-2 left-4 select-none text-[30vw] font-black leading-none text-[#201815]/[0.035] lg:text-[16vw]">
        02
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(85vh-8rem)] max-w-[1500px] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div className="animate-soft-fade-up">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.34em] text-[#b5121b]">
            {t.eyebrow}
          </p>
          <h2
            className={[
              "max-w-5xl font-black uppercase leading-[0.85] tracking-normal text-[#201815]",
              lang === "zh"
                ? "text-[17vw] md:text-[8vw] lg:text-[6vw]"
                : "text-[15vw] md:text-[7.2vw] lg:text-[5.5vw]",
            ].join(" ")}
          >
            {t.title}
          </h2>

          <div className="mt-8 max-w-2xl space-y-3 border-t border-[#201815]/15 pt-7">
            {t.subtitle.map((line) => (
              <p
                key={line}
                className="text-lg font-black leading-8 text-[#201815]/78 md:text-2xl md:leading-10"
              >
                {line}
              </p>
            ))}
          </div>

          <Link
            href="/vision"
            className="mt-8 inline-flex items-center bg-[#b5121b] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#201815] hover:shadow-[0_0_28px_rgba(181,18,27,0.32)]"
          >
            {t.button}
            <span className={lang === "ar" ? "mr-3" : "ml-3"}>
              {lang === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>

        <div className="relative animate-image-reveal">
          <a
            href="/images/vision-cultural.jpg"
            target="_blank"
            rel="noreferrer"
            className="relative block min-h-[460px] overflow-hidden bg-[#201815] shadow-2xl shadow-[#201815]/18 transition-all duration-300 hover:-translate-y-1 md:min-h-[560px]"
            style={{
              backgroundImage:
                "url('/images/vision-cultural.jpg'),linear-gradient(135deg,#b5121b,#201815 55%,#d9a441)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-3">
              {t.labels.map((label, index) => (
                <span
                  key={label}
                  className="border border-white/20 bg-black/28 px-4 py-3 text-xs font-black text-white backdrop-blur-md"
                >
                  {String(index + 1).padStart(2, "0")} / {label}
                </span>
              ))}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
