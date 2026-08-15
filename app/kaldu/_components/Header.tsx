"use client";

import { useEffect, useState } from "react";
import { brand, copy } from "@/lib/content";

/**
 * Nav left-of-centre wordmark, links right, one outlined action — the reference's
 * arrangement, reversed from Warisan's centred mark so the two directions do not
 * read as the same page in different colours.
 *
 * The bar gains a ground and a hairline once the hero has passed.
 */
export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: solid ? "var(--ground)" : "transparent",
        borderBottom: `1px solid ${solid ? "var(--line)" : "transparent"}`,
        transition: "background-color 0.8s var(--ease), border-color 0.8s var(--ease)",
      }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <a href="#top" className="display text-[21px] tracking-[0.16em]">
          <span style={{ color: "var(--gold)" }}>牛</span>
          <span className="ml-2">{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {copy.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="label"
              style={{ color: "var(--ink-muted)", transition: "color 0.3s var(--ease)" }}
            >
              {item.label}
            </a>
          ))}
          <a href="#order" className="btn" style={{ padding: "0.7rem 1.5rem" }}>
            Order now
          </a>
        </nav>
      </div>
    </header>
  );
}
