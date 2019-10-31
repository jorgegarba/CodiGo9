let nombre = new String("Mañana es Halloween");

// Propiedades de los strings
// length=> para ver su longitud
console.log(nombre.length);

// toLowerCase() => devuelve el texto en minusculas
// No cambia el verdadero valor del string
console.log(nombre.toLowerCase());

// toUpperCase() => devuelve el texto en mayusculas
// No cambia el verdader valor del string
console.log(nombre.toUpperCase());

// trim() => quita los espacios en blanco a los extremos del string
// ejm: " hola soy juan "
// resultado: "hola soy juan"
console.log(nombre.trim());

// substr(inicio, nroletras) => devuelve una subcadena a partir del string original
// inicio => donde queremos que empiece la nueva cadena
// nroletras => la longitud de nuestra nueva cadena
console.log(nombre.substr(0,5));

// substring(inicio, final) => devuelve una subcadena a partir del string original.
// inicio => posicion en la que inicia la subcadena
// final => posicion +1 en la que termina la subcadena
// NOTA: si no se especifica el final, termina hasta el final de la cadena
console.log(nombre.substring(5,8));

// Imprimir los ultimos 5 caracteres del string
console.log(nombre.substring(nombre.length-5));

// startsWith(cadena) => devuelve true en el caso que el string comience con el contenido de la cadena
console.log(nombre.startsWith("Hoy"));

// endsWith(cadena) => devuelve true en el caso que el string termine con el contenido de la cadena
console.log(nombre.endsWith("ween"));

// indexOf(cadena) => devuelve la posicion en la que una subcadena inicia. Si la subcadena no existe, devuelve -1
console.log(nombre.indexOf("Mañana"));

// charAt(posicion) => devuelve la letra que se cuentra en esa posicion
console.log(nombre.charAt(5));
console.log(nombre[5]);

// EJERCICIOS
// Cada ejercicio es una funcion que recibe un string
// Por ejemplo:
// let cuentavocales= (cadena)=>{
// }
// 1. Determinar el numero de vocales en un string
// 2. Determinar el numero de palabras en un string
// 3. Determinar si una cadena es palindroma
// Ejemplo: 'anita lava la tina'
// 'oso'
// 'anitalavalatina'


