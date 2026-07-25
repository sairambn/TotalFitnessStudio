# Engineering notes

This document explains design choices so the codebase is reviewable by hiring managers and interviewers (Google, Apple, and similar).

## Stack decisions

| Choice | Why |
|--------|-----|
| **TanStack Start + React 19** | File-based routing, type-safe routes, modern SSR without Next lock-in |
| **Vite 8 + Bun** | Fast local loop; Bun for install/scripts |
| **Tailwind CSS v4** | Design tokens in CSS (`--color-brand`), utility-first UI |
| **TypeScript strict** | Catch contract bugs early |
| **Nitro (Vercel preset)** | Portable server output for production |

## Architecture

```
src/
  routes/          # File-based pages (TanStack Router)
  components/      # Feature UI (e.g. transformations)
  components/ui/   # shadcn primitives
  lib/             # Shared pure modules (site config, utils)
  assets/          # Optimized static images
```

- **Business constants** live in `src/lib/site.ts` (single source of truth).
- **Interactive demos** (before/after slider, count-up, 3D card tilt) are isolated in `transformations.tsx` with pointer + keyboard support.
- **Error boundaries** at root + SSR error HTML fallbacks keep failures user-friendly.

## Quality bar (what this demonstrates)

1. **Accessibility** — focus-visible, ARIA on sliders, semantic sections, reduced-motion respect  
2. **Performance** — lazy images, CSS-first motion, minimal client JS for marketing surface  
3. **SEO / local discovery** — meta tags, Schema.org `GymAndFitnessClub`, clear hierarchy  
4. **Design systems** — brand token `#E2FF00`, mono + display type scale, consistent spacing  
5. **Production readiness** — Vercel config, SSR error handling, typed routes  

## What a Google / Apple interviewer might ask

- How would you measure Core Web Vitals on this page?
- How would you A/B test the primary CTA without shipping a new deploy every time?
- How would you internationalize (Tamil / English) without duplicating the route tree?
- How would you extract the slider into a reusable, testable hook?

Be ready to answer those from this codebase.

## Local commands

```bash
bun install
bun run dev      # development
bun run build    # production build
bun run preview  # preview build
```
