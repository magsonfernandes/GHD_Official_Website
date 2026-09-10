"use client";

import Image from "next/image";
import { CORPORATE_BEACH_BANNER } from "@/lib/corporate-content";

export function CorporateBeachBanner() {
  return (
    <section className="w-full">
      <Image
        src={CORPORATE_BEACH_BANNER.image}
        alt={CORPORATE_BEACH_BANNER.imageAlt}
        width={4240}
        height={2832}
        priority
        className="h-auto w-full object-cover"
        sizes="100vw"
      />
    </section>
  );
}
