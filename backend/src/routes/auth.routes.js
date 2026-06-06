/* Importa o express */
const express = require("express");
/* Importa nosso register do controller */
const { register, login, getMe } = require("../controllers/auth.controler");
/* Importa nosso middleware */
const authMiddleware = require("../middlewares/auth.middleware");

/* Chama o router */
const router = express.Router();

/* Cria a rota */
router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getMe);

/* Exporta */
module.exports = router;
