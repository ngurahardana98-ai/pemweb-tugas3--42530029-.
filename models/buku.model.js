const db = require('../config/database');

const Buku = {
  // Mengambil seluruh data buku (Read)
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM buku ORDER BY id DESC');
    return rows;
  },

  // Menambah data buku baru dengan Prepared Statements (Create)
  create: async (data) => {
    const { judul, penulis, kategori, tahun_terbit, stok, deskripsi } = data;
    const query = 'INSERT INTO buku (judul, penulis, kategori, tahun_terbit, stok, deskripsi) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await db.execute(query, [judul, penulis, kategori, tahun_terbit, stok, deskripsi]);
    return result;
  },

  // Mencari buku berdasarkan ID untuk form Edit (Pre-filled)
  findById: async (id) => {
    const query = 'SELECT * FROM buku WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  },

  // Memperbarui data buku berdasarkan ID (Update)
  update: async (id, data) => {
    const { judul, penulis, kategori, tahun_terbit, stok, deskripsi } = data;
    const query = 'UPDATE buku SET judul = ?, penulis = ?, kategori = ?, tahun_terbit = ?, stok = ?, deskripsi = ? WHERE id = ?';
    const [result] = await db.execute(query, [judul, penulis, kategori, tahun_terbit, stok, deskripsi, id]);
    return result;
  },

  // Menghapus data buku berdasarkan ID (Delete)
  delete: async (id) => {
    const query = 'DELETE FROM buku WHERE id = ?';
    const [result] = await db.execute(query, [id]);
    return result;
  }
};

module.exports = Buku;