export const SITE_URL = "https://traveliq.in";

export const IS_INDEXABLE_PRODUCTION =
  process.env.VERCEL_ENV === "production";

export const OG_IMAGE_PATH = "/images/traveliq-og.webp";

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function canonicalPath(path = "/") {
  if (path === "/") return "/";
  const normalized = `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${duplicatePageDestination(normalized) ?? normalized}/`;
}

export function duplicatePageDestination(path: string): string | undefined {
  const parts = path.split("/").filter(Boolean);
  if (parts.length !== 1 && parts[0] !== "pages") return undefined;
  const slug = parts.at(-1) ?? "";

  const migratedContentTargets: Record<string, string> = {
    "rules-regulations-for-reserved-rail-e-ticketing-service-providers-psps-rsps": "/list-of-irctc-principal-service-providers",
    "rules-for-the-online-ticket-booking-for-irctc-agents": "/irctc-agent/how-to-become-irctc-agent",
    "how-to-become-irctc-authorised-travel-agent": "/irctc-agent/how-to-become-irctc-agent",
    "irctc-railway-refund-rule": "/refund-cancellation-policy",
    "rules-for-irctc-ticket-cancellation-and-refund": "/refund-cancellation-policy",
    "irctc-e-ticket-cancellation-charges-for-all-classes": "/refund-cancellation-policy",
    "revised-cancellation-change-fee": "/refund-cancellation-policy",
    "role-and-benefits-of-digital-signature-certificatedongle-in-irctc-e-ticketing": "/pages/services/digital-signature-provider-in-gurgaon",
    "irctc-train-ticket": "/pages/services/railway-reservations",
    "railway-ticket-booking": "/pages/services/railway-reservations",
    "indian-railway": "/pages/services/railway-reservations",
    "irctc-tejas-express-resumed-operations-from-7th-august-2021": "/pages/services/railway-reservations",
    "ladakh-tour-packages": "/pages/services/irctc-tour-packages",
    "book-kerala-package": "/pages/services/irctc-tour-packages",
    "what-are-the-best-places-to-holiday-in-october-2019": "/pages/services/irctc-tour-packages",
    "flight-tickets": "/pages/services/online-air-ticket-booking",
    "indigo-airlines": "/pages/services/online-air-ticket-booking",
    "online-hotel-booking": "/pages/services/online-hotel-booking",
    "train-ticket-booking": "/pages/services/railway-reservations",
    "online-air-ticket-booking": "/pages/services/online-air-ticket-booking",
  };
  if (migratedContentTargets[slug]) return migratedContentTargets[slug];

  // The legacy CMS exposed this post in both its posts and social namespaces.
  if (
    parts[0] === "pages" &&
    parts[1] === "social" &&
    slug === "if-your-irctc-user-id-is-linked-to-your-aadhaar-number-you-can-book-up-to-24-tickets-in-a-month"
  ) {
    return `/pages/${slug}`;
  }

  if (slug === "why-should-i-register-for-irctc-agent-login") {
    return "/benefits-of-irctc-agent-registration";
  }
  if (slug === "benefits-of-irctc-agent-registration" && parts[0] === "pages") {
    return "/benefits-of-irctc-agent-registration";
  }

  if (["pay-now", "pay-us", "payus"].includes(slug)) return "/pay-now";
  if (["term-and-conditions", "terms-and-conditions"].includes(slug)) return "/term-and-conditions";
  if (["about-travel-iq"].includes(slug)) return "/about-travel-iq";
  if (["contact-us"].includes(slug)) return "/contact-us";
  if (["privacy-policy"].includes(slug)) return "/privacy-policy";
  if (["refund-cancellation-policy", "railway-reservation-cancellation-policy", "cancellation-and-refund-rules-for-irctc-train"].includes(slug)) return "/refund-cancellation-policy";
  if (["services"].includes(slug)) return "/our-services";
  if (["online-air-ticket-booking"].includes(slug)) return "/pages/services/online-air-ticket-booking";
  if (["online-hotel-booking"].includes(slug)) return "/pages/services/online-hotel-booking";
  if (["bus-ticket-booking"].includes(slug)) return "/pages/services/bus-ticket-booking";
  if (["irctc-tour-packages"].includes(slug)) return "/pages/services/irctc-tour-packages";
  if (["train-ticket-booking"].includes(slug)) return "/pages/services/railway-reservations";

  const irctcAliases = [
    "irctc-plans",
    "fees-and-pricing-structure-irctc-agent",
    "irctc-agent-id-lowest-pnr-charge",
    "irctc-authorized-agent-registration-fee",
    "irctc-agent-login-registration",
    "irctc-agent-registration-online",
    "irctc-agent-signup-process",
    "csc-irctc-agent-registration",
    "irctc-agent-benefits",
    "irctc-agent-registration-form-pdf",
    "become-an-irctc-agent",
    "apply-for-irctc-agent",
    "free-irctc-agent-registration",
    "how-to-take-irctc-agent-id",
    "irctc-agent-id-activation",
    "irctc-agent-code",
    "irctc-agent-certificate",
    "irctc-agent-registration-charges",
    "irctc-travel-agent-registration-2",
  ];
  if (irctcAliases.includes(slug)) return "/irctc-agent-registration";

  return undefined;
}

export function canonicalUrl(path = "/") {
  return absoluteUrl(canonicalPath(path));
}

export const staticSitemapPaths = [
  "/",
  "/irctc-agent-registration",
  "/irctc-agent/how-to-become-irctc-agent",
  "/benefits-of-irctc-agent-registration",
  "/b2b-travel-portal",
  "/pages/if-your-irctc-user-id-is-linked-to-your-aadhaar-number-you-can-book-up-to-24-tickets-in-a-month",
  "/our-services",
  "/pages/services/railway-reservations",
  "/pages/services/irctc-domestic-packages",
  "/pages/services/irctc-tour-packages",
  "/pages/services/online-air-ticket-booking",
  "/pages/services/bus-ticket-booking",
  "/pages/services/online-hotel-booking",
  "/pages/services/digital-signature-provider-in-gurgaon",
  "/about-travel-iq",
  "/contact-us",
  "/video-gallery",
  "/privacy-policy",
  "/disclaimer-policy",
  "/refund-cancellation-policy",
  "/term-and-conditions",
  "/list-of-irctc-principal-service-providers",
] as const;
