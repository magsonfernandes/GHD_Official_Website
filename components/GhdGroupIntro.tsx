import Image from "next/image";
import { NIVAARA_LOGO } from "@/lib/constants";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { sectionBodyClass } from "@/lib/section-typography";

export function GhdGroupIntro() {
  return (
    <section className="bg-white px-6 pt-12 pb-6 md:pt-16 md:pb-8 lg:px-10">
      <div className="mx-auto max-w-[88rem] text-center">
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8 md:gap-10">
          <Image
            src={NIVAARA_LOGO}
            alt="Nivaãra by GHD Hotels"
            width={280}
            height={112}
            className="h-16 w-auto shrink-0 object-contain sm:h-[4.5rem] md:h-20"
            priority
          />
          <SectionIntro
            title="Built by Goa's most trusted real estate group"
            align="center"
            titleAs="h2"
            className="text-balance"
            titleClassName="mt-0"
          />
        </div>
        <p className={sectionBodyClass(false, "mx-auto mt-4 max-w-[82rem] sm:mt-5")}>
          Nivaãra Nerul is a GHD Group development — one of Goa&apos;s trusted
          real estate and hospitality enterprises. Since 2006, the Group has
          developed premium residential communities, luxury villas, studio
          apartments, and resorts across Goa, built on a foundation of quality,
          transparency, and long-term value.
        </p>

        <div className="mx-auto mt-10 max-w-[82rem] space-y-5 sm:mt-12">
          <div className="border border-border bg-muted/30 px-5 py-6 sm:px-8 sm:py-7">
            <SectionLabel>Recognition &amp; Awards</SectionLabel>

            <p className="mt-4 font-body text-[0.9375rem] font-medium leading-[1.75] text-charcoal sm:mt-5 sm:text-base">
              🏆 Big Impact Creator in Real Estate Development — Goa Edition | Awarded
              by Big FM
            </p>

            <p className={sectionBodyClass(false, "mt-3 sm:mt-4")}>
              Recognized as the Best Real Estate Company in Goa for innovation,
              execution excellence, and community contribution.
            </p>
          </div>

          <p className={sectionBodyClass(false, "mt-0")}>
            GHD Hotels is the hospitality management and brand development division
            of the GHD Group — built on operational discipline, clear brand
            architecture, and a scalable, aggressive growth strategy. Launched to
            complement the Group&apos;s established real estate footprint, GHD Hotels
            is now independently pursuing one of Goa&apos;s most ambitious hospitality
            expansion programs.
          </p>
        </div>
      </div>
    </section>
  );
}
