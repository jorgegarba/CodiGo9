// es un arreglo cuyos indices no son numericos sino son cadenas de texto (claves)
let productos = [];

let cantidad = +prompt("Cuantos productos deseas ingresar???");

for (let i = 0; i < cantidad; i++) {
    let productosTemporales = [];
    let nombre = prompt(`Ingrese el nombre del producto Nro ${i+1}`);
    let codigo = prompt(`Ingrese el codigo del producto Nro ${i+1}`);
    let valor = prompt(`Ingrese el valor del producto Nro ${i+1}`);

    productosTemporales["nombre"]=nombre;
    productosTemporales["codigo"]=codigo;
    productosTemporales["valor"]=valor;

    productos.push(productosTemporales);
}
console.log(productos);

// funcion que imprima el nombre y precio de los productos

// Asi se imprime el nombre
console.log(productos[0]["nombre"]);

let imprimirNombres = (arreglo)=>{
    for (let i = 0; i < arreglo.length; i++) {
        console.log(`El precio del articulo ${arreglo[i]["nombre"]} es: ${arreglo[i]["valor"]}`);
    }
}

imprimirNombres(productos)

