const PARALLAX_IMG =
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndopWkfxw9GMKcHwk9yjIGGeufZr-SR3lM-QKWj8aDYU5jHSLuLV7Ug0pvO8zNIgwDVeoHUd_8lQF-V17p2uJBv_p2EtzNM7IbGwLMX6TAkfoWDIwUOUw31lQBExpjRbJoQr5Onw=w1600-h900-k-no";

export function ParallaxBand() {
  return (
    <section className="relative h-[55vh] md:h-[70vh] overflow-hidden border-y border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url(${PARALLAX_IMG})`,
          backgroundAttachment: "fixed",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-dark/55" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-brand mb-4">
          The floor
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-[0.9] max-w-3xl">
          Iron. Sweat.
          <br />
          <span className="text-brand">No shortcuts.</span>
        </h2>
        <p className="mt-6 text-white/70 max-w-md text-sm md:text-base">
          4,800 sq ft of serious equipment. Open from 4:30 AM so the early crew can get work done.
        </p>
      </div>
    </section>
  );
}
