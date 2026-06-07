import {
  BarChart3,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const Demo = () => {
  return (
    <div className="relative mx-auto flex h-full max-h-full w-full items-center justify-center">
      {/* Monitor completo limitado pela tela */}
      <div className="relative w-full max-w-[min(100%,calc((100dvh-96px)*1.62))]">
        {/* Glow */}
        <div className="absolute inset-x-8 -bottom-4 h-12 rounded-full bg-violet-950/25 blur-3xl" />

        {/* Moldura */}
        <div className="relative overflow-hidden rounded-[1.15rem] border border-slate-300 bg-slate-950 p-1.5 shadow-2xl shadow-violet-950/25 sm:rounded-[1.45rem] sm:p-2 2xl:rounded-[1.75rem] 2xl:p-3">
          <div className="relative overflow-hidden rounded-[0.85rem] border border-white/10 bg-white sm:rounded-[1.15rem] 2xl:rounded-[1.35rem]">
            {/* Top bar */}
            <div className="flex h-8 items-center justify-between border-b border-slate-200 bg-white px-3 sm:h-9 xl:h-8 2xl:h-11 2xl:px-4">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-red-400 2xl:size-2.5" />
                <span className="size-2 rounded-full bg-amber-400 2xl:size-2.5" />
                <span className="size-2 rounded-full bg-emerald-400 2xl:size-2.5" />
              </div>

              <div className="hidden rounded-full bg-slate-100 px-3 py-0.5 text-[10px] font-bold text-slate-500 sm:block 2xl:px-4 2xl:py-1 2xl:text-xs">
                Demo institucional Vestibule
              </div>

              <div className="grid size-6 place-items-center rounded-full bg-violet-50 text-violet-700 2xl:size-7">
                <GraduationCap className="size-3.5 2xl:size-4" />
              </div>
            </div>

            {/* Tela */}
            <div className="relative aspect-[16/8.8] max-h-[calc(100dvh-138px)] overflow-hidden bg-slate-50 sm:aspect-[16/8.6] xl:aspect-[16/8.35] 2xl:aspect-video 2xl:max-h-[calc(100dvh-154px)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.045)_1px,transparent_1px)] bg-size-[28px_28px]" />
              <div className="pointer-events-none absolute -top-32 -right-20 size-72 rounded-full bg-violet-100/80 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-amber-100/80 blur-3xl" />

              <div className="relative grid h-full grid-cols-1 md:grid-cols-[140px_1fr] xl:grid-cols-[136px_1fr] 2xl:grid-cols-[180px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-slate-200 bg-white/85 p-3 backdrop-blur-xl md:block 2xl:p-4">
                  <div className="flex items-center gap-2">
                    <div className="grid size-8 place-items-center rounded-2xl bg-violet-700 text-white 2xl:size-9">
                      <GraduationCap className="size-4" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-950 2xl:text-sm">
                        Vestibule
                      </p>
                      <p className="text-[11px] text-slate-400 2xl:text-xs">
                        Instituição
                      </p>
                    </div>
                  </div>

                  <nav className="mt-4 space-y-1.5 2xl:mt-6 2xl:space-y-2">
                    <DemoMenuItem
                      active
                      icon={<BarChart3 className="size-4" />}
                    >
                      Painel
                    </DemoMenuItem>

                    <DemoMenuItem icon={<UsersRound className="size-4" />}>
                      Turmas
                    </DemoMenuItem>

                    <DemoMenuItem icon={<ClipboardList className="size-4" />}>
                      Simulados
                    </DemoMenuItem>
                  </nav>
                </aside>

                {/* Main */}
                <section className="min-w-0 p-3 sm:p-4 xl:p-4 2xl:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700 2xl:text-xs">
                        Visão geral
                      </p>

                      <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl xl:text-2xl 2xl:text-3xl">
                        Desempenho institucional
                      </h3>

                      <p className="mt-1 hidden max-w-xl text-xs leading-5 text-slate-500 sm:block 2xl:text-sm 2xl:leading-6">
                        Acompanhe evolução, participação e desempenho das
                        turmas.
                      </p>
                    </div>

                    <div className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-500 shadow-sm lg:block 2xl:px-4 2xl:py-2 2xl:text-xs">
                      Últimos 30 dias
                    </div>
                  </div>

                  <div className="mt-3 grid gap-2.5 sm:grid-cols-3 2xl:mt-4 2xl:gap-3">
                    <MetricCard
                      label="Alunos ativos"
                      value="1.248"
                      helper="+8%"
                    />

                    <MetricCard
                      label="Acerto médio"
                      value="74%"
                      helper="+12%"
                      violet
                    />

                    <MetricCard
                      label="Simulados"
                      value="38"
                      helper="12 ativos"
                    />
                  </div>

                  <div className="mt-3 grid gap-2.5 lg:grid-cols-[1.15fr_0.85fr] 2xl:mt-4 2xl:gap-3">
                    <div className="rounded-[1.35rem] border border-slate-200 bg-white p-3 shadow-sm shadow-violet-950/5 2xl:rounded-3xl 2xl:p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-slate-950 2xl:text-sm">
                            Evolução por semana
                          </p>
                          <p className="mt-1 text-[11px] text-slate-400 2xl:text-xs">
                            Média geral das turmas
                          </p>
                        </div>

                        <TrendingUp className="size-4 text-violet-700 2xl:size-5" />
                      </div>

                      <div className="mt-4 flex h-[18dvh] max-h-28 min-h-20 items-end gap-2 2xl:h-40 2xl:max-h-none">
                        <ChartBar height="38%" />
                        <ChartBar height="52%" />
                        <ChartBar height="46%" />
                        <ChartBar height="64%" />
                        <ChartBar height="58%" />
                        <ChartBar height="76%" active />
                        <ChartBar height="69%" />
                      </div>
                    </div>

                    <div className="rounded-[1.35rem] border border-slate-200 bg-white p-3 shadow-sm shadow-violet-950/5 2xl:rounded-3xl 2xl:p-4">
                      <p className="text-xs font-bold text-slate-950 2xl:text-sm">
                        Turmas em destaque
                      </p>

                      <div className="mt-3 space-y-2 2xl:mt-4 2xl:space-y-3">
                        <ClassRow name="3º ano A" value="82%" />
                        <ClassRow name="Pré-vestibular" value="78%" />
                        <ClassRow name="ENEM intensivo" value="71%" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Base do monitor menor */}
      </div>
    </div>
  );
};

const DemoMenuItem = ({ active = false, icon, children }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl px-2.5 py-2 text-xs font-bold transition 2xl:gap-3 2xl:rounded-2xl 2xl:px-3 2xl:py-3 2xl:text-sm ${
        active
          ? "bg-violet-700 text-white shadow-lg shadow-violet-950/15"
          : "text-slate-400"
      }`}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
};

const MetricCard = ({ label, value, helper, violet = false }) => {
  return (
    <div className="rounded-[1.35rem] border border-slate-200 bg-white p-3 shadow-sm shadow-violet-950/5 2xl:rounded-3xl 2xl:p-4">
      <p className="text-[11px] font-bold text-slate-400 2xl:text-xs">
        {label}
      </p>

      <p
        className={`mt-1 text-xl font-bold tracking-tight 2xl:mt-2 2xl:text-2xl ${
          violet ? "text-violet-700" : "text-slate-950"
        }`}
      >
        {value}
      </p>

      <p className="mt-1 flex items-center gap-1 text-[11px] font-bold text-emerald-600 2xl:text-xs">
        <CheckCircle2 className="size-3 2xl:size-3.5" />
        {helper}
      </p>
    </div>
  );
};

const ChartBar = ({ height, active = false }) => {
  return (
    <div className="flex flex-1 items-end rounded-full bg-slate-100">
      <div
        style={{ height }}
        className={`w-full rounded-full ${
          active
            ? "bg-linear-to-t from-violet-700 to-violet-400"
            : "bg-slate-300"
        }`}
      />
    </div>
  );
};

const ClassRow = ({ name, value }) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 2xl:rounded-2xl 2xl:py-3">
      <div>
        <p className="text-xs font-bold text-slate-700 2xl:text-sm">{name}</p>
        <p className="text-[11px] text-slate-400 2xl:text-xs">Acerto médio</p>
      </div>

      <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-bold text-violet-700 2xl:px-3 2xl:text-xs">
        {value}
      </span>
    </div>
  );
};

export default Demo;
