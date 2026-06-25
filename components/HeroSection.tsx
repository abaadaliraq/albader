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
    mainTitle: "الجسر السياحي والثقافي العراقي–الصيني",
    desc: "منظومة متكاملة لاستقبال وإدارة الوفود الصينية داخل العراق، تجمع بين السياحة الثقافية، المسارات التراثية، البروتوكول، النقل الآمن، والخدمات الإلكترونية المساندة.",
    cta: "استعراض الخطة",
    second: "الخدمات الرقمية",
    slides: [
      {
        number: "01",
        city: "بغداد",
        label: "بغداد الثقافية",
        title: "استقبال رسمي ومسار تراثي داخل العاصمة",
        image: "/images/hero-baghdad.jpg",
      },
      {
        number: "02",
        city: "الجنوب",
        label: "الجنوب الحضاري",
        title: "الزقورة، أور، الأهوار، والبصرة",
        image: "/images/hero-south.jpg",
      },
      {
        number: "03",
        city: "كردستان",
        label: "كردستان العراق",
        title: "أربيل، دهوك، السليمانية",
        image: "/images/hero-kurdistan.jpg",
      },
    ],
    cards: ["استقبال VIP", "سيارات وأمن", "ترجمة وإرشاد", "منصة إلكترونية"],
  },

  en: {
    dir: "ltr",
    kicker: "IRAQ × CHINA",
    mini: "Reception • Routes • Digital Services",
    titleTop: "CULTURAL",
    titleBottom: "BRIDGE",
    mainTitle: "The Iraq–China Tourism & Cultural Bridge",
    desc: "A complete reception framework for Chinese delegations in Iraq, combining cultural tourism, heritage routes, protocol, secure transport, and supporting digital services.",
    cta: "View Plan",
    second: "Digital Services",
    slides: [
      {
        number: "01",
        city: "BAGHDAD",
        label: "Cultural Baghdad",
        title: "Official reception and heritage route in the capital",
        image: "/images/hero-baghdad.jpg",
      },
      {
        number: "02",
        city: "SOUTH",
        label: "Civilizational South",
        title: "Ziggurat, Ur, Marshes, and Basra",
        image: "/images/hero-south.jpg",
      },
      {
        number: "03",
        city: "KURDISTAN",
        label: "Iraqi Kurdistan",
        title: "Erbil, Duhok, and Sulaymaniyah",
        image: "/images/hero-kurdistan.jpg",
      },
    ],
    cards: ["VIP Reception", "Cars & Security", "Translation", "Digital Platform"],
  },

  zh: {
    dir: "ltr",
    kicker: "伊拉克 × 中国",
    mini: "接待 • 路线 • 数字服务",
    titleTop: "文化",
    titleBottom: "桥梁",
    mainTitle: "伊拉克–中国旅游与文化桥梁",
    desc: "一个完整的中国代表团接待体系，结合文化旅游、遗产路线、礼宾服务、安全交通以及数字化支持服务。",
    cta: "查看方案",
    second: "数字服务",
    slides: [
      {
        number: "01",
        city: "巴格达",
        label: "文化巴格达",
        title: "首都官方接待与文化遗产路线",
        image: "/images/hero-baghdad.jpg",
      },
      {
        number: "02",
        city: "南部",
        label: "文明南部",
        title: "乌尔、神庙、湿地与巴士拉",
        image: "/images/hero-south.jpg",
      },
      {
        number: "03",
        city: "库尔德斯坦",
        label: "伊拉克库尔德斯坦",
        title: "埃尔比勒、杜胡克、苏莱曼尼亚",
        image: "/images/hero-kurdistan.jpg",
      },
    ],
    cards: ["贵宾接待", "车辆安全", "翻译导览", "数字平台"],
  },
} as const;

export default function HeroSection({ lang }: HeroSectionProps) {
  const [active, setActive] = useState(0);
  const t = copy[lang];
  const current = useMemo(() => t.slides[active], [active, t.slides]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % t.slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [t.slides.length]);

  return (
    <section
      id="section-1"
      dir={t.dir}
      className="relative min-h-screen overflow-hidden bg-[#2a0507] text-white lg:pl-[82px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,29,45,0.35),transparent_28%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.1),transparent_22%),linear-gradient(135deg,#3a0709_0%,#140203_48%,#530a0d_100%)]" />

      <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="absolute left-[8%] top-[12%] h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="absolute right-[12%] top-[18%] h-[260px] w-[260px] rounded-full border border-[#ff1d2d]/25" />
      <div className="absolute bottom-[-90px] left-[35%] h-[240px] w-[240px] rounded-full bg-[#ff1d2d]/18 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 gap-10 px-5 py-10 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-0">
        <div className="relative order-2 lg:order-1">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[72px] w-[5px] bg-white shadow-[0_0_24px_rgba(255,255,255,0.5)]" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-white/70">
                {t.kicker}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f2d89b]">
                {t.mini}
              </p>
            </div>
          </div>

          <div className="relative">
            <h1
              className={[
                "select-none font-black uppercase leading-[0.78] tracking-[-0.07em] text-white",
                lang === "ar"
                  ? "text-[19vw] md:text-[13vw] lg:text-[9.5vw]"
                  : lang === "zh"
                    ? "text-[18vw] md:text-[12vw] lg:text-[8.7vw] tracking-[-0.02em]"
                    : "text-[17vw] md:text-[12vw] lg:text-[8.8vw]",
              ].join(" ")}
            >
              <span className="block animate-clip-in">{t.titleTop}</span>
              <span className="block animate-clip-in-delay text-white/95">
                {t.titleBottom}
              </span>
            </h1>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="text-2xl font-black leading-tight text-white md:text-4xl">
              {t.mainTitle}
            </h2>

            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/68">
              {t.desc}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#section-2"
              className="group rounded-full bg-white px-8 py-4 text-sm font-black text-[#4b070a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff1d2d] hover:text-white hover:shadow-[0_0_35px_rgba(255,29,45,0.55)]"
            >
              {t.cta}
              <span className={lang === "ar" ? "mr-3 inline-block" : "ml-3 inline-block"}>
                {lang === "ar" ? "←" : "→"}
              </span>
            </a>

            <a
              href="#section-4"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-black text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#ff1d2d] hover:bg-[#ff1d2d]/15"
            >
              {t.second}
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {t.cards.map((card, index) => (
              <div
                key={card}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-black/22 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ff1d2d]/70 hover:bg-[#ff1d2d]/15 hover:shadow-[0_0_34px_rgba(255,29,45,0.25)]"
              >
                <div className="mb-8 text-xs font-black text-white/35">
                  0{index + 1}
                </div>
                <div className="text-sm font-black leading-5 text-white">
                  {card}
                </div>
                <div className="absolute -right-7 -top-7 h-20 w-20 rounded-full bg-[#ff1d2d]/18 blur-xl transition-all duration-300 group-hover:bg-[#ff1d2d]/35" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 min-h-[580px] lg:order-2">
          <div className="absolute left-0 top-12 z-20 hidden rounded-full border border-white/15 bg-black/30 px-5 py-3 text-xs font-black uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl md:block">
            {current.number} / 03
          </div>

          <div className="absolute right-2 top-0 z-20 flex gap-2">
            {t.slides.map((slide, index) => (
              <button
                key={slide.number}
                onClick={() => setActive(index)}
                className={[
                  "h-3 rounded-full transition-all duration-500",
                  active === index
                    ? "w-14 bg-white shadow-[0_0_22px_rgba(255,255,255,0.6)]"
                    : "w-3 bg-white/30 hover:bg-white/70",
                ].join(" ")}
                aria-label={`slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="relative ml-auto mt-14 h-[520px] max-w-[650px] overflow-hidden rounded-[34px] border border-white/10 bg-black shadow-2xl shadow-black/60">
            {t.slides.map((slide, index) => (
              <div
                key={slide.image}
                className={[
                  "absolute inset-0 bg-cover bg-center transition-all duration-[1400ms]",
                  active === index
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0",
                ].join(" ")}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#780b10]/45 via-transparent to-transparent" />

            <div className="absolute left-7 top-7 h-16 w-16 border-l border-t border-white/50" />
            <div className="absolute right-7 top-7 h-16 w-16 border-r border-t border-white/50" />
            <div className="absolute bottom-7 left-7 h-16 w-16 border-b border-l border-white/50" />
            <div className="absolute bottom-7 right-7 h-16 w-16 border-b border-r border-white/50" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.36em] text-[#f2d89b]">
                {current.city}
              </p>

              <h3 className="max-w-lg text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
                {current.label}
              </h3>

              <p className="mt-4 max-w-md text-base font-bold leading-7 text-white/70">
                {current.title}
              </p>
            </div>
          </div>

        
        
        </div>
      </div>
    </section>
  );
}