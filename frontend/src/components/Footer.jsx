import { GraduationCap, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vestibule" className="h-10 w-auto" />

              <div>
                <h2 className="text-lg font-extrabold tracking-tight text-slate-950">
                  Vestibule
                </h2>
                <p className="text-sm font-medium text-slate-500">
                  Student SaaS
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              Plataforma moderna para simulados, desempenho e trilhas de estudo
              para vestibulares, ENEM, cursinhos e ensino médio.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <SocialButton icon={<Instagram className="size-4" />} />
              <SocialButton icon={<Linkedin className="size-4" />} />
              <SocialButton icon={<Mail className="size-4" />} />
            </div>
          </div>

          {/* Produto */}
          <FooterColumn
            title="Produto"
            links={["Painel", "Simulados", "Desempenho", "Trilhas", "Perfil"]}
          />

          {/* Plataforma */}
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

          {/* Empresa */}
          <FooterColumn
            title="Empresa"
            links={["Sobre", "Contato", "Privacidade", "Termos"]}
          />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Vestibule. Todos os direitos reservados.</p>

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
    <div>
      <h3 className="text-sm font-extrabold tracking-tight text-slate-950">
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
