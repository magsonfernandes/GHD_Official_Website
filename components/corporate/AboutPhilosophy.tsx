"use client";

import { ABOUT_GHD, PHILOSOPHY } from "@/lib/corporate-content";
import {
  FadeInSection,
  GoldLink,
  SectionEyebrow,
  SectionHeading,
} from "./CorporateUi";

export function AboutGhdSection() {
  return (
    <section id="about-ghd" className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <FadeInSection>
          <SectionEyebrow>{ABOUT_GHD.eyebrow}</SectionEyebrow>
          <SectionHeading className="mt-3 whitespace-pre-line">
            {ABOUT_GHD.headline}
          </SectionHeading>
        </FadeInSection>
        <FadeInSection>
          <div className="space-y-5">
            {ABOUT_GHD.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="font-body text-base leading-relaxed text-[#6F6A62]">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <GoldLink href={ABOUT_GHD.cta.href}>{ABOUT_GHD.cta.label}</GoldLink>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export function PhilosophySection() {
  const data = PHILOSOPHY;

  return (
    <section className="border-y border-[#E6DDCF] bg-[#FCFBF8] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>{data.eyebrow}</SectionEyebrow>
          <SectionHeading className="mt-3 whitespace-pre-line">
            {data.headline}
          </SectionHeading>
        </FadeInSection>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {data.pillars.map((pillar: { title: string; description: string }, i: number) => (
            <FadeInSection key={pillar.title}>
              <div className="border-t border-[#C6A86B] pt-6">
                <span className="font-body text-[0.65rem] text-[#C6A86B]">0{i + 1}</span>
                <h3 className="mt-3 font-heading text-xl text-[#2D2D2D]">{pillar.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#6F6A62]">
                  {pillar.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
