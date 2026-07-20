"use client";

import { getDefaultBookingHref } from "@/lib/booking";
import { cn } from "@/lib/utils";

type ReserveButtonProps = {
  className?: string;
  variant?: "outline" | "filled" | "gold";
  href?: string;
  label?: string;
};

export function ReserveButton({
  className,
  variant = "outline",
  href,
  label = "Reserved",
}: ReserveButtonProps) {
  return (
    <a
      href={href ?? getDefaultBookingHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-none px-7 py-3 font-body text-[0.7rem] font-medium uppercase tracking-[0.08em] transition-all duration-500 ease-out",
        variant === "outline" &&
          "border border-[#543119] bg-white text-charcoal hover:bg-[#543119] hover:text-white",
        variant === "filled" &&
          "border border-[#543119] bg-[#543119] text-white hover:bg-[#543119]/90 hover:border-[#543119]/90",
        variant === "gold" &&
          "border border-gold bg-gold text-white hover:bg-[#b89755] hover:border-[#b89755]",
        className,
      )}
    >
      {label}
    </a>
  );
}
