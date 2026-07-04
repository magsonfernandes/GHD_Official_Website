"use client";

import { differenceInCalendarDays, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  BookingLayout,
  useBookingFromParams,
} from "@/components/booking/BookingLayout";
import { BookingPolicyModal } from "@/components/booking/BookingPolicyModal";
import { HOTEL_CHECK_IN_TIME, HOTEL_CHECK_OUT_TIME, PROPERTIES, SITE } from "@/lib/constants";
import {
  buildAddRoomBookingHref,
  calculateBookingTotal,
  canAddBookingRoom,
  getBookingRoomCategory,
  getRoomCategoryForSlot,
} from "@/lib/booking";
import { getRoomCategoryNightlyRate } from "@/lib/rooms";
import {
  buildWhatsAppReservationMessage,
  openWhatsAppReservation,
} from "@/lib/whatsapp-booking";
import { sectionBodyClass, sectionHeadingClass } from "@/lib/section-typography";

const fieldClass =
  "w-full border border-border bg-white px-3 py-2.5 font-body text-sm font-light text-charcoal outline-none transition-colors placeholder:text-grey/70 focus:border-charcoal";

const labelClass =
  "mb-1.5 block font-body text-xs font-medium text-charcoal";

const sectionTitleClass =
  "font-heading text-xl font-thin text-charcoal sm:text-2xl";

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Singapore",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Other",
] as const;

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

function SectionHeading({
  title,
  hint,
}: {
  title: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className={sectionTitleClass}>{title}</h3>
      {hint ? (
        <span className="font-body text-xs text-grey">{hint}</span>
      ) : null}
    </div>
  );
}

export function BookingDetailsContent() {
  const router = useRouter();
  const booking = useBookingFromParams();
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const nights = booking
    ? Math.max(differenceInCalendarDays(booking.checkOut, booking.checkIn), 1)
    : 1;
  const roomCount = booking?.guests.length ?? 1;
  const roomCategory = booking ? getBookingRoomCategory(booking) : null;
  const totalCost = booking ? calculateBookingTotal(booking, nights) : 0;
  const retentionAmount = totalCost;
  const propertyName = booking
    ? PROPERTIES.find((property) => property.id === booking.property)?.name ??
      SITE.property
    : SITE.property;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (
      !firstName.trim() ||
      !surname.trim() ||
      !email.trim() ||
      !country ||
      !address1.trim() ||
      !city.trim() ||
      !state.trim()
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!agreePrivacy) {
      setErrorMessage("Please agree to the Privacy Policy to continue.");
      return;
    }

    if (!booking) return;

    const message = buildWhatsAppReservationMessage({
      booking,
      propertyName,
      nights,
      totalCost,
      contact: {
        firstName,
        surname,
        phone,
        email,
        country,
        address1,
        address2,
        city,
        state,
      },
    });

    openWhatsAppReservation(message);
  }

  return (
    <BookingLayout step={2}>
      {booking ? (
        <div className="mx-auto max-w-6xl">
          <h2 className={sectionHeadingClass(false, "text-left")}>
            Complete Your Stay
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-[18rem_1fr] xl:grid-cols-[22rem_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden border border-border bg-white">
                {roomCategory ? (
                  <div className="relative hidden aspect-[4/3] lg:block">
                    <Image
                      src={roomCategory.image}
                      alt={roomCategory.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 18rem, 22rem"
                    />
                  </div>
                ) : null}

                <div className="p-4 sm:p-5">
                  <h3 className="font-heading text-lg font-thin text-charcoal">
                    {propertyName}
                  </h3>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div>
                      <p className="font-body text-xs font-medium text-charcoal">
                        Check-in
                      </p>
                      <p className="mt-1 font-body text-sm text-charcoal">
                        {format(booking.checkIn, "MMMM d, yyyy")}
                      </p>
                      <p className="font-body text-xs text-grey">
                        From {HOTEL_CHECK_IN_TIME}
                      </p>
                    </div>

                    <div>
                      <p className="font-body text-xs font-medium text-charcoal">
                        Check-out
                      </p>
                      <p className="mt-1 font-body text-sm text-charcoal">
                        {format(booking.checkOut, "MMMM d, yyyy")}
                      </p>
                      <p className="font-body text-xs text-grey">
                        Until {HOTEL_CHECK_OUT_TIME}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-5">
                    {booking.guests.map((room, index) => {
                      const slotCategory = getRoomCategoryForSlot(booking, index);
                      const slotRate = getRoomCategoryNightlyRate(slotCategory).nightlyRate;

                      return (
                        <div key={`price-room-${index}`}>
                          <p className="font-body text-xs lowercase text-grey">room</p>
                          <p className="mt-1 font-body text-sm font-medium text-charcoal">
                            {formatInr(slotRate * nights)}
                          </p>
                          <p className="mt-1 font-body text-sm text-charcoal">
                            {slotCategory.name}
                            {roomCount > 1 ? ` · Room ${index + 1}` : ""}
                          </p>
                          <p className="mt-0.5 font-body text-xs text-grey">
                            {formatGuestLine(room)}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {booking && canAddBookingRoom(booking) ? (
                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={() => {
                          const href = buildAddRoomBookingHref(booking);
                          if (href) router.push(href);
                        }}
                        className="inline-flex w-full items-center justify-center border border-dashed border-border bg-muted/20 px-4 py-2.5 font-body text-xs font-medium lowercase tracking-[0.06em] text-charcoal transition-colors hover:border-[#543119]/40 hover:bg-muted/40"
                      >
                        Add room
                      </button>
                    </div>
                  ) : null}

                  <div className="mt-5 border-t border-border pt-4">
                    <p className="font-body text-sm text-charcoal">
                      Total for {nights} night{nights === 1 ? "" : "s"}
                    </p>
                    <p className="mt-1 font-body text-xs text-grey">
                      Fees &amp; Taxes Included
                    </p>
                    <p className="mt-2 font-heading text-xl font-thin text-charcoal sm:text-2xl">
                      {formatInr(totalCost)}
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="min-w-0 space-y-10">
            <section className="space-y-5">
              <SectionHeading title="Contact Info" hint="* Required" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className={labelClass}>
                    First Name *
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    autoComplete="given-name"
                    required
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="surname" className={labelClass}>
                    Surname *
                  </label>
                  <input
                    id="surname"
                    type="text"
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                    autoComplete="family-name"
                    required
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    className={fieldClass}
                  />
                  <p className="mt-1.5 font-body text-xs text-grey">
                    This is the email we will send your confirmation to.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="font-body text-sm font-medium text-charcoal">
                  Address
                </h4>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="country" className={labelClass}>
                      Country *
                    </label>
                    <select
                      id="country"
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                      required
                      className={fieldClass}
                    >
                      {COUNTRIES.map((entry) => (
                        <option key={entry} value={entry}>
                          {entry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address-1" className={labelClass}>
                      Address 1 *
                    </label>
                    <input
                      id="address-1"
                      type="text"
                      value={address1}
                      onChange={(event) => setAddress1(event.target.value)}
                      autoComplete="address-line1"
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address-2" className={labelClass}>
                      Address 2 *
                    </label>
                    <input
                      id="address-2"
                      type="text"
                      value={address2}
                      onChange={(event) => setAddress2(event.target.value)}
                      autoComplete="address-line2"
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className={labelClass}>
                      City *
                    </label>
                    <input
                      id="city"
                      type="text"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                      autoComplete="address-level2"
                      required
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className={labelClass}>
                      State / Province *
                    </label>
                    <input
                      id="state"
                      type="text"
                      value={state}
                      onChange={(event) => setState(event.target.value)}
                      autoComplete="address-level1"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4 border-t border-border pt-8">
              <p className="font-body text-sm text-charcoal">
                Cancellation within 72 hours of check-in incurs 50% retention.
                Less than 48 hours before arrival, no-show, and early checkout
                are also subject to full retention.{" "}
                <span className="font-semibold">{formatInr(retentionAmount)}</span>
              </p>

              <button
                type="button"
                onClick={() => setPolicyOpen(true)}
                className="inline-flex font-body text-xs font-medium uppercase tracking-[0.12em] text-[#543119] underline-offset-4 transition-colors hover:text-[#543119]/80 hover:underline"
              >
                View Full Policy
              </button>
            </section>

            <section className="space-y-4 border-t border-border pt-8">
              <h3 className="font-heading text-xl font-thin text-charcoal">
                Acknowledgement
              </h3>

              <p className={sectionBodyClass(false, "mt-0 text-left")}>
                By completing this booking, I agree with the Booking Conditions.
              </p>

              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreePrivacy}
                  onChange={(event) => setAgreePrivacy(event.target.checked)}
                  required
                  className="mt-0.5 size-4 shrink-0 accent-[#543119]"
                />
                <span className="font-body text-sm text-charcoal">
                  * I agree with the{" "}
                  <Link
                    href="/privacy"
                    className="text-[#543119] underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </section>

            {errorMessage ? (
              <p className="font-body text-xs text-red-600">{errorMessage}</p>
            ) : null}

            <div className="pt-2">
              <button
                type="submit"
                disabled={!agreePrivacy}
                className="inline-flex h-12 w-full items-center justify-center rounded-none bg-[#543119] px-8 font-body text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#543119]/90 disabled:cursor-not-allowed disabled:opacity-60 sm:text-xs lg:w-auto lg:min-w-[15rem]"
              >
                Make Reservation
              </button>
            </div>
          </form>
          </div>
        </div>
      ) : null}

      {roomCategory ? (
        <BookingPolicyModal
          open={policyOpen}
          onClose={() => setPolicyOpen(false)}
          roomName={
            roomCount > 1 ? "Multiple room categories" : roomCategory.name
          }
          nightlyRate={
            roomCount > 1
              ? Math.round(totalCost / Math.max(nights, 1) / roomCount)
              : getRoomCategoryNightlyRate(roomCategory).nightlyRate
          }
        />
      ) : null}
    </BookingLayout>
  );
}
