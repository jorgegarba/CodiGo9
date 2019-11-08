let btnCambiarTema = document.getElementById("btnCambiarTema");
// FORMAS DE ASGINAR UN EVENTO
// FORMA 1 => Función addEventListener

// btnCambiarTema.addEventListener("click", () => {
//   console.log("Se hizo click en el botón");
// })

// FORMA 2 => Propiedad del elemento

let miFuncion = () => {

  let linkEstilos = document.getElementById("linkEstilos");

  let temaURL = linkEstilos.getAttribute("href");
  if (temaURL.indexOf("claro") > -1) {
    linkEstilos.setAttribute("href", "./css/tema-oscuro.css");
    btnCambiarTema.innerText = "Cambiar a Claro";
  } else {
    linkEstilos.setAttribute("href", "./css/tema-claro.css");
    btnCambiarTema.innerText = "Cambiar a Oscuro";
  }


}

btnCambiarTema.onclick = miFuncion;


setTimeout(() => {
  document.getElementById("seccion1").removeAttribute("hidden", "hidden");
}, 1000);