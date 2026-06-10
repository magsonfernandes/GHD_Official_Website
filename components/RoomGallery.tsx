"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ROYAL_STUDIO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type RoomGalleryImage = {
  src: string;
  alt: string;
};

type RoomGalleryProps = {
  images?: readonly RoomGalleryImage[];
  variant?: "bento" | "compact" | "grid";
  className?: string;
};

const GALLERY_LAYOUT = [
  "col-span-2 min-h-[15rem] sm:min-h-[18rem] lg:col-span-4 lg:row-span-2 lg:min-h-[22rem]",
  "col-span-1 min-h-[11rem] lg:col-span-2 lg:row-span-1 lg:min-h-[10.5rem]",
  "col-span-1 min-h-[11rem] lg:col-span-2 lg:row-span-1 lg:min-h-[10.5rem]",
  "col-span-1 min-h-[11rem] lg:col-span-2 lg:row-span-1 lg:min-h-[10.5rem]",
  "col-span-1 min-h-[11rem] lg:col-span-2 lg:row-span-1 lg:min-h-[10.5rem]",
  "col-span-2 min-h-[12rem] lg:col-span-3 lg:row-span-1 lg:min-h-[14rem]",
  "col-span-2 min-h-[12rem] lg:col-span-3 lg:row-span-1 lg:min-h-[14rem]",
] as const;

export function RoomGallery({
  images = ROYAL_STUDIO.gallery,
  variant = "bento",
  className,
}: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div
        className={cn(
          variant === "compact" && "grid grid-cols-2 gap-2 sm:gap-3",
          variant === "grid" &&
            "grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5",
          variant === "bento" &&
            "mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6 lg:gap-5",
          className,
        )}
      >
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "group relative cursor-zoom-in overflow-hidden bg-white text-left shadow-[0_8px_30px_rgba(17,17,17,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#733E24]",
              variant === "compact" || variant === "grid"
                ? "aspect-[4/3] min-h-0"
                : GALLERY_LAYOUT[index] ?? "col-span-1 min-h-[11rem] lg:col-span-2",
            )}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.12)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
          </button>
        ))}
      </div>

      {activeImage && activeIndex !== null ? (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close gallery"
            onClick={closeLightbox}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            className="relative z-10 flex w-full max-w-6xl flex-col"
          >
            <div className="mb-3 flex items-center justify-between gap-4 px-1">
              <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-white/80">
                {activeIndex + 1} / {images.length}
              </p>
              <button
                type="button"
                onClick={closeLightbox}
                className="font-body text-xs uppercase tracking-[0.14em] text-white transition-colors hover:text-white/70"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/20 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:aspect-[16/10]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 72rem"
                priority
              />
            </div>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-0 top-1/2 z-20 -translate-x-2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 font-body text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:-translate-x-4"
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-0 top-1/2 z-20 translate-x-2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 font-body text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:translate-x-4"
                  aria-label="Next image"
                >
                  Next
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
