"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Lang } from "./Sidebar";

type DestinationsSectionProps = {
  lang: Lang;
};

const copy = {
  ar: {
    dir: "rtl",
    sectionNumber: "05",
    eyebrow: "المسارات الثقافية",
    title: "الوجهات المقترحة",
    subtitle: [
      "مسارات مختارة تعرض العراق كوجهة تجمع بين الحضارة، التراث، الأسواق، والطبيعة.",
      "تبدأ من بغداد الثقافية، وتمتد إلى الجنوب الحضاري وكردستان العراق.",
    ],
    button: "عرض جميع الوجهات",
    route: ["بغداد", "الجنوب", "كردستان"],
    destinations: [
      {
        name: "بغداد التاريخية",
        region: "بغداد",
        text: "المتاحف والأسواق والذاكرة الثقافية.",
        image: "/images/destinations/baghdad.jpg",
      },
      {
        name: "بيت التحفيات",
        region: "بغداد",
        text: "وجهة تراثية وثقافية خاصة، وليست مكان إقامة.",
        image: "/images/destinations/house-of-antiques.jpg",
      },
      {
        name: "أور والزقورة",
        region: "الجنوب",
        text: "رمز حضاري من جذور وادي الرافدين.",
        image: "/images/destinations/ur.jpg",
      },
      {
        name: "الأهوار",
        region: "الجنوب",
        text: "مشهد طبيعي وثقافي فريد.",
        image: "/images/destinations/marshes.jpg",
      },
      {
        name: "أربيل",
        region: "كردستان",
        text: "مدينة تاريخية مناسبة للوفود الدولية.",
        image: "/images/destinations/erbil.jpg",
      },
      {
        name: "السليمانية",
        region: "كردستان",
        text: "ثقافة وطبيعة جبلية وهوية كردية.",
        image: "/images/destinations/sulaymaniyah.jpg",
      },
    ],
  },
  en: {
    dir: "ltr",
    sectionNumber: "05",
    eyebrow: "Cultural Routes",
    title: "Proposed Destinations",
    subtitle: [
      "Selected routes presenting Iraq as a destination of civilization, heritage, markets, and nature.",
      "Starting from cultural Baghdad and extending to the civilizational South and Iraqi Kurdistan.",
    ],
    button: "View All Destinations",
    route: ["Baghdad", "South", "Kurdistan"],
    destinations: [
      {
        name: "Historic Baghdad",
        region: "Baghdad",
        text: "Museums, markets, and cultural memory.",
        image: "/images/destinations/baghdad.jpg",
      },
      {
        name: "House of Antiques",
        region: "Baghdad",
        text: "A private cultural heritage destination, not accommodation.",
        image: "/images/destinations/house-of-antiques.jpg",
      },
      {
        name: "Ur & Ziggurat",
        region: "South",
        text: "A civilizational symbol from Mesopotamian roots.",
        image: "/images/destinations/ur.jpg",
      },
      {
        name: "Marshes",
        region: "South",
        text: "A unique natural and cultural landscape.",
        image: "/images/destinations/marshes.jpg",
      },
      {
        name: "Erbil",
        region: "Kurdistan",
        text: "A historic city suitable for international delegations.",
        image: "/images/destinations/erbil.jpg",
      },
      {
        name: "Sulaymaniyah",
        region: "Kurdistan",
        text: "Culture, mountain nature, and Kurdish identity.",
        image: "/images/destinations/sulaymaniyah.jpg",
      },
    ],
  },
  zh: {
    dir: "ltr",
    sectionNumber: "05",
    eyebrow: "文化路线",
    title: "推荐目的地",
    subtitle: [
      "精选路线展示伊拉克的文明、遗产、市场与自然景观。",
      "从文化巴格达开始，延伸至文明南部和伊拉克库尔德斯坦。",
    ],
    button: "查看所有目的地",
    route: ["巴格达", "南部", "库尔德斯坦"],
    destinations: [
      {
        name: "历史巴格达",
        region: "巴格达",
        text: "博物馆、市场与文化记忆。",
        image: "/images/destinations/baghdad.jpg",
      },
      {
        name: "古董之家",
        region: "巴格达",
        text: "私人文化遗产目的地，不作为住宿地点。",
        image: "/images/destinations/house-of-antiques.jpg",
      },
      {
        name: "乌尔与神庙",
        region: "南部",
        text: "来自美索不达米亚根源的文明象征。",
        image: "/images/destinations/ur.jpg",
      },
      {
        name: "湿地",
        region: "南部",
        text: "独特的自然与文化景观。",
        image: "/images/destinations/marshes.jpg",
      },
      {
        name: "埃尔比勒",
        region: "库尔德斯坦",
        text: "适合国际代表团访问的历史城市。",
        image: "/images/destinations/erbil.jpg",
      },
      {
        name: "苏莱曼尼亚",
        region: "库尔德斯坦",
        text: "文化、山地自然与库尔德身份。",
        image: "/images/destinations/sulaymaniyah.jpg",
      },
    ],
  },
} as const;

export default function DestinationsSection({ lang }: DestinationsSectionProps) {
  const t = copy[lang];
  const [active, setActive] = useState(0);
  const current = useMemo(() => t.destinations[active], [active, t.destinations]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((next) => (next + 1) % t.destinations.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [t.destinations.length]);

  return (
    <section
      id="section-5"
      dir={t.dir}
      className="relative min-h-screen overflow-hidden bg-[#fffaf6] px-5 py-16 text-[#201815] md:px-10 lg:pl-[82px]"
    >
      <div className="absolute inset-0 opacity-[0.32] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="pointer-events-none absolute -right-10 top-10 animate-watermark-drift select-none text-[23vw] font-black leading-none text-[#b5121b]/[0.045] lg:text-[14vw]">
        目的地
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1500px] flex-col justify-center">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="animate-soft-fade-up">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.36em] text-[#b5121b]">
              {t.sectionNumber} / {t.eyebrow}
            </p>
            <h2
              className={[
                "max-w-5xl font-black uppercase leading-[0.88] tracking-normal text-[#201815]",
                lang === "zh"
                  ? "text-[16vw] md:text-[7.5vw] lg:text-[5.4vw]"
                  : "text-[13vw] md:text-[6.4vw] lg:text-[4.85vw]",
              ].join(" ")}
            >
              {t.title}
            </h2>
          </div>

          <div className="animate-soft-fade-up border-t border-[#201815]/15 pt-7">
            {t.subtitle.map((line) => (
              <p
                key={line}
                className="max-w-3xl text-lg font-black leading-8 text-[#201815]/76 md:text-2xl md:leading-10"
              >
                {line}
              </p>
            ))}
            <Link
              href="/destinations"
              className="mt-7 inline-flex items-center bg-[#b5121b] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#201815] hover:shadow-[0_0_28px_rgba(181,18,27,0.28)]"
            >
              {t.button}
              <span className={lang === "ar" ? "mr-3" : "ml-3"}>
                {lang === "ar" ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="group relative min-h-[520px] overflow-hidden bg-[#201815] shadow-2xl shadow-[#201815]/20">
            {t.destinations.map((destination, index) => (
              <div
                key={destination.name}
                className={[
                  "absolute inset-0 bg-cover bg-center transition-all duration-[1100ms]",
                  active === index
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0",
                ].join(" ")}
                style={{
                  backgroundImage: `linear-gradient(120deg,rgba(181,18,27,0.42),rgba(32,24,21,0.3)),url('${destination.image}'),linear-gradient(135deg,#b5121b,#201815 60%,#d9a441)`,
                }}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="mb-3 inline-flex bg-[#b5121b] px-4 py-2 text-xs font-black text-white">
                {current.region}
              </p>
              <h3 className="text-4xl font-black leading-none text-white md:text-6xl">
                {current.name}
              </h3>
              <p className="mt-4 max-w-xl text-base font-bold leading-7 text-white/72">
                {current.text}
              </p>
            </div>
            <div className="absolute left-5 top-5 h-12 w-12 border-l border-t border-white/55" />
            <div className="absolute right-5 top-5 h-12 w-12 border-r border-t border-white/55" />
            <div className="absolute inset-x-0 top-0 h-px bg-[#ff1d2d] opacity-0 shadow-[0_0_20px_rgba(255,29,45,0.75)] transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="border-y border-[#201815]/14 py-6">
              <div className="relative flex items-center justify-between gap-3">
                <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 overflow-hidden bg-[#201815]/14">
                  <div className="h-full animate-route-move bg-gradient-to-r from-transparent via-[#b5121b] to-transparent" />
                </div>
                {t.route.map((item, index) => (
                  <div key={item} className="relative bg-[#fffaf6] px-3 text-center">
                    <span className="mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full bg-[#b5121b] text-xs font-black text-white shadow-[0_0_18px_rgba(181,18,27,0.35)]">
                      {index + 1}
                    </span>
                    <p className="text-sm font-black text-[#201815]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.destinations.map((destination, index) => (
                <button
                  key={destination.name}
                  onClick={() => setActive(index)}
                  className={[
                    "group relative overflow-hidden border p-4 text-start transition-all duration-300 hover:-translate-y-1",
                    active === index
                      ? "border-[#b5121b] bg-[#b5121b] text-white"
                      : "border-[#201815]/12 bg-white/35 text-[#201815] hover:border-[#b5121b]",
                  ].join(" ")}
                >
                  <p
                    className={[
                      "text-xs font-black",
                      active === index ? "text-white/60" : "text-[#b5121b]",
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-base font-black leading-6">
                    {destination.name}
                  </p>
                  <p
                    className={[
                      "mt-1 text-xs font-bold",
                      active === index ? "text-white/62" : "text-[#201815]/55",
                    ].join(" ")}
                  >
                    {destination.region}
                  </p>
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              {t.destinations.map((destination, index) => (
                <button
                  key={destination.name}
                  onClick={() => setActive(index)}
                  className={[
                    "h-2.5 rounded-full transition-all duration-300",
                    active === index ? "w-12 bg-[#b5121b]" : "w-2.5 bg-[#201815]/18",
                  ].join(" ")}
                  aria-label={destination.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
