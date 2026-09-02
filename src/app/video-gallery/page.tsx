import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Gallery | TravelIQ",
  description:
    "TravelIQ video gallery featuring travel guides, agent onboarding, and service highlights.",
};

const videos = [
  {
    title: "TravelIQ Overview",
    description: "A quick look at our travel services and business model.",
    badge: "Featured",
    accent: "bg-[#edf5ff]",
  },
  {
    title: "IRCTC Agent Process",
    description: "Learn how agents can begin their travel business journey with TravelIQ.",
    badge: "Agent Guide",
    accent: "bg-[#f2f4f7]",
  },
  {
    title: "Travel Booking Demo",
    description: "Overview of booking support across flight, hotel, and railway packages.",
    badge: "Demo",
    accent: "bg-[#f7f4ee]",
  },
];

export default function VideoGalleryPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fe]">
      <section className="relative overflow-hidden bg-[#edf5ff] py-12 sm:py-16">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="transition hover:text-[#10407A]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#10407A]">Video Gallery</span>
          </div>

          <div className="mx-auto max-w-4xl text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#10407A]">
              Video Gallery
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Explore TravelIQ in Motion
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-700 leading-relaxed">
              Travel IQ services can help the aspiring travel agencies to increase their business and get more clients through online promotions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.title}
                className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`relative h-52 ${video.accent}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-[#10407A] shadow-lg">
                      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">
                    {video.badge}
                  </span>
                </div>
                <div className="space-y-3 p-6">
                  <h2 className="text-xl font-bold text-slate-900">{video.title}</h2>
                  <p className="text-sm leading-relaxed text-slate-600">{video.description}</p>
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center text-sm font-semibold text-[#10407A] transition hover:text-[#0b3260]"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
