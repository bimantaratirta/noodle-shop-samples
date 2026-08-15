import Image from "next/image";
import { copy, story } from "@/lib/content";

/**
 * The reference's strongest section, adapted.
 *
 * Three devices carry it: a staggered heading (first line flush left, the rest
 * stepped in), an archival photo framed by a hairline with an "ABOVE:" caption,
 * and justified body copy in a narrow measure set beside — not beneath — the
 * image. The second, smaller photo drops below the text to break the grid.
 */
export function LoveLetter() {
  return (
    <section id="story" className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="max-w-[24ch] text-[26px] leading-[1.45] sm:text-[34px] lg:max-w-none">
          {copy.loveLetter.headingLines.map((line, i) => (
            <span
              key={line}
              className="block"
              style={{
                letterSpacing: "0.055em",
                paddingLeft: i === 0 ? 0 : `${Math.min(i, 2) * 3.5}rem`,
              }}
            >
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <figure className="lg:pt-2">
            <div className="framed relative aspect-[9/11] w-full overflow-hidden">
              <Image
                src="/placeholder/story-archive.jpg"
                alt="The original shop in the late 1980s"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[13px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              <span
                className="label mr-1.5"
                style={{ fontSize: "0.66rem", color: "var(--ink)" }}
              >
                {copy.loveLetter.caption.label}
              </span>
              <span className="italic">{copy.loveLetter.caption.text}</span>
            </figcaption>
          </figure>

          <div className="lg:pt-6">
            {copy.loveLetter.body.map((para) => (
              <p
                key={para.slice(0, 24)}
                className="prose-justified mb-5 text-[16px] sm:text-[17px]"
              >
                {para}
              </p>
            ))}

            <p className="mt-8 border-l pl-5 text-[18px] italic leading-relaxed sm:text-[20px]"
               style={{ borderColor: "var(--accent)" }}>
              “{story.pullQuote}”
            </p>

            <div className="framed relative mt-10 aspect-[4/5] w-full max-w-[330px] overflow-hidden lg:ml-auto">
              <Image
                src="/placeholder/story-bowl.jpg"
                alt="A bowl, from above"
                fill
                sizes="330px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
