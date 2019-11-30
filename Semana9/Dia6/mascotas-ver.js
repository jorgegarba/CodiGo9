

let getMascotas = () => {
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
      let json = JSON.parse(ajax.responseText);
      console.log(json);
    }
  }
  ajax.open("GET", "https://5dc194f36ca10a0014d5d95d.mockapi.io/mascota");
  ajax.send(null);
}

getMascotas();