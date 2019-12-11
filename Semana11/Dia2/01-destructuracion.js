// Destructuración de arreglos

let nombres = ["Jorge", "Daniela", "Carlos"];
// forma tradicional de obtener la copia de un elemento
let d = nombres[1];

// destructurar los 3 elementos internos
let [el1, el2, el3] = nombres;
console.log(el1);
//=====================================//

// destructurar el 3er elemento del arreglo
let [, , c] = nombres;
console.log(c);

// destructurar un subarreglo 
let [q, ...resto] = nombres;
// q => el valor del primer elemento del arreglo
// resto => es un arreglo de los 2 elementos restantes
console.log(q);
console.log(resto);