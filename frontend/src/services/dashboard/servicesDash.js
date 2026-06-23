import {
  Calculator,
  Atom,
  Dna,
  FlaskConical,
  Zap,
  Globe2,
  Hourglass,
  Compass,
  Lightbulb,
  Users2,
  BookOpen,
  Library,
  Palette,
  FileText,
  BarChart3,
  Clock,
  TrendingUpIcon,
  Flame,
  AlertTriangle,
  Award,
  TrendingUp,
  TrendingDown, // Ícone padrão caso venha alguma matéria nova
} from "lucide-react";

export const average = (data = 0) => {
  if (data < 20) {
    return "Necessário revisão";
  } else if (data >= 20 && data < 40) {
    return "Abaixo da média geral";
  } else if (data >= 40 && data < 60) {
    return "Desempenho regular";
  } else if (data >= 60 && data < 70) {
    return "Dentro da média";
  } else if (data >= 70 && data < 80) {
    return "Bom desempenho";
  } else if (data >= 80 && data < 90) {
    return "Ótimo aproveitamento";
  } else if (data >= 90 && data <= 100) {
    return "Desempenho excelente!";
  }
};

export const proIcons = {
  Matemática: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    bar: "bg-blue-700",
    icon: Calculator,
  },
  "Ciências da Natureza": {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    bar: "bg-emerald-700",
    icon: Atom,
  },
  Biologia: {
    bg: "bg-green-50",
    text: "text-green-700",
    bar: "bg-green-700",
    icon: Dna,
  },
  Química: {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    bar: "bg-cyan-700",
    icon: FlaskConical,
  },
  Física: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    bar: "bg-indigo-700",
    icon: Zap,
  },
  "Ciências Humanas": {
    bg: "bg-purple-50",
    text: "text-purple-700",
    bar: "bg-purple-700",
    icon: Globe2,
  },
  História: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    bar: "bg-amber-700",
    icon: Hourglass,
  },
  Geografia: {
    bg: "bg-teal-50",
    text: "text-teal-700",
    bar: "bg-teal-700",
    icon: Compass,
  },
  Filosofia: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    bar: "bg-violet-700",
    icon: Lightbulb,
  },
  Sociologia: {
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-700",
    bar: "bg-fuchsia-700",
    icon: Users2,
  },
  Linguagens: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    bar: "bg-orange-700",
    icon: BookOpen,
  },
  Literatura: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    bar: "bg-rose-700",
    icon: Library,
  },
  Artes: {
    bg: "bg-pink-50",
    text: "text-pink-700",
    bar: "bg-pink-700",
    icon: Palette,
  },
  Redação: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    bar: "bg-yellow-600",
    icon: FileText,
  },
};

export const defaultStyle = {
  bg: "bg-slate-50",
  text: "text-slate-700",
  bar: "bg-slate-700",
  icon: BarChart3,
};

export const basePhrase = {
  naMedia: [
    "Sua taxa de acerto está dentro da sua média pessoal.",
    "Desempenho consistente com o seu momento atual de preparação.",
    "Mantendo o equilíbrio: você está exatamente na sua linha de média.",
  ],
  superandoMedia: [
    "Parabéns! Você está superando sua média geral nesta matéria.",
    "Excelente desempenho! Essa disciplina está puxando o seu resultado para cima.",
    "Ritmo forte aqui! Seu aproveitamento está acima do seu padrão atual.",
  ],
  estavel: [
    "Desempenho estável. Continue praticando para subir degraus maiores.",
    "Bons fundamentos estabelecidos. O segredo agora é constância nos exercícios.",
    "Equilíbrio ideal. Mantendo essa base, sua evolução será natural.",
  ],
};

export const getFastRead = (metrics) => {
  return [
    {
      icon: Clock,
      text: `${metrics.timeStudy} dedicados nos últimos 7 dias. Mantenha o ritmo!`,
    },
    {
      icon: Award,
      text: `${metrics.totalSimulations} simulados este mês. Continue praticando!`,
    },
    {
      icon: metrics.isPositive ? TrendingUp : TrendingDown,
      text: `Rendimento variou ${metrics.trendProjection}. ${metrics.trendTendence === "+" ? "Ótima evolução!" : "Foque na revisão."}`,
    },
    {
      icon: Flame,
      text: metrics.bigPercent
        ? `Seu topo é ${metrics.bigPercent.name} com ${metrics.bigPercent.percent}% de acertos.`
        : "Faça mais testes para descobrir sua melhor matéria.",
    },
    {
      icon: AlertTriangle,
      text: metrics.smallPercent
        ? `Atenção em ${metrics.smallPercent.name} (${metrics.smallPercent.percent}%). Faça uma revisão ainda hoje.`
        : "Monitore seus pontos fracos a cada novo simulado.",
    },
  ];
};
