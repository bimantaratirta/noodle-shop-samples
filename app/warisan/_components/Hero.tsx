"use client";

import { useEffect, useRef } from "react";
import { copy } from "@/lib/content";
import { HeroMedia } from "./HeroMedia";

/**
 * Hero with the reference's scroll-through.
 *
 * Corrected twice. The first pass drew an inset card; the second "fixed" it to a
 * static full-bleed. Both were half right — the real behaviour is that the media
 * STARTS as an inset rounded card and expands to full-bleed as you scroll, which
 * is why a screenshot at the top and a screenshot mid-page disagree.
 *
 * The section is taller than the viewport and the frame is sticky inside it, so
 * the expansion has scroll distance to happen over without the page jumping.
 */

const TRAVEL = 0.85; // fraction of a viewport the expansion is spread across

export function Hero() {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let pending = false;
    const update = () => {
      pending = false;
      const vh = window.innerHeight;
      // 0 at the top of the page, 1 once the frame has fully opened out.
      const p = reduce ? 1 : Math.min(1, Math.max(0, window.scrollY / (vh * TRAVEL)));
      // Inset shrinks to nothing; the corner radius closes with it.
      el.style.setProperty("--hero-inset-x", `${(1 - p) * 13}vw`);
      el.style.setProperty("--hero-inset-y", `${(1 - p) * 9}vh`);
      el.style.setProperty("--hero-radius", `${(1 - p) * 5}px`);
      // The overlay copy fades up slightly as the frame opens.
      el.style.setProperty("--hero-copy", String(0.55 + p * 0.45));
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="top" className="on-dark relative h-[190svh] min-h-[1100px]">
      <div className="sticky top-0 h-svh min-h-[620px] w-full overflow-hidden">
        <div
          ref={frame}
          className="absolute overflow-hidden"
          style={{
            top: "var(--hero-inset-y, 9vh)",
            bottom: "var(--hero-inset-y, 9vh)",
            left: "var(--hero-inset-x, 13vw)",
            right: "var(--hero-inset-x, 13vw)",
            borderRadius: "var(--hero-radius, 5px)",
          }}
        >
          <HeroMedia />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,10,8,.7) 0%, rgba(14,10,8,.45) 45%, rgba(14,10,8,.82) 100%)",
            }}
          />

          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            style={{ opacity: "var(--hero-copy, 1)" }}
          >
            <p className="label" style={{ color: "var(--cream-muted)", letterSpacing: "0.3em" }}>
              {copy.hero.welcome}
            </p>

            <h1
              className="mt-6 max-w-[20ch] text-[26px] leading-[1.34] sm:max-w-[30ch] sm:text-[44px]"
              style={{
                color: "var(--cream)",
                fontVariantCaps: "small-caps",
                letterSpacing: "0.055em",
              }}
            >
              {copy.hero.headline}
            </h1>

            <p
              className="mt-6 max-w-[44ch] text-[16px] leading-[1.7]"
              style={{ color: "var(--cream-muted)" }}
            >
              {copy.hero.quote}
            </p>
          </div>
        </div>

        {/*
          The actions sit outside the frame, in the sticky layer. At the top of
          the page they read as sitting below the card; once the frame opens out
          they end up over the media — which is what the reference does.
        */}
        <div className="absolute inset-x-0 bottom-10 flex flex-wrap items-center justify-center gap-3 px-6">
          {copy.hero.actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="border px-8 py-3 text-[13px]"
              style={{
                borderColor: "var(--cream)",
                color: "var(--cream)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                transition: "background-color 0.3s var(--ease)",
              }}
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
