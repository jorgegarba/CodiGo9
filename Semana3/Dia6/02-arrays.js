// Existen dos formas de definir variables
// var => que la variable va a poder ser utilizada en todo el codigo
// let => que la variable solo va a existir dentro de el bloque de codigo
if (x = 0) {
    let variable = 20;

}
// la variable no va a ser reconocida
// variable

var nombres = ['Eduardo', 'Ronald', 'Javier', 'Rodrigo', 'Marco'];
var edad = [18, 25, 30, 27, 29, 30]
/*
console.log(nombres);
// propiedades de los arreglos
console.log(nombres.length);
for (let posicion = 0; posicion < nombres.length; posicion++) {
    console.log(nombres[posicion]);
}
for (let posicion = 0; posicion < edad.length; posicion++) {
    console.log(edad[posicion]);
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8]
for (posicion = 0; posicion < numeros.length; posicion++) {
    console.log(numeros[posicion]);
    if (numeros[posicion] % 2 == 0) {
        console.log("Es par");
    }
    if (numeros[posicion] % 2 != 0) {
        console.log("Es impar");
    }
}
*/

var edades = [20, 15, 25, 30, 40, 18];
// quiero saber cuantos son mayores de edad
// y cuantos son menores de edad
/*
var mayores = 0;
var menores = 0;
for (posicion = 0; posicion < edades.length; posicion++) {
    console.log(edades[posicion]);
    if (edades[posicion] >= 18) {
        console.log("Es mayor de edad");
        mayores = mayores + 1; // mayores++;
    } else {
        console.log("Es menor de edad");
        menores++;
    }
}
console.log(`Del total de ${edades.length} 
edades, hay ${mayores} mayores de edad 
y ${menores} menores de edad`);
*/

// Formas de escribir por pantalla
// console.log("asdasdasd"+mayores+"texto");
// console.log("asdasdasd",mayores);
// console.log(`texto ${mayores}`); // Alt+96

/*
var arreglo = [1,"Eduardo",19.00,true,[1,2,3]]

var simpson = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12,13,14,15]
]
for(let temporada = 0 ; temporada< simpson.length; temporada++){
    console.log(`Temporada ${temporada}`);
    for(let episodio = 0; episodio<simpson[temporada].length; episodio++){
        console.log(`Episodio ${simpson[temporada][episodio]}`);
    }
}
*/
/*
var miarreglo = [
    [1, 2, 3],
    [4, 5, 6]
];
for (let fila = 0; fila < miarreglo.length; fila++) {
    console.log("La fila", fila, "tiene:", miarreglo[fila]);
    for (let columna = 0; columna < miarreglo[fila].length; columna++) {
        console.log("El item de la columna" + columna + " es:" +
            miarreglo[fila][columna]);
    }
}
*/

/*
// TRES EN RAYA
var tres_en_raya = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]

var jugador = 1;
var fin = false;
var persona_fila = 0;
var persona_columna = 0;

while (!fin) {
    switch (jugador) {
        case 1:
            console.log(tres_en_raya);
            persona_fila = +prompt("Primer jugador, Ingrese la posicion, la fila")-1;
            persona_columna = +prompt("Primer jugador, Ingrese la posicion, la columna")-1;
            if (persona_fila < 3 && persona_columna < 3) {
                if (tres_en_raya[persona_fila][persona_columna] != "") {
                    alert("Ya se escribio ahi")
                }
                else {
                    tres_en_raya[persona_fila][persona_columna] = "O";
                    for (let fila = 0; fila < tres_en_raya.length; fila++) {
                        if (tres_en_raya[fila][0] == "O" && tres_en_raya[fila][1] == "O" && tres_en_raya[fila][2] == "O") {
                            alert("Gano el jugador 1");
                            fin = true;
                            break;
                        }
                        if (tres_en_raya[0][fila] == "O" && tres_en_raya[1][fila] == "O" && tres_en_raya[2][fila] == "O") {
                            alert("Gano el jugador 1");
                            fin = true;
                            break;
                        }
                        if (tres_en_raya[0][0] == "O" && tres_en_raya[1][1] == "O" && tres_en_raya[2][2] == "O") {
                            alert("Gano el jugador 1");
                            fin = true;
                            break;
                        }
                    }
                    jugador = 2;
                }
            } else {
                alert("Dimension incorrecta")
            }
            break;
        case 2:
            console.log(tres_en_raya);
            persona_fila = +prompt("Segundo jugador, Ingrese la posicion, la fila")-1;
            persona_columna = +prompt("Segundo jugador, Ingrese la posicion, la columna")-1;
            if (persona_fila < 3 && persona_columna < 3) {
                if (tres_en_raya[persona_fila][persona_columna] != "") {
                    alert("Ya se escribio ahi")
                }
                else {
                    tres_en_raya[persona_fila][persona_columna] = "X";
                    for (let fila = 0; fila < tres_en_raya.length; fila++) {
                        if (tres_en_raya[fila][0] == "X" && tres_en_raya[fila][1] == "X" && tres_en_raya[fila][2] == "X") {
                            alert("Gano el jugador 2");
                            fin = true;
                            break;
                        }
                        if (tres_en_raya[0][fila] == "X" && tres_en_raya[1][fila] == "X" && tres_en_raya[2][fila] == "X") {
                            alert("Gano el jugador 2");
                            fin = true;
                            break;
                        }
                        if (tres_en_raya[0][0] == "X" && tres_en_raya[1][1] == "X" && tres_en_raya[2][2] == "X") {
                            alert("Gano el jugador 2");
                            fin = true;
                            break;
                        }
                    }
                    jugador = 1;
                }
            } else {
                alert("Dimension incorrecta")
            }
    }
}
console.log(tres_en_raya);
*/

// PIEDRA PAPEL O TIJERA
/*
var jugar = true;
while (jugar) {
    var jugador1 = prompt("Ingrese que escoge Jugador 1");
    var jugador2 = prompt("Ingrese que escoge Jugador 2");
    switch (jugador1) {
        case "piedra":
            switch (jugador2) {
                case "piedra":
                    console.log("Empate");
                    break;
                case "papel":
                    console.log("Gana jugador 2");
                    jugar = false;
                    break;
                case "tijera":
                    console.log("Gana jugador 1");
                    jugar = false;
                    break;
                default:
                    console.log("Escribio mal, otra vez.");
                    break;
            }
            break;
        case "papel":
            switch (jugador2) {
                case "piedra":
                    console.log("Gana jugado 1");
                    jugar = false;
                    break;
                case "papel":
                    console.log("Empate");
                    break;
                case "tijera":
                    console.log("Gana jugador 2");
                    jugar = false;
                    break;
                default:
                    console.log("Escribio mal, otra vez.");
                    break;
            }
            break;
        case "tijera":
            switch (jugador2) {
                case "piedra":
                    console.log("Gana jugador 2");
                    jugar = false;
                    break;
                case "papel":
                    console.log("Gana jugador 1");
                    jugar = false;
                    break;
                case "tijera":
                    console.log("Empate");
                    break;
                default:
                    console.log("Escribio mal, otra vez.");
                    break;
            }
            break;
        default:
            console.log("Escribio mal, otra vez.");
            break;
    }
}
*/

// if (jugador1 == "piedra") {
//     if (jugador2 == "piedra") {
//         console.log("Empate");
//     }
//     if (jugador2 == "papel") {
//         console.log("Gana el jugador 2");
//     }
//     if (jugador2 == "tijera") {
//         console.log("Gana el jugador 1");
//     }
// }
// if (jugador1 == "papel") {
//     if (jugador2 == "piedra") {
//         console.log("Gana el jugador 1");
//     }
//     if (jugador2 == "papel") {
//         console.log("Empate");
//     }
//     if (jugador2 == "tijera") {
//         console.log("Gana el jugador 2");
//     }
// }
// if (jugador1 == "tijera") {
//     if (jugador2 == "piedra") {
//         console.log("Gana el jugador 2");
//     }
//     if (jugador2 == "papel") {
//         console.log("Gana el jugador 1");
//     }
//     if (jugador2 == "tijera") {
//         console.log("Empate");
//     }
// }

/*
var anios = [1992, 2000, 2005, 2008, 1969, 1345, 1540, 1780, 1901, 2020]
// El año bisiesto es el año que es multiplo de 4
// pero que no es multiplo de 100
for (let posicion = 0; posicion < anios.length; posicion++) {
    if (anios[posicion] % 4 == 0 && anios[posicion] % 100 != 0) {
        console.log(`El año ${anios[posicion]} es bisiesto`);
    }
    else {
        console.log(`El año ${anios[posicion]} no es bisiesto`);
    }
}
*/

// Si ingresamos 3 notas y la segunda tiene peso doble
// ver si aprobamos o no aprobamos el curso
// se aprueba si tienes mas o igual de 11
/*
var nota1 = +prompt("Ingrese la nota 1");
var nota2 = +prompt("Ingrese la nota 2");
var nota3 = +prompt("Ingrese la nota 3");
var promedio = nota1 * 0.25 + nota2 * 0.5 + nota3 * 0.25;
if (promedio < 11) {
    console.log("Jalaste");
} else {
    console.log("Aprobaste");
}
*/

/*
Segunda opcion , mas dificil
var notas = [0, 0, 0]
nota = 0
do {
    notas[nota] = +prompt(`Ingrese la nota ${nota}`);
    nota++;

} while (nota < 3);
var promedio = 0;
for (let nota = 0; nota < notas.length; nota++) {
    if (nota == 1) {
        promedio += notas[nota] * 2
    } else {
        promedio += notas[nota]
    }
}
promedio = promedio / 4;
console.log(`El promedio es ${promedio}`);
*/
