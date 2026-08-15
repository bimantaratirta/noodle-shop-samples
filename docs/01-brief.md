# Client brief, distilled

Source: `The-Beef-Noodle-Shop-Brand-Brief-1.docx`. The original was written for a
**brand graphic designer** — its deliverables are logo lock-ups, colour variants
and applications to signage, packaging and uniforms. It is not a website brief.
This document distils the parts that bind web design decisions.

## Facts

| Field        | Detail                                                                     |
| ------------ | -------------------------------------------------------------------------- |
| Name         | The Beef Noodle Shop · 牛肉麵                                               |
| Category     | Modern Taiwanese restaurant — beef noodles, pork chop, lu rou fan, gua bao, shaved ice, plum juice |
| Location     | Paradigm Mall, Petaling Jaya, Malaysia                                     |
| Format       | 30-seat dine-in + takeaway + delivery (GrabFood, ShopeeFood, Foodpanda)     |
| Status       | **Non-halal**                                                              |
| Opened       | 1 August 2026                                                              |
| 3-year plan  | Two further branches — KL, and Puchong or Bukit Jalil                      |
| Tagline      | "Good food, better mood." / 好味道，好心情。                                 |

## Brand personality

The brief's own one-liner: fun, energetic and modern, but rooted in tradition;
warm and bold, never loud; simple and clean, yet never cold.

It presents this as a set of **dials rather than switches** — everything sits in
a confident middle, never pushed to either extreme:

- Traditional ←→ Modern — anchored in heritage, expressed with a modern hand
- Quiet ←→ Loud — bold, not loud
- Casual ←→ Fine dining — warm and classy, still a neighbourhood spot
- Fast food ←→ Slow food — efficient service that never reads as fast food
- Minimal ←→ Ornate — clean by default, cultural detail as considered accent
- Playful ←→ Serious — the tone can be cheeky, but the mark stays composed

## DO / DON'T

**DO** — feel like it could have existed for decades yet belongs today · signal
ingredient quality without over-explaining · feel considered down to the napkin ·
stay legible small (a delivery-app tile) and large (signage).

**DON'T** — look like a fast-casual chain or a cloud kitchen · chase a trend
aesthetic · rely on clutter, gimmicks or a mascot · **look expensive or exclusive
in a way that undercuts the affordable, everyday-treat positioning**.

That last point is the one that presses hardest on the Kaldu direction. See
`02-directions.md`.

## Starting palette

| Token       | Hex       | Role                                    |
| ----------- | --------- | --------------------------------------- |
| Broth Rust  | `#B5502C` | primary — warm, appetising              |
| Warm Gold   | `#C99A3F` | accent — echoes the shopfront neon glow |
| Ink Brown   | `#2B2320` | text and rules, warmer than pure black  |
| Paper Cream | `#F4EDE1` | background — warm, not sterile          |

The anchor is the **2700–3000K warm-white neon** the client already chose for the
shopfront. That colour temperature is what the whole system has to sit against.

## Typography direction

- A confident, slightly characterful serif or humanist display face for the
  wordmark — warm and classy, not a generic sans that could belong to any café
- A highly legible companion for menus, packaging and delivery-app listings —
  this is the workhorse and has to hold up small
- If Chinese characters appear in the mark, they should feel considered rather
  than a default system font

## Three things the brief does not answer, which change the design

**1. The shop is already open.** The brief says "Opening 1 August 2026". As of
15 August 2026 it had been trading a fortnight. So the site's job is not
pre-launch hype — it is filling weekday covers and driving delivery orders.

**2. Traditional Chinese is a signal in Malaysia, not a translation.** Malaysia
uses **Simplified** Chinese officially; Chinese-language schools and newspapers
there are Simplified. Traditional is Taiwan. So 牛肉麵 and 好味道，好心情 work as
**markers of Taiwanese lineage**, not as text local readers need in order to
understand the page. The consequence: use Traditional Chinese as display and
brand typography, and **do not build a full translation layer**. That saves a
large amount of scope and is strategically more correct.

**3. Non-halal has to be stated calmly and early.** In Malaysia this is not a
small detail — it sets expectations and defines the addressable audience. It
belongs in the content, plainly, neither buried in a footer nor made awkward.

## A technical note the brief creates

Traditional Chinese fonts run **5–15 MB**. This site uses only a handful of
characters (牛肉麵, 好味道，好心情, dish names). They must be **subset** down to a
few KB. That affects which typeface can be chosen, so it has to be decided early
rather than late.
