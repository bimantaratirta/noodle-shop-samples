import Image from "next/image";
import { brothNotes } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * The four-note panel — the reference's tasting block, applied to a bowl.
 *
 * It gives the quality claim somewhere concrete to sit. The brief asks the brand
 * to signal good ingredients "without needing to over-explain", and four short
 * notes do that better than another paragraph saying the broth is good.
 */
export function Character() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <Image
        src="/placeholder/broth.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ opacity: 0.22 }}
      />

      <Reveal className="relative mx-auto max-w-[1320px]">
        <p className="rule-label label enter" style={{ color: "var(--accent)" }}>
          The character
        </p>
        <h2 className="display enter mt-6 max-w-[18ch] text-[38px] sm:text-[48px]">
          How the broth <em>reads</em>
        </h2>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {brothNotes.map((n) => (
            <li
              key={n.label}
              className="enter border-t pt-6"
              style={{ borderColor: "var(--line-strong)" }}
            >
              <h3 className="display text-[24px]" style={{ color: "var(--accent)" }}>
                {n.label}
              </h3>
              <p className="mt-3" style={{ color: "var(--ink-muted)" }}>
                {n.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
