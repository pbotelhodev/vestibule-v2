/* Chamamos o service */
const {
  registerStudent,
  loginStudent,
  getMe: getMeService,
} = require("../services/auth.service");

/* Função que executa o service de cadastro */
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

/* Função que executa o service de login */
const login = async (req, res) => {
  try {
    const result = await loginStudent(req.body);

    return res.status(200).json({
      message: "Usuário autenticado com sucesso",
      student: result.student,
      token: result.token,
    });
  } catch (error) {
    if (
      error.message === "E-mail é obrigatório" ||
      error.message === "Senha é obrigatória"
    ) {
      return res.status(400).json({
        message: error.message,
      });
    }

    if (error.message === "Credenciais inválidas") {
      return res.status(401).json({
        message: error.message,
      });
    }

    if (error.message === "Conta inativa") {
      return res.status(403).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
};

/* Função que executa o service de token */
const getMe = async (req, res) => {
  try {
    const user = await getMeService(req.user.id);

    return res.status(200).json({
      user,
    });
  } catch (error) {
    if (error.message === "Usuário não encontrado") {
      return res.status(404).json({
        message: error.message,
      });
    }

    if (error.message === "Conta inativa") {
      return res.status(403).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
};

/* Exporta a função */
module.exports = { register, login, getMe };

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
