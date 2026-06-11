"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_VIDEO } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden bg-black"
    >
      <motion.div className="absolute inset-0" style={{ y: mediaY }}>
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-contain object-center md:left-0 md:w-[118%] md:max-w-none md:object-cover md:object-left"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/[0.42]" aria-hidden />
    </section>
  );
}
