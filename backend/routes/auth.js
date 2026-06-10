const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

// 1. REGISTRASI AKUN (REGISTER)
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Menyamarkan kata sandi agar aman di database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [username, email, hashedPassword], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'Email sudah terdaftar!' });
                }
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Akun berhasil dibuat!' });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. MASUK SISTEM (LOGIN)
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(400).json({ error: 'Email atau password salah!' });

        const user = results[0];

        // Memeriksa apakah kata sandi yang diketik cocok dengan di database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Email atau password salah!' });

        // Membuat token sesi digital (berlaku 1 hari)
        const token = jwt.sign(
            { id: user.id, username: user.username },
            'KUNCI_RAHASIA_BEBAS_APA_AJA',
            { expiresIn: '1d' }
        );

        res.json({
            message: 'Login berhasil!',
            token,
            user: { id: user.id, username: user.username, email: user.email }
        });
    });
});

module.exports = router;