// ════════════════════════════════════════════════════════════════════════════
// Code_bitacora.gs — Bitácora y Huddle de Puesta en Marcha · HUB-PM HDS
//
// Guarda los CAMBIOS que el equipo hace sobre los pendientes desde la pestaña
// 🧭 Huddle de 14.Bitacora (marcar resuelto, anotar avance, cambiar responsable
// o plazo, sumar un pendiente, marcar crítico o revisado). Es un registro de
// EVENTOS, solo se agrega (nunca se edita ni se borra una fila): cada navegador
// trae la lista y aplica los que le faltan sobre la semilla publicada.
//
// Además mantiene la hoja PENDIENTES con el último estado conocido de cada
// pendiente tocado, para quien prefiera mirarlo en la planilla.
//
// INSTALACIÓN (una vez, el mismo ritual de PAUTAS):
//   1. Crear una Google Sheet nueva (ej. "BITACORA HUDDLE PM").
//   2. Extensiones → Apps Script → pegar este archivo completo.
//   3. Implementar → Nueva implementación → "Aplicación web":
//        · Ejecutar como: Yo   · Acceso: Cualquier persona
//   4. Copiar la URL /exec y pegarla en pm_config.js → BITACORA_URL.
//   5. (local 🔴) en la pestaña Huddle, «⚙» (el chip de sincronización) → pegar
//      la misma URL: Matías ve y suma lo mismo que el equipo.
//
// API:
//   POST k, ts, u, id, tipo, d(JSON)  → agrega el evento (ignora k repetidas), "ok"
//   GET  ?list=1                      → JSON [ {k,ts,u,id,tipo,d}, … ]
//   GET  (sin params)                 → "Bitácora PM activa" (prueba)
// ════════════════════════════════════════════════════════════════════════════
var TZ = 'America/Santiago';
var HOJA = 'EVENTOS';
var COLS = ['K', 'TS', 'Fecha', 'Hora', 'Usuario', 'Id', 'Tipo', 'Datos'];
var HOJA_P = 'PENDIENTES';
var COLS_P = ['Id', 'Titulo', 'Estado', 'Responsable', 'Plazo', 'Ultima novedad', 'Fecha', 'Por'];
var TIPOS = { nuevo: 1, nota: 1, estado: 1, resolver: 1, reabrir: 1, campo: 1, campos: 1, revisado: 1 };

function _hoja(nombre, cols) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(nombre) || ss.insertSheet(nombre);
  if (sh.getLastRow() === 0) { sh.appendRow(cols); sh.setFrozenRows(1); }
  return sh;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var p = (e && e.parameter) || {};
    var k = String(p.k || '').slice(0, 40), id = String(p.id || '').slice(0, 20), tipo = String(p.tipo || '');
    if (!k || !id || !TIPOS[tipo]) return ContentService.createTextOutput('error: evento incompleto');
    var sh = _hoja(HOJA, COLS);
    var n = sh.getLastRow();
    if (n > 1) {
      var ks = sh.getRange(2, 1, n - 1, 1).getValues();
      for (var i = ks.length - 1; i >= 0 && i >= ks.length - 500; i--) {
        if (String(ks[i][0]) === k) return ContentService.createTextOutput('ok');
      }
    }
    var now = new Date();
    var d = String(p.d || '{}').slice(0, 45000);
    sh.appendRow([k, "'" + String(p.ts || now.toISOString()),   // ' = texto: Sheets no lo convierte en fecha Utilities.formatDate(now, TZ, 'yyyy-MM-dd'),
                  Utilities.formatDate(now, TZ, 'HH:mm:ss'), String(p.u || '').slice(0, 30), id, tipo, d]);
    _resumen(id, tipo, d, String(p.u || ''), now);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

// hoja PENDIENTES: una fila por pendiente tocado, con su último estado conocido
function _resumen(id, tipo, dTxt, u, now) {
  var d = {}; try { d = JSON.parse(dTxt); } catch (x) {}
  var sh = _hoja(HOJA_P, COLS_P);
  var data = sh.getDataRange().getValues(), fila = 0;
  for (var i = 1; i < data.length; i++) if (String(data[i][0]) === id) { fila = i + 1; break; }
  var v = fila ? data[fila - 1].slice() : [id, '', '', '', '', '', '', ''];
  if (tipo === 'nuevo' && d.item) { v[1] = d.item.titulo || ''; v[2] = d.item.estado || 'Abierto';
    v[3] = d.item.responsable || ''; v[4] = d.item.plazo || ''; v[5] = 'Sumado en huddle'; }
  if (tipo === 'nota') v[5] = d.texto || '';
  if (tipo === 'estado') { v[2] = d.estado || ''; v[5] = 'Estado → ' + (d.estado || ''); }
  if (tipo === 'resolver') { v[2] = 'Cerrado'; v[5] = '✅ ' + (d.texto || 'Resuelto'); }
  if (tipo === 'reabrir') { v[2] = d.estado || 'En curso'; v[5] = '↩ ' + (d.texto || 'Reabierto'); }
  if (tipo === 'campo' && d.k === 'responsable') v[3] = d.v || '';
  if (tipo === 'campo' && d.k === 'plazo') v[4] = d.v || '';
  if (tipo === 'campos' && d.v) { if (d.v.titulo) v[1] = d.v.titulo; if (d.v.estado) v[2] = d.v.estado;
    if (d.v.responsable !== undefined) v[3] = d.v.responsable; if (d.v.plazo !== undefined) v[4] = d.v.plazo; }
  if (tipo === 'revisado') v[5] = v[5] || 'Revisado en huddle';
  v[4] = v[4] ? "'" + String(v[4]).replace(/^'/, '') : '';
  v[6] = Utilities.formatDate(now, TZ, 'yyyy-MM-dd HH:mm'); v[7] = u;
  if (fila) sh.getRange(fila, 1, 1, COLS_P.length).setValues([v]); else sh.appendRow(v);
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (!p.list) return ContentService.createTextOutput('Bitácora PM activa');
  var sh = _hoja(HOJA, COLS), n = sh.getLastRow(), out = [];
  if (n > 1) {
    var data = sh.getRange(2, 1, n - 1, COLS.length).getValues();
    for (var i = 0; i < data.length; i++) {
      out.push({ k: String(data[i][0]), ts: String(data[i][1]), u: String(data[i][4]), id: String(data[i][5]),
                 tipo: String(data[i][6]), d: String(data[i][7] || '{}') });
    }
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
