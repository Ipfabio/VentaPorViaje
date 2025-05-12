// public/js/productos.js

const productos = [
  {
    id: 1,
    categoria: "cocina",
    nombre: "Freidora Sin Aceite Cecotec",
    precio: 90000,
    descripcion: "Freidora Sin Aceite Cecotec Bombastik Full 6L 1700w Color Negro",
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
    precio: 150000,
    descripcion: "Licuadora Peabody PE-LN1200 1.5L con jarra de vidrio 220V",
    imagenes: [
      "images/cocina/Licuadora/arriba.png",
      "images/cocina/Licuadora/Lejos.png"
    ]
  },
    {
    id: 3,
    categoria: "cocina",
    nombre: "Microondas",
    precio: 100000,
    descripcion: "Microondas Samsung m643",
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
    precio: 500000,
    descripcion: "Lavarropas automático Siam LSI-lf6510b2, Carga frontal, 6.6Kg, 1000rpm, 15 programas?, Blanco",
    imagenes: [
      "images/cocina/Lavarropas/frente.png",
      "images/cocina/Lavarropas/descripcion.png"
    ]
  },
  {
    id: 5,
    categoria: "living",
    nombre: "Aire Acondicionado",
    precio: 500000,
    descripcion: "Aire Acondicionado Split Alaska 3450w F/C R410a As35wccr",
    imagenes: [
      "images/living/AireAcondicionadoSplit/AireAcondicionadoSplit.png",
      "images/living/AireAcondicionadoSplit/AireAcondicionadoSplit-2.png",
    ]
  },
  {
    id: 6,
    categoria: "living",
    nombre: "Aspiradora Robot Daewoo",
    precio: 450000,
    descripcion: "Aspiradora Robot Daewoo Delta. Aspira, Treapeador Seco 350ml Color Negro.",
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
    nombre: "Fuente de Agua para Mascotas",
    precio: 30000,
    descripcion: "Fuente de Agua para Mascotas Recirculante Gadnic PB2000 Silecionsa para Perros y Gatos 1.6L",
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
    precio: 60000,
    descripcion: "Mueble De TV Rack para TV Led de hasta 50' con 3 puertas",
    imagenes: [
      "images/living/MuebleDeTvRack/MuebleDeTvRack.png",
    ]
  },
  {
    id: 9,
    categoria: "living",
    nombre: "Sillones Para el Balcon con Almohadon de regalo",
    precio: 60000,
    descripcion: "Sillones Para el Balcon con Almohadon de regalo (*Agregar datos*)",
    imagenes: [
      "images/living/SillonesParaElBalcón/frente.png",
      "images/living/SillonesParaElBalcón/lado.png",
    ]
  },
  {
    id: 10,
    categoria: "living",
    nombre: "Sillon Sofa + Camastro",
    precio: 250000,
    descripcion: "Sillon Sofa + Camastro de 3 cuerpos con almohadones (*Agregar medidas*)",
    imagenes: [
      "images/living/SillonSofa+Camastro/lado.png",
    ]
  },
  {
    id: 11,
    categoria: "living",
    nombre: "Tv Sanyo Lce 32 Pulgadas",
    precio: 150000,
    descripcion: "Tv Sanyo Lce 32 Pulgadas led con 80cm de visión (usado)",
    imagenes: [
      "images/living/TvSanyoLce32pulgadas/Frente.png",
    ]
  },
  {
    id: 12,
    categoria: "oficina",
    nombre: "Aricular Logitech h390",
    precio: 50.000,
    descripcion: "Aricular Logitech h390 con mic USB (sin abrir)",
    imagenes: [
      "images/oficina/auriculares-logietch-h390-con-mic-usb/descripcion.png",
      "images/oficina/auriculares-logietch-h390-con-mic-usb/caja.png",
    ]
  },
  {
    id: 13,
    categoria: "oficina",
    nombre: "Bolsa de Dormir",
    precio: 40.000,
    descripcion: "Bolsa de dormir WaterDog Inca 200 Negra con forro Verde",
    imagenes: [
      "images/oficina/BolsaDeDormir/abierto.png",
      "images/oficina/BolsaDeDormir/cerrado.png",
    ]
  },
  {
    id: 14,
    categoria: "oficina",
    nombre: "Estabilizador Forza",
    precio: 32.000,
    descripcion: "Estabilizador de tensión Forza 3u. (Precio unitario)",
    imagenes: [
      "images/oficina/Estabilizador/frente.png",
      "images/oficina/Estabilizador/lado.png",
    ]
  },
  {
    id: 15,
    categoria: "oficina",
    nombre: "Monitor Curvo",
    precio: 300000,
    descripcion: "Monitor Phillips 27' Curvo",
    imagenes: [
      "images/oficina/MonitorCurvo/frente.png",
      "images/oficina/MonitorCurvo/lado.webp",
    ]
  },
  {
    id: 16,
    categoria: "oficina",
    nombre: "Notebook Lenovo Thinkbook",
    precio: 1300000,
    descripcion: "Notebook Lenovo Thinkbook 16GB, inte Core I3-13420h Intel Uhd Gaphics Full HD 1920 x 1200 32GB Ram, Ddr5, 1Tb SSD, Pcie Free Dos 16, color Artic Grey",
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
    precio: 400.000,
    descripcion: "Gabinete con AMD A10-7800 Radeon R7, 12 Compute Cores 4 C + 8G, 3500 Mhz, 2 procesadores principales, 4 procesadores lógicos, Memoria física instalada (RAM) 16GB",
    imagenes: [
      "images/oficina/PC/Gabinete.png",
      "images/oficina/PC/CPU.png",
    ]
  },
  {
    id: 18,
    categoria: "oficina",
    nombre: "Pizzara Blanca",
    precio: 15.000,
    descripcion: "Pizzara Blanca para marcador (*agregar medidas*)",
    imagenes: [
      "images/oficina/PizarraBlanca/PizarraBlanca.png",
    ]
  },
  {
    id: 19,
    categoria: "oficina",
    nombre: "Silla Gamer Corsair t3",
    precio: 600.000,
    descripcion: "Silla gamer Corsar t3 Gris con almohadillas",
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
    precio: 100.000,
    descripcion: "Sporte de Mesa de TV/Monitor de 10' a 30 Negro",
    imagenes: [
      "images/oficina/SoporteDeMonitores/frente.png",
      "images/oficina/SoporteDeMonitores/ejemplo.png",
    ]
  },
  {
    id: 21,
    categoria: "oficina",
    nombre: "Video cámara JVC Everio",
    precio: 350.000,
    descripcion: "Video cámara JVC Everio GZ-E200BU caja original (usado-nuevo)",
    imagenes: [
      "images/oficina/Videocámara-jvc-Everio/frente.png",
      "images/oficina/Videocámara-jvc-Everio/frente2.png",
    ]
  },
  {
    id: 22,
    categoria: "pieza",
    nombre: "Acolchado Gold Sun 3 Piezas Corderito Liso 2 Plazas",
    precio: 100000,
    descripcion: "Acolchado Gold Sun 3 Piezas Corderito Liso de 2 Plazas.",
    imagenes: [
      "images/pieza/Acolchado-Gold-3-piezas/estirado.png",
      "images/pieza/Acolchado-Gold-3-piezas/cerrado.png",
    ]
  },
  {
    id: 23,
    categoria: "pieza",
    nombre: "Acolchado King Size Corderito",
    precio: 80000,
    descripcion: "Acolchado King Size Corderito.",
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
    precio: 50000,
    descripcion: "Balanza Xiaomi MI Body Composition Scale S400 Báscula Smart Digital Bluetooth 4.0 con App Mi Fit para iOS y Android, Peso hasta 150kg, Pantalla LCD, Color Blanco",
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
    precio: 80000,
    descripcion: "Mesa de Luz con Desayunador Centro Estant Wengue 71cm x 42cm x 37cm (2 unidades) *Precio unitario?",
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
    descripcion: "Perfume One Million Paco Rabanne. *ml??*",
    imagenes: [
      "images/pieza/Perfume-OneMillion/oneMillion.png",
      "images/pieza/Perfume-OneMillion/oneMillion-2.png",
    ]
  },
  {
    id: 27,
    categoria: "pieza",
    nombre: "Planchita Gama",
    precio: 20000,
    descripcion: "Planchita Gama Tourmaline *Detalles*",
    imagenes: [
      "images/pieza/planchita-gama/arriba.png",
      "images/pieza/planchita-gama/frente.png",
    ]
  },
  {
    id: 28,
    categoria: "pieza",
    nombre: "Samsung S22",
    precio: 450000,
    descripcion: "Smasung S22 *Detalles*",
    imagenes: [
      "images/pieza/samsung-s22/s22.png",
      "images/pieza/samsung-s22/s22-reverso.png",
    ]
  },
  {
    id: 28,
    categoria: "pieza",
    nombre: "Secador de Pelo Gama",
    precio: 25000,
    descripcion: "Secador de Pelo Gama delta 2000",
    imagenes: [
      "images/pieza/secador-de-pelo-gama/sola.png",
      "images/pieza/secador-de-pelo-gama/caja.png",
      "images/pieza/secador-de-pelo-gama/frente.png",
    ]
  },
  {
    id: 29,
    categoria: "pieza",
    nombre: "Sommier 2 Plazas",
    precio: 100000,
    descripcion: "Sommier Piero Foam 190 x 140, Alta densidad, 2 Plazas.",
    imagenes: [
      "images/pieza/Sommier/sommier-1.png",
      "images/pieza/Sommier/sommier-2.png",
    ]
  },
  {
    id: 30,
    categoria: "pieza",
    nombre: "Tv Phillips 32 pulgadas",
    precio: 120000,
    descripcion: "Tv Phillips 32 pulgadas 32pfl300d/77, HDMI 32 C/control (usado)",
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
    precio: 200000,
    descripcion: "Xiaomi Mi9 SE *Detalles*",
    imagenes: [
      "images/pieza/xiaomi-mi9-se/frente.png",
      "images/pieza/xiaomi-mi9-se/frente-2.png",
    ]
  },
];
