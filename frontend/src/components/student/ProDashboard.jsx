/* eslint-disable no-unused-vars */
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  LineChart,
  Trophy,
  Target,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    label: "Simulados feitos",
    value: "18",
    helper: "Neste mês",
    Icon: BookOpenCheck,
  },
  {
    label: "Taxa de acerto",
    value: "74%",
    helper: "Média geral",
    Icon: Target,
  },
  {
    label: "Tempo estudado",
    value: "26h",
    helper: "Últimos 7 dias",
    Icon: Clock3,
  },
  {
    label: "Evolução",
    value: "+21%",
    helper: "Último mês",
    Icon: TrendingUp,
  },
];

const subjects = [
  {
    name: "Linguagens",
    percent: 81,
    status: "Melhor matéria",
  },
  {
    name: "Matemática",
    percent: 72,
    status: "Em evolução",
  },
  {
    name: "Humanas",
    percent: 76,
    status: "Boa média",
  },
  {
    name: "Natureza",
    percent: 64,
    status: "Precisa revisar",
  },
  
];

const simulations = [
  {
    title: "ENEM — Matemática e suas Tecnologias",
    description: "Simulado com foco em resolução, gráficos e funções.",
    status: "Continuar",
    progress: 72,
  },
  {
    title: "ENEM — Linguagens completo",
    description: "Interpretação, gramática, literatura e gêneros textuais.",
    status: "Finalizado",
    progress: 100,
  },
  {
    title: "Ciências Humanas — Revisão geral",
    description: "História, geografia, filosofia e sociologia.",
    status: "Disponível",
    progress: 0,
  },
];

const ProDashboard = ({ student }) => {
  const firstName = student?.name?.split(" ")?.[0] || "Aluno";

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 xl:p-8 2xl:p-10">
        {/* Fundo branco sólido */}
        <div className="absolute inset-0 bg-white" />

        {/* Bolas grandes laterais sólidas */}
        <div className="absolute -top-24 -right-20 size-64 rounded-full bg-blue-100/80 md:size-72 xl:size-80" />
        <div className="absolute -bottom-28 -left-20 size-64 rounded-full bg-violet-100/70 md:size-72 xl:size-80" />
        <div className="absolute top-1/2 right-1/4 size-44 -translate-y-1/2 rounded-full bg-amber-100/80 md:size-56" />

        {/* Formas suaves */}
        <div className="absolute top-10 right-16 hidden size-20 rounded-4xl border border-blue-100 bg-white/50 shadow-sm backdrop-blur-md md:block" />
        <div className="absolute bottom-12 left-18 hidden size-24 rounded-full border border-violet-100 bg-white/50 shadow-sm backdrop-blur-md lg:block" />
        <div className="absolute right-1/3 bottom-10 hidden size-16 rounded-4xl border border-amber-100 bg-white/50 shadow-sm backdrop-blur-md xl:block" />

        {/* Bolinhas flutuantes */}
        <div className="absolute top-12 left-14 size-2.5 rounded-full bg-blue-600/60" />
        <div className="absolute top-24 right-32 size-3 rounded-full bg-violet-500/50" />
        <div className="absolute top-1/2 right-16 size-2.5 rounded-full bg-amber-400/80" />
        <div className="absolute bottom-20 left-24 size-3 rounded-full bg-blue-400/60" />
        <div className="absolute right-1/3 bottom-16 size-2 rounded-full bg-violet-400/60" />
        <div className="absolute top-1/3 left-1/2 size-2 rounded-full bg-amber-400/70" />

        <div className="relative z-10 grid gap-7 xl:grid-cols-[1fr_380px] xl:items-center 2xl:grid-cols-[1fr_460px] 2xl:gap-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-md">
              <Trophy className="size-4" />
              Plano Pro
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl xl:max-w-2xl xl:text-4xl 2xl:text-6xl">
              Olá, {firstName}. Sua preparação agora tem mais ritmo.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7 2xl:text-lg 2xl:leading-8">
              Estude sem anúncios, acesse mais simulados e acompanhe sua
              evolução por matéria com relatórios mais claros.
            </p>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md"
              >
                Continuar simulado
                <ArrowRight className="size-4" />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-blue-100 bg-white/80 px-5 py-3 text-sm font-bold text-blue-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-md"
              >
                Ver desempenho
              </button>
            </div>
          </div>

          {/* Card do plano */}
          <aside className="rounded-3xl border border-blue-100 bg-white/80 p-4 shadow-sm backdrop-blur-md md:p-5 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                  Seu plano
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950 2xl:text-3xl">
                  Pro
                </h2>
              </div>

              <div className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                <Trophy className="size-5" />
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-blue-50/70 p-4">
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Evolução mensal</span>
                <span>+21%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-[74%] rounded-full bg-blue-700" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-blue-50/70 p-3">
                <p className="text-xs font-medium text-slate-500">Anúncios</p>
                <p className="mt-1 text-sm font-bold text-slate-950">Zero</p>
              </div>

              <div className="rounded-2xl bg-blue-50/70 p-3">
                <p className="text-xs font-medium text-slate-500">Relatórios</p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  Por matéria
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, helper, Icon }) => (
          <article
            key={label}
            className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md 2xl:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon className="size-5" />
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {helper}
              </span>
            </div>

            <p className="mt-5 text-3xl font-bold tracking-tight text-slate-950 2xl:text-4xl">
              {value}
            </p>

            <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
          </article>
        ))}
      </section>

      {/* Conteúdo principal */}
      <section className="grid gap-5 xl:grid-cols-[1fr_380px] 2xl:grid-cols-[1fr_460px] 2xl:gap-8">
        {/* Desempenho */}
        <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Desempenho
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-950 md:text-2xl">
                Evolução por matéria
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Veja onde você está avançando e quais matérias precisam de mais
                atenção.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-blue-100 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-50"
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
                      <h3 className="text-sm font-bold text-slate-950 md:text-base">
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

        {/* Lateral */}
        <aside className="space-y-5 md:space-y-6">
          <article className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
              <LineChart className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Leitura rápida
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Seu desempenho está subindo em Linguagens e Humanas. Natureza
              merece uma revisão mais focada nesta semana.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-blue-50/70 p-3 text-sm font-bold text-slate-700">
              <TrendingUp className="size-4 text-blue-700" />
              +21% de evolução mensal
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
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-50 md:w-auto"
            >
              Explorar recursos
            </button>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-600">
              <CalendarDays className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Próximo simulado
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Continue pelo simulado de Matemática para atualizar sua análise de
              desempenho.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-800 md:w-auto"
            >
              Continuar
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

            <h2 className="mt-2 text-xl font-bold text-slate-950 md:text-2xl">
              Continue de onde parou
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-blue-100 px-4 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Ver todos
          </button>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {simulations.map((simulation) => (
            <article
              key={simulation.title}
              className="rounded-3xl border border-blue-100 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50/40 md:p-5"
            >
              <div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                <BookOpenCheck className="size-5" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-slate-950 md:text-base">
                {simulation.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                {simulation.description}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {simulation.status}
                </span>

                <button
                  type="button"
                  className="grid size-9 place-items-center rounded-full bg-blue-700 text-white transition hover:bg-blue-800"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>

              {simulation.progress > 0 && (
                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-blue-700"
                      style={{ width: `${simulation.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProDashboard;
