# Temporary media

**Everything in this folder is a placeholder. None of it may ship.**

It is licensed stock rather than generated fills, so the built directions can be
judged properly — a layout that leans on photography cannot be assessed against
grey boxes.

## Contents

| File                | Source                      | Slot                                    |
| ------------------- | --------------------------- | --------------------------------------- |
| `hero.mp4`          | Pexels (Pexels License)     | Hero background video, 1600px, 11.8s, silent |
| `hero-poster.jpg`   | frame from `hero.mp4`       | Poster, and the stand-in under reduced motion |
| `story-archive.jpg` | Unsplash (Unsplash License) | Archive photograph in the story section  |
| `story-bowl.jpg`    | Unsplash                    | Bowl detail                              |
| `tile-menu.jpg`     | Unsplash                    | MENU tile                                |
| `tile-visit.jpg`    | Unsplash                    | VISIT tile                               |
| `tile-order.jpg`    | Unsplash                    | DELIVERY tile                            |
| `broth.jpg`         | frame from `hero.mp4`       | Dark section                             |
| `feature.jpg`       | Unsplash                    | Featured dish                            |
| `sourcing.jpg`      | Unsplash                    | Sourcing / process                       |

The Unsplash and Pexels licences both permit commercial use without attribution.
Both prohibit reselling the assets themselves, which we are not doing.

## Why they still have to be replaced

The licence permits it, but **putting photographs of another restaurant's noodles
on a real restaurant's website misleads customers.** People take a photograph on
a restaurant site to be the food they will receive. This is fine for internal
review and client presentation; before launch it must be the client's own
photography.

## Curation note

The first pass pulled **Japanese** ramen shops — ラーメン, 担担麺 and 玉子焼き
were all visible on the signage. The brief rules that out explicitly:
*"culturally specific (Taiwanese, not generic 'Asian')"* and *"avoid literal
chopsticks-and-lantern clichés"*. They were replaced with Chinese/Taiwanese
imagery (Traditional characters, a 甜不辣 stall, a 紅茶冰 shop) or shots with no
signage at all.

**Check this again if any image here is ever swapped** — stock search results for
"noodle" skew Japanese by default, so the mistake is easy to repeat.

## What is still needed from the client

| Slot                | Requirement                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| Hero video          | The 30-seat room or the stockpot — dark, slow-moving, no audio            |
| Tile videos ×3      | **All three tiles currently share one clip** (`hero.mp4`), because it is all we have. Each wants its own: bowl, shopfront, packaging |
| 1980s archive       | **The most valuable asset on the whole site.** If the founder's family has a photograph of the original shop, ask for it. Dishoom built its brand on exactly this. |
| Bowl                | From above, steam visible, warm light                                    |
| Shopfront           | The Paradigm Mall unit in the evening, with the warm-white neon lit      |
| Takeaway packaging  | For the DELIVERY tile — currently filled with an interior shot, which is semantically wrong |

Never lock a layout to the aspect ratio of any file here. Real photographs will
arrive with different crops: let the container set the height and use
`object-fit: cover`.
