/* Tools */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

/* Component */
import Logo from "./ui/Logo";

const navItems = [
  {
    label: "Alunos",
    path: "#alunos",
  },
  {
    label: "Instituições",
    path: "#instituicoes",
  },
  {
    label: "Produto",
    path: "#produto",
  },
  {
    label: "Recursos",
    path: "#recursos",
  },
  {
    label: "Planos",
    path: "#planos",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolut sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <a href="#inicio" onClick={closeMenu}>
          <Logo />
        </a>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-1 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm xl:flex">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="
                group relative overflow-hidden rounded-xl px-5 py-2
                text-sm font-bold text-slate-500 transition-all duration-300
                hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-100 hover:via-purple-100 hover:to-blue-100
                hover:text-violet-700 hover:shadow-sm
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
        <div className="hidden items-center gap-3 xl:flex">
          <NavLink
            to="/portal"
            className="
              group relative overflow-hidden rounded-2xl bg-violet-50 px-5 py-3
              text-sm font-bold text-violet-600 shadow-sm transition-all duration-300
              hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-100 hover:via-purple-100 hover:to-blue-100
              hover:text-violet-700 hover:shadow-md
            "
          >
            <span className="relative z-10">Portal do aluno</span>

            <span
              className="
                absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/50 blur-sm
                transition-all duration-700 group-hover:left-[120%]
              "
            />
          </NavLink>

          <NavLink
            to="/criar-conta"
            className="
              group relative overflow-hidden rounded-2xl bg-blue-950 px-5 py-3
              text-sm font-bold text-white shadow-sm transition-all duration-300
              hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600
              hover:shadow-xl
            "
          >
            <span className="relative z-10">Criar conta</span>

            <span
              className="
                absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm
                transition-all duration-700 group-hover:left-[120%]
              "
            />
          </NavLink>
        </div>

        {/* Botão mobile/tablet */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex size-11 items-center justify-center rounded-2xl border border-slate-200
            bg-white text-slate-700 shadow-sm transition hover:bg-violet-50 hover:text-violet-600 xl:hidden
          "
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menu mobile/tablet */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-sm sm:px-6 xl:hidden">
          <nav className="grid gap-2">
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

          <div className="mt-5 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
            <NavLink
              to="/portal"
              onClick={closeMenu}
              className="
                group relative overflow-hidden rounded-2xl bg-violet-50 px-4 py-3
                text-center text-sm font-bold text-violet-600 shadow-sm transition-all duration-300
                hover:bg-linear-to-r hover:from-violet-100 hover:via-purple-100 hover:to-blue-100
                hover:text-violet-700
              "
            >
              <span className="relative z-10">Portal do aluno</span>

              <span
                className="
                  absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/50 blur-sm
                  transition-all duration-700 group-hover:left-[120%]
                "
              />
            </NavLink>

            <NavLink
              to="/criar-conta"
              onClick={closeMenu}
              className="
                group relative overflow-hidden rounded-2xl bg-blue-950 px-4 py-3
                text-center text-sm font-bold text-white shadow-sm transition-all duration-300
                hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600
                hover:shadow-lg
              "
            >
              <span className="relative z-10">Criar conta</span>

              <span
                className="
                  absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/40 blur-sm
                  transition-all duration-700 group-hover:left-[120%]
                "
              />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
