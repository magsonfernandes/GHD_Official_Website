"use client";

import type { GuestSelection } from "@/components/reservation/GuestRoomPicker";
import {
  formatRoomRate,
  getAllRoomCategories,
  getRoomCategoryNightlyRate,
} from "@/lib/rooms";
import { cn } from "@/lib/utils";

type BookingRoomAssignmentListProps = {
  guests: GuestSelection;
  selections: (string | null)[];
  nights: number;
  onChange: (index: number, roomCategoryId: string) => void;
};

function formatOccupancy(room: { adults: number; children: number }): string {
  const parts = [`${room.adults} adult${room.adults === 1 ? "" : "s"}`];
  if (room.children > 0) {
    parts.push(`${room.children} child${room.children === 1 ? "" : "ren"}`);
  }
  return parts.join(", ");
}

export function BookingRoomAssignmentList({
  guests,
  selections,
  nights,
  onChange,
}: BookingRoomAssignmentListProps) {
  const categories = getAllRoomCategories();
  const stayNights = Math.max(nights, 1);

  return (
    <div className="space-y-5">
      {guests.map((guestRoom, index) => {
        const selectedId = selections[index];

        return (
          <div
            key={`room-assignment-${index}`}
            className="border border-border bg-white p-5 shadow-[0_8px_30px_rgba(17,17,17,0.04)] sm:p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-heading text-xl font-light text-charcoal sm:text-2xl">
                Room {index + 1}
              </h3>
              <p className="font-body text-sm text-charcoal/70">
                {formatOccupancy(guestRoom)}
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {categories.map((category) => {
                const selected = selectedId === category.id;
                const rate = getRoomCategoryNightlyRate(category);

                return (
                  <button
                    key={`${index}-${category.id}`}
                    type="button"
                    onClick={() => onChange(index, category.id)}
                    className={cn(
                      "flex min-h-[6.5rem] flex-col items-start border px-4 py-3 text-left transition-colors",
                      selected
                        ? "border-[#543119] bg-[#543119]/5 ring-1 ring-[#543119]/30"
                        : "border-border bg-white hover:border-charcoal/30",
                    )}
                  >
                    <span className="font-body text-sm font-medium text-charcoal">
                      {category.name}
                    </span>
                    <span className="mt-2 font-body text-xs text-grey">
                      {formatRoomRate(rate.nightlyRate)} / night
                    </span>
                    <span className="mt-auto pt-3 font-body text-xs text-charcoal/70">
                      {formatRoomRate(rate.nightlyRate * stayNights)} for{" "}
                      {stayNights} night{stayNights === 1 ? "" : "s"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
