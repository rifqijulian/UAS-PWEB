const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db'); // Memastikan koneksi database jalan

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Daftarkan rute fitur
const memoryRoutes = require('./routes/memories');
const authRoutes = require('./routes/auth'); // <-- 1. Tambah baris ini

app.use('/api/memories', memoryRoutes);
app.use('/api/auth', authRoutes); // <-- 2. Tambah baris ini

// Rute tes awal
app.get('/', (req, res) => {
    res.json({ message: 'API Minddrop berhasil berjalan!' });
});

app.listen(PORT, () => {
    console.log(`Peladen aktif dan berjalan di http://localhost:${PORT}`);
});