import Image from "next/image";
import { copy, story } from "@/lib/content";
import { Arrow } from "./Arrow";

/**
 * Full-bleed dark interlude, laid out like the reference's café section: copy
 * anchored bottom-left with an arrow link beneath it, and a right-aligned list
 * set large in the display serif. Here that list is the sourcing — the part of
 * the brief that carries the quality claim without having to argue for it.
 */
export function Broth() {
  return (
    <section className="on-dark relative min-h-[680px] w-full overflow-hidden">
      <Image
        src="/placeholder/broth.jpg"
        alt="The stockpot before opening"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,10,8,.88) 0%, rgba(14,10,8,.35) 55%, rgba(14,10,8,.55) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1320px] items-end px-6 pb-16 lg:px-10">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-[34ch]">
            <p className="label" style={{ color: "var(--cream-muted)" }}>
              {copy.broth.eyebrow}
            </p>
            <h2
              className="mt-4 text-[24px] leading-[1.4] sm:text-[30px]"
              style={{ color: "var(--cream)", letterSpacing: "0.05em" }}
            >
              {copy.broth.body}
            </h2>
            <a
              href="#story"
              className="label mt-6 inline-flex items-center gap-4"
              style={{ color: "var(--cream)" }}
            >
              {copy.broth.link}
              <Arrow />
            </a>
          </div>

          <ul className="text-left lg:text-right">
            <li className="label mb-3" style={{ color: "var(--cream-muted)" }}>
              {copy.broth.listLabel}
            </li>
            {story.sourcing.map((s) => (
              <li
                key={s}
                className="text-[26px] leading-[1.35] sm:text-[34px]"
                style={{ color: "var(--cream)" }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
