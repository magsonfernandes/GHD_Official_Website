import type { Metadata } from "next";
import {
  Archivo,
  Cormorant_Garamond,
  DM_Sans,
  Inter,
  Playfair_Display,
} from "next/font/google";
import { ContactModalProvider } from "@/components/contact/ContactModalContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const archivoExpanded = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-archivo-expanded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GHD Hotels | Nivaãra Nerul — Luxury on Goa's Coast",
  description:
    "GHD Hotels presents Nivaãra Nerul — an intimate luxury retreat in Goa where timeless hospitality meets contemporary elegance.",
  keywords: [
    "GHD Hotels",
    "Nivaãra",
    "luxury hotel Goa",
    "Nerul Goa",
    "boutique hotel",
  ],
  openGraph: {
    title: "GHD Hotels | Nivaãra Nerul",
    description:
      "Luxury reimagined on Goa's coast. An intimate retreat of understated elegance.",
    type: "website",
  },
  icons: {
    icon: "/logos/Nivaãra_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} ${playfair.variable} ${inter.variable} ${archivoExpanded.variable}`}
    >
      <body>
        <ContactModalProvider>
          <ScrollToTop />
          {children}
        </ContactModalProvider>
      </body>
    </html>
  );
}
