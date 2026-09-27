/* =========================================================
   TEXTOS DA INTERFACE — inglês (en) é o padrão, português (pt) opcional
   ========================================================= */
const I18N = {
  en: {
    "cases.before":"Before","cases.after":"After","cases.compare":"Compare","cases.desktop":"Desktop","cases.mobile":"Mobile",
    "cases.improvements":"What changed in the redesign","cases.client":"Blips","cases.open":"Open the page in a new tab",
    "nav.work":"Work","nav.about":"About","nav.contact":"Contact","nav.status":"Available for freelance",
    "hero.title":"Design that solves real problems.",
    "hero.text":"Interfaces, landing pages, brands and paid-media creatives. Digital experiences that are simple, functional and visually engaging.",
    "hero.cta1":"See the work","hero.cta2":"Get in touch",
    "band1":["UI design","Landing pages","Branding","Meta Ads","AI tools","UX"],
    "band2":["Available for freelance","Mobile first","Web pages","Figma","Adobe CC"],
    "work.title":"Selected work","filter.all":"All",
    "type.blips":"Blips","type.web":"Web & UI","type.brand":"Packaging","type.ads":"Ads",
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
    "cases.improvements":"O que mudou no redesign","cases.client":"Blips","cases.open":"Abrir a página em nova aba",
    "nav.work":"Trabalhos","nav.about":"Sobre","nav.contact":"Contato","nav.status":"Disponível para freelance",
    "hero.title":"Design que resolve problemas de verdade.",
    "hero.text":"Interfaces, landing pages, marcas e criativos para mídia paga. Experiências digitais simples, funcionais e visualmente envolventes.",
    "hero.cta1":"Ver trabalhos","hero.cta2":"Falar comigo",
    "band1":["UI design","Landing pages","Branding","Meta Ads","Ferramentas de IA","UX"],
    "band2":["Disponível para freelance","Mobile first","Páginas web","Figma","Adobe CC"],
    "work.title":"Trabalhos selecionados","filter.all":"Todos",
    "type.blips":"Blips","type.web":"Web & UI","type.brand":"Embalagem","type.ads":"Anúncios",
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
       desc:["Redesign of the RedlineMD page, a service that reviews and renegotiates medical employment contracts. The main goal was to increase conversions from Google Ads traffic and create a more polished experience, especially on mobile.",
             "Key changes: a cleaner header with the logo and menu repositioned, the primary CTA moved into the hero so it's easier to reach, carousel dots to cut vertical scrolling, feature cards redesigned with brand colors and better icon contrast, an image in the CTA card and a stats section that makes the numbers feel more convincing.",
             "Done in Figma within a one-hour timeframe, prioritizing the changes with the biggest impact on usability and conversion."]},
   pt:{title:"RedlineMD — Redesign mobile", client:"RedlineMD", tags:["UX","Mobile first","Redesign","Figma"],
       desc:["Redesign da página da RedlineMD, serviço que analisa e renegocia contratos de trabalho de médicos. O objetivo principal era aumentar a conversão do tráfego de Google Ads e criar uma experiência mais bem acabada, principalmente no mobile.",
             "Principais mudanças: header mais limpo com logo e menu reposicionados, CTA principal levado para o topo para ficar mais fácil de alcançar, carrossel com indicadores para reduzir a rolagem, cards redesenhados com as cores da marca e ícones com mais contraste, imagem no card de CTA e uma seção de números mais convincente.",
             "Feito no Figma em uma janela de uma hora, priorizando as mudanças com maior impacto em usabilidade e conversão."]}},

  {slug:"avance-global-private-jet", key:"jet", type:"web", year:"2026", views:3571,
   behance:"https://www.behance.net/gallery/254543405/Web-Page-Design-Private-Jet",
   en:{title:"Avance Global — Private jet booking", client:"Avance Global", tags:["Web design","UI","Luxury","Desktop & mobile"],
       desc:["Website for a private aviation company that wanted to elevate its digital presence and attract high-end clients. In this market, first impressions are everything: the site had to communicate exclusivity, confidence and premium service from the very first screen.",
             "The design uses cinematic imagery, oversized typography and a dark palette, balanced with clean layouts and plenty of breathing room. The work covers the home page, aircraft catalog and destinations, in desktop and mobile versions, guiding users naturally toward the quote request."]},
   pt:{title:"Avance Global — Reserva de jatos particulares", client:"Avance Global", tags:["Web design","UI","Luxo","Desktop e mobile"],
       desc:["Site para uma empresa de aviação executiva que queria elevar sua presença digital e atrair clientes de alto padrão. Nesse mercado a primeira impressão é tudo: o site precisava transmitir exclusividade, confiança e serviço premium já na primeira tela.",
             "O design usa imagens cinematográficas, tipografia em grande escala e paleta escura, equilibradas com layouts limpos e bastante respiro. O trabalho inclui home, catálogo de aeronaves e destinos, em versões desktop e mobile, levando o usuário de forma natural até o pedido de cotação."]}},

  {slug:"pto-exchange", key:"pto", type:"web", year:"2025", views:7568,
   behance:"https://www.behance.net/gallery/239940969/Webpage-UI-Design",
   en:{title:"PTO Exchange — Web page UI/UX", client:"PTO Exchange", tags:["UI","UX","B2B","Desktop & mobile"],
       desc:["Web page for PTO Exchange, a benefits platform that lets employees convert unused vacation time into retirement savings, student loan payments, travel and more.",
             "The objective was a page that is simple to navigate and speaks directly to HR professionals. The solution is a clean, intuitive layout focused on HR needs, highlighting pricing, benefits and FAQs so visitors quickly understand the value. Process: briefing, persona research and benchmarking, user flow, responsive UI design and testing with users."]},
   pt:{title:"PTO Exchange — Web page UI/UX", client:"PTO Exchange", tags:["UI","UX","B2B","Desktop e mobile"],
       desc:["Página web da PTO Exchange, plataforma de benefícios que permite ao funcionário converter férias não usadas em previdência, pagamento de empréstimo estudantil, viagens e mais.",
             "O objetivo era uma página simples de navegar e alinhada ao público de RH. A solução é um layout limpo e intuitivo focado nas necessidades desse público, destacando preços, benefícios e dúvidas frequentes para que o visitante entenda o valor rapidamente. Processo: briefing, pesquisa de persona e benchmarking, fluxo de usuário, UI responsiva e teste com usuários."]}},

  {slug:"healify-packaging", key:"healify", type:"brand", year:"2026", views:1891,
   behance:"https://www.behance.net/gallery/252479475/Packaging-System-for-Medical-Cannabis",
   en:{title:"Healify — Medical cannabis packaging", client:"Healify", tags:["Packaging","Visual identity","Color system"],
       desc:["Packaging system for a line of medical cannabis products for the Brazilian market. The challenge was to balance a highly regulated category with a modern, trustworthy identity that makes patients feel comfortable and confident.",
             "Research into pharmaceutical packaging and premium wellness brands led to a minimalist system with strong information hierarchy and color coding to tell the variations apart: Boost + Recovery, Slim, Sleep and Focus, across drops, gummies and capsules. The result combines regulatory clarity with a contemporary visual language."]},
   pt:{title:"Healify — Embalagens de cannabis medicinal", client:"Healify", tags:["Embalagem","Identidade visual","Sistema de cores"],
       desc:["Sistema de embalagens para uma linha de cannabis medicinal voltada ao mercado brasileiro. O desafio era equilibrar uma categoria altamente regulada com uma identidade moderna e confiável, que deixasse o paciente confortável e seguro com o produto.",
             "A pesquisa em embalagens farmacêuticas e marcas premium de bem-estar levou a um sistema minimalista, com hierarquia de informação forte e código de cores para diferenciar as variações: Boost + Recovery, Slim, Sleep e Focus, em gotas, gomas e cápsulas. O resultado une clareza regulatória e linguagem visual contemporânea."]}},

  {slug:"oticas-carol", key:"oticas", type:"ads", year:"2022", views:2286,
   behance:"https://www.behance.net/gallery/156804477/Oticas-Carol-Criativos-Facebook-ADS",
   en:{title:"Óticas Carol — Lead generation ads", client:"Óticas Carol", tags:["Meta Ads","Creatives","Retail","Feed & stories"],
       desc:["Creatives developed for a qualified lead acquisition campaign for Óticas Carol in Ponta Porã: free eye exams, store-wide discounts, the store's 3rd anniversary, Father's Day and contact lens offers.",
             "Feed and stories formats built on the brand's blue and yellow, with the offer as the hero of each piece and a clear call to book or visit the store."]},
   pt:{title:"Óticas Carol — Criativos para geração de leads", client:"Óticas Carol", tags:["Meta Ads","Criativos","Varejo","Feed e stories"],
       desc:["Criativos desenvolvidos para a campanha de aquisição de leads qualificados da Óticas Carol em Ponta Porã: exame de vista grátis, descontos em toda a loja, aniversário de 3 anos, Dia dos Pais e ofertas de lentes de contato.",
             "Formatos de feed e stories sobre o azul e amarelo da marca, com a oferta como protagonista de cada peça e uma chamada clara para agendar ou ir à loja."]}},

  {slug:"adaptive-erp-landing", key:"erp", type:"web", year:"2023", views:9879,
   behance:"https://www.behance.net/gallery/185614153/Landing-Page-Software-ERP",
   en:{title:"Adaptive — ERP landing page", client:"Adaptive", tags:["Landing page","UI","B2B","Clarity research"],
       desc:["Short sales page for Adaptive, an ERP for gas stations, wholesalers and supermarkets. The goal was a functional landing page that increases conversions and lead generation.",
             "Heatmaps from Microsoft Clarity showed users spent about 30 seconds on the page and left before reaching the form, and that the free demo CTAs got the most interaction. The solution was to cut the content to the essentials and bring the demo request forward."]},
   pt:{title:"Adaptive — Landing page de ERP", client:"Adaptive", tags:["Landing page","UI","B2B","Pesquisa com Clarity"],
       desc:["Página de vendas curta para a Adaptive, ERP para postos de combustível, atacadistas e supermercados. O objetivo era uma landing page funcional que aumentasse as conversões e a geração de leads.",
             "Os mapas de calor do Clarity mostraram que o usuário ficava cerca de 30 segundos na página e saía antes do formulário, e que os CTAs de demonstração grátis eram os mais clicados. A solução foi reduzir ao máximo a quantidade de informação e antecipar o pedido de demonstração."]}},

  {slug:"digitalbot-chatbot-landing", key:"chatbot", type:"web", year:"2023", views:2642,
   behance:"https://www.behance.net/gallery/185131407/Landing-Page-Chatbot",
   en:{title:"DigitalBot — B2B chatbot landing page", client:"DigitalBot", tags:["Landing page","UX","Persona","Wireframe"],
       desc:["Landing page for DigitalBot, a chatbot service for companies across industries and a Take Blip partner. The objective was a minimalist, functional page that attracts qualified leads.",
             "Based on benchmarking and customer data, a persona summarized the main problems to solve: no team to handle every lead and sales lost to slow replies. From there came the wireframes and a UI with multiple CTAs following the buyer's journey, in desktop and mobile versions."]},
   pt:{title:"DigitalBot — Landing page de chatbot B2B", client:"DigitalBot", tags:["Landing page","UX","Persona","Wireframe"],
       desc:["Landing page da DigitalBot, serviço de chatbot para empresas de vários segmentos e parceira da Take Blip. O objetivo era uma página minimalista e funcional que atraísse leads qualificados.",
             "A partir de benchmarking e dados de clientes, uma persona resumiu os principais problemas a resolver: falta de equipe para atender todos os leads e vendas perdidas pela demora na resposta. Daí vieram os wireframes e uma UI com vários CTAs acompanhando a jornada do comprador, em desktop e mobile."]}},

  {slug:"batmaid-ads", key:"batmaid", type:"ads", year:"2023", views:7091,
   behance:"https://www.behance.net/gallery/173013607/ADS-Batmaid-Suica-Criativos-para-Meta",
   en:{title:"Batmaid (Switzerland) — Meta Ads", client:"Batmaid", tags:["Meta Ads","Creatives","International"],
       desc:["Creatives for a Batmaid campaign in Switzerland, an app for booking home cleaning services.",
             "The set combines price-led pieces (39 CHF per hour, no hidden fees), customer testimonials and app-focused messages, all built on the brand's blue and a clean layout that reads fast in the feed."]},
   pt:{title:"Batmaid (Suíça) — Meta Ads", client:"Batmaid", tags:["Meta Ads","Criativos","Internacional"],
       desc:["Criativos para a campanha da Batmaid na Suíça, aplicativo para contratar serviços de limpeza residencial.",
             "O conjunto mistura peças de preço (39 CHF por hora, sem taxas escondidas), depoimentos de clientes e mensagens focadas no app, todas sobre o azul da marca e um layout limpo que se lê rápido no feed."]}},

  {slug:"algar-telecom-ads", key:"algar", type:"ads", year:"2023", views:2050,
   behance:"https://www.behance.net/gallery/173013387/ADS-Algar-Telecom-Criativos-para-Meta",
   en:{title:"Algar Telecom — Meta Ads", client:"Algar Telecom", tags:["Meta Ads","Creatives","Telecom","Stories"],
       desc:["Ads developed for Algar Telecom on the Meta platform, promoting broadband and combo plans (300 Mb and 600 Mb fiber, mobile and landline).",
             "Speed and price are the heroes of each piece, with a vibrant green gradient and the brand's play symbol framing the people, across feed and stories formats."]},
   pt:{title:"Algar Telecom — Meta Ads", client:"Algar Telecom", tags:["Meta Ads","Criativos","Telecom","Stories"],
       desc:["Anúncios desenvolvidos para a Algar Telecom na plataforma Meta, divulgando planos de banda larga e combos (fibra de 300 Mb e 600 Mb, celular e telefone fixo).",
             "Velocidade e preço são os protagonistas de cada peça, com o degradê verde da marca e o símbolo de play emoldurando as pessoas, nos formatos de feed e stories."]}},

  {slug:"natura-ads", key:"natura", type:"ads", year:"2023", views:9413,
   behance:"https://www.behance.net/gallery/173010743/Criativos-Natura-Meta-ADS-Produtos-de-Beleza",
   en:{title:"Natura — Store traffic campaign", client:"Natura", tags:["Meta Ads","Creatives","Beauty","Retail"],
       desc:["Creatives from the rollout of a campaign during the traffic project for Natura's physical stores.",
             "Three moments in one system: the Tododia summer line, gift sets with prices for special dates, and Natura Friday with up to 50% off, keeping the brand's warmth while making every offer easy to read."]},
   pt:{title:"Natura — Campanha para lojas físicas", client:"Natura", tags:["Meta Ads","Criativos","Beleza","Varejo"],
       desc:["Criativos do desdobramento da campanha durante o projeto de tráfego para as lojas físicas da Natura.",
             "Três momentos em um só sistema: a linha Tododia de verão, kits de presente com preço para datas especiais e a Natura Friday com até 50% de desconto, mantendo o calor da marca e deixando cada oferta fácil de ler."]}}
];


/* =========================================================
   CASOS BLIPS — before/after são páginas HTML dentro de blips/
   Para ativar um caso, coloque os dois arquivos na pasta e deixe pending:false
   ========================================================= */
const CASES = [
  {id:"food", pending:false, views:10800, before:null, after:"blips/food.html", cover:"food", seg:["Alimentar","Landing page"],
   en:{title:"Blips Food — Equipment landing page",
       notes:[["Floating menu that adapts to the background","A glass pill that turns yellow over white sections and white over colored ones, hiding on scroll-down on mobile and opening a category panel with icons."],
              ["Hero card with the offer up front","Yellow card with the product line, headline, and a price box that aligns the entry amount and the installment count on the same baseline."],
              ["One section per category","Six categories, each with a live underline animation, a model count and cards with two key specs, a collapsible full spec sheet and a CTA."],
              ["Cards that never break the grid","Fixed-height product stage, two-line clamps on titles and 'solo' categories rendered as a wide horizontal card on desktop."],
              ["Mobile-first differentials","On phones the red block becomes a snap carousel with dots; the active card turns white for contrast."],
              ["Form, 4 steps and FAQ","Lead form with LGPD consent, a timeline that goes horizontal on desktop, trust numbers that count up on scroll and an accordion FAQ."]]},
   pt:{title:"Blips Food — Landing page de equipamentos",
       notes:[["Menu flutuante que se adapta ao fundo","Pill de vidro que fica amarela sobre seções brancas e branca sobre as coloridas, some ao rolar para baixo no celular e abre um painel de categorias com ícones."],
              ["Hero com a oferta na frente","Cartão amarelo com a linha de produtos, o headline e uma caixa de preço que alinha valor de entrada e número de parcelas na mesma linha de base."],
              ["Uma seção por categoria","Seis categorias, cada uma com underline animado, contagem de modelos e cards com duas specs principais, ficha completa recolhível e CTA."],
              ["Cards que nunca quebram a grade","Palco de produto com altura fixa, títulos limitados a duas linhas e categorias com um só modelo em card horizontal no desktop."],
              ["Diferenciais mobile first","No celular o bloco vermelho vira um carrossel com encaixe e indicadores; o card ativo fica branco para dar contraste."],
              ["Formulário, 4 passos e FAQ","Formulário de lead com aceite LGPD, linha do tempo que fica horizontal no desktop, números que contam ao entrar na tela e FAQ em sanfona."]]}},

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
  slug:'blips-'+c.id, type:'blips', year:'2026', views:c.views, blips:c, key:c.cover||null, behance:null, gallery:[],
  en:{title:c.en.title, client:'Blips', tags:c.seg, desc:[]},
  pt:{title:c.pt.title, client:'Blips', tags:c.seg, desc:[]}
}));

/* ---------- idioma ---------- */
const nav = document.querySelector('.nav');
let lang = 'en';
try { lang = localStorage.getItem('lang') === 'pt' ? 'pt' : 'en'; } catch(e){}
const T = k => I18N[lang][k];
const typeLabel = t => T('type.' + t);
const fmtViews = n => (n/1000).toFixed(1).replace('.0','').replace('.', lang==='pt' ? ',' : '.') + 'k';

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
      <div class="thumb ${p.type}">${p.blips && !p.key
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
  $('p-title').textContent = d.title;
  $('p-cat').textContent = typeLabel(p.type);
  $('p-client').textContent = d.client || T('confidential');
  $('p-year').textContent = p.year;
  $('p-count').textContent = String(i+1).padStart(2,'0') + ' / ' + String(PROJECTS.length).padStart(2,'0');
  if(p.blips){
    $('p-cover').className = 'p-cover blips';
    $('p-cover').innerHTML = cmpHTML(p.blips);
    bindCmp($('p-cover'));
    $('p-desc').innerHTML = `<h3 style="font-family:var(--disp);font-weight:700;font-size:22px;letter-spacing:-.02em;margin-bottom:8px">${T('cases.improvements')}</h3>
      <ol class="p-notes">${p.blips[lang].notes.map(n=>`<li><b>${n[0]}</b><span>${n[1]}</span></li>`).join('')}</ol>`;
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
