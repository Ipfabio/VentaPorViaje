// public/js/productos.js

const productos = [
  {
    id: 1,
    categoria: "cocina",
    nombre: "Freidora Sin Aceite Cecotec",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/cocina/FreidoraDeAire/arriba.png",
      "images/cocina/FreidoraDeAire/frente.png",
      "images/cocina/FreidoraDeAire/ejemplo.png"
    ]
  },
  {
    id: 2,
    categoria: "cocina",
    nombre: "Licuadora",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/cocina/Licuadora/arriba.png",
      "images/cocina/Licuadora/Lejos.png"
    ]
  },
    {
    id: 3,
    categoria: "cocina",
    nombre: "Microondas",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/cocina/microondas/abierto.png",
      "images/cocina/microondas/botonera.png",
      "images/cocina/microondas/frente.png"
    ]
  },
  {
    id: 4,
    categoria: "cocina",
    nombre: "Lavarropas",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/cocina/Lavarropas/frente.png",
      "images/cocina/Lavarropas/descripcion.png"
    ]
  },
  {
    id: 5,
    categoria: "living",
    nombre: "Aire Acondicionado",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/living/AireAcondicionadoSplit/AireAcondicionadoSplit.png",
      "images/living/AireAcondicionadoSplit/AireAcondicionadoSplit-2.png",
    ]
  },
  {
    id: 6,
    categoria: "living",
    nombre: "Aspiradora Robot Daewoo",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/living/AspiradoraRobotDaewoo/AspiradoraRobotDaewoo.png",
      "images/living/AspiradoraRobotDaewoo/TapaAbierta.png",
      "images/living/AspiradoraRobotDaewoo/Reverso.png",
      "images/living/AspiradoraRobotDaewoo/Descripción.png",
    ]
  },
  {
    id: 7,
    categoria: "living",
    nombre: "Fuente de Agua",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/living/FuenteDeAgua/frente.png",
      "images/living/FuenteDeAgua/medidas.png",
      "images/living/FuenteDeAgua/descripcion.png",

    ]
  },
  {
    id: 8,
    categoria: "living",
    nombre: "Mueble De TV Rack",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/living/MuebleDeTvRack/MuebleDeTvRack.png",
    ]
  },
  {
    id: 9,
    categoria: "living",
    nombre: "Sillones Para el Balcon con Almohadon de regalo",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/living/SillonesParaElBalcón/frente.png",
      "images/living/SillonesParaElBalcón/lado.png",
    ]
  },
  {
    id: 10,
    categoria: "living",
    nombre: "Sillon Sofa + Camastro",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/living/SillonSofa+Camastro/lado.png",
    ]
  },
  {
    id: 11,
    categoria: "living",
    nombre: "Tv Sanyo Lce 32 Pulgadas",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/living/TvSanyoLce32pulgadas/Frente.png",
    ]
  },
  {
    id: 12,
    categoria: "oficina",
    nombre: "Ariculares Logitech h390 con mic USB",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/oficina/auriculares-logietch-h390-con-mic-usb/descripcion.png",
      "images/oficina/auriculares-logietch-h390-con-mic-usb/caja.png",
    ]
  },
  {
    id: 13,
    categoria: "oficina",
    nombre: "Bolsa de Dormir WaterDog Inca 200 Negra con forro Verde",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/oficina/BolsaDeDormir/abierto.png",
      "images/oficina/BolsaDeDormir/cerrado.png",
    ]
  },
  {
    id: 14,
    categoria: "oficina",
    nombre: "Estabilizador Forza",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/oficina/Estabilizador/frente.png",
      "images/oficina/Estabilizador/lado.png",
    ]
  },
  {
    id: 15,
    categoria: "oficina",
    nombre: "Monitor Curvo",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/oficina/MonitorCurvo/frente.png",
      "images/oficina/MonitorCurvo/lado.webp",
    ]
  },
  {
    id: 16,
    categoria: "oficina",
    nombre: "Notebook Lenovo Thinkbook",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/oficina/NotebookLenovoThinkbook/frente.png",
      "images/oficina/NotebookLenovoThinkbook/arriba.png",
      "images/oficina/NotebookLenovoThinkbook/lado1.png",
      "images/oficina/NotebookLenovoThinkbook/lado2.png",
    ]
  },
  {
    id: 17,
    categoria: "oficina",
    nombre: "CPU",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/oficina/PC/Gabinete.png",
      "images/oficina/PC/CPU.png",
    ]
  },
  {
    id: 18,
    categoria: "oficina",
    nombre: "Pizzara Blanca",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/oficina/PizarraBlanca/PizarraBlanca.png",
    ]
  },
  {
    id: 19,
    categoria: "oficina",
    nombre: "Silla Gamer Corsair t3",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/oficina/SillaGamerCorsair-t3/frente.png",
      "images/oficina/SillaGamerCorsair-t3/brazos.png",
      "images/oficina/SillaGamerCorsair-t3/detalles.png",
    ]
  },
    {
    id: 20,
    categoria: "oficina",
    nombre: "Soporte de Monitores",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/oficina/SoporteDeMonitores/frente.png",
      "images/oficina/SoporteDeMonitores/ejemplo.png",
    ]
  },
  {
    id: 21,
    categoria: "oficina",
    nombre: "Video cámara",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/oficina/Videocámara-jvc-Everio/frente.png",
      "images/oficina/Videocámara-jvc-Everio/frente2.png",
    ]
  },
  {
    id: 22,
    categoria: "pieza",
    nombre: "Acolchado Gold Sun 3 Piezas Corderito Liso 2 Plazas",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/pieza/Acolchado-Gold-3-piezas/estirado.png",
      "images/pieza/Acolchado-Gold-3-piezas/cerrado.png",
    ]
  },
  {
    id: 23,
    categoria: "pieza",
    nombre: "Acolchado King Size Corderito",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/pieza/Acolchado-King-Size-Corderito/estirado.png",
      "images/pieza/Acolchado-King-Size-Corderito/textura.png",
      "images/pieza/Acolchado-King-Size-Corderito/doblado.png",
    ]
  },
  {
    id: 24,
    categoria: "pieza",
    nombre: "Balanza Xiaomi",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/pieza/Balanza-Xiaomi/BalanzaXiaomi.png",
      "images/pieza/Balanza-Xiaomi/BalanzaXiaomi-Reverso.png",
      "images/pieza/Balanza-Xiaomi/BalanzaXiaomi-Desripcion.png",
    ]
  },
  {
    id: 25,
    categoria: "pieza",
    nombre: "Mesa de Luz con Desayunador",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/pieza/MesaDeLuzConDesayunador/frente.png",
      "images/pieza/MesaDeLuzConDesayunador/abierto.png",
      "images/pieza/MesaDeLuzConDesayunador/medidas.png",
    ]
  },
  {
    id: 26,
    categoria: "pieza",
    nombre: "Perfume One Million Paco Rabanne",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/pieza/Perfume-OneMillion/oneMillion.png",
      "images/pieza/Perfume-OneMillion/oneMillion-2.png",
    ]
  },
  {
    id: 27,
    categoria: "pieza",
    nombre: "Planchita Gama",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/pieza/planchita-gama/arriba.png",
      "images/pieza/planchita-gama/frente.png",
    ]
  },
  {
    id: 28,
    categoria: "pieza",
    nombre: "Samsung S22",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/pieza/samsung-s22/s22.png",
      "images/pieza/samsung-s22/s22-reverso.png",
    ]
  },
  {
    id: 28,
    categoria: "pieza",
    nombre: "Secador de Pelo Gama",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/pieza/secador-de-pelo-gama/sola.png",
      "images/pieza/secador-de-pelo-gama/caja.png",
      "images/pieza/secador-de-pelo-gama/frente.png",
    ]
  },
  {
    id: 29,
    categoria: "pieza",
    nombre: "Sommier",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/pieza/Sommier/sommier-1.png",
      "images/pieza/Sommier/sommier-2.png",
    ]
  },
  {
    id: 30,
    categoria: "pieza",
    nombre: "Tv Phillips 32 pulgadas",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/pieza/Tv-Philips/frente.png",
      "images/pieza/Tv-Philips/dorso.png",
      "images/pieza/Tv-Philips/control.png",
    ]
  },
  {
    id: 31,
    categoria: "pieza",
    nombre: "Xiaomi Mi9 SE",
    precio: 85000,
    descripcion: "Capacidad 6L, 1700W. Casi nueva. Funciona perfecto.",
    imagenes: [
      "images/pieza/xiaomi-mi9-se/frente.png",
      "images/pieza/xiaomi-mi9-se/frente-2.png",
    ]
  },
  {
    id: 16,
    categoria: "oficina",
    nombre: "Notebook Lenovo Thinkbook",
    precio: 45000,
    descripcion: "Tapizado gris, muy cómodo. Poco uso.",
    imagenes: [
      "images/oficina/NotebookLenovoThinkbook/frente.png",
      "images/oficina/NotebookLenovoThinkbook/arriba.png",
      "images/oficina/NotebookLenovoThinkbook/lado1.png",
      "images/oficina/NotebookLenovoThinkbook/lado2.png",
    ]
  },
];
