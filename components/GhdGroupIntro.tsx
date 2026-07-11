import Image from "next/image";
import { NIVAARA_LOGO } from "@/lib/constants";
import { sectionBodyClass } from "@/lib/section-typography";

export function GhdGroupIntro() {
  return (
    <section className="bg-transparent px-6 pt-12 pb-6 md:pt-16 md:pb-8 lg:px-10">
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
          Nivaãra by GHD Hotels is a boutique luxury hotel in Nerul, North Goa — just
          minutes from Coco Beach and a short drive from Candolim, Calangute and Baga.
          As a sea-view property, it welcomes fresh breezes from the Arabian Sea and
          offers beautiful views of the Goa landscape. Built on the belief that great
          stays come from comfort, thoughtful service, and genuine experiences, Nivaãra
          combines contemporary design, warm hospitality, and inviting spaces—including
          an open terrace pool to relax and unwind. Whether you&apos;re here for
          business, a quiet escape, or a family holiday in Goa, our focus stays simple:
          hospitality that feels real, intuitive, and memorable.
        </p>
      </div>
    </section>
  );
}
