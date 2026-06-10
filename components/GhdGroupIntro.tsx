import Image from "next/image";
import { NIVAARA_LOGO } from "@/lib/constants";
import { SectionIntro } from "@/components/ui/SectionIntro";
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
            title="Welcome to Nivaãra"
            align="center"
            titleAs="h2"
            className="text-balance"
            titleClassName="mt-0"
          />
        </div>
        <p className={sectionBodyClass(false, "mx-auto mt-4 max-w-[82rem] sm:mt-5")}>
          Nivaãra is a hospitality destination created around the belief that great
          stays are defined by comfort, thoughtful service, and meaningful
          experiences. Managed by GHD Hotels, Nivaãra combines contemporary design,
          attentive hospitality, and carefully curated spaces to create an experience
          that feels welcoming from the moment guests arrive. From the spaces we
          create to the service we provide, our focus remains simple: delivering
          hospitality that feels genuine, intuitive, and memorable.
        </p>
      </div>
    </section>
  );
}
