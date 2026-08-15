# The Beef Noodle Shop — tiga arah desain

Repo perbandingan desain untuk **The Beef Noodle Shop 牛肉麵**, restoran bakmi sapi
Taiwan di Paradigm Mall, Petaling Jaya.

**Arah yang dikerjakan: Warisan (`/warisan`)** — replika bahasa visual
[dishoom.com](https://www.dishoom.com/) dengan konten The Beef Noodle Shop.
Kaldu dan Bara disimpan sebagai stub, catatan apa yang sempat dipertimbangkan
dan kenapa tidak dipilih.

**Branch ini (`terang-build`) juga menyimpan draf pertama Terang** (`/terang`)
— dibangun sebelum arah Warisan disepakati. Disimpan terpisah dari `main`
sebagai referensi, bukan diusulkan ulang sebagai pilihan.

```bash
npm install
npm run dev
```

| Route      | Arah        | Ground   | Turunan dari                   | Status        |
| ---------- | ----------- | -------- | ------------------------------ | ------------- |
| `/`        | Pintu masuk | netral   | —                              | —             |
| `/warisan` | Warisan     | campuran | dishoom.com                    | **dikerjakan** |
| `/kaldu`   | Kaldu       | gelap    | Ember (aura.build)             | tidak dipilih |
| `/terang`  | Terang      | terang   | Little Latte (aura.build)      | tidak dipilih |
| `/bara`    | Bara        | campuran | Ember + Little Latte + Dishoom | tidak dipilih |

Nama route sengaja tematik, bukan `sample1`–`sample3`. Kalau nanti satu arah
dibuang atau urutannya berubah, namanya tetap masuk akal.

### Cara Warisan diturunkan

Bukan dikira-kira dari screenshot. Halaman referensinya di-probe langsung untuk
membaca computed style-nya, lalu angkanya dipakai:

| Diukur                | Nilai                                    | Dipakai jadi          |
| --------------------- | ---------------------------------------- | --------------------- |
| Ground                | `rgb(240,236,224)`                       | `--ground`            |
| Ink                   | `rgb(53,56,57)`                          | `--ink`               |
| Teks di atas gelap    | `rgb(255,253,249)`                       | `--cream`             |
| Display serif         | ITC Cheltenham                           | **Fraunces** (open)   |
| Sans humanis          | Gill Sans Nova                           | **Cabin** (open)      |
| Heading uppercase     | tracking `0.18–0.25em`                   | `.display-wide`       |
| Nav / label           | 15px, uppercase, tracking `0.25em`       | `.label`              |

Yang ditiru itu **struktur dan perlakuan** — bukan foto, copy, atau aset merek
mereka. Di mana referensi dan brief berselisih, brief yang menang: `--accent`
tetap Broth Rust `#B5502C` dari palette klien.

### Gerak

Referensi **tidak memakai library animasi** — tidak ada GSAP, tidak ada Lenis,
`scroll-behavior` biasa. Semuanya CSS transition dengan satu kurva:
`cubic-bezier(0.4, 0, 0.2, 1)` pada 0.15s / 0.3s / 0.5s / 0.7s. Satu kurva untuk
segalanya itu sebagian besar alasan kenapa situsnya terasa tenang, bukan ramai.

| Gerak                | Mekanisme                                                                 |
| -------------------- | ------------------------------------------------------------------------- |
| Hero scroll-through  | Kartu inset (1066×738, radius 5px) membuka jadi full-bleed (1440×900, radius 0) sepanjang 0.85 viewport pertama (`Hero.tsx`) |
| Reveal kata          | Tiap kata dibungkus `<span>` sendiri, mulai dari `--cream-muted` lalu transisi ke `--ink` saat naik melewati 68% tinggi viewport (`RevealWords.tsx`) |
| Header membalik      | Transparan + cream di atas hero, jadi solid + ink setelah hero lewat       |
| Tile hover           | Klip senyap fade-in di atas still lalu diputar; keluar → pause + rewind (`TileCard.tsx`) |
| Plat tile            | Melebar ke bawah saat hover, memunculkan panah berekor                     |
| Foto tile            | `scale(1.035)` selama 0.7s                                                 |

### Sepuluh blok

Referensinya punya 11 blok / 11.218px. Punya kita 10 blok / 9.463px.

| # | Blok           | Ada di referensi | Kita |
| - | -------------- | ---------------- | ---- |
| 1 | Hero scroll-through | ✓ | ✓ |
| 2 | Love letter (reveal kata) | ✓ | ✓ |
| 3 | Router 3 tile (hover video) | ✓ | ✓ |
| 4 | Full-bleed + daftar rata kanan | ✓ | ✓ |
| 5 | Grid hidangan | ✓ | ✓ |
| 6 | Menu tertulis | — | ✓ (tambahan kita) |
| 7 | Banner unggulan | ✓ | ✓ |
| 8 | Visit / lokasi | — | ✓ (tambahan kita) |
| 9 | Newsletter | ✓ | ✓ |
| 10 | Footer | ✓ | ✓ |
| — | Carousel resep | ✓ | **sengaja dilewati** |
| — | Penghargaan | ✓ | **sengaja dilewati** |

Dua yang dilewati bukan karena sulit. Restonya buka 1 Agustus 2026 — belum punya
penghargaan dan belum punya arsip resep. Memasang blok itu berarti mengisi klaim
yang tidak ada, dan itu justru melawan posisi anti-hype yang jadi inti brief.

Form newsletter **tidak terhubung ke apa pun**. Menekan Sign up memberi tahu
begitu, bukan diam seolah terkirim — sign-up yang tampak jalan padahal tidak itu
lebih buruk daripada tidak ada sama sekali.

`RevealWords` sengaja memakai handler scroll ber-rAF, **bukan
IntersectionObserver**. Observer hanya menyala saat ada *transisi*; apa pun yang
terlewat dalam satu lompatan — reload di tengah halaman, klik anchor, scroll
terprogram — akan tersangkut selamanya di warna muted. Cek posisi dievaluasi dari
mana pun halaman berada. Ini bukan teori: versi observer-nya gagal di tes,
0 dari 21 kata menyala.

Semua gerak dimatikan di bawah `prefers-reduced-motion: reduce`.

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
  terang/
    theme.css         token .theme-terang
    layout.tsx        font Archivo (next/font), dibind ke --font-terang-*
    page.tsx          halaman asli — dibangun
    _components/      komponen khusus arah Terang
  bara/               idem seperti kaldu — masih stub
  warisan/            arah terpilih (selesai) — lihat "Cara Warisan diturunkan" di atas
components/
  SampleStub.tsx      placeholder "belum dibangun", dipakai kaldu & bara (terang sudah lepas dari ini)
lib/
  samples.ts          registry ketiga arah — tesis, risiko, swatch
  content.ts          SATU sumber konten restoran untuk ketiga arah
public/placeholder/   foto sementara + catatan foto asli yang dibutuhkan
docs/                 brief, alasan tiap arah, konvensi kode
```

## Pengaman build

`npm run build` **menolak jalan** selama situs masih membawa konten placeholder.

```
✖ Refusing to build: the site is still carrying placeholder content
    CONTENT_STATUS.placeholder is still true
    contact email is still email@example.com
    GrabFood link still points at #
    ...
```

Catatan placeholder yang dulu tampil di halaman sudah dihapus supaya bersih saat
dipresentasikan ke klien. Itu sekaligus menghapus satu-satunya hal yang mencegah
jam buka karangan dan mailto mati ikut ter-deploy seolah data nyata. Pengaman ini
mengembalikan remnya, di tempat yang tidak bisa dilewati orang tanpa sadar.

| | |
| --- | --- |
| Kapan jalan | `prebuild`, jadi hanya pada `npm run build` — `npm run dev` tidak tersentuh |
| Cek manual | `npm run check:placeholders` |
| Lolos sengaja | `ALLOW_PLACEHOLDER_BUILD=1 npm run build` (lolos dengan peringatan besar) |
| Skrip | `scripts/check-placeholders.mjs` |

Yang diperiksa: flag `CONTENT_STATUS.placeholder`, **dan** nilai-nilai yang memang
masih karangan (email, ketiga link delivery, nomor unit). Jadi menurunkan flag-nya
saja tidak cukup untuk lolos.

Pengaman ini **fail closed**: kalau flag-nya hilang atau diganti nama, build ikut
gagal, bukan diam-diam lolos. Sudah ditest untuk keempat jalur — normal (exit 1,
`next build` tidak sempat mulai), override (exit 0 + peringatan), `dev` (tidak
terpengaruh), dan flag hilang (exit 1).

## Status

| Bagian                     | Status                                       |
| -------------------------- | -------------------------------------------- |
| Struktur repo & routing    | selesai                                      |
| Token warna per arah       | selesai (dari palette brief + hasil ukur)    |
| Konten bersama             | terisi, **harga & jam masih placeholder**; `story.narrative` (dipakai `/terang`) juga **placeholder — karangan**, bukan dari brief |
| Tipografi Warisan          | Fraunces + Cabin, sudah terpasang            |
| Tipografi Terang           | Archivo, sudah terpasang (di branch `terang-build`) |
| Desain `/warisan`          | **selesai** — 7 section, siap direview       |
| Desain `/terang`           | **draf pertama selesai di branch `terang-build`** — belum di-merge ke `main`, disimpan sebagai referensi |
| Desain kaldu/bara          | stub, tidak dilanjutkan                      |
| Foto                       | **belum ada** — placeholder bergenerate. `/terang` pakai foto referensi Unsplash sementara, ditandai jelas "Temp stock" di tiap gambar |
| Font 繁中                   | masih fallback sistem — belum di-subset      |

## Yang masih ditunggu dari klien

1. **Foto.** Ini penentu terbesar hasil akhirnya. Ketiga arah bertumpu pada
   fotografi full-bleed yang nyata — ruangan 30-pax, mangkuk, panci, uap.
   Tanpa itu, sebagus apa pun layout-nya akan terbaca kosong. Terang sementara
   pakai foto referensi Unsplash berlabel "Temp stock" persis di tempat foto
   asli nanti masuk — bukan buat dikirim ke klien.
2. **Menu, harga, dan cerita bisnis sebenarnya.** Yang ada sekarang karangan
   (termasuk `story.narrative`, ditulis panjang buat ngisi layout), lihat
   `lib/content.ts`.
3. **Jam buka, nomor unit persis di Paradigm Mall, link merchant** GrabFood /
   ShopeeFood / Foodpanda.

## Bacaan lanjutan

- [`docs/01-brief.md`](docs/01-brief.md) — ringkasan brief klien dan apa yang tidak dijawabnya
- [`docs/02-arah-desain.md`](docs/02-arah-desain.md) — alasan tiap arah, referensinya, risikonya
- [`docs/03-konvensi.md`](docs/03-konvensi.md) — konvensi kode saat mulai membangun
