# Dimas Adrian - Web Profile

Website profil profesional personal modern untuk **Dimas Adrian** (Network Engineer & Software Engineer) yang dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS**, tanpa membutuhkan basis data (database-free).

Seluruh informasi profil diambil langsung dari akun resmi LinkedIn [Dimas Adrian](https://www.linkedin.com/in/dimas-adrian/).

---

## 🌟 Fitur Utama

1. **Desain Modern & Responsif**:
   - Tampilan berestetika teknologi modern (dark mode default dengan opsi light mode).
   - Tipografi responsif dengan unit fluid clamp dan dynamic viewport units (`dvh`/`dvw`).
   - Animasi halus dan aksen visual jaringan (node pulse, glassmorphism, terminal shell).

2. **Dua Bahasa (Bilingual)**:
   - Dukungan penuh Bahasa Indonesia (ID) & English (EN) dengan tombol toggle instan.

3. **Kredensial & Lisensi Resmi Terverifikasi**:
   - **Cisco Certified Network Associate (CCNA) - Routing and Switching** (Februari 2025) dengan tautan verifikasi Credly.
   - **MikroTik Certified Network Associate (MTCNA)** (Juli 2025 - Juli 2028, Credential ID: `2507NA1354`) dengan tautan verifikasi MikroTik.
   - Fitur salin ID Kredensial dengan satu klik.

4. **Pengalaman & Kepemimpinan**:
   - Rekam jejak sebagai **Ketua Divisi Tim Pengembangan di UKM CISCO Politeknik Caltex Riau** (September 2024 – Sekarang).
   - Pencapaian dalam pengembangan modul, instruktur teknis, dan kepemimpinan tim.

5. **Pendidikan Formal**:
   - **Politeknik Caltex Riau (PCR)** - Sarjana Terapan (D4) Teknik Informatika (2023 – 2027).
   - **SMKN 5 Pekanbaru**.

6. **Interaktif Tanpa Database**:
   - Filter dan pencarian langsung keahlian (Cisco, React, Git, RouterOS, dll.).
   - Formulir pesan langsung dan tombol salin email dengan notifikasi responsif (mailto-ready).
   - Simulator terminal interaktif (`dimas@pcr-lab:~$ whoami`).

---

## 🐳 Menjalankan dengan Docker & Docker Compose (Server Ubuntu)

Proyek ini telah dikonfigurasi dengan *multi-stage Docker build* dan web server **Nginx Alpine** yang sangat ringan, aman, dan cepat.

### 1. Jalankan Container
Di server Ubuntu Anda, buka folder proyek dan jalankan perintah:
```bash
docker compose up -d --build
```
*(atau `docker-compose up -d --build` jika menggunakan Docker Compose v1)*

### 2. Akses Website
Setelah container berjalan, website langsung dapat diakses dari browser di jaringan lokal Anda melalui:
```
http://<IP_SERVER_UBUNTU>:3100
```
*Contoh:* `http://192.168.1.50:3100` atau `http://localhost:3100` (jika diakses langsung dari server).

### 3. Perintah Bermanfaat
- **Melihat status container**:
  ```bash
  docker compose ps
  ```
- **Melihat log container**:
  ```bash
  docker compose logs -f
  ```
- **Menghentikan container**:
  ```bash
  docker compose down
  ```
- **Jika firewall Ubuntu (UFW) aktif**, buka port 3100:
  ```bash
  sudo ufw allow 3100/tcp
  sudo ufw reload
  ```

---

## 💻 Menjalankan Manual Tanpa Docker (Local Development)

### 1. Prasyarat
- [Node.js](https://nodejs.org/) (versi 18+)
- npm

### 2. Jalankan Server Dev
```bash
npm run dev
```
Akses di `http://localhost:3000`.

### 3. Build Produksi
```bash
npm run build
```
Hasil build produksi yang dioptimalkan akan tersimpan di dalam folder `dist/`.

---

## 📁 Struktur Direktori

```
profile_web/
├── Dockerfile           # Multi-stage Docker build (Node.js -> Nginx)
├── docker-compose.yml   # Konfigurasi container port 3100:80
├── nginx.conf           # Konfigurasi web server Nginx (SPA routing & gzip)
├── .dockerignore        # File yang diabaikan saat docker build
├── src/
│   ├── components/      # Komponen antarmuka React
│   │   ├── Navbar.jsx          # Navigasi, ganti bahasa, toggle tema
│   │   ├── Hero.jsx            # Banner profil utama, ringkasan & badge
│   │   ├── About.jsx           # Biodata lengkap, 3 pilar, terminal simulator
│   │   ├── Certifications.jsx  # Kartu verifikasi CCNA & MTCNA resmi
│   │   ├── Experience.jsx      # Pengalaman UKM CISCO PCR & tanggung jawab
│   │   ├── Skills.jsx          # Tab keahlian, pencarian, & connected apps
│   │   ├── Education.jsx       # Riwayat pendidikan PCR & SMKN 5 Pekanbaru
│   │   ├── Contact.jsx         # Kontak langsung, copy email, formulir cepat
│   │   └── Footer.jsx          # Footer & tombol scroll ke atas
│   ├── data/
│   │   └── profileData.js      # Data profil lengkap (bilingual ID/EN)
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entrypoint React
│   └── index.css        # Konfigurasi Tailwind & styling modern
├── index.html           # HTML template utama
├── package.json         # Konfigurasi dependensi
├── tailwind.config.js   # Konfigurasi Tailwind CSS
└── vite.config.js       # Konfigurasi Vite
```
