import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";
import {
  FadeInSection,
  GoldLink,
  SectionEyebrow,
  SectionHeading,
} from "@/components/corporate/CorporateUi";
import { ABOUT_PAGE } from "@/lib/corporate-content";
import { LeadershipSection } from "@/components/corporate/LeadershipDestinations";
import { PhilosophySection } from "@/components/corporate/AboutPhilosophy";

export const metadata: Metadata = {
  title: "About GHD Hotels | Our Story & Philosophy",
  description:
    "Learn about GHD Hotels — a hospitality company built on thoughtful design, genuine service, and distinctive brands including Nivaãra and Samraya.",
};

export default function AboutPage() {
  return (
    <div className="corporate-site bg-[#FCFBF8] text-[#2D2D2D]">
      <Header />
      <main className="pt-14 md:pt-16">
        <section className="border-b border-[#E6DDCF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
            <FadeInSection>
              <SectionEyebrow>{ABOUT_PAGE.eyebrow}</SectionEyebrow>
              <SectionHeading className="mt-3 whitespace-pre-line">
                {ABOUT_PAGE.headline}
              </SectionHeading>
            </FadeInSection>
            <FadeInSection className="space-y-5">
              {ABOUT_PAGE.extended.map((p) => (
                <p key={p.slice(0, 40)} className="font-body text-base leading-relaxed text-[#6F6A62]">
                  {p}
                </p>
              ))}
              <GoldLink href="/#brands">Explore Our Brands</GoldLink>
            </FadeInSection>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src="/images/nivaara/Nivaara_Lobby_Lounge_Pic1.w1200.webp"
                alt="GHD Hotels hospitality"
                fill
                className="object-cover"
                sizes="1200px"
              />
            </div>
          </div>
        </section>

        <PhilosophySection />
        <LeadershipSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
