import Image from "next/image";
import { copy } from "@/lib/content";
import { Ornament } from "./Ornament";
import { Arrow } from "./Arrow";

/**
 * The three-tile router.
 *
 * Corrected against the recording: the label is a cream-FILLED plate with a
 * double rule and dark text — not the transparent cream outline of the first
 * pass — and the photographs underneath carry no gradient scrim. On hover the
 * plate grows downward to reveal the long-tailed arrow.
 */
export function Tiles() {
  return (
    <section className="px-6 py-24 lg:px-10" style={{ background: "var(--ground-alt)" }}>
      <div className="mx-auto max-w-[1240px]">
        <p className="text-center text-[19px]" style={{ color: "var(--ink-muted)" }}>
          {copy.tiles.eyebrow}
        </p>

        <h2 className="display-wide mt-4 text-center text-[19px] sm:text-[27px]">
          {copy.tiles.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <Ornament className="mt-7" />

        <ul className="mt-14 grid gap-6 sm:grid-cols-3">
          {copy.tiles.items.map((tile) => (
            <li key={tile.title}>
              <a href={tile.href} className="group relative block aspect-[3/4] overflow-hidden">
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                  style={{ transition: "transform 0.7s var(--ease)" }}
                />

                <span className="plate absolute inset-x-6 bottom-7 block px-4 py-4 text-center group-hover:pb-7">
                  <span className="display-wide block text-[15px] sm:text-[17px]">
                    {tile.title}
                  </span>
                  <span
                    className="mt-1.5 block text-[13px] italic leading-snug"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {tile.subtitle}
                  </span>
                  <span className="plate-arrow mt-2 flex justify-center overflow-hidden">
                    <Arrow />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
