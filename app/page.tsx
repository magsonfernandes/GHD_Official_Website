import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { BrandShowcase } from "@/components/corporate/BrandShowcase";
import {
  AboutGhdSection,
  PhilosophySection,
} from "@/components/corporate/AboutPhilosophy";
import {
  DestinationSection,
  LeadershipSection,
} from "@/components/corporate/LeadershipDestinations";
import {
  CinematicSection,
  ExperienceSection,
  FinalBookingCta,
  SamrayaTeaser,
} from "@/components/corporate/HomeSections";

export const metadata: Metadata = {
  title: "GHD Hotels | Thoughtful Stays. Genuine Hospitality.",
  description:
    "GHD Hotels is a growing hospitality company with distinctive brands including Nivaãra in North Goa and Samraya — coming soon. Stays that feel like home. Experiences that stay with you.",
};

export default function HomePage() {
  return (
    <div className="corporate-site bg-[#FCFBF8] text-[#2D2D2D]">
      <Header />
      <main className="pt-0">
        <CorporateHero />
        <BrandShowcase />
        <AboutGhdSection />
        <PhilosophySection />
        <LeadershipSection />
        <DestinationSection />
        <ExperienceSection />
        <CinematicSection />
        <SamrayaTeaser />
        <FinalBookingCta />
      </main>
      <CorporateFooter />
    </div>
  );
}
