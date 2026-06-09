"use client";

import Link from "next/link";
import { useMemo, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReservationBar } from "@/components/ReservationWidget";
import { BookingTimeline } from "@/components/booking/BookingTimeline";
import { parseBookingSearchParams } from "@/lib/booking";

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

  if (!booking) {
    return (
      <section className="bg-muted px-6 py-32 text-center lg:px-10">
        <div className="mx-auto max-w-lg">
          <h1 className="font-heading text-3xl font-medium text-charcoal">
            Booking details unavailable
          </h1>
          <p className="mt-4 font-body text-sm font-light text-grey">
            Please select a hotel, check-in, and check-out date to continue.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center font-body text-xs font-medium uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-[#733E24]"
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
          <ReservationBar
            variant="booking"
            initialProperty={booking.property}
            initialGuests={booking.guests}
            initialCheckIn={booking.checkIn}
            initialCheckOut={booking.checkOut}
            onSearch={(params) =>
              router.push(`${pathname}?${params.toString()}`)
            }
          />
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
