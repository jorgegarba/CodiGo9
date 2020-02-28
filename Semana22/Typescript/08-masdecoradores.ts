function saludoFormal(target){
    return class extends target{
        nombre = "Brian";
        apellido = "Garnica"

        saludo(){
            return `Buen día del señor, yo soy ${this.nombre} ${this.apellido} que gusto en conocerle`;
        }
    }
}

@saludoFormal
class Person{
    nombre:string;
    apellido:string;

    constructor(nombre:string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludo(){
        return `Hola causa soy ${this.nombre} ${this.apellido}`;
    }
}

let elBrallan:Person = new Person('Brallan','Navajazo');

console.log(elBrallan.saludo());