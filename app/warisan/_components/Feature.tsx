import Image from "next/image";
import { copy } from "@/lib/content";

/**
 * Block 6: one dish given its own moment.
 *
 * Uses the reference's bordered-plate device — a framed panel anchored to the
 * lower-left of a full-bleed photograph, carrying a small sans eyebrow, a serif
 * headline split so one half sits flush left and the other flush right, a
 * subtitle, and an underlined text link.
 *
 * The split headline is the whole trick: it makes a two-word line fill the plate
 * edge to edge without stretching the type.
 */
export function Feature() {
  return (
    <section className="on-dark relative min-h-[560px] w-full overflow-hidden">
      <Image
        src={copy.feature.image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(14,10,8,.6) 0%, rgba(14,10,8,.15) 60%)" }}
      />

      <div className="relative mx-auto flex min-h-[560px] max-w-[1320px] items-end px-6 py-14 lg:px-10">
        {/*
          The plate uses the same double rule as the tile labels — a flat filled
          box with no frame was the other reason this block read as an intrusion
          rather than a piece of the same system.
        */}
        <div className="plate w-full max-w-[440px] px-8 py-9">
          <p className="label" style={{ color: "var(--ink)" }}>
            {copy.feature.eyebrow}
          </p>

          <h2
            className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 text-[26px] leading-[1.25] sm:text-[31px]"
            style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
          >
            <span>{copy.feature.headlineLeft}</span>
            <span className="text-right">{copy.feature.headlineRight}</span>
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            {copy.feature.subtitle}
          </p>

          <a
            href={copy.feature.href}
            className="mt-6 inline-block border-b pb-1 text-[15px]"
            style={{ color: "var(--ink)", borderColor: "var(--ink)" }}
          >
            {copy.feature.link}
          </a>
        </div>
      </div>
    </section>
  );
}
