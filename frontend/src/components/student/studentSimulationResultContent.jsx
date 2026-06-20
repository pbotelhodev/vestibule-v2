import {
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crown,
  Flag,
  Lightbulb,
  Lock,
  RotateCcw,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  XCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { planThemeResult } from "../../services/simulations/planTheme";
import {
  planRank,
  resultStatus,
  dicMaterias,
} from "../../services/simulations/servicesResult";

const PREMIUM_GRADIENT_ID = "premium-result-gradient";

const getResultStatus = (percentage) => {
  if (percentage >= 90) return resultStatus.outstanding;
  if (percentage >= 75) return resultStatus.excellent;
  if (percentage >= 60) return resultStatus.good;
  if (percentage >= 40) return resultStatus.attention;
  return resultStatus.critical;
};

const formatSecondsToTime = (seconds) => {
  const totalSeconds = Math.max(0, Math.floor(seconds || 0));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  if (hours > 0) return `${hours}h ${minutes}min`;
  if (minutes > 0 && remainingSeconds === 0) return `${minutes}min`;
  if (minutes > 0) return `${minutes}min ${remainingSeconds}s`;

  return `${remainingSeconds}s`;
};

const formatSubject = (subject = "") => {
  const normalizedSubject = subject?.toString().toLowerCase();

  return (
    dicMaterias[subject] ||
    dicMaterias[normalizedSubject] ||
    normalizedSubject
      .replaceAll("_", " ")
      .replaceAll("-", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) ||
    "Geral"
  );
};

const formatFinishedAt = (finishedAt) => {
  if (!finishedAt) return "Data não informada";

  if (typeof finishedAt === "object" && finishedAt.day) {
    return `${String(finishedAt.day).padStart(2, "0")}/${String(
      finishedAt.month,
    ).padStart(2, "0")}/${finishedAt.year} às ${String(
      finishedAt.hour,
    ).padStart(2, "0")}:${String(finishedAt.minutes).padStart(2, "0")}`;
  }

  const date = new Date(finishedAt);

  if (Number.isNaN(date.getTime())) return "Data não informada";

  return `${String(date.getDate()).padStart(2, "0")}/${String(
    date.getMonth() + 1,
  ).padStart(2, "0")}/${date.getFullYear()} às ${String(
    date.getHours(),
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
};

const getQuestionKey = (question, index) => {
  return (
    question?.questionId ||
    question?.id ||
    question?.question ||
    question?.order ||
    `question-${index}`
  );
};

const getQuestionOrder = (question, index) => {
  return question?.order || question?.questionOrder || index + 1;
};

const getStudentAnswerText = (question) => {
  return (
    question?.studentAnswerText ||
    question?.selectedAlternativeText ||
    question?.studentAnswer?.text ||
    question?.studentAnswer ||
    "Sem resposta"
  );
};

const getCorrectAnswerText = (question) => {
  return (
    question?.textAlt ||
    question?.correctAlternativeText ||
    question?.correctAnswerText ||
    question?.correctAlt?.text ||
    "Resposta correta não informada"
  );
};

const StudentSimulationResultContent = ({
  student,
  correction = [],
  summary,
  onBackToSimulations,
  onReviewSimulation,
}) => {
  const correctionList = Array.isArray(correction) ? correction : [];
  const navigate = useNavigate();

  const currentPlan = student?.planActive?.toLowerCase() || "free";
  const theme = planThemeResult[currentPlan] ?? planThemeResult.free;
  const rank = planRank[currentPlan] ?? planRank.free;
  const hasProAccess = rank >= planRank.pro;
  const hasPremiumAccess = rank >= planRank.premium;
  const totalQuestions = summary?.totalQuestions || correctionList.length || 0;
  
  const iconStroke = theme.gradientIcon
    ? `url(#${PREMIUM_GRADIENT_ID})`
    : "currentColor";

  const totalCorrect =
    summary?.correctAnswers ??
    correctionList.filter((question) => question.correct === true).length;

  const totalWrong =
    summary?.wrongAnswers ?? Math.max(0, totalQuestions - totalCorrect);

  const percentage =
    summary?.percentage ??
    (totalQuestions ? (totalCorrect / totalQuestions) * 100 : 0);

  const score =
    summary?.score ??
    (totalQuestions ? (totalCorrect / totalQuestions) * 1000 : 0);

  const resultByTopic = {};

  correctionList.forEach((item) => {
    const topicName = item?.topic || "Geral";

    if (!resultByTopic[topicName]) {
      resultByTopic[topicName] = {
        name: topicName,
        total: 0,
        correct: 0,
        percentage: 0,
      };
    }

    resultByTopic[topicName].total += 1;

    if (item.correct === true) {
      resultByTopic[topicName].correct += 1;
    }

    resultByTopic[topicName].percentage =
      (resultByTopic[topicName].correct / resultByTopic[topicName].total) * 100;
  });

  const arrayTopics = Object.values(resultByTopic);

  const weakSubjects = [...arrayTopics]
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 2);

  const strongSubjects = [...arrayTopics]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 2);

  const wrongQuestions = correctionList.filter(
    (question) => question.correct === false,
  );

  const markedCount = correctionList.filter(
    (question) => question.markedForReview === true,
  ).length;

  const status = getResultStatus(percentage);
  const StatusIcon = status.icon;

  const finalResult = {
    plan: currentPlan,
    title: summary?.title || "Simulado",
    subject: formatSubject(summary?.subject || "geral"),
    totalQuestions,
    finishedAt: formatFinishedAt(summary?.finishedAt),
    totalAltTrue: totalCorrect,
    timePerQuestions: summary?.timePerQuestion,
    timeSpentSeconds: summary?.timeSpentSeconds,
    totalSimulationSeconds: summary?.totalSimulationSeconds,
  };

  const totalTime = formatSecondsToTime(finalResult.timeSpentSeconds);
  const totalSimulationTime = formatSecondsToTime(
    finalResult.totalSimulationSeconds,
  );

  const ad = {
    type: "image",
    src: "/ads/anuncio-resultado.jpg",
    link: "smarttex.com.br",
    alt: "Anúncio patrocinado",
    title: "Prepare-se melhor para o próximo simulado",
    description:
      "Conheça materiais e soluções parceiras para melhorar seus estudos.",
    ctaLabel: "Saiba mais",
  };

  return (
    <section className="relative mx-auto flex w-full max-w-450 flex-col gap-4 px-3 py-3 sm:px-5 sm:py-4 lg:px-6 xl:gap-5 xl:px-6 xl:py-5 2xl:px-8 2xl:py-7 min-[2200px]:max-w-495 min-[2200px]:px-10">
      {currentPlan === "premium" && (
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

      <header className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-4 2xl:p-5 min-[2200px]:p-6">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 items-start gap-3 sm:items-center">
            <button
              type="button"
              onClick={onBackToSimulations}
              className={[
                "grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition sm:size-11 xl:size-10",
                theme.backButton,
              ].join(" ")}
              aria-label="Voltar para simulados"
            >
              <ArrowLeft
                className={["size-4", theme.iconText].join(" ")}
                stroke={iconStroke}
              />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1
                  className={[
                    "max-w-full truncate text-base font-bold tracking-tight sm:text-lg xl:max-w-160 2xl:max-w-232 2xl:text-xl min-[2200px]:max-w-296",
                    theme.title,
                  ].join(" ")}
                >
                  Resultado · {finalResult.title}
                </h1>

                <span
                  className={[
                    "inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold",
                    theme.badge,
                  ].join(" ")}
                >
                  Plano {theme.name}
                </span>
              </div>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-400">
                <span>{finalResult.subject}</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>{finalResult.totalQuestions} questões</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>Tempo de prova {totalSimulationTime}</span>
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
              className={[
                "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold shadow-sm transition disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-400 2xl:px-5 2xl:py-3 2xl:text-sm",
                hasPremiumAccess ? `cursor-pointer ${theme.lightButton}` : "",
              ].join(" ")}
            >
              {hasPremiumAccess ? (
                <RotateCcw
                  className={["size-4", theme.iconText].join(" ")}
                  stroke={iconStroke}
                />
              ) : (
                <Lock className="size-4" />
              )}
              Refazer {!hasPremiumAccess ? "no Premium" : ""}
            </button>

            <button
              type="button"
              onClick={onBackToSimulations}
              className={[
                "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg 2xl:px-5 2xl:py-3 2xl:text-sm",
                theme.button,
              ].join(" ")}
            >
              Ver simulados
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="grid items-stretch gap-4 xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:grid-cols-[minmax(0,1fr)_27rem] min-[2200px]:grid-cols-[minmax(0,1fr)_31rem]">
        <main className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-8 min-[2200px]:p-9">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-violet-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 size-72 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative z-10 grid flex-1 items-stretch gap-5 lg:grid-cols-[17rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)] 2xl:grid-cols-[20rem_minmax(0,1fr)]">
            <div className="flex h-full min-h-72 flex-col justify-center rounded-4xl border border-slate-200 bg-white/85 p-5 text-center shadow-sm xl:p-4 2xl:p-6">
              <div className="mx-auto grid size-32 place-items-center rounded-full border-10 border-white bg-slate-50 shadow-sm xl:size-28 2xl:size-40">
                <div>
                  <strong
                    className={[
                      "block text-4xl font-bold tracking-tight xl:text-4xl 2xl:text-6xl",
                      theme.accentText,
                    ].join(" ")}
                  >
                    {percentage.toFixed(0)}%
                  </strong>
                </div>
              </div>

              <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                aproveitamento
              </span>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={["h-full rounded-full", theme.progress].join(" ")}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div
                className={[
                  "mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-xs font-bold",
                  status.box,
                ].join(" ")}
              >
                <StatusIcon className="size-4" />
                {status.label}
              </div>
            </div>

            <div className="flex h-full min-w-0 flex-col justify-between gap-5">
              <div>
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold",
                    theme.badge,
                  ].join(" ")}
                >
                  <BookOpenCheck
                    className={["size-4", theme.iconText].join(" ")}
                    stroke={iconStroke}
                  />
                  Simulado concluído
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl xl:text-2xl 2xl:text-4xl min-[2200px]:text-5xl">
                  Você acertou {finalResult.totalAltTrue} de{" "}
                  {finalResult.totalQuestions} questões.
                </h2>

                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 xl:text-sm xl:leading-6 2xl:text-base 2xl:leading-7">
                  {status.description} Abaixo você pode revisar seus erros,
                  acompanhar os assuntos com menor desempenho e entender o que
                  priorizar nos próximos estudos.
                </p>
              </div>

              <div className="mt-auto grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm xl:p-3 2xl:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Target className="size-4" />
                    Pontuação
                  </div>

                  <strong
                    className={[
                      "mt-2 block text-2xl font-bold xl:text-xl 2xl:text-3xl",
                      theme.accentText,
                    ].join(" ")}
                  >
                    {score.toFixed(0)}
                  </strong>
                </div>

                <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm xl:p-3 2xl:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="size-4" />
                    Acertos
                  </div>

                  <strong className="mt-2 block text-2xl font-bold text-emerald-700 xl:text-xl 2xl:text-3xl">
                    {finalResult.totalAltTrue}
                  </strong>
                </div>

                <div className="rounded-3xl border border-rose-100 bg-rose-50 p-4 shadow-sm xl:p-3 2xl:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-600">
                    <XCircle className="size-4" />
                    Erros
                  </div>

                  <strong className="mt-2 block text-2xl font-bold text-rose-700 xl:text-xl 2xl:text-3xl">
                    {totalWrong}
                  </strong>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm xl:p-3 2xl:p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Clock3 className="size-4" />
                    Tempo
                  </div>

                  <strong className="mt-2 block text-2xl font-bold text-slate-950 xl:text-xl 2xl:text-3xl">
                    {totalTime}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </main>

        {student?.planActive !== "free" ? (
          <aside className="h-full rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl xl:p-4 2xl:p-6 min-[2200px]:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 2xl:text-xs">
                  O que estudar agora?
                </span>

                <h3 className="mt-1 text-lg font-bold text-slate-950 2xl:text-xl">
                  Foco de revisão
                </h3>
              </div>

              <div
                className={[
                  "grid size-10 place-items-center rounded-2xl border 2xl:size-11",
                  theme.iconBox,
                ].join(" ")}
              >
                <Lightbulb
                  className={["size-4", theme.iconText].join(" ")}
                  stroke={iconStroke}
                />
              </div>
            </div>

            <div className="mt-5 space-y-3 xl:mt-4">
              {weakSubjects.length > 0 ? (
                weakSubjects.map((subject) => (
                  <div
                    key={subject.name}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-4 xl:p-3 2xl:p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <strong className="text-sm font-bold text-slate-700 xl:text-xs 2xl:text-sm">
                        {subject.name}
                      </strong>

                      <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-500">
                        {subject.correct}/{subject.total}
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                      <div
                        className={["h-full rounded-full", theme.progress].join(
                          " ",
                        )}
                        style={{ width: `${subject.percentage}%` }}
                      />
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Priorize este conteúdo na próxima revisão.
                    </p>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-500">
                  Ainda não há assuntos suficientes para gerar foco de revisão.
                </div>
              )}
            </div>
          </aside>
        ) : (
          <aside className="h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-3 shadow-sm backdrop-blur-xl sm:rounded-4xl xl:p-3 2xl:p-4 min-[2200px]:p-5">
            <div className="flex items-center justify-between gap-3 px-1 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 2xl:text-[11px]">
                  Publicidade
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-50 shadow-sm sm:rounded-3xl">
              {ad?.type === "image" && (
                <img
                  src={ad.src}
                  alt={ad.alt || "Anúncio patrocinado"}
                  className="aspect-video w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              )}

              {ad?.type === "video" && (
                <video
                  src={ad.src}
                  poster={ad.poster}
                  controls
                  playsInline
                  className="aspect-video w-full bg-slate-950 object-cover"
                />
              )}

              {!ad && (
                <div className="flex aspect-4/5 items-center justify-center bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[40px_40px] p-5 text-center">
                  <div className="max-w-48">
                    <div className="mx-auto grid size-12 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-sm">
                      <Sparkles className="size-5" />
                    </div>

                    <p className="mt-4 text-sm font-bold text-slate-700">
                      Espaço reservado
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Aqui poderá aparecer uma imagem ou vídeo patrocinado.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {ad && (
              <div className="px-1">
                {ad.ctaLabel && (
                  <button
                    type="button"
                    onClick={() => navigate(ad.link)}
                    className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-600/25 2xl:text-sm"
                  >
                    {ad.ctaLabel}
                    <ChevronRight className="size-4" />
                  </button>
                )}
              </div>
            )}

            <p className="mt-3 px-1 text-center text-[10px] font-semibold leading-5 text-slate-400">
              Anúncio exibido por parceiros do Vestibule.
            </p>
          </aside>
        )}
      </div>

      <section className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-5 2xl:p-8 min-[2200px]:p-9">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 2xl:text-xs">
              Desempenho
            </span>

            <h2 className="mt-1 text-xl font-bold text-slate-950 xl:text-lg 2xl:text-2xl">
              Resultado por assunto
            </h2>
          </div>

          {!hasProAccess && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500">
              <Lock className="size-4" />
              Prévia limitada no Free
            </span>
          )}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3 min-[2200px]:grid-cols-4">
          {arrayTopics.length > 0 ? (
            arrayTopics.map((subject) => (
              <div
                key={subject.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4 xl:p-3 2xl:p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <strong className="text-sm font-bold text-slate-700 xl:text-xs 2xl:text-sm">
                    {subject.name}
                  </strong>

                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-500">
                    {subject.percentage.toFixed(0)}%
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div
                    className={["h-full rounded-full", theme.progress].join(
                      " ",
                    )}
                    style={{ width: `${subject.percentage}%` }}
                  />
                </div>

                <p className="mt-2 text-xs font-semibold text-slate-400">
                  {subject.correct} de {subject.total} questões corretas
                </p>
              </div>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500 md:col-span-2 xl:col-span-3">
              Nenhum assunto encontrado para este resultado.
            </div>
          )}
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-5 2xl:p-8 min-[2200px]:p-9">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 2xl:text-xs">
              Revisão
            </span>

            <h2 className="mt-1 text-xl font-bold text-slate-950 xl:text-lg 2xl:text-2xl">
              Questões para revisão
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700">
              <XCircle className="size-4" />
              {totalWrong} erros
            </span>

            {markedCount > 0 && (
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700">
                <Flag className="size-4" />
                {markedCount} marcadas
              </span>
            )}
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 min-[2200px]:grid-cols-3">
          {wrongQuestions.length > 0 ? (
            wrongQuestions.map((question, index) => (
              <article
                key={getQuestionKey(question, index)}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4 xl:p-3 2xl:p-4"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex size-8 items-center justify-center rounded-2xl bg-rose-100 text-xs font-bold text-rose-700">
                        {getQuestionOrder(question, index)}
                      </span>

                      <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-slate-500">
                        {question.topic || "Geral"}
                      </span>

                      {question.markedForReview && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700">
                          <Flag className="size-3" />
                          Marcada para revisão
                        </span>
                      )}
                    </div>

                    <p className="mt-3 line-clamp-3 text-sm font-semibold leading-6 text-slate-600 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                      {question.statement}
                    </p>
                  </div>

                  <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700">
                    <XCircle className="size-4" />
                    Incorreta
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Sua resposta
                    </span>

                    <p className="mt-1 text-sm font-bold text-slate-700 xl:text-xs 2xl:text-sm">
                      {getStudentAnswerText(question)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                      Resposta correta
                    </span>

                    <p className="mt-1 text-sm font-bold text-emerald-700 xl:text-xs 2xl:text-sm">
                      {getCorrectAnswerText(question)}
                    </p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 text-sm leading-6 text-emerald-700 md:col-span-2 min-[2200px]:col-span-3">
              Nenhum erro encontrado. Excelente resultado neste simulado.
            </div>
          )}
        </div>
      </section>

      <section
        className={[
          "rounded-[1.75rem] border p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-5 2xl:p-8 min-[2200px]:p-9",
          hasPremiumAccess
            ? "border-purple-200 bg-white"
            : "border-slate-200 bg-white/95",
        ].join(" ")}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-3">
            <div
              className={[
                "grid size-12 shrink-0 place-items-center rounded-2xl border",
                hasPremiumAccess
                  ? theme.iconBox
                  : "border-slate-200 bg-slate-100 text-slate-400",
              ].join(" ")}
            >
              {hasPremiumAccess ? (
                <Sparkles
                  className={["size-4", theme.iconText].join(" ")}
                  stroke={iconStroke}
                />
              ) : (
                <Lock className="size-5" />
              )}
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-950 xl:text-lg 2xl:text-2xl">
                Recomendações inteligentes
              </h2>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                {hasPremiumAccess
                  ? weakSubjects.length > 0
                    ? `Com base no seu resultado, priorize ${
                        weakSubjects[0]?.name
                      }${
                        weakSubjects[1]?.name
                          ? ` e ${weakSubjects[1].name}`
                          : ""
                      } antes de avançar para simulados mais difíceis.`
                    : "Com base no seu resultado, mantenha a rotina de revisão e avance para simulados mais difíceis."
                  : "Esta área será liberada no plano Premium com recomendações inteligentes, trilhas personalizadas e priorização automática dos seus estudos."}
              </p>
            </div>
          </div>

          {hasPremiumAccess && (
            <div className="grid gap-2 sm:grid-cols-2 lg:min-w-90">
              {strongSubjects.length > 0 ? (
                strongSubjects.map((subject) => (
                  <div
                    key={subject.name}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div
                      className={[
                        "flex items-center gap-2 text-xs font-bold",
                        theme.accentText,
                      ].join(" ")}
                    >
                      <Brain
                        className={["size-4", theme.iconText].join(" ")}
                        stroke={iconStroke}
                      />
                      Ponto forte
                    </div>

                    <strong className="mt-2 block text-sm font-bold text-slate-950">
                      {subject.name}
                    </strong>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500 sm:col-span-2">
                  Ainda não há dados suficientes para destacar pontos fortes.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default StudentSimulationResultContent;
