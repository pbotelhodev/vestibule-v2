import {
  ArrowRight,
  Atom,
  BookOpenCheck,
  BookOpenText,
  Calculator,
  CheckCircle2,
  Clock3,
  FlaskConical,
  Globe2,
  Landmark,
  Languages,
  LibraryBig,
  Lock,
  Microscope,
  Palette,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { timePerQuestions } from "../../services/simulations/timePerQuestions";
const areaIcons = {
  matematica: Calculator,
  linguas: Languages,
  portugues: BookOpenText,
  literatura: LibraryBig,
  ingles: Languages,
  espanhol: Languages,
  artes: Palette,
  historia: Landmark,
  geografia: Globe2,
  biologia: Microscope,
  fisica: Atom,
  quimica: FlaskConical,
  ciencias_humanas: Globe2,
  ciencias_natureza: Atom,
  "ciencias-humanas": Globe2,
  "ciencias-natureza": Atom,
  geral: BookOpenCheck,
};
const subjectLabel = {
  matematica: "Matemática",
  linguas: "Línguas",
  portugues: "Português",
  literatura: "Literatura",
  ingles: "Inglês",
  espanhol: "Espanhol",
  artes: "Artes",
  historia: "História",
  geografia: "Geografia",
  biologia: "Biologia",
  fisica: "Física",
  quimica: "Química",
  ciencias_humanas: "Ciências Humanas",
  ciencias_natureza: "Ciências da Natureza",
  "ciencias-humanas": "Ciências Humanas",
  "ciencias-natureza": "Ciências da Natureza",
  geral: "Geral",
};
const subjectIconColor = {
  matematica: "text-violet-600",
  linguas: "text-sky-600",
  portugues: "text-rose-600",
  literatura: "text-fuchsia-600",
  ingles: "text-cyan-600",
  espanhol: "text-orange-600",
  artes: "text-pink-600",
  historia: "text-amber-600",
  geografia: "text-emerald-600",
  biologia: "text-lime-600",
  fisica: "text-indigo-600",
  quimica: "text-teal-600",
  ciencias_humanas: "text-blue-600",
  ciencias_natureza: "text-green-600",
  "ciencias-humanas": "text-blue-600",
  "ciencias-natureza": "text-green-600",
  geral: "text-slate-500",
};
const planRank = { free: 1, pro: 2, premium: 3 };
const requiredPlanLabel = { free: "Free", pro: "Pro", premium: "Premium" };
const themeByPlan = {
  free: {
    cardHover: "hover:border-violet-200 hover:shadow-violet-950/10",
    subjectText: "text-violet-600",
    dot: "bg-violet-600",
    button:
      "bg-slate-950 text-white hover:bg-violet-600 hover:shadow-violet-600/25",
  },
  pro: {
    cardHover: "hover:border-blue-200 hover:shadow-blue-950/10",
    subjectText: "text-blue-700",
    dot: "bg-blue-700",
    button:
      "bg-slate-950 text-white hover:bg-blue-700 hover:shadow-blue-700/25",
  },
  premium: {
    cardHover: "hover:border-purple-300 hover:shadow-purple-950/15",
    subjectText:
      "bg-linear-to-r from-purple-800 via-blue-700 to-emerald-700 bg-clip-text text-transparent",
    dot: "bg-linear-to-r from-purple-800 via-blue-700 to-emerald-700",
    button:
      "bg-slate-950 text-white hover:bg-linear-to-r hover:from-purple-800 hover:via-blue-700 hover:to-emerald-500 hover:shadow-purple-700/25",
  },
};
const SimulationCard = ({ simulation, studentPlan }) => {
  const navigate = useNavigate();
  const studentPlanKey = studentPlan?.toLowerCase() || "free";
  const currentTheme = themeByPlan[studentPlanKey] || themeByPlan.free;
  const requiredPlan = simulation.requiredPlan?.toLowerCase() || "free";
  const subject = simulation.subject?.toLowerCase() || "geral";
  const userPlanLevel = planRank[studentPlanKey] || 1;
  const simulationPlanLevel = planRank[requiredPlan] || 1;
  const isLockedByPlan = userPlanLevel < simulationPlanLevel;
  const finalStatus = isLockedByPlan
    ? "locked"
    : simulation.alreadyDone === true
      ? "done"
      : "available";
  const statusConfig = {
    available: {
      label: "Novo",
      Icon: BookOpenCheck,
      badge: "bg-slate-100 text-slate-600 ring-slate-200",
      buttonLabel: "Começar",
    },
    progress: {
      label: "Em andamento",
      Icon: Clock3,
      badge: "bg-blue-50 text-blue-700 ring-blue-100",
      buttonLabel: "Continuar",
    },
    done: {
      label: "Finalizado",
      Icon: CheckCircle2,
      badge: "bg-emerald-50 text-emerald-700 ring-emerald-100",
      buttonLabel: "Ver resultado",
    },
    locked: {
      label: `Plano ${requiredPlanLabel[requiredPlan] || "superior"}`,
      Icon: Lock,
      badge: "bg-slate-100 text-slate-500 ring-slate-200",
      buttonLabel: "Bloqueado",
    },
  };
  const currentStatus = statusConfig[finalStatus] || statusConfig.available;
  const AreaIcon = areaIcons[subject] || BookOpenCheck;
  const CardIcon = finalStatus === "locked" ? Lock : AreaIcon;
  const iconColor =
    finalStatus === "locked"
      ? "text-slate-400"
      : subjectIconColor[subject] || subjectIconColor.geral;
  const quantQuestions = simulation.questions?.length || 0;
  const duration = timePerQuestions(simulation.timePerQuestion, quantQuestions);
  const difficultyLabel = simulation.difficulty
  const handleAction = () => {
    if (finalStatus === "locked") return;
    if (finalStatus === "done") {
      navigate(`/student/simulados/${simulation.publicId}/resultado`, {
        state: { publicId: simulation.publicId },
      });
      return;
    }
    navigate(`/student/simulados/${simulation.publicId}`);
  };
  return (
    <article
      className={[
        "group relative flex min-h-77.5 flex-col overflow-hidden rounded-[1.7rem] border bg-white p-5 shadow-sm transition-all duration-300 xl:min-h-73 xl:p-4 2xl:min-h-80 2xl:rounded-4xl 2xl:p-5",
        finalStatus === "locked"
          ? "border-slate-200 opacity-75"
          : `border-slate-200 hover:-translate-y-1 hover:shadow-xl ${currentTheme.cardHover}`,
      ].join(" ")}
    >
      {" "}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />{" "}
      <div className="relative z-10 flex flex-1 flex-col">
        {" "}
        <div className="flex-1">
          {" "}
          <div className="flex items-start justify-between gap-4">
            {" "}
            <div
              className={[
                "grid size-10 shrink-0 place-items-center rounded-2xl transition-all duration-300 group-hover:scale-105 2xl:size-11",
                iconColor,
              ].join(" ")}
            >
              {" "}
              <CardIcon className="size-5 xl:size-4.75 2xl:size-5" />{" "}
            </div>{" "}
            <span
              className={[
                "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 transition-all duration-300 xl:px-2.5 xl:text-[0.68rem] 2xl:px-3 2xl:text-xs",
                currentStatus.badge,
              ].join(" ")}
            >
              {" "}
              <currentStatus.Icon className="size-3.5 xl:size-3 2xl:size-3.5" />{" "}
              {currentStatus.label}{" "}
            </span>{" "}
          </div>{" "}
          <div className="mt-5 xl:mt-4 2xl:mt-5">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <span
                className={[
                  "size-1.5 shrink-0 rounded-full",
                  finalStatus === "locked" ? "bg-slate-300" : currentTheme.dot,
                ].join(" ")}
              />{" "}
              <p
                className={[
                  "line-clamp-1 text-xs font-extrabold uppercase tracking-[0.16em] xl:text-[0.68rem] 2xl:text-xs",
                  finalStatus === "locked"
                    ? "text-slate-400"
                    : currentTheme.subjectText,
                ].join(" ")}
              >
                {" "}
                {simulation.originCode
                  ? `${simulation.originCode.toUpperCase()} · ${subjectLabel[subject] || "Geral"}`
                  : subjectLabel[subject] || "Geral"}{" "}
              </p>{" "}
            </div>{" "}
            <h3 className="mt-2 line-clamp-2 text-[1.05rem] font-bold leading-snug text-slate-950 xl:text-[0.98rem] 2xl:text-lg">
              {" "}
              {simulation.title}{" "}
            </h3>{" "}
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
              {" "}
              {simulation.description}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-5 xl:mt-4 2xl:mt-5">
          {" "}
          <div className="grid grid-cols-3 gap-2.5 xl:gap-2 2xl:gap-2.5">
            {" "}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-3 py-3 transition-all duration-300 xl:px-2.5 xl:py-2.5 2xl:px-3 2xl:py-3">
              {" "}
              <p className="text-[0.67rem] font-bold text-slate-500 2xl:text-xs">
                {" "}
                Questões{" "}
              </p>{" "}
              <p className="mt-1 text-base font-bold text-slate-950 xl:text-sm 2xl:text-base">
                {" "}
                {quantQuestions}{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-3 py-3 transition-all duration-300 xl:px-2.5 xl:py-2.5 2xl:px-3 2xl:py-3">
              {" "}
              <p className="text-[0.67rem] font-bold text-slate-500 2xl:text-xs">
                {" "}
                Tempo{" "}
              </p>{" "}
              <p className="mt-1 text-base font-bold text-slate-950 xl:text-sm 2xl:text-base">
                {" "}
                {duration}{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-3 py-3 transition-all duration-300 xl:px-2.5 xl:py-2.5 2xl:px-3 2xl:py-3">
              {" "}
              <p className="text-[0.67rem] font-bold text-slate-500 2xl:text-xs">
                {" "}
                Nível{" "}
              </p>{" "}
              <p className="mt-1 text-base font-bold text-slate-950 xl:text-sm 2xl:text-base">
                {" "}
                {difficultyLabel}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <button
            type="button"
            onClick={handleAction}
            aria-disabled={finalStatus === "locked"}
            className={[
              "mt-5 inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold transition-all duration-300 xl:mt-4 xl:h-10 xl:text-xs 2xl:mt-5 2xl:h-11 2xl:text-sm",
              finalStatus === "locked"
                ? "bg-slate-100 text-slate-400"
                : `${currentTheme.button} hover:-translate-y-0.5 hover:shadow-lg`,
            ].join(" ")}
          >
            {" "}
            {currentStatus.buttonLabel}{" "}
            {finalStatus !== "locked" && (
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5 xl:size-3.5 2xl:size-4" />
            )}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </article>
  );
};
export default SimulationCard;
