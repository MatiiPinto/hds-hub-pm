// data/organigramas_extra.js — organigramas adicionales de la 15 (Puesta en Marcha y hospital concesionado).
// PM: pizarra de Puesta en Marcha (foto IMG_0557) + organización acordada en la reunión del 27-10-2026. Lo que no consta con certeza va con «por confirmar».
// Concesionado: conducto formal del contrato + 14 servicios de los PAPS aprobados (SHARED_DATA/paps_full.js).
window.ORG_EXTRA = {
  // Sigla de profesión/estamento antes del nombre (28-10-2026). Se aplica al mostrar a cada persona
  // (también a las que se escriban en el editor) por inicial + apellido. Fuente: dotación del HDS
  // revisada a mano; quien no está aquí se muestra sin sigla (completar cuando se confirme).
  titulos: {
    'Catherine Sepúlveda': 'EU', 'Meylin Canales': 'EU', 'Fernando Araya': 'EU', 'Lorena Encina': 'EU',
    'María Elena Sepúlveda': 'QF', 'Matías Pinto': 'Ing.', 'Fernando Lacalle': 'Ing.',
    'Javiera Pacheco': 'Ps.', 'Isabel Rojas': 'Ps.', 'Loreto Pérez': 'Ps.',
    'Horacio Díaz': 'Dr.', 'Manuel Ramírez': 'Dr.', 'Jorge Zajjur Castro': 'Dr.',
    'Allyson Davis': 'TM', 'Carolina Rivera': 'Arq.', 'Andrés Villarroel': 'Adm. Púb.'
  },
  pm: {
    titulo: 'Puesta en Marcha · Nuevo HDS',
    sub: 'Organización acordada con el Director (reunión del equipo PM, 27-10-2026): cada rol con su persona · sobre la pizarra y el bosquejo en papel del 27-10',
    fases: [
      { n: 1, t: 'Pre-PSP', cuando: 'jun · jul · ago', c: 'azul', items: ['Planificación del Plan Piloto', 'Gestión documental (AS · ISP)', 'Capacitación general y específica (EMMC, mobiliario, servicios de apoyo)'] },
      { n: 2, t: 'PSP · Marcha blanca', cuando: '4 semanas', c: 'verde', items: ['Piloto: casos de uso y paciente ficticio', 'Autorización Sanitaria ✓ · ISP ✓', 'Simulacro de traslado (estrés)', 'Inspección conjunta → subsanación → recepción'] },
      { n: 3, t: 'Traslado', cuando: 'nov · 7 días', c: 'durazno', items: ['Modelo de Operación Dual Transitoria'] },
      { n: 4, t: 'Operativo', cuando: '', c: 'lila', items: ['Red AP-GC-O · financiamiento Gestión del Cambio'] }
    ],
    // árbol: cada nodo { t (rol), s (detalle), p (personas), c (color), q (por confirmar), h (hijos) }
    // 27-10-2026 · reunión del equipo PM (Minutas/2026-10-27_reunion-diaria-pm.md): María Elena Sepúlveda
    // coordinadora técnica de PM en espejo con Francisca Cid (SSMO); Catherine 100 % AS; TIC y Logística
    // salen de PM (pedido de F. Lacalle); PM se divide en ámbito clínico y administrativo-logístico.
    arbol: {
      t: 'SSMO', s: 'Servicio de Salud Metropolitano Oriente · Dirección del Servicio', c: 'navy',
      lado: { t: 'Coordinación Técnica SSMO', s: 'canal oficial: todo entra y sale por ella', c: 'azul', p: ['Francisca Cid'],
              q: 'Cargo de origen por confirmar: jefa del departamento de Planificación y Proyectos, dependiente del Subdirector Administrativo del SSMO, encomendada como coordinadora técnica del Director' },
      h: [
        { t: 'Hospital del Salvador', s: 'Director', c: 'navy', z: 'M', p: ['Dr. Jorge Zajjur Castro'], h: [
          { t: 'Coordinación Técnica de Puesta en Marcha', s: 'de director a director con la CT del SSMO', c: 'azul', z: 'M', p: ['María Elena Sepúlveda'], h: [
            { t: 'Ámbito clínico', s: 'frentes clínicos', c: 'verde', h: [
              { t: 'Autorización Sanitaria', s: 'SEREMI · ISP · cartera de prestaciones', c: 'verde', z: 'M', p: ['Catherine Sepúlveda (100 %)', 'Javiera Flores'] },
              { t: 'Equipamiento médico (EMMC)', s: 'existencias · subsanaciones · traslado', c: 'verde', z: 'M', p: ['Matías Pinto', 'Meylin Canales'] },
              { t: 'Plan Piloto (SCL)', s: 'enrolamiento y capacitación del piloto', c: 'verde', z: 'M', p: ['Javiera Pacheco', 'Horacio Díaz', 'Meylin Canales', 'Marisol Salvatierra'], q: 'Responsable único por definir (se trabaja en la presentación)' },
              { t: 'Plan de Traslado y poblamiento', s: 'programa de traslado · despoblamiento', c: 'verde', z: 'M', p: ['Fernando Araya', 'Costanza Poch'] },
              { t: 'Capacitación', s: 'general y específica', c: 'verde', z: 'M', p: ['C. Guerrero', 'Javi', 'Isabel Rojas', 'Matías Pinto'], q: 'Nombres de la pizarra: confirmar «Javi» y C. Guerrero' },
              { t: 'Cabida', s: 'quién trabaja dónde en el NHDS', c: 'verde', z: 'M', p: ['Loreto Pérez', 'Matías Pinto'] }
            ]},
            { t: 'Ámbito administrativo y logístico', s: 'con la Subdirección Administrativa', c: 'durazno', z: 'M', p: ['Rodrigo Hermosilla', 'Fernando Lacalle', 'Marisol Salvatierra'], h: [
              { t: 'Traslado de equipos propios y comodatos', s: 'con Mariana Bravo (SSMO)', c: 'durazno', z: 'M', p: ['Rodrigo Hermosilla', 'Matías Pinto'] },
              { t: 'Logística en terreno', s: 'racks · bodegas · oficinas', c: 'durazno', z: 'M', p: ['Rodrigo Espinoza'] },
              { t: 'Sociedad Concesionaria', s: 'servicios concesionados: seguridad, aseo, alimentación, ropería, esterilización', c: 'durazno', z: 'M', p: ['Marisol Salvatierra'], q: 'Responsable de los servicios concesionados por confirmar' }
            ]}
          ]},
          { t: 'Subdirecciones', s: 'resuelven; PM facilita y coordina', c: 'lila', h: [
            { t: 'SDA · Administrativa', s: 'TIC y Logística (salen de PM)', c: 'lila', p: ['Fernando Lacalle'] },
            { t: 'SDM · Médica', c: 'lila', p: ['Dr. Manuel Ramírez'] },
            { t: 'SDADT · Apoyo Dx y Terapéutico', c: 'lila', p: ['María Elena Sepúlveda'] },
            { t: 'SDGC · Gestión del Cuidado', c: 'lila', p: ['Lorena Encina'] },
            { t: 'SDGP · Gestión de Personas', c: 'lila', p: ['Andrés Villarroel'] }
          ]}
        ]},
        { t: 'INGER', s: 'Instituto Nacional de Geriatría', c: 'navy' }
      ]
    },
    transversales: [
      { t: 'Comunicaciones', p: 'Martín Navarro · Javi', c: 'azul' },
      { t: 'Gestión documental', p: 'N. Jaramillo · T. Cataldo · V. Duque · K. Alfaro', c: 'azul', ok: 'Listo' },
      { t: 'Mesa de trabajo y manuales de uso', p: 'Javiera Pacheco · casilleros, residencia, auditorios', c: 'verde' },
      { t: 'Señalética', p: 'Catherine Sepúlveda', c: 'verde' },
      { t: 'Simulación de flujo clínico (SCL)', p: 'por definir', c: 'durazno' },
      { t: 'Revisión EMMC · MNC', p: 'Meylin Canales', c: 'durazno' },
      { t: 'Recepción instrumental quirúrgico', p: 'Matías Pinto', c: 'lila' },
      { t: 'Comité Estratégico de Gestión Clínica', p: 'Loreto Pérez', c: 'lila' }
    ],
    agenda: ['L–J 08:00 · Reunión diaria PM', 'Mié 10:00 · Traslado (Dirección)', 'Jue 29-10 · Equipamiento con F. Cid', 'Vie · Comité Estratégico'],
    notas: ['Lo oficial va de director a director: entra y sale por la Coordinación Técnica del SSMO (Francisca Cid) y la de Puesta en Marcha (María Elena Sepúlveda). Lo operativo sigue en el uno a uno (p. ej., con Felipe Rojas), siempre con copia a la coordinación técnica.', 'PM facilita y coordina; las decisiones las toman los subdirectores y el Director.']
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
