import React from "react";

export function JsonLd({ data }: { data: Record<string, any> | Record<string, any>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://traveliq.in/#organization",
    name: "TravelIQ",
    legalName: "Travel IQ Services Private Limited",
    url: "https://traveliq.in",
    logo: "https://traveliq.in/logo.webp",
    foundingDate: "2014",
    description:
      "TravelIQ is the leading IRCTC Principal Service Provider and IATA accredited travel agency in India providing train ticket booking agent registration, flight, hotel, bus, and tour packages.",
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
    "@id": "https://traveliq.in/#website",
    url: "https://traveliq.in",
    name: "TravelIQ",
    description: "Your Own Travel Intelligence - IRCTC Principal Agent & Travel Services",
    publisher: {
      "@id": "https://traveliq.in/#organization",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://traveliq.in/#localbusiness",
    name: "Travel IQ Services Private Limited",
    image: "https://traveliq.in/logo.webp",
    url: "https://traveliq.in",
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
    url,
    image: image ? `https://traveliq.in${image}` : undefined,
    provider: {
      "@id": "https://traveliq.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}
