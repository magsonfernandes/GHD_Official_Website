import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";
import {
  CareersApplySection,
  CareersClosingSection,
  CareersContactSection,
  CareersGrowSection,
  CareersHero,
  CareersWhySection,
} from "@/components/corporate/CareersSections";

export const metadata: Metadata = {
  title: "Careers | GHD Hotels",
  description:
    "Come build something worth belonging to. Join GHD Hotels and help shape distinctive destinations, experiences, and a culture people are proud of.",
};

export default function CareersPage() {
  return (
    <div className="corporate-site bg-white text-[#2D2D2D]">
      <Header />
      <main className="pt-0">
        <CareersHero />
        <CareersWhySection />
        <CareersGrowSection />
        <CareersApplySection />
        <CareersContactSection />
        <CareersClosingSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
