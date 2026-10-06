import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * CSP note: this site is fully statically rendered, so a nonce-based CSP is not
 * an option (nonces force dynamic rendering). We therefore allow 'unsafe-inline'
 * for scripts — required by Next's inline hydration bootstrap, the inline
 * gtag loader, and the JSON-LD blocks — and lock everything else down with an
 * explicit host allowlist. See "Corrections to the brief" for the trade-off.
 */
const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com",
  "frame-src https://td.doubleclick.net https://www.googletagmanager.com",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Canonical host: redirect the apex domain to www so there is only one host.
  // (Also configure this in Vercel → Project → Domains as a safety net.)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bayguardfireprotection.com" }],
        destination: "https://www.bayguardfireprotection.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
