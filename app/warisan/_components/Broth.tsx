import Image from "next/image";
import { copy, story } from "@/lib/content";

/**
 * The one dark, full-bleed section. It carries the part of the story the brief
 * calls the most defensible asset — the hours nobody sees — and it earns being
 * dark because that is literally when it happens.
 */
export function Broth() {
  return (
    <section className="on-dark relative">
      <div className="relative min-h-[560px] w-full overflow-hidden">
        <Image
          src="/placeholder/broth.jpg"
          alt="The stockpot before opening"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(16,12,10,.9) 0%, rgba(16,12,10,.55) 65%, rgba(16,12,10,.3) 100%)" }}
        />

        <div className="relative mx-auto flex min-h-[560px] max-w-[1240px] items-center px-6 py-20 lg:px-10">
          <div className="max-w-[52ch]">
            <p className="text-[18px] italic" style={{ color: "var(--cream-muted)" }}>
              {copy.broth.eyebrow}
            </p>
            <h2 className="display-wide mt-3 text-[22px] sm:text-[30px]" style={{ color: "var(--cream)" }}>
              {copy.broth.heading}
            </h2>
            <p className="mt-7 text-[17px] leading-[1.75]" style={{ color: "var(--cream)" }}>
              {copy.broth.body}
            </p>

            <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
              {story.sourcing.map((s) => (
                <li key={s} className="label" style={{ color: "var(--gold)" }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
