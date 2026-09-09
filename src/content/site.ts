/**
 * Todo o texto e todos os fatos da página moram aqui.
 *
 * Regra: nada de fato sobre a Rafaela é escrito direto num componente. Se está
 * pendente de confirmação dela, entra marcado — e a página ou omite, ou usa um
 * fallback declarado. Ver docs/pendencias.md.
 *
 * Guard-rails da seção 9 do docs/business-vision.md valem para qualquer edição
 * aqui: sem promessa de resultado, sem superlativo sobre a profissional, sem
 * preço, sem depoimento, sem caso clínico, neurociência só como pedagogia.
 */

export type Pendente<T> = {
  readonly pendente: true;
  /** O que precisa ser perguntado à Rafaela. */
  readonly pergunta: string;
  /** Texto usado enquanto não houver resposta. `null` = a página omite o item. */
  readonly ate_la: T | null;
};

const pendente = <T,>(pergunta: string, ate_la: T | null = null): Pendente<T> => ({
  pendente: true,
  pergunta,
  ate_la,
});

export const resolvido = <T,>(p: Pendente<T>): T | null => p.ate_la;

/* ------------------------------------------------------------------ */
/* Profissional                                                        */
/* ------------------------------------------------------------------ */

export const profissional = {
  nome: 'Rafaela Martins',
  titulo: 'Psicóloga clínica',
  crp: 'CRP 01/26241',
  formacao: 'Psicologia, UniCEUB',
  formacaoAno: '2023',
  especializacao: 'Pós-graduanda em Terapia Cognitivo-Comportamental, Instituto Cognitivo',
  abordagem: 'Terapia cognitivo-comportamental',
  publico: 'Adultos e adolescentes',
  modalidade: 'Atendimento online',
  cidade: pendente<string>(
    'Confirmar cidade/UF de atuação e que CRP-01 é o Distrito Federal.',
  ),
  foto: pendente<string>(
    'Existe foto profissional? Continua sendo o elemento de maior impacto na conversão. ' +
      'Desde 09/09/2026 a dobra abre com ilustração e não depende mais dela — a foto ' +
      'ficou concentrada no "Sobre", que é onde a decisão pela pessoa acontece.',
  ),
} as const;

export const links = {
  instagram: 'https://www.instagram.com/psirafaelamartins/',
  instagramHandle: '@psirafaelamartins',
  google: pendente<string>(
    'URL do perfil no Google Empresas. Entra como link discreto no rodapé — ' +
      'apontar para o perfil é permitido; reproduzir as avaliações no site, não.',
  ),
} as const;

/* ------------------------------------------------------------------ */
/* Contato — o objetivo primário da página inteira                     */
/* ------------------------------------------------------------------ */

export const contato = {
  /** Formato: só dígitos, com país e DDD. Ex.: '5561999999999' */
  whatsappNumero: null as string | null,
  /** Enquanto o número não vier, o botão usa o encurtador que ela já divulga. */
  whatsappFallback: 'https://wa.link/4hrkeq',
  mensagemPadrao: 'Oi, Rafaela! Vim pelo site e queria entender como funciona a terapia.',
  tempoDeResposta: pendente<string>(
    'Ela quer se comprometer publicamente com um tempo de resposta? O doc de visão ' +
      'trata isso como o fator de conversão mais subestimado e sugere até 4h em ' +
      'horário comercial. Só entra na página se ela confirmar que consegue cumprir.',
  ),
} as const;

/** Monta o link do WhatsApp. Um único lugar na base de código faz isso. */
export function linkWhatsApp(mensagem: string = contato.mensagemPadrao): string {
  if (!contato.whatsappNumero) return contato.whatsappFallback;
  return `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}

/* ------------------------------------------------------------------ */
/* 1 · Dobra                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  titulo: 'Você não precisa saber explicar o que está sentindo para começar.',
  subtitulo:
    'Psicóloga clínica. Terapia cognitivo-comportamental, online, para adultos e adolescentes.',
  /**
   * "Agendar" é decisão do Mateus (09/09/2026), tomando o botão da referência
   * como padrão. Registrar o que ela custa, para quem editar isto depois:
   * o pilar 3 do doc de visão manda o CTA ser sempre um passo pequeno ("é uma
   * mensagem, uma dúvida, uma conversa"), e o clique não abre agenda nenhuma —
   * abre o WhatsApp. A nota "sem compromisso" que segurava essa distância saiu
   * a pedido do Mateus (09/09/2026): o botão agora fica sozinho, e a promessa
   * de passo pequeno passou a viver só no texto que antecede o clique.
   */
  cta: 'Agendar minha consulta',
  /** O nav não comporta a forma longa. A referência faz o mesmo corte. */
  ctaCurto: 'Agendar consulta',
} as const;

/* ------------------------------------------------------------------ */
/* 2 · Reconhecimento                                                  */
/* ------------------------------------------------------------------ */

export const reconhecimento = {
  /**
   * As três frentes vieram da Rafaela — são as demandas que ela mais atende.
   * As PALAVRAS ainda não: continuam escritas a partir da persona (seção 5 do
   * doc de visão), não do que os pacientes de fato dizem. É o que resta da
   * pendência nº 3.
   * Regra ao editar: o rótulo nomeia a demanda, o texto fala na voz de quem
   * sente. Nunca descrever sintoma como critério diagnóstico, nunca prometer
   * desfecho, nunca adjetivo de gênero.
   */
  revisarComRafaela: true,
  /**
   * O título é o fecho da seção promovido a abertura (Mateus, 09/09/2026): a
   * frase que desarma o "meu caso não é grave o bastante" passa na frente das
   * três demandas, em vez de esperar o leitor chegar até o fim delas.
   */
  titulo: 'Nada disso precisa ser grave para valer terapia.',
  subtitulo:
    'O critério não é o tamanho do problema. É o quanto ele está te custando.',
  demandas: [
    {
      icone: 'pessoas',
      rotulo: 'Relacionamentos',
      texto:
        'As mesmas brigas, do mesmo jeito, com as mesmas pessoas. Você diz sim quando ' +
        'queria dizer não — e passa o resto do dia remoendo o que devia ter falado.',
    },
    {
      icone: 'ciclo',
      rotulo: 'Compulsão alimentar',
      texto:
        'Você come sem fome e sem conseguir parar, quase sem perceber quando começou. ' +
        'Depois vem a culpa e a promessa de que amanhã é diferente — e o ciclo recomeça.',
    },
    {
      icone: 'espiral',
      rotulo: 'Ansiedade',
      texto:
        'Sua cabeça não desliga: você deita e ela continua funcionando sozinha. Acorda ' +
        'com o mesmo cansaço de quando foi dormir, e não é sono que está faltando.',
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* 4 · Como funciona — enxuta: o método, sem a aula de TCC             */
/* ------------------------------------------------------------------ */

export const comoFunciona = {
  titulo: 'Como funciona, na prática',
  abertura:
    'A TCC parte de uma ideia simples: a forma como você interpreta uma situação muda o ' +
    'que você sente e o que você faz.',
  passos: [
    {
      titulo: 'Enxergar o padrão',
      texto:
        'Vocês olham juntos para o que se repete — a situação que dispara, o que passa ' +
        'pela sua cabeça na hora, o que você faz em seguida.',
    },
    {
      titulo: 'Testar outra saída',
      texto:
        'Um pensamento que parece verdade absoluta vira uma hipótese que dá para checar.',
    },
    {
      titulo: 'Levar para fora da sessão',
      texto:
        'Você sai com algo concreto para praticar na semana, porque a mudança acontece ' +
        'na sua vida e não na sala.',
    },
  ],

  /**
   * FORA DA PÁGINA desde 09/09/2026 (decisão do Mateus: a seção fechou só com os
   * três passos, sem nota e sem botão). O texto fica aqui porque o pilar 1 do doc
   * de visão — reduzir o medo do desconhecido — continua precisando de casa: hoje
   * quem carrega esse trabalho é o FAQ ("O valor é passado no WhatsApp...") e o
   * CTA final. Se voltar, volta em uma dessas duas seções, não nesta.
   */
  notaConversa:
    'Antes de qualquer sessão existe uma conversa no WhatsApp: você pergunta o que ' +
    'quiser — como funciona, valor, horários — sem precisar contar nada sobre você.',
  /** Idem: sem botão nesta seção, este rótulo não é renderizado. */
  cta: 'Tirar uma dúvida no WhatsApp',
} as const;

/* ------------------------------------------------------------------ */
/* 3 · Sobre                                                           */
/* ------------------------------------------------------------------ */

export const sobre = {
  titulo: 'Psi Rafaela Martins',
  paragrafos: [
    'Rafaela Martins é psicóloga clínica, formada pelo UniCEUB e pós-graduanda em Terapia ' +
      'Cognitivo-Comportamental pelo Instituto Cognitivo. Atende adultos e adolescentes, ' +
      'individualmente e online.',
    'A prática é supervisionada — o que na terapia significa protocolos atuais e casos ' +
      'discutidos com supervisão clínica.',
  ],
  /**
   * Voz dela — vai em itálico, conforme a regra do design system, e fecha a seção.
   * Desde 09/09/2026 esta é a ÚNICA citação do "Sobre" (decisão do Mateus): a
   * apresentação vem primeiro, a voz dela encerra. A segunda citação, sobre a
   * escolha da TCC, saiu da página e está arquivada abaixo — não renderizar as
   * duas sem revisar essa decisão.
   */
  citacao:
    'Autoconhecimento é importante, mas ele pode ir além de entender “por que eu sou assim”. ' +
    'É também descobrir: “o que eu posso fazer, a partir de agora, com aquilo que compreendi ' +
    'sobre mim?”',
  credenciais: ['CRP 01/26241', 'UniCEUB · 2023', 'Instituto Cognitivo'],
} as const;

/**
 * Arquivada em 09/09/2026 — citação da Rafaela sobre a escolha da TCC, fora da
 * página desde que o "Sobre" passou a fechar com uma única citação:
 * 'Escolhi a TCC porque acredito em uma terapia que não apenas acolhe a dor, mas
 *  ajuda a compreender o que está por trás dela e a construir caminhos possíveis
 *  para a mudança.'
 */

/* ------------------------------------------------------------------ */
/* 5 · Responsáveis — REMOVIDA da página em 09/09/2026 (Mateus).       */
/* A numeração das outras seções não mudou de propósito: ela aponta    */
/* para as 9 seções da base visual, não para a ordem do arquivo. A     */
/* copy está em docs/arquivo-secao-responsaveis.md.                    */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* 6 · E-book                                                          */
/* ------------------------------------------------------------------ */

export const ebook = {
  etiqueta: 'E-book',
  titulo: 'Assertividade na prática',
  subtitulo: 'Como se comunicar com clareza, firmeza e respeito',
  paragrafos: [
    'Dizer não sem culpa não é traço de personalidade — é habilidade, e habilidade se treina. ' +
      'O e-book explica por que o cérebro reage com medo ou culpa diante de um conflito e ' +
      'traz técnicas de TCC para praticar.',
    'Ele ainda está sendo escrito. Deixe seu e-mail e ele chega assim que sair.',
  ],
  campoLabel: 'Seu e-mail',
  campoPlaceholder: 'voce@email.com',
  botao: 'Quero o e-book',
  nota: 'Só o aviso de lançamento. Sem envio diário, e você sai quando quiser.',
  sucesso: 'Pronto. Você recebe o e-book no seu e-mail assim que ele sair.',
  erro: 'Confira o e-mail digitado e tente de novo.',
  capa: pendente<string>('Existe arte de capa do e-book? Data prevista de lançamento? Vai ser gratuito?'),
} as const;

/* ------------------------------------------------------------------ */
/* 7 · Dúvidas                                                         */
/* ------------------------------------------------------------------ */

type Duvida = { pergunta: string; resposta: string };

export const faq = {
  titulo: 'Dúvidas',
  itens: [
    {
      pergunta: 'Terapia online funciona mesmo?',
      resposta:
        'Funciona, e existe pesquisa comparando os dois formatos para as demandas mais ' +
        'comuns — ansiedade e depressão entre elas — com resultados equivalentes. O que muda ' +
        'é a logística: você não perde tempo no deslocamento e faz de onde tiver internet e ' +
        'privacidade. O online não é adequado para situação de crise e emergência; nesses ' +
        'casos, procure os serviços indicados no rodapé desta página.',
    },
    {
      pergunta: 'Quanto custa?',
      resposta:
        'O valor é passado no WhatsApp, junto com os horários disponíveis. Perguntar não te ' +
        'compromete com nada — é uma mensagem, e a decisão fica com você depois.',
    },
    {
      pergunta: 'O que eu falo fica entre nós?',
      resposta:
        'Fica. O sigilo é obrigação prevista no Código de Ética Profissional do Psicólogo, ' +
        'não uma cortesia. Ele só é rompido diante de risco à vida, no mínimo necessário — e ' +
        'isso é conversado com você.',
    },
    {
      pergunta: 'E se eu não souber o que dizer?',
      resposta:
        'É o que mais acontece na primeira sessão, e é esperado. Quem conduz a conversa é a ' +
        'Rafaela: você não precisa chegar com nada preparado nem saber nomear o que sente.',
    },
    {
      pergunta: 'Nunca fiz terapia. Meu problema é grande o suficiente?',
      resposta:
        'Não existe um tamanho mínimo. Se alguma coisa está te custando energia, tempo ou uma ' +
        'relação importante, já é motivo suficiente para conversar sobre.',
    },
    {
      pergunta: 'Adolescente aceita terapia online?',
      resposta:
        'Costuma aceitar, e para muitos é até mais confortável — é o quarto dele, o ambiente ' +
        'dele. O que ele diz em sessão é sigiloso, e a família recebe orientações sobre como ' +
        'ajudar. Se houver risco à vida dele, os responsáveis são informados — e isso é ' +
        'combinado com ele desde a primeira sessão.',
    },
  ] satisfies Duvida[],

  /**
   * Perguntas que o doc de visão manda ter no FAQ, mas cuja resposta depende da
   * Rafaela. Ficam FORA do HTML até ela responder — inventar aqui seria colocar
   * no ar afirmação com peso contratual.
   */
  aguardando: [
    pendente<Duvida>('Quanto dura a sessão e com que frequência ela atende?'),
    pendente<Duvida>('Em qual plataforma acontece a sessão (Meet, Zoom, outra)?'),
    pendente<Duvida>('Ela emite recibo para reembolso de convênio?'),
    pendente<Duvida>('Ela atende quem mora fora do fuso horário do Brasil?'),
  ],
} as const;

/* ------------------------------------------------------------------ */
/* 8 · Ação final                                                      */
/* ------------------------------------------------------------------ */

export const ctaFinal = {
  titulo: 'O primeiro passo é uma mensagem.',
  texto:
    'Você não precisa ter certeza de que quer fazer terapia. Basta querer tirar uma dúvida.',
  cta: 'Agendar minha consulta',
} as const;

/* ------------------------------------------------------------------ */
/* 9 · Rodapé                                                          */
/* ------------------------------------------------------------------ */

export const rodape = {
  /**
   * Obrigatório pela seção 9 do doc de visão. Este texto é um default seguro e
   * factual (188 e 192 são serviços públicos nacionais), mas a redação final é
   * escolha dela — pendência 10.
   */
  emergencia: {
    revisarComRafaela: true,
    titulo: 'Em caso de crise ou emergência',
    texto:
      'Este site e o atendimento online não são serviços de emergência. Se você está em risco ' +
      'imediato ou pensando em se machucar, ligue 188 — CVV, 24 horas, gratuito — ou procure ' +
      'a emergência mais próxima. Havendo risco à vida, ligue 192 (SAMU).',
  },
  direitos: `© ${new Date().getFullYear()} Rafaela Martins`,
} as const;

/* ------------------------------------------------------------------ */
/* Meta                                                                */
/* ------------------------------------------------------------------ */

export const meta = {
  titulo: 'Rafaela Martins — Psicóloga clínica online, TCC',
  descricao:
    'Psicóloga clínica online, terapia cognitivo-comportamental para adultos e adolescentes. ' +
    'Você não precisa saber explicar o que está sentindo para começar. CRP 01/26241.',
} as const;
