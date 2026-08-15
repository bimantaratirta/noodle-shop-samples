import Link from "next/link";
import { brand, copy, outlet } from "@/lib/content";

/** Footer: link columns, then the wordmark and bilingual tagline given room. */
export function SiteFooter() {
  return (
    <footer className="px-6 py-16 lg:px-10" style={{ background: "var(--ground-alt)" }}>
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {copy.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="label pb-4" style={{ color: "var(--gold)" }}>
                {col.title}
              </h3>
              <ul className="border-t pt-5" style={{ borderColor: "var(--line)" }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-[var(--ink)]"
                      style={{ color: "var(--ink-muted)", transition: "color 0.3s var(--ease)" }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="display text-[24px]">
            <span style={{ color: "var(--gold)" }}>牛</span>
            <span className="ml-2 tracking-[0.14em]">{brand.name}</span>
          </p>
          <p className="display mt-4 text-[20px] italic">{brand.tagline.en}</p>
          <p className="mt-1" style={{ color: "var(--ink-muted)" }}>
            {brand.tagline.zh}
          </p>
        </div>

        <div
          className="mt-14 flex flex-col items-center gap-2 border-t pt-8 text-center sm:flex-row sm:justify-between sm:text-left"
          style={{ borderColor: "var(--line)", color: "var(--ink-muted)" }}
        >
          <p>
            {outlet.name} · {brand.dietary}
          </p>
          <Link href="/" className="underline underline-offset-4 hover:text-[var(--ink)]">
            all directions
          </Link>
        </div>
      </div>
    </footer>
  );
}
