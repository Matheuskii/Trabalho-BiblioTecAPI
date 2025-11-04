import express from "express";

import * as avaliacoesRoutes from "../controllers/avaliacoes.controller.js";

const router = express.Router();

router.get("/", avaliacoesRoutes.buscarAvaliacoes);
router.get("/:id", avaliacoesRoutes.obterAvaliacao);
router.post("/", avaliacoesRoutes.criarAvaliacao);
router.put("/:id", avaliacoesRoutes.atualizarAvaliacao);
router.delete("/:id", avaliacoesRoutes.deletarAvaliacao);

export default router;
