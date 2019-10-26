// Funciones flecha son siempre anonimas
// funcion que de un arreglo de elementos retorne el mayor de sus elementos

let traerMayor = (elementos) => {
    let mayor = elementos[0];
    for (let posicion = 0; posicion < elementos.length; posicion++) {
        if (elementos[posicion] > mayor) {
            mayor = elementos[posicion];
        }
    }
    return mayor;
}
let arreglo = [3, 20, 15, 40, -20, 100, 5];
let m = traerMayor(arreglo);
console.log(`El numero mayor es ${m}`);

// SPREAD OPERATOR o Operador de Propagacion
// Permite que la sobrecarga de parametros sean contenidos en un array
let verduras = (a, b, ...restante) => {
    console.log(a);
    console.log(b);
    console.log(restante);
}
verduras('Brocoli', 'Beterraga', 'Acelga', 'Apio', 'Culantro', 'Perejil');

// dar parametros por defecto

/**
 * Funcion que sirve para crear un usuario y si no le mandamos los valores da parametros por defecto
 * @param {String} nombre 
 * @param {String} apellido 
 * @param {String} correo 
 */
let crearUsuario = (nombre = "sin-nombre", apellido = "sin-apellido", correo = "sin-correo") => {
    console.log(`El nombre es: ${nombre}`);
    console.log(`El apellido es: ${apellido}`);
    console.log(`El corre es: ${correo}`);
}

crearUsuario();
crearUsuario("Eduardo");
crearUsuario("Eduardo", "De Rivero", "ederiveroman@gmail.com");