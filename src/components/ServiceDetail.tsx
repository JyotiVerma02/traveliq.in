import Link from "next/link";
import Image from "next/image";
import { JsonLd, getBreadcrumbSchema, getServiceSchema } from "@/components/JsonLd";
import { canonicalUrl } from "@/lib/site";

type ServiceDetailProps = {
  title: string;
  slug: string;
  intro: string;
  sections: { heading: string; body: string }[];
  image?: string;
  imageAlt?: string;
};

export default function ServiceDetail({
  title,
  slug,
  intro,
  sections,
  image,
  imageAlt,
}: ServiceDetailProps) {
  const pageUrl = canonicalUrl(`/pages/services/${slug}`);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: canonicalUrl("/") },
    { name: "Services", item: canonicalUrl("/our-services") },
    { name: title, item: pageUrl },
  ]);

  const serviceSchema = getServiceSchema(title, intro, pageUrl, image);

  return (
    <main className="min-h-screen bg-[#f6f9fe]">
      <JsonLd data={[breadcrumbSchema, serviceSchema]} />

      <section className="bg-[#edf5ff] py-12 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
            <Link href="/" className="hover:text-[#10407A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/our-services" className="hover:text-[#10407A] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#10407A] font-semibold">{title}</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      {image && (
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-6 mb-6">
          <div className="relative w-full overflow-hidden rounded-xl shadow-md" style={{ aspectRatio: "16/7" }}>
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
        </div>
      )}

      <section className="py-10 sm:py-16">
        <div className="container mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <article key={section.heading} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-[#10407A]">{section.heading}</h2>
              <p className="mt-3 whitespace-pre-line text-base leading-8 text-slate-700">{section.body}</p>
            </article>
          ))}
          <div className="pt-4 text-center">
            <Link
              href="/irctc-agent-registration"
              className="inline-flex rounded-full bg-[#EE5326] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#D9471D] transition-transform hover:-translate-y-0.5"
            >
              Become an IRCTC Agent Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
