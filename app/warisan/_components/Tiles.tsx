import { copy } from "@/lib/content";
import { Ornament } from "./Ornament";
import { TileCard } from "./TileCard";

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
              <TileCard
                title={tile.title}
                subtitle={tile.subtitle}
                href={tile.href}
                image={tile.image}
                video="/placeholder/hero.mp4"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
