import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { CorporateIntro } from "@/components/corporate/CorporateIntro";
import { CorporateBeachBanner } from "@/components/corporate/CorporateBeachBanner";
import { BrandShowcase } from "@/components/corporate/BrandShowcase";
import {
  CultureSection,
  WhatWeBelieveSection,
} from "@/components/corporate/AboutPhilosophy";
import {
  GetInTouchSection,
} from "@/components/corporate/LeadershipDestinations";
import {
  CinematicSection,
  FinalBookingCta,
} from "@/components/corporate/HomeSections";

export const metadata: Metadata = {
  title: "GHD Hotels | Thoughtful Stays. Genuine Hospitality.",
  description:
    "GHD Hotels is a growing hospitality company with distinctive brands including Nivaãra in North Goa and Samraya — coming soon. Stays that feel like home. Experiences that stay with you.",
};

export default function HomePage() {
  return (
    <div className="corporate-site bg-white text-[#2D2D2D]">
      <Header />
      <main className="pt-0">
        <CorporateHero />
        <CorporateIntro />
        <CorporateBeachBanner />
        <BrandShowcase />
        <CultureSection />
        <WhatWeBelieveSection />
        <GetInTouchSection className="bg-white" />
        <CinematicSection />
        <FinalBookingCta />
      </main>
      <CorporateFooter />
    </div>
  );
}
