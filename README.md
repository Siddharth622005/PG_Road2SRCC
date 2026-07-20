# Road2SRCC

Road2SRCC is a Vite + React single-page app for browsing verified PG listings near Delhi University colleges. It focuses on student-useful facts: walk time, rent, deposit, room type, food, amenities, house rules, verification notes, real media, and owner contact.

## What's here

- `/` - Browse all PGs with filters for college, gender, budget, room type, AC, food, and sort order.
- `/pgs` - Redirects to `/`.
- `/pg/:slug` - PG detail page with gallery, room-type picker, field notes, evidence, amenities, rules, and owner contact buttons.
- `/pg/:slug/parents` - Parent-friendly safety and money summary.
- `/brief` - Short questionnaire to narrow down PG needs.
- `/shortlist` - Locally saved shortlist of PGs.
- `/how-we-verify` - Verification process and trust model.
- `/colleges/:college` - Legacy college URL; redirects to `/?college=:college`.
- `/about` - Road2SRCC story.
- `/guide` - Moving to Delhi starter guide.
- `/report` - Report a problem with a listing.
- `/status` - Internal listing status page for media and evidence coverage.

## Project structure

```text
src/
  App.jsx                 # Routes and app shell
  main.jsx                # React entry point
  components/             # Nav, cards, media, evidence chips, footer
  data/pgs.js             # Colleges, PG listings, room types, evidence data
  lib/store.js            # localStorage-backed shortlist store
  pages/                  # Route-level screens
  styles/index.css        # Global styles

public/
  pg-media/               # Real PG photos and videos used by listings
  favicon.svg
  icons.svg
  _redirects              # Netlify SPA fallback

dist/                     # Production build output
```

## Data and media

Listing content lives in `src/data/pgs.js`. Media referenced by listings lives in `public/pg-media/` and is served from paths like `/pg-media/example/file.jpg`.

`PhotoBox` supports both real images and placeholder states, so listings can mix complete media with pending media without breaking the layout.

Shortlist state is stored in the browser using localStorage. There is no backend yet.

## Run the frontend locally

```bash
npm install
npm run dev
```

Vite usually opens at:

```text
http://localhost:5173/
```

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy

This is a static SPA, so any static host works.

### Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Use framework preset `Vite`, build command `npm run build`, and output directory `dist`.
4. `vercel.json` handles SPA routing so direct links like `/pg/some-slug` work on refresh.

### Netlify

1. Import the repo in Netlify.
2. Use build command `npm run build` and publish directory `dist`.
3. `public/_redirects` handles SPA routing.

### Other static hosts

1. Run `npm run build`.
2. Upload the contents of `dist/`.
3. Configure unknown routes to rewrite to `/index.html`.

## Next steps

- Wire the report form to email, Formspree, or an API route.
- Add a backend or CMS when listings need to be edited outside code.
- Add capture for uncovered colleges or unavailable room types.
- Add a recheck workflow for stale listings and price confirmations.
