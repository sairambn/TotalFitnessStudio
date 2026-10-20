# Total Fitness Studio (TFS) — Official Website

> **The Highest-Rated Fitness & Bodybuilding Studio in Chromepet & Hasthinapuram, Chennai (4.9★, 800+ Verified Google Reviews)**

[![Lighthouse SEO](https://img.shields.io/badge/Lighthouse_SEO-100-success?style=for-the-badge&logo=googlechrome)](https://developers.google.com/speed/pagespeed/insights/)
[![Lighthouse Accessibility](https://img.shields.io/badge/Lighthouse_A11y-100-success?style=for-the-badge&logo=w3c)](https://www.w3.org/WAI/)
[![Lighthouse Best Practices](https://img.shields.io/badge/Best_Practices-100-success?style=for-the-badge&logo=lighthouse)](https://github.com/GoogleChrome/lighthouse)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## 🏋️‍♂️ About Total Fitness Studio

Founded in 2014 by award-winning Bodybuilder Champion **Master Sakthivel**, **Total Fitness Studio** is located at **No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road, Hasthinapuram, Chromepet, Chennai - 600044** (Above Axis Bank). 

The studio features high-grade biomechanical strength machinery, dedicated cardiovascular conditioning stations, exclusive women's fitness batches, and scientific nutritional guidance.

---

## ⚡ Quickstart & Local Development

No complex dependencies or runtime environments are required. You can serve the website locally with any standard HTTP server.

### 1. Run with Python
```bash
# Clone the repository
git clone https://github.com/sairambn/TotalFitnessStudio.git
cd TotalFitnessStudio

# Start local server on port 8080
python3 -m http.server 8080
```
Open **[http://localhost:8080/](http://localhost:8080/)** in any modern desktop or mobile browser.

### 2. Run with Bun or Node.js
```bash
# Using Bun
bunx serve -p 8080 .

# Using Node (npx)
npx serve -p 8080 .
```

---

## 🏛️ Architecture & Tech Stack

```
TotalFitnessStudio/
├── index.html                   # Semantic HTML5 with complete Schema.org JSON-LD
├── sitemap.xml                  # XML sitemap with all section anchors & metadata
├── robots.txt                   # Search crawler directives referencing sitemap.xml
├── css/
│   ├── style.css                # Source Core Design System & Theme Tokens
│   ├── animations.css           # Keyframe animations (radar pulse, levitate, ticker)
│   ├── bundle.css               # Combined stylesheet
│   └── bundle.min.css           # Production minified bundle (zero render-blocking)
├── js/
│   ├── app.js                   # Interactive navigation, ambient switcher, photo lightbox
│   ├── calculator.js            # Live interactive BMI, calorie & macronutrient planner
│   ├── schedule.js              # Interactive batch timetable with day & period filters
│   ├── modal.js                 # 7-day free trial modal & digital pass generator
│   └── bundle.min.js            # Production minified bundle (deferred loading)
├── assets/images/               # 33 verified Google Maps photos in modern WebP format
│   ├── hero_mobile.webp         # Ultra-fast 39KB mobile hero background
│   ├── hero_desktop.webp        # 147KB high-definition desktop hero background
│   └── gmap_gym_*.webp          # Verified gym floor, equipment & training photos
└── screenshots/                 # Multi-viewport responsive snapshots (360px - 1440px)
```

- **Core**: Semantic HTML5, CSS3 Custom Properties (Design System), Vanilla JavaScript (ES6+).
- **Styling**: Hot-pink / Neon-Volt dark luxury gym aesthetic with 3 dynamic studio ambient lighting themes (Neon Volt, Cyber Crimson, Solar Gold).
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *JetBrains Mono*) loaded asynchronously with zero layout shifts.
- **Responsiveness**: Zero horizontal overflow verified across 360px, 390px, 768px, 1024px, and 1440px viewports.

---

## 🛠️ Content Management & Editing Guide

### 1. How to Update Membership Pricing & Plans
Locate `<section id="membership">` in [`index.html`](index.html). Each plan card contains:
- Plan Name: `<h3 class="plan-name">...</h3>`
- Price Amount: `<div class="plan-amount">9,999</div>`
- Feature Checklist: `<li>` items with check/cross icons.

### 2. How to Update Batch Timings & Schedule
Open [`js/schedule.js`](js/schedule.js). Edit the `CLASSES_DATA` array:
```javascript
{
  id: 'mon-1',
  day: 'mon',              // 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'
  time: '05:30 AM',
  duration: '60 Mins',
  name: 'Master Sakthi Morning Hypertrophy',
  category: 'strength',    // 'strength' | 'cardio' | 'ladies' | 'fatloss'
  period: 'morning',       // 'morning' | 'evening'
  intensity: 'High',
  spots: 4,
  instructor: 'Master Sakthi',
  role: 'Head Coach & Founder',
  avatar: 'assets/images/gmap_gym_2.webp'
}
```
After editing, re-bundle for production:
```bash
cat js/calculator.js js/schedule.js js/modal.js js/app.js > js/bundle.js && bun build js/bundle.js --outfile=js/bundle.min.js --minify
```

### 3. How to Add or Replace Portfolio Photos
1. Add your `.webp` or `.jpg` photo into `assets/images/`.
2. Open [`index.html`](index.html) and navigate to `<section id="gmap-portfolio">`.
3. Add a new `.portfolio-card` or modify an existing one:
```html
<div class="portfolio-card" data-category="strength">
  <div class="portfolio-img-box">
    <img src="assets/images/your_new_photo.webp" alt="Equipment Description" loading="lazy" width="600" height="400" />
    <span class="gmap-verified-tag">📍 Verified Gym Floor</span>
  </div>
  <div class="portfolio-details">
    <h3 class="portfolio-title">Equipment Name</h3>
    <p class="portfolio-desc">Brief highlight of the station.</p>
  </div>
</div>
```

### 4. How to Update Phone Numbers & WhatsApp Links
Perform a project-wide search and replace for the gym's official contact information:
- **Phone**: `+919941942942`
- **WhatsApp**: `https://wa.me/919941942942`
- **Pre-filled message**: `Hello%20Master%20Sakthi,%20I%20am%20interested%20in%20Total%20Fitness%20Studio`

---

## 🔍 SEO & Local Search Optimization

The site is built specifically to dominate local organic search queries like *"gym in Chromepet"*, *"best gym in Hasthinapuram"*, *"fitness studio near me"*, and *"ladies gym in Chromepet"*.

- **Schema.org Structured Data**:
  - `ExerciseGym` & `LocalBusiness` with exact address, opening hours, pricing, telephone, geo-coordinates (`12.9472097, 80.1444199`), and Google Maps link.
  - `FAQPage` featuring 6 high-intent local customer questions and answers.
  - `BreadcrumbList` for structured search snippets.
  - `WebSite` definition with sitelinks query targeting.
- **OpenGraph & Twitter Card**: Full social sharing metadata with rich image preview tags.
- **Sitemap & Robots**: Standard `sitemap.xml` and `robots.txt` included in root.

---

## 🚀 Production Deployment

### GitHub Pages (Automated)
1. Push this repository to GitHub:
   ```bash
   git push origin main
   ```
2. In your GitHub repository settings, go to **Settings > Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**, choose `main` branch and `/ (root)` folder, then click **Save**.
4. Your site will be live instantly at `https://sairambn.github.io/TotalFitnessStudio/`.

### Vercel / Netlify
Simply import the repository in Vercel or Netlify. Since it is a pure static web application, no build configuration is needed; set Output Directory to `.` (root).

---

## 📄 License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
