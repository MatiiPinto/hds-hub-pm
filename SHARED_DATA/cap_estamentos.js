// SHARED_DATA/cap_estamentos.js — Estamentos por Servicio Clínico (Programa de Capacitación EMMC)
// Definido por Matías Pinto el 15-09-2026. Es el CATÁLOGO: qué estamentos existen en cada
// servicio. Qué estamentos participan en cada equipo se marca en la plataforma 30 y se
// guarda en la columna S "Estamentos" de la hoja 4 (fuente oficial) vía
// _DEV/ingesta_estamentos.py. Las claves son los nombres de servicio tal como van en la
// columna Q de la hoja (mayúsculas, sin tilde). Sin datos personales.
window.CAP_ESTAMENTOS = (function(){
  var UTI = ["Médico","TENS","Enfermera/o"];
  var HMQ = ["Enfermera/o","TENS"];
  var FARM = ["Químico farmacéutico","TENS","Auxiliar"];
  return {
    "PABELLON CENTRAL": ["Cirujano","Anestesista","Enfermera/o","TENS arsenalera","TENS pabellonera","TENS aux. anestesia","TENS rayos","Auxiliar"],
    "ESTERILIZACION": ["Enfermera/o","TENS","Auxiliar"],
    "ODONTOLOGIA": ["Dentista","TENS"],
    "UNIDAD DE CUIDADOS INTERMEDIOS (UTI)": UTI,
    "IMAGENOLOGIA": ["Médico","Tecnólogo/a médico","TENS"],
    "OFTALMOLOGIA": ["Médico","Tecnólogo/a médico","Enfermera/o","TENS"],
    "UNIDAD DE CUIDADOS INTENSIVOS (UCI)": UTI,
    "MEDICINA FISICA Y REHABILITACION": ["Médico","Kinesiólogo/a","Terapeuta ocupacional","Fonoaudióloga","TENS"],
    "DERMATOLOGIA": ["Médico","Tecnólogo/a médico","Matrona","Enfermera/o","TENS"],
    "LABORATORIO CLINICO": ["Médico","Bioquímico","Tecnólogo/a médico","TENS"],
    "ENDOSCOPIA": ["Médico","Enfermera/o","TENS"],
    "HOSPITALIZACION MEDICO QUIRURGICA": HMQ,
    "HOSPITALIZACION PENSIONADO": HMQ,
    "MEDICINA NUCLEAR": ["Médico","Tecnólogo/a médico","Enfermera/o","TENS"],
    "NEUROLOGIA": ["Médico","Enfermera/o","TENS"],
    "OTORRINOLARINGOLOGIA": ["Médico","Tecnólogo/a médico","Enfermera/o","TENS"],
    "UNIDAD DE INTERMEDIO HEMATOLOGIA (UIH)": ["Médico","Enfermera/o","TENS"],
    "UNIDAD EMERGENCIA HOSPITALARIA (UEH)": ["Médico","Enfermera/o","TENS"],
    "ANATOMIA PATOLOGICA": ["Médico","Tecnólogo/a médico","TENS","Administrativa"],
    "FARMACIA ATENCION CERRADA": FARM,
    "PSIQUIATRIA HOSPITALIZADOS (UHCIP)": UTI,
    "UNIDAD DE HEMATOLOGIA INTENSIVA (UHI)": UTI,
    "UNIDAD DE TRAUMA OCULAR (UTO)": ["Médico","Tecnólogo/a médico","Enfermera/o","TENS"],
    "DIALISIS": ["Médico","Enfermera/o","TENS"],
    "FARMACIA": FARM,
    "INFECTOLOGIA": ["Médico","Químico farmacéutico","Enfermera/o","TENS"],
    "TRANSPLANTE": ["Enfermera/o","TENS"],
    "UNIDAD MEDICINA TRANSFUSIONAL (UMT)": ["Médico","Tecnólogo/a médico","TENS"]
  };
})();
