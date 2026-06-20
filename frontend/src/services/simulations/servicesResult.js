import {
  AlertCircle,
  BookOpenCheck,
  CheckCircle2,
  Medal,
  Trophy,
} from "lucide-react";

export const planRank = {
  free: 1,
  pro: 2,
  premium: 3,
};

export const resultStatus = {
  outstanding: {
    label: "Resultado de alto nível",
    description:
      "Você teve um desempenho muito acima da média. O conteúdo foi bem dominado e seu resultado mostra consistência.",
    icon: Trophy,
    box: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },

  excellent: {
    label: "Excelente desempenho",
    description:
      "Você demonstrou ótimo domínio do conteúdo. Ainda há pequenos pontos de revisão, mas sua base está muito forte.",
    icon: Medal,
    box: "border-green-200 bg-green-50 text-green-700",
  },

  good: {
    label: "Bom caminho",
    description:
      "Seu resultado foi positivo. Agora o foco deve ser revisar os erros e fortalecer os assuntos com menor desempenho.",
    icon: CheckCircle2,
    box: "border-blue-100 bg-blue-50 text-blue-700",
  },

  attention: {
    label: "Atenção aos fundamentos",
    description:
      "O resultado mostra que alguns conteúdos importantes ainda precisam ser reforçados antes de avançar.",
    icon: AlertCircle,
    box: "border-amber-200 bg-amber-50 text-amber-700",
  },

  critical: {
    label: "Revisão necessária",
    description:
      "Este simulado indica dificuldades em pontos essenciais. Revise com calma, refaça as questões e priorize a base.",
    icon: BookOpenCheck,
    box: "border-rose-200 bg-rose-50 text-rose-700",
  },
};

export const dicMaterias = {
  matematica: "Matemática",
  portugues: "Português",
  historia: "História",
  geografia: "Geografia",
  ciencias: "Ciências",
  biologia: "Biologia",
  quimica: "Química",
  fisica: "Física",
  ingles: "Inglês",
  artes: "Artes",
  linguas: "Linguagens",
  literatura: "Literatura",
  espanhol: "Espanhol",
  geral: "Geral",
  "ciencias-humanas": "Ciências Humanas",
  "ciencias-natureza": "Ciências da Natureza",
  CIENCIAS_HUMANAS: "Ciências Humanas",
  CIENCIAS_NATUREZA: "Ciências da Natureza",
};


































































































































































































































































































