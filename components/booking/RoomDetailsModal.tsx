"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ROYAL_STUDIO } from "@/lib/constants";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";
import { cn } from "@/lib/utils";

type RoomDetailsModalProps = {
  open: boolean;
  onClose: () => void;
};

export function RoomDetailsModal({ open, onClose }: RoomDetailsModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close room details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="room-details-title"
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white shadow-[0_24px_60px_rgba(17,17,17,0.16)]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white px-5 py-4 sm:px-6">
          <h2
            id="room-details-title"
            className={sectionHeadingClass(false, "mt-0 text-left")}
          >
            {ROYAL_STUDIO.name}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="font-body text-xs uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-[#733E24]"
          >
            Close
          </button>
        </div>

        <div className="space-y-8 px-5 py-6 sm:px-6 sm:py-8">
          <div>
            <p className="font-body text-sm text-grey">
              {ROYAL_STUDIO.beds} • Sleeps {ROYAL_STUDIO.sleeps}
            </p>
            <p className="mt-1 font-body text-sm text-grey">
              Room Size: {ROYAL_STUDIO.size}
            </p>
          </div>

          <section>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
              Room description
            </h3>
            <p className={sectionBodyClass(false, "mt-3 text-left")}>
              {ROYAL_STUDIO.description}
            </p>
          </section>

          <section>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
              Room amenities
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {ROYAL_STUDIO.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="font-body text-sm font-light text-grey"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
              Nearby transport hubs (Nerul)
            </h3>

            <div className="mt-4 space-y-5">
              {(
                [
                  ["Airports", ROYAL_STUDIO.transport.airports],
                  ["Railway stations", ROYAL_STUDIO.transport.railway],
                  ["Bus stands", ROYAL_STUDIO.transport.bus],
                ] as const
              ).map(([title, items]) => (
                <div key={title}>
                  <h4 className="font-heading text-lg font-medium text-charcoal">
                    {title}
                  </h4>
                  <ul className="mt-3 space-y-3">
                    {items.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-border pb-3 last:border-b-0 last:pb-0"
                      >
                        <p className="font-body text-sm font-medium text-charcoal">
                          {item.name}
                        </p>
                        <p className="mt-1 font-body text-xs text-grey">
                          {item.distance} • {item.duration}
                        </p>
                        <p className="mt-1 font-body text-xs font-light text-grey">
                          {item.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
              Quick travel tip
            </h3>
            <ul className="mt-3 space-y-2">
              {ROYAL_STUDIO.travelTips.map((tip) => (
                <li key={tip.label} className="font-body text-sm text-grey">
                  <span className="font-medium text-charcoal">{tip.label}:</span>{" "}
                  {tip.value}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
              Room Gallery
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ROYAL_STUDIO.gallery.map((image, index) => (
                <div
                  key={image.src}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden bg-muted",
                    index === 0 && "sm:col-span-2",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
              During your stay
            </h3>

            <div className="mt-4">
              <h4 className="font-heading text-lg font-medium text-charcoal">
                Timings
              </h4>
              <ul className="mt-3 space-y-2">
                {ROYAL_STUDIO.duringStay.timings.map((timing) => (
                  <li key={timing.label} className="font-body text-sm text-grey">
                    <span className="font-medium text-charcoal">
                      {timing.label}:
                    </span>{" "}
                    {timing.value}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-5 list-disc space-y-2 pl-5">
              {ROYAL_STUDIO.duringStay.guidelines.map((guideline) => (
                <li
                  key={guideline}
                  className={sectionBodyClass(false, "mt-0 text-left")}
                >
                  {guideline}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
