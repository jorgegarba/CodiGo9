let comun = [12, 3, 4, 55, 8, 90, 7];

// Nivel pollito (`)>

// let mayoresQueDiez = comun.filter((elemento, i) => {
//   if (elemento > 10) {
//     return elemento;
//   }
// });

// Nivel Hachita Plateada
// omitiremos la sentencia if

// let mayoresQueDiez = comun.filter((elemento, i) => {
//   return elemento > 10;
// });


// Nivel Cetro
// omitiremos la sentencia return
// si el codigo interno de la función, solo tiene una línea 
// la sentencia return se asume con el operador ( ) paréntesis
let mayoresQueDiez = comun.filter(elemento => (elemento > 10));

console.log(mayoresQueDiez);

