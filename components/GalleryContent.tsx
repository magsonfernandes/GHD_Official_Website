"use client";

import { RoomGallery } from "@/components/RoomGallery";
import { NIVAARA_SITE_GALLERY } from "@/lib/constants";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function GalleryContent() {
  return (
    <>
      <section className="bg-muted pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionIntro
            label="Gallery"
            title="Nivaãra in Pictures"
            description="Explore rooms, spaces, and moments from Nivaãra by GHD Hotels in Nerul, North Goa."
            titleAs="h1"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <RoomGallery
            images={NIVAARA_SITE_GALLERY}
            variant="compact"
            className="gap-3 sm:gap-4"
          />
        </div>
      </section>
    </>
  );
}
