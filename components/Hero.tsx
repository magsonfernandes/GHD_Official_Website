"use client";

import { useEffect, useRef } from "react";
import { HERO_VIDEO } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex w-full justify-center bg-black"
    >
      <div className="relative h-[min(100svh,calc(100vw*9/16))] w-[min(100vw,calc(100svh*16/9))]">
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-contain"
        />
        <div className="absolute inset-0 bg-black/[0.42]" aria-hidden />
      </div>
    </section>
  );
}
