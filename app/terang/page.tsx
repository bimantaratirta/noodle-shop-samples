import { TerangFooter } from "./_components/TerangFooter";
import { TerangHeader } from "./_components/TerangHeader";
import { TerangHeritage } from "./_components/TerangHeritage";
import { TerangHero } from "./_components/TerangHero";
import { TerangInfoStrip } from "./_components/TerangInfoStrip";
import { TerangMenu } from "./_components/TerangMenu";
import { TerangSignature } from "./_components/TerangSignature";
import { TerangStory } from "./_components/TerangStory";
import { TerangValues } from "./_components/TerangValues";

export default function TerangPage() {
  return (
    <main
      className="mx-auto min-h-screen w-full max-w-[112rem] px-5 sm:px-8 lg:px-14"
      style={{ background: "var(--ground)", color: "var(--ink)" }}
    >
      <TerangHeader />
      <TerangHero />
      <TerangStory />
      <TerangHeritage />
      <TerangValues />
      <TerangSignature />
      <TerangMenu />
      <TerangInfoStrip />
      <TerangFooter />
    </main>
  );
}
