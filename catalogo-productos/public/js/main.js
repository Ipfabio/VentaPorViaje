// public/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const secciones = {
    cocina: document.querySelector("#cocina .grid"),
    living: document.querySelector("#living .grid"),
    oficina: document.querySelector("#oficina .grid"),
    pieza: document.querySelector("#pieza .grid"),
  };

  const mensajeTextarea = document.querySelector("#contacto textarea");

  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "card bg-white rounded-xl shadow-lg overflow-hidden group relative transform transition-transform duration-300";

    tarjeta.innerHTML = `
      <div class="relative w-full h-48 overflow-hidden">
        <img src="${producto.imagenes[0]}" class="w-full h-48 object-cover" alt="${producto.nombre}">
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-lg">${producto.nombre}</h3>
        <p class="text-indigo-700 font-bold text-xl">$${producto.precio.toLocaleString()}</p>
        <p class="text-gray-600 text-sm mt-1">${producto.descripcion}</p>
      </div>
    `;

    // Agregar evento de clic para insertar el nombre del producto en el mensaje
    tarjeta.addEventListener("click", () => {
      const textoActual = mensajeTextarea.value;
      const textoProducto = `Estoy interesado en el producto: ${producto.nombre}`;
      mensajeTextarea.value = textoActual ? `${textoActual}\n${textoProducto}` : textoProducto;
      mensajeTextarea.focus(); // Enfocar el textarea
    });

    secciones[producto.categoria].appendChild(tarjeta);
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
