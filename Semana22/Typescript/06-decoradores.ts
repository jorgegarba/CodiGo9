//Va a representar mi decorador
function Jefe(target, key){
    console.log("No te voy a pagar " + key);
}

class Persona{
    private nombre:string;
    private apellido:string;

    constructor(nombre:string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    //Los decoradores siempre van antes de lo que se van a modificar
    @Jefe
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }
}

let alumnoCodigo:Persona = new Persona('Juan','Lopez');
alumnoCodigo.saludar();