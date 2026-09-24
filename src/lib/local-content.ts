// Local content for the legacy page templates. Add migrated content here
// while the project is frontend-only; no network requests are made.
export interface LocalContent {
  id: number;
  slug: string;
  date: string;
  type: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
}

export const localContent: LocalContent[] = [];

export function getPostBySlug(slug: string, postType = "posts") {
  return localContent.find((page) => page.slug === slug && page.type === postType) ?? null;
}

export function getContentBySlug(slug: string) {
  return localContent.find((page) => page.slug === slug) ?? null;
}
