// ════════════════════════════════════════════════════════════════════════════
// pm_config.js — Configuración del HUB Puesta en Marcha (acceso controlado)
//
// USUARIOS: la clave se guarda como SHA-256 de "usuario:clave" (nunca en claro).
// Para generar el hash de un usuario nuevo: abrí la consola del navegador en el
// index del HUB-PM y ejecutá  pmHash('usuario','clave')  — copiá el resultado acá.
//
// LOG_URL: URL /exec del Apps Script desplegado como Web App (ver _setup/Code.gs
// e instructivo). Mientras esté vacío, el HUB funciona igual pero sin registro.
//
// ⚠ LÍMITE HONESTO: GitHub Pages es un sitio estático. Este control de acceso
// disuade el acceso casual y registra quién entra, pero NO es seguridad de
// servidor: los archivos del repo siguen siendo descargables por URL directa.
// Por eso acá NUNCA se publican datos sensibles (RUT, correos, etc.).
// ════════════════════════════════════════════════════════════════════════════
window.PM_CONFIG = {
  LOG_URL: '', /*__PM_LOG_URL__*/
  SESSION_HOURS: 12,
  USERS: {
    // usuario : sha256("usuario:clave")
    'mpinto':   '3d334297c9a7e9d74f95bfe5e20ce10ecd100258601cad050a303233e52a6c96',
    'invitado': '94879c776edff53fcf5be8f23c281a9b8e50377f2e4720c989ce1c69560c59fa'
  }
};

// ── Sesión (localStorage, expira a las SESSION_HOURS) ───────────────────────
function pmSession(){
  try{
    var s = JSON.parse(localStorage.getItem('pm_session') || 'null');
    if (s && s.u && s.exp && Date.now() < s.exp) return s;
  }catch(e){}
  return null;
}
function pmSetSession(u){
  localStorage.setItem('pm_session', JSON.stringify({
    u: u, exp: Date.now() + window.PM_CONFIG.SESSION_HOURS * 3600 * 1000
  }));
}
function pmLogout(){
  var s = pmSession();
  if (s) pmLog('logout', 'index');
  localStorage.removeItem('pm_session');
  location.href = 'index.html';
}

// ── Hash SHA-256 "usuario:clave" (crypto.subtle) ────────────────────────────
async function pmHash(user, pass){
  var data = new TextEncoder().encode(user + ':' + pass);
  var buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf)).map(function(b){
    return b.toString(16).padStart(2, '0');
  }).join('');
}

// ── Registro de acceso: usuario / evento / plataforma / IP / navegador ──────
// La IP se obtiene una vez por sesión (api.ipify.org) y se cachea.
// El POST va con mode:no-cors + keepalive para no bloquear la navegación.
function pmLog(evento, plataforma){
  var cfg = window.PM_CONFIG;
  if (!cfg.LOG_URL) return;
  var s = pmSession();
  var send = function(ip){
    var body = new URLSearchParams({
      u: (s && s.u) || 'anon',
      evento: evento || '',
      plataforma: plataforma || '',
      ip: ip || '',
      ua: navigator.userAgent
    });
    try{
      fetch(cfg.LOG_URL, { method:'POST', mode:'no-cors', keepalive:true,
        headers:{'Content-Type':'application/x-www-form-urlencoded'}, body: body.toString() });
    }catch(e){}
  };
  var cached = sessionStorage.getItem('pm_ip');
  if (cached){ send(cached); return; }
  fetch('https://api.ipify.org?format=json').then(function(r){ return r.json(); })
    .then(function(j){ sessionStorage.setItem('pm_ip', j.ip || ''); send(j.ip); })
    .catch(function(){ send(''); });
}
