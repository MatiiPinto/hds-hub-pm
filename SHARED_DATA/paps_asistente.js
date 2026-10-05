/* SHARED_DATA/paps_asistente.js — Asistente PAPS: ayuda y autoconsulta sobre los Programas Anuales de Prestación de
   Servicios (versión aprobada 2026, HDS e INGER). Responde con la base de conocimiento SHARED_DATA/paps_kb.js
   (una ficha por programa, leída de los documentos) y, cuando hace falta, con la búsqueda de texto completo de la
   plataforma. No usa ningún servicio externo: todo corre en el navegador.
   Uso:  PAPS_ASISTENTE.montar(elemento, {openDoc, openAnexo, setQuery, buscar, est})   // panel incrustado
         PAPS_ASISTENTE.flotante({openDoc, ...})                                            // botón flotante en otra plataforma
*/
(function(){
  var KB = null, CB = {}, host = null, hist = [];
  var CSS = '.pa-wrap{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#1e293b}'
    +'.pa-hd{display:flex;align-items:center;gap:12px;background:#1D2D5B;color:#fff;border-radius:14px 14px 0 0;padding:14px 18px}'
    +'.pa-av{width:40px;height:40px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#29aae2,#1D2D5B 70%);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;box-shadow:0 0 0 2px rgba(255,255,255,.35)}'
    +'.pa-hd h3{font-size:15px;font-weight:800;margin:0}.pa-hd p{font-size:11px;opacity:.75;margin:2px 0 0}'
    +'.pa-body{background:#fff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 14px 14px;padding:14px 16px}'
    +'.pa-chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px}.pa-chip{border:1.5px solid #e2e8f0;background:#f8fafc;border-radius:16px;padding:5px 11px;font-size:11.5px;font-weight:600;color:#334155;cursor:pointer}.pa-chip:hover{border-color:#29aae2;color:#1D2D5B}'
    +'.pa-log{display:flex;flex-direction:column;gap:10px;max-height:60vh;overflow:auto;padding:4px 2px}'
    +'.pa-q{align-self:flex-end;background:#1D2D5B;color:#fff;border-radius:14px 14px 3px 14px;padding:9px 13px;font-size:13px;max-width:80%}'
    +'.pa-a{align-self:flex-start;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px 14px 14px 3px;padding:11px 14px;font-size:13px;line-height:1.55;max-width:92%}'
    +'.pa-a h4{font-size:12.5px;font-weight:800;color:#1D2D5B;margin:0 0 5px}.pa-a h5{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#64748b;margin:9px 0 3px}'
    +'.pa-a ul{margin:3px 0 3px 18px;padding:0}.pa-a li{margin:2px 0}.pa-a p{margin:4px 0}'
    +'.pa-cita{display:inline-block;font-family:ui-monospace,monospace;font-size:10px;color:#0369a1;background:#f0f9ff;border:1px solid #bae6fd;border-radius:4px;padding:0 4px;margin-left:3px;cursor:pointer;vertical-align:1px}.pa-cita:hover{background:#e0f2fe}'
    +'.pa-tag{display:inline-block;font-size:9.5px;font-weight:800;border-radius:5px;padding:2px 7px;color:#fff;background:#0d9488;margin-right:6px;vertical-align:1px}'
    +'.pa-src{font-size:10.5px;color:#94a3b8;margin-top:7px;border-top:1px dashed #e2e8f0;padding-top:5px}.pa-src a,.pa-link{color:#0369a1;cursor:pointer;font-weight:700;text-decoration:none}'
    +'.pa-in{display:flex;gap:8px;margin-top:12px}.pa-in input{flex:1;padding:10px 13px;border:1.5px solid #e2e8f0;border-radius:10px;font-size:13.5px;outline:none}.pa-in input:focus{border-color:#29aae2}'
    +'.pa-in button{background:#1D2D5B;color:#fff;border:none;border-radius:10px;padding:0 16px;font-weight:800;cursor:pointer}'
    +'.pa-hit{padding:6px 0;border-top:1px dashed #e2e8f0;cursor:pointer}.pa-hit:hover{color:#0369a1}.pa-hit mark{background:#fde68a;border-radius:2px}'
    +'#paFab{position:fixed;right:22px;bottom:22px;z-index:900;width:58px;height:58px;border-radius:50%;background:#1D2D5B;color:#fff;border:none;box-shadow:0 8px 24px rgba(0,0,0,.3);font-size:24px;cursor:pointer}'
    +'#paPanel{position:fixed;right:22px;bottom:90px;z-index:901;width:min(440px,calc(100vw - 32px));box-shadow:0 18px 50px rgba(0,0,0,.3);border-radius:14px;display:none}#paPanel.on{display:block}';
  function esc(s){ return (s==null?'':String(s)).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function deacc(s){ return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); }
  function est(){ var e = CB.est ? CB.est() : 'HDS'; return e==='INGER'?'INGER':'HDS'; }
  /* ‹b123› → enlace al bloque del documento del establecimiento activo */
  function citas(txt, pid){
    var f = KB.fichas[pid], e = est();
    return esc(txt).replace(/‹b(\d+)(?:\s*(HDS|INGER))?›/g, function(m, b, ee){
      var key = (f && f.docs && (f.docs[ee||e] || f.docs.HDS)) || (ee||e)+'_'+pid;
      return '<span class="pa-cita" data-key="'+key+'" data-b="'+b+'" title="Ver en el documento">b'+b+'</span>';
    });
  }
  function lista(arr, pid, max){ if(!arr||!arr.length) return '<p><i>no indicado</i></p>'; return '<ul>'+arr.slice(0,max||12).map(function(x){ return '<li>'+(typeof x==='string'?citas(x,pid):citas(JSON.stringify(x),pid))+'</li>'; }).join('')+(arr.length>(max||12)?'<li><i>… y '+(arr.length-(max||12))+' más en el documento</i></li>':'')+'</ul>'; }
  /* ---- detección de programas ---- */
  function stemm(w){ return deacc(w).replace(/[^a-z0-9ñ]/g,'').slice(0,6); }
  function programas(q){
    var d = deacc(q), toks = d.replace(/[^a-z0-9ñ ]/g,' ').split(' ').filter(Boolean).map(function(w){return w.slice(0,6);}), out = [];
    Object.keys(KB.fichas).forEach(function(pid){
      var f = KB.fichas[pid], sc = 0;
      if(new RegExp('\\b'+pid.toLowerCase()+'\\b').test(d)) sc += 6;
      (f.alias||'').split(',').forEach(function(a){
        a = a.trim(); if(!a) return;
        var ws = a.split(' ').filter(Boolean).map(stemm);
        if(ws.every(function(w){ return toks.indexOf(w)>=0; })) sc += ws.length>1 ? 3+ws.length : (a.length>=6 ? 2 : 1);
      });
      if(sc) out.push([sc,pid]);
    });
    out.sort(function(a,b){return b[0]-a[0];});
    return out.filter(function(x){ return x[0]>=out[0][0]-1; }).slice(0,3).map(function(x){return x[1];});
  }
  function intents(q){
    var d = deacc(q), out = [];
    Object.keys(KB.intents).forEach(function(k){ if(new RegExp(KB.intents[k]).test(d)) out.push(k); });
    return out;
  }
  function faq(q){
    var d = deacc(q), best = null, bs = 0;
    KB.faq.forEach(function(f){ var n = 0; deacc(f.k).split(' ').forEach(function(w){ if(w.length>=3 && d.indexOf(w)>=0) n++; }); if(deacc(f.q)===d.trim()) n+=5; if(n>bs){bs=n;best=f;} });
    return bs>=2 ? best : null;
  }
  /* ---- respuesta ---- */
  function tarjeta(pid, ints, q){
    var f = KB.fichas[pid], e = est(), h = '<h4><span class="pa-tag">'+f.num+' · '+pid+'</span>'+esc(f.short)+' <span style="font-weight:600;color:#64748b">· '+e+'</span></h4>';
    var todo = !ints.length;
    if(todo || ints.indexOf('resumen')>=0){ h += '<p>'+citas(f.resumen_direccion||f.objetivo||'',pid).replace(/\n\n/g,'</p><p>')+'</p>'; }
    if(ints.indexOf('alcance')>=0 && !todo){ h += '<p>'+citas(f.objetivo,pid)+'</p><h5>Incluye</h5>'+lista(f.alcance&&f.alcance.incluye,pid,8)+'<h5>No incluye</h5>'+lista(f.alcance&&f.alcance.excluye,pid,6); }
    if(ints.indexOf('excluye')>=0){ h += '<h5>Lo que no incluye</h5>'+lista(f.alcance&&f.alcance.excluye,pid,10); }
    if(ints.indexOf('dotacion')>=0||ints.indexOf('cifras')>=0){ var dt=f.dotacion||{}; h += '<h5>Dotación</h5><p>HDS: <b>'+citas(dt.total_hds||'no indicado',pid)+'</b> · INGER: <b>'+citas(dt.total_inger||'no indicado',pid)+'</b> '+citas(dt.cita||'',pid)+'</p>'
      +(dt.cargos&&dt.cargos.length?'<ul>'+dt.cargos.slice(0,14).map(function(c){return '<li>'+esc(c.cargo)+': HDS '+citas(c.hds,pid)+' · INGER '+citas(c.inger,pid)+'</li>';}).join('')+'</ul>':'')+(dt.turnos?'<p>Turnos: '+citas(dt.turnos,pid)+'</p>':''); }
    if(ints.indexOf('horario')>=0||ints.indexOf('frecuencia')>=0){ var pg=f.programacion||{}; h += '<h5>Horario y programación</h5><p>'+citas(pg.horario||'no indicado',pid)+'</p>'+(pg.dias?'<p>Días: '+citas(pg.dias,pid)+'</p>':'')+(pg.frecuencias&&pg.frecuencias.length?'<h5>Frecuencias</h5>'+lista(pg.frecuencias,pid,10):''); }
    if(ints.indexOf('sic')>=0){ h += '<h5>Cómo se solicita y controla (SIC)</h5><p>'+citas(f.sic||'no indicado',pid)+'</p>'; }
    if(ints.indexOf('contingencia')>=0){ h += '<h5>Contingencias</h5>'+lista(f.contingencias,pid,12); }
    if(ints.indexOf('indicadores')>=0){ h += '<h5>Indicadores</h5>'+(f.indicadores&&f.indicadores.length?'<ul>'+f.indicadores.slice(0,12).map(function(i){return '<li><b>'+esc(i.codigo||'')+'</b> '+esc(i.nombre)+(i.meta&&i.meta!=='no indicado'?' — meta: '+esc(i.meta):'')+'</li>';}).join('')+'</ul>':'<p><i>no indicado</i></p>'); }
    if(ints.indexOf('coordinacion')>=0){ h += '<h5>Coordinación con otros servicios</h5>'+(f.coordinacion&&f.coordinacion.length?'<ul>'+f.coordinacion.map(function(c){return '<li><b>'+esc(c.con)+'</b>: '+citas(c.que,pid)+'</li>';}).join('')+'</ul>':'<p><i>no indicado</i></p>'); }
    if(ints.indexOf('anexos')>=0){ h += '<h5>Anexos</h5>'+lista(f.anexos,pid,16)+'<p><span class="pa-link" data-ax="'+pid+'">Abrir los archivos de los anexos →</span></p>'; }
    if(ints.indexOf('aprobacion')>=0){ var ap=f.aprobacion||{}; h += '<h5>Aprobación</h5><ul>'+['HDS','INGER'].map(function(x){ var a=ap[x]; return '<li>'+x+': '+(a?'ORD IF-HSG N° '+a.ord+' del '+fecha(a.fecha)+(a.carta?' (responde carta '+esc(a.carta)+')':'')+(a.aplicable?' · '+esc(a.aplicable):''):'sin oficio en la carpeta')+'</li>'; }).join('')+'</ul>'
      +(f.aprobacion_pm&&Object.keys(f.aprobacion_pm).length?'<p>Plan de Mantenimiento: '+Object.keys(f.aprobacion_pm).map(function(x){return x+' ORD '+f.aprobacion_pm[x].ord+' ('+fecha(f.aprobacion_pm[x].fecha)+')';}).join(' · ')+'</p>':''); }
    if(ints.indexOf('inger')>=0){ h += '<h5>Diferencias HDS ↔ INGER</h5>'+lista(f.diferencias_hds_inger,pid,10)+'<p><span class="pa-link" data-diff="'+pid+'">Ver el cotejo bloque a bloque →</span></p>'; }
    if(ints.indexOf('capacitacion')>=0){ h += '<h5>Capacitación</h5><p>'+citas(f.capacitacion||'no indicado',pid)+'</p>'; }
    if(ints.indexOf('equipos')>=0){ h += '<h5>Equipos, insumos y materiales</h5>'+lista(f.equipamiento_insumos,pid,10); }
    if(ints.indexOf('pm')>=0){ h += '<h5>Plan de Mantenimiento</h5><p>'+citas(f.plan_mantenimiento||'Este programa no tiene Plan de Mantenimiento aparte.',pid)+'</p>'; }
    if(ints.indexOf('hospital')>=0){ h += '<h5>Lo que el hospital debe saber</h5>'+lista(f.lo_que_el_hospital_debe_saber,pid,10); }
    if(ints.indexOf('cifras')>=0){ h += '<h5>Cifras destacadas</h5>'+(f.cifras_destacadas?'<ul>'+f.cifras_destacadas.map(function(c){return '<li>'+esc(c.dato)+': <b>'+esc(c.valor)+'</b> '+citas(c.cita||'',pid)+'</li>';}).join('')+'</ul>':''); }
    if(todo){ h += '<h5>Para seguir</h5><div class="pa-chips">'+['qué incluye','dotación','horario','cómo se pide','contingencias','indicadores','anexos','qué debe saber el hospital','diferencias con INGER'].map(function(x){return '<span class="pa-chip" data-q="'+esc(x+' '+pid)+'">'+x+'</span>';}).join('')+'</div>'; }
    h += '<div class="pa-src">Fuente: '+esc(f.nombre_oficial||f.short)+' · <span class="pa-link" data-open="'+(f.docs[e]||f.docs.HDS)+'">abrir el documento '+e+' →</span></div>';
    return h;
  }
  function fecha(d){ var m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(d||''); return m?m[3]+'-'+m[2]+'-'+m[1]:(d||''); }
  function responder(q){
    var pids = programas(q), ints = intents(q), fq = faq(q), html = '';
    if(fq && !pids.length){ html = '<h4>'+esc(fq.q.charAt(0).toUpperCase()+fq.q.slice(1))+'</h4><p>'+esc(fq.a)+'</p>'; }
    else if(pids.length){ html = pids.map(function(p){ return tarjeta(p, ints, q); }).join('<hr style="border:none;border-top:1px dashed #e2e8f0;margin:10px 0">'); }
    else if(ints.length){
      // pregunta transversal sin programa: la misma respuesta para los 14, en corto
      var k = ints[0], h = '<h4>'+esc(q)+' · los 14 programas ('+est()+')</h4><ul>';
      Object.keys(KB.fichas).forEach(function(pid){ var f=KB.fichas[pid], v='';
        if(k==='dotacion'||k==='cifras') v = 'HDS '+(f.dotacion||{}).total_hds+' · INGER '+(f.dotacion||{}).total_inger;
        else if(k==='horario'||k==='frecuencia') v = (f.programacion||{}).horario||'';
        else if(k==='aprobacion') v = ['HDS','INGER'].map(function(x){ var a=(f.aprobacion||{})[x]; return x+' '+(a?'ORD '+a.ord+' '+fecha(a.fecha):'—'); }).join(' · ');
        else if(k==='contingencia') v = (f.contingencias||[]).slice(0,3).join(' · ');
        else if(k==='sic') v = (f.sic||'').slice(0,220);
        else if(k==='indicadores') v = (f.indicadores||[]).length+' indicadores';
        else v = (f.objetivo||'').slice(0,200);
        h += '<li><b>'+f.num+' '+pid+'</b> '+esc(f.short)+': '+citas(String(v).slice(0,300),pid)+'</li>'; });
      html = h+'</ul>';
    }
    if(!html || (!pids.length && !fq)){
      // búsqueda de texto completo de la plataforma como respaldo
      var res = CB.buscar ? CB.buscar(q, {est:est()}) : [];
      if(res.length){ html += '<h4>Lo que dicen los documentos sobre «'+esc(q)+'»</h4>'+res.slice(0,6).map(function(r){ var p=r.p; return '<div class="pa-hit" data-key="'+p.key+'" data-b="'+p.b+'" data-ax="'+(p.k==='ax'?p.ax:'')+'"><span class="pa-tag">'+p.svc+'</span><span style="font-size:10.5px;color:#94a3b8">'+esc((p.path||[]).slice(-1).join(''))+'</span><br>'+(CB.snippet?CB.snippet(p.txt,q,220):esc(p.txt.slice(0,220)))+'</div>'; }).join('')+'<p><span class="pa-link" data-q2="'+esc(q)+'">Ver todos los resultados en la búsqueda →</span></p>'; }
      else if(!html) html = '<h4>No encontré eso en los PAPS</h4><p>Prueba nombrando el servicio (aseo, residuos, vectores, ropería, alimentación, infraestructura, mobiliario, cafetería, vigilancia, estacionamiento, equipos médicos, informática) y lo que quieres saber: qué incluye, dotación, horario, cómo se pide, contingencias, indicadores, anexos, aprobación.</p>';
    }
    return html;
  }
  /* ---- interfaz ---- */
  function render(){
    host.innerHTML = '<div class="pa-wrap"><div class="pa-hd"><div class="pa-av">✦</div><div><h3>Asistente PAPS</h3><p>Autoconsulta sobre los 14 programas concesionados · lee los documentos aprobados y cita el bloque</p></div></div>'
      +'<div class="pa-body"><div class="pa-chips" id="paChips">'+['¿Qué incluye el aseo?','Dotación de vigilancia','Horario de cafetería','¿Cómo pido mantenimiento de un equipo médico?','Contingencias de residuos','Indicadores de alimentación','¿Quién aprueba los PAPS?','Diferencias INGER en ropería','Qué debe saber el hospital de SIIT'].map(function(x){return '<span class="pa-chip" data-q="'+esc(x)+'">'+esc(x)+'</span>';}).join('')+'</div>'
      +'<div class="pa-log" id="paLog"></div><div class="pa-in"><input id="paIn" placeholder="Pregunta en tus palabras: «cada cuánto se desratiza», «cuántos guardias hay de noche»…" autocomplete="off"><button id="paGo">Preguntar</button></div></div></div>';
    host.querySelector('#paGo').onclick = enviar; host.querySelector('#paIn').onkeydown = function(e){ if(e.key==='Enter') enviar(); };
    bind(host);
    if(hist.length) hist.forEach(function(x){ pintar(x.q, x.a); });
  }
  function bind(root){
    Array.prototype.forEach.call(root.querySelectorAll('.pa-chip[data-q]'), function(c){ c.onclick=function(){ preguntar(c.getAttribute('data-q')); }; });
    Array.prototype.forEach.call(root.querySelectorAll('.pa-cita, .pa-hit, [data-open]'), function(c){ c.onclick=function(){ var ax=c.getAttribute('data-ax'); if(ax&&CB.openAnexo){ CB.openAnexo(+ax); return; } var k=c.getAttribute('data-key')||c.getAttribute('data-open'), b=c.getAttribute('data-b'); if(k&&CB.openDoc) CB.openDoc(k, b?+b:null); }; });
    Array.prototype.forEach.call(root.querySelectorAll('[data-q2]'), function(c){ c.onclick=function(){ if(CB.setQuery) CB.setQuery(c.getAttribute('data-q2')); }; });
    Array.prototype.forEach.call(root.querySelectorAll('[data-ax]'), function(c){ if(c.classList.contains('pa-hit')) return; c.onclick=function(){ if(CB.verAnexos) CB.verAnexos(c.getAttribute('data-ax')); }; });
    Array.prototype.forEach.call(root.querySelectorAll('[data-diff]'), function(c){ c.onclick=function(){ if(CB.verDiff) CB.verDiff(c.getAttribute('data-diff')); }; });
  }
  function pintar(q, a){
    var log = host.querySelector('#paLog'); if(!log) return;
    var dq = document.createElement('div'); dq.className='pa-q'; dq.textContent=q; log.appendChild(dq);
    var da = document.createElement('div'); da.className='pa-a'; da.innerHTML=a; log.appendChild(da); bind(da);
    log.scrollTop = log.scrollHeight;
  }
  function enviar(){ var inp=host.querySelector('#paIn'), q=(inp.value||'').trim(); if(!q) return; inp.value=''; preguntar(q); }
  function preguntar(q){ if(!KB){ pintar(q,'<p>Falta SHARED_DATA/paps_kb.js</p>'); return; } var a = responder(q); hist.push({q:q,a:a}); if(hist.length>30) hist.shift(); pintar(q,a); }
  function montar(el, cb){
    KB = window.SHARED_PAPS_KB || null; CB = cb || {}; host = el;
    if(!CB.buscar && typeof window.search==='function') CB.buscar = function(q,f){ return window.search(q, f); };
    if(!CB.snippet && typeof window.snippet==='function') CB.snippet = window.snippet;
    if(!CB.verAnexos && typeof window.setView==='function') CB.verAnexos = function(pid){ try{ ST.svc=[pid]; ST.axCat='all'; setView('anexos'); render(); }catch(e){} };
    if(!CB.verDiff && typeof window.setView==='function') CB.verDiff = function(pid){ try{ ST.diffSvc=pid; ST.diffSec='all'; setView('diferencias'); render(); }catch(e){} };
    if(!document.getElementById('paCss')){ var st=document.createElement('style'); st.id='paCss'; st.textContent=CSS; document.head.appendChild(st); }
    render();
  }
  function flotante(cb){
    var fab=document.createElement('button'); fab.id='paFab'; fab.title='Asistente PAPS'; fab.textContent='✦'; document.body.appendChild(fab);
    var panel=document.createElement('div'); panel.id='paPanel'; document.body.appendChild(panel);
    fab.onclick=function(){ panel.classList.toggle('on'); if(!panel.getAttribute('data-m')){ montar(panel, cb||{}); panel.setAttribute('data-m','1'); } };
  }
  window.PAPS_ASISTENTE = {montar:montar, flotante:flotante, preguntar:preguntar, responder:function(q){ KB=KB||window.SHARED_PAPS_KB; return responder(q); }};
})();
