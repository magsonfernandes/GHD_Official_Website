"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpStagger, viewportOnce } from "@/lib/animations";

export function ArrivalQuote() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] px-6 py-20 md:py-28 lg:px-10 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(115,62,36,0.04)_100%)]"
        aria-hidden
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-5xl text-center"
      >
        <motion.figure variants={fadeUp} className="relative">
          <span
            className="pointer-events-none absolute -left-2 top-1/2 hidden -translate-y-1/2 font-heading text-[7rem] leading-none text-[#543119]/10 md:block lg:-left-6 lg:text-[9rem]"
            aria-hidden
          >
            &ldquo;
          </span>

          <blockquote className="relative mx-auto max-w-3xl border-y border-[#543119]/15 px-6 py-10 sm:px-10 sm:py-12 md:py-14">
            <p className="font-brand text-[2rem] font-normal italic leading-[1.2] tracking-[0.01em] text-charcoal/70 sm:text-[2.75rem] md:text-[3.25rem]">
              You arrive.
            </p>
            <p className="mt-3 font-heading text-[1.75rem] font-thin leading-[1.12] tracking-[0.02em] text-[#543119] sm:mt-4 sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem]">
              We take care of the rest.
            </p>
          </blockquote>

          <span
            className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 font-heading text-[7rem] leading-none text-[#543119]/10 md:block lg:-right-6 lg:text-[9rem]"
            aria-hidden
          >
            &rdquo;
          </span>
        </motion.figure>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-10 flex items-center justify-center gap-3 md:mt-12"
          aria-hidden
        >
          <span className="size-1.5 rotate-45 bg-gold/70" />
          <span className="h-px w-20 bg-border sm:w-28" />
          <span className="size-1.5 rotate-45 bg-gold/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
