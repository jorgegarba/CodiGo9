let btnTraerGatos = document.getElementById("btnTraerGatos");
let alertaCargando = document.getElementById("alertaCargando");
let miTabla = document.getElementById("miTabla");
let cuerpoTabla = document.getElementById("cuerpoTabla");


let dibujarTabla = (json) => {
  let data = json.data;

  let filas = "";

  data.forEach((usuario) => {
    let fila = `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.first_name}</td>
                    <td>${usuario.last_name}</td>
                    <td>${usuario.avatar}</td>
                </tr>`;
    filas = filas + fila;
  });

  cuerpoTabla.innerHTML = filas;
  miTabla.removeAttribute("hidden");
}

let getUsuarios = () => {
  // Mostrando aviso de carga
  alertaCargando.removeAttribute("hidden");
  // Ocultar la tabla
  miTabla.setAttribute("hidden", "hidden");

  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
      let texto = ajax.responseText;
      let json = JSON.parse(texto);
      console.log(json);
      dibujarTabla(json);
      alertaCargando.setAttribute("hidden", "hidden");
    }
  }
  ajax.open("GET", "https://reqres.in/api/users");
  ajax.send(null);
}

btnTraerGatos.onclick = () => {
  getUsuarios();
}