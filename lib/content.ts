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
    /** Sits where the reference puts its own greeting line, above the headline. */
    welcome: "好味道，好心情。",
    /** The tagline IS the hero headline, exactly as the reference does it. */
    headline: "“Good food, better mood.”",
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
    eyebrow: "From the pass",
    heading: "WHAT WE COOK",
    note: "Australian beef and soup bone. Quality pork. Nothing hurried.",
    /**
     * Prices are deliberately not printed on the page — the client asked for the
     * menu to read as a menu, not a price list. They stay in `menu[].items[].price`
     * so the delivery-app listings and any printed menu can still use one source.
     */
    priceNote: "Prices on GrabFood, ShopeeFood and Foodpanda.",
  },

  broth: {
    eyebrow: "Before opening",
    heading: "THE PART NOBODY SEES",
    body: "Bone, water, time. The broth starts hours before the shutter goes up, and it finishes when it is ready — not when service starts.",
    link: "Read our story",
    listLabel: "Sourced",
  },

  visit: {
    eyebrow: "Come and sit",
    heading: "FIND US",
    seatingNote:
      "Thirty seats. Comfortable with grandparents and a pram, just as comfortable on your own with a book.",
  },

  /**
   * Ordering gets its own block rather than a third column inside Visit.
   *
   * The nav and the header button both advertise "Order" as a destination, and
   * it wasn't one — the links sat 262px below the "Find us" heading, so landing
   * there either hid that heading or showed exactly the same view as Visit.
   * A named section is what makes the two nav items mean different things.
   */
  order: {
    eyebrow: "Or stay where you are",
    heading: "HAVE IT SENT OVER",
    body: "Same bowl, same broth, packed to travel. Delivery runs through the three apps; takeaway is always available at the counter.",
    takeaway: "Prefer to collect? Order at the counter — no app, no fee.",
  },

  /** Block 5 on the reference: long copy one side, stacked framed photos the other. */
  dishGrid: {
    eyebrow: "TAIPEI COMFORT FOOD",
    heading: "Eat the way they eat at home",
    body: [
      "A bowl of beef noodles is not one recipe. It is a shop's answer to the same question everybody asks — how long will you wait, and what will you not skip.",
      "Ours takes the long answer. Australian shin and soup bone go in before the shutter is up. The red-braise gets its colour from soy and time, never from a shortcut. The clear broth gets nothing but bone, water and patience.",
      "Around the bowl sits the rest of the table: lu rou fan for the quiet appetite, a pork chop for the hungry one, gua bao to share, shaved ice and plum juice to cut the heat.",
    ],
    actions: [
      { label: "See the menu", href: "#menu" },
      { label: "Find us", href: "#visit" },
    ],
    images: [
      { src: "/placeholder/story-bowl.jpg", caption: "The red-braised bowl, as it leaves the pass" },
      { src: "/placeholder/sourcing.jpg", caption: "Bone and shin, before the long simmer" },
      { src: "/placeholder/tile-menu.jpg", caption: "Greens, chilli oil and the rest of the table" },
    ],
  },

  /**
   * A single dish on a bordered plate, sitting just ahead of the menu.
   *
   * The eyebrow deliberately avoids "this month" — that promises a rotation the
   * client would then have to keep up, and the shop is a fortnight old. Framing
   * it for a first-time visitor commits to nothing and does more work.
   */
  feature: {
    eyebrow: "IF IT'S YOUR FIRST TIME",
    headlineLeft: "START",
    headlineRight: "WITH THE TENDON",
    subtitle:
      "Braised until it gives way completely. The bowl that tells you whether a shop is cutting corners.",
    link: "See the full menu",
    href: "#menu",
    image: "/placeholder/feature.jpg",
  },

  /**
   * Block 10: image + tagline one side, get-in-touch the other, ruled band between.
   *
   * This was a sign-up form. It is now a mailto, which is the honest version for
   * a shop with no mailing-list backend: an email client opens, the visitor can
   * see exactly what they are sending, and nothing is collected by a page that
   * has nowhere to put it.
   */
  contact: {
    heading: "WRITE TO US",
    body: "Large group, a question about the kitchen, or something we got wrong — it reaches the shop directly, and someone here answers it.",
    /** PLACEHOLDER — the real address must come from the client. */
    email: "email@example.com",
    subject: "Hello from thebeefnoodleshop.com",
    button: "Send us an email",
    reasons: ["Bookings for six or more", "Anything about allergies", "Working with us"],
    image: "/placeholder/tile-visit.jpg",
  },

  footer: {
    columns: [
      {
        title: "VISIT",
        links: [
          { label: "Paradigm Mall, PJ", href: "#visit" },
          { label: "Opening hours", href: "#visit" },
          { label: "Getting here", href: "#visit" },
          { label: "Large groups", href: "#visit" },
        ],
      },
      {
        title: "EAT",
        links: [
          { label: "Full menu", href: "#menu" },
          { label: "Beef noodles", href: "#menu" },
          { label: "Rice and sides", href: "#menu" },
          { label: "Sweets and drinks", href: "#menu" },
        ],
      },
      {
        title: "ORDER",
        links: [
          { label: "GrabFood", href: "#order" },
          { label: "ShopeeFood", href: "#order" },
          { label: "Foodpanda", href: "#order" },
          { label: "Takeaway", href: "#order" },
        ],
      },
      {
        title: "ABOUT",
        links: [
          { label: "Our story", href: "#story" },
          { label: "Sourcing", href: "#story" },
          { label: "Working with us", href: "#visit" },
          { label: "Contact", href: "#visit" },
        ],
      },
    ],
  },
} as const;
