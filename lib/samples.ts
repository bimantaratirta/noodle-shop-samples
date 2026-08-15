/**
 * Registry of the design directions.
 *
 * This is the single source of truth for what exists. The entry page
 * (`app/page.tsx`) renders from this list, so adding a direction means adding an
 * entry here plus a matching folder under `app/`.
 *
 * Slugs are thematic rather than numbered — a name should say something about
 * the direction, so it survives being reordered or dropped.
 */

export type SampleSlug = "warisan" | "kaldu" | "terang";

export interface Sample {
  slug: SampleSlug;
  /** Display name shown on the entry page. */
  name: string;
  /** What the name means, for anyone reading this cold. */
  gloss: string;
  /** The single argument this direction makes. */
  thesis: string;
  /** Which approved reference it is derived from. */
  derivedFrom: string;
  /** Dominant ground colour — the fastest way to tell them apart. */
  ground: "dark" | "light" | "mixed";
  /** The honest failure mode. Every direction has one. */
  risk: string;
  /** Swatches for the entry-page card, in visual order. */
  swatches: string[];
  /** Screenshot shown on the entry page. Only directions that exist have one. */
  preview?: string;
  /** What actually got built. */
  built?: {
    blocks: number;
    height: string;
    notes: string[];
  };
  /**
   * Where this direction stands.
   * `built` — the real page exists
   * `stub`  — placeholder only
   */
  status: "built" | "stub";
}

export const SAMPLES: Sample[] = [
  {
    slug: "warisan",
    name: "Warisan",
    gloss: "heritage — the thing you inherit rather than invent",
    thesis:
      "A replica of the Dishoom visual language: uppercase serif on wide tracking, hairline-framed photographs with archive captions, justified body copy, photo tiles with outlined label plates. The 1980s story carries the page.",
    derivedFrom: "dishoom.com — measured by probing the live DOM, not guessed",
    ground: "mixed",
    risk:
      "Leans entirely on real archive and interior photography. The layout reads even with stock, but weak photographs would collapse the whole direction.",
    swatches: ["#F0ECE0", "#353839", "#B5502C", "#1A1512"],
    status: "built",
    preview: "/previews/warisan.jpg",
    built: {
      blocks: 11,
      height: "~9,400px",
      notes: [
        "Hero scroll-through: a 1066×738 inset card opening to full-bleed 1440×900",
        "Word-by-word colour reveal driven by scroll position, no animation library",
        "Tiles play a muted clip on hover; the label plate grows to reveal an arrow",
        "Fraunces + Cabin, open substitutes for Cheltenham + Gill Sans Nova",
        "Every transition on cubic-bezier(.4,0,.2,1), matching the measured original",
        "Anchors glide, and stop under prefers-reduced-motion",
        "Awards and recipe-archive blocks deliberately skipped — no content for them",
      ],
    },
  },
  {
    slug: "kaldu",
    name: "Kaldu",
    gloss: "broth — the thing that simmers before the shop opens",
    thesis:
      "Dark, deep and unhurried. Structure and the pinned-scroll mechanic come from Ember; the typography, colour roles and layout rhythm deliberately do not — matching it exactly produced a page that was correct and completely voiceless.",
    derivedFrom: "Ember (aura.build) — structure measured, character replaced",
    ground: "dark",
    risk:
      "Dark still reads as expensive, and the brief rules hard against looking exclusive. Since prices were removed at the client's request, the only counterweight left is tone and warmth — there is no number grounding the page any more.",
    swatches: ["#17110E", "#3B2719", "#C85A30", "#D8A349"],
    status: "built",
    preview: "/previews/kaldu.jpg",
    built: {
      blocks: 8,
      height: "~7,900px",
      notes: [
        "Instrument Serif + Newsreader — deliberately NOT the reference's Playfair + Inter",
        "Pinned process column whose photograph CHANGES per step, plus an 01/05 indicator",
        "Process section 2,192px against the reference's 3,740px for the same content",
        "Type floor: body ≥15px/400, labels ≥12px/500 — the reference drops to 9px/300",
        "cubic-bezier(.16,1,.3,1) with a 0.1s stagger, matching the measured original",
        "Rust does the work, gold made rare; dark and brown bands alternate per section",
        "No prices; every dish carries its own photograph, wide/narrow grid rhythm",
        "Awards marquee replaced with the tagline — the shop has no awards yet",
      ],
    },
  },
  {
    slug: "terang",
    name: "Terang",
    gloss: "bright — daylight, open door, nothing hidden",
    thesis:
      "Bright cream, oversized typography, bold empty space. 牛肉麵 set as giant outline lettering over a photograph of the room — an identity that works before any logo exists.",
    derivedFrom: "Little Latte (aura.build) — editorial, asymmetric, outline type",
    ground: "light",
    risk:
      "A pure grotesk can read cold, and the brief asks for warm and characterful rather than sterile Swiss. Warmth has to arrive from the photography and a braver use of Broth Rust.",
    swatches: ["#F4EDE1", "#2B2320", "#B5502C", "#C99A3F"],
    status: "built",
    preview: "/previews/terang.jpg",
    built: {
      blocks: 9,
      height: "—",
      notes: [
        "Built by Bagas on the terang-build branch, merged as PR #1",
        "Archivo in two weight ranges — 700/900 for display, 400/500 for body",
        "牛肉麵 as giant outline lettering over the dining-room photograph",
        "Full menu category by category, photo-backed cards, no prices",
        'Renamed "Best Sellers" to "Signature" — there is no sales data behind that claim',
        "Stand-in photographs are labelled Temp stock on the page itself",
      ],
    },
  },
];

export function getSample(slug: SampleSlug): Sample {
  const sample = SAMPLES.find((s) => s.slug === slug);
  if (!sample) throw new Error(`Unknown sample: ${slug}`);
  return sample;
}
