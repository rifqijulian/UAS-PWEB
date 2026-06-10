const express = require('express');
const router = express.Router();
const db = require('../db'); // Mengambil koneksi database

// 1. TAMBAH MEMORI (CREATE)
router.post('/', (req, res) => {
    const { user_id, tanggal, lokasi, cuaca, lagu, curhatan, refleksi } = req.body;
    
    const query = `INSERT INTO memories (user_id, tanggal, lokasi, cuaca, lagu, curhatan, refleksi) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
    db.query(query, [user_id, tanggal, lokasi, cuaca, lagu, curhatan, refleksi], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Memori berhasil disimpan!', id: result.insertId });
    });
});

// 2. AMBIL SEMUA MEMORI (READ)
router.get('/', (req, res) => {
    const query = 'SELECT * FROM memories ORDER BY tanggal DESC';
    
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// 3. UBAH MEMORI (UPDATE)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { tanggal, lokasi, cuaca, lagu, curhatan, refleksi } = req.body;
    
    const query = `UPDATE memories SET tanggal = ?, lokasi = ?, cuaca = ?, lagu = ?, curhatan = ?, refleksi = ? WHERE id = ?`;
    
    db.query(query, [tanggal, lokasi, cuaca, lagu, curhatan, refleksi, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Memori tidak ditemukan!' });
        }
        res.json({ message: 'Memori berhasil diperbarui!' });
    });
});

// 4. HAPUS MEMORI (DELETE)
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    const query = 'DELETE FROM memories WHERE id = ?';
    
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Memori tidak ditemukan!' });
        }
        res.json({ message: 'Memori berhasil dihapus!' });
    });
});
module.exports = router;