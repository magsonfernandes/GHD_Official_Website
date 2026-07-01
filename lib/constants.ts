export const PROPERTIES = [
  { id: "nivaara", name: "Nivaãra - Coco Beach, North Goa", available: true },
  { id: "celestra", name: "Celéstra", available: false },
  { id: "samraya", name: "Samrāya", available: false },
] as const;

export const BRAND_MENU = [
  {
    id: "nivaara",
    name: "Nivaãra",
    available: true,
    locations: [{ name: "Coco Beach", href: "/" }],
  },
] as const;

export const AVAILABLE_PROPERTIES = PROPERTIES.filter((p) => p.available);

export const DEFAULT_PROPERTY_ID = "nivaara";

export const ROOM_OPTIONS = [1, 2, 3, 4, 5] as const;

export const HOTEL_CHECK_IN_TIME = "1:00 PM";
export const HOTEL_CHECK_OUT_TIME = "11:00 AM";

export const MAX_ADULTS_PER_ROOM = 3;
export const MAX_CHILDREN_PER_ROOM = 2;
export const MAX_GUESTS_PER_ROOM = 4;

export const ROYAL_STUDIO_RATE = {
  basePerNight: 7499,
  gstPercent: 5,
  totalPerNight: 7873.95,
  roundedPerNight: 7500,
} as const;

export const ROYAL_STUDIO_BOOKING_POLICY = {
  rateLabel: "Standard Rate",
  checkInTime: HOTEL_CHECK_IN_TIME,
  checkOutTime: HOTEL_CHECK_OUT_TIME,
  sections: [
    {
      title: "Booking Procedure",
      body: "All reservations must be sent by email or approved booking system. Unconfirmed bookings shall not be treated as guaranteed. Voucher number and guest details are mandatory. Last-minute bookings are subject to room availability.",
    },
    {
      title: "Cancellation & Retention Policy",
      body: "Cancellation within 3 days: 100% retention. Less than 72 hours before check-in, no-show, and early checkout are subject to 100% retention.",
    },
    {
      title: "Check-in Policy",
      body: `Rooms are available from ${HOTEL_CHECK_IN_TIME}. Early check-in is subject to availability and may incur additional charges.`,
    },
    {
      title: "Check-out Policy",
      body: `Rooms must be vacated by ${HOTEL_CHECK_OUT_TIME} at the latest. Late check-out requests should be informed to the Front Desk in advance and are subject to availability.`,
    },
    {
      title: "Mandatory ID",
      body: "All guests must provide a government-approved photo ID. Passport and visa are required for foreign nationals.",
    },
    {
      title: "Children Policy",
      body: "Child below 6 years: Complimentary sharing parents bed without extra mattress. Child between 6-11 years: Charged as per contracted child rate with 1 Extra mattress. Child above 12 years: Treated as adult.",
    },
  ],
} as const;

export const ROYAL_STUDIO = {
  id: "royal-studio",
  name: "Royal Studio",
  beds: "1 King Bed",
  sleeps: 2,
  size: "517 sq. ft.",
  image: "/images/nivaara/Nivaara_Room_Pic_1.w1200.webp",
  description:
    "Designed for modern comfort, the Royal Studio at Nivaãra offers a spacious and thoughtfully curated stay experience. Featuring a king-sized bed, a functional workspace, and clean contemporary interiors, the room is ideal for both short stays and extended visits. Natural lighting, an efficient layout, and essential amenities ensure a seamless and comfortable stay.",
  amenities: [
    "Wi‑Fi",
    "Air Conditioning",
    "Smart TV",
    "Work Desk",
    "Tea/Coffee Maker",
    "Wardrobe",
    "Bathroom Amenities",
    "Fresh Linen",
    "Daily Housekeeping",
  ],
  transport: {
    airports: [
      {
        name: "Goa International Airport (Dabolim)",
        distance: "32 km",
        duration: "45–60 min",
        note: "Main airport, closer to South Goa side",
      },
      {
        name: "Manohar International Airport (Mopa)",
        distance: "30 km",
        duration: "40–50 min",
        note: "New North Goa airport (better option from Coco Beach)",
      },
    ],
    railway: [
      {
        name: "Thivim Railway Station",
        distance: "18 km",
        duration: "30–40 min",
        note: "Best station for North Goa",
      },
      {
        name: "Madgaon Railway Station",
        distance: "40 km",
        duration: "60–75 min",
        note: "Major railway hub (more trains available)",
      },
    ],
    bus: [
      {
        name: "Mapusa Bus Stand",
        distance: "9 km",
        duration: "20–25 min",
        note: "Main bus stand for North Goa routes",
      },
      {
        name: "Kadamba Bus Stand Panaji",
        distance: "7 km",
        duration: "15–20 min",
        note: "Good for city & intercity buses",
      },
    ],
  },
  travelTips: [
    { label: "Nearest Airport", value: "Mopa (faster from Coco Beach)" },
    { label: "Nearest Railway Station", value: "Thivim" },
    { label: "Nearest Bus Stand", value: "Panaji (Kadamba)" },
  ],
  gallery: [
    {
      src: "/images/nivaara/Nivaara_Room_Pic_1.w1200.webp",
      alt: "Royal Studio at Nivaãra Coco Beach",
    },
    {
      src: "/images/nivaara/Nivaara_Room_Pic_2.w1200.webp",
      alt: "Royal Studio interior at Nivaãra Coco Beach",
    },
    {
      src: "/images/nivaara/Nivaara_Room_Pic_3.w1200.webp",
      alt: "Royal Studio workspace at Nivaãra Coco Beach",
    },
    {
      src: "/images/nivaara/Nivaara_Room_Pic_4.w1200.webp",
      alt: "Royal Studio seating area at Nivaãra Coco Beach",
    },
    {
      src: "/images/nivaara/Nivaara_Washroom_Pic1.w1200.webp",
      alt: "Royal Studio bathroom at Nivaãra Coco Beach",
    },
    {
      src: "/images/nivaara/Nivaara_Room_Pic_5.w1200.webp",
      alt: "Royal Studio bedroom detail at Nivaãra Coco Beach",
    },
    {
      src: "/images/nivaara/Nivaara_Washroom_Pic2.w1200.webp",
      alt: "Royal Studio ensuite at Nivaãra Coco Beach",
    },
  ],
  duringStay: {
    timings: [
      { label: "Check-in", value: HOTEL_CHECK_IN_TIME },
      { label: "Check-out", value: HOTEL_CHECK_OUT_TIME },
      { label: "Housekeeping", value: "9:00 AM – 6:00 PM" },
      { label: "Pool", value: "9:00 AM – 8:00 PM" },
    ],
    guidelines: [
      "Deposit your room keys at Reception when going out.",
      "Switch off lights, AC, and geyser when leaving the room.",
      "Maintain silence in corridors and common areas.",
      "Room service orders may take extra time during peak hours.",
      "For any assistance, please contact Reception.",
      "Please inform the Front Desk in advance for late check-out requests.",
      "Management is not responsible for any loss of valuable belongings.",
      "Any damage to room items will be charged accordingly.",
    ],
  },
} as const;

export const NIVAARA_FULL_GALLERY = [
  {
    src: "/images/nivaara/Nivaara_Room_Pic_1.w1200.webp",
    alt: "Luxury Studio at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Room_Pic_2.w1200.webp",
    alt: "Luxury Studio interior at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Room_Pic_3.w1200.webp",
    alt: "Luxury Studio workspace at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Room_Pic_4.w1200.webp",
    alt: "Luxury Studio seating area at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Room_Pic_5.w1200.webp",
    alt: "Luxury Studio bedroom detail at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Washroom_Pic1.w1200.webp",
    alt: "Ensuite bathroom at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Washroom_Pic2.w1200.webp",
    alt: "Luxury bathroom at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Terrace_Pic1.w1200.webp",
    alt: "Private terrace at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Terrace_Pic2.w1200.webp",
    alt: "Terrace overlooking Goa at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Pool_Pic1.w1200.webp",
    alt: "Rooftop pool at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Pool_Pic2.w1200.webp",
    alt: "Poolside at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Private_Workspace_Pic1.w1200.webp",
    alt: "Private workspace at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Lobby_Lounge_Pic1.w1200.webp",
    alt: "Lobby lounge at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Reception_Pic1.w1200.webp",
    alt: "Reception at Nivaãra Coco Beach",
  },
  {
    src: "/images/nivaara/Nivaara_Full Building View_Pic1.w1200.webp",
    alt: "Nivaãra Coco Beach building view",
  },
] as const;

export const ROOM_CATEGORIES = [
  {
    id: "nivaara-room",
    name: "Luxury Studio",
    summary:
      "Offering generous space, a private balcony, and carefully considered comforts, this studio is ideal for both productive stays and relaxing escapes.",
    headline: "Thoughtfully Designed for a Comfortable Stay",
    description:
      "Designed for modern comfort, the Luxury Studio offers a spacious and well-appointed retreat for business and leisure travellers alike. Featuring a king-sized bed, private balcony, dedicated workspace, and contemporary interiors, the studio provides everything needed for a seamless stay in Goa.",
    highlights: [
      "Private Balcony",
      "King Bed",
      "Work Desk",
      "Contemporary Comfort",
    ],
    nightlyRate: 5499,
    priceLabel: "Base Rate",
    beds: "1 King Bed",
    sleeps: 2,
    sizeSqFt: 517,
    size: "517 sq. ft.",
    image: "/images/nivaara/Nivaara_Room_Pic_4.w1200.webp",
    gallery: NIVAARA_FULL_GALLERY,
  },
  {
    id: "mountain-view",
    name: "Mountain View Studio",
    summary:
      "Overlooking Goa's lush hills, this tranquil studio invites slower mornings, scenic views, and a stay connected to nature.",
    headline: "Wake Up to Goa's Green Landscape",
    description:
      "Overlooking the surrounding hills and natural greenery, the Mountain View Studio combines modern comfort with a calming outlook. Enjoy your morning coffee on the private balcony while taking in peaceful views that create a relaxed and refreshing stay experience.",
    highlights: [
      "Mountain Views",
      "Private Balcony",
      "King Bed",
      "Peaceful Surroundings",
    ],
    nightlyRate: 6499,
    priceLabel: "Premium outlook",
    beds: "1 King Bed",
    sleeps: 2,
    sizeSqFt: 517,
    size: "517 sq. ft.",
    image: "/images/nivaara/Nivaara_Room_Pic_3.w1200.webp",
    gallery: NIVAARA_FULL_GALLERY,
  },
  {
    id: "sea-view",
    name: "Sea View Studio",
    summary:
      "With views stretching towards the Arabian Sea, this studio captures the essence of Goa's coastal charm in a comfortable and elegant setting.",
    headline: "Views of the Arabian Sea from Your Balcony",
    description:
      "Offering glimpses of the Arabian Sea, the Sea View Studio brings Goa's coastal charm directly to your stay. Unwind on your private balcony, enjoy the sea breeze, and experience a studio designed for comfort with an elevated sense of place.",
    highlights: [
      "Sea Views",
      "Private Balcony",
      "King Bed",
      "Coastal Ambience",
    ],
    nightlyRate: 7499,
    priceLabel: "Best outlook",
    beds: "1 King Bed",
    sleeps: 2,
    sizeSqFt: 517,
    size: "517 sq. ft.",
    image: "/images/nivaara/Nivaara_Room_Pic_1.w1200.webp",
    gallery: NIVAARA_FULL_GALLERY,
  },
] as const;

export const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ROOMS", href: "/rooms" },
  { label: "CITY ATTRACTIONS", href: "/city-attractions" },
  { label: "FAQs", href: "/faqs" },
  { label: "CONTACT", href: "/#contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/ghd_hotels?igsh=dGF2aDRyMnN4MGpt",
  },
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/profile.php?id=61590444132512",
  },
  {
    label: "X",
    icon: "x",
    href: "https://x.com/GHD_Hotels",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/company/ghd-hotels/",
  },
  {
    label: "YouTube",
    icon: "youtube",
    href: "https://www.youtube.com/@ghdhotels",
  },
] as const;

export const HOTEL_WHATSAPP = {
  phone: "918380008687",
  display: "+91 83800 08687",
  waMeUrl: "https://wa.me/918380008687",
} as const;

export const SITE = {
  name: "GHD Hotels",
  tagline: "Luxury Hospitality. Thoughtfully Crafted.",
  property: "Nivaãra - Coco Beach, North Goa",
  propertyDisplay: "Nivaãra - Coco Beach, North Goa",
  phone: "+91 838 000 8687",
  phoneHref: "tel:+918380008687",
  whatsappHref: HOTEL_WHATSAPP.waMeUrl,
  phoneSecondary: "+91 839 002 0408",
  phoneSecondaryHref: "tel:+918390020408",
  email: "info@ghdhotels.in",
  emailHref: "mailto:info@ghdhotels.in",
  location: "Coco Beach, North Goa, India",
  locationHref: "https://maps.google.com/?q=Nivaara+Coco+Beach+Goa",
  reserveHref: "tel:+918380008687",
} as const;

export const NIVAARA_CONTACT = {
  title: "Nivaãra",
  receptionPhone: "+91 83900 20408",
  receptionPhoneHref: "tel:+918390020408",
  receptionEmail: "info.nerul@ghdhotels.in",
  receptionEmailHref: "mailto:info.nerul@ghdhotels.in",
  website: "www.ghdhotels.in",
  websiteHref: "https://www.ghdhotels.in",
  addressLines: ["Survey No. 98, Nerul, North Goa - 403114"],
} as const;

export const RESERVATION_CONTACT = {
  title: "Reservation",
  phone: "+91 838 000 8687",
  phoneHref: "tel:+918380008687",
  email: "reservation@ghdhotels.in",
  emailHref: "mailto:reservation@ghdhotels.in",
} as const;

export const GUEST_CARE_CONTACT = {
  title: "Guest Care",
  email: "care@ghdhotels.in",
  emailHref: "mailto:care@ghdhotels.in",
} as const;

export const CORPORATE_OFFICE = {
  title: "Head Office",
  addressLines: [
    "GHD Hotels LLP",
    "325, Gera Imperium Star",
    "Patto, Panjim",
    "Goa – 403001, India",
  ],
  email: SITE.email,
  emailHref: SITE.emailHref,
  phone: SITE.phone,
  phoneHref: SITE.phoneHref,
  image: "/images/nivaara/Nivaara_Reception_Pic1.w1200.webp",
  alt: "Reception at Nivaãra Coco Beach",
} as const;

export const HERO_IMAGE =
  "/images/nivaara/Nivaara_Full Building View_Pic1.w1600.webp";

export const NIVAARA_HERO_VIDEO = "/images/nivaara/Hero%20Section.mov";
export const HERO_VIDEO = NIVAARA_HERO_VIDEO;
export const HERO_VIDEO_POSTER = "/images/nivaara/nivaara-hero-poster.webp";

export const HOME_PAGE_TEXTURE = "/images/nivaara/white%20background.jpg";

export const WELCOME_IMAGE =
  "/images/nivaara/Nivaara_Room_Pic_1.w1200.webp";

export const NIVAARA_LOGO = "/logos/Nivaãra_logo.png";

export const GHD_LOGO_WHITE = "/logos/GHD Hotels LOGO - WHITE.png";

export const GHD_LOGO = "/logos/GHD Hotels LOGO - BROWN.png";

export const SIGNATURE_EXPERIENCES_VIDEO =
  "/images/nivaara/Food_nivaara.mp4";

export const POOL_EXPERIENCES_VIDEO =
  "/images/nivaara/Pool_nivaara.mp4";

export const EXPERIENCES_HERO_VIDEO =
  "/images/experiences/Timeline 1.mov";

export const EXPLORE_SPACES = [
  {
    title: "Private Workspaces",
    description:
      "Work from a peaceful, green-accented setting designed to support focus, comfort, and deep productivity.",
    href: "#accommodation",
    image: "/images/nivaara/Nivaara_Private_Workspace_Pic1.w1200.webp",
    alt: "Private workspace with window view at Nivaãra Coco Beach",
  },
  {
    title: "Panoramic Comfort",
    description:
      "Enjoy beautiful views, airy interiors, and a sense of calm that lingers throughout your stay.",
    href: "#accommodation",
    image: "/images/nivaara/Nivaara_Room_Pic_3.w1200.webp",
    alt: "Guest room with hillside view at Nivaãra Coco Beach",
  },
  {
    title: "Rooftop Pool",
    description:
      "Relax under open skies, where calm waters and stunning views create the perfect escape.",
    href: "#accommodation",
    image: "/images/nivaara/Nivaara_Pool_Pic1.w1200.webp",
    alt: "Rooftop pool at Nivaãra Coco Beach",
  },
  {
    title: "Open Dining",
    description:
      "Enjoy relaxed dining experiences in an inviting setting where fresh flavors meet warm hospitality.",
    href: "#accommodation",
    image: "/images/nivaara/Nivaara_Terrace_Pic1.w1200.webp",
    alt: "Open dining terrace at Nivaãra Coco Beach",
  },
  {
    title: "Reception & Arrival",
    description:
      "From the moment you arrive, our friendly team is dedicated to making you feel at home.",
    href: "#accommodation",
    image: "/images/nivaara/Nivaara_Reception_Desk_Pic1.w1200.webp",
    alt: "Reception desk at Nivaãra Coco Beach",
  },
  {
    title: "Lobby Lounge",
    description:
      "Settle into a comfortable space ideal for discussions, catch-ups, and quiet collaboration.",
    href: "#accommodation",
    image: "/images/nivaara/Nivaara_Lobby_Lounge_Pic1.w1200.webp",
    alt: "Lobby lounge at Nivaãra Coco Beach",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/nivaara/Nivaara_Room_Pic_2.w1200.webp",
    alt: "Elegant guest room at Nivaãra Coco Beach",
    aspect: "tall" as const,
  },
  {
    src: "/images/nivaara/Nivaara_Pool_Pic1.w1200.webp",
    alt: "Serene pool at Nivaãra Coco Beach",
    aspect: "wide" as const,
  },
  {
    src: "/images/nivaara/Nivaara_Reception_Pic1.w1200.webp",
    alt: "Reception lounge at Nivaãra Coco Beach",
    aspect: "square" as const,
  },
  {
    src: "/images/nivaara/Nivaara_Terrace_Pic1.w1200.webp",
    alt: "Terrace overlooking Goa",
    aspect: "tall" as const,
  },
  {
    src: "/images/nivaara/Nivaara_Pool_Pic2.w1200.webp",
    alt: "Poolside retreat",
    aspect: "wide" as const,
  },
  {
    src: "/images/nivaara/Nivaara_Washroom_Pic1.w1200.webp",
    alt: "Luxury bathroom suite",
    aspect: "square" as const,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "From the moment we arrived, every detail felt considered. The rooftop pool at sunset was unforgettable — we didn't want to leave.",
    name: "Priya",
    location: "Mumbai",
  },
  {
    quote:
      "A rare balance of calm and character. The rooms are beautifully appointed, and the staff anticipated our needs before we even asked.",
    name: "Arjun",
    location: "New Delhi",
  },
  {
    quote:
      "We came for a quiet weekend and found exactly that — thoughtful design, warm hospitality, and Goan flavours that felt genuinely local.",
    name: "Ananya",
    location: "Bengaluru",
  },
  {
    quote:
      "The workspace in our room made it easy to mix work and leisure. Nivaãra feels like a retreat without sacrificing comfort or connectivity.",
    name: "Vikram",
    location: "Pune",
  },
  {
    quote:
      "Our family stayed for three nights and every morning felt unhurried. The terrace dining and attentive service made it a trip to remember.",
    name: "Kavita",
    location: "Hyderabad",
  },
] as const;

export const EXPERIENCES = [
  {
    title: "Elegant Accommodations",
    description:
      "Twenty thoughtfully appointed rooms where refined materials, natural light, and serene palettes create an atmosphere of quiet indulgence.",
  },
  {
    title: "Curated Dining",
    description:
      "Seasonal flavours and intimate settings celebrate Goa's coastal heritage with contemporary finesse and impeccable presentation.",
  },
  {
    title: "Personalized Experiences",
    description:
      "From bespoke itineraries to attentive concierge service, every moment is tailored to your preferences with understated grace.",
  },
] as const;

export const EXPERIENCE_POSTS = [
  {
    slug: "beaches-of-goa",
    title: "Beaches of Goa: From Serene Shores to Vibrant Coastal Escapes",
    excerpt:
      "Explore Goa's diverse coastline, from tranquil hidden beaches and scenic sunset spots to lively shores filled with dining, water sports, and unforgettable seaside experiences.",
    category: "BEACHES",
    date: "May 3, 2026",
    readTime: "9 min read",
    image: "/images/experiences/Beaches/pexels-mohit-hambiria-92377455-28520489.jpg",
    alt: "Scenic Goan beach with lush hills and gentle waves",
  },
] as const;

export const FAQ_SECTIONS = [
  {
    title: "Location & Accessibility",
    items: [
      {
        question: "Where is Nivaãra located?",
        answer:
          "Nivaãra is located at Coco Beach, North Goa, offering convenient access to popular beaches, dining destinations, and cultural attractions while providing a peaceful retreat away from the crowds.",
      },
      {
        question: "Which are the nearest beaches to Nivaãra?",
        answer:
          "Coco Beach is the closest, at approximately 1.7 km from the property. Other popular North Goa beaches, including Sinquerim Beach and Candolim Beach, are also easily accessible from Nivaãra.",
      },
      {
        question: "How far is Nivaãra from Goa Airport?",
        answer:
          "The property is approximately 45–60 minutes from Manohar International Airport (Mopa) and 35–50 minutes from Goa International Airport (Dabolim), depending on traffic conditions.",
      },
      {
        question: "Is public transportation available nearby?",
        answer:
          "Yes. Local taxis, app-based cab services, and rental vehicles are readily available in the area.",
      },
    ],
  },
  {
    title: "Reservations & Bookings",
    items: [
      {
        question: "How can I make a reservation?",
        answer:
          "Reservations can be made directly through our website, by phone, email, or through authorized travel partners and online booking platforms.",
      },
      {
        question: "Is it better to book directly with the hotel?",
        answer:
          "Direct bookings may provide access to exclusive offers, special packages, and personalized assistance, subject to availability.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit cards, debit cards, UPI payments, bank transfers, and other approved payment methods.",
      },
      {
        question: "Will I receive a booking confirmation?",
        answer:
          "Yes. A confirmation email containing your reservation details will be sent once the booking is successfully completed.",
      },
    ],
  },
  {
    title: "Check-In & Check-Out",
    items: [
      {
        question: "What are the check-in and check-out timings?",
        bullets: [
          `Check-In: ${HOTEL_CHECK_IN_TIME}`,
          `Check-Out: ${HOTEL_CHECK_OUT_TIME}`,
        ],
      },
      {
        question: "Can I request an early check-in or late check-out?",
        answer:
          "Yes, subject to availability and applicable charges.",
      },
      {
        question: "What documents are required during check-in?",
        answer:
          "All guests must provide a government-approved photo ID. Foreign nationals must present a valid passport and visa.",
      },
    ],
  },
  {
    title: "Accommodation",
    items: [
      {
        question: "What types of accommodations are available at Nivaãra?",
        answer:
          "Nivaãra offers thoughtfully designed accommodations that combine comfort, privacy, and modern conveniences for leisure and business travelers alike.",
      },
      {
        question: "Are all rooms air-conditioned?",
        answer:
          "Yes, all accommodations are equipped with air conditioning and essential modern amenities.",
      },
      {
        question: "Is Wi-Fi available?",
        answer:
          "Complimentary high-speed Wi-Fi is available throughout the property.",
      },
      {
        question: "Are extra beds available?",
        answer:
          "Extra beds may be arranged upon request, subject to room category, availability, and additional charges.",
      },
    ],
  },
  {
    title: "Dining",
    items: [
      {
        question: "Does Nivaãra have an in-house restaurant?",
        answer:
          "Our in-house kitchen will be opening soon. In the meantime, guests can order food delivery to the property through Swiggy and Zomato.",
      },
      {
        question: "Do you offer room service?",
        answer:
          "In-house room service will be available once our kitchen opens. Until then, guests can conveniently order meals to the property via Swiggy and Zomato.",
      },
    ],
  },
  {
    title: "Facilities & Services",
    items: [
      {
        question: "Is there a swimming pool at the property?",
        answer:
          "Yes. Nivaãra features an open terrace swimming pool, offering guests a refreshing swim with scenic views. The pool is accessible during designated operating hours.",
      },
      {
        question: "Is parking available?",
        answer:
          "Complimentary parking is available for in-house guests, subject to availability.",
      },
      {
        question: "Do you provide airport transfers?",
        answer:
          "Airport transfer services can be arranged upon request at an additional charge.",
      },
      {
        question: "Is the property suitable for families?",
        answer:
          "Yes, Nivaãra welcomes families and offers a comfortable environment for guests of all ages.",
      },
    ],
  },
  {
    title: "Policies",
    items: [
      {
        question: "Is smoking allowed inside the rooms?",
        answer:
          "Yes. Smoking is allowed inside guest rooms.",
      },
      {
        question: "Are pets allowed?",
        answer:
          "Pet policies vary. Please contact the property directly before booking if you plan to travel with pets.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellations within 3 days of check-in incur 100% retention. Less than 72 hours before arrival, no-shows, and early checkouts are also subject to full retention.",
      },
      {
        question: "Can I modify my reservation after booking?",
        answer:
          "Yes, modifications may be possible subject to availability and applicable rate conditions.",
      },
    ],
  },
  {
    title: "Nearby Attractions",
    items: [
      {
        question: "What are some attractions near Nivaãra?",
        answer: "Popular nearby attractions include:",
        bullets: [
          "Candolim Beach",
          "Sinquerim Fort",
          "Aguada Fort",
          "Coco Beach",
          "Reis Magos Fort",
          "Panaji City",
          "Mandovi River Cruises",
        ],
      },
      {
        question: "Is Nivaãra suitable for exploring North Goa?",
        answer:
          "Yes. Its location at Coco Beach provides convenient access to North Goa's beaches, nightlife, dining destinations, and cultural landmarks.",
      },
    ],
  },
] as const;

export const HIGHLIGHTS = [
  {
    icon: "bed" as const,
    value: "20",
    label: "Luxury Rooms",
  },
  {
    icon: "waves" as const,
    value: "Beach",
    label: "Proximity",
  },
  {
    icon: "concierge" as const,
    value: "Personal",
    label: "Service",
  },
  {
    icon: "sparkles" as const,
    value: "Curated",
    label: "City Attractions",
  },
] as const;
