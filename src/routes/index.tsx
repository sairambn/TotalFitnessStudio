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
    {
      image: { src: transform1After, alt: "After transformation strong build" },
    },
    {
      image: {
        src: transform2After,
        alt: "After transformation shredded physique",
      },
    },
    {
      image: {
        src: transform3After,
        alt: "Featured after transformation result",
      },
    },
    {
      image: {
        src: transform3After,
        alt: "Powerful flex at Total Fitness Studio",
      },
    },
    {
      image: { src: heroAthlete, alt: "Athlete training hard in the gym" },
    },
    {
      image: {
        src: transform1Before,
        alt: "Starting point before transformation",
      },
    },
    {
      image: { src: transform2Before, alt: "Before progress photo" },
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a
            href="/"
            className="font-display text-2xl tracking-wide text-brand"
          >
            TOTAL FITNESS
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a
              href="#transformations"
              className="hover:text-brand transition-colors"
            >
              Results
            </a>
            <a href="#about" className="hover:text-brand transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-brand transition-colors">
              Contact
            </a>
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

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-6 animate-fade-up">
            {SITE.rating}★ · {SITE.reviewCount}+ reviews · Unisex
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tight animate-fade-up delay-100">
            Chromepet&apos;s
            <br />
            <span className="text-brand">Highest Rated</span>
            <br />
            Gym
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-white/60 text-lg leading-relaxed animate-fade-up delay-200">
            Real coaches. Real results. Open {SITE.hours.label}. Located above
            Axis Bank, Hasthinapuram.
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

      <section className="py-8 md:py-12 border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">
            Transformation Gallery
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

      <div id="transformations">
        <TransformationSection />
      </div>

      <section id="about" className="py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">
              Why Total Fitness
            </p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight">
              Built for
              <br />
              <span className="text-brand">Real Progress</span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              Unisex gym above Axis Bank in Hasthinapuram. Strength training,
              personal coaching, and a community that shows up. Open early to
              late so you can train around your life.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Open {SITE.hours.label}
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {SITE.rating}★ from {SITE.reviewCount}+ reviews
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Serving {SITE.areasServed.slice(0, 4).join(", ")} and more
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="font-display text-2xl uppercase mb-4">Visit Us</h3>
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

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p className="font-display text-xl text-white/80">
            TOTAL FITNESS STUDIO
          </p>
          <p>{SITE.addressShort}</p>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>

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
