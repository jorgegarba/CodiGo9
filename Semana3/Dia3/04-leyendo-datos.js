// Como capturar momentaneamente los datos del usuario
// Todo lo ingresado por el usuario es de tipo string
var edad = prompt("Ingrese su edad");

console.log(edad);

// Como convertir de string a entero
// Si nosotros ingresamos un decimal lo va a redondear
// dependiendo de su parte decimal
var edadEnNumero = parseInt(edad);
console.log(edadEnNumero + 2);

// convertir un string en un NUMERO (ya sea entero o decimal)
var edad_numero = +edad;
console.log(edad_numero + 5);


