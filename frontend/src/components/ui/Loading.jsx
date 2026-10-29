import { GraduationCap } from "lucide-react";

const themes = {
  free: {
    primary: "text-violet-600",
    background: "bg-violet-600",
    soft: "bg-violet-100",
  },
  pro: {
    primary: "text-blue-600",
    background: "bg-blue-600",
    soft: "bg-blue-100",
  },
  premium: {
    primary: "text-purple-700",
    background: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500",
    soft: "bg-purple-100",
  },
};

const Loading = ({ student }) => {
  const plan = student?.planActive?.toLowerCase() ?? "free";
  const theme = themes[plan] ?? themes.free;

  return (
    <div
      role="status"
      aria-label="Carregando conteúdo"
      className="fixed inset-0 z-9999 flex min-h-dvh w-full flex-col items-center justify-center gap-5 bg-white/20 backdrop-blur-sm"
    >
      {/* Animação */}
      <div className="relative grid size-24 place-items-center">
        <div className="absolute inset-2 rounded-full border border-slate-200" />

        <div className="absolute inset-0 motion-safe:animate-spin">
          <span
            className={[
              "absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full",
              theme.background,
            ].join(" ")}
          />
        </div>

        <div
          className={[
            "absolute inset-3 rounded-full border-2 border-transparent border-t-current motion-safe:animate-[spin_3s_linear_infinite_reverse]",
            theme.primary,
          ].join(" ")}
        />

        <div
          className={[
            "grid size-11 place-items-center rounded-full",
            theme.soft,
          ].join(" ")}
        >
          <GraduationCap className={["size-6", theme.primary].join(" ")} />
        </div>
      </div>

      {/* Texto */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-blue-950">
          Conectando conhecimento
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Preparando o Vestibule para você.
        </p>
      </div>
    </div>
  );
};

export default Loading;
