# Media sementara

**Semua isi folder ini placeholder. Tidak satu pun boleh ikut tayang.**

Sekarang isinya stock berlisensi, bukan gambar generate — supaya `/warisan` bisa
dinilai 1:1 terhadap referensinya. Layout yang bertumpu pada fotografi tidak bisa
dinilai dengan kotak abu-abu.

## Isi

| File                 | Sumber                    | Slot                                |
| -------------------- | ------------------------- | ----------------------------------- |
| `hero.mp4`           | Pexels (Pexels License)   | Video latar hero, 1600px, 11,8s, senyap |
| `hero-poster.jpg`    | frame dari `hero.mp4`     | Poster + pengganti saat reduced-motion |
| `story-archive.jpg`  | Unsplash (Unsplash License) | Foto arsip di section cerita       |
| `story-bowl.jpg`     | Unsplash                  | Detail mangkuk                      |
| `tile-menu.jpg`      | Unsplash                  | Tile MENU                           |
| `tile-visit.jpg`     | Unsplash                  | Tile VISIT                          |
| `tile-order.jpg`     | Unsplash                  | Tile DELIVERY                       |
| `broth.jpg`          | Unsplash                  | Section gelap                       |
| `sourcing.jpg`       | Unsplash                  | Cadangan                            |

Unsplash License dan Pexels License sama-sama mengizinkan pemakaian komersial
tanpa atribusi. Keduanya melarang menjual ulang asetnya sendiri, yang tidak kita
lakukan.

## Kenapa tetap harus diganti

Lisensinya membolehkan, tapi **memasang foto mi buatan restoran lain di situs
restoran yang sungguhan itu menyesatkan pelanggan.** Orang menganggap foto di
situs restoran adalah makanan yang akan mereka terima. Ini boleh dipakai untuk
review internal dan presentasi ke klien; sebelum tayang, harus diganti foto milik
klien sendiri.

## Catatan kuratorial

Pass pertama menarik kedai ramen **Jepang** — ada ラーメン, 担担麺, 玉子焼き di
papannya. Brief melarang itu secara eksplisit: *"culturally specific (Taiwanese,
not generic 'Asian')"* dan *"avoid literal chopsticks-and-lantern clichés"*.
Sudah diganti dengan yang Tionghoa/Taiwan (Traditional Chinese, gerobak 甜不辣,
kedai 紅茶冰) atau yang tanpa papan nama sama sekali. **Kalau nanti mengganti
gambar mana pun di sini, periksa ini lagi** — hasil pencarian stock untuk "noodle"
condong ke Jepang secara default.

## Foto asli yang dibutuhkan dari klien

| Slot             | Kebutuhan                                                              |
| ---------------- | ---------------------------------------------------------------------- |
| Video hero       | Ruangan 30-pax atau panci kaldu, gelap, gerak pelan, tanpa audio        |
| Arsip 1980-an    | **Aset paling berharga di seluruh situs.** Kalau keluarga pendiri punya foto kedai lama, minta. Dishoom membangun mereknya di atas foto seperti ini. |
| Mangkuk          | Dari atas, uap terlihat, cahaya hangat                                 |
| Tampak depan     | Gerai di Paradigm Mall, sore hari saat neon warm-white menyala          |
| Kemasan takeaway | Untuk tile DELIVERY — sekarang diisi foto interior, semantiknya meleset |

Jangan mengunci layout ke rasio aspek file mana pun di sini. Tinggi ditentukan
container plus `object-fit: cover`, bukan oleh gambarnya.
