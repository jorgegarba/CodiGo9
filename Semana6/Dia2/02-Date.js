// Crear una variable de la clase Date
// devuelve un objeto con la fecha actual
let hoy = new Date();
console.log(hoy);

// Crear una variable con una fecha 
// personalizada
// 0 => enero
// 11 => diciembre
let diaDeLosVarones = new Date(2019, 10, 1);
console.log(diaDeLosVarones);

// getFullYear() => Obtener el año de un objeto Date
let anio = diaDeLosVarones.getFullYear();
console.log(anio);

// getDate() => El numero del día del mes de un objeto Date
let dia = diaDeLosVarones.getDate();
console.log(dia);

// getMonth() => El número del mes de un objeto Date
let mes = diaDeLosVarones.getMonth();
console.log(mes);

// getHours() => La hora de un objeto fecha
let horas = diaDeLosVarones.getHours();
console.log(horas);

// Estableciendo navidad
let navidad = new Date(2019, 11, 25);

// restando 2 objetos fecha
// al restar dos objetos de tipo DATE
// obtenemos un valor en 'milisegundos'
let navidadMenosHoy = navidad - hoy;
console.log(navidadMenosHoy);

let segundos = navidadMenosHoy / 1000;
console.log(`Quedan ${segundos} segundos para navidad`);
let minutos = segundos / 60;
console.log(`Quedan ${minutos} minutos para navidad`);
let horasdobleese = minutos / 60;
console.log(`Quedan ${horasdobleese} horas para navidad`);
let dias = horasdobleese / 24;
console.log(`Quedan ${dias} dias para navidad`);
let semanas = dias / 7;
console.log(`Quedan ${semanas} semanas para navidad`);







