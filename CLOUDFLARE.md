# Cloudflare Pages & Workers Deployment Standard

This repository follows the global Cloudflare setup standard to avoid Content Security Policy (CSP) mismatches, missing security headers, and SPA 404 routing errors.

## Quick Summary

1. **Security Headers (`public/_headers`)**:
   - Manages CSP headers (`default-src 'self' https: data: blob: 'unsafe-inline'`), `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy`.
2. **Meta Tag CSP (`index.html` / `layout.tsx`)**:
   - Keeps local browser CSP aligned with Cloudflare edge headers.
3. **SPA Routing (`wrangler.jsonc`)**:
   - Configured with native `"not_found_handling": "single-page-application"` in `wrangler.jsonc`.
4. **Form Input Autocomplete**:
   - Explicit `autoComplete` tags on all inputs to satisfy browser security and accessibility requirements.
5. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Deploy Command: `npx wrangler deploy`
