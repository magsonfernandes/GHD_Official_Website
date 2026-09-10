import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";
import {
  CultureClosingSection,
  CultureGuestsSection,
  CultureHero,
  CultureInActionSection,
  CultureMeaningSection,
  CulturePeopleSection,
  CulturePlaceSection,
} from "@/components/corporate/CultureSections";

export const metadata: Metadata = {
  title: "Our Culture | GHD Hotels",
  description:
    "Belonging is at the heart of GHD Hotels — a culture where guests, colleagues, and partners feel welcomed, valued, and part of something.",
};

export default function CulturePage() {
  return (
    <div className="corporate-site bg-white text-[#2D2D2D]">
      <Header />
      <main className="pt-0">
        <CultureHero />
        <CultureMeaningSection />
        <CultureInActionSection />
        <CulturePeopleSection />
        <CultureGuestsSection />
        <CulturePlaceSection />
        <CultureClosingSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
