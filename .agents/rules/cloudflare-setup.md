# Cloudflare Setup & Deployment Rule

## Build Settings Checklist for Cloudflare Dashboard / CLI

| Setting | Value | Notes |
| :--- | :--- | :--- |
| **Framework Preset** | `None` / `Next.js (Static)` or `Cloudflare Workers` | Controlled by OpenNext |
| **Build Command** | `npx @opennextjs/cloudflare` | Or `npm run pages:build` |
| **Build Output Directory** | `.open-next/assets` | Do **NOT** set to `.next` or `out` |
| **Root Directory** | `/` | Repository root |
| **Environment Variables** | `NODE_VERSION=20` | Required for Next 15 + OpenNext |

## Common Rejection / Failure Reasons & Fixes

1. **Failure: `npm ci` lockfile mismatch**
   - **Reason**: Missing `@emnapi/core` or `@emnapi/runtime` in `package.json` / `package-lock.json`.
   - **Fix**: Run `npm install @emnapi/core @emnapi/runtime --save-dev` locally and commit `package-lock.json`.

2. **Failure: Output Directory Set to `.next` or `out`**
   - **Reason**: Next.js 15 App Router uses Server Components/SSR.
   - **Fix**: Use OpenNext build output directory `.open-next/assets` (or `.open-next`).

3. **Failure: Missing `nodejs_compat` Compatibility Flag**
   - **Reason**: Node.js APIs used by Next.js server components require Cloudflare's `nodejs_compat` runtime flag.
   - **Fix**: Ensure `wrangler.json` includes:
     ```json
     "compatibility_flags": ["nodejs_compat"]
     ```
