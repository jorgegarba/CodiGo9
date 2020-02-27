class Producto {
    constructor(codigo, nombre, inventario) {
        this.id = "q12345";
        this.formulaSecreta = "mi ingrediente secreto";
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
    }
    get Id() {
        return this.id;
    }
    get Formula() {
        return this.formulaSecreta;
    }
    sumarInventario(cantidad) {
        this.inventario = this.inventario + cantidad;
        return this.inventario;
    }
}
let mouse = new Producto(123, "Logitech G201", 20);
console.log(mouse.codigo);
console.log(mouse.Formula);
