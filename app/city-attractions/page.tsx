import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ExperienceStories } from "@/components/ExperienceStories";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Things to Do Near Nerul, Goa | Nivaãra by GHD Hotels",
  description:
    "Discover North Goa's best attractions near Nivaãra by GHD Hotels in Nerul — heritage landmarks, coastal adventures, and the beaches around Coco Beach, all within easy reach.",
};

export default function ExperiencesPage() {
  return (
    <>
      <Header />
      <main>
        <ExperienceStories />
        <NewsletterSignup idSuffix="-city-attractions" />
      </main>
      <Footer />
    </>
  );
}
