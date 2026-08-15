import { copy, menu, brand } from "@/lib/content";
import { Ornament } from "./Ornament";

/**
 * The menu, which is what most visitors actually came for.
 *
 * Dish names in the display serif, Chinese underneath as the heritage signal.
 *
 * Prices are NOT printed here — the client wants the menu to read as a menu
 * rather than a price list. The trade-off is real and worth stating: the brief
 * asks the brand to feel affordable, and a menu with no prices reads as more
 * expensive than one with them. The line under the list points to the delivery
 * apps so the number is still one tap away, which is the cheapest mitigation.
 * The values themselves stay in lib/content.ts as a single source.
 */
export function MenuSection() {
  return (
    <section id="menu" className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1020px]">
        <p className="text-center text-[19px] italic" style={{ color: "var(--ink-muted)" }}>
          {copy.menu.eyebrow}
        </p>
        <h2 className="display-wide mt-3 text-center text-[24px] sm:text-[32px]">
          {copy.menu.heading}
        </h2>
        <Ornament className="mt-6" />
        <p
          className="mx-auto mt-6 max-w-[46ch] text-center text-[16px] leading-relaxed"
          style={{ color: "var(--ink-muted)" }}
        >
          {copy.menu.note}
        </p>

        <div className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {menu.map((section) => (
            <div key={section.id}>
              <h3 className="label pb-3" style={{ color: "var(--accent)" }}>
                {section.name} <span style={{ letterSpacing: "0.1em" }}>{section.chinese}</span>
              </h3>
              <div className="border-t" style={{ borderColor: "var(--line)" }} />

              <ul className="mt-5 space-y-6">
                {section.items.map((item) => (
                  <li key={item.name}>
                    {/*
                      Without a price to sit against, the dotted leader has
                      nothing to lead to — so the name and its Chinese sit
                      together on one baseline instead.
                    */}
                    <p className="flex flex-wrap items-baseline gap-x-3 leading-tight">
                      <span className="text-[19px]">{item.name}</span>
                      <span className="text-[15px]" style={{ color: "var(--ink-muted)" }}>
                        {item.chinese}
                      </span>
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/*
          Both closing notes sit together on one rule so neither is left
          floating alone under the columns.
        */}
        <div
          className="mt-16 border-t pt-6 text-center"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="text-[15px] italic" style={{ color: "var(--ink-muted)" }}>
            {copy.menu.priceNote}
          </p>
          <p
            className="label mt-3"
            style={{ color: "var(--ink-muted)", letterSpacing: "0.22em" }}
          >
            {brand.dietary}
          </p>
        </div>
      </div>
    </section>
  );
}
