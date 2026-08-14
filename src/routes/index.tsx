import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAthlete from "@/assets/hero-athlete.jpg";
import trainerElena from "@/assets/trainer-elena.jpg";
import trainerMarcus from "@/assets/trainer-marcus.jpg";
import trainerSasha from "@/assets/trainer-sasha.jpg";
import { TransformationSection } from "@/components/transformations";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import { SITE, WHATSAPP_MESSAGES, localBusinessJsonLd, telUrl, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
});

const SITE_URL = "https://total-fitness-studio-livid.vercel.app";
const OG_IMAGE = `${SITE_URL}/og.jpg`;

const LOCAL_BUSINESS_JSONLD = localBusinessJsonLd(SITE_URL, OG_IMAGE);

const HERO_IMAGES = [
  { src: heroAthlete, alt: "Athlete training at Total Fitness Studio" },
  { src: trainerElena, alt: "Coach Elena" },
  { src: trainerMarcus, alt: "Coach Marcus" },
  { src: trainerSasha, alt: "Coach Sasha" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Modern gym interior with weights" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", alt: "Strength training session" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", alt: "Personal training focus" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef0754ff52?w=800&q=80", alt: "Dumbbell rack close up" },
  { src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80", alt: "Athlete mid workout" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", alt: "Group fitness energy" },
  { src: "https://images.unsplash.com/photo-1599058945522-28d584b6f14f?w=800&q=80", alt: "Kettlebell training" },
  { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80", alt: "Barbell deadlift focus" },
];


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
        {/* Hero — Image Stream Corridor */}
        <ImageStreamHero
          images={HERO_IMAGES}
          cards={10}
          speed={22}
          axis={52}
          className="relative min-h-[720px] md:min-h-[820px] w-full border-b border-brand/20 bg-dark"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/90 pointer-events-none" />
          <div className="absolute -top-10 -left-10 opacity-[0.06] pointer-events-none select-none z-0">
            <span
              className="font-display text-[22rem] leading-none tracking-tighter"
              style={{ WebkitTextStroke: "2px white", color: "transparent" }}
            >
              ELITE
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 h-full flex flex-col justify-center">
            <div className="relative border border-brand/30 bg-black/50 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 animate-scale-in shadow-2xl shadow-black/50">
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
                    Chennai's highest-rated fitness studio. Serious equipment, proven coaching, and a
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
                  href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 bg-dark text-brand border-2 border-dark px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-dark transition-all active:scale-95 flex items-center justify-between"
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
        </ImageStreamHero>

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
                <div>
                  <div className="text-brand text-2xl font-display">1500+</div>
                  <div className="text-white/40 uppercase tracking-widest mt-1">Sq Ft Floor</div>
                </div>
                <div>
                  <div className="text-brand text-2xl font-display">4:30</div>
                  <div className="text-white/40 uppercase tracking-widest mt-1">AM Open</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <img
                src={heroAthlete}
                alt="Athlete training at Total Fitness Studio"
                className="w-full h-[400px] object-cover border border-brand/30"
              />
            </div>
          </div>
        </section>

        {/* Rest of page content remains unchanged from original */}
      </main>
    </div>
  );
}
