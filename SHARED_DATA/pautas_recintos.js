// SHARED_DATA · pautas_recintos.js — matriz recinto → pauta de cotejo (Aut. Sanitaria)
// BORRADOR Fase 1 · asignación automática por tipo de recinto — pendiente validación
// Consumir con: window.SHARED_PAUTAS_RECINTOS · asignaciones[recintoId] = {p:[ambitoIds], regla}
window.SHARED_PAUTAS_RECINTOS = {
 "version": "2026-06-05 · Fase 1 borrador para validación",
 "fuente": "SHARED_DATA/recintos.js (2228 recintos) × normas AC/CM/FA/DI",
 "total_recintos": 2228,
 "total_asignados": 653,
 "resumen_reglas": {
  "box_urgencia": 8,
  "box_urgencia_proc": 3,
  "sala_procedimientos": 100,
  "box_consulta": 110,
  "rehabilitacion": 30,
  "estacion_enfermeria": 27,
  "trabajo_sucio": 24,
  "farmacia_general": 7,
  "farmacia_almacen": 1,
  "toma_muestras": 4,
  "img_examen": 7,
  "aseo_chatas": 22,
  "hospitalizacion": 189,
  "trabajo_limpio": 18,
  "img_scanner": 3,
  "quirofano": 27,
  "img_angiografia": 2,
  "uti": 38,
  "uci": 17,
  "proc_odonto": 10,
  "cirugia_menor": 1,
  "dialisis": 4,
  "esterilizacion_general": 1
 },
 "asignaciones": {
  "P1-CAD-1-R0": {
   "p": [
    "ac_emergencia__inf__modulo-box-de-atenci-n-clinica-emergenci"
   ],
   "regla": "box_urgencia"
  },
  "P1-CAD-1-R1": {
   "p": [
    "ac_emergencia__inf__modulo-box-de-atenci-n-clinica-emergenci"
   ],
   "regla": "box_urgencia"
  },
  "P1-CAD-1-R2": {
   "p": [
    "ac_emergencia__inf__modulo-box-de-atenci-n-clinica-emergenci"
   ],
   "regla": "box_urgencia"
  },
  "P1-CAD-1-R3": {
   "p": [
    "ac_emergencia__inf__modulo-box-de-atenci-n-clinica-emergenci"
   ],
   "regla": "box_urgencia"
  },
  "P1-CAD-1-R4": {
   "p": [
    "ac_emergencia__inf__modulo-box-de-atenci-n-clinica-emergenci"
   ],
   "regla": "box_urgencia"
  },
  "P1-CAD-1-R6": {
   "p": [
    "ac_emergencia__inf__modulo-box-de-atenci-n-clinica-emergenci"
   ],
   "regla": "box_urgencia"
  },
  "P1-CAD-1-R7": {
   "p": [
    "ac_emergencia__inf__modulo-box-de-atenci-n-clinica-emergenci"
   ],
   "regla": "box_urgencia"
  },
  "P1-CAD-1-R8": {
   "p": [
    "ac_emergencia__inf__modulo-box-de-atenci-n-clinica-emergenci"
   ],
   "regla": "box_urgencia"
  },
  "P1-CAD-1-R10": {
   "p": [
    "ac_emergencia__inf__sala-de-atenci-n-emergencia-y-procedimie"
   ],
   "regla": "box_urgencia_proc"
  },
  "P1-CAD-1-R11": {
   "p": [
    "ac_emergencia__inf__sala-de-atenci-n-emergencia-y-procedimie"
   ],
   "regla": "box_urgencia_proc"
  },
  "P1-CAD-1-R12": {
   "p": [
    "ac_emergencia__inf__sala-de-atenci-n-emergencia-y-procedimie"
   ],
   "regla": "box_urgencia_proc"
  },
  "P1-CAD-2-R9": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-2-R10": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-2-R14": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-2-R15": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-2-R16": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-2-R19": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-2-R20": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-2-R22": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P1-CAD-13-R0": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R1": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R2": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R3": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R4": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R6": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R7": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R8": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R9": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R10": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R11": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R16": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R17": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R18": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R19": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R20": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R21": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P1-CAD-13-R24": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R32": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R36": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R39": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-13-R43": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-16-R1": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-16-R13": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P1-CAD-16-R16": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-16-R17": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-16-R21": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-16-R22": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-16-R26": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-16-R27": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-16-R28": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-16-R29": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-20-R0": {
   "p": [
    "ac_farmacia__inf__recintos-generales",
    "fa_instalacion__ii-requerimientos-minimos-del-local-dest"
   ],
   "regla": "farmacia_general"
  },
  "P1-CAD-20-R1": {
   "p": [
    "ac_farmacia__inf__almacenamiento-de-medicamentos-e-insumos"
   ],
   "regla": "farmacia_almacen"
  },
  "P1-CAD-20-R2": {
   "p": [
    "ac_farmacia__inf__recintos-generales",
    "fa_instalacion__ii-requerimientos-minimos-del-local-dest"
   ],
   "regla": "farmacia_general"
  },
  "P1-CAD-20-R3": {
   "p": [
    "ac_farmacia__inf__recintos-generales",
    "fa_instalacion__ii-requerimientos-minimos-del-local-dest"
   ],
   "regla": "farmacia_general"
  },
  "P1-CAD-20-R4": {
   "p": [
    "ac_farmacia__inf__recintos-generales",
    "fa_instalacion__ii-requerimientos-minimos-del-local-dest"
   ],
   "regla": "farmacia_general"
  },
  "P1-CAD-20-R5": {
   "p": [
    "ac_farmacia__inf__recintos-generales",
    "fa_instalacion__ii-requerimientos-minimos-del-local-dest"
   ],
   "regla": "farmacia_general"
  },
  "P1-CAD-24-R0": {
   "p": [
    "cm_infraestructura__inf__recinto-toma-de-muestras"
   ],
   "regla": "toma_muestras"
  },
  "P1-CAD-24-R2": {
   "p": [
    "ac_imagenologia__inf__sala-examenes-especiales"
   ],
   "regla": "img_examen"
  },
  "P1-CAD-24-R3": {
   "p": [
    "cm_infraestructura__inf__recinto-toma-de-muestras"
   ],
   "regla": "toma_muestras"
  },
  "P1-CAD-24-R5": {
   "p": [
    "cm_infraestructura__inf__recinto-toma-de-muestras"
   ],
   "regla": "toma_muestras"
  },
  "P1-CAD-24-R6": {
   "p": [
    "ac_imagenologia__inf__sala-examenes-especiales"
   ],
   "regla": "img_examen"
  },
  "P1-CAD-24-R7": {
   "p": [
    "ac_imagenologia__inf__sala-examenes-especiales"
   ],
   "regla": "img_examen"
  },
  "P1-CAD-24-R9": {
   "p": [
    "ac_imagenologia__inf__sala-examenes-especiales"
   ],
   "regla": "img_examen"
  },
  "P1-CAD-24-R10": {
   "p": [
    "ac_imagenologia__inf__sala-examenes-especiales"
   ],
   "regla": "img_examen"
  },
  "P1-CAD-26-R6": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-26-R7": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-26-R11": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-26-R12": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-26-R13": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-26-R22": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P1-CAD-26-R23": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P1-CAD-26-R32": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-26-R48": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-26-R50": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P1-CAD-43-R1": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P1-CAD-43-R12": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-43-R18": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R19": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P1-CAD-43-R21": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P1-CAD-43-R22": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-43-R27": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R32": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R34": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R35": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R37": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R38": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R39": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R42": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R44": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R45": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R46": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R47": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R49": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-43-R51": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P1-CAD-44-R4": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P1-CAD-44-R5": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-44-R6": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P1-CAD-44-R14": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-44-R15": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P1-CAD-47-R1": {
   "p": [
    "ac_imagenologia__inf__sala-examenes-especiales"
   ],
   "regla": "img_examen"
  },
  "P1-CAD-47-R7": {
   "p": [
    "ac_imagenologia__inf__sala-scanner"
   ],
   "regla": "img_scanner"
  },
  "P1-CAD-47-R12": {
   "p": [
    "ac_imagenologia__inf__sala-scanner"
   ],
   "regla": "img_scanner"
  },
  "P1-CAD-47-R22": {
   "p": [
    "ac_imagenologia__inf__sala-examenes-especiales"
   ],
   "regla": "img_examen"
  },
  "P1-CAD-58-R8": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P2-CAD-2-R1": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-2-R2": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-2-R3": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-2-R13": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-2-R14": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-2-R15": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-2-R16": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-2-R19": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-2-R25": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R5": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R6": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R7": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R8": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R9": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R10": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R11": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R12": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R13": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R23": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R30": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R31": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R32": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R34": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R35": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R36": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R37": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R38": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R39": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R40": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R41": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R42": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R43": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R44": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R45": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R50": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R61": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P2-CAD-6-R69": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-6-R70": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-7-R2": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-7-R3": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-7-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-7-R5": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-7-R6": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-7-R7": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-7-R11": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-8-R6": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-8-R7": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-8-R9": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-8-R11": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-8-R13": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-8-R15": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P2-CAD-10-R0": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P2-CAD-10-R3": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R4": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R5": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R6": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R8": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R9": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R10": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R11": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R12": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R13": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R14": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P2-CAD-10-R18": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-10-R20": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-21-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-21-R5": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-21-R8": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-21-R9": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-21-R10": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-21-R13": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-21-R14": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-21-R15": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-21-R16": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-22-R0": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-22-R1": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-22-R3": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-22-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-22-R14": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P2-CAD-22-R16": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P2-CAD-22-R17": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-22-R19": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P2-CAD-27-R0": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R1": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R6": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R7": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R8": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R9": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R10": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R11": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R17": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R18": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R20": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R29": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-27-R30": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P2-CAD-27-R32": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P2-CAD-27-R35": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R38": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-27-R39": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R4": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R5": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R6": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R7": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R8": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R9": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R10": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R11": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R12": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R13": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R14": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R15": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-28-R18": {
   "p": [
    "ac_cirugia-mayor__inf__quirofano",
    "ac_cirugia-mayor__equ__equipamiento-basico"
   ],
   "regla": "quirofano"
  },
  "P2-CAD-29-R1": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P2-CAD-29-R2": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-29-R7": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P2-CAD-30-R0": {
   "p": [
    "ac_imagenologia__inf__sala-angiograf-a"
   ],
   "regla": "img_angiografia"
  },
  "P2-CAD-30-R3": {
   "p": [
    "ac_imagenologia__inf__sala-angiograf-a"
   ],
   "regla": "img_angiografia"
  },
  "P2-CAD-38-R13": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R14": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P2-CAD-38-R17": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-38-R18": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-38-R19": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P2-CAD-38-R22": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P2-CAD-38-R24": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-38-R25": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-38-R27": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R28": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R29": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R30": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R31": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R32": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R33": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R34": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-38-R35": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-38-R37": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-38-R39": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R0": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-39-R1": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-39-R8": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-39-R10": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P2-CAD-39-R16": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R17": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-39-R19": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P2-CAD-39-R20": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-39-R21": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P2-CAD-39-R24": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-39-R25": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R26": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R27": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R28": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R29": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R30": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R31": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-39-R32": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R0": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P2-CAD-40-R1": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P2-CAD-40-R7": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-40-R9": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P2-CAD-40-R12": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R13": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R15": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R16": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R17": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R18": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R19": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R20": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-40-R29": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-40-R30": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-40-R31": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-40-R33": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R0": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-41-R1": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R3": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R4": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R5": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R6": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R7": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R8": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R9": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R10": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R13": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P2-CAD-41-R15": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P2-CAD-41-R16": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P2-CAD-41-R20": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P2-CAD-41-R23": {
   "p": [
    "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
   ],
   "regla": "uti"
  },
  "P2-CAD-41-R24": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P2-CAD-41-R30": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-41-R31": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-41-R32": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P2-CAD-41-R33": {
   "p": [
    "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
   ],
   "regla": "uci"
  },
  "P3-CAD-4-R2": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R3": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R4": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R5": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-4-R6": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R7": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R8": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R9": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R11": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R12": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R13": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R23": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R24": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R25": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R26": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R27": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R28": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R29": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R30": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R31": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R40": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R41": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R42": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-4-R46": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P3-CAD-4-R48": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P3-CAD-4-R49": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P3-CAD-5-R1": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-5-R2": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-5-R3": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-5-R4": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-5-R5": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-5-R6": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-5-R8": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-5-R9": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-5-R14": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P3-CAD-5-R15": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P3-CAD-5-R20": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P3-CAD-11-R0": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-11-R1": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-11-R2": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-11-R3": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-11-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-11-R9": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-11-R10": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-11-R12": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-11-R13": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-11-R14": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-11-R15": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-11-R16": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-12-R0": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R1": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R2": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R4": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R5": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R6": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R8": {
   "p": [
    "ac_imagenologia__inf__sala-scanner"
   ],
   "regla": "img_scanner"
  },
  "P3-CAD-12-R9": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P3-CAD-12-R10": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R11": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R12": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R14": {
   "p": [
    "cm_infraestructura__inf__sala-procedimientos-odontol-gicos"
   ],
   "regla": "proc_odonto"
  },
  "P3-CAD-12-R20": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-14-R0": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-14-R1": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-14-R2": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-14-R3": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-14-R4": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P3-CAD-14-R5": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-14-R8": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-14-R11": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-14-R16": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-14-R17": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-14-R18": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-14-R19": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-14-R20": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-17-R3": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-17-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-17-R5": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-17-R6": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P3-CAD-17-R7": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-17-R15": {
   "p": [
    "ac_cirugia-menor__inf__quir-fano-o-pabellon-cirug-a-menor",
    "ac_cirugia-menor__equ__equipamiento-basico"
   ],
   "regla": "cirugia_menor"
  },
  "P3-CAD-17-R18": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-17-R19": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P3-CAD-17-R20": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P3-CAD-17-R21": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-17-R22": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-17-R23": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-31-R1": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R3": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R4": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R7": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P3-CAD-31-R17": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R18": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R19": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R20": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R21": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R22": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R23": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R24": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R25": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R26": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R27": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R28": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R47": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R48": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R50": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-31-R51": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P3-CAD-31-R54": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-31-R59": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P3-CAD-31-R60": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P3-CAD-32-R6": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-32-R11": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R13": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R15": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R16": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R17": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R18": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R19": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R20": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R21": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R22": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R23": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R24": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R25": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R26": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R27": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R48": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-32-R49": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P3-CAD-32-R50": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P3-CAD-32-R59": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P3-CAD-32-R64": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P3-CAD-32-R65": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P3-CAD-33-R3": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R5": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P3-CAD-33-R7": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P3-CAD-33-R9": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R10": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R11": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R12": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R13": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R14": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R15": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R16": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R17": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R18": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R19": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R20": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R21": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-33-R49": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P3-CAD-33-R50": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P3-CAD-33-R51": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P3-CAD-42-R1": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R2": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R3": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R4": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R5": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R6": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R7": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R8": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R9": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R10": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R11": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R12": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R15": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R16": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P3-CAD-42-R18": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P3-CAD-42-R22": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P3-CAD-42-R28": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P3-CAD-42-R30": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P4-CAD-3-R4": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R5": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R6": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P4-CAD-3-R7": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R8": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R9": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R10": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R11": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R12": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R13": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R16": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R17": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R18": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R19": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R20": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R21": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R23": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R24": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R25": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-3-R27": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P4-CAD-3-R31": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P4-CAD-3-R46": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P4-CAD-3-R51": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R1": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R3": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R4": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R9": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P4-CAD-34-R20": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R21": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R22": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R23": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R24": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R25": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R26": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R27": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R28": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R29": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R30": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R31": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R50": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R51": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R52": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-34-R53": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P4-CAD-34-R54": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P4-CAD-34-R57": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P4-CAD-34-R61": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P4-CAD-34-R62": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P4-CAD-35-R5": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P4-CAD-35-R10": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R12": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R14": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R15": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R16": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R17": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R18": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R19": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R20": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R21": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R22": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R23": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R24": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R25": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R26": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R47": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-35-R48": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P4-CAD-35-R49": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P4-CAD-35-R59": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P4-CAD-35-R64": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P4-CAD-35-R65": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P4-CAD-36-R3": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R5": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P4-CAD-36-R7": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P4-CAD-36-R9": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R10": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R11": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R12": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R13": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R14": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R15": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R16": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R17": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R18": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R19": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R20": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R21": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-36-R51": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P4-CAD-36-R52": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P4-CAD-36-R53": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-limpio"
   ],
   "regla": "trabajo_limpio"
  },
  "P4-CAD-42-R1": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R2": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R3": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R4": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R5": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R6": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R7": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R8": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R9": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R10": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R11": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R12": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R13": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R14": {
   "p": [
    "ac_hospitalizacion__inf__modulo-basico-de-hospitalizacion"
   ],
   "regla": "hospitalizacion"
  },
  "P4-CAD-42-R16": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P4-CAD-42-R25": {
   "p": [
    "ac_hospitalizacion__inf__aseo-de-chatas"
   ],
   "regla": "aseo_chatas"
  },
  "P-1-CAD-3-R0": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R1": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R2": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R3": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R5": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-3-R8": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R13": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R14": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R15": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-3-R16": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-4-R1": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-4-R2": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-4-R3": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-4-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-4-R5": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-4-R7": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-4-R9": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-4-R10": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-5-R0": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-5-R1": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P-1-CAD-5-R5": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-9-R0": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-9-R1": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-9-R3": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-9-R4": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-9-R5": {
   "p": [
    "ac_hospitalizacion__inf__estaci-n-enfermer-a"
   ],
   "regla": "estacion_enfermeria"
  },
  "P-1-CAD-9-R6": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P-1-CAD-9-R12": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-9-R13": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-9-R15": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-9-R16": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-9-R22": {
   "p": [
    "ac_farmacia__inf__recintos-generales",
    "fa_instalacion__ii-requerimientos-minimos-del-local-dest"
   ],
   "regla": "farmacia_general"
  },
  "P-1-CAD-15-R7": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R11": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R29": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-15-R30": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-15-R31": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-15-R32": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-15-R33": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-15-R35": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-15-R36": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-15-R37": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-15-R38": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-15-R43": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-15-R54": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R60": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R62": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R63": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R64": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R67": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R68": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-15-R69": {
   "p": [
    "cm_infraestructura__inf__sala-basica-de-rehabilitacion"
   ],
   "regla": "rehabilitacion"
  },
  "P-1-CAD-18-R0": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-18-R1": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-18-R4": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-18-R8": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-18-R9": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-18-R10": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-18-R12": {
   "p": [
    "cm_infraestructura__inf__recinto-toma-de-muestras"
   ],
   "regla": "toma_muestras"
  },
  "P-1-CAD-18-R15": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-18-R16": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-19-R1": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-19-R2": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-19-R6": {
   "p": [
    "di_instalaciones__art15"
   ],
   "regla": "dialisis"
  },
  "P-1-CAD-19-R7": {
   "p": [
    "di_instalaciones__art15"
   ],
   "regla": "dialisis"
  },
  "P-1-CAD-19-R12": {
   "p": [
    "di_instalaciones__art15"
   ],
   "regla": "dialisis"
  },
  "P-1-CAD-19-R13": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P-1-CAD-19-R17": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P-1-CAD-19-R24": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-19-R25": {
   "p": [
    "di_instalaciones__art15"
   ],
   "regla": "dialisis"
  },
  "P-1-CAD-23-R0": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-23-R3": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-23-R5": {
   "p": [
    "ac_hospitalizacion__inf__trabajo-sucio"
   ],
   "regla": "trabajo_sucio"
  },
  "P-1-CAD-23-R6": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-23-R7": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-23-R8": {
   "p": [
    "cm_infraestructura__inf__sala-para-atenci-n-consulta-con-examen"
   ],
   "regla": "box_consulta"
  },
  "P-1-CAD-48-R9": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-48-R10": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-48-R19": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-48-R20": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-48-R21": {
   "p": [
    "cm_infraestructura__inf__sala-de-procedimientos"
   ],
   "regla": "sala_procedimientos"
  },
  "P-1-CAD-50-R14": {
   "p": [
    "ac_esterilizacion__inf__condiciones-generales"
   ],
   "regla": "esterilizacion_general"
  },
  "P-1-CAD-54-R1": {
   "p": [
    "ac_farmacia__inf__recintos-generales",
    "fa_instalacion__ii-requerimientos-minimos-del-local-dest"
   ],
   "regla": "farmacia_general"
  }
 }
};
