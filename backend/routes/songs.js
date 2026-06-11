const express = require('express');
const router = express.Router();
const db = require('../db');
const verifyToken = require('../middleware/auth'); 

// AMBIL DAFTAR LAGU BERDASARKAN MOOD
router.get('/', verifyToken, (req, res) => {
    const { mood } = req.query; // Menangkap kata kunci mood dari URL (contoh: ?mood=sedih)

    let query = 'SELECT * FROM songs';
    const params = [];

    // Jika ada parameter mood yang dikirim, saring datanya dari database
    if (mood) {
        query += ' WHERE mood = ?';
        params.push(mood);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = router;