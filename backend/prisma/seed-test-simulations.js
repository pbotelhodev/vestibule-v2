const prisma = require("../src/db/prisma");

const simulations = [
  {
    publicId: "mat-482913-vest",
    title: "Fundamentos de Matemática",
    description:
      "Treine operações, porcentagem e interpretação numérica em questões rápidas.",
    subject: "MATEMATICA",
    requiredPlan: "FREE",
    timePerQuestion: 120,
    topics: ["Porcentagem", "Operações básicas", "Interpretação numérica"],
  },
  {
    publicId: "por-739251-vest",
    title: "Português Essencial",
    description:
      "Revise interpretação textual, classes gramaticais e sentido das palavras.",
    subject: "PORTUGUES",
    requiredPlan: "FREE",
    timePerQuestion: 120,
    topics: ["Interpretação", "Gramática", "Vocabulário"],
  },
  {
    publicId: "his-194628-vest",
    title: "História do Brasil Básica",
    description:
      "Questões introdutórias sobre períodos importantes da formação brasileira.",
    subject: "HISTORIA",
    requiredPlan: "FREE",
    timePerQuestion: 120,
    topics: ["Brasil Colônia", "Independência", "República"],
  },
  {
    publicId: "geo-628417-vest",
    title: "Geografia Geral",
    description:
      "Teste seus conhecimentos sobre clima, relevo e organização do espaço.",
    subject: "GEOGRAFIA",
    requiredPlan: "FREE",
    timePerQuestion: 120,
    topics: ["Clima", "Relevo", "Urbanização"],
  },
  {
    publicId: "ger-582410-vest",
    title: "Simulado Geral Introdutório",
    description:
      "Uma seleção rápida de questões variadas para testar seus conhecimentos.",
    subject: "GERAL",
    requiredPlan: "FREE",
    timePerQuestion: 120,
    topics: ["Conhecimentos gerais", "Interpretação", "Raciocínio"],
  },
  {
    publicId: "bio-371946-vest",
    title: "Biologia Celular",
    description: "Simulado curto sobre células, organelas e funções vitais.",
    subject: "BIOLOGIA",
    requiredPlan: "PRO",
    timePerQuestion: 150,
    topics: ["Células", "Organelas", "Metabolismo"],
  },
  {
    publicId: "fis-842193-vest",
    title: "Física: Movimento e Forças",
    description: "Treine conceitos de cinemática, dinâmica e unidades físicas.",
    subject: "FISICA",
    requiredPlan: "PRO",
    timePerQuestion: 150,
    topics: ["Cinemática", "Forças", "Unidades"],
  },
  {
    publicId: "qui-526381-vest",
    title: "Química Inicial",
    description: "Revise átomos, misturas, ligações e transformações químicas.",
    subject: "QUIMICA",
    requiredPlan: "PRO",
    timePerQuestion: 150,
    topics: ["Átomos", "Misturas", "Ligações químicas"],
  },
  {
    publicId: "ing-918274-vest",
    title: "Inglês Instrumental",
    description:
      "Pratique leitura, vocabulário e interpretação em língua inglesa.",
    subject: "INGLES",
    requiredPlan: "PRO",
    timePerQuestion: 120,
    topics: ["Reading", "Vocabulary", "Context"],
  },
  {
    publicId: "lit-463729-vest",
    title: "Literatura Brasileira",
    description:
      "Questões sobre escolas literárias, autores e interpretação literária.",
    subject: "LITERATURA",
    requiredPlan: "PRO",
    timePerQuestion: 120,
    topics: ["Romantismo", "Modernismo", "Interpretação literária"],
  },
  {
    publicId: "nat-284619-vest",
    title: "Ciências da Natureza Integrado",
    description:
      "Simulado integrado com biologia, física e química em nível premium.",
    subject: "CIENCIAS_NATUREZA",
    requiredPlan: "PREMIUM",
    timePerQuestion: 180,
    topics: ["Energia", "Matéria", "Vida"],
  },
  {
    publicId: "hum-751938-vest",
    title: "Ciências Humanas Integrado",
    description:
      "Treine história, geografia, sociedade e interpretação de contexto.",
    subject: "CIENCIAS_HUMANAS",
    requiredPlan: "PREMIUM",
    timePerQuestion: 180,
    topics: ["Sociedade", "Território", "Cidadania"],
  },
  {
    publicId: "esp-635914-vest",
    title: "Espanhol para Vestibulares",
    description: "Pratique leitura e interpretação básica em língua espanhola.",
    subject: "ESPANHOL",
    requiredPlan: "PREMIUM",
    timePerQuestion: 120,
    topics: ["Lectura", "Vocabulario", "Interpretación"],
  },
  {
    publicId: "art-427836-vest",
    title: "Artes e Linguagens",
    description: "Questões sobre arte, cultura visual e movimentos artísticos.",
    subject: "ARTES",
    requiredPlan: "PREMIUM",
    timePerQuestion: 120,
    topics: ["Arte moderna", "Cultura visual", "Movimentos artísticos"],
  },
];

function buildQuestions(simulation) {
  return simulation.topics.map((topic, index) => {
    const questionOrder = index + 1;
    const correctOrder = (index % 4) + 1;

    return {
      statement: `Questão ${questionOrder} de ${simulation.title}: escolha a alternativa correta sobre ${topic}.`,
      subject: simulation.subject,
      topic,
      order: questionOrder,
      alternatives: {
        create: [1, 2, 3, 4].map((optionOrder) => ({
          text:
            optionOrder === correctOrder
              ? `Alternativa ${optionOrder} - correta para teste`
              : `Alternativa ${optionOrder} - opção de teste`,
          isCorrect: optionOrder === correctOrder,
          order: optionOrder,
        })),
      },
    };
  });
}

async function main() {
  const publicIds = simulations.map((simulation) => simulation.publicId);

  await prisma.studentSimulationResult.deleteMany({
    where: {
      publicId: {
        in: publicIds,
      },
    },
  });

  await prisma.simulation.deleteMany({
    where: {
      publicId: {
        in: publicIds,
      },
    },
  });

  for (const simulation of simulations) {
    await prisma.simulation.create({
      data: {
        publicId: simulation.publicId,
        title: simulation.title,
        description: simulation.description,
        subject: simulation.subject,
        originCode: "vest",
        requiredPlan: simulation.requiredPlan,
        timePerQuestion: simulation.timePerQuestion,
        isPublished: true,
        questions: {
          create: buildQuestions(simulation),
        },
      },
    });
  }

  console.log("Seed de teste finalizado: 14 simulados criados.");
}

main()
  .catch((error) => {
    console.error("Erro ao rodar seed de teste:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
