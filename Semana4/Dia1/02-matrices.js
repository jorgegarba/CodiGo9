let personas = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(personas[1][1]);

// Ejericios

let nombres = ["Jorge", "Carlos", "Carmen", "Martha"];
let notas = [1, 14, 4, 9];
// 1. determinar el nombre del alumno con menor nota a partir
//  del arreglo de 'notas'
//  OJO no se puede recorrer el arreglo de nombres

let menor = notas[0];
let pos = 0;
for (let i = 0; i < notas.length; i++) {
  if (menor > notas[i]) {
    menor = notas[i];
    pos = i;
  }
}
console.log(nombres[pos]);


// 2. Algoritmo para que el cliente ingrese un nuevo alumno
// con su correspondiente nota. Al final, mostrar los alumnos y
// sus notas.

let nuevoNombre = prompt("Ingrese el nombre del alumno");
let nuevaNota = +prompt("Ingrese el nombre del alumno");

nombres.push(nuevoNombre);
notas.push(nuevaNota);

console.log(nombres);
console.log(notas);

// 3. El cliente decide ingresar N precios
// todos los precios se inyetan en un arreglo
// a partir del arreglo, calcular el promedio 
// de la suma de todos los precios
// e imprimir el arreglo de precios

let nroPrecios = +prompt("Cuantos precios va a ingresar?");
let precios = [];
let suma = 0;

for (let i = 0; i < nroPrecios; i++) {
  let precio = +prompt(`Ingrese el precio nro ${i + 1}`);
  precios.push(precio);
  suma = suma + precio;
}

console.log(`El promedio es: ${suma / nroPrecios}`);
console.log(precios);

