import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ExperienceBlogPost } from "@/components/ExperienceBlogPost";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";
import {
  getAllExperienceSlugs,
  getExperiencePost,
} from "@/lib/experiences";

type ExperienceBlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllExperienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ExperienceBlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getExperiencePost(slug);

  if (!post) {
    return { title: "City Attraction | Nivaãra by GHD Hotels" };
  }

  return {
    title: post.slug === "beaches-of-goa"
      ? "Best Beaches Near Nerul, Goa | Nivaãra by GHD Hotels"
      : `${post.title} | Nivaãra by GHD Hotels`,
    description:
      post.slug === "beaches-of-goa"
        ? "A guide to the best beaches near Nerul and Coco Beach — from peaceful Coco Beach and historic Sinquerim to lively Baga and Calangute — plus tips on which beach suits your trip."
        : post.excerpt,
  };
}

export default async function ExperienceBlogPage({
  params,
}: ExperienceBlogPageProps) {
  const { slug } = await params;
  const post = getExperiencePost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ExperienceBlogPost post={post} />
        <NewsletterSignup idSuffix={`-experience-${post.slug}`} />
      </main>
      <Footer />
    </>
  );
}
