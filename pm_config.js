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
  LOG_URL: 'https://script.google.com/macros/s/AKfycbx-v6nDDB2YLNszxh3qg5eWJcxtKrBTlzKK1f91OQwV1NKAm6zKBQ6J_fBJvL9jrEA_/exec', /*__PM_LOG_URL__*/
  // Armador de Pautas (etapa 2): backend Apps Script propio (ver _setup/Code_pautas.gs)
  PAUTAS_URL: 'https://script.google.com/macros/s/AKfycby-FekqC8Lo1FimauntBJKmloeUrCD5NroP63LbwIdM0LxRVqRwf1JXuHVNqyjlrhsX/exec', /*__PM_PAUTAS_URL__*/
  // usuarios con rol asignador (pueden ASIGNAR pautas AS a recintos desde la
  // plataforma de Autorización Sanitaria del HUB-PM; el resto solo consulta)
  ASIGNADORES: ['mpinto', 'mcanales', 'csepulveda'],
  // Autoguardado de Navegación: backend Apps Script propio (ver _setup/Code_nav.gs).
  // Guarda el estado en un JSON de Drive — el trabajo deja de vivir solo en el
  // navegador de quien edita. Vacío = sin autoguardado (todo sigue funcionando).
  NAV_URL: '', /*__PM_NAV_URL__*/
  // usuarios con rol EDITOR de Navegación (dibujan circulación peatonal y
  // vertical, marcadores, puntos de flujo y calibración desde el HUB-PM; el
  // resto del equipo solo consulta). Su trabajo se guarda en el navegador de
  // cada uno: para consolidarlo hay que usar 💾 Respaldar y enviar el JSON.
  EDITORES_NAV: ['mpinto', 'rvargas'],
  // Atlas (AtlasWeb del 🟡): backend Apps Script propio (ver _setup/Code_atlas.gs).
  // Recibe el DELTA de quien edita y lo deja en Drive. Vacío = sin envío
  // automático; el botón 📤 igual descarga el archivo para mandarlo a mano.
  ATLAS_URL: '', /*__PM_ATLAS_URL__*/
  // usuarios con rol EDITOR ACOTADO del Atlas: pueden SOLO asignar funcionarios
  // a los recintos y corregir el nombre de un recinto. Nada de dibujar, mover,
  // borrar ni exportar. Su trabajo se guarda en una capa propia de SU navegador
  // (prefijo pm_, el snapshot publicado no se toca) y se consolida mandando el
  // delta con 📤 Enviar mis cambios.
  EDITORES_ATLAS: ['mpinto', 'crivera'],
  // ── ACCESOS TEMPORALES ────────────────────────────────────────────────────
  // usuario → ÚLTIMO día en que puede entrar (inclusive, hora de Chile).
  // Pasada esa fecha el login se rechaza y las sesiones ya abiertas dejan de
  // valer, sin que nadie tenga que acordarse de quitar nada. Sin fecha acá =
  // acceso permanente. Para cortar antes: poner una fecha pasada, o borrar
  // al usuario de USERS.
  VENCEN: {
    'crivera': '2026-08-20'   // apoyo puntual en una reunión (20-ago-2026)
  },
  // ── PLATAFORMAS RESTRINGIDAS ──────────────────────────────────────────────
  // archivo → usuarios que pueden abrirlo. Lo que NO figure acá lo ve todo el
  // padrón. pm_gate.js lo verifica al abrir y el index oculta la tarjeta.
  // ⚠ Es control de INTERFAZ, no seguridad de servidor: en un repo público el
  // archivo sigue siendo descargable por URL directa para quien conozca la ruta.
  RESTRINGIDAS: {
    // Protección Radiológica: solo la OPR y quienes la acompañan
    '37.ProteccionRadiologica.html': ['mpinto', 'csepulveda', 'mcanales', 'adavis']
  },
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
    'mpinto':     '405ce04bf68d5cf8cb2e74ae353d946916bd9676253c68b4ab2894bb850456b3',
    // Renata Vargas · ingeniera biomédica (apoyo Puesta en Marcha) — editora de Navegación
    'rvargas':    'e05cf96e26effda2598f05acb46a87a82bcc631a716a6b8eb77b35b7a069a6a8',
    // Monserrat Rivera · biomédica (apoyo Puesta en Marcha) — mrivera@hsalvador.cl
    'mrivera':    '330dc6785e48327d41569c8e057c0c2f56d1839800d2967890f9f35cd51551f4',
    // Costanza Poch Trabucco · profesional de la Unidad de Puesta en Marcha
    'cpoch':      '31f36f0a477f2876b575feed828316551646baec80e4150d1558878566733de1',
    // Carolina Rivera · arquitecta — editora acotada del Atlas (asignar
    // funcionarios a recintos y corregir nombres de recinto)
    'crivera':    '76f87477cabc82337fed39924accb34d3934d33525e497ba3103ebd6ab3c573a',
    // Isabel Rojas Correa · Jefa de la Unidad de Capacitación
    'irojas':     '01abb8cc8c03fa388bfa0ae87768275cf2edfe49fb9a219823288cd2cbd7d339',
    // Francisca Cid Cabrera · Jefa de Proyecto NHDS — Servicio de Salud
    // Metropolitano Oriente (contraparte SSMO, externa al HDS)
    'fcid':       '1340e5ed85a653630ad8c28347e40a92759d5d4108762eaa7dbb5eddc2858dce',
    // Karen González · Ingeniera Biomédica del proyecto — SSMO (externa al HDS)
    'kgonzalez':  'd51f341099fadc6a8b4f83e85c147da279f2f56d267bb5593520299d1a2053e1',
    // Pablo Silva Pereira · Encargado EMMC de la Asesoría a la Inspección Fiscal
    // (AIF · MOP) — psilva@cydingenieria.cl. Contraparte de FISCALIZACIÓN,
    // externa al HDS y al SSMO.
    'psilva':     'fffc0cb70c2ea2847b29f4f3f8febb34a6f813d99b87dcbdc5fc992f7ca19fac',
    // Allyson Davis Zubiri · Tecnóloga Médica, Oficial de Protección
    // Radiológica (OPR) del HDS — asume el 04-09-2026
    'adavis':     '5e6f457b13191210fe60149d02ff6a2a0581dad0eea972f0fb0c2f42e7597198',
    // Constanza Ortiz · ingeniera de la Asesoría a la Inspección Fiscal
    // (AIF · MOP) — constanza.ortiz@cydingenieria.com. Contraparte de
    // FISCALIZACIÓN, externa al HDS y al SSMO. Solo consulta.
    'cortiz':     '04f4ea706c4dae3e865e5eb3d0d699db20c7df21a3e91d4ea0fc154820f8013f'
  }
};

// ── ¿El acceso de este usuario sigue vigente? ───────────────────────────────
// Se compara en formato ISO (yyyy-mm-dd), que ordena bien como texto, y con la
// fecha de Chile: si alguien tiene el equipo en otro huso, la vigencia no cambia.
function pmVigente(u){
  try{
    var hasta = (window.PM_CONFIG.VENCEN || {})[u];
    if (!hasta) return true;                       // sin fecha = permanente
    var hoy = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Santiago' });
    return hoy <= hasta;
  }catch(e){ return true; }
}

// ── Sesión (localStorage, expira a las SESSION_HOURS) ───────────────────────
// La vigencia se chequea ACÁ y no en cada pantalla: por este punto pasan el
// login, la puerta de cada plataforma y los roles (editor de Atlas/Navegación),
// así que una fecha vencida los apaga todos a la vez.
function pmSession(){
  try{
    var s = JSON.parse(localStorage.getItem('pm_session') || 'null');
    if (s && s.u && s.exp && Date.now() < s.exp && pmVigente(s.u)) return s;
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
