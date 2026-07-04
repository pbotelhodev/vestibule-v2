import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  LineChart,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  average,
  basePhrase,
  defaultStyle,
  getFastRead,
  proIcons,
} from "../../services/dashboard/servicesDash";

const fallbackSubjects = [
  {
    name: "Linguagens",
    percent: 0,
    totalSimulations: 0,
    status: "Aguardando dados",
  },
  {
    name: "Matemática",
    percent: 0,
    totalSimulations: 0,
    status: "Aguardando dados",
  },
  {
    name: "Humanas",
    percent: 0,
    totalSimulations: 0,
    status: "Aguardando dados",
  },
  {
    name: "Natureza",
    percent: 0,
    totalSimulations: 0,
    status: "Aguardando dados",
  },
];

const clampPercent = (value) => {
  const number = Number(value) || 0;

  if (number < 0) return 0;
  if (number > 100) return 100;

  return number;
};

const formatNumber = (value) => {
  return String(Number(value) || 0).padStart(2, "0");
};

const selectPhrase = (phrases, subjectName, fallback) => {
  if (!Array.isArray(phrases) || phrases.length === 0) {
    return fallback;
  }

  const nameSize = String(subjectName || "").length;
  const index = nameSize % phrases.length;

  return phrases[index];
};

const ProDashboard = ({ data, student }) => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const firstName = student?.name?.split(" ")?.[0] || "Aluno";

  const dataResult = useMemo(() => data || {}, [data]);

  const totalSimulations = Number(dataResult.totalSimulations) || 0;
  const averageHitRate = Number(dataResult.averageHitRate) || 0;
  const timeStudy = dataResult.timeStudy || "0 min";

  const allSimulations = useMemo(() => {
    return Array.isArray(dataResult.allSimulations)
      ? dataResult.allSimulations
      : [];
  }, [dataResult.allSimulations]);

  const subjects = useMemo(() => {
    const rawSubjects = Array.isArray(dataResult.subjectsPerformance)
      ? dataResult.subjectsPerformance
      : [];

    if (rawSubjects.length === 0) {
      return fallbackSubjects;
    }

    return rawSubjects.map((subject) => ({
      name: subject.name || subject.subject || "Matéria",
      percent: clampPercent(subject.percent),
      totalSimulations: Number(subject.totalSimulations) || 0,
      status: subject.status,
    }));
  }, [dataResult.subjectsPerformance]);

  const hasRealSubjects = useMemo(() => {
    return subjects.some((subject) => Number(subject.totalSimulations) > 0);
  }, [subjects]);

  const trendTendence = dataResult.trending?.tendence || "+";
  const trendProjection = dataResult.trending?.projection || "+0%";
  const isPositiveTrend = trendTendence !== "-";

  const strongestSubject = useMemo(() => {
    return subjects.reduce((best, current) => {
      if (Number(current.percent) > Number(best.percent)) {
        return current;
      }

      return best;
    }, subjects[0]);
  }, [subjects]);

  const weakestSubject = useMemo(() => {
    return subjects.reduce((weakest, current) => {
      if (Number(current.percent) < Number(weakest.percent)) {
        return current;
      }

      return weakest;
    }, subjects[0]);
  }, [subjects]);

  const getSubjectInsight = (currentSubject) => {
    const subjectPercent = Number(currentSubject.percent) || 0;
    const subjectTotalSimulations =
      Number(currentSubject.totalSimulations) || 0;

    if (!hasRealSubjects || subjectTotalSimulations <= 0) {
      return "Faça simulados dessa área para liberar uma análise mais precisa.";
    }

    if (subjectPercent === 100) {
      return "Sua média de acertos está impecável. Mantenha revisões leves.";
    }

    if (
      strongestSubject?.name === currentSubject.name &&
      weakestSubject?.name !== currentSubject.name
    ) {
      const difference = subjectPercent - averageHitRate;

      if (difference > 0) {
        return `Sua melhor média, ${difference} pontos acima da taxa geral.`;
      }

      return "Sua melhor área no momento. Continue mantendo constância.";
    }

    if (
      weakestSubject?.name === currentSubject.name &&
      strongestSubject?.name !== currentSubject.name
    ) {
      return "Sua menor média no momento. Revise fundamentos antes de avançar.";
    }

    if (subjectPercent < 40) {
      return `Atenção: você ainda erra ${100 - subjectPercent}% nessa área.`;
    }

    if (
      subjectPercent >= averageHitRate &&
      subjectPercent < averageHitRate + 5
    ) {
      return selectPhrase(
        basePhrase?.naMedia,
        currentSubject.name,
        "Essa matéria está próxima da sua média geral.",
      );
    }

    if (subjectPercent >= averageHitRate + 5) {
      return selectPhrase(
        basePhrase?.superandoMedia,
        currentSubject.name,
        "Essa matéria está acima da sua média geral.",
      );
    }

    return selectPhrase(
      basePhrase?.estavel,
      currentSubject.name,
      "Essa matéria está estável, mas ainda pode evoluir.",
    );
  };

  const fastReadItems = useMemo(() => {
    const generatedFastRead = getFastRead({
      timeStudy,
      totalSimulations,
      trendProjection,
      trendTendence,
      isPositive: isPositiveTrend,
      bigPercent: strongestSubject,
      smallPercent: weakestSubject,
    });

    if (Array.isArray(generatedFastRead) && generatedFastRead.length > 0) {
      return generatedFastRead;
    }

    return [
      {
        icon: LineChart,
        text: "Finalize simulados para liberar uma leitura mais precisa do seu desempenho.",
      },
    ];
  }, [
    timeStudy,
    totalSimulations,
    trendProjection,
    trendTendence,
    isPositiveTrend,
    strongestSubject,
    weakestSubject,
  ]);

  const activeFastRead = fastReadItems[count % fastReadItems.length];
  const IconFastRead = activeFastRead?.icon || LineChart;

  useEffect(() => {
    if (fastReadItems.length <= 1) return undefined;

    const timer = setInterval(() => {
      setCount((last) => (last + 1) % fastReadItems.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [fastReadItems.length]);

  const recentSimulations = allSimulations.slice(0, 3);

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-4 shadow-sm md:rounded-4xl md:p-5 xl:p-6 2xl:p-7">
        <div className="absolute inset-0 bg-white" />

        <div className="absolute -top-24 -right-20 size-56 rounded-full bg-blue-100/80 md:size-64 xl:size-72" />
        <div className="absolute -bottom-28 -left-20 size-56 rounded-full bg-violet-100/70 md:size-64 xl:size-72" />
        <div className="absolute top-1/2 right-1/4 size-36 -translate-y-1/2 rounded-full bg-amber-100/80 md:size-44" />

        <div className="absolute top-10 right-16 hidden size-16 rounded-4xl border border-blue-100 bg-white/50 shadow-sm backdrop-blur-md md:block" />
        <div className="absolute bottom-12 left-18 hidden size-20 rounded-full border border-violet-100 bg-white/50 shadow-sm backdrop-blur-md lg:block" />
        <div className="absolute right-1/3 bottom-10 hidden size-14 rounded-4xl border border-amber-100 bg-white/50 shadow-sm backdrop-blur-md xl:block" />

        <div className="absolute top-12 left-14 size-2.5 rounded-full bg-blue-600/60" />
        <div className="absolute top-24 right-32 size-3 rounded-full bg-violet-500/50" />
        <div className="absolute top-1/2 right-16 size-2.5 rounded-full bg-amber-400/80" />
        <div className="absolute bottom-20 left-24 size-3 rounded-full bg-blue-400/60" />
        <div className="absolute right-1/3 bottom-16 size-2 rounded-full bg-violet-400/60" />
        <div className="absolute top-1/3 left-1/2 size-2 rounded-full bg-amber-400/70" />

        <div className="relative z-10 grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_420px] 2xl:gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-md">
              <ShieldCheck className="size-4" />
              Plano Pro
            </span>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl xl:max-w-2xl xl:text-4xl 2xl:text-5xl">
              Olá, {firstName}. Sua preparação agora tem mais ritmo.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7 2xl:text-base 2xl:leading-7">
              Seu painel Pro está atualizado. Continue treinando com foco,
              relatórios por matéria e uma leitura mais clara da sua evolução.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate("/student/simulados")}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md"
              >
                Escolher simulado
                <ArrowRight className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate("/student/desempenho")}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-blue-100 bg-white/80 px-5 py-2.5 text-sm font-bold text-blue-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md"
              >
                Ver desempenho
              </button>
            </div>
          </div>

          <aside className="rounded-3xl border border-blue-100 bg-white/80 p-4 shadow-sm backdrop-blur-md 2xl:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                  Seu plano
                </p>

                <h2 className="mt-1.5 text-2xl font-bold text-blue-950 2xl:text-3xl">
                  Pro
                </h2>
              </div>

              <div className="grid size-11 place-items-center rounded-2xl bg-blue-700 text-white shadow-sm">
                <Trophy className="size-5" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-blue-50/70 p-3">
              <span className="text-xs font-bold text-slate-500">
                Evolução mensal
              </span>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                {trendProjection}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-blue-50/70 p-3">
                <p className="text-xs font-medium text-slate-500">Anúncios</p>
                <p className="mt-1 text-sm font-bold text-blue-950">Zero</p>
              </div>

              <div className="rounded-2xl bg-blue-50/70 p-3">
                <p className="text-xs font-medium text-slate-500">Relatórios</p>
                <p className="mt-1 text-sm font-bold text-blue-950">
                  Por matéria
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
              <BookOpenCheck className="size-5" />
            </div>

            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              Últimos 30 dias
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {formatNumber(totalSimulations)}
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Simulados feitos
          </p>
        </article>

        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
              <Target className="size-5" />
            </div>

            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              {average(averageHitRate)}
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {averageHitRate}%
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Taxa de acertos
          </p>
        </article>

        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
              <Clock3 className="size-5" />
            </div>

            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              Últimos 7 dias
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {timeStudy}
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Tempo estudado
          </p>
        </article>

        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
              {isPositiveTrend ? (
                <TrendingUp className="size-5" />
              ) : (
                <TrendingDown className="size-5" />
              )}
            </div>

            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              Último mês
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {trendProjection}
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">Evolução</p>
        </article>
      </section>

      {/* Conteúdo principal */}
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_380px] 2xl:grid-cols-[minmax(0,1fr)_460px] 2xl:gap-8">
        <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Desempenho
              </p>

              <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                Evolução por matéria
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Veja onde você está avançando e quais matérias precisam de mais
                atenção.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/student/desempenho")}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-blue-100 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-50 sm:w-auto"
            >
              Ver relatório
            </button>
          </div>

          <div className="mt-6 max-h-160 space-y-4 overflow-y-auto pr-1 md:pr-2">
            {subjects.map((subject) => {
              const style = proIcons?.[subject.name] || defaultStyle;
              const SubjectIcon = style?.icon || BarChart3;
              const subjectPercent = clampPercent(subject.percent);
              const totalSubjectSimulations =
                Number(subject.totalSimulations) || 0;

              return (
                <article
                  key={subject.name}
                  className="rounded-3xl border border-blue-100 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50/40 md:p-5"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={[
                          "grid size-11 shrink-0 place-items-center rounded-2xl",
                          style?.bg || "bg-blue-50",
                          style?.text || "text-blue-700",
                        ].join(" ")}
                      >
                        <SubjectIcon className="size-5" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-blue-950 md:text-base">
                          {subject.name}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">
                          {totalSubjectSimulations > 0
                            ? getSubjectInsight(subject)
                            : "Faça mais simulados para consolidar esta análise."}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:flex-col md:items-end">
                      <span
                        className={[
                          "rounded-full bg-blue-50 px-3 py-1 text-xs font-bold",
                          style?.text || "text-blue-700",
                        ].join(" ")}
                      >
                        {subjectPercent}%
                      </span>

                      {totalSubjectSimulations > 0 && (
                        <span className="text-[11px] font-bold text-slate-400">
                          {totalSubjectSimulations === 1
                            ? "1 simulado"
                            : `${totalSubjectSimulations} simulados`}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                      <div
                        className={[
                          "h-full rounded-full",
                          style?.bar || "bg-blue-700",
                        ].join(" ")}
                        style={{ width: `${subjectPercent}%` }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="space-y-5 md:space-y-6">
          <article className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
              <LineChart className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-blue-950">
              Leitura rápida
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Acompanhe sua evolução por matéria e use seus simulados recentes
              para identificar onde revisar primeiro.
            </p>

            <div className="mt-5 flex items-center gap-4 rounded-2xl bg-blue-50/70 p-3 px-4 text-sm font-bold text-slate-700">
              <IconFastRead className="size-5 shrink-0 text-blue-700" />
              <span>{activeFastRead?.text}</span>
            </div>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-800 to-green-500 p-5 text-white shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-white/15">
              <CheckCircle2 className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold">Sem anúncios</h3>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Seu plano Pro remove distrações e mantém o foco no que realmente
              importa: treinar, revisar e evoluir.
            </p>

            <button
              type="button"
              onClick={() => navigate("/student/desempenho")}
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-50 md:w-auto"
            >
              Explorar recursos
            </button>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-600">
              <CalendarDays className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-blue-950">
              Próximo simulado
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Escolha um novo simulado para atualizar sua análise de desempenho.
            </p>

            <button
              type="button"
              onClick={() => navigate("/student/simulados")}
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-700 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-800 md:w-auto"
            >
              Escolher simulado
              <ArrowRight className="size-4" />
            </button>
          </article>
        </aside>
      </section>

      {/* Simulados recentes */}
      <section className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Simulados
            </p>

            <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
              Continue estudando
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Acesse rapidamente alguns simulados disponíveis para continuar sua
              preparação.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/student/simulados")}
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-blue-100 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-50 sm:w-auto"
          >
            Ver todos
          </button>
        </div>

        {recentSimulations.length > 0 ? (
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {recentSimulations.map((simulation) => (
              <article
                key={simulation.publicId || simulation.title}
                className="flex min-h-full flex-col rounded-3xl border border-blue-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md md:p-5"
              >
                <div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                  <BookOpenCheck className="size-5" />
                </div>

                <h3 className="mt-4 line-clamp-2 text-sm font-bold text-blue-950 md:text-base">
                  {simulation.title || "Simulado"}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 md:text-sm">
                  {simulation.description ||
                    "Simulado disponível para continuar sua preparação."}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {simulation.requiredPlan || "PRO"}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/student/simulados/${simulation.publicId}`)
                    }
                    disabled={!simulation.publicId}
                    className="grid size-9 cursor-pointer place-items-center rounded-full bg-blue-700 text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <article className="mt-6 rounded-3xl border border-dashed border-blue-100 bg-blue-50/40 p-5">
            <div className="grid size-11 place-items-center rounded-2xl bg-white text-blue-700">
              <BookOpenCheck className="size-5" />
            </div>

            <p className="mt-4 text-sm font-bold text-blue-950">
              Nenhum simulado disponível no momento.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Quando novos simulados forem publicados, eles aparecerão aqui.
            </p>
          </article>
        )}
      </section>
    </div>
  );
};

export default ProDashboard;
