import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Archivo,
  DM_Sans,
  Inter,
  Playfair_Display,
} from "next/font/google";
import Script from "next/script";
import { ContactModalProvider } from "@/components/contact/ContactModalContext";
import { NIVAARA_LOGO, SEO_KEYWORDS } from "@/lib/constants";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { PageMediaGate } from "@/components/PageMediaGate";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5QLJVC3HJH";

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
  title: "Nivaãra by GHD Hotels | Luxury Boutique Hotel in Nerul, North Goa",
  description:
    "Nivaãra by GHD Hotels is a boutique luxury hotel in Nerul, North Goa — minutes from Coco Beach and a short drive from Candolim, Calangute and Baga. Enjoy a rooftop pool, private balconies, and warm Goan hospitality. Book direct for the best rates.",
  keywords: SEO_KEYWORDS,
  openGraph: {
    title: "Nivaãra by GHD Hotels | Luxury Boutique Hotel in Nerul, North Goa",
    description:
      "Boutique luxury hotel in Nerul, North Goa — minutes from Coco Beach, with rooftop pool, private balconies, and warm Goan hospitality.",
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <ContactModalProvider>
          <ScrollToTop />
          <PageMediaGate>{children}</PageMediaGate>
          <StickyBookingButton />
        </ContactModalProvider>
      </body>
    </html>
  );
}
