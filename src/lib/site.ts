export const SITE_URL = "https://traveliq.in";

export const OG_IMAGE_PATH = "/images/traveliq-og.webp";

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function canonicalPath(path = "/") {
  if (path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

export function canonicalUrl(path = "/") {
  return absoluteUrl(canonicalPath(path));
}

export const staticSitemapPaths = [
  "/",
  "/irctc-agent-registration",
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
  "/pay-now",
  "/privacy-policy",
  "/refund-cancellation-policy",
  "/term-and-conditions",
] as const;
