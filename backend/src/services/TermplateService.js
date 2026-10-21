const db = require("../db/prisma");

async function buscarLivrosDisponiveis() {
  const livros = await db.book.findMany({
    where: {
      available: true,
    },
  });

  return livros;
}

module.exports = { buscarLivrosDisponiveis };
