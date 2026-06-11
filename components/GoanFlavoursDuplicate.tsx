"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { POOL_EXPERIENCES_VIDEO } from "@/lib/constants";
import { fadeUp, fadeUpStagger, viewportOnce } from "@/lib/animations";

export function GoanFlavoursDuplicate() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, []);

  return (
    <section
      id="goan-flavours-duplicate"
      className="relative w-full overflow-hidden aspect-[3/2] lg:aspect-auto lg:min-h-screen"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <video
          ref={videoRef}
          src={POOL_EXPERIENCES_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute bottom-0 left-0 h-full w-[108%] max-w-none object-cover object-left-bottom lg:w-[115%]"
        />
      </div>
      <div className="absolute inset-0 bg-black/[0.42]" aria-hidden />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 py-10 lg:justify-start lg:px-10 lg:py-16 xl:px-16">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto w-full max-w-2xl -translate-y-6 text-center lg:mx-0 lg:max-w-[22rem] lg:-translate-y-28 lg:text-left xl:max-w-[24rem]"
        >
          <motion.div variants={fadeUp}>
            <SectionIntro
              label="Poolside"
              title="Some Views Are Best Enjoyed From the Water"
              description="Take a refreshing dip, watch the sky change colours, and embrace a slower pace in a setting designed for relaxation and reflection."
              light
              align="left"
              className="text-balance lg:text-left"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
