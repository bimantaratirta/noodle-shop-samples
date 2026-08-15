import { brand, copy } from "@/lib/content";
import { Ornament } from "./Ornament";

/**
 * Three-part header from the reference: nav left, wordmark optically centred,
 * a single pill action right. The wordmark sits in its own grid column so it
 * stays centred no matter how wide the nav gets.
 */
export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ background: "var(--ground)", borderColor: "var(--line)" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 lg:px-10">
        <nav className="hidden items-center gap-6 lg:flex">
          <span className="label" style={{ color: "var(--ink)" }}>
            Explore
          </span>
          <span className="block h-4 w-px" style={{ background: "var(--line)" }} />
          {copy.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="label transition-opacity hover:opacity-60"
              style={{ color: "var(--ink)", fontWeight: 500 }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="col-start-2 flex flex-col items-center gap-1.5">
          <span
            className="display-wide whitespace-nowrap text-[15px] sm:text-[19px]"
            style={{ letterSpacing: "0.17em" }}
          >
            {brand.name}
          </span>
          <Ornament />
        </a>

        <div className="col-start-3 flex justify-end">
          <a
            href="#order"
            className="rounded-full border px-5 py-2 text-[13px] transition-colors hover:opacity-70"
            style={{
              borderColor: "var(--ink)",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
            }}
          >
            Order now
          </a>
        </div>
      </div>
    </header>
  );
}
