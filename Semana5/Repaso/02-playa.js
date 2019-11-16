// Crear una clase Playa que contenga como atributos un
// nombre:string, nroEspacios: int, vehiculos:array y

// como metodos agregarVehiculos que lo que haga es agregue
// al Array un objeto de vehiculos que tenga una 

// placa:string,modelo:string y marca:string pero que antes que

// ingrese el vehiculo verifique si no excede el nroEspacios
// de la playa, sino no permitira ingresar, y otro metodo 
// retirarVehiculo que por medio de la funcion indexOf se
// retire al vehiculo segun su placa.

class Vehiculo {
  placa = "";
  modelo = "";
  marca = "";
  constructor(placaX, modeloX, marcaX) {
    this.placa = placaX;
    this.modelo = modeloX;
    this.marca = marcaX;
  }
}

class Playa {

  nombre = '';
  nroEspacios = 0;
  vehiculos = [];
  constructor(nombreX, nroEspaciosX) {
    this.nombre = nombreX;
    this.nroEspacios = nroEspaciosX;
  }

  agregarVehiculo(vehiculo) {
    if (this.nroEspacios > this.vehiculos.length) {
      console.log("alguien esta agregando un vehiculo");
      this.vehiculos.push(vehiculo);
    } else {
      console.log(`Ya no tenemos espacios, el vehiculo de placa ${vehiculo.placa}, no fue agregado`);
    }


    console.log("Imprimiendo la lista de vehiculos");
    console.log(this.vehiculos);
  }

  retirarVehiculoByPlaca(placaRecibida) {
    // 1 buscar al vehiculo segun su placa
    for (let i = 0; i < this.vehiculos.length; i++) {
      if (this.vehiculos[i].placa == placaRecibida) {
        // si existe el vehiculo
        this.vehiculos.splice(i, 1);
        console.log("Vehiculo encontrado, y eliminado");
        console.log("Imprimiendo lista de vehiculos");
        console.log(this.vehiculos);
        return;
      }
    }
    console.log(`El vehiculo de placa ${placaRecibida}, no existe`);
    console.log("Imprimiendo lista de vehiculos");
    console.log(this.vehiculos);
  }
}


let playaLambramani = new Playa("Playa Lambra", 5);

let mazda = new Vehiculo("QWE-123", "CX-3", "Mazda");
let nissan = new Vehiculo("QWE-456", "Sentra", "Nissan");
let chevrolet = new Vehiculo("QWE-890", "Camaro", "Chevrolet");
let audi = new Vehiculo("QWE-222", "R8", "Audi");
let mitsubishi = new Vehiculo("QWE-333", "Lancer", "Mitsubishi");
let honda = new Vehiculo("QWE-888", "Civic", "Honda");
let cherry = new Vehiculo("QWE-000", "QQ", "Cherry");

playaLambramani.agregarVehiculo(mazda);
playaLambramani.agregarVehiculo(nissan);
playaLambramani.agregarVehiculo(chevrolet);
playaLambramani.agregarVehiculo(audi);
playaLambramani.agregarVehiculo(mitsubishi);
playaLambramani.agregarVehiculo(honda);
playaLambramani.agregarVehiculo(cherry);

playaLambramani.retirarVehiculoByPlaca("QWE-222");
playaLambramani.agregarVehiculo(honda);



let cadena = "Hoy es sabado con Andres sabado"
console.log(cadena.indexOf("Eduardo"))
console.log(cadena.length-1)
console.log(cadena.lastIndexOf("es",26))