import {
  ListChecks,
  Timer,
  Brain,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export const recursos = [
  {
    title: "Banco de questões",
    description:
      "Organização por matéria, banca, dificuldade, assunto e objetivo.",
    Icon: ListChecks,
  },
  {
    title: "Simulado cronometrado",
    description:
      "Experiência parecida com a prova real, mas com visual moderno.",
    Icon: Timer,
  },
  {
    title: "Revisão inteligente",
    description: "O sistema aponta quais conteúdos merecem mais atenção.",
    Icon: Brain,
  },
  {
    title: "Gestão de turmas",
    description: "Para cursinhos e colégios acompanharem grupos de alunos.",
    Icon: Users,
  },
  {
    title: "Relatórios visuais",
    description: "Indicadores simples, úteis e fáceis de apresentar.",
    Icon: BarChart3,
  },
  {
    title: "Área institucional",
    description: "Ambiente separado para coordenação, professores e gestores.",
    Icon: ShieldCheck,
  },
];
