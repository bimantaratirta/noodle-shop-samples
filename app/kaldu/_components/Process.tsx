"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { process } from "@/lib/content";

/**
 * The pinned process section — and the one place this direction deliberately
 * departs from its reference.
 *
 * On the reference the left column pins for 3,740px while five steps scroll
 * past it, but the pinned photograph never changes: a finished cocktail sits
 * there while the copy describes malting barley. A constant image is the same
 * as no image, so the whole reason to pin is wasted.
 *
 * Here the picture belongs to the step. As each step reaches the middle of the
 * viewport the pinned image crossfades to that step's own photograph, so the
 * pin is doing the work it was built for.
 *
 * The second fix is spacing. The reference gives each step ~750px of scroll but
 * only ~480px of content, so roughly half the pinned viewport is empty at any
 * moment. Steps here are sized close to their content.
 */

/**
 * px of scroll per step.
 *
 * Set against measured content, not by feel. A step's copy runs ~240px; at the
 * first value tried here (520) only 46% of the block was filled, which is a
 * WORSE ratio than the reference's 480-of-750 even though the section was
 * shorter overall. 400 puts it at roughly 60% — enough air to read as composed,
 * not so much that you scroll past nothing.
 */
const STEP_MIN = 400;

export function Process() {
  const [active, setActive] = useState(0);
  const steps = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let pending = false;

    const update = () => {
      pending = false;
      const middle = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;

      steps.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - middle);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActive(best);
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
    <section id="process" className="band-brown px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* ── pinned column ─────────────────────────────────────────── */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-svh flex-col justify-center py-16">
            <p className="rule-label label" style={{ color: "var(--accent-text)" }}>
              Our process
            </p>
            <h2 className="display mt-6 text-[44px]">
              From bone <em>to bowl</em>
            </h2>

            <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden">
              {process.map((s, i) => (
                <Image
                  key={s.n}
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="600px"
                  className="object-cover"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transition: "opacity 0.8s var(--ease)",
                  }}
                />
              ))}
            </div>

            {/* Which of the five you are in — the reference gives no such cue. */}
            <div className="mt-7 flex items-center gap-4">
              <span className="label" style={{ color: "var(--gold)" }}>
                {process[active].n} / {process[process.length - 1].n}
              </span>
              <span className="relative h-px flex-1" style={{ background: "var(--line)" }}>
                <span
                  className="absolute inset-y-0 left-0 block"
                  style={{
                    background: "var(--gold)",
                    width: `${((active + 1) / process.length) * 100}%`,
                    transition: "width 0.6s var(--ease)",
                  }}
                />
              </span>
            </div>
          </div>
        </div>

        {/* ── scrolling steps ───────────────────────────────────────── */}
        <div className="py-16 lg:py-24">
          {/* Heading repeats on small screens, where nothing is pinned. */}
          <div className="lg:hidden">
            <p className="rule-label label" style={{ color: "var(--accent-text)" }}>
              Our process
            </p>
            <h2 className="display mt-5 text-[34px]">
              From bone <em>to bowl</em>
            </h2>
          </div>

          {process.map((s, i) => (
            <div
              key={s.n}
              ref={(el) => {
                steps.current[i] = el;
              }}
              className="flex flex-col justify-center border-t py-12 first:border-t-0 lg:py-0"
              style={{ minHeight: STEP_MIN, borderColor: "var(--line)" }}
            >
              {/* On small screens the image travels with its step. */}
              <div className="relative mb-7 aspect-[4/3] w-full overflow-hidden lg:hidden">
                <Image src={s.image} alt={s.name} fill sizes="100vw" className="object-cover" />
              </div>

              <span
                className="display block text-[42px] leading-none"
                style={{
                  color: i === active ? "var(--gold)" : "var(--ink-muted)",
                  opacity: i === active ? 1 : 0.55,
                  transition: "color 0.6s var(--ease), opacity 0.6s var(--ease)",
                }}
              >
                {s.n}
              </span>

              <h3 className="display mt-3 flex items-baseline gap-3 text-[26px]">
                {s.name}
                <span className="text-[19px]" style={{ color: "var(--ink-muted)" }}>
                  {s.chinese}
                </span>
              </h3>

              <p className="mt-4 max-w-[46ch]" style={{ color: "var(--ink-muted)" }}>
                {s.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {s.facts.map((f) => (
                  <span key={f} className="pill">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
