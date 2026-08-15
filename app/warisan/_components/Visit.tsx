import { copy, outlet, delivery, brand, CONTENT_STATUS } from "@/lib/content";
import { Ornament } from "./Ornament";

/**
 * Visit + order. Deliberately plain: address, hours, how to get it delivered.
 *
 * The non-halal line is stated here in full sentence form rather than as a badge
 * — in Malaysia it sets expectations, and burying it in a footer would be both
 * unhelpful and faintly evasive.
 */
export function Visit() {
  return (
    <section id="visit" className="px-6 py-20 sm:py-28 lg:px-10" style={{ background: "var(--ground-alt)" }}>
      <div className="mx-auto max-w-[1080px]">
        <p className="text-center text-[19px] italic" style={{ color: "var(--ink-muted)" }}>
          {copy.visit.eyebrow}
        </p>
        <h2 className="display-wide mt-3 text-center text-[24px] sm:text-[32px]">
          {copy.visit.heading}
        </h2>
        <Ornament className="mt-6" />

        <div className="mt-14 grid gap-12 sm:grid-cols-3">
          <div>
            <h3 className="label pb-3" style={{ color: "var(--accent)" }}>
              Address
            </h3>
            <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <p className="text-[17px] leading-relaxed">
                {outlet.name}
                <br />
                <span style={{ color: "var(--ink-muted)" }}>
                  {outlet.unit}
                  <br />
                  {outlet.city}
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="label pb-3" style={{ color: "var(--accent)" }}>
              Hours
            </h3>
            <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <ul className="space-y-2 text-[17px]">
                {outlet.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="tabular-nums" style={{ color: "var(--ink-muted)" }}>
                      {h.open}–{h.close}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="order">
            <h3 className="label pb-3" style={{ color: "var(--accent)" }}>
              Delivery
            </h3>
            <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <ul className="space-y-3">
                {delivery.map((d) => (
                  <li key={d.name}>
                    <a
                      href={d.url}
                      className="inline-block border px-4 py-2 text-[13px] transition-opacity hover:opacity-65"
                      style={{
                        borderColor: "var(--ink)",
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                      }}
                    >
                      {d.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p
          className="mx-auto mt-16 max-w-[54ch] text-center text-[16px] leading-relaxed"
          style={{ color: "var(--ink-muted)" }}
        >
          {copy.visit.seatingNote} This is a {brand.dietary.toLowerCase()} kitchen.
        </p>

        {CONTENT_STATUS.placeholder && (
          <p
            className="mx-auto mt-8 max-w-[60ch] border-l-2 py-1 pl-4 text-[13px] leading-relaxed"
            style={{ borderColor: "var(--accent)", color: "var(--ink-muted)" }}
          >
            Prices, opening hours, unit number and delivery links on this page are
            placeholders, not client-supplied. See <code>lib/content.ts</code>.
          </p>
        )}
      </div>
    </section>
  );
}
