// Opening hours and the unit number are still placeholders; the note that used
// to say so on the page has been removed at the client's request. It stays
// recorded in lib/content.ts and public/placeholder/README.md.
import { copy, outlet, brand } from "@/lib/content";
import { Ornament } from "./Ornament";

/**
 * Visit + order.
 *
 * Rebuilt for precision. The first pass set the delivery apps as three stacked
 * boxed buttons, which read as a form control rather than part of the same
 * editorial system, and left a hole under the address column. Now all three
 * columns are the same kind of object — a ruled heading over a list — and the
 * delivery apps are text links carrying the same long-tailed arrow used
 * elsewhere on the page.
 *
 * The non-halal line is stated as a sentence rather than a badge: in Malaysia it
 * sets expectations, and burying or abbreviating it would be evasive.
 */
export function Visit() {
  return (
    <section
      id="visit"
      className="px-6 py-24 lg:px-10"
      style={{ background: "var(--ground-alt)" }}
    >
      <div className="mx-auto max-w-[1080px]">
        <p className="text-center text-[19px] italic" style={{ color: "var(--ink-muted)" }}>
          {copy.visit.eyebrow}
        </p>
        <h2 className="display-wide mt-3 text-center text-[24px] sm:text-[32px]">
          {copy.visit.heading}
        </h2>
        <Ornament className="mt-6" />

        {/* Two columns now — ordering moved out to its own section. */}
        <div className="mx-auto mt-14 grid max-w-[760px] gap-x-14 gap-y-10 sm:grid-cols-2">
          <div>
            <h3 className="label pb-3" style={{ color: "var(--accent)" }}>
              Address
            </h3>
            <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <p className="text-[17px] leading-[1.7]">{outlet.name}</p>
              <p className="mt-1 text-[17px] leading-[1.7]" style={{ color: "var(--ink-muted)" }}>
                {outlet.unit}
                <br />
                {outlet.city}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                {outlet.seats} seats, inside the mall.
              </p>
            </div>
          </div>

          <div>
            <h3 className="label pb-3" style={{ color: "var(--accent)" }}>
              Hours
            </h3>
            <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <ul>
                {outlet.hours.map((h) => (
                  <li key={h.days} className="mb-2.5 last:mb-0">
                    <span className="block text-[17px] leading-tight">{h.days}</span>
                    <span
                      className="block text-[15px] tabular-nums"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {h.open} – {h.close}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                Kitchen closes thirty minutes before the shop does.
              </p>
            </div>
          </div>

        </div>

        <p
          className="mt-16 border-t pt-8 text-[16px] leading-relaxed"
          style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
        >
          {copy.visit.seatingNote} This is a {brand.dietary.toLowerCase()} kitchen.
        </p>
      </div>
    </section>
  );
}
