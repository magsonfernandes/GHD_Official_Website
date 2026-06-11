"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ROYAL_STUDIO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type RoomGalleryImage = {
  src: string;
  alt: string;
};

type RoomGalleryProps = {
  images?: readonly RoomGalleryImage[];
  variant?: "bento" | "compact" | "grid" | "strip";
  className?: string;
};

const HIGHLIGHT_CROSSFADE_MS = 280;

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
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [prevHighlightIndex, setPrevHighlightIndex] = useState<number | null>(
    null,
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const highlightIndexRef = useRef(0);
  const prevHighlightIndexRef = useRef<number | null>(null);
  const crossfadeTimerRef = useRef<number | null>(null);

  highlightIndexRef.current = highlightIndex;
  prevHighlightIndexRef.current = prevHighlightIndex;

  const scrollThumbIntoView = useCallback((index: number) => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const goToHighlight = useCallback(
    (index: number) => {
      const next = ((index % images.length) + images.length) % images.length;
      const current = highlightIndexRef.current;

      if (next === current && prevHighlightIndexRef.current === null) {
        scrollThumbIntoView(next);
        return;
      }

      if (crossfadeTimerRef.current) {
        window.clearTimeout(crossfadeTimerRef.current);
        crossfadeTimerRef.current = null;
      }

      setPrevHighlightIndex(current);
      setHighlightIndex(next);
      scrollThumbIntoView(next);

      crossfadeTimerRef.current = window.setTimeout(() => {
        setPrevHighlightIndex(null);
        crossfadeTimerRef.current = null;
      }, HIGHLIGHT_CROSSFADE_MS);
    },
    [images.length, scrollThumbIntoView],
  );

  useEffect(() => {
    return () => {
      if (crossfadeTimerRef.current) {
        window.clearTimeout(crossfadeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;

    const total = images.length;
    const next = (highlightIndex + 1) % total;
    const prev = (highlightIndex - 1 + total) % total;

    for (const index of [next, prev]) {
      const preload = new window.Image();
      preload.src = images[index]?.src ?? "";
    }
  }, [highlightIndex, images]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

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
  }, [lightboxIndex, closeLightbox, showNext, showPrevious]);

  const activeImage = lightboxIndex !== null ? images[lightboxIndex] : null;
  const highlightBaseIndex = prevHighlightIndex ?? highlightIndex;
  const highlightedImage = images[highlightIndex];
  const highlightBaseImage = images[highlightBaseIndex];

  if (variant === "strip" && highlightedImage && highlightBaseImage) {
    return (
      <>
        <div className={cn("space-y-3", className)}>
          <button
            type="button"
            onClick={() => setLightboxIndex(highlightIndex)}
            className="group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-muted text-left shadow-[0_8px_30px_rgba(17,17,17,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#543119] sm:aspect-[2/1]"
            aria-label={`View ${highlightedImage.alt}`}
          >
            <div className="absolute inset-0">
              <Image
                src={highlightBaseImage.src}
                alt={highlightBaseImage.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 896px) 100vw, 56rem"
                priority={highlightBaseIndex === 0}
              />
              {prevHighlightIndex !== null ? (
                <Image
                  key={highlightIndex}
                  src={highlightedImage.src}
                  alt={highlightedImage.alt}
                  fill
                  className="room-gallery-crossfade-in object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 896px) 100vw, 56rem"
                />
              ) : null}
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.1)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
          </button>

          {images.length > 1 ? (
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-10 items-center bg-gradient-to-r from-white via-white/80 to-transparent sm:w-12">
                <button
                  type="button"
                  onClick={() => goToHighlight(highlightIndex - 1)}
                  className="pointer-events-auto ml-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-charcoal shadow-sm transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#543119] sm:h-9 sm:w-9"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <div
                className={cn(
                  "flex gap-2 overflow-x-auto scroll-smooth px-10 py-1 sm:gap-2.5 sm:px-12",
                  "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                )}
              >
                {images.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    ref={(node) => {
                      thumbRefs.current[index] = node;
                    }}
                    type="button"
                    onClick={() => goToHighlight(index)}
                    className={cn(
                      "relative h-16 w-24 shrink-0 overflow-hidden bg-white transition-shadow sm:h-[4.5rem] sm:w-28",
                      index === highlightIndex
                        ? "ring-2 ring-[#543119] ring-offset-2"
                        : "opacity-75 hover:opacity-100",
                    )}
                    aria-label={`Show ${image.alt}`}
                    aria-current={index === highlightIndex ? "true" : undefined}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="7rem"
                    />
                  </button>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-10 items-center justify-end bg-gradient-to-l from-white via-white/80 to-transparent sm:w-12">
                <button
                  type="button"
                  onClick={() => goToHighlight(highlightIndex + 1)}
                  className="pointer-events-auto mr-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-charcoal shadow-sm transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#543119] sm:h-9 sm:w-9"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {activeImage && lightboxIndex !== null ? (
          <Lightbox
            activeImage={activeImage}
            activeIndex={lightboxIndex}
            images={images}
            onClose={closeLightbox}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        ) : null}
      </>
    );
  }

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
            onClick={() => setLightboxIndex(index)}
            className={cn(
              "group relative cursor-zoom-in overflow-hidden bg-white text-left shadow-[0_8px_30px_rgba(17,17,17,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#543119]",
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

      {activeImage && lightboxIndex !== null ? (
        <Lightbox
          activeImage={activeImage}
          activeIndex={lightboxIndex}
          images={images}
          onClose={closeLightbox}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}

function Lightbox({
  activeImage,
  activeIndex,
  images,
  onClose,
  onPrevious,
  onNext,
}: {
  activeImage: RoomGalleryImage;
  activeIndex: number;
  images: readonly RoomGalleryImage[];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close gallery"
        onClick={onClose}
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
            onClick={onClose}
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
              onClick={onPrevious}
              className="absolute left-0 top-1/2 z-20 -translate-x-2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 font-body text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:-translate-x-4"
              aria-label="Previous image"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute right-0 top-1/2 z-20 translate-x-2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 font-body text-xs uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:translate-x-4"
              aria-label="Next image"
            >
              Next
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
