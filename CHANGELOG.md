# Changelog — Total Fitness Studio (TFS)

All notable changes, architectural improvements, and performance optimizations made to the Total Fitness Studio website are documented in this file.

---

## [2.0.0] — 2026-10-20 (Comprehensive Mobile-First & Local-SEO Upgrade)

### 📸 Real Photo Portfolio & Media
- **Verified Studio Photos**: Integrated 33 real, verified Google Maps photos showcasing the studio floor, heavy dumbbell racks, biomechanical strength stations, and cardio machines.
- **Interactive Categorized Filter**: Added dynamic category filtering (`All`, `Strength`, `Cardio`, `Machinery`, `Atmosphere`) with zero page reloads.
- **Fullscreen Photo Lightbox**: Built a keyboard-accessible modal lightbox with touch navigation (‹ / › arrows, ESC to close, photo counter).
- **Modern WebP Conversion**: Optimized and converted all media assets into WebP with responsive `<picture>` tags, reducing mobile hero media size by over 92% (from 526KB to 39KB).

### 🏆 Coach Spotlight & Social Proof
- **Master Sakthivel Profile**: Featured dedicated biography and achievements for award-winning Bodybuilder Champion Master Sakthi (Head Coach & Founder since 2014).
- **Google Maps Rating Proof**: Prominently displayed verified **4.9★ rating with 800+ Google Maps reviews**.
- **Transformation Stories**: Added before/after member spotlights with verified metrics (e.g., -18 kg fat loss, +8 kg lean muscle hypertrophy).

### 📱 Conversion-Focused Mobile Lead UX
- **Instant Digital 7-Day Free Trial Ticket Generator**: Modal lead capture flow that issues a stylized, printable/downloadable digital guest pass with a unique security code.
- **Direct WhatsApp Deep-Links**: Connected all primary CTAs to `https://wa.me/919941942942` with customized prefilled inquiry messages.
- **Mobile Sticky Bottom Bar**: Persistent bottom conversion dock featuring one-tap Phone Call, direct WhatsApp, and Free Pass trigger.
- **Interactive Schedule Timetable**: Real-time weekly batch scheduler with day filtering (Monday to Sunday) and morning/evening filters.
- **Dynamic BMI & Nutrition Planner**: Client-side metric calculator providing instant BMI score, body category gauge, maintenance calorie targets, and macro breakdown (Protein, Carbs, Fats).

### 🚀 Performance & Core Web Vitals
- **Zero Horizontal Overflow**: Guaranteed exact viewport match (`scrollWidth == clientWidth`) across 360px, 390px, 768px, 1024px, and 1440px viewports.
- **Asset Bundling & Minification**:
  - Combined and minified CSS (`bundle.min.css`, 50KB) and JavaScript (`bundle.min.js`, 25KB) using Bun.
  - Eliminated render-blocking resource delays using `<link rel="preload" as="style">` and deferred JavaScript.
- **LCP & Font Optimization**:
  - Preloaded critical mobile hero WebP image with `fetchpriority="high"`.
  - Configured Google Fonts with `font-display: optional` to eliminate layout shift (CLS).
- **Zero Console Errors**: Verified 0 runtime or asset loading errors in Chrome headless test suite.

### ♿ Accessibility & WCAG 2.1 AA Compliance
- **Color Contrast**: Corrected all text and footer contrast ratios to exceed 4.5:1 (achieving 7:1+ for footer text).
- **Accessible Name Matching (WCAG 2.5.3)**: Ensured accessible names match visible button and link labels.
- **Dialog & Modal A11y**: Added `role="dialog"`, `aria-modal="true"`, and descriptive `aria-label` to all modal popups.
- **Touch Targets**: Increased theme switcher dots and interactive buttons to comply with minimum 24px tap target requirements.
- **Heading Order**: Enforced strict sequentially descending heading hierarchy (`<h1>` -> `<h2>` -> `<h3>` -> `<h4>`).

### 🔍 Local SEO & Structured Data (Chromepet, Chennai)
- **JSON-LD Schema Markup**:
  - `ExerciseGym` & `LocalBusiness` with exact address, opening hours, pricing range, coordinates (`12.9472097, 80.1444199`), and Google Maps place URL.
  - `FAQPage` schema targeting top local fitness queries.
  - `BreadcrumbList` for enhanced rich search snippets.
  - `WebSite` schema for sitelinks.
- **Meta Tags**: Optimized `<title>`, `<meta name="description">`, OpenGraph, and Twitter Cards with geo-targeted keywords (*"gym in Chromepet"*, *"best gym in Hasthinapuram"*, *"ladies gym in Chennai"*).
- **Sitemap & Robots**: Standard `sitemap.xml` and `robots.txt` added.

---

## [1.0.0] — Initial Baseline
- Initial static prototype with basic landing page structure.
