let numeros = [10, 20, 30, 40, 50, 0, 0, 0, -3, -8, -2];

// tamanio del arreglo
console.log(numeros.length);
// ultimo elemento del arreglo
console.log(numeros[numeros.length - 1]);
// imprimiendo un arreglo
console.log(numeros);

// recorriendo un arreglo
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// mostrar la cantidad de positivos, negativos e iguales cero

let p = 0;
let n = 0;
let c = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    p = p + 1;
  } else {
    if (numeros[i] < 0) {
      n = n + 1;
    } else {
      c = c + 1;
    }
  }
}
console.log(`Positivos ${p}`);
console.log(`Negativos ${n}`);
console.log(`Ceros ${c}`);

// Crear un segundo arreglo con los multiplos de 
// 3 tomando como referencia el primer arreglo
let arreglo2 = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 3 == 0) {
    arreglo2.push(numeros[i]);
  }
}
console.log(arreglo2);