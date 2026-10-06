# Bay Guard Fire Protection

Marketing site for Bay Guard Fire Protection — a licensed fire protection
company serving the San Francisco Bay Area.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first config in `src/app/globals.css`)
- **EmailJS** for the contact form (swap-in point for Resend later)
- **Vercel Analytics + Speed Insights** and **Google Ads** (gtag)
- Deployed on **Vercel**

Every page is statically rendered (`○ Static` / `● SSG` in `next build`).

## Scripts

```bash
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/                 # routes, metadata, robots, sitemap, manifest, OG images
    services/[service] # 4 statically-generated service pages
  components/
    site/              # Navbar, Footer, Banner, Marquee, Reveal, Analytics
    sections/          # Hero, WhyChooseUs, CTA, FAQ, ContactForm, PageHeader
    ui/                # Button, Container, Eyebrow, SectionHeading, icons
  content/
    site.ts            # single source of truth for site-wide constants
    content.ts         # all page copy + image references (typed)
  lib/
    seo.ts             # metadata helper + JSON-LD @graph builder
    og.tsx             # shared 1200×630 social card
  assets/              # optimized .webp imagery (static imports)
```

## Configuration

- **Domain / URLs** — `src/content/site.ts` (`SITE.url`). All absolute URLs
  derive from it; `metadataBase` is set once in `src/app/layout.tsx`.
- **Google Search Console** — set `GOOGLE_SITE_VERIFICATION` in the environment
  to emit the verification meta tag.
- **Contact form** — EmailJS credentials live in `SITE.emailjs`. To move to
  Resend, replace the `sendForm` call in `src/components/sections/ContactForm.tsx`
  with a POST to a route handler; the markup stays the same.
- **Canonical host** — the apex domain 301-redirects to `www` via
  `next.config.ts` (also set this in Vercel → Domains).
