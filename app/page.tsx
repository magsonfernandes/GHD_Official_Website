import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GhdGroupIntro } from "@/components/GhdGroupIntro";
import { ExploreNivaara } from "@/components/ExploreNivaara";
import { ArrivalQuote } from "@/components/ArrivalQuote";
import { Experiences } from "@/components/Experiences";
import { GoanFlavoursDuplicate } from "@/components/GoanFlavoursDuplicate";
import { Testimonials } from "@/components/Testimonials";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GhdGroupIntro />
        <ExploreNivaara />
        <Experiences />
        <ArrivalQuote />
        <GoanFlavoursDuplicate />
        <Testimonials />
        <NewsletterSignup idSuffix="-home" />
      </main>
      <Footer />
    </>
  );
}
