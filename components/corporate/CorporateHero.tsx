"use client";

import Image from "next/image";
import { ReservationBar } from "@/components/ReservationWidget";
import { CORPORATE_HERO } from "@/lib/corporate-content";
import { CORPORATE_SEARCH_DESTINATIONS } from "@/lib/constants";
import { FadeInSection } from "./CorporateUi";

const corporatePropertyOptions = CORPORATE_SEARCH_DESTINATIONS.map((destination) => ({
  value: destination.value,
  label: destination.label,
}));

function resolveCorporatePropertyId(value: string) {
  return (
    CORPORATE_SEARCH_DESTINATIONS.find((destination) => destination.value === value)
      ?.propertyId ?? "nivaara"
  );
}

export function CorporateHero() {
  return (
    <div className="relative z-10">
      <section className="relative min-h-[88vh] overflow-hidden bg-[#2D2D2D]">
        <Image
          src={CORPORATE_HERO.image}
          alt={CORPORATE_HERO.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/85 via-[#2D2D2D]/45 to-[#2D2D2D]/25" />
      </section>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-10">
        <FadeInSection className="pointer-events-auto mx-auto max-w-[1100px]">
          <ReservationBar
            variant="booking"
            bookingRedirect="axisrooms"
            initialProperty="nivaara"
            propertyOptions={corporatePropertyOptions}
            propertyPlaceholder="Hotel or Destination"
            resolvePropertyId={resolveCorporatePropertyId}
          />
        </FadeInSection>
      </div>
    </div>
  );
}
