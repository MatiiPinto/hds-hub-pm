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
 }
];
