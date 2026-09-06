# Cloudflare Deployment & Architecture Standard

## ⚡ Critical Environment Variables (Set in Cloudflare Dashboard)

| Variable | Value | Purpose |
|---|---|---|
| `CF_SKIP_DEPENDENCY_INSTALL` | `true` | **Skips Cloudflare's automatic `npm ci` step** — uses our build command's own `npm install` instead |
| `NODE_VERSION` | `20` | Sets Node.js runtime to v20 |
| `NPM_FLAGS` | `--prefer-offline` | Optional: speeds up npm install using cache |

## Build & Output Settings

| Setting | Value |
|---|---|
| **Build command** | `npm install && npx @opennextjs/cloudflare` |
| **Output / Assets directory** | `.open-next/assets` |
| **Worker script** | `.open-next/worker.js` |
| **Framework preset** | `None` |

## Static Security Headers

Security headers are declared in `public/_headers`.  
Cloudflare Workers serves these at the edge automatically:
- `Content-Security-Policy`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Referrer-Policy`

## Deployment Commands (Local / CLI)

```bash
# Build Cloudflare Workers bundle via OpenNext
npx @opennextjs/cloudflare

# Deploy to Cloudflare Workers
npx wrangler deploy
```

## Wrangler Configuration

Configured in `wrangler.json`:
- `"nodejs_compat"` compatibility flag enabled
- Assets served from `.open-next/assets`
- Worker entry: `.open-next/worker.js`
