import { HOTEL_CHECK_IN_TIME, HOTEL_CHECK_OUT_TIME, NIVAARA_CONTACT, RESERVATION_CONTACT, SITE } from "@/lib/constants";
import type { LegalDocument } from "@/lib/legal-document";

export const TERMS_AND_CONDITIONS: LegalDocument = {
  title: "Hotel Policy & Booking Conditions",
  summaryTitle: "GHD Hotels LLP · Nivaara Nerul, Goa",
  contactEmail: SITE.email,
  contactEmailHref: SITE.emailHref,
  website: NIVAARA_CONTACT.website,
  websiteHref: NIVAARA_CONTACT.websiteHref,
  dateLabel: "Effective",
  lastUpdated: "June 2026",
  closingNote:
    "These Terms & Conditions are effective from June 2026 and supersede all previous versions.",
  sections: [
    {
      id: "check-in-check-out",
      title: "1. Check-In & Check-Out Policy",
      callouts: [
        `Check-In: ${HOTEL_CHECK_IN_TIME}`,
        `Check-Out: ${HOTEL_CHECK_OUT_TIME}`,
      ],
      paragraphs: [],
      subsections: [
        {
          title: "Mandatory ID",
          paragraphs: ["All guests must provide:"],
          bullets: [
            "Government-approved photo ID",
            "Passport & Visa for foreign nationals",
          ],
        },
      ],
    },
    {
      id: "child-policy",
      title: "2. Child Policy",
      paragraphs: [],
      subsections: [
        {
          title: "Child below 6 years",
          paragraphs: [
            "Complimentary sharing parents bed without extra mattress.",
          ],
        },
        {
          title: "Child between 6–11 years",
          paragraphs: [
            "Charged as per contracted child rate with 1 Extra mattress.",
          ],
        },
        {
          title: "Child above 12 years",
          paragraphs: ["Treated as adult."],
        },
      ],
    },
    {
      id: "extra-bed-occupancy",
      title: "3. Extra Bed & Occupancy Policy",
      paragraphs: [
        "Standard room occupancy is a maximum of two adults per room. An extra bed or mattress may be arranged upon prior request, subject to room type and availability, at an additional charge per night.",
        "A maximum of one extra adult may be accommodated in select room categories. Please confirm occupancy requirements at the time of booking. Rooms cannot accommodate more than the permitted maximum occupancy under any circumstances.",
      ],
    },
    {
      id: "booking-procedure",
      title: "4. Booking Procedure",
      paragraphs: [],
      bullets: [
        "All reservations must be sent by email or approved booking system.",
        "Unconfirmed bookings shall not be treated as guaranteed.",
        "Voucher number and guest details are mandatory.",
        "Last-minute bookings are subject to room availability.",
      ],
      footer: `Reservation Email: ${RESERVATION_CONTACT.email}\nReservation No.: ${RESERVATION_CONTACT.phone}\n${NIVAARA_CONTACT.website}`,
    },
    {
      id: "cancellation-retention",
      title: "5. Cancellation & Retention Policy",
      paragraphs: ["Cancellation within 3 days: 100% retention."],
      bullets: [
        "Less than 72 Hours: 100% Retention",
        "No Show: 100% Retention",
        "Early Checkout: Full retention",
      ],
      footer: `All cancellation requests must be submitted in writing via email to ${RESERVATION_CONTACT.email}.`,
    },
    {
      id: "parking",
      title: "6. Parking",
      paragraphs: [
        "Secure shared parking is available in the vicinity of the property at no additional charge. Guests are advised to connect with our Front Desk team 10 to 15 minutes prior to arrival so that assistance may be arranged. All vehicles are parked at the owner's risk. GHD Hotels shall not be liable for any loss or damage to vehicles or their contents whilst on hotel premises.",
      ],
    },
    {
      id: "special-requests",
      title: "7. Special Requests",
      paragraphs: [
        "GHD Hotels endeavours to accommodate all special requests received at the time of booking, including room location preferences, pillow types, dietary requirements, and occasion arrangements. However, all special requests are subject to availability upon arrival and cannot be guaranteed. The hotel does not accept liability for the non-fulfilment of special requests.",
      ],
    },
    {
      id: "personal-belongings",
      title: "8. Personal Belongings & Liability",
      paragraphs: [
        "Guests are responsible for the safekeeping of their personal belongings, valuables, and luggage throughout their stay. GHD Hotels shall not be held liable for any loss, theft, or damage to personal property on hotel premises, including in guest rooms, public areas, and parking facilities. Guests are advised to make use of the in-room safe where available.",
      ],
    },
    {
      id: "force-majeure",
      title: "9. Force Majeure",
      paragraphs: [
        "GHD Hotels shall not be responsible or liable for any failure to perform or delay in performing any of its obligations under a booking where such failure or delay arises from events beyond the hotel's reasonable control. Such events include, but are not limited to, natural disasters, floods, storms, fire, explosions, epidemics or pandemics, acts of terrorism, civil unrest, industrial action, government orders, war, or any other circumstance constituting force majeure under applicable law.",
        "In such circumstances, each party shall bear the costs and expenses arising from the force majeure event independently. Any additional costs incurred by the guest as a result of alternative accommodation arrangements shall be borne solely by the guest.",
      ],
    },
    {
      id: "house-rules",
      title: "10. General House Rules & Conduct",
      paragraphs: [],
      bullets: [
        "Outside food, beverages, and liquor are strictly not permitted on hotel premises.",
        "GHD Hotels is committed to providing a peaceful environment for all guests. Excessive noise or conduct that disturbs other guests will not be tolerated and may result in immediate eviction without refund.",
        "The hotel operates a strict no-smoking policy in all indoor areas. Designated smoking zones, where available, are clearly indicated on the property.",
        "Pets are not permitted on the premises unless explicitly agreed in advance and in writing by GHD Hotels management.",
        "Guests are expected to treat all staff, property, and facilities with due respect. GHD Hotels reserves the right to charge for any damage caused to hotel property during a guest's stay.",
      ],
    },
    {
      id: "amendments",
      title: "11. Amendments to These Terms & Conditions",
      paragraphs: [
        `GHD Hotels LLP reserves the right to modify, amend, or update these Terms & Conditions at any time without prior notice. The most current version will be published on our website at ${NIVAARA_CONTACT.website}. Guests are encouraged to review these terms prior to every booking. Continued use of our services constitutes acceptance of any revised terms.`,
      ],
    },
    {
      id: "contact-reservations",
      title: "12. Contact & Reservations",
      paragraphs: [
        "GHD Hotels LLP",
        `Reservation Email: ${RESERVATION_CONTACT.email}`,
        `Reservation No.: ${RESERVATION_CONTACT.phone}`,
        `Website: ${NIVAARA_CONTACT.website}`,
      ],
    },
  ],
};
