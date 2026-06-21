/* eslint-disable no-unused-vars */
import {
  BarChart3,
  BookOpenCheck,
  Crown,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { planThemesAside } from "../../services/simulations/planTheme";

import Logo from "../../assets/logo.png";
import LogoPro from "../../assets/logo-blue.png";
import LogoPremium from "../../assets/logo-premium.png";

const PREMIUM_GRADIENT_ID = "premium-aside-gradient";
const planThemes = planThemesAside;

const navItems = [
  {
    label: "Painel",
    path: "/student/dashboard",
    Icon: LayoutDashboard,
  },
  {
    label: "Simulados",
    path: "/student/simulados",
    Icon: BookOpenCheck,
  },
  {
    label: "Desempenho",
    path: "/student/desempenho",
    Icon: BarChart3,
  },
  {
    label: "Meu perfil",
    path: "/student/perfil",
    Icon: UserRound,
  },
  {
    label: "Configurações",
    path: "/student/configuracoes",
    Icon: Settings,
  },
];

const planLabels = {
  free: "Plano Free",
  pro: "Plano Pro",
  premium: "Plano Premium",
};

const planLogos = {
  free: Logo,
  pro: LogoPro,
  premium: LogoPremium,
};

const PanelAside = ({ student }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentPlanKey = student?.planActive?.toLowerCase() || "free";
  const currentTheme = planThemes[currentPlanKey] || planThemes.free;
  const currentPlan = planLabels[currentPlanKey] || planLabels.free;
  const currentLogo = planLogos[currentPlanKey] || planLogos.free;

  const iconStroke = currentTheme.gradientIcon
    ? `url(#${PREMIUM_GRADIENT_ID})`
    : "currentColor";

  const fullName = student?.name || "Aluno Vestibule";
  const nameParts = fullName.trim().split(" ");
  const firstName = nameParts[0] || "Aluno";
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  const displayName = lastName ? `${firstName} ${lastName}` : firstName;
  const studentInitial = firstName.charAt(0).toUpperCase() || "A";

  const navigate = useNavigate();

  const openAside = () => setIsOpen(true);
  const closeAside = () => setIsOpen(false);

  const handleAsideClick = () => {
    const isTouchLayout = window.innerWidth < 1280;

    if (isTouchLayout && !isOpen) {
      openAside();
    }
  };

  const handleExitUser = () => {
    navigate("/login");
  };

  const labelVisibility = isOpen
    ? "w-40 opacity-100"
    : "w-0 opacity-0 xl:group-hover:w-40 xl:group-hover:opacity-100";

  const itemLayout = isOpen
    ? "justify-start gap-3"
    : "justify-center gap-0 xl:group-hover:justify-start xl:group-hover:gap-3";

  const headerLayout = isOpen
    ? "justify-start gap-3"
    : "justify-center gap-0 xl:group-hover:justify-start xl:group-hover:gap-3";

  return (
    <>
      {currentTheme.gradientIcon && (
        <svg
          aria-hidden="true"
          focusable="false"
          className="pointer-events-none absolute size-0"
        >
          <defs>
            <linearGradient
              id={PREMIUM_GRADIENT_ID}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#6b21a8" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      )}

      <button
        type="button"
        onClick={openAside}
        className={[
          "fixed top-4 left-4 z-40 grid size-12 place-items-center rounded-2xl border bg-white shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 md:hidden",
          currentTheme.mobileButton,
        ].join(" ")}
        aria-label="Abrir menu lateral"
      >
        <Menu className={["size-5", currentTheme.iconText].join(" ")} />
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Fechar menu lateral"
          onClick={closeAside}
          className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm xl:hidden"
        />
      )}

      <aside
        onClick={handleAsideClick}
        className={[
          "group fixed top-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-r bg-white/95 shadow-sm shadow-slate-950/5 backdrop-blur-xl",
          "transition-[width,transform] duration-300 ease-out will-change-[width,transform]",
          currentTheme.border,
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",
          isOpen ? "md:translate-x-0 md:w-55" : "md:translate-x-0 md:w-20.5",
          "xl:w-20.5 xl:hover:w-55",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
        <div className="pointer-events-none absolute -top-20 left-4 size-32 rounded-full bg-violet-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-2 size-36 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative z-10 flex h-20 shrink-0 items-center px-3">
          <div
            className={[
              "flex min-w-0 flex-1 items-center transition-[gap] duration-200 ease-out",
              headerLayout,
            ].join(" ")}
          >
            <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-950/5">
              <img
                src={currentLogo}
                alt="Vestibule"
                className="h-10 w-auto object-contain"
              />
            </div>

            <div
              className={[
                "min-w-0 overflow-hidden transition-[width,opacity] duration-200 ease-out",
                labelVisibility,
              ].join(" ")}
            >
              <p className="truncate text-sm font-bold text-slate-950">
                Vestibule
              </p>

              <p
                className={[
                  "truncate text-xs font-semibold",
                  currentTheme.text,
                ].join(" ")}
              >
                Preparação inteligente
              </p>
            </div>
          </div>

          {isOpen && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeAside();
              }}
              className={[
                "ml-auto grid size-8 shrink-0 place-items-center rounded-2xl border bg-white text-slate-400 transition hover:bg-slate-50 hover:text-slate-800 xl:hidden",
                currentTheme.border,
              ].join(" ")}
              aria-label="Fechar menu lateral"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        <div className="relative z-10 shrink-0 px-3">
          <div
            className={[
              "flex h-14 w-full items-center overflow-hidden rounded-2xl border bg-white/85 px-1.5 shadow-sm shadow-slate-950/5 ring-1",
              "transition-[gap,background-color,border-color] duration-200 ease-out",
              currentTheme.border,
              currentTheme.ring,
              itemLayout,
            ].join(" ")}
          >
            <div
              className={[
                "grid size-11 shrink-0 place-items-center overflow-hidden rounded-2xl text-sm font-bold shadow-sm",
                currentTheme.avatar,
              ].join(" ")}
            >
              {student?.avatarUrl ? (
                <img
                  src={student.avatarUrl}
                  alt={fullName}
                  className="size-full object-cover"
                />
              ) : (
                studentInitial
              )}
            </div>

            <div
              className={[
                "min-w-0 overflow-hidden transition-[width,opacity] duration-200 ease-out",
                labelVisibility,
              ].join(" ")}
            >
              <p className="truncate text-sm font-bold text-slate-950">
                {displayName}
              </p>

              <p className="truncate text-xs font-medium text-slate-400">
                {student?.email || "aluno@vestibule.com"}
              </p>
            </div>
          </div>
        </div>

        <nav className="relative z-10 mt-6 flex flex-1 flex-col gap-1 px-3">
          {navItems.map(({ label, path, Icon }) => (
            <NavLink
              key={path}
              to={path}
              title={label}
              onClick={(event) => {
                event.stopPropagation();
                closeAside();
              }}
              className={({ isActive }) =>
                [
                  "flex h-12 w-full items-center overflow-hidden rounded-2xl px-1.5 text-sm font-bold",
                  "transition-[gap,background-color,color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5",
                  itemLayout,
                  isActive
                    ? `${currentTheme.active} shadow-sm`
                    : `text-slate-400 ${currentTheme.hover}`,
                ].join(" ")
              }
            >
              <span className="grid size-11 shrink-0 place-items-center">
                <Icon className="size-5" />
              </span>

              <span
                className={[
                  "overflow-hidden whitespace-nowrap transition-[width,opacity] duration-200 ease-out",
                  labelVisibility,
                ].join(" ")}
              >
                {label}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="relative z-10 shrink-0 space-y-3 px-3 pb-4">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
            }}
            className={[
              "flex h-14 w-full items-center overflow-hidden rounded-3xl border bg-linear-to-br px-1.5 shadow-sm shadow-slate-950/5",
              "transition-[gap,border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md",
              currentTheme.border,
              currentTheme.card,
              itemLayout,
            ].join(" ")}
          >
            <div
              className={[
                "grid size-11 shrink-0 place-items-center rounded-2xl border shadow-sm",
                currentTheme.iconBox,
              ].join(" ")}
            >
              <Crown
                className={["size-5", currentTheme.iconText].join(" ")}
                stroke={iconStroke}
              />
            </div>

            <div
              className={[
                "min-w-0 overflow-hidden text-left transition-[width,opacity] duration-200 ease-out",
                labelVisibility,
              ].join(" ")}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Assinatura
              </p>

              <div className="flex items-center gap-2">
                <span
                  className={[
                    "size-1.5 shrink-0 rounded-full",
                    currentTheme.planDot,
                  ].join(" ")}
                />

                <p
                  className={[
                    "truncate text-xs font-bold",
                    currentTheme.textStrong,
                  ].join(" ")}
                >
                  {currentPlan}
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleExitUser();
            }}
            className={[
              "flex h-12 w-full cursor-pointer items-center overflow-hidden rounded-2xl px-1.5 text-sm font-bold text-slate-400",
              "transition-[gap,background-color,color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-red-50 hover:text-red-500",
              itemLayout,
            ].join(" ")}
          >
            <span className="grid size-11 shrink-0 place-items-center">
              <LogOut className="size-5" />
            </span>

            <span
              className={[
                "overflow-hidden whitespace-nowrap transition-[width,opacity] duration-200 ease-out",
                labelVisibility,
              ].join(" ")}
            >
              Sair
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default PanelAside;
