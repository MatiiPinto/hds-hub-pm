// SHARED_DATA/verticales_parches.js — parches puntuales de ascensores/escaleras que el Atlas aplica UNA vez al abrirse
// (cabida_parches_vert en localStorage), solo en el piso indicado: no toca lo ajustado a mano en otros pisos.
// Se aplican en orden; un «agregar» cuyo id ya existe no se duplica.
window.VERTICALES_PARCHES = [
 {
  "id": "P5-ascensores-2026-09-28",
  "piso": "P5",
  "motivo": "Ascensores de P5 pedidos el 28-09-2026 (G1, G2, E1, J1, O1, V1) ubicados en el mismo ducto que en P4 (similitud por escaleras P4→P5, residuo 0,29 m); se quita el S que había quedado.",
  "quitar": [
   {
    "etq": "S",
    "familia": "asc"
   }
  ],
  "agregar": [
   {
    "id": "P5-sup-O1",
    "kind": "asc-S",
    "x": 7007.0,
    "y": 5566.3,
    "w": 121.8,
    "h": 105.8,
    "etq": "O1",
    "salida": "w",
    "salida_fuente": "piso inferior (P4)",
    "origen": "ducto de P4"
   },
   {
    "id": "P5-sup-J1",
    "kind": "asc-S",
    "x": 3491.8,
    "y": 5137.0,
    "w": 111.4,
    "h": 116.3,
    "etq": "J1",
    "salida": "s",
    "salida_fuente": "piso inferior (P4)",
    "origen": "ducto de P4"
   },
   {
    "id": "P5-sup-E1",
    "kind": "asc-S",
    "x": 1371.8,
    "y": 5272.1,
    "w": 105.8,
    "h": 135.4,
    "etq": "E1",
    "salida": "n",
    "salida_fuente": "piso inferior (P4)",
    "origen": "ducto de P4"
   },
   {
    "id": "P5-sup-G2",
    "kind": "asc-Pplus",
    "x": 3261.7,
    "y": 2220.3,
    "w": 122.5,
    "h": 149.1,
    "etq": "G2",
    "salida": "s",
    "salida_fuente": "piso inferior (P4)",
    "origen": "ducto de P4"
   },
   {
    "id": "P5-sup-G1",
    "kind": "asc-Pplus",
    "x": 3262.4,
    "y": 2579.8,
    "w": 119.7,
    "h": 146.3,
    "etq": "G1",
    "salida": "n",
    "salida_fuente": "piso inferior (P4)",
    "origen": "ducto de P4"
   },
   {
    "id": "P5-sup-V1",
    "kind": "asc-S",
    "x": 9056.7,
    "y": 8325.6,
    "w": 195.6,
    "h": 111.0,
    "etq": "V1",
    "salida": "w",
    "salida_fuente": "piso inferior (P4)",
    "origen": "ducto de P4"
   }
  ]
 },
 {
  "id": "relojes-ficha-2026-09-28",
  "piso": "P1",
  "motivo": "Relojes control ubicados a mano el 28-09-2026: se les completa la ficha del ORD SSMO 5040029-145 (N°, edificio, acceso, observación) por cercanía a su marca del oficio (0,1–3,0 m). No se mueven.",
  "completar": [
   {
    "id": "P1-st-1790618009358",
    "campos": {
     "n": 1,
     "edificio": "AA",
     "acceso": "Acceso Ambulantes CCEE",
     "obs": "2 lectores en el sector de circulación de la entrada, entre las mamparas de ingreso",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   },
   {
    "id": "P1-st-1790618008516",
    "campos": {
     "n": 2,
     "edificio": "AA",
     "acceso": "Acceso Ambulantes CCEE",
     "obs": "2 lectores en el sector de circulación de la entrada, entre las mamparas de ingreso",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   },
   {
    "id": "P1-st-1790617475510",
    "campos": {
     "n": 3,
     "edificio": "HDS",
     "acceso": "Acceso Visitas Hospitalización",
     "obs": "2 lectores en el sector de circulación de la entrada, entre las mamparas de ingreso",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   },
   {
    "id": "P1-st-1790617477949",
    "campos": {
     "n": 4,
     "edificio": "HDS",
     "acceso": "Acceso Visitas Hospitalización",
     "obs": "2 lectores en el sector de circulación de la entrada, entre las mamparas de ingreso",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   },
   {
    "id": "P1-st-1790616836615",
    "campos": {
     "n": 5,
     "edificio": "INGER",
     "acceso": "Acceso Visitas Hospitalización",
     "obs": "2 lectores en tabique bajo la escalera, en las cercanías al recinto 12.3.1",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   },
   {
    "id": "P1-st-1790616858731",
    "campos": {
     "n": 6,
     "edificio": "INGER",
     "acceso": "Acceso Visitas Hospitalización",
     "obs": "2 lectores en tabique bajo la escalera, en las cercanías al recinto 12.3.1",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   },
   {
    "id": "P1-st-1790618028910",
    "campos": {
     "n": 7,
     "edificio": "HDS",
     "acceso": "Acceso Urgencias Ambulantes",
     "obs": "1 lector en el sector de circulación de la entrada, entre las mamparas de ingreso",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   }
  ]
 },
 {
  "id": "relojes-ficha-2026-09-28-P-2",
  "piso": "P-2",
  "motivo": "Relojes control ubicados a mano el 28-09-2026: se les completa la ficha del ORD SSMO 5040029-145 (N°, edificio, acceso, observación) por cercanía a su marca del oficio (0,1–3,0 m). No se mueven.",
  "completar": [
   {
    "id": "P-2-st-1790616767432",
    "campos": {
     "n": 8,
     "edificio": "HDS / INGER",
     "acceso": "Circulación de ascensores PUB.1_NE.07 y PUB.2_NE.07",
     "obs": "1 lector fuera de los ascensores que conectan al piso 1, entre los accesos HDS e INGER",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   }
  ]
 },
 {
  "id": "relojes-ficha-2026-09-28-P-3",
  "piso": "P-3",
  "motivo": "Relojes control ubicados a mano el 28-09-2026: se les completa la ficha del ORD SSMO 5040029-145 (N°, edificio, acceso, observación) por cercanía a su marca del oficio (0,1–3,0 m). No se mueven.",
  "completar": [
   {
    "id": "P-3-st-1790616169475",
    "campos": {
     "n": 9,
     "edificio": "AA",
     "acceso": "Cercano a ascensor PUB.2_NP.01",
     "obs": "1 lector en el sector norponiente del estacionamiento, fuera de los ascensores",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   },
   {
    "id": "P-3-st-1790616126267",
    "campos": {
     "n": 10,
     "edificio": "HDS",
     "acceso": "Circulación de ascensor PUB.1_NE.05",
     "obs": "1 lector en el sector suroriente del estacionamiento, fuera de los ascensores",
     "origen": "ORD 5040029-145",
     "etq": "Rc"
    }
   }
  ]
 }
];
