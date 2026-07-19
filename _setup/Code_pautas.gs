// ════════════════════════════════════════════════════════════════════════════
// Code_pautas.gs — Armador de Pautas · HUB Puesta en Marcha HDS (etapa 2)
//
// Guarda y lista las PAUTAS ARMADAS por el equipo PM: nivel (recinto/servicio/
// HDS), referencia, ámbitos del Anexo 1 seleccionados, responsable, prestaciones
// asociadas y estado (armada → ensayo → oficial → aplicada).
//
// INSTALACIÓN (una vez, mismo ritual que el log):
//   1. Crear una Google Sheet nueva (ej. "PAUTAS HUB-PM HDS").
//   2. Extensiones → Apps Script → pegar este archivo completo.
//   3. Implementar → Nueva implementación → "Aplicación web":
//        · Ejecutar como: Yo   · Acceso: Cualquier persona
//   4. Copiar la URL /exec y pegarla en pm_config.js → PAUTAS_URL.
//
// API:
//   POST accion=guardar  → agrega fila, responde "ok:<id>"
//   POST accion=estado   → cambia estado de una pauta (id, estado)
//   GET  ?list=1         → JSON array con todas las pautas armadas
//   GET  (sin params)    → "Pautas HUB-PM activas" (prueba)
//
// Roadmap 2.b (no incluido aún): print del recinto y export PDF a Drive al
// aplicar la pauta (DriveApp + Utilities.newBlob(html).getAs PDF).
// ════════════════════════════════════════════════════════════════════════════
var TZ = 'America/Santiago';
var HOJA = 'PAUTAS';
var COLS = ['ID', 'Fecha', 'Hora', 'Estado', 'Nivel', 'RefCodigo', 'RefNombre',
            'Servicio', 'Ambitos', 'NumAmbitos', 'Responsable', 'ResponsableCargo',
            'Prestaciones', 'Notas', 'Armador'];

function _sheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(HOJA) || ss.insertSheet(HOJA);
  if (sh.getLastRow() === 0) { sh.appendRow(COLS); sh.setFrozenRows(1); }
  return sh;
}

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var sh = _sheet();
    if (p.accion === 'estado') {
      var data = sh.getDataRange().getValues();
      for (var i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(p.id)) {
          sh.getRange(i + 1, 4).setValue(String(p.estado || '').slice(0, 20));
          return ContentService.createTextOutput('ok:' + p.id);
        }
      }
      return ContentService.createTextOutput('error: id no encontrado');
    }
    // accion=guardar (default)
    var now = new Date();
    var id = 'PA-' + Utilities.formatDate(now, TZ, 'yyMMdd-HHmmss');
    sh.appendRow([
      id,
      Utilities.formatDate(now, TZ, 'yyyy-MM-dd'),
      Utilities.formatDate(now, TZ, 'HH:mm:ss'),
      'armada',
      String(p.nivel || '').slice(0, 15),
      String(p.refCodigo || '').slice(0, 40),
      String(p.refNombre || '').slice(0, 120),
      String(p.servicio || '').slice(0, 120),
      String(p.ambitos || '').slice(0, 45000),
      String(p.numAmbitos || '').slice(0, 6),
      String(p.responsable || '').slice(0, 120),
      String(p.responsableCargo || '').slice(0, 120),
      String(p.prestaciones || '').slice(0, 45000),
      String(p.notas || '').slice(0, 2000),
      String(p.armador || '').slice(0, 40)
    ]);
    return ContentService.createTextOutput('ok:' + id);
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  }
}

function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    if (p.list) {
      var data = _sheet().getDataRange().getValues();
      var out = [];
      for (var i = 1; i < data.length; i++) {
        var row = {};
        for (var j = 0; j < COLS.length; j++) row[COLS[j]] = data[i][j];
        out.push(row);
      }
      return ContentService.createTextOutput(JSON.stringify(out))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    return ContentService.createTextOutput('Pautas HUB-PM activas');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  }
}
