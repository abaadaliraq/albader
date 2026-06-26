"use client";

import Link from "next/link";
import Image from "next/image";
import type { Lang } from "./Sidebar";

type DigitalServicesSectionProps = {
  lang: Lang;
};

const platformImages = {
  overview: "/images/digital/platform-overview.jpg",
  mobile: "/images/digital/platform-mobile.jpg",
};

const copy = {
  ar: {
    dir: "rtl",
    sectionNumber: "04",
    eyebrow: "المنظومة الرقمية",
    title: "الخدمات الإلكترونية المساندة",
    subtitle: [
      "نموذج منصة تشغيلية ترافق الوفد قبل الوصول، أثناء الزيارة، وبعد المغادرة.",
      "تجمع الجدول، الخرائط، الترجمة، الجولات الافتراضية، التنبيهات، ولوحة التحكم في تجربة واحدة.",
    ],
    button: "عرض تفاصيل المنصة",
    preview: "نموذج المنصة",
    open: "فتح النموذج",
    mobile: "واجهة الهاتف",
    services: [
      { title: "بوابة الوفد", description: "ملف موحد للوفد والبرنامج." },
      { title: "جدول ذكي", description: "مواعيد ومسارات وتنبيهات يومية." },
      { title: "خرائط و QR", description: "دليل رقمي لكل وجهة." },
      { title: "جولات افتراضية", description: "تجربة تمهيدية قبل الوصول." },
      { title: "لوحة تحكم", description: "متابعة الحركة والتوثيق والخدمات." },
    ],
  },
  en: {
    dir: "ltr",
    sectionNumber: "04",
    eyebrow: "Digital Layer",
    title: "Supporting Digital Services",
    subtitle: [
      "A platform model supporting the delegation before arrival, during the visit, and after departure.",
      "It combines schedules, maps, translation, virtual tours, alerts, and an operations dashboard in one experience.",
    ],
    button: "View Platform Details",
    preview: "Platform Model",
    open: "Open Model",
    mobile: "Mobile Interface",
    services: [
      { title: "Delegation Portal", description: "Unified file for the delegation and program." },
      { title: "Smart Itinerary", description: "Timing, routes, and daily alerts." },
      { title: "Maps & QR", description: "Digital guide for each destination." },
      { title: "Virtual Tours", description: "Pre-arrival destination experience." },
      { title: "Control Dashboard", description: "Movement, documentation, and service tracking." },
    ],
  },
  zh: {
    dir: "ltr",
    sectionNumber: "04",
    eyebrow: "数字层",
    title: "数字化支持服务",
    subtitle: [
      "一个平台模型，在抵达前、访问中和离开后支持代表团。",
      "将日程、地图、翻译、虚拟参观、提醒和运营控制台整合为统一体验。",
    ],
    button: "查看平台详情",
    preview: "平台模型",
    open: "打开模型",
    mobile: "手机界面",
    services: [
      { title: "代表团门户", description: "代表团与项目的统一档案。" },
      { title: "智能行程", description: "时间、路线与每日提醒。" },
      { title: "地图与二维码", description: "每个目的地的数字指南。" },
      { title: "虚拟参观", description: "抵达前的目的地体验。" },
      { title: "控制台", description: "行程、记录与服务跟踪。" },
    ],
  },
} as const;

export default function DigitalServicesSection({ lang }: DigitalServicesSectionProps) {
  const t = copy[lang];

  return (
    <section
      id="section-4"
      dir={t.dir}
      className="relative overflow-hidden bg-[#fffaf6] px-5 py-16 text-[#201815] md:px-10 lg:pl-[82px]"
    >
      <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(90deg,rgba(181,18,27,0.09)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.06)_1px,transparent_1px)] bg-[size:92px_92px]" />
      <div className="pointer-events-none absolute -right-10 top-8 select-none text-[18vw] font-black leading-none text-[#b5121b]/[0.045] lg:text-[11vw]">
        DIGITAL
      </div>
      <div className="absolute left-0 top-16 hidden h-[72%] w-[3px] bg-[#b5121b] shadow-[0_0_22px_rgba(181,18,27,0.35)] lg:block" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="animate-soft-fade-up">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[72px] w-[5px] bg-[#b5121b]" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.38em] text-[#b5121b]">
                {t.sectionNumber}
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-[#d9a441]">
                {t.eyebrow}
              </p>
            </div>
          </div>

          <h2
            className={[
              "max-w-5xl font-black uppercase leading-[0.88] tracking-normal text-[#201815]",
              lang === "zh"
                ? "text-[15vw] md:text-[7.5vw] lg:text-[5.5vw]"
                : "text-[12vw] md:text-[6.4vw] lg:text-[4.65vw]",
            ].join(" ")}
          >
            {t.title}
          </h2>

          <div className="mt-8 max-w-2xl space-y-3 border-t border-[#201815]/12 pt-7">
            {t.subtitle.map((line) => (
              <p key={line} className="text-lg font-black leading-8 text-[#201815]/70 md:text-2xl md:leading-10">
                {line}
              </p>
            ))}
          </div>

          <Link
            href="/digital-services"
            className="mt-8 inline-flex items-center bg-[#b5121b] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#201815] hover:shadow-[0_0_34px_rgba(181,18,27,0.3)]"
          >
            {t.button}
            <span className={lang === "ar" ? "mr-3" : "ml-3"}>
              {lang === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute left-[8%] right-[8%] top-[46%] h-px overflow-hidden bg-[#201815]/12">
            <div className="h-full animate-data-line bg-gradient-to-r from-transparent via-[#b5121b] to-transparent" />
          </div>
          <div className="absolute left-[10%] top-[18%] h-3 w-3 animate-digital-pulse rounded-full bg-[#b5121b] shadow-[0_0_22px_rgba(181,18,27,0.65)]" />
          <div className="absolute right-[10%] bottom-[18%] h-3 w-3 animate-digital-pulse rounded-full bg-[#d9a441] shadow-[0_0_22px_rgba(217,164,65,0.65)]" />

          <div className="relative grid gap-4 sm:grid-cols-2">
            <a
              href={platformImages.overview}
              target="_blank"
              rel="noreferrer"
              className="group block border border-[#201815]/12 bg-[#201815] p-3 shadow-2xl shadow-black/18 transition-all duration-300 hover:-translate-y-1 hover:border-[#b5121b] hover:shadow-[0_0_34px_rgba(181,18,27,0.18)]"
            >
              <div className="relative aspect-[9/13] overflow-hidden bg-[#120204]">
                <Image
                  src={platformImages.overview}
                  alt={t.preview}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 90vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.018]"
                  priority
                />
                <PreviewCaption title={t.preview} action={t.open} />
              </div>
            </a>

            <a
              href={platformImages.mobile}
              target="_blank"
              rel="noreferrer"
              className="group block border border-[#201815]/12 bg-[#201815] p-3 shadow-2xl shadow-black/18 transition-all duration-300 hover:-translate-y-1 hover:border-[#b5121b]"
            >
              <div className="relative aspect-[9/13] overflow-hidden bg-[#120204]">
                <Image
                  src={platformImages.mobile}
                  alt={t.mobile}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 90vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.018]"
                />
                <PreviewCaption title={t.mobile} action={t.open} />
              </div>
            </a>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {t.services.map((service, index) => (
              <div
                key={service.title}
                className="group relative border border-[#201815]/10 bg-white/70 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#b5121b] hover:shadow-[0_0_26px_rgba(181,18,27,0.16)]"
              >
                <span className="absolute left-2 top-2 h-4 w-4 border-l border-t border-[#d9a441]/75" />
                <span className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-[#d9a441]/75" />
                <p className="text-xs font-black text-[#b5121b]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-sm font-black leading-5 text-[#201815]">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs font-bold leading-5 text-[#201815]/58">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewCaption({
  title,
  action,
  compact = false,
}: {
  title: string;
  action: string;
  compact?: boolean;
}) {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/82 to-transparent p-4 text-white">
      <p className={["font-black", compact ? "text-sm" : "text-lg"].join(" ")}>{title}</p>
      <p className="mt-2 text-xs font-black text-[#d9a441]">{action}</p>
    </div>
  );
}

