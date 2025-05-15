// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const categorias = ['cocina', 'living', 'oficina', 'pieza', 'arte'];

  categorias.forEach(categoria => {
    mostrarProductosPorCategoria(categoria, categoria);
  });

  // Inicializar Swiper después de que las tarjetas se hayan generado
  setTimeout(() => {
    document.querySelectorAll('.producto-slider').forEach((slider) => {
      new Swiper(`#${slider.id}`, {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
      });
    });
  }, 100); // Espera breve para asegurar que el DOM esté actualizado
});

function mostrarProductosPorCategoria(categoria, contenedorId) {
  const contenedor = document.querySelector(`#${contenedorId} .grid`);
  if (!contenedor) return;
  contenedor.innerHTML = '';
  productos.filter(p => p.categoria === categoria).forEach(producto => {
    const isVendido = producto.vendido === true;
    const blurClass = isVendido ? 'blur-sm pointer-events-none' : '';
    const vendidoBanner = isVendido
      ? `<div class="vendido-banner">VENDIDO</div>`
      : '';
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.innerHTML = `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden group relative transform transition-transform duration-300">
        <div class="relative w-full h-56 overflow-hidden">
          <div class="swiper producto-slider" id="swiper-${producto.id}">
            <div class="swiper-wrapper">
              ${producto.imagenes.map((src, idx) => `
                <div class="swiper-slide relative">
                  <img src="${src}" class="w-full h-full object-cover ${idx === 0 && isVendido ? 'img-blur' : ''}" alt="${producto.nombre}">
                  ${idx === 0 ? vendidoBanner : ''}
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
    contenedor.appendChild(tarjeta);
  });
}
