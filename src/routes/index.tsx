import { createFileRoute } from "@tanstack/react-router";
import { TransformationSection } from "@/components/transformations";
import { CoachesSection } from "@/components/coaches";
import { ParallaxBand } from "@/components/parallax-band";
import { SITE, telUrl, whatsappUrl, WHATSAPP_MESSAGES, localBusinessJsonLd } from "@/lib/site";
import { ArchGallery } from "@/components/ui/arch-gallery";

// Real Google photos from the gym + high quality supporting shots
const transform1After =
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxCHY6N4FHXsHJdXm9bM2s7gjVrdb9kvYRclUuo7WGUB17yEEgzstnifMx2YRtZi-tvBWDa48a7t3UH1qxxD5L0-isnMWWz_uGkjA_GJjVRF-nrngTFfvWiOCOP8gPvJ5NRBO7=w1280-h1280-k-no";
const transform2After =
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJDFed63BrcTJFknxuXGdEVNjcLA6B4cVBnpUthLsNe-7oMA-c2mhgEBFX6uM0AFDL_S9xDVYi8D9Hfp3tBGU4cBuxkF_6xtMNuvBaQikHb_y2LvT9fY25KaUiZEDpfn8jHMQ=w1280-h1280-k-no";
const transform3After =
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnfSIyt3kp3R5aywQOkhomfaTwbH2eeqNR-13TCAYzvR0rWXkQsMaujhOtK_nuVm1qsX3zfu6DJ6nT-2zavs7nKSgEgrZUR5TRsl7JnexlZ_tP4d5wrsUo-Dd5FV4Mp3HtSkg=w1280-h900-k-no";
const heroAthlete =
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndopWkfxw9GMKcHwk9yjIGGeufZr-SR3lM-QKWj8aDYU5jHSLuLV7Ug0pvO8zNIgwDVeoHUd_8lQF-V17p2uJBv_p2EtzNM7IbGwLMX6TAkfoWDIwUOUw31lQBExpjRbJoQr5Onw=w1600-h900-k-no";
const coach1 =
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHf3ofeNMUj69DE_dXWOpeUPt5v4Zl6SApYBTUm31RqM8RhLJ1BYd2ZGoU71XlnnvWimxHymN3SJS0uHprpoKw4FcYyU9-PAzCXeV6jFPB7UdfMxnG8pAAjps1W8QfW_oJDH1KPQ=w900-h1600-k-no";
const coach2 =
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFVpKdN-1lhzKAg0YEiEJ-JA_to_z46A7DgPaHJeq4C9n6hDpX-o4EDBOxnvf0WsFXzcxJABiq2WjTNJpit9wVXwrnbNOzoGbaXs5D0Lsu5reJ4MmOp02nrjoYDHZDZgp0SWWPsg=w900-h1600-k-no";
const floorShot =
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkl2eGNf2NLMSCNucEu24uLrqO2akL8c0QlNwoQIFCs-B_69MVc6bkGrmhNfFGGPVo4SyJY5JDhfVpAW_RwxZIYdaUCpiM32T-1qgsgCqKd-XBtp19HW9Rpq0KoiE1MZYK6PAlgfw=w1200-h900-k-no";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} | Best Unisex Gym in Chromepet · 4.9★` },
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
            heroAthlete,
          ),
        ),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const galleryItems = [
    { image: { src: transform1After, alt: "Member transformation after photo" } },
    { image: { src: transform2After, alt: "Shredded physique transformation" } },
    { image: { src: transform3After, alt: "Strong build result at Total Fitness" } },
    { image: { src: heroAthlete, alt: "Training on the gym floor" } },
    { image: { src: floorShot, alt: "Gym floor and equipment" } },
    { image: { src: coach1, alt: "Coach on the floor" } },
    { image: { src: coach2, alt: "Personal training session" } },
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 nav-glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
          <a href="/" className="font-display text-2xl tracking-wide text-brand">
            TOTAL FITNESS
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#programs" className="hover:text-brand transition-colors">Programs</a>
            <a href="#coaches" className="hover:text-brand transition-colors">Coaches</a>
            <a href="#results" className="hover:text-brand transition-colors">Results</a>
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
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
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/8 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-6 animate-fade-up">
            {SITE.rating}★ · {SITE.reviewCount}+ Google reviews · Unisex · Women-owned
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] uppercase leading-[0.88] tracking-tight animate-fade-up delay-100">
            Chromepet's
            <br />
            <span className="text-brand">Highest Rated</span>
            <br />
            Gym
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-white/65 text-lg leading-relaxed animate-fade-up delay-200">
            Real coaches. Serious equipment. Results that show.
            Open {SITE.hours.label}. Right above Axis Bank, Hasthinapuram.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 bg-brand px-9 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-dark hover:bg-white transition-colors shadow-[0_0_40px_rgba(226,255,0,0.35)]"
            >
              Book Free Trial
              <span>→</span>
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-white hover:border-white/60 transition-colors"
            >
              Get Directions
            </a>
          </div>

          {/* Quick proof bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-up delay-400">
            {[
              { n: "1,200+", l: "Members" },
              { n: "4.9★", l: "Google Rating" },
              { n: "4:30 AM", l: "Opens Daily" },
              { n: "798+", l: "Reviews" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-3xl md:text-4xl text-brand">{s.n}</p>
                <p className="mt-1 text-[11px] font-mono uppercase tracking-wider text-white/45">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-10 md:py-14 border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3">
            Real members · Real floor
          </p>
          <ArchGallery items={galleryItems} cardWidth={170} cardHeight={240} cornerRadius={16} className="py-2" />
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
            Clear programs, proper form coaching, and coaches who stay on the floor with you.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "Strength",
                d: "Full free-weight floor with racks, platforms and cable stacks. Progressive overload with form checks so you build muscle the right way.",
                items: ["Barbells · Racks · Platforms", "Form coaching", "Progressive overload"],
              },
              {
                n: "02",
                t: "Cardio + HIIT",
                d: "High intensity sessions and cardio zones built for fat loss and conditioning. Small groups, clear targets.",
                items: ["Treadmills · Bikes · Rowers", "Limited class size", "Heart-rate focus"],
              },
              {
                n: "03",
                t: "Personal Training",
                d: "Custom plans, nutrition guidance and weekly check-ins. One-on-one accountability that produces real results.",
                items: ["Custom programming", "Nutrition support", "Weekly check-ins"],
              },
            ].map((p) => (
              <div key={p.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 card-lift">
                <p className="font-mono text-[10px] uppercase tracking-wider text-brand mb-3">{p.n}</p>
                <h3 className="font-display text-2xl uppercase mb-3">{p.t}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{p.d}</p>
                <ul className="space-y-2 text-sm text-white/80">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoachesSection />
      <ParallaxBand />

      <div id="results">
        <TransformationSection />
      </div>

      {/* About */}
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
              Unisex gym above Axis Bank in Hasthinapuram. Serious equipment, coaches who actually coach, and a community that shows up early. Long hours so you can train around your life.
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
            <p className="text-white/70 text-sm leading-relaxed mb-6">{SITE.addressFull}</p>
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
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight text-center mb-12">Before you walk in</h2>
          <div className="space-y-4">
            {[
              {
                q: "Where exactly are you in Chromepet?",
                a: "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road — above Axis Bank in Gayathri Nagar, Hasthinapuram. About two minutes from Chromepet railway station.",
              },
              {
                q: "Is there women-only timing?",
                a: "The floor is open to everyone all day. Our coaches also run dedicated women’s strength blocks in the morning and evening. Being women-owned, comfort and safety come first.",
              },
              {
                q: "What are the membership fees?",
                a: "Gym access starts at ₹1,500/month. Personal training with the head coach starts at ₹4,000/month. Quarterly and annual packages have good discounts. Call or WhatsApp for current offers.",
              },
              {
                q: "Do you have parking?",
                a: "Yes. Two-wheeler parking on-site. Car parking available on Rajendra Prasad Road and the adjoining lane.",
              },
              {
                q: "Can I try before joining?",
                a: "Yes. Message us on WhatsApp or call to book a free trial session. No pressure — just come train and decide.",
              },
            ].map((f) => (
              <details key={f.q} className="group rounded-xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
                <summary className="cursor-pointer list-none px-6 py-5 font-medium flex items-center justify-between">
                  {f.q}
                  <span className="text-brand text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 md:py-28 bg-brand text-dark">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight">Ready to start?</h2>
          <p className="mt-4 text-dark/70 text-lg">Message us on WhatsApp or call. Free trial session available.</p>
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
        <a href={telUrl()} className="flex-1 py-4 text-center font-mono text-xs font-bold uppercase tracking-wider border-r border-white/10">
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
