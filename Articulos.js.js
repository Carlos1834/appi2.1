// models/Articulo.js
const mongoose = require('mongoose');

const ArticuloSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Articulo', ArticuloSchema);
