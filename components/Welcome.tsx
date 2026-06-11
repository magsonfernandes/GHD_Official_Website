"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NIVAARA_LOGO, WELCOME_IMAGE } from "@/lib/constants";
import { fadeUp, fadeUpStagger, viewportOnce } from "@/lib/animations";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";

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
          alt="Nivaãra by GHD Hotels"
          width={160}
          height={224}
          className="h-20 w-auto sm:h-[5.5rem] md:h-24 lg:h-28"
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
            className={sectionHeadingClass(false, "max-w-lg text-left")}
          >
            A Sanctuary of Quiet Sophistication
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className={sectionBodyClass(false, "max-w-lg text-left")}
          >
            Nivaãra Nerul is designed for discerning travelers seeking refined
            comfort, personalized service, and immersive experiences. Every detail
            reflects the philosophy of understated luxury and thoughtful
            hospitality.
          </motion.p>
        </motion.div>

        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={WELCOME_IMAGE}
            alt="Elegant guest room interior at Nivaãra Nerul"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
