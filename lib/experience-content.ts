/**
 * Full blog body copy keyed by experience slug.
 * Add paragraph strings here as content is provided.
 */
export const EXPERIENCE_BLOG_CONTENT: Record<string, readonly string[]> = {
  "beaches-of-goa": [],
  "remote-work-in-goa": [],
  "kayaking-adventures": [],
  "goan-culinary-journey": [],
  "cashew-heritage-festivals": [],
};

export function getExperienceBlogContent(slug: string): readonly string[] {
  return EXPERIENCE_BLOG_CONTENT[slug] ?? [];
}
