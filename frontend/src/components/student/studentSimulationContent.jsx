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

const StudentSimulationContent = ({
  student,
  simulation,
  onFinishSimulation,
}) => {
  /* Tools */
  const navigate = useNavigate();

  /* States */
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewQuestions, setReviewQuestions] = useState({});
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [isSimulationStarted, setIsSimulationStarted] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const questions = simulation?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex];
  const totalSimulationSeconds =
    simulation.timePerQuestion * (questions.length || 1); //usar props de questions;

  useEffect(() => {
    if (!isSimulationStarted) return;
    if (remainingSeconds === null) return;
    if (remainingSeconds <= 0) return;

    const interval = setInterval(() => {
      setRemainingSeconds((currentSeconds) => currentSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isSimulationStarted, remainingSeconds]);

  const timerSeconds = remainingSeconds ?? totalSimulationSeconds;

  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;

  const formattedTimer = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  /* variaveis e Memo*/
  const answeredCount = useMemo(() => {
    return Object.keys(answers).length;
  }, [answers]);
  const allQuestionsAnswered =
    questions.length > 0 && answeredCount === questions.length;
  const reviewCount = useMemo(() => {
    return Object.values(reviewQuestions).filter(Boolean).length;
  }, [reviewQuestions]);

  const progressPercentage = questions.length
    ? Math.round((answeredCount / questions.length) * 100)
    : 0;
  const plan = student?.planActive ?? "free";
  const theme = planTheme[plan] ?? planTheme.free;

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

  /* Memos */

  /* Effects */

  /* Funções */
  const handleStartSimulation = () => {
    setRemainingSeconds(totalSimulationSeconds);
    setIsSimulationStarted(true);
  };

  const handleSelectAnswer = (alternativeId) => {
    if (!currentQuestion || !isSimulationStarted) return;

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: alternativeId,
    }));
  };

  const handleToggleReview = () => {
    if (!currentQuestion || !isSimulationStarted) return;

    setReviewQuestions((currentReviewQuestions) => ({
      ...currentReviewQuestions,
      [currentQuestion.id]: !currentReviewQuestions[currentQuestion.id],
    }));
  };

  const handlePreviousQuestion = () => {
    if (!isSimulationStarted || isFirstQuestion) return;
    setCurrentQuestionIndex((currentIndex) => currentIndex - 1);
  };

  const handleNextQuestion = () => {
    if (!isSimulationStarted) return;

    if (!isLastQuestion) {
      setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
      return;
    }

    if (firstPendingQuestionIndex >= 0) {
      setCurrentQuestionIndex(firstPendingQuestionIndex);
    }
  };

  const handleSelectQuestion = (questionIndex) => {
    if (!isSimulationStarted) return;

    setCurrentQuestionIndex(questionIndex);
    setIsNavigatorOpen(false);
  };

  const handleFinish = () => {
    if (!isSimulationStarted || !allQuestionsAnswered) return;
    onFinishSimulation?.();
  };

  const handleMainAction = () => {
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

  const handleImageError = (questionId) => {
    setImageErrors((currentErrors) => ({
      ...currentErrors,
      [questionId]: true,
    }));
  };

  const mainActionLabel = !isSimulationStarted
    ? "Iniciar"
    : allQuestionsAnswered
      ? "Finalizar simulado"
      : isLastQuestion
        ? "Ir para pendente"
        : "Próxima";

  const MainActionIcon = !isSimulationStarted
    ? Play
    : allQuestionsAnswered
      ? Send
      : ChevronRight;

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:gap-5 lg:py-5 xl:max-w-295 xl:gap-4 xl:px-5 xl:py-4 2xl:max-w-375 2xl:gap-5 2xl:px-8 2xl:py-8">
      {isHelpModalOpen && (
        <div className="fixed inset-0 z-70 grid place-items-center px-4">
          <button
            type="button"
            aria-label="Fechar dúvidas comuns"
            onClick={() => setIsHelpModalOpen(false)}
            className="absolute inset-0 bg-blue-950/30 backdrop-blur-sm"
          />

          <div className="relative z-10 max-h-[90dvh] w-full max-w-2xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl">
            <div className="max-h-[90dvh] overflow-y-auto scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-transparent">
              <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${theme.softBadge}`}
                    >
                      Ajuda
                    </span>

                    <h2
                      className={`mt-3 text-xl font-extrabold sm:text-2xl ${theme.title}`}
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
                    className="cursor-pointer grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50"
                    aria-label="Fechar"
                  >
                    <X className="size-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 px-5 py-5 sm:px-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className={`text-sm font-extrabold ${theme.title}`}>
                      Por que não consigo responder?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      As alternativas só ficam disponíveis depois que você
                      inicia o simulado. Antes disso, as questões permanecem
                      bloqueadas.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className={`text-sm font-extrabold ${theme.title}`}>
                      Como marco para revisar?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Durante a prova, use o botão “Marcar para revisar” para
                      sinalizar questões que você quer voltar antes de
                      finalizar.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className={`text-sm font-extrabold ${theme.title}`}>
                      O que acontece se eu pular?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Você pode navegar entre as questões durante o simulado.
                      Questões sem resposta aparecem como pendentes na
                      navegação.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <h3 className={`text-sm font-extrabold ${theme.title}`}>
                      Por que existe tempo?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      O tempo ajuda a treinar ritmo, foco e tomada de decisão,
                      simulando uma experiência mais próxima de uma prova real.
                    </p>
                  </div>
                </div>

                <div className="rounded-4xl border border-slate-200 bg-white p-5">
                  <h3 className={`text-base font-extrabold ${theme.title}`}>
                    Problemas comuns
                  </h3>

                  <div className="mt-4 grid gap-3">
                    <div className="flex gap-3">
                      <span
                        className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${theme.softBadge}`}
                      >
                        1
                      </span>

                      <p className="text-sm leading-6 text-slate-500">
                        Imagem da questão não carregou ou aparece quebrada.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <span
                        className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${theme.softBadge}`}
                      >
                        2
                      </span>

                      <p className="text-sm leading-6 text-slate-500">
                        Enunciado, alternativa ou informação parece incorreta.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <span
                        className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${theme.softBadge}`}
                      >
                        3
                      </span>

                      <p className="text-sm leading-6 text-slate-500">
                        O botão de avançar, revisar ou finalizar não funcionou
                        como esperado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-4xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className={`text-base font-extrabold ${theme.title}`}>
                    Não encontrou sua dúvida?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Descreva o que aconteceu. Futuramente, essa mensagem poderá
                    ser enviada para a equipe ou registrada no painel
                    administrativo.
                  </p>

                  <label
                    className={`mt-5 block text-sm font-extrabold ${theme.title}`}
                  >
                    Enviar dúvida ou reportar problema
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Ex: A imagem da questão 3 não carregou, ou achei uma alternativa confusa..."
                    className="mt-3 w-full resize-none rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-200 focus:ring-4 focus:ring-violet-100"
                  />

                  <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setIsHelpModalOpen(false)}
                      className="cursor-pointer inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-600 transition hover:bg-slate-50"
                    >
                      Cancelar
                    </button>

                    <button
                      type="button"
                      className={`cursor-pointer inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold shadow-sm transition ${theme.button}`}
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
      <header className="rounded-3xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5 xl:py-2.5 2xl:py-3">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/student/simulados")}
              className={`grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition xl:size-9 2xl:size-10 cursor-pointer ${theme.backButton}`}
              aria-label="Voltar para simulados"
            >
              <ArrowLeft className="size-4" />
            </button>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1
                  className={`truncate text-base font-extrabold tracking-tight sm:text-lg xl:max-w-105 xl:text-base 2xl:max-w-180 2xl:text-lg ${theme.title}`}
                >
                  {simulation.title}
                </h1>

                <span
                  className={`hidden rounded-full border px-2.5 py-1 text-[11px] font-extrabold sm:inline-flex xl:px-2 xl:py-0.5 2xl:px-2.5 2xl:py-1 ${theme.badge}`}
                >
                  Plano {theme.name}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-slate-400 xl:text-[11px] 2xl:text-xs">
                <span>
                  {simulation.subject.charAt(0) + simulation.subject.slice(1)}
                </span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>{questions.length} questões</span>
                <span className="size-1 rounded-full bg-slate-300" />
                <span>
                  {timePerQuestions(
                    simulation.timePerQuestion,
                    questions.length,
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 xl:min-w-62.5 xl:gap-2 2xl:min-w-75 2xl:gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center justify-between text-[11px] font-extrabold text-slate-400">
                <span>Progresso</span>
                <span className={`ml-1 ${theme.title}`}>
                  {progressPercentage}%
                </span>
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

            <div
              className={`hidden shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-extrabold shadow-sm sm:inline-flex xl:px-3 xl:py-1.5 xl:text-[11px] 2xl:px-3 2xl:py-2 2xl:text-xs ${theme.timerBox}`}
            >
              <Timer className={`size-4 ${theme.timerIcon}`} />
              {formattedTimer}
            </div>
          </div>
        </div>
      </header>

      {/* Nav mobile prev e next */}
      <div className="grid grid-cols-4 gap-2 xl:hidden">
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
          onClick={() => {
            setIsNavigatorOpen(false);
            setIsHelpModalOpen(true);
          }}
          className={`inline-flex items-center justify-center gap-2 rounded-full border px-3 py-3 text-xs font-extrabold shadow-sm transition sm:text-sm ${theme.lightButton}`}
        >
          <FileQuestion className="size-4" />
          Ajuda
        </button>
        <button
          type="button"
          onClick={handlePreviousQuestion}
          disabled={!isSimulationStarted || isFirstQuestion}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-3 text-xs font-extrabold text-slate-600 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
        >
          <ChevronLeft className="size-4" />
          Anterior
        </button>

        <button
          type="button"
          onClick={handleMainAction}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-extrabold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ${theme.button}`}
        >
          {mainActionLabel}
          <MainActionIcon className="size-4" />
        </button>
      </div>

      {/* Card das questões */}
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-4 2xl:grid-cols-[minmax(0,1fr)_400px] 2xl:gap-5">
        <main className="min-w-0 rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur-xl sm:p-5 xl:p-5 2xl:p-8">
          {!isSimulationStarted ? (
            <div className="flex min-h-130 flex-col justify-center rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:min-h-100 2xl:min-h-155 2xl:p-8">
              <div className="mx-auto w-full max-w-2xl text-center">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${theme.softBadge}`}
                >
                  Antes de começar
                </span>

                <h2
                  className={`mt-2 text-2xl font-extrabold sm:text-3xl ${theme.title}`}
                >
                  Prepare-se para o simulado
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                  Ao iniciar, o tempo começa a contar e as questões ficam
                  liberadas para resposta.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
                      Questões
                    </span>

                    <strong
                      className={`mt-2 block text-lg font-extrabold ${theme.title}`}
                    >
                      {questions.length}
                    </strong>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
                      Tempo
                    </span>

                    <strong
                      className={`mt-2 block text-lg font-extrabold ${theme.title}`}
                    >
                      {formattedTimer}
                    </strong>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
                      Matéria
                    </span>

                    <strong
                      className={`mt-2 block text-sm font-extrabold ${theme.title}`}
                    >
                      {simulation.subject}
                    </strong>
                  </div>
                </div>

                <div className="mt-4 rounded-4xl border border-slate-200 bg-slate-50 px-5 py-2 text-left">
                  <h3 className={`text-base font-extrabold ${theme.title}`}>
                    Como funciona
                  </h3>

                  <div className="mt-2 grid gap-1 text-xs leading-6 text-slate-500">
                    <p>• Leia cada enunciado com atenção antes de responder.</p>
                    <p>
                      • Marque questões para revisar quando estiver em dúvida.
                    </p>
                    <p>
                      • O tempo é calculado pela quantidade de questões e tempo
                      médio por questão.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleMainAction}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold shadow-sm transition ${theme.button}`}
                  >
                    Iniciar simulado
                    <Play className="size-4" />
                  </button>

                  <p className="text-xs font-semibold xl:hidden 2xl:flex text-slate-400">
                    As questões só aparecem depois que o simulado for iniciado.
                  </p>
                </div>
              </div>
            </div>
          ) : currentQuestion ? (
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

                      {currentQuestion.imageUrl && (
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold xl:px-2 xl:py-0.5 2xl:px-2.5 2xl:py-1 ${theme.imageBadge}`}
                        >
                          Com imagem
                        </span>
                      )}
                    </div>

                    <h2
                      className={`mt-2 text-lg font-extrabold sm:text-xl xl:text-[15px] 2xl:text-xl ${theme.title}`}
                    >
                      Leia o enunciado e escolha uma alternativa.
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleToggleReview}
                  disabled={!isSimulationStarted}
                  className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-extrabold transition disabled:cursor-not-allowed disabled:opacity-50 xl:px-3 xl:py-2 2xl:px-4 2xl:py-2.5 ${
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
                        src={currentQuestion.imageUrl}
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

                  {currentQuestion?.imageUrl &&
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
                        disabled={!isSimulationStarted}
                        className={`group cursor-pointer flex w-full items-center gap-3 rounded-3xl border p-4 text-left transition disabled:cursor-not-allowed disabled:opacity-60 sm:p-5 xl:p-2.5 2xl:p-5 ${
                          isSelected
                            ? theme.selectedAlternative
                            : `border-slate-200 bg-white ${theme.hoverAlternative}`
                        }`}
                      >
                        <span
                          className={`grid size-9 shrink-0 place-items-center rounded-2xl text-sm font-extrabold transition xl:size-6 xl:text-xs 2xl:size-9 2xl:text-sm ${
                            isSelected
                              ? theme.selectedLetter
                              : "bg-slate-100 text-slate-500 group-hover:bg-white"
                          }`}
                        >
                          {alphabet[index]}
                        </span>

                        <span className="flex-1 text-sm font-semibold leading-6 text-slate-700 sm:text-base xl:text-xs xl:leading-5 2xl:text-base 2xl:leading-6">
                          {alternative.text}
                        </span>

                        {isSelected && (
                          <CheckCircle2
                            className={`size-5 shrink-0 self-center xl:size-4 2xl:size-5 ${theme.selectedCheck}`}
                          />
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

                <h3
                  className={`mt-1 text-lg font-extrabold 2xl:text-xl ${theme.title}`}
                >
                  Questões
                </h3>
              </div>

              <button
                onClick={() => setIsHelpModalOpen(true)}
                className={`cursor-pointer grid size-10 place-items-center rounded-2xl 2xl:size-11 ${theme.iconBox}`}
              >
                <FileQuestion className="size-4 2xl:size-5" />
              </button>
            </div>

            <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 2xl:p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-extrabold text-slate-400">
                  Tempo
                </span>

                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-extrabold ${theme.timerBox}`}
                >
                  <Timer className={`size-4 ${theme.timerIcon}`} />
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
                    disabled={!isSimulationStarted}
                    className={`relative cursor-pointer grid size-10 place-items-center rounded-2xl border text-xs font-extrabold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50 2xl:size-11 2xl:text-sm ${
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
                <strong className={theme.title}>
                  {answeredCount}/{questions.length}
                </strong>
              </div>

              <div className="flex items-center justify-between text-sm xl:text-xs 2xl:text-sm">
                <span className="font-bold text-slate-500">Para revisar</span>
                <strong className={theme.title}>{reviewCount}</strong>
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
                disabled={!isSimulationStarted || isFirstQuestion}
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

            <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-extrabold text-slate-400">
                  Tempo
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-blue-950">
                  <Timer className="size-4 text-violet-600" />
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
                    disabled={!isSimulationStarted}
                    className={`relative grid size-11 place-items-center rounded-2xl border text-sm font-extrabold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${
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
                disabled={!isSimulationStarted || isFirstQuestion}
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
