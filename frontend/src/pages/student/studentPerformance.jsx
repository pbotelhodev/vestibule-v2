import {
  BarChart3,
  CheckCircle2,
  Crown,
  LineChart,
  Lock,
  Medal,
  TrendingUp,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

import { getStudentResults } from "../../services/dashboard/callDashboard";

import {
  planRank,
  planThemes,
  fallbackSubjects,
} from "../../services/performace/servicesPerformace";

const PREMIUM_GRADIENT_ID = "performance-premium-gradient";
const premiumIconStroke = `url(#${PREMIUM_GRADIENT_ID})`;

// eslint-disable-next-line no-unused-vars
const PerformanceIconBox = ({ Icon, theme }) => {
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

const StudentPerformance = () => {
  const { student } = useOutletContext();
  const navigate = useNavigate();

  const [dataSimulations, setDataSimulations] = useState(null);

  const currentPlan = student?.planActive?.toLowerCase() || "free";
  const theme = planThemes[currentPlan] ?? planThemes.free;
  const rank = planRank[currentPlan] ?? planRank.free;

  const hasProAccess = rank >= planRank.pro;
  const hasPremiumAccess = rank >= planRank.premium;

  const studentId = student?.id;

  const rawAverageHitRate = Number(dataSimulations?.averageHitRate);
  const hasAverageHitRate =
    dataSimulations?.averageHitRate !== null &&
    dataSimulations?.averageHitRate !== undefined &&
    Number.isFinite(rawAverageHitRate);

  const percentage = hasAverageHitRate ? rawAverageHitRate : 0;

  const rawTargetScore = Number(student?.targetScore);
  const targetScore =
    Number.isFinite(rawTargetScore) && rawTargetScore > 0
      ? rawTargetScore
      : 900;

  const estimatedScore = hasAverageHitRate ? Math.round(percentage * 10) : 0;
  const remainingScore = Math.max(targetScore - estimatedScore, 0);

  const history = Array.isArray(dataSimulations?.simulationsHistory)
    ? dataSimulations.simulationsHistory
    : [];

  const rawSubjectsPerformance = useMemo(() => {
    const subjectsPerformance = dataSimulations?.subjectsPerformance;

    if (!Array.isArray(subjectsPerformance)) {
      return [];
    }

    return subjectsPerformance;
  }, [dataSimulations]);

  const subjects = useMemo(() => {
    if (rawSubjectsPerformance.length === 0) {
      return fallbackSubjects;
    }

    return rawSubjectsPerformance;
  }, [rawSubjectsPerformance]);

  const bestSubject = useMemo(() => {
    if (rawSubjectsPerformance.length === 0) {
      return null;
    }

    return rawSubjectsPerformance.reduce((best, subject) => {
      if (!best || Number(subject.percent) > Number(best.percent)) {
        return subject;
      }

      return best;
    }, null);
  }, [rawSubjectsPerformance]);

  const worstSubject = useMemo(() => {
    if (rawSubjectsPerformance.length === 0) {
      return null;
    }

    return rawSubjectsPerformance.reduce((worst, subject) => {
      if (!worst || Number(subject.percent) < Number(worst.percent)) {
        return subject;
      }

      return worst;
    }, null);
  }, [rawSubjectsPerformance]);

  const verifyNextGoal = (score) => {
    if (score >= 95) return "Mantenha esse desempenho!";
    if (score >= 80) return "Manter o acerto geral acima de 95%";
    if (score >= 60) return "Superar a média de acerto geral de 80%";
    if (score >= 40) return "Subir a média de acerto geral acima de 60%";

    return "Subir a média de acerto geral para 40%";
  };

  const viewDate = (finishedAt) => {
    if (!finishedAt) return "Data indisponível";

    const date = new Date(finishedAt);

    if (Number.isNaN(date.getTime())) {
      return "Data inválida";
    }

    const today = new Date();

    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const dateOnly = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    const diffInMs = todayOnly - dateOnly;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Hoje";
    if (diffInDays === 1) return "Ontem";
    if (diffInDays > 1) return `Há ${diffInDays} dias`;

    return "Data futura";
  };

  const proTrendLabel = !hasAverageHitRate
    ? "Sem dados suficientes"
    : percentage >= 80
      ? "Evolução forte"
      : percentage >= 60
        ? "Evolução positiva"
        : percentage >= 40
          ? "Desempenho em atenção"
          : "Risco de queda";

  const recommendedFocus = worstSubject?.name
    ? `Revisar ${worstSubject.name}`
    : "Faça mais simulados para gerar recomendação";

  const proReadingText =
    bestSubject?.name && worstSubject?.name
      ? `Seu desempenho mostra melhor base em ${bestSubject.name}, mas ${worstSubject.name} ainda está reduzindo sua média geral.`
      : "Complete mais simulados para gerar uma leitura mais precisa do seu desempenho.";

  const premiumRecommendations = useMemo(() => {
    if (!hasAverageHitRate || rawSubjectsPerformance.length === 0) {
      return [
        {
          title: "Primeira leitura estratégica",
          description:
            "Complete mais simulados para liberar recomendações inteligentes baseadas no seu desempenho real.",
          Icon: Crown,
        },
        {
          title: "Base de comparação",
          description:
            "A página precisa de histórico suficiente para identificar evolução, queda ou estabilidade.",
          Icon: BarChart3,
        },
        {
          title: "Meta personalizada",
          description:
            "Defina sua meta no perfil para comparar sua projeção atual com o objetivo real.",
          Icon: TrendingUp,
        },
      ];
    }

    const prioritySubject = worstSubject?.name || "a matéria com menor acerto";
    const strongSubject = bestSubject?.name || "sua matéria mais forte";

    return [
      {
        title: "Prioridade de estudo",
        description: `Seu foco principal agora deve ser ${prioritySubject}, pois essa área está puxando sua média para baixo.`,
        Icon: Crown,
      },
      {
        title: "Estratégia de manutenção",
        description: `Mantenha revisões leves em ${strongSubject} para preservar sua melhor base sem roubar tempo da prioridade principal.`,
        Icon: CheckCircle2,
      },
      {
        title: "Caminho até a meta",
        description:
          remainingScore > 0
            ? `Sua projeção atual está a ${remainingScore} pontos da meta de ${targetScore}. Priorize simulados direcionados para reduzir essa distância.`
            : `Sua projeção já atingiu a meta de ${targetScore}. O foco agora é manter consistência e reduzir oscilações.`,
        Icon: TrendingUp,
      },
    ];
  }, [
    hasAverageHitRate,
    rawSubjectsPerformance.length,
    worstSubject,
    bestSubject,
    remainingScore,
    targetScore,
  ]);

  // Puxa os dados dos resultados de simulados do usuário logado.
  useEffect(() => {
    if (!studentId) return;

    const dashboardData = async () => {
      try {
        const response = await getStudentResults(studentId);
        setDataSimulations(response);
      } catch (err) {
        console.error(err);
      }
    };

    dashboardData();
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

      {/* Bloco principal */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] min-[2200px]:grid-cols-[minmax(0,1fr)_32rem]">
        {/* Acerto por matéria */}
        <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-blue-950 2xl:text-2xl">
                Acerto por matéria
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Uma visão simples para identificar onde você está melhorando e
                onde precisa revisar.
              </p>
            </div>

            <span
              className={[
                "inline-flex w-auto whitespace-nowrap items-center gap-2 rounded-full px-3 py-2 text-[10px] font-bold",
                theme.softBg,
                theme.textStrong,
              ].join(" ")}
            >
              <BarChart3 className="size-4" />
              {percentage}% Geral
            </span>
          </div>

          <div className="mt-6 max-h-72 space-y-5 overflow-y-auto overscroll-contain pr-2 sm:max-h-80 xl:max-h-88 2xl:max-h-96 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-track]:bg-transparent">
            {subjects.map((subject) => {
              const percent = Number(subject.percent) || 0;
              const safePercent = Math.min(Math.max(percent, 0), 100);

              const colorPercent =
                safePercent >= 90
                  ? "bg-green-600"
                  : safePercent >= 75
                    ? "bg-blue-600"
                    : safePercent >= 60
                      ? "bg-orange-500"
                      : safePercent >= 40
                        ? "bg-yellow-500"
                        : "bg-red-500";

              const colorText =
                safePercent >= 90
                  ? "text-green-600"
                  : safePercent >= 75
                    ? "text-blue-600"
                    : safePercent >= 60
                      ? "text-orange-600"
                      : safePercent >= 40
                        ? "text-yellow-600"
                        : "text-red-600";

              return (
                <div key={subject.name}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div>
                      <strong className="text-sm font-bold text-blue-950">
                        {subject.name}
                      </strong>

                      <p className="mt-0.5 text-xs font-medium text-slate-400">
                        {subject.totalSimulations === 1
                          ? `${subject.totalSimulations} simulado`
                          : `${subject.totalSimulations} simulados`}
                      </p>
                    </div>

                    <span
                      className={["text-sm font-bold", colorText].join(" ")}
                    >
                      {safePercent}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={["h-full rounded-full", colorPercent].join(
                        " ",
                      )}
                      style={{ width: `${safePercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        {/* Resumo + projeção */}
        <aside className="grid gap-4">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-blue-950 2xl:text-2xl">
                  Resumo
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Leitura rápida do momento atual.
                </p>
              </div>

              <PerformanceIconBox Icon={CheckCircle2} theme={theme} />
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-3xl bg-blue-50/70 p-4">
                <p className="text-sm font-bold text-blue-950">
                  Melhor matéria
                </p>

                <p className="mt-1 text-xs font-semibold text-blue-700">
                  {bestSubject?.name
                    ? `${bestSubject.name} · ${bestSubject.percent}%`
                    : "Nenhum resultado ainda"}
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-blue-950">
                  Precisa revisar
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  {worstSubject?.name
                    ? `${worstSubject.name} · ${worstSubject.percent}%`
                    : "Nenhum resultado ainda"}
                </p>
              </div>

              <div
                className={[
                  "rounded-3xl p-4",
                  theme.gradient ? "bg-purple-50/70" : theme.softBgAlt,
                ].join(" ")}
              >
                <p className="text-sm font-bold text-blue-950">Próxima meta</p>

                <p
                  className={[
                    "mt-1 text-xs font-semibold",
                    theme.textStrong,
                  ].join(" ")}
                >
                  {hasAverageHitRate
                    ? verifyNextGoal(percentage)
                    : "Nenhum resultado ainda"}
                </p>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.75rem] border border-blue-950 bg-blue-950 p-5 text-white shadow-sm sm:rounded-4xl 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  Projeção atual
                </p>

                <strong className="mt-2 flex items-end gap-2 text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-5xl 2xl:text-6xl min-[2200px]:text-7xl">
                  <span>{estimatedScore}</span>

                  <span className="pb-1 text-lg font-bold tracking-normal text-white/35 sm:text-xl xl:text-xl 2xl:pb-1.5 2xl:text-2xl min-[2200px]:text-3xl">
                    / {targetScore}
                  </span>
                </strong>

                <p className="mt-1 text-sm font-semibold text-white/60">
                  {hasAverageHitRate
                    ? remainingScore > 0
                      ? `${remainingScore} pontos estimados para a meta`
                      : "Meta estimada alcançada"
                    : "Nenhum resultado ainda"}
                </p>
              </div>

              <div className="grid size-12 place-items-center rounded-2xl bg-white/10">
                <LineChart className="size-5" />
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={[
                  "h-full rounded-full",
                  theme.gradient ? theme.progress : "bg-white",
                ].join(" ")}
                style={{
                  width: `${
                    targetScore
                      ? Math.min((estimatedScore / targetScore) * 100, 100)
                      : 0
                  }%`,
                }}
              />
            </div>
          </article>
        </aside>
      </section>

      {/* Área Pro */}
      {hasProAccess ? (
        <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] min-[2200px]:grid-cols-[minmax(0,1fr)_32rem]">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span
                  className={[
                    "text-xs font-bold uppercase tracking-[0.2em]",
                    theme.eyebrow,
                  ].join(" ")}
                >
                  Análise Pro
                </span>

                <h2 className="mt-2 text-xl font-bold text-blue-950 2xl:text-2xl">
                  Histórico dos últimos resultados
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Acompanhe os últimos simulados e perceba a evolução do seu
                  desempenho.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {history.length > 0 ? (
                history.map((item) => {
                  const itemPercentage = Math.min(
                    Math.max(Number(item.percentage) || 0, 0),
                    100,
                  );

                  return (
                    <article
                      key={item.publicId || item.title}
                      className={[
                        "flex h-full min-h-55 flex-col rounded-3xl border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md",
                        theme.border,
                        theme.hoverBg,
                      ].join(" ")}
                    >
                      <PerformanceIconBox Icon={Medal} theme={theme} />

                      <div className="mt-4">
                        <h3 className="line-clamp-2 min-h-10 text-sm font-bold leading-5 text-blue-950">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-slate-400">
                          {viewDate(item.finishedAt)}
                        </p>
                      </div>

                      <div className="mt-auto pt-5">
                        <div className="flex items-end justify-between gap-3">
                          <div>
                            <p className="text-xs font-bold text-slate-400">
                              Pontuação
                            </p>

                            <strong className="mt-1 block text-2xl font-bold text-blue-950">
                              {item.score} <span className="text-sm">pts</span>
                            </strong>
                          </div>

                          <span
                            className={[
                              "rounded-full px-3 py-1 text-xs font-bold",
                              theme.softBg,
                              theme.textStrong,
                            ].join(" ")}
                          >
                            {itemPercentage}%
                          </span>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={[
                              "h-full rounded-full",
                              theme.progress,
                            ].join(" ")}
                            style={{ width: `${itemPercentage}%` }}
                          />
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="flex min-h-55 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-4 text-center text-sm font-medium text-slate-400 lg:col-span-3">
                  Nenhum resultado de simulado encontrado.
                </div>
              )}
            </div>
          </article>

          <aside className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
            <PerformanceIconBox Icon={TrendingUp} theme={theme} />

            <h2 className="mt-5 text-xl font-bold text-blue-950">
              Leitura Pro
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {proReadingText}
            </p>

            <div className="mt-auto grid gap-3 pt-5">
              <div
                className={[
                  "rounded-3xl p-4",
                  theme.gradient ? "bg-purple-50/70" : theme.softBgAlt,
                ].join(" ")}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Tendência
                </p>

                <p className="mt-1 text-sm font-bold text-blue-950">
                  {proTrendLabel}
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Foco recomendado
                </p>

                <p className="mt-1 text-sm font-bold text-blue-950">
                  {recommendedFocus}
                </p>
              </div>
            </div>
          </aside>
        </section>
      ) : (
        <section className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-400">
                <Lock className="size-5" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-blue-950">
                  Relatórios avançados no Pro
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                  No plano Pro, você acompanha histórico de simulados, leitura
                  de evolução e comparativos mais completos por matéria.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-700 sm:w-auto"
            >
              Conhecer Pro
            </button>
          </div>
        </section>
      )}

      {/* Área Premium */}
      {hasPremiumAccess ? (
        <section className="rounded-[1.75rem] border border-purple-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
                Inteligência Premium
              </p>

              <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                Recomendações inteligentes
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                Recomendações geradas a partir do seu histórico, média geral,
                pontos fortes, pontos fracos e meta configurada.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {navigate("/student/desempenho/plano-de-estudos")}}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-purple-200 bg-white px-4 py-2.5 text-xs font-bold transition hover:bg-purple-50"
            >
              <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                Ver plano de estudo
              </span>
            </button>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {premiumRecommendations.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="flex h-full min-h-58 flex-col rounded-3xl border border-purple-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/40 hover:shadow-md md:p-5"
              >
                <PerformanceIconBox Icon={Icon} theme={theme} />

                <h3 className="mt-4 min-h-10 text-sm font-bold leading-5 text-blue-950 md:text-base">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm md:leading-6">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-400">
                <Crown className="size-5" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-blue-950">
                  Recomendações inteligentes no Premium
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                  No Premium, a página de desempenho ganha prioridade de estudo,
                  trilhas sugeridas e leitura estratégica da sua evolução.
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
      )}
    </section>
  );
};

export default StudentPerformance;
