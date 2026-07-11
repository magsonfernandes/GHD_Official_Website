import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { TermsAndConditionsContent } from "@/components/TermsAndConditionsContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nivaãra by GHD Hotels",
  description:
    "Read the Nivaãra by GHD Hotels booking conditions for our Nerul, Goa property — check-in, cancellation, payment, and guest policies.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <TermsAndConditionsContent />
      </main>
      <Footer />
    </>
  );
}
