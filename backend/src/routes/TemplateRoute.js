// Importa o framework Express.
const express = require("express");

// Cria um roteador para organizar endpoints relacionados.
const router = express.Router();

// Importa o Controller responsável pela listagem de livros.
const { listarLivros } = require("../controllers/bookController");

// Registra uma rota GET no caminho "/".
// Quando acessada, o Express executa listarLivros.
// Passamos a referência da função, sem parênteses.
router.get("/", listarLivros);

// Exporta o roteador para registrá-lo no app.js.
module.exports = router;

/*
 * PRINCIPAIS MÉTODOS HTTP
 *
 * GET     - Consultar ou recuperar recursos.
 * POST    - Enviar dados para processamento ou criar recursos.
 * PUT     - Substituir a representação de um recurso.
 * PATCH   - Atualizar parcialmente um recurso.
 * DELETE  - Remover um recurso.
 * HEAD    - Consultar somente os cabeçalhos da resposta.
 * OPTIONS - Consultar opções de comunicação e métodos permitidos.
 *
 * OUTROS MÉTODOS HTTP
 *
 * CONNECT - Estabelecer um túnel de comunicação.
 * TRACE   - Diagnosticar o caminho de uma requisição.
 *
 * Os métodos HTTP representam intenções.
 * As ações efetivas dependem da implementação do backend.
 */

// Registra uma rota GET no caminho "/".
// Quando acessada, o Express executa listarLivros.
// Passamos a referência da função, sem parênteses.