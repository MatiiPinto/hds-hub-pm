/**
 * Code_atlas.gs — recibe los cambios que el rol acotado (EDITORES_ATLAS) hace
 * sobre el Atlas del HUB-PM y los deja en una carpeta de Drive.
 *
 * OPCIONAL: si PM_CONFIG.ATLAS_URL está vacío, el botón "📤 Enviar mis cambios"
 * igual descarga el archivo para mandarlo por correo. Esto solo evita ese paso
 * manual y deja los envíos ordenados y fechados.
 *
 * DESPLIEGUE (una vez):
 *   1. script.google.com → Nuevo proyecto → pegar este archivo
 *   2. Implementar → Nueva implementación → Aplicación web
 *        Ejecutar como: Yo   ·   Acceso: Cualquier persona
 *   3. Copiar la URL /exec en PM_CONFIG.ATLAS_URL de pm_config.js y publicar
 *
 * Lo que llega es un DELTA (solo lo que esa persona cambió), no el estado
 * completo: se incorpora al Atlas maestro con
 *   python3 _DEV/aplicar_delta_atlas.py <delta.json> <respaldo_atlas.json>
 */
var CARPETA = 'Atlas HDS · cambios desde el HUB-PM';

function _carpetaAtlas() {
  var it = DriveApp.getFoldersByName(CARPETA);
  return it.hasNext() ? it.next() : DriveApp.createFolder(CARPETA);
}

function _resp(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var u     = (e.parameter.u || 'desconocido').replace(/[^\w.-]/g, '');
    var delta = e.parameter.delta || '';
    if (!delta) return _resp({ ok: false, error: 'sin delta' });

    // Validación mínima: que sea JSON y del formato esperado.
    var d = JSON.parse(delta);
    if (d._formato !== 'atlas-delta-pm') return _resp({ ok: false, error: 'formato inesperado' });

    var nN = Object.keys(d.nombres || {}).length;
    var nD = Object.keys(d.dots || {}).length;

    var sello  = Utilities.formatDate(new Date(), 'America/Santiago', 'yyyy-MM-dd_HH-mm-ss');
    var nombre = 'Atlas_cambios_' + u + '_' + sello + '.json';
    _carpetaAtlas().createFile(nombre, delta, MimeType.PLAIN_TEXT);

    // Bitácora en una hoja, para ver de un vistazo quién mandó qué y cuándo.
    try {
      var ss = SpreadsheetApp.openById(_hojaId());
      var sh = ss.getSheetByName('ENVIOS') || ss.insertSheet('ENVIOS');
      if (sh.getLastRow() === 0) sh.appendRow(['Fecha', 'Usuario', 'Nombres', 'Recintos', 'Archivo']);
      sh.appendRow([new Date(), u, nN, nD, nombre]);
    } catch (err) { /* la hoja es un extra: si falla, el archivo ya está guardado */ }

    return _resp({ ok: true, archivo: nombre, nombres: nN, recintos: nD });
  } catch (err) {
    return _resp({ ok: false, error: String(err) });
  }
}

/** Listado de los últimos envíos: GET ?list=1 */
function doGet(e) {
  if (!(e.parameter && e.parameter.list)) return _resp({ ok: true, servicio: 'Atlas HDS · cambios PM' });
  var out = [], it = _carpetaAtlas().getFiles();
  while (it.hasNext()) {
    var f = it.next();
    out.push({ nombre: f.getName(), fecha: f.getDateCreated(), kb: Math.round(f.getSize() / 1024) });
  }
  out.sort(function (a, b) { return a.fecha < b.fecha ? 1 : -1; });
  return _resp({ ok: true, envios: out.slice(0, 50) });
}

/** Hoja de bitácora: se crea la primera vez y se recuerda en las propiedades. */
function _hojaId() {
  var pr = PropertiesService.getScriptProperties(), id = pr.getProperty('HOJA_ID');
  if (id) return id;
  var ss = SpreadsheetApp.create('Atlas HDS · envíos desde el HUB-PM');
  pr.setProperty('HOJA_ID', ss.getId());
  return ss.getId();
}
