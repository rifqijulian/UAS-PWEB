const express = require('express');
const router = express.Router();
const db = require('../db'); // Menuju ke konfigurasi database-mu
// const { verifyToken } = require('../middleware/auth'); // <-- Sesuaikan path middleware JWT-mu jika ada

// PENTING: Jika middleware belum dipisah ke folder sendiri, kamu bisa pakai contoh fungsi interim ini:
// Tapi jika sudah ada middleware bawaan timmu, silakan ganti 'verifyToken' dengan punyamu.
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ success: false, message: 'Akses ditolak, token tidak ada!' });

    const jwt = require('jsonwebtoken');
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ success: false, message: 'Token tidak valid!' });
        req.user = user; // Menyimpan data user (termasuk id) ke req.user
        next();
    });
}

// Endpoint GET /api/stats
router.get('/', verifyToken, async (req, res) => {
    const userId = req.user.id; // ID Pengguna didapat dari token JWT
    const { range } = req.query; // Mengambil query ?range=minggu atau ?range=bulan

    // Logika Filter Waktu Berdasarkan Parameter Query
    let timeCondition = "";
    if (range === 'minggu') {
        timeCondition = "AND tanggal >= DATE_SUB(NOW(), INTERVAL 7 DAY)";
    } else if (range === 'bulan') {
        timeCondition = "AND tanggal >= DATE_SUB(NOW(), INTERVAL 30 DAY)";
    }

    try {
        // 1. Ambil data mood & hitung persentase
        const [moodRows] = await db.query(
            `SELECT mood, COUNT(*) as jumlah 
             FROM memories 
             WHERE id_user = ? ${timeCondition} 
             GROUP BY mood`, 
            [userId]
        );

        const totalMemori = moodRows.reduce((sum, item) => sum + item.jumlah, 0);
        const moodStats = moodRows.map(item => ({
            mood: item.mood,
            jumlah: item.jumlah,
            persentase: totalMemori > 0 ? Math.round((item.jumlah / totalMemori) * 100) : 0
        })).sort((a, b) => b.jumlah - a.jumlah);

        // 2. Ambil data Top 3 Lokasi
        const [lokasiStats] = await db.query(
            `SELECT lokasi, COUNT(*) as jumlah 
             FROM memories 
             WHERE id_user = ? AND lokasi IS NOT NULL AND lokasi != '' ${timeCondition} 
             GROUP BY lokasi 
             ORDER BY jumlah DESC 
             LIMIT 3`, 
            [userId]
        );

        // 3. Ambil data Lagu Teratas (Top 1)
        const [laguStats] = await db.query(
            `SELECT lagu_yang_didengar as judul_lagu, COUNT(*) as jumlah 
             FROM memories 
             WHERE id_user = ? AND lagu_yang_didengar IS NOT NULL AND lagu_yang_didengar != '' ${timeCondition} 
             GROUP BY lagu_yang_didengar 
             ORDER BY jumlah DESC 
             LIMIT 1`, 
            [userId]
        );

        // Kirim Response JSON Berhasil
        res.status(200).json({
            success: true,
            message: "Berhasil mengambil data statistik dan insight.",
            data: {
                filter: range || 'semua',
                total_memori: totalMemori,
                mood_paling_sering: moodStats,
                top_lokasi: lokasiStats,
                lagu_paling_didengar: laguStats[0] || null
            }
        });

    } catch (error) {
        console.error("Eror pada API Stats:", error);
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan pada peladen saat mengambil data statistik."
        });
    }
});

module.exports = router;