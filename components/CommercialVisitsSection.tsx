"use client";

import Link from "next/link";
import type { Lang } from "./Sidebar";

type Props = { lang: Lang };

const copy = {
  ar: {
    dir: "rtl",
    eyebrow: "06 / مسار اقتصادي مرافق",
    title: "الزيارات التجارية والصناعية",
    intro:
      "إلى جانب المسار الثقافي والسياحي، يمكن توسيع برنامج الوفود الصينية ليشمل زيارات تجارية وصناعية مدروسة تربط الوفد بالقطاعات العراقية القابلة للتعاون والاستثمار.",
    note: "مسار مرن يُبنى بحسب تخصص الوفد وأهداف الزيارة، ليحوّل البرنامج إلى منصة عملية لعلاقات اقتصادية وثقافية مستدامة.",
    button: "عرض تفاصيل المسار التجاري",
    items: [
      ["الموانئ والمناطق اللوجستية", "فرص النقل والتخزين وإعادة التصدير وسلاسل الإمداد."],
      ["المدن والمناطق الصناعية", "التصنيع المشترك وتحديث خطوط الإنتاج والتجميع المحلي."],
      ["غرف التجارة والصناعات", "لقاءات مباشرة بين الوفود والقطاع الخاص العراقي."],
      ["الطاقة والبنى التحتية", "الطاقة الشمسية والمعدات والمقاولات والخدمات الهندسية."],
      ["الأسواق والمنتجات المحلية", "قنوات جديدة للحرف والصناعات الثقافية والمنتجات العراقية."],
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "06 / Complementary Economic Route",
    title: "Commercial & Industrial Visits",
    intro:
      "Alongside the cultural and tourism route, the program can include curated commercial and industrial visits connecting Chinese delegations with Iraqi sectors ready for cooperation and investment.",
    note: "A flexible route shaped around each delegation's field and objectives, turning the visit into a practical platform for lasting economic and cultural relations.",
    button: "View Commercial Route",
    items: [
      ["Ports & Logistics", "Transport, storage, re-export, and supply-chain opportunities."],
      ["Industrial Cities", "Joint manufacturing, production upgrades, and local assembly."],
      ["Business Networks", "Direct meetings with Iraqi private-sector counterparts."],
      ["Energy & Infrastructure", "Solar energy, equipment, contracting, and engineering services."],
      ["Markets & Local Products", "New channels for Iraqi crafts, cultural industries, and products."],
    ],
  },
  zh: {
    dir: "ltr",
    eyebrow: "06 / 配套经济路线",
    title: "商务与工业访问",
    intro:
      "除文化与旅游路线外，该项目还可安排经过筛选的商务和工业访问，将中国代表团与具备合作和投资潜力的伊拉克行业连接起来。",
    note: "路线可根据代表团专业和访问目标灵活设计，使访问成为建立长期经贸与文化关系的实践平台。",
    button: "查看商务路线详情",
    items: [
      ["港口与物流区", "对接运输、仓储、再出口与供应链机会。"],
      ["工业城市与园区", "推动联合制造、产线升级与本地组装。"],
      ["商贸与行业网络", "安排代表团与伊拉克私营部门直接会谈。"],
      ["能源与基础设施", "探索太阳能、设备、承包与工程服务合作。"],
      ["市场与本地产品", "为伊拉克手工艺、文化产业和产品开拓渠道。"],
    ],
  },
} as const;

export default function CommercialVisitsSection({ lang }: Props) {
  const t = copy[lang];

  return (
    <section id="section-6" dir={t.dir} className="relative overflow-hidden bg-[#fffaf6] px-5 py-20 text-[#201815] md:px-10 lg:pl-[82px]">
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(90deg,rgba(181,18,27,.08)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,.05)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b5121b]/55 to-transparent" />
      <div className="pointer-events-none absolute -right-5 top-4 select-none text-[22vw] font-black leading-none text-[#b5121b]/[0.04] lg:text-[13vw]">经贸</div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#b5121b]">{t.eyebrow}</p>
            <h2 className="max-w-4xl text-5xl font-black leading-[.96] tracking-normal md:text-7xl lg:text-[5.3vw]">{t.title}</h2>
          </div>
          <div className="border-t border-[#201815]/15 pt-7">
            <p className="text-lg font-black leading-8 text-[#201815]/80 md:text-2xl md:leading-10">{t.intro}</p>
            <p className="mt-4 max-w-3xl text-sm font-bold leading-7 text-[#201815]/58 md:text-base">{t.note}</p>
          </div>
        </div>

        <div className="mt-14 grid border-y border-[#201815]/12 md:grid-cols-2 xl:grid-cols-5">
          {t.items.map(([title, text], index) => (
            <article key={title} className="group relative min-h-52 border-b border-[#201815]/12 p-6 transition-colors hover:bg-white/70 md:border-r xl:border-b-0">
              <span className="text-xs font-black text-[#b5121b]">{String(index + 1).padStart(2, "0")}</span>
              <div className="mt-8 h-px w-10 bg-[#d9a441] transition-all duration-300 group-hover:w-full group-hover:bg-[#b5121b]" />
              <h3 className="mt-5 text-xl font-black leading-7">{title}</h3>
              <p className="mt-3 text-sm font-bold leading-6 text-[#201815]/58">{text}</p>
            </article>
          ))}
        </div>

        <Link href="/commercial-visits" className="mt-10 inline-flex items-center bg-[#b5121b] px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#201815]">
          {t.button}<span className={lang === "ar" ? "mr-3" : "ml-3"}>{lang === "ar" ? "←" : "→"}</span>
        </Link>
      </div>
    </section>
  );
}
