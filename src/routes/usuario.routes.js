import express from "express";

import * as usuarioController from "../controllers/usuario.controller.js";
const router = express.Router();

/* / Rotas de Usuário */
router.get("/", usuarioController.listarUsuarios);
router.get("/:id", usuarioController.obterUsuario);
router.post("/", usuarioController.criarUsuario);
router.put("/:id", usuarioController.atualizarUsuario);
router.delete("/:id", usuarioController.deletarUsuario);

export default router;
