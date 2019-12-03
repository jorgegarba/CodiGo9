let getCliente = () => {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        console.log(ajax.responseText);
      }
    }
    ajax.open("GET", " http://127.0.0.1:5000/clientes/traer/2");
    // SETTEAR o CONFIGURAR los HEADERS
    // ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(null);
  }
getCliente();