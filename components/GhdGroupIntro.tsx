import { SectionLabel } from "@/components/ui/SectionLabel";

const bodyClass =
  "font-body text-[0.9375rem] font-normal leading-[1.75] text-charcoal/80 sm:text-base";

export function GhdGroupIntro() {
  return (
    <section className="bg-white px-6 pt-12 pb-6 md:pt-16 md:pb-8 lg:px-10">
      <div className="mx-auto max-w-[88rem] text-center">
        <h2 className="text-balance font-heading text-[2.75rem] font-light leading-[1.15] text-charcoal xl:text-[3rem]">
          Built by Goa&apos;s most trusted real estate group
        </h2>
        <p className={`mx-auto mt-4 max-w-[82rem] sm:mt-5 ${bodyClass}`}>
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

            <p className={`mt-3 sm:mt-4 ${bodyClass}`}>
              Recognized as the Best Real Estate Company in Goa for innovation,
              execution excellence, and community contribution.
            </p>
          </div>

          <p className={bodyClass}>
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
