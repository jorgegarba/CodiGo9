//String :)
let texto:string = "Jorge";
texto = "Papitas";

//Number
let miEdad:number = 29;

//Booleano
let conganasdeaprender:boolean = true;

//vamos a tener estos 3 tipso de datos básicos

//Any
let multidato:any = "patata";
multidato = 10;
multidato = false;

//Varios tipos
let anio:number|string = 2019;
anio = "2020";
// anio = false;

//Arreglitos
let arrnumeros:Array<number> = [20,11,9,101010,4,7,10];
let arrletras:string[] = ['a','e','i','z'];
let arrmultidato:any[] = ['hola',true,'9',60,100];

console.log(anio);
arrnumeros.forEach((numero:number) =>{
    console.log(numero);
});

//TYPES
//Yo puedo definir mis propios tipos de datos
type dni = number;

let doc:dni = 70696785;

let documento1:dni = 868486716;
