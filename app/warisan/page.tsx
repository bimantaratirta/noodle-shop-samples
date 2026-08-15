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
import { Newsletter } from "./_components/Newsletter";
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
 *   6  MenuSection       the written menu with prices
 *   7  Feature           one dish on a bordered plate
 *   8  Visit             address, hours, delivery
 *   9  Newsletter        photo + tagline | ruled band | sign-up
 *   10 SiteFooter        four columns
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
        <MenuSection />
        <Feature />
        <Visit />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
