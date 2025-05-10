// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const secciones = {
    cocina: document.querySelector("#cocina .grid"),
    living: document.querySelector("#living .grid"),
    oficina: document.querySelector("#oficina .grid"),
    pieza: document.querySelector("#pieza .grid"),
  };

  productos.forEach((producto) => {
    const sliderID = `swiper-${producto.id}`;
    const tarjeta = document.createElement("div");
    tarjeta.className = "bg-white rounded-xl shadow-lg overflow-hidden group relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl";

    tarjeta.innerHTML = `
      <div class="relative w-full h-48 overflow-hidden">
        <div class="swiper producto-slider" id="${sliderID}">
          <div class="swiper-wrapper">
            ${producto.imagenes.map(src => `
              <div class="swiper-slide">
                <img src="${src}" class="w-full h-48 object-cover" alt="${producto.nombre}">
              </div>`).join('')}
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-lg">${producto.nombre}</h3>
        <p class="text-indigo-700 font-bold text-xl">$${producto.precio.toLocaleString()}</p>
        <p class="text-gray-600 text-sm mt-1">${producto.descripcion}</p>
      </div>
    `;

    secciones[producto.categoria].appendChild(tarjeta);

    // Inicializar Swiper para cada tarjeta
    new Swiper(`#${sliderID}`, {
      loop: true,
      navigation: {
        nextEl: `#${sliderID} .swiper-button-next`,
        prevEl: `#${sliderID} .swiper-button-prev`,
      },
    });
  });
});


document.getElementById("filtroCategoria").addEventListener("change", aplicarFiltros);
document.getElementById("filtroPrecio").addEventListener("change", aplicarFiltros);

function aplicarFiltros() {
  const categoriaSeleccionada = document.getElementById("filtroCategoria").value;
  const precioSeleccionado = document.getElementById("filtroPrecio").value;

  const tarjetas = document.querySelectorAll("[data-categoria]");

  tarjetas.forEach((tarjeta) => {
    const categoria = tarjeta.dataset.categoria;
    const precio = parseInt(tarjeta.dataset.precio);

    const coincideCategoria = categoriaSeleccionada === "todas" || categoria === categoriaSeleccionada;
    
    let coincidePrecio = true;
    if (precioSeleccionado !== "todos") {
      const [min, max] = precioSeleccionado.split("-");
      if (max === "mas") {
        coincidePrecio = precio > parseInt(min);
      } else {
        coincidePrecio = precio >= parseInt(min) && precio <= parseInt(max);
      }
    }

    if (coincideCategoria && coincidePrecio) {
      tarjeta.classList.remove("hidden");
    } else {
      tarjeta.classList.add("hidden");
    }
  });
}
