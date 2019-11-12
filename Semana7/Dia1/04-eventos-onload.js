// onload => Funcion que se ejecuta cuando TODOS los recursos
// internos del window, se han cargado por completo
window.onload = () => {





  let formulario = document.getElementById("formulario");
  let inputNombre = document.getElementById("inputNombre");
  let inputFecha = document.getElementById("inputFecha");
  let btnReset = document.getElementById("btnReset");

  formulario.onsubmit = (event) => {
    event.preventDefault();
    let persona = {
      nombre: inputNombre.value,
      fecha: inputFecha.value
    };
    console.log(persona);
    btnReset.click();
  }







}

