"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { getDefaultBookingHref } from "@/lib/booking";

/** Property routes where the sticky Book Now strip should appear */
const PROPERTY_ROUTE_PREFIXES = [
  "/nivaara",
  "/rooms",
  "/booking",
  "/faqs",
  "/city-attractions",
];

function isPropertyRoute(pathname: string) {
  return PROPERTY_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function StickyBookingButton() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isPropertyRoute(pathname)) {
    return null;
  }

  const href = getDefaultBookingHref();

  return createPortal(
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book your stay at Nivaãra"
        className="mobile-book-strip md:hidden"
      >
        Book Now
      </a>

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
