import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { RoomsContent } from "@/components/RoomsContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooms in Nerul, Goa | Nivaãra by GHD Hotels",
  description:
    "Explore the Luxury Studio, Luxury Valley Room, and Luxury Palms Room at Nivaãra by GHD Hotels in Nerul — thoughtfully designed hotel rooms with private balconies, minutes from Coco Beach, North Goa.",
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
