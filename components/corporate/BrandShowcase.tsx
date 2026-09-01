"use client";

import Image from "next/image";
import Link from "next/link";
import { getPublicBrands, type Brand } from "@/lib/brands";
import { BRANDS_SECTION } from "@/lib/corporate-content";
import { getDefaultBookingHref } from "@/lib/booking";
import {
  FadeInSection,
  SectionEyebrow,
  SectionHeading,
} from "./CorporateUi";

function BrandCard({ brand }: { brand: Brand }) {
  const image = brand.cardImage ?? brand.image;
  const isSamraya = brand.id === "samraya";

  return (
    <article className="group relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[540px]">
      <Link href={brand.exploreHref} className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={brand.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>
      <div
        className={`pointer-events-none absolute inset-0 ${
          isSamraya
            ? "bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/50 to-[#2D2D2D]/20"
            : "bg-gradient-to-t from-[#2D2D2D]/85 via-[#2D2D2D]/40 to-transparent"
        }`}
      />
      <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-6 sm:min-h-[480px] sm:p-8 lg:min-h-[540px] lg:p-10">
        {brand.status === "coming-soon" ? (
          <span className="mb-3 inline-block w-fit border border-[#C6A86B]/60 px-2.5 py-1 font-body text-[0.6rem] uppercase tracking-[0.16em] text-[#C6A86B]">
            Coming Soon
          </span>
        ) : null}
        <h3 className="font-heading text-3xl text-white sm:text-4xl">{brand.name}</h3>
        <p className="mt-2 font-body text-sm text-white/80 sm:text-base">{brand.tagline}</p>
        {brand.location ? (
          <div className="mt-4 space-y-0.5">
            <p className="font-body text-sm text-white/90">{brand.location.area}</p>
            {brand.location.detail ? (
              <p className="font-body text-sm text-white/70">{brand.location.detail}</p>
            ) : null}
          </div>
        ) : null}
        <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-white/75">
          {brand.shortDescription}
        </p>
        {brand.highlights ? (
          <ul className="mt-5 flex flex-wrap gap-3">
            {brand.highlights.map((h) => (
              <li
                key={h}
                className="font-body text-[0.62rem] uppercase tracking-[0.14em] text-[#C6A86B]"
              >
                {h}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Link
            href={brand.exploreHref}
            className="font-body text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:text-[#C6A86B]"
          >
            Explore {brand.name} →
          </Link>
          {brand.status === "live" ? (
            <a
              href={getDefaultBookingHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#C6A86B] underline-offset-4 hover:underline"
            >
              Book Your Stay
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function BrandShowcase() {
  const brands = getPublicBrands();

  return (
    <section id="brands" className="bg-[#FCFBF8] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <FadeInSection className="max-w-2xl">
          <SectionEyebrow>{BRANDS_SECTION.eyebrow}</SectionEyebrow>
          <SectionHeading className="mt-3 whitespace-pre-line">
            {BRANDS_SECTION.headline}
          </SectionHeading>
        </FadeInSection>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {brands.map((brand) => (
            <FadeInSection key={brand.id}>
              <BrandCard brand={brand} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
