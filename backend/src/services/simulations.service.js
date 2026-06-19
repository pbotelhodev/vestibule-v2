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

const correctResultSimulation = async (submission, publicId, studentId) => {
  const data = await dataBase.simulation.findUnique({
    where: { publicId },
    select: {
      id: true,
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
    const studentAnswers = submission.answers.find(
      (answer) => answer.questionId === q.id,
    ); //dentro da minha array ele seleciona a que possui o id identico a quastao atual do map
    const altSelect = q.alternatives.find(
      //Procura a alternativa que ele selecionou e suas informacoes
      (alt) => alt.id === studentAnswers.selectedAlternativeId,
    ); //exemplo: 8cbfedfc-30c1-4dc0-b57f-c19778eea23b
    const correctAlt = q.alternatives.find((a) => a.isCorrect === true); //Ele isola apenas a alternativa que está correta dentre as alternativas da questão atual "q"

    if (studentAnswers.selectedAlternativeId === correctAlt.id) {
      //analisa se a resposta do aluno === resposta correta da questao
      return {
        question: q.id, //id da questão
        order: q.order, //ordem da questão
        subject: q.subject, //Materia da questão
        topic: q.topic, //topico da questao
        statement: q.statement, //Unenciado da questao
        studentAnswer: altSelect.id, //Alternativa escolhida pelo usuario
        studentAnswerText: altSelect.text, //Puxa o texto da alternativa que o estudante escolheu
        textAlt: correctAlt.text, //puxa o texto da alternativa correta
        correctAlt: correctAlt.id, //
        correct: true, // devovle correto
        markedForReview: studentAnswers.markedForReview, //Verifica se está marcado pra revisão
      };
    } else {
      return {
        question: q.id, //id da questão
        order: q.order, //ordem da questão
        subject: q.subject, //Materia da questão
        topic: q.topic, //topico da questao
        statement: q.statement, //Unenciado da questao
        studentAnswer: altSelect.id, //Alternativa escolhida pelo usuario
        studentAnswerText: altSelect.text, //Puxa o texto da alternativa que o estudante escolheu
        textAlt: correctAlt.text, //puxa o texto da alternativa correta
        correctAlt: correctAlt.id, //
        correct: false, // devovle errado
        markedForReview: studentAnswers.markedForReview, //Verifica se está marcado pra revisão
      };
    }
  });

  const totalQuestions = correctedQuestions.length; //Verifica quantas questões tinha
  const correctAnswers = correctedQuestions.filter(
    (q) => q.correct === true,
  ).length; //Verifica quantas questões estáo certas
  const wrongAnswers = correctedQuestions.filter(
    (q) => q.correct === false,
  ).length; //Verifica quantas questões estão erradas
  const percentage = (correctAnswers / totalQuestions) * 100; //Verifica a porcentagemd e acerto
  const score = (correctAnswers / totalQuestions) * 1000; //Verifica o Score do simulado **Despois fazer um esquema estilo enem de cauculo
  const timePerQuestion = submission.timePerQuestion; //Tempo por questão definido anteriomente
  const timeSpentSeconds = submission.timeSpentSeconds; //Tempo que o aluno gastou
  const totalSimulationSeconds = totalQuestions * timePerQuestion; //Tempo total do simulado
  const f = submission.finishedAt;
  const finishedAt = new Date(f.year, f.month - 1, f.day, f.hour, f.minutes, 0);

  const resultSimulation = {
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    percentage,
    score,
    timePerQuestion,
    timeSpentSeconds,
    totalSimulationSeconds,
    finishedAt,
  };

  const upsertData = await dataBase.studentSimulationResult.upsert({
    where: { studentId_simulationId: { simulationId: data.id, studentId } },
    update: {
      publicId: data.publicId,
      title: data.title,
      subject: data.subject,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      percentage,
      score,
      timePerQuestion,
      timeSpentSeconds,
      totalSimulationSeconds,
      finishedAt,
    },
    create: {
      studentId,
      simulationId: data.id,
      publicId: data.publicId,
      title: data.title,
      subject: data.subject,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      percentage,
      score,
      timePerQuestion,
      timeSpentSeconds,
      totalSimulationSeconds,
      finishedAt,
    },
  });

  const deleteOldAnswers = await dataBase.studentSimulationAnswer.deleteMany({
    where: {resultId: upsertData.id}
  })

  const answersToCreate = correctedQuestions.map((item) => {
    return {
      resultId: upsertData.id,
      questionId: item.question,
      selectedAlternativeId: item.studentAnswer,
      correctAlternativeId: item.correctAlt,
      questionOrder: item.order,
      subject: item.subject,
      topic: item.topic,
      statement: item.statement,
      studentAnswerText: item.studentAnswerText,
      correctAnswerText: item.textAlt,
      isCorrect: item.correct,
      markedForReview: item.markedForReview,
    };
  });

  const createMany = await dataBase.studentSimulationAnswer.createMany({
    data: answersToCreate
  })


  console.log(answersToCreate.length);
  console.log(answersToCreate[0]);
  return { summary: upsertData, correction: correctedQuestions };
};

module.exports = {
  listPublishedSimulations,
  getSimulationByPublicId,
  correctResultSimulation,
};
