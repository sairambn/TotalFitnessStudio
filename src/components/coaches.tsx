const COACHES = [
  {
    name: "Coach Arjun",
    role: "Head Coach · Strength",
    focus: "Powerlifting · Hypertrophy · Form first",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlHf3ofeNMUj69DE_dXWOpeUPt5v4Zl6SApYBTUm31RqM8RhLJ1BYd2ZGoU71XlnnvWimxHymN3SJS0uHprpoKw4FcYyU9-PAzCXeV6jFPB7UdfMxnG8pAAjps1W8QfW_oJDH1KPQ=w900-h1600-k-no",
  },
  {
    name: "Coach Priya",
    role: "Personal Training · Women",
    focus: "Fat loss · Strength · Confidence",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFVpKdN-1lhzKAg0YEiEJ-JA_to_z46A7DgPaHJeq4C9n6hDpX-o4EDBOxnvf0WsFXzcxJABiq2WjTNJpit9wVXwrnbNOzoGbaXs5D0Lsu5reJ4MmOp02nrjoYDHZDZgp0SWWPsg=w900-h1600-k-no",
  },
  {
    name: "Coach Karthik",
    role: "HIIT · Conditioning",
    focus: "Fat burn · Endurance · Group energy",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkl2eGNf2NLMSCNucEu24uLrqO2akL8c0QlNwoQIFCs-B_69MVc6bkGrmhNfFGGPVo4SyJY5JDhfVpAW_RwxZIYdaUCpiM32T-1qgsgCqKd-XBtp19HW9Rpq0KoiE1MZYK6PAlgfw=w1200-h900-k-no",
  },
  {
    name: "Coach Suresh",
    role: "Mobility · Rehab support",
    focus: "Injury-aware training · Longevity",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFsy3h6EBbnywZqbV_ht5Wt6aXNaYn2uKNC7pf9bDTjqanCYXdQoJk_1KPzUjB-RxG29Df1SJ2barp-T9EO1g5NdoCczPKMB11DxXCyPo7WX915f2nfCoo4xkB0zop69dI2Lzh=w1200-h900-k-no",
  },
];

export function CoachesSection() {
  return (
    <section id="coaches" className="py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-4">
          The floor team
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight">
          Coaches who
          <br />
          <span className="text-brand">actually coach</span>
        </h2>
        <p className="mt-6 max-w-xl text-white/60 text-lg leading-relaxed">
          No clipboard trainers. These are the people on the floor every morning helping you lock form,
          push when it counts, and stay consistent.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COACHES.map((c) => (
            <article
              key={c.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black/40">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-xl uppercase tracking-wide">{c.name}</p>
                <p className="mt-1 text-[11px] font-mono uppercase tracking-wider text-brand">
                  {c.role}
                </p>
                <p className="mt-2 text-sm text-white/70 leading-snug">{c.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
