import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  {
    label: "Alunos",
    path: "/alunos",
  },
  {
    label: "Instituições",
    path: "/instituicoes",
  },
  {
    label: "Produto",
    path: "/produto",
  },
  {
    label: "Recursos",
    path: "/recursos",
  },
  {
    label: "Planos",
    path: "/planos",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Vestibule" className="h-10 w-auto" />

          <div className="leading-none">
            <h1 className="text-xl font-extrabold tracking-tight text-slate-950">
              Vestibule
            </h1>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.32em] text-violet-600">
              Edtech SaaS
            </p>
          </div>
        </NavLink>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                  rounded-xl px-6 py-2 text-sm font-bold transition
                  ${
                    isActive
                      ? "bg-violet-50 text-violet-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                  }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Ações */}
        <div className="hidden items-center gap-4 lg:flex">
          <NavLink
            to="/portal"
            className="text-sm font-bold text-violet-600 transition hover:text-violet-700"
          >
            Portal do aluno
          </NavLink>

          <NavLink
            to="/criar-conta"
            className="rounded-2xl bg-blue-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl"
          >
            Criar conta
          </NavLink>
        </div>

        {/* Mobile simples */}
        <div className="flex items-center gap-3 lg:hidden">
          <NavLink to="/portal" className="text-sm font-bold text-violet-600">
            Portal
          </NavLink>

          <NavLink
            to="/criar-conta"
            className="rounded-full bg-blue-950 px-4 py-2.5 text-sm font-bold text-white"
          >
            Criar
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
