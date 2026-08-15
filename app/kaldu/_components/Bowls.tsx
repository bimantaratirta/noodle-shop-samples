import Image from "next/image";
import { menu, brand } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * The catalogue.
 *
 * The first pass set eight identical cards in four equal columns, every one the
 * same size, the same crop, the same photograph. That is the shape a layout
 * takes when nobody decided anything — and repeating one image across eight
 * dishes makes them read as one dish printed eight times.
 *
 * Now the grid has a rhythm. Cards alternate between wide and narrow across a
 * twelve-column field, aspect ratios change with the span, and every dish has
 * its own photograph. Prices are not printed here at all — the client asked for
 * the menu to read as a menu, not a price list.
 */

/** span / aspect per position, repeating. Wide, narrow, narrow, wide … */
const RHYTHM = [
  { span: "lg:col-span-7", aspect: "aspect-[16/10]" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]" },
  { span: "lg:col-span-7", aspect: "aspect-[16/10]" },
];

export function Bowls() {
  const items = menu.flatMap((s) => s.items.map((i) => ({ ...i, section: s.name })));

  return (
    <section
      id="bowls"
      className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32"
      style={{ background: "var(--ground-alt)" }}
    >
      {/* 牛肉麵 as a graphic, not a footnote. */}
      <span
        className="han-mark pointer-events-none absolute -right-10 top-10 hidden text-[190px] lg:block"
        aria-hidden
      >
        牛肉麵
      </span>

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal className="max-w-[38ch]">
          <p className="rule-label label enter" style={{ color: "var(--accent)" }}>
            The bowls
          </p>
          <h2 className="display enter mt-6 text-[42px] sm:text-[58px]">
            Everything <em>we cook</em>
          </h2>
          <p className="enter mt-6" style={{ color: "var(--ink-muted)" }}>
            Australian beef and soup bone. Quality pork. Nothing hurried, nothing
            held over.
          </p>
        </Reveal>

        <Reveal as="ul" className="mt-20 grid gap-x-8 gap-y-16 lg:grid-cols-12" step={0.08}>
          {items.map((item, i) => {
            const r = RHYTHM[i % RHYTHM.length];
            return (
              <li key={item.name} className={`enter ${r.span}`}>
                <div className={`relative w-full overflow-hidden ${r.aspect}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex items-baseline gap-4">
                  <span className="label" style={{ color: "var(--accent)" }}>
                    {item.section}
                  </span>
                  <span
                    className="h-px flex-1"
                    style={{ background: "var(--line)" }}
                    aria-hidden
                  />
                </div>

                <h3 className="display mt-4 flex flex-wrap items-baseline gap-x-4 text-[30px]">
                  {item.name}
                  <span className="text-[20px]" style={{ color: "var(--ink-muted)" }}>
                    {item.chinese}
                  </span>
                </h3>

                <p className="mt-3 max-w-[48ch]" style={{ color: "var(--ink-muted)" }}>
                  {item.description}
                </p>
              </li>
            );
          })}
        </Reveal>

        <p className="label mt-20" style={{ color: "var(--ink-muted)" }}>
          {brand.dietary} · Prices on GrabFood, ShopeeFood and Foodpanda
        </p>
      </div>
    </section>
  );
}
