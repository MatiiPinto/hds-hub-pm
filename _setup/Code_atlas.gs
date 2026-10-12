/**
 * Code_atlas.gs — RECEPTOR CENTRAL de los cambios hechos en el Atlas del HUB-PM
 * (rol acotado EDITORES_ATLAS: DEA colocados desde el celular, personas asignadas,
 * nombres de recintos). v2 · 06-10-2026.
 *
 * Flujo:
 *   celular / iPad  ──📤 Enviar mis cambios──▶  POST (este script)  ──▶ carpeta de Drive
 *   Atlas maestro   ──☁ Traer del 🟡───────▶  GET ?pend=1&t=TOKEN  ──▶ incorpora y marca
 *                                              GET ?marcar=<id>&t=TOKEN (pasa a «importados»)
 *
 * La URL /exec queda publicada en pm_config.js (es pública), así que TODO lo que
 * lee envíos exige el TOKEN, que vive sólo en las propiedades del script y en el
 * navegador del Atlas maestro. Enviar no lo exige (es lo que hace el celular).
 *
 * DESPLIEGUE (una vez):
 *   1. script.google.com → Nuevo proyecto → pegar este archivo → Guardar.
 *   2. Ejecutar la función  configurar  (menú ▶). Autorizar con la cuenta del hospital.
 *      En «Registro de ejecución» aparece el TOKEN: copiarlo (se pide una sola vez en el Atlas).
 *   3. Implementar → Nueva implementación → Aplicación web
 *        Ejecutar como: Yo   ·   Quién tiene acceso: Cualquier persona
 *   4. Copiar la URL que termina en /exec y pasársela a Claude (va a PM_CONFIG.ATLAS_URL).
 * Para cambiar el código después: Implementar → Gestionar implementaciones → editar →
 * Versión: Nueva versión (así la URL no cambia).
 */
var CARPETA = 'Atlas HDS · cambios desde el HUB-PM';
var SUB_IMPORTADOS = 'importados';

function _carpetaAtlas() {
  var it = DriveApp.getFoldersByName(CARPETA);
  return it.hasNext() ? it.next() : DriveApp.createFolder(CARPETA);
}
function _carpetaImportados() {
  var raiz = _carpetaAtlas(), it = raiz.getFoldersByName(SUB_IMPORTADOS);
  return it.hasNext() ? it.next() : raiz.createFolder(SUB_IMPORTADOS);
}
function _resp(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function _token() { return PropertiesService.getScriptProperties().getProperty('TOKEN') || ''; }
function _autorizado(e) { var t = _token(); return !!t && e && e.parameter && e.parameter.t === t; }

/** Ejecutar UNA vez desde el editor: crea carpeta, hoja y TOKEN (lo muestra en el registro). */
function configurar() {
  var pr = PropertiesService.getScriptProperties();
  var t = pr.getProperty('TOKEN');
  if (!t) { t = Utilities.getUuid().replace(/-/g, '').slice(0, 20); pr.setProperty('TOKEN', t); }
  _carpetaImportados(); _hojaId();
  Logger.log('TOKEN del Atlas maestro: ' + t);
  Logger.log('Carpeta: ' + _carpetaAtlas().getUrl());
  return t;
}

function _cuenta(d) {
  var nP = 0, nDEA = 0, props = d.props || {};
  Object.keys(props).forEach(function (f) { (props[f] || []).forEach(function (it) { nP++; if (it.k === 'dea') nDEA++; }); });
  return { nombres: Object.keys(d.nombres || {}).length, recintos: Object.keys(d.dots || {}).length, propuestos: nP, dea: nDEA };
}

function doPost(e) {
  try {
    var u = String((e.parameter && e.parameter.u) || 'desconocido').replace(/[^\w.-]/g, '').slice(0, 40);
    var delta = (e.parameter && e.parameter.delta) || '';
    if (!delta) return _resp({ ok: false, error: 'sin delta' });
    if (delta.length > 5 * 1024 * 1024) return _resp({ ok: false, error: 'delta demasiado grande' });
    var d = JSON.parse(delta);
    if (d._formato !== 'atlas-delta-pm') return _resp({ ok: false, error: 'formato inesperado' });
    var c = _cuenta(d);
    if (!c.nombres && !c.recintos && !c.propuestos) return _resp({ ok: false, error: 'delta vacío' });
    var sello = Utilities.formatDate(new Date(), 'America/Santiago', 'yyyy-MM-dd_HH-mm-ss');
    var nombre = 'Atlas_cambios_' + u + '_' + sello + '.json';
    var f = _carpetaAtlas().createFile(nombre, delta, MimeType.PLAIN_TEXT);
    try {
      var sh = SpreadsheetApp.openById(_hojaId()).getSheetByName('ENVIOS');
      sh.appendRow([new Date(), u, c.nombres, c.recintos, c.propuestos, c.dea, nombre, 'pendiente']);
    } catch (err) { /* la hoja es un extra */ }
    return _resp({ ok: true, id: f.getId(), archivo: nombre, nombres: c.nombres, recintos: c.recintos, propuestos: c.propuestos, dea: c.dea });
  } catch (err) {
    return _resp({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.ping || !(p.pend || p.list || p.marcar || p.cuenta)) return _resp({ ok: true, servicio: 'Atlas HDS · receptor central', v: 2 });
  if (!_autorizado(e)) return _resp({ ok: false, error: 'token inválido' });
  var raiz = _carpetaAtlas();
  if (p.marcar) {                       // pasa un envío a «importados»
    try {
      var f = DriveApp.getFileById(p.marcar);
      _carpetaImportados().addFile(f); raiz.removeFile(f);
      try {
        var sh = SpreadsheetApp.openById(_hojaId()).getSheetByName('ENVIOS'), v = sh.getDataRange().getValues();
        for (var i = v.length - 1; i >= 1; i--) if (v[i][6] === f.getName()) { sh.getRange(i + 1, 8).setValue('importado ' + Utilities.formatDate(new Date(), 'America/Santiago', 'dd-MM-yyyy HH:mm')); break; }
      } catch (err) {}
      return _resp({ ok: true, marcado: f.getName() });
    } catch (err) { return _resp({ ok: false, error: String(err) }); }
  }
  var out = [], it = raiz.getFiles();
  while (it.hasNext()) {
    var f2 = it.next(), o = { id: f2.getId(), nombre: f2.getName(), fecha: f2.getDateCreated().toISOString(), kb: Math.round(f2.getSize() / 1024) };
    if (p.pend) { try { o.delta = JSON.parse(f2.getBlob().getDataAsString()); } catch (err) { o.error = 'json inválido'; } }
    out.push(o);
  }
  out.sort(function (a, b) { return a.fecha < b.fecha ? -1 : 1; });   // en orden de llegada
  if (p.cuenta) return _resp({ ok: true, pendientes: out.length });
  return _resp({ ok: true, envios: out.slice(0, 100) });
}

/** Hoja de bitácora: se crea la primera vez y se recuerda en las propiedades. */
function _hojaId() {
  var pr = PropertiesService.getScriptProperties(), id = pr.getProperty('HOJA_ID');
  if (id) return id;
  var ss = SpreadsheetApp.create('Atlas HDS · envíos desde el HUB-PM');
  var sh = ss.getSheets()[0]; sh.setName('ENVIOS');
  sh.appendRow(['Fecha', 'Usuario', 'Nombres', 'Recintos', 'Propuestos', 'DEA', 'Archivo', 'Estado']);
  pr.setProperty('HOJA_ID', ss.getId());
  return ss.getId();
}
