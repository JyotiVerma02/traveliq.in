import React from "react";
import { absoluteUrl, canonicalUrl, SITE_URL } from "@/lib/site";
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
    url: SITE_URL,
    logo: absoluteUrl("/logo.webp"),
    foundingDate: "2014",
    description:
      "TravelIQ is the leading IRCTC Principal Service Provider and premier travel agency in India providing train ticket booking agent registration, flight, hotel, bus, and tour packages.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1004G, JMD Megapolis, Sector 48",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122018",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7835025030",
        contactType: "customer service",
        email: "support@traveliq.in",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/traveliqindia",
      "https://www.instagram.com/traveliqindia/",
      "https://www.linkedin.com/company/travel-iq-services-private-limited/",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "TravelIQ",
    description: "Your Own Travel Intelligence - IRCTC Principal Agent & Travel Services",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Travel IQ Services Private Limited",
    image: absoluteUrl("/logo.webp"),
    url: SITE_URL,
    telephone: "+91-7835025030",
    email: "support@traveliq.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1004G, JMD Megapolis, Sector 48",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122018",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "18:00",
      },
    ],
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
