/* Componentes */
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroMockup from "../components/HeroMockup";

/* Icons */
import { ChevronRight, Building2, GraduationCap, School } from "lucide-react";

/* Services */
import { recursos } from "../services/recursos";
import { planos } from "../services/planos";
import { faqs } from "../services/faqs";

const LandingPage = () => {
  const markups =
    "inline-flex w-fit rounded-full bg-violet-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-violet-700";

  return (
    <div id="produto" className="min-h-dvh overflow-x-hidden bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          {/* Fundo quadriculado */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-size-[32px_32px] sm:bg-size-[36px_36px] 2xl:bg-size-[40px_40px]" />

          {/* Bolas sólidas com glow */}
          <div className="absolute -top-24 -right-16 size-56 animate-[floatSoft_10s_ease-in-out_infinite] rounded-full border border-blue-200/50 bg-blue-100/60 shadow-[0_30px_120px_rgba(59,130,246,0.18)] sm:right-8 sm:size-72 xl:size-72 2xl:size-88" />

          <div className="absolute -bottom-24 -left-16 size-52 animate-[floatReverse_11s_ease-in-out_infinite] rounded-full border border-amber-200/70 bg-amber-100/70 shadow-[0_30px_120px_rgba(245,158,11,0.18)] sm:left-8 sm:size-64 xl:size-64 2xl:size-80" />

          {/* Pontos discretos */}
          <div className="absolute top-40 left-1/2 hidden size-2 animate-[dotFloat_5s_ease-in-out_infinite] rounded-full bg-violet-500/50 md:block" />

          <div className="absolute right-1/3 bottom-40 hidden size-2 animate-[dotFloat_6s_ease-in-out_infinite_reverse] rounded-full bg-blue-500/40 md:block" />

          {/* Conteúdo */}
          <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-64px)] w-full max-w-7xl flex-col items-center justify-center gap-9 px-4 pt-10 pb-10 sm:min-h-[calc(100dvh-72px)] sm:gap-10 sm:px-6 sm:pt-14 sm:pb-14 lg:max-w-5xl lg:gap-14 lg:py-18 xl:min-h-[calc(100dvh-72px)] xl:max-w-6xl xl:flex-row xl:justify-between xl:gap-8 xl:py-8 2xl:max-w-360 2xl:gap-14 2xl:px-8">
            {/* Hero Title */}
            <div className="w-full max-w-md text-center sm:max-w-xl xl:max-w-md xl:text-left 2xl:max-w-xl">
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[11px] font-bold text-violet-600 sm:px-5 sm:py-2 sm:text-sm">
                Uma plataforma completa para sua aprovação.
              </span>

              <h1 className="mt-5 text-3xl leading-[1.06] font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl">
                Gabarite o ENEM e alcance a sua{" "}
                <span className="text-violet-600">aprovação.</span>
              </h1>

              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500 sm:mt-5 sm:max-w-lg sm:text-base sm:leading-7 xl:mx-0 2xl:text-lg 2xl:leading-8">
                Simulados inteligentes, desempenho por matéria e trilhas de
                estudo para evoluir com clareza.
              </p>

              <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center xl:justify-start">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700 sm:w-fit sm:px-6"
                >
                  Começar como aluno
                  <ChevronRight className="ml-1 size-4" />
                </a>

                <a
                  href="#planos"
                  className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-600 sm:w-fit sm:px-6"
                >
                  Sou cursinho ou escola
                  <Building2 className="ml-2 size-4" />
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative mt-1 w-full max-w-90 pb-7 sm:mt-3 sm:max-w-xl sm:pb-8 lg:mt-6 lg:max-w-2xl xl:mt-0 xl:max-w-125 xl:pb-0 2xl:max-w-165">
              <HeroMockup />
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section
          id="solucoes"
          className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 lg:max-w-5xl lg:py-18 xl:max-w-6xl xl:py-18 2xl:max-w-360 2xl:px-8 2xl:py-24"
        >
          {/* Header da seção */}
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
            <div className={markups}>Soluções</div>

            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
              Para quem estuda. Para quem acompanha.
            </h2>
          </div>

          {/* Cards principais */}
          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6 xl:gap-7 2xl:gap-10">
            {/* Campo Aluno */}
            <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6 xl:p-6 2xl:gap-6 2xl:p-7">
              {/* Header */}
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-violet-600 ring-1 ring-white/10 2xl:size-14">
                  <GraduationCap className="size-5 2xl:size-6" />
                </div>

                <div className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-violet-600">
                  B2C
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-extrabold sm:text-2xl">
                  Para alunos
                </h3>

                <p className="max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                  Treine com simulados, acompanhe sua evolução e entenda
                  exatamente onde melhorar.
                </p>
              </div>

              {/* Mini cards */}
              <div className="grid gap-3 sm:grid-cols-3 2xl:gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md xl:p-3.5 2xl:p-4">
                  <h2 className="text-sm font-bold sm:text-base">Metas</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Acompanhe seu progresso.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md xl:p-3.5 2xl:p-4">
                  <h2 className="text-sm font-bold sm:text-base">Trilhas</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Estude pelos seus pontos fracos.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md xl:p-3.5 2xl:p-4">
                  <h2 className="text-sm font-bold sm:text-base">Simulados</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Treine com foco e clareza.
                  </p>
                </div>
              </div>

              {/* Botão */}
              <button className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-violet-700 sm:w-fit xl:py-2.5 2xl:py-3">
                Acessar como aluno
                <ChevronRight className="ml-1 size-4" />
              </button>
            </div>

            {/* Campo Instituição */}
            <div className="flex flex-col gap-5 rounded-3xl border border-violet-700 bg-violet-800 p-5 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6 xl:p-6 2xl:gap-6 2xl:p-7">
              {/* Header */}
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-amber-300 ring-1 ring-white/10 2xl:size-14">
                  <School className="size-5 2xl:size-6" />
                </div>

                <div className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-bold text-amber-300">
                  B2B
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-extrabold sm:text-2xl">
                  Para instituições
                </h3>

                <p className="max-w-xl text-sm leading-6 text-white/90 sm:text-base">
                  Crie simulados, acompanhe turmas e transforme resultados em
                  decisões pedagógicas.
                </p>
              </div>

              {/* Mini cards */}
              <div className="grid gap-3 sm:grid-cols-3 2xl:gap-4">
                <div className="rounded-2xl border border-violet-600 bg-white/10 p-4 shadow-sm transition hover:shadow-md xl:p-3.5 2xl:p-4">
                  <h2 className="text-sm font-bold sm:text-base">Turmas</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-200">
                    Organize alunos por grupos.
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-600 bg-white/10 p-4 shadow-sm transition hover:shadow-md xl:p-3.5 2xl:p-4">
                  <h2 className="text-sm font-bold sm:text-base">Provas</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-200">
                    Crie e aplique simulados.
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-600 bg-white/10 p-4 shadow-sm transition hover:shadow-md xl:p-3.5 2xl:p-4">
                  <h2 className="text-sm font-bold sm:text-base">Relatórios</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-200">
                    Visualize resultados com clareza.
                  </p>
                </div>
              </div>

              {/* Botão */}
              <button className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet-800 transition-colors hover:bg-slate-100 sm:w-fit xl:py-2.5 2xl:py-3">
                Solicitar acesso institucional
                <ChevronRight className="ml-1 size-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Recursos */}
        <section
          id="recursos"
          className="relative mx-auto flex max-w-7xl flex-col justify-center border-t border-dotted border-violet-100 px-4 py-14 sm:px-6 sm:py-16 lg:max-w-5xl lg:py-18 xl:max-w-6xl xl:py-18 2xl:max-w-360 2xl:px-8 2xl:py-24"
        >
          {/* Header da seção */}
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <div className={markups}>Recursos</div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl 2xl:text-5xl">
              Recursos úteis, sem poluir a experiência.
            </h2>

            <p className="max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
              Tudo que você precisa para vender como SaaS educacional e evoluir
              depois para um produto completo.
            </p>
          </div>

          {/* Conteúdo */}
          <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 xl:mt-9 xl:gap-5 2xl:mt-10 2xl:gap-6">
            {recursos.map((recurso, index) => (
              <div
                key={index}
                className="flex min-h-40 flex-col gap-3 rounded-3xl border border-violet-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg sm:p-6 xl:min-h-40 xl:p-5 2xl:min-h-44 2xl:p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 sm:size-12">
                  <recurso.Icon className="size-5 sm:size-6" />
                </div>

                <h3 className="text-base font-bold text-slate-950 sm:text-lg">
                  {recurso.title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {recurso.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Planos */}
        <section
          id="planos"
          className="relative mx-auto flex max-w-7xl flex-col justify-center border-t border-dotted border-violet-100 px-4 py-14 sm:px-6 sm:py-16 lg:max-w-5xl lg:py-18 xl:max-w-6xl xl:py-18 2xl:max-w-360 2xl:px-8 2xl:py-24"
        >
          {/* Header */}
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <div className={markups}>Planos</div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl 2xl:text-5xl">
              Um plano para cada fase da sua preparação.
            </h2>

            <p className="max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Comece grátis, evolua com recursos avançados ou leve o Vestibule
              para sua instituição.
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:mt-9 xl:grid-cols-4 xl:gap-4 2xl:mt-10 2xl:gap-5">
            {planos.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-4xl p-5 transition hover:-translate-y-1 2xl:p-6 ${
                  plan.dark
                    ? "border border-violet-800 bg-violet-800 text-white shadow-xl shadow-violet-950/20 hover:shadow-2xl"
                    : plan.highlighted
                      ? "border border-violet-200 bg-white text-slate-950 shadow-xl shadow-violet-600/10 ring-1 ring-violet-100 hover:shadow-2xl"
                      : "border border-slate-200 bg-white text-slate-950 shadow-sm hover:shadow-xl"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-5 right-5 rounded-full bg-violet-100 px-3 py-1 text-[10px] font-extrabold tracking-wide text-violet-700 uppercase">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-extrabold 2xl:text-xl">
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-6 ${
                      plan.dark ? "text-white/70" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6 2xl:mt-7">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-extrabold tracking-tight 2xl:text-4xl">
                      {plan.price}
                    </span>

                    {plan.period && (
                      <span
                        className={`pb-1 text-sm font-medium ${
                          plan.dark ? "text-white/60" : "text-slate-500"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-2 text-sm ${
                      plan.dark ? "text-white/60" : "text-slate-500"
                    }`}
                  >
                    {plan.caption}
                  </p>
                </div>

                <ul
                  className={`mt-6 flex flex-col gap-2.5 text-sm 2xl:mt-7 2xl:gap-3 ${
                    plan.dark ? "text-white/85" : "text-slate-700"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span
                        className={
                          plan.dark ? "text-amber-300" : "text-violet-600"
                        }
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-6 flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 2xl:mt-7 ${
                    plan.dark
                      ? "bg-white text-violet-950 hover:bg-slate-100"
                      : plan.highlighted || plan.name === "Pro"
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20 hover:bg-violet-700"
                        : "border border-slate-200 bg-white text-violet-600 hover:border-violet-200 hover:bg-violet-50"
                  }`}
                >
                  {plan.button}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section
          id="perguntas"
          className="relative mx-auto max-w-7xl border-t border-dotted border-purple-100 px-4 py-14 sm:px-6 sm:py-16 lg:max-w-5xl lg:py-18 xl:max-w-6xl xl:py-18 2xl:max-w-[1440px] 2xl:px-8 2xl:py-24"
        >
          {/* Header */}
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <div className={markups}>Perguntas</div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl 2xl:text-5xl">
              Dúvidas comuns antes de começar.
            </h2>

            <p className="max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Entenda como o Vestibule funciona para alunos, escolas, cursinhos
              e equipes pedagógicas.
            </p>
          </div>

          {/* Lista */}
          <div className="mt-8 grid w-full gap-4 lg:grid-cols-2 xl:mt-9 xl:gap-5 2xl:mt-10 2xl:gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg sm:p-6 xl:p-5 2xl:p-6"
              >
                <h3 className="text-base font-bold text-slate-950">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
