# The design directions

All three were derived from references the client approved, not from free
choice:

1. **Ember** — `traverse-railway-10.aura.build`, a whisky landing-page template.
   Its own metadata describes "deep dark aesthetics and sticky scroll
   storytelling".
2. **Little Latte** — `cafelittlelatte.aura.build`, an editorial café template.
3. **Dishoom** — `dishoom.com`, a real restaurant group built on Bombay heritage.

## What all three agree on

Before the differences, this is the shared standard — and it is the bar:

- **Typography is the main event.** Not photographs with text laid over them,
  but type at a size that stands on its own.
- **Real photography, full-bleed.** Actual rooms, not stock.
- **Bold empty space.** Not afraid to leave half a screen alone.
- **One accent colour.**
- **Asymmetric layout.** Not a tidy centred grid.
- **Zero** shadowed cards, **zero** rounded pills, **zero** hero-with-two-buttons.

## Measured, not guessed

Every claim below came from probing the live pages, because screenshots lie
about behaviour. Two examples of why it mattered:

- Ember's hero appeared full-bleed in a headless capture but is actually an
  inset card in a browser. The reverse was true of Dishoom's, which starts inset
  and expands to full-bleed on scroll. Both were only settled by measurement.
- Neither reference uses an animation library. That was worth knowing before
  reaching for one.

---

## Warisan — from Dishoom

**Chosen direction.**

Cream ground, uppercase display serif on wide tracking, hairline-double-framed
photographs with `ABOVE:` captions, justified body copy in a narrow measure, and
photo tiles carrying cream-filled label plates.

Its signature interaction is a word-by-word colour reveal tied to scroll
position: each word starts at the muted cream and transitions to full ink as it
rises. That was rebuilt from the reference's own markup, which wraps every word
in its own span.

**Acknowledged risk:** it depends entirely on real archive and interior
photography. The layout reads even with stock, but weak photographs would
collapse it.

## Kaldu — from Ember

Dark ground, pinned process section, catalogue cards.

Three deliberate departures, each fixing something measurable in the reference:

1. **The pinned photograph changes with the step.** The reference pins a column
   for 3,740px while five steps scroll past, and never changes the image — a
   finished cocktail sits there while the copy describes malting barley.
2. **Dead space closed.** The reference allocates ~750px of scroll per step for
   ~480px of content. Here the whole process section is 2,192px.
3. **A type floor.** 8 of the reference's 29 text nodes fall below 4.5:1, using
   weight 300 at sizes down to 8.96px. Body text here is ≥15px/400, labels
   ≥12px/500.

Its typography is deliberately **not** the reference's Playfair Display + Inter
— between them the two most-used typefaces on the web, and matching them exactly
produced a page that was correct and voiceless. Instrument Serif + Newsreader
instead, with rust as the working colour and gold kept rare.

**Acknowledged risk:** dark reads as expensive, and the brief rules hard against
looking exclusive. Prices were removed at the client's request, so the only
counterweight left is tone and warmth.

## Terang — from Little Latte

Bright cream, oversized type, bold empty space, 牛肉麵 set as giant outline
lettering over a photograph of the room. Built by Bagas on the `terang-build`
branch, merged as PR #1.

**Acknowledged risk:** a pure grotesk can read cold, while the brief asks for
warm and characterful. Warmth has to come from photography and a braver use of
Broth Rust.

---

## The tension every direction has to answer

Ember is dark and luxurious. The brief rules that out in its own words:

> *"Don't look expensive/exclusive in a way that undercuts the affordable,
> everyday-treat positioning."*

A dark ground reads as expensive. That is not a reason to discard it — its level
of craft is the target — but how far the darkness goes had to be a conscious
decision, and that is what separates the three.

## The single idea worth stealing

Little Latte's giant outline lettering over a photograph, filled with **牛肉麵**.

One move solves three problems: the brief's bilingual requirement, the need for
a graphic mark, and the fact that **no logo exists and may not exist when the
site ships**. Giant stroked characters over a photograph of the shop become the
identity without needing one. When a logo does arrive it will not clash — it
lives on a different layer.

## Typography

| Direction | Display                  | Body                     |
| --------- | ------------------------ | ------------------------ |
| Warisan   | Fraunces                 | Cabin                    |
| Kaldu     | Instrument Serif         | Newsreader               |
| Terang    | Archivo (700/900)        | Archivo (400/500)        |

Warisan's pair are open substitutes for the reference's commercial ITC
Cheltenham and Gill Sans Nova. Kaldu's are a deliberate replacement rather than
a substitution — the reference's own pair is free, and matching it was the
problem.

For Traditional Chinese: it **must be subset**. The site uses only a handful of
characters while the full fonts run 5–15 MB. Reasonable open candidates with
proper Traditional coverage are Noto Serif TC and Source Han Serif TC. See the
font-size note in `01-brief.md`.
