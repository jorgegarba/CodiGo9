interface iProducto {
    codigo:number;
    nombre:string;
    inventario:number;
    //Será un metodo sumará la cantidad actual de productos
    sumarInventario(cantidad:number):number;
}

class Producto implements iProducto{
    //que yo puedo dentro de mi clase elementos que sean privados y públicos
    public codigo:number;
    public nombre:string;
    public inventario:number;
    private id:string = "q12345";
    private formulaSecreta = "mi ingrediente secreto";

    constructor(codigo:number, nombre:string, inventario:number){
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
    }

    get Id():string{
        return this.id;
    }

    get Formula():string{
        return this.formulaSecreta;
    }

    sumarInventario(cantidad:number):number{
        this.inventario = this.inventario + cantidad;
        return this.inventario;
    }
}

let mouse:Producto = new Producto(123,"Logitech G201", 20);

console.log(mouse.codigo);

console.log(mouse.Formula);