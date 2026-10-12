// SHARED_DATA/ascensores_hds.js — directorio de ascensores del HDS
// GENERADO desde "planos ascensores.pptx" (Camilo Romero · M.S. Elías · M.J. Mendizábal).
// tipo: por color del PPT (verde=público, ámbar=servicio, rojo=montacamas mayor,
// celeste=montacamas normal). cabinas>1 => cajas dobles (A1/A2).
// TODO es EDITABLE desde 8.Navegacion: los ajustes del usuario se guardan en
// localStorage "nav_asc_override" y mandan sobre este archivo
// (p. ej. el ascensor S no se detiene en el Piso 1).
window.ASCENSORES_HDS = {
 "A": {
  "letra": "A",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 2,
  "recorrido": "-3 al 4",
  "zonas": [
   "AA"
  ],
  "ubicaciones": {
   "P-1": "Frente a secretaria cuidados paliativos",
   "P1": "Sala espera Oftalmología",
   "P2": "Frente Sala espera Admisión Oncohematología",
   "P3": "Frente Sala espera odontológica",
   "P4": "Frente sala espera recepción"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "A1",
   "A2"
  ]
 },
 "B": {
  "letra": "B",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 2,
  "recorrido": "-1 al 4",
  "zonas": [
   "AA"
  ],
  "ubicaciones": {
   "P-1": "Frente Sala Espera Consultas medicina",
   "P1": "Frente sala espera Laboratorio Toma Muestra",
   "P2": "Frente a sala espera consultas Cirugía",
   "P3": "Frente enfermería Neurología",
   "P4": "Frente sala espera recepción"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "B1",
   "B2"
  ]
 },
 "C": {
  "letra": "C",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 2,
  "recorrido": "-3 al 1",
  "zonas": [
   "AA"
  ],
  "ubicaciones": {
   "P-1": "Frente área medicina",
   "P1": "Frente servicio paciente Atención abierta"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "C1",
   "C2"
  ]
 },
 "D": {
  "letra": "D",
  "tipo": "servicio",
  "tipo_label": "Ascensor de servicio (personal y suministro)",
  "cabinas": 1,
  "recorrido": "-1 al 4",
  "zonas": [
   "AA"
  ],
  "ubicaciones": {
   "P-1": "Frente a sala de transfusiones",
   "P1": "Frente Box Exámenes , preconsulta oftalmología",
   "P2": "Sobre coordinación Transplante",
   "P3": "Bajo Box prótesis",
   "P4": "Bajo Of. Gestion control hospitalaria"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx"
 },
 "E": {
  "letra": "E",
  "tipo": "servicio",
  "tipo_label": "Ascensor de servicio (personal y suministro)",
  "cabinas": 2,
  "recorrido": "-1 al 4",
  "zonas": [
   "AA"
  ],
  "ubicaciones": {
   "P-1": "Bajo salas aseo, Insumos",
   "P1": "Sobre sala espera atención a público",
   "P2": "Frente a consultas y procedimiento cirugía",
   "P3": "Bajo Sala espera dermatología",
   "P4": "Sobre sala reuniones urología"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "E1",
   "E2"
  ]
 },
 "F": {
  "letra": "F",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 1,
  "recorrido": "-3 al 1",
  "zonas": [],
  "ubicaciones": {},
  "ambiguo": false,
  "fuente": "planos ascensores.pptx"
 },
 "G": {
  "letra": "G",
  "tipo": "montacamas_mayor",
  "tipo_label": "Montacamas de mayor superficie",
  "cabinas": 2,
  "recorrido": "-2 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Zona de residencias",
   "P1": "En la UTO",
   "P2": "Frente Angiógrafo",
   "P3": "Entre pasillo habitaciones",
   "P4": "Entre pasillo habitaciones"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "G1",
   "G2"
  ]
 },
 "H": {
  "letra": "H",
  "tipo": "servicio",
  "tipo_label": "Ascensor de servicio (personal y suministro)",
  "cabinas": 2,
  "recorrido": "-2 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Zona de residencias",
   "P1": "En la UTO",
   "P2": "Costado de pabellones",
   "P3": "Entre pasillo habitaciones",
   "P4": "Entre pasillo habitaciones"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "H1",
   "H2"
  ]
 },
 "I": {
  "letra": "I",
  "tipo": "montacamas",
  "tipo_label": "Montacamas normal",
  "cabinas": 2,
  "recorrido": "-1 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Frente a salas de espera SPECT",
   "P1": "Bajo Servicio Imágenes",
   "P2": "Frente Endoscopía",
   "P3": "Entre pasillo habitaciones",
   "P4": "Entre pasillo habitaciones"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "I1",
   "I2"
  ]
 },
 "J": {
  "letra": "J",
  "tipo": "servicio",
  "tipo_label": "Ascensor de servicio (personal y suministro)",
  "cabinas": 2,
  "recorrido": "-1 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Frente a salas de espera SPECT",
   "P1": "Bajo Servicio Imágenes",
   "P2": "Frente Endoscopía",
   "P3": "Entre pasillo habitaciones",
   "P4": "Entre pasillo habitaciones"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "J1",
   "J2"
  ]
 },
 "K": {
  "letra": "K",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 1,
  "recorrido": "-3 al 1",
  "zonas": [
   "AA",
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Bajo módulo de orientación",
   "P1": "Bajo Recepción espera Imágenes"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx"
 },
 "L": {
  "letra": "L",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 2,
  "recorrido": "-1 al 4",
  "zonas": [
   "AA",
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Bajo módulo de Orientación",
   "P1": "Bajo Recepción espera Imágenes",
   "P2": "Frente Endoscopía",
   "P3": "Frente a sala de espera",
   "P4": "Frente a sala de espera"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "L1",
   "L2"
  ]
 },
 "M": {
  "letra": "M",
  "tipo": "montacamas_mayor",
  "tipo_label": "Montacamas de mayor superficie",
  "cabinas": 2,
  "recorrido": "-1 al 2",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Estacionamiento carros preparados",
   "P1": "Costado de triage eventos masivos",
   "P2": "Sector pabellón"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "M1",
   "M2"
  ]
 },
 "N": {
  "letra": "N",
  "tipo": "montacamas",
  "tipo_label": "Montacamas normal",
  "cabinas": 2,
  "recorrido": "-1 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Costado de Preparación carros",
   "P1": "Bajo asecensores de Triage",
   "P2": "Sector UCI"
  },
  "ambiguo": true,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "N1",
   "N2"
  ]
 },
 "O": {
  "letra": "O",
  "tipo": "montacamas_mayor",
  "tipo_label": "Montacamas de mayor superficie",
  "cabinas": 2,
  "recorrido": "-1 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Costado Llegada Carros Pacientes",
   "P1": "Bajo Casino",
   "P2": "Sobre UHI",
   "P3": "Entre pasillo habitaciones",
   "P4": "Entre pasillo habitaciones"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "O1",
   "O2"
  ]
 },
 "P": {
  "letra": "P",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 2,
  "recorrido": "-3 al 1",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Frente  a escala",
   "P1": "Bajo Casino"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "P1",
   "P2"
  ]
 },
 "Q": {
  "letra": "Q",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 1,
  "recorrido": "-2 al 1",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Frente sala espera Deudos A.P.",
   "P1": "Costado sala espera Psiquiatría"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx"
 },
 "R": {
  "letra": "R",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 2,
  "recorrido": "1 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P1": "Bajo psiquiatría hospitalizado",
   "P2": "Sobre UHI",
   "P3": "Frente Estar enfermería",
   "P4": "Frente Estar enfermería"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "R1",
   "R2"
  ]
 },
 "S": {
  "letra": "S",
  "tipo": "montacamas",
  "tipo_label": "Montacamas normal",
  "cabinas": 1,
  "recorrido": "-2 al piso técnico",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P1": "Bajo Servicio psiquiatría",
   "P2": "Sobre UHI"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx"
 },
 "T": {
  "letra": "T",
  "tipo": "montacamas_mayor",
  "tipo_label": "Montacamas de mayor superficie",
  "cabinas": 2,
  "recorrido": "-1 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Entrada operadores",
   "P1": "Bajo módulo difusión informativa",
   "P2": "Sobre UHI",
   "P3": "Frente Estación enfermería",
   "P4": "Frente Estación enfermería"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "T1",
   "T2"
  ]
 },
 "U": {
  "letra": "U",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 2,
  "recorrido": "-2 al 1",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P-1": "Costado sala Multiuso"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "U1",
   "U2"
  ]
 },
 "V": {
  "letra": "V",
  "tipo": "montacamas_mayor",
  "tipo_label": "Montacamas de mayor superficie",
  "cabinas": 2,
  "recorrido": "-2 al 4",
  "zonas": [
   "AC",
   "INGER"
  ],
  "ubicaciones": {
   "P-1": "Bajo Vestidores",
   "P1": "Bajo Sala de espera",
   "P2": "Zona de estar",
   "P3": "Sobre sala multi uso",
   "P4": "Sobre sala multi uso"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "V1",
   "V2"
  ]
 },
 "W": {
  "letra": "W",
  "tipo": "montacamas",
  "tipo_label": "Montacamas normal",
  "cabinas": 2,
  "recorrido": "-2 al 4",
  "zonas": [
   "AC",
   "INGER"
  ],
  "ubicaciones": {
   "P-1": "Bajo Vestidores",
   "P1": "Bajo Sala de espera",
   "P2": "Zona de estar",
   "P3": "Sobre sala multi uso",
   "P4": "Sobre sala multi uso"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "W1",
   "W2"
  ]
 },
 "X": {
  "letra": "X",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 2,
  "recorrido": "1 al 4",
  "zonas": [
   "INGER"
  ],
  "ubicaciones": {
   "P1": "Bajo  Sala espera",
   "P2": "Frente sala espera paciente",
   "P3": "Frente sala reunión médico paciente",
   "P4": "Frente sala reunión médico paciente"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "X1",
   "X2"
  ]
 },
 "Y": {
  "letra": "Y",
  "tipo": "publico",
  "tipo_label": "Ascensor de público",
  "cabinas": 1,
  "recorrido": "-2 al 1",
  "zonas": [
   "AC",
   "INGER"
  ],
  "ubicaciones": {
   "P-1": "Frente bodega material jardinería",
   "P1": "A un costado of . jefatura"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx"
 },
 "Ñ": {
  "letra": "Ñ",
  "tipo": "montacamas",
  "tipo_label": "Montacamas normal",
  "cabinas": 2,
  "recorrido": "2 al 4",
  "zonas": [
   "AC"
  ],
  "ubicaciones": {
   "P2": "Bajo UCI",
   "P3": "Entre pasillo habitaciones",
   "P4": "Entre pasillo habitaciones"
  },
  "ambiguo": false,
  "fuente": "planos ascensores.pptx",
  "cajas": [
   "Ñ1",
   "Ñ2"
  ]
 }
};
