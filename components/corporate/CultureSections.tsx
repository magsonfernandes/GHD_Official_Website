"use client";

import Image from "next/image";
import { CULTURE_PAGE } from "@/lib/culture-careers-content";
import { cn } from "@/lib/utils";
import {
  FadeInSection,
  GoldLink,
  SectionHeading,
} from "./CorporateUi";

function ScrollHint() {
  return (
    <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
      <div className="flex flex-col items-center gap-2 text-white/70">
        <span className="font-body text-[0.6rem] uppercase tracking-[0.22em]">Scroll</span>
        <span
          aria-hidden
          className="block h-8 w-px animate-pulse bg-gradient-to-b from-white/80 to-transparent"
        />
      </div>
    </div>
  );
}

export function CultureHero() {
  const { hero } = CULTURE_PAGE;

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
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 pb-28 pt-32 sm:px-8 lg:px-10 lg:pb-32">
        <FadeInSection>
          <p className="font-body text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#C6A86B] sm:text-[0.75rem]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-[2.5rem] font-normal leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base font-normal leading-relaxed text-white/88 sm:mt-8 sm:text-[1.0625rem]">
            {hero.paragraph}
          </p>
        </FadeInSection>
      </div>

      <ScrollHint />
    </section>
  );
}

export function CultureMeaningSection() {
  const { meaning } = CULTURE_PAGE;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-6 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <FadeInSection className="lg:col-span-6 lg:pr-4">
          <SectionHeading className="max-w-xl">{meaning.headline}</SectionHeading>
          <div className="mt-6 max-w-xl space-y-4 sm:mt-8">
            {meaning.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
            {meaning.emphases.map((word) => (
              <li
                key={word}
                className="border-l border-[#C6A86B] pl-4 font-heading text-2xl font-normal text-black sm:text-3xl"
              >
                {word}
              </li>
            ))}
          </ul>
        </FadeInSection>

        <FadeInSection className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:min-h-[560px] lg:aspect-auto">
            <Image
              src={meaning.image}
              alt={meaning.imageAlt}
              fill
              className="object-cover object-center transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export function CultureInActionSection() {
  const { inAction } = CULTURE_PAGE;

  return (
    <section className="border-y border-[#E6DDCF] bg-[#FAF7F2] py-14 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <FadeInSection className="mx-auto max-w-2xl text-center">
          <SectionHeading className="text-center">{inAction.headline}</SectionHeading>
          <p className="mt-5 font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]">
            {inAction.supporting}
          </p>
        </FadeInSection>

        <div className="mt-10 w-full overflow-x-auto sm:mt-14">
          <div className="min-w-0 space-y-0">
            {inAction.principles.map((principle, index) => (
              <FadeInSection key={principle.title}>
                <article
                  className={cn(
                    "group grid grid-cols-1 gap-2 border-t border-[#E6DDCF] py-6 transition-colors duration-500 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:items-start sm:gap-x-5 sm:gap-y-2 sm:py-7 md:grid-cols-[4rem_minmax(9rem,13rem)_minmax(0,1fr)] md:gap-x-6 lg:grid-cols-[4.5rem_minmax(10rem,15rem)_minmax(0,1fr)] lg:gap-x-8 lg:py-8",
                    index === inAction.principles.length - 1 && "border-b",
                  )}
                >
                  <span className="font-body text-xs tracking-[0.16em] text-[#C6A86B] sm:text-sm md:pt-1">
                    {principle.number}
                  </span>
                  <h3 className="min-w-0 break-words font-heading text-xl font-normal leading-snug text-black transition-colors duration-300 group-hover:text-[#C6A86B] sm:text-2xl md:text-[1.65rem]">
                    {principle.title}
                  </h3>
                  <p className="min-w-0 break-words font-body text-[0.9375rem] font-normal leading-relaxed text-[#2D2D2D] sm:col-span-2 sm:text-base md:col-span-1 md:pt-1 lg:text-[1.0625rem]">
                    {principle.body}
                  </p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CulturePeopleSection() {
  const { people } = CULTURE_PAGE;

  return (
    <section id="our-people" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[820px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading className="text-center">{people.headline}</SectionHeading>
          <div className="mt-6 space-y-4 sm:mt-8">
            {people.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-10 font-heading text-xl font-normal text-[#C6A86B] sm:mt-12 sm:text-2xl">
            {people.statement}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

export function CultureGuestsSection() {
  const { guests } = CULTURE_PAGE;

  return (
    <section className="border-y border-[#E6DDCF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[820px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading className="text-center">{guests.headline}</SectionHeading>
          <div className="mt-6 space-y-4 sm:mt-8">
            {guests.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export function CulturePlaceSection() {
  const { place } = CULTURE_PAGE;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[820px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading className="text-center">{place.headline}</SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base font-normal leading-relaxed text-black sm:mt-8 sm:text-[1.0625rem]">
            {place.paragraph}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

export function CultureClosingSection() {
  const { closing } = CULTURE_PAGE;

  return (
    <section className="border-t border-[#E6DDCF] bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
        <FadeInSection>
          <h2 className="font-heading text-[2.25rem] font-normal leading-[1.12] tracking-[-0.02em] text-black sm:text-5xl md:text-6xl">
            {closing.headline}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-base font-normal leading-relaxed text-black sm:text-[1.0625rem]">
            {closing.paragraph}
          </p>
          <p className="mt-10 font-heading text-2xl font-normal text-[#C6A86B] sm:mt-12 sm:text-3xl">
            {closing.signature}
          </p>
          <div className="mt-10 flex justify-center sm:mt-12">
            <GoldLink href={closing.cta.href}>{closing.cta.label}</GoldLink>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
