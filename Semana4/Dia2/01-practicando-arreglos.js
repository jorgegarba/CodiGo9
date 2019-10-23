// EJERCICIO I
let numeros = [1, 2, 5, 10, 26, 29, 42, 50]
// Del arreglo numeros, verificar cuantos son primos

// EJERCICIO II
// Sabien el funcionamiento de la serie fibonacci, definir un limite para que se ponga la 
// serie en el arreglo fibonacci
// 1 2 3 5 8 13 21
/*
let fibonacci=[1,2];
var limite = prompt("Ingrese el limite de la serie");
while(fibonacci[fibonacci.length-1]<limite){
    let ultimaPosicion = fibonacci[fibonacci.length-1];
    let penultimaPosicion = fibonacci[fibonacci.length-2];
    fibonacci.push(ultimaPosicion+penultimaPosicion);
}
console.log(fibonacci);
*/

// EJERCICIO III
// Crear un arreglo donde el usuario le indique el tamaño del arreglo e
// ingrese un numero para que rellene el arreglo con sus multiplos
// tamaño = 5
// multiplo = 4
// [4 8 12 16 20]
// push() para insertar un nuevo dato al arreglo
// var tamanio = +prompt("Ingrese el tamaño del arreglo")
// var multiplo = +prompt("Ingrese el multiplo del arreglo")
// var inicio = 0
// var resultado = []
// for (let i = 0; i < tamanio; i++) {
//     inicio = inicio + multiplo
//     resultado.push(inicio)
// }
// console.log(resultado);

// EJERCICIO IV
// Teniendo el siguiente arreglo
var nombres = ["Eduardo", "Jorge", "Juan", "Javier",
    "Carolina", "Angelica", "Juan"]
// se desea ingresar un nombre y buscar en el arreglo, si se encuentra,
// decir en que posicion esta y si hay mas de uno, indicar todas las
// posiciones, y si no esta indicar que no se encontro

// EJERCICIO V
// Ingresar el tamaño de un arreglo y pedir sus números que van a ser
// ingresados, no se puede repetir ningun número ingresado anterior
// mente.Ejemplo:
// tamaño=5
// 2,6,10,20,26  PERO NO DEBE REPETIRSE NINGUN NÚMERO
var tamanio = +prompt("Ingrese el tamaño del arreglo")
var arraynum = [];
for (let i = 0; i < tamanio; i++) {
    var bandera = 0;
    var dato = +prompt("Ingrese el numero");
    for (let index = 0; index < arraynum.length; index++) {
        if(dato == arraynum[index]){
            console.log("Valor ingresado ya se repite");
            bandera=1;
            i--;
            break;
        }
    }
    if(bandera===0){
        arraynum.push(dato)
    }
}
console.log(arraynum);

// EJERCICIO VI
// Teniendo el siguiente arreglo
var notas = [5, 15, 18, 20, 14, 16, 9]
// se desea saber cuantos estan aprobados, siendo la nota mínima para
// aprobar=11 y sacar su promedio de todas las notas

// EJERCICIO VII
// Que se rellene automaticamente un arreglo de 0 a 50 y que los muestre al reves