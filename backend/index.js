const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Ditambahkan untuk kebutuhan verifikasi token stats
require('dotenv').config();
const db = require('./db'); // Menggunakan koneksi database yang sudah ada

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ==========================================
// MIDDLEWARE VERIFIKASI TOKEN JWT (UNTUK STATS)
// ==========================================
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ success: false, message: 'Akses ditolak, token tidak ditemukan!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Token tidak valid atau kadaluwarsa!' });
        }
        req.user = user; // Menyimpan data user (termasuk id) ke req.user
        next();
    });
}

// ==========================================
// ENDPOINT BARU: GET /api/stats (STATS & INSIGHT)
// ==========================================
app.get('/api/stats', verifyToken, async (req, res) => {
    const userId = req.user.id; // Diambil dari payload JWT setelah lolos verifikasi
    const { range } = req.query; // 'minggu', 'bulan', atau 'semua'

    // Atur kondisi filter waktu berdasarkan parameter query
    let timeCondition = "";
    if (range === 'minggu') {
        timeCondition = "AND tanggal >= DATE_SUB(NOW(), INTERVAL 7 DAY)";
    } else if (range === 'bulan') {
        timeCondition = "AND tanggal >= DATE_SUB(NOW(), INTERVAL 30 DAY)";
    }

    try {
        // 1. Ambil data Mood dan hitung persentase untuk Pie Chart
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

        // 2. Ambil data Top 3 Lokasi Memori
        const [lokasiStats] = await db.query(
            `SELECT lokasi, COUNT(*) as jumlah 
             FROM memories 
             WHERE id_user = ? AND lokasi IS NOT NULL AND lokasi != '' ${timeCondition} 
             GROUP BY lokasi 
             ORDER BY jumlah DESC 
             LIMIT 3`, 
            [userId]
        );

        // 3. Ambil data Lagu Paling Sering Didengar (Top 1)
        const [laguStats] = await db.query(
            `SELECT lagu_yang_didengar as judul_lagu, COUNT(*) as jumlah 
             FROM memories 
             WHERE id_user = ? AND lagu_yang_didengar IS NOT NULL AND lagu_yang_didengar != '' ${timeCondition} 
             GROUP BY lagu_yang_didengar 
             ORDER BY jumlah DESC 
             LIMIT 1`, 
            [userId]
        );

        // Kirim semua respons dalam satu format JSON terstruktur
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

// ==========================================
// REGISTER RUTE FITUR UTAMA (MODULAR)
// ==========================================
const memoryRoutes = require('./routes/memories');
const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/songs');

app.use('/api/memories', memoryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);

// Rute tes awal
app.get('/', (req, res) => {
    res.json({ message: 'API Minddrop berhasil berjalan!' });
});

app.listen(PORT, () => {
    console.log(`Peladen aktif dan berjalan di http://localhost:${PORT}`);
});