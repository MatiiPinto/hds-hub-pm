/* SHARED_DATA/paps_tiempos.js — módulo de TIEMPOS del Asistente PAPS: responde «cuánto tarda», «tiempo de respuesta vs
   ejecución», «qué servicios están sujetos a tiempo», ejemplos prácticos, zonificación, eventos críticos e indicadores
   centinela. Lee SHARED_DATA/paps_sla.js (window.SHARED_PAPS_SLA, generado por _DEV/paps/9_sla.py). Sin servicios externos.
   Lo llama paps_asistente.js:  PAPS_TIEMPOS.aplica(q)  →  PAPS_TIEMPOS.responder(q, pids, est, {esc})                       */
(function(){
  var RX = {
    gatillo: /tiempo|plazo|demora|\bsla\b|nivel(es)? de servicio|respuesta|ejecuci|correcci|reparaci|centinela|multa|zonific|anexo h|evento[s]? critico|ejemplo|caso practico|compar|similitud|sujet[oa]s? a tiempo|cuanto (tarda|demora|tiene)|relojes|que pasa si/,
    diferencia: /diferencia|distint|distinci|\bvs\b|versus|que es (el |un )?tiempo|tipos? de tiempo|cuatro tiempos|relojes|respuesta y (de )?ejecuci|ejecucion y (de )?respuesta|atencion y ejecuci/,
    comparar: /compar|similitud|diferencias entre (los )?(servicios|paps)|cuales (paps|servicios|programas)|que (paps|servicios|programas)|todos los (paps|servicios|programas)|sujet[oa]s? a tiempo|tienen tiempo|no todos|matriz|resumen de tiempos|los 14/,
    ejemplo: /ejemplo|caso practico|practic|que pasa si|supongamos|por ejemplo|situacion/,
    centinela: /centinela|multa|descuento|nivel de servicio parcial|\bnsp\b|\bnsg\b|auditor|incumpl|reincid|sancion/,
    zona: /zona|zonific|muy critic|menos critic|no critic|anexo h|criticidad/,
    evento: /evento[s]? critico/,
    tipo: {respuesta: /respuesta|atencion|notific|informar|diagnost|acus/, ejecucion: /ejecuci|prestacion|realiz|resolver|solucion|terminar|hacer/, correccion: /correcci|indicador/, reparacion: /reparaci|arregl|repon/}
  };
  function S(){ return window.SHARED_PAPS_SLA || null; }
  function deacc(s){ return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); }
  var CSS = '.pt-tb{border-collapse:collapse;width:100%;font-size:11.5px;margin:4px 0 6px}.pt-tb th{background:#eef2f8;color:#1D2D5B;text-align:left;padding:4px 6px;border:1px solid #dbe2ee;font-size:10.5px}.pt-tb td{padding:3px 6px;border:1px solid #e8edf5;vertical-align:top}'
    +'.pt-tb td.n{white-space:nowrap;font-weight:700;color:#0E7C66}.pt-k{display:inline-block;border-radius:5px;padding:1px 7px;font-size:10px;font-weight:800;margin-right:4px}.pt-k.r{background:#fff7ed;color:#9a3412}.pt-k.e{background:#ecfdf5;color:#065f46}.pt-k.c{background:#eff6ff;color:#1e40af}.pt-k.p{background:#fdf2f8;color:#9d174d}'
    +'.pt-def{border-left:3px solid #29aae2;padding:6px 10px;margin:6px 0;background:#f8fafc;border-radius:0 8px 8px 0}.pt-def b{color:#1D2D5B}.pt-ej{border:1px solid #e2e8f0;border-radius:10px;padding:8px 11px;margin:6px 0;background:#fff}.pt-ej h6{margin:0 0 3px;font-size:12px;color:#1D2D5B}.pt-ej p{margin:2px 0}'
    +'.pt-si{color:#0E7C66;font-weight:800}.pt-no{color:#94a3b8}.pt-mut{color:#64748b;font-size:11px}';
  function css(){ if(typeof document!=='undefined' && !document.getElementById('ptCss')){ var st=document.createElement('style'); st.id='ptCss'; st.textContent=CSS; document.head.appendChild(st); } }
  var ETIQ = {respuesta:'<span class="pt-k r">RESPUESTA</span>', ejecucion:'<span class="pt-k e">EJECUCIÓN</span>', correccion:'<span class="pt-k c">CORRECCIÓN</span>', prestacion:'<span class="pt-k e">EJECUCIÓN · prestación</span>', severidad:'<span class="pt-k r">RESPUESTA · por severidad</span>', evento_critico:'<span class="pt-k p">EVENTO CRÍTICO</span>', indicadores:'<span class="pt-k c">INDICADORES</span>', disponibilidad:'<span class="pt-k e">DISPONIBILIDAD</span>', frecuencia:'<span class="pt-k e">FRECUENCIA</span>'};
  function etiq(tipo){ return ETIQ[tipo.replace('tiempo_','')] || ''; }
  function cita(t, H){ var doc=t.doc, lab=(doc.indexOf('_RSO')>=0?'RSO v34 '+doc.split('_')[0]:'PAPS '+doc.replace('_',' '))+' · b'+t.b; return '<span class="pa-cita" data-key="'+H.esc(doc)+'" data-b="'+t.b+'" title="'+H.esc(t.titulo)+'">'+H.esc(lab)+'</span>'; }
  function tabla(t, H, max){
    max = max || 8; var cols = t.columnas, filas = t.filas.slice(0, max);
    var h = '<div><b>'+H.esc(t.titulo)+'</b> '+etiq(t.tipo)+' '+cita(t,H)+'</div><table class="pt-tb"><tr>'+cols.map(function(c){return '<th>'+H.esc(c.replace(/^Tiempo de Correcci[oó]n · /,''))+'</th>';}).join('')+'</tr>';
    filas.forEach(function(r){ h += '<tr>'+r.map(function(c,i){ var n=/^\s*\d+\s*(min|hora|hrs|h\b|d[ií]a|semana|mes)/i.test(c)||/^\d+$/.test(c); return '<td'+(n?' class="n"':'')+'>'+H.esc(c.length>90?c.slice(0,90)+'…':c)+'</td>'; }).join('')+'</tr>'; });
    h += '</table>'; if(t.filas.length>max) h += '<div class="pt-mut">… y '+(t.filas.length-max)+' filas más en el documento ('+cita(t,H)+')</div>';
    return h;
  }
  function tablasDe(sv, tipos, est){
    var T = sv.tablas.filter(function(t){ return tipos.indexOf(t.tipo)>=0; });
    // manda el PAPS aprobado; el RSO solo si el PAPS no trae la tabla de ese tipo. Establecimiento activo primero.
    var paps = T.filter(function(t){ return t.origen==='PAPS' && t.est===est; }), rso = T.filter(function(t){ return t.origen==='RSO' && t.est===est; });
    if(!paps.length && !rso.length){ paps = T.filter(function(t){ return t.origen==='PAPS'; }); rso = T.filter(function(t){ return t.origen==='RSO'; }); }
    var tiposPaps = {}; paps.forEach(function(t){ tiposPaps[t.tipo]=1; });
    return paps.concat(rso.filter(function(t){ return !tiposPaps[t.tipo]; }));
  }
  function definiciones(H, cuales){
    var d = S().definiciones.filter(function(x){ return !cuales || cuales.test(deacc(x.termino)); }).slice(0,6);
    return d.map(function(x){ return '<div class="pt-def"><b>'+H.esc(x.termino)+'</b>: '+H.esc(x.definicion)+' <span class="pt-mut">· '+H.esc(x.fuentes[0])+'</span></div>'; }).join('');
  }
  function cardDiferencia(H){
    var h = '<h4>Los cuatro relojes del SIC: qué mide cada tiempo</h4>'+definiciones(H, /tiempo|zonific/);
    h += '<p>En corto: <b>respuesta</b> es cuánto tarda la Concesionaria en llegar, diagnosticar e informar; <b>ejecución</b> es cuánto tarda en dejar el servicio hecho; <b>corrección</b> es cuánto tiene para subsanar un incumplimiento de indicador antes de que cuente; <b>reparación</b> es el plazo de arreglo que fija la IF en el SIC para equipos e infraestructura. No todos los servicios tabulan los cuatro: unos miden por zona (Anexo H), otros por tipo de incidencia o por severidad.</p>';
    h += '<div class="pa-chips">'+['¿Qué servicios están sujetos a tiempo?','Ejemplos prácticos de tiempos','Tiempos de aseo','Tiempos de equipos médicos','Tiempos de infraestructura','¿Qué es la zonificación?'].map(function(x){return '<span class="pa-chip" data-q="'+H.esc(x)+'">'+H.esc(x)+'</span>';}).join('')+'</div>';
    return h;
  }
  function cardComparar(H, est){
    var h = '<h4>¿Qué servicios están sujetos a tiempo? Similitudes y diferencias ('+H.esc(est)+')</h4><table class="pt-tb"><tr><th>Servicio</th><th>Respuesta</th><th>Ejecución</th><th>Corrección</th><th>Depende de la zona</th><th>Cómo se mide</th></tr>';
    S().comparacion.forEach(function(c){
      var como = c.tipos.severidad ? 'por severidad del incidente' : (c.tipos.tiempo_ejecucion||c.tipos.tiempo_prestacion) ? 'tabla por zona / tipo' : c.tipos.tiempo_correccion||c.tipos.indicadores ? 'solo indicadores con tiempo de corrección' : 'sin tabla';
      h += '<tr><td><b>'+c.num+' '+H.esc(c.short)+'</b></td>'+[c.tiene_respuesta,c.tiene_ejecucion,c.tiene_correccion,c.por_zona].map(function(v){return '<td>'+(v?'<span class="pt-si">sí</span>':'<span class="pt-no">no consta</span>')+'</td>';}).join('')+'<td>'+como+'</td></tr>';
    });
    h += '</table><p><b>Similitud:</b> todos tienen evento crítico definido e indicadores con tiempo de corrección por zona; todos se piden y se miden por el SIC. <b>Diferencias:</b> Aseo, Ropería y MOI traen tablas de ejecución por zona o incidencia; SIIT mide por severidad (60 min a 12 h) y no por zona; Equipamiento Médico fija la reparación caso a caso en el SIC y exige disponibilidad mínima; Alimentación, Cafetería, Vigilancia, Estacionamiento, Vectores y Mobiliario solo tienen tiempos de corrección de indicadores.</p>';
    h += '<p class="pt-mut">Fuente: tablas de los PAPS aprobados y del RSO v34 compiladas en paps_sla.js ('+H.esc(S().version)+'). «No consta» = no hay tabla con cifra en el PAPS ni en el RSO.</p>';
    return h;
  }
  function cardEjemplos(H, pids){
    var ej = S().ejemplos.filter(function(e){ return !pids.length || pids.indexOf(e.servicio)>=0; });
    if(!ej.length) ej = S().ejemplos.slice(0,4);
    return '<h4>Ejemplos prácticos'+(pids.length?' · '+pids.join(', '):'')+'</h4>'+ej.map(function(e){ return '<div class="pt-ej"><h6>'+H.esc(e.titulo)+' <span class="pa-tag">'+H.esc(e.servicio)+'</span></h6><p>'+H.esc(e.situacion)+'</p><p>'+etiq(e.tiempo.split(' ')[0].replace('ó','o'))+' <b>'+H.esc(e.valor)+'</b> <span class="pt-mut">(zona: '+H.esc(e.zona)+')</span></p><p class="pt-mut">'+H.esc(e.leccion)+'</p><p class="pt-mut">Fuente: '+H.esc(e.fuente)+'</p></div>'; }).join('');
  }
  function cardCentinela(H){
    var m = S().marco, h = '<h4>Qué pasa cuando no se cumple: niveles de servicio, corrección y centinelas</h4><ul>'+m.mecanismo.map(function(x){ return '<li><b>'+H.esc(x.punto)+'</b>: '+H.esc(x.texto)+' <span class="pt-mut">('+H.esc(x.fuente)+')</span></li>'; }).join('')+'</ul>';
    h += '<h5>Indicadores centinela Clase A ('+m.centinela_A.length+')</h5><ul>'+m.centinela_A.map(function(x){return '<li>'+x.n+'. '+H.esc(x.texto)+'</li>';}).join('')+'</ul>';
    h += '<h5>Indicadores centinela Clase B ('+m.centinela_B.length+')</h5><ul>'+m.centinela_B.slice(0,16).map(function(x){return '<li>'+x.n+'. '+H.esc(x.texto)+'</li>';}).join('')+'</ul><p class="pt-mut">Fuente: Anexos Complementarios 2014, tablas de Indicadores Centinela; Bases Tipo 2013, art. 1.10.11 y 1.10.12.</p>';
    return h;
  }
  function cardZona(H){
    var z = S().zonas_detalle || [], h = '<h4>Zonificación (Anexo H): la misma solicitud tiene distinto tiempo según el recinto</h4>'+definiciones(H, /zonific/);
    if(z.length){ h += '<table class="pt-tb"><tr><th>Zona</th><th>Recintos según Anexo H</th><th>Agregados por el Anexo Complementario</th></tr>'+z.map(function(r){ return '<tr><td><b>'+H.esc(r.zona)+'</b></td><td>'+H.esc(r.anexo_h.filter(function(x){return !/Otros recintos adyacentes/.test(x);}).join(' · '))+'</td><td>'+H.esc(r.anexo_complementario.join(' · '))+'</td></tr>'; }).join('')+'</table><p class="pt-mut">Los recintos adyacentes (estaciones de enfermería, estares, esperas, oficinas, circulaciones, baños, vestidores) heredan la zona de la unidad en que están (Modificación DGOP N°159, 2012).</p>'; }
    var dep = S().comparacion.filter(function(c){return c.por_zona;}).map(function(c){return c.short;});
    h += '<p><b>Servicios cuyos tiempos cambian con la zona:</b> '+H.esc(dep.join(', '))+'.</p>';
    return h;
  }
  function cardServicio(pid, q, est, H){
    var sv = S().servicios[pid]; if(!sv) return '';
    var d = deacc(q), pide = {respuesta: RX.tipo.respuesta.test(d), ejecucion: RX.tipo.ejecucion.test(d), correccion: RX.tipo.correccion.test(d), reparacion: RX.tipo.reparacion.test(d)};
    var algo = pide.respuesta||pide.ejecucion||pide.correccion||pide.reparacion;
    var h = '<h4><span class="pa-tag">'+sv.num+' · '+pid+'</span>'+H.esc(sv.short)+' · tiempos <span style="font-weight:600;color:#64748b">· '+H.esc(est)+'</span></h4>';
    var r = sv.resumen;
    h += '<p>'+(r.tiene_respuesta?'Tiene tiempo de <b>respuesta</b> tabulado. ':'')+(r.tiene_ejecucion?'Tiene tiempo de <b>ejecución</b> tabulado'+(r.por_zona?' <b>por zona</b>':'')+'. ':'')+(r.tiene_correccion?'Tiene tiempos de <b>corrección</b> por indicador'+(r.por_zona?' y zona':'')+'. ':'')+(!r.tiene_respuesta&&!r.tiene_ejecucion?'<b>No consta</b> una tabla de respuesta o ejecución con cifras en el PAPS ni en el RSO: el plazo lo fija la IF en el SIC caso a caso. ':'')+'</p>';
    var ev = tablasDe(sv, ['evento_critico'], est); if(ev.length && (!algo || RX.evento.test(d))) h += tabla(ev[0], H, 6);
    if(!algo || pide.respuesta){ var tr = tablasDe(sv, ['tiempo_respuesta','severidad','tiempo_prestacion'], est); if(tr.length){ h += '<h5>Tiempo de respuesta</h5>'+tr.slice(0,2).map(function(t){return tabla(t,H,8);}).join(''); } else if(pide.respuesta) h += '<h5>Tiempo de respuesta</h5><p><i>No consta una tabla con cifra para este servicio.</i></p>'; }
    if(!algo || pide.ejecucion || pide.reparacion){ var te = tablasDe(sv, ['tiempo_ejecucion','tiempo_prestacion','disponibilidad'], est); if(te.length){ h += '<h5>Tiempo de ejecución</h5>'+te.slice(0,2).map(function(t){return tabla(t,H,10);}).join(''); } else if(pide.ejecucion||pide.reparacion) h += '<h5>Tiempo de ejecución / reparación</h5><p><i>No consta una tabla con cifra: el tiempo de reparación lo establece la IF en el SIC para cada solicitud'+(pid==='AMEQM'?' (indicador AMEQM_4), con la disponibilidad mínima del Anexo I como piso':'')+'.</i></p>'; }
    if(!algo || pide.correccion){ var tc = tablasDe(sv, ['tiempo_correccion','indicadores'], est).filter(function(t){ return /correcci/i.test(t.columnas.join(' ')); }); if(tc.length){ h += '<h5>Tiempos de corrección de los indicadores</h5>'+tabla(tc[0], H, 8); } }
    var fr = sv.frases.filter(function(f){ return f.est===est; }).slice(0,3); if(fr.length) h += '<h5>Plazos que fija el propio PAPS</h5><ul>'+fr.map(function(f){ return '<li>'+H.esc(f.texto.length>260?f.texto.slice(0,260)+'…':f.texto)+' <span class="pa-cita" data-key="'+H.esc(f.doc)+'" data-b="'+f.b+'">b'+f.b+'</span></li>'; }).join('')+'</ul>';
    var ej = S().ejemplos.filter(function(e){return e.servicio===pid;}); if(ej.length) h += '<h5>Ejemplo</h5>'+cardEjemplos(H,[pid]).replace(/^<h4>.*?<\/h4>/,'');
    h += '<div class="pt-mut">Regla de lectura: manda el PAPS aprobado por la IF; las tablas del RSO v34 se muestran cuando el PAPS remite a ellas o no trae la cifra.</div>';
    return h;
  }
  // los códigos de dos letras (ES, AS, RE, VE, AL, CA, VI, RO) coinciden con palabras comunes: exigir una palabra del servicio o el código en mayúsculas
  var CLAVE = {AS:/aseo|limpieza/, RE:/residuo|reas\b|basura/, VE:/vector|plaga|desrat|fumig/, RO:/roper|ropa|lavander/, AL:/aliment|racion|comida|casino|nutric/, MOI:/infraestructura|mantenimiento|\bmoi\b|electric|agua|clima|ascensor|instalaci/, AMMNC:/mobiliario no clinico|ammnc/, ARMNC:/reposicion de mobiliario|armnc/, CA:/cafeter/, VI:/vigil|segurid|guardia/, ES:/estacion|parking/, AMEQM:/equipo|equipamiento|ameqm|medic/, AREQM:/reposicion de equip|areqm|adquisicion/, SIIT:/siit|informatic|sistema|software|red\b|tecnolog|computador/};
  function filtrarPids(q, pids){ var d = deacc(q); return (pids||[]).filter(function(p){ return (CLAVE[p]&&CLAVE[p].test(d)) || new RegExp('\\b'+p+'\\b').test(q); }); }
  function aplica(q){ return !!S() && RX.gatillo.test(deacc(q)); }
  function responder(q, pids, est, H){
    if(!S()) return ''; css(); H = H || {esc:function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}};
    var d = deacc(q), pids = filtrarPids(q, pids), est = est||'HDS';
    if(RX.centinela.test(d) && !pids.length) return cardCentinela(H);
    if(RX.zona.test(d) && !pids.length && !RX.ejemplo.test(d)) return cardZona(H);
    if(RX.ejemplo.test(d)) return cardEjemplos(H, pids);
    if(RX.diferencia.test(d) && !pids.length) return cardDiferencia(H);
    if(RX.comparar.test(d) || (!pids.length && /servicios|paps|programas/.test(d))) return cardComparar(H, est);
    if(pids.length) return pids.slice(0,3).map(function(p){ return cardServicio(p, q, est, H); }).join('<hr style="border:none;border-top:1px dashed #e2e8f0;margin:10px 0">');
    return cardDiferencia(H);
  }
  window.PAPS_TIEMPOS = {aplica:aplica, responder:responder, version:function(){ return S()&&S().version; }};
})();
