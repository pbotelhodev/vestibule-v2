import { useLocation, useNavigate } from "react-router-dom";
import StudentSimulationResultContent from "../../components/student/studentSimulationResultContent";
import { useEffect, useState } from "react";
import { submitSimulationAnswers } from "../../services/simulations/serviceSimulations";

const visualStudent = {
  name: "Aluno Vestibule",
  planActive: "premium",
};

const visualResult = {
  id: "simulado-visual",
  title: "Resultado do Simulado",
  area: "Matemática",
  level: "Básico",
  totalQuestions: 8,
  estimatedTime: "40 min",
  finishedAt: "Hoje, 20:42",
  duration: "32 min",
  score: 720,
  percentage: 75,
  correctAnswers: 6,
  wrongAnswers: 2,
  reviewCount: 2,

  resultBySubject: [
    {
      id: "porcentagem",
      name: "Porcentagem",
      percentage: 100,
      correct: 1,
      total: 1,
    },
    {
      id: "geometria",
      name: "Geometria plana",
      percentage: 50,
      correct: 1,
      total: 2,
    },
    {
      id: "proporcao",
      name: "Razão e proporção",
      percentage: 100,
      correct: 1,
      total: 1,
    },
    {
      id: "funcao",
      name: "Função do 1º grau",
      percentage: 100,
      correct: 1,
      total: 1,
    },
    {
      id: "probabilidade",
      name: "Probabilidade",
      percentage: 100,
      correct: 1,
      total: 1,
    },
    {
      id: "regra-de-tres",
      name: "Regra de três",
      percentage: 50,
      correct: 1,
      total: 2,
    },
  ],

  questions: [
    {
      id: "q1",
      number: 1,
      subject: "Matemática",
      topic: "Porcentagem",
      statement:
        "Em uma escola, 240 alunos participaram de um simulado. Se 35% desses alunos acertaram uma questão de matemática, quantos alunos acertaram essa questão?",
      selectedAlternative: "d",
      correctAlternative: "d",
      selectedText: "84 alunos",
      correctText: "84 alunos",
      isCorrect: true,
      markedForReview: false,
    },
    {
      id: "q2",
      number: 2,
      subject: "Matemática",
      topic: "Geometria plana",
      statement:
        "Observe a imagem abaixo. Considerando que ela representa uma área retangular, qual alternativa indica corretamente a ideia de cálculo de área?",
      selectedAlternative: "a",
      correctAlternative: "b",
      selectedText: "Somar comprimento e largura.",
      correctText: "Multiplicar comprimento pela largura.",
      isCorrect: false,
      markedForReview: true,
    },
    {
      id: "q3",
      number: 3,
      subject: "Matemática",
      topic: "Razão e proporção",
      statement:
        "Uma receita utiliza 3 xícaras de farinha para cada 2 xícaras de leite. Mantendo a proporção, quantas xícaras de farinha serão necessárias para 6 xícaras de leite?",
      selectedAlternative: "d",
      correctAlternative: "d",
      selectedText: "9 xícaras",
      correctText: "9 xícaras",
      isCorrect: true,
      markedForReview: false,
    },
    {
      id: "q4",
      number: 4,
      subject: "Matemática",
      topic: "Interpretação de gráfico",
      statement:
        "A imagem abaixo representa visualmente uma situação de comparação de dados. Em questões desse tipo, qual habilidade é mais importante para encontrar a resposta correta?",
      selectedAlternative: "b",
      correctAlternative: "b",
      selectedText: "Comparar as informações visuais e identificar padrões.",
      correctText: "Comparar as informações visuais e identificar padrões.",
      isCorrect: true,
      markedForReview: false,
    },
    {
      id: "q5",
      number: 5,
      subject: "Matemática",
      topic: "Função do 1º grau",
      statement:
        "A função f(x) = 2x + 5 representa o custo, em reais, de uma pequena produção. Qual é o valor de f(10)?",
      selectedAlternative: "c",
      correctAlternative: "c",
      selectedText: "25",
      correctText: "25",
      isCorrect: true,
      markedForReview: false,
    },
    {
      id: "q6",
      number: 6,
      subject: "Matemática",
      topic: "Média aritmética",
      statement:
        "As notas de um aluno em quatro simulados foram 600, 640, 700 e 660. Qual foi a média dessas notas?",
      selectedAlternative: "b",
      correctAlternative: "b",
      selectedText: "650",
      correctText: "650",
      isCorrect: true,
      markedForReview: true,
    },
    {
      id: "q7",
      number: 7,
      subject: "Matemática",
      topic: "Probabilidade",
      statement:
        "A imagem abaixo representa uma situação com diferentes elementos. Em uma questão de probabilidade, o primeiro passo correto seria:",
      selectedAlternative: "a",
      correctAlternative: "a",
      selectedText: "Contar os casos possíveis e os casos favoráveis.",
      correctText: "Contar os casos possíveis e os casos favoráveis.",
      isCorrect: true,
      markedForReview: false,
    },
    {
      id: "q8",
      number: 8,
      subject: "Matemática",
      topic: "Regra de três",
      statement:
        "Se 5 máquinas produzem 100 peças em um dia, quantas peças 8 máquinas produzem no mesmo período, mantendo o mesmo ritmo?",
      selectedAlternative: "e",
      correctAlternative: "c",
      selectedText: "200 peças",
      correctText: "160 peças",
      isCorrect: false,
      markedForReview: false,
    },
  ],
};
const StudentSimulationResult = () => {
  const [result, setResult] = useState();
  const location = useLocation();
  const submission = location.state?.submission;
  const navigate = useNavigate()

  useEffect(() => {
    const submitData = async () => {
      const response = await submitSimulationAnswers(
        submission?.publicId,
        submission?.answers,
      );
      setResult(response);
      return response;
    };
    submitData();
  }, [submission.answers, submission.publicId]);
  return (
    <StudentSimulationResultContent
      student={visualStudent}
      result={visualResult}
      correction={result || []}
      submission={submission}
      onBackToSimulations={() => navigate(`/student/simulados`)}
      onReviewSimulation={() => {navigate(`/student/simulados/${submission.publicId}`);}}
    />
  );
};

export default StudentSimulationResult;
