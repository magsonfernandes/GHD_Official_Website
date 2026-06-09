"use client";

import { useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  fieldPanelClass,
  fieldSegmentClass,
  fieldSegmentHeroClass,
  segmentDividerClass,
} from "@/components/reservation/fieldStyles";
import { cn } from "@/lib/utils";

export type RoomGuests = {
  adults: number;
  children: number;
};

export type GuestSelection = RoomGuests[];

export const DEFAULT_GUEST_SELECTION: GuestSelection = [
  { adults: 2, children: 0 },
];

const MAX_ROOMS = 5;
const MIN_ADULTS = 1;
const MAX_OCCUPANCY = 4;

function getMaxAdultsForRoom(children: number): number {
  return Math.max(MIN_ADULTS, MAX_OCCUPANCY - children);
}

function getMaxChildrenForRoom(adults: number): number {
  return Math.max(0, MAX_OCCUPANCY - adults);
}

function normalizeRoom(room: RoomGuests, changedField: keyof RoomGuests): RoomGuests {
  let { adults, children } = room;

  adults = Math.max(MIN_ADULTS, Math.min(adults, MAX_OCCUPANCY));
  children = Math.max(0, Math.min(children, MAX_OCCUPANCY));

  if (adults + children > MAX_OCCUPANCY) {
    if (changedField === "adults") {
      children = MAX_OCCUPANCY - adults;
    } else {
      adults = Math.max(MIN_ADULTS, MAX_OCCUPANCY - children);
    }
  }

  return { adults, children };
}

export function formatGuestSummary(rooms: GuestSelection): string {
  const adults = rooms.reduce((sum, room) => sum + room.adults, 0);
  const children = rooms.reduce((sum, room) => sum + room.children, 0);
  return `Adult (${adults}) - Child (${children}) - Room (${rooms.length})`;
}

type GuestRoomPickerProps = {
  value: GuestSelection;
  onChange: (value: GuestSelection) => void;
  className?: string;
  variant?: "default" | "hero";
};

function Counter({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-body text-[0.8125rem] text-charcoal">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="flex size-7 items-center justify-center border border-slate-200 bg-white text-charcoal transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="size-3.5" strokeWidth={1.5} />
        </button>
        <span className="min-w-[1.25rem] text-center font-body text-[0.8125rem] text-charcoal">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="flex size-7 items-center justify-center border border-slate-200 bg-white text-charcoal transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={`Increase ${label}`}
        >
          <Plus className="size-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export function GuestRoomPicker({
  value,
  onChange,
  className,
  variant = "default",
}: GuestRoomPickerProps) {
  const [open, setOpen] = useState(false);
  const isHero = variant === "hero";

  const updateRoomCount = (count: number) => {
    if (count < 1 || count > MAX_ROOMS) return;

    if (count > value.length) {
      const added = Array.from({ length: count - value.length }, () => ({
        adults: 1,
        children: 0,
      }));
      onChange([...value, ...added]);
      return;
    }

    onChange(value.slice(0, count));
  };

  const updateRoom = (
    index: number,
    field: keyof RoomGuests,
    next: number,
  ) => {
    onChange(
      value.map((room, i) =>
        i === index
          ? normalizeRoom({ ...room, [field]: next }, field)
          : room,
      ),
    );
  };

  return (
    <div className={cn(segmentDividerClass, className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className={isHero ? fieldSegmentHeroClass : fieldSegmentClass}
        >
          <span className="min-w-0 flex-1 truncate text-left">
            {formatGuestSummary(value)}
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
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={12}
          className={cn(fieldPanelClass, "w-[min(100vw-2rem,22rem)]")}
        >
          <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="font-body text-[0.8125rem] font-medium text-charcoal">
              Rooms
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => updateRoomCount(value.length - 1)}
                disabled={value.length <= 1}
                className="flex size-7 items-center justify-center border border-slate-200 bg-white text-charcoal transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Decrease rooms"
              >
                <Minus className="size-3.5" strokeWidth={1.5} />
              </button>
              <span className="min-w-[1.25rem] text-center font-body text-[0.8125rem] text-charcoal">
                {value.length}
              </span>
              <button
                type="button"
                onClick={() => updateRoomCount(value.length + 1)}
                disabled={value.length >= MAX_ROOMS}
                className="flex size-7 items-center justify-center border border-slate-200 bg-white text-charcoal transition-colors hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Increase rooms"
              >
                <Plus className="size-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="flex max-h-[min(50vh,16rem)] flex-col gap-4 overflow-y-auto">
            {value.map((room, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
              >
                <span className="font-body text-[0.75rem] font-medium tracking-[0.12em] text-grey">
                  Room {index + 1}
                </span>
                <Counter
                  label="Adults"
                  value={room.adults}
                  min={MIN_ADULTS}
                  max={getMaxAdultsForRoom(room.children)}
                  onChange={(next) => updateRoom(index, "adults", next)}
                />
                <Counter
                  label="Children"
                  value={room.children}
                  min={0}
                  max={getMaxChildrenForRoom(room.adults)}
                  onChange={(next) => updateRoom(index, "children", next)}
                />
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
