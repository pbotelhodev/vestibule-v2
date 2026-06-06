import { BarChart3, Clock3, Play, CheckCircle2 } from "lucide-react";

const HeroMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Card flutuante mobile */}
      <div className="pointer-events-none absolute -top-6 right-4 z-40 flex animate-[floatSoft_8s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-violet-100 bg-white px-3 py-2 shadow-xl shadow-violet-950/10 backdrop-blur-md sm:hidden md:-top-1">
        <div className="grid size-8 place-items-center rounded-xl bg-violet-50 text-violet-600">
          <BarChart3 className="size-4" />
        </div>

        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-wide text-violet-600">
            Evolução
          </p>
          <p className="text-xs font-bold text-slate-700">+12% na semana</p>
        </div>
      </div>
      {/* Card flutuante inferior mobile/tablet — Desafio do dia */}
      <div className="pointer-events-none absolute -bottom-5 left-4 z-40 flex animate-[floatReverse_9s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-amber-100 bg-white/95 px-3 py-2 shadow-xl shadow-amber-950/10 backdrop-blur-md sm:-bottom-6 sm:left-6 xl:hidden md:hidden">
        <div className="grid size-8 place-items-center rounded-xl bg-amber-50 text-amber-500">
          <Clock3 className="size-4" />
        </div>

        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-wide text-amber-600">
            Desafio do dia
          </p>

          <p className="text-xs font-bold text-slate-700">
            20 questões rápidas
          </p>
        </div>
      </div>
      {/* Caixa principal */}
      <div className="relative z-20 rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-violet-950/10">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-sm">
          <BarChart3 className="size-6" />
        </div>

        <div className="mt-6">
          <span className="rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-400">
            #1101
          </span>

          <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-800">
            Simulado ENEM: Matemática
          </h3>

          <div className="mt-4 flex items-center gap-4 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500" />
              45 Questões
            </span>

            <span>·</span>

            <span className="flex items-center gap-2">
              <Clock3 className="size-4 text-slate-400" />
              2h 30m
            </span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[45%] rounded-full bg-violet-600" />
          </div>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-5 py-3 text-sm font-bold text-violet-600 transition hover:bg-violet-100">
            <Play className="size-4" />
            Continuar
          </button>
        </div>
      </div>

      {/* Card flutuante superior/entre centro e direita — Taxa de Acerto */}
      <div className="absolute -top-15 right-20 z-30 hidden w-60 animate-[floatSoft_8s_ease-in-out_infinite] rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/10 sm:hidden md:block md:-top-5 lg:block lg:-top-10">
        <p className="text-sm font-semibold text-slate-500">
          Taxa de Acerto Geral
        </p>

        <div className="mt-2 flex items-center gap-3">
          <strong className="text-4xl font-bold tracking-tight text-slate-800">
            76%
          </strong>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
            +2% hoje
          </span>
        </div>

        <div className="mt-6 flex items-end gap-2">
          <span className="h-4 w-7 rounded-sm bg-violet-100" />
          <span className="h-6 w-7 rounded-sm bg-violet-200" />
          <span className="h-5 w-7 rounded-sm bg-violet-300" />
          <span className="h-8 w-7 rounded-sm bg-violet-400" />
          <span className="h-7 w-7 rounded-sm bg-violet-500" />
          <span className="h-10 w-7 rounded-sm bg-violet-600" />
        </div>
      </div>

      {/* Card flutuante inferior/direita — Evolução */}
      <div className="absolute -right-5 bottom-10 z-30 hidden w-40 animate-[floatReverse_9s_ease-in-out_infinite] rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 sm:block md:-bottom-0.5">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
          <BarChart3 className="size-5" />
        </div>

        <p className="mt-4 text-sm font-bold text-slate-800">Evolução</p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          Seu desempenho subiu nos últimos simulados.
        </p>
      </div>

      {/* Card flutuante inferior/esquerda — Revisão */}
      <div className="absolute -bottom-10 left-8 z-30 hidden animate-[floatSoft_10s_ease-in-out_infinite_reverse] rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/10 md:flex md:items-center md:gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
          🧠
        </div>

        <div>
          <p className="text-sm font-bold text-slate-800">
            Revisão recomendada
          </p>
          <p className="text-xs text-slate-500">Matemática · Funções</p>
        </div>
      </div>
    </div>
  );
};

export default HeroMockup;
