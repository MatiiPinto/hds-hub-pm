// ════════════════════════════════════════════════════════════════════════════
// FarmaBox · MATRIZ DE INSUMOS (26-10-2026)
//   🔎 Insumos             motor de búsqueda de todos los insumos del corte de Logística,
//                          con estado (vigente · nuevo · baja · no está en el corte) y en
//                          qué paquetes se usa cada uno; exporta a Excel.
//   ✏️ Actualizar paquetes  Farmacia revisa paquete por paquete: mantener, cambiar
//                          cantidad, quitar, agregar insumos; marca revisado; exporta la
//                          propuesta a Excel (y respaldo para pasarla a otro computador).
//   📈 Cortes              cortes oficiales y carga de un corte nuevo en Excel: altas, bajas
//                          (ojo con las que están en paquetes) y cambios de precio.
// Datos: SHARED_DATA/insumos_matriz.js (← _DEV/build_insumos_matriz.py) + data/farmabox_kits.js.
// La propuesta y el corte cargado viven en ESTE navegador (localStorage) hasta exportarlos.
// ════════════════════════════════════════════════════════════════════════════
(function(){
'use strict';
const M = window.INSUMOS_MATRIZ;
const KITS = window.FARMABOX_KITS || [];
if(!M) { console.warn('FarmaBox: falta SHARED_DATA/insumos_matriz.js'); return; }
const KBY = {}; KITS.forEach(k => KBY[k.id] = k);
const LS_PROP = 'farmabox_propuesta_v1', LS_CORTE = 'farmabox_corte_local_v1', LS_PRECIO = 'farmabox_ver_precio';
const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch(e) { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch(e) { alert('No se pudo guardar en este navegador: ' + e.message); return false; } };
const nrm = s => String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const clp = n => (n == null || n === '') ? '—' : '$' + Math.round(n).toLocaleString('es-CL');
const hoy = () => new Date().toISOString().slice(0, 10);
const fmtF = f => f ? f.split('-').reverse().join('-') : '';

// ── uso de cada código en los paquetes (sin las líneas repetidas consecutivas) ──
function usoPaquetes(){
  const u = {};
  KITS.forEach(k => { const vistos = new Set(); k.items.forEach(it => { if(vistos.has(it.id)) return; vistos.add(it.id); (u[it.id] = u[it.id] || []).push([k.id, it.cantidad]); }); });
  return u;
}
const USO = usoPaquetes();

// ── base de insumos: matriz oficial, o un corte cargado en este navegador ─────
let corteLocal = lsGet(LS_CORTE, null);
let INS = [];
function construir(){
  const oficial = {}; M.insumos.forEach(r => oficial[r.c] = r);
  let base;
  if(corteLocal){
    const nuevo = {}; corteLocal.rows.forEach(r => nuevo[r.c] = r);
    base = corteLocal.rows.map(r => ({...r, e: oficial[r.c] && oficial[r.c].e !== 'baja' ? 'vigente' : 'nuevo',
      pp: oficial[r.c] && oficial[r.c].pu && r.pu && Math.abs(oficial[r.c].pu - r.pu) > 0.5 ? oficial[r.c].pu : undefined, k: USO[r.c]}));
    M.insumos.forEach(r => { if(!nuevo[r.c] && r.e !== 'baja') base.push({...r, e: 'baja', k: USO[r.c]}); });
  } else base = M.insumos.map(r => ({...r}));
  const ya = new Set(base.map(r => r.c));
  M.fuera_de_corte.forEach(f => { if(!ya.has(f.c)) base.push({c: f.c, g: f.g, cl: '', ff: f.ropa ? 'ROPA ESTÉRIL (código interno)' : '', b: [], st: null, pu: null, e: f.ropa ? 'interno' : 'fuera', k: USO[f.c]}); });
  base.forEach(r => r._h = nrm([r.c, r.g, r.ff, r.cl, (r.b || []).join(' ')].join(' ')));
  base.sort((a, b) => (a.g || '').localeCompare(b.g || ''));
  INS = base;
}
construir();
const POR_COD = () => { const m = {}; INS.forEach(r => m[r.c] = r); return m; };
const ESTADOS = {vigente:['Vigente','#dcfce7','#166534'], nuevo:['Nuevo en el corte','#dbeafe','#1e40af'], baja:['De baja','#fee2e2','#991b1b'],
                 fuera:['No está en el corte','#fef3c7','#92400e'], interno:['Código interno','#f1f5f9','#475569']};
const pill = e => { const x = ESTADOS[e] || ESTADOS.vigente; return '<span class="fx-pill" style="background:' + x[1] + ';color:' + x[2] + '">' + x[0] + '</span>'; };
const alerta = r => r && (r.e === 'baja' || r.e === 'fuera');

// ── estilos ───────────────────────────────────────────────────────────────────
const css = document.createElement('style');
css.textContent = `
.fx-modebar{background:#16234a;border-bottom:1px solid rgba(255,255,255,.08);padding:8px 24px;display:flex;gap:8px;flex-wrap:wrap;position:sticky;top:68px;z-index:99}
.fx-mode{border:1.5px solid rgba(20,184,166,.35);background:transparent;color:#cbd5e1;border-radius:20px;padding:7px 15px;font-size:13px;font-weight:700;cursor:pointer}
.fx-mode.on{background:#0d9488;border-color:#0d9488;color:#fff}
.fx-mode .fx-b{background:#f59e0b;color:#111;border-radius:9px;padding:0 6px;margin-left:5px;font-size:11px}
body.fx-otra .filter-bar,body.fx-otra .results-bar,body.fx-otra #gridWrap,body.fx-otra #noResults{display:none!important}
#fxView{max-width:1400px;margin:0 auto;padding:16px 24px 40px;color:#0f172a}
.fx-card{background:#fff;border-radius:14px;padding:16px 18px;margin-bottom:14px;box-shadow:0 4px 18px rgba(0,0,0,.25)}
.fx-card h3{font-size:16px;margin-bottom:4px;color:#0f172a}
.fx-d{font-size:12.5px;color:#475569;line-height:1.5}
.fx-q{width:100%;font-size:17px;padding:13px 16px;border:2px solid #99f6e4;border-radius:12px;outline:none;margin:8px 0}
.fx-q:focus{border-color:#0d9488}
.fx-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.fx-chip{border:1.5px solid #cbd5e1;background:#fff;color:#334155;border-radius:16px;padding:5px 12px;font-size:12.5px;font-weight:700;cursor:pointer}
.fx-chip.on{background:#0f766e;border-color:#0f766e;color:#fff}
.fx-sel{border:1.5px solid #cbd5e1;border-radius:9px;padding:6px 8px;font-size:12.5px;max-width:230px}
.fx-btn{white-space:nowrap;border:0;background:#0d9488;color:#fff;border-radius:9px;padding:8px 14px;font-size:13px;font-weight:700;cursor:pointer}
.fx-btn.sec{background:#e2e8f0;color:#0f172a}.fx-btn.warn{background:#f59e0b;color:#111}.fx-btn.ok{background:#16a34a}
.fx-tw{overflow:auto;max-height:68vh;border:1px solid #e2e8f0;border-radius:10px;margin-top:10px}
.fx-t{width:100%;border-collapse:collapse;font-size:13px}
.fx-t th{position:sticky;top:0;background:#f1f5f9;color:#334155;text-align:left;padding:8px;font-size:11.5px;text-transform:uppercase;letter-spacing:.04em;z-index:1}
.fx-t td{padding:8px;border-top:1px solid #f1f5f9;vertical-align:top}
.fx-t tr.fx-click{cursor:pointer}.fx-t tr.fx-click:hover td{background:#f0fdfa}
.fx-pill{display:inline-block;border-radius:10px;padding:2px 9px;font-size:11px;font-weight:700;white-space:nowrap}
.fx-kchip{display:inline-block;background:#ccfbf1;color:#115e59;border-radius:10px;padding:2px 9px;font-size:11.5px;font-weight:700}
.fx-det td{background:#f8fafc}
.fx-cols{display:grid;grid-template-columns:300px 1fr;gap:14px}.fx-cols>*{min-width:0}
@media(max-width:900px){.fx-cols{grid-template-columns:1fr}}
.fx-list{max-height:72vh;overflow:auto;border:1px solid #e2e8f0;border-radius:10px}
.fx-li{padding:9px 11px;border-bottom:1px solid #f1f5f9;cursor:pointer;font-size:13px}
.fx-li:hover{background:#f0fdfa}.fx-li.on{background:#ccfbf1}
.fx-li small{display:block;color:#64748b;font-size:11.5px}
.fx-in{width:70px;border:1.5px solid #cbd5e1;border-radius:7px;padding:4px 6px;font-size:13px}
.fx-in.cmt{width:100%;min-width:150px}
.fx-quitado td{opacity:.45;text-decoration:line-through}
.fx-quitado td.fx-keep{opacity:1;text-decoration:none}
.fx-sug{position:absolute;z-index:20;background:#fff;border:1px solid #cbd5e1;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.18);max-height:320px;overflow:auto;width:100%}
.fx-sug div{padding:8px 10px;font-size:13px;cursor:pointer;border-bottom:1px solid #f1f5f9}.fx-sug div:hover{background:#f0fdfa}
.fx-bar{height:8px;background:#e2e8f0;border-radius:6px;overflow:hidden;margin-top:6px}.fx-bar i{display:block;height:100%;background:#0d9488}
.fx-banner{background:#fef3c7;color:#92400e;border-radius:10px;padding:9px 12px;font-size:13px;margin-bottom:12px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
`;
document.head.appendChild(css);

// ── barra de modos ────────────────────────────────────────────────────────────
const nAlertas = () => INS.filter(r => r.k && alerta(r)).length;
let modo = 'paquetes';
const bar = document.createElement('div'); bar.className = 'fx-modebar'; bar.id = 'fxModebar';
const vista = document.createElement('main'); vista.id = 'fxView'; vista.style.display = 'none';
function pintarBarra(){
  const A = nAlertas();
  bar.innerHTML = [['paquetes','📦 Paquetes'],['insumos','🔎 Insumos'],['actualizar','✏️ Actualizar paquetes'],['cortes','📈 Cortes de Logística']]
    .map(([k, t]) => '<button class="fx-mode' + (modo === k ? ' on' : '') + '" onclick="FX.modo(\'' + k + '\')">' + t
      + (k === 'insumos' && A ? '<span class="fx-b" title="Insumos de los paquetes de baja o que no están en el corte">⚠ ' + A + '</span>' : '')
      + (k === 'actualizar' ? '<span class="fx-b" style="background:#99f6e4">' + nRevisados() + '/' + KITS.length + '</span>' : '') + '</button>').join('');
}
function montar(){
  const hdr = document.querySelector('.app-header'); hdr.parentNode.insertBefore(bar, hdr.nextSibling);
  const fb = document.getElementById('filterBar'); if(fb) fb.style.top = '118px';
  const grid = document.getElementById('noResults') || document.getElementById('gridWrap');
  grid.parentNode.insertBefore(vista, grid.nextSibling);
  pintarBarra();
  const si = document.getElementById('searchInput');   // el buscador del header es el de paquetes
  if(si) si.addEventListener('focus', () => { if(modo !== 'paquetes') setModo('paquetes'); });
  const m = (location.hash.match(/fx=(\w+)/) || [])[1]; if(m) setModo(m);
}
function setModo(m){
  modo = m; document.body.classList.toggle('fx-otra', m !== 'paquetes');
  vista.style.display = m === 'paquetes' ? 'none' : 'block';
  try { history.replaceState(null, '', m === 'paquetes' ? location.pathname + location.search : '#fx=' + m); } catch(e){}
  pintarBarra();
  if(m === 'insumos') vInsumos(); else if(m === 'actualizar') vActualizar(); else if(m === 'cortes') vCortes();
  window.scrollTo({top: 0});
}

// ── 🔎 INSUMOS ────────────────────────────────────────────────────────────────
const fI = {q: '', est: 'todos', bod: '', fam: '', lim: 150, abierto: null};
let verPrecio = lsGet(LS_PRECIO, false);
function filtrar(){
  const toks = nrm(fI.q).split(/\s+/).filter(Boolean);
  return INS.filter(r => {
    if(fI.est === 'paquetes' && !r.k) return false;
    if(fI.est === 'revisar' && !(r.k && alerta(r))) return false;
    if(fI.est === 'nuevos' && r.e !== 'nuevo') return false;
    if(fI.est === 'baja' && r.e !== 'baja') return false;
    if(fI.bod && !(r.b || []).includes(fI.bod)) return false;
    if(fI.fam && r.ff !== fI.fam) return false;
    return toks.every(t => r._h.indexOf(t) >= 0);
  });
}
function vInsumos(){
  const bods = [...new Set(INS.flatMap(r => r.b || []))].sort(), fams = [...new Set(INS.map(r => r.ff).filter(Boolean))].sort();
  const chips = [['todos','Todos'],['paquetes','Usados en paquetes'],['revisar','⚠ Por revisar'],['nuevos','Nuevos'],['baja','De baja']];
  vista.innerHTML = banner() + '<div class="fx-card"><h3>🔎 Buscador de insumos</h3>'
    + '<div class="fx-d">Todos los insumos del corte de Logística ' + fmtF(corteLocal ? corteLocal.fecha : M.corte_vigente) + ' y en qué paquetes se usa cada uno. Escribe el código o parte del nombre (sin importar tildes ni el orden de las palabras).</div>'
    + '<input class="fx-q" id="fxQ" placeholder="Ej.: guante quirur 7 · aguja 25 · 2002257231 · bisturi" value="' + esc(fI.q) + '" autofocus>'
    + '<div class="fx-row">' + chips.map(([k, t]) => '<button class="fx-chip' + (fI.est === k ? ' on' : '') + '" onclick="FX.fi(\'est\',\'' + k + '\')">' + t + '</button>').join('')
    + '<select class="fx-sel" onchange="FX.fi(\'bod\',this.value)"><option value="">Todas las bodegas</option>' + bods.map(b => '<option' + (fI.bod === b ? ' selected' : '') + '>' + esc(b) + '</option>').join('') + '</select>'
    + '<select class="fx-sel" onchange="FX.fi(\'fam\',this.value)"><option value="">Todas las familias</option>' + fams.map(b => '<option' + (fI.fam === b ? ' selected' : '') + '>' + esc(b) + '</option>').join('') + '</select>'
    + '<label class="fx-d" style="margin-left:auto"><input type="checkbox" ' + (verPrecio ? 'checked' : '') + ' onchange="FX.precio(this.checked)"> ver stock y precio</label>'
    + '<button class="fx-btn" onclick="FX.expInsumos()">⬇ Exportar a Excel</button></div>'
    + '<div id="fxRes"></div></div>';
  const q = document.getElementById('fxQ');
  q.addEventListener('input', () => { fI.q = q.value; fI.lim = 150; pintarRes(); });
  q.focus(); q.setSelectionRange(q.value.length, q.value.length);
  pintarRes();
}
function pintarRes(){
  const L = filtrar(), el = document.getElementById('fxRes'); if(!el) return;
  const filas = L.slice(0, fI.lim).map(r => {
    const det = fI.abierto === r.c ? '<tr class="fx-det"><td colspan="' + (verPrecio ? 9 : 7) + '">' + detalleInsumo(r) + '</td></tr>' : '';
    return '<tr class="fx-click" onclick="FX.abrir(\'' + esc(r.c) + '\')"><td><b>' + esc(r.c) + '</b></td><td>' + esc(r.g) + '</td><td>' + esc(r.cl) + '</td><td><small>' + esc(r.ff) + '</small></td>'
      + '<td><small>' + esc((r.b || []).join(' · ')) + '</small></td>'
      + (verPrecio ? '<td style="text-align:right">' + (r.st == null ? '—' : Math.round(r.st).toLocaleString('es-CL')) + '</td><td style="text-align:right">' + clp(r.pu) + (r.pp ? '<br><small style="color:#b45309">antes ' + clp(r.pp) + '</small>' : '') + '</td>' : '')
      + '<td>' + pill(r.e) + '</td><td>' + (r.k ? '<span class="fx-kchip">' + r.k.length + ' paquete' + (r.k.length > 1 ? 's' : '') + '</span>' : '<small style="color:#94a3b8">—</small>') + '</td></tr>' + det;
  }).join('');
  el.innerHTML = '<div class="fx-d" style="margin-top:8px"><b>' + L.length.toLocaleString('es-CL') + '</b> insumos' + (L.length > fI.lim ? ' · se muestran los primeros ' + fI.lim : '') + '</div>'
    + '<div class="fx-tw"><table class="fx-t"><thead><tr><th>Código</th><th>Insumo</th><th>Unidad</th><th>Familia</th><th>Bodega</th>' + (verPrecio ? '<th>Stock</th><th>P. unitario</th>' : '') + '<th>Estado</th><th>Paquetes</th></tr></thead><tbody>' + filas + '</tbody></table></div>'
    + (L.length > fI.lim ? '<div style="text-align:center;margin-top:10px"><button class="fx-btn sec" onclick="FX.mas()">Mostrar más</button></div>' : '');
}
function detalleInsumo(r){
  const ks = (r.k || []).map(([id, q]) => { const k = KBY[id]; return k ? '<tr><td>' + esc(k.categoria) + '</td><td><b>' + esc(k.nombre) + '</b></td><td style="text-align:center">' + q + '</td><td><button class="fx-btn sec" onclick="event.stopPropagation();FX.irKit(\'' + id + '\')">Abrir en Actualizar</button></td></tr>' : ''; }).join('');
  return '<div class="fx-d" style="margin-bottom:6px">' + (r.e === 'fuera' ? '⚠ Este código está en paquetes pero <b>no aparece en el corte de Logística</b>: puede estar de baja, con otro código o sin stock en las bodegas del corte. Confirmar con Logística y, si corresponde, reemplazarlo en los paquetes.'
      : r.e === 'baja' ? '⚠ <b>Salió del último corte</b>: revisar los paquetes que lo usan.' : r.e === 'interno' ? 'Prenda de ropa estéril con código interno del catálogo (no es un artículo de Logística).'
      : 'En los cortes desde ' + fmtF(r.d) + (r.h ? ' hasta ' + fmtF(r.h) : '') + '.') + '</div>'
    + (ks ? '<table class="fx-t" style="background:#fff"><thead><tr><th>Categoría</th><th>Paquete</th><th>Cantidad</th><th></th></tr></thead><tbody>' + ks + '</tbody></table>' : '<div class="fx-d">No se usa en ningún paquete.</div>');
}
function expInsumos(){
  const L = filtrar();
  const aoa = [['Código', 'Insumo', 'Unidad', 'Familia', 'Bodega', 'Stock', 'Precio unitario', 'Estado', 'N° paquetes', 'Paquetes (cantidad)']]
    .concat(L.map(r => [r.c, r.g, r.cl, r.ff, (r.b || []).join(' · '), r.st, r.pu, (ESTADOS[r.e] || [r.e])[0], r.k ? r.k.length : 0,
      (r.k || []).map(([id, q]) => (KBY[id] ? KBY[id].nombre : id) + ' (' + q + ')').join('; ')]));
  descargar([['Insumos', aoa, [14, 60, 12, 30, 30, 10, 14, 18, 10, 80]]], 'Insumos FarmaBox – ' + fmtF(hoy()) + '.xlsx');
}

// ── ✏️ ACTUALIZAR PAQUETES ────────────────────────────────────────────────────
let P = lsGet(LS_PROP, {por: '', kits: {}});
const guardarP = () => { lsSet(LS_PROP, P); pintarBarra(); };
const nRevisados = () => Object.values(P.kits || {}).filter(x => x.rev).length;
const fA = {q: '', filtro: 'todos', kit: null};
function lineasKit(k){                    // líneas del catálogo sin las repeticiones consecutivas
  const out = []; let prev = null;
  k.items.forEach(it => { const key = it.id + '|' + it.cantidad; if(key === prev){ out[out.length - 1].rep = true; return; } prev = key; out.push({...it}); });
  return out;
}
function estadoKit(k){
  const pk = P.kits[k.id] || {}, cod = POR_COD();
  const alertas = lineasKit(k).filter(it => alerta(cod[it.id])).length;
  const cambios = Object.values(pk.items || {}).filter(x => x.quitar || x.q != null).length + (pk.nuevos || []).length;
  return {rev: !!pk.rev, alertas, cambios};
}
function vActualizar(){
  const T = KITS.length, R = nRevisados();
  vista.innerHTML = banner() + '<div class="fx-card"><div class="fx-row" style="justify-content:space-between"><div><h3>✏️ Actualización de paquetes quirúrgicos</h3>'
    + '<div class="fx-d">Paquete por paquete: confirmar cada insumo, cambiar la cantidad, quitar lo que sobra (para bajar las devoluciones) y agregar lo que falte. Lo marcado con ⚠ está de baja o no aparece en el corte de Logística.</div></div>'
    + '<div class="fx-row"><input class="fx-sel" style="max-width:190px" placeholder="Revisado por (tu nombre)" value="' + esc(P.por) + '" onchange="FX.por(this.value)">'
    + '<button class="fx-btn" onclick="FX.expProp()">⬇ Exportar propuesta (Excel)</button>'
    + '<button class="fx-btn sec" onclick="FX.respaldo()">💾 Respaldo</button><label class="fx-btn sec" style="cursor:pointer">📂 Cargar respaldo<input type="file" accept=".json" style="display:none" onchange="FX.cargarResp(this)"></label></div></div>'
    + '<div class="fx-d" style="margin-top:8px"><b>' + R + ' de ' + T + '</b> paquetes revisados</div><div class="fx-bar"><i style="width:' + Math.round(100 * R / T) + '%"></i></div></div>'
    + '<div class="fx-cols"><div class="fx-card" style="padding:12px"><input class="fx-q" style="font-size:14px;padding:9px 12px;margin-top:0" id="fxKQ" placeholder="Buscar paquete…" value="' + esc(fA.q) + '">'
    + '<div class="fx-row" style="margin-bottom:8px">' + [['todos','Todos'],['alertas','⚠ Con alertas'],['pend','Sin revisar'],['rev','Revisados']].map(([k, t]) => '<button class="fx-chip' + (fA.filtro === k ? ' on' : '') + '" onclick="FX.fa(\'' + k + '\')">' + t + '</button>').join('') + '</div>'
    + '<div class="fx-list" id="fxKL"></div></div><div class="fx-card" id="fxKE"></div></div>';
  const q = document.getElementById('fxKQ'); q.addEventListener('input', () => { fA.q = q.value; pintarListaKits(); });
  pintarListaKits(); pintarEditor();
}
function pintarListaKits(){
  const toks = nrm(fA.q).split(/\s+/).filter(Boolean);
  const L = KITS.filter(k => { const e = estadoKit(k); const h = nrm(k.nombre + ' ' + k.categoria);
    if(fA.filtro === 'alertas' && !e.alertas) return false; if(fA.filtro === 'pend' && e.rev) return false; if(fA.filtro === 'rev' && !e.rev) return false;
    return toks.every(t => h.indexOf(t) >= 0); });
  document.getElementById('fxKL').innerHTML = L.map(k => { const e = estadoKit(k);
    return '<div class="fx-li' + (fA.kit === k.id ? ' on' : '') + '" onclick="FX.kit(\'' + k.id + '\')">' + (e.rev ? '✅ ' : '') + '<b>' + esc(k.nombre) + '</b><small>' + esc(k.categoria) + ' · ' + lineasKit(k).length + ' insumos'
      + (e.alertas ? ' · <span style="color:#b45309;font-weight:700">⚠ ' + e.alertas + '</span>' : '') + (e.cambios ? ' · <span style="color:#0f766e;font-weight:700">' + e.cambios + ' cambio' + (e.cambios > 1 ? 's' : '') + '</span>' : '') + '</small></div>'; }).join('')
    || '<div class="fx-d" style="padding:10px">Sin paquetes con ese filtro.</div>';
}
function pintarEditor(){
  const el = document.getElementById('fxKE'); if(!el) return;
  const k = KBY[fA.kit];
  if(!k){ el.innerHTML = '<div class="fx-d">Elige un paquete de la lista para revisarlo.</div>'; return; }
  const pk = P.kits[k.id] || {items: {}, nuevos: []}, cod = POR_COD();
  const filas = lineasKit(k).map(it => {
    const x = (pk.items || {})[it.id] || {}, r = cod[it.id], q = x.q != null ? x.q : it.cantidad;
    return '<tr class="' + (x.quitar ? 'fx-quitado' : '') + '"><td><b>' + esc(it.id) + '</b></td><td>' + esc(it.nombre) + (it.rep ? ' <span class="fx-pill" style="background:#fef3c7;color:#92400e" title="Esta línea venía repetida en el catálogo">repetida</span>' : '') + (it.nota_cantidad ? '<br><small style="color:#64748b">' + esc(it.nota_cantidad) + '</small>' : '') + '</td>'
      + '<td>' + (r ? pill(r.e) : pill('fuera')) + '</td><td style="text-align:center">' + it.cantidad + '</td>'
      + '<td class="fx-keep"><input class="fx-in" type="number" min="0" value="' + q + '" onchange="FX.cant(\'' + it.id + '\',this.value,' + it.cantidad + ')"' + (x.quitar ? ' disabled' : '') + '></td>'
      + '<td class="fx-keep"><button class="fx-btn ' + (x.quitar ? 'sec' : 'warn') + '" style="padding:5px 10px" onclick="FX.quitar(\'' + it.id + '\')">' + (x.quitar ? '↩ Volver' : '✕ Quitar') + '</button></td>'
      + '<td class="fx-keep"><input class="fx-in cmt" placeholder="comentario" value="' + esc(x.com || '') + '" onchange="FX.com(\'' + it.id + '\',this.value)"></td></tr>';
  }).join('');
  const nuevos = (pk.nuevos || []).map((n, i) => '<tr style="background:#f0fdf4"><td><b>' + esc(n.c) + '</b></td><td>' + esc(n.g) + ' <span class="fx-pill" style="background:#dcfce7;color:#166534">agregado</span></td><td>' + pill((cod[n.c] || {}).e || 'vigente') + '</td><td style="text-align:center">—</td>'
    + '<td><input class="fx-in" type="number" min="1" value="' + n.q + '" onchange="FX.nq(' + i + ',this.value)"></td><td><button class="fx-btn sec" style="padding:5px 10px" onclick="FX.nx(' + i + ')">✕</button></td>'
    + '<td><input class="fx-in cmt" placeholder="comentario" value="' + esc(n.com || '') + '" onchange="FX.nc(' + i + ',this.value)"></td></tr>').join('');
  el.innerHTML = '<div class="fx-row" style="justify-content:space-between"><div><div class="fx-d">' + esc(k.categoria) + '</div><h3 style="font-size:19px">' + esc(k.nombre) + '</h3></div>'
    + '<div class="fx-row"><button class="fx-btn ' + (pk.rev ? 'sec' : 'ok') + '" onclick="FX.rev()">' + (pk.rev ? '↩ Marcar como pendiente' : '✅ Marcar paquete revisado') + '</button>'
    + '<button class="fx-btn sec" onclick="FX.reset()">Deshacer cambios</button></div></div>'
    + (pk.rev ? '<div class="fx-d" style="margin-top:4px">Revisado por <b>' + esc(pk.por || '—') + '</b> el ' + fmtF(pk.fecha) + '</div>' : '')
    + '<div style="position:relative;margin-top:10px"><input class="fx-q" style="font-size:14px;padding:9px 12px;margin:0" id="fxAdd" placeholder="➕ Agregar insumo al paquete: escribe código o nombre…" autocomplete="off"><div class="fx-sug" id="fxSug" style="display:none"></div></div>'
    + '<div class="fx-tw"><table class="fx-t"><thead><tr><th>Código</th><th>Insumo</th><th>Corte</th><th>Actual</th><th>Propuesta</th><th></th><th>Comentario</th></tr></thead><tbody>' + filas + nuevos + '</tbody></table></div>';
  const a = document.getElementById('fxAdd'), s = document.getElementById('fxSug');
  a.addEventListener('input', () => { const toks = nrm(a.value).split(/\s+/).filter(Boolean);
    if(!toks.length){ s.style.display = 'none'; return; }
    const L = INS.filter(r => r.e !== 'interno' && toks.every(t => r._h.indexOf(t) >= 0)).slice(0, 10);
    s.innerHTML = L.map(r => '<div onclick="FX.agregar(\'' + esc(r.c) + '\')"><b>' + esc(r.c) + '</b> · ' + esc(r.g) + ' ' + pill(r.e) + '</div>').join('') || '<div style="color:#64748b">Sin resultados</div>';
    s.style.display = 'block'; });
}
function pk(){ const id = fA.kit; P.kits[id] = P.kits[id] || {items: {}, nuevos: []}; P.kits[id].items = P.kits[id].items || {}; P.kits[id].nuevos = P.kits[id].nuevos || []; return P.kits[id]; }
function refrescar(){ guardarP(); pintarEditor(); pintarListaKits(); }
function filasPropuesta(){
  const cod = POR_COD(), out = [];
  KITS.forEach(k => { const x = P.kits[k.id]; if(!x) return;
    lineasKit(k).forEach(it => { const y = (x.items || {})[it.id]; if(!y && !x.rev) return;
      const q = y && y.quitar ? 0 : (y && y.q != null ? y.q : it.cantidad);
      const acc = y && y.quitar ? 'Quitar' : (q !== it.cantidad ? 'Cambiar cantidad' : 'Mantener');
      if(acc === 'Mantener' && !(y && y.com) && !x.rev) return;
      out.push([k.categoria, k.nombre, it.id, it.nombre, it.cantidad, q, acc, (y && y.com) || '', ((ESTADOS[(cod[it.id] || {}).e || 'fuera']) || [''])[0], x.rev ? 'Sí' : 'No', x.por || P.por || '', x.fecha || '']); });
    (x.nuevos || []).forEach(n => out.push([k.categoria, k.nombre, n.c, n.g, 0, n.q, 'Agregar', n.com || '', ((ESTADOS[(cod[n.c] || {}).e]) || [''])[0], x.rev ? 'Sí' : 'No', x.por || P.por || '', x.fecha || '']));
  });
  return out;
}
function expProp(){
  const F = filasPropuesta();
  if(!F.length){ alert('Todavía no hay cambios ni paquetes revisados para exportar.'); return; }
  const cambios = F.filter(f => f[6] !== 'Mantener');
  const av = KITS.map(k => { const e = estadoKit(k), x = P.kits[k.id] || {}; return [k.categoria, k.nombre, e.rev ? 'Revisado' : 'Pendiente', e.cambios, e.alertas, x.por || '', x.fecha || '']; });
  descargar([['Cambios propuestos', [['Categoría','Paquete','Código','Insumo','Cantidad actual','Cantidad propuesta','Acción','Comentario','Estado en el corte','Paquete revisado','Revisado por','Fecha']].concat(cambios), [18,34,14,50,10,10,16,34,18,10,18,12]],
              ['Paquetes revisados (completo)', [['Categoría','Paquete','Código','Insumo','Cantidad actual','Cantidad propuesta','Acción','Comentario','Estado en el corte','Paquete revisado','Revisado por','Fecha']].concat(F), [18,34,14,50,10,10,16,34,18,10,18,12]],
              ['Avance', [['Categoría','Paquete','Estado','Cambios','Alertas','Revisado por','Fecha']].concat(av), [18,40,12,10,10,18,12]]],
    'Propuesta actualización paquetes quirúrgicos – ' + fmtF(hoy()) + '.xlsx');
}

// ── 📈 CORTES ─────────────────────────────────────────────────────────────────
let corteNuevo = null;
const COLS = [['c', /^c[oó]d(igo)?(\b| art| producto|$)|^art[ií]culo$|^sku/], ['g', /glosa|descripci[oó]n|nombre|art[ií]culo|producto|insumo/], ['b', /bodega|almac[eé]n|ubicaci[oó]n/],
  ['cl', /^clase$|unidad|u\.? ?m\.?|presentaci[oó]n|forma/], ['ff', /familia|grupo|categor[ií]a/], ['st', /stock|saldo|existencia|cantidad/], ['pu', /precio|p\.? ?unit|costo unit|valor unit|pmp|cpp/]];
const num = v => { if(v == null || v === '') return null; if(typeof v === 'number') return v; let t = String(v).replace(/[^\d,.\-]/g, '');
  if(t.includes(',') && t.includes('.')) t = t.replace(/\./g, '').replace(',', '.'); else t = t.replace(',', '.'); const n = parseFloat(t); return isNaN(n) ? null : n; };
function leerCorte(file){
  const rd = new FileReader();
  rd.onload = ev => {
    try {
      const wb = XLSX.read(new Uint8Array(ev.target.result), {type: 'array'}); const filas = [];
      wb.SheetNames.forEach(sn => { const rows = XLSX.utils.sheet_to_json(wb.Sheets[sn], {header: 1, raw: true, defval: ''});
        for(let i = 0; i < Math.min(15, rows.length); i++){ const hdr = rows[i].map(nrm), mapa = {};
          COLS.forEach(([cpo, rx]) => { const j = hdr.findIndex((h, jj) => h && !Object.values(mapa).includes(jj) && rx.test(h)); if(j >= 0) mapa[cpo] = j; });
          if(mapa.c != null && mapa.g != null){ rows.slice(i + 1).forEach(r => { const c = String(r[mapa.c] || '').trim().replace(/\.0$/, ''); if(!c || !/\d/.test(c)) return;
            filas.push({c, g: String(r[mapa.g] || '').trim(), b: mapa.b != null ? String(r[mapa.b] || '').trim() : '', cl: mapa.cl != null ? String(r[mapa.cl] || '').trim() : '',
              ff: mapa.ff != null ? String(r[mapa.ff] || '').trim() : '', st: mapa.st != null ? num(r[mapa.st]) : null, pu: mapa.pu != null ? num(r[mapa.pu]) : null}); }); break; } } });
      if(!filas.length){ alert('No encontré columnas de código y descripción en el Excel. Debe tener al menos «Código» y «Descripción/Glosa».'); return; }
      const ag = {}; filas.forEach(x => { const o = ag[x.c] = ag[x.c] || {c: x.c, g: x.g, cl: x.cl, ff: x.ff, b: [], st: 0, pu: null}; if(x.b && !o.b.includes(x.b)) o.b.push(x.b); o.st += x.st || 0; if(x.pu) o.pu = x.pu; });
      const rows = Object.values(ag), ofi = {}; M.insumos.forEach(r => { if(r.e !== 'baja') ofi[r.c] = r; });
      const nv = new Set(rows.map(r => r.c));
      const altas = rows.filter(r => !ofi[r.c]), bajas = Object.values(ofi).filter(r => !nv.has(r.c)), precio = rows.filter(r => ofi[r.c] && ofi[r.c].pu && r.pu && Math.abs(ofi[r.c].pu - r.pu) > 0.5);
      corteNuevo = {fecha: (file.name.match(/(20\d\d)[-_.]?(\d\d)[-_.]?(\d\d)/) || []).slice(1, 4).join('-') || hoy(), archivo: file.name, rows, altas, bajas, precio};
      vCortes();
    } catch(e){ alert('No se pudo leer el archivo: ' + e.message); }
  };
  rd.readAsArrayBuffer(file);
}
function vCortes(){
  const C = M.cortes;
  let h = banner() + '<div class="fx-card"><h3>📈 Cortes de Logística</h3><div class="fx-d">La matriz se alimenta de los cortes de stock/valorización de Logística. Cada corte nuevo muestra qué insumos entran (altas), cuáles salen (bajas, ojo con las que están en paquetes) y qué precios cambiaron.</div>'
    + '<div class="fx-tw" style="max-height:none"><table class="fx-t"><thead><tr><th>Corte</th><th>Insumos</th><th>Altas</th><th>Bajas</th><th>Bajas en paquetes</th><th>Cambios de precio</th></tr></thead><tbody>'
    + C.map(c => '<tr><td><b>' + fmtF(c.fecha) + '</b>' + (c.fecha === M.corte_vigente ? ' <span class="fx-pill" style="background:#ccfbf1;color:#115e59">vigente</span>' : '') + '</td><td>' + c.n.toLocaleString('es-CL') + '</td><td>' + c.altas + '</td><td>' + c.bajas + '</td><td>' + (c.bajas_en_paquetes ? '<b style="color:#b91c1c">' + c.bajas_en_paquetes + '</b>' : 0) + '</td><td>' + c.cambios_precio + '</td></tr>').join('')
    + '</tbody></table></div>'
    + '<div class="fx-row" style="margin-top:12px"><label class="fx-btn" style="cursor:pointer">📥 Cargar corte nuevo (Excel de Logística)<input type="file" accept=".xlsx,.xls,.xlsm,.csv" style="display:none" onchange="FX.leer(this.files[0])"></label>'
    + '<span class="fx-d">Se reconocen solas las columnas de código, descripción, bodega, unidad, familia, stock y precio.</span></div></div>';
  if(corteNuevo){
    const cn = corteNuevo, enPaq = cn.bajas.filter(r => USO[r.c]);
    const lista = (t, L, fn) => '<details' + (L.length && L.length < 60 ? ' open' : '') + '><summary style="cursor:pointer;font-weight:700;margin:8px 0">' + t + ' (' + L.length + ')</summary><div class="fx-tw" style="max-height:300px"><table class="fx-t"><tbody>' + L.slice(0, 400).map(fn).join('') + '</tbody></table></div></details>';
    h += '<div class="fx-card"><h3>Corte cargado: ' + esc(cn.archivo) + '</h3><div class="fx-d">' + cn.rows.length.toLocaleString('es-CL') + ' insumos · <b>' + cn.altas.length + '</b> altas · <b>' + cn.bajas.length + '</b> bajas (<b style="color:#b91c1c">' + enPaq.length + ' están en paquetes</b>) · <b>' + cn.precio.length + '</b> cambios de precio</div>'
      + '<div class="fx-row" style="margin:10px 0"><label class="fx-d">Fecha del corte <input type="date" class="fx-sel" value="' + cn.fecha + '" onchange="FX.fecha(this.value)"></label>'
      + '<button class="fx-btn" onclick="FX.usar()">✓ Usar este corte en mi vista</button><button class="fx-btn sec" onclick="FX.expCorte()">⬇ Descargar corte normalizado (para integrarlo como oficial)</button><button class="fx-btn sec" onclick="FX.descartar()">Descartar</button></div>'
      + lista('⚠ Bajas que están en paquetes', enPaq, r => '<tr><td><b>' + esc(r.c) + '</b></td><td>' + esc(r.g) + '</td><td>' + USO[r.c].map(([id]) => KBY[id] ? esc(KBY[id].nombre) : id).join(' · ') + '</td></tr>')
      + lista('Altas (insumos nuevos)', cn.altas, r => '<tr><td><b>' + esc(r.c) + '</b></td><td>' + esc(r.g) + '</td><td><small>' + esc(r.b.join(' · ')) + '</small></td></tr>')
      + lista('Bajas (todas)', cn.bajas, r => '<tr><td><b>' + esc(r.c) + '</b></td><td>' + esc(r.g) + '</td></tr>')
      + lista('Cambios de precio', cn.precio, r => { const o = M.insumos.find(x => x.c === r.c); return '<tr><td><b>' + esc(r.c) + '</b></td><td>' + esc(r.g) + '</td><td style="text-align:right">' + clp(o && o.pu) + ' → <b>' + clp(r.pu) + '</b></td></tr>'; })
      + '</div>';
  }
  vista.innerHTML = h;
}
function banner(){
  return corteLocal ? '<div class="fx-banner">📥 Estás viendo el corte <b>' + esc(corteLocal.archivo) + '</b> (' + fmtF(corteLocal.fecha) + ') cargado en este navegador, todavía no oficial. <button class="fx-btn sec" style="padding:5px 10px" onclick="FX.oficial()">Volver al corte oficial ' + fmtF(M.corte_vigente) + '</button></div>' : '';
}

// ── Excel ─────────────────────────────────────────────────────────────────────
function descargar(hojas, nombre){
  if(!window.XLSX){ alert('Falta la librería de Excel.'); return; }
  const wb = XLSX.utils.book_new();
  hojas.forEach(([n, aoa, anchos]) => { const ws = XLSX.utils.aoa_to_sheet(aoa); ws['!cols'] = (anchos || []).map(w => ({wch: w}));
    const r = XLSX.utils.decode_range(ws['!ref']); for(let c = r.s.c; c <= r.e.c; c++){ const a = ws[XLSX.utils.encode_cell({r: 0, c})];
      if(a) a.s = {font: {bold: true, color: {rgb: 'FFFFFF'}}, fill: {fgColor: {rgb: '1D2D5B'}}, alignment: {wrapText: true, vertical: 'center'}}; }
    ws['!autofilter'] = {ref: ws['!ref']}; XLSX.utils.book_append_sheet(wb, ws, n.slice(0, 31)); });
  XLSX.writeFile(wb, nombre);
}

// ── API para los botones ──────────────────────────────────────────────────────
window.FX = {
  modo: setModo,
  fi: (k, v) => { fI[k] = v; fI.lim = 150; vInsumos(); },
  precio: v => { verPrecio = v; lsSet(LS_PRECIO, v); pintarRes(); },
  abrir: c => { fI.abierto = fI.abierto === c ? null : c; pintarRes(); },
  mas: () => { fI.lim += 300; pintarRes(); },
  expInsumos,
  irKit: id => { fA.kit = id; setModo('actualizar'); },
  fa: f => { fA.filtro = f; pintarListaKits(); vActualizar(); },
  kit: id => { fA.kit = id; pintarListaKits(); pintarEditor(); },
  por: v => { P.por = v; guardarP(); },
  cant: (c, v, orig) => { const x = pk(); const n = Math.max(0, parseInt(v, 10) || 0); x.items[c] = x.items[c] || {};
    if(n === 0){ x.items[c].quitar = true; delete x.items[c].q; } else if(n === orig) delete x.items[c].q; else x.items[c].q = n; refrescar(); },
  quitar: c => { const x = pk(); x.items[c] = x.items[c] || {}; x.items[c].quitar = !x.items[c].quitar; refrescar(); },
  com: (c, v) => { const x = pk(); x.items[c] = x.items[c] || {}; x.items[c].com = v; guardarP(); },
  agregar: c => { const r = INS.find(x => x.c === c); const x = pk(); if(!x.nuevos.some(n => n.c === c)) x.nuevos.push({c, g: r ? r.g : '', q: 1, com: ''}); refrescar(); },
  nq: (i, v) => { pk().nuevos[i].q = Math.max(1, parseInt(v, 10) || 1); guardarP(); },
  nc: (i, v) => { pk().nuevos[i].com = v; guardarP(); },
  nx: i => { pk().nuevos.splice(i, 1); refrescar(); },
  rev: () => { const x = pk(); x.rev = !x.rev; x.por = P.por; x.fecha = hoy(); if(x.rev && !P.por) setTimeout(() => alert('Anota tu nombre en «Revisado por» (arriba) para que quede registrado.'), 50); refrescar(); },
  reset: () => { if(confirm('¿Deshacer todos los cambios de este paquete?')){ delete P.kits[fA.kit]; refrescar(); } },
  expProp,
  respaldo: () => { const b = new Blob([JSON.stringify(P, null, 1)], {type: 'application/json'}); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'Respaldo propuesta paquetes – ' + fmtF(hoy()) + '.json'; a.click(); },
  cargarResp: inp => { const f = inp.files[0]; if(!f) return; const rd = new FileReader(); rd.onload = e => { try { const R = JSON.parse(e.target.result);
      const n = Object.keys(R.kits || {}).length; if(!confirm('El respaldo trae ' + n + ' paquetes con trabajo. Se SUMARÁ a lo que hay en este navegador (si un paquete está en ambos, queda el del respaldo). ¿Continuar?')) return;
      Object.assign(P.kits, R.kits || {}); if(!P.por && R.por) P.por = R.por; guardarP(); vActualizar(); } catch(err){ alert('Respaldo no válido: ' + err.message); } }; rd.readAsText(f); },
  leer: f => f && leerCorte(f),
  fecha: v => { if(corteNuevo) corteNuevo.fecha = v; },
  usar: () => { corteLocal = {fecha: corteNuevo.fecha, archivo: corteNuevo.archivo, rows: corteNuevo.rows}; if(!lsSet(LS_CORTE, corteLocal)) return; construir(); corteNuevo = null; pintarBarra(); vCortes(); },
  descartar: () => { corteNuevo = null; vCortes(); },
  oficial: () => { corteLocal = null; try { localStorage.removeItem(LS_CORTE); } catch(e){} construir(); pintarBarra(); setModo(modo); },
  expCorte: () => { const cn = corteNuevo; descargar([['Corte', [['Código','Descripción','Bodega','Unidad','Familia','Stock','Precio unitario']].concat(cn.rows.map(r => [r.c, r.g, r.b.join(' · '), r.cl, r.ff, r.st, r.pu])), [14,60,30,12,30,10,14]]],
      'corte_logistica_' + cn.fecha + '.xlsx'); },
};
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar); else montar();
})();
