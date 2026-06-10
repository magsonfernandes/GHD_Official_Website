import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { RoomsContent } from "@/components/RoomsContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms | GHD Hotels",
  description:
    "Explore Nivaãra Room, Mountain View Room, and Sea View Room at Nivaãra Nerul — the same thoughtfully designed space with views priced for your preference.",
};

export default function RoomsPage() {
  return (
    <>
      <Header />
      <main>
        <RoomsContent />
      </main>
      <Footer />
    </>
  );
}
