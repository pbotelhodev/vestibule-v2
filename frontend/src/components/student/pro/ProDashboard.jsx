import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FilePenLine,
  LineChart,
  ShieldCheck,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";

// Interface demonstrativa: dados fixos, sem API, estado ou lógica de negócio.
const ProDashboard = () => {
  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      {/* Cabeçalho */}
      <section className="relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white/95 p-4 shadow-sm sm:rounded-xl sm:p-5 md:p-6 2xl:p-7">
        <div className="pointer-events-none absolute inset-0 bg-white" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-size-[56px_56px] opacity-30" />
        <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-blue-100/70 md:size-64" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 size-56 rounded-full bg-blue-200/50 md:size-64" />
        <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_21rem]">
          <div className="min-w-0">
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl 2xl:text-[42px]">
              Olá, Aluno.
              <span className="block text-blue-700">
                Sua preparação agora tem mais ritmo.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Acompanhe sua evolução por matéria, identifique onde melhorar e
              continue treinando com foco.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-800 hover:shadow-md"
              >
                Escolher simulado <ArrowRight className="size-4" />
              </button>
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition duration-200 hover:border-blue-200 hover:bg-blue-50"
              >
                Ver desempenho <BarChart3 className="size-4" />
              </button>
            </div>
          </div>

          <aside className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm shadow-slate-900/5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Seu plano
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-blue-950">
                  Pro
                </h2>
              </div>
              <div className="grid size-10 place-items-center rounded-lg bg-blue-50 text-blue-700">
                <Trophy className="size-5" />
              </div>
            </div>
            <div className="mt-5 divide-y divide-slate-100 border-t border-slate-100">
              <div className="flex items-center justify-between gap-3 py-3">
                <span className="text-xs font-medium text-slate-500">
                  Evolução mensal
                </span>
                <strong className="text-sm font-bold text-blue-700">
                  +12%
                </strong>
              </div>
              <div className="flex items-center justify-between gap-3 py-3">
                <span className="text-xs font-medium text-slate-500">
                  Anúncios
                </span>
                <strong className="text-xs font-semibold text-slate-700">
                  Desativados
                </strong>
              </div>
              <div className="flex items-center justify-between gap-3 pt-3">
                <span className="text-xs font-medium text-slate-500">
                  Relatórios
                </span>
                <strong className="text-xs font-semibold text-blue-700">
                  Por matéria
                </strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Métricas demonstrativas */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-xl sm:p-5 2xl:p-6">
          <div className="grid size-11 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
            <BookOpenCheck className="size-5" />
          </div>
          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            12
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Simulados feitos
          </p>
        </article>
        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-xl sm:p-5 2xl:p-6">
          <div className="grid size-11 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
            <Target className="size-5" />
          </div>
          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            82%
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Taxa de acertos
          </p>
        </article>
        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-xl sm:p-5 2xl:p-6">
          <div className="grid size-11 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
            <Clock3 className="size-5" />
          </div>
          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            8h 20min
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Tempo estudado (Últimos 7 dias)
          </p>
        </article>
        <article className="group rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:rounded-xl sm:p-5 2xl:p-6">
          <div className="grid size-11 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
            <TrendingUp className="size-5" />
          </div>
          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            +12%
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Evolução mensal
          </p>
        </article>
      </section>

      {/* Desempenho por matéria */}
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] 2xl:gap-8">
        <div className="rounded-[1.75rem] border border-blue-100 bg-white/95 p-4 shadow-sm sm:rounded-xl sm:p-5 md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">
                Desempenho
              </p>
              <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                Evolução por matéria
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Identifique suas melhores áreas e os conteúdos que merecem mais
                atenção.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex w-fit cursor-pointer items-center justify-center rounded-lg border border-blue-100 bg-white px-4 py-2.5 text-xs font-bold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              Ver relatório
            </button>
          </div>
          {/* Lista de matérias com rolagem vertical */}
          <div className="mt-6 max-h-162.5 min-h-0 overflow-y-auto overscroll-contain pr-2 [scrollbar-color:#bfdbfe_transparent] [scrollbar-width:thin]">
            {/* Cards de desempenho — Plano Pro */}
            <div className="grid gap-4 pb-1">
              {/* 1. Linguagens */}
              <article className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold tracking-tight text-blue-950">
                        Linguagens
                      </h3>
                    </div>

                    <p className="mt-2 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
                      Continue revisando interpretação de texto e literatura
                      para manter seus resultados.
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-2xl font-bold tracking-tight text-blue-700">
                      86%
                    </span>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                      Acertos
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                    <div className="h-full w-[86%] rounded-full bg-blue-700" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <BookOpenCheck className="size-3.5 text-blue-700" />4
                    simulados realizados
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700">
                    <TrendingUp className="size-3.5" />
                    Em destaque
                  </span>
                </div>
              </article>

              {/* 2. Matemática */}
              <article className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold tracking-tight text-blue-950">
                        Matemática
                      </h3>
                    </div>

                    <p className="mt-2 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
                      Reforce álgebra, geometria e resolução de problemas para
                      melhorar sua precisão.
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-2xl font-bold tracking-tight text-blue-700">
                      74%
                    </span>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                      Acertos
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                    <div className="h-full w-[74%] rounded-full bg-blue-700" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <BookOpenCheck className="size-3.5 text-blue-700" />3
                    simulados realizados
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700">
                    <TrendingUp className="size-3.5" />
                    Em progresso
                  </span>
                </div>
              </article>

              {/* 3. Ciências Humanas */}
              <article className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold tracking-tight text-blue-950">
                        Ciências Humanas
                      </h3>
                    </div>

                    <p className="mt-2 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
                      Mantenha a constância em história, geografia, filosofia e
                      sociologia.
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-2xl font-bold tracking-tight text-blue-700">
                      81%
                    </span>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                      Acertos
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                    <div className="h-full w-[81%] rounded-full bg-blue-700" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <BookOpenCheck className="size-3.5 text-blue-700" />3
                    simulados realizados
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700">
                    <TrendingUp className="size-3.5" />
                    Bom ritmo
                  </span>
                </div>
              </article>

              {/* 4. Ciências da Natureza */}
              <article className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold tracking-tight text-blue-950">
                        Ciências da Natureza
                      </h3>
                    </div>

                    <p className="mt-2 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
                      Priorize a revisão dos fundamentos de física, química e
                      biologia para melhorar seus resultados.
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-2xl font-bold tracking-tight text-blue-700">
                      68%
                    </span>
                    <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                      Acertos
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                    <div className="h-full w-[68%] rounded-full bg-blue-700" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <BookOpenCheck className="size-3.5 text-blue-700" />2
                    simulados realizados
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700">
                    <Target className="size-3.5" />
                    Foco recomendado
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>

        <aside className="space-y-5 md:space-y-6">
          <article className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm 2xl:p-6">
            <div className="grid size-10 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700">
              <LineChart className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-blue-950">
              Leitura rápida
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Seu desempenho em Linguagens está acima da média geral. Reserve
              mais tempo para Ciências da Natureza.
            </p>
            <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm font-medium leading-6 text-blue-800">
              Média geral demonstrativa: 82% de acertos.
            </div>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-purple-700/30 bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 p-5 text-white shadow-sm shadow-purple-950/15 2xl:p-6">
            <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full border border-white/10" />

            <div className="relative z-10">
              <div className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/15">
                <FilePenLine className="size-5" strokeWidth={1.8} />
              </div>

              <h3 className="mt-3 text-lg font-bold tracking-tight">
                Sua redação corrigida por IA
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85">
                Evolua sua escrita com correções inteligentes, análises por
                competência e orientações para melhorar sua nota no ENEM.
              </p>

              <button
                type="button"
                className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-purple-800 shadow-sm transition-all duration-200 hover:bg-purple-50 hover:shadow-md active:scale-[0.98]"
              >
                Conhecer Premium
                <ArrowRight className="size-4" />
              </button>
            </div>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm 2xl:p-6">
            {/* Ícone */}
            <div className="flex size-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700">
              <Target className="size-5" />
            </div>

            {/* Cabeçalho */}
            <h3 className="mt-4 text-lg font-bold text-blue-950">
              Meta semanal
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Mantenha a constância nos estudos e acompanhe seu progresso ao
              longo da semana.
            </p>

            {/* Progresso demonstrativo */}
            <div className="mt-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-500">
                  Horas de estudo
                </span>
                <span className="text-sm font-bold text-blue-700">
                  6h / 10h
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-[60%] rounded-full bg-blue-700" />
              </div>

              <p className="mt-3 text-xs font-medium text-slate-400">
                Faltam 4 horas para alcançar sua meta.
              </p>
            </div>
          </article>
        </aside>
      </section>

      {/* Simulados */}
      <section className="rounded-[1.75rem] border border-blue-100 bg-white/95 p-4 shadow-sm sm:rounded-xl sm:p-5 md:p-6 2xl:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">
              Simulados
            </p>
            <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
              Explore os simulados
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Escolha uma área de conhecimento e continue seus estudos no plano
              Pro.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex w-fit cursor-pointer items-center justify-center rounded-lg border border-blue-100 bg-white px-4 py-2.5 text-xs font-bold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            Ver simulados
          </button>
        </div>

        {/* Cards de simulados — Plano Pro */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* Simulado de Linguagens */}
          <article className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                ENEM
              </span>
              <span className="text-xs font-medium text-slate-400">
                Linguagens e Códigos
              </span>
            </div>

            <h3 className="text-base font-bold tracking-tight text-blue-950 group-hover:text-blue-700">
              Simulado de Linguagens
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Exercite interpretação de texto, literatura e linguagens.
            </p>

            <div className="mt-auto pt-5">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpenCheck className="size-3.5 text-blue-700" />
                  45 questões
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5 text-blue-700" />
                  90 minutos
                </span>
              </div>

              <button
                type="button"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Iniciar
                <ArrowRight className="size-4" />
              </button>
            </div>
          </article>

          {/* Simulado de Matemática */}
          <article className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                ENEM
              </span>
              <span className="text-xs font-medium text-slate-400">
                Matemática e suas Tecnologias
              </span>
            </div>

            <h3 className="text-base font-bold tracking-tight text-blue-950 group-hover:text-blue-700">
              Simulado de Matemática
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Pratique raciocínio lógico, álgebra, geometria e resolução de
              problemas.
            </p>

            <div className="mt-auto pt-5">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpenCheck className="size-3.5 text-blue-700" />
                  45 questões
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5 text-blue-700" />
                  90 minutos
                </span>
              </div>

              <button
                type="button"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Iniciar
                <ArrowRight className="size-4" />
              </button>
            </div>
          </article>

          {/* Simulado de Ciências da Natureza */}
          <article className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                ENEM
              </span>
              <span className="text-xs font-medium text-slate-400">
                Ciências da Natureza
              </span>
            </div>

            <h3 className="text-base font-bold tracking-tight text-blue-950 group-hover:text-blue-700">
              Simulado de Ciências da Natureza
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Teste seus conhecimentos em biologia, física e química.
            </p>

            <div className="mt-auto pt-5">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpenCheck className="size-3.5 text-blue-700" />
                  45 questões
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5 text-blue-700" />
                  90 minutos
                </span>
              </div>

              <button
                type="button"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Iniciar
                <ArrowRight className="size-4" />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ProDashboard;
