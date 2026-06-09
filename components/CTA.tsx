"use client";

import { motion } from "framer-motion";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { fadeUp, fadeUpStagger, viewportOnce } from "@/lib/animations";

export function CTA() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center lg:px-10"
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-3xl font-medium text-charcoal sm:text-4xl md:text-5xl"
        >
          Begin Your Journey
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 font-body text-base font-light leading-relaxed text-grey sm:text-lg"
        >
          Experience thoughtful luxury crafted around comfort, elegance, and
          authentic hospitality.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10">
          <ReserveButton variant="filled" />
        </motion.div>
      </motion.div>
    </section>
  );
}
