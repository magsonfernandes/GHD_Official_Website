"use client";

import { differenceInCalendarDays } from "date-fns";
import { useRouter } from "next/navigation";
import {
  BookingLayout,
  useBookingFromParams,
  useBookingQueryString,
} from "@/components/booking/BookingLayout";
import { RoyalStudioCard } from "@/components/booking/RoyalStudioCard";

export function BookingContent() {
  const router = useRouter();
  const booking = useBookingFromParams();
  const query = useBookingQueryString();

  return (
    <BookingLayout step={1}>
      {booking ? (
        <div className="mx-auto max-w-5xl">
          <RoyalStudioCard
            guests={booking.guests}
            nights={Math.max(
              differenceInCalendarDays(booking.checkOut, booking.checkIn),
              1,
            )}
          />

          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={() =>
                router.push(`/booking/details${query ? `?${query}` : ""}`)
              }
              className="inline-flex h-12 min-w-[15rem] items-center justify-center rounded-none bg-[#733E24] px-8 font-body text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#733E24]/90 sm:text-xs"
            >
              Proceed
            </button>
          </div>
        </div>
      ) : null}
    </BookingLayout>
  );
}
