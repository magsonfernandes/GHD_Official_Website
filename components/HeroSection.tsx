import { Hero } from "@/components/Hero";
import { ReservationWidget } from "@/components/ReservationWidget";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <div className="relative">
      <Hero />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-center px-4 pb-12 sm:px-6 sm:pb-16 md:pb-20">
        <p className="font-heading mb-8 text-center text-3xl font-light tracking-[0.05em] text-white sm:mb-10 sm:text-4xl sm:tracking-[0.06em] md:mb-12 md:text-5xl md:tracking-[0.07em] lg:text-[3.5rem] lg:tracking-[0.08em]">
          {SITE.propertyDisplay}
        </p>
        <div className="pointer-events-auto w-[90vw] max-w-[1240px] sm:w-[88vw]">
          <ReservationWidget />
        </div>
      </div>
    </div>
  );
}
