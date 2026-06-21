/* eslint-disable no-unused-vars */
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Crown,
  FileText,
  GraduationCap,
  Medal,
  Target,
  Trophy,
  WandSparkles,
  Zap,
} from "lucide-react";

const PREMIUM_ICON_GRADIENT_ID = "premium-dashboard-icon-gradient";
const premiumIconStroke = `url(#${PREMIUM_ICON_GRADIENT_ID})`;

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
    status: "Escolher",
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

const PremiumIconBox = ({
  Icon,
  className = "size-11",
  iconClassName = "size-5",
}) => {
  return (
    <div
      className={[
        "grid place-items-center rounded-2xl border border-purple-200 bg-white shadow-sm shadow-purple-950/5",
        className,
      ].join(" ")}
    >
      <Icon className={iconClassName} stroke={premiumIconStroke} />
    </div>
  );
};

const PremiumDashboard = ({ student }) => {
  const firstName = student?.name?.split(" ")?.[0] || "Aluno";

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

        <div className="relative z-10 grid gap-5 xl:grid-cols-[1fr_360px] xl:items-center 2xl:grid-cols-[1fr_420px] 2xl:gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1.5 text-xs font-bold shadow-sm backdrop-blur-md">
              <Crown className="size-4" stroke={premiumIconStroke} />
              <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                Plano Premium
              </span>
            </span>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl xl:max-w-2xl xl:text-4xl 2xl:text-5xl">
              Olá, {firstName}. Sua preparação agora é estratégica.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7 2xl:text-base 2xl:leading-7">
              Acesse análises avançadas, recomendações inteligentes, trilhas
              personalizadas e uma experiência preparada para redação com IA.
            </p>

            <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-purple-700/25"
              >
                Ver análise premium
                <ArrowRight className="size-4" />
              </button>

              <button
                type="button"
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
                  Premium
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
                <p className="text-xs font-medium text-slate-500">IA</p>
                <p className="mt-1 text-sm font-bold text-blue-950">
                  Recomendações
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50/70 p-3">
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
            className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/30 hover:shadow-md 2xl:p-6"
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
        ))}
      </section>

      {/* Conteúdo principal */}
      <section className="grid gap-5 xl:grid-cols-[1fr_380px] 2xl:grid-cols-[1fr_460px] 2xl:gap-8">
        <div className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
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
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-purple-200 px-4 py-2.5 text-xs font-bold transition hover:bg-purple-50"
            >
              <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                Ver relatório premium
              </span>
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {advancedInsights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-purple-200 bg-white p-4 transition hover:border-purple-300 hover:bg-purple-50/40 md:p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <PremiumIconBox Icon={Brain} />

                    <div>
                      <h3 className="text-sm font-bold text-blue-950 md:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold">
                    <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                      {item.percent}%
                    </span>
                  </span>
                </div>

                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-purple-100">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500"
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
          <article className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <PremiumIconBox Icon={WandSparkles} />

            <h3 className="mt-5 text-lg font-bold text-blue-950">
              Próxima recomendação
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Reforce Ciências da Natureza antes do próximo simulado completo.
              Esse é o ponto com maior potencial de ganho.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-purple-50/80 p-3 text-sm font-bold text-slate-700">
              <Zap className="size-4" stroke={premiumIconStroke} />
              Prioridade alta esta semana
            </div>
          </article>

          <article className="rounded-3xl border border-purple-200 bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 p-5 text-white shadow-sm md:rounded-4xl 2xl:p-6">
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
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-bold transition hover:bg-purple-50 md:w-auto"
            >
              <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                Explorar premium
              </span>
            </button>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm md:rounded-4xl 2xl:p-6">
            <PremiumIconBox Icon={FileText} />

            <h3 className="mt-5 text-lg font-bold text-blue-950">
              Redação com IA
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Área preparada para analisar redações por competência, histórico e
              evolução ao longo dos envios.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 px-4 py-2.5 text-xs font-bold text-white transition hover:shadow-md hover:shadow-purple-700/25 md:w-auto"
            >
              Abrir redações
              <ArrowRight className="size-4" />
            </button>
          </article>
        </aside>
      </section>

      {/* Recursos premium */}
      <section className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
              Recursos premium
            </p>

            <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
              Tudo para estudar com direção
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-purple-200 px-4 py-2.5 text-xs font-bold transition hover:bg-purple-50"
          >
            <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
              Ver recursos
            </span>
          </button>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {premiumFeatures.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-purple-200 bg-white p-4 transition hover:border-purple-300 hover:bg-purple-50/40 md:p-5"
            >
              <PremiumIconBox Icon={Icon} />

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
      <section className="rounded-3xl border border-purple-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent">
              Próximas ações
            </p>

            <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
              Continue sua preparação premium
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-purple-200 px-4 py-2.5 text-xs font-bold transition hover:bg-purple-50"
          >
            <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
              Ver tudo
            </span>
          </button>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {simulations.map((simulation) => (
            <article
              key={simulation.title}
              className="rounded-3xl border border-purple-200 bg-white p-4 transition hover:border-purple-300 hover:bg-purple-50/40 md:p-5"
            >
              <PremiumIconBox Icon={Medal} />

              <h3 className="mt-4 text-sm font-bold text-blue-950 md:text-base">
                {simulation.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                {simulation.description}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold">
                  <span className="bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                    {simulation.status}
                  </span>
                </span>

                <button
                  type="button"
                  className="grid size-9 cursor-pointer place-items-center rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 text-white transition hover:shadow-md hover:shadow-purple-700/25"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>

              {simulation.progress > 0 && (
                <div className="mt-4">
                  <div className="h-2 overflow-hidden rounded-full bg-purple-100">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-purple-800 via-blue-700 to-teal-500"
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
