"use client";

import { useEffect, useState } from "react";
import { brand, copy } from "@/lib/content";
import { Ornament } from "./Ornament";

/**
 * Three-part header: nav left, wordmark optically centred, one pill action right.
 *
 * The reference inverts it on scroll — over the dark hero the bar is transparent
 * with cream type; once the page reaches the cream ground it becomes solid with
 * ink type. Both states share the 0.5s cubic-bezier(.4,0,.2,1) curve used
 * everywhere else on the site.
 */
export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    // Invert once the hero has essentially left the viewport.
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.78);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fg = solid ? "var(--ink)" : "var(--cream)";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: solid ? "var(--ground)" : "transparent",
        borderBottom: `1px solid ${solid ? "var(--line)" : "transparent"}`,
        color: fg,
        transition:
          "background-color 0.5s var(--ease), border-color 0.5s var(--ease), color 0.5s var(--ease)",
      }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 lg:px-10">
        <nav className="hidden items-center gap-6 lg:flex">
          {copy.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="label transition-opacity hover:opacity-60"
              style={{ fontWeight: 500, transition: "opacity 0.15s var(--ease)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="col-start-2 flex flex-col items-center gap-1.5">
          <span
            className="display-wide whitespace-nowrap text-[15px] sm:text-[19px]"
            style={{ letterSpacing: "0.17em" }}
          >
            {brand.name}
          </span>
          <Ornament />
        </a>

        <div className="col-start-3 flex justify-end">
          <a
            href="#order"
            className="rounded-full border px-5 py-2 text-[13px]"
            style={{
              borderColor: "currentColor",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              transition: "opacity 0.15s var(--ease)",
            }}
          >
            Order now
          </a>
        </div>
      </div>
    </header>
  );
}
