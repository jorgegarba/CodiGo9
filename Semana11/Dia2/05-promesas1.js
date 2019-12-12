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

  return new Promise((resolve, reject) => {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        if (ajax.status === 200) {
          resolve(JSON.parse(ajax.responseText));
        } else {
          reject("error");
        }
      }
    }
    ajax.open("GET", "https://reqres.in/api/users");
    ajax.send(null);
  });

}


traerUsuarios().then((rpta) => {
  console.log(rpta);
}).catch((error) => {
  console.log(error);
})

