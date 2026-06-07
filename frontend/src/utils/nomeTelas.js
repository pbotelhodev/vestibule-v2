export const pageTitles = {
  /* Página Inicial */
  OKhome: "Vestibule | Simulados inteligentes, desempenho por matéria e trilhas de estudo para evoluir com clareza", //Página inicial pública com a landing page comercial e foco em SEO
  OKnotFound: "Página não encontrada | Vestibule", // Página exibida quando a rota não existe
  OKlogin: "Entrar | Vestibule", // Página de login para alunos, instituições, professores ou admins acessarem a plataforma
  OKregister: "Criar conta | Vestibule", // Página de cadastro para aluno avulso criar sua conta
  forgotPassword: "Recuperar senha | Vestibule", // Página para iniciar o fluxo de recuperação de senha
  enterprise: "Instituições | Vestibule", // Página comercial para escolas, cursinhos e instituições conhecerem benefícios e solicitarem contato

  /* Pós cadastro */
  plans: "Escolha seu plano | Vestibule", // Página pós-cadastro onde o aluno escolhe seu plano antes de seguir para a plataforma

  /* Footer e Extras */
  support: "Suporte e ajuda | Vestibule", // Página de suporte com ajuda, dúvidas frequentes e orientações de uso
  termsAndPrivacy: "Termos e privacidade | Vestibule", // Página legal com termos de uso, política de privacidade e regras da plataforma
  about: "Sobre | Vestibule", // Página institucional contando o que é o Vestibule, proposta e visão do produto
  contact: "Contato | Vestibule", // Página de contato geral para dúvidas, suporte comercial ou mensagens institucionais

  /* Área do estudante */
  studentDashboard: "Painel do aluno | Vestibule", // Página inicial do painel do aluno com resumo, próximos simulados, desempenho geral e atalhos principais
  studentSimulations: "Simulados | Vestibule", // Página com todos os simulados disponíveis, filtros, categorias e histórico de simulados
  studentSimulation: "Simulado {nome ou id do simulado} | Vestibule", // Página onde o aluno realiza um simulado específico
  studentSimulationResult: "Resultado do simulado | Vestibule", // Página de resultado após finalizar um simulado, com acertos, erros, nota e análise por matéria
  studentPerformance: "Desempenho | Vestibule", // Página de análise do desempenho do aluno por matéria, período, simulado e evolução
  studentProfile: "Meu perfil | Vestibule", // Página com dados pessoais, informações da conta e preferências básicas do estudante
  studentSettings: "Configurações | Vestibule", // Página de configurações da conta, segurança, notificações e preferências
  //Implementar futuramente
  studentTrails: "Trilhas | Vestibule", // Página com todas as trilhas de estudo disponíveis para o aluno
  studentTrail: "Trilha {nome da trilha} | Vestibule", // Página de uma trilha específica com etapas, conteúdos e progresso
  studentEssays: "Redações | Vestibule", // Página futura para envio, histórico e correção de redações
  studentEssayCorrection: "Correção de redação | Vestibule", // Página futura com análise detalhada da redação corrigida

  /* Área da instituição */
  institutionDashboard: "Painel da instituição | Vestibule", // Dashboard principal da escola com resumo de turmas, alunos, professores, simulados e desempenho geral
  institutionClasses: "Turmas | Vestibule", // Página onde a instituição cria, edita, organiza e acessa suas turmas
  institutionClass: "Turma {nome ou id da turma} | Vestibule", // Página de uma turma específica com alunos, professores, simulados vinculados e desempenho da turma
  institutionStudents: "Alunos | Vestibule", // Página onde a instituição cadastra, edita, remove e acessa os alunos vinculados
  institutionStudent: "{Nome do aluno} - Ficha do aluno | Vestibule", // Ficha individual do aluno com dados, turma, desempenho, simulados feitos e informações úteis para a escola
  institutionTeachers: "Professores | Vestibule", // Página onde a instituição cadastra, edita, remove e acessa professores vinculados
  institutionTeacher: "Professor {nome do professor} | Vestibule", // Ficha individual do professor com dados, turmas vinculadas, permissões e configurações necessárias
  institutionSimulations: "Simulados da instituição | Vestibule", // Página onde a instituição cria, gerencia, agenda e acompanha simulados aplicados às turmas
  institutionSimulation: "Simulado {nome ou id do simulado} | Vestibule", // Página de um simulado específico com configurações, turmas participantes, status e resultados
  institutionReports: "Relatórios | Vestibule", // Página com relatórios gerais da instituição, desempenho por turma, aluno, matéria, período e simulado
  institutionPerformance: "Desempenho institucional | Vestibule", // Página focada em análise visual de desempenho geral da escola, turmas e evolução dos alunos
  institutionInvites: "Convites e acessos | Vestibule", // Página para gerar códigos, validar novos alunos, convites ou vínculos de acesso para alunos e professores
  institutionSettings: "Configurações da instituição | Vestibule", // Configurações do perfil institucional, dados da escola, permissões, administradores e preferências

  /* Área do professor */
  teacherDashboard: "Painel do professor | Vestibule", // Dashboard principal do professor com resumo das turmas, alunos, simulados aplicados e desempenho recente
  teacherClasses: "Minhas turmas | Vestibule", // Página onde o professor acessa as turmas vinculadas a ele
  teacherClass: "Turma {nome ou id da turma} | Vestibule", // Página de uma turma específica com alunos, simulados, desempenho e acompanhamento pedagógico
  teacherStudents: "Meus alunos | Vestibule", // Página onde o professor visualiza os alunos das suas turmas
  teacherStudent: "{Nome do aluno} - Acompanhamento | Vestibule", // Página individual do aluno com desempenho, evolução, simulados realizados e pontos de atenção
  teacherSimulations: "Simulados do professor | Vestibule", // Página onde o professor lista, cria, edita, agenda e gerencia simulados vinculados às suas turmas
  teacherSimulation: "Simulado {nome ou id do simulado} | Vestibule", // Página de um simulado específico com status, participantes, resultados e análise por questão ou matéria
  teacherReports: "Acompanhamento | Vestibule", // Página com relatórios pedagógicos, evolução das turmas, dificuldades recorrentes e desempenho por matéria
  teacherSettings: "Configurações do professor | Vestibule", // Página de preferências, dados do perfil e configurações básicas da conta do professor

    /* Área do Admin Master */
  adminDashboard: "Painel administrativo | Vestibule", // Dashboard principal do admin master com visão geral da plataforma, usuários, instituições, planos, simulados e operações internas
  adminUsers: "Usuários | Vestibule", // Página onde o admin visualiza e gerencia usuários gerais da plataforma, como alunos individuais, professores internos, admins e equipe
  adminUser: "{Nome do usuário} - Detalhes | Vestibule", // Página individual de um usuário geral com dados da conta, role, status, plano, histórico e ações administrativas
  adminStudents: "Alunos gerais | Vestibule", // Página para gerenciar alunos individuais da plataforma, sem vínculo com escolas ou instituições
  adminStudent: "{Nome do aluno} - Ficha do aluno | Vestibule", // Página individual de aluno geral com plano, desempenho, simulados feitos, status e dados da conta
  adminInstitutions: "Instituições | Vestibule", // Página onde o admin visualiza, cadastra, edita e gerencia instituições parceiras
  adminInstitution: "{Nome da instituição} | Vestibule", // Página individual de uma instituição com dados, plano, responsáveis, turmas, usuários vinculados e configurações administrativas
  adminInstitutionUsers: "Usuários da instituição | Vestibule", // Página para visualizar usuários vinculados a uma instituição sem interferir diretamente na gestão feita pela escola
  adminInstitutionStudents: "Alunos da instituição | Vestibule", // Página apenas para consulta administrativa dos alunos vinculados à instituição, sem gestão direta pela Vestibule
  adminSimulations: "Simulados oficiais | Vestibule", // Página onde o admin gerencia simulados oficiais da plataforma, publicados ou em preparação
  adminSimulation: "Simulado {nome ou id do simulado} | Vestibule", // Página de detalhes de um simulado oficial com status, matérias, autor, revisão e publicação
  adminSimulationSubmissions: "Simulados para aprovação | Vestibule", // Página onde a equipe interna envia simulados criados para revisão e aprovação antes de publicar
  adminSimulationSubmission: "Revisão do simulado {nome ou id do simulado} | Vestibule", // Página para revisar, aprovar, reprovar ou solicitar ajustes em um simulado criado pela equipe
  adminContentTeam: "Equipe de conteúdo | Vestibule", // Página para gerenciar pessoas da empresa responsáveis por criar simulados e conteúdos educacionais
  adminContentMember: "{Nome do colaborador} - Conteúdo | Vestibule", // Página individual de um membro da equipe com permissões, simulados criados, revisões e histórico
  adminPlans: "Planos e assinaturas | Vestibule", // Página para gerenciar planos, limites, recursos disponíveis e assinaturas dos alunos gerais e instituições
  adminReports: "Relatórios administrativos | Vestibule", // Página com métricas gerais da plataforma, uso, cadastros, instituições, simulados, aprovações e indicadores estratégicos
  adminSupport: "Atendimento e suporte | Vestibule", // Página para acompanhar solicitações, contatos, dúvidas e demandas enviadas por alunos, instituições e visitantes
  adminSettings: "Configurações do sistema | Vestibule", // Página de configurações globais da plataforma, permissões, parâmetros internos, integrações e ajustes administrativos
};
