"use client";

import { useEffect, useRef } from "react";
import { HERO_VIDEO } from "@/lib/constants";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__media-wrap">
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-section__media"
        />
      </div>
      <div className="hero-section__overlay" aria-hidden />
    </section>
  );
}
