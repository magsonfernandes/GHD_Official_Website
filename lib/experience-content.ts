/**
 * Full blog body copy keyed by experience slug.
 * Add paragraph strings here as content is provided.
 */
export const EXPERIENCE_BLOG_CONTENT: Record<string, readonly string[]> = {
  "beaches-of-goa": [],
};

export function getExperienceBlogContent(slug: string): readonly string[] {
  return EXPERIENCE_BLOG_CONTENT[slug] ?? [];
}
