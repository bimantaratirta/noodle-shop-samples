"use client";

import { useEffect, useState } from "react";

/**
 * Background media for the hero.
 *
 * The reference runs a slow, dark video behind its hero, and that ambient motion
 * is a real part of why it feels alive rather than like a poster. Matching it
 * means an actual <video>, not a still.
 *
 * Two things this has to get right:
 *  - autoplay only works muted + playsInline, and iOS additionally needs the
 *    attribute present at first paint, so it is set declaratively.
 *  - under prefers-reduced-motion the video is not rendered at all — the poster
 *    frame stands in. Pausing a video that already downloaded would still cost
 *    the visitor the bytes and the motion on first frames.
 */
export function HeroMedia() {
  const [allowMotion, setAllowMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAllowMotion(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Until the preference is known, show the poster — it is what the video's
  // first frame looks like anyway, so there is no visible swap.
  if (allowMotion !== true) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/placeholder/hero-poster.jpg"
        alt="A pot on the pass, before service"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
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
  );
}
