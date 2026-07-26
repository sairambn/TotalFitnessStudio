<div align="center">

# Total Fitness Studio

**Production conversion site for a 4.9★ Chromepet gym**  
First client deliverable for **[Naiyapudai](https://naiyapudai.vercel.app/)**

[![Live Demo](https://img.shields.io/badge/Live_Demo-total--fitness--studio--livid.vercel.app-black?style=for-the-badge&logo=vercel)](https://total-fitness-studio-livid.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154?style=flat-square)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

**Live** → [total-fitness-studio-livid.vercel.app](https://total-fitness-studio-livid.vercel.app/)  
**Maps** → [Google Maps listing](https://maps.app.goo.gl/M1VcPF2LMbexLFuE9)  
**Case study** → [Naiyapudai → Total Fitness](https://naiyapudai.vercel.app/work/total-fitness-studio)

</div>

---

## Why this project matters

This is a **real client site**, not a tutorial demo. It demonstrates end-to-end ownership of outcomes:

| Signal | Evidence in the code |
|--------|----------------------|
| **Product sense** | Hero CTA, sticky call/WhatsApp, pricing, FAQ, map embed |
| **Craft** | Design system (`#E2FF00` / dark), reduced-motion, a11y interactions |
| **Engineering** | Typed routes, shared `site` config, SSR error boundaries, Nitro + Vercel |
| **SEO / growth** | Schema.org `GymAndFitnessClub`, geo meta, local keywords, review social proof |
| **Maps** | GBP-aligned address, hours, coords, Maps deep link |
| **Ownership** | Single source of truth in [`src/lib/site.ts`](./src/lib/site.ts) |

**Business context:** Unisex gym above Axis Bank, Hasthinapuram / Chromepet · **4.9★ · ~798 reviews**

---

## SEO & Google Maps (what was delivered)

- **Schema.org** `GymAndFitnessClub` with geo, hours, aggregate rating, amenities
- **Local keywords:** Chromepet, Hasthinapuram, Chitlapakkam, unisex gym, Axis Bank landmark
- **Meta + canonicals** for clean indexation
- **Google Maps / GBP** aligned with site (address, hours, category, Maps URL)
- **Conversion:** `tel:` and WhatsApp deep links on every key surface

All business data (phone, hours, address, rating) lives in one place: [`src/lib/site.ts`](./src/lib/site.ts).

---

## Quick start

```bash
git clone https://github.com/sairambn/TotalFitnessStudio.git
cd TotalFitnessStudio
bun install          # or: npm install
bun run dev          # http://localhost:3000
```

```bash
bun run build && bun run preview
```

> Requires [Bun](https://bun.sh) or Node 20+.

---

## Deploy to Vercel

1. Open [vercel.com/new](https://vercel.com/new)
2. Import **`sairambn/TotalFitnessStudio`**
3. Framework Preset = **TanStack Start** (`vercel.json`)
4. Deploy

[One-click import](https://vercel.com/new/clone?repository-url=https://github.com/sairambn/TotalFitnessStudio)

---

## Technical highlights

1. **TanStack Start + React 19** — file-based routing, SSR, typed route tree
2. **Nitro** — production server for Vercel Functions
3. **Interaction design** — before/after slider, count-up stats, card tilt
4. **Motion** — scroll reveal, reduced-motion safe
5. **Conversion** — sticky mobile CTAs, desktop FAB
6. **Maintainability** — `src/lib/site.ts` for phone, hours, ratings, JSON-LD

Deeper notes → [ENGINEERING.md](./ENGINEERING.md) · Career framing → [CAREER.md](./CAREER.md)

---

## Interview talking points (STAR)

- **Situation** — Gym needs a site that converts Google searchers into calls/trials; Maps presence must match the brand.
- **Task** — Own UX, performance, local SEO, Schema.org, and Maps alignment.
- **Action** — TanStack Start SSR · design tokens · interactive transformations · Schema.org · WhatsApp/tel · GBP/Maps optimization · Nitro on Vercel.
- **Result** — Live conversion site + structured local SEO foundation (measure Lighthouse, CTA clicks, Maps engagement).

---

## Resume one-liner

> **Total Fitness Studio** (first Naiyapudai client) — Production React/TypeScript marketing site for a 4.9★ Chromepet gym: SSR, Schema.org local SEO, Google Maps alignment, call/WhatsApp CTAs. Stack: TanStack Start, Tailwind v4, Vite, Nitro, Vercel.

---

Built by **[Naiyapudai](https://naiyapudai.vercel.app/)** · [@sairambn](https://github.com/sairambn)
