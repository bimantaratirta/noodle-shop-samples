# Code conventions

Working rules for building and extending the directions. There is one goal
behind all of them: keep the comparison honest, and keep whichever direction
wins easy to promote to production.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · no extra UI
dependencies.

Tailwind v4 uses CSS-based configuration — there is no `tailwind.config.js`.
Colour tokens live as CSS custom properties inside each `theme.css`, not in
Tailwind config. That is deliberate: every direction has to be able to declare
different values for the same token names.

## Rules that must not be broken

**The root layout stays empty.** `app/layout.tsx` loads no fonts, sets no
colours, sets no ground. If something feels like it belongs to all directions,
ask whether it is genuinely neutral. It almost never is.

**Fonts load in each direction's layout.** Use `next/font`, bound to the
`--font-<slug>-display` / `--font-<slug>-body` variables that `theme.css`
already references. Never load fonts at the root — every direction would share
type and stop being comparable.

**All copy comes from `lib/content.ts`.** No content strings hardcoded inside
components. If a direction needs a line that does not exist yet, add it to
`content.ts` so the others get it too.

**Colours only through tokens.** No hex inside a component. Use
`var(--accent)`, never `#B5502C`. A component that writes hex directly cannot be
lifted into another direction.

## Token names

Identical across directions, different values:

| Token            | Role                                        |
| ---------------- | ------------------------------------------- |
| `--ground`       | primary background                          |
| `--ground-alt`   | secondary background (alternating sections)  |
| `--ink`          | primary text colour                         |
| `--ink-muted`    | secondary text, captions, metadata          |
| `--accent`       | Broth Rust — action, emphasis               |
| `--gold`         | Warm Gold — subtle accents, rules, micro-labels |
| `--line`         | hairline dividers                           |
| `--font-display` | headline typeface                           |
| `--font-body`    | workhorse typeface                          |

### Inverted surfaces

When a light surface sits inside a dark section — or the reverse — it must
**reset the ink tokens**, not just its background. Changing only the background
leaves every child inheriting the inverted ink, which produces cream text on a
cream fill.

This has bitten twice in this repo, so it is worth stating plainly:

- Warisan's `.plate` sits inside `.on-dark` and initially rendered invisible
  text with an invisible border. Fixed by giving the light-surface values their
  own token names (`--ink-on-light`, etc.) and having `.plate` reset to them.
- Kaldu's light band needed the same treatment before it was replaced by a
  brown band, at which point the inversion became unnecessary.

Also watch colours used as *text* rather than fill. Rust at `#C85A30` measured
4.42:1 on the dark band and 3.64:1 on cream — both under 4.5:1. `--accent` is
now for fills, rules and borders; `--accent-text` carries a value that passes.

## Photography

Placeholders live in `public/placeholder/`. Never lock a layout to the aspect
ratio of a particular placeholder file — real photographs will arrive with
different crops. Let the container decide the height and use `object-fit: cover`.

Give every item its own image. Repeating one photograph across a grid makes
eight dishes read as one dish printed eight times.

## Building a direction

1. Replace the `SampleStub` page with the real one. Do not grow the stub into a
   page.
2. Bind typefaces in that direction's `layout.tsx`.
3. Take all content from `lib/content.ts`.
4. Direction-specific components live in `app/<slug>/_components/`. Only what is
   genuinely shared moves up to `components/`.
5. Update the entry in `lib/samples.ts` — status, preview screenshot, and what
   actually got built.

## Motion

No animation library anywhere. Both references were probed and neither uses one.
Each direction commits to a single easing curve, because one curve used
everywhere is most of why a page reads as composed rather than busy.

| Direction | Curve                          | Character                    |
| --------- | ------------------------------ | ---------------------------- |
| Warisan   | `cubic-bezier(.4, 0, .2, 1)`   | flat, even                   |
| Kaldu     | `cubic-bezier(.16, 1, .3, 1)`  | leaves fast, lands slowly    |

Prefer a rAF scroll handler over an IntersectionObserver for anything that
reveals on scroll. An observer only fires on transitions, so anything jumped
past — a reload deep in the page, an anchor click, a scripted scroll — stays
stuck in its initial state. A position check is evaluated from wherever the page
happens to be.

Everything must stop under `prefers-reduced-motion: reduce`.

## Accessibility

Not an afterthought — this is a restaurant, and the brief names
"multi-generational groups".

- Body text contrast ≥ 4.5:1 against its ground. Measure it; do not assume.
  Dark grounds are the easy ones to get wrong, because muted greys that look
  fine can fail.
- Never distinguish information by colour alone.
- Touch targets ≥ 44×44px. Plenty of people open this standing up in a mall.
