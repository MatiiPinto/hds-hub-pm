// servicios_edificio.js — generado por _DEV/build_servicios_edificio.py desde servicios_edificio.json
// Edificio(s) de cada servicio 2026: AA · HDS · PABH (Pabellón Histórico). No editar a mano.
window.SERVICIOS_EDIFICIO = {
 "version": "2026-09-08",
 "fuente": "SHARED_DATA/recintos_pma_bim.json · por_edificio de cada servicio 2026",
 "regla": "miembro del edificio con ≥10 recintos o ≥5 % de los suyos; principal = el de más recintos; AA = Atención Abierta, HDS = torre Atención Cerrada, PABH = Pabellón Histórico",
 "edificios": {
  "AA": "Atención Abierta",
  "HDS": "Atención Cerrada",
  "PABH": "Pabellón Histórico"
 },
 "servicios": {
  "ADMINISTRACION": {
   "principal": "AA",
   "edificios": [
    "AA",
    "HDS"
   ],
   "recintos": {
    "AA": 153,
    "HDS": 38
   },
   "origen": "catastro PMA-BIM"
  },
  "HOSPITALIZACION MEDICO QUIRURGICA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "AA": 4,
    "HDS": 240
   },
   "origen": "catastro PMA-BIM"
  },
  "HOSPITALIZACION PENSIONADO": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 27
   },
   "origen": "catastro PMA-BIM"
  },
  "DERMATOLOGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 34
   },
   "origen": "catastro PMA-BIM"
  },
  "NEUROLOGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 20
   },
   "origen": "catastro PMA-BIM"
  },
  "ODONTOLOGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 39,
    "HDS": 1
   },
   "origen": "catastro PMA-BIM"
  },
  "OTORRINOLARINGOLOGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 26
   },
   "origen": "catastro PMA-BIM"
  },
  "ENDOSCOPIA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 28
   },
   "origen": "catastro PMA-BIM"
  },
  "ONCOLOGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 37
   },
   "origen": "catastro PMA-BIM"
  },
  "PABELLON CENTRAL": {
   "principal": "HDS",
   "edificios": [
    "HDS",
    "PABH"
   ],
   "recintos": {
    "HDS": 113,
    "PABH": 18
   },
   "origen": "catastro PMA-BIM"
  },
  "POLICLINICO CIRUGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 25
   },
   "origen": "catastro PMA-BIM"
  },
  "PROCEDIMIENTOS CIRUGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 29,
    "HDS": 1
   },
   "origen": "catastro PMA-BIM"
  },
  "TRASPLANTE": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 13
   },
   "origen": "catastro PMA-BIM"
  },
  "UNIDAD DE CUIDADOS INTENSIVOS (UCI)": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 61
   },
   "origen": "catastro PMA-BIM"
  },
  "UNIDAD DE CUIDADOS INTERMEDIOS (UTI)": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 59
   },
   "origen": "catastro PMA-BIM"
  },
  "UNIDAD DE HEMATOLOGIA INTENSIVA (UHI)": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 28
   },
   "origen": "catastro PMA-BIM"
  },
  "UNIDAD DE INTERMEDIO HEMATOLOGIA (UIH)": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 22
   },
   "origen": "catastro PMA-BIM"
  },
  "FARMACIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 16
   },
   "origen": "catastro PMA-BIM"
  },
  "HOSPITAL DE DIA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 32
   },
   "origen": "catastro PMA-BIM"
  },
  "IMAGENOLOGIA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 57
   },
   "origen": "catastro PMA-BIM"
  },
  "OFTALMOLOGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 43
   },
   "origen": "catastro PMA-BIM"
  },
  "PROCURAMIENTO": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 7
   },
   "origen": "catastro PMA-BIM"
  },
  "PSIQUIATRIA AMBULATORIA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 25
   },
   "origen": "catastro PMA-BIM"
  },
  "PSIQUIATRIA HOSPITALIZADOS (UHCIP)": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 41
   },
   "origen": "catastro PMA-BIM"
  },
  "TOMA DE MUESTRAS": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 8
   },
   "origen": "catastro PMA-BIM"
  },
  "UNIDAD DE TRAUMA OCULAR (UTO)": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 21
   },
   "origen": "catastro PMA-BIM"
  },
  "UNIDAD EMERGENCIA HOSPITALARIA (UEH)": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "AA": 1,
    "HDS": 26
   },
   "origen": "catastro PMA-BIM"
  },
  "ALIVIO DEL DOLOR": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 17
   },
   "origen": "catastro PMA-BIM"
  },
  "ANATOMIA PATOLOGICA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 42
   },
   "origen": "catastro PMA-BIM"
  },
  "CARDIOLOGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 20
   },
   "origen": "catastro PMA-BIM"
  },
  "CASINO": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 29
   },
   "origen": "catastro PMA-BIM"
  },
  "DIALISIS": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 34
   },
   "origen": "catastro PMA-BIM"
  },
  "DROGUERIA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 65
   },
   "origen": "catastro PMA-BIM"
  },
  "ESTERILIZACION": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 27
   },
   "origen": "catastro PMA-BIM"
  },
  "FARMACIA ATENCION CERRADA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 20
   },
   "origen": "catastro PMA-BIM"
  },
  "FARMACIA MAGISTRAL": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 28
   },
   "origen": "catastro PMA-BIM"
  },
  "INFECTOLOGIA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 22
   },
   "origen": "catastro PMA-BIM"
  },
  "LABORATORIO CLINICO": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 49
   },
   "origen": "catastro PMA-BIM"
  },
  "MEDICINA FISICA Y REHABILITACION": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 49
   },
   "origen": "catastro PMA-BIM"
  },
  "MEDICINA NUCLEAR": {
   "principal": "HDS",
   "edificios": [
    "AA",
    "HDS"
   ],
   "recintos": {
    "AA": 5,
    "HDS": 50
   },
   "origen": "catastro PMA-BIM"
  },
  "MOVILIZACION": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {},
   "origen": "inferido (sin recintos en el catastro)"
  },
  "POLICLINICO MEDICINA": {
   "principal": "AA",
   "edificios": [
    "AA"
   ],
   "recintos": {
    "AA": 21
   },
   "origen": "catastro PMA-BIM"
  },
  "ROPERIA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {},
   "origen": "inferido (sin recintos en el catastro)"
  },
  "UNIDAD MEDICINA TRANSFUSIONAL (UMT)": {
   "principal": "AA",
   "edificios": [
    "AA",
    "HDS"
   ],
   "recintos": {
    "AA": 17,
    "HDS": 15
   },
   "origen": "catastro PMA-BIM"
  },
  "ARCHIVO": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {
    "HDS": 12
   },
   "origen": "catastro PMA-BIM"
  },
  "ALIMENTACION": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {},
   "origen": "inferido (sin recintos en el catastro)"
  },
  "SERVICIO PSIQUIATRIA": {
   "principal": "HDS",
   "edificios": [
    "HDS"
   ],
   "recintos": {},
   "origen": "inferido (sin recintos en el catastro)"
  },
  "ÁREAS COMUNES Y SIN SERVICIO ASIGNADO": {
   "principal": "HDS",
   "edificios": [
    "AA",
    "HDS"
   ],
   "recintos": {
    "AA": 32,
    "HDS": 216
   },
   "origen": "catastro PMA-BIM (no es fila de la plataforma)"
  }
 }
};
