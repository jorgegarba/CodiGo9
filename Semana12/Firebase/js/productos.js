// creando la referencia a la BD realtime
let database = firebase.database();

let dibujarProductos = (productos) => {

  let miTabla = $(`<table id='miTabla' class='display'>
                        <thead>
                          <tr>
                              <th>Id</th>
                              <th>Nombre del Producto</th>
                              <th>Precio</th>
                              <th>Categoría</th>
                          </tr>
                        </thead>
                        
                    </table>`);

  let tbody = $("<tbody></tbody>");
  productos.forEach((p) => {
    let fila = $(`<tr>
                    <td>${p.id}</td>
                    <td>${p.nombre}</td>
                    <td>${p.precio}</td>
                    <td>${p.categoria.nombre}</td>
                  </tr>`);
    tbody.append(fila);
  });
  miTabla.append(tbody);
  $("#contenido").append(miTabla);

  miTabla.DataTable();

}


let traerProductosRealTime = () => {
  // Crean una ferencia al nodo 'productos'
  let refProductos = database.ref('productos');

  // Nos suscribimos al consumo de datos en tiempo real
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
    dibujarProductos(productos);
  })
}
let traerCategorias = ()=>{
  let refCategorias = database.ref('categorias');
  // para traer una vez es => once
  // para quedarse escuchando => on
  refCategorias.on('value',(snapshot)=>{
    snapshot.forEach((categoria)=>{
      console.log(categoria.val()[2]);
      let opcion = $('<option id="'+categoria.val().codigo+'">'+categoria.val().nombre+'</option>')
      $('#selectCategoria').append(opcion);
    })

  })
}
traerCategorias();
traerProductosRealTime();