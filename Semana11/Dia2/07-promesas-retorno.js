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

let traerUsuarioPorId = (id) => {
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
    ajax.open("GET", "https://reqres.in/api/users/" + id);
    ajax.send(null);
  });
}

traerUsuarios().then((rpta) => {
  var id = rpta.data[1].id;
  return traerUsuarioPorId(id);
}).then((janet) => {  
  console.log(janet);
}).catch((error) => {
  console.log(error);
})
