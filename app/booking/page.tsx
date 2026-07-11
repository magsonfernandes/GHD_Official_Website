import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { BookingContent } from "@/components/booking/BookingContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Choose Your Room | Nivaãra by GHD Hotels",
  description:
    "Select your room category at Nivaãra by GHD Hotels in Nerul, North Goa and continue to complete your stay.",
};

export default function BookingPage() {
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
          <BookingContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
