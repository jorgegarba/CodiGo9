let lista = document.getElementById("lista");
let opciones = ["Nosotros", "Portafolio", "Contacto"];

// Hacer un algoritmo para crear tantos <li></li>
//  como elementos tenga mi arreglo llamado 'opciones'
// Dichos Li's se agregaran a la 'lista'

// 1. recorrer el arreglo de opciones
opciones.forEach((elemento, i) => {
  let liTmp = document.createElement("li");
  liTmp.innerText = elemento;
  lista.appendChild(liTmp)
});

// ================EJERCICIO 2===================== //
let personas = [
  {
    nombre: 'Ximena',
    apellido: 'Mendoza',
    dni: '09897867',
    colorFavorito: '#4589aa',
    estado: "activo",
    platosFavoritos: [
      "Cebiche",
      "Estofado",
      "Fricasé"
    ]
  },
  {
    nombre: 'Jorgito',
    apellido: 'Garnica',
    dni: '89786753',
    colorFavorito: '#000000',
    estado: "inactivo",
    platosFavoritos: [
      "Escabeche",
      "Pizza",
      "Frejoles",
      "Lomo Saltado"
    ]
  },
  {
    nombre: 'Fernanda',
    apellido: 'Camaiora',
    dni: '65748392',
    colorFavorito: '#11ff89',
    estado: "activo",
    platosFavoritos: []
  }
];

let tbody = document.getElementById("tbody");

personas.forEach((objPersona, i) => {

  if (objPersona.estado == "activo") {
    let tr = document.createElement("tr");

    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;

    let tdNombre = document.createElement("td");
    tdNombre.innerText = objPersona.nombre;

    let tdApellido = document.createElement("td");
    tdApellido.innerText = objPersona.apellido;

    let tdDni = document.createElement("td");
    tdDni.innerText = objPersona.dni;

    let tdColorFavorito = document.createElement("td");
    // tdColorFavorito.innerText = objPersona.colorFavorito;
    // crear un Div
    let div = document.createElement("div");
    div.style.height = "10px";
    div.style.width = "10px";
    div.style.backgroundColor = objPersona.colorFavorito;
    div.style.borderRadius = "50%";
    div.style.margin = "auto";

    tdColorFavorito.appendChild(div);


    let tdPlatos = document.createElement("td");

    if (objPersona.platosFavoritos.length > 0) {
      let ulPlatos = document.createElement("ul");
      objPersona.platosFavoritos.forEach((plato, i) => {
        let liPlato = document.createElement("li");
        liPlato.innerText = plato;
        ulPlatos.appendChild(liPlato);
      });
      tdPlatos.appendChild(ulPlatos);
    } else {
      tdPlatos.innerText = "No tiene platos favoritos";
    }


    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdDni);
    tr.appendChild(tdColorFavorito);
    tr.appendChild(tdPlatos);

    tbody.appendChild(tr);
  }

});