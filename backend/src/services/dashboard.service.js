const dataBase = require("../db/prisma");

const listStudentResults = async (studentId) => {
  const studentResults = await dataBase.studentSimulationResult.findMany({
    where: {
      studentId,
    },
    select: {
      id: true,
      correctAnswers: true,
      createdAt: true,
      finishedAt: true,
      percentage: true,
      publicId: true,
      score: true,
      simulationId: true,
      studentId: true,
      subject: true,
      timePerQuestion: true,
      timeSpentSeconds: true,
      title: true,
      totalQuestions: true,
      updatedAt: true,
      wrongAnswers: true,
    },
    orderBy: { finishedAt: "desc" },
  });

  /* === Total de simulados === */
  const totalSimulations = studentResults?.length ?? 0;

  /* === Taxa média de acertos ===  */
  const txMediaAcerto = studentResults?.map((sim) => sim.percentage) ?? [];
  const totalMedia = txMediaAcerto.reduce((tot, act) => tot + act, 0);
  const averageHitRate =
    txMediaAcerto.length > 0
      ? (totalMedia / txMediaAcerto.length).toFixed(0)
      : 0;

  /* === Tempo estudado */
  const allTimesSpents =
    studentResults?.map((sim) => sim.timeSpentSeconds) ?? [];
  const totalTimeSpent = allTimesSpents.reduce((tot, act) => tot + act, 0);
  const timeSpent = (seconds = 0) => {
    const totalSeconds = Number(seconds) || 0;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (hours === 0 && minutes === 0) {
      return "0 min";
    }
    if (hours === 0) {
      return `${minutes} min`;
    }
    if (minutes === 0) {
      return `${hours}h`;
    }
    return `${hours}h ${minutes} min`;
  };
  const timeStudy = timeSpent(totalTimeSpent);

  /*  === Função que pega o plano do estudante  */
  /* Função para saber qual plano o usuário está */
  const planStudent = await dataBase.user.findFirst({
    where: {
      id: studentId,
    },
    select: { activePlan: true },
  });
  const verifyPlan = (plan) => {
    if (plan === "FREE") {
      return ["FREE"];
    } else if (plan === "PRO") {
      return ["FREE", "PRO"];
    } else {
      return ["FREE", "PRO", "PREMIUM"];
    }
  };
  const allSimulations = await dataBase.simulation.findMany({
    where: {
      requiredPlan: {
        in: verifyPlan(planStudent?.activePlan ?? "FREE"),
      },
    },
    take: 6,
    select: {
      title: true,
      description: true,
      requiredPlan: true,
      publicId: true,
      subject: true
    },
  });

  /* Retorno para o frontend */
  const allData = {
    totalSimulations,
    averageHitRate,
    timeStudy,
    allSimulations,
  };

  return allData;
};

module.exports = {
  listStudentResults,
};
