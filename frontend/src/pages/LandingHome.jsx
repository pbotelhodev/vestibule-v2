/* Componentes */
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroMockup from "../components/HeroMockup";
import { ChevronDown, ChevronRight, Building2 } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-dvh bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden bg-white">
          {/* Fundo quadriculado */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-size-[36px_36px]" />

          {/* Bolas sólidas com glow */}
          <div className="absolute -top-24 right-8 size-80 animate-[floatSoft_10s_ease-in-out_infinite] rounded-full border border-blue-200/50 bg-blue-100/60 shadow-[0_30px_120px_rgba(59,130,246,0.18)]" />

          <div className="absolute -bottom-24 left-8 size-72 animate-[floatReverse_11s_ease-in-out_infinite] rounded-full border border-amber-200/70 bg-amber-100/70 shadow-[0_30px_120px_rgba(245,158,11,0.18)]" />

          {/* Pontos discretos */}
          <div className="absolute top-40 left-1/2 hidden size-2 animate-[dotFloat_5s_ease-in-out_infinite] rounded-full bg-violet-500/50 md:block" />

          <div className="absolute right-1/3 bottom-40 hidden size-2 animate-[dotFloat_6s_ease-in-out_infinite_reverse] rounded-full bg-blue-500/40 md:block" />

          {/* Conteúdo */}
          <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-72px)] max-w-7xl flex-col items-center justify-around gap-12 px-6 py-12 xl:flex-row xl:justify-between">
            {/* Hero Title */}
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-bold text-violet-600">
                Uma plataforma completa para sua aprovação.
              </span>

              <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight text-slate-950 sm:text-6xl">
                Gabarite o ENEM e alcance a sua{" "}
                <span className="text-violet-600">aprovação.</span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                Simulados inteligentes, desempenho por matéria e trilhas de
                estudo para evoluir com clareza.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                <a
                  href="#"
                  className="rounded-full flex bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
                >
                  Começar como aluno
                  <ChevronRight className="ml-2" />
                </a>

                <a
                  href="#planos"
                  className="rounded-full flex border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-600"
                >
                  Sou cursinho ou escola
                  <Building2 className="ml-2" />
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="w-full max-w-xl lg:max-w-2xl">
              <HeroMockup />
            </div>
          </div>
        </section>

        <section id="alunos"></section>
        <section id="instituicoes"></section>
        <section id="produto"></section>
        <section id="recursos"></section>
        <section id="planos"></section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
