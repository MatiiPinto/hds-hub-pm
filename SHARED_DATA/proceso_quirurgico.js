// SHARED_DATA/proceso_quirurgico.js — generado por _DEV/proceso_quirurgico/build_proceso_quirurgico.py, no editar a mano
window.PROCESO_QUIRURGICO = {
 "version": "2026-10-07 · Proceso Quirúrgico NHDS",
 "generado": "2026-10-07",
 "doc": {
  "codigo": "PROC-QUIR-8.5-0003",
  "titulo": "Proceso Quirúrgico 2027 Hospital Del Salvador – SSMO (borrador «Proceso Quirúrgico Optimizado»)",
  "estado": "BORRADOR · elaborado ago-2026, revisado sep-2026, sin fecha de aprobación",
  "elabora": "Depto. de Eficiencia Hospitalaria: Bioq. Francisco Rojas Núñez (jefe), Dra. Pamina Cortés Cuadra (jefa U. Eficiencia de Procesos Clínicos), EM Javiera Flores Díaz (Gestión del Cuidado, U. Procesos Estratégicos), QF Marita García-Huidobro (Farmacia, U. Procesos Estratégicos)",
  "valida": [
   "Dirección Médica",
   "Subdirección Médica",
   "SDADT",
   "SDGC",
   "Jefatura UEH",
   "Jefatura Pabellón y Anestesia",
   "Jefatura UPPQ",
   "Jefatura de Cirugía"
  ],
  "drive": "https://docs.google.com/document/d/1rPL9m6zOGWQBvVBMM4HL7W1kIdwnunAa/edit",
  "objetivo": "Fortalecer el Proceso Quirúrgico mediante la estandarización de sus subprocesos, roles, hitos críticos y mecanismos de coordinación y control, favoreciendo la continuidad asistencial, la seguridad del paciente, la trazabilidad y el uso eficiente de los recursos quirúrgicos.",
  "principios": [
   "Un solo flujo, independiente de dónde se origine la indicación (ambulatorio, hospitalizado, UEH).",
   "Lista de Espera Quirúrgica institucional ÚNICA y priorizada, consolidada por la UPPQ (antigüedad, GES/oportunidad, oncología/gravedad).",
   "Solo entra a la LEQ el paciente PROGRAMABLE (documentación completa, vigencia 6 meses); el hospitalizado se evalúa por anestesia antes de ir a tabla.",
   "Quirófanos reservados por tipo: electivos (≥8 h hábiles), urgencia (24 h), residencia (diferibles) y ambulatorios (para evitar suspensiones).",
   "Reunión de tabla diaria con 24 h de anticipación y participación del ingeniero biomédico de equipos médicos.",
   "Reprogramación hasta las 14:00 del día previo; después es suspensión, clasificada por causal (Oficio CP 1904/2026).",
   "Registro en TrakCare en tiempo real: SIQ, estados del paciente, 6 tiempos quirúrgicos, cierre de la cirugía."
  ],
  "subprocesos": [
   {
    "id": "pre",
    "nombre": "Prequirúrgico",
    "desde": "Indicación de cirugía (SIQ por TrakCare o en papel)",
    "hasta": "Paciente presentado en la reunión de tabla",
    "etapas": [
     {
      "n": 1,
      "nombre": "Indicación, ingreso a LEQ y priorización",
      "pasos": [
       "SIQ con documentación completa (cirujano)",
       "Checklist de completitud (administrativo UPPQ)",
       "Aceptación / rechazo / comité (jefe de especialidad) y 1ª priorización",
       "2ª priorización e ingreso a LEQ única (médico jefe UPPQ)",
       "Registro SIGTE (Estadística) · GES por SIGGES (unidad GES, listado semanal)"
      ],
      "resp": "Cirujano · Jefe de especialidad · UPPQ · Estadística"
     },
     {
      "n": 2,
      "nombre": "Contactabilidad y acompañamiento",
      "pasos": [
       "Primer contacto: ingresó a la LEQ",
       "Seguimiento de condiciones para seguir programable",
       "Reevaluación con cupos reservados en policlínico si deja de serlo",
       "Retiro de la LEQ registrado (motivo, situación, fecha, conducta)"
      ],
      "resp": "UPPQ + Pabellón y Anestesia"
     },
     {
      "n": 3,
      "nombre": "Preparación e incorporación a tabla",
      "pasos": [
       "Validación de requisitos: exámenes, estudios, pases, CI, CAPRINI, preanestésica, condiciones sociales",
       "Casos complejos al comité clínico de evaluación prequirúrgica (preside SDM)",
       "LEQ priorizada semanal al Comité de Programación de tabla"
      ],
      "resp": "UPPQ · Comité de tabla"
     }
    ],
    "entradas": [
     "Policlínico quirúrgico ambulatorio",
     "Hospitalizado con SIQ (IC a subespecialidad; ASA III-IV con IC a anestesia 48-72 h antes)",
     "UEH: solo los diferibles pasan por el prequirúrgico",
     "GES: la indicación abre la garantía de oportunidad"
    ]
   },
   {
    "id": "tab",
    "nombre": "Tabla quirúrgica y confirmación",
    "desde": "LEQ priorizada entregada por la UPPQ",
    "hasta": "Tabla diaria definitiva publicada",
    "etapas": [
     {
      "n": 1,
      "nombre": "Programación semanal",
      "pasos": [
       "Unidad de Tabla arma la agenda de la semana siguiente según capacidad efectiva (horas por bloque)",
       "Bloques por especialidad: horas para LEQ y horas para hospitalizados",
       "Pacientes condicionales y condicionales de llamado"
      ],
      "resp": "Jefe de Pabellón y Anestesia · Unidad de Tabla"
     },
     {
      "n": 2,
      "nombre": "Primer contacto (tabla semanal)",
      "pasos": [
       "Confirmar que está en tabla y condiciones para asistir",
       "Ratificar vigencia de exámenes, CI, CAPRINI, preanestésica",
       "Educación: ayuno, fármacos, acompañante, hora y lugar"
      ],
      "resp": "Equipo de contactabilidad de Tabla"
     },
     {
      "n": 3,
      "nombre": "Reunión de tabla diaria (24 h antes)",
      "pasos": [
       "Análisis de la ejecución del día previo y causas de suspensión",
       "Revisión y ajuste de la tabla semanal; condicionales",
       "Cama de salida, sangre, rayos, insumos, equipamiento, personal",
       "Participan: jefe de pabellón y anestesia, enfermera coordinadora de tabla, jefe de anestesia, jefe UPC, gestión de camas, esterilización, farmacia e ingeniero biomédico"
      ],
      "resp": "Jefe de Pabellón y Anestesia"
     },
     {
      "n": 4,
      "nombre": "Segundo contacto y difusión",
      "pasos": [
       "Confirmar fecha, hora y lugar del día siguiente; avisar suspensiones",
       "Tabla definitiva en TrakCare y correo a todas las áreas",
       "Contacto postoperatorio a CMA del día previo"
      ],
      "resp": "Unidad de Tabla"
     }
    ]
   },
   {
    "id": "qx",
    "nombre": "Quirúrgico",
    "desde": "Ingreso administrativo del paciente programado",
    "hasta": "Egreso del quirófano con indicación de destino",
    "etapas": [
     {
      "n": 1,
      "nombre": "Preparación del paciente y del quirófano",
      "pasos": [
       "Ingreso de enfermería",
       "Solicitud de biopsia rápida por TrakCare o Pathient"
      ],
      "resp": "Enfermería de pabellón · Cirujano"
     },
     {
      "n": 2,
      "nombre": "Cirugía segura (OMS)",
      "pasos": [
       "Entrada: identidad, sitio, procedimiento, CI, alergias, sangre, todo lo necesario",
       "Pausa quirúrgica: equipo, paciente, cirugía, sitio, antibiótico",
       "Salida: conteo de gasas, compresas e instrumental; rotulado de muestras; fallas de equipos a reportar"
      ],
      "resp": "Cirujano · Anestesiólogo · Arsenalera"
     },
     {
      "n": 3,
      "nombre": "Tiempos quirúrgicos en TrakCare (tiempo real)",
      "pasos": [
       "Ingreso al quirófano",
       "Inicio de anestesia",
       "Inicio de cirugía",
       "Término de cirugía",
       "Término de anestesia",
       "Salida del quirófano",
       "Actualizar el estado de la cirugía"
      ],
      "resp": "Gestión del cuidado de pabellón"
     }
    ]
   },
   {
    "id": "post",
    "nombre": "Postquirúrgico",
    "desde": "Indicación de traslado al destino postoperatorio",
    "hasta": "Alta quirúrgica y entrega en el destino final",
    "etapas": [
     {
      "n": 1,
      "nombre": "Salida y traslado seguro",
      "pasos": [
       "Autorización explícita de anestesiólogo y cirujano",
       "Handover estructurado (SBAR) a la enfermera de URPA, registrado"
      ],
      "resp": "Anestesiólogo · Enfermera de pabellón"
     },
     {
      "n": 2,
      "nombre": "URPA",
      "pasos": [
       "Monitoreo continuo según indicación de anestesia",
       "Aldrete, dolor (EVA/EVN), NVPO, normotermia, sangrado, IAAS"
      ],
      "resp": "Anestesiólogo de URPA · Enfermera de recuperación"
     },
     {
      "n": 3,
      "nombre": "Alta de URPA y destino",
      "pasos": [
       "Alta certificada en TrakCare (Aldrete > 9, estable, dolor controlado)",
       "Protocolo operatorio firmado + epicrisis/informe de alta",
       "Cierre de la cirugía en TrakCare (estado «cerrado»)"
      ],
      "resp": "Anestesiólogo · Cirujano · Gestión del cuidado de recuperación"
     }
    ]
   }
  ],
  "roles": [
   [
    "Jefe del Departamento de Cirugía",
    "Dueño del proceso de la indicación a la programación semanal; RRHH, recursos, indicadores",
    "SDM"
   ],
   [
    "Jefes de especialidades quirúrgicas",
    "Gestión de indicaciones y 1ª priorización; controlan que sus pacientes lleguen programables a la UPPQ; coordinan hospitalizados con el jefe de pabellón",
    "Jefe Depto. Cirugía"
   ],
   [
    "Cirujanos especialistas",
    "Indicación, requisitos (CAPRINI, CI, exámenes), SIQ, registro en TrakCare",
    "Jefe de especialidad"
   ],
   [
    "Médico jefe UPPQ",
    "2ª priorización y LEQ única institucional al Comité de Tabla; reporta devueltos por documentación incompleta",
    "Jefe Depto. Cirugía"
   ],
   [
    "Enfermera supervisora / coordinadora UPPQ",
    "Registro de la LEQ única e hitos en TrakCare; acompañamiento; envío a Estadística para SIGTE",
    "Médico jefe UPPQ"
   ],
   [
    "Enfermera jefa de Atención Abierta y enfermeras de policlínicos",
    "Completitud de antecedentes para pasar a la UPPQ; cupos de reevaluación",
    "SDGC"
   ],
   [
    "Enfermera jefa de Atención Cerrada y enfermeras de sala",
    "Lista de hospitalizados con SIQ; preparación preoperatoria; traslado seguro",
    "SDGC"
   ],
   [
    "Enfermera supervisora y coordinadoras del subproceso quirúrgico",
    "Contactabilidad, intraoperatorio y recuperación; registra y reporta suspensiones semanalmente",
    "Enfermera jefa Atención Cerrada"
   ],
   [
    "Jefe de Pabellón Central, Oftalmológico y Anestesia",
    "Uso eficiente de los pabellones; lidera tabla semanal y diaria; programa la LEQ; distribuye bloques por especialidad",
    "SDADT"
   ],
   [
    "Médico coordinador de Anestesiología y anestesiólogos",
    "100 % de hospitalizados diferidos con pase anestésico antes de tabla; preanestésica, intraoperatorio, URPA, alta",
    "Jefe de Pabellón"
   ],
   [
    "Jefe UEH, jefes de turno y residentes",
    "Producción quirúrgica de urgencia y residencia; lista de trabajo de los quirófanos de urgencia/diferidos",
    "SDM"
   ],
   [
    "Unidades de apoyo diagnóstico y terapéutico",
    "Esterilización, botiquín de pabellón, imagenología, anatomía patológica, banco de sangre, laboratorio",
    "SDADT"
   ],
   [
    "Unidades de apoyo clínico (Equipos Médicos)",
    "Equipos trasladados al NHDS, consignaciones especiales; incidentes con los servicios de la Concesionaria",
    "Subdirección Administrativa"
   ]
  ],
  "suspension": {
   "regla": "Reprogramación hasta las 14:00 del día previo; después, suspensión.",
   "causales": [
    "Atribuidas al paciente",
    "Administrativas",
    "Unidades de apoyo clínico",
    "Unidades de apoyo logístico (insumos, equipamiento, esterilización)",
    "Equipo quirúrgico (RRHH)",
    "Infraestructura",
    "Emergencias",
    "Gremiales"
   ],
   "fuente": "Oficio CP N° 1904/2026, Subsecretaría de Redes Asistenciales"
  },
  "indicadores_doc": [
   "Suspensiones de cirugía mayor electiva por causal (COMGES / BSC-EAR 2026)",
   "Lista y tiempos de espera quirúrgica (SIGTE) y garantías GES (SIGGES)",
   "Producción quirúrgica por tipo (electiva, CMA, urgencia, residencia)",
   "Devueltos a tratante por documentación incompleta, por especialidad",
   "Casos complejos al comité clínico prequirúrgico"
  ],
  "referencias": [
   "Protocolo UPPQ (RE 6177/2023)",
   "Manual UPPQ (RE 5402/2025)",
   "Procedimiento de contactabilidad (RE 2494/2025)",
   "Protocolo de recuperación (RE 5401/2025)",
   "OT para fortalecer el proceso quirúrgico (MINSAL 2023)",
   "RPE N° 32 cirugías mayores y CMA (MINSAL 2022)",
   "Lista OMS de cirugía segura (2009) y pautas MINSAL 2018",
   "Estándar de acreditación atención cerrada (RE 277/2011) · GCL",
   "Norma N° 19 gestión del cuidado (RE 1127/2007)",
   "Oficio CP 1904/2026 causales de suspensión"
  ]
 },
 "medicion": {
  "tesis": "El pabellón es el recurso más caro del hospital y hoy se documenta a mano: registros tardíos, redondeados a múltiplos de 5 minutos y sesgados por quien anota. Instrumentar el pabellón para que se autodocumente con 6 marcas de tiempo objetivas; los hitos son las primitivas, el producto son los intervalos, y cada intervalo interpela a un equipo distinto.",
  "hitos": [
   {
    "n": 1,
    "nombre": "Entrada del paciente",
    "trakcare": "Hora de ingreso al quirófano",
    "camara": "Alta: camilla cruzando el umbral",
    "senal": "No requiere otra fuente"
   },
   {
    "n": 2,
    "nombre": "Inicio de inducción",
    "trakcare": "Inicio de anestesia",
    "camara": "Baja: acto clínico ambiguo",
    "senal": "Máquina de anestesia: inicio de ventilación / entrega de agente"
   },
   {
    "n": 3,
    "nombre": "Inicio de cirugía",
    "trakcare": "Hora de inicio de la cirugía",
    "camara": "Baja: la incisión no se ve desde el techo",
    "senal": "Primera activación del electrobisturí (pinza de corriente): casi determinista"
   },
   {
    "n": 4,
    "nombre": "Término de cirugía",
    "trakcare": "Hora de término de la cirugía",
    "camara": "Media-baja",
    "senal": "Última activación del electrobisturí + retiro de campos"
   },
   {
    "n": 5,
    "nombre": "Término de anestesia",
    "trakcare": "Hora de término de la anestesia",
    "camara": "Baja: la extubación es sutil",
    "senal": "Máquina de anestesia: cese de ventilación"
   },
   {
    "n": 6,
    "nombre": "Salida del paciente",
    "trakcare": "Hora de salida del quirófano",
    "camara": "Alta",
    "senal": "No requiere otra fuente"
   }
  ],
  "intervalos": [
   {
    "nombre": "Retraso de inicio de tabla",
    "calculo": "Hora programada → hito 1 del primer caso",
    "equipo": "Gestión del recurso / equipo completo",
    "revela": "Coordinación matinal. Con el recambio, el de mayor apalancamiento financiero."
   },
   {
    "nombre": "Instalación y pausa de seguridad",
    "calculo": "Hito 1 → hito 2",
    "equipo": "Enfermería de pabellón",
    "revela": "Preparación del paciente en sala."
   },
   {
    "nombre": "Tiempo anestésico prequirúrgico",
    "calculo": "Hito 2 → hito 3",
    "equipo": "Anestesia",
    "revela": "Inducción e instalación de accesos."
   },
   {
    "nombre": "Tiempo quirúrgico",
    "calculo": "Hito 3 → hito 4",
    "equipo": "Equipo quirúrgico",
    "revela": "Comparable por cirujano y procedimiento, con volumen estadísticamente honesto."
   },
   {
    "nombre": "Despertar / emergencia",
    "calculo": "Hito 4 → hito 5",
    "equipo": "Anestesia",
    "revela": "Carga real del equipo de anestesia (hito 2 → 5 = tiempo anestésico total)."
   },
   {
    "nombre": "Egreso",
    "calculo": "Hito 5 → hito 6",
    "equipo": "Enfermería de pabellón",
    "revela": "Salida del paciente a URPA."
   },
   {
    "nombre": "Tiempo de recambio",
    "calculo": "Hito 6 → hito 1 del paciente siguiente",
    "equipo": "Aseo y abastecimiento",
    "revela": "Aseo, reposición y preparación de sala. Hoy casi invisible en el registro manual."
   },
   {
    "nombre": "Utilización real de sala",
    "calculo": "Σ (hito 1 → hito 6) ÷ horas disponibles",
    "equipo": "Gestión del recurso",
    "revela": "Capacidad ociosa recuperable sin construir un pabellón más."
   },
   {
    "nombre": "Varianza por procedimiento",
    "calculo": "Dispersión del tiempo quirúrgico",
    "equipo": "Programación",
    "revela": "Para programar, la varianza importa más que el promedio."
   }
  ],
  "fusion": [
   "Cámara de profundidad cenital, sin RGB ni rostros → hitos 1 y 6 y contexto de escena",
   "Electrobisturí con pinza de corriente no invasiva → hitos 3 y 4",
   "Máquina de anestesia, puerto de datos → hitos 2 y 5",
   "Lámpara quirúrgica → sala activa/inactiva",
   "Motor de fusión: máquina de estados del proceso + modelo temporal sobre video de profundidad, corregido por las señales duras (precisión publicada ±35 s)"
  ],
  "linea_base": "El registro manual no es un competidor: es la línea base. La hoja de pabellón (y los 6 tiempos de TrakCare) es la verdad de terreno para entrenar y validar, y a la vez la medida del problema: preferencia de dígito terminal (0 y 5), intervalos imposibles, duraciones idénticas repetidas, discordancia anestesia vs enfermería.",
  "privacidad": [
   "Ley 21.719 vigente desde el 01-12-2026: datos de salud y biométricos son categoría sensible; brechas en 72 h; multas hasta 20.000 UTM.",
   "Profundidad en vez de RGB: siluetas, nunca rostros. Dejarlo por escrito como evaluación de impacto antes de instalar nada.",
   "El sistema mide el proceso, nunca a la persona: ningún indicador atribuible a un individuo, nada exportable a nivel nominal, incorporado en el diseño.",
   "Riesgo mayor: la lectura laboral. «Vamos a entender por qué el pabellón 4 pierde 40 minutos entre cirugías», no «cuánto se demora el auxiliar»."
  ],
  "fases": [
   {
    "fase": "Fase 0 · 3–4 meses",
    "que": "Un pabellón, una cámara de profundidad, dos hitos (entrada y salida) contrastados contra el registro manual. Ya da recambio y retraso de tabla, y demuestra el error del método manual."
   },
   {
    "fase": "Fase 1 · 6–9 meses",
    "que": "Los seis hitos por fusión: electrobisturí y máquina de anestesia; modelo temporal entrenado sobre el registro manual y validado por observación directa. Reporte agregado por sala y procedimiento, nunca por persona."
   },
   {
    "fase": "Fase 2 · escalamiento",
    "que": "Todos los pabellones y tablero de gestión integrado a la programación quirúrgica. Las alertas en tiempo real son otro proyecto, más caro."
   }
  ],
  "decisiones_previas": [
   {
    "q": "¿Cuántos pabellones y de qué tipo?",
    "r": "Resuelto: 24 quirófanos + 2 salas de angiografía; tipologías alta complejidad, regular, traumatología, trasplante, urgencia, oftalmología, otorrino, litotripsia, robótica (da Vinci Xi)."
   },
   {
    "q": "¿Existe hoja de pabellón digital o registro en el SIS con estos tiempos?",
    "r": "El borrador PROC-QUIR exige los 6 tiempos en TrakCare en tiempo real: esa es la verdad de terreno y la línea base. Falta confirmar que el módulo esté configurado y que la hoja de anestesia también se registre."
   },
   {
    "q": "¿Retrospectivo o tiempo real?",
    "r": "Retrospectivo primero (indicadores mensuales). Alertar en vivo es otro proyecto."
   }
  ],
  "ventana_equipos_medicos": "La Unidad de Equipos Médicos es la única que puede exigir los puertos de datos del electrobisturí y de la máquina de anestesia, y está a tiempo durante la puesta en marcha, antes de que los equipos queden instalados y recibidos. Si no entra ahora, el paper de 2028 se encarece o se vuelve inviable."
 },
 "finis": {
  "marco": "Tutoría de alumnas de Ingeniería Civil Biomédica de la Universidad Finis Terrae (tutor: Matías Pinto). Meta: EMBC 2027 (IEEE EMBS, Singapur, 11–15 jul 2027). Cierre de papers completos: 24-01-2027 (5 páginas: 4 de contenido + 1 de referencias, máx. 20; sin prórroga). Solo los papers completos se indexan en IEEE Xplore y PubMed.",
  "papers": [
   {
    "alumna": "Renata Vargas",
    "paper": "Cuánto error introduce el registro manual de tiempos quirúrgicos",
    "pregunta": "¿Qué tan preciso es el registro manual de los hitos quirúrgicos y qué indicadores de gestión se distorsionan con ese error?",
    "track": "Informática biomédica y de salud",
    "datos": "Hojas de pabellón / tiempos TrakCare de un período cerrado, solo marcas de tiempo, sin identificadores",
    "metodo": [
     "Preferencia de dígito terminal (0 y 5) vs azar",
     "Intervalos imposibles o negativos",
     "Duraciones idénticas repetidas (copiado)",
     "Discordancia hoja de anestesia vs enfermería"
    ],
    "etica": "Revisión expedita o carta de no aplicabilidad del CEC adultos SSMO (retrospectivo, anonimizado, sin intervención): iniciar de inmediato. Salida: período cerrado de marcha blanca o indicadores agregados.",
    "es": "Capítulo 1 del proyecto de medición automática de pabellón (paper 2028: validación de la fusión cámara + señales contra el registro manual)."
   },
   {
    "alumna": "Darinka (apellido pendiente)",
    "paper": "Cobertura de capacitación en equipamiento durante la puesta en marcha",
    "pregunta": "¿Qué cobertura por servicio y estamento alcanza un programa de capacitación al abrir un hospital, y dónde quedan los huecos?",
    "track": "Educación en ingeniería biomédica y sociedad",
    "datos": "Registros de asistencia (89 jornadas) × dotación por tipología de equipo; datos de funcionarios, no de pacientes",
    "metodo": [
     "Asistencia por servicio, estamento y tipología",
     "Contraste contra la dotación que debía capacitarse",
     "Mapa de cobertura y huecos"
    ],
    "etica": "No requiere comité; sí autorización escrita de la Dirección del HDS.",
    "es": "Sostiene el argumento de que capacitar en manejo previene fallas (paper 2028: cobertura vs tasa de fallas atribuibles a manejo)."
   }
  ],
  "calendario": [
   [
    "24 sep – 5 oct 2026",
    "Confirmar equipo y apellido; inscripción IEEE/EMBS estudiante; leer 15 papers del track; pedir autorización escrita de la Dirección",
    "Alumnas con carta del tutor"
   ],
   [
    "24 sep – 5 oct 2026",
    "Ingresar al CEC el proyecto de biopsias (habilita 2028)",
    "Tutor"
   ],
   [
    "6 – 31 oct 2026",
    "Congelar el conjunto de datos de cada trabajo y definir la comparación",
    "Cada alumna"
   ],
   [
    "1 – 30 nov 2026",
    "Resultados, figuras y primer borrador de 4 páginas",
    "Cada alumna"
   ],
   [
    "1 – 20 dic 2026",
    "Portal abre: cuentas, plantilla IEEE, segunda versión, inglés",
    "Alumnas y tutor"
   ],
   [
    "21 dic – 20 ene 2027",
    "Versión final, PDF eXpress, 20 referencias",
    "Cada alumna"
   ],
   [
    "24 ene 2027",
    "Envío",
    "Tutor confirma"
   ],
   [
    "16 abr · 30 abr · may 2027",
    "Notificación · versión final · travel grant EMBS (exige paper aceptado)",
    "—"
   ]
  ],
  "reglas": [
   "Solo agregados por servicio, estamento, tipología o procedimiento; ningún indicador atribuible a una persona identificable (misma regla que la visión por computador: mide el proceso, no a la persona).",
   "Declaración explícita de aprobación ética en el paper, aunque no aplique.",
   "Travel grant EMBS ≈ US$2.000, reembolso post viaje; brecha US$750–1.900 por alumna → fondos internos Finis Terrae. Fondos concursables (FONIS, FIC-R, Fondef) son para 2028–2029."
  ],
  "patrones": "Lo que se pide a las alumnas es reconocimiento de patrones sobre datos que el hospital ya tiene: primero los patrones del error de registro (2027), después los patrones del proceso medidos por sensores (2028). Cada aspecto del proceso quirúrgico queda medido al detalle a través de los 6 hitos y sus intervalos."
 },
 "recurso": {
  "pabellones": [
   {
    "numero": "01",
    "bim": "H0088",
    "nombre": "S.O.Q. Alta Complejidad Traumatología",
    "modulo": 1
   },
   {
    "numero": "02",
    "bim": "H0087",
    "nombre": "S.O.Q. Alta Complejidad Traumatología",
    "modulo": 1
   },
   {
    "numero": "03",
    "bim": "H0069",
    "nombre": "S.O.Q. Alta Complejidad Transplante",
    "modulo": 1
   },
   {
    "numero": "04",
    "bim": "H0070",
    "nombre": "S.O.Q. Alta Complejidad",
    "modulo": 1
   },
   {
    "numero": "05",
    "bim": "H0091",
    "nombre": "S.O.Q. Complejidad Regular",
    "modulo": 1
   },
   {
    "numero": "06",
    "bim": "H0090",
    "nombre": "S.O.Q. Alta Complejidad Urgencia",
    "modulo": 1
   },
   {
    "numero": "07",
    "bim": "H0092",
    "nombre": "S.O.Q. Complejidad Regular",
    "modulo": 1
   },
   {
    "numero": "08",
    "bim": "H3040",
    "nombre": "S.O.Q. Alta Complejidad",
    "modulo": 1
   },
   {
    "numero": "09",
    "bim": "H0095",
    "nombre": "S.O.Q. Complejidad Regular",
    "modulo": 1
   },
   {
    "numero": "10",
    "bim": "H0516",
    "nombre": "S.O.Q. Complejidad Regular",
    "modulo": 1
   },
   {
    "numero": "11",
    "bim": "H0517",
    "nombre": "S.O.Q. Alta Complejidad Traumatología",
    "modulo": 1
   },
   {
    "numero": "12",
    "bim": "H3041",
    "nombre": "S.O.Q. Complejidad Regular",
    "modulo": 1
   },
   {
    "numero": "13",
    "bim": "H0175",
    "nombre": "S.O.Q. Alta Complejidad",
    "modulo": 2
   },
   {
    "numero": "14",
    "bim": "H0098",
    "nombre": "Sala Litotripcia",
    "modulo": 2
   },
   {
    "numero": "15",
    "bim": "H0097",
    "nombre": "S.O.Q. Regular Otorrino y Otros",
    "modulo": 2
   },
   {
    "numero": "16",
    "bim": "H0176",
    "nombre": "S.O.Q. Regular Otorrino y Otros",
    "modulo": 2
   },
   {
    "numero": "17",
    "bim": "H0173",
    "nombre": "S.O.Q. Alta Complejidad",
    "modulo": 2
   },
   {
    "numero": "18",
    "bim": "H0174",
    "nombre": "S.O.Q. Alta Complejidad",
    "modulo": 2
   },
   {
    "numero": "19",
    "bim": "H0172",
    "nombre": "S.O.Q. Comp.Regular Oftalmo.",
    "modulo": 2
   },
   {
    "numero": "20",
    "bim": "H0096",
    "nombre": "S.O.Q. Comp.Regular Oftalmo.",
    "modulo": 2
   },
   {
    "numero": "21",
    "bim": "H0168",
    "nombre": "S.O.Q. Comp.Regular Oftalmo.",
    "modulo": 2
   },
   {
    "numero": "22",
    "bim": "H0169",
    "nombre": "S.O.Q. Comp.Regular Oftalmo.",
    "modulo": 2
   },
   {
    "numero": "23",
    "bim": "H0170",
    "nombre": "S.O.Q. Comp.Regular Oftalmo.",
    "modulo": 2
   },
   {
    "numero": "24",
    "bim": "H0171",
    "nombre": "S.O.Q. Comp.Regular Oftalmo.",
    "modulo": 2
   },
   {
    "numero": "25",
    "bim": "H0530",
    "nombre": "Sala Angiógrafo Hemodinamia Cardiaca",
    "modulo": "angio"
   },
   {
    "numero": "26",
    "bim": "H0525",
    "nombre": "Sala Angiógrado General y Vascular Periferia",
    "modulo": "angio"
   }
  ],
  "cupos": [
   {
    "sala": "Pre-anestesia 1",
    "bim": "H2094",
    "cupos": 10
   },
   {
    "sala": "Pre-anestesia 2",
    "bim": "H1865",
    "cupos": 12
   },
   {
    "sala": "Recuperación 1 (URPA)",
    "bim": "H2096",
    "cupos": 24
   },
   {
    "sala": "Recuperación 2 (CMA)",
    "bim": "H0071",
    "cupos": 24
   }
  ],
  "resumen": "24 quirófanos de cirugía mayor (01–12 módulo 1; 13–24 módulo 2, con litotripsia 14 y oftalmología 19–24) + 2 salas de angiografía (25 hemodinamia, 26 general y vascular). 22 cupos de preanestesia y 48 de recuperación. Sala de biopsias rápidas en pabellón; diferidas a Anatomía Patológica (−1).",
  "familias": [
   "Mobiliario clínico (mesas quirúrgicas, camillas, carros, Mayo, arsenaleras)",
   "Apoyo quirúrgico (anestesia, electrocirugía, lámparas y columnas, motores)",
   "Apoyo endoscópico (torres laparoscópica, artroscópica, endourológica)",
   "Imagenología (arcos C, angiógrafos, ecógrafos doppler)",
   "Monitoreo (multiparámetro, desfibriladores, central de recuperación)",
   "Apoyo terapéutico (bombas, calentadores, aceleradores de infusión, transfusión rápida)",
   "Apoyo diagnóstico",
   "Laboratorio y farmacia (dispensadores automáticos, refrigeradores)",
   "Apoyo TI (estaciones clínicas)",
   "Apoyo industrial"
  ],
  "especifico": [
   "Sistema de cirugía robótica da Vinci Xi",
   "Láser Holmium 150 W + litotriptor neumático + nefroscopio",
   "Láser con resectoscopios (urología)",
   "Láser CO2 (otorrino)",
   "9 microscopios quirúrgicos (6 oftalmología, 2 otorrino, 1 general)",
   "4 facoemulsificadores y 3 vitrectores",
   "8 arcos C",
   "Torres de endoscopía (19 según el borrador; ver P107)"
  ],
  "pauta": {
   "generado": "2026-10-01",
   "resumen": {
    "cumple": 8,
    "brecha": 6,
    "redistribuir": 1,
    "por_confirmar": 3
   },
   "total_quirofanos": 24,
   "brechas": [
    {
     "n": 191,
     "texto": "El quirófano cuenta con autorización de instalación radiactiva que permite realizar cirugías con aplicación de técnicas radiológicas",
     "estado": "Brecha",
     "cubiertos": null,
     "total": null,
     "faltantes": []
    },
    {
     "n": 206,
     "texto": "Mesa quirúrgica",
     "estado": "Brecha",
     "cubiertos": 18,
     "total": 24,
     "faltantes": [
      "S.O.Q.Comp.Regular Oftalmo. (C.2.28.10.3): 6 sin"
     ]
    },
    {
     "n": 214,
     "texto": "Sistema para la medición de temperatura corporal",
     "estado": "Por confirmar",
     "cubiertos": null,
     "total": null,
     "faltantes": []
    },
    {
     "n": 216,
     "texto": "Porta sueros",
     "estado": "Redistribuir",
     "cubiertos": 15,
     "total": 24,
     "faltantes": [
      "S.O.Q. Alta Complejidad (C.1.27.6.2): 2 sin",
      "S.O.Q. Complejidad Regular (C.1.27.6.3): 2 sin",
      "S.O.Q.Comp.Regular Oftalmo. (C.2.28.10.3): 5 sin"
     ]
    },
    {
     "n": 217,
     "texto": "Electro bisturí",
     "estado": "Brecha",
     "cubiertos": 22,
     "total": 24,
     "faltantes": [
      "S.O.Q. Alta Complejidad Traumatología (C.1.27.6.2.TM): 1 sin",
      "S.O.Q. Complejidad Regular (C.1.27.6.3): 1 sin"
     ]
    },
    {
     "n": 219,
     "texto": "Negatoscopio",
     "estado": "Por confirmar",
     "cubiertos": null,
     "total": null,
     "faltantes": []
    },
    {
     "n": 221,
     "texto": "Mesa Mayo",
     "estado": "Brecha",
     "cubiertos": 19,
     "total": 24,
     "faltantes": [
      "S.O.Q.Comp.Regular Oftalmo. (C.2.28.10.3): 5 sin"
     ]
    },
    {
     "n": 222,
     "texto": "Lámpara autoenergizada",
     "estado": "Por confirmar",
     "cubiertos": null,
     "total": null,
     "faltantes": []
    },
    {
     "n": 255,
     "texto": "Acceso a RX portátil y Elementos de protección radiológica cuando corresponda",
     "estado": "Brecha",
     "cubiertos": null,
     "total": null,
     "faltantes": []
    },
    {
     "n": 257,
     "texto": "Instrumental quirúrgico adecuado a cada cirugía",
     "estado": "Brecha",
     "cubiertos": null,
     "total": null,
     "faltantes": []
    }
   ]
  },
  "dispensadores": [
   {
    "equipo": "MedStation + 2 Columnas auxiliar",
    "cantidad": 1,
    "donde": "Distribuido en recuperación 1 (24 cupos)",
    "bim": [
     "H2106"
    ]
   },
   {
    "equipo": "MedStation + 2 Columnas auxiliar",
    "cantidad": 1,
    "donde": "Distribuido en recuperación 2 (24 cupos)",
    "bim": [
     "H0072"
    ]
   },
   {
    "equipo": "MedStation + 2 Columnas auxiliar",
    "cantidad": 8,
    "donde": "Distribuidos en 1 solo recinto central para proveer a los 24 pabellones",
    "bim": [
     "H1873"
    ]
   },
   {
    "equipo": "MedStation + 3 Columnas Supply Station",
    "cantidad": 2,
    "donde": "Distribuidos en 1 solo recinto central para proveer a los 24 pabellones",
    "bim": [
     "H1873"
    ]
   },
   {
    "equipo": "MedStation + 2 Columnas auxiliar",
    "cantidad": 1,
    "donde": "Distribuido en sala preanestesia 2 (12 cupos)",
    "bim": [
     "H1865"
    ]
   },
   {
    "equipo": "MedStation + 1 Columna auxiliar",
    "cantidad": 1,
    "donde": "Distribuido en sala preanestesia 1 (10 cupos)",
    "bim": [
     "H2094"
    ]
   }
  ]
 },
 "antecedentes": [
  {
   "fecha": "2026-09-01",
   "que": "Análisis del diagrama del Proceso Quirúrgico (organigrama + 4 subprocesos): 33 hallazgos y propuesta por carriles",
   "donde": "40.FlujosHDS (semillas AS-IS f_qx_asis y TO-BE f_qx_tobe) · Observaciones Flujo Proceso Quirurgico HDS.docx",
   "tipo": "Plataforma"
  },
  {
   "fecha": "2026-09-02",
   "que": "Anteproyecto 02 · Medición automática de la actividad quirúrgica (visión por computador + fusión con señales de equipos)",
   "donde": "ProyectosInnovacion/Proyectos-Innovacion-HDS.pdf",
   "tipo": "Anteproyecto"
  },
  {
   "fecha": "2026-09-29",
   "que": "Plan EMBC 2027 HDS–Finis Terrae: dos papers (Renata, Darinka), ética, calendario, financiamiento",
   "donde": "EMBC2027/EMBC2027_Plan_HDS_FinisTerrae.pdf",
   "tipo": "Plan"
  },
  {
   "fecha": "2026-10-01",
   "que": "Cotejo de Pabellón Central contra la pauta de cirugía mayor: 24 quirófanos, 18 mesas, brechas por quirófano",
   "donde": "14.Bitacora pestaña 🏥 Pabellón · SHARED_DATA/pabellon_pauta",
   "tipo": "Plataforma"
  },
  {
   "fecha": "2026-10-02",
   "que": "Numeración oficial de pabellones 01–26 (RDI 1361 REV 5) y cupos de recuperación / preanestesia",
   "donde": "SHARED_DATA/numeracion_recintos",
   "tipo": "Dato"
  },
  {
   "fecha": "2026-10-05",
   "que": "Dispensadores de medicamentos de pabellón (tabla de Farmacia): 8 + 2 Supply Station en el recinto central, 1 por sala de recuperación y preanestesia",
   "donde": "SHARED_DATA/dispensadores_medicamentos",
   "tipo": "Dato"
  },
  {
   "fecha": "2026-09 (sep)",
   "que": "Borrador «Proceso Quirúrgico Optimizado» PROC-QUIR-8.5-0003 del Depto. de Eficiencia Hospitalaria",
   "donde": "Drive compartido (docs.google.com/document/d/1rPL9m6zOGWQBvVBMM4HL7W1kIdwnunAa)",
   "tipo": "Documento"
  },
  {
   "fecha": "2026-10-06",
   "que": "Reunión «Proceso Pre-Quirúrgico» (audio 62 min, transcripción local)",
   "donde": "Minutas/minutas/2026-10-06_proceso-pre-quirurgico.md",
   "tipo": "Reunión"
  }
 ],
 "reunion": {
  "fecha": "2026-10-06",
  "titulo": "Reunión «Proceso Pre-Quirúrgico» · 62 min",
  "conduce": "María Elena Sepúlveda (SDADT)",
  "participantes": [
   "María Elena Sepúlveda (conduce)",
   "Mónica [sic?] (cirujana, observó el registro de tiempos)",
   "Paula [sic?] (cirujana de urgencia)",
   "Horacio Díaz (PM, estaciones de trabajo)",
   "Matías Pinto (EMMC)",
   "Otros cirujanos y jefaturas: no consta la nómina · ausente Carlos Alfaro"
  ],
  "minuta": "Minutas/minutas/2026-10-06_proceso-pre-quirurgico.md",
  "resumen": "Los tiempos quirúrgicos de TrakCare no se registran en el momento: se anotan en papel y se cierran después, redondeados a 0 y 5 (a las 14:00 solo 4 cirugías cerradas). Dónde ganar tiempo: recambio (20–36 min) y variabilidad de anestesia (15 min a 1 h); el tiempo quirúrgico es poco mejorable. La tabla cambia ~50 %. Los pabellones de urgencia y residencia cambian de número y el de residencia se usa para prolongar electivas. Se pide una sola jefatura de pabellón, lockers para los médicos y dividir la oficina prequirúrgica en orientación (1.º), gestión (4.º) y tabla/central de mando (2.º).",
  "hallazgos": [
   {
    "id": "H1",
    "t": "00:02:18",
    "texto": "Tiempos de TrakCare cerrados retrospectivamente, redondeados a :00 y :05; a las 14:00 solo 4 cirugías tenían tiempos cerrados. La pabellonera anota en papel y lo pasa tal cual.",
    "sev": "Mayor",
    "liga": "medicion"
   },
   {
    "id": "H2",
    "t": "00:05:37",
    "texto": "Recambio percibido de 34–36 min; 20 min cuando alguien lo supervisa.",
    "sev": "Mayor",
    "liga": "medicion"
   },
   {
    "id": "H3",
    "t": "00:06:18",
    "texto": "Equipos que sacaban 3 cirugías de 8 a 14 h hoy sacan 2 de 8 a 17 h; en clínica privada 5 proctológicos en 5 h con los mismos cirujanos.",
    "sev": "Mayor",
    "liga": "proceso"
   },
   {
    "id": "H4",
    "t": "00:12:35",
    "texto": "Personal pide salir a almorzar desde las 10:00; en robótica no pasa. Hoy hay 2 equipos de relevo y el mismo equipo cierra (orden de Dani Bustamante).",
    "sev": "Mayor",
    "liga": "proceso"
   },
   {
    "id": "H5",
    "t": "00:18:10",
    "texto": "La tabla cambia cerca del 50 %: urgencias y hospitalizados (inevitable) mezclados con equipos que presentan tabla sin estar seguros (mejorable).",
    "sev": "Mayor",
    "liga": "proceso"
   },
   {
    "id": "H6",
    "t": "00:48:59",
    "texto": "Pabellón de residencia usado para prolongar electivas: tiroides electiva a las 20:00 que salió a las 00:30, sin que conste quién lo autorizó; urgencias metidas en la tabla electiva.",
    "sev": "Crítico",
    "liga": "recurso"
   },
   {
    "id": "H7",
    "t": "00:51:46",
    "texto": "Los pabellones de urgencia y residencia cambian de número (1, 2, 3, 12): imposible sacar conclusiones y se pierde el carro de urgencia.",
    "sev": "Mayor",
    "liga": "recurso"
   },
   {
    "id": "H8",
    "t": "00:39:37",
    "texto": "La oficina prequirúrgica (20 personas) no cabe; Autorización Sanitaria la quiere en el 1.º piso atendiendo pacientes y el equipo no quiere atender.",
    "sev": "Mayor",
    "liga": "proceso"
   },
   {
    "id": "H9",
    "t": "00:41:21",
    "texto": "Hasta dos tercios de lo que llega a la oficina debería resolverse por teléfono, mail u online; el bot actual no conversa con el paciente.",
    "sev": "Menor",
    "liga": "proceso"
   },
   {
    "id": "H10",
    "t": "00:26:26",
    "texto": "Estaciones de trabajo médicas del 4.º piso ya asignadas por equipo (levantamiento de Horacio, N. Calleja y P. Cruzat); faltan lockers y definir quién accede.",
    "sev": "Menor",
    "liga": "recurso"
   }
  ],
  "decisiones": [
   {
    "id": "D1",
    "texto": "Los tiempos quirúrgicos se registran en el momento y en el sistema.",
    "quien": "María Elena"
   },
   {
    "id": "D2",
    "texto": "No se para el pabellón al mediodía: relevo en las cirugías largas (2 equipos, cierra el mismo) y programación de las cortas.",
    "quien": "Grupo"
   },
   {
    "id": "D3",
    "texto": "Separar en la tabla los cambios inevitables de los mejorables y exigir programación cierta por equipo.",
    "quien": "Grupo"
   },
   {
    "id": "D4",
    "texto": "Pabellones de urgencia y de residencia fijos: para poder concluir y por el carro e insumos de urgencia.",
    "quien": "Grupo"
   },
   {
    "id": "D5",
    "texto": "Antes de crear un pabellón nuevo, revisar para qué se usa el de residencia.",
    "quien": "María Elena"
   },
   {
    "id": "D6",
    "texto": "Una sola jefatura de pabellón que integre y distribuya los quirófanos según demanda; cada equipo manda persona y horario.",
    "quien": "María Elena (propuesta)"
   },
   {
    "id": "D7",
    "texto": "Oficina prequirúrgica en tres funciones: orientación (1.º piso), gestión (4.º piso), tabla quirúrgica / central de mando (2.º piso, pabellón), dependiente del Depto. de Cirugía.",
    "quien": "Grupo (a validar)"
   },
   {
    "id": "D8",
    "texto": "El documento del proceso se trabaja en grupo chico y se presenta a las jefaturas como propuesta el próximo martes.",
    "quien": "María Elena"
   }
  ],
  "compromisos": [
   {
    "id": "C1",
    "texto": "Repetir la observación del registro de tiempos otro día.",
    "resp": "Mónica [sic?]",
    "plazo": ""
   },
   {
    "id": "C2",
    "texto": "Informe de lo observado sobre los tiempos de pabellón.",
    "resp": "Carlos [sic?] con Matías",
    "plazo": "2026-10-13"
   },
   {
    "id": "C3",
    "texto": "Lockers y casilleros para los médicos: quién accede y dónde.",
    "resp": "Matías · María Elena",
    "plazo": ""
   },
   {
    "id": "C4",
    "texto": "Revisar el uso de los pabellones de urgencia y residencia (números, qué se operó, quién autorizó la tiroides nocturna).",
    "resp": "Grupo · Paula [sic?] los martes",
    "plazo": "2026-10-13"
   },
   {
    "id": "C5",
    "texto": "Revisión del proceso quirúrgico con los jefes de servicio (David, Paula); pedir la hora de la reunión de robótica.",
    "resp": "María Elena",
    "plazo": "2026-10-13"
   },
   {
    "id": "C6",
    "texto": "Definir con la universidad cómo será la residencia quirúrgica en el NHDS.",
    "resp": "No consta",
    "plazo": ""
   }
  ],
  "sin_acuerdo": [
   "Parar el pabellón al mediodía vs relevos (se inclina por no parar; «revisémoslo»). Alternativa mencionada: dos equipos en horarios diferidos, 8:00 y 11:00.",
   "Tercer pabellón de urgencia o pabellón compartido de hospitalizados 24 h: primero revisar el de residencia.",
   "Dónde atender pacientes de la oficina prequirúrgica: AS exige 1.º piso; el equipo prefiere no atender; se propone front office abajo y gestión arriba."
  ],
  "proxima": {
   "fecha": "2026-10-13",
   "temas": [
    "Informe de tiempos y segunda observación",
    "Pabellones de urgencia y residencia con números fijos",
    "Propuesta del proceso revisada en grupo chico",
    "Oficina prequirúrgica en tres funciones",
    "Lockers"
   ]
  },
  "pendientes": [
   "P127",
   "P128",
   "P129",
   "P130",
   "P131",
   "P132",
   "P133",
   "P134"
  ]
 },
 "pendientes": [
  {
   "id": "P002",
   "titulo": "Cifras oficiales del Pabellón Central no coinciden con la planimetría",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P003",
   "titulo": "Angiografía 80007: el resumen dice 2 equipos y el Despliegue 1",
   "estado": "Abierto",
   "prioridad": "Media",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P057",
   "titulo": "Incidente de datos · agenda robótica publicada con RUT y acceso anónimo a datos de pacientes",
   "estado": "En curso",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P064",
   "titulo": "Catastro · 16 recintos del Pabellón Histórico asignados al servicio PABELLON CENTRAL",
   "estado": "Abierto",
   "prioridad": "Baja",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P074",
   "titulo": "da Vinci X: firmar la OT de la mantención preventiva semestral (OS 192) para cerrarla",
   "estado": "Abierto",
   "prioridad": "Media",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P076",
   "titulo": "Instrumental: la CSSO debe informar el avance de recepción y las fechas de término",
   "estado": "Esperando terceros",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P077",
   "titulo": "Microscopio 40042: exigir el puente estéreo face-to-face (coobservación a 180°)",
   "estado": "Esperando terceros",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P079",
   "titulo": "CCHEN: 142 dosímetros sin devolver en 4 contratos del hospital (eran 181)",
   "estado": "En curso",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P081",
   "titulo": "Cabida del personal de Gestión del Cuidado en Quirófanos, Pre Anestesia y Recuperación · corte definitivo el lunes",
   "estado": "En curso",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P082",
   "titulo": "Pabellones: pedir la especialidad o rol operativo de cada TENS (rayos, endoscopía, arsenalera por especialidad, aux. anestesia)",
   "estado": "Esperando terceros",
   "prioridad": "Media",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P087",
   "titulo": "Capacitaciones EMMC de recintos de gran envergadura en espera de que la CSSO certifique su entrega",
   "estado": "Esperando terceros",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P089",
   "titulo": "Definir qué capacitaciones de cajas de instrumental pasan a Instructivo de Uso",
   "estado": "Abierto",
   "prioridad": "Media",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P102",
   "titulo": "Pabellón Central: 6 quirófanos sin mesa quirúrgica · riesgo para la autorización sanitaria",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P103",
   "titulo": "Pabellón Central: brechas de equipamiento propio por quirófano frente a la pauta de cirugía mayor",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P104",
   "titulo": "H0098 Sala Litotripsia: una sola toma industrial para dos láseres (y un tercero pedido en traslado)",
   "estado": "Esperando terceros",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P105",
   "titulo": "Arcos C: la compra no incluye elementos de protección radiológica",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P106",
   "titulo": "Pabellón: ninguna de las 84 personas expuestas tiene autorización de desempeño vigente",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P107",
   "titulo": "Torres de laparoscopía: sin instalar y sin definición de qué pantallas se verán en pabellón",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P108",
   "titulo": "Endoscopía: definir dónde se almacenan los endoscopios y las torres",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P109",
   "titulo": "Instrumental: 38 tipos de caja tienen entrega el 01-11-2026, después del traslado",
   "estado": "Esperando terceros",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": true
  },
  {
   "id": "P113",
   "titulo": "CCHEN pide reforzar la protección radiológica en Pabellón: lecturas de hasta 2 mSv",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Matías Pinto",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P127",
   "titulo": "Tiempos quirúrgicos en TrakCare registrados a posteriori y redondeados a 0/5: repetir la observación e informar",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Mónica [sic?] · Carlos [sic?] · Matías Pinto",
   "plazo": "2026-10-13",
   "critico": true
  },
  {
   "id": "P128",
   "titulo": "Recambio y variabilidad de anestesia como focos de mejora: medirlos con los tiempos reales",
   "estado": "Abierto",
   "prioridad": "Media",
   "responsable": "Jefatura de Pabellón y Anestesia",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P129",
   "titulo": "Cambios de tabla (~50 %): separar inevitables de mejorables y exigir programación cierta por equipo",
   "estado": "Abierto",
   "prioridad": "Media",
   "responsable": "Unidad de Tabla · jefes de equipo quirúrgico",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P130",
   "titulo": "Pabellones de urgencia y residencia fijos y usados para lo que son; revisar la tiroides electiva nocturna en residencia",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "María Elena Sepúlveda · Paula [sic?]",
   "plazo": "2026-10-13",
   "critico": true
  },
  {
   "id": "P131",
   "titulo": "Jefatura única de pabellón que distribuya los quirófanos según demanda",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "María Elena Sepúlveda (propuesta a Dirección)",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P132",
   "titulo": "Lockers y casilleros para médicos en las estaciones de trabajo del 4.º piso",
   "estado": "Abierto",
   "prioridad": "Media",
   "responsable": "Matías Pinto · María Elena Sepúlveda",
   "plazo": "",
   "critico": false
  },
  {
   "id": "P133",
   "titulo": "Oficina prequirúrgica en tres funciones: orientación (1.º), gestión (4.º) y tabla / central de mando (2.º)",
   "estado": "Abierto",
   "prioridad": "Alta",
   "responsable": "Grupo chico (María Elena, jefes de servicio)",
   "plazo": "2026-10-13",
   "critico": false
  },
  {
   "id": "P134",
   "titulo": "Residencia quirúrgica en el NHDS: definir con la universidad",
   "estado": "Abierto",
   "prioridad": "Media",
   "responsable": "No consta",
   "plazo": "",
   "critico": false
  }
 ]
};
