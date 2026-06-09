"use client";

import { useEffect } from "react";
import {
  ROYAL_STUDIO,
  ROYAL_STUDIO_BOOKING_POLICY,
  ROYAL_STUDIO_RATE,
} from "@/lib/constants";

type BookingPolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

export function BookingPolicyModal({ open, onClose }: BookingPolicyModalProps) {
  const { basePerNight, gstPercent, totalPerNight } = ROYAL_STUDIO_RATE;
  const { rateLabel, sections } = ROYAL_STUDIO_BOOKING_POLICY;

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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close policy"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-policy-title"
        className="relative z-10 flex max-h-[min(88vh,44rem)] w-full max-w-lg flex-col overflow-hidden border border-border bg-white shadow-[0_24px_60px_rgba(17,17,17,0.28)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <h2
              id="booking-policy-title"
              className="font-heading text-xl font-medium text-charcoal sm:text-2xl"
            >
              {ROYAL_STUDIO.name}
            </h2>
            <p className="mt-1 font-body text-xs font-medium uppercase tracking-[0.12em] text-[#733E24]">
              {rateLabel}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 font-body text-xs uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-[#733E24]"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-6">
          <p className="font-body text-xs font-medium uppercase tracking-[0.12em] text-grey">
            Sales conditions
          </p>

          <div className="mt-3 border border-border bg-muted/20 p-4">
            <p className="font-body text-xs font-medium uppercase tracking-[0.1em] text-grey">
              Details per night
            </p>
            <p className="mt-2 font-body text-sm text-charcoal">
              {formatInr(basePerNight)} / room / night + {gstPercent}% GST (
              {formatInr(totalPerNight)} / room / night, fees &amp; taxes
              included)
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-body text-sm font-medium text-charcoal">
                  {section.title}
                </h3>
                <p className="mt-1.5 font-body text-sm font-light leading-relaxed text-grey">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
