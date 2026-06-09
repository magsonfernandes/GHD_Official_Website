"use client";

import { useState } from "react";
import {
  format,
  addDays,
  isBefore,
  isSameDay,
  startOfDay,
  startOfToday,
} from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fieldSegmentClass, fieldSegmentHeroClass, segmentDividerClass } from "@/components/reservation/fieldStyles";
import { cn } from "@/lib/utils";

const PLACEHOLDER = "Check In - Check Out";
const WEEKDAY_LETTERS = ["S", "M", "T", "W", "T", "F", "S"] as const;

type DateRangePickerProps = {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  onChange: (range: { from: Date | undefined; to: Date | undefined }) => void;
  className?: string;
  variant?: "default" | "hero";
};

function formatDateRange(from: Date | undefined, to: Date | undefined) {
  if (!from || !to) return PLACEHOLDER;
  return `${format(from, "d MMM yyyy")} — ${format(to, "d MMM yyyy")}`;
}

function ReservationDayButton({
  className,
  ...props
}: React.ComponentProps<typeof CalendarDayButton>) {
  return (
    <CalendarDayButton
      className={cn(
        "mx-auto !size-9 !min-w-9 !rounded-full bg-transparent transition-all duration-300 ease-out",
        "data-[range-start=true]:!rounded-full data-[range-start=true]:bg-[#733E24] data-[range-start=true]:text-white",
        "data-[range-end=true]:!rounded-full data-[range-end=true]:bg-[#733E24] data-[range-end=true]:text-white",
        "data-[range-middle=true]:!w-full data-[range-middle=true]:!min-w-0 data-[range-middle=true]:!rounded-none data-[range-middle=true]:bg-[#733E24]/15 data-[range-middle=true]:text-charcoal",
        "data-[selected-single=true]:!rounded-full data-[selected-single=true]:bg-[#733E24] data-[selected-single=true]:text-white",
        "hover:data-[range-middle=true]:bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

export function DateRangePicker({
  checkIn,
  checkOut,
  onChange,
  className,
  variant = "default",
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [hoveredDay, setHoveredDay] = useState<Date | undefined>();
  const today = startOfToday();
  const hasRange = Boolean(checkIn && checkOut);
  const isHero = variant === "hero";

  const previewTo =
    checkOut ??
    (checkIn &&
    hoveredDay &&
    !isBefore(startOfDay(hoveredDay), startOfDay(checkIn))
      ? hoveredDay
      : undefined);

  const handleSelect = (
    _range: DateRange | undefined,
    triggerDate: Date,
  ) => {
    const clicked = startOfDay(triggerDate);
    const from = checkIn ? startOfDay(checkIn) : undefined;
    const to = checkOut ? startOfDay(checkOut) : undefined;

    setHoveredDay(undefined);

    if (from && to) {
      onChange({ from: clicked, to: undefined });
      return;
    }

    if (!from) {
      onChange({ from: clicked, to: undefined });
      return;
    }

    if (isBefore(clicked, from)) {
      onChange({ from: clicked, to: undefined });
      return;
    }

    if (isSameDay(clicked, from)) {
      onChange({ from, to: addDays(from, 1) });
      setOpen(false);
      return;
    }

    onChange({ from, to: clicked });
    setOpen(false);
  };

  return (
    <div className={cn(segmentDividerClass, className)}>
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setHoveredDay(undefined);
        }}
      >
        <PopoverTrigger
          className={isHero ? fieldSegmentHeroClass : fieldSegmentClass}
        >
          <span
            className={cn(
              "min-w-0 flex-1 truncate text-left",
              !hasRange &&
                (isHero
                  ? "text-white/60 group-hover/reservation:text-grey"
                  : "text-grey"),
            )}
          >
            {formatDateRange(checkIn, checkOut)}
          </span>
        </PopoverTrigger>
        <PopoverContent
          align="center"
          sideOffset={12}
          className="reservation-ui uppercase w-auto overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
        >
          <Calendar
            mode="range"
            weekStartsOn={1}
            selected={{ from: checkIn, to: previewTo }}
            onSelect={handleSelect}
            onDayMouseEnter={(date) => {
              if (checkIn && !checkOut) {
                setHoveredDay(date);
              }
            }}
            onDayMouseLeave={() => setHoveredDay(undefined)}
            disabled={{ before: today }}
            numberOfMonths={2}
            defaultMonth={checkIn ?? today}
            className="reservation-calendar rounded-lg p-1 [--cell-radius:0.375rem]"
            formatters={{
              formatCaption: (month) =>
                format(month, "MMMM yyyy").toUpperCase(),
              formatWeekdayName: (weekday) => WEEKDAY_LETTERS[weekday.getDay()],
            }}
            classNames={{
              months: "flex flex-row gap-8",
              month: "gap-3",
              month_caption: "mb-1",
              caption_label:
                "font-reservation text-sm font-extralight uppercase tracking-[0.06em] text-black",
              weekdays: "border-b border-slate-100 pb-2",
              weekday:
                "flex-1 text-[0.6875rem] font-normal text-[#733E24] select-none",
              week: "mt-1",
              day: "p-0 transition-colors duration-300 ease-out",
              range_start:
                "rounded-none bg-[#733E24]/15 transition-colors duration-300 ease-out [&_button]:z-10",
              range_middle:
                "rounded-none bg-[#733E24]/15 transition-colors duration-300 ease-out",
              range_end:
                "rounded-none bg-[#733E24]/15 transition-colors duration-300 ease-out [&_button]:z-10",
              button_previous:
                "text-black hover:bg-slate-100 hover:text-black",
              button_next: "text-black hover:bg-slate-100 hover:text-black",
            }}
            components={{
              DayButton: ReservationDayButton,
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
