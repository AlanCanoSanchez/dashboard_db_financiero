const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Configuración
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api', (req, res) => {
  res.json({ mensaje: '¡API funcionando correctamente!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});