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
    ],
    vendido: true // Este producto está vendido
  },
  {
    id: 2,
    categoria: "cocina",
    nombre: "Licuadora",
    precio: 115000,
    descripcion: "Licuadora Peabody PE-LN1200 1.5L con jarra de vidrio 220V",
    imagenes: [
      "images/cocina/Licuadora/Lejos.png",
      "images/cocina/Licuadora/arriba.png",
    ]
  },
    {
    id: 3,
    categoria: "cocina",
    nombre: "Microondas",
    precio: 100000,
    descripcion: "Microondas Samsung m643",
    imagenes: [
      "images/cocina/microondas/frente.png",
      "images/cocina/microondas/abierto.png",
      "images/cocina/microondas/botonera.png",
    ]
  },
  {
    id: 4,
    categoria: "cocina",
    nombre: "Lavarropas",
    precio: 300000,
    descripcion: "Lavarropas automático Siam LSI-lf6510b2, Carga frontal, 6.6Kg, 1000rpm, Blanco",
    imagenes: [
      "images/cocina/Lavarropas/frente.png",
      "images/cocina/Lavarropas/descripcion.png"
    ],
    vendido: true
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
    precio: 45000,
    descripcion: "Aspiradora Robot Daewoo Delta. Aspira, Treapeador Seco 350ml Color Negro.",
    imagenes: [
      "images/living/AspiradoraRobotDaewoo/AspiradoraRobotDaewoo.png",
      "images/living/AspiradoraRobotDaewoo/TapaAbierta.png",
      "images/living/AspiradoraRobotDaewoo/Reverso.png",
      "images/living/AspiradoraRobotDaewoo/Descripción.png",
    ],
    vendido: true
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
    precio: 50000,
    descripcion: "Mueble De TV Rack para TV Led de hasta 50' con 3 puertas",
    imagenes: [
      "images/living/MuebleDeTvRack/MuebleDeTvRack.png",
    ],
    vendido: true
  },
  {
    id: 9,
    categoria: "living",
    nombre: "Sillones Para el Balcon con Almohadon de regalo",
    precio: 30000,
    descripcion: "Sillones Para el Balcon con Almohadon de regalo",
    imagenes: [
      "images/living/SillonesParaElBalcón/frente.png",
      "images/living/SillonesParaElBalcón/lado.png",
    ],
    vendido: true
  },
  {
    id: 10,
    categoria: "living",
    nombre: "Sillon Sofa + Camastro",
    precio: 250000,
    descripcion: "Sillon Sofa + Camastro de 3 cuerpos con almohadones",
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
    ],
    vendido: true
  },
  {
    id: 12,
    categoria: "oficina",
    nombre: "Auricular Logitech h390",
    precio: 30000,
    descripcion: "Auricular Logitech h390 con mic USB (sin abrir)",
    imagenes: [
      "images/oficina/auriculares-logietch-h390-con-mic-usb/descripcion.png",
      "images/oficina/auriculares-logietch-h390-con-mic-usb/caja.png",
    ]
  },
  {
    id: 13,
    categoria: "oficina",
    nombre: "Bolsa de Dormir",
    precio: 25000,
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
    precio: 25000,
    descripcion: "Estabilizador de tensión Forza 3u. (Precio unitario)",
    imagenes: [
      "images/oficina/Estabilizador/frente.png",
      "images/oficina/Estabilizador/lado.png",
    ]
  },
  {
    id: 15,
    categoria: "oficina",
    nombre: "Monitor Curvo 27'",
    precio: 250000,
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
    precio: 1000000,
    descripcion: "Notebook Lenovo Thinkbook 16GB, inte Core I5-13420h Intel Uhd Gaphics Full HD 1920 x 1200 32GB Ram, Ddr5, 1Tb SSD, Pcie Free Dos 16, color Artic Grey",
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
    precio: 300000,
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
    precio: 15000,
    descripcion: "Pizzara Blanca para marcador",
    imagenes: [
      "images/oficina/PizarraBlanca/PizarraBlanca.png",
    ],
    vendido: true // Este producto está vendido  
  },
  {
    id: 19,
    categoria: "oficina",
    nombre: "Silla Gamer Corsair t3",
    precio: 300000,
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
    precio: 50000,
    descripcion: "Sporte de Mesa de TV/Monitor de 10'' a 30'' Negro",
    imagenes: [
      "images/oficina/SoporteDeMonitores/frente.png",
      "images/oficina/SoporteDeMonitores/ejemplo.png",
    ]
  },
  {
    id: 21,
    categoria: "oficina",
    nombre: "Video cámara JVC Everio",
    precio: 150000,
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
    ],
    vendido: false // Este producto está vendido
  },
  {
    id: 25,
    categoria: "pieza",
    nombre: "Mesa de Luz con Desayunador",
    precio: 50000,
    descripcion: "Mesa de Luz con Desayunador Centro Estant Wengue 71cm x 42cm x 37cm. Precio por 2 unidades. ",
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
    descripcion: "Perfume One Million Paco Rabanne.",
    imagenes: [
      "images/pieza/Perfume-OneMillion/oneMillion.png",
      "images/pieza/Perfume-OneMillion/oneMillion-2.png",
    ],
    vendido: true // Este producto está vendido
  },
  {
    id: 27,
    categoria: "pieza",
    nombre: "Planchita Gama",
    precio: 20000,
    descripcion: "Planchita Gama Tourmaline",
    imagenes: [
      "images/pieza/planchita-gama/arriba.png",
      "images/pieza/planchita-gama/frente.png",
    ],
    vendido: true
  },
  {
    id: 28,
    categoria: "pieza",
    nombre: "Samsung S22",
    precio: 300000,
    descripcion: "Smasung S22",
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
    ],
    vendido: true
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
    ],
    vendido: true
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
    descripcion: "Xiaomi Mi9 SE",
    imagenes: [
      "images/pieza/xiaomi-mi9-se/frente.png",
      "images/pieza/xiaomi-mi9-se/frente-2.png",
    ],
    vendido: true // Este producto está vendido
  },
    {
    id: 32,
    categoria: "living",
    nombre: "Mesa Ratona Moderna",
    precio: 40000,
    descripcion: "Mesa ratona moderna con centro melamina",
    imagenes: [
      "images/living/MesaRatonaModerna/arriba.jpg",
      "images/living/MesaRatonaModerna/frente.jpg",
      "images/living/MesaRatonaModerna/lado.jpg",
      "images/living/MesaRatonaModerna/lado2.jpg",
    ]
  },
    {
    id: 33,
    categoria: "pieza",
    nombre: "Campera Zara",
    precio: 150000,
    descripcion: "Campera Zara color azul 'Denim Coulture' Hombre talle L sin uso",
    imagenes: [
      "images/pieza/ZaraAzul/atras.jpg",
      "images/pieza/ZaraAzul/lado.jpg",
      "images/pieza/ZaraAzul/frente.jpg",
    ],
    vendido: true // Este producto está vendido
  },
    {
    id: 34,
    categoria: "pieza",
    nombre: "Campera Zara",
    precio: 150000,
    descripcion: "Campera Zara color negro hombre talle L sin uso",
    imagenes: [
      "images/pieza/ZaraNegro/atras.jpg",
      "images/pieza/ZaraNegro/lado.jpg",
      "images/pieza/ZaraNegro/frente.jpg",
      "images/pieza/ZaraNegro/pose.jpg",
    ]
  },
    {
    id: 35,
    categoria: "oficina",
    nombre: "Escritorios Precio Unitario",
    precio: 80000,
    descripcion: "Escritorio de madera con patas de hierro 2 unidades",
    imagenes: [
      "images/oficina/Escritorios/frente.jpg",
      "images/oficina/Escritorios/lado.jpg",
      "images/oficina/Escritorios/delante.jpg",
    ]
  },
    {
    id: 36,
    categoria: "living",
    nombre: "Mesa Ratona Clásica",
    precio: 30000,
    descripcion: "Mesa Ratona Clásica de madera con vidrio",
    imagenes: [
      "images/living/MesaRatonaC/frente.jpg",
      "images/living/MesaRatonaC/arriba.jpg",
      "images/living/MesaRatonaC/lado.jpg",
    ]
  },
    {
    id: 37,
    categoria: "arte",
    nombre: "Astrounauta",
    precio: 45000,
    descripcion: "Astrounauta de ceramica",
    imagenes: [
      "images/arte/ceramica/astronauta.jpg",
    ]
  },
    {
    id: 38,
    categoria: "arte",
    nombre: "Jarrón",
    precio: 20000,
    descripcion: "Jarrón de cerámica",
    imagenes: [
      "images/arte/ceramica/Jarron.jpg",
    ]
  },
    {
    id: 39,
    categoria: "arte",
    nombre: "Velador",
    precio: 30000,
    descripcion: "Velador de cerámica",
    imagenes: [
      "images/arte/ceramica/velador/Velador.jpg",
      "images/arte/ceramica/velador/Velador2.jpg",
    ]
  },
    {
    id: 40,
    categoria: "arte",
    nombre: "Gato Alicia",
    precio: 50000,
    descripcion: "Gato Alicia en el país de las maravillas de cerámica",
    imagenes: [
      "images/arte/ceramica/GatoAlicia.jpg",
    ]
  },
    {
    id: 41,
    categoria: "arte",
    nombre: "Plato de Boca",
    precio: 10000,
    descripcion: "Plato de Boca Juniors de cerámica",
    imagenes: [
      "images/arte/ceramica/platoBoca.jpg",
    ]
  },
    {
    id: 42,
    categoria: "arte",
    nombre: "Cuadro 'Puerto Madero'",
    precio: 80000,
    descripcion: "Cuadro de Puerto Madero pintado a mano",
    imagenes: [
      "images/arte/cuadros/cuadroPuertoMadero.jpg",
    ]
  },
    {
    id: 43,
    categoria: "arte",
    nombre: "Cuadro pintado a mano",
    precio: 100000,
    descripcion: "Cuadro Pintado a Mano",
    imagenes: [
      "images/arte/cuadros/cuadroPintado.jpg",
    ]
  },
    {
    id: 44,
    categoria: "arte",
    nombre: "Cuadro de los Simpsons",
    precio: 10000,
    descripcion: "Cuadro de los Simpsons precio por ambos",
    imagenes: [
      "images/arte/cuadros/cuadroSimpsons.jpg",
      "images/arte/cuadros/cuadroSimpsons2.jpg",
    ]
  },
   {
    id: 45,
    categoria: "arte",
    nombre: "Cámara Panasonic Lumix DMC-FZ40 con bolso",
    precio: 350000,
    descripcion: "versátil con zoom óptico 24x, estabilización Power OIS y sensor de 14 MP para imágenes nítidas. Captura en RAW + JPEG y graba video HD con audio estéreo, ideal para fotografía y contenido multimedia. Pantalla LCD de 3”, visor electrónico y controles manuales",
    imagenes: [
      "images/arte/camara/frente_cerrado.jpg",
      "images/arte/camara/frente_cargador.jpg",
      "images/arte/camara/frente.jpg",
      "images/arte/camara/lado1.jpg",
      "images/arte/camara/botones.jpg",
      "images/arte/camara/pantalla.jpg",
      "images/arte/camara/bolso.jpg",
    ]
  },
];
