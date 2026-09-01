"use client";

import Image from "next/image";
import {
  CINEMATIC_STATEMENT,
  FINAL_BOOKING_CTA,
  GHD_EXPERIENCE,
  SAMRAYA_TEASER,
} from "@/lib/corporate-content";
import {
  FadeInSection,
  GoldButton,
  GoldLink,
  SectionEyebrow,
  SectionHeading,
} from "./CorporateUi";

export function ExperienceSection() {
  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <FadeInSection className="max-w-xl">
          <SectionEyebrow>{GHD_EXPERIENCE.eyebrow}</SectionEyebrow>
          <SectionHeading className="mt-3">{GHD_EXPERIENCE.headline}</SectionHeading>
        </FadeInSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {GHD_EXPERIENCE.steps.map((step) => (
            <FadeInSection key={step.title}>
              <div className="group relative min-h-[280px] overflow-hidden">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 via-[#2D2D2D]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="font-heading text-2xl text-white">{step.title}</h3>
                  <p className="mt-2 font-body text-sm text-white/80">{step.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CinematicSection() {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
      <Image
        src={CINEMATIC_STATEMENT.image}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#2D2D2D]/50" />
      <FadeInSection className="relative z-10 px-6 text-center">
        <p className="font-heading text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {CINEMATIC_STATEMENT.line1}
          <br />
          {CINEMATIC_STATEMENT.line2}
        </p>
      </FadeInSection>
    </section>
  );
}

export function SamrayaTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE6] py-20 sm:py-28">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A86B]" />
        <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C6A86B]" />
      </div>
      <div className="relative mx-auto max-w-[800px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionEyebrow>{SAMRAYA_TEASER.eyebrow}</SectionEyebrow>
          <SectionHeading className="mt-4">{SAMRAYA_TEASER.headline}</SectionHeading>
          <p className="mt-8 font-heading text-4xl text-[#2D2D2D] sm:text-5xl md:text-6xl">
            {SAMRAYA_TEASER.brand}
          </p>
          <p className="mt-3 font-body text-sm uppercase tracking-[0.2em] text-[#C6A86B]">
            Coming Soon
          </p>
          <div className="mt-10">
            <GoldLink href={SAMRAYA_TEASER.cta.href}>{SAMRAYA_TEASER.cta.label}</GoldLink>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export function FinalBookingCta() {
  return (
    <section className="border-t border-[#E6DDCF] bg-[#FCFBF8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[800px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading>{FINAL_BOOKING_CTA.headline}</SectionHeading>
          <p className="mt-4 font-body text-base text-[#6F6A62]">
            {FINAL_BOOKING_CTA.subheading}
          </p>
          <div className="mt-8">
            <GoldButton href={FINAL_BOOKING_CTA.cta.href}>
              {FINAL_BOOKING_CTA.cta.label} →
            </GoldButton>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
