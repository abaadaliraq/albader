"use client";

import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/components/Sidebar";
import { useStoredLang } from "@/hooks/useStoredLang";

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    langLabel: "اللغة",
    label: "04 / منصة تشغيلية",
    title: "الخدمات الإلكترونية المساندة",
    subtitle:
      "منصة تشغيلية ترافق الوفد قبل الوصول، أثناء الزيارة، وبعد المغادرة، وتحول الرحلة من تنسيق يدوي إلى نظام قابل للإدارة والتوثيق والتطوير.",
    modulesButton: "عرض مكونات المنصة",
    concept:
      "منصة لإدارة واستقبال وتوثيق الوفود الصينية، تجمع بين جدول الزيارة، الخرائط، الترجمة، الجولات الافتراضية، إدارة النقل والأمن، التوثيق الإعلامي، وأرشفة المعالم العراقية.",
    previewTitle: "تصور واجهة المنصة",
    previewText:
      "هذه المساحة مخصصة لعرض واجهة افتراضية للمنصة، سواء كتطبيق هاتف أو بوابة إلكترونية للوفد. يمكن أن تعرض جدول الزيارة، الخرائط، الجولات الافتراضية، الترجمة، وحالة الحركة اليومية.",
    placeUi: "ضع صورة واجهة المنصة هنا",
    modulesTitle: "مكونات المنصة",
    journeyTitle: "رحلة الوفد داخل المنصة",
    dashboardTitle: "لوحة تحكم الإدارة",
    dashboardText:
      "لوحة تحكم داخلية تمكّن فريق الإدارة من متابعة الوفد، تحديث الجدول، ربط السيارات والسائقين، إدارة الترجمة، متابعة الأمن، وتوثيق الزيارة يوميًا.",
    libraryTitle: "مكتبة المعالم العراقية",
    libraryText:
      "جزء طويل الأمد من المنصة يهدف إلى توثيق المعالم السياحية والأثرية والدينية في العراق من خلال الصور، الفيديو، الجولات الافتراضية، والنبذة متعددة اللغات، بما يجعل المنصة أداة تعريفية وأرشيفية في الوقت نفسه.",
    evaluationTitle: "التقييم والتطوير بعد الزيارة",
    evaluationText:
      "بعد انتهاء الزيارة، توفر المنصة أدوات تقييم تساعد على قياس رضا الوفد وتطوير الخطط القادمة.",
    dashboardFeatures: [
      "إنشاء ملف وفد جديد",
      "إدارة جدول الزيارة",
      "ربط السيارات والسائقين",
      "متابعة الأمن والمترجم والطبيب",
      "رفع الصور والفيديو",
      "أرشفة الزيارة بعد انتهائها",
      "تقارير يومية وملاحظات داخلية",
    ],
    modules: [
      ["بوابة الوفد", "تسجيل بيانات الوفد، أسماء الأعضاء، اللغة، نوع الزيارة، ومدة البرنامج."],
      ["جدول الزيارة الذكي", "عرض جدول يومي للزيارة مع أوقات الحركة، الوجهات، الاجتماعات، والاستراحات."],
      ["الخرائط و QR", "خرائط تفاعلية، رموز QR لكل موقع، وصف مختصر، ومدة الزيارة المتوقعة."],
      ["الجولات الافتراضية", "عرض جولات افتراضية مثل بيت التحفيات وشارع المتنبي قبل الزيارة، مع إمكانية توسيعها لمعالم أخرى."],
      ["الترجمة والبروتوكول", "نصوص تعريفية جاهزة بالعربي والإنكليزي والصيني، وتعليمات الزيارة والبروتوكول."],
      ["النقل والأمن", "إدارة السيارات، السائقين، رجال الأمن، المسارات الأساسية والبديلة، وحالة الحركة."],
      ["الإعلام والتوثيق", "تنظيم التصوير، إنتاج ملخصات مرئية، أرشفة الصور والفيديو، وتجهيز مواد للنشر بعد الموافقة."],
      ["أرشيف المعالم العراقية", "مكتبة رقمية للمعالم السياحية والأثرية والدينية، تشمل صورًا، فيديو، جولات افتراضية، ونبذة بثلاث لغات."],
    ],
    journey: [
      ["قبل الوصول", ["تعريف بالبرنامج", "جولات افتراضية", "جدول أولي", "معلومات البروتوكول"]],
      ["أثناء الزيارة", ["جدول يومي", "خرائط و QR", "ترجمة ومعلومات", "متابعة الحركة والطوارئ"]],
      ["بعد المغادرة", ["أرشيف صور وفيديو", "تقرير إعلامي", "تقييم الزيارة", "تطوير الخطط القادمة"]],
    ],
    libraryCats: [
      "بغداد التاريخية",
      "الجنوب الحضاري",
      "كردستان العراق",
      "الموصل والتراث الشمالي",
      "المواقع الدينية",
      "الأسواق والبيوت التراثية",
    ],
    evaluation: [
      "تقييم الفندق والنقل",
      "تقييم المترجم والمرشد",
      "تقييم المواقع والبرنامج",
      "ملاحظات الوفد",
      "أكثر الوجهات تأثيرًا",
      "تقرير تطوير للزيارات القادمة",
    ],
  },
  en: {
    dir: "ltr",
    back: "Back to Home",
    langLabel: "Language",
    label: "04 / Operational Platform",
    title: "Supporting Digital Services",
    subtitle:
      "An operational platform that supports the delegation before arrival, during the visit, and after departure, transforming the journey from manual coordination into a manageable, documented, and scalable system.",
    modulesButton: "View Platform Modules",
    concept:
      "A platform for managing, receiving, and documenting Chinese delegations, combining visit schedules, maps, translation, virtual tours, transport and security management, media documentation, and landmark archiving.",
    previewTitle: "Platform Interface Preview",
    previewText:
      "This area is dedicated to presenting a visual interface for the platform, whether as a mobile application or delegation portal. It can show the visit schedule, maps, virtual tours, translation, and daily movement status.",
    placeUi: "Place platform UI here",
    modulesTitle: "Platform Modules",
    journeyTitle: "Delegation Journey Inside the Platform",
    dashboardTitle: "Operations Dashboard",
    dashboardText:
      "An internal dashboard enabling the operations team to track the delegation, update schedules, connect vehicles and drivers, manage translation, follow security status, and document the visit daily.",
    libraryTitle: "Iraqi Landmarks Digital Library",
    libraryText:
      "A long-term component of the platform aimed at documenting Iraq's touristic, archaeological, and religious landmarks through photos, videos, virtual tours, and multilingual descriptions, making the platform both an introductory and archival tool.",
    evaluationTitle: "Post-Visit Evaluation & Improvement",
    evaluationText:
      "After the visit, the platform provides evaluation tools to measure delegation satisfaction and improve future plans.",
    dashboardFeatures: [
      "Create a delegation file",
      "Manage the visit schedule",
      "Assign vehicles and drivers",
      "Track security, translator, and doctor",
      "Upload photos and videos",
      "Archive the visit after completion",
      "Daily reports and internal notes",
    ],
    modules: [
      ["Delegation Portal", "Registering delegation data, member names, language, visit type, and program duration."],
      ["Smart Itinerary", "A daily visit schedule with movement times, destinations, meetings, and breaks."],
      ["Maps & QR Guide", "Interactive maps, QR codes for each site, short descriptions, and estimated visit duration."],
      ["Virtual Tours", "Displaying virtual tours such as the House of Antiques and Al-Mutanabbi Street before the visit, with expansion to other landmarks."],
      ["Translation & Protocol", "Ready-made Arabic, English, and Chinese content, visit instructions, and protocol notes."],
      ["Transport & Security", "Managing vehicles, drivers, security escorts, primary and alternative routes, and movement status."],
      ["Media & Documentation", "Organizing photography, producing visual summaries, archiving photos and videos, and preparing approved media materials."],
      ["Iraqi Landmark Archive", "A digital library of touristic, archaeological, and religious landmarks, including photos, videos, virtual tours, and multilingual descriptions."],
    ],
    journey: [
      ["Before Arrival", ["Program introduction", "Virtual tours", "Initial schedule", "Protocol information"]],
      ["During the Visit", ["Daily schedule", "Maps and QR", "Translation and information", "Movement and emergency tracking"]],
      ["After Departure", ["Photo and video archive", "Media report", "Visit evaluation", "Improvement of future plans"]],
    ],
    libraryCats: [
      "Historic Baghdad",
      "Civilizational South",
      "Iraqi Kurdistan",
      "Mosul and Northern Heritage",
      "Religious Sites",
      "Markets and Heritage Houses",
    ],
    evaluation: [
      "Hotel and transport evaluation",
      "Translator and guide evaluation",
      "Destination and program evaluation",
      "Delegation feedback",
      "Most impactful destinations",
      "Improvement report for future visits",
    ],
  },
  zh: {
    dir: "ltr",
    back: "返回首页",
    langLabel: "语言",
    label: "04 / 运营平台",
    title: "数字化支持服务",
    subtitle:
      "一个运营平台，在抵达前、访问中和离开后支持代表团，将行程从人工协调转化为可管理、可记录、可扩展的系统。",
    modulesButton: "查看平台模块",
    concept:
      "一个用于管理、接待和记录中国代表团的平台，整合访问日程、地图、翻译、虚拟参观、交通与安保管理、媒体记录以及伊拉克地标数字档案。",
    previewTitle: "平台界面预览",
    previewText:
      "该区域用于展示平台界面，可作为手机应用或代表团门户，显示访问日程、地图、虚拟参观、翻译以及每日行程状态。",
    placeUi: "在此放置平台界面",
    modulesTitle: "平台模块",
    journeyTitle: "代表团在平台中的旅程",
    dashboardTitle: "运营控制台",
    dashboardText:
      "内部运营控制台，使团队能够跟踪代表团、更新日程、连接车辆与司机、管理翻译、跟踪安保状态并每日记录访问。",
    libraryTitle: "伊拉克地标数字资料库",
    libraryText:
      "平台的长期组成部分，旨在通过照片、视频、虚拟参观和多语言介绍记录伊拉克旅游、考古与宗教地标，使平台同时具备介绍和档案功能。",
    evaluationTitle: "访问后评估与改进",
    evaluationText:
      "访问结束后，平台提供评估工具，用于衡量代表团满意度并改进未来方案。",
    dashboardFeatures: [
      "创建代表团档案",
      "管理访问日程",
      "分配车辆与司机",
      "跟踪安保、翻译和医生",
      "上传照片与视频",
      "访问结束后归档",
      "每日报告与内部备注",
    ],
    modules: [
      ["代表团门户", "登记代表团资料、成员姓名、语言、访问类型与项目时长。"],
      ["智能行程", "显示每日访问日程，包括行程时间、目的地、会议与休息安排。"],
      ["地图与二维码指南", "互动地图、每个地点的二维码、简短介绍与预计访问时间。"],
      ["虚拟参观", "访问前展示古董之家和穆塔纳比街等虚拟参观，并可扩展至其他地标。"],
      ["翻译与礼宾", "提供阿拉伯语、英语和中文介绍文本、访问说明与礼宾提示。"],
      ["交通与安保", "管理车辆、司机、安保人员、主要和备用路线以及行程状态。"],
      ["媒体与记录", "组织拍摄、制作视觉总结、归档照片与视频，并准备经批准的媒体资料。"],
      ["伊拉克地标档案", "伊拉克旅游、考古与宗教地标数字资料库，包括照片、视频、虚拟参观和多语言介绍。"],
    ],
    journey: [
      ["抵达前", ["项目介绍", "虚拟参观", "初步日程", "礼宾信息"]],
      ["访问中", ["每日行程", "地图与二维码", "翻译与信息", "行程与紧急情况跟踪"]],
      ["离开后", ["照片与视频档案", "媒体报告", "访问评估", "优化未来方案"]],
    ],
    libraryCats: [
      "历史巴格达",
      "文明南部",
      "伊拉克库尔德斯坦",
      "摩苏尔与北部遗产",
      "宗教地点",
      "市场与传统住宅",
    ],
    evaluation: [
      "酒店与交通评估",
      "翻译与导览评估",
      "目的地与项目评估",
      "代表团反馈",
      "最具影响力的目的地",
      "未来访问改进报告",
    ],
  },
} as const;

const langLinks: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

const landmarkImages = [
  "/images/destinations/baghdad.jpg",
  "/images/destinations/ur.jpg",
  "/images/destinations/marshes.jpg",
  "/images/destinations/mosul.jpg",
  "/images/destinations/karbala.jpg",
  "/images/destinations/house-of-antiques.jpg",
];

const platformMockups = [
  { image: "/images/digital/platform-overview.jpg", ratio: "aspect-[9/13]" },
  { image: "/images/digital/platform-mobile.jpg", ratio: "aspect-[9/13]" },
] as const;

const mockupCopy = {
  ar: {
    label: "نماذج واجهة المنصة",
    overview: "النموذج الكامل",
    mobile: "نموذج الهاتف",
    open: "فتح الصورة",
    path: "مسار JPG",
  },
  en: {
    label: "Platform Interface Mockups",
    overview: "Full Platform Model",
    mobile: "Mobile Model",
    open: "Open Image",
    path: "JPG Path",
  },
  zh: {
    label: "平台界面模型",
    overview: "完整平台模型",
    mobile: "手机模型",
    open: "打开图片",
    path: "JPG 路径",
  },
} as const;

export default function DigitalServicesPage() {
  const [lang, setLang] = useStoredLang();
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-[#fffaf6] text-[#201815]">
      <Hero t={t} lang={lang} setLang={setLang} />
      <InterfacePreview t={t} lang={lang} />
      <ModulesSection t={t} />
      <JourneySection t={t} />
      <DashboardSection t={t} />
      <LibrarySection t={t} />
      <EvaluationSection t={t} />
    </main>
  );
}

function Hero({
  t,
  lang,
  setLang,
}: {
  t: (typeof content)[Lang];
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <section
      className="relative min-h-[78vh] overflow-hidden px-5 py-8 text-white md:px-10 lg:px-16"
      style={{
        backgroundImage:
          "linear-gradient(120deg,rgba(21,2,3,0.86),rgba(111,7,12,0.72)),url('/images/digital/digital-hero.jpg'),linear-gradient(135deg,#150203,#6f070c 62%,#201815)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:84px_84px]" />
      <div className="pointer-events-none absolute right-4 top-8 animate-watermark-drift text-[20vw] font-black leading-none text-white/[0.055]">
        数字服务
      </div>
      <div className="relative z-10 mx-auto flex min-h-[calc(78vh-4rem)] max-w-[1500px] flex-col justify-between">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="border border-white/20 bg-black/25 px-5 py-3 text-sm font-black backdrop-blur-md transition-all hover:bg-white hover:text-[#8d0710]">
            {t.back}
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-white/60">{t.langLabel}</span>
            {langLinks.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLang(item.code)}
                className={["px-4 py-2 text-xs font-black transition-all", lang === item.code ? "bg-white text-[#8d0710]" : "border border-white/20 text-white/65 hover:text-white"].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </div>
        </header>
        <div className="max-w-6xl pb-10">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#d9a441]">{t.label}</p>
          <h1 className="font-black uppercase leading-[0.86] tracking-normal text-white text-[13vw] md:text-[7vw] lg:text-[5.2vw]">
            {t.title}
          </h1>
          <p className="mt-7 max-w-4xl text-xl font-black leading-9 text-white/78 md:text-2xl md:leading-10">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="bg-white px-6 py-4 text-sm font-black text-[#8d0710] transition-all hover:-translate-y-1">
              {t.back}
            </Link>
            <a href="#platform-modules" className="border border-white/25 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-[#b5121b]">
              {t.modulesButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InterfacePreview({ t, lang }: { t: (typeof content)[Lang]; lang: Lang }) {
  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-5 py-14 md:px-10 lg:px-16">
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:104px_104px]" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b5121b]">Product Concept</p>
          <h2 className="mt-5 text-4xl font-black leading-[0.95] md:text-6xl">{t.previewTitle}</h2>
          <p className="mt-6 max-w-3xl text-lg font-black leading-9 text-[#201815]/72">{t.concept}</p>
          <p className="mt-5 max-w-3xl border-t border-[#201815]/12 pt-5 text-base font-bold leading-8 text-[#201815]/65">{t.previewText}</p>
        </div>
        <PlatformMockups lang={lang} />
      </div>
    </section>
  );
}

function PlatformMockups({ lang }: { lang: Lang }) {
  const text = mockupCopy[lang];
  const names = [text.overview, text.mobile];

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b5121b]">{text.label}</p>
        <span className="h-px flex-1 bg-[#b5121b]/20" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {platformMockups.map((mockup, index) => (
          <a
            key={mockup.image}
            href={mockup.image}
            target="_blank"
            rel="noreferrer"
            className={[
              "group block overflow-hidden border border-[#201815]/12 bg-[#201815] p-3 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-[#b5121b] hover:shadow-[0_0_32px_rgba(181,18,27,0.18)]",
              "w-full",
            ].join(" ")}
          >
            <div className={["relative overflow-hidden bg-[#120204]", mockup.ratio].join(" ")}>
              <Image
                src={mockup.image}
                alt={names[index]}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 90vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.018]"
                priority={index === 0}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/82 to-transparent p-4 text-white">
                <p className="text-lg font-black">{names[index]}</p>
                <p className="mt-2 text-xs font-black text-[#d9a441]">{text.open}</p>
              </div>
            </div>
            <p className="mt-3 truncate text-[11px] font-black text-white/55">
              {text.path}: {mockup.image}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

function ModulesSection({ t }: { t: (typeof content)[Lang] }) {
  return (
    <section id="platform-modules" className="relative overflow-hidden bg-[#fbf7f2] px-5 py-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <Header label="Modules" title={t.modulesTitle} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.modules.map(([title, detail], index) => (
            <article key={title} className="group relative min-h-[250px] overflow-hidden border border-[#201815]/10 bg-[#201815]/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b5121b] hover:shadow-[0_0_28px_rgba(181,18,27,0.14)]">
              <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#d9a441]" />
              <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#d9a441]" />
              <p className="text-5xl font-black text-[#b5121b]/25">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-black leading-8">{title}</h3>
              <p className="mt-4 text-sm font-bold leading-7 text-[#201815]/67">{detail}</p>
              <span className="mt-5 block h-px w-16 bg-[#b5121b]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection({ t }: { t: (typeof content)[Lang] }) {
  return (
    <section className="relative overflow-hidden bg-[#150203] px-5 py-14 text-white md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(181,18,27,0.38),transparent_30%),linear-gradient(135deg,#150203,#6f070c_58%,#201815)]" />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <Header label="Journey" title={t.journeyTitle} dark />
        <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px overflow-hidden bg-white/15 lg:block">
            <div className="h-full animate-route-flow bg-gradient-to-r from-transparent via-[#ff1d2d] to-transparent" />
          </div>
          {t.journey.map(([stage, points], index) => (
            <div key={stage} className="relative border border-white/10 bg-black/25 p-6 backdrop-blur-md">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-[#b5121b] text-xl font-black text-white shadow-[0_0_24px_rgba(181,18,27,0.65)]">{index + 1}</span>
              <h3 className="mt-6 text-3xl font-black">{stage}</h3>
              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm font-black leading-7 text-white/72">
                    <span className="mt-3 h-px w-8 shrink-0 bg-[#d9a441]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardSection({ t }: { t: (typeof content)[Lang] }) {
  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-5 py-14 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <Header label="Control" title={t.dashboardTitle} />
          <p className="mt-6 text-lg font-black leading-9 text-[#201815]/70">{t.dashboardText}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {t.dashboardFeatures.map((item) => (
              <div key={item} className="border-t border-[#201815]/12 pt-4">
                <span className="block h-px w-8 bg-[#b5121b]" />
                <p className="mt-3 text-sm font-black leading-7 text-[#201815]/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div
      className="overflow-hidden border border-[#201815]/12 bg-[#201815] p-5 shadow-2xl shadow-black/20"
      style={{
        backgroundImage:
          "url('/images/digital/dashboard-mockup.png'),linear-gradient(135deg,#201815,#150203 58%,#6f070c)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.62fr]">
        <div className="space-y-4">
          <div className="h-24 border border-white/10 bg-white/[0.055] p-4">
            <span className="block h-2 w-28 bg-[#d9a441]" />
            <span className="mt-5 block h-3 w-4/5 bg-white/15" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[70, 48, 86].map((width, index) => (
              <div key={width} className="border border-white/10 bg-black/25 p-4">
                <p className="text-xs font-black text-white/45">0{index + 1}</p>
                <div className="mt-5 h-2 bg-white/10">
                  <div className="h-full bg-[#b5121b]" style={{ width: `${width}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="h-48 border border-white/10 bg-black/25 p-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="h-3 w-32 bg-white/12" />
                <span className="h-3 w-16 bg-[#d9a441]/70" />
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-[340px] border border-white/10 bg-[#b5121b]/15 p-4">
          <div className="h-full border border-white/10 bg-black/25" />
        </div>
      </div>
    </div>
  );
}

function LibrarySection({ t }: { t: (typeof content)[Lang] }) {
  return (
    <section className="relative overflow-hidden bg-[#201815] px-5 py-14 text-white md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(181,18,27,0.34),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <Header label="Archive" title={t.libraryTitle} dark />
            <p className="mt-6 text-lg font-black leading-9 text-white/72">{t.libraryText}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.libraryCats.map((cat, index) => (
              <div
                key={cat}
                className="min-h-[210px] bg-[#150203] p-5"
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(32,24,21,0.1),rgba(32,24,21,0.78)),url('${landmarkImages[index]}'),linear-gradient(135deg,#b5121b,#201815 58%,#d9a441)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <span className="text-4xl font-black text-white/35">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-20 text-xl font-black leading-7">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EvaluationSection({ t }: { t: (typeof content)[Lang] }) {
  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-5 py-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Header label="Improve" title={t.evaluationTitle} />
            <p className="mt-6 text-lg font-black leading-9 text-[#201815]/70">{t.evaluationText}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.evaluation.map((item, index) => (
              <div key={item} className="border border-[#201815]/10 bg-[#201815]/[0.035] p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-black">{item}</h3>
                  <span className="border border-[#b5121b]/25 px-3 py-1 text-xs font-black text-[#b5121b]">{index + 1}/6</span>
                </div>
                <div className="mt-5 h-2 bg-[#201815]/10">
                  <div className="h-full bg-[#b5121b]" style={{ width: `${52 + index * 7}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({
  label,
  title,
  dark = false,
}: {
  label: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p className={["text-sm font-black uppercase tracking-[0.34em]", dark ? "text-[#d9a441]" : "text-[#b5121b]"].join(" ")}>
        {label}
      </p>
      <h2 className={["mt-5 text-4xl font-black leading-[0.95] md:text-6xl", dark ? "text-white" : "text-[#201815]"].join(" ")}>
        {title}
      </h2>
    </div>
  );
}


