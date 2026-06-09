"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GALLERY_IMAGES } from "@/lib/constants";
import { fadeUp, fadeUpStagger, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const aspectClasses = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  square: "",
} as const;

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 flex flex-col items-center text-center md:mb-16"
        >
          <motion.div variants={fadeUp} className="mb-5">
            <SectionLabel>Gallery</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-medium text-charcoal sm:text-4xl"
          >
            Moments of Serenity
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[180px]"
        >
          {GALLERY_IMAGES.map((image) => (
            <motion.figure
              key={image.src}
              variants={fadeUp}
              className={cn(
                "group relative overflow-hidden bg-muted",
                aspectClasses[image.aspect],
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/25" />
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 flex justify-center"
        >
          <Link
            href="#gallery"
            className="inline-flex items-center justify-center rounded-full border border-charcoal px-8 py-3 font-body text-[0.7rem] font-medium uppercase tracking-[0.08em] text-charcoal transition-all duration-500 hover:border-gold hover:bg-gold hover:text-white"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
