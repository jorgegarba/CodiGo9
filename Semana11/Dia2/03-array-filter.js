let comun = [12, 3, 4, 55, 8, 90, 7];

// Nivel pollito (`)>

let mayoresQueDiez = comun.filter((elemento, i) => {
  if (elemento > 10) {
    return elemento;
  }
});

console.log(mayoresQueDiez);

