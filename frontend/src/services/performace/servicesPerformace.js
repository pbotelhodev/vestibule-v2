import { BookOpenCheck, Brain, Sparkles, Target, Timer, TrendingDown, TrendingUp } from "lucide-react";

export const planRank = {
  free: 1,
  pro: 2,
  premium: 3,
};

export const planThemes = {
  free: {
    name: "Free",
    eyebrow: "text-violet-600",
    border: "border-violet-100",
    borderStrong: "border-violet-200",
    softBg: "bg-violet-50",
    softBgAlt: "bg-violet-50/70",
    hoverBg: "hover:bg-violet-50/40",
    text: "text-violet-600",
    textStrong: "text-violet-700",
    button: "bg-violet-600 hover:bg-violet-700",
    progress: "bg-violet-600",
    progressSoft: "bg-violet-100",
    iconBox: "border-violet-100 bg-white text-violet-600",
    gradient: false,
  },

  pro: {
    name: "Pro",
    eyebrow: "text-blue-700",
    border: "border-blue-100",
    borderStrong: "border-blue-200",
    softBg: "bg-blue-50",
    softBgAlt: "bg-blue-50/70",
    hoverBg: "hover:bg-blue-50/40",
    text: "text-blue-700",
    textStrong: "text-blue-800",
    button: "bg-blue-700 hover:bg-blue-800",
    progress: "bg-blue-700",
    progressSoft: "bg-blue-100",
    iconBox: "border-blue-100 bg-white text-blue-700",
    gradient: false,
  },

  premium: {
    name: "Premium",
    eyebrow:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    border: "border-purple-200",
    borderStrong: "border-purple-300",
    softBg: "bg-purple-50",
    softBgAlt: "bg-purple-50/70",
    hoverBg: "hover:bg-purple-50/40",
    text: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    textStrong:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    button:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 hover:shadow-purple-700/25",
    progress: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500",
    progressSoft: "bg-purple-100",
    iconBox: "border-purple-200 bg-white text-purple-700",
    gradient: true,
  },
};

export const stats = [
  {
    label: "Simulados feitos",
    value: "18",
    helper: "Total concluído",
    Icon: BookOpenCheck,
  },
  {
    label: "Acerto geral",
    value: "76%",
    helper: "Média estimada",
    Icon: Target,
  },
  {
    label: "Tempo estudado",
    value: "26h",
    helper: "Últimos 30 dias",
    Icon: Timer,
  },
  {
    label: "Evolução",
    value: "+12%",
    helper: "Comparativo mensal",
    Icon: TrendingUp,
  },
];

export const subjects = [
  {
    name: "Matemática",
    percent: 74,
    status: "Boa evolução",
    color: "bg-violet-600",
    textColor: "text-violet-700",
  },
  {
    name: "Biologia",
    percent: 86,
    status: "Melhor matéria",
    color: "bg-blue-700",
    textColor: "text-blue-700",
  },
  {
    name: "História",
    percent: 68,
    status: "Média estável",
    color: "bg-amber-400",
    textColor: "text-amber-600",
  },
  {
    name: "Física",
    percent: 59,
    status: "Precisa revisar",
    color: "bg-slate-800",
    textColor: "text-slate-700",
  },
  {
    name: "Física",
    percent: 59,
    status: "Precisa revisar",
    color: "bg-slate-800",
    textColor: "text-slate-700",
  },
  {
    name: "Física",
    percent: 59,
    status: "Precisa revisar",
    color: "bg-slate-800",
    textColor: "text-slate-700",
  },
  {
    name: "Física",
    percent: 59,
    status: "Precisa revisar",
    color: "bg-slate-800",
    textColor: "text-slate-700",
  },
  {
    name: "Física",
    percent: 59,
    status: "Precisa revisar",
    color: "bg-slate-800",
    textColor: "text-slate-700",
  },
  {
    name: "Física",
    percent: 59,
    status: "Precisa revisar",
    color: "bg-slate-800",
    textColor: "text-slate-700",
  },
  
];

export const history = [
  {
    title: "Simulado de Matemática",
    date: "Último resultado",
    score: "740",
    percent: 74,
  },
  {
    title: "Simulado de Biologia",
    date: "Semana passada",
    score: "860",
    percent: 86,
  },
  {
    title: "Simulado de História",
    date: "Há 12 dias",
    score: "680",
    percent: 68,
  },
];

export const premiumInsights = [
  {
    title: "Prioridade da semana",
    description: "Revisar Física antes de avançar para simulados completos.",
    Icon: Sparkles,
  },
  {
    title: "Risco de queda",
    description: "Matemática pode cair se você ficar muitos dias sem revisar.",
    Icon: TrendingDown,
  },
  {
    title: "Meta sugerida",
    description: "Buscar acerto geral acima de 80% nos próximos simulados.",
    Icon: Brain,
  },
];
