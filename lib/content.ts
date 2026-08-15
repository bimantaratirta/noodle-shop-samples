/**
 * Shared restaurant content — ONE source for all three samples.
 *
 * This is the most important structural decision in the repo: every direction
 * renders the same menu, the same prices, the same story, the same hours. When
 * the three are compared side by side, the only variable is design. If one
 * sample invents its own copy to flatter its layout, the comparison is worthless.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ EVERYTHING MARKED `placeholder: true` IS INVENTED.                   │
 * │ Prices, hours, unit number and delivery links are NOT from the       │
 * │ client. They exist so layouts have realistic shapes to hold.         │
 * │ Do not show these numbers to the client as if they were real.        │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Source of the real values: The-Beef-Noodle-Shop-Brand-Brief-1.docx
 * (see docs/01-brief.md for what the brief does and does not specify).
 */

export const CONTENT_STATUS = {
  /** Flip to false once the client supplies real menu, prices and hours. */
  placeholder: true,
  lastReviewed: "2026-08-15",
} as const;

/* ── Brand ───────────────────────────────────────────────────────────── */

export const brand = {
  name: "The Beef Noodle Shop",
  chinese: "牛肉麵",
  tagline: {
    en: "Good food, better mood.",
    zh: "好味道，好心情。",
  },
  /** Crew t-shirt lines already developed by the client. Real, from the brief. */
  crewLines: ["Just Slurp It.", "On A Noodle Roll."],
  /**
   * Brand personality, from the brief's "Kepribadian merek" section
   * (docs/01-brief.md) — drafted there in Indonesian, normalized to English
   * here to match the register the rest of this file already uses.
   */
  personality:
    "Fun, energetic, and modern — but rooted in tradition. Warm and bold, never loud. Simple and clean, but never cold.",
  /**
   * Non-halal. In Malaysia this is not a footnote — it sets expectations and
   * defines the addressable audience. Every direction must state it calmly and
   * early, never buried in a footer.
   */
  dietary: "Non-halal",
} as const;

/* ── Outlet ──────────────────────────────────────────────────────────── */

export const outlet = {
  name: "Paradigm Mall, Petaling Jaya",
  /** PLACEHOLDER — brief gives the mall, not the unit. */
  unit: "Lot 0-00, Level 0",
  city: "Petaling Jaya, Selangor",
  country: "Malaysia",
  seats: 30,
  openedOn: "2026-08-01",
  /** PLACEHOLDER — mall hours assumed, not confirmed. */
  hours: [
    { days: "Isnin – Jumaat", open: "11:00", close: "22:00" },
    { days: "Sabtu – Ahad", open: "10:00", close: "22:00" },
  ],
} as const;

/** PLACEHOLDER links — real deep links must come from the client's merchant accounts. */
export const delivery = [
  { name: "GrabFood", url: "#" },
  { name: "ShopeeFood", url: "#" },
  { name: "Foodpanda", url: "#" },
] as const;

/* ── Navigation & labels ─────────────────────────────────────────────── */

/**
 * Short nav labels. Generic on purpose so any direction can reuse them —
 * don't bend the wording to flatter one sample's layout.
 */
export const nav = {
  home: "Home",
  story: "Story",
  menu: "Menu",
  visit: "Visit",
  /** Approved CTA wording (docs/02-arah-desain.md) — Malay, deliberately. */
  order: "Pesan",
} as const;

/** Eyebrow words for data blocks above that don't carry their own caption yet. */
export const labels = {
  hours: "Hours",
  location: "Location",
  delivery: "Delivery",
  dietary: "Dietary",
  /** Section eyebrow for the small set of dishes highlighted on the page. */
  signature: "Signature",
} as const;

/** Formats an opening date into a short label, e.g. "Open since Aug 2026". */
export function openedLabel(isoDate: string): string {
  const formatted = new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  return `Open since ${formatted}`;
}

/* ── Story ───────────────────────────────────────────────────────────── */

/** Drawn from the brief's section 2. The pull quote is the client's own words. */
export const story = {
  era: "1980s",
  pullQuote:
    "We didn't invent this recipe for a trend cycle. We inherited it, and we're not cutting corners on it.",
  /*
   * Normalized to English — same facts as the brief, matching the register
   * everything else in this file already uses (tagline, pullQuote,
   * crewLines). The Indonesian draft these came from is a drafting
   * artifact, not client-supplied wording, so translating is a format
   * change, not new content.
   */
  beats: [
    "Our founders' parents ran a beef noodle stall — the broth was already simmering for hours before the doors opened.",
    "Regulars never needed to look at the menu.",
    "This shop is the continuation. Same care, same standard, adapted to how people eat today.",
  ],
  sourcing: ["Australian beef", "Australian soup bone", "Quality pork"],
  /**
   * PLACEHOLDER — INVENTED, not from the brief. Long-form narrative copy
   * written to give a full story section a realistic shape (same reason
   * the menu/prices/hours placeholders exist — see the file header). It's
   * grounded in the real facts above (era, sourcing, seats, delivery,
   * dietary, tagline, crewLines) but the sentences themselves are not
   * client-supplied. Replace with the client's actual story before this
   * ships — do not show this copy to the client as if it were real.
   */
  narrative: [
    "Long before this room existed, there was a stall — a single pot, a single family, and a broth that started simmering hours before anyone walked in. That's where this recipe comes from: not a test kitchen, not a focus group, but a kitchen that opened before sunrise because the soup needed the time.",
    "The people who ate there stopped needing the menu. They knew what they wanted, and they knew it would be ready the way it always was. That kind of trust isn't built in a season — it's built bowl by bowl, over years, by never quietly changing the recipe when no one's watching.",
    "What's in the bowl hasn't changed just because the room has. Australian beef shin and soup bone, simmered the long way. Noodles pulled by hand, not cut from a machine. Pork sourced for quality, not for the lowest price on the invoice. None of it is dramatic — it's just the difference between food made to be eaten and food made to be sold.",
    "This room is the next chapter, not a reinvention. Thirty seats at Paradigm Mall, Petaling Jaya, takeaway at the counter, and delivery through GrabFood, ShopeeFood, and Foodpanda for the days a bowl needs to come to you instead. Everyone's welcome at the table — the kitchen is non-halal, stated plainly, not as a footnote.",
    "Good food, better mood — 好味道，好心情 — isn't a slogan dreamed up for a signboard. It's what the people behind this counter actually believe, crew t-shirts and all: just slurp it, get back on the noodle roll, and let the bowl do the talking. The plan is more rooms like this one — but the broth starts the same way in every single one.",
  ],
} as const;

/* ── Menu ────────────────────────────────────────────────────────────── */

export interface MenuItem {
  name: string;
  chinese: string;
  description: string;
  /** PLACEHOLDER price in MYR. */
  price: number;
}

export interface MenuSection {
  id: string;
  name: string;
  chinese: string;
  items: MenuItem[];
}

/** Categories are real (brief section 1). Item names, copy and prices are PLACEHOLDER. */
export const menu: MenuSection[] = [
  {
    id: "beef-noodles",
    name: "Beef Noodles",
    chinese: "牛肉麵",
    items: [
      {
        name: "Braised Beef Noodle Soup",
        chinese: "紅燒牛肉麵",
        description: "Australian beef shin, soup bone broth, hand-pulled noodles.",
        price: 24.9,
      },
      {
        name: "Clear Broth Beef Noodle",
        chinese: "清燉牛肉麵",
        description: "The lighter bowl. Same bone, longer simmer, less soy.",
        price: 24.9,
      },
      {
        name: "Beef Tendon Noodle",
        chinese: "牛筋麵",
        description: "Tendon braised until it gives way completely.",
        price: 27.9,
      },
    ],
  },
  {
    id: "rice",
    name: "Rice",
    chinese: "飯類",
    items: [
      {
        name: "Lu Rou Fan",
        chinese: "滷肉飯",
        description: "Braised minced pork over rice, soft egg.",
        price: 12.9,
      },
      {
        name: "Pork Chop Rice",
        chinese: "排骨飯",
        description: "Marinated pork chop, pickled greens, rice.",
        price: 18.9,
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    chinese: "小菜",
    items: [
      {
        name: "Gua Bao",
        chinese: "刈包",
        description: "Steamed bun, braised pork belly, peanut, coriander.",
        price: 9.9,
      },
    ],
  },
  {
    id: "sweet",
    name: "Sweet & Drinks",
    chinese: "甜品・飲料",
    items: [
      {
        name: "Shaved Ice",
        chinese: "剉冰",
        description: "Seasonal fruit, condensed milk.",
        price: 13.9,
      },
      {
        name: "Plum Juice",
        chinese: "酸梅湯",
        description: "Sour, cold, cuts through the broth.",
        price: 7.9,
      },
    ],
  },
];

/** Formats MYR the way it is written in Malaysia. */
export function price(value: number): string {
  return `RM ${value.toFixed(2)}`;
}
