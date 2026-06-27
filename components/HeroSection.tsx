"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lang } from "./Sidebar";

type HeroSectionProps = {
  lang: Lang;
};

const copy = {
  ar: {
    dir: "rtl",
    kicker: "العراق × الصين",
    mini: "استقبال • مسارات • خدمات رقمية",
    titleTop: "الجسر",
    titleBottom: "الثقافي",
    mainTitle: "الجسر السياحي والثقافي العراقي-الصيني",
    desc: "منظومة متكاملة لاستقبال وإدارة الوفود الصينية داخل العراق، تجمع بين السياحة الثقافية، المسارات التراثية، البروتوكول، النقل الآمن، والخدمات الإلكترونية المساندة.",
    cta: "استعراض الخطة",
    second: "الخدمات الرقمية",
    services: ["استقبال VIP", "سيارات وأمن", "ترجمة وإرشاد", "منصة إلكترونية"],
    floating: ["VIP", "QR Guide", "Virtual Tours", "Live Route"],
    slides: [
      {
        city: "بغداد",
        label: "بغداد الثقافية",
        title: "متاحف وأسواق ومواقع تراثية وثقافية مختارة",
        image: "/images/hero-baghdad.jpg",
      },
      {
        city: "الجنوب",
        label: "الجنوب الحضاري",
        title: "أور، الزقورة، الأهوار، والبصرة",
        image: "/images/hero-south.jpg",
      },
      {
        city: "العراق",
        label: "العراق الكامل",
        title: "بغداد، الجنوب، كردستان، والموصل ضمن تجربة متكاملة",
        image: "/images/hero-kurdistan.jpg",
      },
    ],
  },
  en: {
    dir: "ltr",
    kicker: "IRAQ × CHINA",
    mini: "Reception • Routes • Digital Services",
    titleTop: "CULTURAL",
    titleBottom: "BRIDGE",
    mainTitle: "The Iraq-China Tourism & Cultural Bridge",
    desc: "An integrated system for receiving and managing Chinese delegations in Iraq, combining cultural tourism, heritage routes, protocol, secure mobility, and supporting digital services.",
    cta: "View Plan",
    second: "Digital Services",
    services: ["VIP Reception", "Cars & Security", "Translation & Guidance", "Digital Platform"],
    floating: ["VIP", "QR Guide", "Virtual Tours", "Live Route"],
    slides: [
      {
        city: "Baghdad",
        label: "Cultural Baghdad",
        title: "Selected museums, markets, and cultural heritage sites",
        image: "/images/hero-baghdad.jpg",
      },
      {
        city: "South",
        label: "Civilizational South",
        title: "Ur, the Ziggurat, the Marshes, and Basra",
        image: "/images/hero-south.jpg",
      },
      {
        city: "Iraq",
        label: "Complete Iraq",
        title: "Baghdad, the South, Kurdistan, and Mosul in one integrated experience",
        image: "/images/hero-kurdistan.jpg",
      },
    ],
  },
  zh: {
    dir: "ltr",
    kicker: "伊拉克 × 中国",
    mini: "接待 • 路线 • 数字服务",
    titleTop: "文化",
    titleBottom: "桥梁",
    mainTitle: "伊拉克-中国旅游与文化桥梁",
    desc: "一个完整的中国代表团接待与管理系统，结合文化旅游、遗产路线、礼宾服务、安全交通以及数字化支持服务。",
    cta: "查看方案",
    second: "数字服务",
    services: ["贵宾接待", "车辆安保", "翻译导览", "数字平台"],
    floating: ["VIP", "二维码指南", "虚拟参观", "实时路线"],
    slides: [
      {
        city: "巴格达",
        label: "文化巴格达",
        title: "精选博物馆、市场与文化遗产地点",
        image: "/images/hero-baghdad.jpg",
      },
      {
        city: "南部",
        label: "文明南部",
        title: "乌尔、神庙、湿地与巴士拉",
        image: "/images/hero-south.jpg",
      },
      {
        city: "伊拉克",
        label: "完整伊拉克",
        title: "巴格达、南部、库尔德斯坦与摩苏尔的综合体验",
        image: "/images/hero-kurdistan.jpg",
      },
    ],
  },
} as const;

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = copy[lang];
  const [active, setActive] = useState(0);
  const current = useMemo(() => t.slides[active], [active, t.slides]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % t.slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [t.slides.length]);

  return (
    <section
      id="section-1"
      dir={t.dir}
      className="relative min-h-screen overflow-hidden bg-[#150203] text-white lg:pl-[82px]"
    >
      {t.slides.map((slide, index) => (
        <div
          key={slide.image}
          className={[
            "absolute inset-0 bg-cover bg-center transition-all duration-[1400ms]",
            active === index ? "scale-100 opacity-100" : "scale-105 opacity-0",
          ].join(" ")}
          style={{
            backgroundImage: `linear-gradient(120deg,rgba(21,2,3,0.72),rgba(111,7,12,0.5)),url('${slide.image}'),linear-gradient(135deg,#150203,#6f070c 58%,#201815)`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#150203] via-[#150203]/70 to-[#6f070c]/20" />
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="pointer-events-none absolute right-4 top-8 text-[16vw] font-black leading-none text-white/[0.055]">
        中伊文化桥梁
      </div>
      <div className="pointer-events-none absolute left-[8%] top-[18%] text-7xl font-black tracking-[0.4em] text-[#d9a441]/10 md:text-9xl">
        𒀭 𒆠 𒈗
      </div>

      <div className="absolute left-[10%] right-[10%] top-[52%] hidden h-px overflow-hidden bg-white/15 lg:block">
        <div className="h-full animate-route-flow bg-gradient-to-r from-transparent via-[#ff1d2d] to-transparent" />
      </div>
      <span className="absolute left-[22%] top-[52%] hidden h-3 w-3 -translate-y-1/2 animate-pulse-dot rounded-full bg-[#ff1d2d] shadow-[0_0_24px_rgba(255,29,45,0.8)] lg:block" />
      <span className="absolute right-[18%] top-[52%] hidden h-3 w-3 -translate-y-1/2 animate-pulse-dot rounded-full bg-[#d9a441] shadow-[0_0_24px_rgba(217,164,65,0.75)] lg:block" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-between px-5 py-8 md:px-10 lg:py-10">
        <div className="grid flex-1 gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="pt-20 lg:pt-0">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[72px] w-[5px] bg-[#ff1d2d] shadow-[0_0_24px_rgba(255,29,45,0.65)]" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.42em] text-white/75">
                  {t.kicker}
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-[#d9a441]">
                  {t.mini}
                </p>
              </div>
            </div>

            <h1
              className={[
                "font-black uppercase leading-[0.78] tracking-normal text-white",
                lang === "zh"
                  ? "text-[20vw] md:text-[12vw] lg:text-[8.8vw]"
                  : "text-[18vw] md:text-[12vw] lg:text-[8.4vw]",
              ].join(" ")}
            >
              <span className="block animate-clip-in">{t.titleTop}</span>
              <span className="block animate-clip-in-delay text-white/92">
                {t.titleBottom}
              </span>
            </h1>

            <div className="mt-8 max-w-3xl border-t border-white/15 pt-6">
              <h2 className="text-2xl font-black leading-tight md:text-4xl">
                {t.mainTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-white/70">
                {t.desc}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#section-2" className="bg-white px-8 py-4 text-sm font-black text-[#4b070a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff1d2d] hover:text-white hover:shadow-[0_0_35px_rgba(255,29,45,0.55)]">
                {t.cta}
              </a>
              <a href="#section-4" className="border border-white/20 bg-white/10 px-8 py-4 text-sm font-black text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#b5121b]">
                {t.second}
              </a>
            </div>
          </div>

          <div className="relative min-h-[470px] lg:min-h-[610px]">
            <div className="absolute left-0 top-4 z-20 border border-white/15 bg-black/30 px-5 py-3 text-xs font-black uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl">
              {String(active + 1).padStart(2, "0")} / {String(t.slides.length).padStart(2, "0")}
            </div>

            <div className="absolute right-0 top-0 z-20 flex gap-2">
              {t.slides.map((slide, index) => (
                <button
                  key={slide.city}
                  onClick={() => setActive(index)}
                  className={[
                    "h-3 transition-all duration-500",
                    active === index
                      ? "w-14 bg-white shadow-[0_0_22px_rgba(255,255,255,0.6)]"
                      : "w-3 bg-white/30 hover:bg-white/70",
                  ].join(" ")}
                  aria-label={`slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 top-16 overflow-hidden border border-white/12 bg-black/25 shadow-2xl shadow-black/45 backdrop-blur-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(21,2,3,0.04),rgba(21,2,3,0.72)),url('${current.image}'),linear-gradient(135deg,#b5121b,#201815 58%,#d9a441)`,
                }}
              />
              <span className="absolute left-6 top-6 h-16 w-16 border-l border-t border-white/55" />
              <span className="absolute right-6 top-6 h-16 w-16 border-r border-t border-white/55" />
              <span className="absolute bottom-6 left-6 h-16 w-16 border-b border-l border-white/55" />
              <span className="absolute bottom-6 right-6 h-16 w-16 border-b border-r border-white/55" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.36em] text-[#d9a441]">
                  {current.city}
                </p>
                <h3 className="max-w-lg text-4xl font-black leading-none md:text-6xl">
                  {current.label}
                </h3>
                <p className="mt-4 max-w-md text-base font-bold leading-7 text-white/72">
                  {current.title}
                </p>
              </div>
            </div>

            <div className="absolute -left-4 bottom-10 z-30 hidden w-[230px] border border-white/15 bg-black/40 p-5 backdrop-blur-xl md:block">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d9a441]">
                {current.city}
              </p>
              <p className="mt-3 text-xl font-black leading-6">{current.label}</p>
            </div>

            <div className="absolute -right-3 top-24 z-30 grid gap-3">
              {t.floating.map((item, index) => (
                <div
                  key={item}
                  className="border border-white/15 bg-black/35 px-4 py-3 text-xs font-black text-white/75 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff1d2d]"
                  style={{ transform: `translateX(${index % 2 === 0 ? 0 : 18}px)` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-px bg-white/10 md:grid-cols-4">
          {t.services.map((service, index) => (
            <div key={service} className="group bg-black/35 p-5 backdrop-blur-md transition-all duration-300 hover:bg-[#b5121b]/35">
              <p className="text-xs font-black text-[#d9a441]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-black text-white">{service}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-1 bg-[#ff1d2d] animate-hero-progress" />
      </div>
    </section>
  );
}
