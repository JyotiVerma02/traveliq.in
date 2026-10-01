import type { Metadata } from "next";
import {
  absoluteUrl,
  canonicalUrl,
  IS_INDEXABLE_PRODUCTION,
  OG_IMAGE_PATH,
} from "@/lib/site";

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

export function createMetadata({
  title,
  description,
  path,
  image = OG_IMAGE_PATH,
  noIndex = false,
  type = "website",
}: MetadataInput): Metadata {
  const url = canonicalUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: !noIndex && IS_INDEXABLE_PRODUCTION, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "TravelIQ",
      locale: "en_IN",
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "TravelIQ" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}
