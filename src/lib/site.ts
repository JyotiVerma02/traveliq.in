export const SITE_URL = "https://traveliq.in";

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
  "/benefits-of-irctc-agent-registration",
  "/signup/registration_form/irctc-agent-registration",
  "/signup/registration_form/irctc-agent-registration-details",
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
  "/disclaimer-policy",
  "/refund-cancellation-policy",
  "/term-and-conditions",
  "/list-of-irctc-principal-service-providers",
] as const;
