// fetch
// Cuando se llama por el verbo GET,
// sólo se coloca la URL directamente
fetch("https://reqres.in/api/users")
  .then((rpta) => {
    return rpta.json();
  })
  .then((data) => {
    console.log(data);
  });

// USANDO FETCH con el VERBO POST
fetch("https://reqres.in/api/users", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: "Jorgito", job: "Chef" })
}).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
})