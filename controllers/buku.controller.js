const Buku = require('../models/buku.model');

const bukuController = {
  // Menampilkan daftar buku (Read)
  index: async (req, res) => {
    try {
      const listBuku = await Buku.getAll();
      res.render('buku/index', { buku: listBuku });
    } catch (err) {
      console.error(err);
      res.status(500).send('Terjadi kesalahan pada server');
    }
  },

  // Menampilkan form tambah buku
  renderAddForm: (req, res) => {
    res.render('buku/add');
  },

  // Proses simpan data baru dengan pola PRG (Create)
  create: async (req, res) => {
    try {
      await Buku.create(req.body);
      res.redirect('/buku');
    } catch (err) {
      console.error(err);
      res.status(500).send('Gagal menambah data buku');
    }
  },

  // Menampilkan form edit dengan data awal / pre-filled (Read by ID)
  renderEditForm: async (req, res) => {
    try {
      const item = await Buku.findById(req.params.id);
      if (!item) return res.status(404).send('Data buku tidak ditemukan');
      res.render('buku/edit', { buku: item });
    } catch (err) {
      console.error(err);
      res.status(500).send('Gagal memuat form edit');
    }
  },

  // Proses update data dengan pola PRG (Update)
  update: async (req, res) => {
    try {
      await Buku.update(req.params.id, req.body);
      res.redirect('/buku');
    } catch (err) {
      console.error(err);
      res.status(500).send('Gagal memperbarui data buku');
    }
  },

  // Proses hapus data dengan pola PRG (Delete)
  delete: async (req, res) => {
    try {
      await Buku.delete(req.params.id);
      res.redirect('/buku');
    } catch (err) {
      console.error(err);
      res.status(500).send('Gagal menghapus data buku');
    }
  }
};

module.exports = bukuController;