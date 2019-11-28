let btnTraerGatos = document.getElementById("btnTraerGatos");
let alertaCargando = document.getElementById("alertaCargando");

let getUsuarios = () => {
  // Mostrando aviso de carga
  alertaCargando.removeAttribute("hidden");

  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
      let texto = ajax.responseText;
      let json = JSON.parse(texto);
      console.log(json);
      alertaCargando.setAttribute("hidden", "hidden");
    }
  }
  ajax.open("GET", "https://reqres.in/api/users");
  ajax.send(null);
}

btnTraerGatos.onclick = () => {
  getUsuarios();
}