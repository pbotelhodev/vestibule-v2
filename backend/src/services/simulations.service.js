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

const correctResultSimulation = async (answers, publicId) => {
  const data = await dataBase.simulation.findUnique({
    where: { publicId },
    select: {
      publicId: true,
      title: true,
      subject: true,
      originCode: true,
      timePerQuestion: true,
      questions: {
        select: {
          id: true,
          statement: true,
          topic: true,
          subject: true,
          order: true,
          imageUrl: true,
          imageAlt: true,
          imageCaption: true,
          alternatives: {
            select: {
              id: true,
              order: true,
              text: true,
              isCorrect: true,
              imageUrl: true,
              imageAlt: true,
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

  if (!data) {
    throw new Error("Simulado não encontrado");
  }

  const correctedQuestions = data.questions.map((q) => {
    const studentAnswers = answers.find((answer) => answer.questionId === q.id);
    const correctAlt = q.alternatives.find((a) => a.isCorrect === true);
    if (studentAnswers.selectedAlternativeId === correctAlt.id) {
      return {
        question: q.id,
        studentAnswer: studentAnswers,
        correctAlt: correctAlt.id,
        statement: q.statement,
        textAlt: correctAlt.text,
        correct: true,
      };
    } else {
      return {
        question: q.id,
        studentAnswer: studentAnswers,
        correctAlt: correctAlt.id,
        statement: q.statement,
        textAlt: correctAlt.text,
        correct: false,
      };
    }
  });
  return correctedQuestions;
};

module.exports = {
  listPublishedSimulations,
  getSimulationByPublicId,
  correctResultSimulation,
};
