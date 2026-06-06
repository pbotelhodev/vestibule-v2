import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-9999 grid place-items-center bg-white/45 px-4 text-slate-900 backdrop-blur-md">
      {/* Card */}
      <section className="relative flex w-full max-w-70 flex-col items-center rounded-3xl border border-violet-100 bg-white/90 px-5 py-5 text-center shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:max-w-sm sm:rounded-4xl sm:px-8 sm:py-7">
        <div className="relative grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600 sm:size-16 sm:rounded-3xl">
          <div className="absolute inset-0 rounded-2xl bg-violet-400/15 blur-xl sm:rounded-3xl" />

          <LoaderCircle
            className="relative size-5 animate-spin sm:size-7"
            strokeWidth={2}
          />
        </div>

        <h1 className="mt-4 text-sm font-extrabold tracking-tight text-slate-800 sm:mt-5 sm:text-lg">
          Preparando tudo
        </h1>

        <p className="mt-1.5 max-w-56 text-xs leading-5 text-slate-500 sm:mt-2 sm:max-w-xs sm:text-sm sm:leading-6">
          Aguarde um instante enquanto carregamos sua experiência.
        </p>

        <div className="mt-4 flex items-center gap-1.5 sm:mt-6 sm:gap-2">
          <span className="size-1.5 animate-pulse rounded-full bg-violet-500 sm:size-2" />
          <span className="size-1.5 animate-pulse rounded-full bg-blue-500 delay-150 sm:size-2" />
          <span className="size-1.5 animate-pulse rounded-full bg-amber-400 delay-300 sm:size-2" />
        </div>
      </section>
    </div>
  );
};

export default Loading;
