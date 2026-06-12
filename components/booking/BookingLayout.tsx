"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReservationBar } from "@/components/ReservationWidget";
import { BookingTimeline } from "@/components/booking/BookingTimeline";
import {
  BOOKING_OPEN_GUESTS_PARAM,
  parseBookingSearchParams,
} from "@/lib/booking";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";

type BookingLayoutProps = {
  step: 1 | 2;
  children: ReactNode;
};

export function BookingLayout({ step, children }: BookingLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const booking = useMemo(
    () => parseBookingSearchParams(searchParams),
    [searchParams],
  );
  const [guestsPickerOpen, setGuestsPickerOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get(BOOKING_OPEN_GUESTS_PARAM) !== "1") {
      return;
    }

    setGuestsPickerOpen(true);

    const params = new URLSearchParams(searchParams.toString());
    params.delete(BOOKING_OPEN_GUESTS_PARAM);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  if (!booking) {
    return (
      <section className="bg-muted px-6 py-32 text-center lg:px-10">
        <div className="mx-auto max-w-lg">
          <h1 className={sectionHeadingClass(false, "mt-0")}>
            Booking details unavailable
          </h1>
          <p className={sectionBodyClass(false, "mt-4")}>
            Please select a hotel, check-in, and check-out date to continue.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center font-body text-xs font-medium uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-[#543119]"
          >
            Return to homepage
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-border bg-muted px-4 pb-8 pt-28 md:px-6 md:pb-10 md:pt-32 lg:px-10">
        <div className="mx-auto max-w-[1240px] space-y-5">
          <BookingTimeline currentStep={step} />
          <div className="hidden md:block">
            <ReservationBar
              variant="booking"
              initialProperty={booking.property}
              initialGuests={booking.guests}
              initialCheckIn={booking.checkIn}
              initialCheckOut={booking.checkOut}
              guestsPickerOpen={guestsPickerOpen}
              onGuestsPickerOpenChange={setGuestsPickerOpen}
              onSearch={(params) => {
                const guestsParam = params.get("guests");

                if (guestsParam && booking) {
                  try {
                    const nextGuests = JSON.parse(guestsParam) as typeof booking.guests;
                    const mergedGuests = nextGuests.map((room, index) => ({
                      ...room,
                      ...(booking.guests[index]?.roomCategoryId
                        ? { roomCategoryId: booking.guests[index].roomCategoryId }
                        : {}),
                    }));

                    params.set("guests", JSON.stringify(mergedGuests));

                    const primaryRoomCategory = mergedGuests.find(
                      (room) => room.roomCategoryId,
                    )?.roomCategoryId;

                    if (primaryRoomCategory) {
                      params.set("roomCategory", primaryRoomCategory);
                    }
                  } catch {
                    const roomCategory = searchParams.get("roomCategory");
                    if (roomCategory) {
                      params.set("roomCategory", roomCategory);
                    }
                  }
                } else {
                  const roomCategory = searchParams.get("roomCategory");
                  if (roomCategory) {
                    params.set("roomCategory", roomCategory);
                  }
                }

                router.push(`${pathname}?${params.toString()}`);
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:py-16 lg:px-10">{children}</section>
    </>
  );
}

export function useBookingFromParams() {
  const searchParams = useSearchParams();
  return useMemo(() => parseBookingSearchParams(searchParams), [searchParams]);
}

export function useBookingQueryString() {
  const searchParams = useSearchParams();
  return searchParams.toString();
}
