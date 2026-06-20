/* eslint-disable react-hooks/exhaustive-deps */
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileQuestion,
  Flag,
  ImageOff,
  ListChecks,
  Lock,
  Menu,
  Play,
  Send,
  Sparkles,
  Timer,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { timePerQuestions } from "../../services/simulations/timePerQuestions";
import { planTheme } from "../../services/simulations/planTheme";

const alphabet = ["A", "B", "C", "D", "E"];

const simulationPlanTheme = {
  free: {
    name: "Free",
    title: "text-slate-950",
    accentText: "text-violet-600",
    softBadge: "bg-violet-50 text-violet-700 ring-violet-100",
    badge: "border-violet-100 bg-violet-50 text-violet-700",
    button:
      "bg-slate-950 text-white hover:bg-violet-600 hover:shadow-violet-600/25",
    lightButton:
      "border-violet-100 bg-violet-50 text-violet-700 hover:border-violet-200 hover:bg-violet-100",
    backButton:
      "hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700",
    iconBox: "border-violet-100 bg-violet-50 text-violet-600",
    imageBadge: "bg-violet-50 text-violet-700",
    timerBox: "border-violet-100 bg-violet-50 text-violet-700",
    timerIcon: "text-violet-600",
    progress: "bg-violet-600",
    selectedAlternative:
      "border-violet-200 bg-violet-50/80 shadow-sm shadow-violet-950/10",
    hoverAlternative:
      "hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50/40 hover:shadow-md",
    selectedLetter: "bg-violet-600 text-white",
    selectedCheck: "text-violet-600",
    activeQuestion: "border-violet-600 bg-violet-600 text-white",
    answeredQuestion:
      "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
    reviewQuestion:
      "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100",
    focusRing: "focus:border-violet-200 focus:ring-violet-100",
  },

  pro: {
    name: "Pro",
    title: "text-slate-950",
    accentText: "text-blue-700",
    softBadge: "bg-blue-50 text-blue-800 ring-blue-100",
    badge: "border-blue-100 bg-blue-50 text-blue-800",
    button:
      "bg-slate-950 text-white hover:bg-blue-700 hover:shadow-blue-700/25",
    lightButton:
      "border-blue-100 bg-blue-50 text-blue-800 hover:border-blue-200 hover:bg-blue-100",
    backButton: "hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800",
    iconBox: "border-blue-100 bg-blue-50 text-blue-700",
    imageBadge: "bg-blue-50 text-blue-800",
    timerBox: "border-blue-100 bg-blue-50 text-blue-800",
    timerIcon: "text-blue-700",
    progress: "bg-blue-700",
    selectedAlternative:
      "border-blue-200 bg-blue-50/80 shadow-sm shadow-blue-950/10",
    hoverAlternative:
      "hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md",
    selectedLetter: "bg-blue-700 text-white",
    selectedCheck: "text-blue-700",
    activeQuestion: "border-blue-700 bg-blue-700 text-white",
    answeredQuestion:
      "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
    reviewQuestion:
      "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100",
    focusRing: "focus:border-blue-200 focus:ring-blue-100",
  },

  premium: {
    name: "Premium",

    title: "text-slate-950",

    accentText:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",

    softBadge:
      "border border-purple-200 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent ring-purple-100",

    badge:
      "border-purple-200 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",

    button:
      "bg-slate-950 text-white hover:bg-linear-to-r hover:from-purple-800 hover:via-blue-700 hover:to-teal-500 hover:shadow-purple-700/25",

    lightButton:
      "border-purple-200 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent hover:border-blue-300 hover:shadow-purple-950/10",

    backButton:
      "hover:border-purple-300 hover:bg-white hover:text-purple-700 hover:shadow-purple-950/10",

    iconBox:
      "border-purple-200 bg-white text-purple-700 shadow-sm shadow-purple-950/5 hover:border-blue-300",

    imageBadge:
      "border border-purple-100 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",

    timerBox:
      "border-purple-200 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",

    timerIcon: "text-purple-700",

    progress: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500",

    selectedAlternative:
      "border-purple-300 bg-white shadow-md shadow-purple-950/10 ring-1 ring-purple-100",

    hoverAlternative:
      "hover:-translate-y-0.5 hover:border-purple-300 hover:bg-white hover:shadow-md hover:shadow-purple-950/10",

    selectedLetter:
      "border border-purple-200 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent shadow-sm",

    selectedCheck: "text-purple-700",

    activeQuestion:
      "border-purple-300 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent ring-2 ring-purple-100",

    answeredQuestion:
      "border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50",

    reviewQuestion:
      "border-amber-200 bg-white text-amber-700 hover:bg-amber-50",

    focusRing: "focus:border-purple-200 focus:ring-purple-100",
  },
};

const formatEnumLabel = (value = "") => {
  return value
    .toString()
    .toLowerCase()
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const getRandomWrongAlternativeId = (question) => {
  const alternatives = question?.alternatives ?? [];

  const wrongAlternatives = alternatives.filter(
    (alternative) => alternative.isCorrect === false,
  );

  const safePool =
    wrongAlternatives.length > 0
      ? wrongAlternatives
      : alternatives.filter((alternative) => alternative.isCorrect !== true);

  if (!safePool.length) return null;

  const randomIndex = Math.floor(Math.random() * safePool.length);

  return safePool[randomIndex]?.id ?? null;
};

const completeMissingAnswersWithWrongOnes = (questions, currentAnswers) => {
  const completedAnswers = { ...currentAnswers };

  questions.forEach((question) => {
    if (completedAnswers[question.id]) return;

    completedAnswers[question.id] = getRandomWrongAlternativeId(question);
  });

  return completedAnswers;
};

const StudentSimulationContent = ({
  student,
  simulation,
  onFinishSimulation,
}) => {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewQuestions, setReviewQuestions] = useState({});
  const [isSimulationStarted, setIsSimulationStarted] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(null);
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const questions = simulation?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex];

  const totalSimulationSeconds =
    (simulation?.timePerQuestion ?? 0) * (questions.length || 1);

  const plan = student?.planActive?.toLowerCase() ?? "free";

  const theme = {
    ...(planTheme?.[plan] ?? planTheme?.free ?? {}),
    ...(simulationPlanTheme[plan] ?? simulationPlanTheme.free),
  };

  const subjectName = formatEnumLabel(simulation?.subject);

  const timerSeconds = remainingSeconds ?? totalSimulationSeconds;

  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;

  const formattedTimer = `${String(hours).padStart(2, "0")}:${String(
    minutes,
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const answeredCount = useMemo(() => {
    return Object.keys(answers).filter((questionId) => answers[questionId])
      .length;
  }, [answers]);

  const allQuestionsAnswered =
    questions.length > 0 && answeredCount === questions.length;

  const reviewCount = useMemo(() => {
    return Object.values(reviewQuestions).filter(Boolean).length;
  }, [reviewQuestions]);

  const progressPercentage = questions.length
    ? Math.round((answeredCount / questions.length) * 100)
    : 0;

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;

  const isMarkedForReview = currentQuestion
    ? reviewQuestions[currentQuestion.id]
    : false;

  const firstPendingQuestionIndex = questions.findIndex(
    (question) => !answers[question.id],
  );

  const currentQuestionHasImage =
    Boolean(currentQuestion?.imageUrl) && !imageErrors[currentQuestion?.id];

  const buildSubmission = ({
    completedAnswers = answers,
    forceTimeSpentSeconds,
  } = {}) => {
    const timeSpentSeconds =
      forceTimeSpentSeconds ??
      totalSimulationSeconds - (remainingSeconds ?? totalSimulationSeconds);

    const formattedAnswers = questions.map((question) => ({
      questionId: question.id,
      selectedAlternativeId: completedAnswers[question.id] ?? null,
      markedForReview: Boolean(reviewQuestions[question.id]),
    }));

    const data = new Date();

    return {
      publicId: simulation.publicId,
      title: simulation.title,
      subject: simulation.subject,
      totalQuestions: questions.length,
      timePerQuestion: simulation.timePerQuestion,
      totalSimulationSeconds,
      timeSpentSeconds,
      answers: formattedAnswers,
      finishedAt: {
        day: data.getDate(),
        month: data.getMonth() + 1,
        year: data.getFullYear(),
        hour: data.getHours(),
        minutes: data.getMinutes(),
      },
    };
  };

  const handleFinish = ({
    forceFinish = false,
    completedAnswers = answers,
    forceTimeSpentSeconds,
  } = {}) => {
    if (!isSimulationStarted || hasSubmitted) return;
    if (!forceFinish && !allQuestionsAnswered) return;

    setHasSubmitted(true);

    const submission = buildSubmission({
      completedAnswers,
      forceTimeSpentSeconds,
    });

    onFinishSimulation?.(submission);
  };

  useEffect(() => {
    if (!isSimulationStarted) return;
    if (remainingSeconds === null) return;
    if (remainingSeconds <= 0) return;

    const interval = setInterval(() => {
      setRemainingSeconds((currentSeconds) => {
        if (currentSeconds <= 1) return 0;

        return currentSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSimulationStarted, remainingSeconds]);

  useEffect(() => {
    if (!isSimulationStarted) return;
    if (hasSubmitted) return;
    if (remainingSeconds !== 0) return;

    const completedAnswers = completeMissingAnswersWithWrongOnes(
      questions,
      answers,
    );

    setAnswers(completedAnswers);

    handleFinish({
      forceFinish: true,
      completedAnswers,
      forceTimeSpentSeconds: totalSimulationSeconds,
    });
  }, [remainingSeconds, isSimulationStarted, hasSubmitted]);

  const handleStartSimulation = () => {
    setRemainingSeconds(totalSimulationSeconds);
    setIsSimulationStarted(true);
  };

  const handleSelectAnswer = (alternativeId) => {
    if (!currentQuestion || !isSimulationStarted || hasSubmitted) return;

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: alternativeId,
    }));
  };

  const handleToggleReview = () => {
    if (!currentQuestion || !isSimulationStarted || hasSubmitted) return;

    setReviewQuestions((currentReviewQuestions) => ({
      ...currentReviewQuestions,
      [currentQuestion.id]: !currentReviewQuestions[currentQuestion.id],
    }));
  };

  const handlePreviousQuestion = () => {
    if (!isSimulationStarted || isFirstQuestion || hasSubmitted) return;

    setCurrentQuestionIndex((currentIndex) => currentIndex - 1);
  };

  const handleNextQuestion = () => {
    if (!isSimulationStarted || hasSubmitted) return;

    if (!isLastQuestion) {
      setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
      return;
    }

    if (firstPendingQuestionIndex >= 0) {
      setCurrentQuestionIndex(firstPendingQuestionIndex);
    }
  };

  const handleSelectQuestion = (questionIndex) => {
    if (!isSimulationStarted || hasSubmitted) return;

    setCurrentQuestionIndex(questionIndex);
    setIsNavigatorOpen(false);
  };

  const handleImageError = (questionId) => {
    setImageErrors((currentErrors) => ({
      ...currentErrors,
      [questionId]: true,
    }));
  };

  const handleMainAction = () => {
    if (hasSubmitted) return;

    if (!isSimulationStarted) {
      handleStartSimulation();
      return;
    }

    if (allQuestionsAnswered) {
      handleFinish();
      return;
    }

    handleNextQuestion();
  };

  const mainActionLabel = !isSimulationStarted
    ? "Iniciar"
    : allQuestionsAnswered
      ? "Finalizar simulado"
      : isLastQuestion
        ? "Ir para pendente"
        : "Próxima";

  const mainActionMobileLabel = !isSimulationStarted
    ? "Iniciar"
    : allQuestionsAnswered
      ? "Finalizar"
      : isLastQuestion
        ? "Pendente"
        : "Próxima";

  const MainActionIcon = !isSimulationStarted
    ? Play
    : allQuestionsAnswered
      ? Send
      : ChevronRight;

  return (
    <section className="mx-auto flex w-full max-w-450 flex-col gap-4 px-3 py-3 sm:px-5 sm:py-4 lg:px-6 xl:gap-5 xl:px-6 xl:py-5 2xl:px-8 2xl:py-7 min-[2200px]:max-w-495 min-[2200px]:px-10">
      {isHelpModalOpen && (
        <div className="fixed inset-0 z-70 grid place-items-center px-3 sm:px-4">
          <button
            type="button"
            aria-label="Fechar dúvidas comuns"
            onClick={() => setIsHelpModalOpen(false)}
            className="absolute inset-0 cursor-pointer bg-blue-950/35 backdrop-blur-sm"
          />

          <div className="relative z-10 max-h-[92dvh] w-full max-w-2xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl sm:rounded-4xl">
            <div className="max-h-[92dvh] overflow-y-auto">
              <div className="border-b border-slate-100 px-4 py-5 sm:px-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={[
                        "inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1",
                        theme.softBadge,
                      ].join(" ")}
                    >
                      Ajuda
                    </span>

                    <h2
                      className={[
                        "mt-3 text-xl font-bold tracking-tight sm:text-2xl",
                        theme.title,
                      ].join(" ")}
                    >
                      Dúvidas comuns
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      Encontre respostas rápidas sobre o funcionamento do
                      simulado ou registre um problema encontrado durante a
                      prova.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsHelpModalOpen(false)}
                    className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50"
                    aria-label="Fechar"
                  >
                    <X className="size-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 px-4 py-5 sm:px-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
                    <h3
                      className={["text-sm font-bold", theme.title].join(" ")}
                    >
                      Por que não consigo responder?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      As alternativas só ficam disponíveis depois que você
                      inicia o simulado.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
                    <h3
                      className={["text-sm font-bold", theme.title].join(" ")}
                    >
                      Como marco para revisar?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Durante a prova, use o botão “Marcar para revisar” para
                      sinalizar questões que você quer voltar antes de
                      finalizar.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
                    <h3
                      className={["text-sm font-bold", theme.title].join(" ")}
                    >
                      O que acontece se eu pular?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Você pode navegar entre as questões durante o simulado.
                      Questões sem resposta aparecem como pendentes.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
                    <h3
                      className={["text-sm font-bold", theme.title].join(" ")}
                    >
                      Por que existe tempo?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      O tempo ajuda a treinar ritmo, foco e tomada de decisão,
                      simulando uma prova real.
                    </p>
                  </div>
                </div>

                <div className="rounded-4xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5">
                  <h3
                    className={["text-base font-bold", theme.title].join(" ")}
                  >
                    Não encontrou sua dúvida?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Descreva o que aconteceu. Futuramente, essa mensagem poderá
                    ser enviada para a equipe ou registrada no painel
                    administrativo.
                  </p>

                  <label
                    className={[
                      "mt-5 block text-sm font-bold",
                      theme.title,
                    ].join(" ")}
                  >
                    Enviar dúvida ou reportar problema
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Ex: A imagem da questão 3 não carregou, ou achei uma alternativa confusa..."
                    className={[
                      "mt-3 w-full resize-none rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:ring-4",
                      theme.focusRing,
                    ].join(" ")}
                  />

                  <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setIsHelpModalOpen(false)}
                      className="inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
                    >
                      Cancelar
                    </button>

                    <button
                      type="button"
                      className={[
                        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",
                        theme.button,
                      ].join(" ")}
                    >
                      Registrar dúvida
                      <Send className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-4 2xl:p-5 min-[2200px]:p-6">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 items-start gap-3 sm:items-center">
            <button
              type="button"
              onClick={() => navigate("/student/simulados")}
              className={[
                "grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition sm:size-11 xl:size-10",
                theme.backButton,
              ].join(" ")}
              aria-label="Voltar para simulados"
            >
              <ArrowLeft className="size-4" />
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1
                  className={[
                    "max-w-full truncate text-base font-bold tracking-tight sm:text-lg xl:max-w-xl 2xl:max-w-208 2xl:text-xl min-[2200px]:max-w-280",
                    theme.title,
                  ].join(" ")}
                >
                  {simulation?.title}
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
                <span>{subjectName}</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>{questions.length} questões</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>
                  {timePerQuestions(
                    simulation?.timePerQuestion,
                    questions.length,
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto_auto] sm:items-center xl:w-136 2xl:w-2xl min-[2200px]:w-3xl">
            <div className="min-w-0">
              <div className="mb-1 flex items-center justify-between text-[11px] font-bold text-slate-400">
                <span>Progresso</span>
                <span className={theme.accentText}>{progressPercentage}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={[
                    "h-full rounded-full transition-all duration-500",
                    theme.progress,
                  ].join(" ")}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500">
              <CheckCircle2 className="size-4 text-emerald-500" />
              {answeredCount}/{questions.length}
            </div>

            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500">
              <Flag className="size-4 text-amber-500" />
              {reviewCount}
            </div>

            <div
              className={[
                "inline-flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-xs font-bold shadow-sm",
                theme.timerBox,
              ].join(" ")}
            >
              <Timer className={["size-4", theme.timerIcon].join(" ")} />
              {formattedTimer}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:hidden">
        <button
          type="button"
          onClick={() => setIsNavigatorOpen(true)}
          className={[
            "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border px-3 py-3 text-xs font-bold shadow-sm transition sm:text-sm",
            theme.lightButton,
          ].join(" ")}
        >
          <Menu className="size-4" />
          Questões
        </button>

        <button
          type="button"
          onClick={() => {
            setIsNavigatorOpen(false);
            setIsHelpModalOpen(true);
          }}
          className={[
            "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border px-3 py-3 text-xs font-bold shadow-sm transition sm:text-sm",
            theme.lightButton,
          ].join(" ")}
        >
          <FileQuestion className="size-4" />
          Ajuda
        </button>

        <button
          type="button"
          onClick={handlePreviousQuestion}
          disabled={!isSimulationStarted || isFirstQuestion || hasSubmitted}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-3 text-xs font-bold text-slate-600 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
        >
          <ChevronLeft className="size-4" />
          Anterior
        </button>

        <button
          type="button"
          onClick={handleMainAction}
          disabled={hasSubmitted}
          className={[
            "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",
            theme.button,
          ].join(" ")}
        >
          <span className="truncate">{mainActionMobileLabel}</span>
          <MainActionIcon className="size-4 shrink-0" />
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_19rem] 2xl:grid-cols-[minmax(0,1fr)_25rem] min-[2200px]:grid-cols-[minmax(0,1fr)_28rem]">
        <main className="min-w-0 rounded-[1.75rem] border border-slate-200 bg-white/95 p-3 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-5 2xl:p-7 min-[2200px]:p-8">
          {!isSimulationStarted ? (
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-4xl sm:p-7 xl:min-h-136 2xl:min-h-168 min-[2200px]:min-h-200">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[56px_56px] opacity-35" />
              <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-violet-100/70 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-24 size-72 rounded-full bg-blue-100/60 blur-3xl" />

              <div className="relative z-10 flex min-h-120 items-center justify-center xl:min-h-128 2xl:min-h-160 min-[2200px]:min-h-192">
                <div className="mx-auto w-full max-w-3xl text-center">
                  <span
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-xs font-bold ring-1",
                      theme.softBadge,
                    ].join(" ")}
                  >
                    Antes de começar
                  </span>

                  <h2
                    className={[
                      "mt-4 text-2xl font-bold tracking-tight sm:text-3xl 2xl:text-4xl",
                      theme.title,
                    ].join(" ")}
                  >
                    Prepare-se para o simulado
                  </h2>

                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 2xl:text-lg 2xl:leading-8">
                    Ao iniciar, o tempo começa a contar e as questões ficam
                    liberadas para resposta.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Questões
                      </span>

                      <strong
                        className={[
                          "mt-2 block text-xl font-bold",
                          theme.title,
                        ].join(" ")}
                      >
                        {questions.length}
                      </strong>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Tempo
                      </span>

                      <strong
                        className={[
                          "mt-2 block text-xl font-bold",
                          theme.title,
                        ].join(" ")}
                      >
                        {formattedTimer}
                      </strong>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Matéria
                      </span>

                      <strong
                        className={[
                          "mt-2 block truncate text-base font-bold",
                          theme.title,
                        ].join(" ")}
                      >
                        {subjectName}
                      </strong>
                    </div>
                  </div>

                  <div className="mx-auto mt-5 max-w-2xl rounded-3xl border border-slate-200 bg-white/85 p-4 text-left shadow-sm sm:rounded-4xl sm:p-5">
                    <h3
                      className={["text-base font-bold", theme.title].join(" ")}
                    >
                      Como funciona
                    </h3>

                    <div className="mt-3 grid gap-2 text-sm leading-6 text-slate-500">
                      <p>
                        • Leia cada enunciado com atenção antes de responder.
                      </p>
                      <p>
                        • Marque questões para revisar quando estiver em dúvida.
                      </p>
                      <p>
                        • Se o tempo acabar, as questões pendentes serão
                        encerradas automaticamente.
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleMainAction}
                      className={[
                        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:px-7",
                        theme.button,
                      ].join(" ")}
                    >
                      Iniciar simulado
                      <Play className="size-4" />
                    </button>

                    <p className="text-xs font-semibold text-slate-400">
                      As questões só aparecem depois que o simulado for
                      iniciado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : currentQuestion ? (
            <div className="flex min-h-136 flex-col xl:min-h-136 2xl:min-h-168 min-[2200px]:min-h-200">
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div
                    className={[
                      "grid size-11 shrink-0 place-items-center rounded-2xl border sm:size-12",
                      theme.iconBox,
                    ].join(" ")}
                  >
                    <ListChecks className="size-5" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                        Questão {currentQuestionIndex + 1}
                      </span>

                      <span
                        className={[
                          "rounded-full px-2.5 py-1 text-[11px] font-bold ring-1",
                          theme.softBadge,
                        ].join(" ")}
                      >
                        {formatEnumLabel(currentQuestion.subject)}
                      </span>

                      {currentQuestion.topic && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-500">
                          {currentQuestion.topic}
                        </span>
                      )}

                      {currentQuestion.imageUrl && (
                        <span
                          className={[
                            "rounded-full px-2.5 py-1 text-[11px] font-bold",
                            theme.imageBadge,
                          ].join(" ")}
                        >
                          Com imagem
                        </span>
                      )}
                    </div>

                    <h2
                      className={[
                        "mt-2 text-lg font-bold tracking-tight sm:text-xl 2xl:text-2xl",
                        theme.title,
                      ].join(" ")}
                    >
                      Leia o enunciado e escolha uma alternativa.
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleToggleReview}
                  disabled={!isSimulationStarted || hasSubmitted}
                  className={[
                    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-50",
                    isMarkedForReview
                      ? "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
                      : "border-slate-200 bg-white text-slate-500 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700",
                  ].join(" ")}
                >
                  <Flag
                    className={[
                      "size-3.5",
                      isMarkedForReview ? "fill-current" : "",
                    ].join(" ")}
                  />
                  {isMarkedForReview ? "Marcada" : "Marcar para revisar"}
                </button>
              </div>

              <div className="flex flex-1 flex-col py-5 sm:py-6 2xl:py-8">
                <div className="space-y-4 2xl:space-y-6">
                  <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 xl:text-base xl:leading-7 2xl:text-xl 2xl:leading-9 min-[2200px]:text-2xl min-[2200px]:leading-10">
                    {currentQuestion.statement}
                  </p>

                  {currentQuestionHasImage && (
                    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 sm:rounded-4xl">
                      <img
                        src={currentQuestion.imageUrl}
                        alt={currentQuestion.imageAlt || "Imagem da questão"}
                        onError={() => handleImageError(currentQuestion.id)}
                        className="max-h-80 w-full object-contain p-3 sm:max-h-112 xl:max-h-96 2xl:max-h-136 min-[2200px]:max-h-176"
                      />

                      {currentQuestion.imageCaption && (
                        <figcaption className="border-t border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500">
                          {currentQuestion.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}

                  {currentQuestion?.imageUrl &&
                    imageErrors[currentQuestion.id] && (
                      <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                        <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-slate-400">
                          <ImageOff className="size-5" />
                        </div>

                        <div>
                          <strong className="block font-bold text-slate-700">
                            Imagem não carregada
                          </strong>
                          <span className="text-xs">
                            Verifique se o arquivo existe dentro da pasta
                            public.
                          </span>
                        </div>
                      </div>
                    )}
                </div>

                <div className="mt-6 grid gap-3 2xl:mt-8 min-[2200px]:gap-4">
                  {(currentQuestion.alternatives ?? []).map(
                    (alternative, index) => {
                      const isSelected = selectedAnswer === alternative.id;

                      return (
                        <button
                          type="button"
                          key={alternative.id}
                          onClick={() => handleSelectAnswer(alternative.id)}
                          disabled={!isSimulationStarted || hasSubmitted}
                          className={[
                            "group flex w-full cursor-pointer items-start gap-3 rounded-[1.35rem] border p-3 text-left transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 sm:items-center sm:rounded-3xl sm:p-4 2xl:p-5 min-[2200px]:p-6",
                            isSelected
                              ? theme.selectedAlternative
                              : `border-slate-200 bg-white ${theme.hoverAlternative}`,
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "grid size-9 shrink-0 place-items-center rounded-2xl text-sm font-bold transition 2xl:size-10",
                              isSelected
                                ? theme.selectedLetter
                                : "bg-slate-100 text-slate-500 group-hover:bg-white",
                            ].join(" ")}
                          >
                            {alphabet[index]}
                          </span>

                          <span className="min-w-0 flex-1">
                            {alternative.imageUrl && (
                              <img
                                src={alternative.imageUrl}
                                alt={
                                  alternative.imageAlt ||
                                  `Imagem da alternativa ${alphabet[index]}`
                                }
                                className="mb-3 max-h-40 w-full rounded-2xl border border-slate-200 bg-slate-50 object-contain p-2 sm:max-h-52 2xl:max-h-64"
                              />
                            )}

                            {alternative.text && (
                              <span className="block text-sm font-semibold leading-6 text-slate-700 sm:text-base sm:leading-7 2xl:text-lg 2xl:leading-8">
                                {alternative.text}
                              </span>
                            )}
                          </span>

                          {isSelected && (
                            <CheckCircle2
                              className={[
                                "mt-1 size-5 shrink-0 sm:mt-0",
                                theme.selectedCheck,
                              ].join(" ")}
                            />
                          )}
                        </button>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid min-h-112 place-items-center text-center">
              <div>
                <div className="mx-auto grid size-14 place-items-center rounded-3xl bg-slate-100 text-slate-500">
                  <Lock className="size-6" />
                </div>

                <h2 className="mt-4 text-xl font-bold text-blue-950">
                  Simulado não encontrado
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Não conseguimos carregar as questões desse simulado.
                </p>
              </div>
            </div>
          )}
        </main>

        <aside className="hidden xl:block">
          <div className="sticky top-4 rounded-4xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl 2xl:top-6 2xl:p-6 min-[2200px]:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Navegação
                </span>

                <h3
                  className={[
                    "mt-1 text-lg font-bold 2xl:text-xl",
                    theme.title,
                  ].join(" ")}
                >
                  Questões
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsHelpModalOpen(true)}
                className={[
                  "grid size-10 cursor-pointer place-items-center rounded-2xl border transition hover:-translate-y-0.5 2xl:size-11",
                  theme.iconBox,
                ].join(" ")}
              >
                <FileQuestion className="size-4 2xl:size-5" />
              </button>
            </div>

            <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 2xl:p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-slate-400">Tempo</span>

                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold",
                    theme.timerBox,
                  ].join(" ")}
                >
                  <Timer className={["size-4", theme.timerIcon].join(" ")} />
                  {formattedTimer}
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2 2xl:mt-5 2xl:grid-cols-6">
              {questions.map((question, index) => {
                const isCurrent = index === currentQuestionIndex;
                const isAnswered = Boolean(answers[question.id]);
                const isReview = Boolean(reviewQuestions[question.id]);

                return (
                  <button
                    type="button"
                    key={question.id}
                    onClick={() => handleSelectQuestion(index)}
                    disabled={!isSimulationStarted || hasSubmitted}
                    className={[
                      "relative grid size-10 cursor-pointer place-items-center rounded-2xl border text-xs font-bold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50 2xl:size-11 2xl:text-sm",
                      isCurrent
                        ? theme.activeQuestion
                        : isReview
                          ? theme.reviewQuestion
                          : isAnswered
                            ? theme.answeredQuestion
                            : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {index + 1}

                    {isAnswered && !isCurrent && (
                      <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-emerald-500 text-white">
                        <Check className="size-3" />
                      </span>
                    )}

                    {isReview && (
                      <span className="absolute -bottom-1 -right-1 grid size-4 place-items-center rounded-full bg-amber-400 text-blue-950">
                        <Flag className="size-2.5 fill-current" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 2xl:mt-6 2xl:space-y-3">
              <div className="flex items-center justify-between text-sm xl:text-xs 2xl:text-sm">
                <span className="font-bold text-slate-500">Respondidas</span>
                <strong className={theme.accentText}>
                  {answeredCount}/{questions.length}
                </strong>
              </div>

              <div className="flex items-center justify-between text-sm xl:text-xs 2xl:text-sm">
                <span className="font-bold text-slate-500">Para revisar</span>
                <strong className={theme.accentText}>{reviewCount}</strong>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white">
                <div
                  className={[
                    "h-full rounded-full transition-all duration-500",
                    theme.progress,
                  ].join(" ")}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {plan === "premium" && (
              <div className="mt-4 rounded-3xl border border-purple-100 bg-white p-4 shadow-sm shadow-purple-950/5 xl:p-3 2xl:p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={[
                      "grid size-9 shrink-0 place-items-center rounded-2xl border",
                      theme.iconBox,
                    ].join(" ")}
                  >
                    <Sparkles className="size-4" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-950 xl:text-xs 2xl:text-sm">
                      Experiência Premium
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Depois, esta área pode mostrar insights inteligentes sobre
                      tempo, dificuldade e revisão.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 grid grid-cols-2 gap-2 xl:mt-4 2xl:mt-5">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={
                  !isSimulationStarted || isFirstQuestion || hasSubmitted
                }
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 2xl:px-5 2xl:py-3 2xl:text-sm"
              >
                <ChevronLeft className="size-4" />
                Anterior
              </button>

              <button
                type="button"
                onClick={handleMainAction}
                disabled={hasSubmitted}
                className={[
                  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 2xl:px-5 2xl:py-3 2xl:text-sm",
                  theme.button,
                ].join(" ")}
              >
                {mainActionLabel}
                <MainActionIcon className="size-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {isNavigatorOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <button
            type="button"
            aria-label="Fechar navegação"
            onClick={() => setIsNavigatorOpen(false)}
            className="absolute inset-0 cursor-pointer bg-blue-950/35 backdrop-blur-sm"
          />

          <div className="absolute inset-x-3 bottom-3 max-h-[84dvh] overflow-y-auto rounded-4xl border border-slate-200 bg-white p-4 shadow-2xl sm:inset-x-auto sm:right-4 sm:w-md sm:p-5">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Navegação
                </span>

                <h3
                  className={["mt-1 text-xl font-bold", theme.title].join(" ")}
                >
                  Questões do simulado
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsNavigatorOpen(false)}
                className="grid size-10 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-slate-400">Tempo</span>

                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold",
                    theme.timerBox,
                  ].join(" ")}
                >
                  <Timer className={["size-4", theme.timerIcon].join(" ")} />
                  {formattedTimer}
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-6">
              {questions.map((question, index) => {
                const isCurrent = index === currentQuestionIndex;
                const isAnswered = Boolean(answers[question.id]);
                const isReview = Boolean(reviewQuestions[question.id]);

                return (
                  <button
                    type="button"
                    key={question.id}
                    onClick={() => handleSelectQuestion(index)}
                    disabled={!isSimulationStarted || hasSubmitted}
                    className={[
                      "relative grid size-11 cursor-pointer place-items-center rounded-2xl border text-sm font-bold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50",
                      isCurrent
                        ? theme.activeQuestion
                        : isReview
                          ? theme.reviewQuestion
                          : isAnswered
                            ? theme.answeredQuestion
                            : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {index + 1}

                    {isAnswered && !isCurrent && (
                      <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-emerald-500 text-white">
                        <Check className="size-3" />
                      </span>
                    )}

                    {isReview && (
                      <span className="absolute -bottom-1 -right-1 grid size-4 place-items-center rounded-full bg-amber-400 text-blue-950">
                        <Flag className="size-2.5 fill-current" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <span className="text-xs font-bold text-slate-400">
                  Respondidas
                </span>

                <strong
                  className={["mt-1 block text-xl font-bold", theme.title].join(
                    " ",
                  )}
                >
                  {answeredCount}/{questions.length}
                </strong>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <span className="text-xs font-bold text-slate-400">
                  Revisar
                </span>

                <strong
                  className={["mt-1 block text-xl font-bold", theme.title].join(
                    " ",
                  )}
                >
                  {reviewCount}
                </strong>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={
                  !isSimulationStarted || isFirstQuestion || hasSubmitted
                }
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
                Anterior
              </button>

              <button
                type="button"
                onClick={handleMainAction}
                disabled={hasSubmitted}
                className={[
                  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50",
                  theme.button,
                ].join(" ")}
              >
                {mainActionMobileLabel}
                <MainActionIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudentSimulationContent;
