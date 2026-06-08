/* Const Tools */

/* Const Assets */

/* Const components */
import { useMemo } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

import StudentSimulationContent from "../../components/student/studentSimulationContent";

const fakeSimulations = [
  {
    id: "enem-matematica-basico",
    title: "Simulado ENEM: Matemática Básica",
    area: "Matemática",
    level: "Básico",
    totalQuestions: 8,
    estimatedTime: "40 min",
    requiredPlan: "free",
    questions: [
      {
        id: "q1",
        subject: "Matemática",
        topic: "Porcentagem",
        statement:
          "Em uma escola, 240 alunos participaram de um simulado. Se 35% desses alunos acertaram uma questão de matemática, quantos alunos acertaram essa questão?",
        image: null,
        imageAlt: "",
        imageCaption: "",
        alternatives: [
          { id: "a", text: "72 alunos" },
          { id: "b", text: "76 alunos" },
          { id: "c", text: "80 alunos" },
          { id: "d", text: "84 alunos" },
          { id: "e", text: "90 alunos" },
        ],
      },
      {
        id: "q2",
        subject: "Matemática",
        topic: "Geometria plana",
        statement:
          "Observe a imagem abaixo. Considerando que ela representa uma área retangular, qual alternativa indica corretamente a ideia de cálculo de área?",
        image: "https://picsum.photos/seed/vestibule-geometria/900/420",
        imageAlt: "Imagem ilustrativa usada em uma questão de geometria.",
        imageCaption: "Imagem ilustrativa carregada da internet.",
        alternatives: [
          { id: "a", text: "Somar comprimento e largura." },
          { id: "b", text: "Multiplicar comprimento pela largura." },
          { id: "c", text: "Dividir comprimento pela largura." },
          { id: "d", text: "Subtrair a largura do comprimento." },
          { id: "e", text: "Multiplicar apenas a largura por 2." },
        ],
      },
      {
        id: "q3",
        subject: "Matemática",
        topic: "Razão e proporção",
        statement:
          "Uma receita utiliza 3 xícaras de farinha para cada 2 xícaras de leite. Mantendo a proporção, quantas xícaras de farinha serão necessárias para 6 xícaras de leite?",
        image: null,
        imageAlt: "",
        imageCaption: "",
        alternatives: [
          { id: "a", text: "6 xícaras" },
          { id: "b", text: "7 xícaras" },
          { id: "c", text: "8 xícaras" },
          { id: "d", text: "9 xícaras" },
          { id: "e", text: "12 xícaras" },
        ],
      },
      {
        id: "q4",
        subject: "Matemática",
        topic: "Interpretação de gráfico",
        statement:
          "A imagem abaixo representa visualmente uma situação de comparação de dados. Em questões desse tipo, qual habilidade é mais importante para encontrar a resposta correta?",
        image: "https://picsum.photos/seed/vestibule-grafico/900/420",
        imageAlt:
          "Imagem ilustrativa usada em uma questão de interpretação de dados.",
        imageCaption: "Imagem ilustrativa carregada da internet.",
        alternatives: [
          { id: "a", text: "Ignorar os valores apresentados." },
          {
            id: "b",
            text: "Comparar as informações visuais e identificar padrões.",
          },
          { id: "c", text: "Escolher sempre o maior número da questão." },
          { id: "d", text: "Responder sem observar a imagem." },
          { id: "e", text: "Usar apenas o título da questão." },
        ],
      },
      {
        id: "q5",
        subject: "Matemática",
        topic: "Função do 1º grau",
        statement:
          "A função f(x) = 2x + 5 representa o custo, em reais, de uma pequena produção. Qual é o valor de f(10)?",
        image: null,
        imageAlt: "",
        imageCaption: "",
        alternatives: [
          { id: "a", text: "15" },
          { id: "b", text: "20" },
          { id: "c", text: "25" },
          { id: "d", text: "30" },
          { id: "e", text: "35" },
        ],
      },
      {
        id: "q6",
        subject: "Matemática",
        topic: "Média aritmética",
        statement:
          "As notas de um aluno em quatro simulados foram 600, 640, 700 e 660. Qual foi a média dessas notas?",
        image: null,
        imageAlt: "",
        imageCaption: "",
        alternatives: [
          { id: "a", text: "640" },
          { id: "b", text: "650" },
          { id: "c", text: "660" },
          { id: "d", text: "670" },
          { id: "e", text: "680" },
        ],
      },
      {
        id: "q7",
        subject: "Matemática",
        topic: "Probabilidade",
        statement:
          "A imagem abaixo representa uma situação com diferentes elementos. Em uma questão de probabilidade, o primeiro passo correto seria:",
        image: "https://picsum.photos/seed/vestibule-probabilidade/900/420",
        imageAlt: "Imagem ilustrativa usada em uma questão de probabilidade.",
        imageCaption: "Imagem ilustrativa carregada da internet.",
        alternatives: [
          { id: "a", text: "Contar os casos possíveis e os casos favoráveis." },
          { id: "b", text: "Escolher a alternativa visualmente maior." },
          { id: "c", text: "Ignorar a quantidade total de elementos." },
          { id: "d", text: "Somar todos os textos da questão." },
          { id: "e", text: "Responder sem analisar os dados." },
        ],
      },
      {
        id: "q8",
        subject: "Matemática",
        topic: "Regra de três",
        statement:
          "Se 5 máquinas produzem 100 peças em um dia, quantas peças 8 máquinas produzem no mesmo período, mantendo o mesmo ritmo?",
        image: null,
        imageAlt: "",
        imageCaption: "",
        alternatives: [
          { id: "a", text: "120 peças" },
          { id: "b", text: "140 peças" },
          { id: "c", text: "160 peças" },
          { id: "d", text: "180 peças" },
          { id: "e", text: "200 peças" },
        ],
      },
    ],
  },
];

const StudentSimulationPage = () => {
  const { simulationId } = useParams();
  const navigate = useNavigate();
  const outletContext = useOutletContext();

  const student = outletContext?.student ?? {
    name: "Aluno Vestibule",
    plan: "free",
  };

  const simulation = useMemo(() => {
    return (
      fakeSimulations.find((item) => item.id === simulationId) ??
      fakeSimulations[0]
    );
  }, [simulationId]);

  const handleFinishSimulation = () => {
    navigate(`/student/simulados/${simulation.id}/resultado`);
  };

  return (
    <StudentSimulationContent
      student={student}
      simulation={simulation}
      onFinishSimulation={handleFinishSimulation}
    />
  );
};

export default StudentSimulationPage;

