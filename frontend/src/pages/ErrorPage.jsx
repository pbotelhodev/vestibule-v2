import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-white px-6 text-slate-900">
      {/* Grid suave */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[56px_56px] opacity-45" />

      {/* Luzes da identidade */}
      <div className="absolute top-1/2 left-1/2 size-144 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/45 blur-3xl" />
      <div className="absolute top-20 right-20 size-64 rounded-full bg-amber-100/80 blur-3xl" />
      <div className="absolute bottom-20 left-20 size-64 rounded-full bg-blue-100/80 blur-3xl" />

      {/* Detalhes visuais */}
      <div className="absolute top-36 left-40 hidden size-18 rounded-4xl border border-violet-200 bg-white/60 shadow-sm backdrop-blur-md md:block" />
      <div className="absolute right-44 bottom-40 hidden size-24 rounded-full border border-amber-200 bg-white/60 shadow-sm backdrop-blur-md md:block" />

      <div className="absolute top-48 right-72 hidden size-2 rounded-full bg-violet-500/50 md:block" />
      <div className="absolute bottom-56 left-80 hidden size-2 rounded-full bg-amber-400/70 md:block" />
      <div className="absolute bottom-72 right-96 hidden size-1.5 rounded-full bg-blue-400/60 md:block" />

      {/* Logo */}
      <Link to="/" className="absolute top-6 left-6 z-10 flex items-center">
        <img src={logo} alt="Vestibule" className="h-15 w-auto" />
      </Link>

      {/* Conteúdo */}
      <section className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <h1 className="relative bg-linear-to-br from-violet-600 via-violet-500 to-blue-500 bg-clip-text text-9xl leading-none font-bold text-transparent md:text-[180px]">
          404
        </h1>

        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-slate-800 md:text-4xl">
          Esse caminho saiu do simulado.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 md:text-base">
          O link pode ter sido movido, removido ou digitado incorretamente.
          Volte e continue sua preparação pelo caminho certo.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-5 py-3 text-sm font-bold text-violet-600 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-md"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-md"
          >
            <Home className="size-4" />
            Ir para início
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
