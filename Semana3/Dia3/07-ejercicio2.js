var sencilla = 20.00;
var doble = 25.00;
var triple = 28.00;
var raiz = 0**(1/2);
console.log(raiz);

// var compra_con_tajeta = 5;
var opcion = +prompt("Que hamburguesa desea? 1. Simple 2. Doble 3. Tiple");
var cantidad = +prompt("Cuantas desea?");
var total;
if (opcion === 1) {
    total = cantidad * sencilla;
} else {
    if (opcion === 2) {
        total = cantidad * doble;
    } else {
        total = cantidad * triple;
    }
}
var metodoPago = +prompt("Va a pagar con 1.efectivo o con 2.tarjeta");
if (metodoPago === 1) {
    console.log("Su total es de: " + total);
} else {
    // total = (total*(compra_con_tajeta/100))+total;
    // total = total * 1.05;
    total *= 1.05;
    console.log("Su total con el cargo de tarjeta es: "+total);

}