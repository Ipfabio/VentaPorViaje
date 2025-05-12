// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const secciones = {
    cocina: document.querySelector("#cocina .grid"),
    living: document.querySelector("#living .grid"),
    oficina: document.querySelector("#oficina .grid"),
    pieza: document.querySelector("#pieza .grid"),
  };

  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.innerHTML = `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden group relative transform transition-transform duration-300">
        <div class="relative w-full h-56 overflow-hidden">
          <div class="swiper producto-slider" id="swiper-${producto.id}">
            <div class="swiper-wrapper">
              ${producto.imagenes.map(src => `
                <div class="swiper-slide">
                  <img src="${src}" class="w-full h-full object-cover" alt="${producto.nombre}">
                </div>`).join('')}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-lg">${producto.nombre}</h3>
          <div class="descripcion">
            <p class="text-gray-600 text-sm">${producto.descripcion || "Sin descripción disponible"}</p>
          </div>
          <div class="precio">
            <p class="text-indigo-700 font-bold text-xl">${producto.precio ? `$${producto.precio.toLocaleString()}` : "Precio no disponible"}</p>
          </div>
        </div>
      </div>
    `;
    secciones[producto.categoria].appendChild(tarjeta);
  });

  // Inicializar Swiper después de que las tarjetas se hayan generado
  document.querySelectorAll('.producto-slider').forEach((slider) => {
    new Swiper(`#${slider.id}`, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true, // Permite que el carrusel sea infinito
    });
  });
});
