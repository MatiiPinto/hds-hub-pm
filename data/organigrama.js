// data/organigrama.js — estructura del organigrama HDS (FASE I mayo 2026)
// GENERADO desde Organigrama_HDS_doble_carta.pdf · refleja el PDF en su totalidad.
// staff:true = asesoría/apoyo (caja punteada colgando del eje, como en el PDF).
window.ORG_DATA = {
 "direccion": {
  "color": "#1D2D5B",
  "icon": "🏛",
  "accent": "var(--dir)",
  "title": "Dirección",
  "sub": "Primer nivel jerárquico del HDS — Dr. Jorge Rashid Zajjur Castro",
  "info": "Asesorías y unidades de apoyo transversal dependientes de la Dirección, y las 5 subdirecciones.",
  "root": {
   "id": "direccion",
   "name": "DIRECCIÓN",
   "type": "direccion",
   "mapKeys": [
    "DIRECCION"
   ],
   "children": [
    {
     "id": "departamento-asesoria-juridica",
     "name": "Departamento Asesoría Jurídica",
     "type": "depto",
     "staff": true,
     "mapKeys": [
      "JURIDIC",
      "ABOGAD"
     ]
    },
    {
     "id": "unidad-auditoria-interna",
     "name": "Unidad Auditoría Interna",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "AUDITORIA"
     ]
    },
    {
     "id": "unidad-relacion-asistencial-docente-e-innovaci",
     "name": "Unidad Relación Asistencial Docente e Innovación",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "ASISTENCIAL DOCENTE",
      "INVESTIGAC",
      "DOCENTE"
     ],
     "note": "Antes: Unidad Investigación, Innovación y RAD"
    },
    {
     "id": "unidad-calidad-y-seguridad",
     "name": "Unidad Calidad y Seguridad",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "CALIDAD Y SEGURIDAD",
      "CALIDAD"
     ]
    },
    {
     "id": "departamento-integral-de-atencion-al-usuario",
     "name": "Departamento Integral de Atención al Usuario",
     "type": "depto",
     "staff": true,
     "mapKeys": [
      "ATENCION AL USUARIO",
      "OIRS"
     ]
    },
    {
     "id": "comites-consejos-asesores",
     "name": "Comités · Consejos Asesores",
     "type": "apoyo",
     "staff": true,
     "note": "Apoyo transversal a la Dirección"
    },
    {
     "id": "unidad-iaas",
     "name": "Unidad IAAS",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "IAAS"
     ]
    },
    {
     "id": "unidad-comunicaciones",
     "name": "Unidad Comunicaciones",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "COMUNICACION"
     ]
    },
    {
     "id": "departamento-transparencia-informacion-y-gesti",
     "name": "Departamento Transparencia Información y Gestión Documental",
     "type": "depto",
     "staff": true,
     "mapKeys": [
      "TRANSPARENCIA",
      "GESTION DOCUMENTAL"
     ]
    },
    {
     "id": "departamento-planificacion-y-control-de-gestio",
     "name": "Departamento Planificación y Control de Gestión",
     "type": "depto",
     "staff": true,
     "mapKeys": [
      "PLANIFICACION Y CONTROL",
      "PLANIFICACION",
      "CONTROL DE GESTION"
     ]
    }
   ],
   "subdirs": [
    {
     "id": "medica",
     "name": "Subdirección Médica",
     "color": "var(--med)"
    },
    {
     "id": "adt",
     "name": "Subdir. Apoyo Diagnóstico y Terapéutico",
     "color": "var(--adt)"
    },
    {
     "id": "gc",
     "name": "Subdir. Gestión del Cuidado",
     "color": "var(--gc)"
    },
    {
     "id": "adm",
     "name": "Subdirección Administrativa",
     "color": "var(--adm)"
    },
    {
     "id": "per",
     "name": "Subdirección de Personas",
     "color": "var(--per)"
    }
   ]
  }
 },
 "medica": {
  "color": "#B91C1C",
  "icon": "🩺",
  "accent": "var(--med)",
  "title": "Subdirección Médica",
  "sub": "Departamentos clínicos, servicios y unidades asistenciales",
  "info": "Departamentos de paciente médico, crítico y salud mental; servicios quirúrgicos y de especialidad.",
  "root": {
   "id": "medica",
   "name": "SUBDIRECCIÓN MÉDICA",
   "type": "subdir",
   "mapKeys": [
    "SUBDIRECCION MEDICA",
    "MEDICA"
   ],
   "children": [
    {
     "id": "oficina-investigacion-clinica",
     "name": "Oficina Investigación Clínica",
     "type": "oficina",
     "staff": true,
     "mapKeys": [
      "INVESTIGACION CLINICA"
     ]
    },
    {
     "id": "pacto",
     "name": "PACTO",
     "type": "programa",
     "staff": true,
     "mapKeys": [
      "PACTO"
     ]
    },
    {
     "id": "recuperacion-avanzada",
     "name": "Recuperación Avanzada",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "RECUPERACION AVANZADA",
      "RECUPERACION"
     ]
    },
    {
     "id": "unidad-trasplante",
     "name": "Unidad Trasplante",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "TRASPLANTE"
     ]
    },
    {
     "id": "departamento-atencion-abierta",
     "name": "Departamento Atención Abierta",
     "type": "depto",
     "staff": true,
     "mapKeys": [
      "ATENCION ABIERTA"
     ]
    },
    {
     "id": "departamento-gestion-de-la-demanda",
     "name": "Departamento Gestión de la Demanda",
     "type": "depto",
     "staff": true,
     "mapKeys": [
      "GESTION DE LA DEMANDA",
      "GESTION DEMANDA"
     ]
    },
    {
     "id": "comites",
     "name": "Comités",
     "type": "apoyo",
     "staff": true
    },
    {
     "id": "hospital-de-dia",
     "name": "Hospital de Día",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "HOSPITAL DE DIA"
     ]
    },
    {
     "id": "procuramiento-de-organos-y-tejidos",
     "name": "Procuramiento de Órganos y Tejidos",
     "type": "unidad",
     "staff": true
    },
    {
     "id": "soporte-nutricional",
     "name": "Soporte Nutricional",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "SOPORTE NUTRICIONAL",
      "NUTRICION"
     ]
    },
    {
     "id": "departamento-atencion-cerrada",
     "name": "Departamento Atención Cerrada",
     "type": "depto",
     "staff": true,
     "mapKeys": [
      "ATENCION CERRADA"
     ]
    },
    {
     "id": "departamento-gestion-de-pacientes",
     "name": "Departamento Gestión de Pacientes",
     "type": "depto",
     "staff": true
    },
    {
     "id": "departamento-paciente-medico",
     "name": "Departamento Paciente Médico",
     "type": "depto",
     "mapKeys": [
      "PACIENTE MEDICO"
     ],
     "children": [
      {
       "id": "servicio-cardiologia",
       "name": "Servicio Cardiología",
       "type": "servicio",
       "mapKeys": [
        "CARDIOLOGIA"
       ]
      },
      {
       "id": "servicio-dermatologia",
       "name": "Servicio Dermatología",
       "type": "servicio",
       "mapKeys": [
        "DERMATOLOGIA"
       ]
      },
      {
       "id": "servicio-medicina",
       "name": "Servicio Medicina",
       "type": "servicio",
       "mapKeys": [
        "MEDICINA",
        "MEDICINA INTERNA"
       ]
      },
      {
       "id": "servicio-neurologia",
       "name": "Servicio Neurología",
       "type": "servicio",
       "mapKeys": [
        "NEUROLOGIA"
       ]
      },
      {
       "id": "servicio-oncologia",
       "name": "Servicio Oncología",
       "type": "servicio",
       "mapKeys": [
        "ONCOLOGIA"
       ]
      },
      {
       "id": "servicio-cuidados-paliativos-y-unidad-del-dolo",
       "name": "Servicio Cuidados Paliativos y Unidad del Dolor",
       "type": "servicio",
       "mapKeys": [
        "PALIATIVOS",
        "DOLOR"
       ]
      },
      {
       "id": "servicio-medicina-fisica-y-rehabilitacion",
       "name": "Servicio Medicina Física y Rehabilitación",
       "type": "servicio",
       "mapKeys": [
        "FISICA Y REHABILITAC",
        "REHABILITACION"
       ]
      }
     ]
    },
    {
     "id": "departamento-paciente-critico",
     "name": "Departamento Paciente Crítico",
     "type": "depto",
     "mapKeys": [
      "PACIENTE CRITICO",
      "UPC"
     ],
     "note": "Antes: Unidad Paciente Crítico",
     "children": [
      {
       "id": "unidad-cuidados-intensivos",
       "name": "Unidad Cuidados Intensivos",
       "type": "unidad"
      },
      {
       "id": "unidad-tratamiento-intermedio",
       "name": "Unidad Tratamiento Intermedio",
       "type": "unidad"
      },
      {
       "id": "unidad-cuidados-intensivos-hematologicos",
       "name": "Unidad Cuidados Intensivos Hematológicos",
       "type": "unidad"
      },
      {
       "id": "unidad-tratamiento-intermedio-hematologico",
       "name": "Unidad Tratamiento Intermedio Hematológico",
       "type": "unidad",
       "mapKeys": [
        "TRATAMIENTO INTERMEDIO HEMATOLOG"
       ]
      },
      {
       "id": "unidad-tratamiento-intermedio-cardiovascular",
       "name": "Unidad Tratamiento Intermedio Cardiovascular",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "departamento-paciente-salud-mental-y-psiquiatr",
     "name": "Departamento Paciente Salud Mental y Psiquiatría",
     "type": "depto",
     "mapKeys": [
      "SALUD MENTAL",
      "PSIQUIATRIA"
     ],
     "children": [
      {
       "id": "unidad-hospitalizados-cuidados-intensivos-en-p",
       "name": "Unidad Hospitalizados Cuidados Intensivos en Psiquiatría",
       "type": "unidad",
       "mapKeys": [
        "CUIDADOS INTENSIVOS EN PSIQUIATRIA"
       ]
      },
      {
       "id": "unidad-enlace",
       "name": "Unidad Enlace",
       "type": "unidad",
       "mapKeys": [
        "ENLACE PSIQUIATRIA",
        "UNIDAD ENLACE"
       ]
      },
      {
       "id": "unidad-terapia-electroconvulsiva",
       "name": "Unidad Terapia Electroconvulsiva",
       "type": "unidad",
       "mapKeys": [
        "ELECTROCONVULSIVA",
        "TEC"
       ]
      }
     ]
    },
    {
     "id": "servicio-cirugia",
     "name": "Servicio Cirugía",
     "type": "servicio",
     "mapKeys": [
      "CIRUGIA"
     ],
     "children": [
      {
       "id": "cabeza-y-cuello",
       "name": "Cabeza y Cuello",
       "type": "area"
      },
      {
       "id": "digestivo-alto",
       "name": "Digestivo Alto",
       "type": "area"
      },
      {
       "id": "digestivo-bajo",
       "name": "Digestivo Bajo",
       "type": "area"
      },
      {
       "id": "hepatobiliar",
       "name": "Hepatobiliar",
       "type": "area"
      },
      {
       "id": "plastica",
       "name": "Plástica",
       "type": "area"
      },
      {
       "id": "vascular",
       "name": "Vascular",
       "type": "area"
      },
      {
       "id": "cma-cirugia",
       "name": "CMA Cirugía",
       "type": "area"
      }
     ]
    },
    {
     "id": "servicio-odontologia",
     "name": "Servicio Odontología",
     "type": "servicio",
     "mapKeys": [
      "ODONTOLOGIA",
      "DENTAL"
     ],
     "children": [
      {
       "id": "cirugia-y-traumatologia-maxilo-facial",
       "name": "Cirugía y Traumatología Máxilo Facial",
       "type": "area"
      },
      {
       "id": "endodoncia",
       "name": "Endodoncia",
       "type": "area"
      },
      {
       "id": "operatoria",
       "name": "Operatoria",
       "type": "area"
      },
      {
       "id": "periodoncia",
       "name": "Periodoncia",
       "type": "area"
      },
      {
       "id": "rehabilitacion-oral",
       "name": "Rehabilitación Oral",
       "type": "area"
      },
      {
       "id": "trastorno-temporo-mandibular",
       "name": "Trastorno Temporo Mandibular",
       "type": "area"
      }
     ]
    },
    {
     "id": "servicio-oftalmologia",
     "name": "Servicio Oftalmología",
     "type": "servicio",
     "mapKeys": [
      "OFTALMOLOGIA"
     ],
     "children": [
      {
       "id": "unidad-trauma-ocular",
       "name": "Unidad Trauma Ocular",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "servicio-otorrino",
     "name": "Servicio Otorrino",
     "type": "servicio"
    },
    {
     "id": "servicio-traumatologia-y-ortopedia",
     "name": "Servicio Traumatología y Ortopedia",
     "type": "servicio",
     "mapKeys": [
      "TRAUMATOLOGIA",
      "ORTOPEDIA"
     ],
     "children": [
      {
       "id": "cadera-pelvis",
       "name": "Cadera-Pelvis",
       "type": "area"
      },
      {
       "id": "hombro-codo",
       "name": "Hombro-Codo",
       "type": "area"
      },
      {
       "id": "mano-muneca",
       "name": "Mano-Muñeca",
       "type": "area"
      },
      {
       "id": "rodilla",
       "name": "Rodilla",
       "type": "area"
      },
      {
       "id": "tobillo-pie",
       "name": "Tobillo-Pie",
       "type": "area"
      }
     ]
    },
    {
     "id": "servicio-urologia",
     "name": "Servicio Urología",
     "type": "servicio",
     "mapKeys": [
      "UROLOGIA"
     ]
    },
    {
     "id": "unidad-emergencia-hospitalaria",
     "name": "Unidad Emergencia Hospitalaria",
     "type": "unidad",
     "mapKeys": [
      "EMERGENCIA",
      "URGENCIA"
     ],
     "children": [
      {
       "id": "residencia-medica",
       "name": "Residencia Médica",
       "type": "area"
      },
      {
       "id": "residencia-quirurgica",
       "name": "Residencia Quirúrgica",
       "type": "area"
      }
     ]
    },
    {
     "id": "hospitalizacion-domiciliaria",
     "name": "Hospitalización Domiciliaria",
     "type": "unidad",
     "mapKeys": [
      "HOSPITALIZACION DOMICILIARIA"
     ]
    }
   ]
  }
 },
 "apoyo-diag-ter": {
  "color": "#7C3AED",
  "icon": "🔬",
  "accent": "var(--adt)",
  "title": "Subdirección Apoyo Diagnóstico y Terapéutico",
  "sub": "Servicios de apoyo diagnóstico, farmacia, pabellón y laboratorio",
  "info": "Servicios y unidades de apoyo clínico transversal.",
  "root": {
   "id": "apoyo-diag-ter",
   "name": "SUBDIRECCIÓN APOYO DIAGNÓSTICO Y TERAPÉUTICO",
   "type": "subdir",
   "mapKeys": [
    "APOYO DIAGNOSTICO",
    "APOYO CLINICO"
   ],
   "children": [
    {
     "id": "unidad-puesta-en-marcha",
     "name": "Unidad Puesta en Marcha",
     "type": "unidad",
     "staff": true,
     "mapKeys": [
      "PUESTA EN MARCHA"
     ]
    },
    {
     "id": "departamento-eficiencia-hospitalaria",
     "name": "Departamento Eficiencia Hospitalaria",
     "type": "depto",
     "staff": true,
     "mapKeys": [
      "EFICIENCIA HOSPITALARIA"
     ],
     "note": "Antes: Unidad Eficiencia Hospitalaria"
    },
    {
     "id": "comites",
     "name": "Comités",
     "type": "apoyo",
     "staff": true
    },
    {
     "id": "servicio-anatomia-patologica",
     "name": "Servicio Anatomía Patológica",
     "type": "servicio",
     "mapKeys": [
      "ANATOMIA PATOLOGICA",
      "ANATOMOPATOLOG"
     ]
    },
    {
     "id": "servicio-farmacia",
     "name": "Servicio Farmacia",
     "type": "servicio",
     "mapKeys": [
      "FARMACIA"
     ],
     "children": [
      {
       "id": "area-ambulatorio",
       "name": "Área Ambulatorio",
       "type": "area"
      },
      {
       "id": "area-hospitalizados",
       "name": "Área Hospitalizados",
       "type": "area"
      },
      {
       "id": "area-pabellon",
       "name": "Área Pabellón",
       "type": "area"
      },
      {
       "id": "area-farmacia-clinica",
       "name": "Área Farmacia Clínica",
       "type": "area"
      },
      {
       "id": "area-recetario-magistral",
       "name": "Área Recetario Magistral",
       "type": "area"
      },
      {
       "id": "area-programas-especiales",
       "name": "Área Programas Especiales",
       "type": "area"
      }
     ]
    },
    {
     "id": "servicio-pabellon-y-anestesia",
     "name": "Servicio Pabellón y Anestesia",
     "type": "servicio",
     "children": [
      {
       "id": "unidad-del-paciente-prequirurgico",
       "name": "Unidad del Paciente Prequirúrgico",
       "type": "unidad"
      },
      {
       "id": "anestesia",
       "name": "Anestesia",
       "type": "area"
      },
      {
       "id": "esterilizacion",
       "name": "Esterilización",
       "type": "area"
      }
     ]
    },
    {
     "id": "servicio-laboratorio-clinico",
     "name": "Servicio Laboratorio Clínico",
     "type": "servicio",
     "mapKeys": [
      "LABORATORIO"
     ],
     "children": [
      {
       "id": "area-tecnica-biologia-molecular-infeccioso",
       "name": "Área Técnica Biología Molecular Infeccioso",
       "type": "area"
      },
      {
       "id": "area-tecnica-biologia-molecular-hematologica",
       "name": "Área Técnica Biología Molecular Hematológica",
       "type": "area"
      },
      {
       "id": "area-tecnica-citogenetica",
       "name": "Área Técnica Citogenética",
       "type": "area"
      },
      {
       "id": "area-tecnica-citometria-de-flujo-y-hematologia",
       "name": "Área Técnica Citometría de Flujo y Hematología Especialidad",
       "type": "area"
      },
      {
       "id": "area-tecnica-inmuno-reumatologia",
       "name": "Área Técnica Inmuno Reumatología",
       "type": "area"
      },
      {
       "id": "area-tecnica-microbiologia",
       "name": "Área Técnica Microbiología",
       "type": "area"
      },
      {
       "id": "area-tecnica-quimica-clinica-y-hematologia",
       "name": "Área Técnica Química Clínica y Hematología",
       "type": "area"
      },
      {
       "id": "area-tecnica-serologia",
       "name": "Área Técnica Serología",
       "type": "area"
      },
      {
       "id": "toma-de-muestra",
       "name": "Toma de Muestra",
       "type": "area"
      }
     ]
    },
    {
     "id": "servicio-medicina-transfusional",
     "name": "Servicio Medicina Transfusional",
     "type": "servicio",
     "children": [
      {
       "id": "area-atencion-de-donantes",
       "name": "Área Atención de Donantes",
       "type": "area"
      },
      {
       "id": "area-medicina-transfusional",
       "name": "Área Medicina Transfusional",
       "type": "area"
      },
      {
       "id": "area-transfusion-ambulatoria",
       "name": "Área Transfusión Ambulatoria",
       "type": "area"
      },
      {
       "id": "area-pre-trasplante-progenitores-hematopoyetic",
       "name": "Área Pre-Trasplante Progenitores Hematopoyéticos",
       "type": "area"
      },
      {
       "id": "area-inmunohematologia",
       "name": "Área Inmunohematología",
       "type": "area"
      }
     ]
    },
    {
     "id": "servicio-imagenologia",
     "name": "Servicio Imagenología",
     "type": "servicio",
     "mapKeys": [
      "IMAGENOLOGIA",
      "RADIOLOGIA"
     ],
     "children": [
      {
       "id": "area-central",
       "name": "Área Central",
       "type": "area"
      },
      {
       "id": "area-dental",
       "name": "Área Dental",
       "type": "area"
      },
      {
       "id": "area-pabellon",
       "name": "Área Pabellón",
       "type": "area"
      }
     ]
    },
    {
     "id": "unidad-dialisis",
     "name": "Unidad Diálisis",
     "type": "unidad",
     "children": [
      {
       "id": "area-hemodialisis",
       "name": "Área Hemodiálisis",
       "type": "area"
      },
      {
       "id": "area-peritoneo-de-dialisis",
       "name": "Área Peritoneo de Diálisis",
       "type": "area"
      }
     ]
    },
    {
     "id": "unidad-endoscopia-digestiva",
     "name": "Unidad Endoscopía Digestiva",
     "type": "unidad"
    }
   ]
  }
 },
 "gestion-cuidado": {
  "color": "#0891B2",
  "icon": "🧑‍⚕️",
  "accent": "var(--gc)",
  "title": "Subdirección Gestión del Cuidado",
  "sub": "Departamentos de gestión del cuidado por tipo de paciente",
  "info": "Cuidados ambulatorios, hospitalizados, críticos y de salud mental.",
  "root": {
   "id": "gestion-cuidado",
   "name": "SUBDIRECCIÓN GESTIÓN DEL CUIDADO",
   "type": "subdir",
   "mapKeys": [
    "GESTION DEL CUIDADO",
    "GESTION DE CUIDADO"
   ],
   "children": [
    {
     "id": "comites",
     "name": "Comités",
     "type": "apoyo",
     "staff": true
    },
    {
     "id": "programa-de-cuidados-basados-en-evidencia",
     "name": "Programa de Cuidados Basados en Evidencia",
     "type": "programa",
     "staff": true,
     "note": "Apoyo transversal a la Subdirección"
    },
    {
     "id": "depto-gestion-del-cuidado-paciente-ambulatorio",
     "name": "Depto. Gestión del Cuidado Paciente Ambulatorio",
     "type": "depto",
     "mapKeys": [
      "ATENCION ABIERTA",
      "PACIENTE AMBULATORIO"
     ],
     "note": "Antes: Depto. G.C. Atención Abierta",
     "children": [
      {
       "id": "unidad-de-cuidados-ambulatorios-oftalmologicos",
       "name": "Unidad de Cuidados Ambulatorios Oftalmológicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-cardiologicos",
       "name": "Unidad de Cuidados Ambulatorios Cardiológicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-quirurgicos",
       "name": "Unidad de Cuidados Ambulatorios Quirúrgicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-otorrinolaring",
       "name": "Unidad de Cuidados Ambulatorios Otorrinolaringológicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-medicos",
       "name": "Unidad de Cuidados Ambulatorios Médicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-neurologicos",
       "name": "Unidad de Cuidados Ambulatorios Neurológicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-dermatologicos",
       "name": "Unidad de Cuidados Ambulatorios Dermatológicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-infectologicos",
       "name": "Unidad de Cuidados Ambulatorios Infectológicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-de-trasplante-",
       "name": "Unidad de Cuidados Ambulatorios de Trasplante Renal",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-ambulatorios-trasplante-hep",
       "name": "Unidad de Cuidados Ambulatorios Trasplante Hepático",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-de-quimioterapia-ambulatori",
       "name": "Unidad de Cuidados de Quimioterapia Ambulatoria",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "depto-gestion-del-cuidado-paciente-hospitaliza",
     "name": "Depto. Gestión del Cuidado Paciente Hospitalizado",
     "type": "depto",
     "mapKeys": [
      "ATENCION CERRADA",
      "PACIENTE HOSPITALIZADO"
     ],
     "note": "Antes: Depto. G.C. Atención Cerrada",
     "children": [
      {
       "id": "unidad-de-cuidados-medicos",
       "name": "Unidad de Cuidados Médicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-quirurgicos",
       "name": "Unidad de Cuidados Quirúrgicos",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-de-emergencia",
       "name": "Unidad de Cuidados de Emergencia",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cuidados-en-pabellon",
       "name": "Unidad de Cuidados en Pabellón",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "depto-gestion-del-cuidado-paciente-critico",
     "name": "Depto. Gestión del Cuidado Paciente Crítico",
     "type": "depto",
     "mapKeys": [
      "CUIDADO PACIENTE CRITICO",
      "CUIDADOS CRITICOS"
     ],
     "children": [
      {
       "id": "unidad-de-cuidados-del-paciente-critico",
       "name": "Unidad de Cuidados del Paciente Crítico",
       "type": "unidad",
       "mapKeys": [
        "CUIDADOS CRITICOS",
        "PACIENTE CRITICO"
       ],
       "note": "Antes: Unidad de Cuidados Críticos"
      },
      {
       "id": "unidad-de-cuidados-del-paciente-critico-hemato",
       "name": "Unidad de Cuidados del Paciente Crítico Hematológico",
       "type": "unidad",
       "mapKeys": [
        "HEMATOLOGICO"
       ],
       "note": "Antes: Unidad de Cuidados Hematológicos"
      }
     ]
    },
    {
     "id": "depto-gestion-del-cuidado-paciente-salud-menta",
     "name": "Depto. Gestión del Cuidado Paciente Salud Mental y Psiquiatría",
     "type": "depto",
     "mapKeys": [
      "SALUD MENTAL",
      "PSIQUIATRIA"
     ],
     "children": [
      {
       "id": "unidad-de-hospitalizacion-de-cuidados-intensiv",
       "name": "Unidad de Hospitalización de Cuidados Intensivos en Psiquiatría",
       "type": "unidad",
       "mapKeys": [
        "CUIDADOS INTENSIVOS EN PSIQUIATRIA"
       ]
      },
      {
       "id": "unidad-de-cuidados-enlace-psiquiatria",
       "name": "Unidad de Cuidados Enlace Psiquiatría",
       "type": "unidad",
       "mapKeys": [
        "ENLACE PSIQUIATRIA"
       ]
      },
      {
       "id": "unidad-de-cuidados-terapia-electroconvulsiva",
       "name": "Unidad de Cuidados Terapia Electroconvulsiva",
       "type": "unidad"
      }
     ]
    }
   ]
  }
 },
 "administrativa": {
  "color": "#EA580C",
  "icon": "🏢",
  "accent": "var(--adm)",
  "title": "Subdirección Administrativa",
  "sub": "Abastecimiento, logística, finanzas, operaciones e informática",
  "info": "Departamentos administrativos y de soporte operacional.",
  "root": {
   "id": "administrativa",
   "name": "SUBDIRECCIÓN ADMINISTRATIVA",
   "type": "subdir",
   "mapKeys": [
    "ADMINISTRATIVA"
   ],
   "children": [
    {
     "id": "comites",
     "name": "Comités",
     "type": "apoyo",
     "staff": true
    },
    {
     "id": "departamento-abastecimiento",
     "name": "Departamento Abastecimiento",
     "type": "depto",
     "mapKeys": [
      "ABASTECIMIENTO"
     ],
     "children": [
      {
       "id": "unidad-compras",
       "name": "Unidad Compras",
       "type": "unidad"
      },
      {
       "id": "unidad-gestion-de-convenios",
       "name": "Unidad Gestión de Convenios",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "departamento-logistica",
     "name": "Departamento Logística",
     "type": "depto",
     "mapKeys": [
      "LOGISTICA"
     ],
     "children": [
      {
       "id": "area-bodega-de-medicamentos",
       "name": "Área Bodega de Medicamentos",
       "type": "area"
      },
      {
       "id": "area-bodega-de-insumos-clinicos",
       "name": "Área Bodega de Insumos Clínicos",
       "type": "area"
      },
      {
       "id": "area-bodega-de-insumos-generales",
       "name": "Área Bodega de Insumos Generales",
       "type": "area"
      }
     ]
    },
    {
     "id": "departamento-finanzas",
     "name": "Departamento Finanzas",
     "type": "depto",
     "mapKeys": [
      "FINANZAS",
      "RECURSOS FINANCIEROS"
     ],
     "children": [
      {
       "id": "unidad-contabilidad",
       "name": "Unidad Contabilidad",
       "type": "unidad"
      },
      {
       "id": "unidad-gestion-de-ingresos",
       "name": "Unidad Gestión de Ingresos",
       "type": "unidad"
      },
      {
       "id": "unidad-tesoreria",
       "name": "Unidad Tesorería",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "departamento-operaciones",
     "name": "Departamento Operaciones",
     "type": "depto",
     "mapKeys": [
      "OPERACIONES"
     ],
     "children": [
      {
       "id": "unidad-alimentacion",
       "name": "Unidad Alimentación",
       "type": "unidad"
      },
      {
       "id": "unidad-equipos-medicos",
       "name": "Unidad Equipos Médicos",
       "type": "unidad"
      },
      {
       "id": "unidad-mantencion",
       "name": "Unidad Mantención",
       "type": "unidad"
      },
      {
       "id": "unidad-medio-ambiente",
       "name": "Unidad Medio Ambiente",
       "type": "unidad"
      },
      {
       "id": "unidad-movilizacion",
       "name": "Unidad Movilización",
       "type": "unidad"
      },
      {
       "id": "unidad-seguridad-y-comunicacion",
       "name": "Unidad Seguridad y Comunicación",
       "type": "unidad"
      },
      {
       "id": "unidad-servicios-integrales",
       "name": "Unidad Servicios Integrales",
       "type": "unidad"
      },
      {
       "id": "unidad-gestion-de-contratos",
       "name": "Unidad Gestión de Contratos",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "departamento-informacion-sanitaria",
     "name": "Departamento Información Sanitaria",
     "type": "depto",
     "children": [
      {
       "id": "unidad-archivo",
       "name": "Unidad Archivo",
       "type": "unidad"
      },
      {
       "id": "unidad-estadistica",
       "name": "Unidad Estadística",
       "type": "unidad"
      },
      {
       "id": "unidad-registros-clinicos-grd",
       "name": "Unidad Registros Clínicos (GRD)",
       "type": "unidad"
      },
      {
       "id": "unidad-costos",
       "name": "Unidad Costos",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "departamento-informatica",
     "name": "Departamento Informática",
     "type": "depto",
     "mapKeys": [
      "INFORMATICA",
      "TI "
     ],
     "note": "Antes: Unidad de Informática (estaba en Dirección)",
     "children": [
      {
       "id": "area-infraestructura-ti",
       "name": "Área Infraestructura TI",
       "type": "area"
      },
      {
       "id": "area-aplicaciones-ti",
       "name": "Área Aplicaciones TI",
       "type": "area"
      },
      {
       "id": "area-soporte-ti",
       "name": "Área Soporte TI",
       "type": "area"
      }
     ]
    }
   ]
  }
 },
 "personas": {
  "color": "#16A34A",
  "icon": "👥",
  "accent": "var(--per)",
  "title": "Subdirección de Personas",
  "sub": "Gestión de personas, dotación, calidad de vida y desarrollo",
  "info": "Departamentos de gestión y desarrollo del personal del HDS.",
  "root": {
   "id": "personas",
   "name": "SUBDIRECCIÓN DE PERSONAS",
   "type": "subdir",
   "mapKeys": [
    "GESTION DE PERSONAS",
    "PERSONAS",
    "RRHH"
   ],
   "children": [
    {
     "id": "comites",
     "name": "Comités",
     "type": "apoyo",
     "staff": true
    },
    {
     "id": "departamento-gestion-de-personas",
     "name": "Departamento Gestión de Personas",
     "type": "depto",
     "mapKeys": [
      "GESTION DE PERSONAS",
      "RECURSOS HUMANOS",
      "RRHH"
     ],
     "children": [
      {
       "id": "unidad-administracion-de-personas",
       "name": "Unidad Administración de Personas",
       "type": "unidad"
      },
      {
       "id": "unidad-procesos-estrategicos-del-personal",
       "name": "Unidad Procesos Estratégicos del Personal",
       "type": "unidad",
       "mapKeys": [
        "PROCESOS ESTRATEGICOS"
       ],
       "note": "Antes: Unidad Procesos Estratégicos de Personas"
      },
      {
       "id": "unidad-licencias-medicas",
       "name": "Unidad Licencias Médicas",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "departamento-dotacion",
     "name": "Departamento Dotación",
     "type": "depto",
     "children": [
      {
       "id": "unidad-analisis-de-dotacion",
       "name": "Unidad Análisis de Dotación",
       "type": "unidad"
      }
     ]
    },
    {
     "id": "departamento-calidad-de-vida-laboral",
     "name": "Departamento Calidad de Vida Laboral",
     "type": "depto",
     "mapKeys": [
      "CALIDAD DE VIDA"
     ],
     "note": "Antes: Depto. Calidad de Vida",
     "children": [
      {
       "id": "unidad-bienestar",
       "name": "Unidad Bienestar",
       "type": "unidad"
      },
      {
       "id": "unidad-prevencion-de-riesgos",
       "name": "Unidad Prevención de Riesgos",
       "type": "unidad"
      },
      {
       "id": "unidad-salud-laboral-funcionaria",
       "name": "Unidad Salud Laboral Funcionaria",
       "type": "unidad"
      },
      {
       "id": "unidad-psicosocial-laboral",
       "name": "Unidad Psicosocial Laboral",
       "type": "unidad",
       "mapKeys": [
        "PSICOSOCIAL"
       ]
      }
     ]
    },
    {
     "id": "departamento-desarrollo-organizacional",
     "name": "Departamento Desarrollo Organizacional",
     "type": "depto",
     "mapKeys": [
      "DESARROLLO ORGANIZACIONAL"
     ],
     "children": [
      {
       "id": "unidad-reclutamiento-y-seleccion",
       "name": "Unidad Reclutamiento y Selección",
       "type": "unidad"
      },
      {
       "id": "unidad-capacitacion",
       "name": "Unidad Capacitación",
       "type": "unidad"
      },
      {
       "id": "unidad-de-cultura-y-desarrollo-de-equipos",
       "name": "Unidad de Cultura y Desarrollo de Equipos",
       "type": "unidad"
      }
     ]
    }
   ]
  }
 }
};
