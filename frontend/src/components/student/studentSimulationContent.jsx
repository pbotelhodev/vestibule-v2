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
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const planTheme = {
  free: {
    name: "Free",
    main: "violet",
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    softBadge: "bg-violet-50 text-violet-600",
    iconBox: "bg-violet-50 text-violet-600",
    ring: "ring-violet-100",
    border: "border-violet-100",
    button:
      "bg-violet-600 text-white hover:bg-violet-700 focus-visible:ring-violet-200",
    lightButton:
      "border-violet-100 bg-white text-violet-700 hover:bg-violet-50",
    activeQuestion:
      "border-violet-500 bg-violet-600 text-white shadow-violet-200",
    answeredQuestion:
      "border-violet-100 bg-violet-50 text-violet-700 hover:border-violet-200",
    reviewQuestion:
      "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300",
    selectedAlternative:
      "border-violet-400 bg-violet-50 shadow-sm ring-4 ring-violet-100",
    hoverAlternative: "hover:border-violet-200 hover:bg-violet-50/40",
    progress: "bg-violet-600",
  },
  pro: {
    name: "Pro",
    main: "blue",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    softBadge: "bg-blue-50 text-blue-600",
    iconBox: "bg-blue-50 text-blue-600",
    ring: "ring-blue-100",
    border: "border-blue-100",
    button:
      "bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-blue-200",
    lightButton: "border-blue-100 bg-white text-blue-700 hover:bg-blue-50",
    activeQuestion: "border-blue-500 bg-blue-700 text-white shadow-blue-200",
    answeredQuestion:
      "border-blue-100 bg-blue-50 text-blue-700 hover:border-blue-200",
    reviewQuestion:
      "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300",
    selectedAlternative:
      "border-blue-400 bg-blue-50 shadow-sm ring-4 ring-blue-100",
    hoverAlternative: "hover:border-blue-200 hover:bg-blue-50/40",
    progress: "bg-blue-700",
  },
  premium: {
    name: "Premium",
    main: "amber",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    softBadge: "bg-amber-50 text-amber-700",
    iconBox: "bg-amber-50 text-amber-600",
    ring: "ring-amber-100",
    border: "border-amber-200",
    button:
      "bg-blue-950 text-white hover:bg-violet-700 focus-visible:ring-amber-200",
    lightButton: "border-amber-200 bg-white text-amber-700 hover:bg-amber-50",
    activeQuestion:
      "border-amber-400 bg-amber-400 text-blue-950 shadow-amber-200",
    answeredQuestion:
      "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300",
    reviewQuestion:
      "border-violet-200 bg-violet-50 text-violet-700 hover:border-violet-300",
    selectedAlternative:
      "border-amber-300 bg-amber-50 shadow-sm ring-4 ring-amber-100",
    hoverAlternative: "hover:border-amber-200 hover:bg-amber-50/50",
    progress: "bg-amber-400",
  },
};

const alphabet = ["A", "B", "C", "D", "E"];

const StudentSimulationContent = ({
  student,
  simulation,
  onFinishSimulation,
}) => {
  const navigate = useNavigate();

  const plan = student?.plan ?? "free";
  const theme = planTheme[plan] ?? planTheme.free;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewQuestions, setReviewQuestions] = useState({});
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const questions = simulation?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex];

  const answeredCount = useMemo(() => {
    return Object.keys(answers).length;
  }, [answers]);

  const reviewCount = useMemo(() => {
    return Object.values(reviewQuestions).filter(Boolean).length;
  }, [reviewQuestions]);

  const allQuestionsAnswered =
    questions.length > 0 && answeredCount === questions.length;

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
    Boolean(currentQuestion?.image) && !imageErrors[currentQuestion?.id];

  const handleSelectAnswer = (alternativeId) => {
    if (!currentQuestion) return;

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: alternativeId,
    }));
  };

  const handleToggleReview = () => {
    if (!currentQuestion) return;

    setReviewQuestions((currentReviewQuestions) => ({
      ...currentReviewQuestions,
      [currentQuestion.id]: !currentReviewQuestions[currentQuestion.id],
    }));
  };

  const handlePreviousQuestion = () => {
    if (isFirstQuestion) return;
    setCurrentQuestionIndex((currentIndex) => currentIndex - 1);
  };

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
      return;
    }

    if (firstPendingQuestionIndex >= 0) {
      setCurrentQuestionIndex(firstPendingQuestionIndex);
    }
  };

  const handleSelectQuestion = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
    setIsNavigatorOpen(false);
  };

  const handleFinish = () => {
    if (!allQuestionsAnswered) return;
    onFinishSimulation?.();
  };

  const handleMainAction = () => {
    if (allQuestionsAnswered) {
      handleFinish();
      return;
    }

    handleNextQuestion();
  };

  const handleImageError = (questionId) => {
    setImageErrors((currentErrors) => ({
      ...currentErrors,
      [questionId]: true,
    }));
  };

  const mainActionLabel = allQuestionsAnswered
    ? "Finalizar simulado"
    : isLastQuestion
      ? "Ir para pendente"
      : "Próxima";

  const MainActionIcon = allQuestionsAnswered ? Send : ChevronRight;

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:gap-5 lg:py-5 xl:max-w-295 xl:gap-4 xl:px-5 xl:py-4 2xl:max-w-375 2xl:gap-5 2xl:px-8 2xl:py-8">
      <header className="rounded-3xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5 xl:py-2.5 2xl:py-3">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/student/simulados")}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-violet-100 hover:bg-violet-50 hover:text-violet-600 xl:size-9 2xl:size-10"
              aria-label="Voltar para simulados"
            >
              <ArrowLeft className="size-4" />
            </button>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-base font-extrabold tracking-tight text-blue-950 sm:text-lg xl:max-w-105 xl:text-base 2xl:max-w-180 2xl:text-lg">
                  {simulation.title}
                </h1>

                <span
                  className={`hidden rounded-full border px-2.5 py-1 text-[11px] font-extrabold sm:inline-flex xl:px-2 xl:py-0.5 2xl:px-2.5 2xl:py-1 ${theme.badge}`}
                >
                  Plano {theme.name}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-slate-400 xl:text-[11px] 2xl:text-xs">
                <span>{simulation.area}</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>{questions.length} questões</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>{simulation.estimatedTime}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 xl:min-w-62.5 xl:gap-2 2xl:min-w-75 2xl:gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center justify-between text-[11px] font-extrabold text-slate-400">
                <span>Progresso</span>
                <span className="text-blue-950">{progressPercentage}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${theme.progress}`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-extrabold text-slate-500 sm:inline-flex xl:px-2.5 xl:py-1.5 xl:text-[11px] 2xl:px-3 2xl:py-2 2xl:text-xs">
              <CheckCircle2 className="size-4 text-emerald-500" />
              {answeredCount}/{questions.length}
            </div>

            <div className="hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-extrabold text-slate-500 sm:inline-flex xl:px-2.5 xl:py-1.5 xl:text-[11px] 2xl:px-3 2xl:py-2 2xl:text-xs">
              <Flag className="size-4 text-amber-500" />
              {reviewCount}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-2 xl:hidden">
        <button
          type="button"
          onClick={() => setIsNavigatorOpen(true)}
          className={`inline-flex items-center justify-center gap-2 rounded-full border px-3 py-3 text-xs font-extrabold shadow-sm transition sm:text-sm ${theme.lightButton}`}
        >
          <Menu className="size-4" />
          Questões
        </button>

        <button
          type="button"
          onClick={handlePreviousQuestion}
          disabled={isFirstQuestion}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-3 text-xs font-extrabold text-slate-600 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
        >
          <ChevronLeft className="size-4" />
          Anterior
        </button>

        <button
          type="button"
          onClick={handleMainAction}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-extrabold shadow-sm transition sm:text-sm ${theme.button}`}
        >
          {mainActionLabel}
          <MainActionIcon className="size-4" />
        </button>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-4 2xl:grid-cols-[minmax(0,1fr)_400px] 2xl:gap-5">
        <main className="min-w-0 rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl sm:p-5 xl:p-5 2xl:p-8">
          {currentQuestion ? (
            <div className="flex min-h-130 flex-col xl:min-h-100 2xl:min-h-155">
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between xl:gap-3 xl:pb-4 2xl:gap-4 2xl:pb-5">
                <div className="flex items-start gap-3">
                  <div
                    className={`grid size-12 shrink-0 place-items-center rounded-2xl xl:size-10 2xl:size-12 ${theme.iconBox}`}
                  >
                    <ListChecks className="size-5 xl:size-4 2xl:size-5" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400 xl:text-[11px] 2xl:text-xs">
                        Questão {currentQuestionIndex + 1}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold xl:px-2 xl:py-0.5 2xl:px-2.5 2xl:py-1 ${theme.softBadge}`}
                      >
                        {currentQuestion.subject}
                      </span>

                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-extrabold text-slate-500 xl:px-2 xl:py-0.5 2xl:px-2.5 2xl:py-1">
                        {currentQuestion.topic}
                      </span>

                      {currentQuestion.image && (
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-extrabold text-blue-700 xl:px-2 xl:py-0.5 2xl:px-2.5 2xl:py-1">
                          Com imagem
                        </span>
                      )}
                    </div>

                    <h2 className="mt-2 text-lg font-extrabold text-blue-950 sm:text-xl xl:text-[15px] 2xl:text-xl">
                      Leia o enunciado e escolha uma alternativa.
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleToggleReview}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-extrabold transition xl:px-3 xl:py-2 2xl:px-4 2xl:py-2.5 ${
                    isMarkedForReview
                      ? "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
                      : "border-slate-200 bg-white text-slate-500 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                  }`}
                >
                  <Flag
                    className={`size-3 ${
                      isMarkedForReview ? "fill-current" : ""
                    }`}
                  />
                  {isMarkedForReview ? "Marcada" : "Marcar para revisar"}
                </button>
              </div>

              <div className="flex flex-1 flex-col py-6 xl:py-3 2xl:py-6">
                <div className="space-y-4 xl:space-y-3 2xl:space-y-5">
                  <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 xl:text-sm xl:leading-5 2xl:text-xl 2xl:leading-9">
                    {currentQuestion.statement}
                  </p>

                  {currentQuestionHasImage && (
                    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                      <img
                        src={currentQuestion.image}
                        alt={currentQuestion.imageAlt || "Imagem da questão"}
                        onError={() => handleImageError(currentQuestion.id)}
                        className="max-h-80 w-full object-contain p-3 sm:max-h-95 xl:max-h-45 xl:p-2 2xl:max-h-105 2xl:p-4"
                      />

                      {currentQuestion.imageCaption && (
                        <figcaption className="border-t border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 xl:px-3 xl:py-1.5 2xl:px-4 2xl:py-2">
                          {currentQuestion.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}

                  {currentQuestion?.image &&
                    imageErrors[currentQuestion.id] && (
                      <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                        <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-slate-400">
                          <ImageOff className="size-5" />
                        </div>

                        <div>
                          <strong className="block font-extrabold text-slate-700">
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

                <div className="mt-7 grid gap-3 xl:mt-4 xl:gap-2 2xl:mt-7 2xl:gap-3">
                  {currentQuestion.alternatives.map((alternative, index) => {
                    const isSelected = selectedAnswer === alternative.id;

                    return (
                      <button
                        type="button"
                        key={alternative.id}
                        onClick={() => handleSelectAnswer(alternative.id)}
                        className={`group flex w-full items-center gap-3 rounded-3xl border p-4 text-left transition sm:p-5 xl:p-2.5 2xl:p-5 ${
                          isSelected
                            ? theme.selectedAlternative
                            : `border-slate-200 bg-white ${theme.hoverAlternative}`
                        }`}
                      >
                        <span
                          className={`grid size-9 shrink-0 place-items-center rounded-2xl text-sm font-extrabold transition xl:size-6 xl:text-xs 2xl:size-9 2xl:text-sm ${
                            isSelected
                              ? "bg-blue-950 text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-white"
                          }`}
                        >
                          {alphabet[index]}
                        </span>

                        <span className="flex-1 text-sm font-semibold leading-6 text-slate-700 sm:text-base xl:text-xs xl:leading-5 2xl:text-base 2xl:leading-6">
                          {alternative.text}
                        </span>

                        {isSelected && (
                          <CheckCircle2 className="size-5 shrink-0 self-center text-blue-950 xl:size-4 2xl:size-5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid min-h-105 place-items-center text-center">
              <div>
                <div className="mx-auto grid size-14 place-items-center rounded-3xl bg-slate-100 text-slate-500">
                  <Lock className="size-6" />
                </div>

                <h2 className="mt-4 text-xl font-extrabold text-blue-950">
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
          <div className="sticky top-4 rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl 2xl:top-6 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400 2xl:text-xs">
                  Navegação
                </span>

                <h3 className="mt-1 text-lg font-extrabold text-blue-950 2xl:text-xl">
                  Questões
                </h3>
              </div>

              <div
                className={`grid size-10 place-items-center rounded-2xl 2xl:size-11 ${theme.iconBox}`}
              >
                <FileQuestion className="size-4 2xl:size-5" />
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
                    className={`relative grid size-10 place-items-center rounded-2xl border text-xs font-extrabold shadow-sm transition 2xl:size-11 2xl:text-sm ${
                      isCurrent
                        ? theme.activeQuestion
                        : isReview
                          ? theme.reviewQuestion
                          : isAnswered
                            ? theme.answeredQuestion
                            : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                    }`}
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
                <strong className="text-blue-950">
                  {answeredCount}/{questions.length}
                </strong>
              </div>

              <div className="flex items-center justify-between text-sm xl:text-xs 2xl:text-sm">
                <span className="font-bold text-slate-500">Para revisar</span>
                <strong className="text-blue-950">{reviewCount}</strong>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${theme.progress}`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {plan === "premium" && (
              <div className="mt-4 rounded-3xl border border-amber-200 bg-amber-50 p-4 xl:p-3 2xl:p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 size-5 shrink-0 text-amber-600 xl:size-4 2xl:size-5" />

                  <div>
                    <h4 className="text-sm font-extrabold text-blue-950 xl:text-xs 2xl:text-sm">
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
                disabled={isFirstQuestion}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 2xl:px-5 2xl:py-3 2xl:text-sm"
              >
                <ChevronLeft className="size-4" />
                Anterior
              </button>

              <button
                type="button"
                onClick={handleMainAction}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-extrabold shadow-sm transition 2xl:px-5 2xl:py-3 2xl:text-sm ${theme.button}`}
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
            className="absolute inset-0 bg-blue-950/30 backdrop-blur-sm"
          />

          <div className="absolute inset-x-3 bottom-3 max-h-[82dvh] overflow-y-auto rounded-4xl border border-slate-200 bg-white p-4 shadow-2xl sm:inset-x-auto sm:right-4 sm:w-105 sm:p-5">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  Navegação
                </span>

                <h3 className="mt-1 text-xl font-extrabold text-blue-950">
                  Questões do simulado
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsNavigatorOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50"
              >
                <X className="size-5" />
              </button>
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
                    className={`relative grid size-11 place-items-center rounded-2xl border text-sm font-extrabold shadow-sm transition ${
                      isCurrent
                        ? theme.activeQuestion
                        : isReview
                          ? theme.reviewQuestion
                          : isAnswered
                            ? theme.answeredQuestion
                            : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                    }`}
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

                <strong className="mt-1 block text-xl font-extrabold text-blue-950">
                  {answeredCount}/{questions.length}
                </strong>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <span className="text-xs font-bold text-slate-400">
                  Revisar
                </span>

                <strong className="mt-1 block text-xl font-extrabold text-blue-950">
                  {reviewCount}
                </strong>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={isFirstQuestion}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
                Anterior
              </button>

              <button
                type="button"
                onClick={handleMainAction}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-extrabold shadow-sm transition ${theme.button}`}
              >
                {mainActionLabel}
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
