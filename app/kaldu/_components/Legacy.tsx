import Image from "next/image";
import { story } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * The heritage block. Copy left, one tall photograph right, a pull quote in the
 * client's own words underneath — the reference's second section, applied to a
 * family recipe instead of a distillery.
 */
export function Legacy() {
  return (
    <section id="story" className="band-warm px-6 py-24 lg:px-10 lg:py-32">
      <Reveal className="mx-auto grid max-w-[1320px] items-center gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        <div>
          <p className="rule-label label enter" style={{ color: "var(--accent)" }}>
            Our heritage
          </p>

          <h2 className="display enter mt-6 max-w-[16ch] text-[38px] sm:text-[48px]">
            A recipe written in <em>bone and time</em>
          </h2>

          {story.beats.slice(1).map((b) => (
            <p key={b.slice(0, 20)} className="enter mt-6 max-w-[52ch]" style={{ color: "var(--ink-muted)" }}>
              {b}
            </p>
          ))}

          <blockquote
            className="enter mt-10 border-l pl-6"
            style={{ borderColor: "var(--accent)" }}
          >
            <p className="display text-[22px] italic sm:text-[26px]" style={{ lineHeight: 1.45 }}>
              “{story.pullQuote}”
            </p>
          </blockquote>
        </div>

        <div className="enter relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/placeholder/story-archive.jpg"
            alt="The original shop, late 1980s"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
