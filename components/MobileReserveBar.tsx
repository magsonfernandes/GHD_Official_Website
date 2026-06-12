"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getDefaultBookingHref } from "@/lib/booking";

export function MobileReserveBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <Link
      href={getDefaultBookingHref()}
      className="mobile-reserve-bar"
      aria-label="Reserve your stay"
    >
      RESERVE
    </Link>,
    document.body,
  );
}
