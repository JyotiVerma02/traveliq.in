import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/wordpress";
import { SITE_URL, canonicalUrl, staticSitemapPaths } from "@/lib/site";

const staticRouteMeta: Record<
  (typeof staticSitemapPaths)[number],
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
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = staticSitemapPaths.map((path) => ({
    url: canonicalUrl(path),
    ...staticRouteMeta[path],
  }));

  // Fetch dynamic WP post URLs safely
  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPosts("posts");
    postRoutes = posts.map((post) => ({
      url: `${SITE_URL}/pages/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching WordPress posts for sitemap:", error);
  }

  return [...staticRoutes, ...postRoutes];
}
