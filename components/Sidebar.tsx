"use client";

import type { Dispatch, SetStateAction } from "react";

export type Lang = "ar" | "en" | "zh";

type SidebarProps = {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
};

const navText = {
  ar: [
    "الرؤية",
    "الاستقبال",
    "المسارات",
    "الخدمات الرقمية",
    "التشغيل",
    "الأثر",
  ],
  en: ["Vision", "Reception", "Routes", "Digital", "Operation", "Impact"],
  zh: ["愿景", "接待", "路线", "数字服务", "执行", "影响"],
};

const langs: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export default function Sidebar({ lang, setLang }: SidebarProps) {
  const nav = navText[lang];

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[82px] border-r border-white/10 bg-[#170304]/85 backdrop-blur-2xl lg:flex">
      <div className="relative flex h-full w-full flex-col items-center overflow-hidden py-6">
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#ff1d2d] to-transparent opacity-70" />
        <div className="absolute top-10 h-32 w-32 rounded-full bg-[#c90013]/25 blur-3xl" />
        <div className="absolute bottom-10 h-28 w-28 rounded-full bg-[#f2d89b]/10 blur-3xl" />

        <div className="relative grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-black text-white shadow-[0_0_30px_rgba(255,29,45,0.35)]">
          中
        </div>

        <div className="relative mt-10 flex flex-1 flex-col items-center gap-5">
          {nav.map((item, index) => (
            <a
              key={item}
              href={`#section-${index + 1}`}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-black text-white/55 transition-all duration-300 hover:border-[#ff1d2d] hover:bg-[#ff1d2d]/15 hover:text-white hover:shadow-[0_0_24px_rgba(255,29,45,0.55)]"
              title={item}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>

              <span className="pointer-events-none absolute left-[56px] top-1/2 min-w-max -translate-y-1/2 translate-x-2 rounded-full border border-white/10 bg-[#210507] px-4 py-2 text-xs font-bold text-white opacity-0 shadow-2xl shadow-black/40 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                {item}
              </span>

              <span className="absolute -right-[23px] top-1/2 h-px w-0 -translate-y-1/2 bg-[#ff1d2d] transition-all duration-300 group-hover:w-6" />
            </a>
          ))}
        </div>

        <div className="relative flex flex-col gap-2">
          {langs.map((item) => (
            <button
              key={item.code}
              onClick={() => setLang(item.code)}
              className={[
                "grid h-9 w-12 place-items-center rounded-full text-[10px] font-black transition-all duration-300",
                lang === item.code
                  ? "bg-[#ff1d2d] text-white shadow-[0_0_25px_rgba(255,29,45,0.55)]"
                  : "border border-white/10 bg-white/[0.03] text-white/45 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}