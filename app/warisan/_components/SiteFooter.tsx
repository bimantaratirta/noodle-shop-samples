import Link from "next/link";
import { brand, copy, outlet } from "@/lib/content";
import { Ornament } from "./Ornament";

/**
 * Footer. Column links, then the wordmark and the bilingual tagline given room
 * to sit on their own — the tagline is the brand's whole proposition and the
 * reference treats its equivalent line the same way.
 */
export function SiteFooter() {
  return (
    <footer className="px-6 py-16 lg:px-10" style={{ background: "var(--ground)" }}>
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 sm:grid-cols-3">
          {copy.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="label pb-3">{col.title}</h3>
              <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[16px] transition-opacity hover:opacity-60"
                        style={{ color: "var(--ink-muted)" }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <span className="display-wide text-[15px] sm:text-[18px]" style={{ letterSpacing: "0.17em" }}>
            {brand.name}
          </span>
          <Ornament />
          <p className="mt-2 text-[19px] italic">{brand.tagline.en}</p>
          <p className="text-[17px]" style={{ color: "var(--ink-muted)" }}>
            {brand.tagline.zh}
          </p>
        </div>

        <div
          className="mt-14 flex flex-col items-center gap-2 border-t pt-8 text-center text-[13px] sm:flex-row sm:justify-between sm:text-left"
          style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
        >
          <p>
            {outlet.name} · {brand.dietary}
          </p>
          <p className="italic">{brand.crewLines.join("  ·  ")}</p>
          <Link href="/" className="underline underline-offset-4 hover:opacity-70">
            all directions
          </Link>
        </div>
      </div>
    </footer>
  );
}
