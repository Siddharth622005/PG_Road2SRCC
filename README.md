# Road2SRCC

A React implementation of the Road2SRCC UX/product design spec — all 8 pages from the sitemap, built with Vite + React Router.

## What's here

- `/` — Landing
- `/pgs` — Discovery (all PGs, filterable)
- `/pg/:slug` — PG Detail
- `/how-we-verify` — The verification process
- `/colleges/:college` — College landing page (srcc, hindu, hansraj, kmc, venky, lsr)
- `/about` — The story
- `/guide` — Moving to Delhi starter guide
- `/report` — Report a problem with a listing

Data for PGs and colleges is mock content in `src/data/pgs.js` — swap this for real listings (or a CMS/API) when you're ready.

**Photos:** every photo slot uses a placeholder component (`src/components/PhotoBox.jsx`) instead of real images, since the design spec calls for real, team-shot photography (no stock photos). Replace `PhotoBox` usages with `<img>` tags pointing at your real photos when you have them — the layout, captions, and "shot by" tags are already wired up.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploy

This is a static single-page app (SPA) — any static host works. Two easy options:

### Vercel (recommended, easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com/new, import the repo.
3. Vercel auto-detects Vite — framework preset "Vite", build command `npm run build`, output directory `dist`. Click Deploy.
4. `vercel.json` (already included) handles routing so `/pg/some-slug` works on refresh, not just via in-app navigation.

### Netlify
1. Push to GitHub, then app.netlify.com/start, import the repo.
2. Build command: `npm run build`. Publish directory: `dist`.
3. `public/_redirects` (already included) handles SPA routing.

### Any other static host (GitHub Pages, Cloudflare Pages, S3, etc.)
1. Run `npm run build`.
2. Upload the contents of `dist/` to your host.
3. Make sure the host rewrites all unknown paths to `/index.html` (SPA fallback) — otherwise directly visiting `/pg/some-slug` or refreshing on it will 404.

## Next steps toward the real product

- Replace mock data in `src/data/pgs.js` with real listings (or wire up a small backend/CMS).
- Replace `PhotoBox` placeholders with real photos per the spec's photography rules (section 9 of the design doc): natural daylight, always include desk + bathroom, consistent warm edit.
- Wire the Report form to actually send somewhere (email, a form service like Formspree, or a small API route).
- Add the "notify me" capture for uncovered colleges (empty state in `CollegeLanding.jsx`).
- Consider a stale-badge recheck cadence job once you have more listings (the `stale` field on each PG already drives the amber badge).
