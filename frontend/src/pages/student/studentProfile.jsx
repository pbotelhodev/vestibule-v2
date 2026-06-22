/* eslint-disable no-unused-vars */
import {
  BadgeCheck,
  Bell,
  BookOpenCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Crown,
  Download,
  Eye,
  FileText,
  GraduationCap,
  IdCard,
  KeyRound,
  Lock,
  LockKeyhole,
  LogOut,
  Mail,
  Moon,
  Palette,
  Phone,
  Save,
  Settings as SettingsIcon,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Sun,
  Target,
  Trash2,
  UserCog,
  UserRound,
  XCircle,
} from "lucide-react";
import { useOutletContext } from "react-router-dom";

import {
  planThemesProfile,
  planBenefits,
} from "../../services/profile/services.js";

const PREMIUM_GRADIENT_ID = "profile-premium-gradient";
const premiumIconStroke = `url(#${PREMIUM_GRADIENT_ID})`;

const planRank = {
  free: 1,
  pro: 2,
  premium: 3,
};

const notificationSettings = [
  {
    title: "Avisos de simulados",
    description: "Receber alertas quando novos simulados forem liberados.",
    Icon: Bell,
    active: true,
  },
  {
    title: "Resumo semanal",
    description: "Receber uma visão rápida da sua evolução na semana.",
    Icon: Mail,
    active: true,
  },
  {
    title: "Lembretes de estudo",
    description: "Notificações para manter uma rotina de preparação.",
    Icon: Target,
    active: false,
  },
];

const studySettings = [
  {
    title: "Recomendações inteligentes",
    description: "Sugestões baseadas nos seus resultados e dificuldades.",
    Icon: Sparkles,
    active: true,
  },
  {
    title: "Mostrar matérias prioritárias",
    description: "Destacar áreas que precisam de mais atenção.",
    Icon: BookOpenCheck,
    active: true,
  },
  {
    title: "Modo foco nos simulados",
    description: "Reduzir distrações durante a resolução das questões.",
    Icon: Eye,
    active: false,
  },
];

const privacySettings = [
  {
    title: "Perfil privado",
    description: "Ocultar dados pessoais em recursos públicos futuros.",
    Icon: ShieldCheck,
    active: true,
  },
  {
    title: "Participar do ranking",
    description: "Permitir que sua pontuação apareça no ranking.",
    Icon: GraduationCap,
    active: false,
  },
];

const formatDate = (dateValue) => {
  if (!dateValue) return "Não informado";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) return "Não informado";

  return `${String(date.getDate()).padStart(2, "0")}/${String(
    date.getMonth() + 1,
  ).padStart(2, "0")}/${date.getFullYear()}`;
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

const VisualToggle = ({ active, theme }) => {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={[
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full p-0.5 transition",
        active ? theme.progress : "bg-slate-200",
      ].join(" ")}
    >
      <span
        className={[
          "size-5 rounded-full bg-white shadow-sm transition",
          active ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
};

const SettingRow = ({ title, description, Icon, active, theme }) => {
  return (
    <div className="flex items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex min-w-0 items-start gap-3">
        <ProfileIconBox Icon={Icon} theme={theme} className="size-10" />

        <div className="min-w-0">
          <p className="text-sm font-bold text-blue-950">{title}</p>

          <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
        </div>
      </div>

      <VisualToggle active={active} theme={theme} />
    </div>
  );
};

const SelectField = ({ label, defaultValue, children, theme }) => {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </span>

      <select
        defaultValue={defaultValue}
        className={[
          "h-12 w-full cursor-pointer rounded-2xl border bg-white px-4 text-sm font-bold text-blue-950 shadow-sm outline-none transition focus:ring-4",
          theme.borderStrong,
          theme.gradient
            ? "focus:border-purple-300 focus:ring-purple-100"
            : "focus:ring-slate-100",
        ].join(" ")}
      >
        {children}
      </select>
    </label>
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

              <h1 className="mt-4 truncate text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl xl:text-3xl 2xl:text-4xl">
                {fullName}
              </h1>

              <p className="mt-2 max-w-2xl truncate text-sm font-medium text-slate-500 sm:text-base">
                {student?.email || "aluno@vestibule.com"}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="size-4" />
                  {accountStatus}
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

          {/* Objetivo */}
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
            {(planBenefits[currentPlan] || planBenefits.free).map((benefit) => (
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

      {/* Experiência e acesso rápido */}
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
                Experiência
              </span>

              <h2 className="mt-2 text-xl font-bold text-blue-950 2xl:text-2xl">
                Preferências do painel
              </h2>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                Ajustes visuais e de uso para deixar a plataforma mais alinhada
                com sua rotina.
              </p>
            </div>

            <button
              type="button"
              className={[
                "inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",
                theme.button,
              ].join(" ")}
            >
              <Save className="size-4" />
              Salvar ajustes
            </button>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <SelectField
              label="Tema visual"
              defaultValue="system"
              theme={theme}
            >
              <option value="system">Automático do sistema</option>
              <option value="light">Claro</option>
              <option value="dark">Escuro futuramente</option>
            </SelectField>

            <SelectField
              label="Densidade"
              defaultValue="comfortable"
              theme={theme}
            >
              <option value="comfortable">Confortável</option>
              <option value="compact">Compacta</option>
              <option value="large">Mais espaçada</option>
            </SelectField>

            <SelectField
              label="Formato de estudo"
              defaultValue="enem"
              theme={theme}
            >
              <option value="enem">ENEM</option>
              <option value="vestibular">Vestibular tradicional</option>
              <option value="mixed">Misto</option>
            </SelectField>

            <SelectField
              label="Dificuldade padrão"
              defaultValue="medium"
              theme={theme}
            >
              <option value="easy">Leve</option>
              <option value="medium">Intermediária</option>
              <option value="hard">Avançada</option>
            </SelectField>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <ProfileIconBox Icon={Sun} theme={theme} />

              <h3 className="mt-4 text-sm font-bold text-blue-950">
                Modo claro
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Visual atual do painel, limpo e focado em leitura.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <ProfileIconBox Icon={Moon} theme={theme} />

              <h3 className="mt-4 text-sm font-bold text-blue-950">
                Modo escuro
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Espaço preparado para implementação futura.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <ProfileIconBox Icon={SlidersHorizontal} theme={theme} />

              <h3 className="mt-4 text-sm font-bold text-blue-950">
                Personalização
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Ajustes visuais por plano e preferência do aluno.
              </p>
            </div>
          </div>
        </article>

        <aside className="grid gap-4">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-blue-950 2xl:text-2xl">
                  Acesso rápido
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Atalhos visuais de configuração.
                </p>
              </div>

              <ProfileIconBox Icon={Palette} theme={theme} />
            </div>

            <div className="mt-5 space-y-3">
              <button
                type="button"
                className={[
                  "flex w-full cursor-pointer items-center justify-between gap-3 rounded-3xl border bg-white p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md",
                  theme.border,
                  theme.hoverBg,
                ].join(" ")}
              >
                <span>
                  <span className="block text-sm font-bold text-blue-950">
                    Notificações
                  </span>

                  <span className="mt-1 block text-xs text-slate-500">
                    E-mail, lembretes e avisos.
                  </span>
                </span>

                <Bell className="size-5 text-slate-400" />
              </button>

              <button
                type="button"
                className={[
                  "flex w-full cursor-pointer items-center justify-between gap-3 rounded-3xl border bg-white p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md",
                  theme.border,
                  theme.hoverBg,
                ].join(" ")}
              >
                <span>
                  <span className="block text-sm font-bold text-blue-950">
                    Segurança
                  </span>

                  <span className="mt-1 block text-xs text-slate-500">
                    Senha e sessões.
                  </span>
                </span>

                <ShieldCheck className="size-5 text-slate-400" />
              </button>

              <button
                type="button"
                className={[
                  "flex w-full cursor-pointer items-center justify-between gap-3 rounded-3xl border bg-white p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md",
                  theme.border,
                  theme.hoverBg,
                ].join(" ")}
              >
                <span>
                  <span className="block text-sm font-bold text-blue-950">
                    Dados
                  </span>

                  <span className="mt-1 block text-xs text-slate-500">
                    Exportação e privacidade.
                  </span>
                </span>

                <FileText className="size-5 text-slate-400" />
              </button>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.75rem] border border-blue-950 bg-blue-950 p-5 text-white shadow-sm sm:rounded-4xl 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  Plano atual
                </p>

                <strong className="mt-2 block text-3xl font-bold tracking-tight">
                  {theme.name}
                </strong>

                <p className="mt-1 text-sm font-semibold text-white/60">
                  configurações liberadas por plano
                </p>
              </div>

              <div className="grid size-12 place-items-center rounded-2xl bg-white/10">
                <Sparkles className="size-5" />
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={[
                  "h-full rounded-full",
                  theme.gradient ? theme.progress : "bg-white",
                ].join(" ")}
                style={{
                  width: hasPremiumAccess
                    ? "100%"
                    : hasProAccess
                      ? "70%"
                      : "40%",
                }}
              />
            </div>
          </article>
        </aside>
      </section>

      {/* Notificações e estudos */}
      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={[
                  "text-xs font-bold uppercase tracking-[0.2em]",
                  theme.eyebrow,
                ].join(" ")}
              >
                Notificações
              </span>

              <h2 className="mt-2 text-xl font-bold text-blue-950 2xl:text-2xl">
                Avisos e lembretes
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Controle quais avisos a plataforma pode mostrar.
              </p>
            </div>

            <ProfileIconBox Icon={Bell} theme={theme} />
          </div>

          <div className="mt-6 space-y-3">
            {notificationSettings.map((setting) => (
              <SettingRow key={setting.title} {...setting} theme={theme} />
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={[
                  "text-xs font-bold uppercase tracking-[0.2em]",
                  theme.eyebrow,
                ].join(" ")}
              >
                Estudos
              </span>

              <h2 className="mt-2 text-xl font-bold text-blue-950 2xl:text-2xl">
                Preferências de estudo
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Ajustes que influenciam a experiência nos simulados.
              </p>
            </div>

            <ProfileIconBox Icon={BookOpenCheck} theme={theme} />
          </div>

          <div className="mt-6 space-y-3">
            {studySettings.map((setting) => (
              <SettingRow key={setting.title} {...setting} theme={theme} />
            ))}
          </div>
        </article>
      </section>

      {/* Segurança e privacidade */}
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
                Conta e proteção
              </h2>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                Área visual preparada para troca de senha, sessões e
                dispositivos conectados.
              </p>
            </div>

            <ProfileIconBox Icon={ShieldCheck} theme={theme} />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <ProfileIconBox Icon={KeyRound} theme={theme} />

              <h3 className="mt-4 text-sm font-bold text-blue-950">
                Alterar senha
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Atualize a senha usada para acessar sua conta.
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
                Alterar senha
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <ProfileIconBox Icon={Smartphone} theme={theme} />

              <h3 className="mt-4 text-sm font-bold text-blue-950">
                Dispositivos
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Veja sessões abertas e acessos recentes futuramente.
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
                Ver sessões
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:col-span-2">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <ProfileIconBox Icon={LockKeyhole} theme={theme} />

                  <div>
                    <h3 className="text-sm font-bold text-blue-950">
                      Autenticação em duas etapas
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Recurso preparado para aumentar a segurança da conta.
                    </p>
                  </div>
                </div>

                <VisualToggle active={false} theme={theme} />
              </div>
            </div>
          </div>
        </article>

        <aside className="grid gap-4">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-blue-950 2xl:text-2xl">
                  Privacidade
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Controle de exposição e dados.
                </p>
              </div>

              <ProfileIconBox Icon={ShieldCheck} theme={theme} />
            </div>

            <div className="mt-5 space-y-3">
              {privacySettings.map((setting) => (
                <SettingRow key={setting.title} {...setting} theme={theme} />
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 2xl:p-6">
            <ProfileIconBox Icon={Download} theme={theme} />

            <h2 className="mt-5 text-xl font-bold text-blue-950">
              Dados da conta
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Espaço futuro para exportar histórico, resultados e informações do
              aluno.
            </p>

            <button
              type="button"
              className={[
                "mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border bg-white px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-md",
                theme.borderStrong,
                theme.textStrong,
                theme.hoverBg,
              ].join(" ")}
            >
              <Download className="size-4" />
              Exportar dados
            </button>
          </article>
        </aside>
      </section>

      {/* Zona sensível */}
      <section className="rounded-[1.75rem] border border-red-100 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:rounded-4xl sm:p-5 xl:p-6 2xl:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-red-100 bg-red-50 text-red-600">
              <Trash2 className="size-5" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                Zona sensível
              </span>

              <h2 className="mt-2 text-xl font-bold text-blue-950">
                Ações da conta
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                Área visual para futuras ações como sair da conta, desativar
                perfil ou solicitar exclusão de dados.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              <LogOut className="size-4" />
              Sair da conta
            </button>

            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              <XCircle className="size-4" />
              Desativar
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default StudentProfile;
