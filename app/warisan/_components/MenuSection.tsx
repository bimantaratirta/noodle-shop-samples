import { copy, menu, price, brand } from "@/lib/content";
import { Ornament } from "./Ornament";

/**
 * The menu, which is what most visitors actually came for.
 *
 * Dish names in the display serif, Chinese underneath as the heritage signal,
 * price on the right against a dotted leader. Prices are set at normal weight
 * and full contrast — the brief warns against reading expensive, and hiding the
 * price is the fastest way to do exactly that.
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
                    <div className="flex items-baseline gap-3">
                      <span className="text-[18px] leading-tight">{item.name}</span>
                      <span
                        className="mb-[3px] grow border-b border-dotted"
                        style={{ borderColor: "var(--line)" }}
                      />
                      <span className="shrink-0 text-[16px] tabular-nums">{price(item.price)}</span>
                    </div>
                    <p className="mt-1 text-[14px]" style={{ color: "var(--ink-muted)" }}>
                      <span className="mr-2">{item.chinese}</span>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className="label mt-16 text-center"
          style={{ color: "var(--ink-muted)", letterSpacing: "0.22em" }}
        >
          {brand.dietary}
        </p>
      </div>
    </section>
  );
}
