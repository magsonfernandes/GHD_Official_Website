import { EXPERIENCE_POSTS } from "@/lib/constants";

export type ExperiencePost = (typeof EXPERIENCE_POSTS)[number];

export function getAllExperiencePosts(): ExperiencePost[] {
  return [...EXPERIENCE_POSTS];
}

export function getExperiencePost(slug: string): ExperiencePost | undefined {
  return EXPERIENCE_POSTS.find((post) => post.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return EXPERIENCE_POSTS.map((post) => post.slug);
}
