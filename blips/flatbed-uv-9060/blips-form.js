/**
 * FORMULÁRIO BLIPS — modo rascunho
 * ============================================================================
 *
 * Um arquivo só, sem dependência, que funciona offline. Serve para o time de
 * web VER e ESTILIZAR o formulário enquanto monta a página, antes de ela
 * existir no servidor da Blips.
 *
 * O markup que ele gera é o MESMO que o servidor vai gerar em produção:
 * mesmas classes, mesmos `name`, mesma estrutura, mesmos ids. É por isso que
 * o CSS escrito aqui continua valendo depois, sem retoque.
 *
 * ELE NÃO ENVIA NADA. Ao clicar em Enviar, mostra na tela o que seria enviado.
 *
 * COMO USAR
 * ---------
 * 1. Um lugar na página para o formulário aparecer:
 *
 *      <div data-blips-form="minha-lp"></div>
 *
 * 2. A configuração dos campos, logo abaixo:
 *
 *      <script type="application/json" data-blips-config>
 *      { "slug": "minha-lp", "segmento": "Food" }
 *      </script>
 *
 * 3. Este arquivo, por último:
 *
 *      <script src="blips-form.js"></script>
 *
 * Quando a página for para o servidor da Blips, só a linha 3 muda. O resto
 * fica igual.
 *
 * Documentação completa: guia-formulario-time-web.html
 * ============================================================================
 */
(function () {
  'use strict';

  // Se o formulário de verdade já estiver na página, este arquivo se cala.
  // Evita dois formulários na mesma tela quando a página vai para produção.
  if (document.querySelector('form.blips-form')) { return; }

  // ── Padrões, iguais aos do servidor ────────────────────────────────────
  var CONSENT_PADRAO =
    'Ao finalizar o cadastro autorizo a consulta de operações de crédito ' +
    'da minha empresa e em meu nome próprio (SCR/BACEN) termos de uso e ' +
    'política de privacidade.';

  var INTERESSE_PADRAO = ['Comprar', 'Alugar', 'Financiar'];

  var ROTULOS_PADRAO = {
    nome: 'Nome',
    telefone: 'Telefone WhatsApp',
    email: 'E-mail',
    empresa: 'Nome da Empresa',
    cnpj: 'CNPJ',
    interesse: 'Interesse',
    equipamento: 'Escolha seu equipamento'
  };

  // ── Configuração ───────────────────────────────────────────────────────
  function leConfig() {
    var tag = document.querySelector('script[type="application/json"][data-blips-config]');
    if (!tag) {
      aviso('Não encontrei a configuração.',
            'Falta o bloco <script type="application/json" data-blips-config> na página.');
      return null;
    }
    try {
      return JSON.parse(tag.textContent);
    } catch (e) {
      aviso('A configuração tem um erro de JSON.',
            String(e.message) + ' — confira vírgula sobrando ou aspas faltando.');
      return null;
    }
  }

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  /** Aceita `true`, `false` ou um objeto com detalhes. Devolve sempre objeto. */
  function normaliza(valor, padrao) {
    if (valor === false) { return { visivel: false, obrigatorio: false, valor: '' }; }
    if (valor === true || valor === undefined || valor === null) { return padrao; }
    if (typeof valor === 'string') { return { visivel: false, obrigatorio: true, valor: valor }; }
    return {
      visivel: valor.visivel !== false,
      obrigatorio: valor.obrigatorio !== false,
      valor: valor.valor || '',
      label: valor.label || '',
      opcoes: valor.opcoes || null
    };
  }

  /** "Alugar" e {mostra,valor} viram sempre {mostra,valor}. */
  function opcao(o) {
    if (typeof o === 'string') { return { mostra: o, valor: o }; }
    return { mostra: o.mostra || o.valor || '', valor: o.valor || o.mostra || '' };
  }

  // ── Montagem do markup ─────────────────────────────────────────────────
  // Espelha exatamente o gerador de markup do servidor da Blips.
  // Se um mudar, o outro muda junto — é o que mantém o CSS desta página
  // valendo depois que a página for publicada.
  function monta(cfg) {
    var slug = cfg.slug || 'minha-lp';
    var id = function (n) { return 'blips-' + slug + '-' + n; };
    var rot = function (n) { return (cfg.rotulos && cfg.rotulos[n]) || ROTULOS_PADRAO[n]; };
    var campos = cfg.campos || {};
    var p = [];

    p.push('<form class="blips-form" id="' + id('form') + '" data-blips="' + esc(slug) + '">');

    // Campos de texto
    var textos = [
      ['nome',     'text',  'name',          {}],
      ['telefone', 'tel',   'tel-national',  { inputmode: 'tel', maxlength: '16', placeholder: '(51) 9 9999-9999' }],
      ['email',    'email', 'email',         {}],
      ['empresa',  'text',  'organization',  {}],
      ['cnpj',     'text',  'off',           { maxlength: '18', placeholder: '__.___.___/____-__', autocapitalize: 'characters', spellcheck: 'false' }]
    ];

    textos.forEach(function (t) {
      var nome = t[0];
      var c = normaliza(campos[nome], { visivel: true, obrigatorio: true, valor: '' });
      if (!c.visivel) {
        if (c.valor) { p.push('  <input type="hidden" name="' + nome + '" value="' + esc(c.valor) + '">'); }
        return;
      }
      var req = c.obrigatorio ? ' required' : '';
      var ast = c.obrigatorio ? ' <span class="blips-obrig">*</span>' : '';
      var atr = '';
      for (var k in t[3]) { atr += ' ' + k + '="' + esc(t[3][k]) + '"'; }
      p.push('  <div class="blips-campo" data-campo="' + nome + '">');
      p.push('    <label class="blips-rotulo" for="' + id(nome) + '">' + esc(rot(nome)) + ast + '</label>');
      p.push('    <input class="blips-controle" id="' + id(nome) + '" name="' + nome + '"' +
             ' type="' + t[1] + '" autocomplete="' + t[2] + '"' + atr + req + '>');
      p.push('  </div>');
    });

    // Interesse — um select
    var ci = normaliza(campos.interesse, { visivel: false, obrigatorio: false, valor: '' });
    if (ci.visivel) {
      var req = ci.obrigatorio ? ' required' : '';
      var ast = ci.obrigatorio ? ' <span class="blips-obrig">*</span>' : '';
      var opts = (ci.opcoes || INTERESSE_PADRAO).map(opcao);
      p.push('  <div class="blips-campo" data-campo="interesse">');
      p.push('    <label class="blips-rotulo" for="' + id('interesse') + '">' + esc(rot('interesse')) + ast + '</label>');
      p.push('    <select class="blips-controle" id="' + id('interesse') + '" name="interesse"' + req + '>');
      p.push('      <option value="">Selecione…</option>');
      opts.forEach(function (o) {
        p.push('      <option value="' + esc(o.valor) + '">' + esc(o.mostra) + '</option>');
      });
      p.push('    </select>');
      p.push('  </div>');
    } else if (ci.valor) {
      p.push('  <input type="hidden" name="interesse" value="' + esc(ci.valor) + '">');
    }

    // Equipamento — lista de escolha
    var ce = normaliza(campos.equipamento, { visivel: false, obrigatorio: false, valor: '' });
    if (ce.visivel && ce.opcoes && ce.opcoes.length) {
      var reqE = ce.obrigatorio ? ' required' : '';
      var astE = ce.obrigatorio ? ' <span class="blips-obrig">*</span>' : '';
      p.push('  <fieldset class="blips-campo blips-grupo" data-campo="equipamento">');
      p.push('    <legend class="blips-rotulo">' + esc(ce.label || rot('equipamento')) + astE + '</legend>');
      ce.opcoes.map(opcao).forEach(function (o) {
        p.push('    <label class="blips-opcao"><input type="radio" name="equipamento" value="' +
               esc(o.valor) + '"' + reqE + '> <span>' + esc(o.mostra) + '</span></label>');
      });
      p.push('  </fieldset>');
    } else {
      p.push('  <input type="hidden" name="equipamento" value="' + esc(ce.valor || '') + '">');
    }

    // Aceite LGPD — sempre visível; o servidor recusa esconder
    var cc = normaliza(campos.consent, { visivel: true, obrigatorio: true, valor: '' });
    var reqC = cc.obrigatorio === false ? '' : ' required';
    var astC = cc.obrigatorio === false ? '' : ' <span class="blips-obrig">*</span>';
    p.push('  <div class="blips-campo blips-consent" data-campo="consent">');
    p.push('    <input type="checkbox" id="' + id('consent') + '" name="consent"' + reqC + '>');
    p.push('    <label for="' + id('consent') + '" data-blips-consent-texto>' +
           esc(cfg.consent_texto || CONSENT_PADRAO) + astC + '</label>');
    p.push('  </div>');

    // Honeypot — some por posicionamento, nunca por display:none
    p.push('  <div class="blips-hp" aria-hidden="true" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden">');
    p.push('    <label for="' + id('hp') + '">Não preencha este campo</label>');
    p.push('    <input id="' + id('hp') + '" name="_hp" type="text" tabindex="-1">');
    p.push('  </div>');

    // Escondidos, preenchidos pelo servidor em produção
    p.push('  <input type="hidden" name="segmento" value="' + esc(cfg.segmento || '') + '">');
    ['form_nome', 'link', 'utm_campaign', 'utm_source', 'utm_medium',
     'utm_content', 'utm_term', 'url_pagina'].forEach(function (n) {
      p.push('  <input type="hidden" name="' + n + '" value="">');
    });

    p.push('  <button class="blips-enviar" type="submit">' + esc(cfg.texto_botao || 'Enviar') + '</button>');
    p.push('  <p class="blips-msg" data-blips-msg role="status" aria-live="polite"></p>');
    p.push('</form>');

    return p.join('\n');
  }

  // ── Aviso de erro, só no rascunho ──────────────────────────────────────
  function aviso(titulo, detalhe) {
    var d = document.createElement('div');
    d.setAttribute('data-blips-aviso', '');
    d.style.cssText = 'margin:16px 0;padding:14px 16px;border:1px solid #F3C9C2;' +
      'border-radius:10px;background:#FDF1EF;color:#8A2E22;' +
      'font:14px/1.5 system-ui,sans-serif';
    d.innerHTML = '<strong>Formulário Blips — ' + esc(titulo) + '</strong><br>' + esc(detalhe);
    var alvo = document.querySelector('[data-blips-form]') || document.body;
    alvo.appendChild(d);
  }

  // ── Simulação de envio ─────────────────────────────────────────────────
  function ligaEnvio(form, cfg) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var msg = form.querySelector('[data-blips-msg]');

      // Deixa a validação do navegador agir, como em produção.
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var dados = {};
      new FormData(form).forEach(function (v, k) {
        if (k === '_hp') { return; }
        if (v !== '') { dados[k] = v; }
      });

      if (msg) {
        msg.setAttribute('data-blips-estado', 'ok');
        msg.textContent = 'Rascunho: nada foi enviado. Os dados estão no console (F12).';
      }
      console.log('%c[Formulário Blips — RASCUNHO]', 'font-weight:bold',
                  '\nNada foi enviado. Em produção, isto iria para o servidor:\n', dados);
    });
  }

  // ── Início ─────────────────────────────────────────────────────────────
  function inicia() {
    var cfg = leConfig();
    if (!cfg) { return; }

    var slug = cfg.slug || 'minha-lp';
    var alvo = document.querySelector('[data-blips-form="' + slug + '"]') ||
               document.querySelector('[data-blips-form]');

    if (!alvo) {
      aviso('Não encontrei onde colocar o formulário.',
            'Falta uma <div data-blips-form="' + slug + '"></div> na página.');
      return;
    }

    var caixa = document.createElement('div');
    caixa.className = 'blips-caixa';
    caixa.innerHTML = monta(cfg);
    alvo.innerHTML = '';
    alvo.appendChild(caixa);

    var form = caixa.querySelector('form.blips-form');
    ligaEnvio(form, cfg);

    console.log('%c[Formulário Blips — RASCUNHO]', 'font-weight:bold',
      '\nO formulário na tela é um rascunho: o visual e as classes são os de verdade,' +
      '\nmas nada é enviado. Slug: "' + slug + '".' +
      '\nQuando a página for para o servidor da Blips, só a tag <script> muda.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicia);
  } else {
    inicia();
  }
})();
