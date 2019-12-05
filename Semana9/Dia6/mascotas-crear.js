
let selectColores = document.getElementById("selectColores");
let listaColores = document.getElementById("lista-colores");
let btnAgregar = document.getElementById("btnAgregarColor");
let coloresDisponibles = ["blanco", "negro", "cafe", "beige", "plomo"];
let coloresElegidos = []

coloresDisponibles.forEach((color) => {
  let option = document.createElement("option");

  option.setAttribute("value", color);
  option.innerText = color.charAt(0).toUpperCase() + color.substring(1);
  selectColores.appendChild(option);
})

let eliminarColor = (elemento)=>{
  console.log(elemento);
  listaColores.removeChild(elemento);
  console.log(coloresElegidos.indexOf(elemento.id));
  coloresElegidos.splice(coloresElegidos.indexOf(elemento.id),1);
  let option = document.createElement("option");
  option.setAttribute("value",elemento.id);
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
  coloresDisponibles.splice(indice,1);
  selectColores.remove(selectColores.selectedIndex);
  console.log(coloresDisponibles);
  color.ondblclick = (e)=>{
    eliminarColor(e.target);
  }
  console.log(coloresElegidos);
  listaColores.appendChild(color);
}