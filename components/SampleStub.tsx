import Link from "next/link";
import type { Sample } from "@/lib/samples";

/*
 * Placeholder shown at every /<slug> route until that direction is built.
 *
 * It paints itself with the sample's own tokens (`--ground`, `--ink`,
 * `--accent`, `--gold`), so even before any design exists you can see which
 * ground each direction sits on. Delete the stub when the real page lands —
 * do not grow it into one.
 */

export function SampleStub({ sample }: { sample: Sample }) {
  return (
    <main
      className="min-h-screen px-6 py-16 sm:px-10 sm:py-24"
      style={{ background: "var(--ground)", color: "var(--ink)" }}
    >
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="text-sm underline underline-offset-4 opacity-70 hover:opacity-100"
        >
          ← semua arah
        </Link>

        <p
          className="mt-12 text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--gold)" }}
        >
          Belum dibangun
        </p>

        <h1 className="mt-4 text-4xl tracking-tight sm:text-5xl">{sample.name}</h1>
        <p className="mt-2 text-base italic opacity-70">{sample.gloss}</p>

        <p className="mt-8 text-lg leading-relaxed">{sample.thesis}</p>

        <hr className="my-10 border-0 border-t" style={{ borderColor: "var(--accent)" }} />

        <dl className="space-y-5 text-[15px] leading-relaxed">
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] opacity-60">Turunan dari</dt>
            <dd className="mt-1">{sample.derivedFrom}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] opacity-60">Risiko yang diakui</dt>
            <dd className="mt-1">{sample.risk}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] opacity-60">Token warna</dt>
            <dd className="mt-2 flex gap-1.5">
              {sample.swatches.map((hex) => (
                <span
                  key={hex}
                  className="h-8 w-14 rounded-sm"
                  style={{ background: hex, outline: "1px solid rgba(128,128,128,.35)" }}
                  title={hex}
                />
              ))}
            </dd>
          </div>
        </dl>

        <p className="mt-12 text-sm leading-relaxed opacity-60">
          Halaman ini sengaja kosong. Tahap sekarang cuma menetapkan struktur —
          desainnya dibangun setelah arahnya disepakati. Konten yang akan dipakai
          sudah siap di <code>lib/content.ts</code> dan sama untuk ketiga arah.
        </p>
      </div>
    </main>
  );
}
