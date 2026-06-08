/* eslint-disable no-unused-vars */
import {
  BarChart3,
  BookOpenCheck,
  Crown,
  LayoutDashboard,
  LogOut,
  Settings,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

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

const PanelAside = ({ student }) => {
  const [isOpen, setIsOpen] = useState(false);

  const studentInitial = student?.name?.charAt(0)?.toUpperCase() || "A";
  const firstName = student?.name?.split(" ")?.[0] || "Aluno";
  const currentPlan = planLabels[student?.plan] || "Plano Free";

  const openAside = () => setIsOpen(true);
  const closeAside = () => setIsOpen(false);

  const handleAsideClick = () => {
    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;

    if (isTouchDevice && !isOpen) {
      openAside();
    }
  };

  const labelVisibility = isOpen
    ? "w-44 opacity-100"
    : "w-0 opacity-0 xl:group-hover:w-44 xl:group-hover:opacity-100";

  const itemLayout = isOpen ? "gap-3" : "gap-0 xl:group-hover:gap-3";

  return (
    <>
      {/* Overlay touch/mobile/tablet */}
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
          "group fixed top-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-r border-slate-200 bg-white shadow-sm",
          "transition-[width] duration-300 ease-out will-change-[width]",
          isOpen ? "w-55 xl:w-20" : "w-20",
          "xl:hover:w-55",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex h-20 shrink-0 items-center px-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl">
              <img
                src={logo}
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
              <p className="truncate text-xs font-medium text-violet-500">
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
              className="ml-auto grid size-10 shrink-0 place-items-center rounded-2xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800 xl:hidden"
            >
              <X className="size-5" />
            </button>
          )}
        </div>

        {/* Perfil */}
        <div className="shrink-0 px-3">
          <div
            className={[
              "flex h-14 w-full items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 px-1.5",
              "transition-[gap,background-color,border-color] duration-200 ease-out",
              itemLayout,
            ].join(" ")}
          >
            <div className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-violet-600 text-sm font-bold text-white shadow-sm">
              {student?.avatarUrl ? (
                <img
                  src={student.avatarUrl}
                  alt={student?.name || "Aluno"}
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
                Olá, {firstName}
              </p>

              <p className="truncate text-xs font-medium text-slate-500">
                {student?.email || "aluno@vestibule.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Navegação */}
        <nav className="mt-6 flex flex-1 flex-col gap-1 px-3">
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
                  "transition-[gap,background-color,color,box-shadow] duration-200 ease-out",
                  itemLayout,
                  isActive
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-slate-500 hover:bg-violet-50 hover:text-violet-700",
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

        {/* Rodapé */}
        <div className="shrink-0 space-y-3 px-3 pb-4">
          {/* Plano */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
            }}
            className={[
              "flex h-14 w-full items-center overflow-hidden rounded-3xl border border-violet-100 bg-linear-to-br from-violet-50 via-white to-blue-50 px-1.5 text-violet-600",
              "transition-[gap,border-color,box-shadow] duration-200 ease-out hover:border-violet-200 hover:shadow-sm",
              itemLayout,
            ].join(" ")}
          >
            <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white shadow-sm">
              <Crown className="size-5" />
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
              <p className="truncate text-xs font-bold text-slate-800">
                {currentPlan}
              </p>
            </div>
          </button>

          {/* Sair */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
            }}
            className={[
              "flex h-12 w-full cursor-pointer items-center overflow-hidden rounded-2xl px-1.5 text-sm font-bold text-slate-400",
              "transition-[gap,background-color,color] duration-200 ease-out hover:bg-red-50 hover:text-red-500",
              itemLayout,
            ].join(" ")}
          >
            <LogOut className="size-5 shrink-0" />

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
