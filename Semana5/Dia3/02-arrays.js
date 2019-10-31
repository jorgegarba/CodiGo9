// Inicializando un array por medio de su clase
let numeros = new Array();
console.log(numeros);

// propiedades de las arrays
// push(elemento(s)) => recibe un elemento y lo inserta a la ultima posicion del array
numeros.push(4,5,10,20,25);
console.log(numeros);
// pop() => funcion que extrae el ultimo elemento del arreglo y retorna el elemento quitado
let numero = numeros.pop();
console.log(numeros);
console.log(numero);

// concat(arreglo) => devuelve la concatenacion del arreglo actual con el arreglo recibido en la funcion
// NOTA: El arreglo original no se modifica
console.log(numeros.concat([100,200,300,400]));
console.log(numeros);

// splice(posicion, nroElementos, ?valoresAInsertar) Elimina 'nroElementos' desde la 'posicion' dada y devuelve un arreglo de elementos eliminados
// NOTA: el arreglo original SI se modifica si se envia el parametro valoresAInsertar(que puede ser uno o mas valores), entonces inyecta esos valores en la 'posicion' indicada

console.log(numeros.splice(2,2,[3,2]));
console.log(numeros);

// indexOf => su mismo comportamiento que los strings

let notas = [10,11,12,13,14,15,8,17,21]
// filter(()=>{}) => retorna un arreglo de elementos que cumplan con cierta condicion
// definicion2 => retorna un elemento de la iteracion en la que cumpla la condicion
let notasPares = notas.filter((elemento,i)=>{
    console.log(i);
    if(elemento%2==0){
        return elemento;
    }
});
// METODO NOOB - SEMANA 1
let notaspares2=[];
for (let i = 0; i < notas.length; i++) {
    if(notas[i]%2==0){
        notaspares2.push(notas[i])
    }
}

console.log(notasPares);
console.log(notaspares2);

// forEach(()=>{}) funcion que itera el arreglo de items y recibe un callback() al cual envia hasta 3 parametros (elemento, indice, arregloCompleto)
// NOTA: No retorna valores
notas.forEach((elemento,indice)=>{
    console.log(`El elemento: ${elemento}\nEsta en su posicion: ${indice}`);
});

// map(()=>{}) funcion para aplicar una formula a cada elemento del arreglo y 'retornar' un nuevo arreglo con los elementos modificados

let dobles = notas.map((elemento)=>{
    return elemento*2;
});
console.log(dobles);
