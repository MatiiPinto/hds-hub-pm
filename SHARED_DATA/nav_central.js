// SHARED_DATA/nav_central.js — backend de AUTOGUARDADO de Navegación
// (Apps Script "NAV HDS" → JSON en Drive; ver _setup/Code_nav.gs).
//
// Es la fuente de verdad del trabajo de circulación: la plataforma guarda sola
// cada cambio y al abrir carga el estado central si es más nuevo que el local.
// Modelo de un solo editor a la vez (mpinto / rvargas).
// En el 🟡 manda window.PM_CONFIG.NAV_URL; acá va la URL para el entorno local.
// Mientras esté vacía, Navegación funciona igual pero sin autoguardado central.
window.NAV_CENTRAL = {
  url: '',          // ← pegar la URL /exec del Apps Script NAV HDS
  por: 'mpinto'
};
