/* Componentes */
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroMockup from "../components/HeroMockup";

/* Icons */
import { ChevronRight, Building2, GraduationCap, School } from "lucide-react";

const LandingPage = () => {
  const markups =
    "inline-flex w-fit rounded-2xl bg-purple-100 px-3 py-1.5 text-[10px] font-bold uppercase text-purple-700";

  return (
    <div id="produto" className="min-h-dvh bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white lg:min-h-[calc(100dvh-72px)]">
          {/* Fundo quadriculado */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-size-[36px_36px]" />

          {/* Bolas sólidas com glow */}
          <div className="absolute -top-24 right-8 size-64 rounded-full border border-blue-200/50 bg-blue-100/60 shadow-[0_30px_120px_rgba(59,130,246,0.18)] animate-[floatSoft_10s_ease-in-out_infinite] sm:size-80" />

          <div className="absolute -bottom-24 left-8 size-60 rounded-full border border-amber-200/70 bg-amber-100/70 shadow-[0_30px_120px_rgba(245,158,11,0.18)] animate-[floatReverse_11s_ease-in-out_infinite] sm:size-72" />

          {/* Pontos discretos */}
          <div className="absolute top-40 left-1/2 hidden size-2 rounded-full bg-violet-500/50 animate-[dotFloat_5s_ease-in-out_infinite] md:block" />

          <div className="absolute right-1/3 bottom-40 hidden size-2 rounded-full bg-blue-500/40 animate-[dotFloat_6s_ease-in-out_infinite_reverse] md:block" />

          {/* Conteúdo */}
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-6 py-16 lg:min-h-[calc(100dvh-72px)] xl:flex-row xl:justify-between xl:py-12">
            {/* Hero Title */}
            <div className="max-w-xl text-center xl:text-left">
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-xs font-bold text-violet-600 sm:text-sm">
                Uma plataforma completa para sua aprovação.
              </span>

              <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Gabarite o ENEM e alcance a sua{" "}
                <span className="text-violet-600">aprovação.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base xl:mx-0">
                Simulados inteligentes, desempenho por matéria e trilhas de
                estudo para evoluir com clareza.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row xl:justify-start">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700 sm:w-fit"
                >
                  Começar como aluno
                  <ChevronRight className="ml-1 size-4" />
                </a>

                <a
                  href="#planos"
                  className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-600 sm:w-fit"
                >
                  Sou cursinho ou escola
                  <Building2 className="ml-2 size-4" />
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="w-full max-w-xl lg:max-w-2xl">
              <HeroMockup />
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section
          id="solucoes"
          className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-20 lg:min-h-[calc(100dvh-72px)]"
        >
          {/* Header da seção */}
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <div className={markups}>Soluções</div>

            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Para quem estuda. Para quem acompanha.
            </h2>
          </div>

          {/* Cards principais */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Campo Aluno */}
            <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6">
              {/* Header */}
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex size-13 items-center justify-center rounded-2xl bg-slate-100 text-violet-600 ring-1 ring-white/10">
                  <GraduationCap />
                </div>

                <div className="rounded-2xl bg-slate-100 px-2 py-1 text-xs font-bold text-purple-600">
                  B2C
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-extrabold">Para alunos</h3>

                <p className="max-w-xl text-sm leading-6 text-slate-500">
                  Treine com simulados, acompanhe sua evolução e entenda
                  exatamente onde melhorar.
                </p>
              </div>

              {/* Mini cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Metas</h2>
                  <p className="text-xs text-slate-500">
                    Acompanhe seu progresso.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Trilhas</h2>
                  <p className="text-xs text-slate-500">
                    Estude pelos seus pontos fracos.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Simulados</h2>
                  <p className="text-xs text-slate-500">
                    Treine com foco e clareza.
                  </p>
                </div>
              </div>

              {/* Botão */}
              <button className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-violet-700 sm:w-fit">
                Acessar como aluno
                <ChevronRight className="ml-1 size-4" />
              </button>
            </div>

            {/* Campo Instituição */}
            <div className="flex flex-col gap-6 rounded-2xl border border-purple-700 bg-purple-800 p-5 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6">
              {/* Header */}
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-amber-300 ring-1 ring-white/10">
                  <School />
                </div>

                <div className="rounded-2xl bg-white/10 px-2 py-1 text-xs font-bold text-amber-300">
                  B2B
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-extrabold">Para instituições</h3>

                <p className="max-w-xl text-sm leading-6 text-white/90">
                  Crie simulados, acompanhe turmas e transforme resultados em
                  decisões pedagógicas.
                </p>
              </div>

              {/* Mini cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-purple-600 bg-white/10 p-4 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Turmas</h2>
                  <p className="text-xs text-slate-200">
                    Organize alunos por grupos.
                  </p>
                </div>

                <div className="rounded-3xl border border-purple-600 bg-white/10 p-4 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Provas</h2>
                  <p className="text-xs text-slate-200">
                    Crie e aplique simulados.
                  </p>
                </div>

                <div className="rounded-3xl border border-purple-600 bg-white/10 p-4 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Relatórios</h2>
                  <p className="text-xs text-slate-200">
                    Visualize resultados com clareza.
                  </p>
                </div>
              </div>

              {/* Botão */}
              <button className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-purple-800 transition-colors hover:bg-slate-100 sm:w-fit">
                Solicitar acesso institucional
                <ChevronRight className="ml-1 size-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Recursos */}
        <section
          id="recursos"
          className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-20 lg:min-h-[calc(100dvh-72px)]"
        >
          {/* Header da seção */}
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <div className={markups}>Recursos</div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Recursos úteis, sem poluir a experiência.
            </h2>

            <p className="max-w-lg text-sm leading-6 text-slate-500">
              Tudo que você precisa para vender como SaaS educacional e evoluir
              depois para um produto completo.
            </p>
          </div>
        </section>

        <section id="planos"></section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
