"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { fadeUp, fadeUpStagger, viewportOnce } from "@/lib/animations";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";
import { cn } from "@/lib/utils";

type BookingCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
  benefits?: readonly string[];
  tone?: "light" | "soft" | "transparent" | "onDark";
  className?: string;
  /** When set with actionStyle "link", renders a text link instead of a button */
  href?: string;
  actionStyle?: "button" | "link";
  /** Optional looping background video — forces light-on-dark text */
  videoSrc?: string;
};

export function BookingCta({
  title,
  description,
  buttonLabel,
  benefits,
  tone = "light",
  className,
  href,
  actionStyle = "button",
  videoSrc,
}: BookingCtaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onDark = tone === "onDark" || Boolean(videoSrc);

  useEffect(() => {
    if (!videoSrc) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, [videoSrc]);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden px-6 py-16 md:py-20 lg:px-10 lg:py-24",
        !videoSrc && tone === "light" && "bg-white",
        !videoSrc && tone === "soft" && "bg-[#faf9f6]",
        !videoSrc && tone === "transparent" && "bg-transparent py-10 md:py-12 lg:py-14",
        onDark && "bg-transparent py-14 md:py-16 lg:py-20",
        className,
      )}
    >
      {videoSrc ? (
        <div className="absolute inset-0" aria-hidden>
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ) : null}

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 mx-auto max-w-[82rem] text-center"
      >
        <motion.h2
          variants={fadeUp}
          className={sectionHeadingClass(onDark, "mt-0 text-balance")}
        >
          {title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className={sectionBodyClass(
            onDark,
            cn(
              "mx-auto mt-5 max-w-[72rem] text-balance",
              onDark && "text-white/90",
            ),
          )}
        >
          {description}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex justify-center">
          {actionStyle === "link" && href ? (
            <Link
              href={href}
              className={cn(
                "group inline-flex items-center gap-2 border-b pb-1 font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                onDark
                  ? "border-white/80 text-white hover:border-white hover:text-white/85"
                  : "border-gold text-[#543119] hover:border-[#543119] hover:text-charcoal",
              )}
            >
              {buttonLabel}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          ) : (
            <ReserveButton
              variant="gold"
              label={buttonLabel}
              className="rounded-none px-9 py-3.5 text-[0.72rem] tracking-[0.12em] shadow-[0_10px_28px_rgba(198,168,106,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(198,168,106,0.38)]"
            />
          )}
        </motion.div>
        {benefits && benefits.length > 0 ? (
          <motion.ul
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className={cn(
                  "font-body text-[0.75rem] font-medium tracking-[0.04em] sm:text-[0.8125rem]",
                  onDark ? "text-white/85" : "text-charcoal/70",
                )}
              >
                <span className="mr-1.5 text-gold" aria-hidden>
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </motion.ul>
        ) : null}
      </motion.div>
    </section>
  );
}

export function BoutiqueUrgencyBanner({ light = false }: { light?: boolean }) {
  return (
    <div
      className={cn(
        "border-y px-6 py-4 lg:px-10",
        light ? "border-white/25 bg-transparent" : "border-gold/25 bg-transparent",
      )}
    >
      <p
        className={cn(
          "mx-auto max-w-4xl text-center font-body text-[0.7rem] font-medium uppercase tracking-[0.14em] sm:text-[0.75rem]",
          light ? "text-white/90" : "text-[#543119]",
        )}
      >
        Boutique Property • Sea View Property • Book Early for Preferred Dates
      </p>
    </div>
  );
}
