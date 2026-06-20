import {
  Check,
  CheckCircle2,
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
    label: "Disponíveis",
    value: "available",
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
    button:
      "bg-slate-950 text-white hover:bg-violet-600 hover:shadow-violet-600/25",
    icon: "bg-violet-50 text-violet-600",
    searchIcon: "bg-violet-50 text-violet-600",
    activeFilter:
      "border-violet-200 bg-violet-50 text-violet-700 shadow-violet-950/10",
    filterHover: "hover:border-violet-200 hover:text-violet-700",
    dot: "bg-violet-600",
  },

  pro: {
    label: "Plano Pro",
    text: "text-blue-700",
    textStrong: "text-blue-800",
    bg: "bg-blue-50",
    border: "border-blue-100",
    button:
      "bg-slate-950 text-white hover:bg-blue-700 hover:shadow-blue-700/25",
    icon: "bg-blue-50 text-blue-700",
    searchIcon: "bg-blue-50 text-blue-700",
    activeFilter: "border-blue-200 bg-blue-50 text-blue-800 shadow-blue-950/10",
    filterHover: "hover:border-blue-200 hover:text-blue-800",
    dot: "bg-blue-700",
  },

  premium: {
    label: "Plano Premium",
    text: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    textStrong:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    bg: "bg-white",
    border: "border-purple-200",
    button:
      "bg-slate-950 text-white hover:bg-linear-to-r hover:from-purple-800 hover:via-blue-700 hover:to-teal-500 hover:shadow-purple-700/25",
    icon: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 text-white",
    searchIcon:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 text-white",
    activeFilter:
      "border-purple-200 bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 text-white shadow-purple-950/15",
    filterHover: "hover:border-purple-300 hover:text-purple-800",
    dot: "bg-white",
  },
};

const normalizeText = (text = "") => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

const getSimulationStatus = (simulation, currentPlan) => {
  const userPlanLevel = planRank[currentPlan] || 1;
  const requiredPlan = simulation.requiredPlan?.toLowerCase() || "free";
  const simulationPlanLevel = planRank[requiredPlan] || 1;

  if (userPlanLevel < simulationPlanLevel) {
    return "locked";
  }

  if (simulation.alreadyDone === true) {
    return "done";
  }

  return "available";
};

const StudentSimulationsContent = ({ student, simulations = [] }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const currentFilter =
    filters.find((filter) => filter.value === activeFilter) || filters[0];
  const currentPlan = student?.planActive?.toLowerCase() || "free";
  const theme = planTheme[currentPlan] || planTheme.free;

  const simulationsWithStatus = simulations.map((simulation) => ({
    ...simulation,
    finalStatus: getSimulationStatus(simulation, currentPlan),
  }));

  const filteredSimulations = simulationsWithStatus.filter((simulation) => {
    const matchesFilter =
      activeFilter === "all" || simulation.finalStatus === activeFilter;

    const search = normalizeText(searchTerm);

    const searchableContent = normalizeText(`
      ${simulation.publicId}
      ${simulation.title}
      ${simulation.description}
      ${simulation.subject}
      ${simulation.originCode}
      ${simulation.requiredPlan}
    `);

    const matchesSearch =
      search.length === 0 || searchableContent.includes(search);

    return matchesFilter && matchesSearch;
  });

  const totalAvailable = simulationsWithStatus.filter(
    (simulation) => simulation.finalStatus === "available",
  ).length;

  const totalFinished = simulationsWithStatus.filter(
    (simulation) => simulation.finalStatus === "done",
  ).length;

  const totalLocked = simulationsWithStatus.filter(
    (simulation) => simulation.finalStatus === "locked",
  ).length;

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      {/* Header */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:rounded-4xl md:p-6 xl:p-7 2xl:p-8">
        {/* Grid sutil */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[56px_56px] opacity-45" />

        {/* Bolas decorativas */}
        <div className="pointer-events-none absolute -top-28 -right-20 size-72 rounded-full bg-violet-100/75 md:size-80 xl:size-92" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full bg-blue-100/70 md:size-80 xl:size-92" />
        <div className="pointer-events-none absolute top-1/2 right-1/4 hidden size-56 -translate-y-1/2 rounded-full bg-amber-100/70 md:block xl:size-64" />

        {/* Detalhe pequeno */}
        <div className="pointer-events-none absolute top-19 left-22 size-3 rounded-full bg-amber-400/80" />

        <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          {/* Texto da esquerda */}
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-blue-950 md:text-4xl xl:text-[2.45rem] xl:leading-tight 2xl:text-5xl">
              Escolha seu próximo simulado.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base md:leading-7 2xl:text-lg 2xl:leading-8">
              Treine por área, continue sua preparação e acompanhe quais provas
              estão disponíveis no seu plano.
            </p>
          </div>

          {/* Cards da direita */}
          <div
            className={[
              "grid sm:grid-cols-2 xl:ml-auto xl:w-fit xl:justify-end",
              currentPlan === "premium"
                ? "gap-3 xl:grid-cols-2"
                : "gap-2.5 sm:grid-cols-3 xl:grid-cols-3 2xl:gap-3",
            ].join(" ")}
          >
            <div
              className={[
                "w-full rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur-md",
                currentPlan === "premium"
                  ? "xl:w-40 2xl:w-44 2xl:p-5"
                  : "xl:w-36 2xl:w-40 2xl:p-4",
              ].join(" ")}
            >
              <CheckCircle2 className="size-5 text-emerald-600" />

              <p className="mt-4 text-2xl font-bold text-blue-950 2xl:text-3xl">
                {totalAvailable}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                Liberados
              </p>
            </div>

            <div
              className={[
                "w-full rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur-md",
                currentPlan === "premium"
                  ? "xl:w-40 2xl:w-44 2xl:p-5"
                  : "xl:w-36 2xl:w-40 2xl:p-4",
              ].join(" ")}
            >
              <Check className="size-5 text-blue-600" />

              <p className="mt-4 text-2xl font-bold text-blue-950 2xl:text-3xl">
                {totalFinished}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                Finalizados
              </p>
            </div>

            {currentPlan !== "premium" && (
              <div className="w-full rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur-md xl:w-36 2xl:w-40 2xl:p-4">
                <Lock className="size-5 text-slate-400" />

                <p className="mt-4 text-2xl font-bold text-blue-950 2xl:text-3xl">
                  {totalLocked}
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Bloqueados
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Busca e filtros */}
      <section className="rounded-3xl border border-slate-200 bg-white/95 p-3.5 shadow-sm md:rounded-4xl md:p-4 2xl:p-5">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-3.5 transition-all duration-300 hover:border-slate-300 focus-within:border-slate-300 focus-within:bg-white md:rounded-full xl:w-96 2xl:w-110">
            <div
              className={[
                "grid size-8 shrink-0 place-items-center rounded-full",
                theme.searchIcon,
              ].join(" ")}
            >
              <Search className="size-4" />
            </div>

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar simulado..."
              aria-label="Buscar simulado"
              className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
            />
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
                    "group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold shadow-sm transition-all duration-300",
                    isActive
                      ? theme.activeFilter
                      : `border-slate-200 bg-white text-slate-500 hover:bg-slate-50 ${theme.filterHover}`,
                  ].join(" ")}
                >
                  <span
                    className={[
                      "size-1.5 rounded-full transition-all duration-300",
                      isActive
                        ? theme.dot
                        : "bg-slate-300 group-hover:bg-slate-400",
                    ].join(" ")}
                  />

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
          {filteredSimulations.length} simulados{" "}
          {activeFilter === "all"
            ? "encontrados"
            : currentFilter.label.toLowerCase()}
        </div>

        {filteredSimulations.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {filteredSimulations.map((simulation) => (
              <SimulationCard
                key={simulation.publicId}
                simulation={simulation}
                studentPlan={currentPlan}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm md:rounded-4xl md:p-10">
            <div
              className={[
                "mx-auto grid size-12 place-items-center rounded-2xl",
                theme.icon,
              ].join(" ")}
            >
              <Search className="size-5" />
            </div>

            <h3 className="mt-4 text-base font-bold text-blue-950">
              Nenhum simulado encontrado.
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Tente buscar por outro termo ou altere o filtro selecionado para
              visualizar mais simulados.
            </p>
          </div>
        )}
      </section>

      {/* Aviso inferior */}
      {currentPlan !== "premium" && (
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
                <h3 className="text-base font-bold text-blue-950">
                  Mais simulados serão liberados conforme seu plano.
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  O Free começa com simulados básicos, o Pro libera relatórios
                  por matéria e o Premium terá análises avançadas e trilhas.
                </p>
              </div>
            </div>

            <button
              type="button"
              className={[
                "cursor-pointer rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                theme.button,
              ].join(" ")}
            >
              Comparar planos
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default StudentSimulationsContent;
