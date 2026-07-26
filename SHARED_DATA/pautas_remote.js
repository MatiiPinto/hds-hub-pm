// SHARED_DATA · pautas_remote.js — backend CENTRAL de asignación de pautas
// (Apps Script "PAUTAS HDS", la misma hoja que usa el 🟡 HUB-PM).
// La hoja central es la FUENTE DE VERDAD de las asignaciones manuales:
// Atlas y Autorización Sanitaria (local y web) la leen al abrir y le escriben
// cada asignación. En el 🟡, window.PM_CONFIG.PAUTAS_URL tiene precedencia.
window.PAUTAS_CENTRAL = {
  url: 'https://script.google.com/macros/s/AKfycby-FekqC8Lo1FimauntBJKmloeUrCD5NroP63LbwIdM0LxRVqRwf1JXuHVNqyjlrhsX/exec',
  por: 'mpinto'   // identidad al asignar desde el entorno local (🔴)
};
