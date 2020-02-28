var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(texto) {
    return function (target) {
        target.prototype.saludar = function () {
            console.log("Buen día " + texto);
        };
        target.prototype.anio = new Date().getFullYear();
    };
}
let Promocion = class Promocion {
    constructor(integrantes, nombre) {
        this.integrantes = integrantes;
        this.nombre = nombre;
    }
    saludar(texto) {
        console.log("somos los " + this.nombre + " " + texto);
    }
    imprimirIntegrantes() {
        this.integrantes.forEach((integrante) => {
            console.log(integrante);
        });
    }
};
Promocion = __decorate([
    decorador("saludo con decorador")
], Promocion);
let codigo09 = new Promocion(['YianPier', 'Chirley', 'Wylly', 'Pepe', 'Jilton', 'Velen', 'Sesar', 'YanKarlo', 'Pepes2'], 'Le tongue developers');
codigo09.imprimirIntegrantes();
codigo09.saludar("que tal");
console.log(codigo09.anio);
