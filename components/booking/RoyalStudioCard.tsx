import Image from "next/image";
import Link from "next/link";
import type { GuestSelection } from "@/components/reservation/GuestRoomPicker";
import { ROYAL_STUDIO, ROYAL_STUDIO_RATE } from "@/lib/constants";

type RoyalStudioCardProps = {
  guests: GuestSelection;
  nights: number;
  bookAsName?: string;
};

function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

function formatOccupancy(room: { adults: number; children: number }): string {
  const parts: string[] = [];
  parts.push(`${room.adults} adult${room.adults === 1 ? "" : "s"}`);
  if (room.children > 0) {
    parts.push(`${room.children} child${room.children === 1 ? "" : "ren"}`);
  }
  return parts.join(", ");
}

export function RoyalStudioCard({ guests, nights, bookAsName }: RoyalStudioCardProps) {
  const { basePerNight, gstPercent, totalPerNight, roundedPerNight } =
    ROYAL_STUDIO_RATE;
  const roomCount = guests.length;
  const stayNights = Math.max(nights, 1);
  const totalCost = roundedPerNight * roomCount * stayNights;

  return (
    <article className="border border-border">
      <div className="grid grid-cols-2">
        <div className="relative min-h-[12rem] bg-muted sm:min-h-[16rem] lg:min-h-[22rem]">
          <Image
            src={ROYAL_STUDIO.image}
            alt={ROYAL_STUDIO.name}
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.38)_100%)]"
            aria-hidden
          />
        </div>

        <div className="flex flex-col justify-center p-3 sm:p-6 lg:p-10">
          <h2 className="font-heading text-base font-medium text-charcoal sm:text-2xl lg:text-4xl">
            {ROYAL_STUDIO.name}
          </h2>
          <p className="mt-1.5 font-body text-[0.65rem] text-grey sm:mt-2 sm:text-sm">
            {ROYAL_STUDIO.beds} • Sleeps {ROYAL_STUDIO.sleeps} • {ROYAL_STUDIO.size}
          </p>

          <p className="mt-2 font-body text-[0.65rem] font-light leading-relaxed text-grey sm:mt-4 sm:text-sm lg:mt-5">
            {ROYAL_STUDIO.description}
          </p>

          <div className="mt-4 sm:mt-6">
            <Link
              href="/rooms"
              className="inline-flex items-center border-b border-charcoal pb-0.5 font-body text-[0.65rem] font-medium uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-[#543119] hover:text-[#543119] sm:text-xs"
            >
              Room Details
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4 border-t border-border px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-start justify-between gap-4">
          <p className="max-w-[60%] font-body text-xs text-grey sm:text-sm">
            <span className="font-medium uppercase tracking-[0.08em]">
              Room rate:
            </span>{" "}
            {formatInr(basePerNight)} / room / night + {gstPercent}% GST (
            {formatInr(totalPerNight)} / room / night) {formatInr(roundedPerNight)}
          </p>

          <div className="shrink-0 text-right">
            <p className="font-heading text-2xl font-medium text-charcoal sm:text-3xl lg:text-4xl">
              {formatInr(totalCost)}
            </p>
            <p className="mt-1 font-body text-[0.65rem] text-grey sm:text-xs">
              For {stayNights} night{stayNights === 1 ? "" : "s"} and {roomCount}{" "}
              room{roomCount === 1 ? "" : "s"}
            </p>
          </div>
        </div>

        <div>
          <p className="font-body text-xs font-medium uppercase tracking-[0.12em] text-grey">
            Rooms assigned to this category
          </p>

          <ul className="mt-3 space-y-3">
          {guests.map((room, index) => {
            const pax = room.adults + room.children;

            return (
              <li
                key={`room-assignment-${index}`}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div>
                  <p className="font-body text-sm font-medium text-charcoal">
                    Room {index + 1} · {pax} pax
                  </p>
                  <p className="mt-0.5 font-body text-xs text-grey sm:text-sm">
                    {formatOccupancy(room)}
                  </p>
                </div>

                {bookAsName ? (
                  <p className="font-body text-xs text-charcoal sm:text-right sm:text-sm">
                    <span className="text-grey">Book as</span>{" "}
                    <span className="font-medium">{bookAsName}</span>
                  </p>
                ) : null}
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    </article>
  );
}
