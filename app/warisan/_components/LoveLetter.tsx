import Image from "next/image";
import { copy, story } from "@/lib/content";
import { RevealWords } from "./RevealWords";

/**
 * The reference's strongest section.
 *
 * Corrected after watching it in motion: the heading is not static — it is split
 * per word and lights from muted cream to full ink as each word scrolls up. The
 * photographs carry a double rule, not the single hairline of the first pass.
 */
export function LoveLetter() {
  return (
    <section id="story" className="px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <RevealWords
          lines={copy.loveLetter.headingLines}
          className="max-w-[26ch] text-[26px] leading-[1.5] tracking-[0.05em] sm:text-[34px] lg:max-w-none"
          indentRem={5}
        />

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <figure className="lg:pt-2">
            <div className="framed">
              <div className="relative aspect-[9/11] w-full overflow-hidden">
                <Image
                  src="/placeholder/story-archive.jpg"
                  alt="The original shop in the late 1980s"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption
              className="mt-3 text-[13px] leading-relaxed"
              style={{ color: "var(--ink-muted)" }}
            >
              <span className="label mr-1.5" style={{ fontSize: "0.66rem", color: "var(--ink)" }}>
                {copy.loveLetter.caption.label}
              </span>
              <span className="italic">{copy.loveLetter.caption.text}</span>
            </figcaption>
          </figure>

          <div className="lg:pt-8">
            {copy.loveLetter.body.map((para) => (
              <p key={para.slice(0, 24)} className="prose-justified mb-5 text-[16px] sm:text-[17px]">
                {para}
              </p>
            ))}

            <p
              className="mt-9 border-l pl-5 text-[18px] italic leading-relaxed sm:text-[20px]"
              style={{ borderColor: "var(--accent)" }}
            >
              “{story.pullQuote}”
            </p>

            <div className="framed mt-12 w-full max-w-[340px] lg:ml-auto">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/placeholder/story-bowl.jpg"
                  alt="A bowl, from above"
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
