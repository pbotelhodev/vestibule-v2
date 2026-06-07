/* Imports Tools */
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  GraduationCap,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/* imports components */
import Logo from "../components/ui/Logo";
import Alert from "../components/ui/Alert";

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    description: "Para começar a estudar com mais organização.",
    highlight: false,
    Icon: GraduationCap,
    features: [
      "Simulados básicos",
      "Histórico de desempenho",
      "Acesso ao painel do aluno",
      "Recursos essenciais",
    ],
    cta: "Começar grátis",
  },
  {
    name: "Pro",
    price: "R$ 19,90",
    description: "Para quem quer evoluir com mais clareza.",
    highlight: true,
    Icon: Zap,
    features: [
      "Simulados completos",
      "Desempenho por matéria",
      "Relatórios de evolução",
      "Trilhas de estudo",
    ],
    cta: "Escolher Pro",
  },
  {
    name: "Premium",
    price: "R$ 39,90",
    description: "Para uma preparação mais completa e inteligente.",
    highlight: false,
    Icon: Crown,
    features: [
      "Tudo do plano Pro",
      "Correção de redação com IA",
      "Análises avançadas",
      "Recomendações personalizadas",
    ],
    cta: "Escolher Premium",
  },
];

const Plans = () => {
  /* Navigate */
  const navigate = useNavigate();
  const location = useLocation();

  /* States */
  const [alertData, setAlertData] = useState(null);

  /* Functions */
  const handleSelectPlan = (plan) => {
    setAlertData({
      type: "success",
      title: `${plan.name} selecionado`,
      message:
        "Plano selecionado com sucesso. Em breve vamos conectar essa etapa ao backend.",
    });

    setTimeout(() => {
      navigate("/portal");
    }, 1200);
  };

  /* Effects */
  useEffect(() => {
    if (location.state?.alert) {
      setAlertData(location.state.alert);
    }
  }, [location.state]);

  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-white px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      {alertData && (
        <Alert data={alertData} onClose={() => setAlertData(null)} />
      )}

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-size-[32px_32px] sm:bg-size-[40px_40px]" />
        <div className="absolute -top-28 -right-20 size-88 rounded-full border border-blue-200/50 bg-blue-100/60 shadow-[0_30px_120px_rgba(59,130,246,0.18)]" />
        <div className="absolute -bottom-28 -left-20 size-80 rounded-full border border-amber-200/70 bg-amber-100/70 shadow-[0_30px_120px_rgba(245,158,11,0.16)]" />
        <div className="absolute top-1/3 left-1/2 size-72 -translate-x-1/2 rounded-full bg-violet-100/50 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[calc(100dvh-48px)] w-full max-w-7xl flex-col 2xl:max-w-360">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <Link
            to="/login"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-500 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 hover:shadow-md"
          >
            Entrar
          </Link>
        </div>

        {/* Header content */}
        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-extrabold text-violet-600">
            <Sparkles className="size-4" />
            Escolha seu plano
          </span>

          <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Comece com o plano ideal para sua jornada.
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Você pode começar grátis e evoluir depois. Escolha o plano que
            combina melhor com sua preparação no Vestibule.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.Icon;

            return (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-4xl border bg-white/90 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 sm:p-7 ${
                  plan.highlight
                    ? "border-violet-200 shadow-violet-950/15"
                    : "border-slate-200 shadow-violet-950/5"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-5 right-5 rounded-full bg-violet-600 px-3 py-1 text-xs font-extrabold text-white">
                    Recomendado
                  </div>
                )}

                <div
                  className={`grid size-13 place-items-center rounded-3xl ${
                    plan.highlight
                      ? "bg-violet-50 text-violet-600"
                      : "bg-slate-50 text-blue-700"
                  }`}
                >
                  <Icon className="size-6" />
                </div>

                <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-950">
                  {plan.name}
                </h2>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-950">
                    {plan.price}
                  </span>

                  {plan.price !== "R$ 0" && (
                    <span className="pb-1 text-sm font-bold text-slate-400">
                      /mês
                    </span>
                  )}
                </div>

                <ul className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm font-semibold text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan)}
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl ${
                    plan.highlight
                      ? "bg-blue-950 text-white hover:bg-linear-to-r hover:from-violet-600 hover:via-purple-500 hover:to-blue-600"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </button>
              </article>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-8 rounded-4xl border border-slate-200 bg-white/85 p-5 text-center shadow-xl shadow-violet-950/5 backdrop-blur-xl sm:p-6">
          <p className="text-sm leading-6 text-slate-500">
            Representa uma escola, cursinho ou instituição?{" "}
            <Link
              to="/instituicoes"
              className="font-extrabold text-violet-600 transition hover:text-violet-700"
            >
              Conheça o Vestibule para instituições.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Plans;
