"use client";

import Image from "next/image";
import { CAREERS_PAGE } from "@/lib/culture-careers-content";
import { cn } from "@/lib/utils";
import {
  FadeInSection,
  GoldButton,
  SectionHeading,
} from "./CorporateUi";

export function CareersHero() {
  const { hero } = CAREERS_PAGE;

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          className="corporate-hero-zoom object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 pb-24 pt-32 sm:px-8 lg:px-10 lg:pb-28">
        <FadeInSection>
          <h1 className="max-w-3xl font-heading text-[2.35rem] font-normal leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base font-normal leading-relaxed text-white/88 sm:mt-8 sm:text-[1.0625rem]">
            {hero.paragraph}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
            <GoldButton href={hero.primaryCta.href}>{hero.primaryCta.label}</GoldButton>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export function CareersWhySection() {
  const { why } = CAREERS_PAGE;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <FadeInSection className="mx-auto max-w-3xl text-center">
          <SectionHeading className="text-center">{why.headline}</SectionHeading>
          <div className="mt-6 space-y-4 sm:mt-8">
            {why.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeInSection>

        <div className="mt-12 grid gap-px overflow-hidden border border-[#E6DDCF] bg-[#E6DDCF] sm:mt-16 sm:grid-cols-2">
          {why.values.map((value, index) => (
            <FadeInSection key={value.title}>
              <article
                className={cn(
                  "h-full bg-white px-6 py-8 transition-colors duration-500 hover:bg-[#FAF7F2] sm:px-8 sm:py-10",
                  index % 2 === 0 && "sm:border-r-0",
                )}
              >
                <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-[#C6A86B]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-normal text-black sm:text-3xl">
                  {value.title}
                </h3>
                <p className="mt-4 font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]">
                  {value.body}
                </p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareersGrowSection() {
  const { grow } = CAREERS_PAGE;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading className="text-center">{grow.headline}</SectionHeading>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 sm:mt-8">
            {grow.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 space-y-2 sm:mt-16">
            {grow.statement.map((line) => (
              <p
                key={line}
                className="font-heading text-2xl font-normal leading-snug text-[#C6A86B] sm:text-3xl md:text-4xl"
              >
                {line}
              </p>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export function CareersApplySection() {
  const { apply } = CAREERS_PAGE;

  return (
    <section className="border-t border-[#E6DDCF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[760px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading className="text-center">{apply.headline}</SectionHeading>
          <p className="mx-auto mt-6 max-w-xl font-body text-base font-normal leading-relaxed text-black sm:mt-8 sm:text-[1.0625rem]">
            {apply.paragraph}
          </p>
          <div className="mt-10 sm:mt-12">
            <GoldButton href={apply.cta.href} className="min-w-[14rem]">
              {apply.cta.label}
            </GoldButton>
          </div>
          <a
            href={`mailto:${apply.email}`}
            className="mt-6 inline-block font-heading text-xl font-normal text-black transition-colors hover:text-[#C6A86B] sm:text-2xl"
          >
            {apply.email}
          </a>
          <p className="mx-auto mt-6 max-w-md font-body text-sm font-normal leading-relaxed text-[#6F6A62]">
            {apply.supporting}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

export function CareersContactSection() {
  const { contact } = CAREERS_PAGE;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[760px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading className="text-center">{contact.headline}</SectionHeading>
          <p className="mx-auto mt-6 max-w-xl font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]">
            {contact.paragraph}
          </p>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block font-heading text-3xl font-normal tracking-wide text-black transition-colors hover:text-[#C6A86B] sm:text-4xl"
          >
            {contact.phoneDisplay}
          </a>
          <div className="mt-8 flex justify-center">
            <GoldButton href={contact.whatsappHref} variant="outline" external>
              {contact.ctaLabel}
            </GoldButton>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export function CareersClosingSection() {
  const { closing } = CAREERS_PAGE;

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden sm:min-h-[80vh]">
      <Image
        src={closing.image}
        alt={closing.imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative z-10 px-6 py-24 text-center">
        <FadeInSection>
          <div className="space-y-2 sm:space-y-3">
            {closing.lines.map((line) => (
              <p
                key={line}
                className="font-heading text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="mt-10 font-body text-[0.7rem] uppercase tracking-[0.28em] text-white/75 sm:mt-12">
            {closing.brand}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
