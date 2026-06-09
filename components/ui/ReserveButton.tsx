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
          "border border-gold bg-white text-charcoal hover:bg-gold hover:text-white",
        variant === "filled" &&
          "border border-gold bg-gold text-white hover:bg-charcoal hover:border-charcoal",
        className,
      )}
    >
      Reserve
    </Link>
  );
}
