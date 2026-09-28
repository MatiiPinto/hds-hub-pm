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
 },
 {
  "id": "escaleras-numeradas-2026-09-28-P1",
  "piso": "P1",
  "motivo": "Número de escalera por hueco, igual en todos los pisos (poniente→oriente, norte→sur), _DEV/numera_escaleras.py. No mueve nada.",
  "completar": [
   {
    "id": "P1-nav-1785247193673_hed",
    "campos": {
     "etq": "1"
    }
   },
   {
    "id": "P1-nav-1785247167667_xav",
    "campos": {
     "etq": "2"
    }
   },
   {
    "id": "P1-nav-1785247061760_q0w",
    "campos": {
     "etq": "3"
    }
   },
   {
    "id": "P1-nav-1785247236791_19n",
    "campos": {
     "etq": "4"
    }
   },
   {
    "id": "P1-nav-1785247020007_qdw",
    "campos": {
     "etq": "5"
    }
   },
   {
    "id": "P1-nav-1785246916665_gy7",
    "campos": {
     "etq": "6"
    }
   },
   {
    "id": "P1-nav-1785247029976_0d1",
    "campos": {
     "etq": "7"
    }
   },
   {
    "id": "P1-st-1790603905651",
    "campos": {
     "etq": "9"
    }
   },
   {
    "id": "P1-nav-1785246893251_84n",
    "campos": {
     "etq": "10"
    }
   },
   {
    "id": "P1-nav-1785246843961_3bj",
    "campos": {
     "etq": "11"
    }
   },
   {
    "id": "P1-nav-1787053224185_5ja",
    "campos": {
     "etq": "12"
    }
   },
   {
    "id": "P1-nav-1785246761053_6y4",
    "campos": {
     "etq": "13"
    }
   },
   {
    "id": "P1-nav-1785246825728_0sn",
    "campos": {
     "etq": "14"
    }
   },
   {
    "id": "P1-nav-1785246756856_tvc",
    "campos": {
     "etq": "15"
    }
   },
   {
    "id": "P1-nav-1787053093445_i2y",
    "campos": {
     "etq": "16"
    }
   }
  ]
 },
 {
  "id": "escaleras-numeradas-2026-09-28-P2",
  "piso": "P2",
  "motivo": "Número de escalera por hueco, igual en todos los pisos (poniente→oriente, norte→sur), _DEV/numera_escaleras.py. No mueve nada.",
  "completar": [
   {
    "id": "P2-nav-1785786320373_bcy",
    "campos": {
     "etq": "1"
    }
   },
   {
    "id": "P2-nav-1785786331436_zic",
    "campos": {
     "etq": "2"
    }
   },
   {
    "id": "P2-nav-1785786356974_aye",
    "campos": {
     "etq": "3"
    }
   },
   {
    "id": "P2-nav-1785786387619_nk5",
    "campos": {
     "etq": "6"
    }
   },
   {
    "id": "P2-nav-1785786449305_2js",
    "campos": {
     "etq": "7"
    }
   },
   {
    "id": "P2-st-1790603958381",
    "campos": {
     "etq": "8"
    }
   },
   {
    "id": "P2-nav-1785786401316_c5c",
    "campos": {
     "etq": "10"
    }
   },
   {
    "id": "P2-nav-1785786437315_bu5",
    "campos": {
     "etq": "11"
    }
   },
   {
    "id": "P2-nav-1787055831197_ppf",
    "campos": {
     "etq": "12"
    }
   },
   {
    "id": "P2-nav-1785786414673_wkg",
    "campos": {
     "etq": "13"
    }
   },
   {
    "id": "P2-nav-1785786425886_hbq",
    "campos": {
     "etq": "14"
    }
   },
   {
    "id": "P2-nav-1787055821388_trl",
    "campos": {
     "etq": "16"
    }
   }
  ]
 },
 {
  "id": "escaleras-numeradas-2026-09-28-P-1",
  "piso": "P-1",
  "motivo": "Número de escalera por hueco, igual en todos los pisos (poniente→oriente, norte→sur), _DEV/numera_escaleras.py. No mueve nada.",
  "completar": [
   {
    "id": "P-1-nav-1785804807128_hzt",
    "campos": {
     "etq": "1"
    }
   },
   {
    "id": "P-1-nav-1785804817397_qon",
    "campos": {
     "etq": "2"
    }
   },
   {
    "id": "P-1-nav-1785804701998_kz8",
    "campos": {
     "etq": "3"
    }
   },
   {
    "id": "P-1-nav-1785804796743_47b",
    "campos": {
     "etq": "4"
    }
   },
   {
    "id": "P-1-nav-1785804713854_78u",
    "campos": {
     "etq": "5"
    }
   },
   {
    "id": "P-1-nav-1785804837906_6eh",
    "campos": {
     "etq": "6"
    }
   },
   {
    "id": "P-1-nav-1785804741486_1xh",
    "campos": {
     "etq": "7"
    }
   },
   {
    "id": "P-1-nav-1785804788914_wje",
    "campos": {
     "etq": "9"
    }
   },
   {
    "id": "P-1-nav-1785805129737_7vv",
    "campos": {
     "etq": "11"
    }
   },
   {
    "id": "P-1-nav-1787053321191_ogd",
    "campos": {
     "etq": "12"
    }
   },
   {
    "id": "P-1-nav-1785804756020_1ak",
    "campos": {
     "etq": "15"
    }
   },
   {
    "id": "P-1-nav-1787053310978_jt5",
    "campos": {
     "etq": "16"
    }
   }
  ]
 },
 {
  "id": "escaleras-numeradas-2026-09-28-P3",
  "piso": "P3",
  "motivo": "Número de escalera por hueco, igual en todos los pisos (poniente→oriente, norte→sur), _DEV/numera_escaleras.py. No mueve nada.",
  "completar": [
   {
    "id": "P3-nav-1785804141518_1nu",
    "campos": {
     "etq": "1"
    }
   },
   {
    "id": "P3-nav-1785804149969_9qm",
    "campos": {
     "etq": "2"
    }
   },
   {
    "id": "P3-nav-1785804159202_ea0",
    "campos": {
     "etq": "3"
    }
   },
   {
    "id": "P3-nav-1785804229021_sjv",
    "campos": {
     "etq": "6"
    }
   },
   {
    "id": "P3-nav-1785804181089_9ky",
    "campos": {
     "etq": "7"
    }
   },
   {
    "id": "P3-nav-1785804193143_ydw",
    "campos": {
     "etq": "11"
    }
   },
   {
    "id": "P3-nav-1787055882206_qa7",
    "campos": {
     "etq": "12"
    }
   },
   {
    "id": "P3-nav-1785804217765_ke1",
    "campos": {
     "etq": "13"
    }
   },
   {
    "id": "P3-nav-1785804208905_clp",
    "campos": {
     "etq": "14"
    }
   },
   {
    "id": "P3-nav-1787055872823_kti",
    "campos": {
     "etq": "16"
    }
   }
  ]
 },
 {
  "id": "escaleras-numeradas-2026-09-28-P4",
  "piso": "P4",
  "motivo": "Número de escalera por hueco, igual en todos los pisos (poniente→oriente, norte→sur), _DEV/numera_escaleras.py. No mueve nada.",
  "completar": [
   {
    "id": "P4-nav-1785798713881_g68",
    "campos": {
     "etq": "1"
    }
   },
   {
    "id": "P4-nav-1785798720838_g2c",
    "campos": {
     "etq": "2"
    }
   },
   {
    "id": "P4-nav-1785798729522_hns",
    "campos": {
     "etq": "3"
    }
   },
   {
    "id": "P4-nav-1785798747430_1ts",
    "campos": {
     "etq": "7"
    }
   },
   {
    "id": "P4-nav-1785798757921_93a",
    "campos": {
     "etq": "11"
    }
   },
   {
    "id": "P4-nav-1787057111170_7bt",
    "campos": {
     "etq": "12"
    }
   },
   {
    "id": "P4-nav-1785798785136_ju1",
    "campos": {
     "etq": "13"
    }
   },
   {
    "id": "P4-nav-1785798771131_g52",
    "campos": {
     "etq": "14"
    }
   },
   {
    "id": "P4-nav-1787057103701_0z8",
    "campos": {
     "etq": "16"
    }
   }
  ]
 },
 {
  "id": "escaleras-numeradas-2026-09-28-P-2",
  "piso": "P-2",
  "motivo": "Número de escalera por hueco, igual en todos los pisos (poniente→oriente, norte→sur), _DEV/numera_escaleras.py. No mueve nada.",
  "completar": [
   {
    "id": "P-2-plano-8",
    "campos": {
     "etq": "2"
    }
   },
   {
    "id": "P-2-plano-3",
    "campos": {
     "etq": "4"
    }
   },
   {
    "id": "P-2-plano-2",
    "campos": {
     "etq": "5"
    }
   },
   {
    "id": "P-2-plano-4",
    "campos": {
     "etq": "9"
    }
   },
   {
    "id": "P-2-plano-10",
    "campos": {
     "etq": "11"
    }
   },
   {
    "id": "P-2-plano-5",
    "campos": {
     "etq": "12"
    }
   },
   {
    "id": "P-2-plano-6",
    "campos": {
     "etq": "15"
    }
   },
   {
    "id": "P-2-plano-7",
    "campos": {
     "etq": "16"
    }
   }
  ]
 },
 {
  "id": "escaleras-numeradas-2026-09-28-P5",
  "piso": "P5",
  "motivo": "Número de escalera por hueco, igual en todos los pisos (poniente→oriente, norte→sur), _DEV/numera_escaleras.py. No mueve nada.",
  "completar": [
   {
    "id": "P5-plano-2",
    "campos": {
     "etq": "1"
    }
   },
   {
    "id": "P5-plano-1",
    "campos": {
     "etq": "3"
    }
   },
   {
    "id": "P5-plano-3",
    "campos": {
     "etq": "6"
    }
   },
   {
    "id": "P5-plano-4",
    "campos": {
     "etq": "7"
    }
   },
   {
    "id": "P5-plano-6",
    "campos": {
     "etq": "11"
    }
   },
   {
    "id": "P5-plano-5",
    "campos": {
     "etq": "12"
    }
   },
   {
    "id": "P5-plano-7",
    "campos": {
     "etq": "13"
    }
   }
  ]
 },
 {
  "id": "escaleras-numeradas-2026-09-28-P-3",
  "piso": "P-3",
  "motivo": "Número de escalera por hueco, igual en todos los pisos (poniente→oriente, norte→sur), _DEV/numera_escaleras.py. No mueve nada.",
  "completar": [
   {
    "id": "P-3-plano-1",
    "campos": {
     "etq": "2"
    }
   },
   {
    "id": "P-3-plano-2",
    "campos": {
     "etq": "4"
    }
   },
   {
    "id": "P-3-plano-3",
    "campos": {
     "etq": "5"
    }
   },
   {
    "id": "P-3-plano-4",
    "campos": {
     "etq": "9"
    }
   },
   {
    "id": "P-3-plano-5",
    "campos": {
     "etq": "15"
    }
   }
  ]
 }
];
