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
    // Equipo Puesta en Marcha (clave inicial: primeros 4 dígitos del RUT;
    // cada persona debe cambiarla por otra de 4 dígitos vía Matías)
    'lperez':     '8db82755fcf9a844add0114df36e3bb98234c54fc7f5a66682b2052ae630f8a2',
    'mcanales':   '11ad79546ae4a772534aadb718d5218ad47f689e9585f16e8cd54508850dcf1b',
    'faraya':     'a1d25346d1ea182cbd8613badf785628efedd8b0ceecde2c2fdc44a91009910f',
    'jpacheco':   '6592df481d205fb4334a462a7452b83589defa01f4eeccfb6917429a7395d060',
    'csepulveda': '78e0be6b452fc7d2b411c3f932739bab848ac2692ec0a2993750fbee86342d37',
    'mpinto':     '405ce04bf68d5cf8cb2e74ae353d946916bd9676253c68b4ab2894bb850456b3'
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
