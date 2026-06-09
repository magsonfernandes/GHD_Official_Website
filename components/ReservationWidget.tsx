"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LuxurySelect } from "@/components/reservation/LuxurySelect";
import { DateRangePicker } from "@/components/reservation/DateRangePicker";
import {
  DEFAULT_GUEST_SELECTION,
  GuestRoomPicker,
  type GuestSelection,
} from "@/components/reservation/GuestRoomPicker";
import {
  reservationDividerClass,
  searchSegmentClass,
} from "@/components/reservation/fieldStyles";
import { buildBookingSearchParams } from "@/lib/booking";
import { AVAILABLE_PROPERTIES, DEFAULT_PROPERTY_ID } from "@/lib/constants";
import { cn } from "@/lib/utils";

const propertyOptions = AVAILABLE_PROPERTIES.map((p) => ({
  value: p.id,
  label: p.name,
}));

function getValidationErrors(
  property: string,
  checkIn: Date | undefined,
  checkOut: Date | undefined,
) {
  const errors: string[] = [];

  if (!property) {
    errors.push("Please select a hotel.");
  }
  if (!checkIn) {
    errors.push("Please select a check-in date.");
  }
  if (!checkOut) {
    errors.push("Please select a check-out date.");
  }

  return errors;
}

type ReservationBarProps = {
  className?: string;
  initialProperty?: string;
  initialGuests?: GuestSelection;
  initialCheckIn?: Date;
  initialCheckOut?: Date;
  onSearch?: (params: URLSearchParams) => void;
};

type ReservationFormProps = {
  property: string;
  guests: GuestSelection;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  validationErrors: string[];
  onPropertyChange: (value: string) => void;
  onGuestsChange: (value: GuestSelection) => void;
  onDatesChange: (range: {
    from: Date | undefined;
    to: Date | undefined;
  }) => void;
  onSubmit: () => void;
  onDismissErrors: () => void;
  variant?: "hero" | "booking";
};

function ReservationForm({
  property,
  guests,
  checkIn,
  checkOut,
  validationErrors,
  onPropertyChange,
  onGuestsChange,
  onDatesChange,
  onSubmit,
  onDismissErrors,
  variant = "hero",
}: ReservationFormProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "reservation-ui uppercase group/reservation relative z-20 mx-auto w-full overflow-visible transition-all duration-500 ease-out",
        isHero
          ? "bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl hover:bg-white/65 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          : "border border-border bg-white shadow-[0_12px_40px_rgba(17,17,17,0.08)]",
      )}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex h-[4.25rem] w-full min-w-0 flex-nowrap overflow-visible md:h-[5rem]"
      >
        <LuxurySelect
          placeholder="Search Hotels"
          value={property}
          options={propertyOptions}
          onChange={(value) => {
            onDismissErrors();
            onPropertyChange(value);
          }}
          variant={isHero ? "hero" : "default"}
          className="md:flex-[1.1]"
        />

        <div className={reservationDividerClass} aria-hidden />

        <DateRangePicker
          checkIn={checkIn}
          checkOut={checkOut}
          onChange={(range) => {
            onDismissErrors();
            onDatesChange(range);
          }}
          variant={isHero ? "hero" : "default"}
          className="md:flex-[1.6]"
        />

        <div className={reservationDividerClass} aria-hidden />

        <GuestRoomPicker
          value={guests}
          onChange={onGuestsChange}
          variant={isHero ? "hero" : "default"}
          className="md:flex-[1.2]"
        />

        <div className={cn(searchSegmentClass, "relative z-30 md:flex-1")}>
          {validationErrors.length > 0 ? (
            <div className="absolute bottom-[calc(100%+0.625rem)] right-0 z-[60] flex flex-col items-end">
              <div
                role="alert"
                className="w-48 rounded-none border border-border bg-white px-3 py-2.5 text-left normal-case shadow-[0_10px_28px_rgba(17,17,17,0.14)] sm:w-56"
              >
                <ul className="space-y-1">
                  {validationErrors.map((error) => (
                    <li
                      key={error}
                      className="font-body text-[0.65rem] font-normal leading-snug text-red-600 sm:text-xs"
                    >
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="-mt-px mr-6 h-2.5 w-2.5 rotate-45 border-r border-b border-border bg-white shadow-[2px_2px_4px_rgba(17,17,17,0.06)]"
                aria-hidden
              />
            </div>
          ) : null}

          <motion.button
            type="submit"
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "inline-flex h-10 shrink-0 items-center justify-center rounded-none px-5 font-body text-[0.7rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-500 ease-out sm:h-11 sm:px-6",
              isHero
                ? "bg-white text-charcoal hover:bg-white/90 group-hover/reservation:bg-charcoal group-hover/reservation:text-white group-hover/reservation:hover:bg-charcoal/90"
                : "bg-[#733E24] text-white hover:bg-[#733E24]/90",
            )}
          >
            Search
          </motion.button>
        </div>
      </form>
    </div>
  );
}

export function ReservationBar({
  className,
  initialProperty = DEFAULT_PROPERTY_ID,
  initialGuests = DEFAULT_GUEST_SELECTION,
  initialCheckIn,
  initialCheckOut,
  onSearch,
  variant = "hero",
}: ReservationBarProps & { variant?: "hero" | "booking" }) {
  const router = useRouter();
  const [property, setProperty] = useState(initialProperty);
  const [guests, setGuests] = useState<GuestSelection>(initialGuests);
  const [checkIn, setCheckIn] = useState<Date | undefined>(initialCheckIn);
  const [checkOut, setCheckOut] = useState<Date | undefined>(initialCheckOut);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  useEffect(() => {
    setProperty(initialProperty);
    setGuests(initialGuests);
    setCheckIn(initialCheckIn);
    setCheckOut(initialCheckOut);
    setValidationErrors([]);
  }, [initialProperty, initialGuests, initialCheckIn, initialCheckOut]);

  const handleSearch = () => {
    const errors = getValidationErrors(property, checkIn, checkOut);

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors([]);

    const params = buildBookingSearchParams({
      property,
      guests,
      checkIn: checkIn!,
      checkOut: checkOut!,
    });

    if (onSearch) {
      onSearch(params);
      return;
    }

    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className={className}>
      <ReservationForm
        property={property}
        guests={guests}
        checkIn={checkIn}
        checkOut={checkOut}
        validationErrors={validationErrors}
        onPropertyChange={setProperty}
        onGuestsChange={setGuests}
        onDatesChange={({ from, to }) => {
          setCheckIn(from);
          setCheckOut(to);
        }}
        onSubmit={handleSearch}
        onDismissErrors={() => setValidationErrors([])}
        variant={variant}
      />
    </div>
  );
}

export function ReservationWidget() {
  return <ReservationBar />;
}
