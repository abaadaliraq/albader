"use client";

import Link from "next/link";
import type { Lang } from "./Sidebar";

type SiteFooterProps = {
  lang: Lang;
};

const copy = {
  ar: {
    dir: "rtl",
    projectName: "الجسر السياحي والثقافي العراقي-الصيني",
    tagline:
      "تجربة استقبال منظمة تربط الثقافة، السياحة، الاقتصاد، والخدمات الرقمية.",
    copyright: "© 2026 جميع الحقوق محفوظة.",
    links: [
      { label: "الرؤية", href: "/vision" },
      { label: "الخطط", href: "/plans" },
      { label: "الخدمات الرقمية", href: "/digital-services" },
      { label: "الوجهات", href: "/destinations" },
      { label: "المسار التجاري", href: "/commercial-visits" },
    ],
  },
  en: {
    dir: "ltr",
    projectName: "Iraq-China Tourism & Cultural Bridge",
    tagline:
      "A structured reception experience connecting culture, tourism, economy, and digital services.",
    copyright: "© 2026 All rights reserved.",
    links: [
      { label: "Vision", href: "/vision" },
      { label: "Plans", href: "/plans" },
      { label: "Digital Services", href: "/digital-services" },
      { label: "Destinations", href: "/destinations" },
      { label: "Commercial Route", href: "/commercial-visits" },
    ],
  },
  zh: {
    dir: "ltr",
    projectName: "伊拉克-中国旅游与文化桥梁",
    tagline: "一个连接文化、旅游、经济与数字服务的结构化接待体验。",
    copyright: "© 2026 版权所有。",
    links: [
      { label: "愿景", href: "/vision" },
      { label: "方案", href: "/plans" },
      { label: "数字服务", href: "/digital-services" },
      { label: "目的地", href: "/destinations" },
      { label: "商务路线", href: "/commercial-visits" },
    ],
  },
} as const;

export default function SiteFooter({ lang }: SiteFooterProps) {
  const t = copy[lang];

  return (
    <footer
      dir={t.dir}
      className="relative overflow-hidden border-t border-[#ff1d2d]/25 bg-[#0d0102] px-5 py-10 text-white md:px-10 lg:pl-[82px]"
    >
      <div className="pointer-events-none absolute right-6 top-4 select-none text-6xl font-black text-white/[0.035] md:text-8xl">
        文化桥梁
      </div>
      <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-[#ff1d2d] shadow-[0_0_22px_rgba(255,29,45,0.85)]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <h2 className="text-2xl font-black leading-8 text-white md:text-3xl">
            {t.projectName}
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-bold leading-7 text-white/58 md:text-base">
            {t.tagline}
          </p>
        </div>

        <div className="md:text-end">
          <nav className="flex flex-wrap gap-3 md:justify-end">
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-white/10 px-4 py-2 text-xs font-black text-white/62 transition-all duration-300 hover:border-[#ff1d2d] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 flex flex-wrap gap-2 md:justify-end">
            {["AR", "EN", "中文"].map((item) => (
              <span
                key={item}
                className="border border-white/10 px-3 py-1.5 text-[10px] font-black text-white/42"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 text-xs font-bold text-white/35">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
