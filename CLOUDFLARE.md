# Cloudflare Pages & Workers Deployment Standard

This repository follows the global Cloudflare setup standard to avoid Content Security Policy (CSP) mismatches, missing security headers, static asset routing failures, and SPA 404 routing errors.

## Quick Summary

1. **Security Headers (`public/_headers`)**:
   - Manages CSP headers (`default-src 'self' https: data: blob: 'unsafe-inline'`), `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy`.
2. **Meta Tag CSP (`index.html` / `layout.tsx`)**:
   - Keeps local browser CSP aligned with Cloudflare edge headers.
3. **SPA Routing (`wrangler.jsonc`)**:
   - Configured with native `"not_found_handling": "single-page-application"` in `wrangler.jsonc`.
4. **Form Input Autocomplete**:
   - Explicit `autoComplete` tags on all interactive inputs to satisfy browser security and accessibility requirements.
5. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Deploy Command: `npx wrangler deploy`

---

## Deployment Rejection Pitfalls & Solutions

| # | Pitfall / Rejection Cause | Root Cause | Project Safeguard |
|---|---|---|---|
| 1 | **Output Directory Mismatch** | Next.js defaults `output: "export"` to `./out`, but Cloudflare looks for `./dist`. | `distDir: "dist"` in `next.config.ts` matches `directory: "./dist"` in `wrangler.jsonc`. |
| 2 | **Static Export vs SSR Runtime Conflict** | Attempting Next.js server runtime calls without OpenNext, or setting `output: "export"` on OpenNext worker builds. | Static HTML export configured via `next.config.ts` with `unoptimized: true` images for edge static asset hosting. |
| 3 | **Image Optimization Crash** | `<Image />` component trying to invoke server-side image optimizer in static export mode. | `images: { unoptimized: true }` set in `next.config.ts`. |
| 4 | **CSP Header / Meta Tag Mismatch** | Browser blocking scripts/styles due to conflicting CSP policies between edge headers and layout tags. | `public/_headers` and `src/app/layout.tsx` `<meta>` tags are strictly synchronized. |
| 5 | **SPA Direct Link 404 Error** | Direct URL navigation to sub-routes returning 404 on Cloudflare Edge. | `"not_found_handling": "single-page-application"` in `wrangler.jsonc` + `postbuild` script generating `200.html`. |
| 6 | **Missing Node Compatibility Flag** | Worker crashing on Node built-ins (`fs`, `path`, `crypto`) when `nodejs_compat` flag is absent. | `"compatibility_flags": ["nodejs_compat"]` configured in `wrangler.jsonc`. |
| 7 | **Outdated Cloudflare Node Version** | Cloudflare Pages defaulting to Node 16/18, breaking Next.js 15 / React 19 builds. | Environment variable `NODE_VERSION=20` configured in Cloudflare Dashboard. |

---

## Deployment Execution Flow

```
[Source Code (src/app)] ──> [next.config.ts (export -> dist/)] ──> [npm run build]
                                                                        │
[Cloudflare Edge Assets] <── [wrangler.jsonc (./dist)] <── [dist/200.html (postbuild)]
```

---

## Codebase Architecture & Audit Summary

| Component / Layer | Audit Finding | Verified File Link | Status |
|---|---|---|---|
| **Framework & Build** | Next.js 15.5 (App Router, React 19) configured with `output: "export"` & `distDir: "dist"`. | [`next.config.ts`](file:///c:/Users/User/Desktop/Progamming/antigravity/sport%20service/next.config.ts) | PASS |
| **Edge Header Security** | Security headers in `public/_headers` strictly match layout `<meta>` CSP tag. | [`public/_headers`](file:///c:/Users/User/Desktop/Progamming/antigravity/sport%20service/public/_headers) & [`layout.tsx`](file:///c:/Users/User/Desktop/Progamming/antigravity/sport%20service/src/app/layout.tsx) | PASS |
| **Edge Routing & Assets** | Wrangler configured to serve `./dist` with SPA routing (`single-page-application`). | [`wrangler.jsonc`](file:///c:/Users/User/Desktop/Progamming/antigravity/sport%20service/wrangler.jsonc) | PASS |
| **Postbuild Pipeline** | Automatically creates `200.html` fallback and removes conflicting Wrangler configs from `./dist`. | [`package.json`](file:///c:/Users/User/Desktop/Progamming/antigravity/sport%20service/package.json) | PASS |
| **Section Navigation** | All 8 required anchor targets verified in DOM (`#hero`, `#services`, `#why-us`, `#athletes`, `#quiz`, `#body-map`, `#process`, `#faq`). | [`src/components/*`](file:///c:/Users/User/Desktop/Progamming/antigravity/sport%20service/src/components/) | PASS |
| **Image Optimization** | `unoptimized: true` configured for Unsplash remote images. | [`next.config.ts`](file:///c:/Users/User/Desktop/Progamming/antigravity/sport%20service/next.config.ts) | PASS |


---

## Guaranteed Deployment Step-by-Step Checklist

### 1. Pre-Deployment Build Check
Run local production build validation:
```bash
npm run build
```
Verify that `dist/` contains:
- `index.html`
- `200.html`
- `404.html`
- `_headers`
- `_next/` static assets

### 2. Deployment Command
Deploy to Cloudflare via Wrangler:
```bash
npm run deploy
```
*(Runs `npm run build && wrangler deploy` using settings from `wrangler.jsonc`)*

### 3. Cloudflare Dashboard Settings (Git Integration)
- **Framework Preset**: `None` or `Next.js (Static HTML Export)`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: `NODE_VERSION=20`

### 4. Post-Deployment Verification
- Check DevTools Network tab -> `Content-Security-Policy` header present.
- Check DevTools Console -> 0 CSP violation errors.
- Test section anchors (`#hero`, `#services`, `#why-us`, `#athletes`, `#quiz`, `#body-map`, `#process`, `#faq`).

