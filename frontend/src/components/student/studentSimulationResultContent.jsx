import {
  AlertCircle,
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crown,
  FileQuestion,
  Flag,
  Lightbulb,
  Lock,
  Medal,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";

const planTheme = {
  free: {
    name: "Free",
    badge: "border-violet-100 bg-violet-50 text-violet-700",
    iconBox: "bg-violet-50 text-violet-600",
    softBox: "border-violet-100 bg-violet-50",
    progress: "bg-violet-600",
    button:
      "bg-violet-600 text-white hover:bg-violet-700 focus-visible:ring-violet-200",
    lightButton:
      "border-violet-100 bg-white text-violet-700 hover:bg-violet-50",
    accentText: "text-violet-600",
  },
  pro: {
    name: "Pro",
    badge: "border-blue-100 bg-blue-50 text-blue-700",
    iconBox: "bg-blue-50 text-blue-700",
    softBox: "border-blue-100 bg-blue-50",
    progress: "bg-blue-700",
    button:
      "bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-blue-200",
    lightButton: "border-blue-100 bg-white text-blue-700 hover:bg-blue-50",
    accentText: "text-blue-700",
  },
  premium: {
    name: "Premium",
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    iconBox: "bg-amber-50 text-amber-600",
    softBox: "border-amber-200 bg-amber-50",
    progress: "bg-amber-400",
    button:
      "bg-blue-950 text-white hover:bg-violet-700 focus-visible:ring-amber-200",
    lightButton: "border-amber-200 bg-white text-amber-700 hover:bg-amber-50",
    accentText: "text-amber-600",
  },
};

const planRank = {
  free: 1,
  pro: 2,
  premium: 3,
};

const resultStatus = {
  outstanding: {
    label: "Resultado de alto nível",
    description:
      "Você teve um desempenho muito acima da média. O conteúdo foi bem dominado e seu resultado mostra consistência.",
    icon: Trophy,
    box: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },

  excellent: {
    label: "Excelente desempenho",
    description:
      "Você demonstrou ótimo domínio do conteúdo. Ainda há pequenos pontos de revisão, mas sua base está muito forte.",
    icon: Medal,
    box: "border-green-200 bg-green-50 text-green-700",
  },

  good: {
    label: "Bom caminho",
    description:
      "Seu resultado foi positivo. Agora o foco deve ser revisar os erros e fortalecer os assuntos com menor desempenho.",
    icon: CheckCircle2,
    box: "border-blue-100 bg-blue-50 text-blue-700",
  },

  attention: {
    label: "Atenção aos fundamentos",
    description:
      "O resultado mostra que alguns conteúdos importantes ainda precisam ser reforçados antes de avançar.",
    icon: AlertCircle,
    box: "border-amber-200 bg-amber-50 text-amber-700",
  },

  critical: {
    label: "Revisão necessária",
    description:
      "Este simulado indica dificuldades em pontos essenciais. Revise com calma, refaça as questões e priorize a base.",
    icon: BookOpenCheck,
    box: "border-rose-200 bg-rose-50 text-rose-700",
  },
};

const dicMaterias = {
  matematica: "Matemática",
  portugues: "Português",
  historia: "História",
  geografia: "Geografia",
  ciencias: "Ciências",
  biologia: "Biologia",
  quimica: "Química",
  fisica: "Física",
  ingles: "Inglês",
  artes: "Artes",
  linguas: "Linguagens",
  literatura: "Literatura",
  espanhol: "Espanhol",
  geral: "Geral",
  "ciencias-humanas": "Ciências Humanas",
  "ciencias-natureza": "Ciências da Natureza",
};

const getResultStatus = (percentage) => {
  if (percentage >= 90) return resultStatus.outstanding;
  if (percentage >= 75) return resultStatus.excellent;
  if (percentage >= 60) return resultStatus.good;
  if (percentage >= 40) return resultStatus.attention;
  return resultStatus.critical;
};

const StudentSimulationResultContent = ({
  student,
  correction,
  summary,
  onBackToSimulations,
  onReviewSimulation,
}) => {
  const date = new Date(summary?.finishedAt);
  const finalResult = {
    plan: student?.planActive || "premium",
    title: summary?.title,
    subject: dicMaterias[summary?.subject.toLowerCase()] || "Geral",
    totalQuestions: correction?.length || 0,
    finishedAt: `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1,
    ).padStart(2, "0")}/${date.getFullYear()} às ${String(
      date.getHours(),
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`,
    totalAltTrue: correction.filter((e) => e.correct === true).length,
    timePerQuestions: summary?.timePerQuestion,
    timeSpentSeconds: summary?.timeSpentSeconds,
    totalSimulationSeconds: summary?.totalSimulationSeconds,
    markedForReview: summary?.answers,
  };
  const formatSecondsToTime = (seconds) => {
    const totalSeconds = Math.max(0, Math.floor(seconds || 0));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;
    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    }
    if (minutes > 0 && remainingSeconds === 0) {
      return `${minutes}min `;
    }
    if (minutes > 0) {
      return `${minutes}min ${remainingSeconds}s`;
    }
    return `${remainingSeconds}s`;
  };
  const percentage =
    (finalResult.totalAltTrue / finalResult.totalQuestions) * 100 || 0;
  const score =
    (finalResult.totalAltTrue / finalResult.totalQuestions) * 100 * 10 || 0;
  const totalTime = formatSecondsToTime(finalResult.timeSpentSeconds);
  const topics = correction.map((item) => ({
    topic: item.topic,
    correct: item.correct,
  }));
  const resultByTopic = {};
  topics.forEach((item) => {
    /* Se o topico não existir cria um novo */
    if (!resultByTopic[item.topic]) {
      resultByTopic[item.topic] = {
        name: item.topic,
        total: 0,
        correct: 0,
        percentage: 0,
      };
    }
    /* Verifica se o topico já existe, se sim ele adiciona yuma unidade a contagem, se não cria um novo tópico */
    if (resultByTopic[item.topic]) {
      resultByTopic[item.topic].total += 1;
      if (item.correct === true) {
        resultByTopic[item.topic].correct += 1;
      }
    }
    /* Caucula a porcentagem */
    resultByTopic[item.topic].percentage =
      (resultByTopic[item.topic].correct / resultByTopic[item.topic].total) *
      100;
  });
  const arrayTopics = Object.values(resultByTopic);
  const status = getResultStatus(percentage);
  const StatusIcon = status.icon;
  const theme = planTheme[finalResult.plan] ?? planTheme.free;
  const rank = planRank[finalResult.plan] ?? planRank.free;
  const hasProAccess = rank >= planRank.pro;
  const hasPremiumAccess = rank >= planRank.premium;

  const weakSubjects = [...arrayTopics]
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 2);

  const strongSubjects = [...arrayTopics]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 2);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:gap-5 lg:py-5 xl:max-w-295 xl:gap-4 xl:px-5 xl:py-4 2xl:max-w-375 2xl:gap-5 2xl:px-8 2xl:py-8">
      {/* Header */}
      <header className="rounded-3xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5 xl:py-2.5 2xl:py-3">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={onBackToSimulations}
              className="grid cursor-pointer size-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-violet-100 hover:bg-violet-50 hover:text-violet-600 xl:size-9 2xl:size-10"
              aria-label="Voltar para simulados"
            >
              <ArrowLeft className="size-4 " />
            </button>

            <div className="min-w-0">
              <div className="flex flex-wrap   items-center gap-2">
                <h1 className="truncate text-base font-extrabold tracking-tight sm:text-lg xl:max-w-115 xl:text-base 2xl:max-w-190 2xl:text-lg">
                  Resultado · {finalResult.title}
                </h1>

                <span
                  className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-extrabold xl:px-2 xl:py-0.5 2xl:px-2.5 2xl:py-1 ${theme.badge}`}
                >
                  Plano {theme.name}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-slate-400 xl:text-[11px] 2xl:text-xs">
                <span>{finalResult.subject}</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>{finalResult.totalQuestions} questões</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>
                  {" "}
                  Tempo de prova{" "}
                  {formatSecondsToTime(finalResult.totalSimulationSeconds)}
                </span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>Finalizado {finalResult.finishedAt}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              disabled={!hasPremiumAccess}
              onClick={onReviewSimulation}
              title={
                !hasPremiumAccess
                  ? "Apenas o plano Premium permite refazer simulados concluídos."
                  : undefined
              }
              className={`inline-flex ${hasPremiumAccess ? `cursor-pointer transition ${theme.lightButton}` : "cursor-not-allowed text-slate-400 bg-slate-50 border-slate-200 "} items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-extrabold shadow-sm  2xl:px-5 2xl:py-3 2xl:text-sm `}
            >
              {hasPremiumAccess ? (
                <RotateCcw className="size-4" />
              ) : (
                <Lock className="size-4" />
              )}
              Refazer {!hasPremiumAccess ? "no Premium" : undefined}
            </button>

            <button
              type="button"
              onClick={onBackToSimulations}
              className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-extrabold shadow-sm transition 2xl:px-5 2xl:py-3 2xl:text-sm ${theme.button}`}
            >
              Ver simulados
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero result */}
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-4 2xl:grid-cols-[minmax(0,1fr)_420px] 2xl:gap-5">
        <main className="min-w-0 rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl sm:p-5 xl:p-5 2xl:p-8">
          <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)] 2xl:grid-cols-[300px_minmax(0,1fr)]">
            <div className="items-center justify-center rounded-4xl border border-slate-200 bg-slate-50 p-5 text-center xl:p-4 2xl:p-6">
              <div className="mx-auto grid size-28 place-items-center rounded-full border-8 border-white bg-white shadow-sm xl:size-24 2xl:size-32">
                <div>
                  <strong className="block text-4xl font-extrabold tracking-tight xl:text-3xl 2xl:text-5xl">
                    {percentage.toFixed(0)}%
                  </strong>
                </div>
              </div>
              <span className="mt-1 block text-xs font-extrabold text-slate-400">
                aproveitamento
              </span>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white">
                <div
                  className={`h-full rounded-full ${theme.progress}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div
                className={`mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-extrabold ${status.box}`}
              >
                <StatusIcon className="size-4" />
                {status.label}
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-between gap-5">
              <div>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-extrabold ${theme.badge}`}
                >
                  <BookOpenCheck className="size-4" />
                  Simulado concluído
                </span>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl xl:text-2xl 2xl:text-4xl">
                  Você acertou {finalResult.totalAltTrue} de{" "}
                  {finalResult.totalQuestions} questões.
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base xl:text-sm 2xl:text-base">
                  {status.description} Abaixo você pode revisar seus erros,
                  acompanhar os assuntos com menor desempenho e entender o que
                  priorizar nos próximos estudos.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 xl:p-3 2xl:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Target className="size-4" />
                    Pontuação
                  </div>
                  <strong className="mt-2 block text-2xl font-extrabold xl:text-xl 2xl:text-3xl">
                    {score.toFixed(0)}
                  </strong>
                </div>

                <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-4 xl:p-3 2xl:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="size-4" />
                    Acertos
                  </div>
                  <strong className="mt-2 block text-2xl font-extrabold text-emerald-700 xl:text-xl 2xl:text-3xl">
                    {finalResult.totalAltTrue}
                  </strong>
                </div>

                <div className="rounded-3xl border border-rose-100 bg-rose-50 p-4 xl:p-3 2xl:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-600">
                    <XCircle className="size-4" />
                    Erros
                  </div>
                  <strong className="mt-2 block text-2xl font-extrabold text-rose-700 xl:text-xl 2xl:text-3xl">
                    {finalResult.totalQuestions - finalResult.totalAltTrue}
                  </strong>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4 xl:p-3 2xl:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Clock3 className="size-4" />
                    Tempo
                  </div>
                  <strong className="mt-2 block text-2xl font-extrabold xl:text-xl 2xl:text-3xl">
                    {totalTime}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Side insights */}
        <aside className="rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl xl:p-4 2xl:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400 2xl:text-xs">
                O que devo estudar agora?
              </span>
              <h3 className="mt-1 text-lg font-extrabold 2xl:text-xl">
                Foco de revisão
              </h3>
            </div>

            <div
              className={`grid size-10 place-items-center rounded-2xl 2xl:size-11 ${theme.iconBox}`}
            >
              <Lightbulb className="size-4 2xl:size-5" />
            </div>
          </div>

          <div className="mt-5 space-y-3 xl:mt-4">
            {weakSubjects.map((subject) => (
              <div
                key={subject.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4 xl:p-3 2xl:p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <strong className="text-sm font-extrabold xl:text-xs 2xl:text-sm">
                    {subject.name}
                  </strong>
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-extrabold text-slate-500">
                    {subject.correct}/{subject.total}
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div
                    className={`h-full rounded-full ${theme.progress}`}
                    style={{ width: `${subject.percentage}%` }}
                  />
                </div>

                <p className="mt-2 text-[10px] leading-5 text-slate-500">
                  Priorize este conteúdo na próxima revisão.
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Subject performance */}
      <section className="rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl sm:p-5 xl:p-5 2xl:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400 2xl:text-xs">
              Desempenho
            </span>

            <h2 className="mt-1 text-xl font-extrabold xl:text-lg 2xl:text-2xl">
              Resultado por assunto
            </h2>
          </div>

          {!hasProAccess && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-extrabold text-slate-500">
              <Lock className="size-4" />
              Prévia limitada no Free
            </span>
          )}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          {arrayTopics.map((subject) => (
            <div
              key={subject.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4 xl:p-3 2xl:p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <strong className="text-sm font-extrabold xl:text-xs 2xl:text-sm">
                  {subject.name}
                </strong>

                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-extrabold text-slate-500">
                  {subject.percentage}%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                <div
                  className={`h-full rounded-full ${theme.progress}`}
                  style={{ width: `${subject.percentage}%` }}
                />
              </div>

              <p className="mt-2 text-xs font-bold text-slate-400">
                {subject.correct} de {subject.total} questões corretas
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Question review */}
      <section className="rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl sm:p-5 xl:p-5 2xl:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400 2xl:text-xs">
              Revisão
            </span>

            <h2 className="mt-1 text-xl font-extrabold xl:text-lg 2xl:text-2xl">
              Questões para revisão
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-3 py-2 text-xs font-extrabold text-rose-700">
              <XCircle className="size-4" />
              {finalResult.totalQuestions - finalResult.totalAltTrue} erros
            </span>
          </div>
        </div>

        <div className="mt-5 grid md:grid-cols-2 gap-3">
          {correction
            .filter((q) => q.correct === false)
            .map((question) => (
              <article
                key={question.question}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4 xl:p-3 2xl:p-4"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex size-8 items-center justify-center rounded-2xl text-xs font-extrabold ${
                          question.correct
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {question.order}
                      </span>

                      <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-extrabold text-slate-500">
                        {question.topic}
                      </span>

                      {question.markedForReview && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-extrabold text-amber-700">
                          <Flag className="size-3" />
                          Marcada para revisão
                        </span>
                      )}
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm font-semibold leading-6 text-slate-600 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                      {question.statement}
                    </p>
                  </div>

                  <div
                    className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-extrabold ${
                      question.correct
                        ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                        : "border-rose-100 bg-rose-50 text-rose-700"
                    }`}
                  >
                    {question.correct ? (
                      <CheckCircle2 className="size-4" />
                    ) : (
                      <XCircle className="size-4" />
                    )}
                    {question.correct ? "Correta" : "Incorreta"}
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                      Sua resposta
                    </span>
                    <p className="mt-1 text-sm font-bold text-slate-700 xl:text-xs 2xl:text-sm">
                      {question.studentAnswerText}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-emerald-600">
                      Resposta correta
                    </span>
                    <p className="mt-1 text-sm font-bold text-emerald-700 xl:text-xs 2xl:text-sm">
                      {question.textAlt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      {/* Premium insight */}
      <section
        className={`rounded-4xl border p-4 shadow-sm backdrop-blur-xl sm:p-5 xl:p-5 2xl:p-8 ${
          hasPremiumAccess
            ? "border-amber-200 bg-amber-50/90"
            : "border-slate-200 bg-white/90"
        }`}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-3">
            <div
              className={`grid size-12 shrink-0 place-items-center rounded-2xl ${
                hasPremiumAccess
                  ? "bg-white text-amber-600"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {hasPremiumAccess ? (
                <Sparkles className="size-5" />
              ) : (
                <Lock className="size-5" />
              )}
            </div>

            <div>
              <h2 className="text-xl font-extrabold xl:text-lg 2xl:text-2xl">
                Recomendações inteligentes
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                {hasPremiumAccess
                  ? "Com base no seu resultado, o Vestibule recomenda revisar Geometria plana e Regra de três antes de avançar para simulados mais difíceis."
                  : "Esta área será liberada no plano Premium com recomendações inteligentes, trilhas personalizadas e priorização automática dos seus estudos."}
              </p>
            </div>
          </div>

          {hasPremiumAccess && (
            <div className="grid gap-2 sm:grid-cols-2 lg:min-w-90">
              {strongSubjects.map((subject) => (
                <div
                  key={subject.id}
                  className="rounded-3xl border border-white bg-white/80 p-4"
                >
                  <div className="flex items-center gap-2 text-xs font-extrabold text-amber-700">
                    <Brain className="size-4" />
                    Ponto forte
                  </div>

                  <strong className="mt-2 block text-sm font-extrabold">
                    {subject.name}
                  </strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default StudentSimulationResultContent;
