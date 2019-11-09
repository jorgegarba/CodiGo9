let inputNombre = document.getElementById("inputNombre");

// onfocus => evento que se ejecuta cuando el cursor
// o el tabIndex se encuentra en el elemento
inputNombre.onfocus = () => {
  inputNombre.style.borderBottom = "7px solid #4A3E66";
  inputNombre.style.boxShadow = "5px 5px 5px #4A3E66";
}

// onblur => evento que se ejecuta cuando el cursor
// o el tabIndex libera al elemento o deja de estar en él
inputNombre.onblur = () => {
  inputNombre.style.borderBottom = "0";
  inputNombre.style.boxShadow = "none";
}

inputNombre.onkeyup = (event) => {
  console.log(inputNombre.value.length);
}

inputNombre.onkeydown = (event) => {
  // SOLO CAPTURAR LA TECLA [TAB]
  if (event.key === "Tab") {
    console.log("TAB");
  }
}