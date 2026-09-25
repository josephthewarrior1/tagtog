# TagTog

Website Next.js untuk TagTog. Saat ini hanya landing page dan halaman request demo;
belum ada backend/database. Form request demo masih preview dan tidak mengirim atau
menyimpan data.

## Development

```bash
npm ci
npm run dev
```

Buka <http://localhost:8787>. Di PowerShell yang memblokir npm.ps1, gunakan npm.cmd.

## Deploy Docker ke Ubuntu

Satu service `web` di project Compose `tagtog`, dengan port host/container 8787.
Container berjalan sebagai user non-root, restart otomatis, health check,
batas RAM 512 MB, dan rotasi log. Tidak memerlukan PostgreSQL.

Image Next.js standalone menyertakan public dan .next/static. Build memerlukan
internet untuk base image, npm, dan Google Fonts; font disertakan di hasil build.
Target image Linux AMD64 sesuai server. Build di laptop disarankan karena server
2 GB sudah menjalankan beberapa aplikasi.

### 1. Build dan upload dari laptop

Jalankan Docker Desktop dalam mode Linux containers. Buka PowerShell di folder
project, kemudian:

```powershell
docker compose build web
docker compose up -d --no-build web
docker compose ps
```

Buka <http://localhost:8787> dan <http://localhost:8787/request-demo>.
Jika port laptop dipakai, set `$env:TAGTOG_PORT = "18787"` sebelum perintah up,
lalu buka port 18787.

Ekspor image dan upload bersama konfigurasi Compose:

```powershell
New-Item -ItemType Directory -Force artifacts | Out-Null
docker image save --output artifacts/tagtog-image.tar tagtog:latest
ssh root@146.190.101.90 "mkdir -p /opt/tagtog"
scp artifacts/tagtog-image.tar compose.yaml root@146.190.101.90:/opt/tagtog/
```

SSH/SCP meminta autentikasi jika belum memakai SSH key. Masukkan password langsung
di terminal. Jika SSH memakai port khusus, tambahkan `-p PORT` ke ssh dan
`-P PORT` ke scp. Server hanya perlu image dan compose.yaml, tanpa source/node_modules.

### 2. Jalankan di server

Di terminal Ubuntu:

```bash
cd /opt/tagtog
docker compose version
ss -lntp 'sport = :8787'
free -h
docker stats --no-stream
```

Pastikan port kosong dan RAM cukup. Jika 8787 dipakai, pilih port kosong lain dan
isi `TAGTOG_PORT=PORT_PILIHAN` di /opt/tagtog/.env sebelum menjalankan Compose.
Jika Compose belum tersedia, ikuti [instalasi plugin Compose](https://docs.docker.com/compose/install/linux/)
sesuai instalasi Docker yang sudah ada.

```bash
docker image load --input tagtog-image.tar
docker compose up -d --no-build --pull never web
docker compose ps
docker compose logs --tail=100 web
curl -I http://127.0.0.1:8787
```

Tunggu status healthy. Sesuaikan port curl jika diubah. Perintah ini hanya mengelola
project tagtog; image dijalankan tanpa build di server.

Tes awal via <http://146.190.101.90:8787> jika firewall server/provider mengizinkan.
Cek curl lokal dahulu sebelum mengubah aturan jaringan.
Akses domain final menggunakan HTTPS melalui reverse proxy.

### 3. Domain Exabytes ke Cloudflare

Nama domain dan reverse proxy server perlu diketahui untuk menyelesaikan HTTPS.

1. Tambahkan domain di Cloudflare dan periksa hasil import DNS. Pertahankan
   record email/MX/TXT/subdomain yang sudah ada.
2. Di Exabytes: Domains → My Domains → pilih domain → Manage → Name Servers.
   Ganti dengan dua nameserver yang diberikan Cloudflare khusus untuk domain itu.
   Jika DNSSEC sebelumnya aktif, ikuti panduan migrasi Cloudflare untuk menghapus
   DS lama sebelum pindah nameserver. Tunggu status domain Active.
3. Buat record A bernama `@` ke `146.190.101.90`, tanpa nomor port.
   Tambahkan CNAME `www` ke domain utama jika dipakai. Pastikan tidak ada
   record A/AAAA lama untuk nama yang sama yang mengarah ke server lain.
4. Cek pengelola port 80/443 di server sebelum memasang reverse proxy:

   ```bash
   ss -lntp '( sport = :80 or sport = :443 )'
   systemctl is-active nginx apache2 caddy
   docker ps --format 'table {{.Names}}\t{{.Ports}}'
   ```

5. Tambahkan hostname TagTog ke reverse proxy yang sesuai. Proxy di host dapat
   meneruskan ke `127.0.0.1:8787` (sesuaikan jika TAGTOG_PORT diubah).
   Proxy di Docker memerlukan koneksi antar-container
   yang sesuai; 127.0.0.1 di container menunjuk container itu sendiri.
   Pasang sertifikat TLS valid untuk domain (dan www jika dipakai) di port 443.
6. Setelah HTTPS origin bekerja, aktifkan proxy Cloudflare (awan oranye) dan
   SSL/TLS **Full (strict)**. Sertifikat origin harus belum kedaluwarsa, cocok
   dengan domain, dan diterbitkan CA publik atau Cloudflare Origin CA.
   Origin CA memerlukan proxy Cloudflare untuk akses browser. Periksa hostname
   lain di zona yang sama sebelum mengganti mode SSL/TLS global.
   Setelah HTTPS teruji, aktifkan Always Use HTTPS.

Alur: pengunjung → Cloudflare HTTPS → reverse proxy server :443 → TagTog :8787.
Proxy standar Cloudflare tidak mendukung port pengunjung 8787.

Jika reverse proxy berjalan di host, tambahkan `TAGTOG_BIND_IP=127.0.0.1` ke
/opt/tagtog/.env lalu jalankan ulang perintah Compose up agar port aplikasi hanya
tersedia secara lokal.

Referensi resmi:
[Exabytes nameserver](https://support.exabytes.co.id/id/support/solutions/articles/14000112984-mengganti-name-server-di-area-pelanggan),
[setup Cloudflare](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/),
[port proxy](https://developers.cloudflare.com/fundamentals/reference/network-ports/),
[Full (strict)](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/).

### Update dan rollback

Build/ekspor ulang di laptop, lalu upload tar baru. Simpan image lama sebelum load:

```bash
cd /opt/tagtog
docker image tag tagtog:latest tagtog:previous
docker image load --input tagtog-image.tar
docker compose up -d --no-build --pull never web
docker compose ps
docker compose logs --tail=100 web
```

Untuk kembali ke image sebelumnya:

```bash
docker image tag tagtog:previous tagtog:latest
docker compose up -d --no-build --pull never web
```
