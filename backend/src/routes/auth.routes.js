const express = require("express");
const rateLimit = require("express-rate-limit");
const { register, login, getMe } = require("../controllers/auth.controler");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

/* Limite: 10 tentativas por IP a cada 15 minutos nas rotas de auth */
const authLimiter = rateLimit({
  windowMs: 0.1 * 60 * 1000, //Modificar quando subir o site
  max: 30, //Adicionar no maximo 15 tentativas
  message: { message: "Muitas tentativas. Tente novamente em 15 minutos." },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/register", authLimiter, register);
router.post("/login", authLimiter, login);
router.get("/me", authMiddleware, getMe);

module.exports = router;
