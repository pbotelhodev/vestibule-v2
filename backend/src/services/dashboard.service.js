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
  const totalSimulations = studentResults.length;

  /* === Taxa média de acertos ===  */
  const txMediaAcerto = studentResults.map((sim) => sim.percentage);
  const totalMedia = txMediaAcerto.reduce((tot, act) => tot + act, 0);
  const averageHitRate = (totalMedia / txMediaAcerto.length).toFixed(0);

  /* === Tempo estudado */
  const allTimesSpents = studentResults.map((sim) => sim.timeSpentSeconds);
  const totalTimeSpent = allTimesSpents.reduce((tot, act) => tot + act, 0);
  const timeSpent = (seconds = 0) => {
    const totalSeconds = Number(seconds) || 0;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (hours === 0 && minutes === 0) {
      return "0min";
    }
    if (hours === 0) {
      return `${minutes}min`;
    }
    if (minutes === 0) {
      return `${hours}h`;
    }
    return `${hours}h ${minutes}min`;
  };

  const timeStudy = timeSpent(totalTimeSpent)

  const allData = {
    timeStudy,
  };

  return allData;
};

module.exports = {
  listStudentResults,
};
