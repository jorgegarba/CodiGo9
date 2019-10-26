// JSON
// JavaScript Object Notation

/*

// Crea un Objeto
let vehiculo = {
    llantas: 4,
    motor: '1800cc',
    placa: 'V2Z666',
    marca: 'Peugeot'
};
// console.log(vehiculo.motor);

// MODIFICAR SUS VALORES
vehiculo.llantas = 5;
console.log(vehiculo);

let persona = {
    nombre: 'Juancito',
    apellido: 'Jimenez',
    colores_favoritos: ['Rojo', 'Melon', 'Rosado']
}
console.log(persona.colores_favoritos);

let album_de_musica = {
    anio: 2019,
    autor: 'GianMarco',
    nombre: 'Resistir',
    cancion: [
        {
            titulo: 'Cancion 1',
            duracion: 3.50
        },
        {
            titulo: 'Cancion 2',
            duracion: 4.20
        }
    ]
}
// Imprimir el titulo de la segunda cancion del album 
console.log(album_de_musica.cancion[1].titulo);

let restaurante = {
    nombre: 'Nuestra Picanteria',
    direccion: 'Av Siempre Viva',
    tenedores: 5,
    pedidos: [
        {
            id: 1,
            plato: 'Lomo Saltado'
        },
        {
            id: 2,
            plato: 'Pastel de Papa con Rocoto Relleno'
        }
    ],
    mostrarPedidos: () => {
        console.log("Mostrando los pedidos");
        console.log(restaurante.pedidos);
    }
}
restaurante.mostrarPedidos();

// Un objeto dentro de otro objeto
let libro = {
    autor: 'Alfredo Bryce Echenique',
    titulo: 'Un mundo para Julius',
    editorial: {
        nombre: 'Seix Barral',
        anioPub: '1970'
    }
}
console.log(libro.editorial.anioPub);
*/

// Crear un objeto de nombre objFactura, que tenga la estructura de una factura
/**
 * 1. cabecera(objecto)
 *      1.1 ruc(string)
 *      1.2 razonSocial (string)
 *      1.3 fecha (string)
 *      1.4 nro_factura (string)
 * 2. detalle (arreglo de objetos)
 *  Cada objeto dentro del detalle debera tener lo siguiente:
 *      2.1 cantidad (numero)
 *      2.2 descripcion (string)
 *      2.3 precioUnit (float)
 *      2.4 total (float)
 * 3. pie_factura
 *      3.1 valor_venta(float)
 *      3.2 igv (float)
 * 4. totalFactura (numero)
 * 5. agregarDetalle(funcion)
 *  agregar un objeto de tipo detalle al arreglo de detalles
 */
let objFactura = {
    cabecera: {
        // ruc: '',
        // razonSocial: '',
        // fecha: '',
        // nro: ''
    },
    detalles: [
        // {
        //     cant: 0,
        //     descripcion: "",
        //     precioUnit: 0,
        //     total: 0,
        // },
        // {
        //     cant: 0,
        //     descripcion: "",
        //     precioUnit: 0,
        //     total: 0,
        // }
    ],
    pie_factura: {
        // igv:0,
        // valor_venta:0
    },
    // totalFactura:0,
    agregarDetalle: () => {
        let totalGeneral = 0;
        let productos = +prompt("Ingrese la cantidad de productos")
        for (let producto = 0; producto < productos; producto++) {

            let cant = +prompt(`Ingrese la cantidad ${producto + 1}`);
            let descripcion = prompt(`Ingrese la descripcion ${producto + 1}`);
            let precioUnit = +prompt(`Ingrese el precio unitario ${producto + 1}`);
            let total = cant * precioUnit;
            totalGeneral += total;
            let detalleTmp = {
                cant,
                descripcion: descripcion,
                precioUnit: precioUnit,
                total: total
            };
            objFactura.detalles.push(detalleTmp);
        }
        // Agregar campos a un objeto
        objFactura.pie_factura.igv = totalGeneral * 0.18
        objFactura.pie_factura.valor_venta = totalGeneral - objFactura.pie_factura.igv
        objFactura.totalFactura = totalGeneral
    },
    agregarCabecera: () => {
        let cabeceraTmp = {
            ruc: prompt("Ingrese el ruc"),
            razonSocial: prompt("Ingrese la razon social"),
            fecha: prompt("Ingrese su fecha"),
            nro: prompt("Ingrese el nro de la factura")
        };
        objFactura.cabecera = cabeceraTmp;
        objFactura.agregarDetalle();
    }
}
objFactura.agregarCabecera();
console.log(objFactura);
