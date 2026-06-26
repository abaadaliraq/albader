"use client";

import Link from "next/link";
import type { Lang } from "./Sidebar";

type PlansSectionProps = {
  lang: Lang;
};

const copy = {
  ar: {
    dir: "rtl",
    title: "خطط استقبال الوفود",
    subtitle: [
      "ثلاث مسارات تشغيلية مرنة حسب مدة الزيارة ومستوى الوفد وأهدافه.",
      "من بغداد المركزة إلى الجنوب الحضاري ثم تجربة العراق الشاملة.",
    ],
    button: "عرض تفاصيل الخطط",
    plans: [
      {
        code: "A",
        name: "خطة بغداد المركزة",
        duration: "يومان إلى 5 أيام",
        image: "/images/plans/plan-a-baghdad.jpg",
      },
      {
        code: "B",
        name: "خطة بغداد والجنوب",
        duration: "5 أيام إلى أسبوع",
        image: "/images/plans/plan-b-south.jpg",
      },
      {
        code: "C",
        name: "خطة العراق الشاملة",
        duration: "أسبوع إلى 10 أيام",
        image: "/images/plans/plan-c-iraq.jpg",
      },
    ],
  },
  en: {
    dir: "ltr",
    title: "Delegation Reception Plans",
    subtitle: [
      "Three flexible operational routes based on visit duration, delegation level, and objectives.",
      "From focused Baghdad to the civilizational South and the complete Iraq experience.",
    ],
    button: "View Plan Details",
    plans: [
      {
        code: "A",
        name: "Focused Baghdad Plan",
        duration: "2 to 5 Days",
        image: "/images/plans/plan-a-baghdad.jpg",
      },
      {
        code: "B",
        name: "Baghdad & South Plan",
        duration: "5 Days to 1 Week",
        image: "/images/plans/plan-b-south.jpg",
      },
      {
        code: "C",
        name: "Complete Iraq Plan",
        duration: "1 Week to 10 Days",
        image: "/images/plans/plan-c-iraq.jpg",
      },
    ],
  },
  zh: {
    dir: "ltr",
    title: "代表团接待方案",
    subtitle: [
      "根据访问时间、代表团级别与目标设计的三条灵活执行路线。",
      "从巴格达重点路线到文明南部，再到完整伊拉克体验。",
    ],
    button: "查看方案详情",
    plans: [
      {
        code: "A",
        name: "巴格达重点方案",
        duration: "2至5天",
        image: "/images/plans/plan-a-baghdad.jpg",
      },
      {
        code: "B",
        name: "巴格达与南部方案",
        duration: "5天至1周",
        image: "/images/plans/plan-b-south.jpg",
      },
      {
        code: "C",
        name: "完整伊拉克方案",
        duration: "1周至10天",
        image: "/images/plans/plan-c-iraq.jpg",
      },
    ],
  },
} as const;

export default function PlansSection({ lang }: PlansSectionProps) {
  const t = copy[lang];

  return (
    <section
      id="section-3"
      dir={t.dir}
      className="relative min-h-[88vh] overflow-hidden bg-[#fbf7f2] px-5 py-16 text-[#201815] md:px-10 lg:pl-[82px]"
    >
      <div className="absolute inset-0 opacity-[0.28] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:104px_104px]" />
      <div className="pointer-events-none absolute -right-8 top-5 animate-watermark-drift select-none text-[22vw] font-black leading-none text-[#b5121b]/[0.05] lg:text-[14vw]">
        接待方案
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[3px] bg-[#b5121b] lg:block" />

      <div className="relative z-10 mx-auto flex min-h-[calc(88vh-8rem)] max-w-[1500px] flex-col justify-center">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="animate-soft-fade-up">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.36em] text-[#b5121b]">
              03 / Reception Plans
            </p>
            <h2
              className={[
                "max-w-5xl font-black uppercase leading-[0.88] tracking-normal text-[#201815]",
                lang === "zh"
                  ? "text-[15vw] md:text-[7vw] lg:text-[5vw]"
                  : "text-[13vw] md:text-[6.3vw] lg:text-[4.55vw]",
              ].join(" ")}
            >
              {t.title}
            </h2>
          </div>

          <div className="animate-soft-fade-up border-t border-[#201815]/15 pt-7">
            {t.subtitle.map((line) => (
              <p
                key={line}
                className="max-w-3xl text-lg font-black leading-8 text-[#201815]/78 md:text-2xl md:leading-10"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[7%] right-[7%] top-[104px] hidden h-px overflow-hidden bg-[#201815]/14 md:block">
            <div className="h-full w-full animate-route-move bg-gradient-to-r from-transparent via-[#b5121b] to-transparent" />
          </div>
          <div className="absolute left-[7%] right-[7%] top-[100px] hidden md:block">
            <span className="block h-3 w-3 animate-floating-dot rounded-full bg-[#b5121b] shadow-[0_0_22px_rgba(181,18,27,0.8)]" />
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {t.plans.map((plan, index) => (
              <article
                key={plan.code}
                className="group relative pt-7 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-5 flex items-end justify-between">
                  <span className="text-7xl font-black leading-none text-[#b5121b]/20 transition-all duration-500 group-hover:scale-110 group-hover:text-[#b5121b]/45">
                    {plan.code}
                  </span>
                  <span className="text-xs font-black text-[#201815]/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <a
                  href={plan.image}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block h-56 overflow-hidden bg-[#201815] transition-all duration-300 hover:-translate-y-1 md:h-64"
                  style={{
                    backgroundImage: `url('${plan.image}'),linear-gradient(135deg,#b5121b,#201815 58%,#d9a441)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <span className="sr-only">{plan.name}</span>
                </a>

                <div className="mt-6 border-t border-[#201815]/12 pt-5">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b5121b]">
                    {plan.duration}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-8 text-[#201815]">
                    {plan.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/plans"
            className="inline-flex items-center bg-[#b5121b] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#201815] hover:shadow-[0_0_28px_rgba(181,18,27,0.32)]"
          >
            {t.button}
            <span className={lang === "ar" ? "mr-3" : "ml-3"}>
              {lang === "ar" ? "←" : "→"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
