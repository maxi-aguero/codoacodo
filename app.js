const express = require('express');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Ruta para enviar el mensaje como JSON
app.get('/mensaje', (req, res) => {
    res.json({ mensaje: 'Hola desde el servidor!' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
