const WORDPRESS_API = "https://traveliq.in/wp-json/wp/v2";

export interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  type: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  featured_media?: number;
}

const POST_TYPES = [
  "posts",
  "social",
  "services",
  "packages",
  "irctc",
  "irctc-principal-agen",
  "all-testing",
] as const;

export async function getPosts(
  postType: (typeof POST_TYPES)[number] = "posts"
): Promise<WordPressPost[]> {
  const response = await fetch(`${WORDPRESS_API}/${postType}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export async function getPostBySlug(
  slug: string,
  postType: string = "posts"
): Promise<WordPressPost | null> {
  const safePostType = POST_TYPES.includes(postType as (typeof POST_TYPES)[number])
    ? postType
    : "posts";

  try {
    const response = await fetch(
      `${WORDPRESS_API}/${safePostType}?slug=${encodeURIComponent(slug)}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const posts: WordPressPost[] = await response.json();

    return Array.isArray(posts) && posts.length > 0 ? posts[0] : null;
  } catch {
    return null;
  }
}