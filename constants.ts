import { ServiceData, Testimonial, NavLink } from './types';

export const COMPANY_INFO = {
  name: "Nexus Contabilidade Digital",
  phone: "(11) 99999-8888",
  email: "contato@nexuscontabil.com.br",
  address: "Av. Paulista, 1000, Sala 42 - São Paulo, SP",
  whatsappLink: "https://wa.me/5511999998888",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { 
    label: "Serviços", 
    path: "/servicos",
    subLinks: [
      { label: "Abertura de Empresa", path: "/servicos/abertura-de-empresa" },
      { label: "Contabilidade Mensal", path: "/servicos/contabilidade-mensal" },
      { label: "Folha de Pagamento", path: "/servicos/folha-de-pagamento" },
      { label: "Consultoria Tributária", path: "/servicos/consultoria-tributaria" },
      { label: "Troca de Contador", path: "/servicos/troca-de-contador" },
    ]
  },
  { label: "Como Funciona", path: "/como-funciona" },
  { label: "Contato", path: "/contato" },
];

export const SERVICES: Record<string, ServiceData> = {
  "abertura-de-empresa": {
    id: "abertura-de-empresa",
    title: "Abertura de Empresa Grátis",
    subtitle: "Tire seu sonho do papel sem burocracia e sem custos de honorários.",
    iconName: "Briefcase",
    shortDescription: "Processo 100% digital para formalizar seu negócio em tempo recorde.",
    fullDescription: "Abrir uma empresa no Brasil pode parecer complexo, mas na Nexus nós simplificamos tudo. Nós cuidamos de toda a parte burocrática, desde a consulta de viabilidade até a emissão do CNPJ e Inscrição Municipal. Para clientes que fecham o plano anual de contabilidade, os honorários de abertura são gratuitos.",
    benefits: [
      "Emissão de CNPJ em até 48 horas (dependendo da cidade)",
      "Enquadramento tributário otimizado (Simples Nacional ou Presumido)",
      "Sem necessidade de deslocamento físico",
      "Orientação completa sobre alvarás e licenças"
    ],
    processSteps: [
      { title: "1. Cadastro", description: "Preencha nosso formulário online com os dados dos sócios e da atividade." },
      { title: "2. Documentação", description: "Envie fotos do RG, CPF e comprovante de endereço pelo nosso portal seguro." },
      { title: "3. Processamento", description: "Nossa equipe protocola os pedidos na Junta Comercial e Receita Federal." },
      { title: "4. Empresa Aberta", description: "Receba seu CNPJ, contrato social e acesso ao sistema de notas fiscais." }
    ],
    faqs: [
      { question: "Quanto tempo demora?", answer: "Em média, 3 a 5 dias úteis para ter o CNPJ ativo." },
      { question: "Preciso de sócio?", answer: "Não. É possível abrir uma SLU (Sociedade Limitada Unipersonal) sozinho." },
      { question: "Quais os custos do governo?", answer: "As taxas da Junta Comercial variam por estado, custando em média R$ 150 a R$ 300." },
      { question: "Posso usar endereço residencial?", answer: "Para prestadores de serviço, geralmente sim. Oferecemos também serviço de Sede Virtual." }
    ]
  },
  "contabilidade-mensal": {
    id: "contabilidade-mensal",
    title: "Contabilidade Mensal Completa",
    subtitle: "Mantenha sua empresa regularizada com atendimento humanizado e tecnologia.",
    iconName: "Calculator",
    shortDescription: "Gestão fiscal e contábil completa para sua tranquilidade.",
    fullDescription: "Nossa contabilidade mensal vai além de gerar guias de impostos. Nós monitoramos a saúde financeira da sua empresa, garantimos a conformidade com todas as obrigações acessórias (SPED, DCTF, etc.) e fornecemos relatórios gerenciais claros para sua tomada de decisão.",
    benefits: [
      "Atendimento rápido via WhatsApp e E-mail",
      "Plataforma online para gestão de documentos",
      "Cálculo e envio de todos os impostos",
      "Balanços e DREs sempre em dia"
    ],
    processSteps: [
      { title: "1. Importação", description: "Importamos automaticamente suas notas fiscais e extratos bancários." },
      { title: "2. Apuração", description: "Nosso sistema, revisado por especialistas, apura os impostos devidos." },
      { title: "3. Entrega", description: "Você recebe as guias de pagamento e relatórios até o dia 05 de cada mês." },
      { title: "4. Suporte", description: "Dúvidas do dia a dia são resolvidas rapidamente por nossa equipe." }
    ],
    faqs: [
      { question: "Atendem Lucro Presumido?", answer: "Sim, atendemos Simples Nacional e Lucro Presumido." },
      { question: "Como envio os documentos?", answer: "Tudo é feito pela nossa plataforma web ou aplicativo exclusivo." },
      { question: "Tenho suporte ilimitado?", answer: "Sim, nosso time está disponível em horário comercial para tirar todas as dúvidas." },
      { question: "Está incluso Pró-labore?", answer: "Sim, o cálculo do Pró-labore dos sócios já está incluso na mensalidade." }
    ]
  },
  "folha-de-pagamento": {
    id: "folha-de-pagamento",
    title: "Gestão de Folha de Pagamento",
    subtitle: "Segurança jurídica na relação com seus colaboradores.",
    iconName: "Users",
    shortDescription: "Cálculos trabalhistas, admissões e demissões sem erros.",
    fullDescription: "Evite processos trabalhistas com uma gestão de folha de pagamento impecável. Cuidamos de todo o ciclo de vida do funcionário, desde a admissão, processamento mensal de holerites, férias, 13º salário, até o processo de rescisão, tudo conforme a CLT e eSocial.",
    benefits: [
      "Envio completo dos eventos do eSocial",
      "Cálculo automático de horas extras e adicionais",
      "Controle de férias e benefícios",
      "Holerites digitais enviados diretamente aos funcionários"
    ],
    processSteps: [
      { title: "1. Movimentação", description: "Você informa as variáveis do mês (faltas, comissões) pela plataforma." },
      { title: "2. Processamento", description: "Calculamos a folha, encargos (FGTS, INSS) e geramos os arquivos." },
      { title: "3. Conferência", description: "Dupla checagem para garantir precisão nos cálculos." },
      { title: "4. Disponibilização", description: "Documentos prontos para pagamento e assinatura digital." }
    ],
    faqs: [
      { question: "Faz admissão digital?", answer: "Sim, o processo é 100% online, sem papelada física." },
      { question: "Como funciona o eSocial?", answer: "Nós cuidamos de 100% das transmissões obrigatórias para o governo." },
      { question: "Atendem domésticas?", answer: "Sim, temos um plano específico para eSocial Doméstico." },
      { question: "Calculam rescisão?", answer: "Sim, fazemos todo o cálculo rescisório e documentação necessária." }
    ]
  },
  "consultoria-tributaria": {
    id: "consultoria-tributaria",
    title: "Consultoria e Planejamento Tributário",
    subtitle: "Pague menos impostos dentro da lei.",
    iconName: "TrendingUp",
    shortDescription: "Análise estratégica para reduzir sua carga tributária legalmente.",
    fullDescription: "Muitas empresas pagam mais impostos do que deveriam por estarem no regime errado ou não aproveitarem benefícios fiscais. Nossa consultoria analisa profundamente sua operação para encontrar oportunidades de elisão fiscal lícita, recuperando créditos e otimizando o fluxo de caixa.",
    benefits: [
      "Estudo comparativo (Simples x Presumido x Real)",
      "Revisão de NCMs e alíquotas de produtos",
      "Recuperação de impostos pagos a maior",
      "Planejamento anual estratégico"
    ],
    processSteps: [
      { title: "1. Diagnóstico", description: "Levantamento dos dados financeiros e fiscais dos últimos 12 meses." },
      { title: "2. Análise", description: "Cruzamento de dados e simulação de cenários tributários." },
      { title: "3. Plano de Ação", description: "Apresentação das estratégias de economia e correções necessárias." },
      { title: "4. Implementação", description: "Acompanhamento da execução das mudanças propostas." }
    ],
    faqs: [
      { question: "É seguro mudar de regime?", answer: "Sim, desde que feito com base técnica e nos prazos legais (geralmente em Janeiro)." },
      { question: "Quanto posso economizar?", answer: "Varia caso a caso, mas clientes já economizaram até 30% da carga tributária." },
      { question: "Vocês fazem BPO Financeiro?", answer: "Sim, podemos assumir também a gestão financeira como serviço adicional." },
      { question: "Serve para E-commerce?", answer: "Sim, somos especialistas em tributação para vendas online e marketplaces." }
    ]
  },
  "troca-de-contador": {
    id: "troca-de-contador",
    title: "Troca de Contador",
    subtitle: "Migração tranquila, sem perder o histórico da sua empresa.",
    iconName: "RefreshCw",
    shortDescription: "Traga sua empresa para a Nexus sem dor de cabeça.",
    fullDescription: "Está insatisfeito com seu contador atual? A migração para a Nexus é simples. Nós entramos em contato com seu antigo contador, solicitamos toda a documentação técnica e fazemos a transferência de responsabilidade. Você não precisa se indispor, nós resolvemos tudo.",
    benefits: [
      "Nós falamos com seu antigo contador por você",
      "Auditoria inicial gratuita do cadastro fiscal",
      "Sem taxa de adesão para migração",
      "Setup completo na nossa plataforma"
    ],
    processSteps: [
      { title: "1. Aceite", description: "Você assina nossa proposta e nos autoriza a prosseguir." },
      { title: "2. Comunicação", description: "Notificamos o contador anterior e solicitamos o distrato." },
      { title: "3. Transferência", description: "Recebemos o backup contábil e fiscal e importamos para o sistema." },
      { title: "4. Onboarding", description: "Treinamos você e sua equipe para usar nossa plataforma digital." }
    ],
    faqs: [
      { question: "Posso trocar a qualquer momento?", answer: "Sim, a troca pode ser feita em qualquer mês do ano." },
      { question: "Perco meus dados antigos?", answer: "Não, o contador anterior é obrigado por lei a fornecer todos os arquivos." },
      { question: "Existe multa?", answer: "Verifique o contrato com seu atual prestador. Conosco não há fidelidade." },
      { question: "Quanto tempo demora?", answer: "A transição completa leva cerca de 20 dias, mas você já opera conosco desde o dia 1." }
    ]
  },
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Roberto Silva",
    company: "Tech Solutions Ltda",
    text: "A Nexus mudou a forma como vejo a contabilidade. Tudo é muito rápido e transparente. A equipe sempre responde minhas dúvidas no WhatsApp em minutos.",
    image: "https://picsum.photos/id/1005/100/100"
  },
  {
    name: "Fernanda Oliveira",
    company: "Agência Criativa",
    text: "Abrir minha empresa com eles foi super tranquilo. Não precisei ir a nenhum cartório. Recomendo para quem quer agilidade.",
    image: "https://picsum.photos/id/1027/100/100"
  },
  {
    name: "Carlos Mendes",
    company: "Mendes Engenharia",
    text: "A consultoria tributária deles me fez economizar mais de 2 mil reais por mês. São profissionais extremamente competentes.",
    image: "https://picsum.photos/id/1012/100/100"
  }
];
