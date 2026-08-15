import Image from "next/image";
import { copy } from "@/lib/content";

/**
 * Hero. The reference does NOT run its hero image full-bleed — it insets a
 * rounded card on a dark ground, which is what stops the page reading like every
 * other restaurant site. The bilingual welcome line sits above the quote, small,
 * exactly where the reference puts its Hindi greeting.
 */
export function Hero() {
  return (
    <section id="top" className="on-dark px-4 pb-14 pt-4 sm:px-6 sm:pb-20">
      <div className="relative mx-auto aspect-[16/10] w-full max-w-[1320px] overflow-hidden rounded-[4px] sm:aspect-[16/9]">
        <Image
          src="/placeholder/hero-room.jpg"
          alt="The dining room"
          fill
          priority
          sizes="(max-width: 1400px) 100vw, 1320px"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,12,10,.55) 0%, rgba(16,12,10,.25) 40%, rgba(16,12,10,.8) 100%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-[15px] sm:text-[17px]" style={{ color: "var(--cream-muted)" }}>
            {copy.hero.welcome}
          </p>
          <p
            className="mt-4 max-w-[22ch] text-[22px] leading-[1.5] sm:max-w-[46ch] sm:text-[30px]"
            style={{ color: "var(--cream)", letterSpacing: "0.06em" }}
          >
            {copy.hero.quote}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex flex-wrap items-center justify-center gap-3 px-6">
          {copy.hero.actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="border px-7 py-3 text-[13px] transition-colors hover:bg-white/10"
              style={{
                borderColor: "var(--cream)",
                color: "var(--cream)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
              }}
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
