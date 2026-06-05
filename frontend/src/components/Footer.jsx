/* eslint-disable no-unused-vars */
import { Instagram, Linkedin, Mail } from "lucide-react";

/* Component */
import Logo from "./ui/Logo";

const footerColumns = [
  {
    title: "Produto",
    links: [  
      { label: "Painel", href: "/portal" },
      { label: "Simulados", href: "#simulados" },
      { label: "Desempenho", href: "#desempenho" },
      { label: "Trilhas", href: "#trilhas" },
      { label: "Perfil", href: "/perfil" },
    ],
  },
  {
    title: "Plataforma",
    links: [
      { label: "ENEM", href: "#enem" },
      { label: "FUVEST", href: "#fuvest" },
      { label: "Vestibulares", href: "#vestibulares" },
      { label: "Cursinhos", href: "#cursinhos" },
      { label: "Ensino médio", href: "#ensino-medio" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Contato", href: "/contato" },
      { label: "Privacidade", href: "/privacidade" },
      { label: "Termos", href: "/termos" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Ajuda", href: "/ajuda" },
      { label: "Dúvidas Frequentes", href: "#perguntas" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:contato@vestibule.com.br",
    icon: Mail,
  },
];

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
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <SocialButton key={label} href={href} label={label}>
                  <Icon className="size-4" />
                </SocialButton>
              ))}
            </div>
          </div>

          {/* Colunas */}
          <div className="relative min-w-0">
            {/* Fade indicando rolagem no mobile */}
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent lg:hidden" />

            <div className="flex gap-4 overflow-x-auto pb-4 pr-12 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0 lg:pr-0">
              {footerColumns.map((column) => (
                <FooterColumn
                  key={column.title}
                  title={column.title}
                  links={column.links}
                />
              ))}
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
    <div className="min-w-44 rounded-3xl bg-white p-5 lg:min-w-0 lg:p-0">
      <h3 className="text-sm font-bold tracking-tight text-slate-950">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                group inline-flex items-center gap-2 text-sm font-medium text-slate-500
                transition-all duration-300 hover:translate-x-1 hover:text-violet-600
              "
            >
              <span className="size-1.5 rounded-full bg-violet-300 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialButton = ({ href, label, children }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        group relative flex size-10 items-center justify-center overflow-hidden rounded-2xl
        border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300
        hover:-translate-y-0.5 hover:border-violet-200 hover:bg-linear-to-br
        hover:from-violet-50 hover:via-purple-50 hover:to-blue-50
        hover:text-violet-600 hover:shadow-md
      "
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>

      <span
        className="
          absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/70 blur-sm
          transition-all duration-700 group-hover:left-[120%]
        "
      />
    </a>
  );
};

export default Footer;
