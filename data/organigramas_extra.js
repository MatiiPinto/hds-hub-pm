// data/organigramas_extra.js — organigramas adicionales de la 15 (Puesta en Marcha y hospital concesionado).
// PM: transcrito de la pizarra de Puesta en Marcha (foto IMG_0557, 27-10-2026). Lo que no se lee con certeza va con «por confirmar».
// Concesionado: conducto formal del contrato + 14 servicios de los PAPS aprobados (SHARED_DATA/paps_full.js).
window.ORG_EXTRA = {
  pm: {
    titulo: 'Puesta en Marcha · Nuevo HDS',
    sub: 'Estructura de trabajo y responsables por frente · pizarra de Puesta en Marcha del 27-10-2026',
    fases: [
      { n: 1, t: 'Pre-PSP', cuando: 'jun · jul · ago', c: 'azul', items: ['Planificación del Plan Piloto', 'Gestión documental (AS · ISP)', 'Capacitación general y específica (EMMC, mobiliario, servicios de apoyo)'] },
      { n: 2, t: 'PSP · Marcha blanca', cuando: '4 semanas', c: 'verde', items: ['Piloto: casos de uso y paciente ficticio', 'Autorización Sanitaria ✓ · ISP ✓', 'Simulacro de traslado (estrés)', 'Inspección conjunta → subsanación → recepción'] },
      { n: 3, t: 'Traslado', cuando: 'nov · 7 días', c: 'durazno', items: ['Modelo de Operación Dual Transitoria'] },
      { n: 4, t: 'Operativo', cuando: '', c: 'lila', items: ['Red AP-GC-O · financiamiento Gestión del Cambio'] }
    ],
    // árbol: cada nodo { t, s (subtítulo), c (color), q (por confirmar), h (hijos) }
    arbol: {
      t: 'SSMO', s: 'Servicio de Salud Metropolitano Oriente', c: 'navy',
      lado: { t: 'Coordinación Técnica', s: 'CT · SSMO', c: 'azul' },
      h: [
        { t: 'HDS', s: 'Hospital del Salvador', c: 'navy', h: [
          { t: 'PM y Gestión del Cambio', s: 'PMGC · coordinación', c: 'azul', q: 'Sigla en pizarra: «PMGC C.T.»; al lado un recuadro «33An» sin leer', h: [
            { t: 'Clínica', s: 'frentes clínicos', c: 'verde', h: [
              { t: 'Autorización Sanitaria', c: 'verde', p: ['C. Sepúlveda', 'M. Canales'] },
              { t: 'Traslado', c: 'verde', p: ['F. Araya', 'C. Poch'] },
              { t: 'EMMC', c: 'verde', p: ['M. Canales (Mey)'] },
              { t: 'Plan Piloto (SCL)', c: 'verde', p: ['J. Pacheco', 'M. Salvatierra', 'M. Canales', 'H. Díaz'], q: 'En el organigrama de la pizarra figura «?»' },
              { t: 'Capacitación', c: 'verde', p: ['C. Guerrero', 'Javi', 'I. Rojas', 'M. Pinto'] },
              { t: 'Cabida', c: 'verde', p: ['L. Pérez', 'M. Pinto'] }
            ]},
            { t: 'Administración y Logística', s: 'frentes de soporte', c: 'durazno', h: [
              { t: 'Inspección del contrato', s: 'IC · enlace con SDA', c: 'durazno', q: 'Sigla «IC» encerrada; flecha doble con SDA', h: [
                { t: 'RSO · PAPS', s: 'J.P.', c: 'durazno', p: ['HUB · Equipamiento', 'Operaciones', 'CS · TIC', 'CC · TD', 'CC · Logística'], q: 'Siglas de la columna por confirmar' },
                { t: 'Servicios concesionados', s: 'M. Salvatierra (por confirmar)', c: 'durazno', p: ['Seguridad ✓', 'Aseo ✓', 'Alimentación ✓', 'Ropería', 'Esterilización'] }
              ]}
            ]}
          ]},
          { t: 'Subdirecciones', s: 'equipos directivos', c: 'lila', h: [
            { t: 'SDADT', s: 'Apoyo Diagnóstico y Terapéutico', c: 'lila', p: ['D = FR ✓', 'T = PH ✓'], q: 'Anotación «11K» junto a SDADT sin leer' },
            { t: 'SDM', s: 'Subdirección Médica', c: 'lila' },
            { t: 'SDGC', s: 'Gestión del Cuidado', c: 'lila' },
            { t: 'SDA', s: 'Administrativa · ADP', c: 'lila' }
          ]}
        ]},
        { t: 'INGER', s: 'Instituto Nacional de Geriatría', c: 'navy' }
      ]
    },
    transversales: [
      { t: 'Comunicaciones', p: 'Martín Navarro · Javi', c: 'azul' },
      { t: 'Gestión documental', p: 'N. Jaramillo · T. Cataldo · V. Duque · K. Alfaro', c: 'azul', ok: 'Listo' },
      { t: 'Mesa de trabajo y manuales de uso', p: 'Javiera Pacheco · casilleros, residencia, auditorios', c: 'verde' },
      { t: 'Señalética', p: 'C. Sepúlveda', c: 'verde' },
      { t: 'Simulación de flujo clínico (SCL)', p: 'por definir', c: 'durazno' },
      { t: 'Revisión EMMC · MNC', p: 'M. Canales', c: 'durazno' },
      { t: 'Recepción instrumental quirúrgico', p: 'M. Pinto', c: 'lila' },
      { t: 'Comité Estratégico de Gestión Clínica', p: 'Loreto Pérez', c: 'lila' }
    ],
    agenda: ['09:00 · Core', '10:30 · Logística', '12:00 · TEP'],
    notas: ['Comunicaciones canaliza la relación con el MOP y los mensajes («Habla» → DM en la pizarra).', 'La pizarra marca un «DM» como nodo que reparte Clínica y Administración y Logística: sigla por confirmar.']
  },

  concesionado: {
    titulo: 'Hospital concesionado · relación contractual',
    sub: 'Conducto formal y servicios de la Sociedad Concesionaria (PAPS aprobados 2026) · HDS + INGER',
    conducto: [
      { t: 'HDS · Puesta en Marcha', s: 'requerimientos del hospital', c: 'azul' },
      { t: 'SSMO · Coordinación Técnica', s: 'F. Rojas · F. Cid · K. González', c: 'azul' },
      { t: 'MOP · Inspección Fiscal', s: 'Paz Fuentes', c: 'lila' },
      { t: 'AIF · Asesoría a la Inspección Fiscal', s: 'C&D Ingeniería', c: 'lila' },
      { t: 'Sociedad Concesionaria (CSSO)', s: 'Consorcio de Salud Santiago Oriente', c: 'durazno' }
    ],
    nota: 'Las materias formales van por ORD: HDS → SSMO → Inspección Fiscal → AIF → CSSO. Las consultas técnicas a la CSSO van con copia a la AIF y al SSMO.',
    categorias: [
      { t: 'Servicios básicos no clínicos de apoyo', c: 'verde', s: [['01', 'Aseo y Limpieza General'], ['02', 'Gestión Integral de Residuos (REAS)'], ['03', 'Control Sanitario de Vectores'], ['04', 'Gestión de Ropería'], ['05', 'Alimentación de Pacientes y Funcionarios']] },
      { t: 'Servicios básicos', c: 'azul', s: [['06', 'Mantenimiento y Operación de la Infraestructura'], ['07', 'Adm. y Mantenimiento de Mobiliario No Clínico'], ['08', 'Adquisición y Reposición de Mobiliario No Clínico']] },
      { t: 'Servicios especiales obligatorios', c: 'durazno', s: [['09', 'Cafetería'], ['10', 'Seguridad y Vigilancia'], ['11', 'Estacionamiento de Funcionarios y Visitas'], ['12', 'Adm. y Mantenimiento de Equipamiento Médico y Mobiliario Clínico'], ['13', 'Adquisición y Reposición de Equipamiento Médico y Mobiliario Clínico'], ['14', 'Sistemas de Información e Infraestructura Tecnológica']] }
    ]
  }
};
