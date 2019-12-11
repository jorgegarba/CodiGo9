let objetos = [{ id: 1, nombre: "Jorge" }, { id: 2, nombre: "Emilia" }];

let resultado = objetos.find((elemento) => {
  return elemento.id === 2;
})

console.log(resultado);
