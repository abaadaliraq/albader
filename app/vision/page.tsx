"use client";

import Link from "next/link";
import type { Lang } from "@/components/Sidebar";
import { useStoredLang } from "@/hooks/useStoredLang";

const copy = {
  ar: {
    dir: "rtl", back: "العودة للرئيسية", label: "02 / موجز استراتيجي", title: "الرؤية الاستراتيجية",
    subtitle: "نموذج عراقي لتنظيم الوفود الصينية وتحويل الزيارة من نشاط بروتوكولي إلى مسار ثقافي واقتصادي قابل للمتابعة.",
    opening: "لا يقتصر استقبال الوفود الصينية على ترتيب برنامج زيارات أو تنسيق بروتوكولي مؤقت، بل يمثل فرصة استراتيجية لتقديم العراق كوجهة حضارية وثقافية وسياحية واقتصادية قادرة على بناء علاقات دولية مستدامة.",
    essenceTitle: "جوهر الرؤية",
    essence: ["تنطلق هذه الرؤية من تحويل زيارة الوفود من نشاط رسمي محدود إلى تجربة منظمة تبدأ قبل الوصول، وتستمر أثناء الزيارة من خلال مسارات ثقافية وسياحية مدروسة، وتُستكمل بعد المغادرة بتوثيق ومتابعة وفرص تعاون قابلة للتطوير.", "الرؤية هنا ليست تنظيم زيارة فقط، بل بناء نموذج وطني لإدارة حضور العراق أمام الوفود الدولية، وتحويل كل وفد زائر إلى فرصة للتعريف بالعراق، وتعزيز علاقاته، وتوسيع أثره الثقافي والاقتصادي."],
    whyTitle: "لماذا نحتاج هذا النموذج؟",
    why: ["العراق يمتلك إرثًا حضاريًا وثقافيًا كبيرًا، لكنه يحتاج إلى طريقة تقديم حديثة ومنظمة أمام الوفود الدولية.", "الوفد الزائر لا يرى البلد من خلال المواقع فقط، بل من خلال جودة التنظيم، وضوح البرنامج، مستوى التوثيق، وطريقة متابعة نتائج الزيارة.", "غياب النموذج الموحد يجعل أثر الزيارة ينتهي بانتهاء البرنامج، بدل أن يتحول إلى علاقات ثقافية وسياحية واقتصادية مستمرة."],
    problemTitle: "المشكلة الحالية",
    problem: ["غالبًا ما تبقى زيارات الوفود ضمن إطار بروتوكولي محدود، يعتمد على جدول مؤقت وتنسيق ميداني مباشر، من دون منصة موحدة للمعلومات، ومن دون أرشفة منظمة، ومن دون متابعة واضحة للفرص التي يمكن أن تنتج بعد الزيارة.", "هذا يضعف أثر الزيارة ويجعلها تجربة وقتية، بدل أن تكون أداة دبلوماسية وثقافية واقتصادية قابلة للبناء عليها."],
    opportunityTitle: "الفرصة المتاحة",
    opportunity: ["الوفود الصينية تمثل فرصة مهمة للعراق، ليس فقط من زاوية السياحة الثقافية، بل أيضًا من زاوية بناء جسور تعاون أوسع بين المؤسسات العراقية والصينية.", "ويمكن لوزارة الثقافة أن تكون الجهة التي تقود تقديم العراق حضاريًا وثقافيًا أمام هذه الوفود، ضمن إطار رسمي ومنظم يربط الثقافة بالسياحة، والتوثيق، والتعاون الاقتصادي المساند."],
    modelTitle: "النموذج المقترح", modelLabel: "أربع مراحل مترابطة",
    stages: [["قبل الوصول", "إعداد البرنامج، تعريف الوفد بالمواقع، تجهيز المحتوى، وتحديد طبيعة المسارات حسب نوع الوفد."], ["أثناء الزيارة", "تنفيذ المسارات الثقافية والسياحية، إدارة التنقل، الترجمة، التوثيق، وتقديم تجربة منظمة للوفد."], ["الدعم الرقمي", "منصة أو تطبيق مرافق يعرض البرنامج، الخرائط، معلومات المواقع، الجولات الافتراضية، والتحديثات."], ["بعد المغادرة", "إعداد تقرير نهائي، أرشفة الزيارة، توثيق فرص التعاون، ووضع خطة متابعة مع الجهات ذات العلاقة."]],
    ministryTitle: "دور وزارة الثقافة",
    ministry: "يمكن لوزارة الثقافة أن تؤدي دورًا محوريًا في اعتماد هذا النموذج، من خلال رعاية الإطار الثقافي للمبادرة، وتسهيل التنسيق مع المواقع والمؤسسات الثقافية، واعتماد المحتوى التعريفي، ودعم تقديم العراق بصورة رسمية تليق بمكانته الحضارية.",
    ministryPoints: ["اعتماد الإطار الثقافي للمبادرة.", "تسهيل التنسيق مع المؤسسات والمواقع الثقافية.", "اعتماد المحتوى التعريفي الخاص بالعراق.", "دعم نموذج استقبال قابل للتكرار مع وفود دولية أخرى.", "تحويل الزيارات إلى نتائج قابلة للتوثيق والمتابعة."],
    impactTitle: "الأثر الاستراتيجي المتوقع",
    impacts: ["تعزيز صورة العراق أمام الوفود الدولية.", "دعم السياحة الثقافية وربطها بتجربة منظمة.", "بناء قاعدة بيانات للزيارات والوفود.", "فتح فرص تعاون لاحقة مع الجانب الصيني في المجالات الثقافية والسياحية والاقتصادية المساندة."],
    closingTitle: "من زيارة عابرة إلى نموذج وطني قابل للتطوير",
    closing: "تسعى هذه الرؤية إلى تحويل استقبال الوفود الصينية من نشاط مؤقت إلى منظومة عمل قابلة للتكرار والتطوير، بما يمنح العراق حضورًا أكثر تنظيمًا وتأثيرًا أمام الوفود الدولية، ويمنح وزارة الثقافة موقعًا قياديًا في هذا المسار.",
    plans: "استعراض المسارات المقترحة", digital: "الدعم الرقمي المساند",
  },
  en: {
    dir: "ltr", back: "Back to Home", label: "02 / Strategic Brief", title: "Strategic Vision",
    subtitle: "An Iraqi model for organizing Chinese delegations and turning each visit from a protocol activity into a trackable cultural and economic pathway.",
    opening: "Receiving Chinese delegations is more than arranging visits or temporary protocol. It is a strategic opportunity to present Iraq as a civilizational, cultural, tourism, and economic destination capable of building lasting international relations.",
    essenceTitle: "The Core Vision",
    essence: ["This vision transforms a limited official visit into an organized experience that begins before arrival, continues through carefully planned cultural and tourism routes, and extends after departure through documentation, follow-up, and developable cooperation opportunities.", "The goal is not merely to organize a visit, but to build a national model for managing Iraq's presence before international delegations and turning every delegation into an opportunity to introduce Iraq, strengthen relations, and broaden cultural and economic impact."],
    whyTitle: "Why Is This Model Needed?",
    why: ["Iraq has an exceptional civilizational and cultural legacy, but it needs a modern and organized way to present it to international delegations.", "A delegation experiences a country not only through places, but through organization quality, program clarity, documentation, and follow-up.", "Without a unified model, the visit's impact ends with the schedule instead of developing into lasting cultural, tourism, and economic relations."],
    problemTitle: "The Current Problem",
    problem: ["Delegation visits often remain within a limited protocol framework based on a temporary schedule and direct field coordination, without a unified information platform, organized archive, or clear follow-up for post-visit opportunities.", "This weakens their impact and makes them temporary events rather than diplomatic, cultural, and economic instruments that can be built upon."],
    opportunityTitle: "The Opportunity",
    opportunity: ["Chinese delegations are an important opportunity for Iraq, not only in cultural tourism but also in building wider cooperation bridges between Iraqi and Chinese institutions.", "The Ministry of Culture can lead the civilizational and cultural presentation of Iraq through an official framework connecting culture with tourism, documentation, and supporting economic cooperation."],
    modelTitle: "The Proposed Model", modelLabel: "Four connected stages",
    stages: [["Before Arrival", "Prepare the program, introduce destinations, ready the content, and define routes according to delegation type."], ["During the Visit", "Execute cultural and tourism routes, manage mobility, translation, documentation, and the organized guest experience."], ["Digital Support", "A companion platform or app presenting the program, maps, site information, virtual tours, and updates."], ["After Departure", "Produce a final report, archive the visit, document cooperation opportunities, and establish a follow-up plan."]],
    ministryTitle: "Role of the Ministry of Culture",
    ministry: "The Ministry of Culture can play a central role in adopting this model by sponsoring its cultural framework, facilitating coordination with cultural institutions and sites, approving introductory content, and supporting an official presentation worthy of Iraq's civilizational standing.",
    ministryPoints: ["Adopt the initiative's cultural framework.", "Facilitate coordination with cultural institutions and sites.", "Approve Iraq's introductory content.", "Support a repeatable model for other international delegations.", "Turn visits into documented, trackable outcomes."],
    impactTitle: "Expected Strategic Impact",
    impacts: ["Strengthen Iraq's image before international delegations.", "Support cultural tourism through an organized experience.", "Build a database of visits and delegations.", "Open later cooperation opportunities with China in cultural, tourism, and supporting economic fields."],
    closingTitle: "From a Passing Visit to a Developable National Model",
    closing: "This vision turns Chinese delegation reception from a temporary activity into a repeatable, developable system, giving Iraq a more organized and influential international presence and the Ministry of Culture a leading position in this pathway.",
    plans: "Explore Proposed Routes", digital: "Supporting Digital Services",
  },
  zh: {
    dir: "ltr", back: "返回首页", label: "02 / 战略简报", title: "战略愿景",
    subtitle: "建立伊拉克中国代表团组织模式，将礼宾访问转化为可持续跟进的文化与经济路径。",
    opening: "接待中国代表团不仅是安排参访或临时礼宾协调，更是将伊拉克展示为文明、文化、旅游和经济目的地，并建立可持续国际关系的战略机会。",
    essenceTitle: "愿景核心",
    essence: ["本愿景旨在将有限的正式访问转化为完整体验：抵达前做好准备，访问期间执行经过规划的文化旅游路线，离境后继续进行记录、跟进并发展合作机会。", "这不仅是组织一次访问，更是建立管理伊拉克国际形象的国家模式，把每个到访代表团转化为介绍伊拉克、加强关系并扩大文化和经济影响的机会。"],
    whyTitle: "为什么需要这一模式？",
    why: ["伊拉克拥有深厚的文明与文化遗产，但需要以现代、系统的方式向国际代表团展示。", "代表团对国家的认识不仅来自地点，也来自组织质量、项目清晰度、记录水平和访问成果的跟进。", "缺乏统一模式会使访问影响随行程结束，无法转化为持续的文化、旅游和经济关系。"],
    problemTitle: "当前问题",
    problem: ["代表团访问往往停留在有限的礼宾框架中，依赖临时日程和现场协调，缺少统一信息平台、系统档案和对访问后机会的明确跟进。", "这削弱了访问效果，使其成为短期活动，而不是可持续建设的外交、文化与经济工具。"],
    opportunityTitle: "现有机遇",
    opportunity: ["中国代表团对伊拉克而言不仅是文化旅游机遇，也是伊中机构之间建立更广泛合作桥梁的重要机会。", "文化部可以在正式框架下主导伊拉克文明与文化形象的呈现，将文化、旅游、记录与配套经济合作连接起来。"],
    modelTitle: "建议模式", modelLabel: "四个相互衔接的阶段",
    stages: [["抵达前", "制定项目、介绍地点、准备内容，并根据代表团类型确定路线。"], ["访问期间", "执行文化旅游路线，管理交通、翻译、记录并提供有序体验。"], ["数字支持", "通过配套平台或应用展示日程、地图、地点信息、虚拟参观和更新。"], ["离境后", "编制总结报告、归档访问、记录合作机会并制定跟进计划。"]],
    ministryTitle: "文化部的作用",
    ministry: "文化部可在采用该模式中发挥核心作用：支持倡议的文化框架，促进与文化机构和地点的协调，审核介绍内容，并以符合伊拉克文明地位的正式方式展示国家形象。",
    ministryPoints: ["采用倡议的文化框架。", "促进文化机构与地点的协调。", "审核伊拉克介绍内容。", "支持可用于其他国际代表团的重复接待模式。", "将访问转化为可记录、可跟进的成果。"],
    impactTitle: "预期战略影响",
    impacts: ["提升伊拉克在国际代表团面前的形象。", "通过有序体验支持文化旅游。", "建立访问与代表团数据库。", "在文化、旅游及配套经济领域创造后续伊中合作机会。"],
    closingTitle: "从短暂访问到可发展的国家模式",
    closing: "本愿景将中国代表团接待从临时活动转化为可重复、可发展的工作体系，使伊拉克在国际代表团面前更有组织力和影响力，并赋予文化部在这一进程中的领导地位。",
    plans: "查看建议路线", digital: "配套数字支持",
  },
} as const;

const languages: { code: Lang; label: string }[] = [{ code: "ar", label: "AR" }, { code: "en", label: "EN" }, { code: "zh", label: "中文" }];

export default function VisionPage() {
  const [lang, setLang] = useStoredLang();
  const t = copy[lang];
  return (
    <main dir={t.dir} className="min-h-screen bg-[#fffaf6] text-[#201815]">
      <section className="relative min-h-[78vh] overflow-hidden bg-[#201815] px-5 py-8 text-white md:px-10 lg:px-20">
        <div className="absolute inset-0 opacity-[.13] bg-[linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:92px_92px]" />
        <div className="absolute bottom-0 left-0 h-1 w-2/3 bg-[#b5121b]" />
        <div className="pointer-events-none absolute -right-5 top-16 text-[24vw] font-black leading-none text-white/[.035] lg:text-[14vw]">愿景</div>
        <div className="relative z-10 mx-auto flex min-h-[calc(78vh-4rem)] max-w-[1450px] flex-col justify-between">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="border border-white/20 px-5 py-3 text-sm font-black transition hover:border-[#d9a441]">{t.back}</Link>
            <div className="flex border border-white/15 p-1">{languages.map((item) => <button key={item.code} onClick={() => setLang(item.code)} className={`min-w-12 px-3 py-2 text-xs font-black ${lang === item.code ? "bg-[#b5121b] text-white" : "text-white/55"}`}>{item.label}</button>)}</div>
          </header>
          <div className="max-w-6xl pb-12 pt-20">
            <p className="text-sm font-black uppercase tracking-[.3em] text-[#d9a441]">{t.label}</p>
            <h1 className="mt-6 text-6xl font-black leading-[.9] md:text-8xl lg:text-[7.5rem]">{t.title}</h1>
            <p className="mt-8 max-w-5xl text-xl font-black leading-9 text-white/85 md:text-3xl md:leading-[1.45]">{t.subtitle}</p>
            <p className="mt-6 max-w-4xl border-t border-white/15 pt-6 text-base font-bold leading-8 text-white/58 md:text-lg">{t.opening}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-20"><div className="mx-auto grid max-w-[1450px] gap-10 lg:grid-cols-[.45fr_1fr]"><div><p className="text-8xl font-black text-[#b5121b]/10">01</p><h2 className="mt-3 text-4xl font-black md:text-5xl">{t.essenceTitle}</h2></div><div className="space-y-6 border-t border-[#b5121b]/35 pt-7">{t.essence.map((p) => <p key={p} className="text-lg font-bold leading-9 text-[#201815]/72 md:text-xl">{p}</p>)}</div></div></section>

      <section className="border-y border-[#201815]/10 bg-white/55 px-5 py-18 md:px-10 lg:px-20"><div className="mx-auto max-w-[1450px]"><h2 className="text-4xl font-black md:text-5xl">{t.whyTitle}</h2><div className="mt-10 grid gap-px bg-[#201815]/12 md:grid-cols-3">{t.why.map((item, i) => <article key={item} className="min-h-56 bg-[#fffaf6] p-7"><span className="text-sm font-black text-[#b5121b]">0{i + 1}</span><p className="mt-8 text-lg font-black leading-8">{item}</p></article>)}</div></div></section>

      <section className="px-5 py-20 md:px-10 lg:px-20"><div className="mx-auto grid max-w-[1450px] gap-8 lg:grid-cols-2"><article className="border-s-4 border-[#b5121b] bg-[#201815] p-8 text-white md:p-12"><p className="text-xs font-black uppercase tracking-[.26em] text-[#d9a441]">Challenge</p><h2 className="mt-5 text-4xl font-black">{t.problemTitle}</h2><div className="mt-7 space-y-5">{t.problem.map((p) => <p key={p} className="font-bold leading-8 text-white/68">{p}</p>)}</div></article><article className="border-t border-[#d9a441] p-8 md:p-12"><p className="text-xs font-black uppercase tracking-[.26em] text-[#b5121b]">Opportunity</p><h2 className="mt-5 text-4xl font-black">{t.opportunityTitle}</h2><div className="mt-7 space-y-5">{t.opportunity.map((p) => <p key={p} className="font-bold leading-8 text-[#201815]/68">{p}</p>)}</div></article></div></section>

      <section className="bg-[#f4ece7] px-5 py-20 md:px-10 lg:px-20"><div className="mx-auto max-w-[1450px]"><div className="flex flex-wrap items-end justify-between gap-5"><h2 className="text-4xl font-black md:text-6xl">{t.modelTitle}</h2><p className="text-sm font-black uppercase tracking-[.22em] text-[#b5121b]">{t.modelLabel}</p></div><div className="relative mt-12 grid md:grid-cols-2 xl:grid-cols-4"><div className="absolute inset-x-0 top-5 hidden h-px bg-[#b5121b]/25 xl:block" />{t.stages.map(([title, text], i) => <article key={title} className="relative border-t border-[#201815]/15 px-0 py-7 md:px-6 xl:border-t-0"><span className="relative z-10 inline-grid h-10 w-10 place-items-center bg-[#b5121b] text-xs font-black text-white">0{i + 1}</span><h3 className="mt-7 text-2xl font-black">{title}</h3><p className="mt-4 text-sm font-bold leading-7 text-[#201815]/62">{text}</p></article>)}</div></div></section>

      <section className="px-5 py-20 md:px-10 lg:px-20"><div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-black uppercase tracking-[.28em] text-[#b5121b]">Leadership</p><h2 className="mt-5 text-4xl font-black md:text-6xl">{t.ministryTitle}</h2><p className="mt-7 text-lg font-bold leading-9 text-[#201815]/72">{t.ministry}</p></div><div className="border-t border-[#b5121b]/35">{t.ministryPoints.map((item, i) => <p key={item} className="flex gap-5 border-b border-[#201815]/12 py-5 font-black leading-7"><span className="text-[#b5121b]">0{i + 1}</span>{item}</p>)}</div></div></section>

      <section className="border-y border-[#201815]/10 bg-white/55 px-5 py-20 md:px-10 lg:px-20"><div className="mx-auto max-w-[1450px]"><h2 className="text-4xl font-black md:text-5xl">{t.impactTitle}</h2><div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4">{t.impacts.map((item, i) => <article key={item} className="min-h-44 border-t border-[#201815]/15 p-6"><p className="text-5xl font-black text-[#d9a441]/35">0{i + 1}</p><p className="mt-5 font-black leading-7">{item}</p></article>)}</div></div></section>

      <section className="bg-[#b5121b] px-5 py-20 text-white md:px-10 lg:px-20"><div className="mx-auto max-w-[1100px] text-center"><h2 className="text-4xl font-black leading-tight md:text-6xl">{t.closingTitle}</h2><p className="mx-auto mt-7 max-w-4xl text-lg font-bold leading-9 text-white/78">{t.closing}</p><div className="mt-10 flex flex-wrap justify-center gap-4"><Link href="/plans" className="bg-white px-6 py-4 text-sm font-black text-[#b5121b] transition hover:-translate-y-1">{t.plans}</Link><Link href="/digital-services" className="border border-white/35 px-6 py-4 text-sm font-black transition hover:-translate-y-1 hover:bg-[#201815]">{t.digital}</Link></div></div></section>
    </main>
  );
}
