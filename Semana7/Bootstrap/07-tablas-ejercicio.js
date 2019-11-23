let btnDark = document.getElementById("btnDark");
let btnBordered = document.getElementById("btnBordered");

let icoDark = document.getElementById("icoDark");
let icoBordered = document.getElementById("icoBordered");

let tabla = document.getElementById("tabla");

let cambiarEstilo = (estiloTabla, icono) => {
  if (tabla.classList.contains(estiloTabla)) {
    tabla.classList.remove(estiloTabla);
    icono.classList.remove("text-success");
    icono.classList.add("text-danger");
  } else {
    tabla.classList.add(estiloTabla)
    icono.classList.remove("text-danger");
    icono.classList.add("text-success");
  }
}


btnDark.onclick = () => {
  cambiarEstilo("table-dark", icoDark);
}
btnBordered.onclick = () => {
  cambiarEstilo("table-bordered", icoBordered);
  // ¿Cómo redireccionar a otra página?
  // document.location.href = "./otraRuta.html";
}
