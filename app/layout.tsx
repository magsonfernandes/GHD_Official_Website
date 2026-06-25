import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Archivo,
  DM_Sans,
  Inter,
  Playfair_Display,
} from "next/font/google";
import { ContactModalProvider } from "@/components/contact/ContactModalContext";
import { NIVAARA_LOGO } from "@/lib/constants";
import { MobileReserveBar } from "@/components/MobileReserveBar";
import { PageMediaGate } from "@/components/PageMediaGate";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const forum = localFont({
  src: "../fonts/Forum-Regular.ttf",
  variable: "--font-forum",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "GHD Hotels | Nivaãra Coco Beach — Luxury on Goa's Coast",
  description:
    "GHD Hotels presents Nivaãra Coco Beach — an intimate luxury retreat in Goa where timeless hospitality meets contemporary elegance.",
  keywords: [
    "GHD Hotels",
    "Nivaãra",
    "luxury hotel Goa",
    "Coco Beach Goa",
    "boutique hotel",
  ],
  openGraph: {
    title: "GHD Hotels | Nivaãra Coco Beach",
    description:
      "Luxury reimagined on Goa's coast. An intimate retreat of understated elegance.",
    type: "website",
  },
  icons: {
    icon: NIVAARA_LOGO,
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
      className={`${dmSans.variable} ${forum.variable} ${playfair.variable} ${inter.variable} ${archivoExpanded.variable}`}
    >
      <body>
        <ContactModalProvider>
          <ScrollToTop />
          <PageMediaGate>{children}</PageMediaGate>
          <MobileReserveBar />
        </ContactModalProvider>
      </body>
    </html>
  );
}
