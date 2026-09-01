import { createFileRoute } from "@tanstack/react-router";
import { TransformationSection } from "@/components/transformations";
import { CoachesSection } from "@/components/coaches";
import { ParallaxBand } from "@/components/parallax-band";
import { SITE, telUrl, whatsappUrl, WHATSAPP_MESSAGES, localBusinessJsonLd } from "@/lib/site";
import { ArchGallery } from "@/components/ui/arch-gallery";

// Real Google photos from the gym (live Maps media)
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
const gymFloorLive =
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqm2DSoYG8kA-ZtDXc011CXm6kQj91UORDrbxcBORgyzuLr9O4oBZQYaS0JjqpwEkrU_mo1hji_qHDxcNGekV2MtTTZTQXqyQ-cg-ueFw-Hl-lwQZdqdJqm22PUlyB3LU3YGlIfOw=w1600-h900-k-no";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} | ${SITE.nameTa} · 4.9★ Chromepet` },
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
    { image: { src: gymFloorLive, alt: "Live gym floor at Total Fitness Studio" } },
    { image: { src: transform1After, alt: "Member transformation" } },
    { image: { src: transform2After, alt: "Shredded physique result" } },
    { image: { src: transform3After, alt: "Strong build result" } },
    { image: { src: heroAthlete, alt: "Training on the gym floor" } },
    { image: { src: floorShot, alt: "Equipment and floor" } },
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
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
            <a href="#programs" className="hover:text-brand transition-colors">Programs</a>
            <a href="#reviews" className="hover:text-brand transition-colors">Reviews</a>
            <a href="#gallery" className="hover:text-brand transition-colors">Gallery</a>
            <a href="#trial" className="hover:text-brand transition-colors">Free Trial</a>
            <a href="#visit" className="hover:text-brand transition-colors">Visit</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={SITE.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-brand hover:text-brand transition-colors"
            >
              Review
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
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/8 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-5 animate-fade-up">
            {SITE.rating}★ · {SITE.reviewCount}+ Google reviews · Women-owned · LGBTQ+ friendly
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] uppercase leading-[0.88] tracking-tight animate-fade-up delay-100">
            <span lang="ta">{SITE.nameTa}</span>
            <br />
            <span className="text-brand">{SITE.name}</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-white/65 text-lg leading-relaxed animate-fade-up delay-200">
            <span lang="ta">{SITE.taglineTa}</span>
            <br />
            {SITE.tagline}. Open {SITE.hours.label}. Above Axis Bank, Hasthinapuram.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <a
              href={SITE.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 bg-brand px-9 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-dark hover:bg-white transition-colors shadow-[0_0_40px_rgba(226,255,0,0.35)]"
            >
              Leave a Google Review
              <span>→</span>
            </a>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-white hover:border-white/60 transition-colors"
            >
              Book Free Trial
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

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-up delay-400">
            {[
              { n: "4.9★", l: "Google Rating" },
              { n: `${SITE.reviewCount}+", l: "Reviews" },
              { n: "4:30 AM", l: "Opens Daily" },
              { n: "Unisex", l: "Women-owned" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-3xl md:text-4xl text-brand">{s.n}</p>
                <p className="mt-1 text-[11px] font-mono uppercase tracking-wider text-white/45">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why train here */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">Why train here</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight mb-12">
            Real reasons people stay
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Top-class equipment", ta: "சிறந்த உபகரணங்கள்", d: "Well-maintained free weights, machines and platforms." },
              { t: "Expert trainers", ta: "திறமையான பயிற்சியாளர்கள்", d: `Motivating coaches including ${SITE.trainerHighlight}. Form first.` },
              { t: "Personalized diet plans", ta: "தனிப்பட்ட உணவு திட்டங்கள்", d: "Nutrition guidance that matches your goal." },
              { t: "Women-owned & LGBTQ+ friendly", ta: "பெண்கள் உரிமையாளர் · LGBTQ+ நட்பு", d: "Safe, respectful floor for everyone." },
              { t: "Flexible timings", ta: "நெகிழ்வான நேரம்", d: `Open ${SITE.hours.label} every day.` },
              { t: "Value for money", ta: "மதிப்புள்ள கட்டணம்", d: "Clear pricing. Results that show." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 card-lift">
                <h3 className="font-display text-xl uppercase mb-1">{f.t}</h3>
                <p lang="ta" className="text-brand/80 text-sm mb-3">{f.ta}</p>
                <p className="text-white/60 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">Programs</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight mb-12">
            Training that works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Weight Loss", ta: "எடை குறைப்பு" },
              { n: "02", t: "Strength & Conditioning", ta: "வலிமை பயிற்சி" },
              { n: "03", t: "Personal Routines", ta: "தனிப்பட்ட திட்டம்" },
              { n: "04", t: "Diet & Nutrition", ta: "உணவு வழிகாட்டல்" },
            ].map((p) => (
              <div key={p.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 card-lift">
                <p className="font-mono text-[10px] uppercase tracking-wider text-brand mb-3">{p.n}</p>
                <h3 className="font-display text-2xl uppercase">{p.t}</h3>
                <p lang="ta" className="text-white/50 text-sm mt-1">{p.ta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section id="reviews" className="py-20 md:py-28 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">Google Reviews</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight mb-4">
            {SITE.rating}★ from {SITE.reviewCount}+ people
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Members talk about the equipment, the trainers, the diet plans, and the early morning energy.
            Your review helps the next person decide.
          </p>
          <a
            href={SITE.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 bg-brand px-10 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-dark hover:bg-white transition-colors shadow-[0_0_40px_rgba(226,255,0,0.3)]"
          >
            Share your experience on Google
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4">
            Real photos from the gym floor
          </p>
          <ArchGallery items={galleryItems} cardWidth={180} cardHeight={250} cornerRadius={16} className="py-2" />
        </div>
      </section>

      <CoachesSection />
      <ParallaxBand />

      <div id="results">
        <TransformationSection />
      </div>

      {/* Free Trial / Membership */}
      <section id="trial" className="py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-2xl px-4 md:px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">Free Trial</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight mb-4">
            Come train once
          </h2>
          <p className="text-white/60 mb-10">
            Message us on WhatsApp. No pressure. Just walk in, train, and decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.trial)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-brand px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-dark hover:bg-white transition-colors"
            >
              WhatsApp Free Trial
            </a>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.membership)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center border border-white/25 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] hover:border-brand hover:text-brand transition-colors"
            >
              Ask about Membership
            </a>
            <a
              href={telUrl()}
              className="inline-flex justify-center items-center border border-white/25 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.3em] hover:border-brand hover:text-brand transition-colors"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-20 md:py-28 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">Visit us</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight mb-6">
              Come sweat
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">{SITE.addressFull}</p>
            <p className="text-white/50 text-sm mb-8">Open {SITE.hours.label} · Every day</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-dark hover:bg-white transition-colors"
              >
                Open in Maps
              </a>
              <a
                href={telUrl()}
                className="inline-flex items-center border border-white/20 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:border-brand hover:text-brand transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 overflow-hidden aspect-video bg-white/5">
            <iframe
              title="Total Fitness Studio location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d${SITE.coords.lng}!3d${SITE.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e55f8dddbb1%3A0xe2c6b1fec4dc7b11!2sTotal%20fitness%20studio!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-white/80">TOTAL FITNESS STUDIO</p>
            <p lang="ta" className="text-brand/70 text-xs mt-1">{SITE.nameTa}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span>Women-owned</span>
            <span>·</span>
            <span>LGBTQ+ friendly</span>
            <span>·</span>
            <a href={SITE.reviewUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Google Review</a>
            <span>·</span>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Directions</a>
          </div>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 flex md:hidden border-t border-white/10 bg-dark/95 backdrop-blur-md">
        <a
          href={SITE.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 text-center font-mono text-xs font-bold uppercase tracking-wider border-r border-white/10"
        >
          Review
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
