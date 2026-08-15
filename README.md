# The Beef Noodle Shop — tiga arah desain

Repo perbandingan desain untuk **The Beef Noodle Shop 牛肉麵**, restoran bakmi sapi
Taiwan di Paradigm Mall, Petaling Jaya.

Isinya tiga arah desain yang berdiri sendiri, disajikan berdampingan supaya bisa
dipilih satu. **Belum ada yang dibangun** — tahap sekarang menetapkan strukturnya
dulu, biar semua orang kerja di atas kerangka yang sama.

```bash
npm install
npm run dev
```

| Route      | Arah       | Ground   | Turunan dari                          |
| ---------- | ---------- | -------- | ------------------------------------- |
| `/`        | Pintu masuk | netral   | —                                     |
| `/kaldu`   | Kaldu      | gelap    | Ember (aura.build)                    |
| `/terang`  | Terang     | terang   | Little Latte (aura.build)             |
| `/bara`    | Bara       | campuran | Ember + Little Latte + Dishoom        |

Nama route sengaja tematik, bukan `sample1`–`sample3`. Kalau nanti satu arah
dibuang atau urutannya berubah, namanya tetap masuk akal.

## Tiga aturan yang menjaga perbandingan ini tetap jujur

**1. Konten dibagi, desain tidak.** Semua teks — menu, harga, cerita, jam buka —
datang dari satu file: `lib/content.ts`. Ketiga arah merender konten yang sama
persis. Kalau satu arah mengarang copy sendiri supaya layout-nya kelihatan bagus,
perbandingannya jadi tidak ada artinya.

**2. Tema terkurung.** Tiap arah punya `app/<slug>/theme.css` yang di-scope ke
class `.theme-<slug>`. Root layout (`app/layout.tsx`) tidak memuat font, warna,
atau ground apa pun — sengaja kosong. Apa pun yang ditaruh di root diwarisi
ketiganya dan diam-diam mencemari perbandingan.

**3. Nama token sama, nilainya beda.** Ketiga tema mendeklarasikan variabel yang
identik — `--ground`, `--ground-alt`, `--ink`, `--ink-muted`, `--accent`,
`--gold`, `--line`, `--font-display`, `--font-body`. Komponen yang ditulis untuk
satu arah bisa diangkat ke arah lain dan langsung berganti kulit sendiri.

## Struktur

```
app/
  layout.tsx          root — tanpa font, tanpa warna, sengaja kosong
  globals.css         reset + token netral khusus halaman pintu masuk
  page.tsx            pintu masuk, merender dari lib/samples.ts
  kaldu/
    theme.css         token .theme-kaldu
    layout.tsx        muat font di sini, bukan di root
    page.tsx          stub — ganti dengan halaman asli saat dibangun
  terang/             idem
  bara/               idem
components/
  SampleStub.tsx      placeholder "belum dibangun", dipakai ketiga route
lib/
  samples.ts          registry ketiga arah — tesis, risiko, swatch
  content.ts          SATU sumber konten restoran untuk ketiga arah
public/placeholder/   foto sementara + catatan foto asli yang dibutuhkan
docs/                 brief, alasan tiap arah, konvensi kode
```

## Status

| Bagian                     | Status                                      |
| -------------------------- | ------------------------------------------- |
| Struktur repo & routing    | selesai                                     |
| Token warna per arah       | selesai (dari palette brief)                |
| Konten bersama             | terisi, **harga & jam masih placeholder**   |
| Tipografi                  | belum dipilih — kandidat ada di `docs/02`   |
| Desain ketiga arah         | **belum dibangun**                          |
| Foto                       | **belum ada** — placeholder                 |

## Yang masih ditunggu dari klien

1. **Foto.** Ini penentu terbesar hasil akhirnya. Ketiga arah bertumpu pada
   fotografi full-bleed yang nyata — ruangan 30-pax, mangkuk, panci, uap.
   Tanpa itu, sebagus apa pun layout-nya akan terbaca kosong.
2. **Menu dan harga sebenarnya.** Yang ada sekarang karangan, lihat
   `lib/content.ts`.
3. **Jam buka, nomor unit persis di Paradigm Mall, link merchant** GrabFood /
   ShopeeFood / Foodpanda.

## Bacaan lanjutan

- [`docs/01-brief.md`](docs/01-brief.md) — ringkasan brief klien dan apa yang tidak dijawabnya
- [`docs/02-arah-desain.md`](docs/02-arah-desain.md) — alasan tiap arah, referensinya, risikonya
- [`docs/03-konvensi.md`](docs/03-konvensi.md) — konvensi kode saat mulai membangun
