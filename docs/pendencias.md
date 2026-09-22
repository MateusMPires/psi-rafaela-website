# Pendências — o que falta para a página ir ao ar

Cada item diz **o que destrava** e **onde entra no código**. Tudo que depende da Rafaela vive
em [`src/content/site.ts`](../src/content/site.ts) — responder é editar um arquivo, não mexer
em componente.

O que está aqui vem das pendências da seção 14 do [documento de visão](business-vision.md) mais
o que apareceu ao construir.

---

## Bloqueia o lançamento

**1. Foto da Rafaela** — *resolvida em 14/09/2026*
A foto de perfil dela está no "Sobre" (`src/assets/rafaela-martins.jpeg` → `profissional.foto`).
A dobra continua com a ilustração e não volta a usar a foto sem decisão explícita.
Ressalva: é foto de celular que passou pelo WhatsApp (900×1600, comprimida). Se sair um ensaio
profissional, é trocar o arquivo — o enquadramento 4:5 fica em `object-position` no `Sobre.astro`.

**2. Número do WhatsApp**
Hoje os 5 botões da página caem no `wa.link/4hrkeq`, que funciona mas é encurtador de terceiro:
não controlamos a mensagem pré-preenchida, dependemos de um serviço que pode mudar de política, e
o clique não fica rastreável no nosso analytics. Com o número, os links viram
`wa.me/55DDNNNNNNNNN?text=...` com o texto já escrito, para a pessoa não ter que formular a
primeira frase — que é ponto real de desistência.
→ `contato.whatsappNumero`, formato só dígitos com país e DDD.

---

## Muda o conteúdo da página

**3. As demandas que ela mais atende** — *resolvida em 14/09/2026*
São seis, confirmadas pelo Mateus: **relacionamentos, compulsão alimentar, ansiedade, autoestima e
autocrítica, procrastinação, assertividade e limites**. Os textos das três primeiras foram mantidos;
os das três últimas partiram de um rascunho dela e foram reescritos na voz de quem sente.
Continua valendo mostrar os seis textos a ela antes de publicar — são a seção em que ela mais se
reconhece (ou não).
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

**8. Cidade/UF** — *resolvida em 14/09/2026*
Ela atende **online e presencialmente em Águas Claras, Brasília (DF)** — CRP-01 confere. A região
aparece na dobra, no "Sobre", no FAQ, no rodapé, no `meta` e no JSON-LD. O endereço completo do
consultório não vai para a página; é passado no WhatsApp.
→ `profissional.modalidade` e `profissional.local`.

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
**Fora da página desde 21/09/2026** (Mateus): enquanto não houver backend, `<Ebook />` não é
renderizado em `src/pages/index.astro`. Componente e copy seguem prontos; voltar é recolocar a linha.
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

**14. Domínio** — *resolvida*
`psirafaelamartins.com.br`, já em `astro.config.mjs` (URL canônica e JSON-LD). Deploy na
Cloudflare (Workers com assets estáticos), configurado em `wrangler.jsonc`.

---

## Perguntas prontas para mandar

> 1. (Opcional) Dá para marcar um ensaio profissional? A foto de perfil já está no ar, mas é de
>    celular e passou pelo WhatsApp.
> 2. Qual o número do WhatsApp que você quer receber os contatos?
> 3. Dá uma lida nos seis textos das demandas: é assim que as pessoas descrevem isso para você?
> 4. Quanto dura a sessão, com que frequência, e em qual plataforma (no online)?
> 5. Você emite recibo para reembolso de convênio?
> 6. Atende quem mora fora do Brasil?
> 7. Em quanto tempo você consegue se comprometer a responder uma mensagem?
> 8. Como você quer escrever o aviso sobre crise e emergência?
> 9. Me manda o link do seu perfil no Google Empresas?
> 10. O e-book sai quando? Vai ser gratuito? Tem capa?
> 11. O logo em vetor (SVG/AI/PDF) — quem fez tem o arquivo?
