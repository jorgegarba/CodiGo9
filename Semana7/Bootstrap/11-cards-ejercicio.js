import { productos } from './11-card-data.js';
console.log(productos);

let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
let inputCantidad = document.getElementById("inputCantidad");

let crearColumnaConProducto = (producto) => {
  let c = +inputCantidad.value;
  if (producto) {

    return `<div class="col-md-${12 / c}">
            <div class="card">
              <img src="${producto.imagen}" class="card-img-top">
                <div class="card-body">
                  <p class="card-text">
                    Nombre: ${producto.nombre}
                  </p>
                </div>
              </div>
          </div>`;
  } else {
    return '';
  }
}

formulario.onsubmit = (event) => {
  event.preventDefault();
  let c = +inputCantidad.value;

  for (let i = 0; i < productos.length; i += c) {

    let texto = "";
    let fila = document.createElement("div");
    fila.setAttribute("class", "row");

    for (let j = 0; j < c; j++) {
      let prod1 = crearColumnaConProducto(productos[j + i]);
      texto = texto + prod1;
    }


    fila.innerHTML = texto;
    contenedor.appendChild(fila);

  }

}




