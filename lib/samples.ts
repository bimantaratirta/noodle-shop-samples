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

export type SampleSlug = "warisan" | "kaldu" | "terang" | "bara";

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
  /** Screenshot shown on the entry page. Only directions that exist have one. */
  preview?: string;
  /** What actually got built, for a direction that is finished. */
  built?: {
    blocks: number;
    height: string;
    notes: string[];
  };
  /**
   * Where this direction stands.
   * `built`   — the real page exists
   * `stub`    — placeholder only
   * `dropped` — kept as a record of what was considered and not chosen
   */
  status: "built" | "stub" | "dropped";
}

export const SAMPLES: Sample[] = [
  {
    slug: "warisan",
    name: "Warisan",
    gloss: "heritage — the thing you inherit rather than invent",
    thesis:
      "Replika bahasa visual Dishoom: serif uppercase ber-tracking lebar, foto berbingkai garis rambut dengan caption arsip, body rata kanan-kiri, tile foto ber-label outline. Cerita 1980-an jadi tulang punggungnya.",
    derivedFrom: "dishoom.com — diukur langsung lewat probe DOM, bukan dikira-kira",
    ground: "campuran",
    risk:
      "Bergantung penuh pada fotografi arsip dan ruangan yang nyata. Dengan stock pun layout-nya kebaca, tapi dengan foto lemah seluruh arah ini runtuh.",
    swatches: ["#F0ECE0", "#353839", "#B5502C", "#1A1512"],
    status: "built",
    preview: "/previews/warisan.jpg",
    built: {
      blocks: 11,
      height: "±9.400px",
      notes: [
        "Hero scroll-through: kartu inset 1066×738 membuka jadi full-bleed 1440×900",
        "Reveal kata per kata mengikuti scroll, tanpa library animasi",
        "Tile hover memutar klip video; plat melebar memunculkan panah",
        "Fraunces + Cabin, pengganti open-source untuk Cheltenham + Gill Sans Nova",
        "Semua transisi cubic-bezier(.4,0,.2,1), sesuai hasil ukur",
        "Anchor meluncur, mati di bawah prefers-reduced-motion",
        "Blok penghargaan & arsip resep sengaja dilewati — belum ada isinya",
      ],
    },
  },
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
    status: "built",
    preview: "/previews/kaldu.jpg",
    built: {
      blocks: 8,
      height: "±7.900px",
      notes: [
        "Playfair Display + Inter — pasangan asli referensinya, dua-duanya gratis",
        "Proses sticky dengan gambar yang BERGANTI per langkah + indikator 01/05",
        "Section proses 2.192px vs 3.740px di referensi, konten sama banyak",
        "Lantai tipografi: badan ≥15px/400, label ≥12px/500 — referensi turun ke 9px/300",
        "Easing cubic-bezier(.16,1,.3,1) dengan stagger 0.1s, sesuai hasil ukur",
        "Harga tampil penuh kontras, melawan risiko terbaca eksklusif",
        "Marquee penghargaan diganti tagline — resto belum punya penghargaan",
      ],
    },
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
    status: "dropped",
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
    status: "dropped",
  },
];

export function getSample(slug: SampleSlug): Sample {
  const sample = SAMPLES.find((s) => s.slug === slug);
  if (!sample) throw new Error(`Unknown sample: ${slug}`);
  return sample;
}
