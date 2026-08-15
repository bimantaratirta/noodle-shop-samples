"use client";

import { useEffect, useRef } from "react";

/**
 * The reference's signature scroll animation, rebuilt from its actual markup.
 *
 * Each word gets its own <span>. Unrevealed words sit at the muted cream
 * (measured: rgb(196,191,175)); a word lights to full ink once it has risen past
 * ~68% of the viewport height. Observing each word separately is what makes the
 * line fill in progressively as you scroll instead of snapping in at once.
 *
 * Implemented as a rAF-throttled scroll handler rather than an
 * IntersectionObserver on purpose: an observer only fires on *transitions*, so
 * anything scrolled past in one jump — a reload deep in the page, an anchor
 * link, a scripted scroll — would stay stuck at the muted colour forever. A
 * position check is evaluated from wherever the page happens to be.
 *
 * No animation library, matching the reference (no GSAP, no Lenis).
 */

const TRIGGER = 0.68; // fraction of viewport height the word must rise above

export function RevealWords({
  lines,
  className = "",
  indentRem = 3.5,
}: {
  lines: readonly string[];
  className?: string;
  /** Each line after the first steps in by this much, as on the reference. */
  indentRem?: number;
}) {
  const root = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const words = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));

    // Reduced motion: show the finished state, skip the animation entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => (w.dataset.lit = "true"));
      return;
    }

    let pending = false;
    let remaining = words;

    const update = () => {
      pending = false;
      const line = window.innerHeight * TRIGGER;
      const stillDark: HTMLElement[] = [];
      for (const w of remaining) {
        if (w.getBoundingClientRect().top < line) w.dataset.lit = "true";
        else stillDark.push(w);
      }
      remaining = stillDark;
      if (!remaining.length) detach();
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(update);
    };

    function detach() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update(); // settle whatever is already above the line on mount

    return detach;
  }, [lines]);

  return (
    <h2 ref={root} className={className}>
      {lines.map((line, li) => (
        <span
          key={line}
          className="block"
          style={{ paddingLeft: li === 0 ? 0 : `${Math.min(li, 2) * indentRem}rem` }}
        >
          {line.split(" ").map((word, wi) => (
            <span key={`${li}-${wi}`} data-word className="reveal-word">
              {word}{" "}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}
