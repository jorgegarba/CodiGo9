
let selectColores = document.getElementById("selectColores");
let coloresDisponibles = ["blanco", "negro", "cafe", "beige", "plomo"];

coloresDisponibles.forEach((color) => {
  let option = document.createElement("option");
  
  option.setAttribute("value", color);
  option.innerText = color.charAt(0).toUpperCase() + color.substring(1);
  selectColores.appendChild(option);
})