"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lang } from "./Sidebar";

type VisionRouteGalleryProps = {
  lang: Lang;
};

const routeScenes = [
  { key: "baghdad", image: "/images/destinations/baghdad.jpg" },
  { key: "iraqMuseum", image: "/images/destinations/iraq-museum.jpg" },
  { key: "mustansiriya", image: "/images/destinations/mustansiriya.jpg" },
  { key: "abbasidPalace", image: "/images/destinations/abbasid-palace.jpg" },
  { key: "taqKasra", image: "/images/destinations/taq-kasra.jpg" },
  { key: "kadhimiya", image: "/images/destinations/kadhimiya.jpg" },
  { key: "ur", image: "/images/destinations/ur.jpg" },
  { key: "marshes", image: "/images/destinations/marshes.jpg" },
  { key: "karbala", image: "/images/destinations/karbala.jpg" },
  { key: "najaf", image: "/images/destinations/najaf.jpg" },
  { key: "mosul", image: "/images/destinations/mosul.jpg" },
  { key: "hadba", image: "/images/destinations/hadba.jpg" },
  { key: "erbil", image: "/images/destinations/erbil.jpg" },
  { key: "duhok", image: "/images/destinations/duhok.jpg" },
  { key: "sulaymaniyah", image: "/images/destinations/sulaymaniyah.jpg" },
  { key: "houseOfAntiques", image: "/images/destinations/house-of-antiques.jpg" },
] as const;

type SceneKey = (typeof routeScenes)[number]["key"];

const labels: Record<Lang, Record<SceneKey, string>> = {
  ar: {
    baghdad: "بغداد",
    iraqMuseum: "المتحف العراقي",
    mustansiriya: "المدرسة المستنصرية",
    abbasidPalace: "القصر العباسي",
    taqKasra: "طاق كسرى",
    kadhimiya: "الكاظمية",
    ur: "أور والزقورة",
    marshes: "الأهوار",
    karbala: "كربلاء",
    najaf: "النجف",
    mosul: "الموصل",
    hadba: "منارة الحدباء",
    erbil: "أربيل",
    duhok: "دهوك",
    sulaymaniyah: "السليمانية",
    houseOfAntiques: "بيت التحفيات",
  },
  en: {
    baghdad: "Baghdad",
    iraqMuseum: "Iraq Museum",
    mustansiriya: "Al-Mustansiriya School",
    abbasidPalace: "Abbasid Palace",
    taqKasra: "Taq Kasra",
    kadhimiya: "Al-Kadhimiya",
    ur: "Ur & Ziggurat",
    marshes: "Marshes",
    karbala: "Karbala",
    najaf: "Najaf",
    mosul: "Mosul",
    hadba: "Al-Hadba Minaret",
    erbil: "Erbil",
    duhok: "Duhok",
    sulaymaniyah: "Sulaymaniyah",
    houseOfAntiques: "House of Antiques",
  },
  zh: {
    baghdad: "巴格达",
    iraqMuseum: "伊拉克博物馆",
    mustansiriya: "穆斯坦西里亚学校",
    abbasidPalace: "阿拔斯宫",
    taqKasra: "泰西封拱门",
    kadhimiya: "卡迪米亚",
    ur: "乌尔与神庙",
    marshes: "湿地",
    karbala: "卡尔巴拉",
    najaf: "纳杰夫",
    mosul: "摩苏尔",
    hadba: "哈德巴宣礼塔",
    erbil: "埃尔比勒",
    duhok: "杜胡克",
    sulaymaniyah: "苏莱曼尼亚",
    houseOfAntiques: "古董之家",
  },
};

const copy = {
  ar: {
    dir: "rtl",
    title: "مشاهد من المسارات المقترحة",
    text: "صور مرجعية تساعد على عرض تنوع التجربة أمام الوفود.",
    previous: "السابق",
    next: "التالي",
  },
  en: {
    dir: "ltr",
    title: "Scenes from the Proposed Routes",
    text: "Reference visuals that help present the diversity of the experience to delegations.",
    previous: "Previous",
    next: "Next",
  },
  zh: {
    dir: "ltr",
    title: "推荐路线场景",
    text: "用于展示代表团体验多样性的参考视觉内容。",
    previous: "上一张",
    next: "下一张",
  },
} as const;

export default function VisionRouteGallery({ lang }: VisionRouteGalleryProps) {
  const t = copy[lang];
  const [active, setActive] = useState(0);
  const current = useMemo(() => routeScenes[active], [active]);
  const currentLabel = labels[lang][current.key] ?? current.key;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % routeScenes.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: 1 | -1) => {
    setActive((prev) => (prev + direction + routeScenes.length) % routeScenes.length);
  };

  return (
    <section
      dir={t.dir}
      className="relative overflow-hidden bg-[#fffaf6] px-5 py-16 text-[#201815] md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.34em] text-[#b5121b]">
              02 / GALLERY
            </p>
            <h2 className="text-5xl font-black leading-none md:text-7xl">
              {t.title}
            </h2>
          </div>
          <p className="max-w-3xl border-t border-[#201815]/14 pt-6 text-lg font-black leading-8 text-[#201815]/72 md:text-2xl md:leading-10">
            {t.text}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="group relative min-h-[520px] overflow-hidden bg-[#201815] shadow-2xl shadow-[#201815]/18">
            {routeScenes.map((scene, index) => (
              <div
                key={scene.key}
                className={[
                  "absolute inset-0 bg-cover bg-center transition-all duration-[1200ms]",
                  active === index ? "scale-100 opacity-100" : "scale-105 opacity-0",
                ].join(" ")}
                style={{
                  backgroundImage: `linear-gradient(120deg,rgba(181,18,27,0.3),rgba(32,24,21,0.32)),url('${scene.image}'),linear-gradient(135deg,#b5121b,#201815 60%,#d9a441)`,
                }}
              />
            ))}
            <span className="absolute left-6 top-6 h-14 w-14 border-l border-t border-white/60" />
            <span className="absolute bottom-6 right-6 h-14 w-14 border-b border-r border-white/60" />

            <button
              type="button"
              onClick={() => move(-1)}
              className="absolute left-6 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/25 bg-black/35 text-xl font-black text-white backdrop-blur-md transition-all hover:bg-[#b5121b]"
              aria-label={t.previous}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="absolute right-6 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/25 bg-black/35 text-xl font-black text-white backdrop-blur-md transition-all hover:bg-[#b5121b]"
              aria-label={t.next}
            >
              ›
            </button>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/82 to-transparent p-8">
              <p className="inline-flex bg-[#b5121b] px-4 py-2 text-xs font-black text-white">
                {String(active + 1).padStart(2, "0")} / {routeScenes.length}
              </p>
              <h3 className="mt-4 text-4xl font-black leading-none text-white md:text-6xl">
                {currentLabel}
              </h3>
            </div>
          </div>

          <div className="grid max-h-[520px] gap-3 overflow-y-auto pr-1">
            {routeScenes.map((scene, index) => {
              const label = labels[lang][scene.key] ?? scene.key;

              return (
                <button
                  key={scene.key}
                  onClick={() => setActive(index)}
                  className={[
                    "grid grid-cols-[88px_1fr] items-center gap-4 border p-3 text-start transition-all duration-300 hover:-translate-y-1",
                    active === index
                      ? "border-[#b5121b] bg-[#b5121b] text-white"
                      : "border-[#201815]/12 bg-white/45 text-[#201815]",
                  ].join(" ")}
                >
                  <span
                    className="h-16 bg-[#201815] bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${scene.image}'),linear-gradient(135deg,#b5121b,#201815 58%,#d9a441)`,
                    }}
                  />
                  <span>
                    <span
                      className={[
                        "block text-xs font-black",
                        active === index ? "text-white/60" : "text-[#b5121b]",
                      ].join(" ")}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-sm font-black leading-5">
                      {label}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
