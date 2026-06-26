"use client";

import { useState } from "react";
import Link from "next/link";
import type { Lang } from "@/components/Sidebar";
import { useStoredLang } from "@/hooks/useStoredLang";

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    langLabel: "اللغة",
    label: "03 / خطط تشغيلية",
    heroTitle: "تفاصيل خطط استقبال الوفود",
    heroSubtitle:
      "صفحة تشغيلية لاستقبال الوفود الصينية تجمع المسارات الثقافية والسياحية مع الإعلام، اللوجستيات، الأمن، والخدمات الرقمية.",
    overview: "نموذج استقبال متكامل",
    fields: {
      goal: "الهدف",
      duration: "المدة",
      delegation: "نوع الوفد المناسب",
      route: "المسار المقترح",
      digital: "دور الخدمات الرقمية والجولات الافتراضية",
      services: "الخدمات التشغيلية داخل الخطة",
    },
    mediaTitle: "المحور الإعلامي والتوثيقي",
    mediaIntro:
      "يظهر كمسار عمل واضح داخل الخطة، من التصوير حتى أرشفة المواد في ملف الزيارة.",
    mediaItems: [
      "تصوير فوتوغرافي وفيديو مختصر للزيارة",
      "تجهيز مواد إعلامية للنشر بعد الموافقة",
      "مقابلات قصيرة عند الحاجة",
      "إنتاج ملخص مرئي للرحلة",
      "أرشفة الصور والفيديو ضمن ملف الزيارة",
      "استخدام استوديوهات البدر لإنتاج مواد إعلامية أو لقاءات ثقافية عند الحاجة",
    ],
    plans: [
      {
        code: "A",
        name: "خطة بغداد المركزة",
        duration: "من يومين إلى 5 أيام",
        image: "/images/plans/plan-a-baghdad.jpg",
        summary:
          "خطة مناسبة للوفود الرسمية أو الزيارات القصيرة، تركز على بغداد الثقافية والتراثية مع تنظيم كامل للحركة والخدمات.",
        goal: "إعطاء انطباع رسمي وثقافي قوي عن بغداد خلال مدة قصيرة.",
        delegation:
          "الوفود الرسمية، الثقافية، الإعلامية القصيرة، أو زيارات التعارف الأولية.",
        route: [
          "اليوم 1: استقبال VIP، الفندق، تعريف رقمي بالبرنامج، وجلسة ترحيبية قصيرة.",
          "اليوم 2: المتحف العراقي، المدرسة المستنصرية، القصر العباسي، شارع المتنبي، والقشلة.",
          "اليوم 3: بيت التحفيات كوجهة ثقافية وتراثية للتعرّف على التحف والأنتيك والعمارة البغدادية في البيوت التراثية، مع سوق الصفافير وجلسة توثيق إعلامي.",
          "اليوم 4-5: الكاظمية، جامع أم الطبول، أو استوديوهات البدر حسب طبيعة الوفد واهتمامه.",
        ],
        highlights: [
          "بيت التحفيات كتجربة ضيافة تراثية تتضمن جلسة تعريفية بتاريخ المكان والقطع المعروضة دون أي استخدام كإقامة.",
          "استوديوهات البدر كمحطة ثقافية وفنية للتعرّف على جانب من المشهد الفني العراقي وبيئة إنتاج الأعمال الفنية والثقافية.",
        ],
        digital:
          "يستخدم الوفد برنامجًا رقميًا مختصرًا قبل الوصول، مع خرائط يومية، رموز QR للوجهات، ونبذة افتراضية عن بيت التحفيات وشارع المتنبي.",
        services: [
          "استقبال VIP وإدارة الوصول",
          "نقل آمن داخل بغداد",
          "ترجمة ومرافقة بروتوكولية",
          "جدول رقمي وتحديثات يومية",
        ],
      },
      {
        code: "B",
        name: "خطة بغداد والجنوب",
        duration: "من 5 أيام إلى أسبوع",
        image: "/images/plans/plan-b-south.jpg",
        summary:
          "خطة ثقافية وحضارية تربط بغداد بجنوب العراق، وتشمل أور والزقورة والأهوار والبصرة والوجهات الدينية عند الحاجة.",
        goal: "ربط بغداد بجذور الحضارة العراقية في الجنوب.",
        delegation:
          "الوفود الثقافية، السياحية، الاقتصادية، ووفود التعاون.",
        route: [
          "اليوم 1-2: بغداد الرسمية والثقافية، مع بيت التحفيات، استوديوهات البدر، وشارع المتنبي والجولة الافتراضية كمقدمة قبل الزيارة.",
          "اليوم 3: أور والزقورة.",
          "اليوم 4: الأهوار.",
          "اليوم 5: البصرة.",
          "اليوم 6-7: كربلاء والنجف أو لقاءات اقتصادية وثقافية حسب طبيعة الوفد.",
        ],
        highlights: [
          "بيت التحفيات يقدّم للوفد مدخلًا حيًا للتراث البغدادي والتحف والضيافة الثقافية.",
          "استوديوهات البدر خيار مناسب في يوم بغداد للوفود المهتمة بالثقافة أو الإعلام.",
        ],
        digital:
          "تدعم المنصة الانتقال بين المدن بخريطة مسار، ملفات تعريف قصيرة لكل وجهة، وتنبيهات للجدول والمواد الإعلامية المطلوبة.",
        services: [
          "تنسيق مطارات وتنقلات بين المدن",
          "مرافقة أمنية ومسار بديل",
          "إرشاد ثقافي ومترجم مرافق",
          "تنسيق فنادق ومطاعم ومواقع زيارة",
        ],
      },
      {
        code: "C",
        name: "خطة العراق الشاملة",
        duration: "من أسبوع إلى 10 أيام",
        image: "/images/plans/plan-c-iraq.jpg",
        summary:
          "خطة موسعة للوفود الإعلامية أو الاستثمارية أو الثقافية الكبرى، تجمع بغداد والجنوب وكردستان والموصل ضمن تجربة عراقية كاملة.",
        goal: "تقديم صورة شاملة للعراق تجمع الحضارة، المدن، الطبيعة، الدين، والإعلام.",
        delegation:
          "الوفود الإعلامية، الاستثمارية، الثقافية الكبرى، والوفود التي تحتاج تجربة أوسع.",
        route: [
          "اليوم 1-2: بغداد.",
          "اليوم 3-5: الجنوب الحضاري والديني.",
          "اليوم 6-7: كردستان العراق: أربيل، دهوك، والسليمانية.",
          "اليوم 8: الموصل والتراث الشمالي.",
          "اليوم 9: الموصل والتراث الشمالي أو يوم إعلامي وثقافي يتضمن استوديوهات البدر حسب طبيعة الوفد.",
          "اليوم 10: مراجعة إعلامية، ملخص بصري للرحلة، لقاء ختامي، ومغادرة.",
        ],
        highlights: [
          "توظيف بيت التحفيات والجولات الافتراضية كنقطة تعريف مبكرة بالتراث البغدادي.",
          "إدراج استوديوهات البدر ضمن محور الإعلام والثقافة عند الحاجة إلى لقاءات أو إنتاج مواد مرئية.",
        ],
        digital:
          "تعمل الخدمات الرقمية كلوحة قيادة للرحلة، تجمع الجداول، الخرائط، ملفات التوثيق، والمحتوى الافتراضي لكل مرحلة.",
        services: [
          "إدارة حركة متعددة المدن",
          "فريق مرافقة وترجمة",
          "ملف إعلامي شامل للرحلة",
          "متابعة يومية وحلول طوارئ",
        ],
      },
    ],
    virtual: {
      title: "الجولات الافتراضية قبل الزيارة",
      badge: "نموذج قابل للتوسع",
      idea:
        "تُستخدم الجولات الافتراضية الجاهزة لبيت التحفيات وشارع المتنبي كنموذج أولي لتعريف الوفد بالوجهات قبل الوصول. هذه التجربة تساعد على خلق تصور مسبق للمكان، وتزيد من اهتمام الوفد، وتمنح المنصة بعدًا رقميًا عمليًا.",
      points: [
        "تعريف الوفد بالوجهات قبل الوصول",
        "دمج الجولات داخل المنصة أو التطبيق",
        "دعم الجولات الحقيقية بالمعلومات والخرائط",
        "بناء أرشيف رقمي للمعالم العراقية",
        "إمكانية توسيع التصوير ليشمل المعالم السياحية والأثرية والدينية",
      ],
      open: "فتح الجولة في نافذة جديدة",
      tours: [
        {
          label: "بيت التحفيات",
          src: "https://my.matterport.com/show/?m=rUWyUPkBTgF",
        },
        {
          label: "شارع المتنبي",
          src: "https://my.matterport.com/show/?m=o5utxom1Q1g",
        },
      ],
      timeline: ["التقاط", "نشر", "دمج", "أرشفة"],
      stages: [
        "قبل الزيارة: تعريف افتراضي بالوجهات",
        "أثناء الزيارة: دعم الجولة بالمعلومات والخرائط",
        "بعد الزيارة: أرشفة وتوثيق ونشر مختار",
      ],
    },
    support: {
      title: "البنية التشغيلية المصاحبة",
      intro:
        "طبقة خدمات ثابتة تجعل الخطة قابلة للتنفيذ، وتبقي الحركة اليومية واضحة ومنظمة.",
      items: [
        "النقل VIP",
        "الأمن والمرافقة",
        "الترجمة والبروتوكول",
        "مدير الجولات",
        "الإسعاف والطوارئ",
        "الفنادق والمطاعم والتنسيق",
      ],
      details: [
        "سيارات VIP وSUV وVan حسب عدد الوفد",
        "رجال أمن مرافقون وخطة حركة آمنة",
        "مترجم عربي/صيني أو إنكليزي/صيني",
        "مدير جولات مرافق ومسؤول عن الجدول",
        "طبيب أو مسعف للحالات الطارئة",
        "تنسيق فنادق ومطاعم ومواقع الزيارة",
        "خطة بديلة للمسارات في حال الطوارئ",
        "متابعة يومية لحالة الوفد والحركة",
      ],
    },
  },
  en: {
    dir: "ltr",
    back: "Back to Home",
    langLabel: "Language",
    label: "03 / Operational Plans",
    heroTitle: "Delegation Reception Plan Details",
    heroSubtitle:
      "An operational page for receiving Chinese delegations, combining cultural routes with media, logistics, security, and digital services.",
    overview: "Integrated Reception Model",
    fields: {
      goal: "Goal",
      duration: "Duration",
      delegation: "Suitable Delegation Type",
      route: "Proposed Route",
      digital: "Role of Digital Services and Virtual Tours",
      services: "Operational Services in the Plan",
    },
    mediaTitle: "Media & Documentation Track",
    mediaIntro:
      "A visible workstream inside each plan, from coverage to archiving the visit file.",
    mediaItems: [
      "Photography and short video coverage",
      "Preparing approved media materials",
      "Short interviews when needed",
      "Producing a visual trip summary",
      "Archiving photos and videos within the visit file",
      "Using Al-Bader Studios for media materials or cultural interviews when needed",
    ],
    plans: [
      {
        code: "A",
        name: "Focused Baghdad Plan",
        duration: "2 to 5 Days",
        image: "/images/plans/plan-a-baghdad.jpg",
        summary:
          "Suitable for official delegations or short visits, focusing on cultural and heritage Baghdad with complete movement and service management.",
        goal: "Create a strong formal and cultural impression of Baghdad within a short visit.",
        delegation:
          "Official, cultural, short media delegations, or initial familiarization visits.",
        route: [
          "Day 1: VIP reception, hotel check-in, digital program introduction, and short welcome session.",
          "Day 2: Iraq Museum, Al-Mustansiriya School, Abbasid Palace, Al-Mutanabbi Street, and Al-Qishla.",
          "Day 3: House of Antiques as a cultural and heritage destination introducing antiques, collectible objects, and Baghdadi heritage-house architecture, with Copper Market and a media documentation session.",
          "Day 4-5: Al-Kadhimiya, Umm Al-Taboul Mosque, or Al-Bader Studios depending on the delegation's interest.",
        ],
        highlights: [
          "House of Antiques can host a private heritage evening with Iraqi hospitality and a guided introduction to the place and selected pieces.",
          "Al-Bader Studios is a cultural and artistic stop introducing the delegation to part of the Iraqi art scene and production environment.",
        ],
        digital:
          "The delegation receives a compact digital program before arrival, with daily maps, destination QR codes, and a virtual introduction to House of Antiques and Al-Mutanabbi Street.",
        services: [
          "VIP arrival management",
          "Secure movement inside Baghdad",
          "Translation and protocol escort",
          "Digital schedule and daily updates",
        ],
      },
      {
        code: "B",
        name: "Baghdad & South Plan",
        duration: "5 Days to 1 Week",
        image: "/images/plans/plan-b-south.jpg",
        summary:
          "A cultural and civilizational route connecting Baghdad with southern Iraq, including Ur, the Ziggurat, the Marshes, Basra, and religious destinations when required.",
        goal: "Connect Baghdad with Iraq's civilizational roots in the South.",
        delegation:
          "Cultural, touristic, economic, and cooperation-oriented delegations.",
        route: [
          "Day 1-2: Formal and cultural Baghdad, including House of Antiques, Al-Bader Studios, Al-Mutanabbi Street, and its virtual tour as a pre-visit introduction.",
          "Day 3: Ur and the Ziggurat.",
          "Day 4: The Marshes.",
          "Day 5: Basra.",
          "Day 6-7: Karbala and Najaf, or economic and cultural meetings based on the delegation.",
        ],
        highlights: [
          "House of Antiques gives the delegation a vivid entry point into Baghdadi heritage, antiques, and cultural hospitality.",
          "Al-Bader Studios can be added during the Baghdad day for delegations interested in culture or media.",
        ],
        digital:
          "The platform supports intercity movement with a route map, short destination profiles, schedule alerts, and required media material tracking.",
        services: [
          "Airport and intercity coordination",
          "Security escort and alternative route",
          "Cultural guide and translator",
          "Hotel, restaurant, and site coordination",
        ],
      },
      {
        code: "C",
        name: "Complete Iraq Plan",
        duration: "1 Week to 10 Days",
        image: "/images/plans/plan-c-iraq.jpg",
        summary:
          "An expanded plan for media, investment, or major cultural delegations, combining Baghdad, the South, Kurdistan, and Mosul into a complete Iraq experience.",
        goal: "Present a complete image of Iraq across civilization, cities, nature, religion, and media.",
        delegation:
          "Media, investment, major cultural delegations, and groups requiring a wider experience.",
        route: [
          "Day 1-2: Baghdad.",
          "Day 3-5: The civilizational and religious South.",
          "Day 6-7: Iraqi Kurdistan: Erbil, Duhok, and Sulaymaniyah.",
          "Day 8: Mosul and northern heritage.",
          "Day 9: Mosul and northern heritage, or a media and cultural day including Al-Bader Studios depending on delegation type.",
          "Day 10: Media review, visual trip summary, closing session, and departure.",
        ],
        highlights: [
          "House of Antiques and virtual tours can introduce Baghdadi heritage before the wider route begins.",
          "Al-Bader Studios can support the media and culture track when interviews or visual material are required.",
        ],
        digital:
          "Digital services act as the trip command layer, combining schedules, maps, documentation files, and virtual content for every stage.",
        services: [
          "Multi-city movement management",
          "Escort and translation team",
          "Complete media trip file",
          "Daily tracking and emergency options",
        ],
      },
    ],
    virtual: {
      title: "Pre-Visit Virtual Tours",
      badge: "Scalable Model",
      idea:
        "The existing virtual tours of the House of Antiques and Al-Mutanabbi Street can be used as an initial model to introduce the delegation to destinations before arrival. This experience creates a prior sense of place, increases engagement, and gives the platform a practical digital layer.",
      points: [
        "Introducing destinations before arrival",
        "Integrating tours into the platform or application",
        "Supporting physical visits with maps and information",
        "Building a digital archive of Iraqi landmarks",
        "Expanding documentation to touristic, archaeological, and religious sites",
      ],
      open: "Open tour in new tab",
      tours: [
        {
          label: "House of Antiques",
          src: "https://my.matterport.com/show/?m=rUWyUPkBTgF",
        },
        {
          label: "Al-Mutanabbi Street",
          src: "https://my.matterport.com/show/?m=o5utxom1Q1g",
        },
      ],
      timeline: ["Capture", "Publish", "Integrate", "Archive"],
      stages: [
        "Before the visit: virtual destination introduction",
        "During the visit: support with information and maps",
        "After the visit: archive, document, and selective publishing",
      ],
    },
    support: {
      title: "Supporting Operational Structure",
      intro:
        "A fixed service layer that makes each plan executable and keeps daily movement clear and organized.",
      items: [
        "VIP Transport",
        "Security & Escort",
        "Translation & Protocol",
        "Tour Manager",
        "Medical & Emergency",
        "Hotels, Restaurants & Coordination",
      ],
      details: [
        "VIP cars, SUVs, and vans depending on delegation size",
        "Security escorts and safe movement plan",
        "Arabic/Chinese or English/Chinese translator",
        "Accompanying tour manager responsible for the schedule",
        "Doctor or paramedic for emergency cases",
        "Hotel, restaurant, and site coordination",
        "Alternative route plans for emergencies",
        "Daily tracking of delegation status and movement",
      ],
    },
  },
  zh: {
    dir: "ltr",
    back: "返回首页",
    langLabel: "语言",
    label: "03 / 运营方案",
    heroTitle: "代表团接待方案详情",
    heroSubtitle:
      "面向中国代表团接待的运营页面，结合文化路线、媒体记录、后勤、安全与数字化服务。",
    overview: "综合接待模式",
    fields: {
      goal: "目标",
      duration: "时长",
      delegation: "适合代表团类型",
      route: "建议路线",
      digital: "数字服务与虚拟参观作用",
      services: "方案内运营服务",
    },
    mediaTitle: "媒体与记录模块",
    mediaIntro:
      "作为每个方案中的清晰工作模块，从现场记录到访问文件归档。",
    mediaItems: [
      "摄影与短视频记录",
      "准备经批准的媒体资料",
      "根据需要进行简短采访",
      "制作访问视觉总结",
      "将照片与视频归档到访问文件中",
      "根据需要利用巴德尔工作室制作媒体资料或进行文化访谈",
    ],
    plans: [
      {
        code: "A",
        name: "巴格达重点方案",
        duration: "2至5天",
        image: "/images/plans/plan-a-baghdad.jpg",
        summary:
          "适合官方代表团或短期访问，重点展示巴格达文化与遗产，并提供完整的行程与服务管理。",
        goal: "在较短时间内形成对巴格达的正式与文化印象。",
        delegation: "官方、文化、短期媒体代表团，或初次了解型访问。",
        route: [
          "第1天：贵宾接待、酒店入住、数字行程介绍和简短欢迎会。",
          "第2天：伊拉克博物馆、穆斯坦西里亚学校、阿拔斯宫、穆塔纳比街和卡什拉。",
          "第3天：古董之家作为文化与遗产目的地，介绍古董、收藏品以及巴格达传统住宅建筑，并安排铜器市场和媒体记录环节。",
          "第4-5天：卡迪米亚、乌姆塔布尔清真寺或巴德尔工作室，根据代表团兴趣安排。",
        ],
        highlights: [
          "古董之家可组织私人遗产晚会，包括伊拉克式接待以及对地点和精选藏品的介绍，不作为住宿地点。",
          "巴德尔工作室作为文化与艺术站点，向代表团介绍伊拉克艺术场景和创作环境。",
        ],
        digital:
          "代表团抵达前获得精简数字行程，包括每日地图、目的地二维码，以及古董之家和穆塔纳比街的虚拟介绍。",
        services: [
          "贵宾抵达管理",
          "巴格达市内安全交通",
          "翻译与礼宾陪同",
          "数字日程与每日更新",
        ],
      },
      {
        code: "B",
        name: "巴格达与南部方案",
        duration: "5天至1周",
        image: "/images/plans/plan-b-south.jpg",
        summary:
          "连接巴格达与伊拉克南部的文化文明路线，包括乌尔、神庙、湿地、巴士拉，并可根据需要加入宗教目的地。",
        goal: "连接巴格达与伊拉克南部文明根源。",
        delegation: "文化、旅游、经济及合作型代表团。",
        route: [
          "第1-2天：正式与文化巴格达，包括古董之家、巴德尔工作室、穆塔纳比街及其访问前虚拟参观。",
          "第3天：乌尔与神庙。",
          "第4天：湿地。",
          "第5天：巴士拉。",
          "第6-7天：卡尔巴拉与纳杰夫，或根据代表团性质安排经济与文化会面。",
        ],
        highlights: [
          "古董之家让代表团直接了解巴格达遗产、古董和文化接待。",
          "若代表团关注文化或媒体，巴德尔工作室可加入巴格达日程。",
        ],
        digital:
          "平台通过路线地图、目的地简介、日程提醒和媒体资料跟踪，支持城市之间的行程管理。",
        services: [
          "机场与城际交通协调",
          "安保陪同与备用路线",
          "文化导览与翻译",
          "酒店、餐厅与地点协调",
        ],
      },
      {
        code: "C",
        name: "完整伊拉克方案",
        duration: "1周至10天",
        image: "/images/plans/plan-c-iraq.jpg",
        summary:
          "适合媒体、投资或大型文化代表团的扩展方案，结合巴格达、南部、库尔德斯坦和摩苏尔，形成完整的伊拉克体验。",
        goal: "从文明、城市、自然、宗教与媒体角度呈现完整伊拉克形象。",
        delegation: "媒体、投资、大型文化代表团，以及需要更广体验的团队。",
        route: [
          "第1-2天：巴格达。",
          "第3-5天：文明与宗教南部。",
          "第6-7天：伊拉克库尔德斯坦：埃尔比勒、杜胡克、苏莱曼尼亚。",
          "第8天：摩苏尔与北部遗产。",
          "第9天：摩苏尔与北部遗产，或根据代表团类型安排包括巴德尔工作室在内的媒体和文化日。",
          "第10天：媒体回顾、访问视觉总结、闭幕会和离境。",
        ],
        highlights: [
          "古董之家和虚拟参观可在完整路线开始前介绍巴格达遗产。",
          "当需要访谈或视觉资料时，巴德尔工作室可支持媒体与文化模块。",
        ],
        digital:
          "数字服务作为行程指挥层，整合日程、地图、记录文件和每个阶段的虚拟内容。",
        services: [
          "多城市行程管理",
          "陪同与翻译团队",
          "完整媒体访问文件",
          "每日跟踪与应急方案",
        ],
      },
    ],
    virtual: {
      title: "访问前虚拟参观",
      badge: "可扩展模式",
      idea:
        "现有的古董之家和穆塔纳比街虚拟参观可作为初步模型，在代表团抵达前介绍目的地。这种体验有助于提前了解地点、提升访问兴趣，并为平台增加实用的数字层。",
      points: [
        "抵达前了解目的地",
        "将虚拟参观整合到平台或应用中",
        "通过地图与信息支持实地访问",
        "建立伊拉克地标数字档案",
        "扩展至旅游、考古与宗教地点的拍摄记录",
      ],
      open: "在新标签页打开虚拟参观",
      tours: [
        {
          label: "古董之家",
          src: "https://my.matterport.com/show/?m=rUWyUPkBTgF",
        },
        {
          label: "穆塔纳比街",
          src: "https://my.matterport.com/show/?m=o5utxom1Q1g",
        },
      ],
      timeline: ["采集", "发布", "整合", "归档"],
      stages: [
        "访问前：虚拟介绍目的地",
        "访问中：用信息与地图支持行程",
        "访问后：归档、记录与选择性发布",
      ],
    },
    support: {
      title: "配套运营结构",
      intro:
        "固定服务层让每个方案可执行，并保持每日行程清晰有序。",
      items: [
        "贵宾交通",
        "安保与陪同",
        "翻译与礼宾",
        "行程经理",
        "医疗与应急",
        "酒店、餐厅与协调",
      ],
      details: [
        "根据代表团规模提供贵宾车、SUV和商务车",
        "安保陪同与安全行程计划",
        "阿拉伯语/中文或英语/中文翻译",
        "随行行程经理负责日程管理",
        "医生或急救人员应对紧急情况",
        "酒店、餐厅和参观地点协调",
        "紧急情况下的备用路线",
        "每日跟踪代表团状态与行程",
      ],
    },
  },
} as const;

const langLinks: { code: Lang; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export default function PlansPage() {
  const [lang, setLang] = useStoredLang();
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-[#fffaf6] text-[#201815]">
      <section
        className="relative min-h-[76vh] overflow-hidden px-5 py-8 text-white md:px-10 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg,rgba(32,24,21,0.84),rgba(181,18,27,0.52)),url('/images/plans/plans-hero.jpg'),linear-gradient(135deg,#201815,#b5121b 62%,#d9a441)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:86px_86px] opacity-20" />
        <div className="absolute bottom-0 left-0 h-1 w-1/2 bg-[#b5121b]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(76vh-4rem)] max-w-[1500px] flex-col justify-between">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="border border-white/25 bg-black/20 px-5 py-3 text-sm font-black backdrop-blur-md transition-all hover:bg-[#b5121b]"
            >
              {t.back}
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
                {t.langLabel}
              </span>
              {langLinks.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLang(item.code)}
                  className={[
                    "px-4 py-2 text-xs font-black transition-all",
                    lang === item.code
                      ? "bg-white text-[#b5121b]"
                      : "border border-white/20 text-white/65 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </header>

          <div className="max-w-6xl pb-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#d9a441]">
              {t.label}
            </p>
            <h1
              className={[
                "font-black uppercase leading-[0.88] tracking-normal text-white",
                lang === "zh"
                  ? "text-[15vw] md:text-[7vw] lg:text-[5vw]"
                  : "text-[12vw] md:text-[6.3vw] lg:text-[4.9vw]",
              ].join(" ")}
            >
              {t.heroTitle}
            </h1>
            <p className="mt-7 max-w-4xl text-lg font-black leading-8 text-white/78 md:text-2xl md:leading-10">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12 md:px-10 md:py-14 lg:px-16">
        <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(90deg,rgba(181,18,27,0.075)_1px,transparent_1px),linear-gradient(0deg,rgba(32,24,21,0.055)_1px,transparent_1px)] bg-[size:104px_104px]" />
        <div className="pointer-events-none absolute right-4 top-8 animate-watermark-drift text-[19vw] font-black text-[#b5121b]/[0.045]">
          A/B/C
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] space-y-10">
          <div className="grid gap-8 border-b border-[#201815]/15 pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#b5121b]">
              {t.overview}
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {t.plans.map((plan) => (
                <div key={plan.code} className="border-t border-[#201815]/15 pt-4">
                  <span className="text-5xl font-black text-[#b5121b]/35">
                    {plan.code}
                  </span>
                  <h2 className="mt-2 text-xl font-black">{plan.name}</h2>
                  <p className="mt-2 text-sm font-black text-[#201815]/55">
                    {plan.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {t.plans.map((plan, index) => (
            <article
              key={plan.code}
              className="group relative overflow-hidden border-y border-[#201815]/14 py-6 md:py-8"
            >
              <CropMarks />
              <div className="absolute left-3 top-7 text-[18vw] font-black leading-none text-[#b5121b]/[0.045] transition-all duration-500 group-hover:text-[#b5121b]/[0.075]">
                {plan.code}
              </div>

              <div
                className={[
                  "relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : "",
                ].join(" ")}
              >
                <a
                  href={plan.image}
                  target="_blank"
                  rel="noreferrer"
                  className="relative min-h-[330px] overflow-hidden bg-[#201815] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_34px_rgba(181,18,27,0.22)] md:min-h-[430px] lg:min-h-[520px]"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(32,24,21,0.05),rgba(32,24,21,0.54)),url('${plan.image}'),linear-gradient(135deg,#b5121b,#201815 58%,#d9a441)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <span className="sr-only">{plan.name}</span>
                  <span className="absolute bottom-6 left-6 border border-white/30 bg-black/25 px-4 py-2 text-xs font-black text-white backdrop-blur-md">
                    {plan.duration}
                  </span>
                  <span className="absolute right-6 top-6 text-8xl font-black text-white/20">
                    {plan.code}
                  </span>
                </a>

                <div className="animate-soft-fade-up lg:px-8">
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <span className="grid h-16 w-16 place-items-center bg-[#b5121b] text-3xl font-black text-white shadow-[0_0_26px_rgba(181,18,27,0.3)]">
                      {plan.code}
                    </span>
                    <span className="border border-[#d9a441]/60 px-4 py-2 text-xs font-black text-[#b5121b]">
                      {plan.duration}
                    </span>
                  </div>

                  <h2 className="text-4xl font-black leading-10 md:text-6xl md:leading-[0.95]">
                    {plan.name}
                  </h2>
                  <p className="mt-6 max-w-3xl text-lg font-black leading-8 text-[#201815]/70">
                    {plan.summary}
                  </p>

                  <div className="mt-8 grid gap-5 md:grid-cols-3">
                    <Info label={t.fields.goal} value={plan.goal} />
                    <Info label={t.fields.duration} value={plan.duration} />
                    <Info label={t.fields.delegation} value={plan.delegation} />
                  </div>

                  <Timeline title={t.fields.route} items={plan.route} />

                  <StopHighlights items={plan.highlights} />

                  <MediaBlock
                    title={t.mediaTitle}
                    intro={t.mediaIntro}
                    items={t.mediaItems}
                  />

                  <Info label={t.fields.digital} value={plan.digital} strong />
                  <ServicesStrip title={t.fields.services} items={plan.services} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <VirtualToursSection virtual={t.virtual} />
      <SupportSection support={t.support} />
    </main>
  );
}

function Info({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="border-t border-[#201815]/12 pt-5">
      <h3 className="text-sm font-black text-[#b5121b]">{label}</h3>
      <p
        className={[
          "mt-3 text-base leading-8 text-[#201815]/72",
          strong ? "font-black" : "font-bold",
        ].join(" ")}
      >
        {value}
      </p>
    </div>
  );
}

function Timeline({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="mt-8 border-t border-[#201815]/14 pt-6">
      <h3 className="mb-5 text-sm font-black text-[#b5121b]">{title}</h3>
      <div className="relative grid gap-4 md:grid-cols-2">
        <div className="absolute left-5 top-0 hidden h-full w-px overflow-hidden bg-[#201815]/14 md:block">
          <div className="h-1/2 animate-route-flow bg-gradient-to-b from-transparent via-[#b5121b] to-transparent" />
        </div>
        {items.map((item, index) => (
          <div
            key={item}
            className="relative bg-[#fffaf6] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_3px_0_0_#b5121b]"
          >
            <span className="mb-3 grid h-10 w-10 place-items-center bg-[#201815] text-xs font-black text-white shadow-[0_0_18px_rgba(181,18,27,0.18)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm font-bold leading-7 text-[#201815]/72">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MediaBlock({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly string[];
}) {
  return (
    <div className="my-8 grid overflow-hidden bg-[#201815] text-white md:grid-cols-[0.8fr_1.2fr]">
      <div
        className="min-h-[220px] bg-[#201815]"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(32,24,21,0.08),rgba(181,18,27,0.48)),url('/images/plans/media-documentation.jpg'),linear-gradient(135deg,#201815,#b5121b 62%,#d9a441)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="relative p-6 md:p-8">
        <div className="absolute right-0 top-0 h-full w-1 bg-[#b5121b]" />
        <h3 className="text-2xl font-black md:text-3xl">{title}</h3>
        <p className="mt-3 text-sm font-bold leading-7 text-white/65">{intro}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {items.map((item, index) => (
            <div key={item} className="border-t border-white/12 pt-3">
              <span className="text-xs font-black text-[#d9a441]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-black leading-6 text-white/82">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesStrip({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="mt-7 border-y border-[#201815]/12 py-5">
      <h3 className="mb-4 text-sm font-black text-[#b5121b]">{title}</h3>
      <div className="grid gap-3 md:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="bg-[#201815]/[0.035] px-4 py-3">
            <span className="block h-px w-8 bg-[#d9a441]" />
            <p className="mt-3 text-sm font-black leading-6 text-[#201815]/70">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StopHighlights({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="border border-[#201815]/10 bg-[#201815]/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b5121b]/35"
        >
          <span className="block h-px w-10 bg-[#b5121b]" />
          <p className="mt-4 text-sm font-black leading-7 text-[#201815]/72">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function VirtualToursSection({
  virtual,
}: {
  virtual: (typeof content)[Lang]["virtual"];
}) {
  const [activeTour, setActiveTour] = useState(0);
  const tour = virtual.tours[activeTour] ?? virtual.tours[0];

  return (
    <section className="relative overflow-hidden bg-[#150203] px-5 py-14 text-white md:px-10 md:py-16 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(181,18,27,0.36),transparent_32%),linear-gradient(135deg,#150203,#6f070c_58%,#201815)]" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="inline-flex border border-[#d9a441]/50 px-4 py-2 text-xs font-black text-[#d9a441]">
            {virtual.badge}
          </span>
          <h2 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] md:text-6xl">
            {virtual.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/72">
            {virtual.idea}
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {virtual.points.map((point) => (
              <div key={point} className="border-t border-white/12 pt-4">
                <span className="block h-px w-9 bg-[#d9a441]" />
                <p className="mt-3 text-sm font-black leading-7 text-white/78">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 h-16 w-16 border-l border-t border-[#d9a441]" />
          <div className="absolute -bottom-5 -right-5 h-16 w-16 border-b border-r border-[#d9a441]" />
          <div className="animate-red-glow overflow-hidden border border-white/15 bg-black/35 p-3 shadow-2xl backdrop-blur-md md:p-4">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#b5121b]" />
                <span className="h-3 w-3 rounded-full bg-[#d9a441]" />
                <span className="h-3 w-3 rounded-full bg-white/40" />
              </div>
              <div className="flex flex-wrap gap-2">
                {virtual.tours.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActiveTour(index)}
                    className={[
                      "border px-4 py-2 text-xs font-black transition-all",
                      activeTour === index
                        ? "border-[#d9a441] bg-[#d9a441] text-[#150203]"
                        : "border-white/15 text-white/65 hover:border-white/40 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#201815]">
              <iframe
                key={tour.src}
                src={tour.src}
                title={tour.label}
                allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                allowFullScreen
                className="h-[360px] w-full border-0 bg-[#201815] md:h-[520px]"
              />
              <div className="pointer-events-none absolute inset-0 border border-white/10" />
            </div>

            <div className="mt-4 flex justify-end">
              <a
                href={tour.src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex border border-white/15 px-4 py-2 text-xs font-black text-white/72 transition-all hover:border-[#d9a441] hover:text-white"
              >
                {virtual.open}
              </a>
            </div>
          </div>

          <div className="relative mt-8 grid gap-4 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-5 hidden h-px overflow-hidden bg-white/12 md:block">
              <div className="h-full animate-route-flow bg-gradient-to-r from-transparent via-[#ff1d2d] to-transparent" />
            </div>
            {virtual.timeline.map((step, index) => (
              <div key={step} className="relative">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#b5121b] text-xs font-black text-white shadow-[0_0_22px_rgba(181,18,27,0.7)]">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm font-black text-white/78">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3">
            {virtual.stages.map((stage) => (
              <p
                key={stage}
                className="border-r border-[#d9a441] bg-white/[0.055] px-4 py-3 text-sm font-black leading-7 text-white/75"
              >
                {stage}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportSection({
  support,
}: {
  support: (typeof content)[Lang]["support"];
}) {
  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-5 py-16 md:px-10 lg:px-16">
      <div className="absolute left-0 top-0 h-full w-1 bg-[#b5121b]" />
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#b5121b]">
              Ops Layer
            </p>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] md:text-6xl">
              {support.title}
            </h2>
          </div>
          <p className="max-w-4xl border-t border-[#201815]/15 pt-6 text-lg font-black leading-8 text-[#201815]/70">
            {support.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {support.items.map((item, index) => (
            <div
              key={item}
              className="group overflow-hidden bg-[#201815] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(181,18,27,0.22)]"
            >
              <span className="text-5xl font-black text-[#b5121b] transition-all duration-300 group-hover:text-[#d9a441]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-2xl font-black">{item}</h3>
              <span className="mt-5 block h-px w-20 bg-[#d9a441]" />
            </div>
          ))}
        </div>

        <div
          className="mt-10 grid gap-0 overflow-hidden bg-[#201815]"
          style={{
            backgroundImage:
              "linear-gradient(120deg,rgba(32,24,21,0.78),rgba(181,18,27,0.34)),url('/images/plans/security-transport.jpg'),linear-gradient(135deg,#201815,#b5121b 62%,#d9a441)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {support.details.map((detail) => (
              <div key={detail} className="bg-[#201815]/80 p-5 backdrop-blur-sm">
                <span className="block h-px w-8 bg-[#b5121b]" />
                <p className="mt-4 text-sm font-black leading-7 text-white/78">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CropMarks() {
  return (
    <>
      <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-[#b5121b]/45" />
      <span className="absolute right-0 top-0 h-10 w-10 border-r border-t border-[#b5121b]/45" />
      <span className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-[#b5121b]/45" />
      <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#b5121b]/45" />
    </>
  );
}
