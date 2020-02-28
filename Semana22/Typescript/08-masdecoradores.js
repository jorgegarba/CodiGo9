var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function saludoFormal(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.nombre = "Brian";
            this.apellido = "Garnica";
        }
        saludo() {
            return `Buen día del señor, yo soy ${this.nombre} ${this.apellido} que gusto en conocerle`;
        }
    };
}
let Person = class Person {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludo() {
        return `Hola causa soy ${this.nombre} ${this.apellido}`;
    }
};
Person = __decorate([
    saludoFormal
], Person);
let elBrallan = new Person('Brallan', 'Navajazo');
console.log(elBrallan.saludo());
