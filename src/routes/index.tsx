import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAthlete from "@/assets/hero-athlete.jpg";
import trainerElena from "@/assets/trainer-elena.jpg";
import trainerMarcus from "@/assets/trainer-marcus.jpg";
import trainerSasha from "@/assets/trainer-sasha.jpg";
import { TransformationSection } from "@/components/transformations";


export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+91 99419 42942";
const PHONE_TEL = "+919941942942";
const WHATSAPP_NUMBER = "919941942942";
const WHATSAPP_INQUIRY_MSG = encodeURIComponent(
  "Hi Total Fitness Studio, I have a question about your gym in Chromepet. Can you help?"
);
const WHATSAPP_TRIAL_MSG = encodeURIComponent(
  "Hi, I'd like to book my free trial session at Total Fitness Studio Chromepet."
);
const ADDRESS_SHORT = "Hasthinapuram, Chromepet, Chennai";
const ADDRESS_FULL =
  "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road, Gayathri Nagar (above Axis Bank), Hasthinapuram, Chromepet, Chennai, Tamil Nadu 600044";
const MAPS_URL = "https://maps.app.goo.gl/M1VcPF2LMbexLFuE9";
const COORDS = "12.9524° N, 80.1381° E";
const RATING = "4.9";
const REVIEW_COUNT = 755;

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "GymAndFitnessClub",
  name: "Total Fitness Studio",
  image: "https://project--aa9bf42c-5971-444d-b50f-21cf3127d23f.lovable.app/og.jpg",
  telephone: PHONE,
  url: "https://project--aa9bf42c-5971-444d-b50f-21cf3127d23f.lovable.app",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road, Gayathri Nagar (above Axis Bank)",
    addressLocality: "Chromepet",
    addressRegion: "Tamil Nadu",
    postalCode: "600044",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.9524, longitude: 80.1381 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "04:30",
      closes: "21:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING,
    reviewCount: REVIEW_COUNT,
    bestRating: "5",
  },
};

const FAQS = [
  {
    q: "Where exactly are you in Chromepet?",
    a: "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road — above Axis Bank in Gayathri Nagar, Hasthinapuram. Two minutes from Chromepet railway station.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes. First personal training session is free — call +91 99419 42942 to book a slot. Walk-ins welcome for a facility tour any time between 4:30 AM and 9:30 PM.",
  },
  {
    q: "Is there a women-only timing?",
    a: "The floor is open to everyone all day, but our head coach Priya runs dedicated women's strength blocks in the morning and evening. Being women-owned, comfort and safety are non-negotiable here.",
  },
  {
    q: "What are the actual membership fees?",
    a: "Gym access starts at ₹1,500/month. Personal training with the head coach starts at ₹4,000/month. Quarterly and annual packages carry sizeable discounts — call for current offers.",
  },
  {
    q: "Do you have parking?",
    a: "Yes, two-wheeler parking on-site. Car parking available on Rajendra Prasad Road and the adjoining lane.",
  },
];

function SectionIndex({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-1 bg-brand" />
      <span className="font-mono text-brand text-xs uppercase tracking-[0.3em]">
        {n} — {label}
      </span>
    </div>
  );
}

function Index() {
  const [waOpen, setWaOpen] = useState(false);
  return (
    <div className="bg-dark font-sans text-white min-h-screen selection:bg-brand selection:text-dark">
      {/* Nav */}
      <nav className="border-b border-brand/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-brand animate-pulse" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl md:text-2xl tracking-tighter uppercase">Total Fitness Studio</span>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mt-1">Chromepet // 600044</span>
            </div>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 font-mono text-[11px] uppercase tracking-[0.25em] text-white/60">
            <a href="#programs" className="hover:text-brand transition-colors">01 Programs</a>
            <a href="#trainers" className="hover:text-brand transition-colors">02 Coaches</a>
            <a href="#membership" className="hover:text-brand transition-colors">03 Membership</a>
            <a href="#visit" className="hover:text-brand transition-colors">04 Visit</a>
            <a href="#faq" className="hover:text-brand transition-colors">05 FAQ</a>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group bg-brand text-dark px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-white transition-colors flex items-center gap-2"
          >
            Call
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        {/* Big outlined bg text */}
        <div className="absolute -top-10 -left-10 opacity-[0.06] pointer-events-none select-none">
          <span
            className="font-display text-[22rem] leading-none tracking-tighter"
            style={{ WebkitTextStroke: "2px white", color: "transparent" }}
          >
            ELITE
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="relative border border-brand/30 bg-black/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12">
            {/* Left branding */}
            <div className="lg:col-span-8 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-brand/30 flex flex-col justify-between min-h-[560px]">
              <div>
                <SectionIndex n="00" label="System Protocol // MMXXVI" />
                <h1 className="font-display text-white text-7xl md:text-[10rem] leading-[0.85] tracking-tighter">
                  TOTAL <span className="text-brand">FITNESS</span>
                  <br />
                  STUDIO
                </h1>
                <div className="flex items-baseline gap-4 mt-6">
                  <p className="font-sans font-bold text-xl uppercase tracking-widest text-white/60">Chromepet · Chennai</p>
                  <div className="h-px flex-grow bg-white/20" />
                </div>
                <p className="mt-8 max-w-lg text-white/70 leading-relaxed">
                  Chennai's highest-rated fitness studio. Serious equipment, proven coaching, and a community that shows up at 4:30 AM. Rated{" "}
                  <span className="text-brand font-bold">4.9 ★</span> across 755 verified Google interactions.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-end gap-10">
                <a href={`tel:${PHONE_TEL}`} className="group cursor-pointer">
                  <div className="font-display text-brand text-4xl group-hover:translate-x-2 transition-transform">JOIN THE RANKS</div>
                  <div className="h-1 w-full bg-brand mt-1 origin-left group-hover:scale-x-110 transition-transform" />
                </a>
                <div className="flex flex-col">
                  <span className="font-mono text-white/40 text-[10px] uppercase tracking-widest mb-1">Coordinates</span>
                  <span className="font-mono font-bold">{COORDS}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-white/40 text-[10px] uppercase tracking-widest mb-1">Rating</span>
                  <span className="font-bold">4.9 ★ · 755 Google</span>
                </div>
              </div>
            </div>

            {/* Right status column */}
            <div className="lg:col-span-4 bg-brand text-dark p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-10">
                <div className="border-b-4 border-dark pb-6">
                  <h2 className="font-display text-dark text-5xl leading-none">
                    RAW POWER.
                    <br />
                    REFINED TECH.
                  </h2>
                </div>

                <ul className="space-y-5">
                  {[
                    ["01", "Free-Weight", "Platform"],
                    ["02", "Biomechanic", "Coaching"],
                    ["03", "Women-Owned", "Since Day One"],
                    ["04", "Open 4:30 AM", "9:30 PM Daily"],
                  ].map(([n, a, b], i, arr) => (
                    <li
                      key={n}
                      className={`flex items-start justify-between ${i < arr.length - 1 ? "border-b border-dark/10 pb-4" : ""}`}
                    >
                      <span className="font-mono font-bold text-sm">{n}</span>
                      <span className="font-black text-base md:text-lg uppercase text-right leading-tight">
                        {a}
                        <br />
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-10 w-full bg-dark text-brand py-5 px-6 font-display text-3xl tracking-wide hover:bg-white hover:text-dark transition-all active:scale-95 flex items-center justify-between"
              >
                START PROTOCOL
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Corner frames */}
          <div className="absolute -top-2 -left-2 w-24 h-24 border-t-2 border-l-2 border-brand opacity-60" />
          <div className="absolute -bottom-2 -right-2 w-24 h-24 border-b-2 border-r-2 border-brand opacity-60" />
        </div>
      </header>

      {/* Marquee ticker */}
      <section className="bg-brand py-3 overflow-hidden whitespace-nowrap border-y-2 border-dark">
        <div className="flex gap-10 animate-marquee font-mono text-sm text-dark uppercase tracking-[0.3em] font-bold">
          <span>
            ● 4.9 STAR RATED &nbsp;·&nbsp; 755 GOOGLE INTERACTIONS &nbsp;·&nbsp; WOMEN-OWNED &nbsp;·&nbsp; OPEN 04:30 — 21:30 &nbsp;·&nbsp; LGBTQ+ FRIENDLY &nbsp;·&nbsp; CHROMEPET / CHENNAI &nbsp;·&nbsp; ● 4.9 STAR RATED &nbsp;·&nbsp; 755 GOOGLE INTERACTIONS &nbsp;·&nbsp; WOMEN-OWNED &nbsp;·&nbsp; OPEN 04:30 — 21:30 &nbsp;·&nbsp; LGBTQ+ FRIENDLY &nbsp;·&nbsp; CHROMEPET / CHENNAI &nbsp;·&nbsp;
          </span>
        </div>
      </section>

      {/* Hero image band */}
      <section className="relative border-b border-brand/20">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-brand text-[10px] uppercase tracking-[0.4em]">Facility // Sector 044</span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase">
              Train Like<br />You <span className="text-brand italic">Mean It</span>
            </h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              Every square foot engineered for one thing — progress you can measure. Iron on the floor. Coaches on the deck. No mirrors-only theatre.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
              {[
                ["Members", "1,200+"],
                ["Weekly Sessions", "480"],
                ["PT Coaches", "03"],
                ["Sq. Ft.", "4,800"],
              ].map(([k, v]) => (
                <div key={k} className="border border-white/10 p-4">
                  <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">{k}</div>
                  <div className="font-display text-3xl text-brand">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <img
              src={heroAthlete}
              alt="Athlete training at Total Fitness Studio Chromepet"
              width={1200}
              height={900}
              className="w-full aspect-[4/3] object-cover border-2 border-brand grayscale-[0.3]"
            />
            <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] bg-dark/80 border border-brand/40 text-brand px-3 py-1">
              REC ● LIVE FLOOR
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand text-dark p-5 hidden md:block max-w-xs">
              <div className="font-mono text-[10px] uppercase tracking-widest mb-1">Verified</div>
              <div className="font-display text-3xl leading-none">4.9 ★ · 755 REVIEWS</div>
              <div className="font-mono text-[10px] uppercase tracking-widest mt-2">GOOGLE / BUSINESS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="px-6 py-24 border-b border-brand/20">
        <div className="max-w-7xl mx-auto">
          <SectionIndex n="01" label="Programs // Training Systems" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <h2 className="font-display text-6xl md:text-7xl uppercase leading-none">
              Built for<br /><span className="text-brand italic">Every Body</span>
            </h2>
            <p className="text-white/50 max-w-md">
              From your first squat to your first competition — programs designed for real progress, not vanity metrics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 border border-brand/30">
            {[
              { n: "01", name: "Strength", tag: "Weight Training", desc: "Full free-weight floor, cable stacks, and expert form coaching. Build real muscle.", specs: ["Barbells · Racks · Platforms", "Progressive overload", "Form video review"] },
              { n: "02", name: "Cardio + HIIT", tag: "Conditioning", desc: "High-intensity conditioning classes and cardio zones for serious fat loss.", specs: ["Treadmills · Bikes · Rowers", "Class capacity 12", "Heart-rate zones"] },
              { n: "03", name: "Personal Training", tag: "1-on-1", desc: "Custom programs, nutrition guidance, and accountability. Results, guaranteed.", specs: ["Bespoke programming", "Nutrition plan", "Weekly check-ins"] },
            ].map((c, i, arr) => (
              <div
                key={c.name}
                className={`p-8 md:p-10 flex flex-col justify-between hover:bg-brand/[0.04] transition-colors ${i < arr.length - 1 ? "md:border-r border-brand/30 border-b md:border-b-0" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-brand text-xs tracking-[0.3em]">{c.n}</span>
                    <span className="font-mono text-white/40 text-[10px] uppercase tracking-widest">{c.tag}</span>
                  </div>
                  <h3 className="font-display text-5xl uppercase mb-4">{c.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">{c.desc}</p>
                </div>
                <ul className="space-y-2 border-t border-white/10 pt-6">
                  {c.specs.map((s) => (
                    <li key={s} className="flex items-start gap-3 font-mono text-[11px] uppercase tracking-widest text-white/70">
                      <span className="text-brand">+</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="px-6 py-24 border-b border-brand/20">
        <div className="max-w-7xl mx-auto">
          <SectionIndex n="02" label="Coaches // Personnel Files" />
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6">
            <h2 className="font-display text-6xl md:text-7xl uppercase leading-none">
              Meet Your<br /><span className="text-brand italic">Coaches</span>
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">03 Certified Professionals · On Deck Daily</p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { n: "01", name: "Priya R.", role: "Owner & Head Coach", spec: "Powerlifting · Programming", img: trainerElena },
              { n: "02", name: "Arjun K.", role: "Strength & Conditioning", spec: "S&C · Athlete Prep", img: trainerMarcus },
              { n: "03", name: "Divya S.", role: "HIIT & Mobility", spec: "Metabolic · Movement", img: trainerSasha },
            ].map((t) => (
              <div key={t.name} className="group relative overflow-hidden border border-white/10">
                <img
                  src={t.img}
                  alt={t.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-brand text-dark px-2 py-0.5 font-bold">
                  {t.n}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-dark via-dark/80 to-transparent">
                  <p className="font-display text-3xl uppercase leading-none">{t.name}</p>
                  <p className="text-brand text-xs font-bold uppercase tracking-widest mt-2">{t.role}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">{t.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TransformationSection />

      {/* Reviews */}

      <section className="bg-brand text-dark py-24 px-6 border-y-4 border-dark relative overflow-hidden">
        <div
          className="absolute -top-16 -right-10 opacity-10 pointer-events-none select-none font-display text-[20rem] leading-none tracking-tighter"
          style={{ WebkitTextStroke: "2px #0F0F0F", color: "transparent" }}
        >
          4.9
        </div>
        <div className="max-w-7xl mx-auto relative">
          <SectionIndex n="03" label="Verified // Google Reviews" />
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <h2 className="font-display text-6xl md:text-7xl uppercase leading-none">
              What Chennai<br /><span className="italic">Says</span>
            </h2>
            <div className="text-right">
              <div className="font-display text-6xl leading-none">4.9 ★</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] mt-2">755 Google Interactions</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-1 border border-dark">
            {[
              { q: "Best gym in Chromepet, hands down. The coaches actually care about your form and progress — not just selling memberships.", a: "Karthik R." },
              { q: "A gym where women actually feel comfortable training heavy. Women-owned and it shows — the environment is unmatched.", a: "Meera V." },
              { q: "Been training here for two years. Real equipment, real coaching, real results. Nothing flashy — just work that pays off.", a: "Sathish B." },
            ].map((r, i, arr) => (
              <div key={r.a} className={`p-8 md:p-10 bg-brand ${i < arr.length - 1 ? "border-b md:border-b-0 md:border-r border-dark" : ""}`}>
                <div className="flex items-center gap-2 mb-6 font-mono text-xs">
                  <span>★★★★★</span>
                  <span className="opacity-60">// Verified</span>
                </div>
                <p className="text-lg md:text-xl font-bold leading-tight mb-8">"{r.q}"</p>
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] border-t border-dark/20 pt-4">
                  <span className="font-bold">— {r.a}</span>
                  <span className="opacity-60">Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-24 px-6 border-b border-brand/20">
        <div className="max-w-6xl mx-auto">
          <SectionIndex n="04" label="Membership // Access Tiers" />
          <div className="text-center mb-14">
            <h2 className="font-display text-6xl md:text-7xl uppercase italic">
              Membership <span className="text-brand">Plans</span>
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mt-4">Call for current offers · No hidden fees</p>
          </div>
          <div className="grid md:grid-cols-2 border border-brand/30">
            <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-brand/30 flex flex-col">
              <div className="flex items-center justify-between mb-8 font-mono text-[11px] uppercase tracking-[0.3em]">
                <span className="text-brand">Tier 01</span>
                <span className="text-white/40">Standard</span>
              </div>
              <h3 className="font-display text-4xl uppercase mb-6">Gym Access</h3>
              <div className="mb-10">
                <span className="font-display text-7xl">₹1,500</span>
                <span className="text-white/40 text-sm uppercase font-mono tracking-widest ml-2">/ month*</span>
              </div>
              <ul className="space-y-3 mb-10 text-sm text-white/70 flex-grow">
                {["Full facility access · 4:30 AM – 9:30 PM", "All equipment & cardio zones", "Group class drop-ins", "Locker & shower access"].map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-brand">+</span> {s}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${PHONE_TEL}`}
                className="block text-center w-full py-4 border border-white/20 font-mono text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-dark transition-colors"
              >
                Call to Join
              </a>
            </div>

            <div className="p-10 md:p-12 bg-brand text-dark flex flex-col relative">
              <div className="absolute top-0 right-0 bg-dark text-brand px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">
                Most Popular
              </div>
              <div className="flex items-center justify-between mb-8 font-mono text-[11px] uppercase tracking-[0.3em]">
                <span>Tier 02</span>
                <span className="opacity-60">Elite</span>
              </div>
              <h3 className="font-display text-4xl uppercase mb-6">Personal Training</h3>
              <div className="mb-10">
                <span className="font-display text-7xl">₹4,000</span>
                <span className="text-dark/60 text-sm uppercase font-mono tracking-widest ml-2">/ month*</span>
              </div>
              <ul className="space-y-3 mb-10 text-sm flex-grow">
                {["Everything in Gym Access", "1-on-1 sessions with head coach", "Custom program & nutrition plan", "Weekly progress check-ins"].map((s) => (
                  <li key={s} className="flex gap-3">
                    <span>+</span> {s}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${PHONE_TEL}`}
                className="block text-center w-full py-4 bg-dark text-brand font-mono text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-dark transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
          <p className="text-center font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mt-6">*Indicative pricing. Contact us for exact rates and offers.</p>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-24 px-6 bg-white/[0.02] border-b border-brand/20">
        <div className="max-w-7xl mx-auto">
          <SectionIndex n="05" label="Visit // Signal Coordinates" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-6xl md:text-7xl uppercase leading-none mb-10">
                Come <span className="text-brand italic">Sweat</span>
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-brand text-[10px] uppercase tracking-[0.3em] mb-2">01 // Address</p>
                  <p className="text-white/80 leading-relaxed">{ADDRESS_FULL}</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-brand underline underline-offset-4"
                  >
                    Get Directions →
                  </a>
                </div>
                <div>
                  <p className="font-mono text-brand text-[10px] uppercase tracking-[0.3em] mb-2">02 // Phone</p>
                  <a href={`tel:${PHONE_TEL}`} className="font-display text-4xl hover:text-brand transition-colors">
                    {PHONE}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-brand text-[10px] uppercase tracking-[0.3em] mb-2">03 // Hours</p>
                  <p className="text-white/80">
                    Monday – Sunday · <span className="font-bold">4:30 AM – 9:30 PM</span>
                  </p>
                  <p className="text-white/40 text-sm mt-1">Open early. Closed late. No excuses.</p>
                </div>
                <div>
                  <p className="font-mono text-brand text-[10px] uppercase tracking-[0.3em] mb-2">04 // Coordinates</p>
                  <p className="font-mono">{COORDS}</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[480px] border border-brand/30 overflow-hidden">
              <iframe
                title="Total Fitness Studio location map"
                src="https://www.google.com/maps?q=Total+Fitness+Studio+Chromepet+Chennai&output=embed"
                className="absolute inset-0 w-full h-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] bg-dark/80 border border-brand/40 text-brand px-3 py-1">
                Live Location
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 border-b border-brand/20">
        <div className="max-w-5xl mx-auto">
          <SectionIndex n="06" label="FAQ // Frequently Asked" />
          <h2 className="font-display text-6xl md:text-7xl uppercase leading-none mb-14">
            Before You <span className="text-brand italic">Walk In</span>
          </h2>
          <div className="border border-brand/30 divide-y divide-brand/20">
            {FAQS.map((f, i) => (
              <details key={f.q} className="group px-6 md:px-10 py-6 open:bg-brand/[0.03]">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-brand text-xs tracking-[0.3em] mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl md:text-3xl uppercase leading-tight">
                      {f.q}
                    </span>
                  </div>
                  <span className="font-display text-brand text-3xl transition-transform group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-white/70 leading-relaxed mt-4 md:pl-14 max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-dark py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none select-none flex items-center justify-center"
          aria-hidden="true"
        >
          <span
            className="font-display text-[28rem] leading-none tracking-tighter"
            style={{ WebkitTextStroke: "2px #E2FF00", color: "transparent" }}
          >
            TFS
          </span>
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
          <SectionIndex n="07" label="End Transmission" />
          <h2 className="font-display text-6xl md:text-9xl mb-8 italic uppercase leading-[0.85]">
            Show Up.<br /><span className="text-brand">Every Day.</span>
          </h2>
          <p className="text-white/50 mb-12 max-w-xl mx-auto">
            Chennai's most-loved fitness studio is one call away. Book your first session free.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-4 bg-brand text-dark px-10 py-5 font-display text-3xl md:text-4xl tracking-wide hover:bg-white transition-colors"
          >
            {PHONE}
            <span>→</span>
          </a>
          <div className="mt-20 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            <p>© {new Date().getFullYear()} Total Fitness Studio</p>
            <p className="md:text-center">{ADDRESS_SHORT}</p>
            <p className="md:text-right">Women-Owned · LGBTQ+ · 4.9 ★</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 border-2 border-dark shadow-[0_0_0_2px_#0F0F0F,0_0_0_4px_#E2FF00]">
        <a
          href={`tel:${PHONE_TEL}`}
          className="bg-brand text-dark py-4 px-4 font-display text-xl tracking-wide flex items-center justify-center gap-2 hover:bg-white transition-colors"
          aria-label="Call Total Fitness Studio"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          CALL
        </a>
        <div className="relative">
          <button
            onClick={() => setWaOpen((o) => !o)}
            className="w-full bg-dark text-brand py-4 px-4 font-display text-xl tracking-wide flex items-center justify-center gap-2 hover:bg-white hover:text-dark transition-colors"
            aria-expanded={waOpen}
            aria-controls="wa-menu"
            aria-label="Open WhatsApp chat options"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.298-1.045 1.02-1.045 2.494 0 1.475 1.07 2.896 1.219 3.093.149.198 2.096 3.195 5.078 4.48.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.674-9.886c-2.924 0-5.303 2.38-5.303 5.303 0 1.05.306 2.07.884 2.947l.604.894-.256 1.229 1.192-.623.623.368c.852.502 1.826.767 2.812.767h.002c2.923 0 5.302-2.38 5.302-5.302 0-2.924-2.379-5.303-5.302-5.303m0 11.604c-1.06 0-2.096-.284-3.004-.821l-.215-.127-2.25 1.178.481-2.313-.157-.25a4.354 4.354 0 01-.663-2.302c0-2.407 1.958-4.365 4.365-4.365s4.365 1.958 4.365 4.365-1.958 4.365-4.365 4.365" />
            </svg>
            CHAT
          </button>
          {waOpen && (
            <div
              id="wa-menu"
              className="absolute bottom-full right-0 mb-2 w-56 bg-dark border-2 border-brand shadow-[0_0_0_2px_#0F0F0F,0_0_0_4px_#E2FF00] overflow-hidden"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_INQUIRY_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-white hover:bg-brand hover:text-dark transition-colors border-b border-brand/30"
              >
                General inquiry
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TRIAL_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-white hover:bg-brand hover:text-dark transition-colors"
              >
                Book free trial
              </a>
            </div>
          )}
        </div>
      </div>

      {/* SEO: LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
      />
    </div>
  );
}
