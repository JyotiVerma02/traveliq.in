import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wordpress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <>
      <Header />
      <main className="bg-[#f6f9fe] min-h-screen py-12">
        <article className="mx-auto max-w-5xl px-6 py-12 bg-white rounded-3xl border border-sky-100 shadow-sm">
          <p className="text-sm font-semibold text-[#1685e8]">
            {new Date(post.date).toLocaleDateString("en-IN")}
          </p>

          <h1
            className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl"
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />

          <div
            className="wp-content mt-8 text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}