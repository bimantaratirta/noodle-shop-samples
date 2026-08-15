import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { RuledBand } from "./_components/RuledBand";
import { LoveLetter } from "./_components/LoveLetter";
import { Tiles } from "./_components/Tiles";
import { MenuSection } from "./_components/MenuSection";
import { Broth } from "./_components/Broth";
import { Visit } from "./_components/Visit";
import { SiteFooter } from "./_components/SiteFooter";

/**
 * Section order mirrors the reference's homepage: welcome → the story → a
 * three-way router → the offer itself → one dark interlude → practical details
 * → footer. All copy comes from lib/content.ts.
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
        <MenuSection />
        <Broth />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
