import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAthlete from "@/assets/hero-athlete.jpg";
import trainerElena from "@/assets/trainer-elena.jpg";
import trainerMarcus from "@/assets/trainer-marcus.jpg";
import trainerSasha from "@/assets/trainer-sasha.jpg";
import { TransformationSection } from "@/components/transformations";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { SITE, WHATSAPP_MESSAGES, localBusinessJsonLd, telUrl, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
});

const LOCAL_BUSINESS_JSONLD = localBusinessJsonLd(
  "https://project--aa9bf42c-5971-444d-b50f-21cf3127d23f.lovable.app",
  "https://project--aa9bf42c-5971-444d-b50f-21cf3127d23f.lovable.app/og.jpg",
);

const FAQS = [
  {
    q: "Where exactly are you in Chromepet?",
    a: "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road — above Axis Bank in Gayathri Nagar, Hasthinapuram. Two minutes from Chromepet railway station.",
  },
  {
    q: "Do you offer a free trial?",
    a: `Yes. First personal training session is free — call ${SITE.phoneDisplay} to book a slot. Walk-ins welcome for a facility tour any time between 4:30 AM and 9:30 PM.`,
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

const NAV_LINKS = [
  { href: "#programs", label: "01 Programs" },
  { href: "#trainers", label: "02 Coaches" },
  { href: "#transformations", label: "03 Results" },
  { href: "#membership", label: "04 Membership" },
  { href: "#visit", label: "05 Visit" },
  { href: "#faq", label: "06 FAQ" },
] as const;

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
  const rootRef = useRevealOnScroll();

  return (
    <div
      ref={rootRef}
      className="bg-dark font-sans text-white min-h-screen selection:bg-brand selection:text-dark pb-24 md:pb-0"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand focus:text-dark focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase"
      >
        Skip to content
      </a>

      {/* Sticky glass nav */}
      <nav className="sticky top-0 z-40 border-b border-brand/20 nav-glass">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#" className="flex items-center gap-4 group">
            <div className="w-2 h-2 bg-brand animate-brand-pulse rounded-full" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl md:text-2xl tracking-tighter uppercase group-hover:text-brand transition-colors">
                {SITE.name}
              </span>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mt-1">
                Chromepet // 600044
              </span>
            </div>
          </a>
          <div className="hidden lg:flex gap-5 xl:gap-7 font-mono text-[11px] uppercase tracking-[0.25em] text-white/60">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={telUrl()}
            className="group btn-shimmer bg-brand text-dark px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-white transition-colors flex items-center gap-2"
          >
            Call
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </nav>

      <main id="main">
        {/* Hero */}
        <header className="relative overflow-hidden">
          <div className="absolute -top-10 -left-10 opacity-[0.06] pointer-events-none select-none">
            <span
              className="font-display text-[22rem] leading-none tracking-tighter"
              style={{ WebkitTextStroke: "2px white", color: "transparent" }}
            >
              ELITE
            </span>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-16">
            <div className="relative border border-brand/30 bg-black/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 animate-scale-in">
              <div className="lg:col-span-8 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-brand/30 flex flex-col justify-between min-h-[560px]">
                <div>
                  <div className="animate-fade-up">
                    <SectionIndex n="00" label="System Protocol // MMXXVI" />
                  </div>
                  <h1 className="font-display text-white text-7xl md:text-[10rem] leading-[0.85] tracking-tighter animate-fade-up delay-100">
                    TOTAL <span className="text-brand">FITNESS</span>
                    <br />
                    STUDIO
                  </h1>
                  <div className="flex items-baseline gap-4 mt-6 animate-fade-up delay-200">
                    <p className="font-sans font-bold text-xl uppercase tracking-widest text-white/60">
                      Chromepet · Chennai
                    </p>
                    <div className="h-px flex-grow bg-white/20" />
                  </div>
                  <p className="mt-8 max-w-lg text-white/70 leading-relaxed animate-fade-up delay-300">
                    Chennai&apos;s highest-rated fitness studio. Serious equipment, proven coaching, and a
                    community that shows up at 4:30 AM. Rated{" "}
                    <span className="text-brand font-bold">{SITE.rating} ★</span> across{" "}
                    {SITE.reviewCount} verified Google interactions.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap items-end gap-10 animate-fade-up delay-400">
                  <a href={telUrl()} className="group cursor-pointer">
                    <div className="font-display text-brand text-4xl group-hover:translate-x-2 transition-transform">
                      JOIN THE RANKS
                    </div>
                    <div className="h-1 w-full bg-brand mt-1 origin-left group-hover:scale-x-110 transition-transform" />
                  </a>
                  <div className="flex flex-col">
                    <span className="font-mono text-white/40 text-[10px] uppercase tracking-widest mb-1">
                      Coordinates
                    </span>
                    <span className="font-mono font-bold">{SITE.coords.label}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-white/40 text-[10px] uppercase tracking-widest mb-1">
                      Rating
                    </span>
                    <span className="font-bold">
                      {SITE.rating} ★ · {SITE.reviewCount} Google
                    </span>
                  </div>
                </div>
              </div>

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
                  href={telUrl()}
                  className="mt-10 w-full btn-shimmer bg-dark text-brand py-5 px-6 font-display text-3xl tracking-wide hover:bg-white hover:text-dark transition-all active:scale-95 flex items-center justify-between"
                >
                  START PROTOCOL
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="absolute -top-2 -left-2 w-24 h-24 border-t-2 border-l-2 border-brand opacity-60" />
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border-b-2 border-r-2 border-brand opacity-60" />
          </div>
        </header>

        {/* Marquee */}
        <section className="bg-brand py-3 overflow-hidden whitespace-nowrap border-y-2 border-dark">
          <div className="flex gap-10 animate-marquee font-mono text-sm text-dark uppercase tracking-[0.3em] font-bold">
            <span>
              ● {SITE.rating} STAR RATED &nbsp;·&nbsp; {SITE.reviewCount} GOOGLE INTERACTIONS
              &nbsp;·&nbsp; WOMEN-OWNED &nbsp;·&nbsp; OPEN 04:30 — 21:30 &nbsp;·&nbsp; LGBTQ+
              FRIENDLY &nbsp;·&nbsp; CHROMEPET / CHENNAI &nbsp;·&nbsp; ● {SITE.rating} STAR RATED
              &nbsp;·&nbsp; {SITE.reviewCount} GOOGLE INTERACTIONS &nbsp;·&nbsp; WOMEN-OWNED
              &nbsp;·&nbsp; OPEN 04:30 — 21:30 &nbsp;·&nbsp; LGBTQ+ FRIENDLY &nbsp;·&nbsp; CHROMEPET
              / CHENNAI &nbsp;·&nbsp;
            </span>
          </div>
        </section>

        {/* Facility band */}
        <section className="relative border-b border-brand/20">
          <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6 reveal">
              <span className="font-mono text-brand text-[10px] uppercase tracking-[0.4em]">
                Facility // Sector 044
              </span>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase">
                Train Like
                <br />
                You <span className="text-brand italic">Mean It</span>
              </h2>
              <p className="text-white/60 leading-relaxed max-w-md">
                Every square foot engineered for one thing — progress you can measure. Iron on the
                floor. Coaches on the deck. No mirrors-only theatre.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
                {[
                  ["Members", "1,200+"],
                  ["Weekly Sessions", "480"],
                  ["PT Coaches", "03"],
                  ["Sq. Ft.", "4,800"],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    className={`border border-white/10 p-4 card-lift reveal reveal-delay-${i + 1}`}
                  >
                    <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">{k}</div>
                    <div className="font-display text-3xl text-brand">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 relative reveal reveal-delay-2">
              <img
                src={heroAthlete}
                alt="Athlete training at Total Fitness Studio Chromepet"
                width={1200}
                height={900}
                className="w-full aspect-[4/3] object-cover border-2 border-brand grayscale-[0.3] transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] bg-dark/80 border border-brand/40 text-brand px-3 py-1">
                REC ● LIVE FLOOR
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand text-dark p-5 hidden md:block max-w-xs animate-float">
                <div className="font-mono text-[10px] uppercase tracking-widest mb-1">Verified</div>
                <div className="font-display text-3xl leading-none">
                  {SITE.rating} ★ · {SITE.reviewCount} REVIEWS
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest mt-2">GOOGLE / BUSINESS</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="px-6 py-24 border-b border-brand/20">
          <div className="max-w-7xl mx-auto">
            <div className="reveal">
              <SectionIndex n="01" label="Programs // Training Systems" />
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 reveal">
              <h2 className="font-display text-6xl md:text-7xl uppercase leading-none">
                Built for
                <br />
                <span className="text-brand italic">Every Body</span>
              </h2>
              <p className="text-white/50 max-w-md">
                From your first squat to your first competition — programs designed for real progress,
                not vanity metrics.
              </p>
            </div>
            <div className="grid md:grid-cols-3 border border-brand/30">
              {[
                {
                  n: "01",
                  name: "Strength",
                  tag: "Weight Training",
                  desc: "Full free-weight floor, cable stacks, and expert form coaching. Build real muscle.",
                  specs: ["Barbells · Racks · Platforms", "Progressive overload", "Form video review"],
                },
                {
                  n: "02",
                  name: "Cardio + HIIT",
                  tag: "Conditioning",
                  desc: "High-intensity conditioning classes and cardio zones for serious fat loss.",
                  specs: ["Treadmills · Bikes · Rowers", "Class capacity 12", "Heart-rate zones"],
                },
                {
                  n: "03",
                  name: "Personal Training",
                  tag: "1-on-1",
                  desc: "Custom programs, nutrition guidance, and accountability. Results, guaranteed.",
                  specs: ["Bespoke programming", "Nutrition plan", "Weekly check-ins"],
                },
              ].map((c, i, arr) => (
                <div
                  key={c.name}
                  className={`p-8 md:p-10 flex flex-col justify-between hover:bg-brand/[0.04] transition-colors card-lift reveal reveal-delay-${i + 1} ${i < arr.length - 1 ? "md:border-r border-brand/30 border-b md:border-b-0" : ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-brand text-xs tracking-[0.3em]">{c.n}</span>
                      <span className="font-mono text-white/40 text-[10px] uppercase tracking-widest">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-5xl uppercase mb-4">{c.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-8">{c.desc}</p>
                  </div>
                  <ul className="space-y-2 border-t border-white/10 pt-6">
                    {c.specs.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 font-mono text-[11px] uppercase tracking-widest text-white/70"
                      >
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
            <div className="reveal">
              <SectionIndex n="02" label="Coaches // Personnel Files" />
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6 reveal">
              <h2 className="font-display text-6xl md:text-7xl uppercase leading-none">
                Meet Your
                <br />
                <span className="text-brand italic">Coaches</span>
              </h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
                03 Certified Professionals · On Deck Daily
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-1">
              {[
                {
                  n: "01",
                  name: "Priya R.",
                  role: "Owner & Head Coach",
                  spec: "Powerlifting · Programming",
                  img: trainerElena,
                },
                {
                  n: "02",
                  name: "Arjun K.",
                  role: "Strength & Conditioning",
                  spec: "S&C · Athlete Prep",
                  img: trainerMarcus,
                },
                {
                  n: "03",
                  name: "Divya S.",
                  role: "HIIT & Mobility",
                  spec: "Metabolic · Movement",
                  img: trainerSasha,
                },
              ].map((t, i) => (
                <div
                  key={t.name}
                  className={`group relative overflow-hidden border border-white/10 reveal reveal-delay-${i + 1}`}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-brand text-dark px-2 py-0.5 font-bold">
                    {t.n}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-dark via-dark/80 to-transparent">
                    <p className="font-display text-3xl uppercase leading-none">{t.name}</p>
                    <p className="text-brand text-xs font-bold uppercase tracking-widest mt-2">{t.role}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">
                      {t.spec}
                    </p>
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
            {SITE.rating}
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div className="reveal">
              <SectionIndex n="03" label="Verified // Google Reviews" />
            </div>
            <div className="flex items-end justify-between gap-6 mb-12 flex-wrap reveal">
              <h2 className="font-display text-6xl md:text-7xl uppercase leading-none">
                What Chennai
                <br />
                <span className="italic">Says</span>
              </h2>
              <div className="text-right">
                <div className="font-display text-6xl leading-none">{SITE.rating} ★</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] mt-2">
                  {SITE.reviewCount} Google Interactions
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-1 border border-dark">
              {[
                {
                  q: "Best gym in Chromepet, hands down. The coaches actually care about your form and progress — not just selling memberships.",
                  a: "Karthik R.",
                },
                {
                  q: "A gym where women actually feel comfortable training heavy. Women-owned and it shows — the environment is unmatched.",
                  a: "Meera V.",
                },
                {
                  q: "Been training here for two years. Real equipment, real coaching, real results. Nothing flashy — just work that pays off.",
                  a: "Sathish B.",
                },
              ].map((r, i, arr) => (
                <div
                  key={r.a}
                  className={`p-8 md:p-10 bg-brand reveal reveal-delay-${i + 1} ${i < arr.length - 1 ? "border-b md:border-b-0 md:border-r border-dark" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-6 font-mono text-xs">
                    <span>★★★★★</span>
                    <span className="opacity-60">// Verified</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold leading-tight mb-8">&ldquo;{r.q}&rdquo;</p>
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
            <div className="reveal">
              <SectionIndex n="04" label="Membership // Access Tiers" />
            </div>
            <div className="text-center mb-14 reveal">
              <h2 className="font-display text-6xl md:text-7xl uppercase italic">
                Membership <span className="text-brand">Plans</span>
              </h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 mt-4">
                Call for current offers · No hidden fees
              </p>
            </div>
            <div className="grid md:grid-cols-2 border border-brand/30">
              <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-brand/30 flex flex-col reveal card-lift">
                <div className="flex items-center justify-between mb-8 font-mono text-[11px] uppercase tracking-[0.3em]">
                  <span className="text-brand">Tier 01</span>
                  <span className="text-white/40">Standard</span>
                </div>
                <h3 className="font-display text-4xl uppercase mb-6">Gym Access</h3>
                <div className="mb-10">
                  <span className="font-display text-7xl">₹1,500</span>
                  <span className="text-white/40 text-sm uppercase font-mono tracking-widest ml-2">
                    / month*
                  </span>
                </div>
                <ul className="space-y-3 mb-10 text-sm text-white/70 flex-grow">
                  {[
                    "Full facility access · 4:30 AM – 9:30 PM",
                    "All equipment & cardio zones",
                    "Group class drop-ins",
                    "Locker & shower access",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="text-brand">+</span> {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={telUrl()}
                  className="block text-center w-full py-4 border border-white/20 font-mono text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-dark transition-colors"
                >
                  Call to Join
                </a>
              </div>

              <div className="p-10 md:p-12 bg-brand text-dark flex flex-col relative reveal reveal-delay-2 card-lift">
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
                  <span className="text-dark/60 text-sm uppercase font-mono tracking-widest ml-2">
                    / month*
                  </span>
                </div>
                <ul className="space-y-3 mb-10 text-sm flex-grow">
                  {[
                    "Everything in Gym Access",
                    "1-on-1 sessions with head coach",
                    "Custom program & nutrition plan",
                    "Weekly progress check-ins",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span>+</span> {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={telUrl()}
                  className="block text-center w-full py-4 bg-dark text-brand font-mono text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-dark transition-colors btn-shimmer"
                >
                  Get Started
                </a>
              </div>
            </div>
            <p className="text-center font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mt-6">
              *Indicative pricing. Contact us for exact rates and offers.
            </p>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="py-24 px-6 bg-white/[0.02] border-b border-brand/20">
          <div className="max-w-7xl mx-auto">
            <div className="reveal">
              <SectionIndex n="05" label="Visit // Signal Coordinates" />
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="reveal">
                <h2 className="font-display text-6xl md:text-7xl uppercase leading-none mb-10">
                  Come <span className="text-brand italic">Sweat</span>
                </h2>
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-brand text-[10px] uppercase tracking-[0.3em] mb-2">
                      01 // Address
                    </p>
                    <p className="text-white/80 leading-relaxed">{SITE.addressFull}</p>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-brand underline underline-offset-4"
                    >
                      Get Directions →
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-brand text-[10px] uppercase tracking-[0.3em] mb-2">
                      02 // Phone
                    </p>
                    <a
                      href={telUrl()}
                      className="font-display text-4xl hover:text-brand transition-colors"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-brand text-[10px] uppercase tracking-[0.3em] mb-2">
                      03 // Hours
                    </p>
                    <p className="text-white/80">
                      Monday – Sunday · <span className="font-bold">{SITE.hours.label}</span>
                    </p>
                    <p className="text-white/40 text-sm mt-1">Open early. Closed late. No excuses.</p>
                  </div>
                  <div>
                    <p className="font-mono text-brand text-[10px] uppercase tracking-[0.3em] mb-2">
                      04 // Coordinates
                    </p>
                    <p className="font-mono">{SITE.coords.label}</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[480px] border border-brand/30 overflow-hidden reveal reveal-delay-2">
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
            <div className="reveal">
              <SectionIndex n="06" label="FAQ // Frequently Asked" />
              <h2 className="font-display text-6xl md:text-7xl uppercase leading-none mb-14">
                Before You <span className="text-brand italic">Walk In</span>
              </h2>
            </div>
            <div className="border border-brand/30 divide-y divide-brand/20 reveal">
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
              style={{ WebkitTextStroke: `2px ${SITE.brand}`, color: "transparent" }}
            >
              TFS
            </span>
          </div>
          <div className="max-w-7xl mx-auto text-center relative reveal">
            <SectionIndex n="07" label="End Transmission" />
            <h2 className="font-display text-6xl md:text-9xl mb-8 italic uppercase leading-[0.85]">
              Show Up.
              <br />
              <span className="text-brand">Every Day.</span>
            </h2>
            <p className="text-white/50 mb-12 max-w-xl mx-auto">
              Chennai&apos;s most-loved fitness studio is one call away. Book your first session free.
            </p>
            <a
              href={telUrl()}
              className="inline-flex items-center gap-4 btn-shimmer bg-brand text-dark px-10 py-5 font-display text-3xl md:text-4xl tracking-wide hover:bg-white transition-colors"
            >
              {SITE.phoneDisplay}
              <span>→</span>
            </a>
            <div className="mt-20 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
              <p>© {new Date().getFullYear()} {SITE.name}</p>
              <p className="md:text-center">{SITE.addressShort}</p>
              <p className="md:text-right">Women-Owned · LGBTQ+ · {SITE.rating} ★</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Desktop WhatsApp FAB */}
      <a
        href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 h-14 w-14 items-center justify-center bg-brand text-dark shadow-[0_0_40px_rgba(226,255,0,0.45)] hover:scale-110 transition-transform animate-brand-pulse"
        aria-label="WhatsApp free trial"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.298-1.045 1.02-1.045 2.494 0 1.475 1.07 2.896 1.219 3.093.149.198 2.096 3.195 5.078 4.48.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.674-9.886c-2.924 0-5.303 2.38-5.303 5.303 0 1.05.306 2.07.884 2.947l.604.894-.256 1.229 1.192-.623.623.368c.852.502 1.826.767 2.812.767h.002c2.923 0 5.302-2.38 5.302-5.302 0-2.924-2.379-5.303-5.302-5.303m0 11.604c-1.06 0-2.096-.284-3.004-.821l-.215-.127-2.25 1.178.481-2.313-.157-.25a4.354 4.354 0 01-.663-2.302c0-2.407 1.958-4.365 4.365-4.365s4.365 1.958 4.365 4.365-1.958 4.365-4.365 4.365" />
        </svg>
      </a>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 border-2 border-dark shadow-[0_0_0_2px_#0F0F0F,0_0_0_4px_#E2FF00]">
        <a
          href={telUrl()}
          className="bg-brand text-dark py-4 px-4 font-display text-xl tracking-wide flex items-center justify-center gap-2 hover:bg-white transition-colors"
          aria-label="Call Total Fitness Studio"
        >
          CALL
        </a>
        <div className="relative">
          <button
            type="button"
            onClick={() => setWaOpen((o) => !o)}
            className="w-full bg-dark text-brand py-4 px-4 font-display text-xl tracking-wide flex items-center justify-center gap-2 hover:bg-white hover:text-dark transition-colors"
            aria-expanded={waOpen}
            aria-controls="wa-menu"
            aria-label="Open WhatsApp chat options"
          >
            CHAT
          </button>
          {waOpen && (
            <div
              id="wa-menu"
              className="absolute bottom-full right-0 mb-2 w-56 bg-dark border-2 border-brand overflow-hidden animate-fade-up"
            >
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.inquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-white hover:bg-brand hover:text-dark transition-colors border-b border-brand/30"
              >
                General inquiry
              </a>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
      />
    </div>
  );
}
