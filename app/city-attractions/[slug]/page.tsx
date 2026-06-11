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
    return { title: "City Attraction | GHD Hotels" };
  }

  return {
    title: `${post.title} | GHD Hotels`,
    description: post.excerpt,
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
