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

  /* === Tempo estudado === */
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

  /* === Média de acerto por matéria === */

  // Dicionário para corrigir acentos e padronizar a escrita das 14 matérias
  const corrigirMaterias = {
    matematica: "Matemática",
    linguas: "Linguas",
    "ciencias_humanas": "Ciências Humanas",
    "ciencias_natureza": "Ciências da Natureza",
    historia: "História",
    geografia: "Geografia",
    filosofia: "Filosofia",
    sociologia: "Sociologia",
    biologia: "Biologia",
    quimica: "Química",
    fisica: "Física",
    literatura: "Literatura",
    artes: "Artes",
    redacao: "Redação",
  };

  const totalPorMateria = studentResults.reduce((acc, sim) => {
    if (!sim.subject || sim.percentage === undefined) return acc;

    // 1. Padroniza o termo do banco para minúsculo e sem espaços nas pontas
    const termoBanco = sim.subject.trim().toLowerCase();

    // 2. Procura no dicionário. Se achar, usa o nome acentuado.
    // Se não achar (Fallback), apenas deixa a primeira letra maiúscula.
    const subject =
      corrigirMaterias[termoBanco] ||
      termoBanco.charAt(0).toUpperCase() + termoBanco.slice(1);

    // Se for a primeira vez que a matéria aparece, cria a estrutura inicial
    if (!acc[subject]) {
      acc[subject] = { somaPorcentagem: 0, quantity: 0 };
    }

    // Soma a porcentagem atual e adiciona +1 na contagem
    acc[subject].somaPorcentagem += sim.percentage;
    acc[subject].quantity += 1;

    return acc;
  }, {});

  // Agora transformamos o objeto acima em um formato perfeito para o Frontend mapear
  const subjectsPerformance = Object.keys(totalPorMateria).map((subject) => {
    const dados = totalPorMateria[subject];
    const media = (dados.somaPorcentagem / dados.quantity).toFixed(0);

    return {
      name: subject,
      percent: Number(media),
      totalSimulations: dados.quantity,
    };
  });

  /* ===== Retorno para o frontend ====== */
  const allData = {
    totalSimulations,
    averageHitRate: Number(averageHitRate),
    timeStudy,
    allSimulations,
    trending: { projection, tendence },
    subjectsPerformance,
  };

  return allData;
};

module.exports = {
  listStudentResults,
};
