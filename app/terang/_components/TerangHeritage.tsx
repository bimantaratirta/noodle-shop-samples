import { story } from "@/lib/content";
import { DiamondGrid } from "./DiamondGrid";
import { Photo } from "./Photo";

/**
 * The reference's "Brewing stories since 2024 – now" mid-page photo
 * section — same slot, same job, real content: the shop's actual opening
 * era and lineage instead of a café's invented founding date.
 */
export function TerangHeritage() {
  return (
    <section className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[24rem_1fr_11rem] lg:gap-12">
      <Photo
        src="https://images.unsplash.com/photo-1470114755716-3e1124c6c3bd?auto=format&fit=crop&w=900&q=80"
        alt="Reference: a cook hand-pulling noodles — stand-in for the shop's own kitchen"
        credit="Unsplash"
        dark
        rounded
        className="h-[22rem] w-full sm:h-[26rem] lg:h-[28rem]"
      />

      <div>
        <p
          className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          style={{ color: "var(--ink)" }}
        >
          Since {story.era}
        </p>
        {/* Sourcing, not a beat — the beats are told as a sequence just
            above in TerangStory; repeating one here would duplicate it. */}
        <p
          className="mt-8 max-w-2xl text-sm uppercase tracking-tight"
          style={{ color: "var(--ink-muted)" }}
        >
          {story.sourcing.join(" · ")}
        </p>
      </div>

      <DiamondGrid className="mx-auto hidden lg:grid" />
    </section>
  );
}
