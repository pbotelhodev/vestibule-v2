import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Brain,
  CalendarCheck2,
  Clock3,
  Crown,
  FilePenLine,
  GraduationCap,
  Star,
  Target,
  TrendingUp,
  Trophy,
  WandSparkles,
  Zap,
} from "lucide-react";

// Layout demonstrativo: somente JSX e valores fixos, sem lógica de negócio.
const PremiumDashboard = () => (
  <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
    {/* Cabeçalho Premium — mesmo alinhamento estrutural dos planos Free e Pro */}
    <section className="relative overflow-hidden rounded-[1.75rem] border border-purple-100 bg-white/95 p-4 shadow-sm sm:rounded-xl sm:p-5 md:p-6 2xl:p-7">
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f3e8ff_1px,transparent_1px),linear-gradient(to_bottom,#f3e8ff_1px,transparent_1px)] bg-size-[56px_56px] opacity-30" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-purple-100/70 md:size-64" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 size-56 rounded-full bg-blue-100/70 md:size-64" />
      <div className="pointer-events-none absolute right-1/3 top-1/2 hidden size-36 -translate-y-1/2 rounded-full bg-teal-100/60 md:block" />
      <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="min-w-0">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl 2xl:text-[42px]">
            Olá, Aluno.
            <span className="block bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
              Sua preparação agora é estratégica.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Acompanhe sua evolução, identifique prioridades de estudo e
            desenvolva sua redação com recursos avançados.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:shadow-purple-700/25"
            >
              Ver análise detalhada <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-purple-200 bg-white px-6 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
            >
              Acessar trilhas <GraduationCap className="size-4" />
            </button>
          </div>
        </div>
        <aside className="rounded-lg border border-purple-100 bg-white p-5 shadow-sm shadow-slate-900/5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Seu plano
              </p>
              <h2 className="mt-1 bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                Premium
              </h2>
            </div>
            <div className="grid size-10 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700">
              <Crown className="size-5" />
            </div>
          </div>
          <div className="mt-5 divide-y divide-slate-100 border-t border-slate-100">
            <div className="flex items-center justify-between gap-3 py-3">
              <span className="text-xs font-medium text-slate-500">
                Análise avançada
              </span>
              <strong className="text-xs font-semibold text-purple-700">
                Inclusa no plano
              </strong>
            </div>
            <div className="flex items-center justify-between gap-3 py-3">
              <span className="text-xs font-medium text-slate-500">
                Trilhas de estudo
              </span>
              <strong className="text-xs font-semibold text-purple-700">
                Personalizadas
              </strong>
            </div>
            <div className="flex items-center justify-between gap-3 pt-3">
              <span className="text-xs font-medium text-slate-500">
                Redação com IA
              </span>
              <strong className="text-xs font-semibold text-purple-700">
                Prevista
              </strong>
            </div>
          </div>
        </aside>
      </div>
    </section>

    {/* Indicadores fixos */}
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <article className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md 2xl:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="grid size-11 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
            <BookOpenCheck className="size-5" />
          </div>
        </div>
        <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
          18
        </p>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Simulados feitos
        </p>
      </article>
      <article className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md 2xl:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="grid size-11 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
            <Target className="size-5" />
          </div>
        </div>
        <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
          84%
        </p>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Taxa de acertos
        </p>
      </article>
      <article className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md 2xl:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="grid size-11 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
            <Clock3 className="size-5" />
          </div>
        </div>
        <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
          11h 20min
        </p>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Tempo estudado
        </p>
      </article>
      <article className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md 2xl:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="grid size-11 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
            <TrendingUp className="size-5" />
          </div>
        </div>
        <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
          +15%
        </p>
        <p className="mt-1 text-sm font-medium text-slate-500">
          Evolução mensal
        </p>
      </article>
      <article className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md 2xl:p-6 sm:col-span-2 xl:col-span-1">
        <div className="flex items-center justify-between gap-2">
          <div className="grid size-11 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
            <Trophy className="size-5" />
          </div>
        </div>
        <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
          #24
        </p>
        <p className="mt-1 text-sm font-medium text-slate-500">Ranking</p>
      </article>
    </section>

    {/* Inteligência Premium */}
    <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] 2xl:gap-8">
      <div className="rounded-[1.75rem] border border-purple-100 bg-white/95 p-4 shadow-sm sm:rounded-xl sm:p-5 md:p-6 2xl:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-600">
              Inteligência Premium
            </p>
            <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
              Análise avançada da sua evolução
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Diagnóstico de prioridades, consistência e desempenho por área.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex w-fit cursor-pointer items-center justify-center rounded-lg border border-purple-200 bg-white px-4 py-2.5 text-xs font-bold text-purple-700 shadow-sm transition hover:bg-purple-50"
          >
            Ver relatório completo
          </button>
        </div>
        {/* Prioridade principal demonstrativa */}
        <article className="relative mt-6 overflow-hidden rounded-2xl border border-purple-200 bg-linear-to-br from-purple-50 via-white to-blue-50 p-5">
          <div className="relative z-10">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg border border-purple-200 bg-white text-purple-700">
                  <Brain className="size-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                    Foco recomendado
                  </p>
                  <h3 className="mt-1 text-base font-bold text-blue-950">
                    Prioridade de estudo
                  </h3>
                </div>
              </div>
              <span className="rounded-md border border-purple-200 bg-white px-2.5 py-1 text-xs font-bold text-purple-700">
                68% de acertos
              </span>
            </div>
            <p className="mt-5 bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              Ciências da Natureza
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Priorize questões de física e química para fortalecer os
              fundamentos antes do próximo simulado.
            </p>
            <div className="mt-5 flex items-center justify-between gap-3 text-xs font-semibold text-slate-500">
              <span>Taxa de acertos demonstrativa</span>
              <span>68%</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-purple-100">
              <div className="h-full w-[68%] rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500" />
            </div>
          </div>
        </article>
        {/* Indicadores complementares */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-2xl border border-purple-100 bg-white p-4 transition hover:border-purple-200 hover:bg-purple-50/30">
            <div className="flex items-start justify-between gap-2">
              <div className="grid size-9 place-items-center rounded-lg border border-purple-100 bg-purple-50 text-purple-700">
                <CalendarCheck2 className="size-4" />
              </div>
              <span className="text-[11px] font-semibold text-purple-700">
                5 de 7 dias
              </span>
            </div>
            <h3 className="mt-3 text-sm font-bold text-blue-950">
              Consistência recente
            </h3>
            <p className="mt-1 text-xl font-bold text-blue-950">71%</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Frequência demonstrativa de atividade nos estudos.
            </p>
          </article>
          <article className="rounded-2xl border border-purple-100 bg-white p-4 transition hover:border-purple-200 hover:bg-purple-50/30">
            <div className="flex items-start justify-between gap-2">
              <div className="grid size-9 place-items-center rounded-lg border border-purple-100 bg-purple-50 text-purple-700">
                <Star className="size-4" />
              </div>
              <span className="text-[11px] font-semibold text-purple-700">
                86% de acertos
              </span>
            </div>
            <h3 className="mt-3 text-sm font-bold text-blue-950">
              Área dominante
            </h3>
            <p className="mt-1 text-xl font-bold text-blue-950">Linguagens</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Seu melhor desempenho entre as áreas avaliadas.
            </p>
          </article>
          <article className="rounded-2xl border border-purple-100 bg-white p-4 transition hover:border-purple-200 hover:bg-purple-50/30">
            <div className="flex items-start justify-between gap-2">
              <div className="grid size-9 place-items-center rounded-lg border border-purple-100 bg-purple-50 text-purple-700">
                <BarChart3 className="size-4" />
              </div>
              <span className="text-[11px] font-semibold text-purple-700">
                Atenção
              </span>
            </div>
            <h3 className="mt-3 text-sm font-bold text-blue-950">
              Equilíbrio entre áreas
            </h3>
            <p className="mt-1 text-xl font-bold text-blue-950">18 pts</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Diferença entre a maior e a menor taxa de acertos.
            </p>
          </article>
          <article className="rounded-2xl border border-purple-100 bg-white p-4 transition hover:border-purple-200 hover:bg-purple-50/30">
            <div className="flex items-start justify-between gap-2">
              <div className="grid size-9 place-items-center rounded-lg border border-purple-100 bg-purple-50 text-purple-700">
                <Brain className="size-4" />
              </div>
              <span className="text-[11px] font-semibold text-purple-700">
                Áreas avaliadas
              </span>
            </div>
            <h3 className="mt-3 text-sm font-bold text-blue-950">
              Cobertura de matérias
            </h3>
            <p className="mt-1 text-xl font-bold text-blue-950">04</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Matérias presentes no histórico demonstrativo.
            </p>
          </article>
        </div>
        {/* Desempenho por matéria */}
        <div className="mt-6 rounded-2xl border border-purple-100 bg-purple-50/30 p-4 md:p-5">
          <h3 className="text-base font-bold text-blue-950">
            Desempenho por matéria
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Valores ilustrativos para composição visual do relatório.
          </p>
          <div className="mt-4 max-h-125 space-y-3 overflow-y-auto overscroll-contain pr-2 pb-1 [scrollbar-color:#c4b5fd_transparent] [scrollbar-width:thin]">
            <article className="rounded-xl border border-purple-100 bg-white p-4 transition hover:border-purple-200">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-blue-950">
                    Linguagens e Códigos
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Seu ponto forte: mantenha revisões leves.
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    4 simulados realizados
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700">
                  86%
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-purple-100">
                <div className="h-full w-[86%] rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500" />
              </div>
            </article>
            <article className="rounded-xl border border-purple-100 bg-white p-4 transition hover:border-purple-200">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-blue-950">
                    Matemática
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Reforce problemas de álgebra e geometria.
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    5 simulados realizados
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700">
                  74%
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-purple-100">
                <div className="h-full w-[74%] rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500" />
              </div>
            </article>
            <article className="rounded-xl border border-purple-100 bg-white p-4 transition hover:border-purple-200">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-blue-950">
                    Ciências Humanas
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Mantenha a constância em história e geografia.
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    5 simulados realizados
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700">
                  81%
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-purple-100">
                <div className="h-full w-[81%] rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500" />
              </div>
            </article>
            <article className="rounded-xl border border-purple-100 bg-white p-4 transition hover:border-purple-200">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-blue-950">
                    Ciências da Natureza
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Dedique mais atenção à física e química.
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    4 simulados realizados
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700">
                  68%
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-purple-100">
                <div className="h-full w-[68%] rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500" />
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* Coluna lateral */}

      <aside className="space-y-5 md:space-y-6">
        {/* Card 1 — Próxima recomendação */}
        <article className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm 2xl:p-6">
          <div className="grid size-10 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700">
            <WandSparkles className="size-5" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-blue-950">
            Próxima recomendação
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Revise os fundamentos de Ciências da Natureza antes de realizar
            outro simulado completo.
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-lg border border-purple-100 bg-purple-50 px-4 py-3 text-xs font-semibold text-purple-700">
            <Zap className="size-4 shrink-0" />
            Prioridade de estudo: alta
          </div>
        </article>

        {/* Card 2 — Recursos Premium */}
        <article className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                Recursos
              </p>
              <h3 className="mt-1 text-lg font-bold text-blue-950">
                Seu Premium
              </h3>
            </div>

            <div className="grid size-10 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700">
              <Crown className="size-5" />
            </div>
          </div>

          <div className="mt-5 divide-y divide-purple-100 overflow-hidden rounded-xl border border-purple-100">
            <div className="flex items-start gap-3 p-4">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-purple-50 text-purple-700">
                <FilePenLine className="size-4" />
              </div>

              <div className="min-w-0">
                <h4 className="text-sm font-bold text-blue-950">
                  Redação com IA
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Correção por competência e sugestões personalizadas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-purple-50 text-purple-700">
                <GraduationCap className="size-4" />
              </div>

              <div className="min-w-0">
                <h4 className="text-sm font-bold text-blue-950">
                  Trilhas personalizadas
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Organização dos estudos por prioridades.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-purple-50 text-purple-700">
                <Brain className="size-4" />
              </div>

              <div className="min-w-0">
                <h4 className="text-sm font-bold text-blue-950">
                  Recomendações inteligentes
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Orientações baseadas no seu desempenho.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Card 3 — Redação com IA */}
        <article className="relative overflow-hidden rounded-2xl border border-purple-700/30 bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 p-5 text-white shadow-sm shadow-purple-950/15 2xl:p-6">
          <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full border border-white/10" />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/15">
                <FilePenLine className="size-5" />
              </div>

              <span className="rounded-md border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                Premium
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold tracking-tight">
              Redação corrigida por IA
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/85">
              Desenvolva sua escrita com análises por competência, identificação
              de erros e sugestões de melhoria para o ENEM.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                <p className="text-xl font-bold">880</p>
                <p className="mt-1 text-[11px] text-white/75">Última nota</p>
              </div>

              <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                <p className="text-xl font-bold">05</p>
                <p className="mt-1 text-[11px] text-white/75">
                  Redações corrigidas
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-purple-800 shadow-sm transition-colors hover:bg-purple-50"
            >
              Escrever redação
              <ArrowRight className="size-4" />
            </button>
          </div>
        </article>

        {/* Card 4 — Trilha de estudos */}
        <article className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm 2xl:p-6">
          <div className="grid size-10 place-items-center rounded-lg border border-purple-200 bg-purple-50 text-purple-700">
            <GraduationCap className="size-5" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-blue-950">
            Sua trilha de estudos
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Acompanhe seu planejamento personalizado e avance nas matérias que
            mais precisam de atenção.
          </p>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-slate-500">
                Progresso da trilha
              </span>
              <span className="text-sm font-bold text-purple-700">65%</span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-purple-100">
              <div className="h-full w-[65%] rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500" />
            </div>

            <p className="mt-3 text-xs font-medium text-slate-400">
              13 de 20 atividades concluídas
            </p>
          </div>

          <button
            type="button"
            className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-purple-200 bg-white px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
          >
            Continuar trilha
            <ArrowRight className="size-4" />
          </button>
        </article>
      </aside>
    </section>

    {/* Catálogo de simulados — modelo visual alinhado ao Pro, identidade Premium */}
    <section className="rounded-[1.75rem] border border-purple-100 bg-white/95 p-4 shadow-sm sm:rounded-xl sm:p-5 md:p-6 2xl:p-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-600">
            Simulados
          </p>
          <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
            Explore os simulados
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Escolha uma área de conhecimento e continue sua preparação.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex w-fit cursor-pointer items-center justify-center rounded-lg border border-purple-200 bg-white px-4 py-2.5 text-xs font-bold text-purple-700 shadow-sm transition hover:bg-purple-50"
        >
          Ver simulados
        </button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article className="group flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-purple-200 bg-purple-50 px-2.5 py-1 text-[11px] font-semibold text-purple-700">
              ENEM
            </span>
            <span className="text-xs font-medium text-slate-400">
              Linguagens e Códigos
            </span>
          </div>
          <h3 className="text-base font-bold tracking-tight text-blue-950 group-hover:text-purple-700">
            Simulado de Linguagens
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Exercite interpretação de texto, literatura e linguagens.
          </p>
          <div className="mt-auto pt-5">
            <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <BookOpenCheck className="size-3.5 text-purple-700" />
                45 questões
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5 text-purple-700" />
                90 minutos
              </span>
            </div>
            <button
              type="button"
              aria-label="Iniciar simulado de linguagens"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 px-4 py-3 text-sm font-semibold text-white transition hover:shadow-md hover:shadow-purple-700/25"
            >
              Iniciar <ArrowRight className="size-4" />
            </button>
          </div>
        </article>
        <article className="group flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-purple-200 bg-purple-50 px-2.5 py-1 text-[11px] font-semibold text-purple-700">
              ENEM
            </span>
            <span className="text-xs font-medium text-slate-400">
              Matemática e suas Tecnologias
            </span>
          </div>
          <h3 className="text-base font-bold tracking-tight text-blue-950 group-hover:text-purple-700">
            Simulado de Matemática
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Pratique raciocínio lógico, álgebra, geometria e resolução de
            problemas.
          </p>
          <div className="mt-auto pt-5">
            <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <BookOpenCheck className="size-3.5 text-purple-700" />
                45 questões
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5 text-purple-700" />
                90 minutos
              </span>
            </div>
            <button
              type="button"
              aria-label="Iniciar simulado de matemática"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 px-4 py-3 text-sm font-semibold text-white transition hover:shadow-md hover:shadow-purple-700/25"
            >
              Iniciar <ArrowRight className="size-4" />
            </button>
          </div>
        </article>
        <article className="group flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-purple-200 bg-purple-50 px-2.5 py-1 text-[11px] font-semibold text-purple-700">
              ENEM
            </span>
            <span className="text-xs font-medium text-slate-400">
              Ciências da Natureza
            </span>
          </div>
          <h3 className="text-base font-bold tracking-tight text-blue-950 group-hover:text-purple-700">
            Simulado de Ciências da Natureza
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Teste seus conhecimentos em biologia, física e química.
          </p>
          <div className="mt-auto pt-5">
            <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <BookOpenCheck className="size-3.5 text-purple-700" />
                45 questões
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5 text-purple-700" />
                90 minutos
              </span>
            </div>
            <button
              type="button"
              aria-label="Iniciar simulado de ciências da natureza"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 px-4 py-3 text-sm font-semibold text-white transition hover:shadow-md hover:shadow-purple-700/25"
            >
              Iniciar <ArrowRight className="size-4" />
            </button>
          </div>
        </article>
      </div>
    </section>
  </div>
);

export default PremiumDashboard;
