# Total Fitness Studio

Production-oriented marketing site for a Chromepet (Chennai) gym — **4.9★**, women-owned, open 4:30 AM–9:30 PM.

Built as a **portfolio-grade** full-stack front-end project: modern React, typed routing, SSR, accessibility, and local SEO.

**Live repo:** [github.com/sairambn/TotalFitnessStudio](https://github.com/sairambn/TotalFitnessStudio)

---

## Highlights (for recruiters)

- **React 19 + TanStack Start** — file-based, type-safe routing and SSR  
- **Interactive product UI** — pointer + keyboard before/after comparison, animated stats, 3D hover cards  
- **Design system** — brand token `#E2FF00`, display/mono type scale, dark-first UI  
- **Accessibility** — focus rings, ARIA sliders, `prefers-reduced-motion`  
- **Local SEO** — Schema.org `GymAndFitnessClub`, Open Graph / Twitter meta  
- **Deployable** — Nitro `vercel` preset, `vercel.json`, Bun install/build  

See [ENGINEERING.md](./ENGINEERING.md) for architecture and interview-oriented notes.

---

## Tech stack

| Layer | Technology |
|-------|------------|
| UI | React 19, TypeScript |
| Framework | TanStack Start + TanStack Router |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Radix) |
| Build | Vite 8, Bun |
| Deploy | Vercel (Nitro preset) |

---

## Quick start

```bash
git clone https://github.com/sairambn/TotalFitnessStudio.git
cd TotalFitnessStudio
bun install
bun run dev
```

Open the URL printed in the terminal (usually `http://localhost:3000`).

```bash
bun run build
bun run preview
```

---

## Deploy on Vercel

1. [Import this repo](https://vercel.com/new/import?s=https://github.com/sairambn/TotalFitnessStudio)  
2. Install: `bun install` · Build: `bun run build`  
3. Deploy  

After you have a production URL, set it in structured data (`src/lib/site.ts` / JSON-LD) so Google Local sees the canonical domain.

---

## Project layout

```
src/
  routes/index.tsx     # Landing page
  components/          # Feature sections (transformations, …)
  lib/site.ts          # Business + SEO constants
  styles.css           # Design tokens + global polish
```

---

## Author

Built and maintained by **[@sairambn](https://github.com/sairambn)**.

If you are hiring for front-end / full-stack roles (including Google or Apple-adjacent product teams), this repo is intended to show end-to-end product engineering: UX, performance awareness, a11y, and clean structure — not only visual design.
