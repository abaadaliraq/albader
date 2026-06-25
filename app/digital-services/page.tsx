import Link from "next/link";
import type { Lang } from "@/components/Sidebar";

type DigitalServicesPageProps = {
  searchParams?: Promise<{
    lang?: string | string[];
  }>;
};

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    label: "04 / تفاصيل الخدمات الرقمية",
    title: "الخدمات الإلكترونية المساندة",
    intro:
      "نظام رقمي يدعم استقبال الوفود وتنظيم الحركة والخرائط والترجمة والحجز من نقطة واحدة.",
    langLabel: "اللغة",
    journeyTitle: "الرحلة الرقمية",
    stages: ["قبل الوصول", "أثناء الزيارة", "بعد المغادرة"],
    stageText: [
      "تسجيل بيانات الوفد، تحديد الاحتياجات، وتجهيز البرنامج.",
      "متابعة الحركة، التنبيهات، الترجمة، والخرائط المباشرة.",
      "حفظ السجلات، مراجعة التجربة، وإرسال المواد الرقمية.",
    ],
    services: [
      {
        title: "بوابة الوفد",
        detail: "ملف رقمي لأعضاء الوفد، بيانات الزيارة، واحتياجات الضيافة.",
        points: ["تسجيل الأعضاء", "بيانات الوصول", "ملاحظات خاصة"],
      },
      {
        title: "جدول ذكي",
        detail: "جدول مرن يربط المواعيد، التنقلات، والتنبيهات اليومية.",
        points: ["مواعيد دقيقة", "تنبيهات حركة", "تحديثات فورية"],
      },
      {
        title: "خرائط و QR",
        detail: "دليل رقمي سريع لكل وجهة مع روابط وخرائط قابلة للمشاركة.",
        points: ["خرائط وجهات", "رموز QR", "إرشاد مختصر"],
      },
      {
        title: "ترجمة فورية",
        detail: "طبقة لغة تساعد الوفد بين العربية والإنكليزية والصينية.",
        points: ["عبارات أساسية", "دعم مرافق", "لغة موحدة"],
      },
      {
        title: "لوحة عمليات",
        detail: "متابعة السيارات، الفندق، الأمن، والمترجم ضمن لوحة واحدة.",
        points: ["حالة السيارات", "تأكيد الفندق", "تنسيق الفريق"],
      },
    ],
  },
  en: {
    dir: "ltr",
    back: "Back to Home",
    label: "04 / Digital Service Details",
    title: "Supporting Digital Services",
    intro:
      "A digital system supporting delegation reception, movement, maps, translation, and booking from one control layer.",
    langLabel: "Language",
    journeyTitle: "Digital Journey",
    stages: ["Before Arrival", "During Visit", "After Departure"],
    stageText: [
      "Register delegation data, define needs, and prepare the program.",
      "Track movement, alerts, translation, and live maps.",
      "Preserve records, review the experience, and send digital materials.",
    ],
    services: [
      {
        title: "Delegation Portal",
        detail: "A digital file for members, visit data, and hospitality needs.",
        points: ["Member registration", "Arrival data", "Special notes"],
      },
      {
        title: "Smart Itinerary",
        detail: "A flexible schedule connecting timing, transport, and daily alerts.",
        points: ["Precise timing", "Movement alerts", "Live updates"],
      },
      {
        title: "Maps & QR",
        detail: "A fast digital guide for each destination with shareable maps and links.",
        points: ["Destination maps", "QR codes", "Brief guidance"],
      },
      {
        title: "Live Translation",
        detail: "A language layer supporting Arabic, English, and Chinese communication.",
        points: ["Key phrases", "Escort support", "Unified language"],
      },
      {
        title: "Operations Dashboard",
        detail: "Cars, hotel, security, and translator tracking inside one board.",
        points: ["Car status", "Hotel confirmation", "Team coordination"],
      },
    ],
  },
  zh: {
    dir: "ltr",
    back: "返回首页",
    label: "04 / 数字服务详情",
    title: "数字化支持服务",
    intro:
      "一个数字系统，从统一控制层支持代表团接待、行程、地图、翻译和预订。",
    langLabel: "语言",
    journeyTitle: "数字旅程",
    stages: ["抵达前", "访问中", "离开后"],
    stageText: [
      "登记代表团资料、确认需求并准备行程。",
      "跟踪行程、提醒、翻译与实时地图。",
      "保存记录、回顾体验并发送数字资料。",
    ],
    services: [
      {
        title: "代表团门户",
        detail: "成员、访问资料和接待需求的数字档案。",
        points: ["成员登记", "抵达资料", "特别备注"],
      },
      {
        title: "智能行程",
        detail: "连接时间、交通和每日提醒的灵活日程。",
        points: ["精准时间", "行程提醒", "实时更新"],
      },
      {
        title: "地图与二维码",
        detail: "每个目的地的快速数字指南，含可分享地图和链接。",
        points: ["目的地地图", "二维码", "简明导览"],
      },
      {
        title: "实时翻译",
        detail: "支持阿拉伯语、英语和中文沟通的语言层。",
        points: ["核心短语", "陪同支持", "统一语言"],
      },
      {
        title: "运营控制台",
        detail: "在一个面板中跟踪车辆、酒店、安保与翻译。",
        points: ["车辆状态", "酒店确认", "团队协调"],
      },
    ],
  },
} as const;

const langLinks: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

function normalizeLang(value: string | string[] | undefined): Lang {
  const next = Array.isArray(value) ? value[0] : value;
  return next === "en" || next === "zh" || next === "ar" ? next : "ar";
}

export default async function DigitalServicesPage({
  searchParams,
}: DigitalServicesPageProps) {
  const params = await searchParams;
  const lang = normalizeLang(params?.lang);
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-[#76070b] text-white">
      <section
        className="relative min-h-[74vh] overflow-hidden px-5 py-8 md:px-10 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg,rgba(20,1,2,0.76),rgba(141,7,16,0.72)),url('/images/digital-hero.jpg'),linear-gradient(135deg,#76070b,#201815 68%,#d9a441)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:82px_82px]" />
        <div className="pointer-events-none absolute right-4 top-8 animate-watermark-drift text-[20vw] font-black leading-none text-white/[0.055]">
          智能接待
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(74vh-4rem)] max-w-[1450px] flex-col justify-between">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="border border-white/20 bg-black/25 px-5 py-3 text-sm font-black backdrop-blur-md transition-all hover:bg-white hover:text-[#8d0710]"
            >
              {t.back}
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
                {t.langLabel}
              </span>
              {langLinks.map((item) => (
                <Link
                  key={item.code}
                  href={`/digital-services?lang=${item.code}`}
                  className={[
                    "px-4 py-2 text-xs font-black transition-all",
                    lang === item.code
                      ? "bg-white text-[#8d0710]"
                      : "border border-white/20 text-white/65 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </header>

          <div className="max-w-5xl pb-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#d9a441]">
              {t.label}
            </p>
            <h1 className="font-black uppercase leading-[0.86] tracking-normal text-white text-[13vw] md:text-[7vw] lg:text-[5.4vw]">
              {t.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-black leading-9 text-white/78 md:text-2xl md:leading-10">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,29,45,0.22),transparent_24%),linear-gradient(135deg,#8d0710_0%,#4b0508_50%,#120102_100%)]" />
        <div className="absolute inset-0 opacity-[0.13] bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:78px_78px]" />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="rounded-[32px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d9a441]">
                {t.journeyTitle}
              </p>
              <div className="mt-8 space-y-5">
                {t.stages.map((stage, index) => (
                  <div
                    key={stage}
                    className="relative border border-white/10 bg-black/25 p-5"
                  >
                    <div className="absolute -left-1 top-5 h-2 w-2 rounded-full bg-[#ff1d2d] shadow-[0_0_18px_rgba(255,29,45,0.8)]" />
                    <p className="text-xs font-black text-[#ffb3b9]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      {stage}
                    </h2>
                    <p className="mt-3 text-sm font-bold leading-7 text-white/62">
                      {t.stageText[index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {t.services.map((service, index) => (
                <article
                  key={service.title}
                  className={[
                    "group relative border border-white/10 bg-black/35 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ff1d2d]",
                    index === 4 ? "md:col-span-2" : "",
                  ].join(" ")}
                >
                  <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#d9a441]/70" />
                  <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#d9a441]/70" />
                  <p className="text-6xl font-black leading-none text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-black leading-8 text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm font-bold leading-7 text-white/62">
                    {service.detail}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <span
                        key={point}
                        className="border border-white/10 bg-white/5 px-3 py-2 text-xs font-black text-white/70"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
