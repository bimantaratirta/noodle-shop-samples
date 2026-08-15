# Konvensi kode

Aturan kerja saat ketiga arah mulai dibangun. Tujuannya satu: menjaga
perbandingan tetap jujur, dan menjaga arah yang menang tetap gampang diangkat
jadi produksi.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · tanpa dependency
UI tambahan.

Tailwind v4 memakai konfigurasi berbasis CSS — tidak ada `tailwind.config.js`.
Token warna hidup sebagai CSS custom property di tiap `theme.css`, bukan di
konfigurasi Tailwind. Ini disengaja: ketiga arah harus bisa mendeklarasikan nilai
yang berbeda untuk nama token yang sama.

## Aturan yang tidak boleh dilanggar

**Root layout tetap kosong.** `app/layout.tsx` tidak memuat font, tidak
menetapkan warna, tidak menetapkan ground. Kalau butuh sesuatu di ketiga arah,
tanyakan dulu apakah itu benar-benar netral. Hampir selalu jawabannya tidak.

**Font dimuat di layout tiap arah.** Pakai `next/font`, ikat ke variabel
`--font-<slug>-display` / `--font-<slug>-body` yang sudah dirujuk `theme.css`.
Jangan memuat font di root — ketiga arah akan berbagi type dan berhenti bisa
dibandingkan.

**Semua teks dari `lib/content.ts`.** Tidak ada string konten yang di-hardcode di
dalam komponen. Kalau sebuah arah butuh potongan copy yang belum ada, tambahkan ke
`content.ts` supaya dua arah lainnya ikut mendapatnya.

**Warna hanya lewat token.** Tidak ada hex di dalam komponen. Pakai
`var(--accent)`, bukan `#B5502C`. Komponen yang menulis hex langsung tidak bisa
diangkat ke arah lain.

## Nama token

Identik di ketiga arah, nilainya berbeda:

| Token            | Peran                                          |
| ---------------- | ---------------------------------------------- |
| `--ground`       | background utama                               |
| `--ground-alt`   | background sekunder (section berselang)        |
| `--ink`          | warna teks utama                               |
| `--ink-muted`    | teks sekunder, caption, metadata               |
| `--accent`       | Broth Rust — aksi, penekanan                   |
| `--gold`         | Warm Gold — aksen halus, garis, label mikro    |
| `--line`         | garis rambut pemisah                           |
| `--font-display` | typeface headline                              |
| `--font-body`    | typeface kuda beban                            |

`Bara` menambah satu modifier: `.on-dark` membalik token untuk section gelapnya.
Komponen yang diletakkan di dalamnya berganti kulit sendiri tanpa tahu di mana ia
berada.

**Temuan dari build Terang:** di ground terang (`#F4EDE1`), `--gold` cuma ~2.2:1
terhadap `--ink` — gagal jauh dari ambang WCAG AA 4.5:1 untuk teks. Jadi meski
perannya disebut "label mikro" di atas, jangan pakai `--gold` sebagai warna teks
di ground terang — pakai untuk garis/hairline/aksen non-teks saja, atau untuk
teks besar (≥24px) yang cuma butuh ambang 3:1. `--accent` juga cuma ~4.35:1 di
ground terang — lolos ambang "large text" tapi mepet untuk teks kecil.

## Foto

Placeholder ada di `public/placeholder/`. Aturannya: **jangan pernah mengunci
layout ke rasio aspek satu file placeholder tertentu.** Foto asli akan datang
dengan crop yang berbeda. Pakai `object-fit: cover` dengan tinggi yang ditentukan
container, bukan tinggi yang ditentukan gambar.

## Membangun sebuah arah

1. Hapus `page.tsx` yang merender `SampleStub`, ganti dengan halaman asli.
   Jangan menumbuhkan stub-nya jadi halaman.
2. Ikat typeface di `layout.tsx` arah tersebut.
3. Ambil semua konten dari `lib/content.ts`.
4. Komponen khusus satu arah tinggal di `app/<slug>/_components/`. Hanya yang
   benar-benar dipakai bersama yang naik ke `components/`.

## Aksesibilitas

Bukan tambahan belakangan — ini restoran, pengunjungnya termasuk kakek-nenek
(brief menyebut "multi-generational groups").

- Kontras teks badan minimal 4.5:1 terhadap ground-nya. **Arah Kaldu perlu
  diperiksa paling ketat** — teks krem di atas near-black gampang lolos, tapi
  `--ink-muted` di atas gelap sering gagal.
- Harga tidak boleh hanya dibedakan lewat warna.
- Target sentuh minimal 44×44px. Banyak orang membuka ini sambil berdiri di mal.
