// SHARED_DATA/reubicaciones_emmc.js — reubicaciones de EMMC entre recintos (SIC de traslado).
// Editar el .json y correr _DEV/build_shared_data.py --only reubicaciones_emmc.
window.REUBICACIONES_EMMC = {
 "version": "2026-11-06",
 "fuente": "PAPS AMEQM HDS (Actualización de Inventario y Gestión del Inventario) · Manual SIC para usuarios (CSSO, Cap. 05) · EMMC desplegado (PINS)",
 "procedimiento": [
  {
   "paso": "1. Proponer",
   "texto": "El hospital identifica el equipo y el recinto destino (en el Atlas, escenario ↪ Propuesta de reubicación, o aquí). La distribución de cada equipo está definida en el proyecto definitivo (Anexo I b) y debe mantenerse durante la explotación.",
   "ref": "PAPS AMEQM · Actualización de Inventario ‹b327›"
  },
  {
   "paso": "2. Validar con el servicio",
   "texto": "Jefatura del servicio de origen y del de destino confirman el cambio y el recinto exacto.",
   "ref": "Trabajo interno"
  },
  {
   "paso": "3. Solicitar al Inspector Fiscal",
   "texto": "El hospital notifica al Inspector Fiscal el cambio de disposición del activo; el IF lo instruye a la Sociedad Concesionaria. Canal: solicitud en el SIC (AMEQM) cuando esté en explotación; mientras tanto, por el conducto formal HDS → SSMO → ORD → IF.",
   "ref": "PAPS AMEQM ‹b327› · Manual SIC (Solicitar → AMEQM → formulario)"
  },
  {
   "paso": "4. Ejecución por la SC",
   "texto": "El servicio AMEQM de la Concesionaria desinstala, traslada y reinstala el equipo según P-OP-001 «Desinstalación, traslado y salida del EQMMC».",
   "ref": "PAPS AMEQM ‹b191› ‹b327›"
  },
  {
   "paso": "5. Actualizar ubicación en el SIC",
   "texto": "La SC actualiza la ubicación en el SIC (P-OP-002 «Actualización de Inventario»), ajusta el plan de mantenimiento preventivo y lo informa en el reporte semestral de inventario al IF. El hospital valida el evento en el SIC dentro del semestre.",
   "ref": "PAPS AMEQM ‹b190› ‹b326› ‹b87›"
  }
 ],
 "excepcion": "No requieren autorización del IF los equipos de transporte o móviles que se usan en distintos recintos dentro de un mismo servicio clínico (no están fijos en el recinto del Anexo I b).",
 "advertencia": "Si el hospital mueve un equipo sin informar, la Concesionaria no responde por los daños del traslado y no se afectan sus niveles de servicio; además, el hospital debe tener el equipo disponible en su recinto para la mantención programada.",
 "formulario_sic": [
  "Recinto: ubicación física real",
  "Equipo médico y mobiliario clínico: activo afectado",
  "Motivo",
  "Comentarios: contexto observable",
  "Evidencia: antecedentes que ayuden a resolver"
 ],
 "estados": [
  "Propuesta",
  "Validada por el servicio",
  "Solicitada al IF",
  "Autorizada por el IF",
  "Ejecutada por la SC",
  "Ubicación actualizada en el SIC",
  "No requiere IF (equipo móvil)",
  "Rechazada"
 ],
 "items": [
  {
   "id": "R001",
   "equipo": "Motor cirugía maxilofacial",
   "codigo": "140012",
   "marca": "Stryker",
   "modelo": "TPX",
   "series": [
    "140012-38-1"
   ],
   "cantidad": 1,
   "origen": {
    "servicio": "Odontología",
    "recinto": "Procedimiento Maxilofacial 3",
    "codigo": "A.12.2.13.6",
    "bim": "A0395",
    "piso": "P3",
    "edificio": "AA"
   },
   "destino": {
    "servicio": "Pabellones Centrales",
    "recinto": "Pabellón (sala por definir)",
    "codigo": "",
    "bim": "",
    "piso": "P2",
    "edificio": "HDS"
   },
   "motivo": "La cirugía maxilofacial se realiza en pabellón; el motor quedó asignado a Odontología en el proyecto.",
   "requiere_if": true,
   "estado": "Propuesta",
   "folio_sic": "",
   "creado": "2026-11-06",
   "origen_ref": "Matías Pinto, 06-11-2026",
   "notas": [
    {
     "fecha": "2026-11-06",
     "texto": "Cambia de servicio (Odontología AA → Pabellón HDS): requiere autorización del IF. Falta definir la sala de pabellón."
    }
   ]
  },
  {
   "id": "R002",
   "equipo": "Equipo de Terapia Electroconvulsiva",
   "codigo": "50020",
   "marca": "SOMATICS",
   "modelo": "Thymatron System IV",
   "series": [
    "50020-72-1"
   ],
   "cantidad": 1,
   "origen": {
    "servicio": "Psiquiatría de Corta Estadía",
    "recinto": "Equipos",
    "codigo": "H.1.43.3.5",
    "bim": "H1390",
    "piso": "P1",
    "edificio": "HDS"
   },
   "destino": {
    "servicio": "Pabellones Centrales",
    "recinto": "Pabellón (sala por definir)",
    "codigo": "",
    "bim": "",
    "piso": "P2",
    "edificio": "HDS"
   },
   "motivo": "La terapia electroconvulsiva depende de pabellón; el equipo quedó asignado a Psiquiatría en el proyecto.",
   "requiere_if": true,
   "estado": "Propuesta",
   "folio_sic": "",
   "creado": "2026-11-06",
   "origen_ref": "Matías Pinto, 06-11-2026",
   "notas": [
    {
     "fecha": "2026-11-06",
     "texto": "Cambia de servicio (Psiquiatría → Pabellón): requiere autorización del IF. Definir sala y quién lo custodia."
    }
   ]
  },
  {
   "id": "R003",
   "equipo": "Sistema de suspensión antigravedad",
   "codigo": "100107",
   "marca": "Medlinne",
   "modelo": "Soporte antigravitacional eléctrico K118",
   "series": [
    "100107-116-1",
    "100107-116-2",
    "100107-116-3",
    "100107-116-4"
   ],
   "cantidad": 4,
   "origen": {
    "servicio": "Medicina Física y Rehabilitación",
    "recinto": "Tratamiento Terapia Ocupacional",
    "codigo": "A.15.2.24",
    "bim": "H2715",
    "piso": "P-1",
    "edificio": "HDS"
   },
   "destino": {
    "servicio": "Medicina Física y Rehabilitación",
    "recinto": "Gimnasio (Gym Neuro, por confirmar)",
    "codigo": "15.2.12",
    "bim": "H2717",
    "piso": "P-1",
    "edificio": "HDS"
   },
   "motivo": "Los equipos se usan en el gimnasio de MFR; el proyecto los dejó en el recinto de Terapia Ocupacional.",
   "requiere_if": null,
   "estado": "Propuesta",
   "folio_sic": "",
   "creado": "2026-11-06",
   "origen_ref": "Matías Pinto, 06-11-2026",
   "notas": [
    {
     "fecha": "2026-11-06",
     "texto": "Mismo servicio: si el equipo es móvil, el PAPS no exige autorización del IF (‹b328›); igual se informa para actualizar la ubicación en el SIC. Confirmar con MFR el gimnasio destino y cuántas de las 4 unidades se mueven."
    }
   ]
  }
 ]
};
