"use client";

import { differenceInCalendarDays } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  BookingLayout,
  useBookingFromParams,
  useBookingQueryString,
} from "@/components/booking/BookingLayout";
import { BookingRoomCategoryCard } from "@/components/booking/BookingRoomCategoryCard";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getAllRoomCategories } from "@/lib/rooms";

export function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const booking = useBookingFromParams();
  const query = useBookingQueryString();

  const initialRoomId = useMemo(
    () => searchParams.get("roomCategory"),
    [searchParams],
  );

  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(
    initialRoomId,
  );

  useEffect(() => {
    if (initialRoomId) {
      setSelectedRoomId(initialRoomId);
    }
  }, [initialRoomId]);

  const nights = booking
    ? Math.max(differenceInCalendarDays(booking.checkOut, booking.checkIn), 1)
    : 1;

  function handleProceed() {
    if (!booking || !selectedRoomId) return;

    const params = new URLSearchParams(query);
    params.set("roomCategory", selectedRoomId);
    router.push(`/booking/details?${params.toString()}`);
  }

  return (
    <BookingLayout step={1}>
      {booking ? (
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            label="Select a room"
            title="Choose your room category"
            description="The thoughtfully designed room — offered across three honest view categories. Select one to continue."
            align="left"
            titleAs="h2"
            className="text-left"
          />

          <div className="mt-8 flex flex-col gap-8 md:mt-10 md:gap-10">
            {getAllRoomCategories().map((room) => (
              <BookingRoomCategoryCard
                key={room.id}
                room={room}
                guests={booking.guests}
                nights={nights}
                selected={selectedRoomId === room.id}
                onSelect={() => setSelectedRoomId(room.id)}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={handleProceed}
              disabled={!selectedRoomId}
              className="inline-flex h-12 min-w-[15rem] items-center justify-center rounded-none bg-[#543119] px-8 font-body text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#543119]/90 disabled:cursor-not-allowed disabled:opacity-60 sm:text-xs"
            >
              Proceed
            </button>
          </div>
        </div>
      ) : null}
    </BookingLayout>
  );
}
