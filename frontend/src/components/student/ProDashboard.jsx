/* eslint-disable no-unused-vars */
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

import { useNavigate } from "react-router-dom";

import { avarage } from "../../services/dashboard/servicesDash";

const fallbackSubjects = [
  {
    name: "Linguagens",
    percent: 0,
    status: "Aguardando dados",
  },
  {
    name: "Matemática",
    percent: 0,
    status: "Aguardando dados",
  },
  {
    name: "Humanas",
    percent: 0,
    status: "Aguardando dados",
  },
  {
    name: "Natureza",
    percent: 0,
    status: "Aguardando dados",
  },
];

const ProDashboard = ({ data, student }) => {
  const firstName = student?.name?.split(" ")?.[0] || "Aluno";
  const navigate = useNavigate();

  const totalSimulations = data?.totalSimulations ?? 0;
  const averageHitRate = data?.averageHitRate ?? 0;
  const timeStudy = data?.timeStudy ?? "0 min";
  const allSimulations = data?.allSimulations ?? [];
  const subjects = data?.bySubject?.length ? data.bySubject : fallbackSubjects;

  const trendTendence = data?.trending?.tendence ?? "+";
  const trendProjection = data?.trending?.projection ?? "0%";

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

        <div className="relative z-10 grid gap-5 xl:grid-cols-[1fr_360px] xl:items-center 2xl:grid-cols-[1fr_420px] 2xl:gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-md">
              <ShieldCheck className="size-4" />
              Plano Pro
            </span>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl xl:max-w-2xl xl:text-4xl 2xl:text-5xl">
              Olá, {firstName}. Sua preparação agora tem mais ritmo.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7 2xl:text-base 2xl:leading-7">
              Estude sem anúncios, acesse mais simulados e acompanhe sua
              evolução por matéria com relatórios mais claros.
            </p>

            <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
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
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Card 1 */}
        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
              <BookOpenCheck className="size-5" />
            </div>

            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              Neste mês
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {totalSimulations}
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Simulados feitos
          </p>
        </article>

        {/* Card 2 */}
        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
              <Target className="size-5" />
            </div>

            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              {avarage(averageHitRate)}
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {averageHitRate}%
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Taxa de acertos
          </p>
        </article>

        {/* Card 3 */}
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

        {/* Card 4 */}
        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
              {trendTendence === "+" ? (
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
      <section className="grid gap-5 xl:grid-cols-[1fr_380px] 2xl:grid-cols-[1fr_460px] 2xl:gap-8">
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
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-blue-100 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Relatório completo
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {subjects.map((subject) => (
              <article
                key={subject.name}
                className="rounded-3xl border border-blue-100 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50/40 md:p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                      <BarChart3 className="size-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-blue-950 md:text-base">
                        {subject.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {subject.status}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {subject.percent}%
                  </span>
                </div>

                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-blue-700"
                      style={{ width: `${subject.percent}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
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

            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-blue-50/70 p-3 text-sm font-bold text-slate-700">
              {trendTendence === "+" ? (
                <TrendingUp className="size-4 text-blue-700" />
              ) : (
                <TrendingDown className="size-4 text-blue-700" />
              )}
              {trendProjection} de evolução mensal
            </div>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-700 to-blue-950 p-5 text-white shadow-sm md:rounded-4xl 2xl:p-6">
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
          </div>

          <button
            type="button"
            onClick={() => navigate("/student/simulados")}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-blue-100 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Ver todos
          </button>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {allSimulations.length > 0 ? (
            allSimulations.map((simulation) => (
              <article
                key={simulation.publicId}
                className="rounded-3xl border border-blue-100 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50/40 md:p-5"
              >
                <div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                  <BookOpenCheck className="size-5" />
                </div>

                <h3 className="mt-4 line-clamp-2 text-sm font-bold text-blue-950 md:text-base">
                  {simulation.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 md:text-sm">
                  {simulation.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {simulation.requiredPlan}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/student/simulados/${simulation.publicId}`)
                    }
                    className="grid size-9 cursor-pointer place-items-center rounded-full bg-blue-700 text-white transition hover:bg-blue-800"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </article>
            ))
          ) : (
            <article className="rounded-3xl border border-blue-100 bg-blue-50/40 p-5 lg:col-span-3">
              <p className="text-sm font-bold text-blue-950">
                Nenhum simulado disponível no momento.
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Quando novos simulados forem publicados, eles aparecerão aqui.
              </p>
            </article>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProDashboard;
