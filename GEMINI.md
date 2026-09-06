# Project Architecture & Standards

## Stack Specifications
- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS + Custom Dark Theme Tokens
- **Icons**: Lucide React (Clean 1.5px/2.0px vector outlines only)
- **Edge Deployment**: OpenNext + Cloudflare Workers (`wrangler.json`)

## Global Standards
- **Form Accessibility**: All interactive inputs must maintain unique `id`, `name`, and explicit `autoComplete` attributes.
- **Section Navigation**: Main sections enforce explicit section `id`s (`hero`, `services`, `why-us`, `athletes`, `quiz`, `body-map`, `process`, `faq`).
- **Cloudflare Edge Security**: Synchronized CSP headers in `public/_headers`.
