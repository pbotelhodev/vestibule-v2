/* eslint-disable no-unused-vars */
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Lock,
  Megaphone,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

import { data, useNavigate } from "react-router-dom";

import { average } from "../../services/dashboard/servicesDash";

const FreeDashboard = ({ data, student }) => {
  const firstName = student?.name?.split(" ")?.[0] || "Aluno";
  const navigate = useNavigate();

  return (
    <div className="space-y-5 md:space-y-6 xl:space-y-6 2xl:space-y-8">
      <section className="relative overflow-hidden rounded-[1.75rem] border border-violet-100 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 md:p-6 xl:p-6 2xl:p-7">
        <div className="pointer-events-none absolute inset-0 bg-white" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[56px_56px] opacity-30" />

        <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-violet-200/60 blur-sm md:size-64" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 size-56 rounded-full bg-blue-100/80 blur-sm md:size-64" />
        <div className="pointer-events-none absolute right-1/3 top-1/2 hidden size-36 -translate-y-1/2 rounded-full bg-amber-100/70 md:block" />

        <div className="pointer-events-none absolute left-10 top-10 size-2 rounded-full bg-violet-500/50" />
        <div className="pointer-events-none absolute right-24 top-12 size-2.5 rounded-full bg-blue-500/40" />
        <div className="pointer-events-none absolute bottom-10 left-28 size-2 rounded-full bg-amber-400/70" />

        <div className="relative z-10 grid gap-5 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_23rem]">
          <div className="min-w-0">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-100 bg-white/85 px-3 py-1.5 text-xs font-bold text-violet-600 shadow-sm backdrop-blur-md">
              <Zap className="size-4" />
              Plano Free
            </span>

            <h1 className="mt-4 max-w-4xl text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl xl:text-4xl 2xl:text-5xl">
              Olá, {firstName}. Comece sua evolução com simulados gratuitos.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 2xl:max-w-3xl">
              Treine com simulados liberados, acompanhe sua média inicial e
              descubra onde melhorar no seu ritmo.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate(`/student/simulados`)}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/25"
              >
                Começar simulado grátis
                <ArrowRight className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => window.open(`/planos`, "_blank")}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-violet-100 bg-white/85 px-5 py-3 text-sm font-bold text-violet-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-md"
              >
                Comparar planos
              </button>
            </div>
          </div>

          <aside className="rounded-3xl border border-violet-100 bg-white/85 p-4 shadow-sm shadow-violet-950/5 backdrop-blur-md sm:rounded-3xl 2xl:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400">
                  Seu plano
                </p>

                <h2 className="mt-1 text-xl font-bold text-blue-950 2xl:text-2xl">
                  Free
                </h2>
              </div>

              <div className="grid size-11 place-items-center rounded-2xl border border-violet-100 bg-violet-50 text-violet-600 shadow-sm">
                <Sparkles className="size-5" />
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-violet-100 bg-violet-50/60 px-3 py-2.5">
                <span className="text-xs font-semibold text-slate-500">
                  Simulados liberados
                </span>

                <strong className="text-xs font-bold text-violet-700">2</strong>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2.5">
                <span className="text-xs font-semibold text-slate-500">
                  Anúncios
                </span>

                <strong className="text-xs font-bold text-blue-950">
                  Ativos
                </strong>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 px-3 py-2.5">
                <span className="text-xs font-semibold text-slate-500">
                  Upgrade
                </span>

                <strong className="text-xs font-bold text-amber-700">
                  Disponível
                </strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <article className="group rounded-3xl border border-violet-100 bg-white/95 p-4 shadow-sm shadow-violet-950/5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-violet-100 bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
              <BookOpenCheck className="size-5" />
            </div>

            <span className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-bold text-violet-600">
              Neste mês
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {data?.totalSimulations}
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Simulados feitos
          </p>
        </article>
        {/* Card 2 */}
        <article className="group rounded-3xl border border-violet-100 bg-white/95 p-4 shadow-sm shadow-violet-950/5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-violet-100 bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
              <Target className="size-5" />
            </div>

            <span className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-bold text-violet-600">
              {average(data?.averageHitRate)}
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {data?.averageHitRate}%
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Taxa de acertos
          </p>
        </article>
        {/* Card 3 */}
        <article className="group rounded-3xl border border-violet-100 bg-white/95 p-4 shadow-sm shadow-violet-950/5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:rounded-3xl sm:p-5 2xl:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-violet-100 bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
              <Clock3 className="size-5" />
            </div>

            <span className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-bold text-violet-600">
              Últimos 7 dias
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold tracking-tight text-blue-950 2xl:text-4xl">
            {data?.timeStudy}
          </p>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Tempo estudado
          </p>
        </article>
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] 2xl:gap-8 min-[2200px]:grid-cols-[minmax(0,1fr)_32rem]">
        <div className="rounded-[1.75rem] border border-violet-100 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 md:p-6 2xl:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-500">
                Simulados
              </p>

              <h2 className="mt-2 text-xl font-bold text-blue-950 md:text-2xl">
                Disponíveis no plano Free
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Comece pelos simulados liberados e desbloqueie novas listas ao
                evoluir de plano.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate(`/student/simulados`)}
              className="inline-flex w-fit cursor-pointer items-center justify-center rounded-full border border-violet-100 bg-white px-4 py-2.5 text-xs font-bold text-violet-600 shadow-sm transition hover:bg-violet-50"
            >
              Ver todos
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {data?.allSimulations.map((simulation) => (
              <article
                key={simulation.title}
                className={[
                  "rounded-3xl border p-4 transition sm:rounded-3xl md:p-5",
                  simulation.locked
                    ? "border-slate-200 bg-slate-50/80"
                    : "border-violet-100 bg-white hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50/30 hover:shadow-md",
                ].join(" ")}
              >
                <div className="flex flex-col gap-4 borderrounded-3xl p-4 lg:flex-row lg:items-center lg:justify-between">
                  {/* Bloco da Esquerda: Ícone + Textos */}
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-violet-100 bg-violet-50 text-violet-600 shadow-sm">
                      <BookOpenCheck className="size-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-blue-950 md:text-base truncate">
                        {simulation.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm md:leading-6 line-clamp-2">
                        {simulation.description}
                      </p>
                    </div>
                  </div>

                  {/* Bloco da Direita: Botão de Ação */}
                  <div className="flex items-center justify-end shrink-0 self-end lg:self-center">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/student/simulados/${simulation.publicId}`)
                      }
                      className="grid size-10 place-items-center rounded-full bg-violet-600 text-white transition hover:bg-violet-700 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                    >
                      <ArrowRight className="size-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-5 md:space-y-6">
          <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-3 shadow-sm backdrop-blur-xl sm:rounded-4xl 2xl:p-4">
            <div className="flex items-center justify-between gap-3 px-1 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Publicidade
                </span>

                <h3 className="mt-1 text-sm font-bold text-blue-950">
                  Conteúdo patrocinado
                </h3>
              </div>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                AD
              </span>
            </div>

            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-[1.35rem] border border-slate-200 bg-[linear-gradient(to_right,#ede9fe_1px,transparent_1px),linear-gradient(to_bottom,#ede9fe_1px,transparent_1px)] bg-size-[40px_40px] p-5 text-center shadow-sm sm:rounded-3xl">
              <div className="max-w-48">
                <div className="mx-auto grid size-12 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-sm">
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

            <p className="mt-3 px-1 text-center text-[10px] font-semibold leading-5 text-slate-400">
              Anúncio exibido por parceiros do Vestibule.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[1.75rem] border border-violet-200 bg-linear-to-br from-violet-600 via-blue-700 to-blue-950 p-5 text-white shadow-sm shadow-violet-950/15 sm:rounded-4xl 2xl:p-6">
            <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 size-44 rounded-full bg-amber-300/20 blur-2xl" />

            <div className="relative z-10">
              <div className="grid size-11 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/15">
                <Trophy className="size-5" />
              </div>

              <h3 className="mt-3 text-lg font-bold">Estude sem anúncios</h3>

              <p className="mt-2 text-xs leading-6 text-white/75">
                Faça upgrade para desbloquear mais simulados, relatórios por
                matéria e uma experiência mais completa.
              </p>

              <button
                type="button"
                onClick={() => window.open(`/planos`, "_blank")}
                className="mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-bold text-violet-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 md:w-auto"
              >
                Ver planos
              </button>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-violet-100 bg-white/95 p-5 shadow-sm sm:rounded-4xl 2xl:p-6">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl border border-violet-100 bg-violet-50 text-violet-600">
                <BarChart3 className="size-5" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-blue-950">
                  Relatório básico
                </h3>

                <p className="text-xs font-medium text-slate-400">
                  Acompanhe sua média inicial.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              <div className="flex items-center gap-2 rounded-2xl border border-violet-100 bg-violet-50/60 px-3 py-2 text-xs font-bold text-slate-600">
                <CheckCircle2 className="size-4 text-emerald-500" />
                Média geral disponível
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500">
                <Lock className="size-4" />
                Relatórios avançados no Pro
              </div>
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
};

export default FreeDashboard;
