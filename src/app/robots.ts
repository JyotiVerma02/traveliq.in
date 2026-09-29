import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { IS_INDEXABLE_PRODUCTION, SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  const hostname = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();
  const isCanonicalHost = hostname === "traveliq.in";
  const isIndexableHost = IS_INDEXABLE_PRODUCTION && isCanonicalHost;

  return {
    rules: [
      {
        userAgent: "*",
        ...(isIndexableHost
          ? { allow: "/", disallow: ["/api/", "/admin/", "/signup/", "/login/"] }
          : { disallow: "/" }),
      },
    ],
    ...(isIndexableHost ? { sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL } : {}),
  };
}
