// creando la referencia a la BD realtime
let database = firebase.database();
let dibujarProductos = (productos) => {
  $("#contenido").html('');
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
    $('#cargando').attr('hidden','hidden');
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
    $('#selectCategoria').html('');
    snapshot.forEach((categoria)=>{
      console.log(categoria.val()[2]);
      let opcion = $('<option id="'+categoria.val().codigo+'">'+categoria.val().nombre+'</option>')
      // opcion.attr('value',categoria.val().codigo);
      $('#selectCategoria').append(opcion);
    })
  })
}
$('#btnAdd').click(function(e){
  e.preventDefault();
  let nuevoProducto = {
    nombre:$('#inputNombre').val(),
    precio: $('#inputPrecio').val(),
    categoria:{
      codigo:$('#selectCategoria').children("option:selected").attr("id"),
      nombre:$('#selectCategoria').children("option:selected").val()
    }
  }
  // esto crea una llave autogenerada por firebase y nunca se va a repetir, no es autoincrementable ni numerica
  // AQUI SE HACE EL CREAR EN UN NODO DE FIREBASE
  let key = database.ref().child('productos').push().key;
  database.ref('productos/'+key).set(nuevoProducto,function(error){
    if(error){
      console.log(error);
    }else{
      console.log('Se agrego con exito el producto');
      // Para resetear el formulario
      $('#formularioAgregar').trigger("reset");
      // Para ocultar el modal
      $('#modalAgregar').modal('toggle');
      Swal.fire({
        title: 'Exito!',
        text: 'Se agrego con exito el producto',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })
  console.log(nuevoProducto);
  

})
traerCategorias();
traerProductosRealTime();