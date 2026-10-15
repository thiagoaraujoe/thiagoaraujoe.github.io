/* =========================================================
   TEXTOS DA INTERFACE — inglês (en) é o padrão, português (pt) opcional
   ========================================================= */
const I18N = {
  en: {
    "cases.before":"Before","cases.after":"After","cases.compare":"Compare","cases.desktop":"Desktop","cases.mobile":"Mobile",
    "cases.new":"New project","cases.improvements":"The project","cases.process":"How it was made","cases.results":"Results","cases.rollout":"Data-driven rollouts to other machines","cases.page":"Page","cases.client":"Blips","cases.open":"Open the page in a new tab",
    "nav.work":"Work","nav.about":"About","nav.contact":"Contact","nav.status":"Available for freelance",
    "hero.title":"Design that solves real problems.",
    "hero.text":"Interfaces, landing pages, brands and paid-media creatives. Digital experiences that are simple, functional and visually engaging.",
    "hero.cta1":"See the work","hero.cta2":"Get in touch",
    "tools.kicker":"Tools & skills","tools.title":"The tools behind the work.",
    "tools.lead":"Design, code and <span class=\"keep\">AI</span> in the same flow: from the first sketch to the page running on the client's domain.",
    "tools.skills":"What I do with them",
    "tools.list":["<span class=\"keep\">UI</span> &amp; <span class=\"keep\">UX</span> design","Landing pages & websites","Visual identity","Brand guidelines","Packaging","Meta Ads creatives","Mobile first","Prototyping","Design systems","Responsive <span class=\"keep\">HTML</span>","<span class=\"keep\">AI</span>-assisted workflow"],
    "work.title":"Selected work","filter.all":"All",
    "type.blips":"Web e-commerce","type.web":"Web & UI","type.brand":"Packaging","type.ads":"Ads",
    "about.title":"Interface, brand and campaign designer.",
    "about.p1":"I work where strategy meets form: I understand the business problem, design the solution and make sure it works on screen and in people's hands. From wireframe to ready-to-run creative, with the same rigor.",
    "about.p2":"Working with design since 2016, I partner with companies in tech, healthcare, retail and services, on projects ranging from landing pages and digital products to visual identity and performance campaigns.",
    "skills":["UI & UX design","Landing pages & websites","Visual identity","Brand guidelines","Packaging","Meta Ads creatives","Figma","Adobe Creative Cloud"],
    "contact.title":"Have a project in mind? Let's talk.","contact.email":"Send an email","contact.emailLabel":"Email",
    "foot.rights":"© 2026 thiago. all rights reserved.","foot.where":"brazil — working remotely",
    "p.back":"Back to work","p.type":"Type","p.client":"Client","p.year":"Year","p.about":"About the project",
    "p.behance":"View on Behance","likes":"Likes","like.ask":"Did you like this project?","like.btn":"Like","like.done":"Liked","p.backhome":"Back","about.kicker":"About","contact.kicker":"Contact","contact.lead":"Pick the channel you prefer. I usually reply within a business day.","p.prev":"Previous","p.next":"Next","p.open":"Open project",
    "confidential":"Confidential","title":"Thiago Lemos — Interface, brand and campaign designer",
    "lang.switch":"Mudar para português"
  },
  pt: {
    "cases.before":"Antes","cases.after":"Depois","cases.compare":"Comparar","cases.desktop":"Desktop","cases.mobile":"Mobile",
    "cases.new":"Novo projeto","cases.improvements":"O projeto","cases.process":"Como foi feito","cases.results":"Resultados","cases.rollout":"Desdobramentos baseados em dados para outros equipamentos","cases.page":"Página","cases.client":"Blips","cases.open":"Abrir a página em nova aba",
    "nav.work":"Trabalhos","nav.about":"Sobre","nav.contact":"Contato","nav.status":"Disponível para freelance",
    "hero.title":"Design que resolve problemas de verdade.",
    "hero.text":"Interfaces, landing pages, marcas e criativos para mídia paga. Experiências digitais simples, funcionais e visualmente envolventes.",
    "hero.cta1":"Ver trabalhos","hero.cta2":"Falar comigo",
    "tools.kicker":"Ferramentas e skills","tools.title":"As ferramentas por trás do trabalho.",
    "tools.lead":"Design, código e <span class=\"keep\">IA</span> no mesmo fluxo: do primeiro rascunho até a página rodando no domínio do cliente.",
    "tools.skills":"O que eu faço com elas",
    "tools.list":["<span class=\"keep\">UI</span> e <span class=\"keep\">UX</span> design","Landing pages e sites","Identidade visual","Brandbook","Embalagem","Criativos para Meta Ads","Mobile first","Prototipagem","Design systems","<span class=\"keep\">HTML</span> responsivo","Fluxo com <span class=\"keep\">IA</span>"],
    "work.title":"Trabalhos selecionados","filter.all":"Todos",
    "type.blips":"Web e-commerce","type.web":"Web & UI","type.brand":"Embalagem","type.ads":"Anúncios",
    "about.title":"Designer de interfaces, marcas e campanhas.",
    "about.p1":"Trabalho na interseção entre estratégia e forma: entendo o problema do negócio, desenho a solução e cuido para que ela funcione bem na tela e na mão de quem usa. Do wireframe ao criativo pronto para rodar, com o mesmo rigor.",
    "about.p2":"Trabalho com design desde 2016, atendendo empresas de tecnologia, saúde, varejo e serviços, em projetos que vão de landing pages e produtos digitais a identidade visual e campanhas de performance.",
    "skills":["UI e UX design","Landing pages e sites","Identidade visual","Brandbook","Embalagem","Criativos para Meta Ads","Figma","Adobe Creative Cloud"],
    "contact.title":"Tem um projeto em mente? Vamos conversar.","contact.email":"Enviar e-mail","contact.emailLabel":"E-mail",
    "foot.rights":"© 2026 thiago. todos os direitos reservados.","foot.where":"brasil — atendimento remoto",
    "p.back":"Voltar aos trabalhos","p.type":"Tipo","p.client":"Cliente","p.year":"Ano","p.about":"Sobre o projeto",
    "p.behance":"Ver no Behance","likes":"Curtidas","like.ask":"Curtiu este projeto?","like.btn":"Curtir","like.done":"Curtido","p.backhome":"Voltar","about.kicker":"Sobre","contact.kicker":"Contato","contact.lead":"Escolha o canal que preferir. Costumo responder em até um dia útil.","p.prev":"Anterior","p.next":"Próximo","p.open":"Abrir projeto",
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
  {slug:"redlinemd-redesign", key:"redline", type:"web", year:"2026", likes:829,
   behance:"https://www.behance.net/gallery/255634425/Redesign-project-Webpage-UX",
   en:{title:"RedlineMD — Mobile redesign", client:"RedlineMD", tags:["UX","Mobile first","Redesign","Figma"],
       process:[["One hour in Figma","The redesign was done in Figma within one hour. Because of that, the priority went to the changes that make the page easier to use and lead more visitors to act."]],
       notes:[["What RedlineMD does","RedlineMD reviews and renegotiates employment contracts for doctors. The page needed to turn more visitors from Google Ads into customers and feel more polished on phones."],
              ["A cleaner top of the page","The logo and the menu moved to new positions. The main button went up to the start of the page, where it is easier to reach."],
              ["Less scrolling","Dots below the carousel reduce how much the visitor has to scroll. The feature cards use the brand colors and icons with better contrast."],
              ["A stronger ending","The card with the final button has an image, and the numbers section is more convincing."]]},
   pt:{title:"RedlineMD — Redesign mobile", client:"RedlineMD", tags:["UX","Mobile first","Redesign","Figma"],
       process:[["Uma hora no Figma","O redesign foi feito no Figma em uma hora. Por isso, a prioridade foi para as mudanças que deixam a página mais fácil de usar e levam mais visitantes a agir."]],
       notes:[["O que a RedlineMD faz","A RedlineMD analisa e renegocia contratos de trabalho de médicos. A página precisava transformar mais visitantes vindos do Google Ads em clientes e ficar mais bem acabada no celular."],
              ["Um topo mais limpo","O logo e o menu mudaram de lugar. O botão principal subiu para o início da página, onde é mais fácil de alcançar."],
              ["Menos rolagem","Os pontinhos abaixo do carrossel reduzem o quanto o visitante precisa rolar. Os cartões de vantagens usam as cores da marca e ícones com mais contraste."],
              ["Um final mais forte","O cartão do botão final ganhou uma imagem, e a seção de números ficou mais convincente."]]}},

  {slug:"avance-global-private-jet", key:"jet", type:"web", year:"2026", likes:1887,
   behance:"https://www.behance.net/gallery/254543405/Web-Page-Design-Private-Jet",
   en:{title:"Avance Global — Private jet booking", client:"Avance Global", tags:["Web design","UI","Luxury","Desktop & mobile"],
       notes:[["A private aviation company","Avance Global wanted to strengthen its digital presence and attract high-end clients. In this market, the first impression is everything."],
              ["Exclusivity from the first screen","Cinematic photos, very large lettering and a dark palette show confidence and premium service right away."],
              ["Room to breathe","Clean layouts and plenty of empty space keep everything balanced."],
              ["Three pages, two screen sizes","The work covers the home page, the aircraft catalog and the destinations, in desktop and mobile versions. Together, they lead the visitor naturally to the quote request."]]},
   pt:{title:"Avance Global — Reserva de jatos particulares", client:"Avance Global", tags:["Web design","UI","Luxo","Desktop e mobile"],
       notes:[["Uma empresa de aviação executiva","A Avance Global queria fortalecer a presença digital e atrair clientes de alto padrão. Nesse mercado, a primeira impressão é tudo."],
              ["Exclusividade desde a primeira tela","Fotos de estilo cinematográfico, letras bem grandes e uma paleta escura mostram confiança e serviço premium logo de cara."],
              ["Espaço para respirar","Layouts limpos e bastante espaço em branco equilibram o conjunto."],
              ["Três páginas, dois tamanhos de tela","O trabalho inclui a página inicial, o catálogo de aeronaves e os destinos, em versões para computador e celular. Juntas, elas levam o visitante de forma natural até o pedido de cotação."]]}},

  {slug:"pto-exchange", key:"pto", type:"web", year:"2025", likes:789,
   behance:"https://www.behance.net/gallery/239940969/Webpage-UI-Design",
   en:{title:"PTO Exchange — Web page UI/UX", client:"PTO Exchange", tags:["UI","UX","B2B","Desktop & mobile"],
       process:[["Briefing and research","The work started with a briefing, then research on the target audience and on similar products."],
              ["The visitor's path","The path a visitor takes through the page was mapped before the design."],
              ["Design and tests","The design adapts to any screen size and was tested with users."]],
       notes:[["What PTO Exchange does","It is a benefits platform that lets employees turn unused vacation days into retirement savings, student loan payments, travel and more."],
              ["Made for people in HR","The page is simple to navigate and speaks directly to HR teams. It is built around what they need."],
              ["Value that is quick to see","Prices, benefits and frequently asked questions are highlighted, so visitors understand the value fast."]]},
   pt:{title:"PTO Exchange — Web page UI/UX", client:"PTO Exchange", tags:["UI","UX","B2B","Desktop e mobile"],
       process:[["Briefing e pesquisa","O trabalho começou com um briefing e, depois, com pesquisa sobre o público e sobre produtos parecidos."],
              ["O caminho do visitante","O caminho que o visitante faz pela página foi mapeado antes do design."],
              ["Design e testes","O design se adapta a qualquer tamanho de tela e foi testado com usuários."]],
       notes:[["O que a PTO Exchange faz","É uma plataforma de benefícios que permite ao funcionário transformar férias não usadas em previdência, pagamento de empréstimo estudantil, viagens e mais."],
              ["Feita para quem trabalha em RH","A página é simples de navegar e fala direto com os times de RH. Ela foi pensada nas necessidades desse público."],
              ["Valor fácil de enxergar","Preços, benefícios e dúvidas frequentes ficam em destaque, para que o visitante entenda o valor rapidamente."]]}},

  {slug:"healify-packaging", key:"healify", type:"brand", year:"2026", likes:1608,
   behance:"https://www.behance.net/gallery/252479475/Packaging-System-for-Medical-Cannabis",
   en:{title:"Healify — Medical cannabis packaging", client:"Healify", tags:["Packaging","Visual identity","Color system"],
       process:[["Research first","The system came from research on pharmaceutical packaging and premium wellness brands."]],
       notes:[["Medical cannabis in Brazil","A packaging system for a line of medical cannabis products in the Brazilian market, a heavily regulated category."],
              ["Trust and comfort","The challenge was to balance regulation with a modern identity people can trust, so patients feel comfortable and safe with the product."],
              ["A color code for each version","A minimal system organizes the information clearly and uses colors to tell the versions apart: Boost + Recovery, Slim, Sleep and Focus, in drops, gummies and capsules."],
              ["Regulation meets modern design","The result combines the information required by regulation with a modern visual language."]]},
   pt:{title:"Healify — Embalagens de cannabis medicinal", client:"Healify", tags:["Embalagem","Identidade visual","Sistema de cores"],
       process:[["Pesquisa primeiro","O sistema nasceu de uma pesquisa sobre embalagens de farmácia e marcas premium de bem-estar."]],
       notes:[["Cannabis medicinal no Brasil","Um sistema de embalagens para uma linha de produtos de cannabis medicinal no mercado brasileiro, uma categoria muito regulada."],
              ["Confiança e conforto","O desafio era equilibrar a regulação com uma identidade moderna e confiável, para que o paciente se sinta à vontade e seguro com o produto."],
              ["Um código de cores para cada versão","Um sistema minimalista organiza as informações com clareza e usa cores para diferenciar as versões: Boost + Recovery, Slim, Sleep e Focus, em gotas, gomas e cápsulas."],
              ["Regulação com design moderno","O resultado une as informações exigidas pela regulação com uma linguagem visual moderna."]]}},

  {slug:"oticas-carol", key:"oticas", type:"ads", year:"2022", likes:1258,
   behance:"https://www.behance.net/gallery/156804477/Oticas-Carol-Criativos-Facebook-ADS",
   en:{title:"Óticas Carol — Lead generation ads", client:"Óticas Carol", tags:["Meta Ads","Creatives","Retail","Feed & stories"],
       notes:[["A store in Ponta Porã","Ads for a campaign to attract interested potential customers to the Óticas Carol store in Ponta Porã."],
              ["Five offers","Free eye exams, store-wide discounts, the store's third anniversary, Father's Day and contact lens deals."],
              ["Feed and stories","The ads come in both formats and use the brand's blue and yellow."],
              ["The offer first","In each piece, the offer is the main highlight, and a clear message invites people to book an appointment or visit the store."]]},
   pt:{title:"Óticas Carol — Criativos para geração de leads", client:"Óticas Carol", tags:["Meta Ads","Criativos","Varejo","Feed e stories"],
       notes:[["Uma loja em Ponta Porã","Anúncios de uma campanha para atrair clientes realmente interessados para a loja Óticas Carol de Ponta Porã."],
              ["Cinco ofertas","Exame de vista grátis, descontos em toda a loja, aniversário de 3 anos da loja, Dia dos Pais e lentes de contato."],
              ["Feed e stories","Os anúncios têm os dois formatos e usam o azul e o amarelo da marca."],
              ["A oferta em primeiro lugar","Em cada peça, a oferta é o destaque principal, e uma mensagem clara convida a pessoa a agendar um horário ou ir até a loja."]]}},

  {slug:"adaptive-erp-landing", key:"erp", type:"web", year:"2023", likes:1331,
   behance:"https://www.behance.net/gallery/185614153/Landing-Page-Software-ERP",
   en:{title:"Adaptive — ERP landing page", client:"Adaptive", tags:["Landing page","UI","B2B","Clarity research"],
       process:[["Heatmaps from Microsoft Clarity","Clarity is a tool that shows where visitors click. The heatmaps revealed that visitors stayed about 30 seconds and left before reaching the form, and that the free demo buttons got the most clicks."]],
       notes:[["An ERP for gas stations and retail","A short sales page for Adaptive, a management system for gas stations, wholesalers and supermarkets. The goal was a page that leads more visitors to ask for contact."],
              ["Only the essentials","The content was cut down to what matters, so the page is faster to read."],
              ["The demo closer to the top","The request for a free demo moved up the page, where visitors see it before leaving."]]},
   pt:{title:"Adaptive — Landing page de ERP", client:"Adaptive", tags:["Landing page","UI","B2B","Pesquisa com Clarity"],
       process:[["Mapas de calor do Microsoft Clarity","O Clarity é uma ferramenta que mostra onde os visitantes clicam. Os mapas de calor revelaram que os visitantes ficavam cerca de 30 segundos e saíam antes de chegar ao formulário, e que os botões da demonstração grátis eram os mais clicados."]],
       notes:[["Um ERP para postos e varejo","Uma página de vendas curta para a Adaptive, um sistema de gestão para postos de combustível, atacadistas e supermercados. O objetivo era uma página que levasse mais visitantes a pedir contato."],
              ["Só o essencial","O conteúdo foi reduzido ao que importa, para a página ser mais rápida de ler."],
              ["A demonstração mais perto do topo","O pedido de demonstração grátis subiu na página, para o visitante ver antes de sair."]]}},

  {slug:"digitalbot-chatbot-landing", key:"chatbot", type:"web", year:"2023", likes:1934,
   behance:"https://www.behance.net/gallery/185131407/Landing-Page-Chatbot",
   en:{title:"DigitalBot — B2B chatbot landing page", client:"DigitalBot", tags:["Landing page","UX","Persona","Wireframe"],
       process:[["Benchmarking and customer data","The work started by comparing similar pages and looking at customer data."],
              ["A persona","A profile of the ideal customer summed up the main problems to solve."],
              ["Wireframes, then design","Simple sketches of the page came first, then the final design."]],
       notes:[["A chatbot for companies","DigitalBot offers chatbots for companies in many industries and is a partner of Take Blip. The page needed to be simple and attract interested potential customers."],
              ["Two problems to solve","No team to answer every contact, and sales lost because replies are slow."],
              ["Buttons that follow the journey","The page has several action buttons that follow the buyer's journey, in desktop and mobile versions."]]},
   pt:{title:"DigitalBot — Landing page de chatbot B2B", client:"DigitalBot", tags:["Landing page","UX","Persona","Wireframe"],
       process:[["Benchmarking e dados de clientes","O trabalho começou com a comparação de páginas parecidas e com dados de clientes."],
              ["Uma persona","Um perfil do cliente ideal resumiu os principais problemas a resolver."],
              ["Wireframes e depois o design","Primeiro vieram os esboços simples da página, depois o design final."]],
       notes:[["Um chatbot para empresas","A DigitalBot oferece chatbots para empresas de vários segmentos e é parceira da Take Blip. A página precisava ser simples e atrair clientes em potencial realmente interessados."],
              ["Dois problemas para resolver","Falta de equipe para atender todos os contatos e vendas perdidas pela demora nas respostas."],
              ["Botões que acompanham a jornada","A página tem vários botões de ação que acompanham a jornada do comprador, em versões para computador e celular."]]}},

  {slug:"batmaid-ads", key:"batmaid", type:"ads", year:"2023", likes:1223,
   behance:"https://www.behance.net/gallery/173013607/ADS-Batmaid-Suica-Criativos-para-Meta",
   en:{title:"Batmaid (Switzerland) — Meta Ads", client:"Batmaid", tags:["Meta Ads","Creatives","International"],
       notes:[["Home cleaning in Switzerland","Batmaid is an app for booking home cleaning services. These ads ran in Switzerland."],
              ["Three kinds of ads","Pieces focused on price (39 CHF per hour, with no hidden fees), customer testimonials and messages about the app."],
              ["Quick to read in the feed","All of them use the brand's blue and a clean layout."]]},
   pt:{title:"Batmaid (Suíça) — Meta Ads", client:"Batmaid", tags:["Meta Ads","Criativos","Internacional"],
       notes:[["Limpeza residencial na Suíça","A Batmaid é um aplicativo para contratar serviços de limpeza residencial. Estes anúncios rodaram na Suíça."],
              ["Três tipos de anúncio","Peças focadas no preço (39 CHF por hora, sem taxas escondidas), depoimentos de clientes e mensagens sobre o aplicativo."],
              ["Rápido de ler no feed","Todos usam o azul da marca e um layout limpo."]]}},

  {slug:"algar-telecom-ads", key:"algar", type:"ads", year:"2023", likes:691,
   behance:"https://www.behance.net/gallery/173013387/ADS-Algar-Telecom-Criativos-para-Meta",
   en:{title:"Algar Telecom — Meta Ads", client:"Algar Telecom", tags:["Meta Ads","Creatives","Telecom","Stories"],
       notes:[["Internet and combo plans","Ads for Algar Telecom on Facebook and Instagram. They promote fiber of 300 Mb and 600 Mb, mobile phone and landline."],
              ["Speed and price first","In every ad, speed and price are the main message."],
              ["The brand's green","The vibrant green gradient and the play symbol frame the people. The ads come in feed and stories formats."]]},
   pt:{title:"Algar Telecom — Meta Ads", client:"Algar Telecom", tags:["Meta Ads","Criativos","Telecom","Stories"],
       notes:[["Planos de internet e combos","Anúncios para a Algar Telecom no Facebook e no Instagram. Eles divulgam fibra de 300 Mb e 600 Mb, celular e telefone fixo."],
              ["Velocidade e preço em primeiro lugar","Em todos os anúncios, velocidade e preço são a mensagem principal."],
              ["O verde da marca","O degradê verde vibrante e o símbolo de play emolduram as pessoas. Os anúncios têm formatos de feed e de stories."]]}},

  {slug:"natura-ads", key:"natura", type:"ads", year:"2023", likes:1832,
   behance:"https://www.behance.net/gallery/173010743/Criativos-Natura-Meta-ADS-Produtos-de-Beleza",
   en:{title:"Natura — Store traffic campaign", client:"Natura", tags:["Meta Ads","Creatives","Beauty","Retail"],
       notes:[["More customers in the stores","Ads from one stage of a campaign that aimed to bring more customers to Natura's physical stores."],
              ["Three moments, one system","The Tododia summer line, gift sets with prices for special dates, and Natura Friday with up to 50% off."],
              ["The warmth of the brand","The ads keep the warm feeling of the brand and make every offer easy to read."]]},
   pt:{title:"Natura — Campanha para lojas físicas", client:"Natura", tags:["Meta Ads","Criativos","Beleza","Varejo"],
       notes:[["Mais clientes nas lojas","Anúncios de uma etapa de campanha que buscava levar mais clientes às lojas físicas da Natura."],
              ["Três momentos, um sistema","A linha Tododia de verão, kits de presente com preço para datas especiais e a Natura Friday, com até 50% de desconto."],
              ["O calor da marca","Os anúncios mantêm o calor da marca e deixam cada oferta fácil de ler."]]}}
];


/* =========================================================
   CASOS BLIPS — before/after são páginas HTML dentro de blips/
   Para ativar um caso, coloque os dois arquivos na pasta e deixe pending:false
   ========================================================= */
const CASES = [
  {id:"food", pending:false, likes:1148, before:null, after:"blips/food.html", cover:"food", seg:["Alimentar","Landing page"],
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

  {id:"lps-equipamentos", pending:false, isNew:true, likes:1989, before:null, cover:"lpsequip", seg:["Comunicação visual","Artesanato e brindes","Landing pages"],
   pages:[{name:"Vuze 5050", src:"blips/vuze-5050/index.html"},
          {name:"Fiber 50W", src:"blips/fiber-desktop-50w/index.html"},
          {name:"Flatbed 9060", src:"blips/flatbed-uv-9060/index.html"}],
   en:{title:"Equipment landing pages — Blips standard",
       process:[["One standard for every machine","The three pages follow the same Blips page structure. Each one starts with the offer, then shows the product, proof from other customers and the form. It ends by answering the last doubts in the FAQ."],
                ["One page per machine","Each page talks about a single machine. The old fiber laser page listed six models. The new one focuses on just one, so visitors don't have to compare and choose."],
                ["Respect for the visual identity","Colors, fonts, buttons and spacing follow the Blips brand. This way, the three pages look like one family."],
                ["Designed for the phone first","Each section was built at phone size first and then adapted to larger screens."],
                ["Videos adjusted for each page","The original sound was removed, and each video got its own original soundtrack, free of copyright issues. Parts that showed a different machine were cut."],
                ["Gentle movement","The animations are soft and short. They turn off by themselves for people who prefer less motion on their devices."]],
       notes:[["Three offers, one layout","Each page opens with its own offer. The Vuze 5050 shows 18 interest-free installments. The Fiber 50W shows a down payment plus up to 36 monthly bank slips. The Flatbed 9060 shows a monthly rental plan."],
              ["A menu that helps without getting in the way","The menu floats at the top of the page. On the Vuze 5050, it opens a map of all nine sections. On the newer pages, it shows only the logo and hides while you scroll down."],
              ["An earnings simulator","Visitors enter how many pieces they make, the price and the cost. The page then shows the monthly revenue, the costs, the installment or the rent, and what is left over."],
              ["A spec sheet that stays short","The technical details are grouped into lists that open one at a time. This keeps the section short, even for machines with many specs."],
              ["A bar that stays on the phone screen","On phones, a bar stays at the bottom with the offer and the main button. This way, visitors can ask for a quote at any moment."],
              ["Carousels and videos that behave","Benefits and customer messages slide sideways, with dots below. On the Fiber and Flatbed pages, the videos play without sound when they appear and pause when they leave the screen."]],
       rollout:[["The same base for sale, financing and rental","The standard started as a sale page and was then adapted for financing and for rental. The structure stays the same. What changes is the machine's content and the offer block."],
                ["Prices taken from the marketing price sheet","On the Fiber and Flatbed pages, the prices come from the marketing team's price sheet. The notes of each page record the tab and the row that were used, so anyone can check them later."],
                ["Specs taken from the product's own material","The technical details come from the product's material, such as its spec sheet or the Ideal Distribuidora page. When two sources disagree, the difference goes to a review list instead of being guessed."],
                ["A simulator driven by the offer data","The simulator reads the offer values from a settings block at the top of the code. On the financing page, it uses the installment for 12, 24 or 36 months. On the rental page, it subtracts the monthly plan."],
                ["A form set up for each machine","The newer pages use the same Blips form. A small settings block tells it the page, the type of interest (finance or rent), the segment and the machine name."],
                ["Ready for the next machines","The same standard is also used on other Blips pages, such as the Vuze i1600 printer and the Vuze Cut 120S cutter. To create a new page, the team swaps the machine's data and keeps everything else."]],
       results:[["Three pages, one family","Sale, financing and rental now share the same structure. Visitors find the same things in the same places on every page."],
                ["Light pages","Without the videos, each page weighs about 0.3 to 0.5 MB. The videos only load when they are needed."],
                ["Ready for search engines and sharing","Each page has a title, a description and a preview for social networks and messaging apps. The pages also include data written in the format that Google reads."],
                ["New pages start from a tested base","New machines start from a page that already works, not from a blank file. The Flatbed 9060 page, for example, was built from the Vuze Cut 120S rental page."]]},
   pt:{title:"Landing pages de equipamentos — Padrão Blips",
       process:[["Um padrão para todas as máquinas","As três páginas seguem a mesma estrutura de página da Blips. Cada uma começa com a oferta, depois mostra o produto, a prova de outros clientes e o formulário. No fim, responde as últimas dúvidas no FAQ."],
                ["Uma página por máquina","Cada página fala de uma única máquina. A página antiga de laser fiber listava seis modelos. A nova foca em um só, para que o visitante não precise comparar e escolher."],
                ["Respeito à identidade visual","Cores, fontes, botões e espaçamentos seguem a marca Blips. Assim, as três páginas parecem da mesma família."],
                ["Pensada primeiro para o celular","Cada seção foi montada primeiro no tamanho de tela do celular e depois adaptada para telas maiores."],
                ["Vídeos ajustados para cada página","O som original foi retirado, e cada vídeo ganhou uma trilha original própria, sem problema de direitos autorais. Os trechos que mostravam outra máquina foram cortados."],
                ["Movimentos suaves","As animações são leves e curtas. Elas se desligam sozinhas para quem prefere menos movimento no aparelho."]],
       notes:[["Três ofertas, um só layout","Cada página abre com a sua própria oferta. A Vuze 5050 mostra 18 parcelas sem juros. A Fiber 50W mostra uma entrada e o restante em até 36 vezes no boleto. A Flatbed 9060 mostra um plano mensal de aluguel."],
              ["Um menu que ajuda sem atrapalhar","O menu flutua no topo da página. Na Vuze 5050, ele abre um mapa com as nove seções. Nas páginas mais novas, ele mostra só o logo e se esconde quando você rola a página para baixo."],
              ["Um simulador de ganho","O visitante informa quantas peças produz, o preço e o custo. A página mostra então o faturamento do mês, os custos, a parcela ou o aluguel e o que sobra."],
              ["Uma ficha técnica que continua curta","Os detalhes técnicos ficam em listas que abrem uma de cada vez. Assim, a seção continua curta, mesmo em máquinas com muitas especificações."],
              ["Uma barra que fica na tela do celular","No celular, uma barra fica na parte de baixo com a oferta e o botão principal. Assim, o visitante pode pedir um orçamento a qualquer momento."],
              ["Carrosséis e vídeos que se comportam","Os benefícios e as mensagens de clientes deslizam para o lado, com pontinhos abaixo. Nas páginas da Fiber e da Flatbed, os vídeos tocam sem som quando aparecem na tela e pausam quando saem dela."]],
       rollout:[["A mesma base para venda, financiamento e aluguel","O padrão nasceu como uma página de venda e depois foi adaptado para financiamento e para aluguel. A estrutura continua a mesma. O que muda é o conteúdo da máquina e o bloco da oferta."],
                ["Preços tirados da planilha de marketing","Nas páginas da Fiber e da Flatbed, os preços vêm da planilha de preços do time de marketing. As notas de cada página registram a aba e a linha usadas, para que qualquer pessoa possa conferir depois."],
                ["Especificações tiradas do material do produto","Os detalhes técnicos vêm do material do produto, como a ficha técnica ou a página da Ideal Distribuidora. Quando duas fontes não batem, a diferença vai para uma lista de revisão em vez de ser adivinhada."],
                ["Um simulador movido pelos dados da oferta","O simulador lê os valores da oferta em um bloco de configuração no topo do código. Na página de financiamento, ele usa a parcela de 12, 24 ou 36 meses. Na página de aluguel, ele desconta o plano mensal."],
                ["Um formulário configurado para cada máquina","As páginas mais novas usam o mesmo formulário da Blips. Um pequeno bloco de configuração informa a página, o tipo de interesse (financiar ou alugar), o segmento e o nome da máquina."],
                ["Pronto para as próximas máquinas","O mesmo padrão também é usado em outras páginas da Blips, como a da impressora Vuze i1600 e a da plotter de recorte Vuze Cut 120S. Para criar uma página nova, o time troca os dados da máquina e mantém todo o resto."]],
       results:[["Três páginas, uma família","Venda, financiamento e aluguel agora têm a mesma estrutura. O visitante encontra as mesmas coisas nos mesmos lugares em todas as páginas."],
                ["Páginas leves","Sem os vídeos, cada página pesa entre 0,3 e 0,5 MB. Os vídeos só carregam quando são necessários."],
                ["Prontas para buscadores e para compartilhar","Cada página tem título, descrição e uma prévia para redes sociais e aplicativos de mensagem. As páginas também trazem dados no formato que o Google lê."],
                ["Páginas novas partem de uma base testada","Máquinas novas começam de uma página que já funciona, e não de um arquivo em branco. A página da Flatbed 9060, por exemplo, foi feita a partir da página de aluguel da Vuze Cut 120S."]]}},

  {id:"sorvete", pending:true, before:"blips/sorvete-antes.html", after:"blips/sorvete-depois.html", seg:["Sorvete"],
   en:{title:"Ice cream segment — landing page", notes:[["Add the notes here","One improvement per line."]]},
   pt:{title:"Segmento sorvete — landing page", notes:[["Adicione as notas aqui","Uma melhoria por linha."]]}}
];

/* casos com várias páginas (pages): qual página está aberta no visualizador */
let casePage = 0;
const caseSrc = c => c.pages ? c.pages[Math.min(casePage, c.pages.length-1)].src : c.after;
function cmpHTML(c){
  const single = !c.before;
  return `
    <div class="case-ctl">
      ${single ? '' : `<div class="seg-ctl" data-ctl="mode">
        <button type="button" data-v="before" aria-pressed="false">${T('cases.before')}</button>
        <button type="button" data-v="compare" aria-pressed="true">${T('cases.compare')}</button>
        <button type="button" data-v="after" aria-pressed="false">${T('cases.after')}</button>
      </div>`}
      ${c.pages ? `<div class="seg-ctl" data-ctl="page" role="group" aria-label="${T('cases.page')}">
        ${c.pages.map((pg,k)=>`<button type="button" data-v="${k}" aria-pressed="${k===casePage}">${pg.name}</button>`).join('')}
      </div>` : ''}
      <div class="seg-ctl" data-ctl="device">
        <button type="button" data-v="desktop" aria-pressed="true">${T('cases.desktop')}</button>
        <button type="button" data-v="mobile" aria-pressed="false">${T('cases.mobile')}</button>
      </div>
    </div>
    <div class="cmp" data-mode="${single ? 'after' : 'compare'}">
      ${single ? '' : `<iframe class="before" src="${c.before}" title="${T('cases.before')}"></iframe>`}
      <iframe class="after" src="${caseSrc(c)}" title="${c.pages ? c.pages[casePage].name : T('cases.after')}"></iframe>
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
    else if(ctl.dataset.ctl==='page'){
      const c = PROJECTS[current].blips; casePage = +b.dataset.v;
      const f = cmp.querySelector('iframe.after'); f.src = caseSrc(c); f.title = c.pages[casePage].name;
      $('p-behance').href = caseSrc(c);
    }
    else cmp.classList.toggle('mobile', b.dataset.v==='mobile');
  }));
}
/* casos Blips viram itens da lista de projetos, sempre primeiro */
CASES.filter(c=>!c.pending).reverse().forEach(c=>PROJECTS.unshift({
  slug:'blips-'+c.id, type:'blips', year:'2026', likes:c.likes, isNew:!!c.isNew, blips:c, key:c.cover||null, behance:null, gallery:[],
  en:{title:c.en.title, client:'Blips', tags:c.seg},
  pt:{title:c.pt.title, client:'Blips', tags:c.seg}
}));

/* =========================================================
   FERRAMENTAS — dobra entre o hero e os trabalhos
   icon = ícone oficial (images/tools) ou mono = monograma · tone = cor do brilho do ladrilho
   Para tirar uma ferramenta, apague o item; para incluir, copie um e troque os textos.
   ========================================================= */
const TOOLS = [
  {k:"figma", name:"Figma", icon:"images/tools/figma.webp", tone:"#9B8CFF",
   en:"Interfaces, prototypes and design systems", pt:"Interfaces, protótipos e design systems"},
  {k:"claude", name:"Claude", icon:"images/tools/claude.webp", tone:"#D97757",
   en:"Copy, code and research with <span class=\"keep\">AI</span>", pt:"Copy, código e pesquisa com <span class=\"keep\">IA</span>"},
  {k:"photoshop", name:"Photoshop", icon:"images/tools/photoshop.webp", tone:"#31A8FF",
   en:"Image editing and mockups", pt:"Tratamento de imagem e mockups"},
  {k:"illustrator", name:"Illustrator", icon:"images/tools/illustrator.webp", tone:"#FF9A00",
   en:"Logos, icons and vectors", pt:"Logos, ícones e vetores"},
  {k:"html", name:"HTML · CSS · JS", mono:"&lt;/&gt;", tone:"#D9F24A",
   en:"Light pages, no build step", pt:"Páginas leves, sem build"},
  {k:"wordpress", name:"WordPress", icon:"images/tools/wordpress.webp", tone:"#5A9BE0",
   en:"Sites the client can edit", pt:"Sites que o cliente edita"},
  {k:"elementor", name:"Elementor", mono:"E", tone:"#FF6A4B",
   en:"Landing pages inside WordPress", pt:"Landing pages dentro do WordPress"},
  {k:"meta", name:"Meta Ads", icon:"images/tools/meta.webp", tone:"#2A8BFF",
   en:"Creatives that are easy to measure", pt:"Criativos fáceis de medir"}
];
function renderTools(){
  const grid = document.getElementById('tools-grid'); if(!grid) return;
  grid.innerHTML = TOOLS.map((t,i)=>`<div class="tool" style="--i:${i};--tone:${t.tone}">
      <span class="tool__tile">${t.icon ? `<img src="${t.icon}" alt="" loading="lazy" decoding="async" draggable="false">` : `<b>${t.mono}</b>`}</span>
      <strong class="tool__name">${t.name}</strong>
      <span class="tool__desc">${t[lang]}</span>
    </div>`).join('');
  document.getElementById('skills-row').innerHTML = T('tools.list').map((x,i)=>`<span style="--i:${i}">${x}</span>`).join('');
}

/* ---------- idioma ---------- */
const nav = document.querySelector('.nav');
let lang = 'en';
try { lang = localStorage.getItem('lang') === 'pt' ? 'pt' : 'en'; } catch(e){}
const T = k => I18N[lang][k];
const typeLabel = t => T('type.' + t);
/* curtidas: número fixo de cada projeto + 1 se este visitante curtiu (fica salvo só no navegador dele) */
/* curtidas em formato genérico, sempre arredondando para baixo: 829 → +800 · 1.046 → +1k · 1.476 → +1,4k (pt) / +1.4k (en) */
const fmtNum = n => {
  if(n >= 1000){ const k = Math.floor(n/100)/10; return '+' + (k % 1 ? k.toFixed(1) : String(k)).replace('.', lang==='pt' ? ',' : '.') + 'k'; }
  if(n >= 100) return '+' + Math.floor(n/100)*100;
  if(n >= 10) return '+' + Math.floor(n/10)*10;
  return String(n);
};
const HEART = '<svg class="heart" viewBox="0 0 256 256" aria-hidden="true"><path class="h-o" fill="currentColor" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 204.16 32 155.69 32 102a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"/><path class="h-f" fill="currentColor" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62Z"/></svg>';
let liked = new Set();
try { liked = new Set(JSON.parse(localStorage.getItem('liked') || '[]')); } catch(e){}
const isLiked = p => liked.has(p.slug);
const likeCount = p => (p.likes || 0) + (isLiked(p) ? 1 : 0);
function toggleLike(p){
  isLiked(p) ? liked.delete(p.slug) : liked.add(p.slug);
  try { localStorage.setItem('liked', JSON.stringify([...liked])); } catch(e){}
}

function applyLang(){
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = T(el.dataset.i18n); });
  document.getElementById('skills').innerHTML = T('skills').map(s=>`<li>${s}</li>`).join('');
  renderTools();
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
      <div class="cap"><h3>${p[lang].title}</h3><div class="meta"><span class="likes${isLiked(p) ? ' on' : ''}" title="${T('likes')}">${HEART}<span class="n">${fmtNum(likeCount(p))}</span></span><span class="chip ${p.type}">${typeLabel(p.type)}</span></div></div>
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

/* todas as páginas de projeto usam as mesmas seções, na mesma ordem:
   "Como foi feito" (opcional) → "O projeto" → "Desdobramentos" (opcional) → "Resultados" (opcional) */
function sectionsHTML(d){
  const listHTML = (title, items, first) => `<h3 style="font-family:var(--disp);font-weight:700;font-size:22px;letter-spacing:-.02em;margin:${first ? '0' : '32px'} 0 8px">${title}</h3>
      <ol class="p-notes">${items.map(n=>`<li><b>${n[0]}</b><span>${n[1]}</span></li>`).join('')}</ol>`;
  return (d.process ? listHTML(T('cases.process'), d.process, true) : '') +
    listHTML(T('cases.improvements'), d.notes || [], !d.process) +
    (d.rollout ? listHTML(T('cases.rollout'), d.rollout, false) : '') +
    (d.results ? listHTML(T('cases.results'), d.results, false) : '');
}

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
    $('p-desc').innerHTML = sectionsHTML(bl);
    $('p-behance').hidden = false;
    $('p-behance').href = caseSrc(p.blips);
    $('p-behance').querySelector('span').textContent = T('cases.open');
  } else {
    $('p-cover').className = 'p-cover plain';
    $('p-cover').innerHTML = `<img src="images/covers/${p.key}.webp" srcset="images/covers/${p.key}-800.webp 800w, images/covers/${p.key}.webp 1280w" sizes="(max-width:1240px) 92vw, 1140px" width="1600" height="1200" alt="${d.title}" decoding="async">`;
    $('p-desc').innerHTML = sectionsHTML(d);
    $('p-behance').hidden = true;   // sem link para o Behance
  }
  $('p-tags').innerHTML = d.tags.map(t=>`<span>${t}</span>`).join('');
  $('p-gallery').innerHTML = p.blips ? '' : `<img src="images/projects/${p.key}.webp" srcset="images/projects/${p.key}-800.webp 800w, images/projects/${p.key}.webp 1200w" sizes="(max-width:1240px) 92vw, 1140px" alt="${d.title}" loading="lazy" decoding="async">`;
  const prev = PROJECTS[(i-1+PROJECTS.length)%PROJECTS.length];
  const next = PROJECTS[(i+1)%PROJECTS.length];
  $('p-prev').querySelector('strong').textContent = prev[lang].title;
  $('p-next').querySelector('strong').textContent = next[lang].title;
  renderLike(p);
  document.title = d.title + ' — Thiago Lemos';
}

/* botão de curtir no fim de cada projeto */
function renderLike(p){
  const b = $('p-like'), on = isLiked(p);
  b.classList.toggle('on', on);
  b.setAttribute('aria-pressed', on);
  b.querySelector('.like-label').textContent = on ? T('like.done') : T('like.btn');
  b.querySelector('.like-n').textContent = fmtNum(likeCount(p));
}
$('p-like').addEventListener('click', ()=>{
  const p = PROJECTS[current]; if(!p) return;
  toggleLike(p);
  renderLike(p);
  const b = $('p-like'); b.classList.remove('pop'); void b.offsetWidth; if(isLiked(p)) b.classList.add('pop');
  const tag = grid.querySelector(`.card[data-index="${current}"] .likes`);
  if(tag){ tag.classList.toggle('on', isLiked(p)); tag.querySelector('.n').textContent = fmtNum(likeCount(p)); }
});

function openProject(i, push=true, page=0){
  if(i !== current || page) casePage = page;
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
const darkSections = [...document.querySelectorAll('.hero, .tools, .contact')];
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
initBlobs(document.querySelector('.contact'));

/* ---------- hero: mural de mini criativos em movimento ----------
   Cada cartão é um pequeno criativo animado em HTML/CSS, feito com o conteúdo real das
   páginas da Blips que estão no site (preços, ofertas, especificações, mensagens, produtos).
   As colunas correm em 3D, cada uma numa velocidade; dentro de cada cartão a peça também
   se mexe (número que conta, marca-texto que passa, botão que é clicado, mapa com pinos...).
   Para criar um criativo novo: um item em CREATIVES com {k, ar (altura/largura), html}. */
const LOGO = 'blips/fiber-desktop-50w/assets/img/blips-logo.svg';
const LOGO_W = 'blips/fiber-desktop-50w/assets/img/blips-logo-white.svg';
const IMG = {
  fiber:'blips/fiber-desktop-50w/assets/img/maquina-gravacao-laser-desktop-vuze-50w.webp',
  flatbed:'blips/flatbed-uv-9060/assets/img/flatbed-uv-vuze-9060-perspectiva-uv-led.webp',
  flatbedFront:'blips/flatbed-uv-9060/assets/img/aluguel-flatbed-uv-vuze-9060-xp600-frontal.webp',
  vuze:'blips/vuze-5050/assets/img/vuze-5050-mesa.webp',
  vuzeHero:'blips/vuze-5050/assets/img/vuze-5050-hero.webp',
  brasil:'images/wall/brasil.svg'
};
/* ícones (traço simples, estilo Phosphor regular) */
const ICO = {
  bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  check:'<path d="m5 12 5 5L20 7"/>',
  ruler:'<path d="M3 17 17 3l4 4L7 21zM8 12l2 2M11 9l2 2M14 6l2 2"/>',
  rotate:'<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5"/>',
  drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  cursor:'<path d="M5 3l14 8-6 2-3 6z" fill="currentColor" stroke="#fff" stroke-width="1.5"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>',
  truck:'<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
  wrench:'<path d="M14 7a4 4 0 0 0 5 5l-9 9-3-3 9-9a4 4 0 0 0-2-2z"/>',
  head:'<path d="M12 2v6M8 8h8l2 4H6z"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/>'
};
const ico = (k, cls='') => `<svg class="wi ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO[k]}</svg>`;
/* número que conta: cada dígito é uma coluna de 0 a 9 que rola até o valor certo */
const odo = (str, d=0) => `<span class="od">${[...str].map((ch,i)=>/\d/.test(ch)
  ? `<span class="od__d" style="--n:${ch};--o:${(d + i*.07).toFixed(2)}s"><span class="od__col"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></span></span>`
  : `<span class="od__c">${ch === ' ' ? '\u00a0' : ch}</span>`).join('')}</span>`;
const eb = (t, inv=false) => `<i class="wc__eb${inv ? ' inv' : ''}">${t}</i>`;
const logo = (w=false) => `<img class="wc__logo" src="${w ? LOGO_W : LOGO}" alt="" draggable="false">`;

const CREATIVES = [
  /* oferta em parcelas: o 18x aparece e o preço conta */
  {k:'parcela', ar:1.08, html:()=>`<div class="wc wc--white wc--parcela">
    ${eb('parcele no cartão')}
    <div class="row"><b class="pill-x">18<small>x</small></b><div><strong class="price">${odo('R$ 1.234,56')}</strong><small>por mês · sem juros</small></div></div>
    <span class="chip-ok">${ico('check')}Parcelas fixas do início ao fim</span>
    <div class="line"><span>Valor total à vista</span><em>R$ 22.222,08</em></div></div>`},
  /* financiamento: entrada + boleto sendo "impresso" */
  {k:'entrada', ar:1.02, html:()=>`<div class="wc wc--white wc--entrada">
    ${eb('financie com a Blips')}
    <small>Entrada de</small><strong class="price">${odo('R$ 8.127,78')}</strong>
    <p>e o restante em <b>até 36 vezes no boleto</b></p>
    <div class="boleto"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <small class="note">Sujeito a análise de crédito.</small></div>`},
  /* prazo do boleto: o seletor desliza e a parcela muda junto */
  {k:'prazo', ar:.98, html:()=>`<div class="wc wc--white wc--prazo">
    ${eb('prazo do boleto')}
    <div class="seg"><i class="seg__knob"></i><span>12x</span><span>24x</span><span>36x</span></div>
    <div class="vals"><strong>R$ 2.031,94</strong><strong>R$ 1.015,97</strong><strong>R$ 677,31</strong></div>
    <small>parcela da máquina, após a entrada</small></div>`},
  /* aluguel: preço por mês em destaque */
  {k:'plano', ar:.92, html:()=>`<div class="wc wc--blue wc--plano">
    ${eb('locação Blips', true)}
    <small>Planos a partir de</small>
    <strong class="price">${odo('R$ 4.429,67')}<em>/mês</em></strong>
    <p>Sem imobilizar o caixa da sua empresa</p>
    <div class="tags"><span>${ico('wrench')}Instalação gratuita</span><span>${ico('shield')}Assistência técnica</span></div></div>`},
  /* título com marca-texto que passa */
  {k:'headline', ar:1, html:()=>`<div class="wc wc--yellow wc--headline">
    <span class="tag-top">${ico('layers')}Impressora 3D</span>
    <h4>Compre a sua <mark>Impressora 3D</mark></h4>
    <p>Letras caixa, peças sob demanda e protótipos na sua oficina.</p>
    <b class="arrow">Conhecer condições ${ico('check')}</b></div>`},
  {k:'headline2', ar:1, html:()=>`<div class="wc wc--yellow wc--headline">
    <span class="tag-top">${ico('bolt')}Máquina de gravação a laser</span>
    <h4>Financie a sua <mark>Fiber Desktop 50W</mark></h4>
    <p>Marcação permanente, sem tintas nem insumos.</p>
    <b class="arrow">Quero um orçamento ${ico('check')}</b></div>`},
  /* produto flutuando */
  {k:'prod-fiber', ar:1.12, html:()=>`<div class="wc wc--yellow wc--prod"><img src="${IMG.fiber}" alt="" draggable="false"><i class="shadow"></i><span class="lbl">${ico('bolt')}Laser fiber 50 W · 30 × 30 cm</span></div>`},
  {k:'prod-flatbed', ar:1.12, html:()=>`<div class="wc wc--yellow wc--prod"><img src="${IMG.flatbed}" alt="" draggable="false"><i class="shadow"></i><span class="lbl">${ico('drop')}3 cabeças XP600 · 90 × 60 cm</span></div>`},
  {k:'prod-vuze', ar:1.12, html:()=>`<div class="wc wc--yellow wc--prod"><img src="${IMG.vuze}" alt="" draggable="false"><i class="shadow"></i><span class="lbl">${ico('layers')}Vuze 3D 5050 · área útil de 500 mm</span></div>`},
  /* Blips em números: mapa com pinos acendendo */
  {k:'numeros', ar:1.2, html:()=>`<div class="wc wc--black wc--numeros">
    ${eb('Blips em números', true)}
    <div class="map"><img src="${IMG.brasil}" alt="" draggable="false"><i style="--x:62%;--y:30%"></i><i style="--x:70%;--y:52%"></i><i style="--x:58%;--y:66%"></i><i style="--x:48%;--y:80%"></i><i style="--x:34%;--y:46%"></i><i style="--x:76%;--y:40%"></i></div>
    <strong>${odo('+10.000')}</strong><small>equipamentos instalados em todo o Brasil</small></div>`},
  /* conversa de WhatsApp: as mensagens chegam uma a uma */
  {k:'whats', ar:1.3, html:()=>`<div class="wc wc--soft wc--whats">
    <div class="head"><b>F</b><div><strong>Fernanda</strong><small>Brindes · Uberlândia, MG</small></div></div>
    <p class="m m1">Imprimi 40 canetas de uma vez na mesa</p>
    <p class="m m2">Com branco por baixo, ficou perfeito</p>
    <p class="m m3 typing"><i></i><i></i><i></i></p>
    <p class="m m4 me">Que bom, Fernanda! Qualquer coisa, é só chamar</p></div>`},
  {k:'whats2', ar:1.3, html:()=>`<div class="wc wc--soft wc--whats">
    <div class="head"><b>C</b><div><strong>Carla</strong><small>Brindes corporativos · BH, MG</small></div></div>
    <p class="m m1">Entreguei hoje os 300 chaveiros do evento</p>
    <p class="m m2">Saiu tudo igualzinho</p>
    <p class="m m3 typing"><i></i><i></i><i></i></p>
    <p class="m m4 me">Que notícia boa, Carla! Precisando, é só chamar</p></div>`},
  /* simulador: o controle anda e a sobra muda */
  {k:'simulador', ar:1.18, html:()=>`<div class="wc wc--white wc--sim">
    ${eb('faça as contas')}
    <div class="lbl"><span>Peças gravadas por semana</span><b class="n"><em>150</em><em>300</em></b></div>
    <div class="range"><i class="fill"></i><i class="knobw"><i class="knob"></i></i></div>
    <div class="lbl"><span>Preço médio</span><b>R$ 25</b></div>
    <div class="out"><small>Sobra no seu bolso por mês</small><strong><em>R$ 12.963</em><em>R$ 26.726</em></strong></div></div>`},
  /* como funciona: passos acendem em sequência */
  {k:'passos', ar:1.32, html:()=>`<div class="wc wc--white wc--passos">
    ${eb('como funciona')}
    <ol><i class="bar"></i>
      <li><b>1</b><div><strong>Cadastro</strong><small>Preencha o formulário</small></div></li>
      <li><b>2</b><div><strong>Análise</strong><small>Crédito rápido para o seu CNPJ</small></div></li>
      <li><b>3</b><div><strong>Entrada</strong><small>Aprovado: entrada paga, resto no boleto</small></div></li>
      <li><b>4</b><div><strong>Instalação</strong><small>Gratuita, com nossos especialistas</small></div></li></ol></div>`},
  /* FAQ: as perguntas abrem uma de cada vez */
  {k:'faq', ar:1.16, html:()=>`<div class="wc wc--white wc--faq">
    ${eb('dúvidas frequentes')}
    <div class="q q1"><b>Preciso comprar tinta ou insumo?<i></i></b><p>Não. A marcação é feita só com a energia do laser.</p></div>
    <div class="q q2"><b>Ela grava em copos e garrafas?<i></i></b><p>Sim. O eixo rotativo vem incluso.</p></div>
    <div class="q q3"><b>Serve para itens muito pequenos?<i></i></b><p>Sim. Linha mínima de 50 mícrons.</p></div></div>`},
  /* benefícios: os cartões entram um por um */
  {k:'beneficios', ar:1.06, html:()=>`<div class="wc wc--white wc--ben">
    ${eb('benefícios Blips')}
    <div class="g"><div>${ico('bolt')}<b>Laser fiber de 50 W</b></div><div>${ico('ruler')}<b>Área de 30 × 30 cm</b></div><div>${ico('rotate')}<b>Eixo rotativo incluso</b></div><div>${ico('drop')}<b>Sem tintas nem insumos</b></div></div></div>`},
  /* formulário sendo preenchido e enviado */
  {k:'form', ar:1.34, html:()=>`<div class="wc wc--white wc--form">
    ${eb('orçamento')}
    <label><span>Nome</span><i class="in"><em>Fernanda Souza</em></i></label>
    <label><span>WhatsApp</span><i class="in"><em>(34) 9 9999-0000</em></i></label>
    <label><span>CNPJ</span><i class="in"><em>12.345.678/0001-90</em></i></label>
    <span class="ck"><i>${ico('check')}</i>Aceito a LGPD</span>
    <b class="btn"><span class="t1">Solicitar um orçamento</span><span class="t2">${ico('check')}Enviado</span></b>
    <code class="toast">dataLayer.push({event:'lead_enviado'})</code></div>`},
  /* cores da flatbed: as amostras caem */
  {k:'cores', ar:1, html:()=>`<div class="wc wc--white wc--cores">
    ${eb('impressão UV')}
    <h5>CMYK + branco + verniz</h5>
    <div class="sw"><i style="--c:#00AEEF">C</i><i style="--c:#EC008C">M</i><i style="--c:#FFF200;color:#000">Y</i><i style="--c:#111">K</i><i style="--c:#fff;color:#000;border:1px solid #ddd">W</i><i style="--c:#e9e9e9;color:#000">V</i></div>
    <p>Cor viva em material escuro ou transparente e brilho com relevo no acabamento.</p></div>`},
  /* cabeça de impressão passando e curando com UV */
  {k:'uv', ar:.9, html:()=>`<div class="wc wc--black wc--uv">
    ${eb('cura UV LED na hora', true)}
    <div class="plate"><span class="ink"><i style="--c:#00AEEF"></i><i style="--c:#EC008C"></i><i style="--c:#FFF200"></i><i style="--c:#fff"></i></span><i class="headw"><i class="headp">${ico('head')}</i></i></div>
    <small>A tinta seca ao sair da cabeça. A peça sai pronta.</small></div>`},
  /* área de impressão com cotas sendo desenhadas */
  {k:'area', ar:1, html:()=>`<div class="wc wc--white wc--area">
    ${eb('área útil')}
    <svg viewBox="0 0 200 150" aria-hidden="true"><rect class="r" x="30" y="24" width="150" height="100" rx="4"/><path class="d d1" d="M30 138h150"/><path class="d d2" d="M16 24v100"/><text class="t t1" x="105" y="148">90 cm</text><text class="t t2" x="10" y="78" transform="rotate(-90 10 78)">60 cm</text></svg>
    <span class="chip-ok">${ico('layers')}Chapas de até 15 cm</span></div>`},
  /* velocidade: o ponteiro sobe */
  {k:'gauge', ar:1, html:()=>`<div class="wc wc--white wc--gauge">
    ${eb('velocidade')}
    <svg viewBox="0 0 200 120" aria-hidden="true"><path class="bg" d="M20 110A80 80 0 0 1 180 110"/><path class="fg" d="M20 110A80 80 0 0 1 180 110"/><line class="nd" x1="100" y1="110" x2="100" y2="38"/><circle cx="100" cy="110" r="6"/></svg>
    <strong>${odo('7.000')}<em> mm/s</em></strong><small>grava em segundos</small></div>`},
  /* selo giratório da garantia */
  {k:'selo', ar:1, html:()=>`<div class="wc wc--yellow wc--selo">
    <svg viewBox="0 0 200 200" aria-hidden="true"><defs><path id="wcirc" d="M100 100m-72 0a72 72 0 1 1 144 0a72 72 0 1 1-144 0"/></defs><text class="ring"><textPath href="#wcirc">garantia blips · suporte especializado · entrega em todo o brasil · </textPath></text></svg>
    <span class="c">${ico('shield')}</span></div>`},
  /* logo com brilho e assinatura */
  {k:'logo', ar:.82, html:()=>`<div class="wc wc--black wc--logo"><span class="shine">${logo(true)}</span><p>Especialistas em (a)creditar.</p></div>`},
  /* botão sendo clicado */
  {k:'cta', ar:.9, html:()=>`<div class="wc wc--white wc--cta">
    <p>Resposta de um especialista em até <b>1 dia útil</b></p>
    <b class="btn">${ico('chat')}Quero um orçamento</b><span class="ring"></span><span class="cur">${ico('cursor')}</span></div>`},
  /* antes / depois: o divisor passa */
  {k:'compare', ar:1, html:()=>`<div class="wc wc--white wc--cmp">
    <div class="box"><img src="${IMG.flatbedFront}" alt="" draggable="false"><img class="top" src="${IMG.flatbed}" alt="" draggable="false"><i class="hw"><i class="h"></i></i></div>
    <div class="lbls"><span>frontal</span><span>perspectiva</span></div></div>`},
  /* ficha técnica subindo */
  {k:'ticker', ar:1.14, html:()=>`<div class="wc wc--violet wc--ticker">
    ${eb('ficha técnica', true)}
    <div class="win"><ul>
      <li>Laser de fibra galvanométrico</li><li>Fonte Raycus · 100.000 horas</li><li>Área de gravação 300 × 300 mm</li><li>Velocidade até 7.000 mm/s</li><li>Precisão de ±0,001 mm</li><li>Linha mínima de 50 mícrons</li><li>Software EzCad2</li>
      <li>Laser de fibra galvanométrico</li><li>Fonte Raycus · 100.000 horas</li><li>Área de gravação 300 × 300 mm</li></ul></div></div>`},
  /* Blips Food: título com destaques alternando e categorias */
  {k:'food', ar:1.2, html:()=>`<div class="wc wc--white wc--food">
    ${eb('linha Food')}
    <h4><mark class="m1">Mais produção</mark>, <mark class="m2">menos desperdício</mark>, <mark class="m3">mais lucro.</mark></h4>
    <div class="chips"><span>Lava louça</span><span>Máquina de suco</span><span>Máquina de gelo</span><span>Fritadeira</span><span>Seladora</span><span>Ultracongelador</span><span>Lava louça</span><span>Máquina de suco</span></div>
    <div class="line"><span>a partir de</span><em>R$ 2.233 · até 36x</em></div></div>`},
  /* ficha: linhas chegando com valores em mono */
  {k:'ficha', ar:1.08, html:()=>`<div class="wc wc--white wc--ficha">
    ${eb('Flatbed UV Vuze 3x XP600 9060')}
    <div class="r r1"><span>Cabeças</span><em>3 × Epson XP600</em></div>
    <div class="r r2"><span>Área útil</span><em>90 × 60 cm</em></div>
    <div class="r r3"><span>Cores</span><em>CMYK + W + V</em></div>
    <div class="r r4"><span>Velocidade</span><em>até 9 m²/h</em></div>
    <div class="r r5"><span>Cura</span><em>UV LED</em></div></div>`},
  /* impressão 3D: a peça sobe camada por camada */
  {k:'camadas', ar:1.08, html:()=>`<div class="wc wc--white wc--3d">
    ${eb('impressão 3D')}
    <div class="stage"><i class="noz">${ico('head')}</i><div class="piece"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div>
    <small>Letras caixa, peças sob demanda e protótipos</small></div>`},
  /* sobra no bolso: barras crescem */
  {k:'sobra', ar:1, html:()=>`<div class="wc wc--white wc--sobra">
    ${eb('simulação por mês')}
    <div class="bars"><div><i style="--h:100%"></i><span>Faturamento</span></div><div><i style="--h:25%;--c:#bbb"></i><span>Custos</span></div><div><i style="--h:49%"></i><span>Sobra</span></div></div>
    <strong>${odo('R$ 8.560')}</strong><small>sobra no seu bolso por mês</small></div>`},
  /* vídeos reais das páginas */
  {k:'video-fiber', ar:1.8, video:'images/wall/fiber-50w-gravacao-metal.mp4', poster:'images/wall/fiber-50w-gravacao-metal.webp', html:()=>`<div class="wc wc--video"><span class="lbl">${ico('bolt')}Fiber 50W gravando</span></div>`},
  {k:'video-flatbed', ar:.5625, video:'images/wall/flatbed-uv-9060-impressao.mp4', poster:'images/wall/flatbed-uv-9060-impressao.webp', html:()=>`<div class="wc wc--video"><span class="lbl">${ico('drop')}Flatbed UV 9060 imprimindo</span></div>`},
];

function initWall(hero){
  const wall = document.getElementById('wall'); if(!hero || !wall) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // aparelhos mais modestos ou com economia de dados: sem vídeo
  const lite = (navigator.hardwareConcurrency || 8) <= 4 || !!(navigator.connection && navigator.connection.saveData);
  const rnd = (a,b) => a + Math.random()*(b-a);
  const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
  const COLORFUL = new Set(['headline','headline2','prod-fiber','prod-flatbed','prod-vuze','selo','plano','ticker','numeros','cores','uv','video-fiber','video-flatbed','sobra','gauge','sim-color','beneficios']);
  const isColorful = x => COLORFUL.has(x.k || x.dataset.k) ? 1 : 0;

  function card(it, cw){
    const h = Math.round(cw * it.ar);
    const el = document.createElement('div');
    el.className = 'wcard'; el.style.height = h + 'px'; el.dataset.k = it.k;
    el.style.setProperty('--dl', (-rnd(0, 9)).toFixed(2) + 's');   // cada cartão começa num ponto diferente do loop
    el.innerHTML = it.html();
    if(it.video && !lite){
      const v = document.createElement('video');
      v.muted = true; v.loop = true; v.playsInline = true; v.preload = still ? 'none' : 'auto'; v.tabIndex = -1;
      v.setAttribute('muted',''); v.setAttribute('playsinline',''); v.setAttribute('loop',''); v.setAttribute('disablepictureinpicture','');
      v.poster = it.poster;
      [[it.video,'video/mp4'],[it.video.replace(/\.mp4$/,'.webm'),'video/webm']].forEach(([src,type])=>{
        const so = document.createElement('source'); so.src = src; so.type = type; v.append(so); });
      el.firstElementChild.prepend(v);
    } else if(it.video){
      const im = document.createElement('img'); im.src = it.poster; im.alt = ''; im.className = 'poster'; el.firstElementChild.prepend(im);
    }
    return [el, h];
  }

  let built = '';
  function build(){
    const vw = hero.clientWidth, vh = hero.clientHeight;
    const cw = Math.round(Math.min(300, Math.max(176, vw * 0.185)));
    const g = Math.round(cw * 0.08);
    // o mural é maior que a tela porque gira em 3D: sobra em todos os lados
    // em aparelhos modestos o mural fica um pouco menor (menos cartões animados)
    const needW = vw * (lite ? 1.3 : 1.55) + vh * .4, needH = vh * (lite ? 1.5 : 1.7) + vw * .25;
    const n = Math.ceil(needW / (cw + g));
    const colH = Math.round(needH);
    const key = n + 'x' + cw + 'x' + colH;
    if(key === built) return; built = key;
    wall.style.setProperty('--cw', cw + 'px'); wall.style.setProperty('--g', g + 'px'); wall.style.setProperty('--colh', colH + 'px');
    const tilt = document.createElement('div'); tilt.className = 'wall__tilt';
    const cols = Array.from({length:n}, ()=>({items:[], h:0}));
    const budget = colH + 2 * g + 160;
    // no celular entram mais cartões coloridos (os amarelos, azuis, roxos, produtos e vídeos aparecem duas vezes na fila)
    const mobile = vw <= 640;
    const mix = ()=> mobile ? [...shuffle(CREATIVES.filter(isColorful)), ...shuffle(CREATIVES.filter(c=>!isColorful(c))), ...shuffle(CREATIVES.filter(isColorful))] : shuffle(CREATIVES);
    let order = mix(), p = 0, guard = 0;
    while(cols.some(c=>c.h < budget) && guard++ < 600){
      for(const c of cols){
        if(c.h >= budget) continue;
        if(p >= order.length){ order = mix(); p = 0; }
        const [el, h] = card(order[p++], cw);
        c.items.push(el); c.h += h + g;
      }
    }
    // ordem de entrada: os cartões aparecem um a um (no celular, os mais coloridos primeiro)
    const all = cols.flatMap(c=>c.items);
    const rank = shuffle(all).sort((x,y)=>(mobile ? (isColorful(y) - isColorful(x)) : 0));
    rank.forEach((el,i)=>el.style.setProperty('--rd', Math.min(i * 26, 2600) + 'ms'));
    cols.forEach(c=>{
      const col = document.createElement('div'); col.className = 'wcol';
      const tr = document.createElement('div'); tr.className = 'wtrack';
      c.items.forEach(el=>tr.append(el));
      c.items.forEach(el=>tr.append(el.cloneNode(true)));   // segunda cópia: o loop fica sem emenda
      const dur = c.h / rnd(14, 22);
      tr.style.setProperty('--dur', dur.toFixed(1) + 's');
      tr.style.animationDelay = (-rnd(0, dur)).toFixed(1) + 's';
      col.append(tr); tilt.append(col);
    });
    if(wall.classList.contains('on')) wall.classList.add('norev');   // já estava montado (redimensionou): sem entrada um a um
    move.replaceChildren(tilt);
    wall.querySelectorAll('video').forEach(v=>{ v.muted = true; if(!still && visible) v.play().catch(()=>{}); });
  }

  const move = document.createElement('div'); move.className = 'wall__move';
  wall.append(move);
  if(still) wall.classList.add('still');
  if(lite) wall.classList.add('lite');

  // pausa tudo quando o hero sai da tela (economiza bateria e processamento)
  let visible = true;
  const setPlaying = on => {
    wall.classList.toggle('paused', !on);
    wall.querySelectorAll('video').forEach(v=>{ if(on && !still) v.play().catch(()=>{}); else v.pause(); });
  };
  new IntersectionObserver(([e])=>{ visible = e.isIntersecting && e.intersectionRatio > .04; setPlaying(visible && !document.hidden); }, {threshold:[0,.04,.1]}).observe(hero);
  document.addEventListener('visibilitychange', ()=>setPlaying(visible && !document.hidden));

  let rt = 0;
  window.addEventListener('resize', ()=>{ clearTimeout(rt); rt = setTimeout(build, 250); });
  const start = ()=>{ build(); requestAnimationFrame(()=>requestAnimationFrame(()=>wall.classList.add('on'))); };
  // monta depois que o resto da página carregou, para não atrasar o texto do hero
  if(document.readyState === 'complete') setTimeout(start, 60);
  else window.addEventListener('load', ()=>setTimeout(start, 60), {once:true});
}
initWall(document.querySelector('.hero'));

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
/* (o realce que pulava entre os botões saiu; os botões principais têm brilho próprio no CSS) */

/* ferramentas: entram em sequência quando a dobra aparece na tela */
(()=>{
  const sec = document.querySelector('.tools'); if(!sec) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){ sec.classList.add('in'); return; }
  new IntersectionObserver((es,io)=>{ if(es.some(e=>e.isIntersecting)){ sec.classList.add('in'); io.disconnect(); } }, {threshold:.12}).observe(sec);
})();

/* deep link: index.html#projeto/slug abre direto o projeto */
function fromHash(){
  const m = location.hash.match(/^#projeto\/([\w-]+)$/);
  if(m){
    /* links antigos dos três casos que viraram um só abrem a página certa dentro dele */
    const OLD = {'blips-vuze-5050':0, 'blips-fiber-desktop-50w':1, 'blips-flatbed-uv-9060':2};
    if(m[1] in OLD){
      const j = PROJECTS.findIndex(p=>p.slug==='blips-lps-equipamentos');
      if(j>-1){ history.replaceState({project:PROJECTS[j].slug}, '', '#projeto/' + PROJECTS[j].slug); openProject(j,false,OLD[m[1]]); return; }
    }
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
