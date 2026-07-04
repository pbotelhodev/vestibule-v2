/* eslint-disable no-unused-vars */
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Brain,
  CalendarCheck2,
  Clock3,
  Crown,
  FileText,
  GraduationCap,
  Medal,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  WandSparkles,
  Zap,
} from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { subjectLabels } from "../../services/dashboard/servicesDash";

const PREMIUM_ICON_GRADIENT_ID = "premium-dashboard-icon-gradient";
const premiumIconStroke = `url(#${PREMIUM_ICON_GRADIENT_ID})`;

const planLabels = {
  FREE: "Free",
  PRO: "Pro",
  PREMIUM: "Premium",
};

const premiumFeatures = [
  {
    title: "Redação com IA",
    description: "Análise por competência, histórico e evolução.",
    Icon: FileText,
  },
  {
    title: "Trilhas personalizadas",
    description: "Rotas de estudo baseadas nos seus pontos fracos.",
    Icon: GraduationCap,
  },
  {
    title: "Recomendações inteligentes",
    description: "Sugestões futuras com base no desempenho real.",
    Icon: Brain,
  },
];

const formatSubject = (subject) => {
  if (!subject) return "Geral";

  const normalized = String(subject).trim().toLowerCase();

  return (
    subjectLabels[normalized] ||
    normalized.charAt(0).toUpperCase() + normalized.slice(1)
  );
};

const clampPercent = (value) => {
  const number = Number(value) || 0;

  if (number < 0) return 0;
  if (number > 100) return 100;

  return number;
};

const getSimulationsLabel = (quantity) => {
  const total = Number(quantity) || 0;

  if (total === 1) return "1 simulado";

  return `${total} simulados`;
};

const PremiumIconBox = ({
  Icon,
  className = "size-11",
  iconClassName = "size-5",
}) => {
  return (
    <div
      className={[
        "grid shrink-0 place-items-center rounded-2xl border border-purple-200 bg-white shadow-sm shadow-purple-950/5",
        className,
      ].join(" ")}
    >
      <Icon className={iconClassName} stroke={premiumIconStroke} />
    </div>
  );
};

const PremiumDashboard = ({ student, data }) => {
  const navigate = useNavigate();

  const firstName = student?.name?.split(" ")?.[0] || "Aluno";

  const dataResult = useMemo(() => data || {}, [data]);

  const rawPlan =
    student?.planActive || student?.activePlan || student?.plan || "PREMIUM";

  const currentPlan = String(rawPlan).toUpperCase();
  const planLabel = planLabels[currentPlan] || "Premium";

  const subjectPerformance = useMemo(() => {
    const subjects = Array.isArray(dataResult.subjectsPerformance)
      ? dataResult.subjectsPerformance
      : [];

    return subjects
      .map((item) => ({
        name: item.name || formatSubject(item.subject),
        percent: clampPercent(item.percent),
        totalSimulations: Number(item.totalSimulations) || 0,
      }))
      .sort((a, b) => a.percent - b.percent);
  }, [dataResult.subjectsPerformance]);

  const stats = useMemo(() => {
    const totalSimulations = Number(dataResult.totalSimulations) || 0;
    const averageHitRate = Number(dataResult.averageHitRate) || 0;
    const timeStudy = dataResult.timeStudy || "0 min";
    const projection = dataResult.trending?.projection || "+0%";
    const tendence = dataResult.trending?.tendence;

    const rankingValue = dataResult.ranking?.position
      ? `#${dataResult.ranking.position}`
      : "Em breve";

    const rankingHelper = dataResult.ranking?.label || "Premium";

    return [
      {
        label: "Simulados feitos",
        value: String(totalSimulations).padStart(2, "0"),
        helper: "Neste mês",
        Icon: BookOpenCheck,
      },
      {
        label: "Taxa de acerto",
        value: `${averageHitRate}%`,
        helper: "Média geral",
        Icon: Target,
      },
      {
        label: "Tempo estudado",
        value: timeStudy,
        helper: "Últimos 7 dias",
        Icon: Clock3,
      },
      {
        label: "Evolução mensal",
        value: projection,
        helper: tendence === "-" ? "Em queda" : "Em alta",
        Icon: tendence === "-" ? TrendingDown : TrendingUp,
      },
      {
        label: "Ranking",
        value: rankingValue,
        helper: rankingHelper,
        Icon: Trophy,
      },
    ];
  }, [dataResult]);

  const priorityAnalysis = useMemo(() => {
    const weakestSubject = subjectPerformance[0];

    if (!weakestSubject) {
      return {
        title: "Sem prioridade definida",
        value: "Aguardando dados",
        helper: "Histórico insuficiente",
        description:
          "Finalize alguns simulados para o Vestibule identificar a área que mais precisa de atenção.",
        Icon: Brain,
        percent: null,
      };
    }

    return {
      title: "Prioridade de estudo",
      value: weakestSubject.name,
      helper: `${weakestSubject.percent}%`,
      description:
        "Comece por essa área antes do próximo simulado completo. O maior ganho agora está em corrigir o ponto mais fraco.",
      Icon: AlertTriangle,
      percent: weakestSubject.percent,
    };
  }, [subjectPerformance]);

  const supportMetrics = useMemo(() => {
    const strongestSubject = subjectPerformance[subjectPerformance.length - 1];
    const weakestSubject = subjectPerformance[0];

    const hasSubjects = subjectPerformance.length > 0;
    const hasMultipleSubjects = subjectPerformance.length > 1;

    const performanceGap =
      hasMultipleSubjects && strongestSubject && weakestSubject
        ? strongestSubject.percent - weakestSubject.percent
        : 0;

    const gapLabel =
      performanceGap <= 10
        ? "Equilibrado"
        : performanceGap <= 20
          ? "Atenção"
          : "Desbalanceado";

    const studyConsistency = dataResult.studyConsistency || {};
    const consistencyPercent = clampPercent(studyConsistency.percent);
    const activeDays = Number(studyConsistency.activeDays) || 0;
    const periodDays = Number(studyConsistency.periodDays) || 7;

    return [
      {
        title: "Consistência recente",
        value: `${consistencyPercent}%`,
        helper: `${activeDays} de ${periodDays} dias`,
        description:
          activeDays === 0
            ? "Ainda não houve atividade recente nos simulados."
            : `Você teve atividade em ${activeDays} dos últimos ${periodDays} dias.`,
        Icon: CalendarCheck2,
        progress: consistencyPercent,
      },
      {
        title: "Área dominante",
        value: hasSubjects ? strongestSubject.name : "Sem dados",
        helper: hasSubjects ? `${strongestSubject.percent}%` : "Aguardando",
        description: hasSubjects
          ? "Essa é a área com melhor desempenho no seu histórico."
          : "Finalize simulados para identificar sua área mais forte.",
        Icon: Star,
        progress: hasSubjects ? strongestSubject.percent : null,
      },
      {
        title: "Equilíbrio entre áreas",
        value: hasMultipleSubjects ? `${performanceGap} pts` : "Sem base",
        helper: hasMultipleSubjects ? gapLabel : "Poucos dados",
        description: hasMultipleSubjects
          ? "Diferença entre sua melhor e sua pior área."
          : "Responda simulados de mais matérias para medir equilíbrio.",
        Icon: BarChart3,
        progress: null,
      },
      {
        title: "Cobertura de matérias",
        value: String(subjectPerformance.length).padStart(2, "0"),
        helper:
          subjectPerformance.length === 1
            ? "área respondida"
            : "áreas respondidas",
        description:
          subjectPerformance.length > 0
            ? "Quantidade de áreas com histórico para análise."
            : "Ainda não há matérias suficientes para análise avançada.",
        Icon: Brain,
        progress: null,
      },
    ];
  }, [dataResult.studyConsistency, subjectPerformance]);

  const advancedInsights = useMemo(() => {
    if (subjectPerformance.length === 0) {
      return [
        {
          title: "Ainda sem histórico suficiente",
          description:
            "Finalize alguns simulados para liberar uma análise mais precisa da sua evolução.",
          percent: 0,
          helper: "Sem dados",
          totalSimulations: 0,
          Icon: Brain,
        },
      ];
    }

    const minPercent = Number(subjectPerformance[0]?.percent) || 0;
    const maxPercent =
      Number(subjectPerformance[subjectPerformance.length - 1]?.percent) || 0;

    return subjectPerformance.map((item) => {
      const name = item.name;
      const percent = clampPercent(item.percent);
      const totalSimulations = Number(item.totalSimulations) || 0;

      const isWeakestSubject =
        subjectPerformance.length > 1 && percent === minPercent;

      const isStrongestSubject =
        subjectPerformance.length > 1 && percent === maxPercent;

      if (isWeakestSubject) {
        return {
          title: `${name} precisa de revisão`,
          description:
            "Priorize revisões curtas e questões direcionadas antes de partir para simulados completos.",
          percent,
          helper: "Prioridade alta",
          totalSimulations,
          Icon: AlertTriangle,
        };
      }

      if (isStrongestSubject) {
        return {
          title: `${name} é seu ponto forte`,
          description:
            "Mantenha revisões leves nessa área para preservar desempenho sem gastar energia demais.",
          percent,
          helper: "Ponto forte",
          totalSimulations,
          Icon: Star,
        };
      }

      if (percent >= 80) {
        return {
          title: `${name} está em alto desempenho`,
          description: "Use simulados mistos para manter ritmo e evitar queda.",
          percent,
          helper: "Alto desempenho",
          totalSimulations,
          Icon: TrendingUp,
        };
      }

      if (percent >= 70) {
        return {
          title: `${name} está bem posicionada`,
          description:
            "O desempenho é bom, mas ainda pode subir com correção dos erros recorrentes.",
          percent,
          helper: "Bom desempenho",
          totalSimulations,
          Icon: TrendingUp,
        };
      }

      if (percent >= 60) {
        return {
          title: `${name} está em evolução`,
          description:
            "A base existe. Foque em exercícios médios antes dos mais difíceis.",
          percent,
          helper: "Em evolução",
          totalSimulations,
          Icon: BarChart3,
        };
      }

      return {
        title: `${name} exige reforço`,
        description:
          "Volte aos fundamentos dessa área antes de avançar. O melhor caminho agora é teoria básica e treino guiado.",
        percent,
        helper: "Reforço necessário",
        totalSimulations,
        Icon: Target,
      };
    });
  }, [subjectPerformance]);

  const simulations = useMemo(() => {
    const allSimulations = Array.isArray(dataResult.allSimulations)
      ? dataResult.allSimulations
      : [];

    return allSimulations.slice(0, 3).map((simulation) => {
      const hasProgress =
        simulation.progress !== undefined && simulation.progress !== null;

      return {
        title: simulation.title || "Simulado",
        description:
          simulation.description ||
          "Continue sua preparação com um simulado disponível para o seu plano.",
        status: simulation.status || "Iniciar",
        progress: hasProgress ? clampPercent(simulation.progress) : null,
        publicId: simulation.publicId,
        subject: formatSubject(simulation.subject),
        requiredPlan: simulation.requiredPlan,
      };
    });
  }, [dataResult.allSimulations]);

  const priorityInsight = advancedInsights[0];

  const handleOpenSimulation = (publicId) => {
    if (!publicId) return;

    navigate(`/student/simulados/${publicId}`);
  };

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      <svg
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute size-0"
      >
        <defs>
          <linearGradient
            id={PREMIUM_ICON_GRADIENT_ID}
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

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-200 bg-white p-4 shadow-sm md:rounded-4xl md:p-5 xl:p-6 2xl:p-7">
        <div className="absolute inset-0 bg-white" />

        <div className="absolute -top-24 -right-20 size-56 rounded-full bg-purple-100/80 md:size-64 xl:size-72" />
        <div className="absolute -bottom-28 -left-20 size-56 rounded-full bg-blue-100/70 md:size-64 xl:size-72" />
        <div className="absolute top-1/2 right-1/4 size-36 -translate-y-1/2 rounded-full bg-teal-100/80 md:size-44" />

        <div className="absolute top-10 right-16 hidden size-16 rounded-4xl border border-purple-100 bg-white/50 shadow-sm backdrop-blur-md md:block" />
        <div className="absolute bottom-12 left-18 hidden size-20 rounded-full border border-blue-100 bg-white/50 shadow-sm backdrop-blur-md lg:block" />
        <div className="absolute right-1/3 bottom-10 hidden size-14 rounded-4xl border border-teal-100 bg-white/50 shadow-sm backdrop-blur-md xl:block" />

        <div className="absolute top-12 left-14 size-2.5 rounded-full bg-purple-700/60" />
        <div className="absolute top-24 right-32 size-3 rounded-full bg-blue-600/50" />
        <div className="absolute top-1/2 right-16 size-2.5 rounded-full bg-teal-500/70" />
        <div className="absolute bottom-20 left-24 size-3 rounded-full bg-blue-500/60" />
        <div className="absolute right-1/3 bottom-16 size-2 rounded-full bg-purple-500/60" />
        <div className="absolute top-1/3 left-1/2 size-2 rounded-full bg-teal-400/70" />

        <div className="relative z-10 grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_420px] 2xl:gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1.5 text-xs font-bold shadow-sm backdrop-blur-md">
              <Crown className="size-4" stroke={premiumIconStroke} />

              <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                Plano {planLabel}
              </span>
            </span>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl xl:max-w-2xl xl:text-4xl 2xl:text-5xl">
              Olá, {firstName}. Sua preparação agora é estratégica.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7 2xl:text-base 2xl:leading-7">
              Acompanhe sua evolução, veja prioridades reais de estudo e avance
              com uma leitura mais inteligente do seu desempenho.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate("/student/desempenho")}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-purple-700/25"
              >
                Ver análise detalhada
                <ArrowRight className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate("/student/trilhas")}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-purple-200 bg-white/80 px-5 py-2.5 text-sm font-bold shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-purple-50 hover:shadow-md"
              >
                <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                  Acessar trilhas
                </span>
              </button>
            </div>
          </div>

          <aside className="rounded-3xl border border-purple-200 bg-white/80 p-4 shadow-sm backdrop-blur-md 2xl:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
                  Seu plano
                </p>

                <h2 className="mt-1.5 bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-2xl font-bold text-transparent 2xl:text-3xl">
                  {planLabel}
                </h2>
              </div>

              <PremiumIconBox Icon={Crown} />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-purple-50/70 p-3">
              <span className="text-xs font-bold text-slate-500">
                Análise avançada
              </span>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm">
                <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                  Ativa
                </span>
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-purple-50/70 p-3">
                <p className="text-xs font-medium text-slate-500">Trilhas</p>
                <p className="mt-1 text-sm font-bold text-blue-950">
                  Personalizado
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50/70 p-3">
                <p className="text-xs font-medium text-slate-500">Redação</p>
                <p className="mt-1 text-sm font-bold text-blue-950">
                  Correção com IA
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map(({ label, value, helper, Icon }, index) => {
          const isLastCard = index === stats.length - 1;

          return (
            <article
              key={label}
              className={[
                "rounded-3xl border border-purple-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/30 hover:shadow-md 2xl:p-6",
                isLastCard ? "sm:col-span-2 xl:col-span-1" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-3">
                <PremiumIconBox Icon={Icon} />

                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold">
                  <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                    {helper}
                  </span>
                </span>
              </div>

              <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
                {value}
              </p>

              <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
            </article>
          );
        })}
      </section>

      {/* Conteúdo principal */}
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_380px] 2xl:grid-cols-[minmax(0,1fr)_460px] 2xl:gap-8">
        <div className="rounded-3xl border border-purple-200 bg-white p-4 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
                Inteligência premium
              </p>

              <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                Análise avançada da sua evolução
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Diagnóstico objetivo com prioridade de estudo, consistência,
                equilíbrio entre áreas e desempenho por matéria.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/student/desempenho")}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-purple-200 px-4 py-2.5 text-xs font-bold transition hover:bg-purple-50 sm:w-auto"
            >
              <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                Ver relatório completo
              </span>
            </button>
          </div>

          <div className="mt-6 grid gap-4">
            <article className="relative overflow-hidden rounded-3xl border border-purple-200 bg-purple-50/40 p-4 md:p-5 2xl:p-6">
              <div className="absolute -right-16 -top-16 size-40 rounded-full bg-purple-100/80" />
              <div className="absolute -bottom-20 -left-16 size-44 rounded-full bg-blue-100/70" />

              <div className="relative z-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <PremiumIconBox
                      Icon={priorityAnalysis.Icon}
                      className="size-12"
                      iconClassName="size-5"
                    />

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-500">
                        Foco recomendado
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-blue-950 md:text-xl">
                        {priorityAnalysis.title}
                      </h3>
                    </div>
                  </div>

                  <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm">
                    <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                      {priorityAnalysis.helper}
                    </span>
                  </span>
                </div>

                <p className="mt-6 wrap-break-word bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl 2xl:text-5xl">
                  {priorityAnalysis.value}
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  {priorityAnalysis.description}
                </p>

                {priorityAnalysis.percent !== null && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold text-slate-500">
                        Taxa de acerto médio da matéria
                      </span>

                      <span className="text-xs font-bold text-slate-500">
                        {clampPercent(priorityAnalysis.percent)}%
                      </span>
                    </div>

                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500"
                        style={{
                          width: `${clampPercent(priorityAnalysis.percent)}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </article>

            <div className="overflow-hidden rounded-3xl border border-purple-200 bg-white shadow-sm">
              {supportMetrics.map(
                (
                 
                  { title, value, helper, description, Icon, progress },
                  index,
                ) => {
                  const isLastItem = index === supportMetrics.length - 1;

                  return (
                    <article
                      key={title}
                      className={[
                        "p-4 transition hover:bg-purple-50/40 md:p-5",
                        !isLastItem ? "border-b border-purple-100" : "",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <div className="grid size-10 shrink-0 place-items-center rounded-2xl border border-purple-200 bg-purple-50/70">
                          <Icon className="size-4" stroke={premiumIconStroke} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-sm font-bold text-blue-950">
                              {title}
                            </h3>

                            <span className="rounded-full bg-purple-50 px-3 py-1 text-[11px] font-bold">
                              <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                                {helper}
                              </span>
                            </span>
                          </div>

                          <p className="mt-2 wrap-break-word text-xl font-bold tracking-tight text-blue-950">
                            {value}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {description}
                          </p>

                          {progress !== null && (
                            <div className="mt-3">
                              <div className="h-1.5 overflow-hidden rounded-full bg-purple-100">
                                <div
                                  className="h-full rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500"
                                  style={{
                                    width: `${clampPercent(progress)}%`,
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-purple-200 bg-purple-50/30 p-4 md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-base font-bold text-blue-950">
                  Desempenho por matéria
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Leitura por área respondida, com ação recomendada sem repetir
                  os dados dos cards principais.
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold shadow-sm">
                <Brain className="size-4" stroke={premiumIconStroke} />

                <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                  Diagnóstico premium
                </span>
              </span>
            </div>

            <div className="mt-5 max-h-110 overflow-y-auto rounded-3xl border border-purple-200 bg-white md:max-h-105 xl:max-h-130">
              {advancedInsights.map(
                (
                  {
                    title,
                    description,
                    percent,
                    helper,
                    totalSimulations,
                    Icon,
                  },
                  index,
                ) => {
                  const isLastItem = index === advancedInsights.length - 1;

                  return (
                    <article
                      key={title}
                      className={[
                        "p-4 transition hover:bg-purple-50/40 md:p-5",
                        !isLastItem ? "border-b border-purple-100" : "",
                      ].join(" ")}
                    >
                      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_120px] md:items-start">
                        <div className="flex items-start gap-3">
                          <PremiumIconBox
                            Icon={Icon}
                            className="size-10"
                            iconClassName="size-4"
                          />

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm font-bold text-blue-950 md:text-base">
                                {title}
                              </h3>

                              <span className="rounded-full bg-purple-50 px-3 py-1 text-[11px] font-bold">
                                <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                                  {helper}
                                </span>
                              </span>

                              {totalSimulations > 0 && (
                                <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold text-slate-500">
                                  {getSimulationsLabel(totalSimulations)}
                                </span>
                              )}
                            </div>

                            <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm md:leading-6">
                              {description}
                            </p>
                          </div>
                        </div>

                        <div className="md:text-right">
                          <span className="inline-flex rounded-full bg-purple-50 px-3 py-1 text-xs font-bold">
                            <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                              {percent}%
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="h-2 overflow-hidden rounded-full bg-purple-100">
                          <div
                            className="h-full rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500"
                            style={{ width: `${clampPercent(percent)}%` }}
                          />
                        </div>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </div>
        </div>

        {/* Lateral */}
        <aside className="space-y-5 md:space-y-6">
          <article className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <PremiumIconBox Icon={WandSparkles} />

            <h3 className="mt-5 text-lg font-bold text-blue-950">
              Próxima recomendação
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {priorityInsight?.percent > 0
                ? `${priorityInsight.title}. Use essa informação para escolher sua próxima revisão.`
                : "Finalize alguns simulados para receber uma recomendação baseada no seu desempenho real."}
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-purple-50/80 p-3 text-sm font-bold text-slate-700">
              <Zap className="size-4" stroke={premiumIconStroke} />
              Prioridade alta esta semana
            </div>
          </article>

          <section className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
                  Recursos
                </p>

                <h2 className="mt-2 text-lg font-bold text-blue-950">
                  Premium ativo
                </h2>
              </div>

              <PremiumIconBox
                Icon={Crown}
                className="size-10"
                iconClassName="size-4"
              />
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl border border-purple-100">
             
              {premiumFeatures.map(({ title, description, Icon }, index) => {
                const isLastItem = index === premiumFeatures.length - 1;

                return (
                  <article
                    key={title}
                    className={[
                      "flex items-start gap-3 bg-white p-4 transition hover:bg-purple-50/40",
                      !isLastItem ? "border-b border-purple-100" : "",
                    ].join(" ")}
                  >
                    <div className="grid size-9 shrink-0 place-items-center rounded-2xl bg-purple-50">
                      <Icon className="size-4" stroke={premiumIconStroke} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-blue-950">
                        {title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => navigate("/student/desempenho")}
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-purple-200 px-4 py-2.5 text-xs font-bold transition hover:bg-purple-50"
            >
              <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                Ver recursos
              </span>
            </button>
          </section>
          <section className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
                  Próximas ações
                </p>

                <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                  Simulados recomendados
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Continue sua preparação com simulados disponíveis para o seu
                  plano.
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/student/simulados")}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-purple-200 px-4 py-2.5 text-xs font-bold transition hover:bg-purple-50 sm:w-auto"
              >
                <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                  Ver tudo
                </span>
              </button>
            </div>

            {simulations.length > 0 ? (
              <div className="mt-6 grid gap-3">
                {simulations.map((simulation) => (
                  <article
                    key={simulation.publicId || simulation.title}
                    className="flex min-h-full flex-col rounded-3xl border border-purple-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/40 hover:shadow-md md:p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <PremiumIconBox Icon={Medal} />

                      {simulation.subject && (
                        <span className="rounded-full bg-purple-50 px-3 py-1 text-[11px] font-bold">
                          <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                            {simulation.subject}
                          </span>
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-blue-950 md:text-base">
                      {simulation.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                      {simulation.description}
                    </p>

                    <div className="mt-auto pt-5">
                      {simulation.progress !== null &&
                        simulation.progress > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-[11px] font-bold text-slate-400">
                                Progresso
                              </span>

                              <span className="text-[11px] font-bold text-slate-400">
                                {simulation.progress}%
                              </span>
                            </div>

                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-purple-100">
                              <div
                                className="h-full rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500"
                                style={{
                                  width: `${clampPercent(simulation.progress)}%`,
                                }}
                              />
                            </div>
                          </div>
                        )}

                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold">
                          <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                            {simulation.status}
                          </span>
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            handleOpenSimulation(simulation.publicId)
                          }
                          className="grid size-9 cursor-pointer place-items-center rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 text-white transition hover:shadow-md hover:shadow-purple-700/25"
                        >
                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-3xl border border-dashed border-purple-200 bg-purple-50/40 p-5">
                <PremiumIconBox Icon={Medal} />

                <h3 className="mt-4 text-sm font-bold text-blue-950 md:text-base">
                  Nenhum simulado recomendado agora
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                  Quando houver simulados disponíveis para o seu plano, eles vão
                  aparecer aqui.
                </p>
              </div>
            )}
          </section>
        </aside>
      </section>

      {/* Simulados recomendados */}
    </div>
  );
};

export default PremiumDashboard;
