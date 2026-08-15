# Tiga arah desain

Ketiganya diturunkan dari tiga referensi yang **sudah disetujui**, bukan dari
selera bebas. Referensi itu:

1. **Ember** — `traverse-railway-10.aura.build` · template landing page wiski.
   Metadata-nya sendiri menyebut *"deep dark aesthetics and sticky scroll storytelling"*.
2. **Little Latte** — `cafelittlelatte.aura.build` · template kafe editorial.
3. **Dishoom** — `dishoom.com` · restoran sungguhan, warisan Bombay.

## Apa yang sebenarnya sama dari ketiganya

Sebelum bicara perbedaan, ini yang mereka sepakati — dan ini standar kerjanya:

- **Tipografi jadi acara utama.** Bukan foto yang diberi teks, tapi teks berukuran
  besar yang berdiri sendiri.
- **Foto asli, full-bleed.** Ruangan sungguhan, bukan stock.
- **Ruang kosong yang berani.** Tidak takut membiarkan setengah layar kosong.
- **Satu warna aksen.** Ember pakai emas. Titik.
- **Layout asimetris.** Bukan grid terpusat yang rapi-membosankan.
- **Nol** kartu ber-shadow, **nol** pill rounded, **nol** hero-dengan-dua-tombol.

## Detail yang dicatat dari Ember

Layak ditiru mekanismenya, bukan warnanya:

- Serif elegan dengan **italic emas sebagai alat penekanan** — "Crafted by Time,
  Defined by *Character*", lalu pola yang sama diulang di judul section "Our *Expressions*".
  Satu perangkat, dipakai konsisten.
- Nav small-caps ter-letterspace tipis, ukuran kecil.
- Tombol **outline hairline**, bukan solid fill.
- Grid produk 3-up dengan garis rambut pemisah, plus **metadata huruf kapital
  ukuran mikro** di bawah tiap item (umur, 43%, 6/4G). Ini yang membuatnya terbaca
  sebagai katalog terkurasi, bukan daftar belanja.

## Detail yang dicatat dari Little Latte

- Headline grotesk tebal, **tracking rapat**, uppercase, ukuran besar sekali.
- Layout asimetris: mark kecil + paragraf pendek di kiri, headline raksasa di
  kanan, tombol lingkaran outline di ujung.
- **Huruf outline raksasa ditumpuk di atas foto** — "LITTLE LATTE" dengan stroke
  saja, tanpa fill.

### Ide tunggal yang paling layak dicuri

Perlakuan huruf outline itu, tapi diisi **牛肉麵**.

Satu gerakan ini menyelesaikan tiga masalah sekaligus:

- mandat bilingual dari brief,
- kebutuhan akan mark grafis,
- fakta bahwa **logo belum ada dan mungkin belum ada saat situs dibangun**.

Karakter Cina raksasa berstroke di atas foto gerai menjadi identitas tanpa
memerlukan logo. Dan ketika logo dari graphic designer akhirnya turun, perangkat
ini tidak bentrok dengannya — ia hidup di lapisan yang berbeda.

---

## Konflik yang harus diputus

**Ember itu gelap dan mewah. Brief melarangnya.**

> *"Don't look expensive/exclusive in a way that undercuts the affordable,
> everyday-treat positioning."*

Ground gelap membaca sebagai mahal. Ini bukan alasan membuang Ember — level
kerajinannya justru target kita. Tapi seberapa jauh gelapnya dipakai adalah
keputusan yang harus diambil sadar, dan itulah yang membedakan ketiga arah di
bawah.

---

## Arah 1 — Kaldu (`/kaldu`)

**Ground gelap. Ember diambil penuh.**

Near-black hangat `#1A1512` — hangat, tidak pernah abu-abu netral. Broth Rust dan
Warm Gold sebagai aksen. Serif display dengan italic emas: *"Direbus sejak subuh,
sejak 1988"*. Menu jadi grid 3-up di atas gelap dengan garis rambut dan metadata
kapital mikro — harga RM, level pedas, ukuran mangkuk — persis pola "43% / 6.4G"
milik Ember. Sticky scroll untuk bagian warisan.

**Risiko yang diakui:** langsung terbaca eksklusif, yang dilarang brief. Kalau
arah ini dipilih, harus dilawan secara sengaja — harga terlihat jelas dan besar,
copy yang membumi, dan tidak ada satu pun isyarat "reservasi eksklusif".

## Arah 2 — Terang (`/terang`)

**Ground terang. Little Latte diambil penuh.**

Paper Cream `#F4EDE1`. Headline grotesk raksasa dengan tracking rapat: "GOOD FOOD.
BETTER MOOD." 牛肉麵 sebagai huruf outline raksasa di atas foto ruangan 30-pax.
Layout asimetris, tombol lingkaran outline "Pesan".

**Risiko yang diakui:** grotesk murni bisa terbaca dingin, sementara brief minta
serif hangat dan berkarakter. Kalau arah ini dipilih, kehangatan harus datang dari
tempat lain — Broth Rust yang dipakai lebih berani, dan fotografi yang benar-benar
hangat.

## Arah 3 — Bara (`/bara`)

**Ground campuran. Hibrida — rekomendasi awal.**

Cream sebagai ground utama, gelap dipakai **sebagai tanda baca, bukan sebagai
halaman** — satu section full-bleed gelap khusus cerita kaldu 1988. Serif
berkarakter dengan italic untuk display, sans kuda beban untuk semua yang
fungsional. 牛肉麵 outline jadi perangkat grafis berulang. Grid menu bergaris
rambut dengan metadata kapital mikro, tapi di atas cream.

Tujuannya: mendapat level kerajinan Ember tanpa mewarisi masalah eksklusifnya.

**Risiko yang diakui:** hibrida paling gampang jatuh jadi kompromi yang tidak
berpendirian. Peralihan cream→gelap harus terasa disengaja dan tegas, bukan
ragu-ragu. Kalau section gelapnya melebar ke lebih dari satu bagian, arah ini
sudah melayang jadi Kaldu dan perbandingannya berhenti berguna.

---

## Tipografi — kandidat, belum diputuskan

Sengaja belum di-wire. Token `--font-display` dan `--font-body` sudah
dideklarasikan di tiap `theme.css`, tinggal diikat ke typeface saat build.

| Arah   | Display                                    | Body                        |
| ------ | ------------------------------------------ | --------------------------- |
| Kaldu  | serif transisional berkarakter — Fraunces, EB Garamond | sans netral — Inter, Plus Jakarta Sans |
| Terang | grotesk tracking rapat — Archivo, Inter Tight | sama dengan display, beda weight |
| Bara   | Fraunces (punya optical sizing, hangat)    | Plus Jakarta Sans           |

Untuk 繁中: **harus di-subset**. Situs cuma memakai segelintir karakter. Kandidat
open-source dengan dukungan Traditional yang layak — Noto Serif TC, Source Han
Serif TC. Lihat catatan ukuran font di `01-brief.md`.
