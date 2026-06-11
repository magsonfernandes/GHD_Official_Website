"use client";

import Link from "next/link";
import { getDefaultBookingHref } from "@/lib/booking";

export function MobileReserveBar() {
  return (
    <Link
      href={getDefaultBookingHref()}
      className="fixed inset-x-0 bottom-0 z-[90] flex min-h-10 items-center justify-center bg-[#543119] px-4 pb-[env(safe-area-inset-bottom)] font-body text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#543119]/90 md:hidden"
      aria-label="Reserve your stay"
    >
      RESERVE
    </Link>
  );
}
