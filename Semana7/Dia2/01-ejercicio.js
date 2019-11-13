import { trabajadores } from './01-datos.js';

let cuerpoTabla = document.getElementById("cuerpoTabla");

let dibujarTabla = () => {

  trabajadores.forEach((trabajador, i) => {

    let tr = document.createElement("tr");

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

    cuerpoTabla.appendChild(tr);


  })

}

dibujarTabla();