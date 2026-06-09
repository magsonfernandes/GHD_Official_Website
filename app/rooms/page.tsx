import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { RoomsContent } from "@/components/RoomsContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms | GHD Hotels",
  description:
    "Explore the Royal Studio at Nivaãra Nerul — a spacious, thoughtfully designed room with contemporary comfort, natural light, and essential amenities.",
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
