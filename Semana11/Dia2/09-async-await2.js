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


let traerTodo = async () => {
  let usuarios = await traerUsuarios();
  let id = usuarios.data[1].id;
  let janet = await traerUsuarioPorId(id);
  return {
    usuarios,
    janet
  }
}

traerTodo().then((json) => {
  console.log(json);
});
