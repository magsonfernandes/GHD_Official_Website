import { GHD_LOGO_GOLD_EMBOSSED, SOCIAL_LINKS } from "@/lib/constants";

export const CORPORATE_PALETTE = {
  gold: "#C6A86B",
  warmWhite: "#FCFBF8",
  ivory: "#FAF7F2",
  softCream: "#F4EFE6",
  border: "#E6DDCF",
  textPrimary: "#2D2D2D",
  textSecondary: "#6F6A62",
} as const;

export const GHD_LOGO = GHD_LOGO_GOLD_EMBOSSED;

export const CORPORATE_NAV = [
  { label: "HOME", href: "/" },
  { label: "BRANDS", href: "#brands", hasMegaMenu: true },
  { label: "ABOUT GHD", href: "/about" },
  { label: "DESTINATIONS", href: "/#destinations" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const CORPORATE_HERO = {
  image: "/images/nivaara/Nivaara_Lobby_Lounge_Pic1.w1200.webp",
  imageAlt: "GHD Hotels hospitality",
} as const;

export const BRANDS_SECTION = {
  eyebrow: "Our Brands",
  headline: "Distinctive stays.\nOne hospitality philosophy.",
} as const;

export const ABOUT_GHD = {
  eyebrow: "About GHD Hotels",
  headline: "Hospitality,\nthoughtfully imagined.",
  paragraphs: [
    "At GHD Hotels, we believe the best stays are about more than where you sleep. They are about the feeling of arriving somewhere new, being welcomed warmly, and discovering a place at your own pace.",
    "Our growing collection of hospitality brands is shaped around thoughtful design, genuine service, a strong sense of place and experiences that guests remember long after they leave.",
  ],
  cta: { label: "Our Story", href: "/about" },
} as const;

export const PHILOSOPHY = {
  eyebrow: "Our Philosophy",
  headline: "One philosophy.\nEvery stay.",
  pillars: [
    {
      title: "Thoughtful Design",
      description: "Spaces created with character, comfort and purpose.",
    },
    {
      title: "Genuine Hospitality",
      description: "Warm, intuitive service that feels personal.",
    },
    {
      title: "Sense of Place",
      description: "Every property reflects the destination and culture around it.",
    },
    {
      title: "Memorable Experiences",
      description: "Creating stays guests want to remember and return to.",
    },
  ],
} as const;

export const LEADERSHIP = {
  eyebrow: "Leadership",
  headline: "The people behind GHD",
  profiles: [
    {
      role: "MD",
      name: "[Name to be added]",
      bio: "Biography to be added.",
      image: null as string | null,
    },
    {
      role: "CEO",
      name: "[Name to be added]",
      bio: "Biography to be added.",
      image: null as string | null,
    },
  ],
} as const;

export const DESTINATIONS = {
  eyebrow: "Destinations",
  headline: "Places worth staying for.",
  items: [
    {
      region: "Goa",
      brandName: "Nivaãra",
      location: "Nerul, North Goa",
      detail: "Near Coco Beach",
      image: "/images/nivaara/beach_nivaara-poster.webp",
      href: "/nivaara",
      status: "live" as const,
    },
    {
      region: "Coming Soon",
      brandName: "Samraya",
      location: null,
      detail: null,
      image: "/images/nivaara/Nivaara_Lobby_Lounge_Pic1.w1200.webp",
      href: "/samraya",
      status: "coming-soon" as const,
    },
  ],
} as const;

export const GHD_EXPERIENCE = {
  eyebrow: "The GHD Experience",
  headline: "More than a stay.",
  steps: [
    {
      title: "Arrive",
      description: "Feel welcomed from the moment you arrive.",
      image: "/images/nivaara/Nivaara_Reception_Pic1.w1200.webp",
    },
    {
      title: "Unwind",
      description: "Spaces designed to help you slow down.",
      image: "/images/nivaara/Nivaara_Room_Pic_2.w1200.webp",
    },
    {
      title: "Discover",
      description: "Experience the destination beyond your room.",
      image: "/images/experiences/Beaches/coco beach.png",
    },
    {
      title: "Return",
      description: "Leave with a reason to come back.",
      image: "/images/nivaara/Nivaara_Terrace_Pic1.w1200.webp",
    },
  ],
} as const;

export const CINEMATIC_STATEMENT = {
  line1: "We create places",
  line2: "you want to return to.",
  image: "/images/nivaara/Nivaara_Terrace_Pic2.w1200.webp",
} as const;

export const SAMRAYA_TEASER = {
  eyebrow: "Coming Soon",
  headline: "A new chapter is taking shape.",
  brand: "Samraya",
  cta: { label: "Discover Samraya", href: "/samraya" },
} as const;

export const FINAL_BOOKING_CTA = {
  headline: "Your next stay starts here.",
  subheading: "Discover Nivaãra in North Goa.",
  cta: { label: "Book Nivaãra", href: "/nivaara" },
} as const;

export const CORPORATE_FOOTER = {
  tagline: "Thoughtful stays. Genuine hospitality.",
  explore: [
    { label: "About GHD", href: "/about" },
    { label: "Destinations", href: "/#destinations" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  social: SOCIAL_LINKS,
} as const;

export const ABOUT_PAGE = {
  ...ABOUT_GHD,
  extended: [
    "GHD Hotels is a hospitality company built on the belief that every stay should feel considered — from the design of a room to the warmth of a welcome at the door.",
    "We develop and operate distinctive brands, each with its own character, while sharing a common commitment to quality, authenticity and guest care.",
    "From boutique coastal retreats to culturally inspired experiences, our portfolio is designed to grow thoughtfully — one meaningful property and one memorable stay at a time.",
  ],
  philosophy: PHILOSOPHY,
  leadership: LEADERSHIP,
} as const;

export const SAMRAYA_PAGE = {
  eyebrow: "GHD Hotels",
  brand: "Samraya",
  status: "Coming Soon",
  headline: "Crafted hospitality,\ninspired by India.",
  paragraphs: [
    "Samraya is an upcoming GHD Hotels brand shaped by Indian artistry, cultural depth and refined hospitality.",
    "Every detail is being thoughtfully considered — from design and service to the experiences that will define stays under the Samraya name.",
    "A new chapter in GHD Hotels' growing collection of distinctive hospitality brands is taking shape.",
  ],
  cta: { label: "Return to GHD Hotels", href: "/" },
} as const;
