"use client";

import Image from "next/image";
import { useState } from "react";
import { brand, copy } from "@/lib/content";

/**
 * Block 10: photo and tagline one side, sign-up the other, a vertical run of
 * ruled lines between them — the same rule-stack used at the hero seam, turned
 * on its side.
 *
 * The form is deliberately NOT wired to anything. Rather than look functional
 * and silently swallow an address, submitting says so. A sign-up that appears to
 * work but doesn't is worse than no sign-up: someone waits for an email that is
 * never coming.
 */
export function Newsletter() {
  const [notice, setNotice] = useState(false);

  return (
    <section className="w-full" style={{ background: "var(--ground)" }}>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="relative min-h-[380px] lg:min-h-[560px]">
          <Image
            src={copy.newsletter.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(14,10,8,.35), rgba(14,10,8,.6))" }}
          />
          <p
            className="absolute inset-0 flex items-center justify-center px-8 text-center text-[26px] leading-[1.35] sm:text-[34px]"
            style={{
              color: "var(--cream)",
              fontVariantCaps: "small-caps",
              letterSpacing: "0.05em",
            }}
          >
            “{brand.tagline.en}”
          </p>
        </div>

        <div className="ruled-band-v hidden lg:block" aria-hidden />

        <div className="px-6 py-16 sm:px-12 lg:px-14">
          <h2 className="display-wide text-[19px] sm:text-[24px]">{copy.newsletter.heading}</h2>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            {copy.newsletter.body}
          </p>

          <form
            className="mt-8 max-w-[440px]"
            onSubmit={(e) => {
              e.preventDefault();
              setNotice(true);
            }}
          >
            {copy.newsletter.fields.map((f) => (
              <label key={f.name} className="mb-5 block">
                <span className="label block" style={{ fontSize: "0.62rem" }}>
                  {f.label}
                </span>
                <input
                  name={f.name}
                  type={"type" in f ? (f.type as string) : "text"}
                  placeholder={f.hint}
                  className="mt-1.5 w-full border-b bg-transparent py-2 text-[16px] outline-none"
                  style={{ borderColor: "var(--line)", color: "var(--ink)" }}
                />
              </label>
            ))}

            <label className="mt-2 flex items-start gap-3 text-[14px] leading-snug">
              <input type="checkbox" className="mt-1 accent-current" />
              <span style={{ color: "var(--ink-muted)" }}>{copy.newsletter.consent}</span>
            </label>

            <button
              type="submit"
              className="mt-7 w-full py-3.5 text-[14px]"
              style={{
                background: "var(--ink)",
                color: "var(--ground)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                transition: "opacity 0.15s var(--ease)",
              }}
            >
              {copy.newsletter.button}
            </button>

            {notice && (
              <p
                className="mt-4 border-l-2 py-1 pl-4 text-[13px] leading-relaxed"
                style={{ borderColor: "var(--accent)", color: "var(--ink-muted)" }}
                role="status"
              >
                This is a design sample — the form isn’t connected to anything, so
                nothing was sent and no address was stored.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
