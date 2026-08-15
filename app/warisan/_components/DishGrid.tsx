import Image from "next/image";
import { copy } from "@/lib/content";

/**
 * Block 5 on the reference: long running copy in one column, stacked framed
 * photographs in the other, each with its own "ABOVE:" caption.
 *
 * This is the block that pairs a visual menu with the written one. The text menu
 * elsewhere on the page answers "what does it cost"; this answers "what does it
 * look like", which is the question that actually gets someone off the fence.
 *
 * The first photo sits wide at the top of its column, the next two split beneath
 * it — the same rhythm the reference uses, so the column never reads as a grid.
 */
export function DishGrid() {
  const [lead, ...rest] = copy.dishGrid.images;

  return (
    <section className="px-6 py-24 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-[1240px] gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <span
            className="block h-px w-24"
            style={{ background: "var(--ink)" }}
            aria-hidden
          />
          <p className="label mt-4" style={{ color: "var(--ink)" }}>
            {copy.dishGrid.eyebrow}
          </p>

          <h2 className="mt-3 text-[26px] leading-[1.32] sm:text-[32px]">
            {copy.dishGrid.heading}
          </h2>

          <div className="mt-7">
            {copy.dishGrid.body.map((para) => (
              <p key={para.slice(0, 20)} className="prose-justified mb-5 text-[16px]">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {copy.dishGrid.actions.map((a) => (
              <a
                key={a.label}
                href={a.href}
                className="border px-7 py-3 text-[13px]"
                style={{
                  borderColor: "var(--ink)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  transition: "opacity 0.15s var(--ease)",
                }}
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <figure>
            <div className="framed">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={lead.src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 660px"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-[13px]" style={{ color: "var(--ink-muted)" }}>
              <span className="label mr-1.5" style={{ fontSize: "0.66rem", color: "var(--ink)" }}>
                ABOVE:
              </span>
              <span className="italic">{lead.caption}</span>
            </figcaption>
          </figure>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {rest.map((img) => (
              <figure key={img.src + img.caption}>
                <div className="framed">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-[13px]" style={{ color: "var(--ink-muted)" }}>
                  <span
                    className="label mr-1.5"
                    style={{ fontSize: "0.66rem", color: "var(--ink)" }}
                  >
                    ABOVE:
                  </span>
                  <span className="italic">{img.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
