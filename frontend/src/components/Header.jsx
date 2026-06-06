/* eslint-disable react-hooks/set-state-in-effect */

/* Tools */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* Component */
import Logo from "./ui/Logo";

const navItems = [
  {
    label: "Produto",
    path: "#produto",
  },
  {
    label: "Soluções",
    path: "#solucoes",
  },
  {
    label: "Recursos",
    path: "#recursos",
  },
  {
    label: "Planos",
    path: "#planos",
  },
  {
    label: "FAQs",
    path: "#perguntas",
  },
];

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const keyLogin = false;

  useEffect(() => {
    setIsLoggedIn(Boolean(keyLogin));
  }, [keyLogin]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handlePortalClick = () => {
    closeMenu();

    if (isLoggedIn) {
      navigate("/portal");
      return;
    }

    navigate("/login");
  };

  const handleCreateAccountClick = () => {
    closeMenu();
    navigate("/signup");
  };

  const handleLogoClick = () => {
    closeMenu();
    navigate("/");
  };

  return (
    <header className=" w-full fixed top-0 z-9999 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 xl:h-18 xl:max-w-6xl xl:gap-5 xl:px-6 2xl:max-w-360 2xl:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="shrink-0"
          aria-label="Ir para o início"
        >
          <Logo />
        </button>

        {/* Menu desktop */}
        <nav className="hidden min-w-0 items-center gap-1 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm xl:flex">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="
                group relative overflow-hidden whitespace-nowrap rounded-xl px-3.5 py-2
                text-sm font-bold text-slate-500 transition-all duration-300
                hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-100 hover:via-purple-100 hover:to-blue-100
                hover:text-violet-700 hover:shadow-sm
                2xl:px-5
              "
            >
              <span className="relative z-10">{item.label}</span>

              <span
                className="
                  absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/50 blur-sm
                  transition-all duration-700 group-hover:left-[120%]
                "
              />
            </a>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
          <button
            type="button"
            onClick={handlePortalClick}
            className="
              group relative overflow-hidden whitespace-nowrap rounded-2xl bg-violet-50 px-4 py-2.5
              text-sm font-bold text-violet-600 shadow-sm transition-all duration-300
              hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-100 hover:via-purple-100 hover:to-blue-100
              hover:text-violet-700 hover:shadow-md
              2xl:px-5 2xl:py-3
            "
          >
            <span className="relative z-10">Acessar Portal</span>

            <span
              className="
                absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/50 blur-sm
                transition-all duration-700 group-hover:left-[120%]
              "
            />
          </button>

          <button
            type="button"
            onClick={handleCreateAccountClick}
            className="
              group relative overflow-hidden whitespace-nowrap rounded-2xl bg-blue-950 px-4 py-2.5
              text-sm font-bold text-white shadow-sm transition-all duration-300
              hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600
              hover:shadow-xl
              2xl:px-5 2xl:py-3
            "
          >
            <span className="relative z-10">Criar conta</span>

            <span
              className="
                absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm
                transition-all duration-700 group-hover:left-[120%]
              "
            />
          </button>
        </div>

        {/* Botão mobile/tablet/lg */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            flex size-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200
            bg-white text-slate-700 shadow-sm transition hover:bg-violet-50 hover:text-violet-600 xl:hidden
          "
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menu mobile/tablet/lg */}
      {menuOpen && (
        <div className="xl:hidden">
          <div
            className="
              border-t border-slate-100 bg-white px-5 py-4 shadow-sm sm:px-6 lg:px-8
              max-lg:max-h-[calc(100dvh-64px)] max-lg:overflow-y-auto max-lg:overscroll-contain
            "
          >
            <nav className="grid gap-2 lg:grid-cols-5 lg:gap-2">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className="
                    group relative overflow-hidden rounded-2xl px-4 py-3
                    text-sm font-bold text-slate-500 transition-all duration-300
                    hover:bg-linear-to-r hover:from-violet-100 hover:via-purple-100 hover:to-blue-100
                    hover:text-violet-700
                    lg:px-3 lg:py-2.5 lg:text-center
                  "
                >
                  <span className="relative z-10">{item.label}</span>

                  <span
                    className="
                      absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/50 blur-sm
                      transition-all duration-700 group-hover:left-[120%]
                    "
                  />
                </a>
              ))}
            </nav>

            <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2 lg:mx-auto lg:max-w-xl">
              <button
                type="button"
                onClick={handlePortalClick}
                className="
                  group relative overflow-hidden rounded-2xl bg-violet-50 px-4 py-3
                  text-center text-sm font-bold text-violet-600 shadow-sm transition-all duration-300
                  hover:bg-linear-to-r hover:from-violet-100 hover:via-purple-100 hover:to-blue-100
                  hover:text-violet-700
                  lg:py-2.5
                "
              >
                <span className="relative z-10">Acessar Portal</span>

                <span
                  className="
                    absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/50 blur-sm
                    transition-all duration-700 group-hover:left-[120%]
                  "
                />
              </button>

              <button
                type="button"
                onClick={handleCreateAccountClick}
                className="
                  group relative overflow-hidden rounded-2xl bg-blue-950 px-4 py-3
                  text-center text-sm font-bold text-white shadow-sm transition-all duration-300
                  hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600
                  hover:shadow-lg
                  lg:py-2.5
                "
              >
                <span className="relative z-10">Criar conta</span>

                <span
                  className="
                    absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm
                    transition-all duration-700 group-hover:left-[120%]
                  "
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
