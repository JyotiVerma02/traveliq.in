import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wordpress";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const postType = slug.length > 1 ? slug[0] : "posts";
  const postSlug = slug[slug.length - 1];

  const post = await getPostBySlug(postSlug, postType);

  if (!post) {
    return {
      title: "Page Not Found | TravelIQ",
    };
  }

  const description = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  const title = `${post.title.rendered} | TravelIQ`;

  const canonicalUrl = `https://traveliq.in/pages/${slug.join("/")}/`;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "TravelIQ",
      type: "article",
    },
  };
}

export default async function WordPressPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const postType = slug.length > 1 ? slug[0] : "posts";
  const postSlug = slug[slug.length - 1];

  const post = await getPostBySlug(postSlug, postType);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString("en-IN")}
        </p>

        <h1
          className="mt-3 text-4xl font-bold leading-tight text-gray-900"
          dangerouslySetInnerHTML={{
            __html: post.title.rendered,
          }}
        />

        <div
          className="wp-content mt-10"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        />
      </article>
    </main>
  );
}