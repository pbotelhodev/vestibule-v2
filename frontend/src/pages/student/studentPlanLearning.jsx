import {
  BarChart3,
  BookOpenCheck,
  Brain,
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock3,
  Crown,
  Flame,
  Lock,
  RotateCcw,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { getStudentResults } from "../../services/dashboard/callDashboard";

import {
  fallbackSubjects,
  planRank,
  planThemes,
} from "../../services/performace/servicesPerformace";

const PREMIUM_GRADIENT_ID = "study-plan-premium-gradient";
const premiumIconStroke = `url(#${PREMIUM_GRADIENT_ID})`;

// eslint-disable-next-line no-unused-vars
const StudyPlanIconBox = ({ Icon, theme }) => {
  return (
    <div
      className={[
        "grid size-11 shrink-0 place-items-center rounded-2xl border shadow-sm shadow-slate-950/5",
        theme.iconBox,
      ].join(" ")}
    >
      <Icon
        className="size-5"
        stroke={theme.gradient ? premiumIconStroke : "currentColor"}
      />
    </div>
  );
};

const priorityThemeByLevel = {
  critical: {
    label: "Prioridade crítica",
    badge: "bg-red-50 text-red-700",
    bar: "bg-red-500",
    border: "border-red-100",
    bg: "bg-red-50/60",
  },
  high: {
    label: "Prioridade alta",
    badge: "bg-orange-50 text-orange-700",
    bar: "bg-orange-500",
    border: "border-orange-100",
    bg: "bg-orange-50/60",
  },
  medium: {
    label: "Prioridade média",
    badge: "bg-yellow-50 text-yellow-700",
    bar: "bg-yellow-500",
    border: "border-yellow-100",
    bg: "bg-yellow-50/60",
  },
  maintenance: {
    label: "Manutenção",
    badge: "bg-blue-50 text-blue-700",
    bar: "bg-blue-600",
    border: "border-blue-100",
    bg: "bg-blue-50/60",
  },
};

const getPriorityLevel = (percent) => {
  if (percent < 40) return "critical";
  if (percent < 60) return "high";
  if (percent < 75) return "medium";

  return "maintenance";
};

const getPriorityByPercent = (percent) => {
  const level = getPriorityLevel(percent);
  return priorityThemeByLevel[level];
};

const getStudyLoadByPercent = (percent) => {
  if (percent < 40) {
    return {
      minutes: 70,
      questions: 25,
      sessions: 4,
      label: "Carga forte",
    };
  }

  if (percent < 60) {
    return {
      minutes: 55,
      questions: 20,
      sessions: 3,
      label: "Carga alta",
    };
  }

  if (percent < 75) {
    return {
      minutes: 40,
      questions: 15,
      sessions: 2,
      label: "Carga média",
    };
  }

  return {
    minutes: 25,
    questions: 8,
    sessions: 1,
    label: "Manutenção leve",
  };
};

const StudentStudyPlan = () => {
  const { student } = useOutletContext();

  const [dataSimulations, setDataSimulations] = useState(null);
  const [checkedTasks, setCheckedTasks] = useState({});

  const currentPlan = student?.planActive?.toLowerCase() || "free";
  const theme = planThemes[currentPlan] ?? planThemes.free;
  const rank = planRank[currentPlan] ?? planRank.free;

  const hasPremiumAccess = rank >= planRank.premium;
  const studentId = student?.id;

  const averageHitRate = Number(dataSimulations?.averageHitRate);
  const hasAverageHitRate =
    dataSimulations?.averageHitRate !== null &&
    dataSimulations?.averageHitRate !== undefined &&
    Number.isFinite(averageHitRate);

  const safeAverageHitRate = hasAverageHitRate ? averageHitRate : 0;

  const targetScore = Number(student?.targetScore) || 900;
  const estimatedScore = hasAverageHitRate
    ? Math.round(safeAverageHitRate * 10)
    : 0;

  const subjectsPerformance = useMemo(() => {
    if (Array.isArray(dataSimulations?.subjectsPerformance)) {
      return dataSimulations.subjectsPerformance;
    }

    return [];
  }, [dataSimulations]);

  const subjectsBase = useMemo(() => {
    if (subjectsPerformance.length > 0) {
      return subjectsPerformance;
    }

    return fallbackSubjects;
  }, [subjectsPerformance]);

  const normalizedSubjects = useMemo(() => {
    return subjectsBase.map((subject) => {
      const percent = Math.min(Math.max(Number(subject.percent) || 0, 0), 100);

      return {
        name: subject.name || "Matéria",
        percent,
        totalSimulations: Number(subject.totalSimulations) || 0,
        priority: getPriorityByPercent(percent),
        load: getStudyLoadByPercent(percent),
      };
    });
  }, [subjectsBase]);

  const sortedSubjects = useMemo(() => {
    return [...normalizedSubjects].sort((a, b) => a.percent - b.percent);
  }, [normalizedSubjects]);

  const worstSubject = sortedSubjects[0] || null;
  const secondWorstSubject = sortedSubjects[1] || worstSubject;
  const thirdWorstSubject = sortedSubjects[2] || secondWorstSubject;
  const bestSubject = sortedSubjects[sortedSubjects.length - 1] || null;

  const prioritySubjects = sortedSubjects.slice(0, 4);

  const weeklyPlan = useMemo(() => {
    const main = worstSubject;
    const secondary = secondWorstSubject;
    const third = thirdWorstSubject;
    const best = bestSubject;

    const fallbackMain = {
      name: "Diagnóstico inicial",
      percent: 0,
      priority: priorityThemeByLevel.high,
      load: {
        minutes: 45,
        questions: 15,
        sessions: 2,
        label: "Carga inicial",
      },
    };

    const safeMain = main || fallbackMain;
    const safeSecondary = secondary || safeMain;
    const safeThird = third || safeSecondary;
    const safeBest = best || safeMain;

    return [
      {
        id: "day-1",
        day: "Segunda",
        subject: safeMain.name,
        type: "Revisão principal",
        title: `Revisar base de ${safeMain.name}`,
        description:
          "Comece pela matéria que mais reduz sua média. Foque em teoria curta, exemplos e erros recentes.",
        minutes: safeMain.load.minutes,
        questions: safeMain.load.questions,
        Icon: Flame,
        priority: safeMain.priority,
        tasks: [
          `Revisar resumo de ${safeMain.name}`,
          `Resolver ${safeMain.load.questions} questões`,
          "Anotar os erros mais repetidos",
        ],
      },
      {
        id: "day-2",
        day: "Terça",
        subject: safeSecondary.name,
        type: "Questões direcionadas",
        title: `Treino guiado de ${safeSecondary.name}`,
        description:
          "Use esse dia para transformar revisão em prática. O foco é ganhar segurança por repetição.",
        minutes: safeSecondary.load.minutes,
        questions: safeSecondary.load.questions,
        Icon: Target,
        priority: safeSecondary.priority,
        tasks: [
          `Resolver questões de ${safeSecondary.name}`,
          "Separar questões erradas",
          "Revisar a explicação das alternativas",
        ],
      },
      {
        id: "day-3",
        day: "Quarta",
        subject: safeMain.name,
        type: "Correção de erros",
        title: `Corrigir falhas em ${safeMain.name}`,
        description:
          "Volte nos erros do início da semana. O objetivo é não repetir o mesmo padrão no próximo simulado.",
        minutes: 40,
        questions: Math.max(Math.round(safeMain.load.questions / 2), 8),
        Icon: RotateCcw,
        priority: safeMain.priority,
        tasks: [
          "Refazer questões erradas",
          "Identificar o motivo do erro",
          "Criar uma regra curta de correção",
        ],
      },
      {
        id: "day-4",
        day: "Quinta",
        subject: safeThird.name,
        type: "Revisão média",
        title: `Fortalecer ${safeThird.name}`,
        description:
          "Trabalhe uma matéria intermediária para não deixar a evolução depender só do pior ponto.",
        minutes: safeThird.load.minutes,
        questions: safeThird.load.questions,
        Icon: Brain,
        priority: safeThird.priority,
        tasks: [
          `Revisar pontos centrais de ${safeThird.name}`,
          `Fazer ${safeThird.load.questions} questões`,
          "Marcar assuntos que ainda geram dúvida",
        ],
      },
      {
        id: "day-5",
        day: "Sexta",
        subject: safeBest.name,
        type: "Manutenção",
        title: `Manter desempenho em ${safeBest.name}`,
        description:
          "Sua melhor matéria não pode ser abandonada. Faça manutenção leve para preservar consistência.",
        minutes: Math.min(safeBest.load.minutes, 30),
        questions: Math.min(safeBest.load.questions, 10),
        Icon: CheckCircle2,
        priority: priorityThemeByLevel.maintenance,
        tasks: [
          `Revisão rápida de ${safeBest.name}`,
          "Resolver questões de manutenção",
          "Anotar apenas dúvidas novas",
        ],
      },
      {
        id: "day-6",
        day: "Sábado",
        subject: "Simulado curto",
        type: "Teste semanal",
        title: "Simulado curto direcionado",
        description:
          "Faça um bloco curto misturando prioridade principal e matéria intermediária.",
        minutes: 60,
        questions: 25,
        Icon: Timer,
        priority: priorityThemeByLevel.high,
        tasks: [
          `Fazer bloco com ${safeMain.name}`,
          `Adicionar questões de ${safeSecondary.name}`,
          "Corrigir logo após finalizar",
        ],
      },
      {
        id: "day-7",
        day: "Domingo",
        subject: "Organização",
        type: "Fechamento",
        title: "Revisão leve e planejamento",
        description:
          "Feche a semana olhando erros, avanços e o que precisa entrar no próximo ciclo.",
        minutes: 25,
        questions: 0,
        Icon: CalendarDays,
        priority: priorityThemeByLevel.maintenance,
        tasks: [
          "Revisar anotações da semana",
          "Separar dúvidas pendentes",
          "Preparar foco da próxima semana",
        ],
      },
    ];
  }, [worstSubject, secondWorstSubject, thirdWorstSubject, bestSubject]);

  const totalTasks = weeklyPlan.reduce((sum, day) => {
    return sum + day.tasks.length;
  }, 0);

  const completedTasks = Object.values(checkedTasks).filter(Boolean).length;

  const completedPercent =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const strategyText =
    worstSubject?.name && bestSubject?.name
      ? `Seu plano prioriza ${worstSubject.name}, mantém ${bestSubject.name} em revisão leve e distribui treinos curtos durante a semana.`
      : "Complete mais simulados para o plano ficar mais preciso com base no seu desempenho real.";

  const toggleTask = (taskId) => {
    setCheckedTasks((current) => {
      return {
        ...current,
        [taskId]: !current[taskId],
      };
    });
  };

  useEffect(() => {
    if (!studentId) return;

    const loadStudentResults = async () => {
      try {
        const response = await getStudentResults(studentId);
        setDataSimulations(response);
      } catch (err) {
        console.error(err);
      }
    };

    loadStudentResults();
  }, [studentId]);

  return (
    <section className="relative mx-auto flex w-full max-w-450 flex-col gap-4 px-3 py-3 sm:px-5 sm:py-4 lg:px-6 xl:gap-5 xl:px-6 xl:py-5 2xl:px-8 2xl:py-7 min-[2200px]:max-w-495 min-[2200px]:px-10">
      {theme.gradient && (
        <svg
          aria-hidden="true"
          focusable="false"
          className="pointer-events-none absolute size-0"
        >
          <defs>
            <linearGradient
              id={PREMIUM_GRADIENT_ID}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#6b21a8" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {!hasPremiumAccess ? (
        <section className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-400">
                <Lock className="size-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Recurso Premium
                </p>

                <h1 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
                  Plano de estudos inteligente
                </h1>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                  No Premium, o Vestibule transforma seu desempenho em uma
                  agenda semanal com prioridades, tarefas e revisão guiada por
                  matéria.
                </p>
              </div>
            </div>

            <button
              type="button"
              className={[
                "inline-flex w-full cursor-pointer items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 sm:w-auto",
                theme.gradient ? theme.button : "bg-blue-950 hover:bg-blue-900",
              ].join(" ")}
            >
              Conhecer Premium
            </button>
          </div>
        </section>
      ) : (
        <>
          {/* Hero */}
          <section className="overflow-hidden rounded-[1.75rem] border border-purple-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_24rem] 2xl:grid-cols-[minmax(0,1fr)_28rem]">
              <div>
                <div className="flex items-center gap-3">
                  <StudyPlanIconBox Icon={BookOpenCheck} theme={theme} />

                  <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
                    Plano Premium
                  </span>
                </div>

                <h1 className="mt-5 max-w-4xl text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl xl:text-4xl">
                  Plano de estudos da semana
                </h1>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                  {strategyText}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-2 text-xs font-bold text-purple-700">
                    <Sparkles className="size-4" />
                    Gerado pelo desempenho
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    <Target className="size-4" />
                    Meta {targetScore} pts
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
                    <BarChart3 className="size-4" />
                    Média {safeAverageHitRate}%
                  </span>
                </div>
              </div>

              <aside className="rounded-3xl border border-blue-950 bg-blue-950 p-5 text-white shadow-sm sm:rounded-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  Progresso semanal
                </p>

                <strong className="mt-3 block text-5xl font-bold tracking-tight">
                  {completedPercent}%
                </strong>

                <p className="mt-1 text-sm font-semibold text-white/60">
                  {completedTasks} de {totalTasks} tarefas concluídas
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={[
                      "h-full rounded-full",
                      theme.gradient ? theme.progress : "bg-white",
                    ].join(" ")}
                    style={{ width: `${completedPercent}%` }}
                  />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-xs font-bold text-white/45">Projeção</p>
                    <p className="mt-1 text-lg font-bold">
                      {estimatedScore} pts
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-3">
                    <p className="text-xs font-bold text-white/45">Diferença</p>
                    <p className="mt-1 text-lg font-bold">
                      {Math.max(targetScore - estimatedScore, 0)}
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* Prioridades */}
          <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem] 2xl:grid-cols-[minmax(0,1fr)_28rem]">
            <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-blue-950 2xl:text-2xl">
                    Prioridade por matéria
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    O plano dá mais peso para as matérias com menor acerto.
                  </p>
                </div>

                <StudyPlanIconBox Icon={TrendingUp} theme={theme} />
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {prioritySubjects.map((subject) => (
                  <article
                    key={subject.name}
                    className={[
                      "rounded-3xl border p-4",
                      subject.priority.border,
                      subject.priority.bg,
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-blue-950">
                          {subject.name}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {subject.load.label} · {subject.load.sessions}x na
                          semana
                        </p>
                      </div>

                      <span
                        className={[
                          "shrink-0 rounded-full px-3 py-1 text-[10px] font-bold",
                          subject.priority.badge,
                        ].join(" ")}
                      >
                        {subject.priority.label}
                      </span>
                    </div>

                    <div className="mt-4 flex items-end justify-between gap-3">
                      <strong className="text-2xl font-bold text-blue-950">
                        {subject.percent}%
                      </strong>

                      <span className="text-xs font-bold text-slate-400">
                        {subject.load.questions} questões
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/80">
                      <div
                        className={[
                          "h-full rounded-full",
                          subject.priority.bar,
                        ].join(" ")}
                        style={{ width: `${subject.percent}%` }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <aside className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
              <StudyPlanIconBox Icon={Crown} theme={theme} />

              <h2 className="mt-5 text-xl font-bold text-blue-950">
                Estratégia da semana
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {worstSubject?.name
                  ? `O foco principal é reduzir perdas em ${worstSubject.name}. As outras matérias entram como apoio para manter ritmo e consistência.`
                  : "Faça mais simulados para liberar uma estratégia mais precisa."}
              </p>

              <div className="mt-auto grid gap-3 pt-5">
                <div
                  className={[
                    "rounded-3xl p-4",
                    theme.gradient ? "bg-purple-50/70" : theme.softBgAlt,
                  ].join(" ")}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Foco principal
                  </p>

                  <p className="mt-1 text-sm font-bold text-blue-950">
                    {worstSubject?.name || "Diagnóstico inicial"}
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Manutenção
                  </p>

                  <p className="mt-1 text-sm font-bold text-blue-950">
                    {bestSubject?.name || "Resolver mais simulados"}
                  </p>
                </div>
              </div>
            </aside>
          </section>

          {/* Semana */}
          <section className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-blue-950 2xl:text-2xl">
                  Agenda recomendada
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Marque as tarefas concluídas para acompanhar o avanço da
                  semana.
                </p>
              </div>

              <span
                className={[
                  "inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-xs font-bold",
                  theme.softBg,
                  theme.textStrong,
                ].join(" ")}
              >
                <CalendarDays className="size-4" />7 dias
              </span>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-2 2xl:grid-cols-3">
              {weeklyPlan.map((day) => (
                <article
                  key={day.id}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={[
                          "grid size-11 shrink-0 place-items-center rounded-2xl border",
                          day.priority.border,
                          day.priority.bg,
                        ].join(" ")}
                      >
                        <day.Icon className="size-5 text-blue-950" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                          {day.day}
                        </p>

                        <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-blue-950">
                          {day.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={[
                        "shrink-0 rounded-full px-3 py-1 text-[10px] font-bold",
                        day.priority.badge,
                      ].join(" ")}
                    >
                      {day.type}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    {day.description}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <Clock3 className="size-3.5" />
                        Tempo
                      </p>

                      <p className="mt-1 text-sm font-bold text-blue-950">
                        {day.minutes} min
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <BookOpenCheck className="size-3.5" />
                        Questões
                      </p>

                      <p className="mt-1 text-sm font-bold text-blue-950">
                        {day.questions}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}
    </section>
  );
};

export default StudentStudyPlan;
