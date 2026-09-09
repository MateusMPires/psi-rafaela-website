# Pendências — o que falta para a página ir ao ar

Cada item diz **o que destrava** e **onde entra no código**. Tudo que depende da Rafaela vive
em [`src/content/site.ts`](../src/content/site.ts) — responder é editar um arquivo, não mexer
em componente.

O que está aqui vem das pendências da seção 14 do [documento de visão](business-vision.md) mais
o que apareceu ao construir.

---

## Bloqueia o lançamento

**1. Foto profissional da Rafaela**
É o único item que impede publicar hoje. Desde 09/09/2026 a dobra não depende mais dela — abre
com ilustração de traço (`IlustracaoDobra.astro`) —, mas a seção "Sobre" continua desenhada em
volta da foto, e é lá que a pessoa decide pela profissional. No lugar aparece um placeholder
tracejado escrito "FOTO PENDENTE", deliberadamente visível, para ninguém publicar por engano.
Precisa ser foto real; stock photo está fora por decisão de marca.
→ `profissional.foto`. Colocar o arquivo em `public/` e apontar o caminho. O único ponto de uso
hoje é `Sobre.astro`; a dobra não volta a usá-la sem decisão explícita.

**2. Número do WhatsApp**
Hoje os 5 botões da página caem no `wa.link/4hrkeq`, que funciona mas é encurtador de terceiro:
não controlamos a mensagem pré-preenchida, dependemos de um serviço que pode mudar de política, e
o clique não fica rastreável no nosso analytics. Com o número, os links viram
`wa.me/55DDNNNNNNNNN?text=...` com o texto já escrito, para a pessoa não ter que formular a
primeira frase — que é ponto real de desistência.
→ `contato.whatsappNumero`, formato só dígitos com país e DDD.

---

## Muda o conteúdo da página

**3. As palavras que os pacientes usam** — *parcialmente resolvida*
As três demandas já vieram dela: **relacionamentos, compulsão alimentar e ansiedade**. A seção foi
reescrita em cima disso e agora são três cards, um por demanda.

O que ainda falta é o texto de cada card. Os três parágrafos continuam sendo **rascunho meu**,
derivado da persona do documento de visão — não do que ela ouve no consultório. É a seção que mais
ganha com as palavras verdadeiras. Peça, para cada uma das três, **duas ou três frases como o
paciente diz**, não descrição de sintoma.

Vale conferir com ela o rótulo "Compulsão alimentar": é o nome da demanda, e não há problema ético
em nomear área de atendimento, mas se ela preferir uma formulação menos clínica na página, é só
trocar o `rotulo` — o ícone e a estrutura não mudam.
→ `reconhecimento.demandas` (o bloco segue marcado `revisarComRafaela: true`).

**4. Formato da sessão** — duração, frequência e plataforma (Meet, Zoom, outra).
**5. Recibo para reembolso de convênio?** — emite ou não.
**6. Atende fora do fuso horário do Brasil?**
Essas quatro perguntas estão no FAQ do documento de visão, mas as respostas têm peso contratual e
eu não inventei nenhuma. Elas ficam **fora do HTML** até serem respondidas — o FAQ hoje mostra 6
perguntas em vez de 10.
→ `faq.aguardando`.

**7. Texto do aviso de crise e emergência**
Está no ar um default factual e seguro (188 CVV, 192 SAMU, mais a ressalva de que atendimento
online não é serviço de emergência). É obrigatório pela seção 9 do documento, mas a redação final
é escolha dela.
→ `rodape.emergencia`.

**8. Cidade/UF e confirmação de que CRP-01 é o Distrito Federal**
Entra no rodapé e ajuda na busca local ("psicóloga em Brasília").
→ `profissional.cidade`.

**9. Compromisso de tempo de resposta no WhatsApp**
O documento trata isso como o fator de conversão mais subestimado e sugere "até 4h em horário
comercial". Só entra na página se ela confirmar que consegue cumprir — prometer e não cumprir é
pior que não prometer.
→ `contato.tempoDeResposta`.

**10. URL do perfil no Google Empresas**
Vira um link discreto no rodapé. Apontar para o perfil é permitido; reproduzir as avaliações
dentro do site não é (seção 9 do documento).
→ `links.google`.

---

## Decisões de negócio

**11. E-book: data de lançamento, se é gratuito, e se tem arte de capa**
A seção existe e o formulário funciona na interface — valida o e-mail, mostra erro e sucesso.
O que falta é o backend: hoje o envio cai numa função stub que só registra no console.
Quando houver decisão, trocar **uma função** (`enviar`, em `src/components/Ebook.astro`) por
Formspree, MailerLite ou similar. Sugiro um ESP de verdade, porque o documento pede nutrição por
e-mail, não só coleta.
No lugar da capa real a seção mostra uma **capa simulada**: retângulo 3:4 em linho, com as folhas
da marca e o título em Gilda. Ela existe para a seção se ler como e-book de relance, inclusive no
mobile. Quando a arte real chegar, é trocar esse bloco por um `<img>` — `ebook.capa` continua
declarado e ainda não é consumido por nenhum componente.
→ `ebook.capa`.

**12. Aprovação do posicionamento "a psicóloga que explica"**
A página inteira está escrita em cima disso.

**13. Logo em vetor (SVG, AI ou PDF)**
O que temos é um JPEG de 1414px. Extraí a marca do cérebro dele como máscara alfa — funciona,
herda a cor do tema e fica nítida no tamanho em que é usada, mas veio de bitmap. Quem fez a
identidade tem o original.
→ `public/marca.png`.

**14. Domínio**
`astro.config.mjs` está com `rafaelamartins.com.br` de placeholder. Afeta a URL canônica e o
JSON-LD.

---

## Perguntas prontas para mandar

> 1. Você tem foto profissional? Se não, dá para marcar um ensaio? É o item de maior impacto na
>    conversão da página.
> 2. Qual o número do WhatsApp que você quer receber os contatos?
> 3. Quais são as 3 a 5 questões que mais aparecem no seu consultório hoje — e como as pessoas
>    descrevem isso com as palavras delas?
> 4. Quanto dura a sessão, com que frequência, e em qual plataforma?
> 5. Você emite recibo para reembolso de convênio?
> 6. Atende quem mora fora do Brasil?
> 7. Em quanto tempo você consegue se comprometer a responder uma mensagem?
> 8. Qual cidade/UF e o CRP-01 é do Distrito Federal mesmo?
> 9. Como você quer escrever o aviso sobre crise e emergência?
> 10. Me manda o link do seu perfil no Google Empresas?
> 11. O e-book sai quando? Vai ser gratuito? Tem capa?
> 12. O logo em vetor (SVG/AI/PDF) — quem fez tem o arquivo?
