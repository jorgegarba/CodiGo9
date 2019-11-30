let formRegistro = document.getElementById("formRegistro");
let inputNombre = document.getElementById("inputNombre");
let selectPuesto = document.getElementById("selectPuesto");


let postUsuario = (objeto) => {
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
      console.log(ajax.responseText);
    }
  }
  ajax.open("POST", "https://reqres.in/api/users");
  // SETTEAR o CONFIGURAR los HEADERS
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send(JSON.stringify(objeto));
}



formRegistro.onsubmit = (event) => {
  event.preventDefault();
  let objTrabajador = {
    name: inputNombre.value,
    job: selectPuesto.value
  };
  console.log(objTrabajador);
  postUsuario(objTrabajador)

}