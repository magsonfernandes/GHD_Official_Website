import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { FaqContent } from "@/components/FaqContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQs | GHD Hotels",
  description:
    "Find answers to common questions about Nivaãra Nerul — location, reservations, check-in, amenities, dining, policies, and nearby attractions.",
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main>
        <FaqContent />
      </main>
      <Footer />
    </>
  );
}
