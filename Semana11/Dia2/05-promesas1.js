// Creando una promesa sencilla
let miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Resolviendo correctamente la promesa
    resolve("bien!");
  }, 2000);
});

miPromesa.then((mensaje) => {
  console.log("La promesa se cumplió correctamente");
  console.log(mensaje);
});



// ============================

let traerUsuarios = () => {
  
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
  
    }
  }
  ajax.open("GET", "https://reqres.in/api/users");
  ajax.send(null);
}

traerUsuarios();