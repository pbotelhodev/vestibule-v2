/* Imports Tools */
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

/* Imports Components */
import Logo from "../components/ui/Logo";
import Footer from "../components/Footer";
import Demo from "../components/ui/demo";

const EnterprisePage = () => {
  const [demoActive, setDemoActive] = useState(false);
  
  return (
    <main className="relative isolate min-h-dvh overflow-x-hidden bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[32px_32px] sm:bg-size-[40px_40px]" />

        <div className="absolute -top-28 -right-32 size-80 rounded-full border border-violet-200/50 bg-violet-100/60 shadow-[0_30px_120px_rgba(124,58,237,0.14)] sm:size-96 xl:-top-36 xl:-right-28 2xl:-right-20" />

        <div className="absolute top-1/3 -left-36 size-72 rounded-full border border-violet-200/60 bg-violet-100/45 shadow-[0_30px_120px_rgba(124,58,237,0.12)] sm:size-80 xl:-left-32 2xl:-left-24" />

        <div className="absolute -bottom-28 right-0 size-64 rounded-full border border-amber-200/70 bg-amber-100/70 shadow-[0_30px_120px_rgba(245,158,11,0.14)] sm:right-1/4 sm:size-72" />
      </div>

      {/* Header */}
      <header className="relative z-20 h-18 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 xl:px-8 xl:py-3 2xl:max-w-360 2xl:py-4">
          <Link to={"/"}>
            <Logo />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="hidden text-sm font-bold text-slate-500 transition hover:text-violet-600 sm:inline"
            >
              Entrar
            </Link>

            <Link
              to="/planos"
              state={{ selectedPlan: "enterprise" }}
              className="rounded-full bg-violet-700 px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-violet-950/10 transition hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl hover:shadow-violet-950/15 sm:text-sm xl:py-2 2xl:py-2.5"
            >
              Solicitar proposta
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 text-center sm:px-6 sm:py-16 xl:min-h-[calc(92dvh-30px)] xl:grid-cols-[1fr_0.9fr] xl:gap-10 xl:px-8 xl:py-8 xl:text-left 2xl:max-w-360 2xl:min-h-[calc(95dvh-70px)] 2xl:gap-16 2xl:py-12">
        {/* Content */}
        <div className="mx-auto max-w-3xl xl:mx-0 xl:max-w-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">
            <Building2 className="size-4" />
            Para escolas, cursinhos e instituições
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight text-slate-950 sm:text-5xl xl:mx-0 xl:text-5xl 2xl:text-6xl">
            Simulados inteligentes para acompanhar alunos com mais clareza.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8 xl:mx-0 xl:text-sm xl:leading-6 2xl:mt-5 2xl:text-lg 2xl:leading-8">
            O Vestibule ajuda instituições a aplicar simulados, acompanhar
            desempenho por matéria e entender a evolução dos alunos sem
            planilhas confusas ou relatórios difíceis de interpretar.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row xl:mt-6 xl:justify-start 2xl:mt-8">
            <div
              onClick={() => {
                setDemoActive(true);
              }}
              className=" cursor-pointer group inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-violet-950/10 transition hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl hover:shadow-violet-950/15 xl:py-2.5 2xl:py-3"
            >
              Ver Demo
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </div>

            <Link
              to="/planos"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 hover:shadow-md xl:py-2.5 2xl:py-3"
            >
              Planos para enterprise
            </Link>
          </div>

          <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-3 xl:mx-0 2xl:mt-8 2xl:max-w-2xl">
            <div className="rounded-3xl border border-slate-200 bg-white/85 p-3 shadow-sm shadow-violet-950/5 backdrop-blur-xl 2xl:p-4">
              <p className="text-xl font-bold text-slate-950 2xl:text-2xl">
                +1.2k
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                alunos acompanhados
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/85 p-3 shadow-sm shadow-violet-950/5 backdrop-blur-xl 2xl:p-4">
              <p className="text-xl font-bold text-violet-700 2xl:text-2xl">
                32
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                turmas ativas
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/85 p-3 shadow-sm shadow-violet-950/5 backdrop-blur-xl 2xl:p-4">
              <p className="text-xl font-bold text-violet-700 2xl:text-2xl">
                74%
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                acerto médio
              </p>
            </div>
          </div>
        </div>

        {/* Mockup */}
        <div className="mx-auto w-full max-w-2xl rounded-4xl border border-slate-200 bg-white/90 p-4 text-left shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:p-5 xl:max-w-xl xl:p-4 2xl:max-w-none 2xl:p-5">
          <div className="rounded-3xl bg-violet-700 p-4 text-white shadow-xl shadow-violet-950/10 2xl:p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold text-white/70">
                Visão institucional
              </p>

              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">
                Ao vivo
              </span>
            </div>

            <h3 className="mt-3 text-3xl font-bold tracking-tight 2xl:mt-4 2xl:text-4xl">
              1.248 alunos
            </h3>

            <p className="mt-1 text-sm text-white/70">
              acompanhados em simulados e trilhas
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 2xl:gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 2xl:p-5">
              <p className="text-xs font-bold text-slate-500">Turmas ativas</p>

              <h4 className="mt-2 text-2xl font-bold text-slate-950 2xl:text-3xl">
                32
              </h4>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 2xl:p-5">
              <p className="text-xs font-bold text-slate-500">Acerto médio</p>

              <h4 className="mt-2 text-2xl font-bold text-violet-700 2xl:text-3xl">
                74%
              </h4>
            </div>
          </div>

          <div className="mt-3 rounded-3xl border border-slate-200 bg-white p-4 2xl:mt-4 2xl:p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                Evolução geral
              </p>

              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                +12%
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[78%] rounded-full bg-linear-to-r from-violet-700 via-violet-500 to-amber-400" />
            </div>
          </div>

          <div className="mt-3 rounded-3xl border border-violet-100 bg-violet-50/70 p-4 2xl:mt-4">
            <div className="flex items-start gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-violet-700 shadow-sm">
                <Sparkles className="size-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-950">
                  Dados prontos para decisão
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Coordenação, professores e alunos olhando para a mesma
                  evolução, com menos ruído.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        id="beneficios"
        className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 xl:px-8 xl:py-14 2xl:max-w-360 2xl:py-20"
      >
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">
            Plataforma institucional
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl xl:text-4xl 2xl:text-5xl">
            Benefícios para sua instituição
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 xl:max-w-xl">
            Uma plataforma para transformar simulados em dados úteis para a
            coordenação, professores e alunos.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:mt-8 xl:grid-cols-4 2xl:mt-10">
          <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10 xl:p-5 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-700 2xl:size-12">
              <UsersRound className="size-5" />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-950 2xl:mt-5 2xl:text-lg">
              Gestão de turmas
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
              Organize alunos, professores e turmas em uma estrutura simples
              para acompanhar a rotina da instituição.
            </p>
          </article>

          <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10 xl:p-5 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-700 2xl:size-12">
              <ClipboardList className="size-5" />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-950 2xl:mt-5 2xl:text-lg">
              Simulados personalizados
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
              Aplique simulados para turmas específicas e acompanhe
              participação, desempenho e evolução.
            </p>
          </article>

          <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10 xl:p-5 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-700 2xl:size-12">
              <BarChart3 className="size-5" />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-950 2xl:mt-5 2xl:text-lg">
              Relatórios claros
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
              Visualize resultados por aluno, turma, matéria e período com dados
              prontos para decisões pedagógicas.
            </p>
          </article>

          <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/10 xl:p-5 2xl:p-6">
            <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-700 2xl:size-12">
              <LineChart className="size-5" />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-950 2xl:mt-5 2xl:text-lg">
              Acompanhamento institucional
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
              Tenha uma visão geral da evolução dos alunos e identifique
              dificuldades antes que elas virem lacunas maiores.
            </p>
          </article>
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 xl:px-8 xl:py-14 2xl:max-w-360 2xl:py-20">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center 2xl:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-600">
              Fluxo simples
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl xl:text-4xl 2xl:text-5xl">
              Da aplicação do simulado ao acompanhamento pedagógico.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              A ideia é deixar a operação mais leve: a instituição organiza as
              turmas, aplica simulados e acompanha os resultados com clareza.
            </p>

            <Link
              to="/contato"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-violet-950/10 transition hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl hover:shadow-violet-950/15 xl:py-2.5 2xl:py-3"
            >
              Conversar sobre implantação
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:gap-4 2xl:gap-5">
            <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl xl:p-5 2xl:p-6">
              <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-700 2xl:size-12">
                <GraduationCap className="size-5" />
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Etapa 01
              </p>

              <h3 className="mt-2 text-base font-bold text-slate-950 2xl:text-lg">
                Organize turmas
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                Estruture alunos, professores e grupos de estudo de forma
                simples.
              </p>
            </article>

            <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl xl:p-5 2xl:p-6">
              <div className="grid size-11 place-items-center rounded-2xl bg-violet-50 text-violet-700 2xl:size-12">
                <ClipboardList className="size-5" />
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Etapa 02
              </p>

              <h3 className="mt-2 text-base font-bold text-slate-950 2xl:text-lg">
                Aplique simulados
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                Direcione provas por turma, objetivo ou período de preparação.
              </p>
            </article>

            <article className="rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl xl:p-5 2xl:p-6">
              <div className="grid size-11 place-items-center rounded-2xl bg-amber-50 text-amber-600 2xl:size-12">
                <BarChart3 className="size-5" />
              </div>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Etapa 03
              </p>

              <h3 className="mt-2 text-base font-bold text-slate-950 2xl:text-lg">
                Acompanhe dados
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                Veja evolução por aluno, turma, matéria e dificuldade.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Destaque */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 xl:px-8 xl:py-14 2xl:max-w-360 2xl:py-20">
        <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white/90 shadow-2xl shadow-violet-950/10 backdrop-blur-xl">
          <div className="grid xl:grid-cols-[0.9fr_1.1fr]">
            <div className="relative isolate overflow-hidden bg-violet-700 p-6 text-white sm:p-8 xl:p-8 2xl:p-10">
              {/* Detalhes visuais */}
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[34px_34px] opacity-35" />
              <div className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-white/12 blur-2xl" />
              <div className="absolute -bottom-28 -left-24 -z-10 size-72 rounded-full bg-violet-400/35 blur-3xl" />
              <div className="absolute top-10 right-10 -z-10 size-28 rounded-full border border-white/15" />
              <div className="absolute bottom-12 right-20 -z-10 size-2 rounded-full bg-amber-300/80" />
              <div className="absolute top-28 left-12 -z-10 size-1.5 rounded-full bg-white/70" />

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/15 px-3 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                <ShieldCheck className="size-4" />
                Para decisão pedagógica
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl xl:text-4xl">
                Menos achismo. Mais clareza sobre onde agir.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                A instituição consegue identificar padrões de dificuldade,
                acompanhar evolução e orientar professores com base em dados.
              </p>
            </div>

            <div className="grid gap-4 bg-white p-6 sm:p-8 xl:grid-cols-2 xl:p-8 2xl:p-10">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="size-5 text-violet-700" />

                <h3 className="mt-4 text-base font-bold text-slate-950">
                  Visão por turma
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Entenda quais turmas precisam de reforço em cada área do
                  conhecimento.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="size-5 text-violet-700" />

                <h3 className="mt-4 text-base font-bold text-slate-950">
                  Visão por aluno
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Acompanhe evolução individual e ajude o aluno a estudar com
                  mais direção.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="size-5 text-violet-700" />

                <h3 className="mt-4 text-base font-bold text-slate-950">
                  Visão por matéria
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Veja quais conteúdos concentram mais erros e merecem atenção.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="size-5 text-violet-700" />

                <h3 className="mt-4 text-base font-bold text-slate-950">
                  Relatórios objetivos
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Dados organizados para coordenação, professores e
                  responsáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 xl:px-8 xl:py-14 2xl:max-w-360 2xl:py-20"
      >
        <div className="relative isolate overflow-hidden rounded-4xl bg-violet-700 p-6 text-white shadow-2xl shadow-violet-950/15 sm:p-8 xl:p-8 2xl:p-14">
          {/* Detalhes visuais */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[36px_36px] opacity-35" />
          <div className="absolute -top-28 right-10 -z-10 size-80 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 -z-10 size-80 rounded-full bg-violet-400/35 blur-3xl" />
          <div className="absolute top-8 right-8 -z-10 size-36 rounded-full border border-white/15" />
          <div className="absolute bottom-8 right-1/3 -z-10 size-2 rounded-full bg-amber-300/80" />
          <div className="absolute top-1/2 left-10 -z-10 size-1.5 rounded-full bg-white/70" />

          <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/15 px-3 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                <ShieldCheck className="size-4" />
                Gestão educacional com clareza
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl xl:text-4xl 2xl:text-5xl">
                Leve o Vestibule para sua escola, cursinho ou instituição.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Fale com nossa equipe para entender o melhor formato para sua
                operação, quantidade de alunos e necessidade pedagógica.
              </p>
            </div>

            <Link
              to="/planos"
              state={{ selectedPlan: "enterprise" }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-violet-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 hover:text-violet-800 hover:shadow-xl xl:py-2.5 2xl:py-3"
            >
              Solicitar proposta
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-20 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left xl:px-8 2xl:max-w-360">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Vestibule. Todos os direitos
            reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate-500">
            <a href="/sobre" className="transition hover:text-violet-700">
              Sobre
            </a>

            <a href="/contato" className="transition hover:text-violet-700">
              Contato
            </a>

            <a
              href="/termos-e-privacidade"
              className="transition hover:text-violet-700"
            >
              Termos e privacidade
            </a>
          </div>

          <p className="text-sm text-slate-500">
            Desenvolvido por{" "}
            <a
              href="https://smarttex.com.br"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-violet-700 transition hover:text-violet-600"
            >
              Smarttex
            </a>
          </p>
        </div>
      </footer>
      {demoActive && (
        <div className="fixed inset-0 z-9999 h-dvh overflow-hidden bg-slate-950/75 px-3 py-3 backdrop-blur-md sm:px-4 sm:py-4 xl:px-5 xl:py-5">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Fechar demonstração"
            onClick={() => setDemoActive(false)}
            className="absolute inset-0 cursor-default"
          />

          {/* Conteúdo */}
          <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col">
            {/* Header do modal */}
            <div className="mb-2 flex shrink-0 items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/10 px-3 py-2 text-white shadow-2xl backdrop-blur-xl sm:rounded-full sm:px-4 xl:mb-3 xl:px-5">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                  Demonstração
                </p>

                <h2 className="truncate text-sm font-semibold sm:text-base">
                  Prévia da plataforma Vestibule
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setDemoActive(false)}
                className=" cursor-pointer grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20 2xl:size-10"
                aria-label="Fechar modal"
              >
                <X className="size-4 2xl:size-5" />
              </button>
            </div>

            {/* Palco do monitor */}
            <div className="flex min-h-0 flex-1 items-center justify-center">
              <Demo />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default EnterprisePage;
