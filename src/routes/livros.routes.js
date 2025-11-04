import express from "express";

import * as livrosRoutes from "../controllers/livros.controller.js";

const router = express.Router();

router.get("/", livrosRoutes.listarLivros);
router.get("/:id", livrosRoutes.buscarLivro);
router.post("/", livrosRoutes.criarLivro);
router.put("/:id", livrosRoutes.atualizarLivro);
router.delete("/:id", livrosRoutes.excluirLivro);

export default router;
