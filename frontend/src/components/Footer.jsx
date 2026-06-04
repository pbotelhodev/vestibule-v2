import { Instagram, Linkedin, Mail } from "lucide-react";

/* Component */
import Logo from "./ui/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:items-start">
          {/* Marca */}
          <div className="flex flex-col items-start">
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              Simulados online, desempenho em tempo real e trilhas de estudo
              personalizadas para alunos, escolas e cursinhos.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <SocialButton icon={<Instagram className="size-4" />} />
              <SocialButton icon={<Linkedin className="size-4" />} />
              <SocialButton icon={<Mail className="size-4" />} />
            </div>
          </div>

          {/* Colunas */}
          <div className="relative min-w-0">
            {/* Fade indicando rolagem no mobile */}
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent lg:hidden" />

            <div className="flex gap-4 overflow-x-auto pb-4 pr-12 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0 lg:pr-0">
              <FooterColumn
                title="Produto"
                links={[
                  "Painel",
                  "Simulados",
                  "Desempenho",
                  "Trilhas",
                  "Perfil",
                ]}
              />

              <FooterColumn
                title="Plataforma"
                links={[
                  "ENEM",
                  "FUVEST",
                  "Vestibulares",
                  "Cursinhos",
                  "Ensino médio",
                ]}
              />

              <FooterColumn
                title="Empresa"
                links={["Sobre", "Contato", "Privacidade", "Termos"]}
              />

              <FooterColumn
                title="Suporte"
                links={["Ajuda", "Contato", "Dúvidas", "Central"]}
              />
            </div>
          </div>
        </div>

        {/* Direitos */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 sm:flex-row sm:justify-between sm:text-left">
          <p>© {year} Vestibule. All rights reserved.</p>

          <p>
            Developed by{" "}
            <a
              href="https://smarttex.com.br"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-violet-600 transition hover:text-violet-700"
            >
              Smarttex
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div className="min-w-44 rounded-3xl bg-white p-5 lg:min-w-0">
      <h3 className="text-sm font-bold tracking-tight text-slate-950">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm font-medium text-slate-500 transition hover:text-violet-600"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialButton = ({ icon }) => {
  return (
    <a
      href="#"
      className="flex size-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-600 hover:shadow-md"
    >
      {icon}
    </a>
  );
};

export default Footer;
