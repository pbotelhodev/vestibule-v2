/* eslint-disable no-unused-vars */
import {
  BadgeCheck,
  Bell,
  BookOpenCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Crown,
  GraduationCap,
  IdCard,
  KeyRound,
  LockKeyhole,
  Mail,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  UserCog,
  UserRound,
  XCircle,
} from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { planThemesProfile, planBenefits } from "../../services/profile/services.js";

const PREMIUM_GRADIENT_ID = "profile-premium-gradient";
const premiumIconStroke = `url(#${PREMIUM_GRADIENT_ID})`;
const planRank = { free: 1, pro: 2, premium: 3 };


const quickPreferences = [
  {
    title: "Resumo semanal",
    description: "Receber uma visão geral da sua evolução.",
    Icon: Bell,
    active: true,
  },
  {
    title: "Recomendações de estudo",
    description: "Sugestões baseadas nos seus resultados.",
    Icon: Sparkles,
    active: true,
  },
  {
    title: "Aparência do painel",
    description: "Preferências visuais da área do aluno.",
    Icon: Palette,
    active: false,
  },
];
const formatDate = (dateValue) => {
  if (!dateValue) return "Não informado";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "Não informado";
  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
};
const formatPhone = (phone) => {
  if (!phone) return "Não informado";
  const phoneString = String(phone);
  if (phoneString.length < 10) return phoneString;
  return phoneString.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
};
const getDisplayName = (name) => {
  if (!name) return "Aluno Vestibule";
  return name;
};
const getInitials = (name) => {
  if (!name) return "A";
  const parts = name.trim().split(" ").filter(Boolean);
  const first = parts[0]?.charAt(0) || "A";
  const last = parts.length > 1 ? parts[parts.length - 1]?.charAt(0) : "";
  return `${first}${last}`.toUpperCase();
};
const ProfileIconBox = ({ Icon, theme, className = "size-11" }) => {
  return (
    <div
      className={[
        "grid shrink-0 place-items-center rounded-2xl border shadow-sm shadow-slate-950/5",
        className,
        theme.iconBox,
      ].join(" ")}
    >
      <Icon
        className="size-5"
        stroke={theme.gradient ? premiumIconStroke : "currentColor"}
      />
    </div>
  );
};
const InfoRow = ({ label, value, Icon, theme }) => {
  return (
    <div
      className={[
        "flex items-start gap-3 rounded-3xl border bg-white p-4 shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 hover:shadow-md",
        theme.border,
        theme.hoverBg,
      ].join(" ")}
    >
      <ProfileIconBox Icon={Icon} theme={theme} />
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          {label}
        </p>
        <p className="mt-1 truncate text-sm font-bold text-blue-950 2xl:text-base">
          {value}
        </p>
      </div>
    </div>
  );
};
const StudentProfile = () => {
  const { student } = useOutletContext();
  const currentPlan = student?.planActive?.toLowerCase() || "free";
  const theme = planThemesProfile[currentPlan] ?? planThemesProfile.free;
  const rank = planRank[currentPlan] ?? planRank.free;
  const hasProAccess = rank >= planRank.pro;
  const hasPremiumAccess = rank >= planRank.premium;
  const fullName = getDisplayName(student?.name);
  const initials = getInitials(student?.name);
  const targetCourse = "Medicina";
  const targetScore = 750;
  const currentScore = 670;
  const accountStatus =
    student?.status === "ACTIVE" ? "Conta ativa" : "Conta inativa";
  const emailStatus = student?.emailVerifiedAt
    ? "E-mail verificado"
    : "E-mail não verificado";
  return (
    <section className="relative mx-auto flex w-full max-w-450 flex-col gap-4 px-3 py-3 sm:px-5 sm:py-4 lg:px-6 xl:gap-5 xl:px-6 xl:py-5 2xl:px-8 2xl:py-7 min-[2200px]:max-w-495 min-[2200px]:px-10">
      {theme.gradient && (
        <svg
          aria-hidden="true"
          focusable="false"
          className="pointer-events-none absolute size-0"
        >
          <defs>
            <linearGradient
              id={PREMIUM_GRADIENT_ID}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#6b21a8" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
        <div className="pointer-events-none absolute inset-0 bg-white" />
        <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-violet-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 size-64 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute right-16 bottom-10 hidden size-40 rounded-full bg-amber-100/60 blur-3xl lg:block" />
        <div className="relative z-10 grid gap-5 xl:grid-cols-[minmax(0,1fr)_26rem] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_30rem]">
          <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center">
            <div
              className={[
                "grid size-24 shrink-0 place-items-center overflow-hidden rounded-[1.75rem] text-3xl font-bold shadow-sm sm:size-28 sm:rounded-4xl 2xl:size-32",
                theme.avatar,
              ].join(" ")}
            >
              {student?.avatarUrl ? (
                <img
                  src={student.avatarUrl}
                  alt={fullName}
                  className="size-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
            <div className="min-w-0">
              <span
                className={[
                  "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold shadow-sm",
                  theme.badge,
                ].join(" ")}
              >
                <Crown
                  className="size-4"
                  stroke={theme.gradient ? premiumIconStroke : "currentColor"}
                />
                <span className={theme.gradient ? theme.textStrong : ""}>
                  {theme.label}
                </span>
              </span>
              <h1 className="mt-4 truncate text-3xl font-bold tracking-tight text-blue-950 sm:text 2xl xl:text-3xl">
                {fullName}
              </h1>
              <p className="mt-2 max-w-2xl truncate text-sm font-medium text-slate-500 sm:text-base">
                {student?.email || "aluno@vestibule.com"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="size-4" /> {accountStatus}
                </span>
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold",
                    student?.emailVerifiedAt
                      ? "border border-emerald-100 bg-emerald-50 text-emerald-700"
                      : "border border-amber-200 bg-amber-50 text-amber-700",
                  ].join(" ")}
                >
                  {student?.emailVerifiedAt ? (
                    <BadgeCheck className="size-4" />
                  ) : (
                    <XCircle className="size-4" />
                  )}
                  {emailStatus}
                </span>
              </div>
            </div>
          </div>
          <aside
            className={[
              "rounded-3xl border bg-white/80 p-3 shadow-sm backdrop-blur-md 2xl:p-4",
              theme.border,
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p
                  className={[
                    "text-[10px] font-bold uppercase tracking-[0.18em]",
                    theme.eyebrow,
                  ].join(" ")}
                >
                  Objetivo
                </p>

                <h2 className="mt-1 text-base font-bold text-blue-950 2xl:text-lg">
                  Meta de aprovação
                </h2>
              </div>

              <ProfileIconBox Icon={Target} theme={theme} className="size-10" />
            </div>

            <div className="mt-4 grid gap-2">
              <label className="block">
                <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Curso desejado
                </span>

                <input
                  type="text"
                  defaultValue={targetCourse}
                  placeholder="Ex: Medicina"
                  className={[
                    "h-10 w-full rounded-2xl border bg-white px-3 text-xs font-bold text-blue-950 shadow-sm outline-none transition placeholder:text-slate-300 focus:ring-4 2xl:h-11 2xl:text-sm",
                    theme.borderStrong,
                    theme.gradient
                      ? "focus:border-purple-300 focus:ring-purple-100"
                      : "focus:ring-slate-100",
                  ].join(" ")}
                />
              </label>

              <div className="grid grid-cols-[1fr_auto] gap-2">
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Nota meta
                  </span>

                  <input
                    type="number"
                    defaultValue={targetScore}
                    placeholder="750"
                    className={[
                      "h-10 w-full rounded-2xl border bg-white px-3 text-xs font-bold text-blue-950 shadow-sm outline-none transition placeholder:text-slate-300 focus:ring-4 2xl:h-11 2xl:text-sm",
                      theme.borderStrong,
                      theme.gradient
                        ? "focus:border-purple-300 focus:ring-purple-100"
                        : "focus:ring-slate-100",
                    ].join(" ")}
                  />
                </label>

                <div className="flex items-end">
                  <button
                    type="button"
                    className={[
                      "inline-flex h-10 cursor-pointer items-center justify-center rounded-2xl px-4 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg 2xl:h-11",
                      theme.button,
                    ].join(" ")}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 rounded-2xl bg-slate-50 px-3 py-2">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-slate-400">
                  Curso desejado
                </p>
                <p className="truncate text-xs font-bold text-blue-950">
                  {targetCourse}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-[10px] font-semibold text-slate-400">
                  Nota atual / meta
                </p>
                <p
                  className={["text-xs font-bold", theme.textStrong].join(" ")}
                >
                  {currentScore} / {targetScore}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
      {/* Informações principais */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] min-[2200px]:grid-cols-[minmax(0,1fr)_32rem]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span
                className={[
                  "text-xs font-bold uppercase tracking-[0.2em]",
                  theme.eyebrow,
                ].join(" ")}
              >
                Dados pessoais
              </span>
              <h2 className="mt-2 text-xl font-bold text-blue-950 2xl:text-2xl">
                Informações do perfil
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                Dados básicos do aluno dentro da plataforma Vestibule.
              </p>
            </div>
            <button
              type="button"
              className={[
                "inline-flex w-fit cursor-pointer items-center justify-center rounded-full border bg-white px-4 py-2.5 text-xs font-bold transition hover:-translate-y-0.5",
                theme.borderStrong,
                theme.textStrong,
                theme.hoverBg,
              ].join(" ")}
            >
              Editar perfil
            </button>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <InfoRow
              label="Nome completo"
              value={fullName}
              Icon={IdCard}
              theme={theme}
            />
            <InfoRow
              label="E-mail"
              value={student?.email || "Não informado"}
              Icon={Mail}
              theme={theme}
            />
            <InfoRow
              label="Telefone"
              value={formatPhone(student?.phone)}
              Icon={Phone}
              theme={theme}
            />
            <InfoRow
              label="Tipo de aluno"
              value={
                student?.studentType === "INDIVIDUAL"
                  ? "Aluno individual"
                  : student?.studentType || "Não informado"
              }
              Icon={GraduationCap}
              theme={theme}
            />
            <InfoRow
              label="Instituição"
              value={student?.institutionCode || "Sem instituição vinculada"}
              Icon={Building2}
              theme={theme}
            />
            <InfoRow
              label="Função"
              value={student?.role === "STUDENT" ? "Aluno" : student?.role}
              Icon={UserCog}
              theme={theme}
            />
          </div>
        </article>
        <aside className="grid gap-4">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-blue-950 2xl:text-2xl">
                  Conta
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Resumo de acesso e segurança.
                </p>
              </div>
              <ProfileIconBox Icon={ShieldCheck} theme={theme} />
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Provedor de login
                </p>
                <p className="mt-1 text-sm font-bold text-blue-950">
                  {student?.authProvider || "LOCAL"}
                </p>
              </div>
              <div
                className={[
                  "rounded-3xl p-4",
                  student?.emailVerifiedAt ? "bg-emerald-50" : "bg-amber-50",
                ].join(" ")}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Verificação
                </p>
                <p
                  className={[
                    "mt-1 text-sm font-bold",
                    student?.emailVerifiedAt
                      ? "text-emerald-700"
                      : "text-amber-700",
                  ].join(" ")}
                >
                  {emailStatus}
                </p>
              </div>
              <div
                className={[
                  "rounded-3xl p-4",
                  theme.gradient ? "bg-purple-50/70" : theme.softBgAlt,
                ].join(" ")}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Status
                </p>
                <p
                  className={["mt-1 text-sm font-bold", theme.textStrong].join(
                    " ",
                  )}
                >
                  {accountStatus}
                </p>
              </div>
              <article className="overflow-hidden rounded-[1.75rem] border border-blue-950 bg-blue-950 p-5 text-white shadow-sm sm:rounded-4xl 2xl:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                      Membro desde
                    </p>
                    <strong className="mt-2 block text-2xl font-bold tracking-tight">
                      {formatDate(student?.createdAt)}
                    </strong>
                  </div>
                  <div className="grid size-12 place-items-center rounded-2xl bg-white/10">
                    <CalendarDays className="size-5" />
                  </div>
                </div>
              </article>
            </div>
          </article>
        </aside>
      </section>
      {/* Plano */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] min-[2200px]:grid-cols-[minmax(0,1fr)_32rem]">
        <article
          className={[
            "rounded-[1.75rem] border bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7",
            theme.border,
          ].join(" ")}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <span
                className={[
                  "text-xs font-bold uppercase tracking-[0.2em]",
                  theme.eyebrow,
                ].join(" ")}
              >
                Assinatura
              </span>
              <h2 className="mt-2 text-xl font-bold text-blue-950 2xl:text-2xl">
                {theme.label}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                Recursos disponíveis de acordo com o plano ativo do aluno.
              </p>
            </div>
            <button
              type="button"
              className={[
                "inline-flex w-fit cursor-pointer items-center justify-center rounded-full border bg-white px-4 py-2.5 text-xs font-bold transition hover:-translate-y-0.5",
                theme.borderStrong,
                theme.textStrong,
                theme.hoverBg,
              ].join(" ")}
            >
              Gerenciar plano
            </button>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {planBenefits[currentPlan].map((benefit) => (
              <div
                key={benefit}
                className={[
                  "rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
                  theme.border,
                  theme.hoverBg,
                ].join(" ")}
              >
                <ProfileIconBox Icon={CheckCircle2} theme={theme} />
                <p className="mt-4 text-sm font-bold leading-6 text-blue-950">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </article>
        <aside className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
          <ProfileIconBox Icon={BookOpenCheck} theme={theme} />
          <h2 className="mt-5 text-xl font-bold text-blue-950">
            Jornada no Vestibule
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Seu perfil concentra dados de conta, plano, preferências e futuras
            informações acadêmicas.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-blue-50/70 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Simulados
              </p>
              <p className="mt-1 text-sm font-bold text-blue-950">
                Preparado para histórico
              </p>
            </div>
            <div
              className={[
                "rounded-3xl p-4",
                theme.gradient ? "bg-purple-50/70" : theme.softBgAlt,
              ].join(" ")}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Plano atual
              </p>
              <p
                className={["mt-1 text-sm font-bold", theme.textStrong].join(
                  " ",
                )}
              >
                {theme.label}
              </p>
            </div>
          </div>
        </aside>
      </section>
      {/* Segurança e preferências */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem] 2xl:grid-cols-[minmax(0,1fr)_28rem] min-[2200px]:grid-cols-[minmax(0,1fr)_32rem]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span
                className={[
                  "text-xs font-bold uppercase tracking-[0.2em]",
                  theme.eyebrow,
                ].join(" ")}
              >
                Segurança
              </span>
              <h2 className="mt-2 text-xl font-bold text-blue-950 2xl:text-2xl">
                Acesso e proteção
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                Área visual preparada para futuras ações de segurança.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <ProfileIconBox Icon={KeyRound} theme={theme} />
              <h3 className="mt-4 text-sm font-bold text-blue-950">
                Alterar senha
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Futuramente o aluno poderá atualizar a senha de acesso.
              </p>
              <button
                type="button"
                className={[
                  "mt-4 inline-flex cursor-pointer items-center justify-center rounded-full border bg-white px-4 py-2.5 text-xs font-bold transition hover:-translate-y-0.5",
                  theme.borderStrong,
                  theme.textStrong,
                  theme.hoverBg,
                ].join(" ")}
              >
                Alterar
              </button>
            </div>
          </div>
        </article>
        <aside className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-blue-950">Preferências</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Ajustes rápidos da experiência.
              </p>
            </div>
            <ProfileIconBox Icon={UserCog} theme={theme} />
          </div>
          <div className="mt-5 space-y-3">
            {quickPreferences.map(({ title, description, Icon, active }) => (
              <div
                key={title}
                className="flex items-start justify-between gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <ProfileIconBox
                    Icon={Icon}
                    theme={theme}
                    className="size-10"
                  />
                  <div>
                    <p className="text-sm f ont-bold text-blue-950">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
                <span
                  className={[
                    "mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full",
                    active
                      ? `${theme.softBg} ${theme.textStrong}`
                      : "bg-slate-100 text-slate-400",
                  ].join(" ")}
                >
                  {active ? (
                    <CheckCircle2 className="size-4" />
                  ) : (
                    <XCircle className="size-4" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </section>
  );
};
export default StudentProfile;
