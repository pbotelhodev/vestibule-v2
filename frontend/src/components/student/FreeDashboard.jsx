/* eslint-disable no-unused-vars */
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  Clock3,
  Lock,
  Megaphone,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

const stats = [
  {
    label: "Simulados feitos",
    value: "03",
    helper: "Neste mês",
    Icon: BookOpenCheck,
  },
  {
    label: "Taxa de acerto",
    value: "68%",
    helper: "Média geral",
    Icon: Target,
  },
  {
    label: "Tempo estudado",
    value: "12h",
    helper: "Últimos 7 dias",
    Icon: Clock3,
  },
];

const freeSimulations = [
  {
    title: "ENEM — Matemática básica",
    description: "Questões essenciais para treinar fundamentos.",
    status: "Liberado",
    progress: 68,
  },
  {
    title: "ENEM — Linguagens inicial",
    description: "Interpretação, gêneros textuais e leitura.",
    status: "Liberado",
    progress: 32,
  },
  {
    title: "Ciências da Natureza",
    description: "Disponível no plano Pro.",
    status: "Bloqueado",
    progress: 0,
    locked: true,
  },
];

const FreeDashboard = ({ student }) => {
  const firstName = student?.name?.split(" ")?.[0] || "Aluno";

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 xl:p-8 2xl:p-10">
          {/* Fundo branco sólido */}
          <div className="absolute inset-0 bg-white" />

          {/* Bolas grandes laterais sólidas */}
          <div className="absolute -top-24 -right-20 size-64 rounded-full bg-violet-200/70 md:size-72 xl:size-80" />
          <div className="absolute -bottom-28 -left-20 size-64 rounded-full bg-blue-100/80 md:size-72 xl:size-80" />
          <div className="absolute top-1/2 right-1/4 size-44 -translate-y-1/2 rounded-full bg-amber-100/80 md:size-56" />

          {/* Formas suaves de fundo */}
          <div className="absolute top-10 right-16 hidden size-20 rounded-4xl border border-violet-100 bg-white/50 shadow-sm backdrop-blur-md md:block" />
          <div className="absolute bottom-12 left-18 hidden size-24 rounded-full border border-blue-100 bg-white/50 shadow-sm backdrop-blur-md lg:block" />
          <div className="absolute right-1/3 bottom-10 hidden size-16 rounded-4xl border border-amber-100 bg-white/50 shadow-sm backdrop-blur-md xl:block" />

          {/* Bolinhas coloridas flutuantes */}
          <div className="absolute top-12 left-14 size-2.5 rounded-full bg-violet-500/60" />
          <div className="absolute top-24 right-32 size-3 rounded-full bg-blue-500/50" />
          <div className="absolute top-1/2 right-16 size-2.5 rounded-full bg-amber-400/80" />
          <div className="absolute bottom-20 left-24 size-3 rounded-full bg-violet-400/60" />
          <div className="absolute right-1/3 bottom-16 size-2 rounded-full bg-blue-400/60" />
          <div className="absolute top-1/3 left-1/2 size-2 rounded-full bg-amber-400/70" />

          {/* Bolinhas extras só em telas maiores */}
          <div className="absolute top-32 left-1/3 hidden size-1.5 rounded-full bg-violet-500/50 md:block" />
          <div className="absolute right-1/2 bottom-28 hidden size-1.5 rounded-full bg-blue-500/50 lg:block" />
          <div className="absolute top-18 right-1/2 hidden size-2 rounded-full bg-amber-400/60 xl:block" />

          <div className="relative z-10 grid gap-7 xl:grid-cols-[1fr_380px] xl:items-center 2xl:grid-cols-[1fr_460px] 2xl:gap-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-3 py-1.5 text-xs font-bold text-violet-600 shadow-sm backdrop-blur-md">
                <Zap className="size-4" />
                Plano Free
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl xl:max-w-2xl xl:text-4xl 2xl:text-6xl">
                Olá, {firstName}. Comece sua evolução com simulados gratuitos.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7 2xl:text-lg 2xl:leading-8">
                Treine com simulados liberados, acompanhe sua média inicial e
                descubra onde melhorar. O plano Free é ideal para começar sem
                compromisso.
              </p>

              <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-md"
                >
                  Começar simulado grátis
                  <ArrowRight className="size-4" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-violet-100 bg-white/80 px-5 py-3 text-sm font-bold text-violet-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-md"
                >
                  Comparar planos
                </button>
              </div>
            </div>

            {/* Card do plano */}
            <aside className="rounded-3xl border border-violet-100 bg-white/80 p-4 shadow-sm backdrop-blur-md md:p-5 2xl:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                    Seu plano
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-blue-950 2xl:text-3xl">
                    Free
                  </h2>
                </div>

                <div className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                  <Sparkles className="size-5" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-violet-50/60 p-4">
                <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Uso semanal</span>
                  <span>68%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-violet-100">
                  <div className="h-full w-[68%] rounded-full bg-violet-600" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-violet-50/60 p-3">
                  <p className="text-xs font-medium text-slate-500">
                    Liberados
                  </p>
                  <p className="mt-1 text-sm font-bold text-blue-950">
                    2 simulados
                  </p>
                </div>

                <div className="rounded-2xl bg-violet-50/60 p-3">
                  <p className="text-xs font-medium text-slate-500">Anúncios</p>
                  <p className="mt-1 text-sm font-bold text-blue-950">
                    Ativos
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {/* Stats */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stats.map(({ label, value, helper, Icon }) => (
          <article
            key={label}
            className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md 2xl:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                <Icon className="size-5" />
              </div>

              <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-600">
                {helper}
              </span>
            </div>

            <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
              {value}
            </p>

            <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
          </article>
        ))}
      </section>

      {/* Conteúdo principal */}
      <section className="grid gap-5 xl:grid-cols-[1fr_340px] 2xl:grid-cols-[1fr_460px] 2xl:gap-8">
        {/* Simulados */}
        <div className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500">
                Simulados
              </p>

              <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                Disponíveis no plano Free
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Comece pelos simulados liberados e acompanhe seu progresso
                inicial.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-violet-100 px-4 py-2.5 text-xs font-bold text-violet-600 transition hover:bg-violet-50"
            >
              Ver todos
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {freeSimulations.map((simulation) => (
              <article
                key={simulation.title}
                className={[
                  "rounded-3xl border p-4 transition md:p-5",
                  simulation.locked
                    ? "border-violet-100 bg-violet-50/40"
                    : "border-violet-100 bg-white hover:border-violet-200 hover:bg-violet-50/40",
                ].join(" ")}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-3">
                    <div
                      className={[
                        "grid size-11 shrink-0 place-items-center rounded-2xl",
                        simulation.locked
                          ? "bg-white text-slate-400"
                          : "bg-violet-50 text-violet-600",
                      ].join(" ")}
                    >
                      {simulation.locked ? (
                        <Lock className="size-5" />
                      ) : (
                        <BookOpenCheck className="size-5" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-blue-950 md:text-base">
                        {simulation.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">
                        {simulation.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 lg:justify-end">
                    <span
                      className={[
                        "rounded-full px-3 py-1 text-xs font-bold",
                        simulation.locked
                          ? "bg-white text-slate-400"
                          : "bg-violet-50 text-violet-600",
                      ].join(" ")}
                    >
                      {simulation.status}
                    </span>

                    <button
                      type="button"
                      className={[
                        "grid size-9 place-items-center rounded-full transition",
                        simulation.locked
                          ? "bg-violet-100 text-slate-400"
                          : "bg-violet-600 text-white hover:bg-violet-700",
                      ].join(" ")}
                    >
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>

                {!simulation.locked && (
                  <div className="mt-4">
                    <div className="mb-2 flex justify-between text-xs font-bold text-slate-500">
                      <span>Progresso</span>
                      <span>{simulation.progress}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-violet-100">
                      <div
                        className="h-full rounded-full bg-violet-600"
                        style={{ width: `${simulation.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Lateral */}
        <aside className="space-y-5 md:space-y-6">
          {/* Anúncio */}
          <article className="rounded-3xl border border-amber-200 bg-amber-50/70 p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-white text-amber-500 shadow-sm">
                <Megaphone className="size-5" />
              </div>

              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-600 shadow-sm">
                Patrocinado
              </span>
            </div>

            <h3 className="mt-5 text-lg font-bold text-blue-950">
              Materiais para estudar melhor
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Espaço reservado para parceiros educacionais, cursos, materiais e
              oportunidades relevantes para estudantes.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700 md:w-auto"
            >
              Conhecer parceiro
              <ArrowRight className="size-4" />
            </button>
          </article>

          {/* Upgrade */}
          <article className="rounded-3xl border border-violet-100 bg-linear-to-br from-violet-600 to-blue-700 p-5 text-white shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-white/15">
              <Trophy className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold">Estude sem anúncios</h3>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Faça upgrade para desbloquear mais simulados, relatórios por
              matéria e uma experiência mais completa.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-bold text-violet-700 transition hover:bg-violet-50 md:w-auto"
            >
              Ver planos
            </button>
          </article>

          {/* Resumo */}
        </aside>
      </section>
    </div>
  );
};

export default FreeDashboard;
