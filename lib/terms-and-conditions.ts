import { NIVAARA_CONTACT, SITE } from "@/lib/constants";
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
      id: "identity-check-in",
      title: "1. Identity & Check-In Requirements",
      paragraphs: [
        "In keeping with our security and regulatory requirements, all guests are required to present a valid, government-issued photo identity proof at the time of check-in. Acceptable documents include:",
      ],
      bullets: [
        "Passport",
        "Aadhaar Card",
        "Driving Licence",
        "Voter ID Card",
        "PAN Card",
      ],
      footer:
        "Foreign nationals are required to present a valid Passport and Visa. Failure to produce valid identification may result in the denial of check-in without any obligation on the part of GHD Hotels to provide a refund.",
    },
    {
      id: "check-in-check-out",
      title: "2. Check-In & Check-Out Policy",
      callouts: ["CHECK IN : 2:00 PM ONWARDS", "CHECK OUT: 11:00 AM ONWARDS"],
      paragraphs: [
        "Early check-in and late check-out are subject to room availability at the time of request and may be facilitated at an additional charge. Guests requiring a guaranteed early check-in are advised to reserve the room from the previous night.",
        "Guests arriving in the early hours of the morning will be allocated rooms subject to availability. If no room is available from the previous night, an additional night charge will apply. GHD Hotels regrets that it cannot guarantee room readiness prior to the standard check-in time without a prior-night reservation.",
      ],
    },
    {
      id: "child-policy",
      title: "3. Child Policy",
      paragraphs: [],
      subsections: [
        {
          title: "Children up to 5 years",
          paragraphs: [
            "Children up to 5 years of age stay complimentary when sharing the existing bedding with parents or guardians. This applies to one child per room. No additional bedding will be provided.",
          ],
        },
        {
          title: "Children aged 6 to 12 years",
          paragraphs: [
            "Children between 6 and 12 years will be accommodated at a concessional rate and an additional mattress or rollaway bed will be provided upon request, subject to room type and availability. Charges apply per child per night and will be communicated at the time of booking.",
          ],
        },
        {
          title: "Children aged 13 years and above",
          paragraphs: [
            "Guests aged 13 years and above are considered adults and will be charged at the applicable adult rate, including an additional bed charge where applicable.",
          ],
        },
      ],
    },
    {
      id: "extra-bed-occupancy",
      title: "4. Extra Bed & Occupancy Policy",
      paragraphs: [
        "Standard room occupancy is a maximum of two adults per room. An extra bed or mattress may be arranged upon prior request, subject to room type and availability, at an additional charge per night.",
        "A maximum of one extra adult may be accommodated in select room categories. Please confirm occupancy requirements at the time of booking. Rooms cannot accommodate more than the permitted maximum occupancy under any circumstances.",
      ],
    },
    {
      id: "reservations-deposit",
      title: "5. Reservations & Deposit",
      paragraphs: [
        "All reservations made through the GHD Hotels website are confirmed upon receipt of a 50% advance deposit. The balance amount may be settled at the time of check-in or via a secure payment link sent by our reservations team.",
        "Reservations made through third-party travel platforms may require full advance payment as per the respective platform's policy. Guests are encouraged to book directly through our website or reservations team, where the best available rates are guaranteed.",
        "Deposit paid to confirm a reservation is non-refundable except as specified in the Cancellation Policy below.",
        "All rates quoted are per room per night and are subject to applicable Goods and Services Tax (GST) as per prevailing government regulations.",
        "Published tariffs are subject to change without prior notice. The rate confirmed at the time of booking will be honoured for the booked stay.",
      ],
    },
    {
      id: "cancellation-amendment",
      title: "6. Cancellation & Amendment Policy",
      paragraphs: ["Standard Cancellation Terms"],
      bullets: [
        "Cancellations made 16 days or more prior to the date of arrival: Full refund of the advance deposit.",
        "Cancellations made within 0 to 15 days prior to the date of arrival: Non-refundable. No amendments permitted.",
      ],
      subsections: [
        {
          title: "Peak Season — 19 December to 6 January",
          paragraphs: [
            "Reservations for the period from 19th December to 6th January are strictly non-refundable and non-amendable, regardless of the date of cancellation.",
          ],
        },
      ],
      footer: `All cancellation requests must be submitted in writing via email to ${SITE.email}. Cancellations communicated verbally or through third parties will not be accepted. The date of written receipt by GHD Hotels will be used to determine applicable cancellation charges.`,
    },
    {
      id: "no-show",
      title: "7. No-Show Policy",
      paragraphs: [
        "In the event that a guest fails to arrive by 11:00 AM on the day following the original check-in date without prior notification, the reservation will be treated as a No-Show and automatically cancelled. The full cost of the reservation will be charged and no refund will be applicable.",
        "Guests who anticipate a delayed arrival are requested to notify the hotel in advance by phone or email.",
      ],
    },
    {
      id: "early-departure",
      title: "8. Early Departure",
      paragraphs: [
        "If a guest chooses to check out before their confirmed departure date, the remaining nights of the reservation will be treated as a cancellation. The full cost of the entire original booking — including the nights not utilised — will be charged. No refund will be issued for unused nights.",
      ],
    },
    {
      id: "parking",
      title: "9. Parking",
      paragraphs: [
        "Secure shared parking is available in the vicinity of the property at no additional charge. Guests are advised to connect with our Front Desk team 10 to 15 minutes prior to arrival so that assistance may be arranged. All vehicles are parked at the owner's risk. GHD Hotels shall not be liable for any loss or damage to vehicles or their contents whilst on hotel premises.",
      ],
    },
    {
      id: "payment",
      title: "10. Payment Policy",
      paragraphs: [
        "GHD Hotels encourages cashless transactions and accepts the following modes of payment:",
      ],
      bullets: [
        "Credit and Debit Cards (Visa, Mastercard, RuPay)",
        "UPI Payments",
        "Direct Bank Transfer / NEFT / RTGS",
      ],
      footer:
        "Cash payments are accepted only in exceptional circumstances and at the sole discretion of the management. All outstanding balances must be settled in full prior to check-out.",
    },
    {
      id: "special-requests",
      title: "11. Special Requests",
      paragraphs: [
        "GHD Hotels endeavours to accommodate all special requests received at the time of booking, including room location preferences, pillow types, dietary requirements, and occasion arrangements. However, all special requests are subject to availability upon arrival and cannot be guaranteed. The hotel does not accept liability for the non-fulfilment of special requests.",
      ],
    },
    {
      id: "personal-belongings",
      title: "12. Personal Belongings & Liability",
      paragraphs: [
        "Guests are responsible for the safekeeping of their personal belongings, valuables, and luggage throughout their stay. GHD Hotels shall not be held liable for any loss, theft, or damage to personal property on hotel premises, including in guest rooms, public areas, and parking facilities. Guests are advised to make use of the in-room safe where available.",
      ],
    },
    {
      id: "force-majeure",
      title: "13. Force Majeure",
      paragraphs: [
        "GHD Hotels shall not be responsible or liable for any failure to perform or delay in performing any of its obligations under a booking where such failure or delay arises from events beyond the hotel's reasonable control. Such events include, but are not limited to, natural disasters, floods, storms, fire, explosions, epidemics or pandemics, acts of terrorism, civil unrest, industrial action, government orders, war, or any other circumstance constituting force majeure under applicable law.",
        "In such circumstances, each party shall bear the costs and expenses arising from the force majeure event independently. Any additional costs incurred by the guest as a result of alternative accommodation arrangements shall be borne solely by the guest.",
      ],
    },
    {
      id: "house-rules",
      title: "14. General House Rules & Conduct",
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
      title: "15. Amendments to These Terms & Conditions",
      paragraphs: [
        `GHD Hotels LLP reserves the right to modify, amend, or update these Terms & Conditions at any time without prior notice. The most current version will be published on our website at ${NIVAARA_CONTACT.website}. Guests are encouraged to review these terms prior to every booking. Continued use of our services constitutes acceptance of any revised terms.`,
      ],
    },
    {
      id: "contact-reservations",
      title: "16. Contact & Reservations",
      paragraphs: [
        "GHD Hotels LLP",
        `Email: ${SITE.email}`,
        `Website: ${NIVAARA_CONTACT.website}`,
      ],
    },
  ],
};
