
let selectColores = document.getElementById("selectColores");
let listaColores = document.getElementById("lista-colores");
let btnAgregar = document.getElementById("btnAgregarColor");
let btnCrearMascota = document.getElementById("btnCrearMascota");
const colores = ["blanco", "negro", "cafe", "beige", "plomo"];
let coloresDisponibles = ["blanco", "negro", "cafe", "beige", "plomo"];
let coloresElegidos = [];
function setearColores() {
  console.log(colores);
  colores.forEach((color) => {
    let option = document.createElement("option");
    option.setAttribute("value", color);
    option.innerText = color.charAt(0).toUpperCase() + color.substring(1);
    selectColores.appendChild(option);
  })
}
setearColores();

let eliminarColor = (elemento) => {
  listaColores.removeChild(elemento);
  coloresElegidos.splice(coloresElegidos.indexOf(elemento.id), 1);
  let option = document.createElement("option");
  option.setAttribute("value", elemento.id);
  option.innerText = elemento.id.charAt(0).toUpperCase() + elemento.id.substring(1);
  coloresDisponibles.push(elemento.id);
  selectColores.appendChild(option);
}
btnAgregar.onclick = () => {
  let indice = selectColores.selectedIndex;
  let color = document.createElement("li");
  color.setAttribute("class", "list-group-item");
  color.setAttribute("id", coloresDisponibles[indice]);
  color.innerText = coloresDisponibles[indice].charAt(0).toUpperCase() + coloresDisponibles[indice].substring(1);
  coloresElegidos.push(coloresDisponibles[indice]);
  coloresDisponibles.splice(indice, 1);
  selectColores.remove(selectColores.selectedIndex);
  console.log(coloresDisponibles);
  color.ondblclick = (e) => {
    eliminarColor(e.target);
  }
  console.log(coloresElegidos);
  listaColores.appendChild(color);
}

btnCrearMascota.onclick = () => {
  let nombreMascota = document.getElementById("inputNombre").value;
  let razaMascota = document.getElementById("inputRaza").value;
  let edad = document.getElementById("inputEdad").value;
  let tipo = document.getElementById("selectTipo").value;
  let generoMacho = document.getElementById("radioMacho").checked;
  let genero = "";
  if (generoMacho) {
    genero = "Macho"
  } else {
    genero = "Hembra"
  }
  let objMascota = {
    nombre: nombreMascota,
    raza: razaMascota,
    sexo: genero,
    colores: coloresElegidos,
    edad: edad,
    tipo: tipo
  }
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
      console.log(JSON.parse(ajax.responseText));
      document.getElementById("formAgregar").reset();
      coloresDisponibles=colores;
      coloresElegidos= [];
      selectColores.innerHTML="";
      listaColores.innerHTML="";
      setearColores();
    }
  }
  ajax.open("POST", "http://5dc4957313d21600147e64d2.mockapi.io/mascota");
  // Los headers son para definir que es lo que le vamos a mandar a nuestra API
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send(JSON.stringify(objMascota));
}