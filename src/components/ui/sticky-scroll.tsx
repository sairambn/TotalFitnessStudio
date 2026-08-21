"use client";

import { forwardRef } from "react";
import transform1After from "@/assets/transform-1-after.jpg";
import transform2After from "@/assets/transform-2-after.jpg";
import transform3After from "@/assets/transform-3-after.jpg";
import transform1Before from "@/assets/transform-3-before.jpg";
import transform2Before from "@/assets/transform-2-before.jpg";
import transform3Before from "@/assets/transform-2-before.jpg";
import heroAthlete from "@/assets/hero-athlete.jpg";

const StickyScroll = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <main className="bg-dark" ref={ref}>
      <div className="wrapper">
        <section className="relative text-white h-[70vh] md:h-screen w-full bg-dark grid place-content-center sticky top-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2FF0012_1px,transparent_1px),linear-gradient(to_bottom,#E2FF0012_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="relative z-10 px-6 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-brand mb-5">
              Real Results
            </p>
            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase leading-[0.9] tracking-tight">
              Scroll the
              <br />
              <span className="text-brand">Transformations</span>
            </h2>
            <p className="mt-6 text-white/50 text-sm md:text-base max-w-md mx-auto">
              Drag or scroll to see what consistent training looks like at Total Fitness Studio
            </p>
          </div>
        </section>
      </div>

      <section className="text-white w-full bg-dark">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 px-2 md:px-0">
          <div className="grid gap-2 col-span-1 md:col-span-4">
            <figure className="w-full">
              <img
                src={transform1After}
                alt="Strong build after transformation"
                className="transition-all duration-300 w-full h-72 md:h-96 object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="w-full">
              <img
                src={transform2After}
                alt="Shredded physique result"
                className="transition-all duration-300 w-full h-72 md:h-96 object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="w-full">
              <img
                src={heroAthlete}
                alt="Athlete training at Total Fitness Studio"
                className="transition-all duration-300 w-full h-72 md:h-96 object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="w-full">
              <img
                src={transform3After}
                alt="Featured transformation result"
                className="transition-all duration-300 w-full h-72 md:h-96 object-cover rounded-md"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="sticky top-0 h-screen w-full col-span-1 md:col-span-4 gap-2 grid grid-rows-3 py-2">
            <figure className="w-full h-full">
              <img
                src={transform1Before}
                alt="Before transformation starting point"
                className="transition-all duration-300 h-full w-full object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="w-full h-full">
              <img
                src={transform2Before}
                alt="Before progress photo"
                className="transition-all duration-300 h-full w-full object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="w-full h-full">
              <img
                src={transform3Before}
                alt="Before transformation journey"
                className="transition-all duration-300 h-full w-full object-cover rounded-md"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="grid gap-2 col-span-1 md:col-span-4">
            <figure className="w-full">
              <img
                src={transform3After}
                alt="Powerful flex at Total Fitness Studio"
                className="transition-all duration-300 w-full h-72 md:h-96 object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="w-full">
              <img
                src={transform1After}
                alt="Consistent training result"
                className="transition-all duration-300 w-full h-72 md:h-96 object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="w-full">
              <img
                src={transform2After}
                alt="Shredded result after program"
                className="transition-all duration-300 w-full h-72 md:h-96 object-cover rounded-md"
                loading="lazy"
              />
            </figure>
            <figure className="w-full">
              <img
                src={heroAthlete}
                alt="Dedicated training session"
                className="transition-all duration-300 w-full h-72 md:h-96 object-cover rounded-md"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <footer className="bg-dark pt-16 pb-8">
        <h3 className="text-[14vw] md:text-[12vw] translate-y-6 md:translate-y-10 leading-[100%] uppercase font-display text-center bg-gradient-to-r from-white/80 to-white/20 bg-clip-text text-transparent">
          Total Fitness
        </h3>
        <div className="bg-black h-28 md:h-36 relative z-10 grid place-content-center text-sm md:text-base rounded-tr-[3rem] rounded-tl-[3rem] text-white/60 font-mono tracking-wider">
          Chromepet · Real Transformations
        </div>
      </footer>
    </main>
  );
});

StickyScroll.displayName = "StickyScroll";

export default StickyScroll;
