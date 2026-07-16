"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getDefaultBookingHref } from "@/lib/booking";

export function StickyBookingButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const href = getDefaultBookingHref();

  return createPortal(
    <>
      {/* Mobile: full-width sticky bottom strip */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book your stay at Nivaãra"
        className="mobile-book-strip md:hidden"
      >
        Book Now
      </a>

      {/* Desktop: floating bottom-right button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book your stay at Nivaãra"
        className="sticky-booking-btn fixed right-8 bottom-8 z-[9998] hidden items-center justify-center rounded-none bg-gold px-6 py-4 font-body text-xs font-medium uppercase tracking-[0.14em] text-white shadow-[0_12px_32px_rgba(198,168,106,0.45)] transition-all duration-300 hover:bg-[#b89755] hover:shadow-[0_16px_36px_rgba(198,168,106,0.5)] md:inline-flex"
      >
        Book Now
      </a>
    </>,
    document.body,
  );
}
