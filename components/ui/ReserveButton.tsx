import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

type ReserveButtonProps = {
  className?: string;
  variant?: "outline" | "filled";
  href?: string;
};

export function ReserveButton({
  className,
  variant = "outline",
  href = SITE.reserveHref,
}: ReserveButtonProps) {
  return (
    <Link
      href={href}
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
