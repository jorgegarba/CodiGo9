// Un callback (llamada de vuelta) es una funcion que se ejecutara despues de que otra funcion haya terminado de ejecutar.

let buscarJuancito = (nombres, f) => {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] == "Juancito") {
            f(i);
            return;
        }
    }
    f(-1);
}

buscarJuancito(["Juancito", "Ronald", "Paolo", "Jose", "Hilton"], (posicion) => {

    if (posicion != -1) {
        console.log(`Juancito esta en la posicion ${posicion}`);
    } else {
        console.log('Nel');
    }
})