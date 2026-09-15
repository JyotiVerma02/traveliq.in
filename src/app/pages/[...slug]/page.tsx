import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/lib/wordpress";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { canonicalUrl, SITE_URL, absoluteUrl } from "@/lib/site";
import { sanitizeWordPressHtml } from "@/lib/sanitize";

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
      robots: { index: false, follow: false },
    };
  }

  const cleanExcerpt = post.excerpt?.rendered
    ? post.excerpt.rendered
        .replace(/<[^>]*>/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 160)
    : "Read the latest article from TravelIQ.";

  const title = `${post.title.rendered} | TravelIQ`;
  const pageUrl = canonicalUrl(`/pages/${slug.join("/")}`);

  return {
    title,
    description: cleanExcerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description: cleanExcerpt,
      url: pageUrl,
      siteName: "TravelIQ",
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cleanExcerpt,
    },
  };
}

export default async function WordPressPostPage({ params }: PageProps) {
  const { slug } = await params;

  const postType = slug.length > 1 ? slug[0] : "posts";
  const postSlug = slug[slug.length - 1];

  const post = await getPostBySlug(postSlug, postType);

  if (!post) {
    notFound();
  }

  const pageUrl = canonicalUrl(`/pages/${slug.join("/")}`);
  const safeTitle = sanitizeWordPressHtml(post.title.rendered);
  const safeContent = sanitizeWordPressHtml(post.content.rendered);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: canonicalUrl("/") },
    { name: post.title.rendered.replace(/<[^>]*>/g, ""), item: pageUrl },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title.rendered,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Organization",
      name: "TravelIQ",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "TravelIQ",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.webp"),
      },
    },
    description: post.excerpt?.rendered
      ? post.excerpt.rendered.replace(/<[^>]*>/g, "").trim()
      : undefined,
  };

  return (
    <main className="bg-[#f6f9fe] min-h-screen py-8 sm:py-12">
      <JsonLd data={[breadcrumbSchema, articleSchema]} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
          <Link href="/" className="hover:text-[#10407A] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#10407A] font-semibold truncate max-w-[250px] sm:max-w-md">
            {post.title.rendered}
          </span>
        </nav>

        <article className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EE5326]">
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h1
            className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
            dangerouslySetInnerHTML={{
              __html: safeTitle,
            }}
          />

          <div
            className="wp-content mt-8 text-slate-700 leading-relaxed text-base space-y-4"
            dangerouslySetInnerHTML={{
              __html: safeContent,
            }}
          />

          <div className="mt-12 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-bold text-[#10407A] hover:text-[#EE5326] transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/irctc-agent-registration"
              className="inline-flex rounded-full bg-[#EE5326] px-6 py-2.5 text-xs font-bold text-white shadow hover:bg-[#D9471D] transition"
            >
              Become an IRCTC Agent
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
