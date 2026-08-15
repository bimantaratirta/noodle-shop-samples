/**
 * Registry of the three design directions.
 *
 * This is the single source of truth for what samples exist. The entry page
 * (`app/page.tsx`) renders from this list, so adding a fourth direction means
 * adding an entry here plus a matching folder under `app/`.
 *
 * Slugs are thematic, not numbered — the name should say something about the
 * direction so it survives being reordered or dropped.
 */

export type SampleSlug = "kaldu" | "terang" | "bara";

export interface Sample {
  slug: SampleSlug;
  /** Display name shown on the entry page. */
  name: string;
  /** What the name means, for anyone reading this cold. */
  gloss: string;
  /** The single argument this direction makes. */
  thesis: string;
  /** Which of the three approved references this is derived from. */
  derivedFrom: string;
  /** Dominant ground colour — the fastest way to tell them apart. */
  ground: "gelap" | "terang" | "campuran";
  /** The honest failure mode. Every direction has one. */
  risk: string;
  /** Swatches for the entry-page card, in visual order. */
  swatches: string[];
}

export const SAMPLES: Sample[] = [
  {
    slug: "kaldu",
    name: "Kaldu",
    gloss: "broth — the thing that simmers before the shop opens",
    thesis:
      "Gelap, dalam, dan tenang. Kualitas disampaikan lewat kerajinan dan pengekangan, bukan lewat volume.",
    derivedFrom: "Ember (aura.build) — deep dark aesthetic, sticky scroll",
    ground: "gelap",
    risk:
      "Gelap membaca sebagai mahal. Brief melarang keras terlihat eksklusif — harus dilawan dengan harga yang terlihat jelas dan copy yang membumi.",
    swatches: ["#1A1512", "#B5502C", "#C99A3F", "#F4EDE1"],
  },
  {
    slug: "terang",
    name: "Terang",
    gloss: "bright — daylight, open door, nothing hidden",
    thesis:
      "Cream terang, tipografi raksasa, ruang kosong berani. 牛肉麵 sebagai huruf outline di atas foto ruangan — identitas tanpa perlu logo.",
    derivedFrom: "Little Latte (aura.build) — editorial, asimetris, outline type",
    ground: "terang",
    risk:
      "Grotesk murni bisa terbaca dingin. Brief minta hangat dan berkarakter, bukan Swiss yang steril.",
    swatches: ["#F4EDE1", "#2B2320", "#B5502C", "#C99A3F"],
  },
  {
    slug: "bara",
    name: "Bara",
    gloss: "embers — a warm glow held inside the dark",
    thesis:
      "Cream sebagai ground utama, gelap dipakai sebagai tanda baca — satu section untuk cerita 1988. Kerajinan Ember tanpa masalah eksklusifnya.",
    derivedFrom: "Ember + Little Latte + Dishoom — hibrida",
    ground: "campuran",
    risk:
      "Hibrida paling gampang jadi kompromi yang tidak berpendirian. Peralihan cream→gelap harus terasa disengaja, bukan ragu-ragu.",
    swatches: ["#F4EDE1", "#1A1512", "#B5502C", "#C99A3F"],
  },
];

export function getSample(slug: SampleSlug): Sample {
  const sample = SAMPLES.find((s) => s.slug === slug);
  if (!sample) throw new Error(`Unknown sample: ${slug}`);
  return sample;
}
