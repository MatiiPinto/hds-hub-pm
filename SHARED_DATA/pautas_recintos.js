// SHARED_DATA · pautas_recintos.js — matriz recinto → pauta de cotejo (Aut. Sanitaria)
// BORRADOR Fase 1 · asignación automática por tipo de recinto — pendiente validación
// Consumir con: window.SHARED_PAUTAS_RECINTOS · asignaciones[recintoId] = {p:[ambitoIds], regla}
window.SHARED_PAUTAS_RECINTOS = {
  "version": "2026-06-05 · Fase 1 borrador para validación · fase2 2026-09-01 (41 ámbitos de servicio)",
  "fuente": "SHARED_DATA/recintos.js (2228 recintos) × normas AC/CM/FA/DI",
  "total_recintos": 2359,
  "total_asignados": 693,
  "resumen_reglas": {
    "aseo_chatas": 24,
    "box_consulta": 110,
    "box_urgencia": 8,
    "box_urgencia_proc": 3,
    "cirugia_menor": 1,
    "dialisis": 4,
    "estacion_enfermeria": 29,
    "esterilizacion_general": 1,
    "farmacia_almacen": 1,
    "farmacia_general": 7,
    "hospitalizacion": 189,
    "img_angiografia": 2,
    "img_examen": 7,
    "img_scanner": 3,
    "proc_odonto": 10,
    "quirofano": 27,
    "rehabilitacion": 30,
    "sala_procedimientos": 101,
    "toma_muestras": 4,
    "trabajo_limpio": 21,
    "trabajo_sucio": 26,
    "uci": 29,
    "uti": 56
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
    },
    "P2-CAD-37.1-R12": {
      "p": [
        "ac_hospitalizacion__inf__estaci-n-enfermer-a"
      ],
      "regla": "estacion_enfermeria"
    },
    "P2-CAD-37.1-R13": {
      "p": [
        "ac_hospitalizacion__inf__trabajo-limpio"
      ],
      "regla": "trabajo_limpio"
    },
    "P2-CAD-37.1-R14": {
      "p": [
        "ac_hospitalizacion__inf__trabajo-sucio"
      ],
      "regla": "trabajo_sucio"
    },
    "P2-CAD-37.1-R19": {
      "p": [
        "cm_infraestructura__inf__sala-de-procedimientos"
      ],
      "regla": "sala_procedimientos"
    },
    "P2-CAD-37.1-R22": {
      "p": [
        "ac_hospitalizacion__inf__aseo-de-chatas"
      ],
      "regla": "aseo_chatas"
    },
    "P2-CAD-37.1-R28": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R29": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R30": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R31": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R32": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R33": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R34": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R35": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R36": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R37": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R38": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R39": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R40": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R41": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R42": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R43": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R44": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.1-R45": {
      "p": [
        "ac_tratamiento-intermedio__inf__modulo-hospitalizacion"
      ],
      "regla": "uti"
    },
    "P2-CAD-37.2-R18": {
      "p": [
        "ac_hospitalizacion__inf__aseo-de-chatas"
      ],
      "regla": "aseo_chatas"
    },
    "P2-CAD-37.2-R22": {
      "p": [
        "ac_hospitalizacion__inf__estaci-n-enfermer-a"
      ],
      "regla": "estacion_enfermeria"
    },
    "P2-CAD-37.2-R23": {
      "p": [
        "ac_hospitalizacion__inf__trabajo-limpio"
      ],
      "regla": "trabajo_limpio"
    },
    "P2-CAD-37.2-R24": {
      "p": [
        "ac_hospitalizacion__inf__trabajo-limpio"
      ],
      "regla": "trabajo_limpio"
    },
    "P2-CAD-37.2-R25": {
      "p": [
        "ac_hospitalizacion__inf__trabajo-sucio"
      ],
      "regla": "trabajo_sucio"
    },
    "P2-CAD-37.2-R33": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R34": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R35": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R36": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R37": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R38": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R39": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R40": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R41": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R42": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R43": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    },
    "P2-CAD-37.2-R44": {
      "p": [
        "ac_cuidados-intensivos__inf__modulo-de-hospitalizacion"
      ],
      "regla": "uci"
    }
  },
  "asignaciones_servicio": {
    "LABORATORIO CLINICO": {
      "p": [
        "lc_instalacion-funcionamiento__art1",
        "lc_instalacion-funcionamiento__art2",
        "lc_instalacion-funcionamiento__art3",
        "lc_instalacion-funcionamiento__art4",
        "lc_instalacion-funcionamiento__art5",
        "lc_instalacion-funcionamiento__art6",
        "lc_instalacion-funcionamiento__art7",
        "lc_instalacion-funcionamiento__art8",
        "lc_instalaciones__art9",
        "lc_instalaciones__art10",
        "lc_instalaciones__art11",
        "lc_instalaciones__art12",
        "lc_instalaciones__art13",
        "lc_instalaciones__art14",
        "lc_instalaciones__art15",
        "lc_instalaciones__art16",
        "lc_instalaciones__art17",
        "lc_personal__art18",
        "lc_personal__art19",
        "lc_personal__art20",
        "lc_personal__art21",
        "lc_personal__art22",
        "lc_personal__art23",
        "lc_salas-toma-muestras__art24",
        "lc_salas-toma-muestras__art25",
        "lc_salas-toma-muestras__art26",
        "lc_salas-toma-muestras__art27",
        "lc_salas-toma-muestras__art28",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "laboratorio · D.S. 20/2011 · autorización del laboratorio clínico como unidad",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "ANATOMIA PATOLOGICA": {
      "p": [
        "lc_instalacion-funcionamiento__art1",
        "lc_instalacion-funcionamiento__art2",
        "lc_instalacion-funcionamiento__art3",
        "lc_instalacion-funcionamiento__art4",
        "lc_instalacion-funcionamiento__art5",
        "lc_instalacion-funcionamiento__art6",
        "lc_instalacion-funcionamiento__art7",
        "lc_instalacion-funcionamiento__art8",
        "lc_instalaciones__art9",
        "lc_instalaciones__art10",
        "lc_instalaciones__art11",
        "lc_instalaciones__art12",
        "lc_instalaciones__art13",
        "lc_instalaciones__art14",
        "lc_instalaciones__art15",
        "lc_instalaciones__art16",
        "lc_instalaciones__art17",
        "lc_personal__art18",
        "lc_personal__art19",
        "lc_personal__art20",
        "lc_personal__art21",
        "lc_personal__art22",
        "lc_personal__art23",
        "lc_salas-toma-muestras__art24",
        "lc_salas-toma-muestras__art25",
        "lc_salas-toma-muestras__art26",
        "lc_salas-toma-muestras__art27",
        "lc_salas-toma-muestras__art28",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "laboratorio · D.S. 20/2011 art.1 · el laboratorio de anatomía patológica queda comprendido",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "UMT": {
      "p": [
        "lc_instalacion-funcionamiento__art1",
        "lc_instalacion-funcionamiento__art2",
        "lc_instalacion-funcionamiento__art3",
        "lc_instalacion-funcionamiento__art4",
        "lc_instalacion-funcionamiento__art5",
        "lc_instalacion-funcionamiento__art6",
        "lc_instalacion-funcionamiento__art7",
        "lc_instalacion-funcionamiento__art8",
        "lc_instalaciones__art9",
        "lc_instalaciones__art10",
        "lc_instalaciones__art11",
        "lc_instalaciones__art12",
        "lc_instalaciones__art13",
        "lc_instalaciones__art14",
        "lc_instalaciones__art15",
        "lc_instalaciones__art16",
        "lc_instalaciones__art17",
        "lc_personal__art18",
        "lc_personal__art19",
        "lc_personal__art20",
        "lc_personal__art21",
        "lc_personal__art22",
        "lc_personal__art23",
        "lc_salas-toma-muestras__art24",
        "lc_salas-toma-muestras__art25",
        "lc_salas-toma-muestras__art26",
        "lc_salas-toma-muestras__art27",
        "lc_salas-toma-muestras__art28",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "laboratorio · D.S. 20/2011 · medicina transfusional se autoriza como laboratorio",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "PROCEDIMIENTOS UMT": {
      "p": [
        "lc_salas-toma-muestras__art24",
        "lc_salas-toma-muestras__art25",
        "lc_salas-toma-muestras__art26",
        "lc_salas-toma-muestras__art27",
        "lc_salas-toma-muestras__art28",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "laboratorio · D.S. 20/2011 arts. 24-28 · sala de toma de muestras",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "TOMA DE MUESTRA": {
      "p": [
        "lc_salas-toma-muestras__art24",
        "lc_salas-toma-muestras__art25",
        "lc_salas-toma-muestras__art26",
        "lc_salas-toma-muestras__art27",
        "lc_salas-toma-muestras__art28",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "laboratorio · D.S. 20/2011 arts. 24-28 · sala externa de toma de muestras",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "IMAGENOLOGIA": {
      "p": [
        "im_disposiciones-generales__art1",
        "im_disposiciones-generales__art2",
        "im_disposiciones-generales__art3",
        "im_disposiciones-generales__art4",
        "im_disposiciones-generales__art5",
        "im_instalaciones__art7",
        "im_instalaciones__art8",
        "im_instalaciones__art9",
        "im_instalaciones__art10",
        "im_instalaciones__art11",
        "im_instalaciones__art12",
        "im_instalaciones__art13",
        "im_instalaciones__art14",
        "im_instalaciones__art15",
        "im_personal__art16",
        "im_personal__art17",
        "im_personal__art18",
        "im_personal__art19",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "imagenologia · D.S. 133/1984 · instalación radiactiva de 2ª categoría y personal expuesto",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "MED NUCLEAR": {
      "p": [
        "im_disposiciones-generales__art1",
        "im_disposiciones-generales__art2",
        "im_disposiciones-generales__art3",
        "im_disposiciones-generales__art4",
        "im_disposiciones-generales__art5",
        "im_instalaciones__art7",
        "im_instalaciones__art8",
        "im_instalaciones__art9",
        "im_instalaciones__art10",
        "im_instalaciones__art11",
        "im_instalaciones__art12",
        "im_instalaciones__art13",
        "im_instalaciones__art14",
        "im_instalaciones__art15",
        "im_personal__art16",
        "im_personal__art17",
        "im_personal__art18",
        "im_personal__art19",
        "mn_estructura-emn__sec2_1",
        "mn_estructura-emn__sec2_1_2",
        "mn_estructura-emn__sec2_3_4_2",
        "mn_proceso-atencion__sec3_3",
        "mn_control-calidad__sec5_1",
        "mn_control-calidad__sec5_2_1_1",
        "mn_control-calidad__sec5_2_1_2",
        "mn_control-calidad__sec5_2_1_3",
        "mn_control-calidad__sec5_2_2",
        "mn_control-calidad__sec5_2_2_1",
        "mn_control-calidad__sec5_2_2_2",
        "mn_control-calidad__sec5_2_2_3",
        "mn_control-calidad__sec5_2_2_4",
        "mn_control-calidad__sec5_2_2_5",
        "mn_control-calidad__sec5_2_3",
        "mn_control-calidad__sec5_2_5",
        "mn_control-calidad__sec5_2_6",
        "mn_personal__sec6_1",
        "mn_personal__sec6_2",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "imagenologia · D.S. 133/1984 · instalación radiactiva de 1ª categoría",
        "medicina_nuclear · NT 223 / D.E. 48/2022 · norma técnica específica de medicina nuclear",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "QUIMIO AMBULATORIA": {
      "p": [
        "qmt_revision-documental__main",
        "qmt_organizacion__main",
        "qmt_rrhh__main",
        "qmt_infraestructura__main",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "quimioterapia · D. Afecto 74/2015 · pauta AS de quimioterapia oncológica",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "HOSP PSIQUIATRIA": {
      "p": [
        "hp_establecimiento__art85",
        "hp_establecimiento__art86__header",
        "hp_establecimiento__art87__header",
        "hp_establecimiento__art88",
        "hp_establecimiento__art89",
        "hp_establecimiento__art90__header",
        "hp_establecimiento__art91",
        "hp_establecimiento__art92",
        "hp_establecimiento__art93",
        "hp_establecimiento__art94",
        "hp_derechos-operacion__art6__header",
        "hp_derechos-operacion__art11__header",
        "hp_derechos-operacion__art12",
        "hp_derechos-operacion__art13__header",
        "hp_derechos-operacion__art15",
        "hp_derechos-operacion__art17__header",
        "hp_derechos-operacion__art18",
        "hp_derechos-operacion__art20",
        "hp_derechos-operacion__art22",
        "hp_involuntaria__art46",
        "hp_involuntaria__art47",
        "hp_involuntaria__art48",
        "hp_involuntaria__art53__header",
        "hp_involuntaria__art54__header",
        "hp_involuntaria__art59",
        "hp_involuntaria__art60",
        "hp_involuntaria__art61__header",
        "hp_involuntaria__art62",
        "hp_involuntaria__art64",
        "hp_involuntaria__art66",
        "hp_involuntaria__art67",
        "hp_involuntaria__art71",
        "hp_involuntaria__art72",
        "hp_involuntaria__art73",
        "hp_ninos-adolescentes__art78",
        "hp_ninos-adolescentes__art80",
        "hp_ninos-adolescentes__art82__header",
        "hp_ninos-adolescentes__art83",
        "hp_ninos-adolescentes__art84",
        "hp_comunicacion__art95",
        "hp_comunicacion__art96__header",
        "hp_uhcip-materiales__pavimentos",
        "hp_uhcip-materiales__muros-perimetrales",
        "hp_uhcip-materiales__muros-interiores",
        "hp_uhcip-materiales__guardapolvos",
        "hp_uhcip-materiales__cielos",
        "hp_uhcip-materiales__puertas",
        "hp_uhcip-materiales__puertas-evacuacion",
        "hp_uhcip-materiales__marcos",
        "hp_uhcip-materiales__cerraduras",
        "hp_uhcip-materiales__ventanas",
        "hp_uhcip-materiales__sanitarios",
        "hp_uhcip-materiales__accesorios-bano",
        "hp_uhcip-materiales__revestimiento-bano",
        "hp_uhcip-materiales__celosias",
        "hp_uhcip-materiales__pinturas",
        "hp_uhcip-mobiliario__mob-exterior",
        "hp_uhcip-mobiliario__mob-interior",
        "hp_uhcip-mobiliario__camas",
        "hp_uhcip-mobiliario__closet",
        "hp_uhcip-mobiliario__casilleros",
        "hp_uhcip-mobiliario__techumbres",
        "hp_uhcip-instalaciones__griferias",
        "hp_uhcip-instalaciones__llaves-paso",
        "hp_uhcip-instalaciones__piletas",
        "hp_uhcip-instalaciones__climatizacion",
        "hp_uhcip-instalaciones__electricas",
        "hp_uhcip-instalaciones__telefonos",
        "hp_uhcip-instalaciones__televisor",
        "hp_uhcip-instalaciones__luminarias",
        "hp_uhcip-instalaciones__camaras-recintos",
        "hp_uhcip-instalaciones__cctv-publicas",
        "hp_uhcip-instalaciones__red-humeda-seca",
        "hp_uhcip-instalaciones__extintores",
        "hp_uhcip-instalaciones__aguas-lluvias",
        "hp_uhcip-instalaciones__quincalleria",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "hospitalizacion_psiquiatrica · D. 9/2024 · hospitalización psiquiátrica, norma completa (incluye UHCIP)",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "PSIQUIATRIA": {
      "p": [
        "hp_establecimiento__art85",
        "hp_establecimiento__art86__header",
        "hp_establecimiento__art87__header",
        "hp_establecimiento__art88",
        "hp_establecimiento__art89",
        "hp_establecimiento__art90__header",
        "hp_establecimiento__art91",
        "hp_establecimiento__art92",
        "hp_establecimiento__art93",
        "hp_establecimiento__art94",
        "hp_derechos-operacion__art6__header",
        "hp_derechos-operacion__art11__header",
        "hp_derechos-operacion__art12",
        "hp_derechos-operacion__art13__header",
        "hp_derechos-operacion__art15",
        "hp_derechos-operacion__art17__header",
        "hp_derechos-operacion__art18",
        "hp_derechos-operacion__art20",
        "hp_derechos-operacion__art22",
        "hp_involuntaria__art46",
        "hp_involuntaria__art47",
        "hp_involuntaria__art48",
        "hp_involuntaria__art53__header",
        "hp_involuntaria__art54__header",
        "hp_involuntaria__art59",
        "hp_involuntaria__art60",
        "hp_involuntaria__art61__header",
        "hp_involuntaria__art62",
        "hp_involuntaria__art64",
        "hp_involuntaria__art66",
        "hp_involuntaria__art67",
        "hp_involuntaria__art71",
        "hp_involuntaria__art72",
        "hp_involuntaria__art73",
        "hp_ninos-adolescentes__art78",
        "hp_ninos-adolescentes__art80",
        "hp_ninos-adolescentes__art82__header",
        "hp_ninos-adolescentes__art83",
        "hp_ninos-adolescentes__art84",
        "hp_comunicacion__art95",
        "hp_comunicacion__art96__header",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "hospitalizacion_psiquiatrica · D. 9/2024 · unidad ambulatoria: establecimiento, derechos y notificaciones (sin el capítulo de infraestructura UHCIP)",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "FARMACIA ABIERTA": {
      "p": [
        "fa_funcionamiento__i-senaleticas",
        "fa_funcionamiento__ii-oficina-quimico-farmaceutico",
        "fa_funcionamiento__iii-condiciones-de-almacenamiento-de-med",
        "fa_funcionamiento__iv-condiciones-sanitarias-y-ambientales-",
        "fa_funcionamiento__v-reglamentos-y-material-de-consulta-pub",
        "fa_funcionamiento__vi-ley-de-farmacos",
        "fa_funcionamiento__viia-listado-de-precios-caracteristicas",
        "fa_funcionamiento__viib-listado-de-precios-requisitos-art-4",
        "fa_instalacion__ii-requerimientos-minimos-del-local-dest",
        "fa_instalacion__iii-condiciones-sanitarias-y-ambientales",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "farmacia · Checklist Farmacia ISP · farmacia de atención directa a público",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "DIALISIS": {
      "p": [
        "di_autorizacion-sanitaria__art3",
        "di_autorizacion-sanitaria__art4",
        "di_autorizacion-sanitaria__art5",
        "di_autorizacion-sanitaria__art6",
        "di_direccion-tecnica__art7",
        "di_direccion-tecnica__art8",
        "di_direccion-tecnica__art9",
        "di_direccion-tecnica__art10",
        "di_personal__art11",
        "di_personal__art12",
        "di_personal__art13",
        "di_personal__art14",
        "di_instalaciones__art15",
        "di_instalaciones__art16",
        "di_instalaciones__art17",
        "di_instalaciones__art18",
        "di_calidad-agua-funcionamiento__art19",
        "di_calidad-agua-funcionamiento__art20",
        "di_calidad-agua-funcionamiento__art21",
        "di_calidad-agua-funcionamiento__art22",
        "di_calidad-agua-funcionamiento__art23",
        "di_calidad-agua-funcionamiento__art24",
        "di_calidad-agua-funcionamiento__art25",
        "di_calidad-agua-funcionamiento__art26",
        "di_calidad-agua-funcionamiento__art27",
        "di_calidad-agua-funcionamiento__art28",
        "di_calidad-agua-funcionamiento__art29",
        "di_calidad-agua-funcionamiento__art30",
        "di_calidad-agua-funcionamiento__art31",
        "di_equipamiento__art32",
        "di_equipamiento__art33",
        "di_equipamiento__art34",
        "di_equipamiento__art35",
        "di_equipamiento__art36",
        "di_equipamiento__art37",
        "di_registros__art38",
        "di_registros__art39",
        "di_registros__art40",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "dialisis · D. 45/2016 · centro de diálisis, norma completa",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "CASINO GENERAL": {
      "p": [
        "al_alimentacion__inf__titulo-i"
      ],
      "regla": "fase2",
      "fund": [
        "al · RSA D.S. 977/96 Título I · servicio de alimentación"
      ]
    },
    "CASINO FUNCIONARIOS": {
      "p": [
        "al_alimentacion__inf__titulo-i"
      ],
      "regla": "fase2",
      "fund": [
        "al · RSA D.S. 977/96 Título I · servicio de alimentación"
      ]
    },
    "ESTERILIZACION": {
      "p": [
        "cp_calderas__equ__reglamento",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "cp · D.S. 10/2013 · autoclaves de esterilización (equipos a presión)",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "FARMACIA HOSPITALIZADOS": {
      "p": [
        "fa_funcionamiento__i-senaleticas",
        "fa_funcionamiento__ii-oficina-quimico-farmaceutico",
        "fa_funcionamiento__iii-condiciones-de-almacenamiento-de-med",
        "fa_funcionamiento__iv-condiciones-sanitarias-y-ambientales-",
        "fa_funcionamiento__v-reglamentos-y-material-de-consulta-pub",
        "fa_funcionamiento__vi-ley-de-farmacos",
        "fa_funcionamiento__viia-listado-de-precios-caracteristicas",
        "fa_funcionamiento__viib-listado-de-precios-requisitos-art-4",
        "fa_instalacion__ii-requerimientos-minimos-del-local-dest",
        "fa_instalacion__iii-condiciones-sanitarias-y-ambientales",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "farmacia · Checklist Farmacia ISP · farmacia de establecimiento asistencial",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "FARMACIA RECETARIO MAGISTRAL IV": {
      "p": [
        "fa_funcionamiento__i-senaleticas",
        "fa_funcionamiento__ii-oficina-quimico-farmaceutico",
        "fa_funcionamiento__iii-condiciones-de-almacenamiento-de-med",
        "fa_funcionamiento__iv-condiciones-sanitarias-y-ambientales-",
        "fa_funcionamiento__v-reglamentos-y-material-de-consulta-pub",
        "fa_funcionamiento__vi-ley-de-farmacos",
        "fa_funcionamiento__viia-listado-de-precios-caracteristicas",
        "fa_funcionamiento__viib-listado-de-precios-requisitos-art-4",
        "fa_instalacion__ii-requerimientos-minimos-del-local-dest",
        "fa_instalacion__iii-condiciones-sanitarias-y-ambientales",
        "cz_mezclas__org__ngt25",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "farmacia · Checklist Farmacia ISP · recetario magistral",
        "cz · NGT 25 · central de mezclas, preparación de antineoplásicos",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "DROGUERIA": {
      "p": [
        "dr_drogueria__org__titulo-iii",
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "dr · D.S. 466/84 Título III · área DROGUERIA propia en el Atlas desde sep-2026",
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "REAS": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · el Atlas (sep-2026) declara el área REAS propia: la sala de residuos del establecimiento es el dueño natural de la norma"
      ]
    },
    "ALIVIO DEL DOLOR": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "ATENCION USUARIO": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "CARDIOLOGIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "CONSULTAS ESPECIALIDADES QUIRURGICAS": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "CONSULTAS PROCEDIMIENTO QUIRURGICOS": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "CONSULTAS Y PROCEDIMIENTOS ESPECIALIDADES MEDICAS": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "DERMATOLOGIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "EMERGENCIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "ENDOSCOPIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "HOSPITALIZACION MQ 3": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "HOSPITALIZACION MQ 4": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "INFECTOLOGIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "MED FISICA Y REHABILITACION": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "NEUROLOGIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "ODONTOLOGIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "OFTALMOLOGIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "OIRS": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "OTORRINOLARINGOLOGIA": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "PABELLONES": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "PROCURAMIENTO": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "TRASPLANTES": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "UCI": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "UHI": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "UIH": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    },
    "UTI": {
      "p": [
        "re_reas__org__reglamento"
      ],
      "regla": "fase2",
      "fund": [
        "re · D.S. 6/2009 · REAS de la unidad generadora: lo presenta el responsable del servicio"
      ]
    }
  },
  "brechas_fase2": [
    {
      "item": "re · D.S. 6/2009 REAS",
      "motivo": "RESUELTO sep-2026: el Atlas declaró el área REAS y la norma se sembró ahí. Queda a validación de las referentes en la Revisión."
    },
    {
      "item": "cp · D.S. 10/2013 calderas",
      "motivo": "Sembrada solo en ESTERILIZACION (autoclaves). Las calderas de la central térmica son de la Concesionaria y no están en el polígono de ningún servicio clínico de Atlas."
    },
    {
      "item": "UTO",
      "motivo": "Unidad de Trasplante/Tejido Ocular: 1 recinto, sin norma específica digitalizada en la plataforma. No se siembra para no asignar una pauta que no corresponde."
    },
    {
      "item": "Hospitalización Medicina Sur",
      "motivo": "El área existe en Atlas vista 1 pero con 0 cajas dibujadas (2 cáscaras vacías en P3): la resolución de permisos por polígono no tiene dónde apoyarse. 19 de sus 68 recintos ya tienen pauta Fase 1 por nombre. Dibujar el área en Atlas para completar."
    },
    {
      "item": "ARCHIVOS · AUDITORIOS · ADMINISTRACION · DIRECCION · JEFES MEDICOS · RRHH",
      "motivo": "Áreas administrativas sin prestación de salud: no requieren autorización sanitaria. Quedan sin pauta a propósito."
    }
  ]
};
