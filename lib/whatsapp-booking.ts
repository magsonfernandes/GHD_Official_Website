import { format } from "date-fns";
import type { BookingSearch } from "@/lib/booking";
import { getRoomCategoryForSlot } from "@/lib/booking";
import { HOTEL_WHATSAPP, ROYAL_STUDIO_BOOKING_POLICY } from "@/lib/constants";

export type ReservationContactDetails = {
  firstName: string;
  surname: string;
  phone: string;
  email: string;
  country: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
};

function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

function formatGuestLine(room: { adults: number; children: number }): string {
  const parts = [`${room.adults} adult${room.adults === 1 ? "" : "s"}`];
  if (room.children > 0) {
    parts.push(
      `${room.children} child${room.children === 1 ? "" : "ren"}`,
    );
  }
  return parts.join(", ");
}

export function buildWhatsAppReservationMessage({
  booking,
  propertyName,
  nights,
  totalCost,
  contact,
}: {
  booking: BookingSearch;
  propertyName: string;
  nights: number;
  totalCost: number;
  contact: ReservationContactDetails;
}): string {
  const guestLines = booking.guests
    .map((room, index) => {
      const roomCategory = getRoomCategoryForSlot(booking, index);
      return `• Room ${index + 1}: ${formatGuestLine(room)} (${roomCategory.name})`;
    })
    .join("\n");

  const roomSummary =
    booking.guests.length > 1
      ? booking.guests
          .map((room, index) => {
            const roomCategory = getRoomCategoryForSlot(booking, index);
            return `Room ${index + 1}: ${roomCategory.name}`;
          })
          .join(" · ")
      : getRoomCategoryForSlot(booking, 0).name;

  const addressLines = [
    contact.address1,
    contact.address2,
    [contact.city, contact.state].filter(Boolean).join(", "),
    contact.country,
  ]
    .filter(Boolean)
    .join("\n");

  const amountLine = `*BOOKING AMOUNT (Fees & Taxes Included):* ${formatInr(totalCost)}`;

  return [
    "Hello,",
    "",
    `I would like to make a reservation at *${propertyName}*. Please find my booking details below:`,
    "",
    `*Property:* ${propertyName}`,
    `*Room:* ${roomSummary}`,
    `*Check-in:* ${format(booking.checkIn, "MMMM d, yyyy")} (from ${ROYAL_STUDIO_BOOKING_POLICY.checkInTime})`,
    `*Check-out:* ${format(booking.checkOut, "MMMM d, yyyy")} (until ${ROYAL_STUDIO_BOOKING_POLICY.checkOutTime})`,
    `*Nights:* ${nights}`,
    `*Rooms:* ${booking.guests.length}`,
    "",
    "*Guest breakdown:*",
    guestLines,
    "",
    "*Contact details:*",
    `• Name: ${contact.firstName.trim()} ${contact.surname.trim()}`,
    contact.phone.trim() ? `• Phone: ${contact.phone.trim()}` : null,
    `• Email: ${contact.email.trim()}`,
    "",
    "*Address:*",
    addressLines,
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    amountLine,
    "━━━━━━━━━━━━━━━━━━━━",
    "",
    "Please confirm availability at your earliest convenience.",
    "",
    "Thank you.",
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function buildWhatsAppReservationUrl(message: string): string {
  return `${HOTEL_WHATSAPP.waMeUrl}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppReservation(message: string): void {
  window.location.assign(buildWhatsAppReservationUrl(message));
}
