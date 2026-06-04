import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-white px-6 text-slate-900">
      <style>
        {`
          @keyframes floatSoft {
            0%, 100% {
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            }

            50% {
              transform: translateY(-26px) translateX(14px) rotate(6deg) scale(1.04);
            }
          }

          @keyframes floatReverse {
            0%, 100% {
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            }

            50% {
              transform: translateY(24px) translateX(-16px) rotate(-7deg) scale(1.05);
            }
          }

          @keyframes pulseGlow {
            0%, 100% {
              opacity: 0.42;
              transform: translate(-50%, -50%) scale(1);
            }

            50% {
              opacity: 0.78;
              transform: translate(-50%, -50%) scale(1.12);
            }
          }

          @keyframes dotFloat {
            0%, 100% {
              transform: translateY(0px) scale(1);
              opacity: 0.45;
            }

            50% {
              transform: translateY(-34px) scale(1.35);
              opacity: 0.95;
            }
          }
        `}
      </style>

      {/* Grid suave */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[56px_56px] opacity-45" />

      {/* Luzes da identidade */}
      <div className="absolute top-1/2 left-1/2 size-144 rounded-full bg-violet-200/50 blur-3xl animate-[pulseGlow_7s_ease-in-out_infinite]" />
      <div className="absolute top-20 right-20 size-64 rounded-full bg-amber-100/90 blur-3xl animate-[floatSoft_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-20 size-64 rounded-full bg-blue-100/90 blur-3xl animate-[floatReverse_10s_ease-in-out_infinite]" />

      {/* Detalhes visuais flutuantes */}
      <div className="absolute top-36 left-40 hidden size-18 rounded-4xl border border-violet-200 bg-white/70 shadow-sm backdrop-blur-md animate-[floatSoft_6s_ease-in-out_infinite] md:block" />

      <div className="absolute right-44 bottom-40 hidden size-24 rounded-full border border-amber-200 bg-white/70 shadow-sm backdrop-blur-md animate-[floatReverse_7s_ease-in-out_infinite] md:block" />

      <div className="absolute top-48 right-72 hidden size-2 rounded-full bg-violet-500/70 animate-[dotFloat_4s_ease-in-out_infinite] md:block" />

      <div className="absolute bottom-56 left-80 hidden size-2.5 rounded-full bg-amber-400/80 animate-[dotFloat_5s_ease-in-out_infinite_reverse] md:block" />

      <div className="absolute right-96 bottom-72 hidden size-2 rounded-full bg-blue-400/75 animate-[dotFloat_4.5s_ease-in-out_infinite] md:block" />

      {/* Logo */}
      <Link to="/" className="absolute top-6 left-6 z-10 flex items-center">
        <img src={logo} alt="Vestibule" className="h-15 w-auto" />
      </Link>

      {/* Conteúdo */}
      <section className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <h1 className="bg-linear-to-br from-violet-600 via-violet-500 to-blue-500 bg-clip-text text-9xl leading-none font-bold text-transparent md:text-[180px]">
          404
        </h1>

        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-slate-800 md:text-4xl">
          Ops, esta página não está disponível.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 md:text-base">
          A página que você tentou acessar não foi encontrada. Volte e continue
          sua jornada de estudos pelo caminho certo.
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
