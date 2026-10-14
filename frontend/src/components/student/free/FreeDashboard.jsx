import {
  ArrowRight,
  BookOpenCheck,
  Clock3,
  Crown,
  FileText,
  Megaphone,
  Target,
} from "lucide-react";

const FreeDashboard = () => {
  return (
    /* Container */
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      {/* Cabeçalho */}
      <section className="relative overflow-hidden rounded-[1.75rem] border border-violet-100 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-xl sm:p-5 md:p-6 xl:p-6 2xl:p-7">
        <div className="pointer-events-none absolute inset-0 bg-white" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[56px_56px] opacity-30" />
        <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-violet-200/60 blur-sm md:size-64" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 size-56 rounded-full bg-blue-100/80 blur-sm md:size-64" />
        <div className="pointer-events-none absolute right-1/3 top-1/2 hidden size-36 -translate-y-1/2 rounded-full bg-amber-100/70 md:block" />
        <div className="pointer-events-none absolute left-10 top-10 size-2 rounded-full bg-violet-500/50" />
        <div className="pointer-events-none absolute right-24 top-12 size-2.5 rounded-full bg-blue-500/40" />
        <div className="pointer-events-none absolute bottom-10 left-28 size-2 rounded-full  bg-amber-400/40 blur-sm" />
        <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_21rem]">
          {/* Apresentação */}
          <div className="min-w-0">
            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl 2xl:text-[42px]">
              Olá, Aluno.
              <span className="block text-violet-700">
                Seu próximo simulado começa aqui.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Treine gratuitamente, acompanhe sua média inicial e descubra onde
              melhorar, no seu ritmo.
            </p>
            {/* Ações */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-violet-700 hover:shadow-md"
              >
                Começar simulado grátis
                <ArrowRight className="size-4" />
              </button>
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition duration-200 hover:border-violet-300 hover:bg-violet-50"
              >
                Subir de nível
                <Crown className="size-4" />
              </button>
            </div>
          </div>
          {/* Resumo do plano */}
          <aside className="rounded-lg border border-violet-100 bg-white p-5 shadow-sm shadow-slate-900/5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Seu plano
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-blue-950">
                  Free
                </h2>
              </div>
            </div>
            <div className="mt-5 divide-y divide-slate-100 border-t border-slate-100">
              <div className="flex items-center justify-between gap-3 py-3">
                <span className="text-xs font-medium text-slate-500">
                  Simulados restantes
                </span>
                <strong className="text-sm font-bold text-violet-700">
                  02/02
                </strong>
              </div>
              <div className="flex items-center justify-between gap-3 py-3">
                <span className="text-xs font-medium text-slate-500">
                  Anúncios
                </span>
                <strong className="text-xs font-semibold text-slate-700">
                  Ativos
                </strong>
              </div>
              <div className="flex items-center justify-between gap-3 pt-3">
                <span className="text-xs font-medium text-slate-500">
                  Upgrade
                </span>
                <strong className="text-xs font-semibold text-violet-700">
                  Disponível
                </strong>
              </div>
            </div>
          </aside>
        </div>
      </section>
      {/* Métricas */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="group rounded-3xl border border-violet-100 bg-white/95 p-4 shadow-sm shadow-violet-950/5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:rounded-xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-lg border border-violet-100 bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
              <BookOpenCheck className="size-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            05
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Simulados feitos
          </p>
        </article>
        <article className="group rounded-3xl border border-violet-100 bg-white/95 p-4 shadow-sm shadow-violet-950/5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:rounded-xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-lg border border-violet-100 bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
              <Target className="size-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            78%
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Taxa de acertos
          </p>
        </article>
        <article className="group rounded-3xl border border-violet-100 bg-white/95 p-4 shadow-sm shadow-violet-950/5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:rounded-xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-lg border border-violet-100 bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
              <Clock3 className="size-5" />
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            3h 40min
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Tempo estudado (Últimos 7 dias)
          </p>
        </article>
      </section>
      {/* Simulados */}
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] 2xl:gap-8 min-[2200px]:grid-cols-[minmax(0,1fr)_32rem]">
        <div className="rounded-[1.75rem] border border-violet-100 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-xl sm:p-5 md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-500">
                Simulados
              </p>
              <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                Explore os simulados
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Escolha qualquer simulado do catálogo. Você tem 2 tentativas
                disponíveis neste mês.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex w-fit cursor-pointer items-center justify-center rounded-lg border border-violet-100 bg-white px-4 py-2.5 text-xs font-bold text-violet-600 shadow-sm transition hover:bg-violet-50"
            >
              Ver simulados
            </button>
          </div>
          {/* Exemplos visuais fixos; sem dados ou operações reais */}

          <div className="mt-6 max-h-117 space-y-3 overflow-y-auto overscroll-contain pr-2 pb-1 [scrollbar-color:#c4b5fd_transparent] [scrollbar-width:thin]">
            <article className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-5 shadow-sm shadow-violet-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md hover:shadow-violet-950/10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Conteúdo */}
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-violet-100 bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                      ENEM
                    </span>

                    <span className="text-xs font-medium text-slate-400">
                      Linguagens e Códigos
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-blue-950 transition-colors group-hover:text-violet-700 md:text-lg">
                    Simulado de Linguagens
                  </h3>

                  <p className="mt-1.5 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
                    Exercite interpretação de texto, literatura e linguagens.
                  </p>

                  {/* Informações ilustrativas */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpenCheck className="size-3.5 text-violet-500" />
                      45 questões
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="size-3.5 text-violet-500" />
                      90 minutos
                    </span>
                  </div>
                </div>

                {/* Ação visual */}
                <button
                  type="button"
                  aria-label="Iniciar simulado de Linguagens"
                  className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-violet-700 hover:shadow-md active:scale-[0.98] sm:w-auto"
                >
                  Iniciar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-5 shadow-sm shadow-violet-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md hover:shadow-violet-950/10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Conteúdo */}
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-violet-100 bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                      ENEM
                    </span>

                    <span className="text-xs font-medium text-slate-400">
                      Matemática e suas Tecnologias
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-blue-950 transition-colors group-hover:text-violet-700 md:text-lg">
                    Simulado de Matemática
                  </h3>

                  <p className="mt-1.5 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
                    Pratique raciocínio lógico, álgebra, geometria e resolução
                    de problemas.
                  </p>

                  {/* Informações ilustrativas */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpenCheck className="size-3.5 text-violet-500" />
                      45 questões
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="size-3.5 text-violet-500" />
                      90 minutos
                    </span>
                  </div>
                </div>

                {/* Ação visual */}
                <button
                  type="button"
                  aria-label="Iniciar simulado de Matemática"
                  className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-violet-700 hover:shadow-md active:scale-[0.98] sm:w-auto"
                >
                  Iniciar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-5 shadow-sm shadow-violet-950/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md hover:shadow-violet-950/10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Conteúdo */}
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-violet-100 bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                      ENEM
                    </span>

                    <span className="text-xs font-medium text-slate-400">
                      Matemática e suas Tecnologias
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-blue-950 transition-colors group-hover:text-violet-700 md:text-lg">
                    Simulado de Matemática
                  </h3>

                  <p className="mt-1.5 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
                    Pratique raciocínio lógico, álgebra, geometria e resolução
                    de problemas.
                  </p>

                  {/* Informações ilustrativas */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpenCheck className="size-3.5 text-violet-500" />
                      45 questões
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="size-3.5 text-violet-500" />
                      90 minutos
                    </span>
                  </div>
                </div>

                {/* Ação visual */}
                <button
                  type="button"
                  aria-label="Iniciar simulado de Matemática"
                  className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-violet-700 hover:shadow-md active:scale-[0.98] sm:w-auto"
                >
                  Iniciar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>
          </div>
        </div>
        {/* Publicidade */}
        <aside className="space-y-5 md:space-y-6">
          <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-3 shadow-sm backdrop-blur-xl sm:rounded-xl 2xl:p-4">
            <div className="flex items-center justify-between gap-3 px-1 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Publicidade
                </span>
                <h3 className="mt-1 text-sm font-bold text-blue-950">
                  Conteúdo patrocinado
                </h3>
              </div>
            </div>
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[1.35rem] border border-slate-200 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[40px_40px] p-5 text-center shadow-sm sm:rounded-lg">
              <div className="max-w-48">
                <div className="mx-auto grid size-12 place-items-center rounded-lg border border-slate-200 bg-white text-slate-400 shadow-sm">
                  <Megaphone className="size-5" />
                </div>
                <p className="mt-4 text-sm font-bold text-slate-700">
                  Espaço reservado
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Aqui poderá aparecer uma imagem ou vídeo patrocinado.
                </p>
              </div>
            </div>
            <p className="mt-3 px-1 text-center text-[8px] font-semibold leading-5 text-slate-400">
              Os anúncios ajudam a manter o Vestibule gratuito, permitindo que
              você continue estudando sem custos.
            </p>
          </article>
          {/* Card de Upgrade  */}
          <article className="relative overflow-hidden rounded-2xl border border-violet-600 bg-violet-700 p-5 text-white shadow-sm shadow-violet-950/10 2xl:p-6">
            {/* Detalhe visual discreto */}
            <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full border border-white/10" />
            <div className="relative z-10">
              {/* Ícone */}
              <div className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                <Crown className="size-5 text-white" strokeWidth={1.8} />
              </div>
              {/* Conteúdo */}
              <h3 className="mt-4 text-lg font-bold tracking-tight">
                Estude sem anúncios
              </h3>
              <p className="mt-2 text-sm leading-6 text-violet-100/85">
                Desbloqueie mais simulados, relatórios por matéria e uma
                experiência sem interrupções.
              </p>
              {/* Ação */}
              <button
                type="button"
                className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-violet-700 transition-colors duration-200 hover:bg-violet-50"
              >
                Conhecer planos
                <ArrowRight className="size-4" />
              </button>
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
};
export default FreeDashboard;
