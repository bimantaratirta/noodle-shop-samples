import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Legacy } from "./_components/Legacy";
import { Bowls } from "./_components/Bowls";
import { Process } from "./_components/Process";
import { Character } from "./_components/Character";
import { Marquee } from "./_components/Marquee";
import { Visit } from "./_components/Visit";
import { SiteFooter } from "./_components/SiteFooter";

/**
 * Kaldu — the dark direction, derived from traverse-railway-10.aura.build.
 *
 *   1  Hero        full-bleed video, gold rule label, italic emphasis, date badge
 *   2  Legacy      heritage copy + archive photograph + pull quote
 *   3  Bowls       catalogue cards, price at full contrast
 *   4  Process     pinned column, five steps, image changes with the step
 *   5  Character   four notes on the broth
 *   6  Marquee     bilingual tagline band
 *   7  Visit       where, when, delivery
 *   8  SiteFooter  four columns
 *
 * Three deliberate departures from the reference, all of them fixes:
 *
 *  - Its pinned process image never changes across five steps, which wastes the
 *    only reason to pin anything. Here the photograph belongs to the step.
 *  - Its steps get ~750px of scroll for ~480px of content, so half the pinned
 *    viewport sits empty. Steps here are sized to their copy.
 *  - Its small type runs to weight 300 at 9px, and 8 of 29 text nodes fall under
 *    4.5:1. This direction sets a floor: 15px/400 for body, 12px/500 for labels.
 *
 * Its awards marquee is replaced rather than copied — a shop open a fortnight has
 * no awards, and staging an empty trophy rail would invent credentials.
 *
 * All copy comes from lib/content.ts.
 */
export default function KalduPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Legacy />
        <Bowls />
        <Process />
        <Character />
        <Marquee />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
