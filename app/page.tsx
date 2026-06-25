"use client";

import { useState } from "react";
import DestinationsSection from "@/components/DestinationsSection";
import DigitalServicesSection from "@/components/DigitalServicesSection";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import PlansSection from "@/components/PlansSection";
import Sidebar, { type Lang } from "@/components/Sidebar";
import SiteFooter from "@/components/SiteFooter";
import VisionSection from "@/components/VisionSection";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("ar");

  return (
    <main className="min-h-screen bg-[#2a0507]">
      <Sidebar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <VisionSection lang={lang} />
      <PlansSection lang={lang} />
      <DigitalServicesSection lang={lang} />
      <DestinationsSection lang={lang} />
      <ImpactSection lang={lang} />
      <SiteFooter lang={lang} />
    </main>
  );
}
