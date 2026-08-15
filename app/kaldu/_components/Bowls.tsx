import Image from "next/image";
import { menu, price, brand } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * The catalogue block, built on the reference's product-card pattern: photograph,
 * a small gold eyebrow, serif name, description, hairline rule, then two figures
 * on one baseline.
 *
 * The reference sets ABV and price there. Here it is the Chinese name and the
 * price — and the price is set at full contrast on purpose. The brief warns the
 * brand must never read expensive, and a dark, gold-accented page is already
 * pushing that way; a visible number is the cheapest thing that pushes back.
 */
export function Bowls() {
  const items = menu.flatMap((s) => s.items.map((i) => ({ ...i, section: s.name })));

  return (
    <section id="bowls" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="rule-label label enter" style={{ color: "var(--gold)" }}>
              The bowls
            </p>
            <h2 className="display enter mt-6 text-[38px] sm:text-[48px]">
              Everything <em>we cook</em>
            </h2>
          </div>
          <p className="enter max-w-[34ch]" style={{ color: "var(--ink-muted)" }}>
            Australian beef and soup bone. Quality pork. Nothing hurried, nothing
            held over.
          </p>
        </Reveal>

        <Reveal as="ul" className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" step={0.08}>
          {items.slice(0, 8).map((item) => (
            <li
              key={item.name}
              className="enter flex flex-col border"
              style={{ borderColor: "var(--line)", background: "var(--ground-alt)" }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/placeholder/story-bowl.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="label" style={{ color: "var(--gold)" }}>
                  {item.section}
                </p>
                <h3 className="display mt-3 text-[22px]">{item.name}</h3>
                <p className="mt-3 flex-1" style={{ color: "var(--ink-muted)" }}>
                  {item.description}
                </p>

                <div
                  className="mt-6 flex items-baseline justify-between border-t pt-4"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="text-[16px]" style={{ color: "var(--ink-muted)" }}>
                    {item.chinese}
                  </span>
                  <span className="display text-[20px]" style={{ color: "var(--gold)" }}>
                    {price(item.price)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </Reveal>

        <p className="label mt-14 text-center" style={{ color: "var(--ink-muted)" }}>
          {brand.dietary}
        </p>
      </div>
    </section>
  );
}
