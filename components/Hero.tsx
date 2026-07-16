"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_VIDEO, HERO_VIDEO_POSTER } from "@/lib/constants";
import { cn } from "@/lib/utils";

const heroMediaClass =
  "absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = HERO_VIDEO;
    link.type = "video/mp4";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reveal = () => {
      void video.play().finally(() => {
        setVideoReady(true);
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      reveal();
      return;
    }

    video.addEventListener("canplaythrough", reveal, { once: true });
    video.addEventListener("error", reveal, { once: true });

    return () => {
      video.removeEventListener("canplaythrough", reveal);
      video.removeEventListener("error", reveal);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={HERO_VIDEO_POSTER}
          alt=""
          aria-hidden
          className={cn(
            heroMediaClass,
            "hero-section__poster",
            videoReady && "hero-section__poster--hidden",
          )}
        />
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          poster={HERO_VIDEO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={cn(
            heroMediaClass,
            "hero-section__media",
            videoReady && "hero-section__media--ready",
          )}
        />
      </div>
      <div
        className="hero-section__overlay pointer-events-none absolute inset-0 z-10 bg-black/15"
        aria-hidden
      />
    </>
  );
}
