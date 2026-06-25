"use client";

import Link from "next/link";
import type { Lang } from "./Sidebar";

type DigitalServicesSectionProps = {
  lang: Lang;
};

const copy = {
  ar: {
    dir: "rtl",
    sectionNumber: "04",
    eyebrow: "المنظومة الرقمية",
    title: "الخدمات الإلكترونية المساندة",
    subtitle: [
      "طبقة رقمية ترافق الوفد قبل الوصول، أثناء الزيارة، وبعد المغادرة.",
      "تربط الحجز، الترجمة، الخرائط، جدول الحركة، وإدارة العمليات في منظومة واحدة.",
    ],
    button: "عرض تفاصيل الخدمات",
    dashboardTitle: "لوحة حركة الوفد",
    routeLabel: "مسار اليوم",
    status: ["جاهز", "قيد الحركة", "مؤكد"],
    rows: ["استقبال المطار", "المتحف العراقي", "اجتماع الترجمة"],
    services: [
      {
        title: "بوابة الوفد",
        description: "تسجيل الأعضاء وبيانات الزيارة.",
      },
      {
        title: "جدول ذكي",
        description: "مواعيد، مسارات، وتنبيهات.",
      },
      {
        title: "خرائط و QR",
        description: "دليل رقمي لكل وجهة.",
      },
      {
        title: "ترجمة فورية",
        description: "عربي، إنكليزي، وصيني.",
      },
      {
        title: "لوحة عمليات",
        description: "متابعة السيارات، الفندق، الأمن، والمترجم.",
      },
    ],
  },
  en: {
    dir: "ltr",
    sectionNumber: "04",
    eyebrow: "Digital Layer",
    title: "Supporting Digital Services",
    subtitle: [
      "A digital layer that supports the delegation before arrival, during the visit, and after departure.",
      "It connects booking, translation, maps, movement schedules, and operations management in one system.",
    ],
    button: "View Digital Services",
    dashboardTitle: "Delegation Movement Board",
    routeLabel: "Today Route",
    status: ["Ready", "Moving", "Confirmed"],
    rows: ["Airport reception", "Iraq Museum", "Translation briefing"],
    services: [
      {
        title: "Delegation Portal",
        description: "Member registration and visit data.",
      },
      {
        title: "Smart Itinerary",
        description: "Timing, routes, and alerts.",
      },
      {
        title: "Maps & QR",
        description: "Digital guide for each destination.",
      },
      {
        title: "Live Translation",
        description: "Arabic, English, and Chinese.",
      },
      {
        title: "Operations Dashboard",
        description: "Cars, hotel, security, and translator tracking.",
      },
    ],
  },
  zh: {
    dir: "ltr",
    sectionNumber: "04",
    eyebrow: "数字层",
    title: "数字化支持服务",
    subtitle: [
      "一个在抵达前、访问中和离开后支持代表团的数字层。",
      "将预订、翻译、地图、行程安排和运营管理连接到一个系统中。",
    ],
    button: "查看数字服务",
    dashboardTitle: "代表团行程控制台",
    routeLabel: "今日路线",
    status: ["就绪", "行进中", "已确认"],
    rows: ["机场接待", "伊拉克博物馆", "翻译简报"],
    services: [
      {
        title: "代表团门户",
        description: "成员登记与访问资料。",
      },
      {
        title: "智能行程",
        description: "时间、路线与提醒。",
      },
      {
        title: "地图与二维码",
        description: "每个目的地的数字指南。",
      },
      {
        title: "实时翻译",
        description: "阿拉伯语、英语和中文。",
      },
      {
        title: "运营控制台",
        description: "车辆、酒店、安保与翻译跟踪。",
      },
    ],
  },
} as const;

export default function DigitalServicesSection({
  lang,
}: DigitalServicesSectionProps) {
  const t = copy[lang];

  return (
    <section
      id="section-4"
      dir={t.dir}
      className="relative min-h-screen overflow-hidden bg-[#76070b] px-5 py-16 text-white md:px-10 lg:pl-[82px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,29,45,0.32),transparent_26%),linear-gradient(135deg,#8d0710_0%,#4b0508_48%,#100102_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:76px_76px]" />
      <div className="pointer-events-none absolute -right-8 top-8 animate-watermark-drift select-none text-[22vw] font-black leading-none text-white/[0.055] lg:text-[14vw]">
        数字服务
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-[3px] bg-[#ff1d2d] shadow-[0_0_26px_rgba(255,29,45,0.55)] lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1500px] gap-11 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="animate-soft-fade-up">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[72px] w-[5px] bg-[#ff1d2d]" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.38em] text-[#ffb3b9]">
                {t.sectionNumber}
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-[#d9a441]">
                {t.eyebrow}
              </p>
            </div>
          </div>

          <h2
            className={[
              "max-w-5xl font-black uppercase leading-[0.88] tracking-normal text-white",
              lang === "zh"
                ? "text-[16vw] md:text-[8vw] lg:text-[5.8vw]"
                : "text-[13vw] md:text-[6.8vw] lg:text-[4.9vw]",
            ].join(" ")}
          >
            {t.title}
          </h2>

          <div className="mt-8 max-w-2xl space-y-3 border-t border-white/15 pt-7">
            {t.subtitle.map((line) => (
              <p
                key={line}
                className="text-lg font-black leading-8 text-white/76 md:text-2xl md:leading-10"
              >
                {line}
              </p>
            ))}
          </div>

          <Link
            href="/digital-services"
            className="mt-8 inline-flex items-center bg-white px-7 py-4 text-sm font-black text-[#8d0710] transition-all duration-300 hover:-translate-y-1 hover:bg-[#201815] hover:text-white hover:shadow-[0_0_34px_rgba(255,29,45,0.35)]"
          >
            {t.button}
            <span className={lang === "ar" ? "mr-3" : "ml-3"}>
              {lang === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>

        <div className="relative min-h-[650px] animate-dashboard-reveal">
          <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 overflow-hidden bg-white/12">
            <div className="h-full animate-data-line bg-gradient-to-r from-transparent via-[#ff1d2d] to-transparent" />
          </div>
          <div className="absolute left-[14%] top-[10%] h-3 w-3 animate-digital-pulse rounded-full bg-[#ff1d2d] shadow-[0_0_22px_rgba(255,29,45,0.85)]" />
          <div className="absolute right-[10%] bottom-[20%] h-3 w-3 animate-digital-pulse rounded-full bg-[#d9a441] shadow-[0_0_22px_rgba(217,164,65,0.75)]" />

          <div className="relative mx-auto mt-10 max-w-[620px] rounded-[32px] border border-white/10 bg-black/35 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d9a441]">
                  {t.dashboardTitle}
                </p>
                <p className="mt-2 text-2xl font-black text-white">04 / LIVE</p>
              </div>
              <div className="flex gap-2">
                {["AR", "EN", "中文"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-[10px] font-black text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.72fr_0.28fr]">
              <div className="space-y-3">
                {t.rows.map((row, index) => (
                  <div
                    key={row}
                    className="group flex items-center justify-between border border-white/10 bg-black/30 p-4 transition-all duration-300 hover:border-[#ff1d2d]/70"
                  >
                    <div>
                      <p className="text-xs font-black text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-sm font-black text-white">
                        {row}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#ff1d2d]/18 px-3 py-1 text-[10px] font-black text-[#ffb3b9]">
                      {t.status[index]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative min-h-52 overflow-hidden border border-white/10 bg-black/25 p-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white/55">
                  {t.routeLabel}
                </p>
                <div className="absolute bottom-6 left-6 right-6 top-14">
                  <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-[#ff1d2d]" />
                  <div className="absolute right-5 top-1/2 h-2 w-2 rounded-full bg-[#d9a441]" />
                  <div className="absolute bottom-4 left-1/2 h-2 w-2 rounded-full bg-white" />
                  <div className="absolute left-3 right-5 top-[34%] h-px rotate-12 bg-[#ff1d2d]/70" />
                  <div className="absolute bottom-[30%] left-[40%] right-7 h-px -rotate-12 bg-[#d9a441]/70" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {t.services.map((service, index) => (
              <div
                key={service.title}
                className="group relative border border-white/10 bg-black/35 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ff1d2d] hover:shadow-[0_0_26px_rgba(255,29,45,0.22)]"
              >
                <span className="absolute left-2 top-2 h-4 w-4 border-l border-t border-[#d9a441]/65" />
                <span className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-[#d9a441]/65" />
                <p className="text-xs font-black text-[#ffb3b9]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-sm font-black leading-5 text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs font-bold leading-5 text-white/58">
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
