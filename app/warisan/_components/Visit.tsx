import { copy, outlet, delivery, brand, CONTENT_STATUS } from "@/lib/content";
import { Ornament } from "./Ornament";
import { Arrow } from "./Arrow";

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

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-3">
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

          <div id="order">
            <h3 className="label pb-3" style={{ color: "var(--accent)" }}>
              Delivery
            </h3>
            <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <ul>
                {delivery.map((d) => (
                  <li key={d.name} className="mb-2.5 last:mb-0">
                    <a
                      href={d.url}
                      className="group inline-flex items-center gap-3 text-[17px]"
                      style={{ transition: "opacity 0.15s var(--ease)" }}
                    >
                      {d.name}
                      <Arrow width={34} className="opacity-45" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                Takeaway at the counter, no app needed.
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

        {CONTENT_STATUS.placeholder && (
          <p
            className="mt-6 border-l-2 py-1 pl-4 text-[13px] leading-relaxed"
            style={{ borderColor: "var(--accent)", color: "var(--ink-muted)" }}
          >
            Opening hours, unit number and delivery links on this page are
            placeholders, not client-supplied. See <code>lib/content.ts</code>.
          </p>
        )}
      </div>
    </section>
  );
}
