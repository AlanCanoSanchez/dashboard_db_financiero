const express = require("express");
const router = express.Router();
const db = require("./db"); // Importamos la conexión correcta


// Endpoint para obtener los ingresos totales
router.get("/factprestamospagos_general", (req, res) => {
    const query = `
        SELECT * FROM factprestamospagos 
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error("❌ Error al obtener datos totales:", err);
            return res.status(500).json({ error: "Error al obtener datos totales" });
        }
        res.json(results); // Devuelve el total de ingresos
    });
});

// Aqui se ira colocando cada endpoint que sera llamada desde el frontend




module.exports = router;
