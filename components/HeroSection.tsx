import { Hero } from "@/components/Hero";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section relative w-full overflow-hidden aspect-[3/2] lg:aspect-auto lg:min-h-screen"
    >
      <Hero />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col items-center px-[5vw] pb-[5vw] sm:pb-[6vw] lg:pb-[8vh]">
        <p className="hero-section__title font-heading mb-0 text-center font-thin text-white">
          {SITE.propertyDisplay}
        </p>
      </div>
    </section>
  );
}
