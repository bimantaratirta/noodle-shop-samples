"use client";

import { useEffect, useRef } from "react";

/**
 * Entrance stagger, matching the reference's motion character.
 *
 * Measured there: opacity + transform over 0.6–0.8s on cubic-bezier(.16,1,.3,1),
 * with 0.1s and 0.2s delays between siblings. That curve leaves fast and lands
 * slowly, which is what separates this direction's feel from Warisan's flat
 * .4,0,.2,1.
 *
 * Children are marked with `.enter` in the markup; this only decides when each
 * one flips to shown, and hands out the stagger.
 */
export function Reveal({
  children,
  className = "",
  step = 0.1,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Seconds between siblings. */
  step?: number;
  as?: "div" | "section" | "ul" | "header";
}) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>(".enter"));
    items.forEach((n, i) => {
      n.style.transitionDelay = `${(i * step).toFixed(2)}s`;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((n) => (n.dataset.shown = "true"));
      return;
    }

    // Position check rather than an IntersectionObserver: an observer only fires
    // on transitions, so anything jumped past — a reload deep in the page, an
    // anchor click — would stay invisible for good.
    let pending = false;
    let waiting = items;

    const update = () => {
      pending = false;
      const line = window.innerHeight * 0.86;
      const still: HTMLElement[] = [];
      for (const n of waiting) {
        if (n.getBoundingClientRect().top < line) n.dataset.shown = "true";
        else still.push(n);
      }
      waiting = still;
      if (!waiting.length) detach();
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
    update();
    return detach;
  }, [step]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const T = Tag as any;
  return (
    <T ref={root} className={className}>
      {children}
    </T>
  );
}
