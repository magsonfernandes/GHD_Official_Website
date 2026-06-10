"use client";

import Link from "next/link";
import { getDefaultBookingHref } from "@/lib/booking";
import { cn } from "@/lib/utils";

type ReserveButtonProps = {
  className?: string;
  variant?: "outline" | "filled";
  href?: string;
};

export function ReserveButton({
  className,
  variant = "outline",
  href,
}: ReserveButtonProps) {
  return (
    <Link
      href={href ?? getDefaultBookingHref()}
      className={cn(
        "inline-flex items-center justify-center rounded-none px-7 py-3 font-body text-[0.7rem] font-medium uppercase tracking-[0.08em] transition-all duration-500 ease-out",
        variant === "outline" &&
          "border border-[#733E24] bg-white text-charcoal hover:bg-[#733E24] hover:text-white",
        variant === "filled" &&
          "border border-[#733E24] bg-[#733E24] text-white hover:bg-[#733E24]/90 hover:border-[#733E24]/90",
        className,
      )}
    >
      Reserve
    </Link>
  );
}
