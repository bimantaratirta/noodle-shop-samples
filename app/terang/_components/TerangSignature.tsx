import { labels, menu } from "@/lib/content";
import { CATEGORY_PHOTOS } from "./menuPhotos";
import { Photo } from "./Photo";

const totalItems = menu.reduce((sum, section) => sum + section.items.length, 0);

/*
 * Reference's "Best Sellers" 3-up grid, renamed: we have no sales data to
 * back a "best seller" claim, so this shows a spread across categories
 * instead — gua bao, the flagship beef noodle bowl (larger, with its own
 * description), and lu rou fan. No prices, per the latest direction.
 */
const gua = menu.find((s) => s.id === "sides")!.items[0];
const beef = menu.find((s) => s.id === "beef-noodles")!.items[0];
const rice = menu.find((s) => s.id === "rice")!.items[0];

export function TerangSignature() {
  return (
    <section className="py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-muted)" }}>
        {labels.signature}
      </p>
      <p
        className="mt-5 max-w-2xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        style={{ color: "var(--ink)" }}
      >
        {menu.length} Categories · {totalItems} Dishes
      </p>

      <div className="mt-16 grid items-end gap-10 lg:grid-cols-[0.75fr_1.2fr_0.75fr]">
        <div>
          <Photo {...CATEGORY_PHOTOS.sides} credit="Unsplash" rounded className="h-64 w-full sm:h-80" />
          <p className="mt-5 text-sm uppercase tracking-tight" style={{ color: "var(--ink)" }}>
            {gua.name} <span style={{ color: "var(--ink-muted)" }}>{gua.chinese}</span>
          </p>
        </div>

        <div>
          <Photo
            {...CATEGORY_PHOTOS["beef-noodles"]}
            credit="Unsplash"
            rounded
            className="h-[26rem] w-full sm:h-[30rem]"
          />
          <div className="mt-6 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="text-lg uppercase tracking-tight" style={{ color: "var(--ink)" }}>
              {beef.name} <span style={{ color: "var(--ink-muted)" }}>{beef.chinese}</span>
            </p>
          </div>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            {beef.description}
          </p>
        </div>

        <div>
          <Photo {...CATEGORY_PHOTOS.rice} credit="Unsplash" rounded className="h-64 w-full sm:h-80" />
          <p className="mt-5 text-sm uppercase tracking-tight" style={{ color: "var(--ink)" }}>
            {rice.name} <span style={{ color: "var(--ink-muted)" }}>{rice.chinese}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
