import { useCallback, useEffect, useRef, useState } from "react";
import { ArchGallery } from "@/components/ui/arch-gallery";
import StickyScroll from "@/components/ui/sticky-scroll";
import heroAthlete from "@/assets/hero-athlete.jpg";
import transform1Before from "@/assets/transform-3-before.jpg";
import transform1After from "@/assets/transform-1-after.jpg";
import transform2Before from "@/assets/transform-2-before.jpg";
import transform2After from "@/assets/transform-2-after.jpg";
import transform3Before from "@/assets/transform-1-before.jpg";
import transform3After from "@/assets/transform-3-after.jpg";

type Transformation = {
  name: string;
  months: number;
  kg: number;
  badge: string;
  program: string;
  trainer: string;
  before: string;
  after: string;
  featured?: boolean;
};

const TRANSFORMATIONS: Transformation[] = [
  {
    name: "Karthik R.",
    months: 14,
    kg: 34,
    badge: "Beast Mode",
    program: "Strength + Cut",
    trainer: "Coach Arjun",
    before: transform1Before,
    after: transform1After,
  },
  {
    name: "Suresh M.",
    months: 10,
    kg: 12,
    badge: "Shredded",
    program: "Hypertrophy + HIIT",
    trainer: "Coach Priya",
    before: transform2Before,
    after: transform2After,
  },
  {
    name: "Praveen K.",
    months: 16,
    kg: 34,
    badge: "Unstoppable",
    program: "Power + Recomp",
    trainer: "Coach Arjun",
    before: transform3Before,
    after: transform3After,
    featured: true,
  },
];

const ACCENT = "#E2FF00";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) {
      setVal(0);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return val;
}

function BeforeAfter({ before, after, name }: { before: string; after: string; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPos(x * 100);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      update(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [update]);

  return (
    <div
      ref={ref}
      className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-black select-none touch-none"
      onPointerDown={(e) => {
        dragging.current = true;
        update(e.clientX);
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      }}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-label={`Before and after comparison for ${name}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
      }}
    >
      <img
        src={after}
        alt={`${name} after`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`${name} before`}
          className="absolute inset-0 h-full max-w-none object-cover"
          style={{ width: ref.current ? ref.current.offsetWidth : "100%" }}
          draggable={false}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-brand"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-brand flex items-center justify-center shadow-lg">
          <span className="text-dark text-xs font-bold">↔</span>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-white/80">
        Before
      </div>
      <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-white/80">
        After
      </div>
    </div>
  );
}

function TransformationCard({ t, featured }: { t: Transformation; featured?: boolean }) {
  const [active, setActive] = useState(false);
  const kg = useCountUp(t.kg, active);
  const months = useCountUp(t.months, active);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border ${featured ? "border-brand/40 md:col-span-2" : "border-white/10"} bg-white/[0.03]`}
      onMouseEnter={() => setActive(true)}
      onFocus={() => setActive(true)}
    >
      <div className={`grid ${featured ? "md:grid-cols-2" : ""} gap-0`}>
        <BeforeAfter before={t.before} after={t.after} name={t.name} />
        <div className="flex flex-col justify-between p-6 md:p-8">
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider"
              style={{ background: ACCENT, color: "#0F0F0F" }}
            >
              {t.badge}
            </span>
            <h3 className="mt-4 font-display text-3xl md:text-4xl uppercase tracking-tight">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-white/50">
              {t.program} · {t.trainer}
            </p>
          </div>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-display text-4xl md:text-5xl text-brand">{kg}</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">kg change</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl">{months}</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">months</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function TransformationSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Immersive sticky gallery */}
      <StickyScroll />

      <div className="mx-auto max-w-6xl px-4 md:px-6 py-24 md:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">Real results</p>
        <h2 className="font-display uppercase leading-[0.85] text-white text-6xl sm:text-7xl md:text-[8rem] tracking-tight">
          Real People.
          <br />
          <span
            className="italic"
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${ACCENT}`,
            }}
          >
            Real Transformations.
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-white/60 text-lg leading-relaxed">
          These are members from Chromepet who trained here consistently.
          <span className="text-white/90"> Drag the slider </span>
          on any card to see the difference.
        </p>

        <div className="mt-12 mb-4">
          <ArchGallery
            items={[
              { image: { src: transform1After, alt: "After transformation strong build" } },
              { image: { src: transform2After, alt: "After transformation shredded" } },
              { image: { src: transform3After, alt: "Featured after transformation" } },
              { image: { src: transform3After, alt: "Powerful flex pose at Total Fitness" } },
              { image: { src: heroAthlete, alt: "Athlete training hard" } },
              { image: { src: transform1Before, alt: "Starting point before" } },
              { image: { src: transform2Before, alt: "Before progress photo" } },
            ]}
            cardWidth={160}
            cardHeight={220}
            cornerRadius={14}
            className="py-6"
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {TRANSFORMATIONS.map((t) => (
            <TransformationCard key={t.name} t={t} featured={t.featured} />
          ))}
        </div>

        <div className="mt-20 relative overflow-hidden border-y border-white/10 py-6">
          <div className="flex gap-12 whitespace-nowrap animate-marquee font-display text-4xl md:text-5xl">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                "34 KG LOST",
                "16 MONTHS",
                "STRONGER EVERY DAY",
                "12 KG LOST",
                "1000+ WORKOUTS",
                "REAL RESULTS",
                "COMPLETE RECOMP",
                "CHROMEPET STRONG",
              ].map((label, i) => (
                <span
                  key={`${k}-${i}`}
                  className="uppercase tracking-tight"
                  style={{
                    color: i % 3 === 0 ? ACCENT : "rgba(255,255,255,0.85)",
                    WebkitTextStroke: i % 4 === 3 ? `1px ${ACCENT}` : undefined,
                  }}
                >
                  {label} <span className="text-white/20">✦</span>
                </span>
              )),
            )}
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6">
            Your name could be next
          </p>
          <h3 className="font-display uppercase leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
            Your Transformation
            <br />
            <span style={{ color: ACCENT }}>Starts Today</span>
          </h3>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 px-10 py-5 font-mono text-xs font-bold uppercase tracking-[0.35em] text-black overflow-hidden"
              style={{
                background: ACCENT,
                boxShadow: `0 0 60px rgba(226,255,0,0.45)`,
              }}
            >
              <span className="relative z-10">Start Now</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-5 font-mono text-xs font-bold uppercase tracking-[0.35em] border border-white/20 text-white hover:border-white/60 transition-colors"
            >
              Know More
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine { to { transform: translateX(100%); } }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
