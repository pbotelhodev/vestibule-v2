// Importa a instância do Prisma Client para acessar o banco.
const db = require("../db/prisma");

// Função assíncrona responsável por consultar os livros disponíveis.
async function buscarLivrosDisponiveis() {
  // Executa uma consulta na tabela/modelo Book.
  const livros = await db.book.findMany({
    // Define as condições da consulta.
    where: {
      available: true, // Retorna apenas livros disponíveis.
    },
  });

  // Devolve os registros encontrados para quem chamou a função.
  return livros;
}

// Exporta a função para utilização em outras camadas.
module.exports = { buscarLivrosDisponiveis };
