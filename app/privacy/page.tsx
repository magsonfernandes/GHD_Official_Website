import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Nivaãra by GHD Hotels",
  description:
    "Read the Nivaãra by GHD Hotels privacy policy covering data collection, usage, security, retention, and your rights as a guest.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
