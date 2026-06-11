import Image from "next/image";
import { NIVAARA_LOGO } from "@/lib/constants";
import { sectionBodyClass } from "@/lib/section-typography";

export function GhdGroupIntro() {
  return (
    <section className="bg-white px-6 pt-12 pb-6 md:pt-16 md:pb-8 lg:px-10">
      <div className="mx-auto max-w-[88rem] text-center">
        <Image
          src={NIVAARA_LOGO}
          alt="Nivaãra by GHD Hotels"
          width={150}
          height={200}
          className="mx-auto h-20 w-auto object-contain sm:h-[5.5rem] md:h-24"
          priority
        />
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
