import { Hero } from "@/components/Hero";
import { ReservationWidget } from "@/components/ReservationWidget";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section relative w-full overflow-hidden aspect-[3/2] lg:aspect-auto lg:min-h-screen"
    >
      <Hero />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-center px-[5vw] pb-[10vw] sm:pb-[11vw] lg:pb-[14vh]">
        <p className="hero-section__title font-heading mb-0 text-center font-thin text-white">
          {SITE.propertyDisplay}
        </p>
        <div className="pointer-events-auto mt-[4vw] hidden w-[90vw] max-w-[1240px] md:mt-[5vw] md:block">
          <ReservationWidget />
        </div>
      </div>
    </section>
  );
}
