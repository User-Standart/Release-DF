import type { LandingContent } from '../../application';
import type { Expense } from '../../domain';
import { siteLinks } from '../config/siteLinks';

// Real screenshots of the app, served from /public/screens. Relative
// paths, so they work under the GitHub Pages sub-path too.
const screenshots = {
  income: 'screens/income.jpg',
  goals: 'screens/goals.jpg',
  quickEntry: 'screens/quickEntry.jpg',
  expenses: 'screens/expenses.jpg',
  monthClose: 'screens/monthClose.jpg',
};

const GROSS_OF_THE_DAY_IN_CENTS = 35_000;

const visibleDailyCosts: readonly Expense[] = [
  { label: 'Combustível (Tanque do dia)', amountInCents: 11_500 },
  { label: 'Almoço na rua & Café', amountInCents: 2_800 },
  { label: 'Pedágio ou Estacionamento', amountInCents: 955 },
];

// A maintenance cost the driver pays but rarely counts against the day:
// the app includes it because it is logged as an expense (category
// "Manutenção"), not because it estimates wear.
const vehicleWear: Expense = {
  label: 'Manutenção (troca de óleo do mês)',
  amountInCents: 3_600,
  isHiddenCost: true,
};

export const landingContent: LandingContent = {
  links: siteLinks,

  navigation: [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Comparativo', href: '#comparativo' },
    { label: 'Planos', href: '#planos' },
    { label: 'Como Instalar', href: '#como-instalar' },
  ],

  hero: {
    badge: 'Desenvolvido para Uber, 99 & Entregadores',
    title: 'Controle seu dinheiro.',
    highlight: 'A gente calcula o seu lucro real.',
    description:
      'Chega de se iludir com o faturamento bruto que o aplicativo mostra. Saiba na hora quanto realmente sobra no seu bolso descontando combustível, alimentação, taxas e manutenção — e quanto custa cada quilômetro.',
    primaryCta: 'Baixar grátis — 14 dias',
    secondaryCta: 'Nosso manifesto',
    highlights: [
      { icon: 'offline_pin', title: '100% Offline', caption: 'Funciona até sem sinal' },
      { icon: 'lock', title: 'Seus dados, seu celular', caption: 'Nada vendido, zero anúncio' },
    ],
    dashboard: {
      today: {
        grossInCents: GROSS_OF_THE_DAY_IN_CENTS,
        expenses: [{ label: 'Custos', amountInCents: 13_550 }],
      },
      averagePerHourInCents: 3_280,
      chartHours: ['06:00', '10:00', '14:00', '18:00', '22:00'],
    },
    phoneScreenshot: {
      src: screenshots.income,
      alt: 'Aplicativo DirigeFácil exibindo a tela de entradas financeiras para motoristas',
    },
  },

  benefits: [
    { icon: 'electric_bolt', label: '18 MB Leve e ágil' },
    { icon: 'block', label: 'Zero Propagandas' },
    { icon: 'credit_card_off', label: 'Sem pedir cartão' },
    { icon: 'handshake', label: 'Feito para a rua' },
  ],

  comparison: {
    eyebrow: 'A Realidade das Plataformas',
    title: 'Você faturou R$ 350 hoje. Mas quanto realmente é seu?',
    description:
      'Os aplicativos de corrida mostram números grandes para te manter no trânsito. O DirigeFácil mostra o que sobra de verdade depois de abastecer, almoçar e pagar a manutenção.',
    dividerLabel: 'Clareza Total',
    illusion: {
      title: 'A Ilusão do App',
      badge: 'Sem controle',
      grossLabel: 'Faturamento aparente (Uber/99)',
      resultLabel: 'O que sobra no bolso:',
      earnings: {
        grossInCents: GROSS_OF_THE_DAY_IN_CENTS,
        expenses: [...visibleDailyCosts, vehicleWear],
        hoursWorked: 11,
      },
    },
    clarity: {
      ribbon: 'Com DirigeFácil',
      title: 'Gestão de Lucro Limpo',
      periodLabel: 'Resultado do Mês',
      periodName: 'Setembro',
      costPerKmInCents: 15,
      exportHint: 'Pronto para exportar ao contador',
      exportAction: 'Copiar Resumo',
      earnings: {
        grossInCents: GROSS_OF_THE_DAY_IN_CENTS,
        expenses: visibleDailyCosts,
      },
    },
  },

  features: {
    eyebrow: 'Telas Reais • Sem Maquiagem',
    title: 'Projetado para usar no suporte do painel, com uma mão só',
    description:
      'Sem telas complexas, sem letras miúdas. Números grandes legíveis sob a luz do sol do meio-dia e botões que você aperta sem errar.',
    items: [
      {
        icon: 'flag',
        tone: 'income',
        title: 'Metas Inteligentes',
        description: 'Saiba exatamente quantas corridas faltam para atingir sua meta do dia.',
        screenshot: {
          src: screenshots.goals,
          alt: 'Tela de Metas do aplicativo DirigeFácil com barra de progresso diária, semanal e mensal',
        },
      },
      {
        icon: 'add_circle',
        tone: 'ink',
        title: 'Entrada com 2 Toques',
        description: 'Identifique corridas de Uber, 99, Indrive ou corridas particulares num relance.',
        screenshot: {
          src: screenshots.quickEntry,
          alt: 'Tela de Entradas do DirigeFácil com registro de corrida particular de R$ 100,00',
        },
      },
      {
        icon: 'local_gas_station',
        tone: 'expense',
        title: 'Controle de Gastos',
        description: 'Alimentação, gasolina, pedágio e estacionamento categorizados na hora.',
        screenshot: {
          src: screenshots.expenses,
          alt: 'Tela de Gastos do aplicativo mostrando despesas com alimentação e estacionamento',
        },
      },
      {
        icon: 'receipt_long',
        tone: 'neutral',
        title: 'Fechamento do Mês',
        description: 'Copie o relatório pronto com 1 clique para WhatsApp, banco ou declaração de MEI.',
        screenshot: {
          src: screenshots.monthClose,
          alt: 'Tela de Fechamento de Mês com margem líquida, dias trabalhados e custo por km',
        },
      },
    ],
    spotlight: {
      icon: 'speed',
      title: 'Cálculo de Custo por Quilômetro Rodado',
      description:
        'Basta informar o odômetro ao sair de casa e ao voltar. O DirigeFácil calcula se aquela corrida longa realmente compensou ou se você apenas pagou para trabalhar.',
      cta: 'Experimentar sem cadastro',
    },
  },

  pricing: {
    eyebrow: 'Condição Especial de Lançamento',
    title: 'Planos transparentes. Menos de R$ 0,11 por dia.',
    description:
      'Teste por 14 dias sem compromisso. Se não gostar, não paga nada e seus registros continuam salvos no seu aparelho.',
    guarantee: 'Se não assinar após 14 dias, nada é apagado. Seu histórico continua no seu aparelho.',
    plans: [
      {
        id: 'monthly',
        name: 'Mensal',
        tagline: 'Flexibilidade',
        priceInCents: 990,
        billingPeriod: 'month',
        summary: 'Ideal para testar no dia a dia da rua sem amarras.',
        perks: [
          { label: 'Tudo liberado, sem limite' },
          { label: 'Backup diário na nuvem' },
          { label: 'Pagamento único, sem renovação automática' },
        ],
        ctaLabel: 'Assinar Mensal',
      },
      {
        id: 'quarterly',
        name: 'Trimestral',
        tagline: 'Trimestre',
        priceInCents: 2_490,
        billingPeriod: 'quarter',
        summary: 'Economize 16% em relação ao plano mensal avulso.',
        perks: [
          { label: 'Tudo liberado, sem limite' },
          { label: 'Backup diário na nuvem' },
          { label: 'Pagamento único por 3 meses' },
        ],
        ctaLabel: 'Assinar Trimestral',
      },
      {
        id: 'founder',
        name: 'Anual Fundador',
        tagline: 'Mais Vantajoso',
        priceInCents: 3_990,
        billingPeriod: 'year',
        summary: 'Apenas R$ 3,32 ao mês — e o mesmo preço toda vez que renovar',
        perks: [
          { label: 'Preço de fundador garantido nas renovações', isHighlighted: true },
          { label: 'Tudo liberado, sem limite' },
          { label: 'Backup diário na nuvem' },
          { label: 'Só para os 100 primeiros' },
        ],
        ctaLabel: 'Garantir Vaga de Fundador',
        featured: {
          ribbon: '★ Oferta Fundador (100 vagas) ★',
        },
      },
      {
        id: 'yearly',
        name: 'Anual Padrão',
        tagline: 'Tradicional',
        priceInCents: 5_990,
        billingPeriod: 'year',
        summary: 'Equivale a R$ 4,99 por mês. Pagamento único por 12 meses.',
        perks: [
          { label: 'Tudo liberado, sem limite' },
          { label: 'Backup diário na nuvem' },
          { label: 'Relatório do mês para o contador' },
        ],
        ctaLabel: 'Assinar Anual Padrão',
      },
    ],
  },

  install: {
    eyebrow: 'Sem Burocracia',
    title: 'Como instalar em menos de 1 minuto',
    description:
      'O DirigeFácil ainda não está na Play Store, então você baixa direto daqui. São uns 20 MB.',
    steps: [
      {
        title: 'Baixe o Arquivo',
        description: "Toque no botão 'Baixar grátis'. O download (uns 20 MB) começa na hora.",
      },
      {
        title: 'Abra o Download',
        description: 'Puxe a barra de notificações do seu celular e clique no arquivo baixado.',
      },
      {
        title: 'Permita a Fonte',
        description:
          "O Android vai pedir permissão: toque em 'Configurações' e ligue 'Permitir desta fonte'. Se aparecer o aviso do Play Protect, toque em 'Instalar mesmo assim' — ele aparece para todo app de fora da loja.",
      },
      {
        title: 'Conclua e Rode!',
        description:
          'Pronto! Abra o DirigeFácil, coloque sua meta de hoje e comece a lucrar de verdade.',
      },
    ],
    help: {
      title: 'Ficou com alguma dúvida na instalação?',
      description: 'Mande sua dúvida por email que a gente responde e te ajuda a instalar.',
      cta: 'Falar com o suporte',
    },
  },

  faq: {
    eyebrow: 'Perguntas Frequentes',
    title: 'Tudo o que você precisa saber',
    items: [
      {
        question: 'O aplicativo funciona sem sinal de internet (offline)?',
        answer:
          'Sim! O DirigeFácil foi concebido exatamente para a realidade das ruas brasileiras. Você pode registrar suas corridas, paradas no posto e despesas mesmo sem pacote de dados ou em túneis e garagens subterrâneas.',
      },
      {
        question: 'Preciso colocar dados de cartão para os 14 dias de teste?',
        answer:
          'Não! Acreditamos no respeito ao motorista. Você baixa, usa todas as ferramentas por 14 dias e só assina se realmente notar a diferença no seu bolso.',
      },
      {
        question: 'E se eu trocar de celular, perco meus lançamentos?',
        answer:
          'Não. Com uma conta criada e o acesso ativo, o app faz uma cópia de segurança na nuvem todo dia. No celular novo, é só entrar na mesma conta e restaurar. Você também pode baixar um arquivo com todos os seus dados quando quiser.',
      },
      {
        question: 'Ele puxa meus ganhos da Uber, 99 ou iFood sozinho?',
        answer:
          'Não. Nenhum app de fora consegue ler os ganhos dessas plataformas. Você lança cada ganho em dois toques — é rápido, e é o que deixa o número certo.',
      },
      {
        question: 'O que acontece quando os 14 dias acabam?',
        answer:
          'Nada é apagado. O app continua abrindo e mostrando tudo que você lançou; só não dá para lançar coisa nova até assinar. Não existe cobrança automática.',
      },
      {
        question: 'É seguro instalar fora da Play Store?',
        answer:
          'Sim, desde que você baixe por este site. O aviso do Android aparece para qualquer app de fora da loja. Nunca instale um arquivo do DirigeFácil que alguém mandou no grupo — baixe sempre daqui.',
      },
      {
        question: 'Consigo registrar corridas particulares e de frete?',
        answer:
          'Com certeza! O aplicativo possui atalhos para Corridas Particulares (PA), Uber (UB), 99, Gorjetas e Fretes avulsos, permitindo comparar de qual origem vem o seu melhor lucro.',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Comece Hoje Mesmo',
    title: 'Pare de trabalhar no escuro.',
    highlight: 'Saiba exatamente para onde vai cada centavo.',
    description:
      'Em 14 dias você descobre quanto realmente sobra por dia, por km e por corrida — e quando vale a pena ligar o motor.',
    cta: 'Baixar grátis (uns 20 MB)',
    trustNote: 'Android 7.0 ou mais novo • Sem cartão • Sem anúncios',
  },

  footer: {
    copyright: 'DirigeFácil · Gestão financeira para motoristas e entregadores.',
    links: [
      { label: 'Termos de Uso', href: 'termos.html' },
      { label: 'Privacidade', href: 'privacidade.html' },
      { label: 'Excluir conta', href: 'excluir-conta.html' },
      { label: 'Suporte', href: siteLinks.support },
    ],
  },
};
