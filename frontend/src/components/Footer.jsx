/* eslint-disable no-unused-vars */
import { Instagram, Linkedin, Mail } from "lucide-react";

/* Component */
import Logo from "./ui/Logo";

const footerColumns = [
  {
    title: "Plataforma",
    links: [
      { label: "Início", href: "/" },
      
      { label: "Planos", href: "/planos" },
    ],
  },
  {
    title: "Para instituições",
    links: [
      { label: "Instituições", href: "/instituicoes" },
      { label: "Benefícios", href: "/instituicoes#beneficios" },
      { label: "Demonstração", href: "/instituicoes#demo" },
      { label: "Falar com especialista", href: "/institucoes#contato" },
    ],
  },
  {
    title: "Conta",
    links: [
      { label: "Entrar", href: "/login" },
      { label: "Criar conta", href: "/signup" },
      { label: "Recuperar senha", href: "/credenciais/recuperar" },
      { label: "Portal do aluno", href: "/portal" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
      { label: "Ajuda", href: "/ajuda" },
      { label: "Dúvidas frequentes", href: "#perguntas" },
      { label: "Termos e privacidade", href: "/termos-e-privacidade" },
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
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-5xl xl:max-w-6xl xl:py-12 2xl:max-w-360 2xl:px-8 2xl:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.7fr] lg:items-start xl:gap-12 2xl:grid-cols-[0.85fr_1.85fr] 2xl:gap-16">
          {/* Marca */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500 2xl:max-w-md 2xl:text-base 2xl:leading-7">
              Simulados online, desempenho em tempo real e trilhas de estudo
              personalizadas para alunos, escolas e cursinhos.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
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
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-14 bg-linear-to-l from-white to-transparent lg:hidden" />

            <div className="flex gap-4 overflow-x-auto pb-4 pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0 lg:pr-0 xl:gap-5 2xl:gap-8">
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
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 sm:flex-row sm:justify-between sm:text-left xl:mt-9 2xl:mt-12 2xl:pt-7">
          <p>© {year} Vestibule. Todos os direitos reservados.</p>

          <p>
            Desenvolvido por{" "}
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
    <div className="min-w-42 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm lg:min-w-0 lg:border-none lg:p-0 lg:shadow-none">
      <h3 className="text-sm font-extrabold tracking-tight text-slate-950">
        {title}
      </h3>

      <ul className="mt-4 space-y-3 xl:space-y-2.5 2xl:space-y-3">
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
        2xl:size-11
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
