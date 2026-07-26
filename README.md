# Total Fitness Studio

[![Live Demo](https://img.shields.io/badge/Live_Demo-total--fitness--studio--livid.vercel.app-black?style=for-the-badge&logo=vercel)](https://total-fitness-studio-livid.vercel.app/)
[![CI](https://github.com/sairambn/TotalFitnessStudio/actions/workflows/ci.yml/badge.svg)](https://github.com/sairambn/TotalFitnessStudio/actions/workflows/ci.yml)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154?style=flat-square)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> **Client engagement:** First order for **[Naiyapudai](https://naiyapudai.vercel.app/)** (growth studio)  
> **Stack:** React 19 · TypeScript · TanStack Start · Tailwind v4 · Vite · Nitro · Vercel  
> **Domain:** Local business conversion site — gym in Chromepet / Hasthinapuram, Chennai

**4.9★ · ~798 reviews** — unisex gym above Axis Bank, Hasthinapuram / Chromepet.

**Also delivered:** Google Maps / Google Business Profile optimization alongside the website (local SEO + Schema.org).

---

## Why this project

This is a **real client site**, not a toy demo. It shows ownership of outcomes:

| Signal | In the code |
|--------|-------------|
| **Product sense** | Hero CTA, sticky call/WhatsApp, pricing, FAQ, map |
| **Craft** | Design system (`#E2FF00` / dark), reduced-motion, a11y interactions |
| **Engineering** | Typed routes, shared `site` config, SSR error boundaries, Nitro + Vercel |
| **SEO / growth** | Schema.org `GymAndFitnessClub`, geo meta, local keywords, review social proof |
| **Maps** | GBP-aligned address, hours, coords, Maps deep link |
| **Ownership** | Single source of truth in `src/lib/site.ts` |

Agency case study: [Naiyapudai → Total Fitness](https://naiyapudai.vercel.app/work/total-fitness-studio)

---

## SEO & Google Maps (what was optimized)

- **Schema.org** `GymAndFitnessClub` with geo, hours, aggregate rating, amenities  
- **Local keywords:** Chromepet, Hasthinapuram, Chitlapakkam, unisex gym, Axis Bank landmark  
- **Meta + canonicals** for clean indexation  
- **Google Maps:** listing aligned with site (address, hours, category, Maps URL)  
- **Conversion:** `tel:` and WhatsApp deep links on every key surface  

Business data (phone, hours, address, rating) lives in one place: [`src/lib/site.ts`](./src/lib/site.ts).

---

## Quick start

```bash
git clone https://github.com/sairambn/TotalFitnessStudio.git
cd TotalFitnessStudio
bun install   # or: npm install
bun run dev   # http://localhost:3000
```

```bash
bun run build && bun run preview
```

> Requires [Bun](https://bun.sh) or Node 20+.

---

## Deploy to Vercel

1. [vercel.com/new](https://vercel.com/new)  
2. Import **`sairambn/TotalFitnessStudio`**  
3. Framework Preset = **TanStack Start** (`vercel.json`)  
4. Deploy  

[One-click import](https://vercel.com/new/clone?repository-url=https://github.com/sairambn/TotalFitnessStudio)

Live: https://total-fitness-studio-livid.vercel.app/  
Maps: https://maps.app.goo.gl/M1VcPF2LMbexLFuE9

---

## Technical highlights

1. **TanStack Start + React 19** — file-based routing, SSR, typed route tree  
2. **Nitro** — production server for Vercel Functions  
3. **Interaction design** — before/after, count-up stats, card tilt  
4. **Motion** — scroll reveal, reduced-motion safe  
5. **Conversion** — sticky mobile CTAs, desktop FAB  
6. **Maintainability** — `src/lib/site.ts` for phone, hours, ratings, JSON-LD  

→ [ENGINEERING.md](./ENGINEERING.md) · [CAREER.md](./CAREER.md)

---

## Interview talking points (STAR)

- **Situation:** Gym needs a site that converts Google searchers into calls/trials; Maps presence needed to match the brand.  
- **Task:** Own UX, performance, local SEO, Schema.org, and Maps alignment.  
- **Action:** TanStack Start SSR · design tokens · interactive transformations · Schema.org · WhatsApp/tel · GBP/Maps optimization · Nitro on Vercel.  
- **Result:** Live conversion site + structured local SEO foundation (measure Lighthouse, CTA clicks, Maps engagement after launch).

---

## Resume one-liner

> **Total Fitness Studio** (first Naiyapudai client) — Production React/TypeScript marketing site for a 4.9★ Chromepet gym: SSR, Schema.org local SEO, Google Maps alignment, call/WhatsApp CTAs. Stack: TanStack Start, Tailwind v4, Vite, Nitro, Vercel.

---

## License

MIT © [Sairam BN](https://github.com/sairambn) — portfolio-friendly for the client deliverable code.

Built by **[Naiyapudai](https://naiyapudai.vercel.app/)** · [@sairambn](https://github.com/sairambn)
