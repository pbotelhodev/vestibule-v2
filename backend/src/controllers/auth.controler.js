/* Chamamos o service */
const { registerStudent } = require("../services/auth.service");

/* Função que executa o service */
const register = async (req, res) => {
  try {
    /* Coloca a função numa variavel */
    const student = await registerStudent(req.body);

    /* Retorna os dados da requiscao */
    return res.status(201).json({
      message: "Aluno cadastrado com sucesso",
      student,
    });
    /* Se error */
  } catch (error) {
    if (error.message === "Este e-mail já está cadastrado") {
      return res.status(409).json({
        message: error.message,
      });
    } else {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

/* Exporta a função */
module.exports = { register };

/* 200 OK
Requisição deu certo.
Exemplo: buscar dados, login bem-sucedido.

201 Created
Algo foi criado com sucesso.
Exemplo: cadastro de usuário.

204 No Content
Deu certo, mas não retorna conteúdo.
Exemplo: deletar algo.

400 Bad Request
Erro nos dados enviados pelo cliente.
Exemplo: nome, e-mail ou senha faltando.

401 Unauthorized
Usuário não autenticado.
Exemplo: tentou acessar rota protegida sem token.

403 Forbidden
Usuário autenticado, mas sem permissão.
Exemplo: aluno tentando acessar área admin.

404 Not Found
Recurso não encontrado.
Exemplo: usuário inexistente.

409 Conflict
Conflito com algo que já existe.
Exemplo: e-mail já cadastrado.

422 Unprocessable Entity
Dados vieram no formato certo, mas não passam na validação.
Exemplo: e-mail inválido ou senha muito fraca.

500 Internal Server Error
Erro inesperado no servidor.
Exemplo: falha no banco ou bug não tratado. */
