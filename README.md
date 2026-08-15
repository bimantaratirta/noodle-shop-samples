# The Beef Noodle Shop — design directions

Design comparison repo for **The Beef Noodle Shop 牛肉麵**, a Taiwanese beef
noodle restaurant at Paradigm Mall, Petaling Jaya.

**Warisan (`/warisan`) is the chosen direction.** Kaldu and Terang are built
alternatives, kept because they are real pages worth looking at — not stubs.

```bash
npm install
npm run dev
```

| Route      | Direction   | Ground | Derived from              | Status |
| ---------- | ----------- | ------ | ------------------------- | ------ |
| `/`        | Entry page  | neutral | —                        | —      |
| `/warisan` | Warisan     | mixed  | dishoom.com               | **chosen** |
| `/kaldu`   | Kaldu       | dark   | Ember (aura.build)        | built  |
| `/terang`  | Terang      | light  | Little Latte (aura.build) | built  |

Route names are thematic rather than `sample1`–`sample3`, so a name still makes
sense if the order changes or one is dropped.

## Three rules that keep the comparison honest

**1. Content is shared, design is not.** All copy — menu, story, hours — comes
from one file, `lib/content.ts`. Every direction renders exactly the same
content. If one invents its own copy to flatter its layout, the comparison is
worthless.

**2. Themes are quarantined.** Each direction owns `app/<slug>/theme.css`,
scoped to a `.theme-<slug>` class. The root layout (`app/layout.tsx`) loads no
fonts, sets no colours, sets no ground — deliberately. Anything placed there is
inherited by all of them and quietly contaminates the comparison.

**3. Same token names, different values.** Every theme declares the same
variables — `--ground`, `--ground-alt`, `--ink`, `--ink-muted`, `--accent`,
`--gold`, `--line`, `--font-display`, `--font-body`. A component written for one
direction can be lifted into another and re-skins itself.

## How each direction was derived

None of them were guessed from screenshots. Each reference page was probed live
to read its computed styles, and those numbers were used.

### Warisan — dishoom.com

| Measured           | Value                              | Became          |
| ------------------ | ---------------------------------- | --------------- |
| Ground             | `rgb(240,236,224)`                 | `--ground`      |
| Ink                | `rgb(53,56,57)`                    | `--ink`         |
| Text on dark       | `rgb(255,253,249)`                 | `--cream`       |
| Display serif      | ITC Cheltenham                     | **Fraunces**    |
| Humanist sans      | Gill Sans Nova                     | **Cabin**       |
| Uppercase headings | tracking `0.18–0.25em`             | `.display-wide` |
| Nav / labels       | 15px, uppercase, tracking `0.25em` | `.label`        |

Eleven blocks, ~9,400px against the reference's eleven blocks and 11,218px. The
awards wall and recipe archive were deliberately skipped: the shop opened on
1 August 2026 and has neither, so staging them would invent credentials — which
is exactly what the brief's anti-hype position rules out.

Motion uses no animation library, matching the reference. One curve everywhere:
`cubic-bezier(0.4, 0, 0.2, 1)` at 0.15s / 0.3s / 0.5s / 0.7s.

| Motion              | Mechanism                                                                 |
| ------------------- | ------------------------------------------------------------------------- |
| Hero scroll-through | Inset card (1066×738, radius 5px) opens to full-bleed (1440×900, radius 0) across the first 0.85 viewport |
| Word reveal         | Each word in its own `<span>`, transitioning from `--cream-muted` to `--ink` as it rises past 68% of viewport height |
| Header inversion    | Transparent + cream over the hero, solid + ink once past it               |
| Tile hover          | A muted clip fades in over the still and plays; leaving pauses and rewinds |

`RevealWords` uses a rAF scroll handler rather than an IntersectionObserver on
purpose. An observer only fires on *transitions*, so anything jumped past — a
reload deep in the page, an anchor click — would stay stuck at the muted colour.
This is not theoretical: the observer version failed its test with 0 of 21 words
lit.

The newsletter block is a mailto, not a sign-up form. The shop has no mailing
list, so a form there could only collect an address and drop it.

### Kaldu — Ember (aura.build)

Structure was measured from the reference; its character deliberately was not.

Three fixes over the original:

1. **The pinned photograph changes per step.** On the reference the left column
   pins for 3,740px while five steps scroll past, but the image never changes —
   a finished cocktail sits there while the copy describes malting barley. A
   constant image is the same as no image.
2. **Dead space closed.** The reference gives each step ~750px of scroll for
   ~480px of content. Here the process section runs 2,192px for the same five
   steps.
3. **A type floor.** On the reference 8 of 29 text nodes fall below 4.5:1,
   using weight 300 at sizes down to 8.96px. Here body text is ≥15px/400 and
   labels ≥12px/500, enforced in CSS rather than by habit.

Typography is **Instrument Serif + Newsreader**, deliberately not the
reference's Playfair Display + Inter — between them the two most-used faces on
the web, which is what made the first pass read as templated. Rust does the
working colour, gold is kept rare. Dark and brown bands alternate per section.

### Terang — Little Latte (aura.build)

Built by Bagas on the `terang-build` branch and merged as PR #1. Archivo in two
weight ranges, 牛肉麵 as giant outline lettering over the dining-room
photograph, full menu without prices.

## Build guard

`npm run build` **refuses to run** while the site is still carrying placeholder
content.

```
✖ Refusing to build: the site is still carrying placeholder content
    CONTENT_STATUS.placeholder is still true
    contact email is still email@example.com
    ...
```

The on-page placeholder notices were removed so the pages present cleanly to the
client. That removed the only thing stopping invented hours and a dead mailto
from being deployed as though real. This puts the brake back somewhere nobody
walks past by accident.

| | |
| --- | --- |
| When it runs | `prebuild`, so only on `npm run build` — `npm run dev` is untouched |
| Manual check | `npm run check:placeholders` |
| Deliberate override | `ALLOW_PLACEHOLDER_BUILD=1 npm run build` (passes with a loud warning) |
| Script | `scripts/check-placeholders.mjs` |

It checks the `CONTENT_STATUS.placeholder` flag **and** the values that are
still invented (email, the three delivery links, unit number) — so lowering the
flag alone is not enough to pass.

It **fails closed**: if the flag is renamed or removed the build fails rather
than quietly passing. Tested across four paths — normal (exit 1, `next build`
never starts), override (exit 0 + warning), `dev` (unaffected), flag missing
(exit 1).

## Structure

```
app/
  layout.tsx          root — no fonts, no colours, deliberately empty
  globals.css         reset + neutral tokens for the entry page only
  page.tsx            entry page, rendered from lib/samples.ts
  warisan/            the chosen direction
  kaldu/              dark direction
  terang/             light direction
lib/
  samples.ts          registry — thesis, risk, swatches, what got built
  content.ts          ONE source of restaurant content for every direction
public/placeholder/   temporary media + notes on what real assets are needed
public/previews/      entry-page screenshots
docs/                 brief, per-direction reasoning, code conventions
```

## Status

| Area                    | State                                        |
| ----------------------- | -------------------------------------------- |
| Repo structure, routing | done                                         |
| Warisan                 | **done** — 11 blocks                         |
| Kaldu                   | **done** — 8 blocks                          |
| Terang                  | **done** — 9 blocks                          |
| Shared content          | filled, **hours and unit still placeholder** |
| Photography             | **licensed stock, not the client's**         |
| Traditional Chinese font | still a system fallback — not yet subset     |

## Still needed from the client

1. **Photography.** The single biggest risk. Every direction leans on real
   full-bleed imagery. Most valuable of all: an archive photograph of the
   original 1980s shop, if the founder's family has one.
2. **Real menu, opening hours, exact unit number at Paradigm Mall, merchant
   links** for GrabFood / ShopeeFood / Foodpanda, and a real email address.
3. A decision on the Traditional Chinese typeface, which must be subset — the
   site uses only a handful of characters, and the full fonts run 5–15 MB.

## Further reading

- [`docs/01-brief.md`](docs/01-brief.md) — the client brief, and what it does not answer
- [`docs/02-directions.md`](docs/02-directions.md) — the reasoning behind each direction
- [`docs/03-conventions.md`](docs/03-conventions.md) — code conventions
