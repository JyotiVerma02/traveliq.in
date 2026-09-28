import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  const hostname = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();
  const isProductionHost = hostname === "traveliq.in" || hostname === "www.traveliq.in";

  return {
    rules: [
      {
        userAgent: "*",
        ...(isProductionHost
          ? { allow: "/", disallow: ["/api/", "/admin/", "/signup/", "/login/"] }
          : { disallow: "/" }),
      },
    ],
    ...(isProductionHost ? { sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL } : {}),
  };
}
