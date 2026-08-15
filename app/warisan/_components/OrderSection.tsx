// The three merchant URLs are still placeholders; the note that used to say so
// on the page has been removed at the client's request. It is still recorded in
// lib/content.ts and public/placeholder/README.md.
import { copy, delivery } from "@/lib/content";
import { Ornament } from "./Ornament";
import { Arrow } from "./Arrow";

/**
 * Ordering, as its own destination.
 *
 * It used to be a third column inside Visit, which made the "Order" nav item and
 * the header's "Order now" button dishonest: they pointed at a spot 262px below
 * the "Find us" heading, so arriving there either cut that heading off or showed
 * the identical view to "Visit". No scroll offset fixes that — two nav items
 * cannot share one destination and still mean different things.
 *
 * Given the shop is already open, delivery is the page's main commercial job, so
 * a block of its own is what it was owed anyway.
 */
export function OrderSection() {
  return (
    <section id="order" className="px-6 py-24 lg:px-10" style={{ background: "var(--ground)" }}>
      <div className="mx-auto max-w-[1080px]">
        <p className="text-center text-[19px] italic" style={{ color: "var(--ink-muted)" }}>
          {copy.order.eyebrow}
        </p>
        <h2 className="display-wide mt-3 text-center text-[24px] sm:text-[32px]">
          {copy.order.heading}
        </h2>
        <Ornament className="mt-6" />

        <p
          className="mx-auto mt-7 max-w-[52ch] text-center text-[16px] leading-relaxed"
          style={{ color: "var(--ink-muted)" }}
        >
          {copy.order.body}
        </p>

        <ul className="mt-12 grid gap-px sm:grid-cols-3" style={{ background: "var(--line)" }}>
          {delivery.map((d) => (
            <li key={d.name} style={{ background: "var(--ground)" }}>
              <a
                href={d.url}
                className="group flex items-center justify-between gap-4 px-6 py-7"
                style={{ transition: "background-color 0.3s var(--ease)" }}
              >
                <span className="text-[20px]">{d.name}</span>
                <Arrow width={44} className="opacity-50" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-[16px] italic" style={{ color: "var(--ink-muted)" }}>
          {copy.order.takeaway}
        </p>
      </div>
    </section>
  );
}
