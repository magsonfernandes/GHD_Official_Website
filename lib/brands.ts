/**
 * Public GHD Hotels brand registry.
 * Add future brands here — set `public: true` only when ready to launch.
 */

export type BrandStatus = "live" | "coming-soon";

export type Brand = {
  id: string;
  name: string;
  tagline: string;
  status: BrandStatus;
  description: string;
  shortDescription: string;
  megaMenuDescription: string;
  location?: {
    area: string;
    detail?: string;
  };
  route: string;
  exploreHref?: string;
  bookHref?: string;
  image: string;
  imageAlt: string;
  cardImage?: string;
  highlights?: readonly string[];
  /** When false, brand is excluded from public UI (e.g. unreleased brands) */
  public: boolean;
};

export const PUBLIC_BRANDS: readonly Brand[] = [
  {
    id: "nivaara",
    name: "Nivaãra",
    tagline: "Boutique hospitality in North Goa",
    status: "live",
    description:
      "A contemporary boutique stay offering comfortable spaces, warm hospitality and easy access to the beaches and attractions of North Goa.",
    shortDescription:
      "Contemporary spaces, warm hospitality and the easy rhythm of Goa.",
    megaMenuDescription:
      "A contemporary boutique stay offering comfortable spaces, warm hospitality and easy access to the beaches and attractions of North Goa.",
    location: {
      area: "Nerul, North Goa",
      detail: "Near Coco Beach",
    },
    route: "/nivaara",
    exploreHref: "/nivaara",
    bookHref: "/nivaara",
    image: "/images/nivaara/nivaara-full-building-view.webp",
    cardImage: "/images/nivaara/nivaara-rooftop-pool.png",
    imageAlt: "Nivaãra by GHD Hotels in Nerul, North Goa",
    highlights: ["SEA VIEW", "ROOFTOP POOL", "NORTH GOA"],
    public: true,
  },
  {
    id: "samraya",
    name: "Samrāya",
    tagline: "Crafted Indian hospitality",
    status: "coming-soon",
    description:
      "An upcoming GHD Hotels brand shaped by Indian artistry, cultural depth and refined hospitality — a new chapter in thoughtful stays.",
    shortDescription:
      "An upcoming hospitality brand shaped by Indian artistry, cultural depth and refined hospitality.",
    megaMenuDescription:
      "An upcoming GHD Hotels brand celebrating Indian artistry, cultural heritage and sophisticated hospitality. A new chapter is taking shape.",
    route: "/samraya",
    image: "/images/nivaara/nivaara-reception.webp",
    cardImage: "/images/nivaara/samraya-entrance.png",
    imageAlt: "Samrāya by GHD Hotels — coming soon",
    public: true,
  },
] as const;

export function getPublicBrands(): Brand[] {
  return PUBLIC_BRANDS.filter((b) => b.public);
}

export function getBrandById(id: string): Brand | undefined {
  return PUBLIC_BRANDS.find((b) => b.id === id && b.public);
}

export function getLiveBrands(): Brand[] {
  return getPublicBrands().filter((b) => b.status === "live");
}
