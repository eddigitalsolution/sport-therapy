# Project Standards — REMK Sports Therapy

## UI/UX & Design
- Use Tailwind CSS utility classes; custom tokens via `tailwind.config.ts`
- Framer Motion for animations (no `unsafe-eval` required)
- Lucide React for icons: clean 1.5px/2.0px vector outlines only — no 3D/glossy/clipart icons
- Google Fonts via `next/font` (Inter or similar)

## React 19 + TypeScript
- All components: functional with TypeScript strict mode
- Server Components by default; use `"use client"` only when needed
- Next.js 15 App Router patterns enforced

## Form Accessibility
- All `<input>`, `<select>`, `<textarea>` must have:
  - Unique `id` attribute
  - Matching `name` attribute
  - Explicit `autoComplete` attribute (e.g. `autoComplete="email"`)

## Section Navigation IDs
- Main page sections must use these exact `id` attributes:
  `hero`, `services`, `why-us`, `athletes`, `quiz`, `body-map`, `process`, `faq`

## Navbar Standards
- Links: clean, concise, uppercase — no brackets, no long phrases
- Single-line layout with `whitespace-nowrap` and `gap-6` to `gap-8`
- Mobile: responsive drawer (`md:hidden`)

## CSP & Security Headers
- CSP enforced via `public/_headers` for Cloudflare edge
- No `unsafe-eval` in production

## Build & Deploy
- Build command: `npx @opennextjs/cloudflare`
- Output: `.open-next/assets`
- Deploy: `wrangler deploy`
- Node version: 20
