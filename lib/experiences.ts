import { EXPERIENCE_POSTS } from "@/lib/constants";

export type ExperiencePost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string | null;
  alt: string;
};

export function getAllExperiencePosts(): ExperiencePost[] {
  return [...EXPERIENCE_POSTS];
}

export function getExperiencePost(slug: string): ExperiencePost | undefined {
  return EXPERIENCE_POSTS.find((post) => post.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return EXPERIENCE_POSTS.map((post) => post.slug);
}
