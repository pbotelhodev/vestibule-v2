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
  const monthLast = new Date();
  monthLast.setMonth(monthLast.getMonth() - 1);
  const totalSimulations =
    studentResults.filter((sim) => {
      if (!sim.finishedAt) return false;

      const dataFinished = new Date(sim.finishedAt);

      return dataFinished >= monthLast && dataFinished <= new Date();
    }).length ?? 0;

  /* === Taxa média de acertos ===  */
  const txMediaAcerto = studentResults?.map((sim) => sim.percentage) ?? [];
  const totalMedia = txMediaAcerto.reduce((tot, act) => tot + act, 0);
  const averageHitRate =
    txMediaAcerto.length > 0
      ? (totalMedia / txMediaAcerto.length).toFixed(0)
      : 0;

  /* === Tempo estudado */
  const sevenDays = new Date();
  sevenDays.setDate(sevenDays.getDate() - 7);

  const allTimesSpents =
    studentResults
      ?.filter((sim) => {
        if (!sim.finishedAt) return false; // Adicionado escudo aqui também por segurança
        const dataFinished = new Date(sim.finishedAt);
        return dataFinished >= sevenDays && dataFinished <= new Date();
      })
      .map((sim) => sim.timeSpentSeconds) ?? [];
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
      subject: true,
    },
  });

  /*  === Projeção mês a mês === */
  const currentData = new Date();
  // CORRIGIDO: Alterado de 'agora' para 'currentData'
  const initCurrentMonth = new Date(
    currentData.getFullYear(),
    currentData.getMonth(),
    1,
  );
  const initLastMonth = new Date(
    currentData.getFullYear(),
    currentData.getMonth() - 1,
    1,
  );

  // Filtra e calcula a média do mês atual
  const simulationsMonthCurrent = studentResults.filter((sim) => {
    if (!sim.finishedAt) return false;
    const data = new Date(sim.finishedAt); // CORRIGIDO: 'Data' para 'Date'
    return data >= initCurrentMonth && data <= currentData;
  });

  const sumCurrentMonth = simulationsMonthCurrent.reduce(
    (tot, sim) => tot + sim.percentage,
    0,
  );
  // CORRIGIDO: Validando tamanho da lista correta e dividindo pelas variáveis certas
  const mediaCurrentMonth =
    simulationsMonthCurrent.length > 0
      ? sumCurrentMonth / simulationsMonthCurrent.length
      : 0;

  // Filtra e calcula a média do mês passado
  const simulationsLastMonth = studentResults.filter((sim) => {
    if (!sim.finishedAt) return false;
    const data = new Date(sim.finishedAt);
    return data >= initLastMonth && data < initCurrentMonth;
  });

  const sumLastMonth = simulationsLastMonth.reduce(
    (tot, sim) => tot + sim.percentage,
    0,
  );
  // CORRIGIDO: Dividindo pelo tamanho da lista correta de simulados
  const mediaLastMonth =
    simulationsLastMonth.length > 0
      ? sumLastMonth / simulationsLastMonth.length
      : 0;

  const mediaEvolution = Number(
    (mediaCurrentMonth - mediaLastMonth).toFixed(0),
  );

  // CORRIGIDO: Se for negativo ele já vem com o sinal de menos nativo (-5), então não colocamos o '-' na string
  const projection =
    mediaEvolution >= 0 ? `+${mediaEvolution}%` : `${mediaEvolution}%`;
  const tendence = mediaEvolution >= 0 ? `+` : `-`;

  /* ===== Retorno para o frontend ====== */
  const allData = {
    totalSimulations,
    averageHitRate,
    timeStudy,
    allSimulations,
    trending: { projection, tendence },
  };

  return allData;
};

module.exports = {
  listStudentResults,
};
