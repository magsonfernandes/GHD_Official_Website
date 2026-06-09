"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  fieldPanelClass,
  fieldSegmentClass,
  fieldSegmentHeroClass,
  segmentDividerClass,
} from "@/components/reservation/fieldStyles";
import { cn } from "@/lib/utils";

type LuxurySelectProps = {
  value: string;
  placeholder: string;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
  className?: string;
  variant?: "default" | "hero";
};

export function LuxurySelect({
  value,
  placeholder,
  options,
  onChange,
  className,
  variant = "default",
}: LuxurySelectProps) {
  const selected = options.find((o) => o.value === value);
  const isHero = variant === "hero";

  return (
    <div className={cn(segmentDividerClass, className)}>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={isHero ? fieldSegmentHeroClass : fieldSegmentClass}
        >
          <span
            className={cn(
              "min-w-0 flex-1 truncate text-left",
              !selected &&
                (isHero
                  ? "text-white/60 group-hover/reservation:text-grey"
                  : "text-grey"),
            )}
          >
            {selected?.label ?? placeholder}
          </span>
          <ChevronDown
            className={cn(
              "size-3.5 shrink-0 transition-transform duration-300 [[data-popup-open]_&]:rotate-180",
              isHero
                ? "text-white/70 group-hover/reservation:text-grey/70"
                : "text-grey/70",
            )}
            aria-hidden
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className={cn(
            fieldPanelClass,
            "min-w-[var(--anchor-width)] p-1",
          )}
        >
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onChange(option.value)}
              className={cn(
                "reservation-ui uppercase cursor-pointer rounded-none px-3 py-2 font-body text-[0.8125rem] text-charcoal transition-colors duration-300",
                "focus:bg-slate-100 focus:text-charcoal",
                value === option.value && "bg-slate-100 text-charcoal",
              )}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
