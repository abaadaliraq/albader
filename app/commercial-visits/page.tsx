"use client";

import Link from "next/link";
import type { Lang } from "@/components/Sidebar";
import { useStoredLang } from "@/hooks/useStoredLang";

const content = {
  ar: {
    dir: "rtl", back: "العودة للرئيسية", label: "المسار الاقتصادي المرافق", title: "المسار التجاري والصناعي للوفود الصينية",
    intro: "يمثل المسار التجاري والصناعي إضافة استراتيجية إلى برنامج استقبال الوفود الصينية، إذ يربط التجربة الثقافية بفرص التعاون الاقتصادي ويفتح المجال للقاءات مباشرة مع مؤسسات عراقية قادرة على بناء شراكات عملية في الصناعة والتجارة والطاقة والنقل والخدمات.",
    headings: { objectives: "أهداف المسار", sectors: "الجهات والمواقع المقترحة", routes: "مسارات قابلة للتخصيص", outputs: "مخرجات الزيارة" },
    objectives: ["تعزيز التعاون العراقي-الصيني في القطاعات الإنتاجية والخدمية.", "تعريف الوفود الصينية ببيئة الأعمال العراقية.", "دعم الاستثمار في الصناعة والطاقة والنقل والخدمات اللوجستية.", "فتح قنوات اتصال مباشرة مع القطاعين العام والخاص.", "ربط الاقتصاد بالصناعات الثقافية والحرف والمنتجات المحلية."],
    sectors: ["هيئات الاستثمار وغرف التجارة", "اتحادات الصناعات والمعارض الدولية", "الموانئ والمناطق الحرة واللوجستية", "المدن والمناطق الصناعية", "مصانع مختارة بحسب تخصص الوفد", "شركات النقل والتخزين والخدمات", "الفنادق وشركات السياحة وإدارة الوجهات"],
    routes: [["بغداد الاقتصادية", "لقاءات استثمار وأعمال، غرف التجارة والصناعة، معرض دولي، واجتماعات B2B."], ["البصرة اللوجستية والصناعية", "الموانئ والمناطق الحرة، المدينة الصناعية، وشركات النقل والتخزين."], ["الطاقة والبنى التحتية", "مشاريع الطاقة الشمسية والمعدات والمقاولات والخدمات الهندسية."], ["السياحة الاقتصادية", "الفنادق والنقل وإدارة الوجهات والأسواق التراثية والحرف والمنتجات العراقية."]],
    outputs: ["تقرير فرص تعاون بعد الزيارة", "قائمة جهات اتصال عراقية وصينية", "مقترحات شراكة أولية", "فرص مذكرات تفاهم", "خطة متابعة خلال 30 يومًا"],
    closing: "بهذا الشكل يتحول برنامج الوفود من زيارة تعريفية إلى منصة منظمة تجمع الثقافة والاستثمار والصناعة والسياحة، وتقدم العراق كوجهة حضارية واقتصادية منفتحة على الشراكات الدولية.",
  },
  en: {
    dir: "ltr", back: "Back to Home", label: "Complementary Economic Route", title: "Commercial & Industrial Route for Chinese Delegations",
    intro: "The commercial and industrial route is a strategic addition to the reception program. It connects the cultural experience with economic cooperation and enables direct meetings with Iraqi institutions capable of building practical partnerships in industry, trade, energy, transport, and services.",
    headings: { objectives: "Route Objectives", sectors: "Suggested Sectors & Sites", routes: "Customizable Routes", outputs: "Visit Outcomes" },
    objectives: ["Strengthen Iraq-China cooperation in productive and service sectors.", "Introduce delegations to Iraq's business environment.", "Support investment in industry, energy, transport, and logistics.", "Open direct channels with the public and private sectors.", "Connect the economy with cultural industries, crafts, and local products."],
    sectors: ["Investment bodies and chambers of commerce", "Industry networks and international exhibitions", "Ports, free zones, and logistics areas", "Industrial cities and zones", "Selected factories aligned with the delegation", "Transport, storage, and service companies", "Hotels, tourism, and destination operators"],
    routes: [["Economic Baghdad", "Investment and business meetings, industry networks, an international exhibition, and B2B sessions."], ["Logistics & Industrial Basra", "Ports, free zones, industrial areas, and transport and storage operators."], ["Energy & Infrastructure", "Solar projects, equipment providers, contractors, and engineering services."], ["Economic Tourism", "Hotels, transport, destination operators, heritage markets, crafts, and Iraqi products."]],
    outputs: ["Post-visit cooperation report", "Iraqi and Chinese contact list", "Initial partnership proposals", "Memorandum opportunities", "30-day follow-up plan"],
    closing: "The delegation program therefore becomes an organized platform combining culture, investment, industry, and tourism while presenting Iraq as a civilizational and economic destination open to international partnerships.",
  },
  zh: {
    dir: "ltr", back: "返回首页", label: "配套经济路线", title: "中国代表团商务与工业路线",
    intro: "商务与工业路线是代表团接待项目的战略补充，将文化体验与经济合作机会相连接，并安排代表团与能够在工业、贸易、能源、交通和服务领域建立务实伙伴关系的伊拉克机构直接会谈。",
    headings: { objectives: "路线目标", sectors: "建议行业与地点", routes: "可定制路线", outputs: "访问成果" },
    objectives: ["加强伊中生产与服务行业合作。", "帮助中国代表团了解伊拉克营商环境。", "支持工业、能源、交通和物流投资。", "建立与公共及私营部门的直接联系。", "连接经济与文化产业、手工艺和本地产品。"],
    sectors: ["投资机构与商会", "工业网络与国际展会", "港口、自由区与物流区", "工业城市与园区", "按代表团领域筛选的工厂", "交通、仓储与服务企业", "酒店、旅游与目的地运营机构"],
    routes: [["巴格达经济路线", "投资与商务会谈、行业网络、国际展会及B2B对接。"], ["巴士拉物流与工业路线", "港口、自由区、工业区及运输仓储企业。"], ["能源与基础设施路线", "太阳能项目、设备供应、承包与工程服务。"], ["经济旅游路线", "酒店、交通、目的地运营、传统市场、手工艺与伊拉克产品。"]],
    outputs: ["访问后合作机会报告", "伊中联系人清单", "初步伙伴关系建议", "谅解备忘录机会", "30天跟进计划"],
    closing: "由此，代表团项目将从介绍性访问升级为融合文化、投资、工业与旅游的组织化平台，并将伊拉克呈现为面向国际合作的文明与经济目的地。",
  },
} as const;

export default function CommercialVisitsPage() {
  const [lang, setLang] = useStoredLang();
  const t = content[lang];
  return (
    <main dir={t.dir} className="min-h-screen bg-[#fffaf6] text-[#201815]">
      <header className="relative overflow-hidden bg-[#201815] px-5 pb-20 pt-8 text-white md:px-10 md:pb-28 lg:px-20">
        <div className="absolute inset-0 opacity-[.14] bg-[linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="pointer-events-none absolute -right-4 top-12 text-[26vw] font-black leading-none text-white/[.035] lg:text-[14vw]">经贸</div>
        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="border border-white/15 px-4 py-3 text-xs font-black transition hover:border-[#d9a441]">{t.back}</Link>
            <div className="flex border border-white/15 p-1">{(["ar", "en", "zh"] as Lang[]).map((item) => <button key={item} onClick={() => setLang(item)} className={`min-w-12 px-3 py-2 text-xs font-black ${lang === item ? "bg-[#b5121b] text-white" : "text-white/55"}`}>{item === "zh" ? "中文" : item.toUpperCase()}</button>)}</div>
          </div>
          <p className="mt-20 text-sm font-black uppercase tracking-[.3em] text-[#d9a441]">{t.label}</p>
          <h1 className="mt-6 max-w-6xl text-5xl font-black leading-[.95] md:text-7xl lg:text-8xl">{t.title}</h1>
          <p className="mt-8 max-w-4xl border-t border-white/15 pt-7 text-lg font-bold leading-9 text-white/70 md:text-xl">{t.intro}</p>
        </div>
      </header>
      <div className="mx-auto max-w-[1450px] px-5 py-16 md:px-10 lg:px-20">
        <section className="grid gap-10 lg:grid-cols-[.42fr_1fr]"><h2 className="text-4xl font-black md:text-5xl">{t.headings.objectives}</h2><div className="grid md:grid-cols-2">{t.objectives.map((item, i) => <div key={item} className="border-t border-[#201815]/15 py-5 md:px-5"><span className="text-xs font-black text-[#b5121b]">0{i + 1}</span><p className="mt-2 font-black leading-7">{item}</p></div>)}</div></section>
        <section className="mt-20 border-y border-[#201815]/12 py-14"><h2 className="text-4xl font-black md:text-5xl">{t.headings.sectors}</h2><div className="mt-10 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">{t.sectors.map((item) => <p key={item} className="border-t border-[#b5121b]/25 py-5 font-black leading-7">{item}</p>)}</div></section>
        <section className="mt-20"><h2 className="text-4xl font-black md:text-5xl">{t.headings.routes}</h2><div className="mt-10 grid gap-px bg-[#201815]/15 md:grid-cols-2">{t.routes.map(([title, text], i) => <article key={title} className="min-h-60 bg-[#fffaf6] p-7 md:p-9"><p className="text-6xl font-black text-[#b5121b]/12">0{i + 1}</p><h3 className="mt-5 text-2xl font-black">{title}</h3><p className="mt-4 font-bold leading-8 text-[#201815]/62">{text}</p></article>)}</div></section>
        <section className="mt-20 grid gap-10 bg-[#b5121b] p-8 text-white md:p-12 lg:grid-cols-[.55fr_1fr]"><h2 className="text-4xl font-black md:text-5xl">{t.headings.outputs}</h2><div>{t.outputs.map((item, i) => <p key={item} className="border-t border-white/20 py-4 font-black"><span className="me-4 text-[#d9a441]">0{i + 1}</span>{item}</p>)}</div></section>
        <p className="mx-auto my-20 max-w-5xl text-center text-2xl font-black leading-10 md:text-4xl md:leading-[1.45]">{t.closing}</p>
      </div>
    </main>
  );
}
