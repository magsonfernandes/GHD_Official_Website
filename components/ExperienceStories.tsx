"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  EXPERIENCE_POSTS,
  EXPERIENCES_HERO_VIDEO,
} from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function ExperienceStories() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, []);

  return (
    <>
      <section className="bg-muted pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <div className="mx-auto max-w-2xl">
            <SectionLabel>Experiences</SectionLabel>
            <h1 className="mt-4 font-heading text-4xl font-medium leading-tight text-charcoal sm:text-5xl md:text-6xl">
              Experiences in Goa
            </h1>
            <p className="mx-auto mt-6 max-w-xl font-body text-base font-light leading-relaxed text-grey sm:text-lg">
              Experience Goa at its most authentic. From heritage landmarks to
              coastal adventures, uncover stories and experiences waiting to be
              explored.
            </p>
          </div>

        </div>

        <div className="relative mt-10 aspect-video w-full overflow-hidden md:mt-14 lg:aspect-[2.2/1]">
          <video
            ref={heroVideoRef}
            src={EXPERIENCES_HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute left-0 top-0 h-full w-[118%] max-w-none object-cover object-left"
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="flex w-full flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-24">
          {EXPERIENCE_POSTS.map((post, index) => {
            const imageOnRight = index % 2 === 1;

            return (
              <article
                key={post.slug}
                className={cn(
                  "grid w-full items-stretch opacity-100",
                  imageOnRight ? "grid-cols-[1fr_68%]" : "grid-cols-[68%_1fr]",
                )}
              >
                <div
                  className={cn(
                    "flex min-w-0 flex-col justify-center",
                    imageOnRight
                      ? "order-1 pl-4 pr-3 sm:pl-6 sm:pr-8 md:pr-12 lg:pl-10 lg:pr-16"
                      : "order-2 pl-3 pr-4 sm:pl-8 sm:pr-6 md:pl-12 lg:pl-16 lg:pr-10",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-body text-[10px] font-light text-grey sm:gap-x-3 sm:text-xs">
                    <SectionLabel as="span" className="text-[0.5rem] sm:text-[0.6875rem]">
                      {post.category}
                    </SectionLabel>
                    <span className="hidden sm:inline" aria-hidden>
                      ·
                    </span>
                    <time dateTime={post.date} className="hidden sm:inline">
                      {post.date}
                    </time>
                    <span className="hidden sm:inline" aria-hidden>
                      ·
                    </span>
                    <span className="hidden sm:inline">{post.readTime}</span>
                  </div>

                  <h2 className="mt-2 font-heading text-base font-medium leading-snug text-charcoal sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
                    {post.title}
                  </h2>

                  <p className="mt-2 font-body text-[0.6875rem] font-light leading-relaxed text-grey sm:mt-4 sm:text-sm md:text-base lg:text-lg">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/experiences/${post.slug}`}
                    className="mt-3 inline-flex w-fit items-center font-body text-[10px] font-medium uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-[#733E24] sm:mt-6 sm:text-xs sm:tracking-[0.14em]"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more
                    <span className="ml-1.5 sm:ml-2" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>

                <div
                  className={cn(
                    "relative min-h-44 overflow-hidden bg-muted sm:min-h-64 md:min-h-[32rem] lg:min-h-[40rem]",
                    imageOnRight ? "order-2" : "order-1",
                  )}
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="68vw"
                    priority={index < 2}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
