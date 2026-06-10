import { addDays, startOfDay } from "date-fns";
import type { GuestSelection } from "@/components/reservation/GuestRoomPicker";
import { DEFAULT_GUEST_SELECTION } from "@/components/reservation/GuestRoomPicker";
import { DEFAULT_PROPERTY_ID } from "@/lib/constants";

export type BookingSearch = {
  property: string;
  checkIn: Date;
  checkOut: Date;
  rooms: number;
  adults: number;
  children: number;
  guests: GuestSelection;
};

function parseGuestSelection(
  guestsParam: string | null,
  rooms: number,
  adults: number,
  children: number,
): GuestSelection {
  if (guestsParam) {
    try {
      const parsed = JSON.parse(guestsParam) as GuestSelection;
      if (
        Array.isArray(parsed) &&
        parsed.length > 0 &&
        parsed.every(
          (room) =>
            typeof room?.adults === "number" && typeof room?.children === "number",
        )
      ) {
        return parsed;
      }
    } catch {
      // Fall through to reconstructed guest selection.
    }
  }

  if (rooms <= 1) {
    return [{ adults: Math.max(adults, 1), children: Math.max(children, 0) }];
  }

  const selection: GuestSelection = Array.from({ length: rooms }, () => ({
    adults: 2,
    children: 0,
  }));

  selection[0] = {
    adults: Math.max(adults, 1),
    children: Math.max(children, 0),
  };

  return selection;
}

export function parseBookingSearchParams(
  searchParams: URLSearchParams,
): BookingSearch | null {
  const property = searchParams.get("property");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  if (!property || !checkIn || !checkOut) {
    return null;
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  if (
    Number.isNaN(checkInDate.getTime()) ||
    Number.isNaN(checkOutDate.getTime())
  ) {
    return null;
  }

  const rooms = Number(searchParams.get("rooms") ?? 1);
  const adults = Number(searchParams.get("adults") ?? 2);
  const children = Number(searchParams.get("children") ?? 0);

  return {
    property,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    rooms: Number.isNaN(rooms) || rooms < 1 ? 1 : rooms,
    adults: Number.isNaN(adults) || adults < 1 ? 2 : adults,
    children: Number.isNaN(children) || children < 0 ? 0 : children,
    guests: parseGuestSelection(
      searchParams.get("guests"),
      rooms,
      adults,
      children,
    ),
  };
}

export function buildBookingSearchParams(booking: {
  property: string;
  guests: GuestSelection;
  checkIn: Date;
  checkOut: Date;
}): URLSearchParams {
  const adults = booking.guests.reduce((sum, room) => sum + room.adults, 0);
  const children = booking.guests.reduce((sum, room) => sum + room.children, 0);

  return new URLSearchParams({
    property: booking.property,
    rooms: String(booking.guests.length),
    adults: String(adults),
    children: String(children),
    guests: JSON.stringify(booking.guests),
    checkIn: booking.checkIn.toISOString(),
    checkOut: booking.checkOut.toISOString(),
  });
}

export function getDefaultGuestSelection(): GuestSelection {
  return DEFAULT_GUEST_SELECTION.map((room) => ({ ...room }));
}

export function getDefaultReservationDates() {
  const checkIn = startOfDay(new Date());
  const checkOut = addDays(checkIn, 1);
  return { checkIn, checkOut };
}

export function getDefaultBookingHref(): string {
  const { checkIn, checkOut } = getDefaultReservationDates();
  const guests = getDefaultGuestSelection();

  const params = buildBookingSearchParams({
    property: DEFAULT_PROPERTY_ID,
    guests,
    checkIn,
    checkOut,
  });

  return `/booking?${params.toString()}`;
}
