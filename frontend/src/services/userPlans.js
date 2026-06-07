import { Crown, Rocket, ShieldCheck } from "lucide-react";

export const userPlansData = [
  {
    name: "Free",
    badge: "Essencial",
    price: "R$0",
    period: "/mês",
    description: "Para testar a plataforma e organizar os primeiros estudos.",
    Icon: Rocket,
    iconClass: "bg-slate-100 text-slate-600",
    badgeClass: "bg-slate-100 text-slate-500",
    priceClass: "text-slate-950",
    buttonLabel: "Começar grátis",
    buttonTo: "/signup",
    buttonClass:
      "border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700",
    features: [
      "Simulados básicos",
      "Resumo de desempenho",
      "Histórico limitado",
      "Perfil de aluno",
    ],
  },
  {
    name: "Pro",
    badge: "Mais escolhido",
    price: "R$29",
    period: "/mês",
    description: "Para quem quer acompanhar evolução e estudar com direção.",
    Icon: Crown,
    iconClass: "bg-violet-700 text-white",
    badgeClass: "bg-violet-50 text-violet-700",
    priceClass: "text-violet-700",
    buttonLabel: "Escolher Pro",
    buttonTo: "/cadastro?=plano-pro",
    buttonClass:
      "bg-violet-700 text-white shadow-sm shadow-violet-950/10 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl",
    features: [
      "Simulados ilimitados",
      "Desempenho por matéria",
      "Histórico completo",
      "Trilhas de estudo",
    ],
  },
  {
    name: "Premium",
    badge: "Preparação completa",
    price: "R$49",
    period: "/mês",
    description:
      "Para uma preparação mais completa, com redação, relatórios avançados e recomendações inteligentes.",
    Icon: ShieldCheck,
    iconClass:
      "bg-amber-50 text-amber-600 ring-1 ring-amber-200 shadow-sm shadow-amber-500/10",
    badgeClass: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    priceClass: "text-slate-950",
    buttonLabel: "Escolher Premium",
    buttonTo: "/cadastro",
    buttonClass:
      "bg-violet-700 text-white shadow-sm shadow-violet-950/10 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl hover:shadow-violet-950/15",
    features: [
      "Tudo do Pro",
      "Correção de redação com IA",
      "Relatórios avançados de evolução",
      "Recomendações inteligentes de estudo",
    ],
  },
];
