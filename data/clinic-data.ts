export interface Treatment {
  id: string;
  title: string;
  category: 'Geral' | 'Prevenção' | 'Ortodontia' | 'Cirurgia' | 'Estética';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  recommendedFrequency: string;
  iconName: string;
  benefits: string[];
  indications: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  omdNumber: string;
  bio: string;
  quote: string;
  image: string;
  schedule: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Gabinetes' | 'Acolhimento' | 'Tecnologia' | 'Esterilização';
  image: string;
  alt: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  initials: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
}

export interface FaqItem {
  id: string;
  category: 'Marcações' | 'Localização & Acessos' | 'Tratamentos' | 'Pagamentos & Acordos';
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  name: 'Clínica Dentária dos Piornais',
  locality: 'dos Piornais · Funchal',
  tagline: 'Cuide do seu sorriso com confiança.',
  address: 'Estrada Monumental, Edifício Monumental Palace I, n.º 456 M',
  postalCode: '9000-250 Funchal, Madeira',
  phoneMobile: '+351 927 032 235',
  phoneLandline: '+351 291 764 755',
  email: 'clinicadentariadospiornais@gmail.com',
  emailGeneral: 'geral@piornaisdentaria.pt',
  hoursWeekdays: '09:00 – 19:00',
  hoursSaturday: '09:00 – 13:00',
  hoursSunday: 'Encerrado (Urgências sob contacto prévio)',
  ersNumber: 'ERS Registo Clínico n.º E145290',
  omdNote: 'Corpo Clínico com Inscrição Ativa na Ordem dos Médicos Dentistas',
  googleRating: 4.9,
  reviewsCount: 142,
  mapsUrl: 'https://maps.google.com/?q=Estrada+Monumental+Edificio+Monumental+Palace+I+456+M+Funchal',
  whatsappUrl: 'https://wa.me/351927032235?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20informa%C3%A7%C3%A3o%20ou%20agendamento%20na%20Cl%C3%ADnica%20Dent%C3%A1ria%20dos%20Piornais.',
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'dentaria-geral',
    title: 'Medicina Dentária Geral',
    category: 'Geral',
    shortDesc: 'Diagnóstico minucioso, restaurações estéticas diretas e resolução de cáries com materiais biomiméticos de alta durabilidade.',
    fullDesc: 'A Medicina Dentária Conservadora e Geral visa o diagnóstico precoce, preservação dos tecidos dentários naturais e reconstrução anatómica de dentes danificados por cárie ou traumatismo, utilizando resinas compostas com mimetismo cromático perfeito.',
    duration: '45 - 60 min',
    recommendedFrequency: 'Consulta de controlo semestral ou anual',
    iconName: 'dentistry',
    benefits: [
      'Preservação da estrutura dentária biológica',
      'Restaurações invisíveis com cores naturais',
      'Eliminação imediata do desconforto ou sensibilidade',
      'Durabilidade comprovada e adesão de última geração',
    ],
    indications: [
      'Cáries ativas ou restaurações antigas infiltradas',
      'Sensibilidade dentária térmica a alimentos frios ou doces',
      'Fraturas parciais de esmalte e cúspides',
    ],
  },
  {
    id: 'higiene-oral',
    title: 'Higiene Oral e Prevenção',
    category: 'Prevenção',
    shortDesc: 'Destartarização ultrassónica, polimento coronário e eliminação de placa bacteriana, prevenindo inflamações e tártaro.',
    fullDesc: 'Sessão clínica de profilaxia profissional executada com pontas ultrassónicas suaves e jato de bicarbonato/glicina. Elimina o biofilme e as manchas superficiais de chá, café e tabaco, garantindo gengivas saudáveis e hálito fresco.',
    duration: '40 - 50 min',
    recommendedFrequency: 'A cada 6 meses (ou a cada 4 meses em pacientes periodontais)',
    iconName: 'clean_hands',
    benefits: [
      'Prevenção ativa da gengivite e periodontite',
      'Remoção eficaz de manchas superficiais',
      'Instrução prática individualizada de escovagem e fita dentária',
      'Sensação imediata de limpeza e suavidade',
    ],
    indications: [
      'Gengivas que sangram durante a escovagem',
      'Acumulação visível de tártaro sub e supra-gengival',
      'Mau hálito recorrente',
    ],
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia & Alinhadores Invisíveis',
    category: 'Ortodontia',
    shortDesc: 'Alinhamento dentário funcional e estético através de alinhadores transparentes modernos e aparelhos fixos para jovens e adultos.',
    fullDesc: 'Correção precisa do posicionamento dentário e desarmonias esqueléticas dos maxilares. Disponibilizamos alinhadores transparentes praticamente impercetíveis, removíveis para refeições e escovagem, bem como aparelhos convencionais de elevada eficácia.',
    duration: '30 - 45 min (consultas de manutenção)',
    recommendedFrequency: 'Consultas periódicas a cada 4 a 6 semanas',
    iconName: 'architecture',
    benefits: [
      'Melhoria estética e harmonia do sorriso',
      'Correção da mordida e alívio de sobrecargas articulares (ATM)',
      'Higiene facilitada com alinhadores transparentes removíveis',
      'Planeamento 3D digital com previsão do resultado final',
    ],
    indications: [
      'Dentes apinhados, espaçados (diastemas) ou desalinhados',
      'Mordida cruzada, aberta ou sobremordida',
      'Dificuldade mastigatória ou desgaste dentário assimétrico',
    ],
  },
  {
    id: 'implantologia',
    title: 'Implantologia Oral',
    category: 'Cirurgia',
    shortDesc: 'Reabilitação fixa e estável de peças dentárias ausentes através de implantes em titânio de grau médico e coroas cerâmicas.',
    fullDesc: 'Substituição duradoura de raízes dentárias perdidas por parafusos biocompatíveis de titânio puro integrados no osso maxilar. Sobre estes são fixadas coroas unitárias ou pontes cerâmicas, devolvendo 100% da força mastigatória e naturalidade.',
    duration: '60 - 90 min (procedimento cirúrgico)',
    recommendedFrequency: 'Avaliação semestral com radiografia periapical',
    iconName: 'hardware',
    benefits: [
      'Estabilidade idêntica ao dente natural',
      'Não desgasta os dentes saudáveis vizinhos',
      'Previne a reabsorção óssea progressiva do maxilar',
      'Recuperação da auto-estima e confiança ao sorrir e falar',
    ],
    indications: [
      'Ausência de um ou múltiplos dentes',
      'Próteses removíveis instáveis ou desconfortáveis',
      'Dentes condenados por infeção ou fratura radicular',
    ],
  },
  {
    id: 'cirurgia-oral',
    title: 'Cirurgia Oral',
    category: 'Cirurgia',
    shortDesc: 'Extrações dentárias simples e de dentes do siso inclusos, com abordagem minimamente invasiva e protocolo analgésico eficaz.',
    fullDesc: 'Intervenções cirúrgicas de ambulatório realizadas sob anestesia local computadorizada e sem dor. Inclui exodontia de dentes do siso impactados, regularização de rebordo ósseo, frenectomias e biópsias de lesões de tecidos moles.',
    duration: '30 - 60 min',
    recommendedFrequency: 'Consulta de remoção de pontos após 7 a 10 dias',
    iconName: 'medical_services',
    benefits: [
      'Técnicas cirúrgicas atraumáticas com rápida cicatrização',
      'Protocolo anestésico moderno e indolor',
      'Acompanhamento telefónico personalizado no pós-operatório',
      'Eliminação definitiva de focos de infeção crónica',
    ],
    indications: [
      'Dentes do siso com dor, inclusão ou falta de espaço',
      'Restos radiculares infeccionados sem viabilidade protética',
      'Alterações dos freios labiais ou linguais em crianças',
    ],
  },
  {
    id: 'periodontologia',
    title: 'Periodontologia',
    category: 'Prevenção',
    shortDesc: 'Tratamento e controlo da gengivite e periodontite, preservando as estruturas de sustentação óssea e o suporte periodontal.',
    fullDesc: 'Cuidados especializados no tratamento das doenças que afetam a gengiva, ligamento periodontal e osso de suporte. Realizamos raspagem e alisamento radicular minucioso, cirurgias regenerativas e programas personalizados de manutenção para estagnar a perda óssea.',
    duration: '45 - 60 min por quadrante',
    recommendedFrequency: 'Manutenção rigorosa a cada 3 a 4 meses',
    iconName: 'bloodtype',
    benefits: [
      'Estabilização da perda de suporte ósseo',
      'Redução da mobilidade e preservação dos dentes naturais',
      'Cessação do sangramento gengival e infeções ativas',
      'Melhoria da saúde sistémica (redução de risco cardiovascular e controlo de diabetes)',
    ],
    indications: [
      'Gengivas vermelhas, inchadas ou com retração visível',
      'Dentes com sensação de abanar ou alongamento aparente',
      'Presença de bolsas periodontais com supuração',
    ],
  },
  {
    id: 'prostodontia',
    title: 'Prostodontia Fixa e Removível',
    category: 'Geral',
    shortDesc: 'Próteses dentárias fixas (pontes e coroas) e esqueléticas removíveis de precisão para restituição mastigatória completa.',
    fullDesc: 'Reabilitação integral da arcada dentária restabelecendo a dimensão vertical de oclusão e o conforto muscular. Executamos coroas e pontes em zircónio monolítico e cerâmica pura sem metal, bem como próteses esqueléticas de retenção precisa.',
    duration: '45 - 60 min por sessão clínica',
    recommendedFrequency: 'Revisão anual de ajuste e adaptação oclusal',
    iconName: 'vital_signs',
    benefits: [
      'Restauração completa da eficácia mastigatória',
      'Materiais biocompatíveis sem ligas metálicas expostas',
      'Conforto na fala e estabilidade funcional',
      'Apoio labial e rejuvenescimento do terço inferior da face',
    ],
    indications: [
      'Perda de múltiplos elementos dentários',
      'Dentes extensamente destruídos com necessidade de coroa protetora',
      'Substituição de próteses antigas desadaptadas',
    ],
  },
  {
    id: 'estetica-dentaria',
    title: 'Estética Dentária & Branqueamento',
    category: 'Estética',
    shortDesc: 'Branqueamentos dentários em consultório e facetas cerâmicas para devolver o brilho e a harmonia natural ao seu sorriso.',
    fullDesc: 'Conjunto de intervenções direcionadas à valorização estética do sorriso: branqueamento dentário assistido por ativação luminosa, facetas e lentes de contacto em cerâmica feldspática e reanatomização estética direta com resinas de topo.',
    duration: '60 - 90 min',
    recommendedFrequency: 'Reforço de branqueamento após 18 a 24 meses',
    iconName: 'sentiment_satisfied',
    benefits: [
      'Clareamento seguro do esmalte sem danificar a estrutura dentária',
      'Correção de alterações de forma, tamanho e coloração',
      'Harmonização do arco do sorriso com as linhas faciais',
      'Efeito rejuvenescedor natural e luminoso',
    ],
    indications: [
      'Dentes amarelados ou escurecidos por pigmentos ou medicação',
      'Espaços interdentários inestéticos ou dentes conóides',
      'Desejo de transformar a estética do sorriso com elegância',
    ],
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'diretor-clinico',
    name: 'Dr. Diretor Clínico',
    title: 'Diretor Clínico & Médico Dentista',
    specialties: ['Reabilitação Oral', 'Implantologia', 'Cirurgia Oral'],
    omdNumber: 'Cédula Profissional OMD n.º 7412',
    bio: 'Mais de 15 anos de prática clínica dedicada à implantologia de precisão e reabilitação protética complexa. Com formação contínua nas principais instituições europeias, pauta a sua atividade pelo respeito biológico rigoroso e excelência técnica.',
    quote: 'Compromisso absoluto com o rigor ético, o conforto de cada paciente e a durabilidade clínica.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO3dE051WKBmI_a4uZyjv4ekWpKUsIdjg5agyT-sLsd6GumVAYthP_PU9uF6aiY15Udw8-HVeNOBIm6IjoDyNd4DG1RLAl_InFZhO7TLe_otDeK1CEgKRv6MTd-lqmSQ9-12039k-BCpP1dc5N7s3ijUIr62YmH7ozPy_NkP0_4-DC-DPdh2Ix_1HpzaOCOkRV_qcR-vOsPPpBC9HXw_kgagSBeMf8PXdmXlb8LVIzyNXurkRAGO6a',
    schedule: 'Segunda a Quinta: 09:00 - 18:30',
  },
  {
    id: 'medica-dentista',
    name: 'Dra. Médica Dentista',
    title: 'Médica Dentista',
    specialties: ['Ortodontia Invisível', 'Odontopediatria', 'Estética Dentária'],
    omdNumber: 'Cédula Profissional OMD n.º 9834',
    bio: 'Especialista em alinhadores transparentes e harmonização dento-facial. Dedica-se com sensibilidade e método à abordagem dos mais novos e ao acompanhamento sereno das famílias, transformando o receio da cadeira do dentista em tranquilidade.',
    quote: 'O sorriso de amanhã constrói-se com prevenção atenta, empatia e sem dor hoje.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc0AI8kmx02oGgjqwQVNoesG_IKuMRcHsmbqIUOCh2Ri8Z5jBAmIPBe74oys13CdaUod9ZVqvpqgyKsR5JOKADIopeqPdYvSdtPFsDvB_8d53IpWGM8awNqeLp0X9eFnLB8zG0tR1o2ymg9RNZKywGN1QRKvxEhFmabgk-g3OKpEwpI03xSwty6BwXN_npKpG0dEVyRrPXL8pPCqeLnKIA0Sh6LGCVfUXTlpA70tNwvsjHW3gKDITe',
    schedule: 'Terça a Sexta: 09:30 - 19:00',
  },
  {
    id: 'higienista-oral',
    name: 'Higienista Oral & Apoio Clínico',
    title: 'Higienista Oral Licenciada',
    specialties: ['Profilaxia Avançada', 'Manutenção Periodontal', 'Branqueamento'],
    omdNumber: 'Membro da Associação Portuguesa de Higienistas Orais',
    bio: 'Foco dedicado na prevenção primária, eliminação ultrassónica de tártaro e programas individualizados de suporte à saúde gengival. Ensino didático de rotinas de higiene oral adaptadas às particularidades de cada paciente.',
    quote: 'A saúde da boca reflete-se na sua vitalidade geral e na tranquilidade do seu dia a dia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCisSe7PWc4LKLPemafYakzFANc6Rr8ttmJ0zveNofTqfs8SAJzbEUaM0OkQLOwOGEkZC0wGaN5BjLSx3KNmomLF112D0q0iy65eOejojseHPkXTuxHFX3GyUA6OFCxoh-iC7WHllDSrb58R2cdOfG2fJI3P5M5q63QQifZ0-7MYYNmc31UBjDfjhAeyHSLTLvdifxEXIE1oNuc9kPsdsdsioaQ1okDVJ0nbEQdP4swvU1wREXnnSX8',
    schedule: 'Segunda a Sábado: 09:00 - 14:00',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gabinete-principal',
    title: 'Gabinete Principal com Vista Oceânica',
    subtitle: 'Luz natural, isolamento acústico e cadeira ergonómica de última geração voltada para os palmares do Funchal.',
    category: 'Gabinetes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY23BSbEj6yMas6XeHq8IUxFTy5-Ek1B_5_Sv1IBBNxY68Ku7AWttGNSBx0Bm7poVCIxljrLsCzNlSelUYIpF2opJ_5gupCHnOII0e_c-6Pu7ppuVclXxeFwNarcygQ4SGHIpEWLW9w4-mmQsQLSHuY3IgvnI0Yrn4TlR0Berhyxr0ODiMDX3cyEcvy-wLN5UJxLv_EE5ILUo3M9uZ-9Cq7EPtxzKfb7sSrTem7Hgo0hVHW1hwJN8O',
    alt: 'Gabinete cirúrgico com janela panorâmica em São Martinho, Funchal',
    featured: true,
  },
  {
    id: 'rececao-lounge',
    title: 'Receção & Sala de Espera Calmante',
    subtitle: 'Painéis em carvalho natural, iluminação arquitetónica indireta e poltronas confortáveis para relaxamento pré-consulta.',
    category: 'Acolhimento',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlf6ZMpQXq1lcOOSu4rvdUk8iw12fN24Le04l4EFc5oeBlYqWfN_tXin11pepVKqh94qQmXhNdGMa1fDfUeOYZrG0_mFDKWYbfoiboysQobmSyg0tGFK85b7asJdRDDwV19ExMx5CnlLH53gNYb2fByNOjEUZDA_V3LEOl8dhgGYgDFxmOmt0eqkXBjW01TOBPLPIr2TewJLd-L8NkUy7iWeXt6Wi4qjXklBW-gNffr7UygfJNDhI7',
    alt: 'Receção e sala de estar acolhedora da Clínica Dentária dos Piornais',
  },
  {
    id: 'central-esterilizacao',
    title: 'Central de Esterilização Hospitalar',
    subtitle: 'Autoclaves digitais classe B, selagem a vácuo e rastreabilidade biológica estrita de cada instrumento cirúrgico.',
    category: 'Esterilização',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkURgulYmJE_PtuBXqmrkMWBPD_Y9kYbcqhC4OXsSIpGJsTznX3Z47bQ-utXlLK7QjnuO6YG9OvFvhqzmRql3omQxo2jvZbiwOiAo-sKXFjKm-bmvJGFRt82yAJvHrKYN0leEml-d4jMPwdttBVqk7zrJ3bRNpxT2Ir-VbIKT_w5yU5Dk02-UEha0PMiTHnXz_5WpKRbtzN_oABuewi04r7bJawSwoUe0gMDzKP5LwxaszQtHNTWSp',
    alt: 'Sala estéril de desinfeção cirúrgica com autoclaves classe B',
  },
  {
    id: 'tecnologia-scanner',
    title: 'Imagiologia Digital & Scanner 3D',
    subtitle: 'Impressões digitais sem massas desconfortáveis e diagnóstico em ecrã de alta definição em tempo real.',
    category: 'Tecnologia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdq8aR965OPQDSdH4BkMRwo4OS6EXFdVLrORm-2M_TEIBjOhCyD3gQfcWC9-t7O3dPqZYgtmPAXLPWzDg_40D251ICRHAajopNS-KzO_S8bVsP-33DbiuF9atN6T1hAc3lIlZvb_NaAzHRP_RXaOa9t61uKCXRad7HelvuMZTyK5webWZf40QB9h53KOmz4f4e9ysrI2MQ6XfG5pHlyA9XwsTdVcVVuHBA6u6930jsS69SZ5N8T5JU',
    alt: 'Scanner ótico intraoral 3D e monitores de diagnóstico radiográfico',
  },
  {
    id: 'gabinete-secundario',
    title: 'Gabinete de Profilaxia & Tratamento',
    subtitle: 'Espaço dedicado a higiene oral, branqueamentos e consultas de manutenção periódica em ambiente sereno.',
    category: 'Gabinetes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXTSQSoPtbAZZbGBP9pRBEakFdmrQZFQDHt5edVd-Tmkgltl8CDVozogidWgLyA-qh-xiViZgV2vhuLvhFmx9zWe2JqLMaYh1kESbqOtQZHMRl66wEV0MbVTPi7SyYZm9Y044yDTPlVGVWumIYYaV614L8s_nuqfQU7a_4NSEduzDRIPH6TjY8s6iBk68FcSdOCrb96-9WW2bl-4CjBOQTXaYcPkuP_qXfLXxz5OZHMsWLEwmwpWAv',
    alt: 'Segundo gabinete odontológico com revestimentos acústicos de madeira',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Maria Freitas',
    location: 'São Martinho, Funchal',
    initials: 'MF',
    rating: 5,
    date: 'Fevereiro 2025',
    treatment: 'Ortodontia com Alinhadores',
    comment: 'Excelente clínica. Fui atendida com uma simpatia ímpar e sem qualquer dor. Explicaram-me todo o plano de tratamento de forma claríssima. Instalações modernas e muito limpas.',
  },
  {
    id: 'rev-2',
    author: 'João Silva',
    location: 'Funchal',
    initials: 'JS',
    rating: 5,
    date: 'Janeiro 2025',
    treatment: 'Implantologia Oral',
    comment: 'Pontualidade exemplar e rigor médico. Tinha receio de consultas dentárias devido a experiências passadas, mas aqui sinto-me 100% tranquilo. Recomendo a toda a família.',
  },
  {
    id: 'rev-3',
    author: 'Ana Paula Ramos',
    location: 'Caniço / Funchal',
    initials: 'AP',
    rating: 5,
    date: 'Dezembro 2024',
    treatment: 'Higiene Oral & Branqueamento',
    comment: 'Localização perfeita na Estrada Monumental com estacionamento fácil. O atendimento pós-procedimento foi impecável, ligaram no dia seguinte a saber como estava. Cinco estrelas.',
  },
  {
    id: 'rev-4',
    author: 'Rui Fernandes',
    location: 'Lido, Funchal',
    initials: 'RF',
    rating: 5,
    date: 'Março 2025',
    treatment: 'Medicina Dentária Geral',
    comment: 'Fiz a substituição de restaurações antigas e o resultado estético é impressionante. Destaco o cuidado em explicar cada fase do procedimento no monitor. Ambiente calmo e sem stresse.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Marcações',
    question: 'Como posso marcar uma consulta na Clínica dos Piornais?',
    answer: 'Pode agendar a sua consulta com facilidade através do formulário interativo de agendamento neste portal, ligando diretamente para a nossa linha (+351 927 032 235 ou +351 291 764 755) ou enviando mensagem através do nosso WhatsApp oficial.',
  },
  {
    id: 'faq-2',
    category: 'Marcações',
    question: 'Qual é o horário de atendimento da clínica?',
    answer: 'Estamos abertos de segunda a sexta-feira, das 09:00 às 19:00, e aos sábados, das 09:00 às 13:00. Aos domingos e feriados encontramo-nos encerrados, prestando assistência a situações urgentes mediante marcação telefónica prévia.',
  },
  {
    id: 'faq-3',
    category: 'Localização & Acessos',
    question: 'Onde fica localizada a Clínica Dentária dos Piornais?',
    answer: 'A clínica situa-se na Estrada Monumental, no prestigiado Edifício Monumental Palace I, fração 456 M, 9000-250 Funchal, freguesia de São Martinho, Ilha da Madeira.',
  },
  {
    id: 'faq-4',
    category: 'Localização & Acessos',
    question: 'Como posso chegar à clínica e onde posso estacionar?',
    answer: 'A clínica está situada junto à artéria principal da Estrada Monumental. Existem bolsas de estacionamento público nas imediações e parqueamento no complexo do Edifício Monumental Palace I. O acesso por transporte público é privilegiado através das linhas regulares dos Horários do Funchal (HF 01, 02 e 04).',
  },
  {
    id: 'faq-5',
    category: 'Marcações',
    question: 'É obrigatório marcar consulta previamente?',
    answer: 'Sim, de modo a assegurar que cada paciente recebe tempo clínico dedicado, sem filas de espera e garantindo a desinfeção e esterilização integral do gabinete entre atendimentos, recomendamos sempre a marcação prévia.',
  },
  {
    id: 'faq-6',
    category: 'Tratamentos',
    question: 'Quais os tratamentos disponíveis na clínica?',
    answer: 'Cobrimos todas as áreas essenciais da medicina dentária: Medicina Dentária Geral e Conservadora, Higiene Oral e Profilaxia, Ortodontia e Alinhadores Invisíveis, Implantologia Oral, Cirurgia Oral, Periodontologia, Prostodontia Fixa/Removível e Estética Dentária.',
  },
  {
    id: 'faq-7',
    category: 'Tratamentos',
    question: 'O que devo esperar na primeira consulta de avaliação?',
    answer: 'Na primeira consulta realizamos uma anamnese detalhada, exame clínico intra e extra-oral minucioso e, se necessário, registo radiográfico digital. O médico dentista explicará o diagnóstico com clareza e apresentará um plano de tratamento detalhado com estimativa orçamental transparente.',
  },
  {
    id: 'faq-8',
    category: 'Pagamentos & Acordos',
    question: 'Quais são as modalidades de pagamento aceites?',
    answer: 'Disponibilizamos pagamento através de Multibanco, MB WAY, numerário e transferência bancária. Emitimos fatura-recibo com indicação do código de atividade em saúde para efeitos de dedução no IRS e reembolso pelo seu seguro de saúde ou subsistema (ex: Médis, Multicare, ADSE, SAMS, etc.).',
  },
];
