# Total Fitness Studio — Product engineering case study

> **Role signal:** Front-end / full-stack product engineer  
> **Stack:** React 19 · TypeScript · TanStack Start · Tailwind v4 · Vite · Nitro · Vercel  
> **Domain:** Local business conversion site (gym, Chromepet, Chennai)

Live listing context: **4.9★ · ~798 reviews** — women-owned gym in Hasthinapuram / Chromepet.

---

## Why this project (for startup hiring managers)

Startups don’t hire “pretty pages.” They hire people who **own outcomes**. This repo is structured to show:

| Signal | What’s in the code |
|--------|---------------------|
| **Product sense** | Conversion-first layout: hero CTA, sticky call/WhatsApp, pricing, FAQ, map |
| **Craft** | Design system (`#E2FF00` / dark), motion with `prefers-reduced-motion`, a11y sliders |
| **Engineering** | Typed routes, shared `site` config, SSR error boundaries, Nitro + Vercel deploy path |
| **SEO / growth** | Schema.org `GymAndFitnessClub`, geo meta, review social proof aligned to public listings |
| **Ownership** | Single source of truth for business data; docs for next engineer |

**This alone is not a 12 LPA offer** — treat it as one strong project on a resume that also has internships, shipped features, or measurable impact elsewhere.

---

## Quick start

```bash
git clone https://github.com/sairambn/TotalFitnessStudio.git
cd TotalFitnessStudio
npm install   # or: bun install
npm run dev   # http://localhost:3000
```

Production build:

```bash
npm run build && npm run preview
```

---

## Deploy to Vercel

Config is aligned with the official TanStack Start + Nitro + Vercel setup.

1. Open [vercel.com/new](https://vercel.com/new)
2. Import **`sairambn/TotalFitnessStudio`**
3. Framework Preset is already set to **TanStack Start** via `vercel.json`
4. Click **Deploy**

One-click: [Import this repo on Vercel](https://vercel.com/new/clone?repository-url=https://github.com/sairambn/TotalFitnessStudio)

After deploy, copy the production URL and pin it here / on your resume.

---

## Technical highlights

1. **TanStack Start + React 19** — file-based routing, SSR, typed route tree  
2. **Nitro** — production server output for Vercel Functions  
3. **Interaction design** — before/after comparison (pointer + keyboard), count-up stats, 3D card tilt  
4. **Motion system** — scroll reveal (`IntersectionObserver`), staggered hero entrance, reduced-motion safe  
5. **Local conversion** — `tel:` / WhatsApp deep links, sticky mobile CTAs, desktop FAB  
6. **Maintainability** — `src/lib/site.ts` for phone, hours, ratings, JSON-LD  

Details: [ENGINEERING.md](./ENGINEERING.md) · Career framing: [CAREER.md](./CAREER.md)

---

## How to talk about this in interviews

Use **STAR**, not “I built a gym website”:

- **Situation:** Local gym needs a site that converts Google searchers (4.9★ brand) into calls/trials.  
- **Task:** Ship a fast, mobile-first marketing site with SEO and clear CTAs.  
- **Action:** Chose TanStack Start for SSR + DX; built design tokens; interactive transformations; Schema.org; WhatsApp/tel conversion paths; Nitro for Vercel.  
- **Result:** (After deploy) share real metrics — e.g. Lighthouse scores, bounce rate, call clicks. *Without metrics, say what you would measure.*

Be ready for:

- How would you A/B test the primary CTA?  
- How do you keep LCP fast with large images?  
- How would you add a booking form + backend without rewriting the app?

---

## Resume one-liner (copy/paste)

> **Total Fitness Studio** — Built a production-oriented React/TypeScript marketing site for a 4.9★ Chromepet gym: SSR, local SEO (Schema.org), conversion CTAs (call/WhatsApp), and accessible interactive before/after UI. Stack: TanStack Start, Tailwind v4, Vite, Nitro, Vercel.

---

## Author

**[@sairambn](https://github.com/sairambn)** — open to **startup front-end / product engineering** roles.

If you’re hiring: the interesting part isn’t the gym theme — it’s end-to-end ownership of UI, performance awareness, SEO, and deployability.
