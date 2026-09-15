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
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://maps.google.com https://www.google.com",
      "object-src 'none'",
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

  // Keep URLs without trailing slash
  // Example: /about-travel-iq
  // NOT: /about-travel-iq/
  trailingSlash: false,

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
      {
        source: "/pay-us",
        destination: "/pay-now",
        permanent: true,
      },
      {
        source: "/payus",
        destination: "/pay-now",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/term-and-conditions",
        permanent: true,
      },
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
