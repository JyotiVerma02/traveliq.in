import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, getBreadcrumbSchema } from "@/components/JsonLd";
import { canonicalUrl, SITE_URL, absoluteUrl } from "@/lib/site";
import { sanitizeWordPressHtml } from "@/lib/sanitize";
import { getContentBySlug } from "@/lib/local-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPage(slug: string) {
  return getContentBySlug(slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    return { title: "Page Not Found | TravelIQ", robots: { index: false, follow: false } };
  }

  const title = `${page.title.rendered.replace(/<[^>]*>/g, "")} | TravelIQ`;
  const description = page.excerpt?.rendered
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160) || "TravelIQ travel services and information.";
  const url = canonicalUrl(`/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "TravelIQ", locale: "en_IN", type: "article", publishedTime: page.date },
  };
}

export default async function LegacyWordPressPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) notFound();

  const url = canonicalUrl(`/${slug}`);
  const title = page.title.rendered.replace(/<[^>]*>/g, "");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: canonicalUrl("/") },
    { name: title, item: url },
  ]);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: page.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TravelIQ", url: SITE_URL },
    publisher: { "@type": "Organization", name: "TravelIQ", logo: { "@type": "ImageObject", url: absoluteUrl("/logo.webp") } },
  };

  return (
    <main className="min-h-screen bg-[#f6f9fe] py-8 sm:py-12">
      <JsonLd data={[breadcrumbSchema, articleSchema]} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500">
          <Link href="/" className="transition-colors hover:text-[#10407A]">Home</Link><span>/</span><span className="truncate font-semibold text-[#10407A]">{title}</span>
        </nav>
        <article className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#EE5326]">{new Date(page.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl" dangerouslySetInnerHTML={{ __html: sanitizeWordPressHtml(page.title.rendered) }} />
          <div className="wp-content mt-8 space-y-4 text-base leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: sanitizeWordPressHtml(page.content.rendered) }} />
        </article>
      </div>
    </main>
  );
}
