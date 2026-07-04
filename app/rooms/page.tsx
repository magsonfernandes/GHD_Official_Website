import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { RoomsContent } from "@/components/RoomsContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms | GHD Hotels",
  description:
    "Explore Luxury Studio, Luxury Valley Room, and Luxury Palms Room at Nivaãra Coco Beach — thoughtfully designed spaces with views priced for your preference.",
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
