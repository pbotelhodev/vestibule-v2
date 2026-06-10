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
  "ciencias_humanas": Globe2,
  "ciencias_natureza": Atom,
  geral: BookOpenCheck,
};

const planRank = {
  free: 1,
  pro: 2,
  premium: 3,
};

const requiredPlanLabel = {
  free: "Free",
  pro: "Pro",
  premium: "Premium",
};

const themeByPlan = {
  free: {
    border: "border-violet-100",
    hoverBorder: "hover:border-violet-200",
    hoverBg: "hover:bg-violet-50/30",
    icon: "bg-violet-50 text-violet-600 ring-violet-100",
    badge: "bg-violet-50 text-violet-700 ring-violet-100",
    progressBg: "bg-violet-100",
    progress: "bg-violet-600",
    button: "bg-violet-600 hover:bg-violet-700",
    topLine: "bg-violet-600",
    softBg: "bg-violet-50/45",
    infoBg: "bg-violet-50/60",
    infoBorder: "border-violet-100",
  },
  pro: {
    border: "border-blue-100",
    hoverBorder: "hover:border-blue-200",
    hoverBg: "hover:bg-blue-50/30",
    icon: "bg-blue-50 text-blue-700 ring-blue-100",
    badge: "bg-blue-50 text-blue-700 ring-blue-100",
    progressBg: "bg-blue-100",
    progress: "bg-blue-700",
    button: "bg-blue-700 hover:bg-blue-800",
    topLine: "bg-blue-700",
    softBg: "bg-blue-50/45",
    infoBg: "bg-blue-50/60",
    infoBorder: "border-blue-100",
  },
  premium: {
    border: "border-amber-200",
    hoverBorder: "hover:border-amber-300",
    hoverBg: "hover:bg-amber-50/30",
    icon: "bg-amber-50 text-amber-600 ring-amber-100",
    badge: "bg-amber-50 text-amber-700 ring-amber-100",
    progressBg: "bg-amber-100",
    progress: "bg-amber-500",
    button: "bg-amber-500 hover:bg-amber-600",
    topLine: "bg-amber-500",
    softBg: "bg-amber-50/50",
    infoBg: "bg-amber-50/65",
    infoBorder: "border-amber-100",
  },
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
  "ciencias_humanas": "Ciências Humanas",
  "ciencias_natureza": "Ciências da Natureza",
  geral: "Geral",
};

const SimulationCard = ({ simulation, studentPlan }) => {
  const navigate = useNavigate();

  const currentTheme = themeByPlan[studentPlan] || themeByPlan.free;
  const requiredPlan = simulation.requiredPlan?.toLowerCase() || "free"
  const subject = simulation.subject?.toLowerCase() || "geral"
  const userPlanLevel = planRank[studentPlan] || 1;
  const simulationPlanLevel =
    planRank[requiredPlan] || 1;

  const isLockedByPlan = userPlanLevel < simulationPlanLevel;
  const finalStatus = isLockedByPlan
    ? "locked"
    : simulation.finalStatus || simulation.status || "available";

  const statusConfig = {
    available: {
      label: "Liberado",
      Icon: BookOpenCheck,
      badge: currentTheme.badge,
      buttonLabel: "Iniciar",
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
      badge: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      buttonLabel: "Ver resultado",
    },
    locked: {
      label: `Plano ${requiredPlanLabel[requiredPlan]}`,
      Icon: Lock,
      badge: "bg-slate-100 text-slate-400 ring-slate-200",
      buttonLabel: "Bloqueado",
    },
  };
  
  const currentStatus = statusConfig[finalStatus] || statusConfig.available;
  const AreaIcon = areaIcons[subject] || BookOpenCheck;
  const CardIcon = finalStatus === "locked" ? Lock : AreaIcon;
  const quantQuestions = simulation.questions?.length || 0;

  const handleAction = () => {
    if (finalStatus === "locked") return;

    if (finalStatus === "done") {
      navigate(`/student/simulados/${simulation.publicId}/resultado`);
      return;
    }

    navigate(`/student/simulados/${simulation.publicId}`);
  };
  

  return (
    <article
      className={[
        "group relative flex flex-col overflow-hidden rounded-3xl border bg-white p-5 shadow-sm transition md:rounded-4xl md:p-5 xl:p-4 2xl:p-6",
        finalStatus === "locked"
          ? "border-slate-200 opacity-80"
          : `${currentTheme.border} ${currentTheme.hoverBorder} ${currentTheme.hoverBg} hover:-translate-y-0.5 hover:shadow-md`,
      ].join(" ")}
    >
      {/* Linha superior do plano */}
      <div
        className={[
          "absolute inset-x-0 top-0 h-1",
          finalStatus === "locked" ? "bg-slate-200" : currentTheme.topLine,
        ].join(" ")}
      />

      {/* Fundo interno sutil */}
      <div
        className={[
          "pointer-events-none absolute top-0 right-0 size-32 rounded-full blur-3xl transition group-hover:scale-110",
          finalStatus === "locked" ? "bg-slate-100" : currentTheme.softBg,
        ].join(" ")}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex-1">
          {/* Topo */}
          <div className="flex items-start justify-between gap-4">
            <div
              className={[
                "grid size-12 shrink-0 place-items-center rounded-2xl shadow-sm ring-1",
                finalStatus === "locked"
                  ? "bg-slate-100 text-slate-400 ring-slate-200"
                  : currentTheme.icon,
              ].join(" ")}
            >
              <CardIcon className="size-5" />
            </div>

            <span
              className={[
                "shrink-0 rounded-full px-3 py-1 text-xs font-bold ring-1",
                currentStatus.badge,
              ].join(" ")}
            >
              {currentStatus.label}
            </span>
          </div>

          {/* Conteúdo */}
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
              {subjectLabel[subject]}
            </p>

            <h3 className="mt-2 text-lg font-bold leading-snug text-blue-950 xl:text-base 2xl:text-lg">
              {simulation.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
              {simulation.description}
            </p>
          </div>
        </div>

        <div>
          {/* Progresso */}
          {finalStatus !== "locked" && simulation.progress > 0 && (
            <div className="mt-5">
              <div className="mb-2 flex justify-between text-xs font-bold text-slate-500">
                <span>Progresso</span>
                <span>{simulation.progress}%</span>
              </div>

              <div
                className={[
                  "h-2 overflow-hidden rounded-full",
                  currentTheme.progressBg,
                ].join(" ")}
              >
                <div
                  className={[
                    "h-full rounded-full transition-all",
                    currentTheme.progress,
                  ].join(" ")}
                  style={{ width: `${simulation.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Informações */}
          <div className="mt-5 grid grid-cols-2 gap-3 xl:gap-2 2xl:gap-3">
            <div
              className={[
                "rounded-2xl border p-3",
                finalStatus === "locked"
                  ? "border-slate-200 bg-slate-50"
                  : `${currentTheme.infoBorder} ${currentTheme.infoBg}`,
              ].join(" ")}
            >
              <p className="text-xs font-medium text-slate-500">Questões</p>
              <p className="mt-1 text-sm font-bold text-blue-950">
                {quantQuestions}
              </p>
            </div>

            <div
              className={[
                "rounded-2xl border p-3",
                finalStatus === "locked"
                  ? "border-slate-200 bg-slate-50"
                  : `${currentTheme.infoBorder} ${currentTheme.infoBg}`,
              ].join(" ")}
            >
              <p className="text-xs font-medium text-slate-500">Duração</p>
              <p className="mt-1 text-sm font-bold text-blue-950">
                {timePerQuestions(simulation.timePerQuestion, quantQuestions)}
              </p>
            </div>
          </div>

          {/* Ação */}
          <button
            type="button"
            onClick={handleAction}
            disabled={finalStatus === "locked"}
            className={[
              "mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition xl:px-4 xl:py-2.5 xl:text-xs 2xl:px-5 2xl:py-3 2xl:text-sm",
              finalStatus === "locked"
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : `${currentTheme.button} text-white hover:-translate-y-0.5 hover:shadow-md`,
            ].join(" ")}
          >
            {currentStatus.buttonLabel}
            {finalStatus !== "locked" && <ArrowRight className="size-4" />}
          </button>
        </div>
      </div>
    </article>
  );
};

export default SimulationCard;
