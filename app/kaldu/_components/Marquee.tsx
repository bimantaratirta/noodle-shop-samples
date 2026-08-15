import { brand } from "@/lib/content";

/**
 * A running band, in the slot where the reference puts an awards marquee.
 *
 * Two changes. First, we have no awards — the shop opened a fortnight ago — so
 * putting a trophy rail there would be inventing credentials. It carries the
 * bilingual tagline and the crew lines instead, which are real and already
 * written.
 *
 * Second, the reference sets its marquee text at very low contrast, so it is
 * scenery you cannot read at the speed it moves. This one is set at full ink and
 * moves slowly enough to be read, and it stops for anyone who has asked for
 * reduced motion.
 */
export function Marquee() {
  const items = [brand.tagline.en, brand.tagline.zh, ...brand.crewLines];
  // Duplicated so the loop has no visible seam.
  const run = [...items, ...items, ...items];

  return (
    <section
      aria-hidden
      className="band-brown overflow-hidden border-y py-8"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="marquee-track flex w-max items-center gap-14">
        {run.map((t, i) => (
          <span key={i} className="display flex items-center gap-14 whitespace-nowrap text-[26px]">
            {t}
            <span
              className="block h-[5px] w-[5px] rotate-45"
              style={{ background: "var(--gold)" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
