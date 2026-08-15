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
  /**
   * PLACEHOLDER — mall hours assumed, not confirmed.
   * Day names in English to match the rest of the customer-facing copy.
   */
  hours: [
    { days: "Monday – Friday", open: "11:00", close: "22:00" },
    { days: "Saturday – Sunday", open: "10:00", close: "22:00" },
  ],
} as const;

/** PLACEHOLDER links — real deep links must come from the client's merchant accounts. */
export const delivery = [
  { name: "GrabFood", url: "#" },
  { name: "ShopeeFood", url: "#" },
  { name: "Foodpanda", url: "#" },
] as const;

/* ── Story ───────────────────────────────────────────────────────────── */

/**
 * Drawn from the brief's section 2. The pull quote is the client's own words.
 *
 * Copy here is customer-facing and therefore ENGLISH — the site serves diners in
 * PJ/KL, where English is the working language. Traditional Chinese appears as a
 * heritage signal (see docs/01-brief.md), never as a parallel translation.
 */
export const story = {
  era: "1980s",
  pullQuote:
    "We didn't invent this recipe for a trend cycle. We inherited it, and we're not cutting corners on it.",
  beats: [
    "In the 1980s, our founder's parents ran a beef noodle shop. The broth had already been simmering for hours before the door was unlocked.",
    "Regulars never needed to look at the menu.",
    "This shop is the continuation. The same care, the same standards, updated for how people eat today.",
  ],
  sourcing: ["Australian beef", "Australian soup bone", "Quality pork"],
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

/* ── Page copy ───────────────────────────────────────────────────────── */

/**
 * Section copy for the site. Shared, like everything else here — a second
 * direction would render these same strings in its own visual language.
 *
 * English throughout, with Traditional Chinese used only where it signals the
 * Taiwanese lineage. Written short, warm and a little cheeky, matching the tone
 * the client already set with "Just Slurp It." and "On A Noodle Roll."
 */
export const copy = {
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Our Story", href: "#story" },
    { label: "Visit", href: "#visit" },
    { label: "Order", href: "#order" },
  ],

  hero: {
    welcome: "好味道，好心情。",
    quote:
      "The broth was already on before the door was unlocked. The regulars never needed the menu.",
    actions: [
      { label: "See the menu", href: "#menu" },
      { label: "Find us", href: "#visit" },
    ],
  },

  loveLetter: {
    /** Rendered as staggered lines, first flush left, the rest indented. */
    headingLines: [
      "This shop is a continuation —",
      "the same pot, the same patience, the same",
      "refusal to cut the corner that matters.",
    ],
    body: [
      "In the 1980s our founder's parents ran a beef noodle shop. Not a concept, not a launch — a shop. The broth simmered for hours before the door was unlocked, and the regulars never looked at the menu because they already knew.",
      "We didn't invent this recipe for a trend cycle. We inherited it. What changed is the room, the city and the year. What didn't change is the bone, the hours, and the standard nobody sees but everybody tastes.",
    ],
    caption: {
      label: "ABOVE:",
      text: "The original shop, sometime in the late 1980s.",
    },
  },

  tiles: {
    eyebrow: "Treasured guest",
    headingLines: ["READ THE MENU, FIND THE SHOP,", "OR HAVE IT SENT OVER"],
    items: [
      {
        title: "MENU",
        subtitle: "Beef noodles, rice, sides and sweets",
        href: "#menu",
        image: "/placeholder/tile-menu.jpg",
      },
      {
        title: "VISIT",
        subtitle: "Paradigm Mall, Petaling Jaya",
        href: "#visit",
        image: "/placeholder/tile-visit.jpg",
      },
      {
        title: "DELIVERY",
        subtitle: "Grab, ShopeeFood and Foodpanda",
        href: "#order",
        image: "/placeholder/tile-order.jpg",
      },
    ],
  },

  menu: {
    eyebrow: "Every bowl, every price",
    heading: "WHAT WE COOK",
    note: "Australian beef and soup bone. Quality pork. Nothing hurried.",
  },

  broth: {
    eyebrow: "Before opening",
    heading: "THE PART NOBODY SEES",
    body: "Bone, water, time. The broth starts hours before the shutter goes up, and it finishes when it is ready — not when service starts.",
  },

  visit: {
    eyebrow: "Come and sit",
    heading: "FIND US",
    seatingNote:
      "Thirty seats. Comfortable with grandparents and a pram, just as comfortable on your own with a book.",
  },

  footer: {
    columns: [
      {
        title: "VISIT",
        links: [
          { label: "Paradigm Mall, PJ", href: "#visit" },
          { label: "Opening hours", href: "#visit" },
        ],
      },
      {
        title: "EAT",
        links: [
          { label: "Full menu", href: "#menu" },
          { label: "Delivery", href: "#order" },
        ],
      },
      {
        title: "ABOUT",
        links: [
          { label: "Our story", href: "#story" },
          { label: "Sourcing", href: "#story" },
        ],
      },
    ],
  },
} as const;
