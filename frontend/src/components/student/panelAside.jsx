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

import Logo from "../../assets/logo.png";
import LogoBlue from "../../assets/logo-blue.png";
import LogoAmber from "../../assets/logo-amber.png";

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

const planThemes = {
  free: {
    active: "bg-violet-600 text-white",
    hover: "hover:bg-violet-50 hover:text-violet-700",
    iconBox: "bg-violet-50 text-violet-600",
    avatar: "bg-violet-600 text-white",
    border: "border-violet-100",
    softBorder: "border-violet-200",
    card: "from-violet-50 via-white to-blue-50",
    text: "text-violet-600",
    textStrong: "text-violet-700",
    button: "bg-violet-600 hover:bg-violet-700",
    mobileButton: "border-violet-100 text-violet-700 hover:bg-violet-50",
  },
  pro: {
    active: "bg-blue-700 text-white",
    hover: "hover:bg-blue-50 hover:text-blue-700",
    iconBox: "bg-blue-50 text-blue-700",
    avatar: "bg-blue-700 text-white",
    border: "border-blue-100",
    softBorder: "border-blue-200",
    card: "from-blue-50 via-white to-violet-50",
    text: "text-blue-700",
    textStrong: "text-blue-800",
    button: "bg-blue-700 hover:bg-blue-800",
    mobileButton: "border-blue-100 text-blue-700 hover:bg-blue-50",
  },
  premium: {
    active: "bg-amber-500 text-white",
    hover: "hover:bg-amber-50 hover:text-amber-700",
    iconBox: "bg-amber-50 text-amber-600",
    avatar: "bg-amber-500 text-white",
    border: "border-amber-200",
    softBorder: "border-amber-300",
    card: "from-amber-50 via-white to-violet-50",
    text: "text-amber-600",
    textStrong: "text-amber-700",
    button: "bg-amber-500 hover:bg-amber-600",
    mobileButton: "border-amber-200 text-amber-700 hover:bg-amber-50",
  },
};

const planLogos = {
  free: Logo,
  pro: LogoBlue,
  premium: LogoAmber,
};

const PanelAside = ({ student }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentTheme = planThemes[student?.planActive] || planThemes.free;
  const currentPlan = planLabels[student?.planActive] || planLabels.free;
  const currentLogo = planLogos[student?.planActive] || planLogos.free;

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

  const itemLayout = isOpen ? "gap-3" : "gap-0 xl:group-hover:gap-3";

  return (
    <>
      {/* Botão mobile */}
      <button
        type="button"
        onClick={openAside}
        className={[
          "fixed top-4 left-4 z-40 grid size-12 place-items-center rounded-2xl border bg-white shadow-sm transition md:hidden",
          currentTheme.mobileButton,
        ].join(" ")}
        aria-label="Abrir menu lateral"
      >
        <Menu className="size-5" />
      </button>

      {/* Overlay mobile/tablet quando aberto */}
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
          "group fixed top-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-r bg-white shadow-sm",
          "transition-[width,transform] duration-300 ease-out will-change-[width,transform]",
          currentTheme.border,

          /*
            Mobile < 768px:
            fechado sai da tela
            aberto entra como drawer
          */
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",

          /*
            Tablet >= 768px:
            fechado fica compacto na lateral
            aberto expande por clique
          */
          isOpen ? "md:translate-x-0 md:w-55" : "md:translate-x-0 md:w-20.5",

          /*
            Desktop >= 1280px:
            não trava aberto por clique
            abre apenas no hover
          */
          "xl:w-20.5 xl:hover:w-55",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex h-20 shrink-0 items-center px-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl">
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
                  "truncate text-xs font-medium",
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
                "ml-auto grid size-8 shrink-0 place-items-center rounded-2xl border text-blue-400 transition hover:bg-slate-50 hover:text-slate-800 xl:hidden",
                currentTheme.border,
              ].join(" ")}
              aria-label="Fechar menu lateral"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Perfil */}
        <div className="shrink-0 px-3">
          <div
            className={[
              "flex h-14 w-full items-center overflow-hidden rounded-xl border bg-slate-50 px-1.5",
              "transition-[gap,background-color,border-color] duration-200 ease-out",
              currentTheme.border,
              itemLayout,
            ].join(" ")}
          >
            <div
              className={[
                "grid size-11 shrink-0  place-items-center overflow-hidden rounded-xl text-sm font-bold shadow-sm",
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
              <p className="truncate text-sm font-bold text-blue-950">
                {displayName}
              </p>

              <p className="truncate text-xs font-medium text-blue-400">
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
                    ? `${currentTheme.active} shadow-sm`
                    : `text-blue-400 ${currentTheme.hover}`,
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
              "flex h-14 w-full items-center overflow-hidden rounded-3xl border bg-linear-to-br px-1.5",
              "transition-[gap,border-color,box-shadow] duration-200 ease-out hover:shadow-sm",
              currentTheme.border,
              currentTheme.card,
              itemLayout,
            ].join(" ")}
          >
            <div
              className={[
                "grid size-11 shrink-0 place-items-center rounded-2xl shadow-sm",
                currentTheme.iconBox,
              ].join(" ")}
            >
              <Crown className="size-5" />
            </div>

            <div
              className={[
                "min-w-0 overflow-hidden text-left transition-[width,opacity] duration-200 ease-out",
                labelVisibility,
              ].join(" ")}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-400">
                Assinatura
              </p>
              <p
                className={[
                  "truncate text-xs font-bold",
                  currentTheme.textStrong,
                ].join(" ")}
              >
                {currentPlan}
              </p>
            </div>
          </button>

          {/* Sair */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleExitUser();
            }}
            className={[
              "flex h-12 w-full cursor-pointer items-center overflow-hidden rounded-2xl px-1.5 text-sm font-bold text-blue-400",
              "transition-[gap,background-color,color] duration-200 ease-out hover:bg-red-50 hover:text-red-500",
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
