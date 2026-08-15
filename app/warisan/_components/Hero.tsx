import { copy } from "@/lib/content";
import { HeroMedia } from "./HeroMedia";

/**
 * Hero — corrected to match the reference after watching it in motion.
 *
 * The first pass inset a rounded card; the real thing is FULL-BLEED and full
 * viewport height, very dark, with the header floating over it. The headline is
 * set in small caps (large initials, small capitals for the rest), which is what
 * gives it the engraved look a plain uppercase setting can't reach.
 *
 * The bilingual welcome sits where the reference puts its own greeting line.
 */
export function Hero() {
  return (
    <section id="top" className="on-dark relative h-svh min-h-[620px] w-full overflow-hidden">
      <HeroMedia />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,10,8,.72) 0%, rgba(14,10,8,.5) 45%, rgba(14,10,8,.85) 100%)",
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="label"
          style={{ color: "var(--cream-muted)", letterSpacing: "0.3em" }}
        >
          {copy.hero.welcome}
        </p>

        <h1
          className="mt-6 max-w-[20ch] text-[30px] leading-[1.34] sm:max-w-[30ch] sm:text-[46px]"
          style={{
            color: "var(--cream)",
            fontVariantCaps: "small-caps",
            letterSpacing: "0.055em",
          }}
        >
          {copy.hero.headline}
        </h1>

        <p
          className="mt-7 max-w-[44ch] text-[16px] leading-[1.7]"
          style={{ color: "var(--cream-muted)" }}
        >
          {copy.hero.quote}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-14 flex flex-wrap items-center justify-center gap-3 px-6">
        {copy.hero.actions.map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="border px-8 py-3 text-[13px]"
            style={{
              borderColor: "var(--cream)",
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              transition: "background-color 0.3s var(--ease)",
            }}
          >
            {a.label}
          </a>
        ))}
      </div>
    </section>
  );
}
