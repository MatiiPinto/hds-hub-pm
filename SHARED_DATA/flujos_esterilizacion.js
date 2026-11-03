window.FLUJOS_ESTERILIZACION = {
 "version": "2026-07-31 · Flujos Esterilización ↔ Pabellones HDS",
 "fuente": {
  "acta": "260731 - Acta Reunion Flujos Esterilizacion - Pabellones HDS V2.doc",
  "presentacion": "260731 - Presentación Flujos Esterilización - Pabellones HDS V5.pptx",
  "ruta": "_DOCS/Flujos_Esterilizacion_Pabellones/",
  "reunion": "29 de julio de 2026 · Google Meet",
  "tema": "Consultas Flujo Carros Sucios y Limpios entre Pabellones y Esterilización",
  "emisor": "Coordinación Técnica Proyecto de Reposición HDS-INGER (SSMO)",
  "preparado_por": "Camilo Romero Guzmán / María José Mendizábal"
 },
 "asistentes": [
  {
   "nombre": "Sandra Córdova",
   "org": "HDS"
  },
  {
   "nombre": "José Rubio",
   "org": "HDS"
  },
  {
   "nombre": "Francisco Cano",
   "org": "HDS"
  },
  {
   "nombre": "Rodrigo Hermosilla",
   "org": "HDS"
  },
  {
   "nombre": "María José Mendizábal",
   "org": "CT-SSMO"
  },
  {
   "nombre": "Carolina Rivera",
   "org": "CT-SSMO"
  },
  {
   "nombre": "Camilo Romero",
   "org": "CT-SSMO"
  }
 ],
 "escenarios": [
  {
   "id": "original",
   "titulo": "Flujos según proyecto original",
   "estado": "Diseño de proyecto · revisado en años anteriores con los clínicos del HDS",
   "color": "#29aae2",
   "bajada": "Ascensor de suministros SUR del núcleo NH.03 — destinado por proyecto al traslado de instrumental sucio y residuos",
   "subida": "Ascensor de suministros NORTE del núcleo NH.03 — llegada directa al Almacén Quirúrgico (Piso 2)",
   "laminas": [
    4,
    7
   ]
  },
  {
   "id": "seremi",
   "titulo": "Flujos según recomendación SEREMI",
   "estado": "Recomendación en visita a obra del 22/07/2026",
   "color": "#f59e0b",
   "bajada": "Ascensores MONTACAMAS del núcleo NH.03, en lugar del montacarga sur, para el movimiento del carro sucio",
   "subida": "Sin cambio respecto del proyecto original en la lámina presentada",
   "laminas": [
    5,
    8
   ]
  },
  {
   "id": "hds",
   "titulo": "Propuesta HDS · nuevo modelo de logística",
   "estado": "En elaboración · presentada por Rodrigo Hermosilla · no conocida por todos los asistentes",
   "color": "#a78bfa",
   "bajada": "Sin definir en esta instancia",
   "subida": "Ascensor de suministros SUR del núcleo NH.03; recorrido por el pasillo sur del Piso 2 (el mismo del flujo sucio) y almacenamiento en la Bodega de equipos 27.8.1 / 28.12.1 (PMA), conocida como «F»",
   "motivo": "El Almacén Quirúrgico pasaría a operar como farmacia de pabellón (insumos y fármacos), por lo que los carros de instrumental no podrían llegar a ese recinto",
   "laminas": []
  }
 ],
 "flujo_sucio": [
  "Área de descontaminación de Pabellones Centrales (Piso 2)",
  "Recorrido por el pasillo sur hasta el núcleo de ascensores NH.03",
  "Bajada al Piso Subterráneo 1 (ascensor de suministros sur / montacamas según escenario)",
  "Recorrido en Piso -1 hasta el Área de Recepción de Material Sucio de Esterilización",
  "Ingreso del carro al Área de Lavado, donde es sanitizado para su reutilización",
  "Secado y esclusa",
  "Salida hacia la Central de Distribución"
 ],
 "flujo_limpio": [
  "Área de despacho de carros de la Central de Esterilización",
  "Central de Distribución (Piso -1)",
  "Subida al Piso 2 por el ascensor de suministros norte del núcleo NH.03",
  "Llegada directa al Almacén Quirúrgico, en el área de Pabellones Centrales"
 ],
 "regla_clave": "Aclarado por Sandra Córdova y Francisco Cano (HDS): una vez que los carros salen de la esclusa y realizan su recorrido, aunque en la práctica no estén sucios, deben pasar obligatoriamente por el área de lavado para ser sanitizados antes de iniciar un nuevo uso.",
 "recintos_lavado": [
  {
   "cod": "51.1",
   "nombre": "Ingreso de carros",
   "obs": ""
  },
  {
   "cod": "51.3",
   "nombre": "Lavado de carros",
   "obs": "El recinto considera sumidero"
  },
  {
   "cod": "51.5",
   "nombre": "Almacén de paquetes quirúrgicos",
   "obs": "El recinto considera área de secado de carros"
  },
  {
   "cod": "51.7",
   "nombre": "Preparación de carros",
   "obs": ""
  }
 ],
 "acuerdos": [
  {
   "responsable": "Dr. Francisco Cano (HDS)",
   "acuerdo": "Solicitar una reunión interna del HDS con los servicios implicados —pabellones, farmacia, esterilización, logística y autorización sanitaria— para aclarar el modelo de logística/abastecimiento y su impacto en la definición de los flujos de material sucio, limpio y estéril.",
   "estado": "pendiente"
  },
  {
   "responsable": "Coordinación Técnica (SSMO)",
   "acuerdo": "Queda a disposición para reunirse una vez aclaradas las dudas internas del HDS y para coordinar una visita en obra de ser necesario.",
   "estado": "a la espera"
  }
 ],
 "alerta": "La Coordinación Técnica indica que es imperante que el HDS avance en estas definiciones, ya que impactan directamente en los flujos tratados en esta reunión.",
 "laminas": [
  {
   "n": 1,
   "img": "flujos_esteril_imgs/s01.webp",
   "titulo": "Portada · Proyecto Reposición HDS-INGER",
   "grupo": "contexto",
   "desc": "Presentación a servicios · julio 2026."
  },
  {
   "n": 2,
   "img": "flujos_esteril_imgs/s02.webp",
   "titulo": "Planta de arquitectura Piso 2 · Pabellones Centrales",
   "grupo": "contexto",
   "desc": "Ubicación de Pabellones Centrales respecto de UCI, UTI, UHI, Unidad de Inmunosuprimidos, Oncología, Endoscopía, Consultas-Procedimientos, Medicina Física y Geriatría Ambulatoria."
  },
  {
   "n": 3,
   "img": "flujos_esteril_imgs/s03.webp",
   "titulo": "Zonificación de Pabellones Centrales",
   "grupo": "contexto",
   "desc": "Áreas y zonas de la unidad quirúrgica."
  },
  {
   "n": 4,
   "img": "flujos_esteril_imgs/s04.webp",
   "titulo": "Carro sucio Piso 2 · proyecto original",
   "grupo": "original",
   "desc": "Recorrido del carro de material sucio desde el área de descontaminación hasta el núcleo NH.03 y bajada al Piso -1."
  },
  {
   "n": 5,
   "img": "flujos_esteril_imgs/s05.webp",
   "titulo": "Carro sucio Piso 2 · recomendación SEREMI",
   "grupo": "seremi",
   "desc": "Mismo origen y destino, usando los ascensores montacamas del núcleo NH.03 según recomendación de la visita a obra del 22/07/2026."
  },
  {
   "n": 6,
   "img": "flujos_esteril_imgs/s06.webp",
   "titulo": "Planta de arquitectura Piso -1 · Esterilización",
   "grupo": "contexto",
   "desc": "Esterilización en su contexto: Central de Distribución, REAS, Droguería, Farmacia Atención Cerrada, Central de Alimentación, Laboratorio, Medicina Nuclear, Anatomía Patológica, Diálisis, UMT, Ropería, Movilización y Bodega Centralizada."
  },
  {
   "n": 7,
   "img": "flujos_esteril_imgs/s07.webp",
   "titulo": "Esterilización Piso -1 · proyecto original",
   "grupo": "original",
   "desc": "Llegada del carro sucio, recepción de material sucio, ingreso al área de lavado y recorrido de los carros limpios."
  },
  {
   "n": 8,
   "img": "flujos_esteril_imgs/s08.webp",
   "titulo": "Esterilización Piso -1 · recomendación SEREMI",
   "grupo": "seremi",
   "desc": "Mismo circuito interno de Esterilización con la llegada por montacamas."
  },
  {
   "n": 9,
   "img": "flujos_esteril_imgs/s09.webp",
   "titulo": "Detalle de la zona de lavado de carros",
   "grupo": "detalle",
   "desc": "Recintos 51.1 ingreso, 51.3 lavado (con sumidero), 51.5 almacén de paquetes quirúrgicos (con área de secado) y 51.7 preparación de carros."
  },
  {
   "n": 10,
   "img": "flujos_esteril_imgs/s10.webp",
   "titulo": "Cierre",
   "grupo": "contexto",
   "desc": ""
  }
 ]
};
