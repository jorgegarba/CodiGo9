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






