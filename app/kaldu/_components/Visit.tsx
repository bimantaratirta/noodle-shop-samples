import { copy, outlet, delivery, brand } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * Closing block: where to sit, when, and how to have it sent over.
 *
 * The reference ends on a centred invitation over three contact columns. Same
 * shape here, with ordering given equal weight to visiting — the shop is already
 * open, so delivery is the page's live commercial job.
 */
export function Visit() {
  return (
    <section id="visit" className="band-deep px-6 py-24 lg:px-10 lg:py-32">
      <Reveal className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <p className="label enter" style={{ color: "var(--accent)" }}>
            Visit us
          </p>
          <h2 className="display enter mx-auto mt-6 max-w-[16ch] text-[38px] sm:text-[52px]">
            Come and sit, <em>or stay put</em>
          </h2>
          <p className="enter mx-auto mt-7 max-w-[54ch]" style={{ color: "var(--ink-muted)" }}>
            {copy.visit.seatingNote} This is a {brand.dietary.toLowerCase()} kitchen.
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-3">
          <div className="enter">
            <h3 className="label pb-4" style={{ color: "var(--accent)" }}>
              Where
            </h3>
            <div className="border-t pt-5" style={{ borderColor: "var(--line-strong)" }}>
              <p>{outlet.name}</p>
              <p style={{ color: "var(--ink-muted)" }}>
                {outlet.unit}
                <br />
                {outlet.city}
              </p>
            </div>
          </div>

          <div className="enter">
            <h3 className="label pb-4" style={{ color: "var(--accent)" }}>
              When
            </h3>
            <div className="border-t pt-5" style={{ borderColor: "var(--line-strong)" }}>
              {outlet.hours.map((h) => (
                <p key={h.days}>
                  {h.days}
                  <span className="block" style={{ color: "var(--ink-muted)" }}>
                    {h.open} – {h.close}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <div className="enter" id="order">
            <h3 className="label pb-4" style={{ color: "var(--accent)" }}>
              Delivery
            </h3>
            <div className="border-t pt-5" style={{ borderColor: "var(--line-strong)" }}>
              <ul>
                {delivery.map((d) => (
                  <li key={d.name}>
                    <a
                      href={d.url}
                      style={{ transition: "color 0.3s var(--ease)" }}
                      className="hover:text-[var(--accent)]"
                    >
                      {d.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3" style={{ color: "var(--ink-muted)" }}>
                Or collect at the counter.
              </p>
            </div>
          </div>
        </div>

        <div className="enter mt-16 text-center">
          <a href="#order" className="btn">
            Order now
          </a>
        </div>
      </Reveal>
    </section>
  );
}
