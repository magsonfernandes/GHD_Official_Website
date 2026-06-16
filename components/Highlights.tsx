"use client";

import { motion } from "framer-motion";
import { BedDouble, Sparkles, UserRound, Waves } from "lucide-react";
import { HIGHLIGHTS } from "@/lib/constants";
import { fadeUp, fadeUpStagger, viewportOnce } from "@/lib/animations";

const iconMap = {
  bed: BedDouble,
  waves: Waves,
  concierge: UserRound,
  sparkles: Sparkles,
} as const;

export function Highlights() {
  return (
    <section className="border-y border-border bg-white py-20 md:py-28">
      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4 md:gap-8 lg:px-10"
      >
        {HIGHLIGHTS.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-full border border-border text-gold transition-colors duration-500 hover:border-gold">
                <Icon className="size-5" strokeWidth={1.25} aria-hidden />
              </div>
              <p className="font-heading text-2xl font-thin text-charcoal md:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 font-body text-xs font-medium uppercase tracking-[0.14em] text-grey">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
