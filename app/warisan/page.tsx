import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { RuledBand } from "./_components/RuledBand";
import { LoveLetter } from "./_components/LoveLetter";
import { Tiles } from "./_components/Tiles";
import { Broth } from "./_components/Broth";
import { DishGrid } from "./_components/DishGrid";
import { MenuSection } from "./_components/MenuSection";
import { Feature } from "./_components/Feature";
import { Visit } from "./_components/Visit";
import { OrderSection } from "./_components/OrderSection";
import { Contact } from "./_components/Contact";
import { SiteFooter } from "./_components/SiteFooter";

/**
 * Section order follows the reference's homepage, block for block, minus the two
 * it has that we would have to invent content for — an awards wall and a recipe
 * archive. A shop that opened a fortnight ago has neither, and staging empty
 * versions of them would contradict the brief's whole anti-hype position.
 *
 *   1  Hero              scroll-through, inset card opening to full-bleed
 *   2  LoveLetter        word-by-word colour reveal on scroll
 *   3  Tiles             three-way router, hover-to-play video
 *   4  Broth             full-bleed, copy bottom-left, list flush right
 *   5  DishGrid          running copy + stacked framed photographs
 *   6  Feature           one dish on a bordered plate, leading into the menu
 *   7  MenuSection       the written menu
 *   8  Visit             address and hours
 *   9  OrderSection      the delivery apps, as their own destination
 *   10 Contact           photo + tagline | ruled band | mailto
 *   11 SiteFooter        four columns
 *
 * Feature sits BEFORE the menu, not after. After it, the block had no job: it
 * advertised a dish listed a screen above it and its only action pointed back up
 * to what you had just scrolled past. Ahead of the menu the same block earns its
 * place — it gives one dish a photograph and a full sentence, which matters more
 * now that the menu itself carries no prices, and its link finally points
 * forwards.
 *
 * All copy comes from lib/content.ts.
 */
export default function WarisanPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RuledBand />
        <LoveLetter />
        <Tiles />
        <Broth />
        <DishGrid />
        <Feature />
        <MenuSection />
        <Visit />
        <OrderSection />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
