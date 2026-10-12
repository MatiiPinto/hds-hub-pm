// ═══════════════════════════════════════════════════════════════════════════
// catymey.js — CATYMEY · funcionaria digital de Autorización Sanitaria (NHDS)
// Widget autocontenido (CSS + UI + motor de respuestas sin servidor).
// Requiere SHARED_DATA/catymey_kb.js (window.CATYMEY_KB) cargado antes.
// Uso:  <script src="SHARED_DATA/catymey_kb.js"></script>
//       <script src="SHARED_DATA/catymey.js"></script>
// API:  CATYMEY.abrir() · CATYMEY.cerrar() · CATYMEY.preguntar('texto')
// Opcional: window.CATYMEY_CONFIG = {endpoint:'https://…'} → segunda opinión
// de un modelo de lenguaje (POST {q, contexto}); sin endpoint responde local.
// Nombre: CATY (Catherine) · MEY (Meylin).
// ═══════════════════════════════════════════════════════════════════════════
(function(){
  'use strict';
  const KB = window.CATYMEY_KB || null;
  const CFG = Object.assign({endpoint:null, lado:'left', autoabrir:false, sinBoton:false}, window.CATYMEY_CONFIG || {});
  /* Avatar: SVG en línea (Claude Design, sept-2026). Las dos formas entrelazadas del
     isotipo del Hospital Del Salvador, con el visto bueno en menta. El id del degradado
     se hace único por instancia: el avatar se pinta dos veces (botón y encabezado). */
  const AVATAR_SRC = '<svg viewBox="0 0 120 120" role="img" aria-label="CATYMEY" xmlns="http://www.w3.org/2000/svg"> <defs>  <linearGradient id="ctyDisc__N__" x1="0" y1="0" x2="0" y2="1">   <stop offset="0" stop-color="#2A3F7A"/>   <stop offset="1" stop-color="#202945"/>  </linearGradient> </defs> <circle cx="60" cy="60" r="60" fill="url(#ctyDisc__N__)"/> <g fill="none" stroke-width="13" stroke-linecap="round">  <path d="M36 53 C36 31 70 25 79 41 C86 52 72 60 60 60" stroke="#FFFFFF"/>  <path d="M84 67 C84 89 50 95 41 79 C34 68 48 60 60 60" stroke="#00A1E1"/> </g> <g class="cty-badge">  <circle cx="94" cy="94" r="20" fill="#68D1BF" stroke="#202945" stroke-width="6"/>  <path d="M84 94 L91 101 L104 86" fill="none" stroke="#202945" stroke-width="6"     stroke-linecap="round" stroke-linejoin="round"/> </g></svg>';
  let _av = 0;
  const avatar = (badge = true) => {
    const n = 'a' + (++_av);
    let v = AVATAR_SRC.split('__N__').join(n);
    if (!badge) v = v.replace(/<g class="cty-badge">.*?<\/g>/, '');
    return v;
  };

  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const nrm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9 ./%-]+/g, ' ').replace(/\s+/g, ' ').trim();
  const STOP = new Set('de la el los las un una unos unas y o a en que es son del al por para con sin como cual cuales que qué cómo cuál lleva tiene tienen corresponde aplica pauta pautas me mi su sus se lo le dice pide exige hay este esta esto ese esa eso'.split(' '));
  const toks = s => nrm(s).split(' ').filter(t => t && !STOP.has(t) && t.length > 1);

  /* ── índices ─────────────────────────────────────────────────────────── */
  const AMB = {};   // id → {id,name,sec,norma,nreq}
  const REC = KB ? KB.recintos.map(r => ({id:r[0], piso:r[1], svc:r[2], code:r[3], name:r[4], tipo:r[5], pautas:r[6], cambio:r[7], regla:r[8], conf:r[9], n:nrm(r[4] + ' ' + r[3] + ' ' + r[2])})) : [];
  if (KB) Object.entries(KB.normas).forEach(([nk, n]) => n.ambitos.forEach(a => { AMB[a.id] = Object.assign({norma:nk, cortoNorma:n.corto, n:nrm(a.name + ' ' + a.sec + ' ' + n.corto)}, a); }));
  const SVC = KB ? Object.keys(KB.servicios) : [];
  const TIPO_LBL = {box:'box / consulta', proced:'sala de procedimientos', habitacion:'habitación', pabellon:'pabellón', clinic:'apoyo clínico', lab:'laboratorio', bano:'baño', aseo:'aseo', bodega:'bodega', kitchen:'estar', espera:'sala de espera', admin:'administrativo', reunion:'reuniones', archivo:'archivo', recup:'recuperación', preanest:'preanestesia'};
  const CAMBIO_LBL = {igual:'igual a la vigente', amplia:'amplía la vigente', distinta:'distinta a la vigente · por decidir', nueva:'nueva (no tenía)', mantiene:'mantiene la vigente', evidencia:'sin pauta propia · respalda requisitos generales', sin_pauta:'sin pauta propia', congelado:'servicio congelado'};
  const ambLbl = id => { const a = AMB[id]; return a ? `<b>${esc(a.cortoNorma)}</b> · ${esc(a.name)} <small>(${a.nreq} req.)</small>` : esc(id); };
  const ambChip = id => `<span class="cty-tag" data-q="requisitos de ${esc(id)}">${ambLbl(id)}</span>`;

  /* ── respuestas ──────────────────────────────────────────────────────── */
  /* Barra de precotejo (Claude Design): segmentos proporcionales por flex-grow con los
     valores crudos, leyenda con el dato repetido para quien no distingue los colores. */
  const SEG = [['backed', 'documental_ok', 'respaldados por el despliegue'],
               ['noevid', 'falta_en_despliegue', 'sin evidencia de equipamiento'],
               ['concession', 'concesionaria', 'dependen de la Concesionaria'],
               ['mgmt', 'gestion', 'documentos de gestión'],
               ['field', 'terreno', 'solo se ven en terreno'],
               ['conditional', 'condicional', 'condicionales']];
  function barra(p, conLeyenda){
    if (!p) return '';
    const tot = SEG.reduce((a, [, k]) => a + (p[k] || 0), 0);
    if (!tot) return '';
    const seg = SEG.map(([d, k, t]) => `<i class="cty-seg" style="flex-grow:${p[k] || 0}" title="${p[k] || 0} ${t}" data-s="${d}"></i>`).join('');
    const leg = conLeyenda === false ? '' : `<ul class="cty-lg">${SEG.filter(([, k]) => p[k]).map(([d, k, t]) => `<li data-s="${d}">${t.charAt(0).toUpperCase() + t.slice(1)} <b>${p[k]}</b></li>`).join('')}</ul>`;
    return `<div class="cty-bar" aria-hidden="true">${seg}</div>${leg}`;
  }
  function cardRecinto(r){
    const pre = (KB.precotejo.recintos || {})[r.id] || {};
    const s = KB.servicios[r.svc] || {};
    const tot = {}; SEG.forEach(([, k]) => tot[k] = 0);
    Object.values(pre).forEach(p => SEG.forEach(([, k]) => tot[k] += (p[k] || 0)));
    const pautas = r.pautas.length
      ? r.pautas.map(a => { const m = AMB[a] || {}; return `<div class="cty-def"><strong>${esc(m.cortoNorma || '')}</strong> — ${esc(m.name || a)} <span class="cty-mut">(${m.nreq || 0} requisitos)</span></div>`; }).join('')
      : `<div class="cty-def"><strong>Sin pauta propia</strong> <span class="cty-mut">${r.cambio === 'evidencia' ? 'Respalda requisitos generales del establecimiento: salas de espera, baños, estares y bodegas.' : 'Este recinto no lleva pauta de Autorización Sanitaria.'}</span></div>`;
    return `<div class="cty-card">
      <div class="cty-ct">${esc(r.code)} · ${esc(r.name)}</div>
      <div class="cty-mut">${esc(r.svc)} · Piso ${esc(r.piso.replace('P', ''))} · ${esc(TIPO_LBL[r.tipo] || r.tipo || 'sin tipo')}${r.regla ? ` · regla ${esc(r.regla)}` : ''}</div>
      ${pautas}${barra(tot)}
      ${s.responsables && s.responsables.length ? `<div class="cty-def">Responsables: ${s.responsables.map(n => '<strong>' + esc(n) + '</strong>').join(' · ')}</div>` : ''}
      <div class="cty-mut">El cotejo lo haces tú en el recinto: no doy ningún requisito por cumplido.</div>
      ${r.pautas.length ? `<div class="cty-chips"><span class="cty-chip" data-q="requisitos de ${esc(r.pautas[0])}">Ver requisitos</span><span class="cty-chip" data-q="qué falta en ${esc(r.svc)}">Qué falta</span></div>` : ''}
    </div>`;
  }
  function cardServicio(n){
    const s = KB.servicios[n]; if (!s) return '';
    const pre = (KB.precotejo.unidades || {})[n] || {};
    const recs = REC.filter(r => r.svc === n); const conP = recs.filter(r => r.pautas.length).length;
    return `<div class="cty-card"><div class="cty-ct">🏥 ${esc(n)}${s.congelado ? ' ❄ congelado' : ''}</div><div class="cty-mut">Piso ${esc(s.piso.replace('P',''))} · ${recs.length} recintos (${conP} con pauta) · ${s.eq_total || 0} equipos · ${s.cartera || 0} prestaciones</div>
      ${s.responsables.length ? `<div><b>Responsables:</b> ${s.responsables.map((x, i) => esc(x) + (s.correos[i] ? ` <small class="cty-mut">${esc(s.correos[i])}</small>` : '')).join(' · ')}</div>` : '<div class="cty-mut">Sin responsable en la nómina.</div>'}
      <div style="margin-top:6px"><b>Pautas de la unidad (vista 1):</b> ${s.pautas.length}${s.nuevas.length ? ` <small class="cty-mut">(${s.nuevas.length} propuestas por CATYMEY)</small>` : ''}</div>
      <ul class="cty-ul">${s.pautas.slice(0, 12).map(a => `<li>${ambChip(a)}${s.nuevas.includes(a) ? ' <small class="cty-new">propuesta</small>' : ''}${pre[a] ? ` <small class="cty-mut">${pre[a].documental_ok}✓ ${pre[a].falta_en_despliegue}✗ ${pre[a].concesionaria}🏗</small>` : ''}</li>`).join('')}${s.pautas.length > 12 ? `<li class="cty-mut">… y ${s.pautas.length - 12} más.</li>` : ''}</ul>
      ${s.fundamentos.length ? `<div class="cty-mut">Fundamentos: ${s.fundamentos.map(esc).join(' · ')}</div>` : ''}
      <div class="cty-chips"><span class="cty-chip" data-q="recintos de ${esc(n)}">Ver recintos</span><span class="cty-chip" data-q="qué falta en ${esc(n)}">Qué falta</span></div></div>`;
  }
  function cardAmbito(id, max){
    const a = AMB[id]; if (!a) return ''; const rs = KB.reqs[id] || []; max = max || 14;
    const filas = rs.slice(0, max).map(q => `<li><b>${esc(q.n)}</b> ${esc(q.t)}${q.g ? ` <small class="cty-mut">· ${esc(q.g)}</small>` : ''}</li>`).join('');
    const usos = REC.filter(r => r.pautas.includes(id)).length; const usosU = SVC.filter(s => (KB.servicios[s].pautas || []).includes(id)).length;
    return `<div class="cty-card"><div class="cty-ct">📄 ${esc(a.cortoNorma)} › ${esc(a.sec)} › ${esc(a.name)}</div><div class="cty-mut">${rs.length} requisitos · asignada a ${usos} recintos y ${usosU} unidades</div><ol class="cty-ol">${filas}</ol>${rs.length > max ? `<span class="cty-chip" data-q="requisitos completos de ${esc(id)}">Ver los ${rs.length}</span>` : ''}</div>`;
  }
  /* Cápsula en video (1:13, vertical): del papel al cotejo digital, los tres estados y la
     firma. preload="none" para no bajar 5 MB al abrir el panel; el poster pesa 37 KB. */
  const VIDEO = {src: 'assets/catymey/catymey_capsula.mp4', poster: 'assets/catymey/catymey_capsula_poster.webp',
                 dur: '1:13', titulo: 'Cómo se automatizan las pautas de Autorización Sanitaria'};
  function video(){
    return `<div class="cty-card"><div class="cty-ct">${esc(VIDEO.titulo)}</div>
      <div class="cty-mut">Cápsula de ${VIDEO.dur}: por qué dejamos el papel, cómo se marca cada requisito y qué pasa al firmar.</div>
      <video class="cty-vid" controls playsinline preload="none" poster="${VIDEO.poster}" src="${VIDEO.src}"></video>
      <div class="cty-chips"><span class="cty-chip" data-q="cómo aplico una pauta">Los 7 pasos por escrito</span><span class="cty-chip" data-q="qué significa CUMPLE, NO CUMPLE y N/A">Los tres estados</span></div></div>`;
  }
  function pasos(){ return `<div class="cty-card"><div class="cty-ct">📘 Cómo aplicar una pauta · 7 pasos</div><ol class="cty-ol">${KB.pasos.map(p => `<li>${esc(p)}</li>`).join('')}</ol><div class="cty-chips"><span class="cty-chip" data-q="qué significa CUMPLE, NO CUMPLE y N/A">Los tres estados</span><a class="cty-chip" href="${esc(KB.identidad.links.guia)}" target="_blank">Guía completa</a></div></div>`; }
  function estados(){
    const cls = {'CUMPLE': 'cty-ok', 'NO CUMPLE': 'cty-nc', 'N/A': 'cty-na'};
    return `<div class="cty-card"><div class="cty-ct">Cómo se marca cada requisito</div>`
      + KB.definiciones.slice(0, 3).map(d => `<div class="${cls[d.k] || 'cty-na'}"><strong>${esc(d.k)}</strong>${esc(d.t)}</div>`).join('')
      + `<div class="cty-def"><strong>Un NO CUMPLE bien descrito vale más que un CUMPLE apurado.</strong></div></div>`;
  }
  function solicitud(filtro){
    let L = KB.precotejo.solicitud_concesionaria || [];
    if (filtro) L = L.filter(x => nrm(x.tema).includes(filtro) || nrm(x.que_pedir).includes(filtro));
    if (!L.length) L = KB.precotejo.solicitud_concesionaria.slice(0, 5);
    return `<div class="cty-card"><div class="cty-ct">🏗 Antecedentes que hay que pedir a la Concesionaria</div><div class="cty-mut">Requisitos que dependen de obra e instalaciones, según el precotejo documental.</div>${L.map(x => `<div class="cty-def"><b>${esc(x.tema)}</b> <small class="cty-mut">${x.requisitos_afectados} requisitos en ${x.pautas} pautas</small><br>${esc(x.que_pedir)}</div>`).join('')}</div>`;
  }
  function faltas(scope, nombre){
    if (scope === 'rec'){ const r = nombre; const pre = (KB.precotejo.recintos || {})[r.id] || {};
      const tot = Object.values(pre).reduce((a, p) => ({ok:a.ok + p.documental_ok, f:a.f + p.falta_en_despliegue, c:a.c + p.concesionaria, t:a.t + p.terreno}), {ok:0, f:0, c:0, t:0});
      return `<div class="cty-card"><div class="cty-ct">🔎 Precotejo · ${esc(r.code)} ${esc(r.name)}</div><div>${tot.ok} requisitos respaldados por el despliegue · <b class="cty-nc">${tot.f} sin evidencia de equipamiento</b> · ${tot.c} dependen de la Concesionaria · ${tot.t} solo en terreno.</div><div class="cty-mut">El detalle por requisito está en la plataforma CATYMEY (pestaña Precotejo) y en el Excel del precotejo.</div></div>`; }
    const s = nombre; const pre = (KB.precotejo.unidades || {})[s] || {}; const recs = REC.filter(r => r.svc === s);
    let f = 0, ok = 0, c = 0; recs.forEach(r => Object.values((KB.precotejo.recintos || {})[r.id] || {}).forEach(p => { f += p.falta_en_despliegue; ok += p.documental_ok; c += p.concesionaria; }));
    Object.values(pre).forEach(p => { f += p.falta_en_despliegue; ok += p.documental_ok; c += p.concesionaria; });
    const glob = (KB.precotejo.faltas || []).filter(x => x.ejemplos.some(e => e.startsWith(s))).slice(0, 8);
    const tot = {}; SEG.forEach(([, k]) => tot[k] = 0);
    recs.forEach(x => Object.values((KB.precotejo.recintos || {})[x.id] || {}).forEach(p => SEG.forEach(([, k]) => tot[k] += (p[k] || 0))));
    Object.values(pre).forEach(p => SEG.forEach(([, k]) => tot[k] += (p[k] || 0)));
    return `<div class="cty-card"><div class="cty-ct">Qué falta en ${esc(s)}</div>
      <div class="cty-mut">Así se reparte el precotejo de este servicio.</div>${barra(tot)}${glob.length ? `<div style="margin-top:6px"><b>Requisitos sin evidencia más repetidos:</b><ul class="cty-ul">${glob.map(x => `<li>${esc(x.t)} <small class="cty-mut">(${x.recintos} recintos · ${esc((AMB[x.amb] || {}).name || '')})</small></li>`).join('')}</ul></div>` : ''}<div class="cty-mut">«Sin evidencia» significa que el equipo o mobiliario no figura en el despliegue EMMC de ese recinto: puede faltar de verdad o estar cargado en otro código. Se confirma en terreno.</div></div>`;
  }
  function reglas(q){
    const R = KB.reglas || {}; let ks = Object.keys(R); const t = toks(q).filter(x => !['regla', 'reglas', 'asignacion', 'asignar', 'pauta', 'pautas', 'lleva', 'tipo'].includes(x));
    if (t.length) ks = ks.filter(k => t.some(x => nrm(k + ' ' + R[k].fundamento).includes(x)));
    ks = ks.sort((a, b) => R[b].n - R[a].n).slice(0, 12);
    return `<div class="cty-card"><div class="cty-ct">🧩 Reglas de asignación${t.length ? ' · ' + esc(t.join(' ')) : ''}</div>${ks.map(k => `<div class="cty-def"><b>${esc(k)}</b> <small class="cty-mut">${R[k].n} recintos · confianza ${esc(R[k].confianza)}</small><br>${Object.keys(R[k].pautas).map(a => ambChip(a)).join(' ')}<br><small class="cty-mut">${esc(R[k].fundamento)} · ej.: ${R[k].ejemplos.slice(0, 2).map(esc).join(' / ')}</small></div>`).join('') || '<div class="cty-mut">Ninguna regla con ese nombre.</div>'}</div>`;
  }
  function buscaRecintos(q, limit){
    const t = toks(q); if (!t.length) return [];
    const sc = REC.map(r => ({r, s:t.reduce((a, x) => a + (r.n.includes(x) ? (r.code === x ? 5 : nrm(r.name).includes(x) ? 2 : 1) : 0), 0)})).filter(x => x.s > 0).sort((a, b) => b.s - a.s || (b.r.pautas.length - a.r.pautas.length));
    return sc.slice(0, limit || 8).map(x => x.r);
  }
  function buscaServicio(q){
    const n = nrm(q); let best = null, bs = 0;
    SVC.forEach(s => { const ns = nrm(s); const sc = ns && n.includes(ns) ? ns.length + 10 : toks(s).filter(x => x.length > 3 && n.includes(x)).length * 3; if (sc > bs){ bs = sc; best = s; } });
    return bs >= 3 ? best : null;
  }
  function buscaAmbitos(q, limit){
    const t = toks(q).filter(x => !['requisito', 'requisitos', 'articulo', 'art', 'ambito', 'completos'].includes(x)); if (!t.length) return [];
    const m = q.match(/\b(\d{1,4})\b/); const art = m ? m[1] : null;
    return Object.values(AMB).map(a => ({a, s:t.reduce((acc, x) => acc + (a.n.includes(x) ? (x.length > 4 ? 2 : 1) : 0), 0) + (art && (a.id.endsWith('art' + art) || a.name.includes('Artículo ' + art + ' ')) ? 6 : 0)})).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, limit || 3).map(x => x.a);
  }
  function faqBest(q){
    const t = toks(q); return KB.faq.map(f => ({f, s:t.reduce((a, x) => a + (nrm(f.q).includes(x) ? 3 : 0) + (f.tags.some(g => nrm(g).includes(x) || x.includes(nrm(g))) ? 2 : 0) + (nrm(f.a).includes(x) ? 1 : 0), 0)})).filter(x => x.s > 1).sort((a, b) => b.s - a.s).slice(0, 3).map(x => x.f);
  }
  function responder(q){
    if (!KB) return '<div class="cty-card">No tengo cargada mi base de conocimiento (catymey_kb.js).</div>';
    const n = nrm(q); const T = toks(q);
    if (!n) return KB.identidad.saludo;
    if (/\b(hola|buenos dias|buenas|quien eres|que eres|catymey|presentate|ayuda)\b/.test(n) && n.length < 40) return `<div class="cty-card"><div class="cty-ct">${esc(KB.identidad.nombre)} · ${esc(KB.identidad.significado)}</div>${esc(KB.identidad.rol)}. ${esc(KB.faq[KB.faq.length - 1].a)}<div class="cty-chips">${sugeridas()}</div></div>`;
    // código de recinto
    const cm = q.match(/\b(\d{1,3}(?:\.\d{1,3}){1,3}(?:\.[a-z])?)\b/i);
    if (cm){ const rs = REC.filter(r => r.code.toLowerCase() === cm[1].toLowerCase()); if (rs.length){ if (/falta|precotejo|evidencia/.test(n)) return rs.slice(0, 2).map(r => faltas('rec', r)).join(''); return rs.slice(0, 3).map(cardRecinto).join('') + (rs.length > 3 ? `<div class="cty-mut">… ${rs.length - 3} recintos más con ese código.</div>` : ''); } }
    if (/\b(cumple|no cumple|n\/a|na\b|no aplica|estados|marco|marcar)\b/.test(n) && /\b(que|como|cuando|significa|es|son|diferencia|marco|marcar|estados)\b/.test(n)) return estados();
    if (/\b(video|capsula|tutorial|animacion|ver como)\b/.test(n)
        || /\bcomo (funciona|se automatiza|automatizar)\b/.test(n)) return video();
    if (/\b(paso|pasos|como (aplico|aplicar|empiezo|empezar|cotejo|cotejar|entro|entrar|uso|usar|se aplica|se usa)|guia|instructivo|manual)\b/.test(n)) return pasos() + video();
    if (/\b(concesionaria|as built|as-built|planos|certificad|antecedentes de obra|solicitud)\b/.test(n)) return solicitud(T.find(x => /gas|electr|clima|sanitar|termin|superfic|evacu|blind|agua|acces|planta/.test(x)));
    if (/\b(reas)\b/.test(n) && /\b(quien|presenta|responsable)\b/.test(n)) return `<div class="cty-card">${esc(KB.faq.find(f => f.q.startsWith('¿Quién presenta el REAS')).a)}</div>`;
    const svc = buscaServicio(q);
    if (/\b(responsable|responsables|jefatura|jefe|coordinad|quien (presenta|lleva|esta a cargo|coteja|firma))\b/.test(n)){ if (svc) return cardServicio(svc); return `<div class="cty-card">¿De qué servicio? Por ejemplo: <span class="cty-chip" data-q="responsable de DIALISIS">Diálisis</span> <span class="cty-chip" data-q="responsable de DERMATOLOGIA">Dermatología</span></div>`; }
    if (/\b(falta|faltan|faltante|no figura|evidencia|precotejo|despliegue)\b/.test(n)){ if (svc) return faltas('svc', svc); const rs = buscaRecintos(q, 2); if (rs.length) return rs.map(r => faltas('rec', r)).join(''); return `<div class="cty-card"><div class="cty-ct">🔎 Precotejo documental · resumen</div>${esc(JSON.stringify(KB.precotejo.resumen).replace(/[{}"]/g, '').replace(/,/g, ' · '))}<div class="cty-chips"><span class="cty-chip" data-q="solicitud a la concesionaria">Qué pedir a la Concesionaria</span></div></div>`; }
    if (/\bregla/.test(n)) return reglas(q);
    const TIPOQ = [[/\b(box|consulta)\b/, 'box_consulta', '¿Qué pauta lleva un box de consulta?'], [/\bsala de procedimiento/, 'sala_procedimientos', '¿Qué pauta lleva una sala de procedimientos?'], [/\b(habitacion|hospitalizacion|cama)\b/, 'hospitalizacion', '¿Qué pauta lleva una habitación de hospitalización?'], [/\b(pabellon|quirofano)\b/, 'quirofano', '¿Qué pauta lleva un pabellón?'], [/estacion de enfermeria/, 'estacion_enfermeria', null], [/trabajo limpio/, 'trabajo_limpio', null], [/trabajo sucio/, 'trabajo_sucio', null], [/\b(lavachata|aseo de chata)/, 'aseo_chatas', null], [/\b(uci|intensivo)\b/, 'uci', null], [/\b(uti|intermedio)\b/, 'uti', null], [/\b(odontolog|dental)\b/, 'proc_odonto', null], [/\brehabilit/, 'rehabilitacion', null]];
    if (!cm && !svc && /\b(que|cual)\b.*\b(pauta|pautas)\b|\b(un|una|los|las)\b/.test(n)){ const tq = TIPOQ.find(x => x[0].test(n)); if (tq && KB.reglas[tq[1]]){ const f = tq[2] ? KB.faq.find(z => z.q === tq[2]) : null; return (f ? `<div class="cty-card"><div class="cty-ct">${esc(f.q)}</div>${esc(f.a)}</div>` : '') + reglas(tq[1]); } }
    if (/\brecintos de\b/.test(n) && svc){ const rs = REC.filter(r => r.svc === svc).sort((a, b) => b.pautas.length - a.pautas.length); return `<div class="cty-card"><div class="cty-ct">Recintos de ${esc(svc)} · ${rs.length}</div><ul class="cty-ul">${rs.slice(0, 30).map(r => `<li><span class="cty-tag" data-q="${esc(r.code)}">${esc(r.code)} ${esc(r.name)}</span> <small class="cty-mut">${r.pautas.length ? r.pautas.length + ' pauta(s)' : 'sin pauta'}</small></li>`).join('')}${rs.length > 30 ? `<li class="cty-mut">… y ${rs.length - 30} más.</li>` : ''}</ul></div>`; }
    if (/\b(requisito|requisitos|articulo|art\.|exige|que dice|que pide|contenido)\b/.test(n)){ const idm = q.match(/[a-z]{2,3}_[a-z0-9_\-]+/i); const full = /completos/.test(n); if (idm && AMB[idm[0]]) return cardAmbito(idm[0], full ? 999 : 14); const as = buscaAmbitos(q, 2); if (as.length) return as.map(a => cardAmbito(a.id, full ? 999 : 10)).join(''); }
    if (svc && (/\b(pauta|pautas|lleva|corresponde|aplica|unidad|servicio|autoriza)\b/.test(n) || T.length <= 3)) return cardServicio(svc);
    const rs = buscaRecintos(q, 6);
    if (rs.length && /\b(pauta|pautas|lleva|corresponde|aplica|tiene|recinto|sala|box|habitacion|pabellon|cubiculo|consulta|bodega|bano|estacion|trabajo)\b/.test(n)) return rs.slice(0, 4).map(cardRecinto).join('') + (rs.length > 4 ? `<div class="cty-mut">Hay más coincidencias; afina con el código o el servicio.</div>` : '');
    const d = KB.definiciones.find(x => x.sin.some(s => n === nrm(s) || n.startsWith('que es ' + nrm(s)) || n.startsWith('que significa ' + nrm(s)) || n.startsWith('que son ' + nrm(s))));
    if (d) return `<div class="cty-card"><div class="cty-ct">${esc(d.k)}</div>${esc(d.t)}</div>`;
    const fq = faqBest(q);
    const as = buscaAmbitos(q, 2);
    let out = fq.map(f => `<div class="cty-card"><div class="cty-ct">${esc(f.q)}</div>${esc(f.a)}</div>`).join('');
    if (!fq.length && as.length) out = as.map(a => cardAmbito(a.id, 8)).join('');
    if (!out && rs.length) out = rs.slice(0, 3).map(cardRecinto).join('');
    return out || `<div class="cty-card">No encontré eso. Prueba con el código del recinto (p. ej. <span class="cty-chip" data-q="17.2.6">17.2.6</span>), el nombre del servicio, un artículo de una norma, o una de estas:<div class="cty-chips">${sugeridas()}</div></div>`;
  }
  const SUG = ['▶ Ver la cápsula de 1 minuto', '¿Cómo aplico una pauta?', '¿Qué significa CUMPLE, NO CUMPLE y N/A?', '¿Qué pauta lleva un box de consulta?', 'Pautas de DIALISIS', 'Responsable de DERMATOLOGIA', 'Qué falta en UCI', 'Solicitud a la Concesionaria', 'Reglas de asignación', 'Requisitos del quirófano'];
  const sugeridas = () => SUG.map(s => `<span class="cty-chip" data-q="${esc(s)}">${esc(s)}</span>`).join('');

  /* ── UI ──────────────────────────────────────────────────────────────── */
  const CSS = `
:root{
  --cty-navy:#202945;
  --cty-navy-soft:#2A3F7A;
  --cty-cyan:#00A1E1;
  --cty-cyan-deep:#0B6E96;   /* texto celeste accesible sobre claro */
  --cty-white:#FFFFFF;
  --cty-mint:#68D1BF;
  --cty-bg:#EEF2F8;
  --cty-border:#D8E0EC;
  --cty-slate:#5B6B85;
  --cty-ok:#0E7C66;
  --cty-nc:#B91C1C;
  --cty-na:#5B6B85;
  --cty-amber:#B45309;
  /* estados del precotejo */
  --cty-s-backed:#0E7C66;        /* respaldado */
  --cty-s-noevid:#B45309;        /* sin evidencia */
  --cty-s-concession:#00A1E1;    /* Concesionaria */
  --cty-s-mgmt:#2A3F7A;          /* gestión */
  --cty-s-field:#5B6B85;         /* terreno */
  --cty-s-conditional:#68D1BF;   /* condicional */
  /* tintes de fondo de los mismos estados */
  --cty-t-backed:#E7F3F0;
  --cty-t-noevid:#FDF6EC;
  --cty-t-concession:#E5F5FC;
  --cty-t-mgmt:#EDF0F8;
  --cty-t-field:#F4F6FA;
  --cty-t-conditional:#EAF8F5;
  --cty-font:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,system-ui,sans-serif;
}

#ctyFab{position:fixed;right:24px;bottom:24px;z-index:2147483000;display:flex;align-items:center;
  gap:12px;padding:10px 22px 10px 12px;border:0;border-radius:999px;background:var(--cty-navy);
  font-family:var(--cty-font);cursor:pointer;box-shadow:0 10px 28px rgba(32,41,69,.28);
  transition:transform .18s ease,box-shadow .18s ease}
#ctyFab:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(32,41,69,.34)}
#ctyFab:focus-visible{outline:3px solid var(--cty-cyan);outline-offset:3px}
#ctyFab svg{width:42px;height:42px;flex:none}
#ctyFab span{display:flex;flex-direction:column;align-items:flex-start;gap:2px;text-align:left}
#ctyFab b{font-size:15px;font-weight:800;letter-spacing:.08em;color:var(--cty-white)}
#ctyFab i{font-style:normal;font-size:12px;font-weight:600;color:var(--cty-mint)}

#ctyPanel{position:fixed;right:24px;bottom:24px;z-index:2147483001;width:420px;
  max-height:calc(100vh - 48px);display:flex;flex-direction:column;overflow:hidden;
  border-radius:20px;background:var(--cty-bg);color:var(--cty-navy);font-family:var(--cty-font);
  font-size:14px;line-height:1.5;box-shadow:0 24px 60px rgba(32,41,69,.32);
  opacity:0;visibility:hidden;transform:translateY(14px) scale(.98);
  transition:opacity .2s ease,transform .2s ease,visibility .2s}
#ctyPanel.open{opacity:1;visibility:visible;transform:none}
#ctyPanel *{box-sizing:border-box}

#ctyPanel .cty-hd{display:flex;align-items:center;gap:12px;padding:16px 18px;
  background:var(--cty-navy);flex:none}
#ctyPanel .cty-hd svg{width:40px;height:40px;flex:none}
#ctyPanel .cty-hd span{flex:1;display:flex;flex-direction:column;gap:2px;min-width:0}
#ctyPanel .cty-hd b{font-size:15px;font-weight:800;letter-spacing:.06em;color:var(--cty-white)}
#ctyPanel .cty-hd i{font-style:normal;font-size:11px;font-weight:600;color:var(--cty-mint)}
#ctyPanel .cty-hd button{width:44px;height:44px;flex:none;border:0;border-radius:999px;
  background:var(--cty-navy-soft);color:var(--cty-white);font-size:20px;cursor:pointer}
#ctyPanel .cty-hd button:focus-visible{outline:3px solid var(--cty-cyan);outline-offset:2px}

#ctyPanel .cty-msgs{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;
  -webkit-overflow-scrolling:touch;padding:18px;display:flex;flex-direction:column;gap:14px}

#ctyPanel .cty-m{max-width:90%;padding:12px 16px;border-radius:16px;overflow-wrap:anywhere}
#ctyPanel .cty-m.u{align-self:flex-end;background:var(--cty-navy);color:var(--cty-white);
  font-weight:700;border-top-right-radius:4px}
#ctyPanel .cty-m.a{align-self:flex-start;background:var(--cty-white);
  border:1px solid var(--cty-border);border-top-left-radius:4px}

#ctyPanel .cty-card{align-self:flex-start;width:100%;padding:18px;display:flex;
  flex-direction:column;gap:12px;background:var(--cty-white);border:1px solid var(--cty-border);
  border-radius:16px;border-top-left-radius:4px}
#ctyPanel .cty-ct{font-size:19px;font-weight:800;letter-spacing:-.01em;line-height:1.25}
#ctyPanel .cty-mut{font-size:13px;color:var(--cty-slate);line-height:1.5}
#ctyPanel .cty-ul,#ctyPanel .cty-ol{margin:0;padding-left:20px;display:flex;
  flex-direction:column;gap:8px;line-height:1.55}
#ctyPanel .cty-ol{counter-reset:none}
#ctyPanel .cty-ul li::marker{color:var(--cty-cyan)}
#ctyPanel .cty-ol li::marker{font-weight:800;color:var(--cty-navy)}
#ctyPanel .cty-def{padding-top:12px;border-top:1px dashed var(--cty-border);line-height:1.55}
#ctyPanel .cty-def:first-child{padding-top:0;border-top:0}
#ctyPanel .cty-def strong{font-weight:800}

#ctyPanel .cty-ok,#ctyPanel .cty-nc,#ctyPanel .cty-na{padding:12px 14px;border-radius:12px;
  border:1px solid var(--cty-border);line-height:1.55}
#ctyPanel .cty-ok strong,#ctyPanel .cty-nc strong,#ctyPanel .cty-na strong{
  display:block;margin-bottom:4px;font-size:13px;font-weight:800;letter-spacing:.08em}
#ctyPanel .cty-ok{background:var(--cty-t-backed);border-color:var(--cty-ok)}
#ctyPanel .cty-ok strong{color:var(--cty-ok)}
#ctyPanel .cty-ok strong::before{content:"✓  "}
#ctyPanel .cty-nc{background:#FDF5F5;border-color:var(--cty-nc)}
#ctyPanel .cty-nc strong{color:var(--cty-nc)}
#ctyPanel .cty-nc strong::before{content:"✕  "}
#ctyPanel .cty-na{background:var(--cty-t-field);border-color:var(--cty-na)}
#ctyPanel .cty-na strong{color:var(--cty-na)}
#ctyPanel .cty-na strong::before{content:"╱  "}

#ctyPanel .cty-new{display:inline-block;margin-left:8px;padding:2px 8px;border-radius:999px;
  background:var(--cty-t-conditional);border:1px solid var(--cty-mint);color:var(--cty-navy);
  font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;vertical-align:2px}

#ctyPanel .cty-chips{display:flex;flex-wrap:wrap;gap:8px}
#ctyPanel .cty-chip{min-height:40px;padding:10px 15px;border:1.5px solid var(--cty-cyan);
  border-radius:999px;background:var(--cty-white);color:var(--cty-navy);font-family:inherit;
  font-size:13px;font-weight:600;text-align:left;cursor:pointer}
#ctyPanel .cty-chip:hover{background:var(--cty-t-concession)}
#ctyPanel .cty-chip:focus-visible{outline:3px solid var(--cty-cyan);outline-offset:2px}
#ctyPanel .cty-tag{color:var(--cty-cyan-deep);font-weight:700;
  text-decoration:underline dotted;text-underline-offset:2px;cursor:pointer}

#ctyPanel .cty-in{flex:none;display:flex;align-items:center;gap:10px;padding:12px 14px;
  background:var(--cty-white);border-top:1px solid var(--cty-border)}
#ctyPanel .cty-in input{flex:1;min-width:0;min-height:44px;padding:12px 16px;border-radius:999px;
  border:1px solid var(--cty-border);background:var(--cty-bg);color:var(--cty-navy);
  font-family:inherit;font-size:14px}
#ctyPanel .cty-in input::placeholder{color:var(--cty-slate)}
#ctyPanel .cty-in input:focus{outline:2px solid var(--cty-cyan);outline-offset:1px}
#ctyPanel .cty-in button{width:44px;height:44px;flex:none;border:0;border-radius:999px;
  background:var(--cty-cyan);color:var(--cty-white);font-size:18px;cursor:pointer}
#ctyPanel .cty-in button:focus-visible{outline:3px solid var(--cty-navy);outline-offset:2px}

#ctyPanel .cty-vid{width:100%;max-height:52vh;border-radius:12px;background:var(--cty-navy);display:block}
#ctyPanel .cty-ft{flex:none;padding:10px 18px 12px;background:var(--cty-white);
  border-top:1px solid var(--cty-border);font-size:11px;line-height:1.45;
  color:var(--cty-slate);text-align:center}

@media (max-width:640px){
  #ctyFab{right:16px;bottom:16px}
  #ctyPanel{right:0;left:0;bottom:0;width:100%;max-height:92vh;
    border-radius:24px 24px 0 0;transform:translateY(24px)}
  #ctyPanel.open{transform:none}
  #ctyPanel .cty-msgs{padding:16px}
  #ctyPanel .cty-chip{min-height:44px;padding:12px 16px}
  #ctyPanel .cty-in input{min-height:48px}
  #ctyPanel .cty-in button{width:48px;height:48px}
}
@media (prefers-reduced-motion:reduce){
  #ctyFab,#ctyPanel{transition:none}
}

#ctyPanel .cty-bar{display:flex;height:14px;border-radius:7px;overflow:hidden;
  background:var(--cty-bg);box-shadow:inset 0 0 0 1px var(--cty-border)}
#ctyPanel .cty-seg{flex:0 1 0;min-width:0;display:block}
#ctyPanel .cty-seg[data-s="backed"]{background:var(--cty-s-backed)}
#ctyPanel .cty-seg[data-s="noevid"]{background:var(--cty-s-noevid)}
#ctyPanel .cty-seg[data-s="concession"]{background:var(--cty-s-concession)}
#ctyPanel .cty-seg[data-s="mgmt"]{background:var(--cty-s-mgmt)}
#ctyPanel .cty-seg[data-s="field"]{background:var(--cty-s-field)}
#ctyPanel .cty-seg[data-s="conditional"]{background:var(--cty-s-conditional)}
#ctyPanel .cty-lg{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px;
  font-size:13px}
#ctyPanel .cty-lg li{display:flex;align-items:center;gap:8px}
#ctyPanel .cty-lg li::before{content:"";width:8px;height:8px;flex:none;border-radius:999px;
  background:var(--cty-slate)}
#ctyPanel .cty-lg li b{margin-left:auto;font-weight:800}
#ctyPanel .cty-lg li[data-s="backed"]::before{background:var(--cty-s-backed)}
#ctyPanel .cty-lg li[data-s="noevid"]::before{background:var(--cty-s-noevid)}
#ctyPanel .cty-lg li[data-s="concession"]::before{background:var(--cty-s-concession)}
#ctyPanel .cty-lg li[data-s="mgmt"]::before{background:var(--cty-s-mgmt)}
#ctyPanel .cty-lg li[data-s="field"]::before{background:var(--cty-s-field)}
#ctyPanel .cty-lg li[data-s="conditional"]::before{background:var(--cty-s-conditional)}

/* Lado del panel: el diseño lo fija a la derecha; en la plataforma de terreno esa
   columna la ocupa el panel de cotejo, así que se puede mover con MACAMEY_CONFIG.lado. */
#ctyFab.cty-left{right:auto;left:24px}
#ctyPanel.cty-left{right:auto;left:24px}
@media (max-width:640px){#ctyFab.cty-left{left:16px}#ctyPanel.cty-left{left:0;right:0}}
@media print{#ctyFab,#ctyPanel{display:none}}`;
  function montar(){
    if (document.getElementById('ctyPanel')) return;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    if (!CFG.sinBoton){ const b = document.createElement('button'); b.id = 'ctyFab'; b.title = 'CATYMEY · funcionaria digital de Autorización Sanitaria'; b.innerHTML = `${avatar()}<span><b>CATYMEY</b><i>Dudas de las pautas</i></span>`;
      if (CFG.lado === 'left') b.classList.add('cty-left'); b.onclick = abrir; document.body.appendChild(b); }
    const p = document.createElement('div'); p.id = 'ctyPanel';
    if (CFG.lado === 'left') p.classList.add('cty-left');
    p.innerHTML = `<div class="cty-hd">${avatar()}<span><b>CATYMEY</b><i>Asistente de Autorización Sanitaria</i></span><button onclick="CATYMEY.cerrar()" title="Cerrar" aria-label="Cerrar">×</button></div>
      <div class="cty-msgs" id="ctyMsgs"></div>
      <div class="cty-in"><input id="ctyQ" placeholder="Pregunta: ¿qué pauta lleva el 17.2.6?" autocomplete="off"><button onclick="CATYMEY.enviar()">➤</button></div>
      <div class="cty-ft">Responde con las normas digitalizadas, la asignación de pautas y el precotejo documental del NHDS. No reemplaza a las referentes ni al cotejo en terreno.</div>`;
    document.body.appendChild(p);
    p.addEventListener('click', e => { const c = e.target.closest('[data-q]'); if (c && !c.getAttribute('href')){ preguntar(c.dataset.q); } });
    document.getElementById('ctyQ').addEventListener('keydown', e => { if (e.key === 'Enter') enviar(); });
    burbuja('a', KB ? `${esc(KB.identidad.saludo)}<div class="cty-chips">${sugeridas()}</div>` : 'No está cargada mi base de conocimiento.');
  }
  function burbuja(who, html){ const m = document.getElementById('ctyMsgs'); const d = document.createElement('div'); d.className = 'cty-m ' + who; d.innerHTML = html; m.appendChild(d); m.scrollTop = m.scrollHeight; return d; }
  function abrir(){ montar(); document.getElementById('ctyPanel').classList.add('open'); setTimeout(() => document.getElementById('ctyQ').focus(), 50); }
  function cerrar(){ const p = document.getElementById('ctyPanel'); if (p) p.classList.remove('open'); }
  function enviar(){ const i = document.getElementById('ctyQ'); const q = i.value.trim(); if (!q) return; i.value = ''; preguntar(q); }
  async function preguntar(q){
    montar(); document.getElementById('ctyPanel').classList.add('open');
    burbuja('u', esc(q));
    const local = responder(q); burbuja('a', local);
    if (CFG.endpoint){
      const d = burbuja('a', '<span class="cty-mut">Consultando una segunda opinión…</span>');
      try{ const r = await fetch(CFG.endpoint, {method:'POST', headers:{'Content-Type':'text/plain'}, body:JSON.stringify({q, contexto:local.replace(/<[^>]+>/g, ' ').slice(0, 4000)})}).then(x => x.json()); d.innerHTML = esc(r.respuesta || r.answer || JSON.stringify(r)); }
      catch(e){ d.remove(); }
    }
  }
  window.CATYMEY = {abrir, cerrar, preguntar, enviar, responder, KB};
  const go = () => { if (CFG.autoabrir || location.hash === '#catymey' || /[?&]catymey=1/.test(location.search)) abrir(); else montar(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
