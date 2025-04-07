const express = require('express');
const router = express.Router();

// Aquí conectaremos las rutas de eventos y asistentes
// Ejemplo:
router.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

module.exports = router;