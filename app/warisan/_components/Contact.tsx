import Image from "next/image";
// The address is still a placeholder; the note that used to say so on the page
// has been removed at the client's request. It stays recorded in lib/content.ts.
import { brand, copy } from "@/lib/content";
import { Arrow } from "./Arrow";

/**
 * Block 10: photo and tagline one side, a way to reach the shop on the other,
 * a vertical run of ruled lines between them — the same rule-stack used at the
 * hero seam, turned on its side. 6:4, measured against the reference.
 *
 * This was a newsletter sign-up. It is now a mailto: the shop has no mailing
 * list to add anyone to, so a form here could only collect an address and drop
 * it. A mailto opens the visitor's own mail client, shows them exactly what is
 * being sent, and needs no backend to be truthful.
 *
 * No client component needed any more — there is no state left to hold.
 */
export function Contact() {
  const href = `mailto:${copy.contact.email}?subject=${encodeURIComponent(copy.contact.subject)}`;

  return (
    <section className="w-full" style={{ background: "var(--ground)" }}>
      <div className="grid lg:grid-cols-[minmax(0,6fr)_auto_minmax(0,4fr)]">
        <div className="relative min-h-[380px] lg:min-h-[560px]">
          <Image
            src={copy.contact.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
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
          <h2 className="display-wide text-[19px] sm:text-[24px]">{copy.contact.heading}</h2>

          <p
            className="mt-4 max-w-[46ch] text-[16px] leading-relaxed"
            style={{ color: "var(--ink-muted)" }}
          >
            {copy.contact.body}
          </p>

          <ul className="mt-7 space-y-2.5">
            {copy.contact.reasons.map((r) => (
              <li key={r} className="flex items-baseline gap-3 text-[16px]">
                <span
                  className="mt-[7px] block h-[3px] w-[3px] shrink-0 rotate-45"
                  style={{ background: "var(--accent)" }}
                  aria-hidden
                />
                {r}
              </li>
            ))}
          </ul>

          <a href={href} className="btn group mt-9 inline-flex items-center gap-4">
            {copy.contact.button}
            <Arrow width={38} />
          </a>

          <p className="mt-5 text-[14px]" style={{ color: "var(--ink-muted)" }}>
            {copy.contact.email}
          </p>
        </div>
      </div>
    </section>
  );
}
