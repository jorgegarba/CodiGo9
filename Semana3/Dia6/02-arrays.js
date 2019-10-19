// Existen dos formas de definir variables
// var => que la variable va a poder ser utilizada en todo el codigo
// let => que la variable solo va a existir dentro de el bloque de codigo
if (x = 0) {
    let variable = 20;

}
// la variable no va a ser reconocida
// variable

var nombres = ['Eduardo', 'Ronald', 'Javier', 'Rodrigo', 'Marco'];
var edad = [18, 25, 30, 27, 29,30]

console.log(nombres);
// propiedades de los arreglos
console.log(nombres.length);
for(let posicion=0; posicion<nombres.length; posicion++){
    console.log(nombres[posicion]);
}
for(let posicion=0; posicion<edad.length; posicion++){
    console.log(edad[posicion]);
}

var numeros = [1,2,3,4,5,6,7,8]
for(posicion=0;posicion<numeros.length;posicion++){
    console.log(numeros[posicion]);
    if(numeros[posicion]%2==0){
        console.log("Es par");
    }
    if(numeros[posicion]%2!=0){
        console.log("Es impar");
    }
}

var edad = [20,15,25,30,40,18]
// quiero saber cuantos son mayores de edad
