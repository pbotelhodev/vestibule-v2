import {
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Filter,
  Lock,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import SimulationCard from "./SimulationCard";

const filters = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "Liberados",
    value: "available",
  },
  {
    label: "Em andamento",
    value: "progress",
  },
  {
    label: "Finalizados",
    value: "done",
  },
  {
    label: "Bloqueados",
    value: "locked",
  },
];

const simulations = [
  {
    id: "k2j34jkhj234",
    title: "ENEM — Matemática básica",
    description: "Questões essenciais para treinar fundamentos matemáticos.",
    area: "Matemática",
    questions: 45,
    duration: "2h",
    status: "available",
    requiredPlan: "free",
    progress: 0,
  },
];

const planRank = {
  free: 1,
  pro: 2,
  premium: 3,
};

const planTheme = {
  free: {
    label: "Plano Free",
    text: "text-violet-600",
    textStrong: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-100",
    button: "bg-violet-600 hover:bg-violet-700",
    icon: "bg-violet-50 text-violet-600",
  },
  pro: {
    label: "Plano Pro",
    text: "text-blue-700",
    textStrong: "text-blue-800",
    bg: "bg-blue-50",
    border: "border-blue-100",
    button: "bg-blue-700 hover:bg-blue-800",
    icon: "bg-blue-50 text-blue-700",
  },
  premium: {
    label: "Plano Premium",
    text: "text-amber-600",
    textStrong: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    button: "bg-amber-500 hover:bg-amber-600",
    icon: "bg-amber-50 text-amber-600",
  },
};

const getSimulationStatus = (simulation, currentPlan) => {
  const userPlanLevel = planRank[currentPlan] || 1;
  const simulationPlanLevel = planRank[simulation.requiredPlan] || 1;

  if (userPlanLevel < simulationPlanLevel) {
    return "locked";
  }

  return simulation.status;
};

const StudentSimulationsContent = ({ student }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const currentPlan = student?.plan || "free";
  const theme = planTheme[currentPlan] || planTheme.free;

  const simulationsWithStatus = simulations.map((simulation) => ({
    ...simulation,
    finalStatus: getSimulationStatus(simulation, currentPlan),
  }));

  const filteredSimulations = simulationsWithStatus.filter((simulation) => {
    if (activeFilter === "all") return true;

    return simulation.finalStatus === activeFilter;
  });

  const totalAvailable = simulationsWithStatus.filter(
    (simulation) => simulation.finalStatus !== "locked",
  ).length;

  const totalProgress = simulationsWithStatus.filter(
    (simulation) => simulation.finalStatus === "progress",
  ).length;

  const totalLocked = simulationsWithStatus.filter(
    (simulation) => simulation.finalStatus === "locked",
  ).length;

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 xl:p-8 2xl:p-10">
        <div className="absolute inset-0 bg-white" />

        {/* Bolas sólidas decorativas */}
        <div className="absolute -top-24 -right-20 size-64 rounded-full bg-violet-100/75 md:size-72 xl:size-80" />
        <div className="absolute -bottom-28 -left-20 size-64 rounded-full bg-blue-100/70 md:size-72 xl:size-80" />
        <div className="absolute top-1/2 right-1/4 hidden size-44 -translate-y-1/2 rounded-full bg-amber-100/70 md:block md:size-56" />

        {/* Bolinhas flutuantes */}
        <div className="absolute top-12 left-14 size-2.5 rounded-full bg-violet-500/60" />
        <div className="absolute top-24 right-32 size-3 rounded-full bg-blue-500/50" />
        <div className="absolute bottom-20 left-24 size-3 rounded-full bg-amber-400/70" />
        <div className="absolute right-1/3 bottom-16 hidden size-2 rounded-full bg-violet-400/60 md:block" />

        <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <span
              className={[
                "inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1.5 text-xs font-bold shadow-sm backdrop-blur-md",
                theme.border,
                theme.text,
              ].join(" ")}
            >
              <BookOpenCheck className="size-4" />
              Área de simulados
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl xl:text-4xl 2xl:text-6xl">
              Escolha seu próximo simulado.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7 2xl:text-lg 2xl:leading-8">
              Treine por área, continue simulados em andamento e acompanhe quais
              provas estão disponíveis no seu plano.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:min-w-130 2xl:min-w-150">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <CheckCircle2 className="size-5 text-emerald-500" />
              <p className="mt-3 text-2xl font-bold text-slate-950">
                {totalAvailable}
              </p>
              <p className="text-xs font-medium text-slate-500">Liberados</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <Clock3 className="size-5 text-blue-600" />
              <p className="mt-3 text-2xl font-bold text-slate-950">
                {totalProgress}
              </p>
              <p className="text-xs font-medium text-slate-500">Em andamento</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <Lock className="size-5 text-slate-400" />
              <p className="mt-3 text-2xl font-bold text-slate-950">
                {totalLocked}
              </p>
              <p className="text-xs font-medium text-slate-500">Bloqueados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Busca e filtros */}
      <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-4xl md:p-5 2xl:p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 xl:w-96 2xl:w-110">
            <Search className="size-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-400">
              Buscar simulado...
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 xl:pb-0">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={[
                    "shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition",
                    isActive
                      ? `${theme.bg} ${theme.border} ${theme.textStrong}`
                      : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid de simulados */}
      <section>
        <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-700">
          <Filter className="size-4 text-slate-400" />
          {filteredSimulations.length} simulados encontrados
        </div>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          {filteredSimulations.map((simulation) => (
            <SimulationCard
              key={simulation.id}
              simulation={simulation}
              studentPlan={currentPlan}
            />
          ))}
        </div>
      </section>

      {/* Aviso inferior */}
      <section
        className={[
          "rounded-3xl border bg-white p-5 shadow-sm md:rounded-4xl md:p-6 2xl:p-7",
          theme.border,
        ].join(" ")}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <div
              className={[
                "grid size-11 shrink-0 place-items-center rounded-2xl",
                theme.icon,
              ].join(" ")}
            >
              <Sparkles className="size-5" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-950">
                Mais simulados serão liberados conforme seu plano.
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                O Free começa com simulados básicos, o Pro libera relatórios por
                matéria e o Premium terá análises avançadas e trilhas.
              </p>
            </div>
          </div>

          <button
            type="button"
            className={[
              "rounded-full px-5 py-3 text-sm font-bold text-white transition",
              theme.button,
            ].join(" ")}
          >
            Comparar planos
          </button>
        </div>
      </section>
    </div>
  );
};

export default StudentSimulationsContent;
