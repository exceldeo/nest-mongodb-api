# README - NestJS Docker

Ini adalah contoh README untuk menjalankan aplikasi NestJS dalam Docker container.

## Persyaratan

Sebelum Anda dapat menjalankan aplikasi NestJS dalam Docker, pastikan Anda telah menginstal Docker di komputer Anda. Anda dapat mengunduh dan menginstal Docker dari [situs resmi Docker](https://docs.docker.com/get-docker/).

## Langkah-langkah

Berikut adalah langkah-langkah untuk menjalankan aplikasi NestJS dalam Docker:

1. **Klon repositori ini**:

   ```bash
   git clone https://github.com/exceldeo/nest-mongodb-api.git
   cd nest-mongodb-api
   ```

2. **Build Docker Image**:

   ```bash
   docker build -t nest-mongodb-api .
   ```

   Perintah di atas akan mengambil Dockerfile yang ada di direktori proyek Anda dan membangun image Docker dengan nama "nest-mongodb-api".

3. **Jalankan Docker Container**:

   ```bash
   docker run -p 3000:3000 nest-mongodb-api
   ```

   Ini akan menjalankan aplikasi NestJS dalam container Docker dan meneruskan port 3000 dari container ke port 3000 di mesin Anda.

4. **Akses Aplikasi**:

   Sekarang, aplikasi NestJS Anda harus berjalan dalam container Docker. Anda dapat mengaksesnya melalui peramban dengan mengunjungi `http://localhost:3000`.

## Konfigurasi

Anda dapat mengkonfigurasi aplikasi NestJS Anda dengan mengedit file `src/main.ts` atau file konfigurasi lain yang sesuai dengan proyek Anda. Pastikan untuk menyesuaikan variabel lingkungan dan pengaturan lainnya yang mungkin diperlukan.

## Penyelesaian

Itu saja! Anda sekarang menjalankan aplikasi NestJS Anda dalam Docker container. Jika Anda ingin menghentikan container, cukup tekan `Ctrl + C` dalam terminal tempat Anda menjalankannya, atau jalankan `docker stop nama-container`.

## Instalasi

```bash
$ yarn install
```
