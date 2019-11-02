// función normal
function sumar(a, b) {
  return a + b;
}
// función anónima
let sumaAnonima = function (a, b) {
  return a + b;
}
console.log(sumar(8, 10));
console.log(sumaAnonima(15, 5));

// ================================= //


let mostrarInfo = (arregloPersonas) => {
  for (let i = 0; i < arregloPersonas.length; i++) {
    if (arregloPersonas[i].edad >= 26) {
      console.log(arregloPersonas[i]);
    }
  }
}


let personas = [
  {
    apellido: "Garnica",
    edad: 28,
    nombre: "Jorge"
  },
  {
    nombre: 'Daniel',
    edad: 25,
    apellido: 'Gutierrez'
  }
];

mostrarInfo(personas)

// ========================///

class Persona {
  nombre = "";
  edad = 0;
  apellido = "";
  constructor(nombreX, apellidoX, edadX = 1) {
    this.nombre = nombreX;
    this.apellido = apellidoX;
    this.edad = edadX;
  }
  imprimirNombreYApellido() {
    console.log(this.nombre);
  }
}

let per1 = new Persona("Juanito", "Bravo", 28);
per1.imprimirNombreYApellido();

let per2 = new Persona("Maria", "Jimenez", 30);


console.log(per1);
console.log(per2);



