/* eslint-disable no-unused-vars */
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Brain,
  CalendarDays,
  CheckCircle2,
  Crown,
  FileText,
  GraduationCap,
  Medal,
  Sparkles,
  Target,
  Trophy,
  WandSparkles,
  Zap,
} from "lucide-react";

const stats = [
  {
    label: "Simulados feitos",
    value: "32",
    helper: "Neste mês",
    Icon: BookOpenCheck,
  },
  {
    label: "Taxa de acerto",
    value: "81%",
    helper: "Média geral",
    Icon: Target,
  },
  {
    label: "Redações",
    value: "06",
    helper: "Corrigidas",
    Icon: FileText,
  },
  {
    label: "Ranking pessoal",
    value: "Top 8%",
    helper: "Evolução",
    Icon: Trophy,
  },
];

const advancedInsights = [
  {
    title: "Natureza precisa de revisão",
    description: "Maior taxa de erro em ecologia, química orgânica e energia.",
    percent: 64,
  },
  {
    title: "Matemática está evoluindo",
    description: "Crescimento consistente em funções, gráficos e porcentagem.",
    percent: 78,
  },
  {
    title: "Linguagens é seu ponto forte",
    description: "Boa leitura de textos, interpretação e gêneros discursivos.",
    percent: 86,
  },
];

const premiumFeatures = [
  {
    title: "Redação com IA",
    description: "Área preparada para análise por competência e evolução.",
    Icon: FileText,
  },
  {
    title: "Trilhas personalizadas",
    description: "Caminhos de estudo baseados nos seus pontos fracos.",
    Icon: GraduationCap,
  },
  {
    title: "Recomendações inteligentes",
    description: "Sugestões futuras com base em erros e desempenho real.",
    Icon: Brain,
  },
];

const simulations = [
  {
    title: "ENEM Premium — Simulado completo",
    description: "Modelo completo com análise por área e relatório avançado.",
    status: "Continuar",
    progress: 81,
  },
  {
    title: "Redação ENEM — Competência II",
    description: "Treino direcionado para repertório e desenvolvimento.",
    status: "Corrigir",
    progress: 45,
  },
  {
    title: "Trilha Natureza — Revisão estratégica",
    description: "Sequência sugerida com base nos seus erros recentes.",
    status: "Iniciar",
    progress: 0,
  },
];

const PremiumDashboard = ({ student }) => {
  const firstName = student?.name?.split(" ")?.[0] || "Aluno";

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 xl:p-8 2xl:p-10">
        {/* Fundo branco sólido */}
        <div className="absolute inset-0 bg-white" />

        {/* Bolas grandes laterais sólidas */}
        <div className="absolute -top-24 -right-20 size-64 rounded-full bg-amber-100/90 md:size-72 xl:size-80" />
        <div className="absolute -bottom-28 -left-20 size-64 rounded-full bg-violet-100/75 md:size-72 xl:size-80" />
        <div className="absolute top-1/2 right-1/4 size-44 -translate-y-1/2 rounded-full bg-blue-100/75 md:size-56" />

        {/* Formas suaves */}
        <div className="absolute top-10 right-16 hidden size-20 rounded-4xl border border-amber-100 bg-white/55 shadow-sm backdrop-blur-md md:block" />
        <div className="absolute bottom-12 left-18 hidden size-24 rounded-full border border-violet-100 bg-white/55 shadow-sm backdrop-blur-md lg:block" />
        <div className="absolute right-1/3 bottom-10 hidden size-16 rounded-4xl border border-blue-100 bg-white/55 shadow-sm backdrop-blur-md xl:block" />

        {/* Bolinhas flutuantes */}
        <div className="absolute top-12 left-14 size-2.5 rounded-full bg-amber-400/80" />
        <div className="absolute top-24 right-32 size-3 rounded-full bg-violet-500/55" />
        <div className="absolute top-1/2 right-16 size-2.5 rounded-full bg-blue-500/55" />
        <div className="absolute bottom-20 left-24 size-3 rounded-full bg-amber-500/70" />
        <div className="absolute right-1/3 bottom-16 size-2 rounded-full bg-violet-400/60" />
        <div className="absolute top-1/3 left-1/2 size-2 rounded-full bg-blue-400/65" />

        <div className="relative z-10 grid gap-7 xl:grid-cols-[1fr_380px] xl:items-center 2xl:grid-cols-[1fr_460px] 2xl:gap-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-amber-600 shadow-sm backdrop-blur-md">
              <Crown className="size-4" />
              Plano Premium
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl xl:max-w-2xl xl:text-4xl 2xl:text-6xl">
              Olá, {firstName}. Sua preparação agora é estratégica.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7 2xl:text-lg 2xl:leading-8">
              Acesse análises avançadas, recomendações inteligentes, trilhas
              personalizadas e uma experiência preparada para redação com IA.
            </p>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md"
              >
                Ver análise premium
                <ArrowRight className="size-4" />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white/80 px-5 py-3 text-sm font-bold text-amber-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-md"
              >
                Acessar trilhas
              </button>
            </div>
          </div>

          {/* Card do plano */}
          <aside className="rounded-3xl border border-amber-200 bg-white/80 p-4 shadow-sm backdrop-blur-md md:p-5 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                  Seu plano
                </p>

                <h2 className="mt-2 text-2xl font-bold text-blue-950 2xl:text-3xl">
                  Premium
                </h2>
              </div>

              <div className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-600">
                <Crown className="size-5" />
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-amber-50/80 p-4">
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Análise avançada</span>
                <span>Ativa</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-amber-100">
                <div className="h-full w-[88%] rounded-full bg-amber-500" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-amber-50/80 p-3">
                <p className="text-xs font-medium text-slate-500">IA</p>
                <p className="mt-1 text-sm font-bold text-blue-950">
                  Recomendações
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50/70 p-3">
                <p className="text-xs font-medium text-slate-500">Redação</p>
                <p className="mt-1 text-sm font-bold text-blue-950">
                  Correção IA
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
            className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md 2xl:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-amber-50 text-amber-600">
                <Icon className="size-5" />
              </div>

              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
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
      <section className="grid gap-5 xl:grid-cols-[1fr_380px] 2xl:grid-cols-[1fr_460px] 2xl:gap-8">
        {/* Análise avançada */}
        <div className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Inteligência premium
              </p>

              <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                Análise avançada da sua evolução
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Uma leitura mais estratégica dos seus resultados, pontos fortes
                e prioridades da semana.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-amber-200 px-4 py-2.5 text-xs font-bold text-amber-700 transition hover:bg-amber-50"
            >
              Ver relatório premium
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {advancedInsights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-amber-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50/40 md:p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-amber-50 text-amber-600">
                      <Brain className="size-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-blue-950 md:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                    {item.percent}%
                  </span>
                </div>

                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-amber-100">
                    <div
                      className="h-full rounded-full bg-amber-500"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Lateral */}
        <aside className="space-y-5 md:space-y-6">
          <article className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-amber-50 text-amber-600">
              <WandSparkles className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-blue-950">
              Próxima recomendação
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Reforce Ciências da Natureza antes do próximo simulado completo.
              Esse é o ponto com maior potencial de ganho.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-amber-50/80 p-3 text-sm font-bold text-slate-700">
              <Zap className="size-4 text-amber-600" />
              Prioridade alta esta semana
            </div>
          </article>

          <article className="rounded-3xl border border-amber-200 bg-linear-to-br from-amber-400 via-amber-500 to-orange-500 p-5 text-white shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-white/20">
              <Crown className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold">Experiência completa</h3>

            <p className="mt-2 text-sm leading-6 text-white/85">
              O Premium concentra relatórios, trilhas, redação e recomendações
              para guiar sua preparação com mais estratégia.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-bold text-amber-700 transition hover:bg-amber-50 md:w-auto"
            >
              Explorar premium
            </button>
          </article>

          <article className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-600">
              <FileText className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-blue-950">
              Redação com IA
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Área preparada para analisar redações por competência, histórico e
              evolução ao longo dos envios.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700 md:w-auto"
            >
              Abrir redações
              <ArrowRight className="size-4" />
            </button>
          </article>
        </aside>
      </section>

      {/* Recursos premium */}
      <section className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Recursos premium
            </p>

            <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
              Tudo para estudar com direção
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-amber-200 px-4 py-2.5 text-xs font-bold text-amber-700 transition hover:bg-amber-50"
          >
            Ver recursos
          </button>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {premiumFeatures.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-amber-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50/40 md:p-5"
            >
              <div className="grid size-11 place-items-center rounded-2xl bg-amber-50 text-amber-600">
                <Icon className="size-5" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-blue-950 md:text-base">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Simulados e trilhas */}
      <section className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Próximas ações
            </p>

            <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
              Continue sua preparação premium
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-amber-200 px-4 py-2.5 text-xs font-bold text-amber-700 transition hover:bg-amber-50"
          >
            Ver tudo
          </button>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {simulations.map((simulation) => (
            <article
              key={simulation.title}
              className="rounded-3xl border border-amber-200 bg-white p-4 transition hover:border-amber-300 hover:bg-amber-50/40 md:p-5"
            >
              <div className="grid size-11 place-items-center rounded-2xl bg-amber-50 text-amber-600">
                <Medal className="size-5" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-blue-950 md:text-base">
                {simulation.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                {simulation.description}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                  {simulation.status}
                </span>

                <button
                  type="button"
                  className="grid size-9 place-items-center rounded-full bg-amber-500 text-white transition hover:bg-amber-600"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>

              {simulation.progress > 0 && (
                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-amber-100">
                    <div
                      className="h-full rounded-full bg-amber-500"
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

export default PremiumDashboard;
