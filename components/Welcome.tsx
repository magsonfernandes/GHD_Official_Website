"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NIVAARA_LOGO, WELCOME_IMAGE } from "@/lib/constants";
import { fadeUp, fadeUpStagger, imageReveal, viewportOnce } from "@/lib/animations";

export function Welcome() {
  return (
    <section
      id="about"
      className="relative z-10 bg-white pb-24 pt-32 md:pb-32 md:pt-28 lg:pb-40"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mb-12 flex justify-center px-6 md:mb-16 lg:mb-20"
      >
        <Image
          src={NIVAARA_LOGO}
          alt="Nivaãra"
          width={480}
          height={144}
          className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
          priority
        />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6 md:gap-8"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-medium leading-snug text-charcoal sm:text-4xl md:text-5xl"
          >
            A Sanctuary of Quiet Sophistication
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-lg font-body text-base font-light leading-relaxed text-grey sm:text-lg"
          >
            Nivaãra Nerul is designed for discerning travelers seeking refined
            comfort, personalized service, and immersive experiences. Every detail
            reflects the philosophy of understated luxury and thoughtful
            hospitality.
          </motion.p>
        </motion.div>

        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative aspect-[4/5] overflow-hidden bg-muted"
        >
          <Image
            src={WELCOME_IMAGE}
            alt="Elegant guest room interior at Nivaãra Nerul"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
