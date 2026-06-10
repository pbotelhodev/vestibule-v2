/* Busca o banco de dados */
const dataBase = require("../db/prisma");

/* Função de leitura do banco de simulados  */
const listPublishedSimulations = async () => {
  return await dataBase.simulation.findMany({
    where: {
      isPublished: true,
    },
    select: {
      publicId: true,
      title: true,
      description: true,
      subject: true,
      originCode: true,
      requiredPlan: true,
      timePerQuestion: true,
      questions: true,
      isPublished: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/* Função de leitura do simulado pelo publicId */
const getSimulationByPublicId = async (publicId) => {
  return await dataBase.simulation.findFirst({
    where: {
      publicId,
      isPublished: true,
    },
    select: {
      publicId: true,
      title: true,
      description: true,
      subject: true,
      originCode: true,
      requiredPlan: true,
      timePerQuestion: true,

      questions: {
        select: {
          id: true,
          statement: true,
          imageUrl: true,
          imageAlt: true,
          imageCaption: true,
          subject: true,
          topic: true,
          order: true,

          alternatives: {
            select: {
              id: true,
              text: true,
              imageUrl: true,
              imageAlt: true,
              order: true,
            },
            orderBy: {
              order: "asc",
            },
          },
        },
        orderBy: {
          order: "asc",
        },
      },
    },
  });
};

module.exports = {
  listPublishedSimulations,
  getSimulationByPublicId,
};
