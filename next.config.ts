import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://traveliq.in https://images.unsplash.com https://i.ytimg.com",
      "font-src 'self' data:",
      `connect-src 'self' https://traveliq.in${isDevelopment ? " ws: wss:" : ""}`,
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://maps.google.com https://www.google.com",
      "object-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },

  // Prevent clickjacking
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  // Prevent MIME sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // Isolate browsing context group
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },

  // Control referrer information
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // Disable browser features that are not used
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Enable React Compiler
  reactCompiler: true,

  // Hide "X-Powered-By: Next.js"
  poweredByHeader: false,

  // Preserve the trailing-slash format used by the original sitemap.
  trailingSlash: true,

  /**
   * Experimental optimizations
   */
  experimental: {
    // Optimize/split CSS
    optimizeCss: true,

    // Optimize imports from large packages
    optimizePackageImports: ["lucide-react"],
  },

  /**
   * Permanent redirects for old/duplicate URLs
   */
  async redirects() {
    return [
      // Payment aliases
      { source: "/pay-us", destination: "/pay-now/", permanent: true },
      { source: "/payus", destination: "/pay-now/", permanent: true },
      { source: "/pages/pay-now", destination: "/pay-now/", permanent: true },
      { source: "/pages/pay-us", destination: "/pay-now/", permanent: true },
      { source: "/pages/payus", destination: "/pay-now/", permanent: true },

      // Terms & Conditions aliases
      { source: "/terms-and-conditions", destination: "/term-and-conditions/", permanent: true },
      { source: "/pages/terms-and-conditions", destination: "/term-and-conditions/", permanent: true },
      { source: "/pages/term-and-conditions", destination: "/term-and-conditions/", permanent: true },

      // Core info page aliases
      { source: "/pages/about-travel-iq", destination: "/about-travel-iq/", permanent: true },
      { source: "/pages/contact-us", destination: "/contact-us/", permanent: true },
      { source: "/pages/privacy-policy", destination: "/privacy-policy/", permanent: true },
      { source: "/pages/refund-cancellation-policy", destination: "/refund-cancellation-policy/", permanent: true },
      { source: "/pages/services", destination: "/our-services/", permanent: true },

      // Service landing page aliases
      { source: "/online-air-ticket-booking", destination: "/pages/services/online-air-ticket-booking/", permanent: true },
      { source: "/online-hotel-booking", destination: "/pages/services/online-hotel-booking/", permanent: true },
      { source: "/bus-ticket-booking", destination: "/pages/services/bus-ticket-booking/", permanent: true },
      { source: "/irctc-tour-packages", destination: "/pages/services/irctc-tour-packages/", permanent: true },
      { source: "/train-ticket-booking", destination: "/pages/services/railway-reservations/", permanent: true },

      // Refund & Cancellation rules aliases
      { source: "/railway-reservation-cancellation-policy", destination: "/refund-cancellation-policy/", permanent: true },
      { source: "/cancellation-and-refund-rules-for-irctc-train", destination: "/refund-cancellation-policy/", permanent: true },

      // IRCTC Registration landing page aliases
      { source: "/pages/why-should-i-register-for-irctc-agent-login", destination: "/benefits-of-irctc-agent-registration/", permanent: true },
      { source: "/irctc-plans", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/why-should-i-register-for-irctc-agent-login", destination: "/benefits-of-irctc-agent-registration/", permanent: true },
      { source: "/fees-and-pricing-structure-irctc-agent", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-id-lowest-pnr-charge", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-authorized-agent-registration-fee", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-login-registration", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-registration-online", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-signup-process", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/csc-irctc-agent-registration", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-benefits", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-registration-form-pdf", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/become-an-irctc-agent", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/apply-for-irctc-agent", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/free-irctc-agent-registration", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/how-to-take-irctc-agent-id", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-id-activation", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-code", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-certificate", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-agent-registration-charges", destination: "/irctc-agent-registration/", permanent: true },
      { source: "/irctc-travel-agent-registration-2", destination: "/irctc-agent-registration/", permanent: true },
    ];
  },

  /**
   * Security + caching headers
   */
  async headers() {
    const headers = [
      // Security headers for all routes
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];

    if (!isDevelopment) {
      headers.push({
        source: "/:path*.(jpg|jpeg|png|webp|avif|mp4|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      });
    }

    return headers;
  },

  /**
   * Next.js Image Optimization
   */
  images: {
    // IMPORTANT:
    // These are the quality values currently used by your images:
    //
    // Hero/default images: quality={75}
    // Staff image: quality={70}
    // Other/default images: quality={75}
    //
    // This removes:
    // "next-image-unconfigured-qualities" warnings.
    qualities: [65, 70, 75],

    // Generate modern image formats
    formats: ["image/avif", "image/webp"],

    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,

    // Responsive image widths
    deviceSizes: [
      360,
      480,
      640,
      750,
      828,
      1080,
      1200,
      1920,
    ],

    // Sizes for smaller images/icons/thumbnails
    imageSizes: [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384,
    ],

    // Allowed external image sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "traveliq.in",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
