"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { sectionBodyClass } from "@/lib/section-typography";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, fadeUpStagger, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const SCROLL_DURATION = 0.85;
const SCROLL_EASE = [0.33, 1, 0.68, 1] as const;
const ARC_RADIUS = 520;

function NavArrow({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-3 w-8 shrink-0 text-current transition-colors duration-500",
        className,
      )}
      aria-hidden
    >
      {direction === "left" ? (
        <>
          <path
            d="M28 6H4"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          <path
            d="M8 2L4 6L8 10"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M4 6H28"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          <path
            d="M24 2L28 6L24 10"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

function getArcPosition(offset: number) {
  const angle = offset * 0.42;
  const x = Math.sin(angle) * ARC_RADIUS;
  const y = (1 - Math.cos(angle)) * 72;
  const rotateZ = offset * 5.5;
  const rotateY = offset * -22;
  const scale = Math.max(0.62, 1 - Math.abs(offset) * 0.16);
  const opacity = Math.abs(offset) > 2 ? 0 : Math.max(0.18, 1 - Math.abs(offset) * 0.38);

  return { x, y, rotateZ, rotateY, scale, opacity };
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const count = TESTIMONIALS.length;
  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex === count - 1;

  const advance = useCallback(() => {
    setActiveIndex((index) => Math.min(index + 1, count - 1));
  }, [count]);

  const retreat = useCallback(() => {
    setActiveIndex((index) => Math.max(index - 1, 0));
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#faf9f6] py-16 md:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-[42%] h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden
      />
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-[38%] h-32 w-full text-gold/20 md:h-40"
        aria-hidden
      >
        <path
          d="M-40 280 C 280 40, 1160 40, 1480 280"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 flex flex-col items-center text-center md:mb-10"
        >
          <motion.div variants={fadeUp} className="w-full">
            <SectionIntro
              label="Testimonials"
              title="Words From Our Guests"
            />
          </motion.div>
        </motion.div>

        <div
          className="relative mx-auto h-[19rem] max-w-6xl sm:h-[20rem] md:h-[22rem]"
          style={{ perspective: "1400px" }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const delta = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(delta) < 40) return;
            if (delta > 0) advance();
            else retreat();
          }}
        >
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-4 md:pt-6">
            {TESTIMONIALS.map((testimonial, index) => {
              const offset = index - activeIndex;
              const { x, y, rotateZ, rotateY, scale, opacity } =
                getArcPosition(offset);
              const isActive = offset === 0;

              return (
                <motion.blockquote
                  key={testimonial.name}
                  aria-hidden={!isActive}
                  aria-live={isActive ? "polite" : "off"}
                  initial={false}
                  animate={{
                    x,
                    y,
                    rotateZ,
                    rotateY,
                    scale,
                    opacity,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  transition={{
                    duration: SCROLL_DURATION,
                    ease: SCROLL_EASE,
                  }}
                  className={cn(
                    "absolute top-0 w-[min(88vw,24rem)] origin-center will-change-transform sm:w-[26rem] md:w-[30rem]",
                    isActive ? "pointer-events-auto" : "pointer-events-none",
                  )}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-sm border bg-white px-7 py-8 shadow-[0_24px_60px_-32px_rgba(17,17,17,0.18)] transition-shadow duration-500 sm:px-8 sm:py-9",
                      isActive
                        ? "border-gold/45 shadow-[0_32px_80px_-28px_rgba(198,168,106,0.35)]"
                        : "border-border/80",
                    )}
                  >
                    <div
                      className="pointer-events-none absolute -right-3 -top-4 font-heading text-[6rem] leading-none text-gold/10"
                      aria-hidden
                    >
                      &ldquo;
                    </div>

                    {isActive ? (
                      <>
                        <p className="relative font-body text-[0.9375rem] font-normal leading-[1.75] text-charcoal sm:text-base">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <footer className="mt-6 flex items-center gap-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-[#faf9f6] font-heading text-base text-[#733E24]"
                            aria-hidden
                          >
                            {testimonial.name.charAt(0)}
                          </div>
                          <cite className="not-italic">
                            <p className="font-body text-sm font-medium tracking-wide text-charcoal">
                              {testimonial.name}
                            </p>
                            <p className="mt-0.5 font-body text-xs uppercase tracking-[0.18em] text-grey">
                              {testimonial.location}
                            </p>
                          </cite>
                        </footer>
                      </>
                    ) : (
                      <div className="flex min-h-[10rem] flex-col justify-center">
                        <p className={sectionBodyClass(false, "mt-0 line-clamp-4 text-left text-charcoal/70")}>
                          {testimonial.quote}
                        </p>
                        <p className="mt-4 font-body text-xs uppercase tracking-[0.2em] text-grey">
                          {testimonial.name}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.blockquote>
              );
            })}
          </div>
        </div>

        <div className="relative z-20 -mt-5 flex flex-col items-center gap-5 sm:-mt-6 md:-mt-7">
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => {
                if (!isAtStart) retreat();
              }}
              disabled={isAtStart}
              aria-disabled={isAtStart}
              className={cn(
                "group flex items-center justify-center p-2 text-[#733E24] transition-colors duration-500",
                isAtStart
                  ? "cursor-default opacity-35"
                  : "hover:text-gold",
              )}
              aria-label="Previous testimonial"
            >
              <NavArrow direction="left" />
            </button>

            <span className="min-w-[2.75rem] text-center font-body text-sm tabular-nums tracking-[0.12em] text-charcoal">
              {activeIndex + 1}
              <span className="mx-1.5 text-grey/70">/</span>
              {count}
            </span>

            <button
              type="button"
              onClick={() => {
                if (!isAtEnd) advance();
              }}
              disabled={isAtEnd}
              aria-disabled={isAtEnd}
              className={cn(
                "group flex items-center justify-center p-2 text-[#733E24] transition-colors duration-500",
                isAtEnd ? "cursor-default opacity-35" : "hover:text-gold",
              )}
              aria-label="Next testimonial"
            >
              <NavArrow direction="right" />
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-full p-1 transition-all duration-500",
                  index === activeIndex
                    ? "bg-gold/15"
                    : "hover:bg-charcoal/5",
                )}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-500",
                    index === activeIndex
                      ? "w-8 bg-gold"
                      : "w-1.5 bg-charcoal/20",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
