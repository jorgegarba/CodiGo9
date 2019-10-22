function sumar() {
  console.log("sumando");
}
function sumarV2(a, b) {
  console.log(a + b);
}
function sumarV3(a, b) {
  let s = a + b;
  return s;
}
console.log(sumarV3(60, 9));


/**
 * Función que recibe datos personales y los imprime
 * @param {String} nombre El nombre de la persona
 * @param {String} apellido El apellido de la persona
 */
function datos(nombre, apellido) {
  console.log(`Nombre ${nombre}`);
  console.log(`Apellido ${apellido}`);
}
datos("Jorge", "Garnica");



/**
 * Función que multiplica dos números sin usar
 * el signo *
 * @param {Number} a Primer valor
 * @param {Number} b Segundo valor
 * @returns {rpta} la multiplicación de ambos valores
 */
function multiplicar(a, b) {
  let rpta = 0;
  for (let i = 0; i < a; i++) {
    rpta = rpta + b;
  }
  return rpta;
}
console.log(multiplicar(8, 4));



/**
 * Función que divide dos números sin utilizar 
 * el signo '/'
 * E imprime el cociente y el residuo en caso
 * de no ser una división perfecta
 * @param {Number} D Dividendo
 * @param {Number} d divisor
 */
function dividir(D, d) {

}

