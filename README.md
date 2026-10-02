# thiago — portfolio

Site estático (HTML, CSS e JavaScript puros), sem dependências e sem build.
Pronto para publicar no GitHub Pages, Netlify Drop ou Cloudflare Pages.

## Estrutura

```
meu-site/
├── index.html      página principal (marcação de todas as seções e páginas)
├── style.css       todos os estilos
├── script.js       interações, idiomas EN/PT e dados dos projetos
├── images/
│   ├── covers/     capas em mockup (1280px + versão -800 para celular)
│   └── projects/   pranchas completas de cada projeto (1200px + -800)
└── blips/
    ├── food.html             página da Blips Food exibida dentro do caso
    ├── vuze-5050/            LP da impressora 3D Vuze 5050
    ├── fiber-desktop-50w/    LP de financiamento da Fiber Desktop 50W
    └── flatbed-uv-9060/      LP de aluguel da Flatbed UV 9060
```

Peso total: cerca de 26 MB. Quase tudo são os vídeos das LPs da Fiber (18 MB) e
da Flatbed (3 MB), que só carregam quando aparecem na tela.

## O que o site tem

- **Hero** preto com blobs coloridos em movimento orgânico que reagem ao mouse,
  duas faixas diagonais em movimento e menu em pill de vidro que troca de tema
  conforme a seção (escuro sobre hero e contato, claro no meio).
- **Trabalhos**: 14 projetos com capa em mockup, contador de views e filtro por
  tipo (all, web e-commerce, web & ui, packaging, ads). As views aparecem sempre
  como número cheio arredondado para baixo, com "+" (ex.: 10.800 → +10k, 101 → +100).
- **Página de projeto**: abre por cima do site, com capa, descrição, tags,
  prancha completa e navegação anterior/próximo. Link próprio: `#projeto/<slug>`.
- **Caso Blips**: em vez de imagem, a página real roda dentro de um quadro com
  alternância desktop (viewport de 1440px reduzido) e mobile (390px).
- **Páginas about e contact**: abrem como overlay, links `#about` e `#contact`.
- **Dois idiomas**: inglês por padrão, português no botão EN/PT do menu.
  A escolha fica salva no navegador.
- Todo o texto é exibido em caixa baixa (via `text-transform` no CSS; o conteúdo
  original é preservado para leitores de tela).

## Como editar

- **Textos da interface (EN/PT)**: objeto `I18N`, no início do `script.js`.
- **Projetos** (título, cliente, ano, tags, descrição, views, link do Behance):
  array `PROJECTS`, logo abaixo do `I18N`.
- **Casos Blips**: array `CASES`, no `script.js`. Um caso com `before` e `after`
  ganha comparador com divisor arrastável; só com `after`, mostra a página inteira.
  Cada caso pode ter até três listas, exibidas nesta ordem: `process` ("Como foi feito",
  opcional), `notes` ("O projeto") e `results` ("Resultados", opcional). Cada item é
  `[título, frase completa]`, em `en` e em `pt`.
  Para exibir a etiqueta "Novo projeto" (na grade e na página do caso), adicione
  `isNew:true` ao caso; para tirá-la, apague essa linha ou troque por `false`.
  Páginas com imagens próprias ficam em subpasta, ex.: `blips/vuze-5050/index.html`
  com `blips/vuze-5050/assets/`.
- **Contatos**: no `index.html`, na seção `page-contact` e no botão do rodapé.
- **Foto do about**: coloque `images/perfil.webp` (opcional; sem ela, o site usa
  a foto do perfil do Behance).
- **Capas**: `images/covers/<key>.webp` e `<key>-800.webp`, onde `<key>` é o campo
  `key` do projeto no `script.js`.

## Publicar

### GitHub Pages
1. Envie **o conteúdo desta pasta** para a raiz de um repositório público
   (o `index.html` precisa ficar na raiz).
   Se o navegador travar ao enviar tudo de uma vez, faça em dois commits:
   primeiro os arquivos soltos e a pasta `blips`, depois a pasta `images`.
2. Settings → Pages → Source: **Deploy from a branch**, branch **main**, pasta **/ (root)** → Save.
3. Em um ou dois minutos o site fica no ar.
   Com o repositório chamado `usuario.github.io`, o endereço é `https://usuario.github.io/`.

### Netlify Drop
Crie a conta, abra app.netlify.com/drop e arraste a pasta inteira.

## Contatos usados no site

- e-mail: thiagoaraujoe@gmail.com
- whatsapp: +55 31 97584-9577
- linkedin: linkedin.com/in/thiagoaraujoe
