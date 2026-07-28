import { useCallback, useEffect, useRef, useState } from "react";
import transform1Before from "@/assets/transform-1-before.jpg";
import transform1After from "@/assets/transform-1-after.jpg";
import transform2Before from "@/assets/transform-2-before.jpg";
import transform2After from "@/assets/transform-2-after.jpg";
import transform3Before from "@/assets/transform-3-before.jpg";
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

// Unified with site brand token (--color-brand)
const ACCENT = "#E2FF00";

/* ------------------------ Count-up animated stat ------------------------ */
function useCountUp(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
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

/* ------------------------ Before / After slider ------------------------- */
function BeforeAfter({
  before,
  after,
  name,
}: {
  before: string;
  after: string;
  name: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos((x / rect.width) * 100);
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    update(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[3/4] overflow-hidden select-none touch-none cursor-ew-resize bg-black"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      role="slider"
      aria-label={`Before and after slider for ${name}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      {/* AFTER (base layer) */}
      <img
        src={after}
        alt={`${name} after transformation`}
        width={768}
        height={1024}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute top-3 right-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] px-2 py-1 z-10"
        style={{ background: ACCENT, color: "#0F0F0F" }}
      >
        After
      </div>

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden will-change-[clip-path]"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${name} before transformation`}
          width={768}
          height={1024}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute top-3 left-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] px-2 py-1 bg-white text-black">
          Before
        </div>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{ left: `${pos}%`, background: ACCENT, boxShadow: `0 0 20px ${ACCENT}` }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full grid place-items-center backdrop-blur-md"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: `1px solid ${ACCENT}`,
            boxShadow: `0 0 30px ${ACCENT}, inset 0 0 12px rgba(226,255,0,0.35)`,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={ACCENT} strokeWidth="2.5">
            <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Card ------------------------------------ */
function TransformationCard({ t, featured = false }: { t: Transformation; featured?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const months = useCountUp(t.months, visible);
  const kg = useCountUp(t.kg, visible);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 8}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${featured ? "md:col-span-2" : ""}`}
      style={{
        transform:
          "perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
        transformStyle: "preserve-3d",
        transition: "transform 400ms cubic-bezier(0.2,0.8,0.2,1), opacity 700ms ease, translate 700ms ease",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(226,255,0,0.35), transparent 60%)`,
        }}
      />
      <div
        className={`relative bg-[#0a0a0a] border border-white/10 group-hover:border-[color:var(--accent)]/60 overflow-hidden ${
          featured ? "md:grid md:grid-cols-2" : ""
        }`}
        style={{ ["--accent" as string]: ACCENT }}
      >
        {featured && (
          <div
            aria-hidden
            className="absolute top-4 left-4 z-20 font-mono text-[10px] font-bold uppercase tracking-[0.4em] px-3 py-1.5"
            style={{ background: ACCENT, color: "#0F0F0F" }}
          >
            ★ Featured Story
          </div>
        )}
        <BeforeAfter before={t.before} after={t.after} name={t.name} />

        {/* Content */}
        <div className={`p-6 md:p-8 ${featured ? "md:flex md:flex-col md:justify-between" : ""}`}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`font-display leading-none ${featured ? "text-4xl md:text-5xl" : "text-2xl"}`}>
                  {t.name}
                </span>
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill={ACCENT}>
                  <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3l-4.8 2.6.9-5.4L4.2 7.7l5.4-.8L12 2z" />
                </svg>
              </div>
              <span
                className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] px-2 py-1"
                style={{ border: `1px solid ${ACCENT}`, color: ACCENT }}
              >
                {t.badge}
              </span>
            </div>

            {featured && (
              <p className="text-white/70 text-lg leading-relaxed mb-8 border-l-2 pl-4 my-6" style={{ borderColor: ACCENT }}>
                "From 120 kg to a completely new body. The coaches pushed me every session. Real work. Real results. No shortcuts."
              </p>
            )}

            <div className={`grid grid-cols-3 gap-3 ${featured ? "md:gap-6 mb-8" : "mb-5"}`}>
              <div>
                <div
                  className={`font-display leading-none ${featured ? "text-6xl md:text-7xl" : "text-4xl"}`}
                  style={{ color: ACCENT }}
                >
                  {months}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50 mt-2">
                  Months
                </div>
              </div>
              <div>
                <div className={`font-display leading-none ${featured ? "text-6xl md:text-7xl" : "text-4xl"}`}>
                  ↓{kg}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50 mt-2">
                  KG Lost
                </div>
              </div>
              <div>
                <div className={`font-display leading-none ${featured ? "text-6xl md:text-7xl" : "text-4xl"}`}>
                  100
                  <span style={{ color: ACCENT }}>%</span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50 mt-2">
                  Real
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              <span>Program</span>
              <span className="text-white/90 text-right">{t.program}</span>
              <span>Coach</span>
              <span className="text-white/90 text-right">{t.trainer}</span>
              {featured && (
                <>
                  <span>Achievement</span>
                  <span className="text-white/90 text-right" style={{ color: ACCENT }}>
                    Complete Body Recomp
                  </span>
                </>
              )}
            </div>
            {featured && (
              <a
                href="#membership"
                className="mt-6 inline-flex items-center gap-3 px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.35em] text-black transition-transform hover:translate-x-1"
                style={{ background: ACCENT }}
              >
                Start Your Story →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Section ----------------------------------- */
export function TransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const onSectionMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - r.left}px`);
    el.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onSectionMove}
      id="transformations"
      className="relative overflow-hidden border-b border-white/10"
      style={{ background: "#050505" }}
    >
      {/* Ambient brand spotlight following cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(600px circle at var(--sx, 50%) var(--sy, 30%), rgba(226,255,0,0.10), transparent 60%)",
        }}
      />
      {/* Floating orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, rgba(226,255,0,0.45), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, rgba(226,255,0,0.35), transparent 60%)" }}
      />

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
        <div className="flex items-center gap-3 mb-6 font-mono text-[10px] uppercase tracking-[0.4em]">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: ACCENT, boxShadow: `0 0 16px ${ACCENT}` }}
          />
          <span style={{ color: ACCENT }}>03 // Transformations</span>
          <span className="text-white/30">Verified · Chromepet Members</span>
        </div>

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
          Thousands of hours. Hundreds of kilograms lost. One decision changed
          everything.
          <span className="text-white/90"> Drag the slider </span>
          on any card to see the work.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {TRANSFORMATIONS.map((t) => (
            <TransformationCard key={t.name} t={t} featured={t.featured} />
          ))}
        </div>

        {/* Marquee of achievements */}
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
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6">
            Your name could be next.
          </p>
          <h3 className="font-display uppercase leading-[0.9] text-5xl sm:text-6xl md:text-8xl">
            Your Transformation
            <br />
            <span style={{ color: ACCENT }}>Starts Today.</span>
          </h3>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#membership"
              className="group relative inline-flex items-center gap-4 px-10 py-5 font-mono text-xs font-bold uppercase tracking-[0.35em] text-black overflow-hidden"
              style={{
                background: ACCENT,
                boxShadow: `0 0 60px rgba(226,255,0,0.45)`,
              }}
            >
              <span className="relative z-10">Join Now</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">
                →
              </span>
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                  transform: "translateX(-100%)",
                  animation: "shine 1.2s ease forwards",
                }}
              />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-3 px-8 py-5 font-mono text-xs font-bold uppercase tracking-[0.35em] border border-white/20 text-white hover:border-white/60 transition-colors"
            >
              Explore Programs
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
