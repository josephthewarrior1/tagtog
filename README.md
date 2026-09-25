# TagTog

Website, form permintaan demo, backend, dan admin inbox. Pengunjung mengirim
permintaan; admin menghubungi pemohon, mencatat follow-up, dan mengubah status.
Belum ada kalender pemilihan slot atau pengiriman email otomatis.

## Tiga repository, empat service Docker

Simpan tiga repository sebagai folder sejajar, bukan di dalam folder website:

```text
Folder Kim/ (laptop) atau /opt/ (server)
  tagtog/        website dan Compose stack utama
  tagtog-be/     backend dan PostgreSQL
  tagtog-admin/  admin inbox
```

Repository backend: [tagtog-be](https://github.com/josephthewarrior1/tagtog-be).
Repository admin: [tagtog-admin](https://github.com/josephthewarrior1/tagtog-admin).

| Folder | Aplikasi | Container |
| --- | --- | --- |
| src/ dan public/ | Next.js, website dan form | web, port host 8787 |
| ../tagtog-be/ | Express, login admin, koneksi PostgreSQL | backend, port internal 8788 |
| ../tagtog-admin/ | React/Vite dengan Nginx | admin, port internal 8789 |
| Volume tagtog_postgres | PostgreSQL 17, data demo dan akun admin | db, port internal 5432 |
| tests/ | Pemeriksaan integrasi Docker | Dijalankan dari laptop |

Setiap aplikasi memiliki Dockerfile dan repository sendiri. compose.yaml di website
membangun backend dari ../tagtog-be dan admin dari ../tagtog-admin, lalu menjalankan semuanya.
Backend, admin, dan database tidak membuka port ke internet. Next.js meneruskan /api/* dan
/admin/* melalui network Docker TagTog. Apache tetap meneruskan seluruh path domain
ke 127.0.0.1:8787.

## Deploy dari server

Pastikan perubahan website sudah di-commit/push. Pada setup pertama, clone dua
repository baru ke folder sejajar dengan website (SSH GitHub server harus sudah terhubung):

```bash
cd /opt
git clone git@github.com:josephthewarrior1/tagtog-be.git
git clone git@github.com:josephthewarrior1/tagtog-admin.git
```

Jika foldernya sudah ada, gunakan langkah update di bawah. Siapkan konfigurasi stack:

```bash
cd /opt/tagtog
git pull origin main
test -f .env || cp .env.example .env
nano .env
```

Isi email admin, password admin, dan password database yang berbeda di .env. Contoh struktur:

```dotenv
ADMIN_EMAIL=alamat-email-admin-anda
ADMIN_PASSWORD='password-unik-minimal-12-karakter'
POSTGRES_DB=tagtog
POSTGRES_USER=tagtog
POSTGRES_PASSWORD='password-database-unik-anda'
PUBLIC_ORIGIN=https://tagtog.id,https://www.tagtog.id
COOKIE_SECURE=true
TAGTOG_BIND_IP=127.0.0.1
TAGTOG_PORT=8787
```

Gunakan password unik 12-256 karakter. Kutip password dengan tanda kutip tunggal
agar karakter seperti $ tidak diinterpolasi Compose. Jangan commit .env.
Tidak ada password bawaan. Akun dibuat pada inisialisasi pertama; perubahan nilai
ADMIN_PASSWORD di .env tidak mengganti password akun yang sudah disimpan.
POSTGRES_PASSWORD wajib diisi sebelum menjalankan Compose. Nilai POSTGRES_DB,
POSTGRES_USER, dan POSTGRES_PASSWORD menginisialisasi database saat volume masih
kosong; mengganti .env tidak mengganti kredensial database yang sudah ada.

Build berurutan untuk mengurangi beban server 2 GB; lanjutkan jika perintah
sebelumnya berhasil:

```bash
docker compose build backend
docker compose build admin
docker compose build web
docker compose pull db
docker compose up -d --no-build
docker compose ps
docker compose logs --tail=50 backend
curl -f http://127.0.0.1:8787/api/health
```

Keempat service harus healthy. Batas RAM runtime: web 512 MB, backend 256 MB,
admin 64 MB, PostgreSQL 256 MB. Batas ini tidak berlaku pada proses build.

- Form: **https://tagtog.id/request-demo**
- Admin: **https://tagtog.id/admin**

Login memakai akun yang diisi pada .env. Kirim satu permintaan lewat form dan
pastikan masuk inbox. Admin mendukung pencarian, filter status, pagination,
detail pemohon, catatan internal, dan status Baru/Dihubungi/Terjadwal/Selesai/
Diarsipkan. Terjadwal adalah catatan progres, bukan pemesanan slot kalender.

## Domain dan HTTPS

Konfigurasi Apache yang meneruskan seluruh path tagtog.id ke 127.0.0.1:8787 tetap
dapat digunakan. Tidak perlu menambahkan port publik untuk API atau admin.

Cloudflare: A @ ke 146.190.101.90 dan CNAME www ke tagtog.id, tetap Proxied.
Pasang sertifikat HTTPS origin valid untuk tagtog.id dan www.tagtog.id, lalu pilih
SSL/TLS Full (strict).

API dan admin mengirim Cache-Control: no-store. Jika ada aturan Cloudflare
Cache Everything khusus, kecualikan /api/* dan /admin*. PUBLIC_ORIGIN harus berisi
origin domain yang dipakai, termasuk https://, tanpa path. Jika diubah, jalankan
ulang Compose up agar environment backend diperbarui.

## Penyimpanan dan backup

Data PostgreSQL tersimpan dalam volume tagtog_postgres milik project Compose tagtog
(nama default di Docker: tagtog_tagtog_postgres). Tabel dan indeks dibuat otomatis
melalui migrasi saat backend mulai berjalan.
Recreate/update container mempertahankan data. **Jangan gunakan docker compose down -v**:
opsi -v menghapus volume, termasuk permintaan dan akun admin.

Buat backup PostgreSQL saat aplikasi berjalan. Jalankan di terminal Ubuntu server:

```bash
cd /opt/tagtog
mkdir -p backups
backup_name="tagtog-$(date -u +%Y%m%dT%H%M%SZ).dump"
docker compose exec -T db sh -c 'pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" --format=custom --file=/tmp/tagtog-backup.dump'
docker compose cp db:/tmp/tagtog-backup.dump "./backups/$backup_name"
```

Simpan salinan backup di lokasi lain yang terlindungi. File memuat data kontak,
hash password, dan sesi. Petunjuk restore ada di
[README backend](https://github.com/josephthewarrior1/tagtog-be#back-up-and-restore).
Untuk stack utama ini, jalankan perintah Compose dari /opt/tagtog agar mengakses volume yang benar.
Cara ini memakai [pg_dump](https://www.postgresql.org/docs/17/app-pgdump.html)
dan menyalin file hasilnya, sehingga tidak melewatkan data biner melalui redirection PowerShell.

Reset password melalui CLI interaktif, yang juga membatalkan sesi lama:

```bash
docker compose exec backend node src/reset-password.js
```

## Update berikutnya

Buat backup sebelum upgrade. Pertahankan .env yang sudah diisi:

```bash
cd /opt/tagtog
git pull --ff-only origin main
git -C /opt/tagtog-be pull --ff-only origin main
git -C /opt/tagtog-admin pull --ff-only origin main
docker compose build backend
docker compose build admin
docker compose build web
docker compose up -d --no-build
docker compose ps
```

Compose ini hanya mengelola project TagTog. Database PMS/CRM tidak digunakan.
PostgreSQL TagTog tidak memetakan port 5432 atau 4000 pada host.

## Docker Desktop untuk tes lokal

Clone ketiga repository dengan susunan folder sejajar di atas. Dari folder tagtog,
salin .env.example ke .env dan isi kredensial admin sendiri. Untuk HTTP di laptop:

```dotenv
PUBLIC_ORIGIN=http://localhost:8787,http://127.0.0.1:8787
COOKIE_SECURE=false
TAGTOG_BIND_IP=127.0.0.1
TAGTOG_PORT=8787
```

```bash
docker compose build
docker compose up -d --no-build
```

Buka http://localhost:8787/admin dan http://localhost:8787/request-demo.
Jika port diganti, sesuaikan PUBLIC_ORIGIN. COOKIE_SECURE=false hanya untuk tes
HTTP loopback; domain produksi memakai HTTPS dan COOKIE_SECURE=true.

Untuk build di laptop lalu kirim image ke server (tanpa build di server):

```powershell
New-Item -ItemType Directory -Force artifacts | Out-Null
docker image save --output artifacts/tagtog-stack.tar tagtog:latest tagtog-backend:latest tagtog-admin:latest
scp artifacts/tagtog-stack.tar compose.yaml root@146.190.101.90:/opt/tagtog/
```

Di server dengan .env yang sudah diisi:

```bash
cd /opt/tagtog
docker image load --input tagtog-stack.tar
docker compose pull db
docker compose up -d --no-build --pull never
```

## Development Node dengan database Docker (opsional)

Gunakan Node.js 22. Di PowerShell gunakan npm.cmd jika npm.ps1 diblokir.

```bash
npm ci
npm --prefix ../tagtog-be ci
npm --prefix ../tagtog-admin ci
```

Isi .env root seperti petunjuk Docker lokal, lalu jalankan database dengan port
khusus development yang hanya terikat ke loopback:

```bash
docker compose -f compose.yaml -f compose.dev.yaml up -d db
```

Isi ../tagtog-be/.env berdasarkan ../tagtog-be/.env.example. Samakan PGPASSWORD dengan
POSTGRES_PASSWORD pada .env root, dan gunakan PGPORT=15432. Buka tiga terminal:

```bash
npm run dev:backend
npm run dev:admin
npm run dev
```

Akses utama http://localhost:8787/admin. Website meneruskan API8788/admin8789.
Jika membuka Vite langsung di localhost:8789, tambahkan origin itu ke PUBLIC_ORIGIN.
Alamat proxy Next dibaca saat build; Dockerfile mengatur BACKEND_URL=http://backend:8788
dan ADMIN_URL=http://admin:8789. Development memakai alamat loopback.

## Pemeriksaan

```bash
docker compose -f compose.test.yaml up --build --abort-on-container-exit --exit-code-from test
docker compose -f compose.test.yaml down
npm run build:admin
npm run build
```

Tes backend memakai PostgreSQL sungguhan, database sementara tanpa port host,
dan schema terpisah per tes. Compose tes tidak memakai volume produksi.
Untuk npm run test:backend langsung, set TEST_DATABASE_URL ke database khusus tes;
lihat ../tagtog-be/README.md.

Untuk stack Docker lokal dengan data uji, isi environment SMOKE_BASE_URL,
SMOKE_ADMIN_EMAIL, SMOKE_ADMIN_PASSWORD, lalu:

```bash
node tests/docker-smoke.mjs
```

Tes ini hanya mengizinkan localhost/127.0.0.1 dan membuat permintaan sintetis.
Mencakup proxy, aset admin, validasi, idempotensi, login, proteksi data, CSRF,
pencarian, perubahan status/catatan, dan logout.
