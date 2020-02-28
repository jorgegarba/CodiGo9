function decorador(texto:string){
    return function(target){
        target.prototype.saludar = function(){
            console.log("Buen día " + texto);
        }
        target.prototype.anio = new Date().getFullYear();
    }
}

@decorador("saludo con decorador")
class Promocion{
    integrantes:Array<string>;
    nombre:string;
    
    constructor(integrantes:Array<string>, nombre:string){
        this.integrantes = integrantes;
        this.nombre = nombre;
    }
    saludar(texto:string){
        console.log("somos los " + this.nombre + " " + texto);
    }

    imprimirIntegrantes(){
        this.integrantes.forEach((integrante:string) => {
            console.log(integrante);
        })
    }
}

let codigo09:Promocion = new Promocion(['YianPier','Chirley','Wylly','Pepe','Jilton','Velen','Sesar','YanKarlo','Pepes2'],'Le tongue developers');

codigo09.imprimirIntegrantes();
codigo09.saludar("que tal");
console.log(codigo09.anio);