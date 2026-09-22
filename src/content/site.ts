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
 *
 * Voz: PRIMEIRA PESSOA — quem fala na página é a Rafaela ("eu atendo", "quem
 * conduz sou eu"), e o leitor é "você". Decisão do Mateus (14/09/2026), fechando
 * o "escolher uma pessoa gramatical e manter" da seção 6 do doc de visão. Não
 * voltar a escrever "a Rafaela" em nenhum texto corrido.
 *
 * Pontuação: SEM TRAVESSÃO (— ou –) em nenhum texto da página. Decisão do
 * Mateus (14/09/2026). No lugar, vírgula, dois-pontos, ponto ou parênteses.
 * Hífen de palavra composta (cognitivo-comportamental, e-mail) não é travessão
 * e fica.
 */

import fotoRafaela from '../assets/rafaela-martins.jpeg';

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
  /** Online e presencial — confirmado pelo Mateus em 14/09/2026. */
  modalidade: 'Online e presencial',
  /** Só a região, sem endereço: o endereço do consultório vai pelo WhatsApp. */
  local: { regiao: 'Águas Claras', cidade: 'Brasília', uf: 'DF' },
  /**
   * Enviada pelo Mateus em 14/09/2026 como a foto de perfil dela. Usada só no
   * "Sobre" — a dobra continua com a ilustração (decisão de 09/09/2026) e não
   * volta a usar a foto sem decisão explícita.
   */
  foto: fotoRafaela,
} as const;

export const links = {
  instagram: 'https://www.instagram.com/psirafaelamartins/',
  instagramHandle: '@psirafaelamartins',
  google: pendente<string>(
    'URL do perfil no Google Empresas. Entra como link discreto no rodapé; ' +
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
  /** Voz do visitante, não dela — por isso continua falando com "Rafaela". */
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
  /**
   * Essência do rascunho dela (14/09/2026), enxugada para o botão continuar na
   * primeira tela: a versão integral (3 blocos) empurrava o CTA de 445px para
   * 817px em 390px. Ficou só o que não se repete na página — "basta perceber"
   * responde ao título; a lista de sintomas já é o Reconhecimento e o "novas
   * formas de pensar, sentir e agir" já é o fecho de "Como funciona".
   * "Brasília" e não "Águas Claras" aqui: é o nome que quem chega reconhece;
   * a região exata segue no "Sobre", no FAQ e no rodapé.
   */
  subtitulo:
    'Às vezes você só percebe que algo não está bem, e isso já basta. Sou psicóloga ' +
    'clínica e atendo adultos e adolescentes com terapia cognitivo-comportamental, ' +
    'online ou presencial em Brasília.',
  /**
   * "Agendar" é decisão do Mateus (09/09/2026), tomando o botão da referência
   * como padrão. Registrar o que ela custa, para quem editar isto depois:
   * o pilar 3 do doc de visão manda o CTA ser sempre um passo pequeno ("é uma
   * mensagem, uma dúvida, uma conversa"), e o clique não abre agenda nenhuma —
   * abre o WhatsApp. A nota "sem compromisso" que segurava essa distância saiu
   * a pedido do Mateus (09/09/2026): o botão agora fica sozinho, e a promessa
   * de passo pequeno passou a viver só no texto que antecede o clique.
   */
  cta: 'Agendar minha sessão',
  /**
   * O que acompanha o CRP embaixo do botão (Mateus, 14/09/2026). O CRP em si
   * NÃO sai daqui: é o único CRP da dobra, e a regra 2 do CLAUDE.md o exige.
   * A modalidade saiu porque o subtítulo já a diz.
   */
  etiquetas: ['TCC', 'Adultos e adolescentes'],
  /** O nav não comporta a forma longa. A referência faz o mesmo corte. */
  ctaCurto: 'Agendar sessão',
} as const;

/* ------------------------------------------------------------------ */
/* 2 · Reconhecimento                                                  */
/* ------------------------------------------------------------------ */

export const reconhecimento = {
  /**
   * As seis frentes são as demandas que ela mais atende — as três primeiras
   * vieram dela em 09/09, as três últimas foram confirmadas pelo Mateus em
   * 14/09/2026. Os textos das três primeiras continuam os de 09/09 (mantidos
   * por decisão dele); os das três últimas partiram de um rascunho dela e foram
   * reescritos na voz de quem sente.
   * Regra ao editar: o rótulo nomeia a demanda, o texto fala na voz de quem
   * sente. Nunca descrever sintoma como critério diagnóstico, nunca prometer
   * desfecho, nunca adjetivo de gênero. Cada card descreve um mecanismo
   * diferente — "dizer sim querendo dizer não" mora em Assertividade, não em
   * Relacionamentos, e "culpa" não se repete em mais de dois cards.
   */
  revisarComRafaela: true,
  /**
   * O título é o fecho da seção promovido a abertura (Mateus, 09/09/2026): a
   * frase que desarma o "meu caso não é grave o bastante" passa na frente das
   * demandas, em vez de esperar o leitor chegar até o fim delas.
   */
  titulo: 'Nada disso precisa ser grave para valer terapia.',
  subtitulo:
    'Você não precisa esperar chegar ao limite. O critério é o quanto isso já está te custando.',
  demandas: [
    {
      icone: 'pessoas',
      rotulo: 'Relacionamentos',
      texto:
        'As mesmas brigas, do mesmo jeito, com as mesmas pessoas. Você já sabe como a ' +
        'conversa vai terminar e, mesmo assim, ela termina igual.',
    },
    {
      icone: 'ciclo',
      rotulo: 'Compulsão alimentar',
      texto:
        'Você come sem fome e sem conseguir parar, quase sem perceber quando começou. ' +
        'Depois vem a culpa e a promessa de que amanhã é diferente, e o ciclo recomeça.',
    },
    {
      icone: 'espiral',
      rotulo: 'Ansiedade',
      texto:
        'Sua cabeça não desliga: você deita e ela continua funcionando sozinha. Acorda ' +
        'com o mesmo cansaço de quando foi dormir, e não é sono que está faltando.',
    },
    {
      icone: 'degraus',
      rotulo: 'Autoestima e autocrítica',
      texto:
        'Você se cobra o tempo todo e nada parece suficiente. Um elogio dura minutos; ' +
        'uma crítica fica com você por dias.',
    },
    {
      icone: 'barreira',
      rotulo: 'Procrastinação',
      texto:
        'Você sabe o que precisa fazer e mesmo assim não começa. O prazo chega, a ' +
        'cobrança aumenta, e fica ainda mais difícil sair do lugar.',
    },
    {
      icone: 'limite',
      rotulo: 'Assertividade e limites',
      texto:
        'Você diz sim quando queria dizer não e engole o que precisava falar para evitar ' +
        'conflito. Quando enfim se posiciona, quem aparece é a culpa.',
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* 4 · Como funciona — o método em três passos, sem virar aula de TCC  */
/* ------------------------------------------------------------------ */

export const comoFunciona = {
  titulo: 'Como funciona, na prática',
  /**
   * Desde 14/09/2026 a abertura diz também que a TCC é baseada em evidências e
   * trabalha no presente (seção 6 do doc de visão). Não repetir aqui o que os
   * passos abaixo já dizem ("identificar padrões", "praticar estratégias").
   */
  abertura:
    'A TCC é uma abordagem baseada em evidências científicas. Ela parte de uma ideia ' +
    'simples: a forma como você interpreta uma situação muda o que você sente e o que ' +
    'você faz. E trabalha no presente, com o que está acontecendo na sua vida agora.',
  passos: [
    {
      titulo: 'Enxergar o padrão',
      texto:
        'Olhamos juntos para o que se repete: a situação que dispara, o que passa ' +
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
   * Para onde a terapia aponta — a "visão" que faltava entre o problema
   * (Reconhecimento) e o caminho (os passos). Entrou em 14/09/2026 no lugar da
   * seção "O que você pode construir na terapia", que foi descartada: uma lista
   * de desfechos lê como promessa de resultado (regra 2). Por isso é escrita
   * como foco do trabalho, com "aos poucos", e nunca como o que a pessoa vai obter.
   */
  fecho:
    'O objetivo não é só aliviar o que dói agora. É construir, aos poucos, uma relação ' +
    'diferente com o que você pensa, sente e escolhe.',

  /**
   * FORA DA PÁGINA desde 09/09/2026 (decisão do Mateus: a seção fechou só com os
   * três passos, sem nota e sem botão). O texto fica aqui porque o pilar 1 do doc
   * de visão — reduzir o medo do desconhecido — continua precisando de casa: hoje
   * quem carrega esse trabalho é o FAQ ("Eu passo o valor...") e o CTA final. Se
   * voltar, volta em uma dessas duas seções, não nesta.
   */
  notaConversa:
    'Antes de qualquer sessão, a gente conversa pelo WhatsApp: você me pergunta o que ' +
    'quiser (como funciona, valor, horários) sem precisar contar nada sobre você.',
  /** Idem: sem botão nesta seção, este rótulo não é renderizado. */
  cta: 'Tirar uma dúvida no WhatsApp',
} as const;

/* ------------------------------------------------------------------ */
/* 3 · Sobre                                                           */
/* ------------------------------------------------------------------ */

export const sobre = {
  titulo: 'Psi. Rafaela Martins',
  /**
   * Dois blocos (14/09/2026): o porquê da TCC e a formação + modalidade. A menção
   * a prática supervisionada saiu a pedido do Mateus — não recolocar.
   */
  paragrafos: [
    'Sou psicóloga clínica e escolhi a Terapia Cognitivo-Comportamental porque acredito ' +
      'numa terapia que une acolhimento, profundidade e evidência científica.',
    'Sou formada em Psicologia pelo UniCEUB e pós-graduanda em TCC pelo Instituto ' +
      'Cognitivo. Atendo adultos e adolescentes, individualmente, online ou ' +
      'presencialmente em Águas Claras (DF).',
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
  /** Sem seção "Formação" separada (Mateus, 14/09/2026): os cursos são estes. */
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
    'Dizer não sem culpa não é traço de personalidade. É habilidade, e habilidade se treina. ' +
      'No e-book, explico por que o cérebro reage com medo ou culpa diante de um conflito e ' +
      'trago técnicas de TCC para praticar.',
    'Disponível em breve. Deixe seu e-mail e eu te aviso assim que ele sair.',
  ],
  campoLabel: 'Seu e-mail',
  campoPlaceholder: 'voce@email.com',
  botao: 'Quero o e-book',
  nota: 'Só o aviso de lançamento. Sem envio diário, e você sai quando quiser.',
  sucesso: 'Pronto. Assim que o e-book sair, eu envio para o seu e-mail.',
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
        'comuns, entre elas ansiedade e depressão, com resultados equivalentes. O que muda ' +
        'é a logística: você não perde tempo no deslocamento e faz de onde tiver internet e ' +
        'privacidade. Se preferir estar na mesma sala, também atendo presencialmente em ' +
        'Águas Claras (DF). O online não é adequado para situação de crise e emergência; ' +
        'nesses casos, procure os serviços indicados no rodapé desta página.',
    },
    {
      pergunta: 'Quanto custa?',
      resposta:
        'Eu passo o valor pelo WhatsApp, junto com os horários disponíveis. Perguntar não te ' +
        'compromete com nada. É uma mensagem, e a decisão fica com você depois.',
    },
    {
      pergunta: 'O que eu falo fica entre nós?',
      resposta:
        'Fica. O sigilo é obrigação prevista no Código de Ética Profissional do Psicólogo, ' +
        'não uma cortesia. Ele só é rompido diante de risco à vida, no mínimo necessário, e ' +
        'eu converso isso com você.',
    },
    {
      pergunta: 'E se eu não souber o que dizer?',
      resposta:
        'É o que mais acontece na primeira sessão, e é esperado. Quem conduz a conversa sou ' +
        'eu: você não precisa chegar com nada preparado nem saber nomear o que sente.',
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
        'Costuma aceitar, e para muitos é até mais confortável: é o quarto dele, o ambiente ' +
        'dele. O que ele diz em sessão é sigiloso, e eu oriento a família sobre como ajudar. ' +
        'Se houver risco à vida dele, eu informo os responsáveis e combino isso com ele ' +
        'desde a primeira sessão.',
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
    'Você não precisa ter certeza de que quer fazer terapia. Pode me escrever só para tirar uma dúvida.',
  cta: 'Agendar minha sessão',
} as const;

/* ------------------------------------------------------------------ */
/* 9 · Rodapé                                                          */
/* ------------------------------------------------------------------ */

export const rodape = {
  /**
   * Obrigatório pela seção 9 do doc de visão. Este texto é um default seguro e
   * factual (188 e 192 são serviços públicos nacionais), mas a redação final é
   * escolha dela — pendência 7.
   */
  emergencia: {
    revisarComRafaela: true,
    titulo: 'Em caso de crise ou emergência',
    texto:
      'Este site e as minhas sessões, online ou presenciais, não são serviços de emergência. ' +
      'Se você está em risco imediato ou pensando em se machucar, ligue 188 (CVV, 24 horas, ' +
      'gratuito) ou procure a emergência mais próxima. Havendo risco à vida, ligue 192 (SAMU).',
  },
  direitos: `© ${new Date().getFullYear()} Rafaela Martins`,
} as const;

/* ------------------------------------------------------------------ */
/* Meta                                                                */
/* ------------------------------------------------------------------ */

export const meta = {
  titulo: 'Rafaela Martins · Psicóloga clínica, TCC · Águas Claras (DF) e online',
  descricao:
    'Terapia cognitivo-comportamental para adultos e adolescentes, online ou presencial em ' +
    'Águas Claras, Brasília (DF). Você não precisa saber explicar o que está sentindo para ' +
    'começar. CRP 01/26241.',
} as const;
