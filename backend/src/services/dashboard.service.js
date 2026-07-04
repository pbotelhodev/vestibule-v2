const dataBase = require("../db/prisma");

const subjectLabels = {
  matematica: "Matemática",
  linguas: "Linguagens",
  portugues: "Português",
  literatura: "Literatura",
  ingles: "Inglês",
  espanhol: "Espanhol",
  artes: "Artes",
  historia: "História",
  geografia: "Geografia",
  filosofia: "Filosofia",
  sociologia: "Sociologia",
  biologia: "Biologia",
  quimica: "Química",
  fisica: "Física",
  redacao: "Redação",
  "ciencias-humanas": "Ciências Humanas",
  ciencias_humanas: "Ciências Humanas",
  "ciencias-natureza": "Ciências da Natureza",
  ciencias_natureza: "Ciências da Natureza",
  geral: "Geral",
};

const formatSubject = (subject) => {
  if (!subject) return "Geral";

  const normalized = String(subject).trim().toLowerCase();

  return (
    subjectLabels[normalized] ||
    normalized.charAt(0).toUpperCase() + normalized.slice(1)
  );
};

const formatTimeSpent = (seconds = 0) => {
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

const getAllowedPlans = (plan) => {
  const currentPlan = String(plan || "FREE").toUpperCase();

  if (currentPlan === "FREE") {
    return ["FREE"];
  }

  if (currentPlan === "PRO") {
    return ["FREE", "PRO"];
  }

  return ["FREE", "PRO", "PREMIUM"];
};

const getDayKey = (date) => {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getStudyConsistency = (
  studentResults,
  periodDays = 7,
  now = new Date(),
) => {
  const endDate = new Date(now);
  endDate.setHours(23, 59, 59, 999);

  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - (periodDays - 1));
  startDate.setHours(0, 0, 0, 0);

  const activeDays = new Set();

  studentResults.forEach((simulation) => {
    if (!simulation.finishedAt) return;

    const finishedAt = new Date(simulation.finishedAt);

    if (finishedAt < startDate || finishedAt > endDate) return;

    activeDays.add(getDayKey(finishedAt));
  });

  const activeDaysCount = activeDays.size;
  const percent = Math.round((activeDaysCount / periodDays) * 100);

  let label = "Sem atividade recente";

  if (activeDaysCount >= 1 && activeDaysCount <= 2) {
    label = "Baixa consistência";
  }

  if (activeDaysCount >= 3 && activeDaysCount <= 4) {
    label = "Consistência moderada";
  }

  if (activeDaysCount >= 5 && activeDaysCount <= 6) {
    label = "Boa consistência";
  }

  if (activeDaysCount >= 7) {
    label = "Excelente consistência";
  }

  return {
    activeDays: activeDaysCount,
    periodDays,
    percent,
    label,
    description:
      activeDaysCount === 0
        ? `Você ainda não finalizou simulados nos últimos ${periodDays} dias.`
        : `Você estudou em ${activeDaysCount} dos últimos ${periodDays} dias.`,
  };
};

const getRanking = async (studentId) => {
  const allResults = await dataBase.studentSimulationResult.findMany({
    select: {
      studentId: true,
      percentage: true,
    },
  });

  if (!allResults.length) {
    return {
      position: null,
      totalStudents: 0,
      label: "Em breve",
      description: "Ainda não há dados suficientes para calcular o ranking.",
      percent: 0,
    };
  }

  const studentsMap = allResults.reduce((acc, result) => {
    if (!result.studentId) return acc;

    if (!acc[result.studentId]) {
      acc[result.studentId] = {
        studentId: result.studentId,
        totalPercentage: 0,
        totalResults: 0,
      };
    }

    acc[result.studentId].totalPercentage += Number(result.percentage) || 0;
    acc[result.studentId].totalResults += 1;

    return acc;
  }, {});

  const rankingList = Object.values(studentsMap)
    .map((student) => {
      const average =
        student.totalResults > 0
          ? student.totalPercentage / student.totalResults
          : 0;

      return {
        studentId: student.studentId,
        average,
        totalResults: student.totalResults,
      };
    })
    .sort((a, b) => {
      if (b.average !== a.average) {
        return b.average - a.average;
      }

      return b.totalResults - a.totalResults;
    });

  const studentIndex = rankingList.findIndex(
    (student) => student.studentId === studentId,
  );

  if (studentIndex === -1) {
    return {
      position: null,
      totalStudents: rankingList.length,
      label: "Sem posição",
      description: "Finalize simulados para entrar no ranking.",
      percent: 0,
    };
  }

  const position = studentIndex + 1;
  const totalStudents = rankingList.length;

  const topPercent = Math.ceil((position / totalStudents) * 100);

  const progressPercent =
    totalStudents > 1
      ? Math.round(((totalStudents - position + 1) / totalStudents) * 100)
      : 100;

  return {
    position,
    totalStudents,
    label: `Top ${topPercent}%`,
    description: `Você está na posição ${position} de ${totalStudents} alunos com resultados registrados.`,
    percent: progressPercent,
  };
};

const listStudentResults = async (studentId) => {
  const now = new Date();

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
    orderBy: {
      finishedAt: "desc",
    },
  });

  /* === Total de simulados nos últimos 30 dias === */
  const monthLast = new Date(now);
  monthLast.setMonth(monthLast.getMonth() - 1);

  const totalSimulations = studentResults.filter((simulation) => {
    if (!simulation.finishedAt) return false;

    const finishedAt = new Date(simulation.finishedAt);

    return finishedAt >= monthLast && finishedAt <= now;
  }).length;

  /* === Taxa média de acertos === */
  const percentages = studentResults.map((simulation) => {
    return Number(simulation.percentage) || 0;
  });

  const totalPercentage = percentages.reduce((total, current) => {
    return total + current;
  }, 0);

  const averageHitRate =
    percentages.length > 0
      ? Number((totalPercentage / percentages.length).toFixed(0))
      : 0;

  /* === Tempo estudado nos últimos 7 dias === */
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  const timesSpentLastSevenDays = studentResults
    .filter((simulation) => {
      if (!simulation.finishedAt) return false;

      const finishedAt = new Date(simulation.finishedAt);

      return finishedAt >= sevenDaysAgo && finishedAt <= now;
    })
    .map((simulation) => Number(simulation.timeSpentSeconds) || 0);

  const totalTimeSpent = timesSpentLastSevenDays.reduce((total, current) => {
    return total + current;
  }, 0);

  const timeStudy = formatTimeSpent(totalTimeSpent);

  /* === Consistência de estudo nos últimos 7 dias === */
  const studyConsistency = getStudyConsistency(studentResults, 7, now);

  /* === Plano do estudante === */
  const planStudent = await dataBase.user.findFirst({
    where: {
      id: studentId,
    },
    select: {
      activePlan: true,
    },
  });

  const allowedPlans = getAllowedPlans(planStudent?.activePlan);

  /* === Simulados disponíveis para o plano === */
  const allSimulations = await dataBase.simulation.findMany({
    where: {
      isPublished: true,
      requiredPlan: {
        in: allowedPlans,
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
    orderBy: {
      createdAt: "desc",
    },
  });

  /* === Projeção mês a mês === */
  const initCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const initLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  const simulationsMonthCurrent = studentResults.filter((simulation) => {
    if (!simulation.finishedAt) return false;

    const finishedAt = new Date(simulation.finishedAt);

    return finishedAt >= initCurrentMonth && finishedAt <= now;
  });

  const sumCurrentMonth = simulationsMonthCurrent.reduce(
    (total, simulation) => total + (Number(simulation.percentage) || 0),
    0,
  );

  const mediaCurrentMonth =
    simulationsMonthCurrent.length > 0
      ? sumCurrentMonth / simulationsMonthCurrent.length
      : 0;

  const simulationsLastMonth = studentResults.filter((simulation) => {
    if (!simulation.finishedAt) return false;

    const finishedAt = new Date(simulation.finishedAt);

    return finishedAt >= initLastMonth && finishedAt < initCurrentMonth;
  });

  const sumLastMonth = simulationsLastMonth.reduce(
    (total, simulation) => total + (Number(simulation.percentage) || 0),
    0,
  );

  const mediaLastMonth =
    simulationsLastMonth.length > 0
      ? sumLastMonth / simulationsLastMonth.length
      : 0;

  const mediaEvolution = Number(
    (mediaCurrentMonth - mediaLastMonth).toFixed(0),
  );

  const projection =
    mediaEvolution >= 0 ? `+${mediaEvolution}%` : `${mediaEvolution}%`;

  const tendence = mediaEvolution >= 0 ? "+" : "-";

  /* === Média de acerto por matéria === */
  const totalPorMateria = studentResults.reduce((acc, simulation) => {
    if (!simulation.subject) return acc;

    const percentage = Number(simulation.percentage) || 0;
    const subject = formatSubject(simulation.subject);

    if (!acc[subject]) {
      acc[subject] = {
        somaPorcentagem: 0,
        quantity: 0,
      };
    }

    acc[subject].somaPorcentagem += percentage;
    acc[subject].quantity += 1;

    return acc;
  }, {});

  const subjectsPerformance = Object.keys(totalPorMateria).map((subject) => {
    const subjectData = totalPorMateria[subject];

    const media =
      subjectData.quantity > 0
        ? subjectData.somaPorcentagem / subjectData.quantity
        : 0;

    return {
      name: subject,
      percent: Number(media.toFixed(0)),
      totalSimulations: subjectData.quantity,
    };
  });

  /* === Ranking geral === */
  const ranking = await getRanking(studentId);

  /* === Retorno para o frontend === */
  const allData = {
    totalSimulations,
    averageHitRate,
    timeStudy,
    allSimulations,
    trending: {
      projection,
      tendence,
      currentMonthAverage: Number(mediaCurrentMonth.toFixed(0)),
      lastMonthAverage: Number(mediaLastMonth.toFixed(0)),
      evolution: mediaEvolution,
    },
    subjectsPerformance,
    studyConsistency,
    ranking,
  };

  return allData;
};

module.exports = {
  listStudentResults,
};
