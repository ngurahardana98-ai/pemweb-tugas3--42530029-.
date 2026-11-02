CREATE DATABASE IF NOT EXISTS db_perpustakaan;
USE db_perpustakaan;

CREATE TABLE IF NOT EXISTS buku (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(150) NOT NULL,
  penulis VARCHAR(100) NOT NULL,
  kategori ENUM('Fiksi', 'Non-Fiksi', 'Sains', 'Teknologi', 'Sejarah') NOT NULL,
  tahun_terbit INT NOT NULL,
  stok INT NOT NULL,
  deskripsi TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO buku (judul, penulis, kategori, tahun_terbit, stok, deskripsi) VALUES
('Pemrograman Web Lanjut', 'Budi Raharjo', 'Teknologi', 2023, 10, 'Panduan lengkap belajar Express.js, EJS, dan MySQL.'),
('Algoritma dan Struktur Data', 'Rinaldi Munir', 'Sains', 2022, 5, 'Buku dasar wajib untuk mahasiswa ilmu komputer.'),
('Sejarah Dunia yang Disembunyikan', 'Jonathan Black', 'Sejarah', 2021, 7, 'Mengungkap sisi lain sejarah peradaban manusia.');v