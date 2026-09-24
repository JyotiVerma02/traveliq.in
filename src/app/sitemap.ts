import type { MetadataRoute } from "next";
import { canonicalPath, canonicalUrl, staticSitemapPaths } from "@/lib/site";

const staticRouteMeta: Record<
  string,
  Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">
> = {
  "/": { changeFrequency: "daily", priority: 1.0 },
  "/irctc-agent-registration": { changeFrequency: "weekly", priority: 0.9 },
  "/our-services": { changeFrequency: "weekly", priority: 0.9 },
  "/pages/services/railway-reservations": {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/pages/services/irctc-domestic-packages": {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/pages/services/irctc-tour-packages": {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/pages/services/online-air-ticket-booking": {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/pages/services/bus-ticket-booking": {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/pages/services/online-hotel-booking": {
    changeFrequency: "weekly",
    priority: 0.9,
  },
  "/pages/services/digital-signature-provider-in-gurgaon": {
    changeFrequency: "weekly",
    priority: 0.8,
  },
  "/about-travel-iq": { changeFrequency: "monthly", priority: 0.8 },
  "/contact-us": { changeFrequency: "monthly", priority: 0.8 },
  "/video-gallery": { changeFrequency: "weekly", priority: 0.8 },
  "/pay-now": { changeFrequency: "monthly", priority: 0.7 },
  "/privacy-policy": { changeFrequency: "yearly", priority: 0.3 },
  "/refund-cancellation-policy": { changeFrequency: "yearly", priority: 0.3 },
  "/term-and-conditions": { changeFrequency: "yearly", priority: 0.3 },
  "/list-of-irctc-principal-service-providers": {
    changeFrequency: "weekly",
    priority: 0.8,
  },
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // The old URL inventory is retained in all-urls.json for the migration.
  // Only implemented frontend pages belong in the current sitemap.
  const paths = [...new Set(staticSitemapPaths.map(canonicalPath))];

  return paths.map((path) => ({
    url: canonicalUrl(path),
    ...(staticRouteMeta[path.replace(/\/$/, "") || "/"] ?? {
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }),
  }));
}
