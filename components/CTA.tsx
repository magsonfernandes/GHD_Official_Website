"use client";

import { motion } from "framer-motion";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { SectionIntro } from "@/components/ui/SectionIntro";
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
        <motion.div variants={fadeUp} className="w-full">
          <SectionIntro
            title="Begin Your Journey"
            description="Experience thoughtful luxury crafted around comfort, elegance, and authentic hospitality."
          />
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10">
          <ReserveButton variant="filled" />
        </motion.div>
      </motion.div>
    </section>
  );
}
