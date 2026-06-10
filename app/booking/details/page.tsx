import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { BookingDetailsContent } from "@/components/booking/BookingDetailsContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Complete Your Stay | GHD Hotels",
  description:
    "Complete your Nivaãra Nerul reservation with your contact details and send your booking request via WhatsApp.",
};

export default function BookingDetailsPage() {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <section className="bg-muted px-6 py-32 text-center lg:px-10">
              <p className="font-body text-sm text-grey">Loading booking details…</p>
            </section>
          }
        >
          <BookingDetailsContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
