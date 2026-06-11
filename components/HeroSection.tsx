import { Hero } from "@/components/Hero";
import { ReservationWidget } from "@/components/ReservationWidget";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <div className="relative">
      <Hero />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-center px-4 pb-10 sm:px-6 sm:pb-16 md:pb-20">
        <p className="font-heading mb-0 text-center text-2xl font-light tracking-[0.05em] text-white sm:mb-10 sm:text-4xl sm:tracking-[0.06em] md:mb-12 md:text-5xl md:tracking-[0.07em] lg:text-[3.5rem] lg:tracking-[0.08em]">
          {SITE.propertyDisplay}
        </p>
        <div className="pointer-events-auto mt-8 hidden w-[90vw] max-w-[1240px] sm:mt-10 sm:w-[88vw] md:block">
          <ReservationWidget />
        </div>
      </div>
    </div>
  );
}
