// Math > Clase de las matemáticas

// Math.sqrt(numero) => obtener la raíz cuadrada de un número
console.log(Math.sqrt(81));

// Math.floor(numero) => redondea un número real al número
// entero menor directo.
console.log(Math.floor(11.99));

// Math.ceil(numero) => redondea un número real al número
// entero mayor directo.
console.log(Math.ceil(5.01));

// Math.round(numero) => redondea el número 
console.log(Math.round(4.5));

// Math.random() => devuelve un número aleatorio entre 0 y 1
console.log(Math.random());
// Random entre 50 y 100 (artificio) con decimales
console.log(Math.random() * (100 - 50) + 50);
// Random entre 50 y 100 redondeado
console.log(Math.round(Math.random() * (100 - 50) + 50));
// Random entre 50 y 100 con 2 decimales
let random = Math.round(Math.random() * (100 - 50) + 50);
console.log(random.toFixed(2));









