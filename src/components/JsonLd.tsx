import React from "react";
import {
  absoluteUrl,
  canonicalUrl,
  CONTACT_PHONE,
  SITE_URL,
} from "@/lib/site";
import { escapeJsonLd } from "@/lib/sanitize";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue | undefined };

export function JsonLd({ data }: { data: JsonValue | JsonValue[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeJsonLd(data) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "TravelIQ",
    legalName: "Travel IQ Services Private Limited",
    url: new URL(canonicalUrl("/")).toString(),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.webp"),
    },
    foundingDate: "2014",
    description:
      "TravelIQ provides railway and IRCTC-related services, flight booking, hotel booking, bus booking, tour and holiday services, IRCTC agent registration and B2B travel solutions for travel professionals.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1004G, JMD Megapolis, Sector 48",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122018",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE,
      contactType: "customer support",
      email: "support@traveliq.in",
      areaServed: "IN",
    },
    sameAs: [
      "https://www.facebook.com/traveliqindia",
      "https://www.instagram.com/traveliqindia/",
      "https://www.linkedin.com/company/traveliq/",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: new URL(canonicalUrl("/")).toString(),
    name: "TravelIQ",
    inLanguage: "en-IN",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function getServiceSchema(
  name: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: /^https?:\/\//i.test(url) ? url : canonicalUrl(url),
    image: image ? absoluteUrl(image) : undefined,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}
