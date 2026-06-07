/* eslint-disable no-unused-vars */
import {
  ArrowLeft,
  Building2,
  Check,
  ChevronRight,
  ClipboardList,
  LayoutDashboard,
  Mail,
  School,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/* Components */
import Logo from "../components/ui/Logo";

/* Services */
import { userPlansData } from "../services/userPlans.js";
import { useState } from "react";

const PlansPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isView, setIsView] = useState(
    state?.view !== "user" || state?.view !== "enterprise"
      ? "user"
      : state?.view,
  );

  return (
    <main className="relative isolate flex min-h-dvh flex-col overflow-x-hidden bg-white text-slate-900">
      {/* Background fixed — nunca scrolla */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[34px_34px]" />
        <div className="absolute -top-32 -right-24 size-96 rounded-full bg-violet-100/70 blur-3xl" />
        <div className="absolute -bottom-36 -left-24 size-96 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 size-80 rounded-full bg-violet-50/80 blur-3xl" />
      </div>

      {/* Header sticky */}
      <header className="sticky top-0 z-20 h-14 shrink-0 border-b border-slate-100/80 backdrop-blur-xl xl:h-16">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-3 items-center px-4 sm:px-6 xl:px-8 2xl:max-w-350">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 xl:gap-2 xl:px-4 xl:py-2"
          >
            <ArrowLeft className="size-3.5 xl:size-4" />
            <span className="hidden sm:inline">Voltar</span>
          </button>

          <div className="flex justify-center">
            <Logo />
          </div>

          <div className="flex justify-end">
            {isView === "user" && (
              <div
                onClick={() => setIsView("enterprise")}
                className="inline-flex items-center cursor-pointer gap-1.5 rounded-full bg-violet-700 px-3 py-2 text-xs font-bold text-white shadow-sm shadow-violet-950/10 transition hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl xl:gap-2 xl:px-4 xl:py-2"
              >
                <School className="size-3.5 xl:size-4" />
                <span className="hidden sm:inline">
                  Solicitar plano intitucional
                </span>
              </div>
            )}
            {isView === "enterprise" && (
              <div
                onClick={() => setIsView("user")}
                className="inline-flex items-center cursor-pointer gap-1.5 rounded-full bg-violet-700 px-3 py-2 text-xs font-bold text-white shadow-sm shadow-violet-950/10 transition hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl xl:gap-2 xl:px-4 xl:py-2"
              >
                <School className="size-3.5 xl:size-4" />
                <span className="hidden sm:inline">Ver planos individuais</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col xl:h-[calc(100dvh-4rem)] xl:items-center xl:justify-center xl:overflow-hidden">
        {isView === "user" && <UserPlans />}
        {isView === "enterprise" && <EnterprisePlans />}
        {/* {isView !== "user" && isView !== "enterprise" && <UserPlans />} */}
      </div>
    </main>
  );
};

const UserPlans = () => {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-3xl flex-col px-4 py-8 sm:max-w-3xl sm:px-6 sm:py-10 lg:max-w-4xl xl:max-w-7xl xl:px-8 xl:py-6 2xl:max-w-350 2xl:py-8">
      {/* Header */}
      <div className="mx-auto max-w-xl shrink-0 text-center xl:max-w-3xl xl:mb-10 2xl:max-w-4xl">
        <h1 className="text-2xl leading-tight font-bold tracking-tight text-slate-950 sm:text-3xl xl:text-4xl 2xl:text-5xl">
          Escolha como quer evoluir.
        </h1>

        <p className="mx-auto mt-2 text-sm leading-6 text-slate-500 xl:text-lg xl:leading-5 2xl:text-lg 2xl:leading-6">
          Comece grátis, acompanhe seu desempenho e desbloqueie recursos para
          estudar com mais clareza.
        </p>
      </div>

      {/* Cards */}
      <div className="p-3 mt-6 flex flex-col gap-4 xl:p-5 xl:mt-5 xl:grid xl:flex-none xl:grid-cols-3 xl:gap-4 2xl:mt-6 2xl:gap-5">
        {userPlansData.map(
          ({
            name,
            badge,
            price,
            period,
            description,
            Icon,
            iconClass,
            badgeClass,
            priceClass,
            buttonLabel,
            buttonTo,
            buttonClass,
            features,
          }) => (
            <article
              key={name}
              className={`relative flex w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-violet-950/5 backdrop-blur-xl xl:rounded-4xl xl:p-4 2xl:p-5 ${
                name === "Pro"
                  ? "border-violet-200 shadow-xl shadow-violet-950/10"
                  : ""
              } ${
                name === "Premium"
                  ? "border-amber-200 bg-linear-to-b from-amber-50/70 via-white to-white shadow-xl shadow-amber-500/10 ring-1 ring-amber-100"
                  : ""
              }`}
            >
              {name === "Pro" && (
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-700 via-violet-500 to-amber-400" />
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid size-9 place-items-center rounded-lg xl:size-9 xl:rounded-2xl 2xl:size-10 ${iconClass}`}
                    >
                      <Icon className="size-4 2xl:size-5" />
                    </div>

                    <h2 className="text-lg font-bold text-slate-950 xl:text-base 2xl:text-lg">
                      {name}
                    </h2>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold xl:text-[10px] 2xl:text-[11px] ${badgeClass}`}
                  >
                    {badge}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-5 text-slate-500 xl:mt-2 xl:text-xs xl:leading-4 2xl:text-sm 2xl:leading-5">
                  {description}
                </p>

                <div className="mt-4 flex items-end gap-1 xl:mt-3">
                  <span
                    className={`text-3xl font-bold tracking-tight xl:text-2xl 2xl:text-3xl ${priceClass}`}
                  >
                    {price}
                  </span>

                  <span className="pb-1 text-sm font-medium text-slate-400 xl:text-xs 2xl:text-sm">
                    {period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-500 xl:mt-3 xl:space-y-1.5 xl:text-xs 2xl:space-y-2 2xl:text-sm">
                  {features.map((feature) => (
                    <PlanItem key={feature}>{feature}</PlanItem>
                  ))}
                </ul>
              </div>
              <div className="">
                <Link
                  to={buttonTo}
                  className={`mt-5 w-full inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-bold transition xl:py-1.5 xl:text-sm 2xl:py-2 2xl:text-sm ${buttonClass}`}
                >
                  {buttonLabel}
                </Link>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
};

const EnterprisePlans = () => {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-8 sm:max-w-3xl sm:px-6 sm:py-10 lg:max-w-4xl lg:py-12 xl:h-[calc(100dvh-72px)] xl:max-w-7xl xl:justify-center xl:overflow-hidden xl:px-8 xl:py-5 2xl:max-w-350 2xl:gap-5 2xl:py-6">
      <div className="grid w-full gap-4 xl:h-145 xl:min-h-0 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-stretch 2xl:h-155 2xl:grid-cols-[minmax(0,1fr)_352px] 2xl:gap-5">
        {/* Form card */}
        <div className="flex w-full flex-col rounded-3xl border border-slate-200 bg-white/90 shadow-2xl shadow-violet-950/10 backdrop-blur-xl xl:h-full xl:min-h-0 xl:overflow-hidden xl:rounded-4xl">
          {/* Card header */}
          <div className="shrink-0 border-b border-slate-100 px-5 py-4 xl:px-5 xl:py-3 2xl:px-6 2xl:py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h1 className="text-xl leading-tight font-bold tracking-tight text-slate-950 sm:text-2xl xl:text-3xl 2xl:text-4xl">
                  Monte o plano da sua instituição.
                </h1>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6 xl:text-sm xl:leading-5 2xl:text-sm 2xl:leading-6">
                  Informe os dados principais, selecione os serviços desejados e
                  visualize uma estimativa por aluno.
                </p>
              </div>

              <span className="hidden shrink-0 rounded-full bg-violet-50 px-3 py-1.5 text-[11px] font-bold text-violet-700 sm:block xl:text-xs">
                Sem compromisso
              </span>
            </div>
          </div>

          {/* Card body */}
          <div className="px-5 py-4 xl:min-h-0 xl:flex-1 xl:px-5 xl:py-3 2xl:px-6 2xl:py-4">
            <div className="grid gap-3 xl:h-full xl:min-h-0 xl:grid-cols-2 xl:gap-4">
              {/* Left: Dados + Representante */}
              <div className="grid gap-3 xl:min-h-0 xl:grid-rows-2 xl:gap-3 2xl:gap-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-3 xl:min-h-0 xl:p-3 2xl:p-4">
                  <SectionTitle
                    icon={<Building2 className="size-4" />}
                    title="Dados da empresa"
                    description="Identificação da instituição"
                  />

                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:mt-2.5 xl:gap-2 2xl:mt-3 2xl:gap-2.5">
                    <Field label="Instituição" placeholder="Ex: Colégio Alfa" />
                    <Field label="CNPJ" placeholder="00.000.000/0001-00" />
                    <Field label="Cidade" placeholder="Montes Claros" />
                    <Field label="Alunos" placeholder="Ex: 450" />
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-3 xl:min-h-0 xl:p-3 2xl:p-4">
                  <SectionTitle
                    icon={<UsersRound className="size-4" />}
                    title="Representante"
                    description="Pessoa responsável pelo contato"
                  />

                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:mt-2.5 xl:gap-2 2xl:mt-3 2xl:gap-2.5">
                    <Field label="Nome" placeholder="Seu nome" />
                    <Field label="Cargo" placeholder="Coordenação" />
                    <Field label="E-mail" placeholder="email@empresa.com" />
                    <Field label="WhatsApp" placeholder="(00) 00000-0000" />
                  </div>
                </div>
              </div>

              {/* Right: Serviços */}
              <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-3 shadow-sm shadow-violet-950/5 xl:min-h-0 xl:p-3 2xl:p-4">
                <SectionTitle
                  variant="solid"
                  icon={<ClipboardList className="size-4" />}
                  title="Serviços desejados"
                  description="Selecione o que faz sentido agora"
                />

                <div className="mt-3 flex flex-col gap-2 xl:mt-2.5 xl:min-h-0 xl:flex-1 xl:justify-start xl:gap-1.5 2xl:mt-3 2xl:gap-2">
                  <ServiceOption
                    title="Simulados online"
                    price="+ R$4/aluno"
                    checked
                  />

                  <ServiceOption
                    title="Relatórios por turma"
                    price="+ R$3/aluno"
                    checked
                  />

                  <ServiceOption
                    title="Banco de questões"
                    price="+ R$5/aluno"
                  />

                  <ServiceOption title="Redação com IA" price="+ R$7/aluno" />

                  <ServiceOption
                    title="Acesso para professores"
                    price="Incluso"
                    checked
                  />

                  <ServiceOption
                    title="Implantação guiada"
                    price="Incluso"
                    checked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nota aside */}
        <aside className="w-full rounded-3xl border border-violet-200 bg-violet-700 text-white shadow-2xl shadow-violet-950/20 xl:h-full xl:min-h-0 xl:overflow-hidden xl:rounded-4xl">
          <div className="relative isolate flex flex-col overflow-hidden p-4 xl:h-full xl:min-h-0 xl:p-4 2xl:p-5">
            {/* Decorative blobs */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[30px_30px] opacity-40" />
            <div className="absolute -top-24 -right-24 -z-10 size-64 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 -z-10 size-64 rounded-full bg-violet-400/35 blur-3xl" />

            {/* Top */}
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/15 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md 2xl:py-1.5 2xl:text-xs">
                <Mail className="size-3.5" />
                Estimativa
              </span>

              <h2 className="mt-2 text-xl font-bold tracking-tight xl:text-2xl 2xl:text-3xl">
                Nota institucional
              </h2>

              <p className="mt-1 text-[11px] leading-4 text-white/70 xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                Valores estimados por aluno ativo.
              </p>

              <div className="mt-3 grid gap-2 xl:mt-2.5 xl:gap-1.5 2xl:mt-3 2xl:gap-2">
                <QuoteLine label="Base plataforma" value="R$9/aluno" />
                <QuoteLine label="Simulados online" value="R$4/aluno" />
                <QuoteLine label="Relatórios por turma" value="R$3/aluno" />
                <QuoteLine label="Professores" value="Incluso" />
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-5 shrink-0 xl:mt-auto">
              <div className="mb-3 h-px bg-white/15" />

              {/* Price cards */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-2 2xl:gap-3">
                {/* Mensal */}
                <div className="min-w-0 rounded-2xl border border-white/10 bg-white/15 p-3 backdrop-blur-md xl:p-2.5 2xl:rounded-3xl 2xl:p-3">
                  <p className="truncate text-[8px] font-bold uppercase tracking-[0.14em] text-white/50 2xl:text-[9px]">
                    Plano mensal
                  </p>

                  <div className="mt-1 flex min-w-0 items-end gap-1">
                    <span className="text-xl font-bold tracking-tight xl:text-xl 2xl:text-2xl">
                      R$16
                    </span>

                    <span className="pb-0.5 text-[9px] font-medium text-white/60 xl:text-[9px] 2xl:text-[10px]">
                      /aluno
                    </span>
                  </div>
                </div>

                {/* Anual */}
                <div className="min-w-0 rounded-2xl border border-amber-200/20 bg-amber-300/15 p-3 backdrop-blur-md xl:p-2.5 2xl:rounded-3xl 2xl:p-3">
                  <div className="flex min-w-0 items-center justify-between gap-1">
                    <p className="truncate text-[8px] font-bold uppercase tracking-[0.14em] text-amber-100 2xl:text-[9px]">
                      Plano anual
                    </p>

                    <span className="shrink-0 rounded-full bg-white px-1.5 py-0.5 text-[8px] font-bold text-violet-700">
                      -10%
                    </span>
                  </div>

                  <div className="mt-1 flex min-w-0 items-end gap-1">
                    <span className="text-xl font-bold tracking-tight xl:text-xl 2xl:text-2xl">
                      R$14,40
                    </span>

                    <span className="pb-0.5 text-[9px] font-medium text-white/60 xl:text-[9px] 2xl:text-[10px]">
                      /aluno
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-violet-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 hover:text-violet-800 hover:shadow-xl xl:py-2 2xl:py-2.5"
              >
                Solicitar proposta
                <ChevronRight className="size-3.5 xl:size-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

/* Sub-components */

const SectionTitle = ({ icon, title, description, variant = "light" }) => (
  <div className="flex min-w-0 items-center gap-2">
    <div
      className={`grid size-8 shrink-0 place-items-center rounded-xl shadow-sm xl:size-8 2xl:size-9 2xl:rounded-2xl ${
        variant === "solid"
          ? "bg-violet-700 text-white"
          : "bg-white text-violet-700"
      }`}
    >
      {icon}
    </div>

    <div className="min-w-0">
      <h2 className="truncate text-sm font-bold text-slate-950 2xl:text-base">
        {title}
      </h2>

      <p className="truncate text-[11px] text-slate-400 2xl:text-xs">
        {description}
      </p>
    </div>
  </div>
);

const Field = ({ label, placeholder }) => (
  <label className="block min-w-0">
    <span className="mb-1 block truncate text-[11px] font-bold text-slate-500 2xl:text-xs">
      {label}
    </span>

    <input
      type="text"
      placeholder={placeholder}
      className="h-8.5 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-300 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 xl:h-8.5 2xl:h-10 2xl:rounded-2xl 2xl:text-sm"
    />
  </label>
);

const ServiceOption = ({ title, price, checked = false }) => (
  <label className="flex min-w-0 cursor-pointer items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-violet-200 hover:bg-violet-50/60 xl:rounded-2xl 2xl:px-3 2xl:py-2.5">
    <span className="flex min-w-0 items-center gap-2">
      <input
        type="checkbox"
        defaultChecked={checked}
        className="size-3.5 shrink-0 accent-violet-700 2xl:size-4"
      />

      <span className="truncate text-xs font-bold text-slate-700 2xl:text-sm">
        {title}
      </span>
    </span>

    <span className="shrink-0 text-[11px] font-bold text-violet-700 2xl:text-xs">
      {price}
    </span>
  </label>
);

const QuoteLine = ({ label, value }) => (
  <div className="flex min-w-0 items-center justify-between gap-2 rounded-xl bg-white/10 px-3 py-2 backdrop-blur-md 2xl:rounded-2xl 2xl:px-3 2xl:py-2.5">
    <span className="truncate text-[11px] font-medium text-white/70 2xl:text-xs">
      {label}
    </span>

    <span className="shrink-0 text-[11px] font-bold text-white 2xl:text-xs">
      {value}
    </span>
  </div>
);

const PlanItem = ({ children }) => (
  <li className="flex items-center gap-2">
    <Check className="size-3.5 shrink-0 text-violet-500 2xl:size-4" />
    <span>{children}</span>
  </li>
);
export default PlansPage;
