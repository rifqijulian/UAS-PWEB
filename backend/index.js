const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
require('./db');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rute tes awal API
app.get('/', (req, res) => {
    res.json({ message: 'API Minddrop berhasil berjalan!' });
});

// Menjalankan peladen (server)
app.listen(PORT, () => {
    console.log(`Peladen aktif dan berjalan di http://localhost:${PORT}`);
});