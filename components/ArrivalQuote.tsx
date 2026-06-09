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
        <motion.div
          variants={fadeUp}
          className="mx-auto flex items-center justify-center gap-4"
          aria-hidden
        >
          <span className="h-px w-12 bg-gold/50 sm:w-16" />
          <span className="font-display-wide text-[0.625rem] font-black uppercase tracking-[0.38em] text-[#733E24] sm:text-xs">
            Nivaãra Nerul
          </span>
          <span className="h-px w-12 bg-gold/50 sm:w-16" />
        </motion.div>

        <motion.blockquote variants={fadeUp} className="mt-10 md:mt-12">
          <p className="font-display-wide text-[1.65rem] font-black uppercase leading-[1.15] tracking-[0.14em] text-charcoal sm:text-4xl sm:tracking-[0.18em] md:text-5xl md:tracking-[0.22em] lg:text-[3.35rem]">
            You arrive.
          </p>
          <p className="mt-4 font-heading text-[1.45rem] font-light uppercase leading-[1.2] tracking-[0.12em] text-charcoal/88 sm:mt-5 sm:text-3xl sm:tracking-[0.16em] md:text-4xl md:tracking-[0.2em] lg:mt-6 lg:text-[2.75rem]">
            We take care of the rest
          </p>
        </motion.blockquote>

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
