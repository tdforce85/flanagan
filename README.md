# Handyman Site

Marketing website for a local handyman business. Next.js 15 (App Router) +
Tailwind v4, TypeScript, **static export** deployed to **Cloudflare Pages** with
one Cloudflare Pages Function for live Google reviews.

## Quick start

```bash
npm install
cp .env.example .env.local     # add your Web3Forms key (see below)
npm run dev                    # http://localhost:3000
```

`npm run dev` serves the static pages but **not** the `/functions` endpoints.
To exercise the reviews function locally, use the Cloudflare runtime:

```bash
cp .dev.vars.example .dev.vars   # add GOOGLE_PLACES_API_KEY + PLACE_ID
npm run build
npx wrangler pages dev out/      # http://localhost:8788  (/api/reviews works here)
```

## Architecture

- **Static export** (`output: "export"` in `next.config.ts`) → the whole site is
  prerendered to `out/`. No Next.js server runtime.
- Anything needing a secret runs as a **Cloudflare Pages Function** in
  `/functions`, served alongside the static assets. Currently:
  `functions/api/reviews.ts` (Google reviews, keeps the API key server-side).
- `images.unoptimized = true` because static export has no image optimizer.

## Configuration & content

Everything owner-specific lives in **`src/lib/business.ts`** (and
`src/lib/gallery.ts`). Replace every `PLACEHOLDER` — there's a checklist at the
top of `business.ts`:

- Business name, tagline, phone, email, hours, service areas
- `url` (production domain — used for metadata, sitemap, schema)
- `mapEmbedSrc` (Google Maps "Share → Embed a map" URL)
- Services list, before/after gallery captions + image paths

Add images to `public/images/`:
- `hero.jpg` — wide hero background
- `owner.jpg` — owner/team photo (About page)
- `gallery/*` — before/after photos, then set `beforeSrc`/`afterSrc` in
  `src/lib/gallery.ts`

Until photos are added, the hero shows the brand gradient and the gallery shows
labeled before/after placeholders that still demonstrate the slider.

## Secrets / keys

| Key | Where | How to get it |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | `.env.local` (build-time, public by design) | Free at [web3forms.com](https://web3forms.com) — tie it to the owner's Gmail. The contact form delivers there. |
| `GOOGLE_PLACES_API_KEY` | `.dev.vars` locally / Cloudflare Pages env in prod | Google Cloud console → enable **Places API** → restricted key. |
| `PLACE_ID` | same | The business's Google **Place ID** (Google's "Place ID Finder"). |

The reviews function returns an empty list (and the UI shows sample reviews)
until the Places key + Place ID are set — nothing breaks before they're set.

## Deploy (Cloudflare Pages)

1. Push to a Git repo and connect it in the Cloudflare Pages dashboard.
2. Build command: `npm run build` · Build output directory: `out`.
3. Set environment variables in the Pages project settings:
   `GOOGLE_PLACES_API_KEY`, `PLACE_ID`, and `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. HTTPS/SSL is provisioned automatically and free once the domain is connected.

## Design

Brand palette lives in `src/app/globals.css` (`@theme`): forest green
`#1C3424`, sage `#91CA9F`, cream `#F8EAD4`, white. Headings use Manrope, body
uses Inter (`src/app/layout.tsx`) — swap in `layout.tsx` if desired.

## Optional: contact-form hardening (Turnstile)

The form ships with a honeypot (`botcheck`), enough for most small sites. For
stronger protection, add a Cloudflare Turnstile widget and verify its token in a
`functions/api/contact.ts` relay (verify token → forward to Web3Forms), keeping
the Turnstile secret server-side. See the note in `AGENTS.md`.
