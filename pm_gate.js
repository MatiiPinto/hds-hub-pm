// ════════════════════════════════════════════════════════════════════════════
// pm_gate.js — Puerta de acceso para cada plataforma del HUB Puesta en Marcha.
// Lo inyecta deploy_web_pm.py al inicio del <head> de cada plataforma publicada
// (justo después de pm_config.js). Si no hay sesión vigente → vuelve al index
// (con ?next= para retomar tras el login). Si hay sesión → registra el acceso.
// ════════════════════════════════════════════════════════════════════════════
(function(){
  var here = location.pathname.split('/').pop() || 'index.html';
  var s = null;
  try { s = pmSession(); } catch(e){}
  if (!s){
    location.replace('index.html?next=' + encodeURIComponent(here + location.search));
    return;
  }
  // ¿Usuario de prueba que sólo puede abrir algunas plataformas? (SOLO)
  var solo = (typeof pmSoloDestino === 'function') ? pmSoloDestino(s.u) : null;
  if (solo && solo.indexOf(here) === -1){ location.replace(solo[0]); return; }
  // La sesión caduca con la página abierta: se revisa cada 20 s y se vuelve al ingreso
  setInterval(function(){ try{ if (!pmSession()) location.replace('index.html'); }catch(e){} }, 20000);
  // ¿Plataforma restringida a ciertos usuarios?
  var permitidos = ((window.PM_CONFIG && window.PM_CONFIG.RESTRINGIDAS) || {})[here];
  if (permitidos && permitidos.indexOf(s.u) === -1){
    try { pmLog('denegado', here); } catch(e){}
    alert('Esta plataforma está restringida y tu usuario no tiene acceso.\n\n'
        + 'Si necesitas entrar, escríbele a Matías Pinto (mpinto@hsalvador.cl).');
    location.replace('index.html');
    return;
  }
  // Registrar el acceso a esta plataforma cuando el DOM esté listo
  var log = function(){ try { pmLog('abre', here); } catch(e){} };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', log);
  else log();
})();
