
let traerDatos = async () => {

  // return => equivale a (resolve)
// return "respuesta";

  // throw => equivale a (reject)
  throw "mensaje de error"

}

traerDatos().then((rpta) => {
  console.log(rpta);
}).catch((error) => {
  console.log(error);

})
