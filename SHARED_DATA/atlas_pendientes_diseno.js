// SHARED_DATA/atlas_pendientes_diseno.js — pendientes de DISEÑO del Atlas como categoría de la pestaña Revisión
// (22-10-2026, pedido de Matías). Se edita a mano: un ítem por pendiente, con id estable (el ✓ del Atlas lo deja
// resuelto en nameState.disRev y no vuelve). piso + zona [x, y, ancho, alto] en px del plano = adónde lleva el clic;
// accion opcional abre una herramienta del Atlas ('estacOficial' = 📊 Oficial vs dibujado de estacionamientos).
window.ATLAS_PENDIENTES_DISENO = [
  {id: 'est-p2-faltan', grupo: 'Estacionamientos', piso: 'P-2', accion: 'estacOficial',
   titulo: 'Plazas oficiales de la PAPS sin dibujar',
   detalle: 'Al 05-10 eran 45 (31 de funcionarios y 14 de visitas): se ven punteadas en rojo y en Editar un clic las dibuja.'},
  {id: 'est-p2-sin-numero', grupo: 'Estacionamientos', piso: 'P-2', accion: 'estacOficial',
   titulo: 'Plazas dibujadas sin N° oficial, entre ellas 3 de ambulancia',
   detalle: 'Las 3 🚑 no están en la PAPS de estacionamientos (las de emergencia van en pisos 1 y -1): confirmar si se dejan o se quitan.'},
  {id: 'est-p3-poniente', grupo: 'Estacionamientos', piso: 'P-3',
   titulo: 'Sector poniente de P-3 no calza con el plano PAPS 2020',
   detalle: 'El calce del plano S3 2020 es ~80 %: falta el plano S3 vigente (pedido en el borrador a Francisca Cid, sin enviar).'},
  {id: 'drogueria-nombres', grupo: 'Droguería (lámina ISP)', piso: 'P-1', zona: [12300, 6100, 3300, 2600],
   titulo: 'Nombres de oficinas de la lámina ISP ≠ cabida del Atlas',
   detalle: 'Ej.: la lámina dice «Planificador de demanda» donde el Atlas tiene «Estaciones de trabajo profesionales (3)». Definir cuál manda.'},
  {id: 'comercios-logos', grupo: 'Espacios concesionados', piso: 'P1',
   titulo: 'Logos de los demás comercios',
   detalle: 'Sólo Casa y Café tiene logo (reemplaza el nombre, al centro del bloque). Sumar los otros cuando lleguen.'}
];
