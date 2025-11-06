import express from 'express';

import * as favoritosController from '../controllers/favoritos.controller.js';
const router = express.Router();
router.get('/', favoritosController.listarFavoritos);
router.post('/', favoritosController.adicionarFavorito);
router.delete('/:id', favoritosController.removerFavorito);
export default router;
