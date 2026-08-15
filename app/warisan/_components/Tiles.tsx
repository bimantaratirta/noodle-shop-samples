import Image from "next/image";
import { copy } from "@/lib/content";
import { Ornament } from "./Ornament";

/**
 * The three-tile router from the reference: small serif eyebrow, a centred
 * uppercase heading on wide tracking, then full-bleed photo tiles each carrying
 * an outlined cream label box near the bottom — border only, no fill, so the
 * photograph stays visible through it.
 */
export function Tiles() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-10" style={{ background: "var(--ground-alt)" }}>
      <div className="mx-auto max-w-[1240px]">
        <Ornament className="mb-8" />

        <p className="text-center text-[19px] italic" style={{ color: "var(--ink-muted)" }}>
          {copy.tiles.eyebrow}
        </p>

        <h2 className="display-wide mt-4 text-center text-[19px] sm:text-[27px]">
          {copy.tiles.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <ul className="mt-14 grid gap-5 sm:grid-cols-3">
          {copy.tiles.items.map((tile) => (
            <li key={tile.title}>
              <a href={tile.href} className="group relative block aspect-[3/4] overflow-hidden">
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(16,12,10,.55) 100%)" }}
                />
                <span
                  className="absolute inset-x-5 bottom-6 border px-4 py-4 text-center"
                  style={{ borderColor: "var(--line-cream)" }}
                >
                  <span
                    className="display-wide block text-[15px] sm:text-[17px]"
                    style={{ color: "var(--cream)" }}
                  >
                    {tile.title}
                  </span>
                  <span
                    className="mt-1.5 block text-[13px] italic leading-snug"
                    style={{ color: "var(--cream-muted)" }}
                  >
                    {tile.subtitle}
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
