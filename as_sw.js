// as_sw.js · GENERADO por _DEV/as_app/build_as_app.py · no editar
// Controla SOLO 50.AutorizacionSanitaria.html (scope de registro). Versión b170b164.
const V = 'asapp-b170b164';
const PRE = ['50.AutorizacionSanitaria.html', 'data/as_app/datos.b02b926f.js', 'as_app.webmanifest', 'assets/as_app/icono.svg'];
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => c.addAll(PRE)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys()
  .then(ks => Promise.all(ks.filter(k => k.startsWith('asapp-') && k !== V).map(k => caches.delete(k))))
  .then(() => self.clients.claim())));
const guarda = (req, r) => { if (r && r.ok) { const c = r.clone(); caches.open(V).then(x => x.put(req, c)); } return r; };
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;          // backend y CDN: directo a la red
  if (e.request.mode === 'navigate') {                                              // la app: red primero, caché sin señal
    e.respondWith(fetch(e.request).then(r => guarda('50.AutorizacionSanitaria.html', r))
      .catch(() => caches.match('50.AutorizacionSanitaria.html')));
    return;
  }
  if (/\/data\/as_app\//.test(u.pathname)) {                                       // datos con hash: caché primero
    e.respondWith(caches.match(e.request).then(m => m || fetch(e.request).then(r => guarda(e.request, r))));
    return;
  }
  if (/\/(data\/as_planos|assets|SHARED_DATA)\//.test(u.pathname)) {                // planos, ícono, Catymey: caché y se refresca
    e.respondWith(caches.match(e.request).then(m => {
      const red = fetch(e.request).then(r => guarda(e.request, r)).catch(() => m);
      return m || red;
    }));
  }
});
