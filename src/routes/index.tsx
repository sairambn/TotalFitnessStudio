import { createFileRoute } from "@tanstack/react-router";
import { TransformationSection } from "@/components/transformations";
import {
  SITE,
  telUrl,
  whatsappUrl,
  WHATSAPP_MESSAGES,
  localBusinessJsonLd,
} from "@/lib/site";
import { ArchGallery } from "@/components/ui/arch-gallery";
import transform1After from "@/assets/transform-1-after.jpg";
import transform2After from "@/assets/transform-2-after.jpg";
import transform3After from "@/assets/transform-3-after.jpg";
import heroAthlete from "@/assets/hero-athlete.jpg";
import transform1Before from "@/assets/transform-3-before.jpg";
import transform2Before from "@/assets/transform-2-before.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} | Best Unisex Gym in Chromepet` },
      {
        name: "description",
        content: `${SITE.tagline}. ${SITE.rating}★ from ${SITE.reviewCount}+ reviews. Open ${SITE.hours.label}. Free trial available. Located ${SITE.addressShort}.`,
      },
      { name: "keywords", content: SITE.keywords.join(", ") },
      { property: "og:title", content: `${SITE.name} | Chromepet` },
      { property: "og:description", content: SITE.tagline },
      { property: "og:type", content: "website" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Chromepet, Chennai" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          localBusinessJsonLd(
            "https://total-fitness-studio-livid.vercel.app",
            "https://total-fitness-studio-livid.vercel.app/og.jpg",
          ),
        ),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const galleryItems = [
    { image: { src: transform1After, alt: "After transformation strong build" } },
    { image: { src: transform2After, alt: "After transformation shredded physique" } },
    { image: { src: transform3After, alt: "Featured after transformation result" } },
    { image: { src: transform3After, alt: "Powerful flex at Total Fitness Studio" } },
    { image: { src: heroAthlete, alt: "Athlete training hard in the gym" } },
    { image: { src: transform1Before, alt: "Starting point before transformation" } },
    { image: { src: transform2Before, alt: "Before progress photo" } },
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="/" className="font-display text-2xl tracking-wide text-brand">
            TOTAL FITNESS
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
            <a href="#programs" className="hover:text-brand transition-colors">Programs</a>
            <a href="#results" className="hover:text-brand transition-colors">Results</a>
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={telUrl()}
              className="hidden sm:inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-brand hover:text-brand transition-colors"
            >
              Call
            </a>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-dark hover:bg-white transition-colors"
            >
              Free Trial
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-6 animate-fade-up">
            {SITE.rating}★ · {SITE.reviewCount}+ Google reviews · Unisex
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tight animate-fade-up delay-100">
            Chromepet&apos;s
            <br />
            <span className="text-brand">Highest Rated</span>
            <br />
            Gym
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-white/60 text-lg leading-relaxed animate-fade-up delay-200">
            Real coaches. Real equipment. Real results. Open {SITE.hours.label}.
            Located above Axis Bank, Hasthinapuram.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-dark hover:bg-white transition-colors shadow-[0_0_40px_rgba(226,255,0,0.35)]"
            >
              Book Free Trial
              <span>→</span>
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-white hover:border-white/50 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-8 md:py-12 border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">
            Member transformations
          </p>
          <ArchGallery
            items={galleryItems}
            cardWidth={170}
            cardHeight={240}
            cornerRadius={16}
            className="py-4"
          />
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">What we offer</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight mb-4">
            Training that
            <br />
            <span className="text-brand">actually works</span>
          </h2>
          <p className="max-w-2xl text-white/60 text-lg mb-14">
            From your first session to competition prep — clear programs, proper form coaching, and coaches who care about your progress.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 card-lift">
              <p className="font-mono text-[10px] uppercase tracking-wider text-brand mb-3">01</p>
              <h3 className="font-display text-2xl uppercase mb-3">Strength</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Full free-weight floor, racks, platforms and cable stacks. Progressive overload with form checks so you build muscle safely.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Barbells · Racks · Platforms</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Form coaching</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Progressive overload</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 card-lift">
              <p className="font-mono text-[10px] uppercase tracking-wider text-brand mb-3">02</p>
              <h3 className="font-display text-2xl uppercase mb-3">Cardio + HIIT</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                High-intensity sessions and cardio zones designed for fat loss and conditioning. Small groups, clear heart-rate targets.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Treadmills · Bikes · Rowers</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Class size limited</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Heart-rate zones</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 card-lift">
              <p className="font-mono text-[10px] uppercase tracking-wider text-brand mb-3">03</p>
              <h3 className="font-display text-2xl uppercase mb-3">Personal Training</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Custom plans, nutrition guidance and weekly check-ins. One-on-one accountability that gets real results.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Bespoke programming</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Nutrition support</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-brand" />Weekly check-ins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <div id="results">
        <TransformationSection />
      </div>

      {/* About + Visit */}
      <section id="about" className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">Why train here</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight">
              Built for
              <br />
              <span className="text-brand">Real Progress</span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              Unisex gym above Axis Bank in Hasthinapuram. Serious equipment, coaches who actually coach, and a community that shows up early. Open long hours so you can train around your life.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Open {SITE.hours.label} every day
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {SITE.rating}★ from {SITE.reviewCount}+ reviews
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Serving {SITE.areasServed.slice(0, 4).join(", ")} & more
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Women-owned · Unisex floor
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="font-display text-2xl uppercase mb-4">Visit us</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {SITE.addressFull}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-brand px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-dark hover:bg-white transition-colors"
              >
                Open in Maps
              </a>
              <a
                href={telUrl()}
                className="inline-flex justify-center items-center border border-white/20 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:border-brand hover:text-brand transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4 text-center">Common questions</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight text-center mb-12">
            Before you walk in
          </h2>

          <div className="space-y-4">
            <details className="group rounded-xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
              <summary className="cursor-pointer list-none px-6 py-5 font-medium flex items-center justify-between">
                Where exactly are you in Chromepet?
                <span className="text-brand text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road — above Axis Bank in Gayathri Nagar, Hasthinapuram. About two minutes from Chromepet railway station.
              </div>
            </details>

            <details className="group rounded-xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
              <summary className="cursor-pointer list-none px-6 py-5 font-medium flex items-center justify-between">
                Is there women-only timing?
                <span className="text-brand text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                The floor is open to everyone all day. Our head coach also runs dedicated women’s strength blocks in the morning and evening. Being women-owned, comfort and safety come first.
              </div>
            </details>

            <details className="group rounded-xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
              <summary className="cursor-pointer list-none px-6 py-5 font-medium flex items-center justify-between">
                What are the membership fees?
                <span className="text-brand text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                Gym access starts at ₹1,500/month. Personal training with the head coach starts at ₹4,000/month. Quarterly and annual packages have good discounts. Call or WhatsApp for current offers.
              </div>
            </details>

            <details className="group rounded-xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
              <summary className="cursor-pointer list-none px-6 py-5 font-medium flex items-center justify-between">
                Do you have parking?
                <span className="text-brand text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                Yes. Two-wheeler parking on-site. Car parking available on Rajendra Prasad Road and the adjoining lane.
              </div>
            </details>

            <details className="group rounded-xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
              <summary className="cursor-pointer list-none px-6 py-5 font-medium flex items-center justify-between">
                Can I try before joining?
                <span className="text-brand text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                Yes. Message us on WhatsApp or call to book a free trial session. No pressure — just come train and decide.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 md:py-28 bg-brand text-dark">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight">
            Ready to start?
          </h2>
          <p className="mt-4 text-dark/70 text-lg">
            Message us on WhatsApp or call. Free trial session available.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dark text-brand px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] hover:bg-black transition-colors"
            >
              WhatsApp Free Trial
            </a>
            <a
              href={telUrl()}
              className="inline-flex items-center gap-2 border-2 border-dark px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] hover:bg-dark hover:text-brand transition-colors"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p className="font-display text-xl text-white/80">TOTAL FITNESS STUDIO</p>
          <p>{SITE.addressShort}</p>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 flex md:hidden border-t border-white/10 bg-dark/95 backdrop-blur-md">
        <a
          href={telUrl()}
          className="flex-1 py-4 text-center font-mono text-xs font-bold uppercase tracking-wider border-r border-white/10"
        >
          Call
        </a>
        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 text-center font-mono text-xs font-bold uppercase tracking-wider bg-brand text-dark"
        >
          Free Trial
        </a>
      </div>
    </div>
  );
}
