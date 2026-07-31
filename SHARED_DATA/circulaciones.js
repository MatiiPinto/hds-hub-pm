// SHARED_DATA/circulaciones.js
// Información de circulación HDS · compilada desde presentaciones SSMO (carpeta "Circulaciones")
//  · Planimetría Ascensores 2023 · Flujos de fallecidos · Flujos de pacientes · Pasarelas AA/AC/INGER
// Acceso: window.SHARED_CIRCULACIONES
// Fuente original: Camilo Romero · María Soledad Elías · María José Mendizábal (SSMO / HDS)

window.SHARED_CIRCULACIONES = {
  meta: {
    version: "2026-06-11",
    fuente: "Presentaciones de circulación SSMO/HDS (Planimetría Ascensores 2023; Flujos de fallecidos; Flujos de pacientes; Pasarelas AA/AC).",
    pisosPlataforma: ["P-2","P-1","P1","P2","P3","P4"]
  },

  // ── Nomenclatura de colores de ascensores (lámina "Detalle Ascensores") ──
  nomenclatura: [
    { cat:"publico",          label:"Ascensores de público",                    color:"#7AC143" },
    { cat:"montacamas-mayor", label:"Montacamas de mayor superficie",           color:"#0B2A6B" },
    { cat:"montacamas",       label:"Montacamas normal",                        color:"#29ABE2" },
    { cat:"servicio",         label:"Ascensores de servicio (personal y suministro)", color:"#FBB000" }
  ],

  // ── Directorio de ascensores ──
  // zona: AA=Atención Abierta · AC=Atención Cerrada · INGER · EST=Estacionamientos
  // cambiaProyecto: pertenece a los 6 núcleos que cambian dentro del proyecto (G, N, O, W explícitos en lámina)
  // pisos: limitados a los pisos de la plataforma (-2 a 4). El rango textual puede incluir -3 / piso técnico.
  ascensores: [
    { id:"A", zona:"AA",    cat:"publico",          rango:"-3 al 4",            pisos:["P-2","P-1","P1","P2","P3","P4"], cambiaProyecto:false, notas:"" },
    { id:"B", zona:"AA",    cat:"publico",          rango:"-1 al 4",            pisos:["P-1","P1","P2","P3","P4"],       cambiaProyecto:false, notas:"" },
    { id:"C", zona:"EST",   cat:"servicio",         rango:"-3 al 1",            pisos:["P-2","P-1","P1"],                cambiaProyecto:false, notas:"Estacionamientos." },
    { id:"D", zona:"AA",    cat:"publico",          rango:"-1 al 4",            pisos:["P-1","P1","P2","P3","P4"],       cambiaProyecto:false, notas:"" },
    { id:"E", zona:"AA",    cat:"publico",          rango:"-1 al 4",            pisos:["P-1","P1","P2","P3","P4"],       cambiaProyecto:false, notas:"" },
    { id:"F", zona:"EST",   cat:"servicio",         rango:"-3 al 1",            pisos:["P-2","P-1","P1"],                cambiaProyecto:false, notas:"Estacionamientos / Atención Cerrada." },
    { id:"G", zona:"AC",    cat:"montacamas-mayor", rango:"-2 al piso técnico", pisos:["P-2","P-1","P1","P2","P3","P4"], cambiaProyecto:true,  notas:"Cambia en el proyecto. Uso exclusivo pacientes con asistencia. Urgencia→Pabellón; traslados M/Q P3↔P4." },
    { id:"H", zona:"AC",    cat:"montacamas",       rango:"-2 al 4",            pisos:["P-2","P-1","P1","P2","P3","P4"], cambiaProyecto:false, notas:"Flujo fallecidos desde Pabellón y M/Q Sector A." },
    { id:"I", zona:"AC",    cat:"montacamas",       rango:"-1 al 4",            pisos:["P-1","P1","P2","P3","P4"],       cambiaProyecto:false, notas:"Traslado pacientes (cama/silla) a Diálisis, Imágenes, Endoscopía, etc. y a pasarelas." },
    { id:"J", zona:"AC",    cat:"montacamas",       rango:"-1 al 4",            pisos:["P-1","P1","P2","P3","P4"],       cambiaProyecto:false, notas:"Traslado pacientes (cama/silla) a Diálisis, Imágenes, Endoscopía, etc. y a pasarelas." },
    { id:"K", zona:"AA",    cat:"servicio",         rango:"-3 al 1",            pisos:["P-2","P-1","P1"],                cambiaProyecto:false, notas:"" },
    { id:"L", zona:"AA",    cat:"publico",          rango:"-1 al 4",            pisos:["P-1","P1","P2","P3","P4"],       cambiaProyecto:false, notas:"" },
    { id:"M", zona:"AC",    cat:"montacamas",       rango:"-1 al 2",            pisos:["P-1","P1","P2"],                 cambiaProyecto:false, notas:"Flujo fallecidos desde Urgencia, Pabellón y UCI/UTI." },
    { id:"N", zona:"AC",    cat:"montacamas",       rango:"-1 al 2",            pisos:["P-1","P1","P2"],                 cambiaProyecto:true,  notas:"Cambia en el proyecto. Urgencia→Unidad Crítica y UIS/UHI; flujo fallecidos Urgencia/Pabellón/UCI." },
    { id:"Ñ", zona:"AC",    cat:"montacamas",       rango:"2 al 4",             pisos:["P2","P3","P4"],                  cambiaProyecto:false, notas:"Traslado pacientes a UIS/UHI." },
    { id:"O", zona:"AC",    cat:"montacamas",       rango:"-1 al 4",            pisos:["P-1","P1","P2","P3","P4"],       cambiaProyecto:true,  notas:"Cambia en el proyecto. Flujo fallecidos UIS/UHI y M/Q Sector B." },
    { id:"P", zona:"AC",    cat:"servicio",         rango:"-3 al 1",            pisos:["P-2","P-1","P1"],                cambiaProyecto:false, notas:"" },
    { id:"Q", zona:"AC",    cat:"servicio",         rango:"-2 al 1",            pisos:["P-2","P-1","P1"],                cambiaProyecto:false, notas:"" },
    { id:"R", zona:"AC",    cat:"publico",          rango:"1 al 4",             pisos:["P1","P2","P3","P4"],             cambiaProyecto:false, notas:"" },
    { id:"S", zona:"AC",    cat:"publico",          rango:"1 al 4",             pisos:["P1","P2","P3","P4"],             cambiaProyecto:false, notas:"" },
    { id:"T", zona:"AC",    cat:"montacamas",       rango:"-1 al 4",            pisos:["P-1","P1","P2","P3","P4"],       cambiaProyecto:false, notas:"Flujo fallecidos UIS/UHI y M/Q Sector C." },
    { id:"U", zona:"INGER", cat:"publico",          rango:"-2 al 1",            pisos:["P-2","P-1","P1"],                cambiaProyecto:false, notas:"Acceso INGER." },
    { id:"V", zona:"INGER", cat:"publico",          rango:"-2 al 4",            pisos:["P-2","P-1","P1","P2","P3","P4"], cambiaProyecto:false, notas:"INGER." },
    { id:"W", zona:"INGER", cat:"montacamas",       rango:"-2 al 4",            pisos:["P-2","P-1","P1","P2","P3","P4"], cambiaProyecto:true,  notas:"Cambia en el proyecto. Flujo fallecidos desde INGER hasta Anatomía Patológica." },
    { id:"X", zona:"INGER", cat:"servicio",         rango:"1 al 4",             pisos:["P1","P2","P3","P4"],             cambiaProyecto:false, notas:"INGER." },
    { id:"Y", zona:"INGER", cat:"publico",          rango:"-2 al 1",            pisos:["P-2","P-1","P1"],                cambiaProyecto:false, notas:"INGER." }
  ],

  // ── Flujos de fallecidos (destino: Anatomía Patológica · Piso -1) ──
  destinoFallecidos: "Anatomía Patológica · Piso -1",
  flujosFallecidos: [
    { id:"fa-inger",  origen:"INGER (Piso Sub -1 / Casino)", pisoOrigen:"P-1", ascensores:["W"],
      pasos:["Traslado por núcleo de ascensores W en Piso -1","Recorrido por Piso -1 hasta Anatomía Patológica"],
      notas:"" },
    { id:"fa-urg",    origen:"Urgencia", pisoOrigen:"P1", ascensores:["N","M"],
      pasos:["Salida desde Urgencia (Piso 1)","Bajar al Piso -1 por núcleo N o M","Traslado por Piso -1 hasta Anatomía Patológica"],
      notas:"" },
    { id:"fa-pab",    origen:"Pabellón", pisoOrigen:"P2", ascensores:["H","M","N"],
      pasos:["Salida desde Pabellón (Piso 2)","Bajar al Piso -1 por núcleo H, M o N","Traslado por Piso -1 hasta Anatomía Patológica"],
      notas:"" },
    { id:"fa-uci",    origen:"UCI / UTI", pisoOrigen:"P2", ascensores:["M","N"],
      pasos:["Salida desde UCI/UTI (Piso 2)","Bajar al Piso -1 por núcleo M o N","Traslado por Piso -1 hasta Anatomía Patológica"],
      notas:"" },
    { id:"fa-uis",    origen:"UIS / UHI", pisoOrigen:"P2", ascensores:["O","T"],
      pasos:["Salida desde UIS/UHI (Piso 2)","Bajar al Piso -1 por núcleo O (o T)","Traslado por Piso -1 hasta Anatomía Patológica"],
      notas:"" },
    { id:"fa-mq-a",   origen:"Médico Quirúrgico · Sector A", pisoOrigen:"P3", ascensores:["H","I","J"],
      pasos:["Salida desde unidades M/Q Sector A (Piso 3 y 4)","Bajar al Piso -1 por núcleo H, I o J","Traslado por Piso -1 hasta Anatomía Patológica"],
      notas:"" },
    { id:"fa-mq-b",   origen:"Médico Quirúrgico · Sector B", pisoOrigen:"P3", ascensores:["I","J","O"],
      pasos:["Salida desde unidades M/Q Sector B (Piso 3 y 4)","Bajar al Piso -1 por núcleo I, J u O","Traslado por Piso -1 hasta Anatomía Patológica"],
      notas:"" },
    { id:"fa-mq-c",   origen:"Médico Quirúrgico · Sector C", pisoOrigen:"P3", ascensores:["T"],
      pasos:["Salida desde unidades M/Q Sector C (Piso 3 y 4)","Bajar al Piso -1 por núcleo T","Traslado por Piso -1 hasta Anatomía Patológica"],
      notas:"" }
  ],

  // ── Flujos de pacientes ──
  flujosPacientes: [
    { id:"pa-urg-pab",  titulo:"Urgencia → Pabellones", origen:"Urgencia (Piso 1)", destino:"Pabellones (Piso 2)",
      pisos:["P1","P2"], ascensores:["G"], pasarela:false,
      notas:"Subir al Piso 2 por núcleo G. Incluye traslado a sala prequirúrgica." },
    { id:"pa-urg-uc",   titulo:"Urgencia → Unidad Crítica", origen:"Urgencia (Piso 1)", destino:"Cuidados Intensivos / Tratamiento Intermedio (Piso 2)",
      pisos:["P1","P2"], ascensores:["N"], pasarela:false,
      notas:"Uso núcleo N." },
    { id:"pa-urg-uis",  titulo:"Urgencia → UIS / UHI", origen:"Urgencia (Piso 1)", destino:"UIS (18 cupos) / UHI (12 cupos) (Piso 2)",
      pisos:["P1","P2"], ascensores:["N","Ñ"], pasarela:false,
      notas:"Pacientes con asistencia. Uso núcleos N y Ñ." },
    { id:"pa-mq",       titulo:"Traslados M/Q entre Piso 3 y 4", origen:"M/Q Piso 3", destino:"M/Q Piso 4",
      pisos:["P3","P4"], ascensores:["G","I","J","O","T","H"], pasarela:false,
      notas:"Núcleo G exclusivo pacientes con asistencia; otros posibles: I, J, O, T, H." },
    { id:"pa-dialisis", titulo:"→ Diálisis / Medicina Nuclear / Med. Física y Rehab. / Cardiología", origen:"Hospitalización", destino:"Diálisis · Medicina Nuclear (PET-CT, SPECT-CT) · Med. Física y Rehabilitación · Cardiología (Piso -1)",
      pisos:["P-1"], ascensores:["I","J"], pasarela:true,
      notas:"Paciente en cama o en silla. Uso de pasarela hacia edificio Atención Abierta." },
    { id:"pa-imagenes", titulo:"→ Imágenes / Oftalmología", origen:"Hospitalización", destino:"Imágenes · Oftalmología (Piso 1)",
      pisos:["P1"], ascensores:["I","J"], pasarela:true,
      notas:"Paciente en cama o en silla. Uso de pasarela." },
    { id:"pa-endoscopia", titulo:"→ Endoscopía", origen:"Hospitalización", destino:"Endoscopía (Piso 2)",
      pisos:["P2"], ascensores:["I","J"], pasarela:false,
      notas:"Paciente en cama o en silla." },
    { id:"pa-odonto",   titulo:"→ Odontología / Neurología / Dermatología", origen:"Hospitalización", destino:"Odontología · Neurología · Dermatología (Piso 3, Atención Abierta)",
      pisos:["P3"], ascensores:["I","J"], pasarela:true,
      notas:"Uso de pasarela hacia edificio Atención Abierta." }
  ],

  // ── Pasarelas AA/AC/INGER + distribución de servicios por edificio y piso ──
  pasarelas: [
    { piso:"P1", conecta:"UTO (Atención Cerrada) ↔ Servicio Oftalmología (Atención Abierta)",
      edificios:{
        AC:["Oftalmología","Imagenología","Servicio Psiquiatría","Central Gases Clínicos","Atención al paciente","UTO","UEH"],
        AA:["Farmacia Atención Abierta","Laboratorio Muestras","Consultas Médicas","Farmacia Ambulatoria","Capacitación"],
        INGER:["Atención del paciente","Capacitación"]
      } },
    { piso:"P2", conecta:"Recuperación / Endoscopía (Atención Cerrada) ↔ Consultas y procedimiento Cirugía (Atención Abierta)",
      edificios:{
        AC:["Oncohematología","Coordinación de Trasplante","Cuidados Intensivos","Tratamiento Intermedio","UIS","UH","Endoscopía","Pabellones","2 Pabellones Angiografía"],
        AA:["Consultas - Procedimientos Cirugía","Medicina Física y Rehabilitación"],
        INGER:["Geriatría Ambulatoria","Cuidados Intensivos"]
      } },
    { piso:"P3", conecta:"Salas M/Q (Atención Cerrada) ↔ Servicio Otorrinolaringología (Atención Abierta)",
      edificios:{
        AC:["Hospitalización","Pensionado","Otorrinolaringología"],
        AA:["Odontología","Neurología","Dermatología"],
        INGER:["Hospitalización"]
      } },
    { piso:"P4", conecta:"Servicio M/Q (Atención Cerrada) ↔ Jefaturas Clínicas (Atención Abierta)",
      edificios:{
        AC:["Dirección HDS","Jefaturas Clínicas","Administrativos HDS","Pensionado","Hospitalización"],
        AA:["Cubierta ajardinada / Piso técnico"],
        INGER:["Dirección INGER","Administrativos INGER","Hospitalización"]
      } }
  ],

  // ── Patio de maniobras y carrozas fúnebres ──
  patioManiobras: {
    descripcion: "Patio de maniobras: ingresos y salidas de vehículos de insumos, carros mortuorios, REAS, residuos y basuras.",
    estacionamientosCarrozas: 3
  }
};
