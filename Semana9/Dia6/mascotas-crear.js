
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
btnAgregar.onclick = () => {
  let indice = selectColores.selectedIndex;
  let color = document.createElement("li");
  color.setAttribute("class", "list-group-item");
  color.setAttribute("id", coloresDisponibles[indice]);
  color.innerText = coloresDisponibles[indice].charAt(0).toUpperCase() + coloresDisponibles[indice].substring(1);
  coloresElegidos.push(coloresDisponibles[indice]);
  console.log(coloresElegidos);
  listaColores.appendChild(color);
}