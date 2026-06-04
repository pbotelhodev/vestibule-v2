/* Componentes */
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroMockup from "../components/HeroMockup";
import {
  ChevronDown,
  ChevronRight,
  Building2,
  GraduationCap,
  School,
} from "lucide-react";

const LandingPage = () => {
  /* variáveis */
  const markups =
    "inline-flex w-fit text-[10px] uppercase font-bold text-purple-700 rounded-2xl bg-purple-100 px-3 py-1.5";
  return (
    <div id="produto" className="min-h-dvh bg-white">
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

        {/* Solutions */}
        <section
          id="solucoes"
          className="relative flex flex-col justify-center items-star mx-auto max-w-7xl px-6 py-10 min-h-[calc(100dvh-72px)]"
        >
          {/* header da seção */}
          <div className="text-center lg:text-left flex flex-col gap-4">
            <div className={markups}>Soluções</div>
            <h2 className="text-2xl tracking-tight font-extrabold text-slate-950 sm:text-2xl">
              Para quem estuda. Para quem acompanha.
            </h2>
          </div>
          {/* Cards */}
          <div className="mt-7 grid gap-12 lg:grid-cols-2">
            {/* campo Aluno */}
            <div className="p-5 inline-flex flex-col gap-6 rounded-2xl border border-slate-200  shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl lg:items-start">
              {/* Header */}
              <div className="flex items-center justify-between w-full gap-4">
                {/* icon */}
                <div className="flex size-13 items-center justify-center rounded-2xl bg-slate-100 text-violet-600 ring-1 ring-white/10">
                  <GraduationCap />
                </div>
                {/* Type */}
                <div className=" text-xs font-bold text-purple-600 bg-slate-100 px-2 py-1 rounded-2xl">
                  B2C
                </div>
              </div>
              {/* Title */}
              <div className="flex flex-col gap-3">
                {/* titulo */}
                <h3 className="text-xl font-extrabold">Para alunos</h3>
                {/* Legenda */}
                <p className="text-sm text-slate-500 ">
                  Treine com simulados, acompanhe sua evolução e entenda
                  exatamente onde melhorar.
                </p>
              </div>

              {/* Cards */}
              <div className="flex gap-4">
                {/* Card 1 */}
                <div className="border border-slate-200 rounded-3xl p-4 flex-1 bg-white shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Metas</h2>
                  <p className="text-slate-500 text-xs">
                    Acompanhe seu progresso.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="border border-slate-200 rounded-3xl p-4 flex-1 bg-white shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Trilhas</h2>
                  <p className="text-slate-500 text-xs">
                    Estude pelos seus pontos fracos.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="border border-slate-200 rounded-3xl p-4 flex-1 bg-white shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Simulados</h2>
                  <p className="text-slate-500 text-xs">
                    Treine com foco e clareza.
                  </p>
                </div>
              </div>

              {/* Botão */}
              <button className="flex items-center cursor-pointer text-sm font-bold bg-violet-600 text-white py-3 px-5 rounded-xl hover:bg-violet-700 transition-colors">
                Acessar como aluno
                <ChevronRight />
              </button>
            </div>

            {/* campo Instituição */}
            <div className="p-5 inline-flex flex-col gap-6 rounded-2xl border border-purple-700 bg-purple-800 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl lg:items-start">
              {/* Header */}
              <div className="flex items-center justify-between w-full gap-4">
                {/* icon */}
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-amber-300 ring-1 ring-white/10">
                  <School />
                </div>
                {/* Type */}
                <div className=" text-xs font-bold text-amber-300 bg-white/10 px-2 py-1 rounded-2xl">
                  B2B
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-3">
                {/* titulo */}
                <h3 className="text-xl font-extrabold">Para instituições</h3>
                {/* Legenda */}
                <p className="text-sm text-white/90">
                  Crie simulados, acompanhe turmas e transforme resultados em
                  decisões pedagógicas.
                </p>
              </div>
              {/* Cards */}
              <div className="flex gap-4">
                {/* Card 1 */}
                <div className="border border-purple-600 rounded-3xl p-4 flex-1 bg-white/10 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Turmas</h2>
                  <p className="text-slate-200 text-xs">
                    Organize alunos por grupos.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="border border-purple-600 rounded-3xl p-4 flex-1 bg-white/10 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Provas</h2>
                  <p className="text-slate-200 text-xs">
                    Crie e aplique simulados.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="border border-purple-600 rounded-3xl p-4 flex-1 bg-white/10 shadow-sm transition hover:shadow-md">
                  <h2 className="font-semibold">Relatórios</h2>
                  <p className="text-slate-200 text-xs">
                    Visualize resultados com clareza.
                  </p>
                </div>
              </div>
              {/* Botão */}
              <button className="flex items-center cursor-pointer text-sm font-bold bg-white text-purple-800 py-3 px-5 rounded-xl hover:bg-slate-100 transition-colors">
                Solicitar acesso institucional
                <ChevronRight />
              </button>
            </div>
          </div>
        </section>

        <section id="produto"></section>
        <section id="recursos"></section>
        <section id="planos"></section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
