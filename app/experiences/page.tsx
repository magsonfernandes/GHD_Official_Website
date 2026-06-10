import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ExperienceStories } from "@/components/ExperienceStories";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "City Attractions | GHD Hotels",
  description:
    "Experience Goa at its most authentic. From heritage landmarks to coastal adventures, uncover stories and city attractions waiting to be explored.",
};

export default function ExperiencesPage() {
  return (
    <>
      <Header />
      <main>
        <ExperienceStories />
        <NewsletterSignup idSuffix="-experiences" />
      </main>
      <Footer />
    </>
  );
}
