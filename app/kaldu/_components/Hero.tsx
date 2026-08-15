"use client";

import { useEffect, useState } from "react";
import { brand, story, copy } from "@/lib/content";

/**
 * Full-bleed hero.
 *
 * The reference runs a still photograph here — a landscape that could belong to
 * any brand. This one runs the steaming-pot clip instead, because the thing the
 * page is selling is the broth and it is the only footage that shows it moving.
 *
 * Structure follows the reference: short gold rule + label, display serif with a
 * single italic word in gold, a short paragraph, one outlined action, and a
 * circular date badge in the lower right.
 */
export function Hero() {
  const [motion, setMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section id="top" className="band-dark relative h-svh min-h-[640px] w-full overflow-hidden">
      {motion === true ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster="/placeholder/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="A pot on the pass, steaming before service"
        >
          <source src="/placeholder/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/placeholder/hero-poster.jpg"
          alt="A pot on the pass, before service"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(16,12,10,.92) 0%, rgba(16,12,10,.6) 55%, rgba(16,12,10,.35) 100%)",
        }}
      />

      {/*
        牛肉麵 set as a huge outlined mark down the right side. The logo does not
        exist yet, so these characters carry the identity — and the brief calls
        them the signal of Taiwanese lineage rather than a translation.
      */}
      <span
        className="han-mark pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-[150px] lg:block xl:text-[190px]"
        aria-hidden
      >
        牛肉麵
      </span>

      <div className="relative mx-auto flex h-full max-w-[1320px] flex-col justify-end px-6 pb-24 lg:px-10">
        <p className="rule-label label" style={{ color: "var(--accent-text)" }}>
          Est. {story.era} · Taiwanese beef noodles
        </p>

        <h1 className="display mt-7 max-w-[15ch] text-[46px] sm:text-[68px]">
          Simmered by time,
          <br />
          served <em>without hurry</em>
        </h1>

        <p className="mt-7 max-w-[46ch]" style={{ color: "var(--ink-muted)" }}>
          {story.beats[0]}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#bowls" className="btn">
            See the bowls
          </a>
        </div>
      </div>

      {/* Date badge, lower right — the reference's founded-in mark. */}
      <div
        className="absolute bottom-16 right-8 hidden h-32 w-32 items-center justify-center rounded-full lg:flex lg:right-16"
        style={{ border: "1px solid var(--line-strong)" }}
      >
        <div className="text-center">
          <span className="display block text-[26px]" style={{ color: "var(--gold)" }}>
            1988
          </span>
          <span className="label mt-1 block" style={{ color: "var(--ink-muted)", fontSize: 11 }}>
            Inherited
          </span>
        </div>
      </div>

      <span className="sr-only">{brand.tagline.en}</span>
      <span className="sr-only">{copy.hero.welcome}</span>
    </section>
  );
}
