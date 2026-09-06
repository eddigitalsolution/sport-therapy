# Cloudflare Deployment & Architecture Standard

## Build & Output Settings
- **Build Command**: `npx @opennextjs/cloudflare`
- **Output / Assets Directory**: `.open-next/assets`
- **Worker Script**: `.open-next/worker.js`
- **Node Version Requirement**: `NODE_VERSION=20` or higher
- **Wrangler Configuration**: `wrangler.json` (uses `nodejs_compat` compatibility flag)

## Static Security & Routing Headers
- Security headers are declared in `public/_headers`.
- Cloudflare Pages / Workers static assets automatically serve edge security headers (`Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).

## Deployment Commands
```bash
# Build Cloudflare Workers bundle via OpenNext
npm run pages:build

# Deploy to Cloudflare Workers
npm run deploy
```
