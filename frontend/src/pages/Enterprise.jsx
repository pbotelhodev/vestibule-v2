/* Imports Tools */
import {
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardList,
  LineChart,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

/* Imports Components */
import Logo from "../components/ui/Logo";

const EnterprisePage = () => {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[32px_32px] sm:bg-size-[40px_40px]" />

        <div className="absolute -top-28 -right-32 size-80 rounded-full border border-blue-200/50 bg-blue-100/60 shadow-[0_30px_120px_rgba(59,130,246,0.18)] sm:size-96 xl:-right-20" />

        <div className="absolute top-1/3 -left-36 size-72 rounded-full border border-violet-200/60 bg-violet-100/50 shadow-[0_30px_120px_rgba(124,58,237,0.14)] sm:size-80 xl:-left-24" />

        <div className="absolute -bottom-28 right-0 size-64 rounded-full border border-amber-200/70 bg-amber-100/70 shadow-[0_30px_120px_rgba(245,158,11,0.16)] sm:right-1/4 sm:size-72" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 xl:px-8 2xl:max-w-360">
          <Logo />

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="hidden text-sm font-bold text-slate-500 transition hover:text-violet-600 sm:inline"
            >
              Entrar
            </Link>

            <Link
              to="/contato"
              className="rounded-full bg-blue-950 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl sm:text-sm"
            >
              Falar com especialista
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 xl:grid-cols-[1fr_0.9fr] xl:px-8 xl:py-20 2xl:max-w-360 2xl:py-28">
        <div className="max-w-3xl xl:max-w-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-600">
            <Building2 className="size-4" />
            Para escolas, cursinhos e instituições
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
            Simulados inteligentes para acompanhar alunos com mais clareza.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            O Vestibule ajuda instituições a aplicar simulados, acompanhar
            desempenho por matéria e entender a evolução dos alunos sem
            planilhas confusas ou relatórios difíceis de interpretar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600 hover:shadow-xl"
            >
              Solicitar demonstração
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/planos"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 hover:shadow-md"
            >
              Ver planos
            </Link>
          </div>
        </div>

        {/* Mockup */}
        <div className="mx-auto w-full max-w-2xl rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:p-5 xl:max-w-none">
          <div className="rounded-3xl bg-slate-950 p-4 text-white sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold text-white/60">
                Visão institucional
              </p>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
                Ao vivo
              </span>
            </div>

            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              1.248 alunos
            </h3>

            <p className="mt-1 text-sm text-white/60">
              acompanhados em simulados e trilhas
            </p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
              <p className="text-xs font-bold text-slate-500">Turmas ativas</p>
              <h4 className="mt-2 text-3xl font-bold text-slate-950">32</h4>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
              <p className="text-xs font-bold text-slate-500">Acerto médio</p>
              <h4 className="mt-2 text-3xl font-bold text-violet-600">74%</h4>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                Evolução geral
              </p>

              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                +12%
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[78%] rounded-full bg-linear-to-r from-blue-600 via-violet-500 to-amber-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        id="beneficios"
        className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 xl:px-8 2xl:max-w-360 2xl:pb-24"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Benefícios para sua instituição
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Uma plataforma para transformar simulados em dados úteis para a
            coordenação, professores e alunos.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10">
            <div className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
              <UsersRound className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Gestão de turmas
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Organize alunos, professores e turmas em uma estrutura simples
              para acompanhar a rotina da instituição.
            </p>
          </article>

          <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10">
            <div className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
              <ClipboardList className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Simulados personalizados
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Aplique simulados para turmas específicas e acompanhe
              participação, desempenho e evolução.
            </p>
          </article>

          <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10">
            <div className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
              <BarChart3 className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Relatórios claros
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Visualize resultados por aluno, turma, matéria e período com dados
              prontos para decisões pedagógicas.
            </p>
          </article>

          <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10">
            <div className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-violet-600">
              <LineChart className="size-5" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">
              Acompanhamento institucional
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Tenha uma visão geral da evolução dos alunos e identifique
              dificuldades antes que elas virem lacunas maiores.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-14 sm:px-6 xl:px-8 2xl:max-w-360">
        <div className="overflow-hidden rounded-4xl bg-blue-950 p-6 text-white shadow-2xl shadow-blue-950/15 sm:p-8 xl:p-10">
          <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
                <ShieldCheck className="size-4" />
                Gestão educacional com clareza
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Leve o Vestibule para sua escola, cursinho ou instituição.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                Fale com nossa equipe para entender o melhor formato para sua
                operação, quantidade de alunos e necessidade pedagógica.
              </p>
            </div>

            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-blue-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 hover:text-violet-600 hover:shadow-xl"
            >
              Solicitar contato
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnterprisePage;
