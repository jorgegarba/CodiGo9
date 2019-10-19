// for
// Esta variable va a funcionar en todo nuestro archivo JS
var variable = 5;
// Esta variable solo va a funcionar en donde este contenida
// puede ser: for, do-while, if, funciones, clases y switch
// puede ser de cualquier tipo 
// (int, string, bool, array, object)
let variabletemporal = "Texto"
var tope = 5
for (let i = 0; i < tope; i ++) {
    console.log(i)
}


// while
// se va a ejecutar mientras que la condicion sea verdadera
var i= 25;
// while => mientras que la condicion sea verdadera (True)
while(i!=20){
    console.log(i);
    i--; // i = i-1
}

// do while
// Hacer mientras que la condicion se cumpla
i = 10
do{
    console.log(i)
    i--;
}while(i > 0)

// forearch

// sirve para cuando tenemos arreglos 
// arreglo.foreach(item=>{})