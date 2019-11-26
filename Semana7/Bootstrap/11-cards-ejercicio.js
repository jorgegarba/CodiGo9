import { productos } from './11-card-data.js';
console.log(productos);

let contenedor = document.getElementById("contenedor");
let cont = 0;


let crearColumnaConProducto = (producto) => {
  if (producto) {
    return `<div class="col-md-4">
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


for (let i = 0; i < productos.length; i += 3) {



  let fila = document.createElement("div");
  fila.setAttribute("class", "row");

  let prod1 = crearColumnaConProducto(productos[i]);  
  let prod2 = crearColumnaConProducto(productos[i + 1]);
  let prod3 = crearColumnaConProducto(productos[i + 2]);

  fila.innerHTML = prod1 + prod2 + prod3;
  contenedor.appendChild(fila);

}

