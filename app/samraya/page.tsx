import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { CorporateFooter } from "@/components/corporate/CorporateFooter";
import {
  FadeInSection,
  GoldLink,
  SectionEyebrow,
  SectionHeading,
} from "@/components/corporate/CorporateUi";
import { SAMRAYA_PAGE } from "@/lib/corporate-content";

export const metadata: Metadata = {
  title: "Samraya by GHD Hotels | Coming Soon",
  description:
    "Samraya is an upcoming GHD Hotels brand shaped by Indian artistry, cultural depth and refined hospitality.",
};

export default function SamrayaPage() {
  return (
    <div className="corporate-site bg-[#F4EFE6] text-[#2D2D2D]">
      <Header />
      <main>
        <section className="relative flex min-h-[85vh] items-center overflow-hidden">
          <Image
            src="/images/nivaara/Nivaara_Lobby_Lounge_Pic1.w1200.webp"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE6] via-[#F4EFE6]/90 to-[#F4EFE6]/40" />

          <div className="relative z-10 mx-auto max-w-[900px] px-6 py-20 text-center lg:px-10">
            <FadeInSection>
              <SectionEyebrow>{SAMRAYA_PAGE.eyebrow}</SectionEyebrow>
              <p className="mt-6 font-heading text-5xl text-[#2D2D2D] sm:text-6xl md:text-7xl">
                {SAMRAYA_PAGE.brand}
              </p>
              <p className="mt-4 font-body text-sm uppercase tracking-[0.22em] text-[#C6A86B]">
                {SAMRAYA_PAGE.status}
              </p>
              <SectionHeading className="mx-auto mt-10 max-w-lg whitespace-pre-line">
                {SAMRAYA_PAGE.headline}
              </SectionHeading>
              <div className="mx-auto mt-8 max-w-xl space-y-5">
                {SAMRAYA_PAGE.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="font-body text-base leading-relaxed text-[#6F6A62]">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-6">
                <GoldLink href="/">Return to GHD Hotels</GoldLink>
                <Link
                  href="/contact"
                  className="font-body text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[#6F6A62] hover:text-[#C6A86B]"
                >
                  Contact Us
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E6DDCF] bg-[#FCFBF8] py-16 sm:py-20">
          <div className="mx-auto max-w-[800px] px-6 text-center lg:px-10">
            <FadeInSection>
              <p className="font-body text-sm leading-relaxed text-[#6F6A62]">
                Samraya is part of the GHD Hotels collection of distinctive hospitality brands.
                Follow GHD Hotels on social media for updates as this new chapter unfolds.
              </p>
            </FadeInSection>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
