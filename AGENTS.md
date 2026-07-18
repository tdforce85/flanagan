# Agent notes — Handyman marketing site

Marketing website for a local handyman business. Standalone Next.js project.

## Stack
- Next.js 15 (App Router), TypeScript strict, Tailwind CSS v4 (CSS `@theme`, no
  `tailwind.config`), npm.
- **Static export** (`output: "export"`) deployed to **Cloudflare Pages**.
- `next@15.5.x` and `react@19.2.4`/`react-dom@19.2.4` are pinned for Cloudflare
  Pages compatibility — do not bump to Next 16 without re-verifying the deploy.

## Hard constraint: no server runtime
Static export means there are **no route handlers, server actions, or
request-time `fetch` on the Next side.** Anything needing a secret or a server
runs as a **Cloudflare Pages Function** in `/functions` (served by Cloudflare
alongside the static `out/`). Example: `functions/api/reviews.ts` keeps the
Google Places key server-side; the client calls `/api/reviews`.

- `next dev` does NOT serve `/functions`. To test functions locally:
  `npm run build && npx wrangler pages dev out/` with vars in `.dev.vars`.
- Any photo-heavy `next/image` use relies on `images.unoptimized = true`.

## Conventions (mirrored from the sibling portfolio project)
- Pages: `export default function Name()`. Server components by default; add
  `"use client"` only for stateful/interactive components.
- `interface` for object shapes, `type` for unions. Shared constants in
  `src/lib/*.ts` as `as const`, named exports, imported via `@/lib/...`.
- Reusable Tailwind via string constants. Container:
  `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Mobile-first `sm:`/`lg:`.
- Semantic HTML, `aria-label`/`htmlFor`, keyboard nav. Accessibility matters —
  most visitors are on phones looking for a phone number.

## Secrets
Never client-side. Local: `.dev.vars` (gitignored). Prod: Cloudflare Pages env.
