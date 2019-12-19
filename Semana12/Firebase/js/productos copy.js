// creando la referencia a la BD realtime
let database = firebase.database();


let traerProductosRealTime = () => {
  // creando una referencia al nodo 'productos'
  let refProductos = database.ref('productos');


  // OPCION 1
  // Leer la data en JSON
  // refProductos.on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // });

  // OPCION 2
  // Leer la data en JSON y transformarla en un arreglo
  // de Objetos

  refProductos.on('value', (snapshot) => {

    let productos = [];

    snapshot.forEach((objProducto) => {
      let producto = {
        id: objProducto.key,
        nombre: objProducto.val().nombre,
        precio: objProducto.val().precio,
        categoria: objProducto.val().categoria
      }
      productos.push(producto);
    });
    console.log(productos);
  })
}

// traerProductosRealTime();

let traerProductosOnce = () => {

  let refProductos = database.ref('productos');
  refProductos.once('value').then((snapshot) => {
    let productos = [];
    snapshot.forEach((objProducto) => {
      let producto = {
        id: objProducto.key,
        nombre: objProducto.val().nombre,
        precio: objProducto.val().precio,
        categoria: objProducto.val().categoria
      }
      productos.push(producto);
    });
    console.log(productos);
  })
}

traerProductosOnce();