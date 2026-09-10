"use client";

import Link from "next/link";
import { CORPORATE_INTRO } from "@/lib/corporate-content";
import { FadeInSection, SectionHeading } from "./CorporateUi";

export function CorporateIntro() {
  return (
    <section className="bg-white pb-6 pt-24 sm:pb-8 sm:pt-28 lg:pb-10 lg:pt-32">
      <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
        <FadeInSection>
          <SectionHeading className="whitespace-pre-line text-center">
            {CORPORATE_INTRO.headline}
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-[1100px] font-body text-base font-normal leading-[1.75] text-black sm:mt-6 sm:text-[1.0625rem]">
            {CORPORATE_INTRO.paragraph}
          </p>
          <div className="mt-6">
            <Link
              href={CORPORATE_INTRO.cta.href}
              className="font-body text-base font-normal text-black underline decoration-[#C6A86B] underline-offset-4 transition-colors hover:text-[#C6A86B]"
            >
              {CORPORATE_INTRO.cta.label}
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
