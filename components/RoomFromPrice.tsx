import { formatRoomRate } from "@/lib/rooms";
import { cn } from "@/lib/utils";

type RoomFromPriceProps = {
  amount: number;
  className?: string;
  align?: "left" | "right";
  priceClassName?: string;
};

export function RoomFromPrice({
  amount,
  className,
  align = "left",
  priceClassName,
}: RoomFromPriceProps) {
  return (
    <div className={cn(align === "right" && "text-right", className)}>
      <p className="font-body text-xs lowercase tracking-[0.04em] text-grey">from</p>
      <p
        className={cn(
          "mt-1 font-heading text-2xl font-thin text-charcoal sm:text-[1.75rem]",
          priceClassName,
        )}
      >
        {formatRoomRate(amount)}/night
      </p>
    </div>
  );
}
