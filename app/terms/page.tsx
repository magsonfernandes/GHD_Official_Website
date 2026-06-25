import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { TermsAndConditionsContent } from "@/components/TermsAndConditionsContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | GHD Hotels",
  description:
    "Read the GHD Hotels hotel policy and booking conditions for Nivaara Coco Beach, Goa — check-in, cancellation, payment, and guest policies.",
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
