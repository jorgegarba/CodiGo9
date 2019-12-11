let objVehiculo = {
  marca: 'Mazda',
  modelo: 'CX-3',
  anio: 2018,
  recorrido: 20500,
  colores: ['Cafe', 'Negro']
};

// copiar un atrbibuto de manera clasica
// let marca = objVehiculo.marca;

// destructurar la marca
// Se crea una variable del mismo nombre que el atributo
// del objeto
let { marca } = objVehiculo;
console.log(marca);

// destructurar un atributo con nu nuevo nombre de destino
let { recorrido: kilometraje } = objVehiculo;
console.log(kilometraje);

// destructurar varios atributos en una misma linea
let { anio, modelo } = objVehiculo;
console.log(`Anio => ${anio}`);
console.log(`Modelo => ${modelo}`);

// obtener la copia de todos los atributos de un objeto
// y agregarle un nuevo atributo

let copia;
copia = {
  ...objVehiculo,
  id: 1
};
console.log(copia);


// atributos y valores iguales en un objeto
let copia2;
let id = 90;
copia2 = {
  ...objVehiculo,
  id
};
console.log(copia2);




let imprimirModelo = ({ modelo }) => {
  console.log(modelo);
}

imprimirModelo(objVehiculo);