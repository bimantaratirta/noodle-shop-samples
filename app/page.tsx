import Link from "next/link";
import { SAMPLES } from "@/lib/samples";
import { brand, outlet, CONTENT_STATUS } from "@/lib/content";

/*
 * Entry page — the door into the three samples.
 *
 * Kept deliberately plain (neutral greys, system font). It is a chooser, not a
 * candidate. If this page starts looking designed it competes with the work it
 * is supposed to present.
 */

const GROUND_LABEL: Record<string, string> = {
  gelap: "Ground gelap",
  terang: "Ground terang",
  campuran: "Ground campuran",
};

export default function EntryPage() {
  return (
    <div className="neutral-shell min-h-screen">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
        <header className="border-b pb-10" style={{ borderColor: "var(--neutral-line)" }}>
          <p
            className="text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--neutral-muted)" }}
          >
            Dokumen kerja internal · bukan untuk klien
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            {brand.name} <span className="font-normal">{brand.chinese}</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: "var(--neutral-muted)" }}>
            Arah desain untuk {outlet.name}. Semuanya memakai konten yang sama
            persis — menu, harga, cerita, jam buka — supaya satu-satunya variabel
            yang dibandingkan adalah desainnya.{" "}
            <strong style={{ color: "var(--neutral-ink)" }}>
              Arah yang dikerjakan: Warisan.
            </strong>{" "}
            Sisanya disimpan sebagai catatan apa yang sempat dipertimbangkan.
          </p>
        </header>

        {CONTENT_STATUS.placeholder && (
          <p
            className="mt-8 border-l-2 py-1 pl-4 text-sm leading-relaxed"
            style={{ borderColor: "#B5502C", color: "var(--neutral-muted)" }}
          >
            <strong style={{ color: "var(--neutral-ink)" }}>Konten masih placeholder.</strong>{" "}
            Harga, jam buka, nomor unit dan link delivery belum dari klien. Foto
            juga belum ada. Lihat <code>lib/content.ts</code>.
          </p>
        )}

        <ol className="mt-12 space-y-4">
          {SAMPLES.map((sample, i) => (
            <li key={sample.slug}>
              <Link
                href={`/${sample.slug}`}
                className="block rounded-lg border p-6 transition-colors hover:border-neutral-400 sm:p-8"
                style={{
                  borderColor: "var(--neutral-line)",
                  background: "var(--neutral-panel)",
                }}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span
                    className="text-xs tabular-nums"
                    style={{ color: "var(--neutral-muted)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight">{sample.name}</h2>
                  <code className="text-sm" style={{ color: "var(--neutral-muted)" }}>
                    /{sample.slug}
                  </code>
                  <span
                    className="ml-auto text-xs uppercase tracking-[0.15em]"
                    style={{
                      color: sample.status === "built" ? "#B5502C" : "var(--neutral-muted)",
                    }}
                  >
                    {sample.status === "built" ? "Dikerjakan" : "Tidak dipilih"} ·{" "}
                    {GROUND_LABEL[sample.ground]}
                  </span>
                </div>

                <p className="mt-1 text-sm italic" style={{ color: "var(--neutral-muted)" }}>
                  {sample.gloss}
                </p>

                <div className="mt-5 flex gap-1.5" aria-hidden>
                  {sample.swatches.map((hex) => (
                    <span
                      key={hex}
                      className="h-8 w-14 rounded-sm border"
                      style={{ background: hex, borderColor: "rgba(0,0,0,.12)" }}
                    />
                  ))}
                </div>

                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed">{sample.thesis}</p>

                <dl className="mt-5 space-y-1.5 text-sm" style={{ color: "var(--neutral-muted)" }}>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Turunan dari</dt>
                    <dd>{sample.derivedFrom}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Risiko</dt>
                    <dd>{sample.risk}</dd>
                  </div>
                </dl>
              </Link>
            </li>
          ))}
        </ol>

        <footer
          className="mt-14 border-t pt-8 text-sm leading-relaxed"
          style={{ borderColor: "var(--neutral-line)", color: "var(--neutral-muted)" }}
        >
          <p>
            Struktur, konvensi dan alasan di balik ketiga arah ada di{" "}
            <code>docs/</code>. Mulai dari <code>README.md</code>.
          </p>
        </footer>
      </div>
    </div>
  );
}
