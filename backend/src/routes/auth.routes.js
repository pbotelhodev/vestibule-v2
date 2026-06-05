/* Importa o express */
const express = require("express");
/* Importa nosso register do controller */
const { register } = require("../controllers/auth.controler");
/* Chama o router */
const router = express.Router();

/* Cria a rota */
router.post("/register", register)

/* Exporta */
module.exports = router