// SHARED_DATA/dispensadores_medicamentos.js — Kardex y MedStation del HDS por recinto BIM (tabla de Farmacia 05-10-2026)
// GENERADO por _DEV/dispensadores/build_dispensadores.py — no editar a mano.
window.DISPENSADORES_MEDICAMENTOS = {
 "version": 1,
 "generado": "2026-10-05",
 "fuente": "Tabla de dispensadores HDS (Kardex y MedStation BD Pyxis) entregada por Matías el 05-10-2026, transcrita en _FUENTES/Dispensadores_Farmacia_2026-10-05/tabla_dispensadores.csv",
 "regla": "La tabla de Farmacia manda. PINS-EMMC y el catastro se cotejan y sus diferencias se informan; no se corrigen aquí.",
 "cotejo": {
  "pins": "SHARED_DATA/pins_emmc.json",
  "catastro": "SHARED_DATA/catastro_emmc.json",
  "pma_bim": "SHARED_DATA/recinto_pma_bim.json",
  "atlas_estado": "2026-10-05T18:49:33.263Z"
 },
 "tipos": [
  {
   "k": "kardex",
   "nombre": "Kardex · sistema de dispensación de Farmacia",
   "ico": "🗄",
   "corto": "Kardex"
  },
  {
   "k": "estupefacientes",
   "nombre": "MedStation · armario de estupefacientes",
   "ico": "🔒",
   "corto": "MedStation estupefacientes"
  },
  {
   "k": "medstation",
   "nombre": "MedStation (BD Pyxis ES) + columnas auxiliares",
   "ico": "💊",
   "corto": "MedStation"
  },
  {
   "k": "supply",
   "nombre": "MedStation + Supply Station (3 columnas)",
   "ico": "📦",
   "corto": "Supply Station"
  }
 ],
 "resumen": {
  "kardex": 5,
  "estupefacientes": 2,
  "medstation": 44,
  "por_columnas": {
   "1": 6,
   "2": 34,
   "3": 4
  },
  "por_piso": {
   "PS1": 0,
   "P01": 6,
   "P02": 24,
   "P03": 7,
   "P04": 7
  },
  "recintos": 32,
  "pins_medstation_hds": 44,
  "pins_estupefacientes": 2,
  "kardex_catastro_hds": 5,
  "bims_sin_recinto_atlas": [
   "H0072",
   "H1633",
   "H1899",
   "H2156"
  ]
 },
 "filas": [
  {
   "fila": 1,
   "edificio": "HDS",
   "piso": "PS1",
   "area": "FARMACIA ATENCION CERRADA",
   "equipo": "Kardex",
   "tipo": "kardex",
   "columnas": null,
   "cantidad": 2,
   "obs": "Para proveer la Atención Cerrada HDS",
   "sirve": null,
   "sala": null,
   "cupos": null,
   "ubicacion": [
    {
     "bim": "H0060",
     "cantidad": 2,
     "piso": "P-1",
     "pma": "54.3.1",
     "recinto": "Preparación Dispensación Dosis Unitaria",
     "atlas": [
      "P-1-M1778990935179-M1780883252314",
      "P-1-M1778990935179-M1780883252314-U1-51759"
     ]
    }
   ],
   "criterio": "Catastro EMMC HDS12686: K.3.54.3.1 = BIM H0060 «Preparación Dispensación Dosis Unitaria» (PMA 54.3.1).",
   "pins": null,
   "estado": "coincide"
  },
  {
   "fila": 2,
   "edificio": "HDS",
   "piso": "PS1",
   "area": "INFECTOLOGIA",
   "equipo": "Kardex",
   "tipo": "kardex",
   "columnas": null,
   "cantidad": 1,
   "obs": "",
   "sirve": null,
   "sala": null,
   "cupos": null,
   "ubicacion": [
    {
     "bim": "A0186",
     "cantidad": 1,
     "piso": "P-1",
     "pma": "18.2.2",
     "recinto": "Entrega Medicamentos",
     "atlas": [
      "P-1-M1781190754744-M1782848755541"
     ]
    }
   ],
   "criterio": "Catastro EMMC HDS14261 (servicio V.I.H): A.18.2.2 = BIM A0186 «Entrega Medicamentos». La tabla lo llama INFECTOLOGÍA.",
   "pins": null,
   "estado": "coincide"
  },
  {
   "fila": 3,
   "edificio": "HDS",
   "piso": "P01",
   "area": "FARMACIA ATENCION ABIERTA",
   "equipo": "Kardex",
   "tipo": "kardex",
   "columnas": null,
   "cantidad": 2,
   "obs": "Para Atención Abierta Farmacia HDS",
   "sirve": null,
   "sala": null,
   "cupos": null,
   "ubicacion": [
    {
     "bim": "A0697",
     "cantidad": 2,
     "piso": "P1",
     "pma": "25.3.5",
     "recinto": "Prepar. Desp.  Recetas -3 kardex",
     "atlas": [
      "P1-M1778987433277-M1781571049118"
     ]
    }
   ],
   "criterio": "Catastro EMMC HDS13915: A.25.3.5 = BIM A0697 «Prepar. Desp. Recetas -3 kardex».",
   "pins": null,
   "estado": "coincide"
  },
  {
   "fila": 4,
   "edificio": "HDS",
   "piso": "P01",
   "area": "FARMACIA ATENCION ABIERTA",
   "equipo": "Medstation (armario estupefacientes)",
   "tipo": "estupefacientes",
   "columnas": null,
   "cantidad": 2,
   "obs": "Para medicamentos controlados",
   "sirve": null,
   "sala": null,
   "cupos": null,
   "ubicacion": [
    {
     "bim": "A0693",
     "cantidad": 1,
     "piso": "P1",
     "pma": "25.3.6",
     "recinto": "Bodega Transitoria Medicamentos",
     "atlas": [
      "P1-M1778987433277-M1781570787279"
     ]
    },
    {
     "bim": "A0697",
     "cantidad": 1,
     "piso": "P1",
     "pma": "25.3.5",
     "recinto": "Prepar. Desp.  Recetas -3 kardex",
     "atlas": [
      "P1-M1778987433277-M1781571049118"
     ]
    }
   ],
   "criterio": "PINS: un armario en A0693 «Bodega Transitoria Medicamentos» y otro en A0697 «Prepar. Desp. Recetas».",
   "pins": 2,
   "estado": "coincide"
  },
  {
   "fila": 5,
   "edificio": "HDS",
   "piso": "P01",
   "area": "SERVICIO DE PSIQUIATRIA",
   "equipo": "MedStation + 1 Columna auxiliar",
   "tipo": "medstation",
   "columnas": 1,
   "cantidad": 2,
   "obs": "Distribuidos en 2 recintos, 1 para cada recinto",
   "sirve": null,
   "sala": null,
   "cupos": null,
   "ubicacion": [
    {
     "bim": "H1388",
     "cantidad": 1,
     "piso": "P1",
     "pma": "43.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P1-M1778989662426-M1782409820646"
     ]
    },
    {
     "bim": "H1408",
     "cantidad": 1,
     "piso": "P1",
     "pma": "43.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P1-M1778989662426-M1782411377939"
     ]
    }
   ],
   "criterio": "PINS: H1388 y H1408, las 2 instancias de 43.3.4 «Insumos» (Psiquiatría, una por recinto).",
   "pins": 2,
   "estado": "coincide"
  },
  {
   "fila": 6,
   "edificio": "HDS",
   "piso": "P01",
   "area": "UNIDAD DE EMERGENCIA",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 4,
   "obs": "Distribuidos en 1 solo recinto central",
   "sirve": null,
   "sala": null,
   "cupos": null,
   "ubicacion": [
    {
     "bim": "H2044",
     "cantidad": 4,
     "piso": "P1",
     "pma": "26.6.3",
     "recinto": "Insumos Clínicos",
     "atlas": [
      "P1-M1778989505248-M1782140390873"
     ]
    }
   ],
   "criterio": "Tabla: 1 solo recinto central. PINS pone 3 en H2044 «Insumos Clínicos» (26.6.3) y 1 en H0110 «Secret./Administ./Recaudación» (26.1.4): se toma H2044.",
   "pins": 3,
   "estado": "falta en PINS"
  },
  {
   "fila": 7,
   "edificio": "HDS",
   "piso": "P02",
   "area": "PABELLONES QUIRURGICOS",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 1,
   "obs": "Distribuido en recuperación 1 (24 cupos)",
   "sirve": "H2096",
   "sala": "RECUPERACIÓN 1",
   "cupos": 24,
   "ubicacion": [
    {
     "bim": "H2106",
     "cantidad": 1,
     "piso": "P2",
     "pma": "27.7.4/30.2.2",
     "recinto": "Insumos Clínicos",
     "atlas": [
      "P2-M1778970154322-M1781739610467"
     ]
    }
   ],
   "criterio": "PINS: H2106 «Insumos Clínicos» (27.7.4/30.2.2), el apoyo de Recuperación 1, con 2 columnas.",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 8,
   "edificio": "HDS",
   "piso": "P02",
   "area": "PABELLONES QUIRURGICOS",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 1,
   "obs": "Distribuido en recuperación 2 (24 cupos)",
   "sirve": "H0071",
   "sala": "RECUPERACIÓN 2",
   "cupos": 24,
   "ubicacion": [
    {
     "bim": "H0072",
     "cantidad": 1,
     "piso": "P2",
     "pma": "29.3.5",
     "recinto": "Insumos Clínicos",
     "atlas": []
    }
   ],
   "criterio": "PINS: H0072 «Insumos Clínicos» (29.3.5), el apoyo de Recuperación 2 (H0071).",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 9,
   "edificio": "HDS",
   "piso": "P02",
   "area": "PABELLONES QUIRURGICOS",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 8,
   "obs": "Distribuidos en 1 solo recinto central para proveer a los 24 pabellones",
   "sirve": null,
   "sala": null,
   "cupos": null,
   "ubicacion": [
    {
     "bim": "H1873",
     "cantidad": 8,
     "piso": "P2",
     "pma": "27.4.1/28.5.1",
     "recinto": "Recepción Insumos",
     "atlas": [
      "P2-M1778970154322-M1781714833893"
     ]
    }
   ],
   "criterio": "PINS: 8 en H1873 «Recepción Insumos» (27.4.1/28.5.1), el recinto central de pabellones.",
   "pins": 8,
   "estado": "coincide"
  },
  {
   "fila": 10,
   "edificio": "HDS",
   "piso": "P02",
   "area": "PABELLONES QUIRURGICOS",
   "equipo": "MedStation + 3 Columnas Supply Station",
   "tipo": "supply",
   "columnas": 3,
   "cantidad": 2,
   "obs": "Distribuidos en 1 solo recinto central para proveer a los 24 pabellones",
   "sirve": null,
   "sala": null,
   "cupos": null,
   "ubicacion": [
    {
     "bim": "H1873",
     "cantidad": 2,
     "piso": "P2",
     "pma": "27.4.1/28.5.1",
     "recinto": "Recepción Insumos",
     "atlas": [
      "P2-M1778970154322-M1781714833893"
     ]
    }
   ],
   "criterio": "Mismo recinto central H1873.",
   "pins": 2,
   "estado": "coincide"
  },
  {
   "fila": 11,
   "edificio": "HDS",
   "piso": "P02",
   "area": "PABELLONES QUIRURGICOS",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 1,
   "obs": "Distribuido en sala preanestesia 2 (12 cupos)",
   "sirve": "H1865",
   "sala": "PRE-ANESTESIA 2",
   "cupos": 12,
   "ubicacion": [
    {
     "bim": "H1865",
     "cantidad": 1,
     "piso": "P2",
     "pma": "27.5.2",
     "recinto": "Sala Preanestesia",
     "atlas": [
      "P2-M1778970154322-M1781714787233"
     ]
    }
   ],
   "criterio": "PINS: H1865 «Sala Preanestesia» = PRE-ANESTESIA 2 en la numeración REV 5.",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 12,
   "edificio": "HDS",
   "piso": "P02",
   "area": "PABELLONES QUIRURGICOS",
   "equipo": "MedStation + 1 Columna auxiliar",
   "tipo": "medstation",
   "columnas": 1,
   "cantidad": 1,
   "obs": "Distribuido en sala preanestesia 1 (10 cupos)",
   "sirve": "H2094",
   "sala": "PRE-ANESTESIA 1",
   "cupos": 10,
   "ubicacion": [
    {
     "bim": "H2094",
     "cantidad": 1,
     "piso": "P2",
     "pma": "27.5.2",
     "recinto": "Sala Preanestesia",
     "atlas": [
      "P2-M1778970154322-M1781714503665"
     ]
    }
   ],
   "criterio": "H2094 = PRE-ANESTESIA 1 (numeración REV 5). PINS no pone nada aquí: su MedStation de 1 columna está en H2096 (sala de Recuperación 1).",
   "pins": 0,
   "estado": "falta en PINS"
  },
  {
   "fila": 13,
   "edificio": "HDS",
   "piso": "P02",
   "area": "UNIDAD HEMATOLOGÍA INTENSIVA UHI",
   "equipo": "MedStation + 1 Columna auxiliar",
   "tipo": "medstation",
   "columnas": 1,
   "cantidad": 1,
   "obs": "Unidad criticidad media tipo UTI (12 cupos)",
   "sirve": null,
   "sala": null,
   "cupos": 12,
   "ubicacion": [
    {
     "bim": "H0602",
     "cantidad": 1,
     "piso": "P2",
     "pma": "37.2.4.4",
     "recinto": "Bodega Insumos",
     "atlas": [
      "P2-M1778971013985-M1782690982970"
     ]
    }
   ],
   "criterio": "PINS: H0602 «Bodega Insumos» (37.2.4.4, UHI).",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 14,
   "edificio": "HDS",
   "piso": "P02",
   "area": "UNIDAD CUIDADOS ESPECIALES UCE",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 1,
   "obs": "Unidad criticidad media tipo UTI (18 cupos)",
   "sirve": null,
   "sala": null,
   "cupos": 18,
   "ubicacion": [
    {
     "bim": "H0614",
     "cantidad": 1,
     "piso": "P2",
     "pma": "37.1.3.4",
     "recinto": "Bodega Insumos",
     "atlas": [
      "P2-M1778970168730-M1782697459631"
     ]
    }
   ],
   "criterio": "PINS: H0614 «Bodega Insumos» (37.1.3.4, UCE).",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 15,
   "edificio": "HDS",
   "piso": "P02",
   "area": "UPC",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 2,
   "obs": "Para UPC 1 (UCI 12 cupos)",
   "sirve": null,
   "sala": null,
   "cupos": 12,
   "ubicacion": [
    {
     "bim": "H2206",
     "cantidad": 2,
     "piso": "P2",
     "pma": "38.4.4",
     "recinto": "Insumos",
     "atlas": [
      "P2-CAD-38-R20"
     ]
    }
   ],
   "criterio": "UPC 1 = PMA 38: PINS 2 en H2206 «Insumos» (38.4.4).",
   "pins": 2,
   "estado": "coincide"
  },
  {
   "fila": 16,
   "edificio": "HDS",
   "piso": "P02",
   "area": "UPC",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 2,
   "obs": "Para UPC 2 (UCI 12 cupos)",
   "sirve": null,
   "sala": null,
   "cupos": 12,
   "ubicacion": [
    {
     "bim": "H1899",
     "cantidad": 2,
     "piso": "P2",
     "pma": "39.3.4",
     "recinto": "Bodega Insumos",
     "atlas": []
    }
   ],
   "criterio": "UPC 2 = PMA 39: PINS 2 en H1899 «Bodega Insumos» (39.3.4).",
   "pins": 2,
   "estado": "coincide"
  },
  {
   "fila": 17,
   "edificio": "HDS",
   "piso": "P02",
   "area": "UPC",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 1,
   "obs": "Para UPC 3 (UTI 23 cupos)",
   "sirve": null,
   "sala": null,
   "cupos": 23,
   "ubicacion": [
    {
     "bim": "H1942",
     "cantidad": 1,
     "piso": "P2",
     "pma": "40.3.4",
     "recinto": "Bodega Insumos",
     "atlas": [
      "P2-CAD-40-R22"
     ]
    }
   ],
   "criterio": "UPC 3 = PMA 40: H1942 «Bodega Insumos» (40.3.4).",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 18,
   "edificio": "HDS",
   "piso": "P02",
   "area": "UPC",
   "equipo": "MedStation + 3 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 3,
   "cantidad": 1,
   "obs": "Para UPC 3 (UTI 23 cupos)",
   "sirve": null,
   "sala": null,
   "cupos": 23,
   "ubicacion": [
    {
     "bim": "H1942",
     "cantidad": 1,
     "piso": "P2",
     "pma": "40.3.4",
     "recinto": "Bodega Insumos",
     "atlas": [
      "P2-CAD-40-R22"
     ]
    }
   ],
   "criterio": "UPC 3 = PMA 40: H1942.",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 19,
   "edificio": "HDS",
   "piso": "P02",
   "area": "UPC",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 1,
   "obs": "Para UPC 4 (UTI 23 cupos)",
   "sirve": null,
   "sala": null,
   "cupos": 23,
   "ubicacion": [
    {
     "bim": "H2156",
     "cantidad": 1,
     "piso": "P2",
     "pma": "41.3.4",
     "recinto": "Bodega Insumos",
     "atlas": []
    }
   ],
   "criterio": "UPC 4 = PMA 41: H2156 «Bodega Insumos» (41.3.4).",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 20,
   "edificio": "HDS",
   "piso": "P02",
   "area": "UPC",
   "equipo": "MedStation + 3 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 3,
   "cantidad": 1,
   "obs": "Para UPC 4 (UTI 23 cupos)",
   "sirve": null,
   "sala": null,
   "cupos": 23,
   "ubicacion": [
    {
     "bim": "H2156",
     "cantidad": 1,
     "piso": "P2",
     "pma": "41.3.4",
     "recinto": "Bodega Insumos",
     "atlas": []
    }
   ],
   "criterio": "UPC 4 = PMA 41: H2156.",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 21,
   "edificio": "HDS",
   "piso": "P03",
   "area": "PENSIONADO",
   "equipo": "MedStation + 1 Columna auxiliar",
   "tipo": "medstation",
   "columnas": 1,
   "cantidad": 1,
   "obs": "Para 22 cupos",
   "sirve": null,
   "sala": null,
   "cupos": 22,
   "ubicacion": [
    {
     "bim": "H2302",
     "cantidad": 1,
     "piso": "P3",
     "pma": "42.3.4",
     "recinto": "Insumos Clínicos",
     "atlas": [
      "P3-M1781304756814-M1782956790695"
     ]
    }
   ],
   "criterio": "PINS: H2302 «Insumos Clínicos» (42.3.4, Pensionado P3).",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 22,
   "edificio": "HDS",
   "piso": "P03",
   "area": "HOSPITALIZACIÓN",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 6,
   "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total",
   "sirve": null,
   "sala": null,
   "cupos": 180,
   "ubicacion": [
    {
     "bim": "H1598",
     "cantidad": 1,
     "piso": "P3",
     "pma": "31.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P3-M1781304731878-M1781651838521-101"
     ]
    },
    {
     "bim": "H2424",
     "cantidad": 1,
     "piso": "P3",
     "pma": "31.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P3-M1781304731878-M1781651838521-102"
     ]
    },
    {
     "bim": "H1633",
     "cantidad": 1,
     "piso": "P3",
     "pma": "32.3.4",
     "recinto": "Insumos",
     "atlas": []
    },
    {
     "bim": "H2377",
     "cantidad": 1,
     "piso": "P3",
     "pma": "32.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P3-M1781304731878-M1781651838521-132"
     ]
    },
    {
     "bim": "H1639",
     "cantidad": 1,
     "piso": "P3",
     "pma": "33.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P3-M1781304731878-M1781651838521-150"
     ]
    },
    {
     "bim": "H2468",
     "cantidad": 1,
     "piso": "P3",
     "pma": "33.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P3-M1781304731878-M1781651838521-149"
     ]
    }
   ],
   "criterio": "Las 6 bodegas «Insumos» de las unidades 31-33 (2 por unidad doble 30+30). PINS trae 4: faltan H2424 (31.3.4) y H2377 (32.3.4).",
   "pins": 6,
   "estado": "coincide"
  },
  {
   "fila": 23,
   "edificio": "HDS",
   "piso": "P04",
   "area": "PENSIONADO",
   "equipo": "MedStation + 1 Columna auxiliar",
   "tipo": "medstation",
   "columnas": 1,
   "cantidad": 1,
   "obs": "Para 22 cupos",
   "sirve": null,
   "sala": null,
   "cupos": 22,
   "ubicacion": [
    {
     "bim": "H2329",
     "cantidad": 1,
     "piso": "P4",
     "pma": "42.3.4",
     "recinto": "Insumos Clínicos",
     "atlas": [
      "P4-M1778968883372-M1782954185128"
     ]
    }
   ],
   "criterio": "PINS: H2329 «Insumos Clínicos» (42.3.4, Pensionado P4).",
   "pins": 1,
   "estado": "coincide"
  },
  {
   "fila": 24,
   "edificio": "HDS",
   "piso": "P04",
   "area": "HOSPITALIZACIÓN",
   "equipo": "MedStation + 2 Columnas auxiliar",
   "tipo": "medstation",
   "columnas": 2,
   "cantidad": 6,
   "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total",
   "sirve": null,
   "sala": null,
   "cupos": 180,
   "ubicacion": [
    {
     "bim": "H1380",
     "cantidad": 1,
     "piso": "P4",
     "pma": "34.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P4-M1781146026986-M1781302912170"
     ]
    },
    {
     "bim": "H2447",
     "cantidad": 1,
     "piso": "P4",
     "pma": "34.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P4-M1781146026986-M1781302903791"
     ]
    },
    {
     "bim": "H0192",
     "cantidad": 1,
     "piso": "P4",
     "pma": "35.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P4-M1781146026986-M1781303788963"
     ]
    },
    {
     "bim": "H2478",
     "cantidad": 1,
     "piso": "P4",
     "pma": "35.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P4-M1781146026986-M1781303761439"
     ]
    },
    {
     "bim": "H1439",
     "cantidad": 1,
     "piso": "P4",
     "pma": "36.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P4-M1781146026986-M1781304039025"
     ]
    },
    {
     "bim": "H2485",
     "cantidad": 1,
     "piso": "P4",
     "pma": "36.3.4",
     "recinto": "Insumos",
     "atlas": [
      "P4-M1781146026986-M1781304033153"
     ]
    }
   ],
   "criterio": "Las 6 bodegas «Insumos» de las unidades 34-36. PINS trae las 6.",
   "pins": 6,
   "estado": "coincide"
  }
 ],
 "por_bim": {
  "A0186": [
   {
    "fila": 2,
    "tipo": "kardex",
    "columnas": null,
    "cantidad": 1,
    "area": "INFECTOLOGIA",
    "equipo": "Kardex",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": ""
   }
  ],
  "A0693": [
   {
    "fila": 4,
    "tipo": "estupefacientes",
    "columnas": null,
    "cantidad": 1,
    "area": "FARMACIA ATENCION ABIERTA",
    "equipo": "Medstation (armario estupefacientes)",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para medicamentos controlados"
   }
  ],
  "A0697": [
   {
    "fila": 3,
    "tipo": "kardex",
    "columnas": null,
    "cantidad": 2,
    "area": "FARMACIA ATENCION ABIERTA",
    "equipo": "Kardex",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para Atención Abierta Farmacia HDS"
   },
   {
    "fila": 4,
    "tipo": "estupefacientes",
    "columnas": null,
    "cantidad": 1,
    "area": "FARMACIA ATENCION ABIERTA",
    "equipo": "Medstation (armario estupefacientes)",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para medicamentos controlados"
   }
  ],
  "H0060": [
   {
    "fila": 1,
    "tipo": "kardex",
    "columnas": null,
    "cantidad": 2,
    "area": "FARMACIA ATENCION CERRADA",
    "equipo": "Kardex",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para proveer la Atención Cerrada HDS"
   }
  ],
  "H0072": [
   {
    "fila": 8,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "PABELLONES QUIRURGICOS",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": "H0071",
    "sala": "RECUPERACIÓN 2",
    "cupos": 24,
    "obs": "Distribuido en recuperación 2 (24 cupos)"
   }
  ],
  "H0192": [
   {
    "fila": 24,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H0602": [
   {
    "fila": 13,
    "tipo": "medstation",
    "columnas": 1,
    "cantidad": 1,
    "area": "UNIDAD HEMATOLOGÍA INTENSIVA UHI",
    "equipo": "MedStation + 1 Columna auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Unidad criticidad media tipo UTI (12 cupos)"
   }
  ],
  "H0614": [
   {
    "fila": 14,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "UNIDAD CUIDADOS ESPECIALES UCE",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Unidad criticidad media tipo UTI (18 cupos)"
   }
  ],
  "H1380": [
   {
    "fila": 24,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H1388": [
   {
    "fila": 5,
    "tipo": "medstation",
    "columnas": 1,
    "cantidad": 1,
    "area": "SERVICIO DE PSIQUIATRIA",
    "equipo": "MedStation + 1 Columna auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 2 recintos, 1 para cada recinto"
   }
  ],
  "H1408": [
   {
    "fila": 5,
    "tipo": "medstation",
    "columnas": 1,
    "cantidad": 1,
    "area": "SERVICIO DE PSIQUIATRIA",
    "equipo": "MedStation + 1 Columna auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 2 recintos, 1 para cada recinto"
   }
  ],
  "H1439": [
   {
    "fila": 24,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H1598": [
   {
    "fila": 22,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H1633": [
   {
    "fila": 22,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H1639": [
   {
    "fila": 22,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H1865": [
   {
    "fila": 11,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "PABELLONES QUIRURGICOS",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": "H1865",
    "sala": "PRE-ANESTESIA 2",
    "cupos": 12,
    "obs": "Distribuido en sala preanestesia 2 (12 cupos)"
   }
  ],
  "H1873": [
   {
    "fila": 9,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 8,
    "area": "PABELLONES QUIRURGICOS",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 1 solo recinto central para proveer a los 24 pabellones"
   },
   {
    "fila": 10,
    "tipo": "supply",
    "columnas": 3,
    "cantidad": 2,
    "area": "PABELLONES QUIRURGICOS",
    "equipo": "MedStation + 3 Columnas Supply Station",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 1 solo recinto central para proveer a los 24 pabellones"
   }
  ],
  "H1899": [
   {
    "fila": 16,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 2,
    "area": "UPC",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para UPC 2 (UCI 12 cupos)"
   }
  ],
  "H1942": [
   {
    "fila": 17,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "UPC",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para UPC 3 (UTI 23 cupos)"
   },
   {
    "fila": 18,
    "tipo": "medstation",
    "columnas": 3,
    "cantidad": 1,
    "area": "UPC",
    "equipo": "MedStation + 3 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para UPC 3 (UTI 23 cupos)"
   }
  ],
  "H2044": [
   {
    "fila": 6,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 4,
    "area": "UNIDAD DE EMERGENCIA",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 1 solo recinto central"
   }
  ],
  "H2094": [
   {
    "fila": 12,
    "tipo": "medstation",
    "columnas": 1,
    "cantidad": 1,
    "area": "PABELLONES QUIRURGICOS",
    "equipo": "MedStation + 1 Columna auxiliar",
    "sirve": "H2094",
    "sala": "PRE-ANESTESIA 1",
    "cupos": 10,
    "obs": "Distribuido en sala preanestesia 1 (10 cupos)"
   }
  ],
  "H2106": [
   {
    "fila": 7,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "PABELLONES QUIRURGICOS",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": "H2096",
    "sala": "RECUPERACIÓN 1",
    "cupos": 24,
    "obs": "Distribuido en recuperación 1 (24 cupos)"
   }
  ],
  "H2156": [
   {
    "fila": 19,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "UPC",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para UPC 4 (UTI 23 cupos)"
   },
   {
    "fila": 20,
    "tipo": "medstation",
    "columnas": 3,
    "cantidad": 1,
    "area": "UPC",
    "equipo": "MedStation + 3 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para UPC 4 (UTI 23 cupos)"
   }
  ],
  "H2206": [
   {
    "fila": 15,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 2,
    "area": "UPC",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para UPC 1 (UCI 12 cupos)"
   }
  ],
  "H2302": [
   {
    "fila": 21,
    "tipo": "medstation",
    "columnas": 1,
    "cantidad": 1,
    "area": "PENSIONADO",
    "equipo": "MedStation + 1 Columna auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para 22 cupos"
   }
  ],
  "H2329": [
   {
    "fila": 23,
    "tipo": "medstation",
    "columnas": 1,
    "cantidad": 1,
    "area": "PENSIONADO",
    "equipo": "MedStation + 1 Columna auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Para 22 cupos"
   }
  ],
  "H2377": [
   {
    "fila": 22,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H2424": [
   {
    "fila": 22,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H2447": [
   {
    "fila": 24,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H2468": [
   {
    "fila": 22,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H2478": [
   {
    "fila": 24,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ],
  "H2485": [
   {
    "fila": 24,
    "tipo": "medstation",
    "columnas": 2,
    "cantidad": 1,
    "area": "HOSPITALIZACIÓN",
    "equipo": "MedStation + 2 Columnas auxiliar",
    "sirve": null,
    "sala": null,
    "cupos": null,
    "obs": "Distribuidos en 6 recintos distintos, para cubrir 180 cupos en total"
   }
  ]
 },
 "pins_sobrantes": [
  {
   "bim": "H0110",
   "columnas": 2,
   "estupefacientes": false,
   "cantidad": 1,
   "piso": "P1",
   "pma": "26.1.4",
   "recinto": "Secret. / Administ. / Recaudación",
   "pins": [
    {
     "n_item": null,
     "servicio": "EMERGENCIA",
     "recinto_cod": "B.26.1.4",
     "modelo": "Med Station ES"
    }
   ]
  },
  {
   "bim": "H2096",
   "columnas": 1,
   "estupefacientes": false,
   "cantidad": 1,
   "piso": "P2",
   "pma": "27.7.9/30.1.5",
   "recinto": "Sala Recuperación Postanestésica",
   "pins": [
    {
     "n_item": null,
     "servicio": "PABELLONES",
     "recinto_cod": "C.1.27.7.9/C.1.30.1.5",
     "modelo": "Med Station ES"
    }
   ]
  }
 ],
 "diferencias": [
  {
   "tipo": "pins",
   "fila": 6,
   "texto": "Fila 6 · UNIDAD DE EMERGENCIA · MedStation + 2 Columnas auxiliar: tabla 4, PINS 3 en H2044."
  },
  {
   "tipo": "pins",
   "fila": 12,
   "texto": "Fila 12 · PABELLONES QUIRURGICOS · MedStation + 1 Columna auxiliar: tabla 1, PINS 0 en H2094."
  },
  {
   "tipo": "pins_sobra",
   "bim": "H0110",
   "texto": "PINS pone 1 MedStation de 2 columna(s) en H0110 «Secret. / Administ. / Recaudación» (P1, 26.1.4) que la tabla de Farmacia no tiene ahí."
  },
  {
   "tipo": "pins_sobra",
   "bim": "H2096",
   "texto": "PINS pone 1 MedStation de 1 columna(s) en H2096 «Sala Recuperación Postanestésica» (P2, 27.7.9/30.1.5) que la tabla de Farmacia no tiene ahí."
  }
 ],
 "inger": []
};
