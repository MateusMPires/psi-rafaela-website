# Landing page — Rafaela Martins, psicóloga clínica

## O que é
Página única de captação para o consultório da Rafaela Martins (CRP 01/26241), online e presencial
em Águas Claras, Brasília (DF). A copy é em primeira pessoa, na voz dela. O objetivo
é um só: fazer quem chega **iniciar uma conversa no WhatsApp**. O tráfego vem majoritariamente do
Instagram [@psirafaelamartins](https://www.instagram.com/psirafaelamartins/), quase sempre no
celular — **mobile é o projeto principal, desktop é a adaptação.**

## Stack
Astro (estático) + CSS puro com tokens. Sem Tailwind, sem framework de UI, sem runtime no cliente.
O único JS é o formulário do e-book (~1,4 KB inline). npm — o lockfile é `package-lock.json`.

```
npm run dev       # desenvolvimento
npm run build     # build estático em dist/
npm run preview   # serve o dist
```

## Regras invioláveis

**1. Nenhum fato sobre a Rafaela é escrito direto num componente.**
Todo texto e todo dado vivem em `src/content/site.ts`. O que ela ainda não confirmou entra
marcado com `pendente(...)` e a página **omite** ou usa um fallback declarado. Nunca preencher
com valor plausível — várias dessas afirmações têm peso ético e contratual.
Ver `docs/pendencias.md`.

**2. Os guard-rails éticos são critério de aceite, não sugestão.**
Base: Código de Ética Profissional do Psicólogo (Res. CFP 010/2005) e Res. CFP 011/2018.
Antes de qualquer publicação, a página não pode ter:
promessa ou garantia de resultado · prazo de cura · superlativo sobre a profissional
("a melhor", "referência em") · preço ou apelo promocional (desconto, pacote, sessão grátis,
contagem regressiva) · depoimento, print de WhatsApp ou nota em estrelas · caso clínico, mesmo
anonimizado · neurociência como credencial ou como tratamento.
E precisa ter: CRP visível na dobra e no rodapé · aviso de crise e emergência no rodapé ·
descrição honesta dos limites do atendimento online.

Neurociência entra como **pedagogia** ("por que seu cérebro trava quando você vai dizer não"),
nunca como rótulo do serviço. A técnica é TCC; a neurociência explica, não trata.

**3. O ouro é da ação.**
`--ouro` aparece na marca, no botão de WhatsApp e no fio de "Como funciona". Em mais nenhum lugar.
Nunca como cor de texto sobre papel (3,0:1) — para isso existe `--ouro-tinta`.

**4. Fundo diz função.**
Papel = o argumento principal. Linho = desvio de assunto (responsáveis, painel da primeira
conversa). Se tudo for tingido, o sinal morre.

**5. Sem pressão.**
Nada de contador, selo de urgência, escassez ou animação de entrada por seção. A página converte
por clareza e redução de medo — que é a estratégia certa e também o que a ética permite.

## Design
A direção visual está fechada e vem da **[base visual](https://claude.ai/code/artifact/d43a1a66-c9d1-4fba-89fb-d3c4bdc0f949)**
(wireframe das 9 seções + sistema completo). Os valores estão em `src/styles/tokens.css` e não se
alteram sem revisar o artifact: Gilda Display nos títulos, Spectral 300 no corpo (18px/1,68),
Hanken Grotesk na interface; papel `#FCFBF9`, linho `#F0E7E0`, ardósia `#232A31`, ouro `#C0A67C`.
O ouro tem duas faces: `--ouro` é marca e fio; `--ouro-acao` (`#7E6E52`) é o preenchimento do
botão, e o rótulo por cima dele é claro (`--sobre-ouro`, `#FCFBF9`) nos dois temas.
Tema escuro é receita própria, não inversão — o ouro clareia para `#D0B78F`, mas o fill do
botão não inverte.

No desktop, as seções que não têm segunda coluna são a coluna mobile **centrada em 660px**, não
texto encostado à esquerda do container.

## Validação antes de dizer que está pronto
1. `npm run build` limpo.
2. Screenshot em **390px e 1440px × claro e escuro** — os quatro. Regressão de tema é o erro mais
   comum aqui.
3. Percorrer os guard-rails da regra 2 no HTML de `dist/`.
4. Com JS desligado a página tem que continuar legível e o FAQ tem que continuar abrindo
   (é `<details>` nativo, de propósito).
5. Foco de teclado visível e alvo de toque ≥ 44px.

`playwright` está como devDependency só para isso.

## Documentos
- `docs/business-vision.md` — posicionamento, personas, jornada de conversão, ética. **Se uma
  decisão de design ou copy não puder ser justificada por alguma seção dele, ela está errada.**
- `docs/pendencias.md` — o que falta da Rafaela, o que cada item destrava, e as perguntas prontas.
