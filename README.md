# Total Fitness Studio

Modern, high-conversion website for **Total Fitness Studio** — Chromepet, Chennai.

**Live focus:** Strength training · HIIT · Personal Training  
**Rating:** 4.9 ★ · 755 Google interactions  
**Women-owned · Open 4:30 AM – 9:30 PM daily**

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router |
| Styling | Tailwind CSS v4 + custom design tokens |
| UI primitives | Radix UI + shadcn/ui |
| Language | TypeScript |
| Runtime / bundler | Bun + Vite |
| Fonts | Bebas Neue · Inter · JetBrains Mono |

---

## Features

- **Cinematic hero** with high-impact typography and live status panel
- **Programs** (Strength, Cardio/HIIT, Personal Training)
- **Coach profiles** with hover effects
- **Interactive before/after transformation sliders** with count-up stats
- **Verified Google reviews** section
- **Membership tiers** with clear CTAs
- **Location + embedded map**
- **FAQ accordion**
- **Sticky mobile Call + WhatsApp bar**
- **LocalBusiness JSON-LD** for SEO
- Fully responsive (mobile-first)

---

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Production build
bun run build

# Preview production build
bun run preview
```

---

## Project Structure

```
src/
├── assets/              # Images (hero, trainers, transformations)
├── components/
│   ├── transformations.tsx   # Interactive before/after section
│   └── ui/                   # shadcn/ui primitives
├── hooks/
├── lib/                 # Utils + error reporting
├── routes/
│   ├── __root.tsx       # Root layout, SEO meta, error boundaries
│   └── index.tsx        # Main landing page
├── styles.css           # Tailwind + design tokens
└── ...
```

---

## Brand Tokens

- **Brand accent:** `#E2FF00` (neon lime)
- **Background:** `#0F0F0F` (near-black)
- **Fonts:** Display = Bebas Neue · Body = Inter · Mono = JetBrains Mono

---

## Contact (Hard-coded in app)

- **Phone:** +91 99419 42942
- **Address:** No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road, Gayathri Nagar (above Axis Bank), Hasthinapuram, Chromepet, Chennai 600044
- **Hours:** 4:30 AM – 9:30 PM (Mon–Sun)

---

## License

Private project for Total Fitness Studio.
