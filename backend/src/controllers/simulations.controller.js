/* Chamamos o service */
const {
  listPublishedSimulations,
  getSimulationByPublicId,
  correctResultSimulation,
} = require("../services/simulations.service");

/* Service da listagem de simulados */
const listSimulations = async (req, res) => {
  try {
    const simulations = await listPublishedSimulations();

    return res.status(200).json({
      simulations,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar simulados.",
    });
  }
};

const getSimulation = async (req, res) => {
  try {
    const { publicId } = req.params;

    const simulation = await getSimulationByPublicId(publicId);

    if (!simulation) {
      return res.status(404).json({
        message: "Simulado não encontrado.",
      });
    }
    return res.status(200).json({
      simulation,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar o simulado.",
    });
  }
};

const submitSimulationResult = async (req, res) => {
  try{
    const result = await correctResultSimulation(req.body.submission, req.params.publicId, req.body.studentId);

    return res.status(200).json({result})
  } catch(error){
    return res.status(500).json({
      message: `Erro ao corrigir o simulado: ${error}`
    });
  }
}

module.exports = {
  listSimulations,
  getSimulation,
  submitSimulationResult
};
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
