/* =========================================================
   TEXTOS DA INTERFACE — inglês (en) é o padrão, português (pt) opcional
   ========================================================= */
const I18N = {
  en: {
    "cases.before":"Before","cases.after":"After","cases.compare":"Compare","cases.desktop":"Desktop","cases.mobile":"Mobile",
    "cases.new":"New project","cases.improvements":"The project","cases.process":"How it was made","cases.results":"Results","cases.client":"Blips","cases.open":"Open the page in a new tab",
    "nav.work":"Work","nav.about":"About","nav.contact":"Contact","nav.status":"Available for freelance",
    "hero.title":"Design that solves real problems.",
    "hero.text":"Interfaces, landing pages, brands and paid-media creatives. Digital experiences that are simple, functional and visually engaging.",
    "hero.cta1":"See the work","hero.cta2":"Get in touch",
    "band1":["UI design","Landing pages","Branding","Meta Ads","AI tools","UX"],
    "band2":["Available for freelance","Mobile first","Web pages","Figma","Adobe CC"],
    "work.title":"Selected work","filter.all":"All",
    "type.blips":"Web e-commerce","type.web":"Web & UI","type.brand":"Packaging","type.ads":"Ads",
    "about.title":"Interface, brand and campaign designer.",
    "about.p1":"I work where strategy meets form: I understand the business problem, design the solution and make sure it works on screen and in people's hands. From wireframe to ready-to-run creative, with the same rigor.",
    "about.p2":"Working with design since 2016, I partner with companies in tech, healthcare, retail and services, on projects ranging from landing pages and digital products to visual identity and performance campaigns.",
    "skills":["UI & UX design","Landing pages & websites","Visual identity","Brand guidelines","Packaging","Meta Ads creatives","Figma","Adobe Creative Cloud"],
    "contact.title":"Have a project in mind? Let's talk.","contact.email":"Send an email","contact.emailLabel":"Email",
    "foot.rights":"© 2026 thiago. all rights reserved.","foot.where":"brazil — working remotely",
    "p.back":"Back to work","p.type":"Type","p.client":"Client","p.year":"Year","p.about":"About the project",
    "p.behance":"View on Behance","views":"Views","p.backhome":"Back","about.kicker":"About","contact.kicker":"Contact","contact.lead":"Pick the channel you prefer. I usually reply within a business day.","p.prev":"Previous","p.next":"Next","p.open":"Open project",
    "confidential":"Confidential","title":"Thiago Lemos — Interface, brand and campaign designer",
    "lang.switch":"Mudar para português"
  },
  pt: {
    "cases.before":"Antes","cases.after":"Depois","cases.compare":"Comparar","cases.desktop":"Desktop","cases.mobile":"Mobile",
    "cases.new":"Novo projeto","cases.improvements":"O projeto","cases.process":"Como foi feito","cases.results":"Resultados","cases.client":"Blips","cases.open":"Abrir a página em nova aba",
    "nav.work":"Trabalhos","nav.about":"Sobre","nav.contact":"Contato","nav.status":"Disponível para freelance",
    "hero.title":"Design que resolve problemas de verdade.",
    "hero.text":"Interfaces, landing pages, marcas e criativos para mídia paga. Experiências digitais simples, funcionais e visualmente envolventes.",
    "hero.cta1":"Ver trabalhos","hero.cta2":"Falar comigo",
    "band1":["UI design","Landing pages","Branding","Meta Ads","Ferramentas de IA","UX"],
    "band2":["Disponível para freelance","Mobile first","Páginas web","Figma","Adobe CC"],
    "work.title":"Trabalhos selecionados","filter.all":"Todos",
    "type.blips":"Web e-commerce","type.web":"Web & UI","type.brand":"Embalagem","type.ads":"Anúncios",
    "about.title":"Designer de interfaces, marcas e campanhas.",
    "about.p1":"Trabalho na interseção entre estratégia e forma: entendo o problema do negócio, desenho a solução e cuido para que ela funcione bem na tela e na mão de quem usa. Do wireframe ao criativo pronto para rodar, com o mesmo rigor.",
    "about.p2":"Trabalho com design desde 2016, atendendo empresas de tecnologia, saúde, varejo e serviços, em projetos que vão de landing pages e produtos digitais a identidade visual e campanhas de performance.",
    "skills":["UI e UX design","Landing pages e sites","Identidade visual","Brandbook","Embalagem","Criativos para Meta Ads","Figma","Adobe Creative Cloud"],
    "contact.title":"Tem um projeto em mente? Vamos conversar.","contact.email":"Enviar e-mail","contact.emailLabel":"E-mail",
    "foot.rights":"© 2026 thiago. todos os direitos reservados.","foot.where":"brasil — atendimento remoto",
    "p.back":"Voltar aos trabalhos","p.type":"Tipo","p.client":"Cliente","p.year":"Ano","p.about":"Sobre o projeto",
    "p.behance":"Ver no Behance","views":"Visualizações","p.backhome":"Voltar","about.kicker":"Sobre","contact.kicker":"Contato","contact.lead":"Escolha o canal que preferir. Costumo responder em até um dia útil.","p.prev":"Anterior","p.next":"Próximo","p.open":"Abrir projeto",
    "confidential":"Confidencial","title":"Thiago Lemos — Designer de interfaces, marcas e campanhas",
    "lang.switch":"Switch to English"
  }
};

/* =========================================================
   PROJETOS
   - capa: images/covers/<key>.webp (mockup padronizado)
   - página completa: images/projects/<key>.webp (aparece dentro do projeto)
   - título, cliente, tags e descrição têm versão en e pt
   ========================================================= */
const PROJECTS = [
  {slug:"redlinemd-redesign", key:"redline", type:"web", year:"2026", views:6405,
   behance:"https://www.behance.net/gallery/255634425/Redesign-project-Webpage-UX",
   en:{title:"RedlineMD — Mobile redesign", client:"RedlineMD", tags:["UX","Mobile first","Redesign","Figma"],
       desc:["This is the redesign of the RedlineMD page. RedlineMD is a service that reviews and renegotiates employment contracts for doctors. The main goal was to turn more visitors from Google Ads into customers and to make the page feel more polished, especially on phones.",
             "These were the main changes. The top of the page is cleaner, with the logo and the menu in new positions. The main button moved to the start of the page, so it is easier to reach. Dots below the carousel reduce how much the visitor has to scroll. The feature cards now use the brand colors and icons with better contrast. The card with the final button has an image, and the numbers section is more convincing.",
             "The work was done in Figma within one hour. Because of that, the priority was the changes that make the page easier to use and get more visitors to take action."]},
   pt:{title:"RedlineMD — Redesign mobile", client:"RedlineMD", tags:["UX","Mobile first","Redesign","Figma"],
       desc:["Este é o redesign da página da RedlineMD, um serviço que analisa e renegocia contratos de trabalho de médicos. O objetivo principal era transformar mais visitantes vindos do Google Ads em clientes e deixar a página mais bem acabada, principalmente no celular.",
             "Estas foram as principais mudanças. O topo da página ficou mais limpo, com o logo e o menu em novas posições. O botão principal subiu para o início da página e ficou mais fácil de alcançar. Os pontinhos abaixo do carrossel reduzem a rolagem. Os cartões de vantagens ganharam as cores da marca e ícones com mais contraste. O cartão do botão final ganhou uma imagem, e a seção de números ficou mais convincente.",
             "O trabalho foi feito no Figma em uma hora. Por isso, a prioridade foi para as mudanças que deixam a página mais fácil de usar e levam mais visitantes a agir."]}},

  {slug:"avance-global-private-jet", key:"jet", type:"web", year:"2026", views:3571,
   behance:"https://www.behance.net/gallery/254543405/Web-Page-Design-Private-Jet",
   en:{title:"Avance Global — Private jet booking", client:"Avance Global", tags:["Web design","UI","Luxury","Desktop & mobile"],
       desc:["This is the website of a private aviation company. The company wanted to strengthen its digital presence and attract high-end clients. In this market, the first impression is everything. So the site had to show exclusivity, confidence and premium service from the very first screen.",
             "The design uses cinematic photos, very large lettering and a dark color palette. Clean layouts and plenty of empty space keep everything balanced. The work covers the home page, the aircraft catalog and the destinations, in desktop and mobile versions. Together, they lead the visitor naturally to the quote request."]},
   pt:{title:"Avance Global — Reserva de jatos particulares", client:"Avance Global", tags:["Web design","UI","Luxo","Desktop e mobile"],
       desc:["Este é o site de uma empresa de aviação executiva. A empresa queria fortalecer sua presença digital e atrair clientes de alto padrão. Nesse mercado, a primeira impressão é tudo. Por isso, o site precisava mostrar exclusividade, confiança e serviço premium já na primeira tela.",
             "O design usa fotos de estilo cinematográfico, letras bem grandes e uma paleta escura. Layouts limpos e bastante espaço em branco equilibram o conjunto. O trabalho inclui a página inicial, o catálogo de aeronaves e os destinos, em versões para computador e celular. Juntas, elas levam o visitante de forma natural até o pedido de cotação."]}},

  {slug:"pto-exchange", key:"pto", type:"web", year:"2025", views:7568,
   behance:"https://www.behance.net/gallery/239940969/Webpage-UI-Design",
   en:{title:"PTO Exchange — Web page UI/UX", client:"PTO Exchange", tags:["UI","UX","B2B","Desktop & mobile"],
       desc:["This is the web page of PTO Exchange, a benefits platform. It lets employees turn unused vacation days into retirement savings, student loan payments, travel and more.",
             "The goal was a page that is simple to navigate and speaks directly to people who work in HR. The result is a clean and intuitive layout built around what HR teams need. It highlights prices, benefits and frequently asked questions, so visitors quickly understand the value. The process followed these steps: briefing, research on the target audience and on similar products, mapping the visitor's path through the page, a design that adapts to any screen size, and tests with users."]},
   pt:{title:"PTO Exchange — Web page UI/UX", client:"PTO Exchange", tags:["UI","UX","B2B","Desktop e mobile"],
       desc:["Esta é a página web da PTO Exchange, uma plataforma de benefícios. Ela permite que o funcionário transforme férias não usadas em previdência, pagamento de empréstimo estudantil, viagens e mais.",
             "O objetivo era uma página simples de navegar e feita para quem trabalha em RH. O resultado é um layout limpo e intuitivo, pensado nas necessidades desse público. Ele destaca preços, benefícios e dúvidas frequentes, para que o visitante entenda o valor rapidamente. O processo seguiu estas etapas: briefing, pesquisa sobre o público e sobre produtos parecidos, mapa do caminho do visitante pela página, design que se adapta a qualquer tela e testes com usuários."]}},

  {slug:"healify-packaging", key:"healify", type:"brand", year:"2026", views:1891,
   behance:"https://www.behance.net/gallery/252479475/Packaging-System-for-Medical-Cannabis",
   en:{title:"Healify — Medical cannabis packaging", client:"Healify", tags:["Packaging","Visual identity","Color system"],
       desc:["This is a packaging system for a line of medical cannabis products in the Brazilian market. The challenge was to balance a heavily regulated category with a modern identity that people can trust, so patients feel comfortable and safe with the product.",
             "Research on pharmaceutical packaging and premium wellness brands led to a minimal system. It organizes the information clearly and uses a color code to tell the versions apart: Boost + Recovery, Slim, Sleep and Focus, in drops, gummies and capsules. The result combines the information required by regulation with a modern visual language."]},
   pt:{title:"Healify — Embalagens de cannabis medicinal", client:"Healify", tags:["Embalagem","Identidade visual","Sistema de cores"],
       desc:["Este é um sistema de embalagens para uma linha de produtos de cannabis medicinal no mercado brasileiro. O desafio era equilibrar uma categoria muito regulada com uma identidade moderna e confiável, para que o paciente se sinta à vontade e seguro com o produto.",
             "A pesquisa sobre embalagens de farmácia e marcas premium de bem-estar levou a um sistema minimalista. Ele organiza as informações com clareza e usa um código de cores para diferenciar as versões: Boost + Recovery, Slim, Sleep e Focus, em gotas, gomas e cápsulas. O resultado une as informações exigidas pela regulação com uma linguagem visual moderna."]}},

  {slug:"oticas-carol", key:"oticas", type:"ads", year:"2022", views:2286,
   behance:"https://www.behance.net/gallery/156804477/Oticas-Carol-Criativos-Facebook-ADS",
   en:{title:"Óticas Carol — Lead generation ads", client:"Óticas Carol", tags:["Meta Ads","Creatives","Retail","Feed & stories"],
       desc:["These are the ads created for a campaign to attract interested potential customers to the Óticas Carol store in Ponta Porã. The offers were free eye exams, store-wide discounts, the store's third anniversary, Father's Day and contact lens deals.",
             "The ads come in feed and stories formats and use the brand's blue and yellow. In each one, the offer is the main highlight, and a clear message invites people to book an appointment or visit the store."]},
   pt:{title:"Óticas Carol — Criativos para geração de leads", client:"Óticas Carol", tags:["Meta Ads","Criativos","Varejo","Feed e stories"],
       desc:["Estes são os anúncios criados para uma campanha que buscava atrair clientes realmente interessados para a loja Óticas Carol de Ponta Porã. As ofertas eram exame de vista grátis, descontos em toda a loja, aniversário de 3 anos, Dia dos Pais e lentes de contato.",
             "Os anúncios têm formatos de feed e de stories e usam o azul e o amarelo da marca. Em cada peça, a oferta é o destaque principal, e uma mensagem clara convida a pessoa a agendar um horário ou ir até a loja."]}},

  {slug:"adaptive-erp-landing", key:"erp", type:"web", year:"2023", views:9879,
   behance:"https://www.behance.net/gallery/185614153/Landing-Page-Software-ERP",
   en:{title:"Adaptive — ERP landing page", client:"Adaptive", tags:["Landing page","UI","B2B","Clarity research"],
       desc:["This is a short sales page for Adaptive, a management system (ERP) for gas stations, wholesalers and supermarkets. The goal was a page that works well and leads more visitors to ask for contact.",
             "Heatmaps from Microsoft Clarity, a tool that shows where visitors click, revealed two things. Visitors stayed about 30 seconds on the page and left before reaching the form. And the buttons for the free demo got the most clicks. To fix this, the content was cut down to the essentials, and the demo request was moved closer to the top of the page."]},
   pt:{title:"Adaptive — Landing page de ERP", client:"Adaptive", tags:["Landing page","UI","B2B","Pesquisa com Clarity"],
       desc:["Esta é uma página de vendas curta para a Adaptive, um sistema de gestão (ERP) para postos de combustível, atacadistas e supermercados. O objetivo era uma página que funcionasse bem e levasse mais visitantes a pedir contato.",
             "Os mapas de calor do Microsoft Clarity, ferramenta que mostra onde os visitantes clicam, revelaram duas coisas. Os visitantes ficavam cerca de 30 segundos na página e saíam antes de chegar ao formulário. E os botões da demonstração grátis eram os mais clicados. Para resolver isso, o conteúdo foi reduzido ao essencial e o pedido de demonstração foi levado para mais perto do topo da página."]}},

  {slug:"digitalbot-chatbot-landing", key:"chatbot", type:"web", year:"2023", views:2642,
   behance:"https://www.behance.net/gallery/185131407/Landing-Page-Chatbot",
   en:{title:"DigitalBot — B2B chatbot landing page", client:"DigitalBot", tags:["Landing page","UX","Persona","Wireframe"],
       desc:["This is the landing page of DigitalBot, a chatbot service for companies in many industries and a partner of Take Blip. The goal was a simple, functional page that attracts interested potential customers.",
             "The work started with benchmarking, which means comparing similar pages, and with customer data. From them, a persona, which is a profile of the ideal customer, summed up the main problems to solve: no team to answer every contact, and sales lost because replies are slow. Then came the wireframes, which are simple sketches of the page, and the final design. The page has several action buttons that follow the buyer's journey, in desktop and mobile versions."]},
   pt:{title:"DigitalBot — Landing page de chatbot B2B", client:"DigitalBot", tags:["Landing page","UX","Persona","Wireframe"],
       desc:["Esta é a landing page da DigitalBot, um serviço de chatbot para empresas de vários segmentos e parceira da Take Blip. O objetivo era uma página simples e funcional, que atraísse clientes em potencial realmente interessados.",
             "O trabalho começou com benchmarking, que é a comparação com páginas parecidas, e com dados de clientes. Com isso, foi criada uma persona, que é o perfil do cliente ideal, resumindo os principais problemas a resolver: falta de equipe para atender todos os contatos e vendas perdidas pela demora nas respostas. Depois vieram os wireframes, que são esboços simples da página, e o design final. A página tem vários botões de ação que acompanham a jornada do comprador, em versões para computador e celular."]}},

  {slug:"batmaid-ads", key:"batmaid", type:"ads", year:"2023", views:7091,
   behance:"https://www.behance.net/gallery/173013607/ADS-Batmaid-Suica-Criativos-para-Meta",
   en:{title:"Batmaid (Switzerland) — Meta Ads", client:"Batmaid", tags:["Meta Ads","Creatives","International"],
       desc:["These are the ads of a Batmaid campaign in Switzerland. Batmaid is an app for booking home cleaning services.",
             "The set mixes three kinds of ads: pieces focused on price (39 CHF per hour, with no hidden fees), customer testimonials and messages about the app. All of them use the brand's blue and a clean layout that is quick to read in the feed."]},
   pt:{title:"Batmaid (Suíça) — Meta Ads", client:"Batmaid", tags:["Meta Ads","Criativos","Internacional"],
       desc:["Estes são os anúncios de uma campanha da Batmaid na Suíça. A Batmaid é um aplicativo para contratar serviços de limpeza residencial.",
             "O conjunto mistura três tipos de anúncio: peças focadas no preço (39 CHF por hora, sem taxas escondidas), depoimentos de clientes e mensagens sobre o aplicativo. Todos usam o azul da marca e um layout limpo, que se lê rápido no feed."]}},

  {slug:"algar-telecom-ads", key:"algar", type:"ads", year:"2023", views:2050,
   behance:"https://www.behance.net/gallery/173013387/ADS-Algar-Telecom-Criativos-para-Meta",
   en:{title:"Algar Telecom — Meta Ads", client:"Algar Telecom", tags:["Meta Ads","Creatives","Telecom","Stories"],
       desc:["These are the ads created for Algar Telecom on the Meta platform, which includes Facebook and Instagram. They promote internet and combo plans: fiber of 300 Mb and 600 Mb, mobile phone and landline.",
             "In every ad, speed and price are the main message. The brand's vibrant green gradient and the play symbol frame the people. The ads come in feed and stories formats."]},
   pt:{title:"Algar Telecom — Meta Ads", client:"Algar Telecom", tags:["Meta Ads","Criativos","Telecom","Stories"],
       desc:["Estes são os anúncios criados para a Algar Telecom na plataforma Meta, que inclui o Facebook e o Instagram. Eles divulgam planos de internet e combos: fibra de 300 Mb e 600 Mb, celular e telefone fixo.",
             "Em todos os anúncios, velocidade e preço são a mensagem principal. O degradê verde vibrante da marca e o símbolo de play emolduram as pessoas. Os anúncios têm formatos de feed e de stories."]}},

  {slug:"natura-ads", key:"natura", type:"ads", year:"2023", views:9413,
   behance:"https://www.behance.net/gallery/173010743/Criativos-Natura-Meta-ADS-Produtos-de-Beleza",
   en:{title:"Natura — Store traffic campaign", client:"Natura", tags:["Meta Ads","Creatives","Beauty","Retail"],
       desc:["These are the ads from one stage of a campaign that aimed to bring more customers to Natura's physical stores.",
             "Three moments share one visual system: the Tododia summer line, gift sets with prices for special dates, and Natura Friday with up to 50% off. The ads keep the warm feeling of the brand and make every offer easy to read."]},
   pt:{title:"Natura — Campanha para lojas físicas", client:"Natura", tags:["Meta Ads","Criativos","Beleza","Varejo"],
       desc:["Estes são os anúncios de uma etapa de campanha que buscava levar mais clientes às lojas físicas da Natura.",
             "Três momentos compartilham um mesmo sistema visual: a linha Tododia de verão, kits de presente com preço para datas especiais e a Natura Friday, com até 50% de desconto. Os anúncios mantêm o calor da marca e deixam cada oferta fácil de ler."]}}
];


/* =========================================================
   CASOS BLIPS — before/after são páginas HTML dentro de blips/
   Para ativar um caso, coloque os dois arquivos na pasta e deixe pending:false
   ========================================================= */
const CASES = [
  {id:"food", pending:false, views:10800, before:null, after:"blips/food.html", cover:"food", seg:["Alimentar","Landing page"],
   en:{title:"Blips Food — Equipment landing page",
       notes:[["A menu that adapts to the background","The floating menu changes color to match what is behind it: yellow over white sections and white over colored ones. On phones, it hides while you scroll down. It also opens a panel with the categories and their icons."],
              ["The offer on the first screen","The first screen shows a yellow card with the product line, the main headline and a price box. The price box places the entry amount and the number of installments side by side."],
              ["One section per category","Each of the six equipment categories has its own section, which shows how many models it has. Each model has a card with two key specs, a full spec sheet that opens and closes, and a button to ask for a quote."],
              ["Cards that always stay aligned","Every product image area has the same height, and titles never go past two lines. A category with only one model appears as a wide horizontal card on desktop."],
              ["Advantages designed for phones","On phones, the red block with the company's advantages becomes a carousel that stops on each card, with dots below. The card in view turns white to stand out."],
              ["A form, four steps and an FAQ","The page ends with a request form that asks for consent under the LGPD, Brazil's data protection law. It also has a four-step timeline, numbers that count up as they appear on screen, and an FAQ where each answer opens on click."]]},
   pt:{title:"Blips Food — Landing page de equipamentos",
       notes:[["Um menu que se adapta ao fundo","O menu flutuante muda de cor para combinar com o que está atrás dele: amarelo sobre as seções brancas e branco sobre as coloridas. No celular, ele se esconde quando você rola a página para baixo. Ele também abre um painel com as categorias e seus ícones."],
              ["A oferta na primeira tela","A primeira tela mostra um cartão amarelo com a linha de produtos, o título principal e uma caixa de preço. A caixa de preço coloca o valor de entrada e o número de parcelas lado a lado."],
              ["Uma seção para cada categoria","Cada uma das seis categorias de equipamentos tem a sua própria seção, que mostra quantos modelos ela tem. Cada modelo tem um cartão com duas especificações principais, uma ficha completa que abre e fecha e um botão para pedir orçamento."],
              ["Cartões sempre alinhados","A área da imagem de cada produto tem a mesma altura, e os títulos nunca passam de duas linhas. Uma categoria com um só modelo aparece como um cartão largo na horizontal no computador."],
              ["Vantagens pensadas para o celular","No celular, o bloco vermelho com as vantagens da empresa vira um carrossel que para em cada cartão, com pontinhos abaixo. O cartão que está na tela fica branco para se destacar."],
              ["Um formulário, quatro passos e um FAQ","A página termina com um formulário de pedido que pede o consentimento exigido pela LGPD, a lei brasileira de proteção de dados. Ela também tem uma linha do tempo com quatro passos, números que contam quando aparecem na tela e um FAQ em que cada resposta abre com um clique."]]}},

  {id:"vuze-5050", pending:false, isNew:true, views:101, before:null, after:"blips/vuze-5050/index.html", cover:"vuze5050", seg:["Comunicação visual","Landing page"],
   en:{title:"Vuze 5050 3D printer — Sales landing page",
       process:[["Starting from the standard Blips page structure","The page follows the structure Blips uses for its equipment pages. It opens with the offer, then shows the product and the proof from other customers, then the form. It ends by answering the last doubts in the FAQ."],
                ["A menu that helps people find things","The floating menu from the Blips Food page was brought to this page. It reads the color behind it and changes its own color, so it stays easy to read."],
                ["Respect for the visual identity","Colors, fonts, buttons and spacing follow the Blips brand. This way, the page looks like part of the same family as the other Blips pages."],
                ["Designed for the phone first","Each section was checked at phone size before being adapted to larger screens."],
                ["One button style for the whole page","The whole page uses a single button style. This way, visitors always recognize what they can click."],
                ["Gentle movement","The animations are soft and short. They turn off by themselves for people who prefer less motion on their devices."]],
       notes:[["A menu with a map of the page","A floating menu opens a panel that lists all nine sections. Each one has an icon and a short description. The section you are viewing is highlighted."],
              ["A bar that stays on the phone screen","On phones, a bar stays at the bottom with the 18x offer and the quote button. This way, visitors can ask for a quote at any moment. The buttons inside each section are hidden on phones, to avoid repeating the same action."],
              ["One section per screen on phones","Scrolling stops at the start of each section. Long sections were split into separate screens, so each screen shows only one idea."],
              ["The spec sheet in a single section","The technical details live in one section. It has an image with the dimensions, two highlights and lists that open one at a time."],
              ["An earnings simulator","The expected revenue comes first. Below it, the costs (material and installment) are listed on the right. The amount left for the customer appears on a yellow strip."],
              ["Carousels that are easy to use","Benefits and WhatsApp conversations slide sideways, with dots below. They never scroll up or down by accident."]],
       results:[["The offer is visible right away","The first screen shows 18 interest-free installments next to the cash price."],
                ["A light page","With all its images, the page weighs about 0.5 MB, not counting the customer video. The video only loads when the visitor presses play."],
                ["A form ready to be measured","Each request sent through the form fires a 'lead sent' event that Google Tag Manager can read. This way, the team can count how many contacts arrive."],
                ["A page prepared for search engines","The page has a title, a description, and product and FAQ data written in the format that Google reads."]]},
   pt:{title:"Impressora 3D Vuze 5050 — Landing page de venda",
       process:[["Ponto de partida: a estrutura padrão das páginas Blips","A página segue a estrutura que a Blips usa nas páginas de equipamentos. Ela começa com a oferta, depois mostra o produto e a prova de outros clientes, e então o formulário. No fim, responde as últimas dúvidas no FAQ."],
                ["Um menu que ajuda a achar as coisas","O menu flutuante da página Blips Food foi trazido para esta página. Ele lê a cor que está atrás dele e muda a própria cor, para continuar fácil de ler."],
                ["Respeito à identidade visual","Cores, fontes, botões e espaçamentos seguem a marca Blips. Assim, a página parece fazer parte da mesma família das outras páginas da Blips."],
                ["Pensada primeiro para o celular","Cada seção foi conferida no tamanho de tela do celular antes de ser adaptada para telas maiores."],
                ["Um só estilo de botão na página inteira","A página inteira usa um único estilo de botão. Assim, o visitante sempre reconhece o que pode clicar."],
                ["Movimentos suaves","As animações são leves e curtas. Elas se desligam sozinhas para quem prefere menos movimento no aparelho."]],
       notes:[["Um menu com o mapa da página","Um menu flutuante abre um painel que lista as nove seções. Cada uma tem um ícone e uma descrição curta. A seção que você está vendo fica destacada."],
              ["Uma barra que fica na tela do celular","No celular, uma barra fica na parte de baixo com a oferta em 18x e o botão de orçamento. Assim, o visitante pode pedir um orçamento a qualquer momento. Os botões dentro de cada seção ficam escondidos no celular, para não repetir a mesma ação."],
              ["Uma seção por tela no celular","A rolagem para no começo de cada seção. As seções longas foram divididas em telas separadas, para que cada tela mostre uma ideia só."],
              ["A ficha técnica em uma única seção","Os detalhes técnicos ficam em uma só seção. Ela tem uma imagem com as dimensões, dois destaques e listas que abrem uma de cada vez."],
              ["Um simulador de ganho","O faturamento esperado vem primeiro. Abaixo dele, os custos (material e parcela) aparecem em uma lista à direita. O valor que sobra para o cliente aparece em uma faixa amarela."],
              ["Carrosséis fáceis de usar","Os benefícios e as conversas de WhatsApp deslizam para o lado, com pontinhos abaixo. Eles nunca rolam para cima ou para baixo sem querer."]],
       results:[["A oferta aparece logo de cara","A primeira tela mostra 18 parcelas sem juros ao lado do preço à vista."],
                ["Uma página leve","Com todas as imagens, a página pesa cerca de 0,5 MB, sem contar o vídeo de clientes. O vídeo só carrega quando o visitante aperta o play."],
                ["Um formulário pronto para ser medido","Cada pedido enviado pelo formulário dispara um evento de 'lead enviado' que o Google Tag Manager consegue ler. Assim, o time pode contar quantos contatos chegam."],
                ["Uma página preparada para os buscadores","A página tem título, descrição e dados do produto e do FAQ escritos no formato que o Google lê."]]}},

  {id:"fiber-desktop-50w", pending:false, views:1046, before:null, after:"blips/fiber-desktop-50w/index.html", cover:"fiber50w", seg:["Artesanato e brindes","Landing page"],
   en:{title:"Fiber Desktop 50W laser — Financing landing page",
       process:[["One page for one machine","The old page listed six fiber laser machines. The new page focuses on a single model, the Fiber Desktop 50W, so visitors don't have to compare and choose."],
                ["Starting from the newest Blips page standard","The page follows the latest Blips standard: yellow sections, a menu with only the logo and the Blips form."],
                ["An offer built around financing","Instead of 18 installments on a credit card, the offer is a down payment plus the rest in up to 36 monthly bank slips. The amounts were checked against the marketing team's price sheet."],
                ["Videos adjusted for the page","The original sound was removed, and each video got its own original soundtrack, free of copyright issues. The first 11 seconds of one video were cut because they showed a different machine."],
                ["Respect for the visual identity","Colors, fonts, buttons and spacing follow the Blips brand. This way, the page looks like part of the same family as the other Blips pages."],
                ["Designed for the phone first","Each section was built at phone size first and then adapted to larger screens."]],
       notes:[["A menu that gets out of the way","The floating menu shows only the Blips logo. On phones, it hides when you scroll down and comes back when you scroll up."],
              ["The offer on the first screen","The first screen shows the down payment and the rest in up to 36 installments. A short note explains that the offer depends on a credit check."],
              ["Two videos side by side","Two vertical videos show the machine engraving a knife blade and texts in many sizes. They play without sound when they appear and pause when they leave the screen. Only one video can play with sound at a time."],
              ["A simulator with the payment term","Visitors enter how many pieces they engrave per week, the average price and the cost of each piece. They also choose 12, 24 or 36 installments. The page then shows the monthly revenue, the costs, the installment and what is left over."],
              ["A spec sheet in five groups","The technical details are split into five groups. Only one group opens at a time, and on phones all of them start closed."],
              ["Help always within reach on phones","On phones, a bar stays at the bottom of the screen with the offer and the quote button. The benefits and the customer messages slide sideways, with dots below."]],
       results:[["The offer is clear right away","The first screen shows the down payment and the 36-installment plan, with the credit check note next to them."],
                ["A light page","Without the videos, the page files add up to about 0.3 MB. The videos only start loading when they appear on the screen."],
                ["Ready for search engines and sharing","The page has a title, a description and a preview for social networks and messaging apps. It also has the company data written in the format that Google reads."],
                ["Comfortable for more people","The animations turn off for people who prefer less motion on their devices. The videos have descriptions that screen readers can announce."]]},
   pt:{title:"Laser Fiber Desktop 50W — Landing page de financiamento",
       process:[["Uma página para uma máquina só","A página antiga listava seis máquinas a laser fiber. A nova página foca em um único modelo, a Fiber Desktop 50W, para que o visitante não precise comparar e escolher."],
                ["Ponto de partida: o padrão mais novo das páginas Blips","A página segue o padrão mais recente da Blips: seções amarelas, um menu só com o logo e o formulário da Blips."],
                ["Uma oferta pensada para o financiamento","No lugar das 18 parcelas no cartão, a oferta é uma entrada e o restante em até 36 vezes no boleto. Os valores foram conferidos na planilha de preços do time de marketing."],
                ["Vídeos ajustados para a página","O som original foi retirado, e cada vídeo ganhou uma trilha original própria, sem problema de direitos autorais. Os 11 primeiros segundos de um dos vídeos foram cortados porque mostravam outra máquina."],
                ["Respeito à identidade visual","Cores, fontes, botões e espaçamentos seguem a marca Blips. Assim, a página parece fazer parte da mesma família das outras páginas da Blips."],
                ["Pensada primeiro para o celular","Cada seção foi montada primeiro no tamanho de tela do celular e depois adaptada para telas maiores."]],
       notes:[["Um menu que sai da frente","O menu flutuante mostra só o logo da Blips. No celular, ele se esconde quando você rola a página para baixo e volta quando você rola para cima."],
              ["A oferta na primeira tela","A primeira tela mostra o valor da entrada e o restante em até 36 vezes. Uma nota curta avisa que a oferta depende de análise de crédito."],
              ["Dois vídeos lado a lado","Dois vídeos verticais mostram a máquina gravando a lâmina de uma faca e textos de vários tamanhos. Eles tocam sem som quando aparecem na tela e pausam quando saem dela. Só um vídeo toca com som de cada vez."],
              ["Um simulador com o prazo do boleto","O visitante informa quantas peças grava por semana, o preço médio e o custo de cada peça. Ele também escolhe 12, 24 ou 36 vezes. A página mostra então o faturamento do mês, os custos, a parcela e o que sobra."],
              ["Uma ficha técnica em cinco grupos","Os detalhes técnicos foram divididos em cinco grupos. Só um grupo abre de cada vez, e no celular todos começam fechados."],
              ["Ajuda sempre à mão no celular","No celular, uma barra fica na parte de baixo da tela com a oferta e o botão de orçamento. Os benefícios e as mensagens de clientes deslizam para o lado, com pontinhos abaixo."]],
       results:[["A oferta fica clara logo de cara","A primeira tela mostra a entrada e o plano em 36 vezes, com o aviso da análise de crédito ao lado."],
                ["Uma página leve","Sem os vídeos, os arquivos da página somam cerca de 0,3 MB. Os vídeos só começam a carregar quando aparecem na tela."],
                ["Pronta para buscadores e para compartilhar","A página tem título, descrição e uma prévia para redes sociais e aplicativos de mensagem. Ela também traz os dados da empresa no formato que o Google lê."],
                ["Confortável para mais pessoas","As animações se desligam para quem prefere menos movimento no aparelho. Os vídeos têm descrições que os leitores de tela conseguem anunciar."]]}},

  {id:"flatbed-uv-9060", pending:false, views:2038, before:null, after:"blips/flatbed-uv-9060/index.html", cover:"flatbed9060", seg:["Comunicação visual","Landing page"],
   en:{title:"Flatbed UV 9060 printer — Rental landing page",
       process:[["Starting from a Blips rental page","The page uses the Blips rental page of the Vuze Cut 120S cutting plotter as its model. The printer details came from the Ideal Distribuidora page for the same machine."],
                ["The lowest plan as the main price","The price on the first screen is the lowest monthly rental plan, taken from the marketing team's price sheet. The simulator uses this same amount."],
                ["Small fixes to the model","The footer no longer links to the main Blips website. The 'How it works' section lost its white box, its titles were aligned and its timeline became black. The product photos are shown whole, without cropping."],
                ["A video with its own soundtrack","The short video of the printer at work got an original soundtrack, free of copyright issues."],
                ["Respect for the visual identity","The page uses the Blips logo, the Blips yellow, yellow sections and a black numbers section, like the other Blips rental pages."],
                ["Designed for the phone first","Each section was built at phone size first and then adapted to larger screens."]],
       notes:[["A menu that gets out of the way","The floating menu shows only the Blips logo. On phones, it hides when you scroll down and comes back when you scroll up."],
              ["The monthly plan on the first screen","The first screen shows plans starting at R$ 4,429.67 per month, without tying up the company's cash. Below the price, three short notes mention free installation, technical assistance and specialized support."],
              ["A video that plays at the right time","The video plays without sound when it appears and pauses when it leaves the screen. Visitors can turn the sound on if they want."],
              ["A simulator that compares with the rent","Visitors enter how many pieces they sell per week, the average price and the cost of ink and material. The page then shows the monthly revenue, the costs, the rent and what is left over."],
              ["A spec sheet in four groups","The technical details are split into four groups, and one of them explains the rental service. Only one group opens at a time, and on phones all of them start closed."],
              ["Photos next to the form","Next to the form, the printer photos change by themselves, with dots below. On phones, a bar stays at the bottom of the screen with the monthly price and the rent button."]],
       results:[["The price is clear right away","The first screen shows the starting monthly price, with the credit check note right below it."],
                ["A light page","Without the video, the page files add up to about 0.4 MB. The video only starts loading when it appears on the screen."],
                ["Ready for search engines and sharing","The page has a title, a description and a preview for social networks and messaging apps. It also has the company data written in the format that Google reads."],
                ["Comfortable for more people","The animations turn off for people who prefer less motion on their devices. The video has a description that screen readers can announce."]]},
   pt:{title:"Impressora Flatbed UV 9060 — Landing page de aluguel",
       process:[["Ponto de partida: uma página de aluguel da Blips","A página usa como modelo a página de aluguel da Blips da plotter de recorte Vuze Cut 120S. As informações da impressora vieram da página da Ideal Distribuidora para a mesma máquina."],
                ["O menor plano como preço principal","O preço da primeira tela é o menor plano mensal de aluguel, tirado da planilha de preços do time de marketing. O simulador usa esse mesmo valor."],
                ["Pequenos ajustes no modelo","O rodapé não leva mais para o site principal da Blips. A seção 'Como funciona' perdeu a caixa branca, ganhou títulos alinhados e uma linha do tempo preta. As fotos do produto aparecem inteiras, sem corte."],
                ["Um vídeo com trilha própria","O vídeo curto da impressora trabalhando ganhou uma trilha original, sem problema de direitos autorais."],
                ["Respeito à identidade visual","A página usa o logo e o amarelo da Blips, seções amarelas e uma seção de números em preto, como as outras páginas de aluguel da Blips."],
                ["Pensada primeiro para o celular","Cada seção foi montada primeiro no tamanho de tela do celular e depois adaptada para telas maiores."]],
       notes:[["Um menu que sai da frente","O menu flutuante mostra só o logo da Blips. No celular, ele se esconde quando você rola a página para baixo e volta quando você rola para cima."],
              ["O plano mensal na primeira tela","A primeira tela mostra planos a partir de R$ 4.429,67 por mês, sem imobilizar o caixa da empresa. Abaixo do preço, três notas curtas falam de instalação gratuita, assistência técnica e suporte especializado."],
              ["Um vídeo que toca na hora certa","O vídeo toca sem som quando aparece na tela e pausa quando sai dela. O visitante pode ligar o som se quiser."],
              ["Um simulador que compara com o aluguel","O visitante informa quantas peças vende por semana, o preço médio e o custo de tinta e material. A página mostra então o faturamento do mês, os custos, o aluguel e o que sobra."],
              ["Uma ficha técnica em quatro grupos","Os detalhes técnicos foram divididos em quatro grupos, e um deles explica o serviço de aluguel. Só um grupo abre de cada vez, e no celular todos começam fechados."],
              ["Fotos ao lado do formulário","Ao lado do formulário, as fotos da impressora trocam sozinhas, com pontinhos abaixo. No celular, uma barra fica na parte de baixo da tela com o preço mensal e o botão para alugar."]],
       results:[["O preço fica claro logo de cara","A primeira tela mostra o preço mensal inicial, com o aviso da análise de crédito logo abaixo."],
                ["Uma página leve","Sem o vídeo, os arquivos da página somam cerca de 0,4 MB. O vídeo só começa a carregar quando aparece na tela."],
                ["Pronta para buscadores e para compartilhar","A página tem título, descrição e uma prévia para redes sociais e aplicativos de mensagem. Ela também traz os dados da empresa no formato que o Google lê."],
                ["Confortável para mais pessoas","As animações se desligam para quem prefere menos movimento no aparelho. O vídeo tem uma descrição que os leitores de tela conseguem anunciar."]]}},

  {id:"sorvete", pending:true, before:"blips/sorvete-antes.html", after:"blips/sorvete-depois.html", seg:["Sorvete"],
   en:{title:"Ice cream segment — landing page", notes:[["Add the notes here","One improvement per line."]]},
   pt:{title:"Segmento sorvete — landing page", notes:[["Adicione as notas aqui","Uma melhoria por linha."]]}}
];

function cmpHTML(c){
  const single = !c.before;
  return `
    <div class="case-ctl">
      ${single ? '' : `<div class="seg-ctl" data-ctl="mode">
        <button type="button" data-v="before" aria-pressed="false">${T('cases.before')}</button>
        <button type="button" data-v="compare" aria-pressed="true">${T('cases.compare')}</button>
        <button type="button" data-v="after" aria-pressed="false">${T('cases.after')}</button>
      </div>`}
      <div class="seg-ctl" data-ctl="device">
        <button type="button" data-v="desktop" aria-pressed="true">${T('cases.desktop')}</button>
        <button type="button" data-v="mobile" aria-pressed="false">${T('cases.mobile')}</button>
      </div>
    </div>
    <div class="cmp" data-mode="${single ? 'after' : 'compare'}">
      ${single ? '' : `<iframe class="before" src="${c.before}" title="${T('cases.before')}"></iframe>`}
      <iframe class="after" src="${c.after}" title="${T('cases.after')}"></iframe>
      <span class="tag l">${T('cases.before')}</span><span class="tag r">${T('cases.after')}</span>
      <div class="handle" aria-hidden="true"></div>
      <input type="range" min="0" max="100" value="50" aria-label="${T('cases.compare')}">
    </div>`;
}
function bindCmp(root){
  const cmp = root.querySelector('.cmp'); if(!cmp) return;
  const fit = ()=>cmp.style.setProperty('--s', (cmp.clientWidth/1440).toFixed(4));
  new ResizeObserver(fit).observe(cmp); fit();
  root.querySelector('input[type=range]').addEventListener('input', e=>cmp.style.setProperty('--pos', e.target.value+'%'));
  root.querySelectorAll('.seg-ctl').forEach(ctl=>ctl.addEventListener('click', e=>{
    const b = e.target.closest('button'); if(!b) return;
    ctl.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed', x===b?'true':'false'));
    if(ctl.dataset.ctl==='mode') cmp.dataset.mode = b.dataset.v;
    else cmp.classList.toggle('mobile', b.dataset.v==='mobile');
  }));
}
/* casos Blips viram itens da lista de projetos, sempre primeiro */
CASES.filter(c=>!c.pending).reverse().forEach(c=>PROJECTS.unshift({
  slug:'blips-'+c.id, type:'blips', year:'2026', views:c.views, isNew:!!c.isNew, blips:c, key:c.cover||null, behance:null, gallery:[],
  en:{title:c.en.title, client:'Blips', tags:c.seg, desc:[]},
  pt:{title:c.pt.title, client:'Blips', tags:c.seg, desc:[]}
}));

/* ---------- idioma ---------- */
const nav = document.querySelector('.nav');
let lang = 'en';
try { lang = localStorage.getItem('lang') === 'pt' ? 'pt' : 'en'; } catch(e){}
const T = k => I18N[lang][k];
const typeLabel = t => T('type.' + t);
/* views: sempre número cheio, arredondado para baixo, com "+" (ex.: 10800 → +10k, 101 → +100) */
const fmtViews = n => n >= 1000 ? '+' + Math.floor(n/1000) + 'k'
  : n >= 100 ? '+' + Math.floor(n/100)*100
  : n >= 10 ? '+' + Math.floor(n/10)*10
  : String(n);

function applyLang(){
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = T(el.dataset.i18n); });
  const band = (id, items) => { const s = items.map(i=>`<span>${i}</span>`).join('').repeat(3); document.getElementById(id).innerHTML = s + s; };
  band('band-1', T('band1')); band('band-2', T('band2'));
  document.getElementById('skills').innerHTML = T('skills').map(s=>`<li>${s}</li>`).join('');
  ['lang','lang-m'].forEach(id=>document.getElementById(id).setAttribute('aria-label', T('lang.switch')));
  renderGrid();
  if (current > -1) render(current); else document.title = T('title');
  try { localStorage.setItem('lang', lang); } catch(e){}
}
['lang','lang-m'].forEach(id=>document.getElementById(id).addEventListener('click', ()=>{ lang = lang === 'en' ? 'pt' : 'en'; applyLang(); }));

/* menu mobile */
const menuBtn = document.getElementById('menu-btn'), menuPanel = document.getElementById('menu-panel');
function setMenu(open){
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuPanel.hidden = !open;
  document.getElementById('menu-backdrop').classList.toggle('on', open);
  document.body.classList.toggle('locked', open);
}
document.getElementById('menu-backdrop').addEventListener('click', ()=>setMenu(false));
menuBtn.addEventListener('click', ()=>setMenu(!nav.classList.contains('open')));
menuPanel.addEventListener('click', e=>{ if(e.target.closest('a')) setMenu(false); });
document.addEventListener('click', e=>{ if(nav.classList.contains('open') && !e.target.closest('.nav')) setMenu(false); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && nav.classList.contains('open')) setMenu(false); });
window.addEventListener('resize', ()=>{ if(window.innerWidth>860) setMenu(false); });

/* ---------- grade ---------- */
const grid = document.getElementById('grid');
function renderGrid(){
  grid.innerHTML = PROJECTS.map((p,i)=>`
    <button type="button" class="card" data-type="${p.type}" data-index="${i}" aria-label="${T('p.open')}: ${p[lang].title}">
      <div class="thumb ${p.blips && !p.key ? 'blips' : 'cover'}">${p.isNew ? `<span class="tag-new"><i aria-hidden="true"></i>${T('cases.new')}</span>` : ''}${p.blips && !p.key
        ? `<div class="mini"><iframe src="${p.blips.after}" title="" tabindex="-1" loading="lazy"></iframe></div>`
        : `<img src="images/covers/${p.key}-800.webp" srcset="images/covers/${p.key}-800.webp 800w, images/covers/${p.key}.webp 1280w" sizes="(max-width:720px) 92vw, (max-width:1240px) 46vw, 400px" width="1600" height="1200" alt="" loading="${i<3?'eager':'lazy'}" decoding="async">`}
      </div>
      <div class="cap"><h3>${p[lang].title}</h3><div class="meta"><span class="views" title="${T('views')}"><svg viewBox="0 0 256 256" aria-hidden="true"><path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64Zm0-112a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z"/></svg>${fmtViews(p.views||0)}</span><span class="chip ${p.type}">${typeLabel(p.type)}</span></div></div>
    </button>`).join('');
  grid.querySelectorAll('.mini').forEach(m=>{ const ro=new ResizeObserver(()=>m.style.setProperty('--s', m.clientWidth/1440)); ro.observe(m); });
  document.querySelectorAll('.filters button').forEach(b=>{ const f=b.dataset.filter; b.querySelector('small').textContent = f==='all'?PROJECTS.length:PROJECTS.filter(p=>p.type===f).length; });
  applyFilter();
}

/* ---------- filtro ---------- */
const buttons = document.querySelectorAll('.filters button');
function applyFilter(){
  const f = document.querySelector('.filters button[aria-pressed="true"]').dataset.filter;
  grid.querySelectorAll('.card').forEach(c=>c.classList.toggle('is-hidden', f!=='all' && c.dataset.type!==f));
}
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.setAttribute('aria-pressed', b===btn ? 'true':'false'));
  applyFilter();
}));

/* ---------- página de projeto ---------- */
const view = document.getElementById('project');
const $ = id => document.getElementById(id);
let current = -1, lastFocus = null;

function render(i){
  const p = PROJECTS[i], d = p[lang];
  current = i;
  $('p-chip').className = 'chip ' + p.type;
  $('p-chip').textContent = typeLabel(p.type);
  $('p-new').hidden = !p.isNew;
  $('p-new').textContent = p.isNew ? T('cases.new') : '';
  $('p-title').textContent = d.title;
  $('p-cat').textContent = typeLabel(p.type);
  $('p-client').textContent = d.client || T('confidential');
  $('p-year').textContent = p.year;
  $('p-count').textContent = String(i+1).padStart(2,'0') + ' / ' + String(PROJECTS.length).padStart(2,'0');
  if(p.blips){
    $('p-cover').className = 'p-cover blips';
    $('p-cover').innerHTML = cmpHTML(p.blips);
    bindCmp($('p-cover'));
    const bl = p.blips[lang];
    const listHTML = (title, items, first) => `<h3 style="font-family:var(--disp);font-weight:700;font-size:22px;letter-spacing:-.02em;margin:${first ? '0' : '32px'} 0 8px">${title}</h3>
      <ol class="p-notes">${items.map(n=>`<li><b>${n[0]}</b><span>${n[1]}</span></li>`).join('')}</ol>`;
    $('p-desc').innerHTML =
      (bl.process ? listHTML(T('cases.process'), bl.process, true) : '') +
      listHTML(T('cases.improvements'), bl.notes, !bl.process) +
      (bl.results ? listHTML(T('cases.results'), bl.results, false) : '');
    $('p-behance').href = p.blips.after;
    $('p-behance').querySelector('span').textContent = T('cases.open');
  } else {
    $('p-cover').className = 'p-cover plain';
    $('p-cover').innerHTML = `<img src="images/covers/${p.key}.webp" srcset="images/covers/${p.key}-800.webp 800w, images/covers/${p.key}.webp 1280w" sizes="(max-width:1240px) 92vw, 1140px" width="1600" height="1200" alt="${d.title}" decoding="async">`;
    $('p-desc').innerHTML = d.desc.map(t=>`<p>${t}</p>`).join('');
    $('p-behance').href = p.behance;
    $('p-behance').querySelector('span').textContent = T('p.behance');
  }
  $('p-tags').innerHTML = d.tags.map(t=>`<span>${t}</span>`).join('');
  $('p-gallery').innerHTML = p.blips ? '' : `<img src="images/projects/${p.key}.webp" srcset="images/projects/${p.key}-800.webp 800w, images/projects/${p.key}.webp 1200w" sizes="(max-width:1240px) 92vw, 1140px" alt="${d.title}" loading="lazy" decoding="async">`;
  const prev = PROJECTS[(i-1+PROJECTS.length)%PROJECTS.length];
  const next = PROJECTS[(i+1)%PROJECTS.length];
  $('p-prev').querySelector('strong').textContent = prev[lang].title;
  $('p-next').querySelector('strong').textContent = next[lang].title;
  document.title = d.title + ' — Thiago Lemos';
}

function openProject(i, push=true){
  render(i);
  view.scrollTop = 0;
  view.classList.add('open');
  view.setAttribute('aria-hidden','false');
  document.body.classList.add('locked');
  if(push) history.pushState({project:PROJECTS[i].slug}, '', '#projeto/' + PROJECTS[i].slug);
  setTimeout(()=>$('p-close').focus(), 50);
}
function closeProject(push=true){
  current = -1;
  view.classList.remove('open');
  view.setAttribute('aria-hidden','true');
  document.body.classList.remove('locked');
  document.title = T('title');
  if(push) history.pushState({}, '', location.pathname + '#trabalhos');
  if(lastFocus) lastFocus.focus();
}

grid.addEventListener('click', e=>{
  const card = e.target.closest('.card'); if(!card) return;
  lastFocus = card;
  openProject(+card.dataset.index);
});
$('p-close').addEventListener('click', ()=>closeProject());
$('p-prev').addEventListener('click', ()=>openProject((current-1+PROJECTS.length)%PROJECTS.length));
$('p-next').addEventListener('click', ()=>openProject((current+1)%PROJECTS.length));
document.addEventListener('keydown', e=>{
  if(!view.classList.contains('open')) return;
  if(e.key==='Escape') closeProject();
  if(e.key==='ArrowRight') $('p-next').click();
  if(e.key==='ArrowLeft') $('p-prev').click();
});

/* nav pill: vidro escuro sobre o hero, claro no resto */
const darkSections = [...document.querySelectorAll('.hero, .contact')];
let navTick = false;
function navTheme(){
  navTick = false;
  const y = 40 + (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sat')) || 0);
  const overDark = darkSections.some(s=>{ const r=s.getBoundingClientRect(); return r.top <= y && r.bottom >= y; });
  nav.classList.toggle('light', !overDark);
}
addEventListener('scroll', ()=>{ if(!navTick){ navTick = true; requestAnimationFrame(navTheme); } }, {passive:true});
addEventListener('resize', navTheme);
navTheme();

/* ---------- blobs do hero: fluxo contínuo + interação que embaralha o movimento ---------- */
function initBlobs(hero){
  if(!hero || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cur = hero.querySelector('.blob-cursor');
  const rnd = (a,b) => a + Math.random()*(b-a);
  const pulls = [.16,-.14,.12,-.2];
  const B = [...hero.querySelectorAll('.blob:not(.blob-cursor)')].map((el,i)=>({
    el, seed:rnd(0,100), spd:rnd(1.1,1.5), amp:rnd(.15,.21), pull:pulls[i%4],
    chaos:rnd(-1,1), rot:rnd(0,360), spin:rnd(-10,10),
    px:0, py:0, vx:0, vy:0            // deslocamento extra com mola (vem da interação)
  }));
  // ruído suave: soma de senoides com frequências que não se repetem juntas
  const n = (t,s) => Math.sin(t*.23+s)*.5 + Math.sin(t*.41+s*1.7)*.32 + Math.sin(t*.73+s*2.9)*.18;

  let tx=0, ty=0, mx=0, my=0, cx=.5, cy=.5, ccx=.5, ccy=.5;
  let energy=0, clock=0, last=performance.now(), running=false, visible=true;

  hero.addEventListener('pointermove', e=>{
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX-r.left)/r.width, ny = (e.clientY-r.top)/r.height;
    const d = Math.min(.12, Math.hypot(nx-cx, ny-cy));
    energy = Math.min(1, energy + d*4);
    // cada movimento dá um "empurrão" em direção aleatória em cada blob
    const W = hero.clientWidth;
    B.forEach(b=>{
      const a = rnd(0, Math.PI*2), m = d*W*rnd(4,9);
      b.vx += Math.cos(a)*m; b.vy += Math.sin(a)*m;
      b.chaos += rnd(-.6,.6)*d*10;     // desvia a trajetória: o caminho muda de verdade
      b.spin  += rnd(-40,40)*d;
    });
    cx = nx; cy = ny; tx = nx-.5; ty = ny-.5;
    hero.classList.add('hover');
  });
  hero.addEventListener('pointerleave', ()=>{ tx=0; ty=0; hero.classList.remove('hover'); });

  function frame(now){
    if(!visible){ running=false; return; }
    const dt = Math.min(.05, (now-last)/1000); last = now;
    const W = hero.clientWidth, H = hero.clientHeight;
    energy *= Math.exp(-dt*.9);                       // a agitação se dissipa em ~2–3 s
    clock  += dt*(1 + energy*2.4);                    // com interação, o tempo do fluxo acelera
    const ease = 1 - Math.exp(-dt*2.2);
    mx += (tx-mx)*ease; my += (ty-my)*ease;
    const ce = 1 - Math.exp(-dt*5);
    ccx += (cx-ccx)*ce; ccy += (cy-ccy)*ce;

    B.forEach((b,i)=>{
      b.seed += b.chaos*energy*dt*1.6;                // quanto mais interação, mais o caminho se embaralha
      b.chaos *= Math.exp(-dt*.4);
      b.spin  += (Math.sign(b.spin)*8 - b.spin)*dt*.3; // giro volta devagar ao ritmo normal
      // mola amortecida: o empurrão vira uma oscilação suave
      b.vx += (-6*b.px - 1.7*b.vx)*dt; b.vy += (-6*b.py - 1.7*b.vy)*dt;
      b.vx = Math.max(-1200, Math.min(1200, b.vx)); b.vy = Math.max(-1200, Math.min(1200, b.vy));
      b.px += b.vx*dt; b.py += b.vy*dt;
      b.rot += b.spin*dt;

      const k = clock*b.spd, a = b.amp*(1 + energy*.5);
      const x = n(k,b.seed)*a*W + mx*b.pull*W + b.px;
      const y = n(k,b.seed+40)*a*H*1.2 + my*b.pull*H + b.py;
      const sx = 1 + n(k*.8,b.seed+90)*.16, sy = 1 + n(k*.8,b.seed+130)*.16;   // forma "respira" e deforma
      b.el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) rotate(${b.rot.toFixed(1)}deg) scale(${sx.toFixed(3)},${sy.toFixed(3)})`;
    });
    if(cur){
      const s = 1 + energy*.4 + n(clock,3)*.08;
      cur.style.transform = `translate3d(${(ccx*W).toFixed(1)}px,${(ccy*H).toFixed(1)}px,0) scale(${s.toFixed(3)})`;
    }
    requestAnimationFrame(frame);
  }
  function start(){ if(!running){ running=true; last=performance.now(); requestAnimationFrame(frame); } }
  new IntersectionObserver(([e])=>{ visible = e.isIntersecting; if(visible) start(); }).observe(hero);
  document.addEventListener('visibilitychange', ()=>{ visible = !document.hidden; if(visible) start(); });
  start();
}
initBlobs(document.querySelector('.hero'));
initBlobs(document.querySelector('.contact'));

/* ---------- páginas Sobre e Contato ---------- */
const PAGES_EL = {about: document.getElementById('page-about'), contact: document.getElementById('page-contact')};
let currentPage = null;
function openPage(name, push=true){
  if(view.classList.contains('open')) closeProject(false);
  if(currentPage && currentPage!==name) closePage(false);
  const el = PAGES_EL[name]; if(!el) return;
  currentPage = name;
  el.scrollTop = 0; el.classList.add('open'); el.setAttribute('aria-hidden','false');
  document.body.classList.add('locked');
  if(push) history.pushState({page:name}, '', '#'+name);
  setTimeout(()=>el.querySelector('.back').focus(), 50);
}
function closePage(push=true){
  if(!currentPage) return;
  const el = PAGES_EL[currentPage]; currentPage = null;
  el.classList.remove('open'); el.setAttribute('aria-hidden','true');
  document.body.classList.remove('locked');
  if(push) history.pushState({}, '', location.pathname);
}
document.addEventListener('click', e=>{
  const open = e.target.closest('[data-page]');
  if(open){ e.preventDefault(); openPage(open.dataset.page); setMenu(false); return; }
  const close = e.target.closest('[data-close-page]');
  if(close){
    e.preventDefault(); const href = close.getAttribute('href'); closePage();
    if(href && href.startsWith('#')){ const target = document.querySelector(href); if(target) setTimeout(()=>target.scrollIntoView({behavior:'smooth'}), 60); }
  }
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && currentPage) closePage(); });

/* ---------- realce verde que salta entre os botões de um grupo ---------- */
function initHighlight(group){
  if(!group || group.querySelector('.hl')) return;
  const btns = [...group.querySelectorAll('.btn')]; if(btns.length<2) return;
  const hl = document.createElement('span'); hl.className='hl'; group.prepend(hl); group.classList.add('has-hl');
  const home = group.querySelector('.btn.fill') || btns[0];
  let on = home;
  function moveTo(b){
    on = b;
    btns.forEach(x=>x.classList.toggle('is-on', x===b));
    hl.style.width = b.offsetWidth+'px'; hl.style.height = b.offsetHeight+'px';
    hl.style.transform = `translate(${b.offsetLeft}px,${b.offsetTop}px)`;
  }
  btns.forEach(b=>{ b.addEventListener('pointerenter', ()=>moveTo(b)); b.addEventListener('focus', ()=>moveTo(b)); });
  group.addEventListener('pointerleave', ()=>moveTo(home));
  new ResizeObserver(()=>moveTo(on)).observe(group);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>moveTo(on));
  moveTo(home);
}
document.querySelectorAll('.hero .actions, .contact .links').forEach(initHighlight);

/* deep link: index.html#projeto/slug abre direto o projeto */
function fromHash(){
  const m = location.hash.match(/^#projeto\/([\w-]+)$/);
  if(m){
    const i = PROJECTS.findIndex(p=>p.slug===m[1]);
    if(i>-1){ openProject(i,false); return; }
  }
  if(view.classList.contains('open')) closeProject(false);
  if(location.hash==='#about' || location.hash==='#contact'){ openPage(location.hash.slice(1), false); return; }
  if(currentPage) closePage(false);
}
window.addEventListener('popstate', fromHash);

applyLang();
fromHash();
