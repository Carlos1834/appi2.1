const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const articuloRoutes = require('./routes/articulos');


const app = express();
const port = 3000;

// Conexión a MongoDB Atlas
const mongoDBAtlasUri = 'mongodb+srv://apirestuser:apirest123@cluster0.gym7i1h.mongodb.net/nueva_tienda_virtual?retryWrites=true&w=majority';

mongoose.connect(mongoDBAtlasUri)
  .then(() => console.log('✅ Conectado a MongoDB Atlas - nueva_tienda_virtual'))
  .catch((err) => console.error('❌ Error de conexión a MongoDB:', err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());

// Rutas
app.use('/articulos', articuloRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API de Artículos funcionando correctamente');
});

// Servidor
app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
