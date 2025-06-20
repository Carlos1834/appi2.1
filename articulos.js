const express = require('express');
const router = express.Router();
const Articulo = require('../models/articulos'); // importa el modelo

// GET /articulos - Ver todos los artículos
router.get('/', async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artículos' });
  }
});

// POST /articulos - Crear nuevo artículo
router.post('/', async (req, res) => {
  try {
    const nuevoArticulo = new Articulo(req.body);
    const articuloGuardado = await nuevoArticulo.save();
    res.status(201).json(articuloGuardado);
  } catch (error) {
    res.status(400).json({ error: 'Error al guardar el artículo' });
  }
});

// DELETE /articulos/:id - Eliminar por ID
router.delete('/:id', async (req, res) => {
  try {
    const articuloEliminado = await Articulo.findByIdAndDelete(req.params.id);
    if (!articuloEliminado) {
      return res.status(404).json({ mensaje: 'Artículo no encontrado' });
    }
    res.json({ mensaje: 'Artículo eliminado', articulo: articuloEliminado });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el artículo' });
  }
});

module.exports = router;
