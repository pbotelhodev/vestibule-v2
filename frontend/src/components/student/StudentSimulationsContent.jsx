import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  LockKeyhole,
  Search,
  Sparkles,
} from "lucide-react";

import { planThemesSimulation } from "../../services/simulations/planTheme";

const StudentSimulationsContent = ({ student }) => {
  const planKey = student?.planActive?.toLowerCase() ?? "free";

  const currentPlan = planThemesSimulation[planKey] ? planKey : "free";

  const theme = planThemesSimulation[currentPlan];

  return (
    <div className="mx-auto w-full max-w-450 space-y-5 pb-8 md:space-y-6">
      {/* Header */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:p-7 2xl:p-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
          <div className="min-w-0">
            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl 2xl:text-[42px]">
              Sua próxima conquista
              <span className={["block", theme.heading].join(" ")}>
                começa aqui.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Explore os simulados, coloque seus conhecimentos à prova e avance
              na sua preparação.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 xl:w-96">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 sm:p-4">
              <ClipboardList className={["size-5", theme.icon].join(" ")} />

              <strong className="mt-4 block text-2xl font-bold text-blue-950">
                —
              </strong>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Disponíveis
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 sm:p-4">
              <CheckCircle2 className="size-5 text-emerald-600" />

              <strong className="mt-4 block text-2xl font-bold text-blue-950">
                —
              </strong>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Finalizados
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 sm:p-4">
              <LockKeyhole className="size-5 text-slate-400" />

              <strong className="mt-4 block text-2xl font-bold text-blue-950">
                —
              </strong>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Bloqueados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulados */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 xl:p-6">
        <div className="mb-5">
          <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
            Explorar simulados
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Encontre a prova ideal para seu próximo treino.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            className={[
              "flex h-11 w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition-colors focus-within:bg-white focus-within:ring-4 lg:max-w-sm",
              theme.focus,
            ].join(" ")}
          >
            <Search className="size-4 shrink-0 text-slate-400" />

            <input
              type="search"
              placeholder="Buscar por nome ou matéria..."
              aria-label="Buscar simulados"
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            <button
              type="button"
              className={[
                "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-full border px-4 text-xs font-semibold",
                theme.filter,
              ].join(" ")}
            >
              Todos
            </button>

            {["Disponíveis", "Finalizados", "Bloqueados"].map((filter) => (
              <button
                key={filter}
                type="button"
                className={[
                  "inline-flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-500 transition-colors",
                  theme.filterHover,
                ].join(" ")}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {/* SimulationCard */}
          </div>

          <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-12 text-center">
            <div
              className={[
                "grid size-12 place-items-center rounded-xl border",
                theme.iconBox,
              ].join(" ")}
            >
              <ClipboardList className="size-5" />
            </div>

            <h3 className="mt-4 text-base font-bold text-blue-950">
              Nenhum simulado para exibir
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Os simulados disponíveis serão exibidos aqui quando a listagem
              estiver integrada.
            </p>
          </div>
        </div>
      </section>

      {/* Upgrade */}
      {currentPlan !== "premium" && (
        <section
          className={["rounded-2xl border p-5 sm:p-6", theme.banner].join(" ")}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <div
                className={[
                  "grid size-11 shrink-0 place-items-center rounded-xl border",
                  theme.iconBox,
                ].join(" ")}
              >
                <Sparkles className="size-5" />
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold text-blue-950">
                  {currentPlan === "pro"
                    ? "Conheça o Vestibule Premium"
                    : "Amplie suas possibilidades"}
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  {currentPlan === "pro"
                    ? "Descubra os recursos avançados previstos para o plano Premium."
                    : "Conheça os planos Pro e Premium e descubra novas possibilidades para sua preparação."}
                </p>
              </div>
            </div>

            <button
              type="button"
              className={[
                "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200",
                theme.button,
              ].join(" ")}
            >
              {currentPlan === "pro" ? "Conhecer Premium" : "Comparar planos"}

              <ArrowRight className="size-4" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default StudentSimulationsContent;
