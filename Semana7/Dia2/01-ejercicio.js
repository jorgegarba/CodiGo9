import { losTrabajadores } from './01-datos.js';

let trabajadores = losTrabajadores;

let cuerpoTabla = document.getElementById("cuerpoTabla");


let eliminarPorId = (idTrabajador) => {

  let filtrado = trabajadores.filter((trabajador, i) => {
    if (trabajador.id != idTrabajador) {
      return trabajador;
    }
  });

  trabajadores = filtrado;
  cuerpoTabla.innerText = "";
  dibujarTabla();
}

let dibujarTabla = () => {

  trabajadores.forEach((trabajador, i) => {

    let tr = document.createElement("tr");
    tr.ondblclick = () => {
      console.log("Uf! " + trabajador.nombre);
    }

    let tdId = document.createElement("td");
    tdId.innerText = trabajador.id;
    tr.appendChild(tdId);

    let tdNombre = document.createElement("td");
    tdNombre.innerText = trabajador.nombre;
    tr.appendChild(tdNombre);

    let tdApellido = document.createElement("td");
    tdApellido.innerText = trabajador.apellido;
    tr.appendChild(tdApellido);

    let tdCargo = document.createElement("td");
    tdCargo.innerText = trabajador.cargo;
    tr.appendChild(tdCargo);

    let tdSalario = document.createElement("td");
    tdSalario.innerText = trabajador.salario;
    tr.appendChild(tdSalario);

    let tdImagen = document.createElement("td");
    tdImagen.innerHTML = `<img src="${trabajador.imagen}" width="100"/>`;
    tr.appendChild(tdImagen);

    let tdAcciones = document.createElement("td");
    let btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";

    btnEliminar.onclick = function () {
      console.log("Eliminando al id " + trabajador.id);
      eliminarPorId(trabajador.id);
    }

    tdAcciones.appendChild(btnEliminar);
    tr.appendChild(tdAcciones);
    cuerpoTabla.appendChild(tr);
  }

  )

}

dibujarTabla();