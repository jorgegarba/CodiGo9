let database = firebase.database();
let dibujarChart = () => {
    
    let productos = database.ref('productos');
    let categorias = database.ref('categorias');
    productos.on('value',(snapshotProductos)=>{
        categorias.once('value').then((snapshotCategorias)=>{
            let arrayCategorias = [];
            // Aqui itero mis categorias y las agrego a mi arreglo de categorias
            snapshotCategorias.forEach((categoria)=>{
                arrayCategorias.push(categoria.val().nombre);
            })
            console.log(arrayCategorias);
            let ppcategoria=[];
            let arrayProductos=[];
            snapshotProductos.forEach((producto)=>{
                arrayProductos.push(producto.val());
            })
            console.log(arrayProductos);
            for (let i = 0; i < arrayCategorias.length; i++) {
                // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
                ppcategoria[i] = (arrayProductos.filter(producto=> producto.categoria.nombre == arrayCategorias[i])).length;
            }
            console.log(ppcategoria);
            var ctx = document.getElementById('miGrafico').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: arrayCategorias,
                    datasets: [{
                        data: ppcategoria,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 10
                    }]
                },
                options: {
                    title:{
                        display: true,
                        text: 'Productos por categoria'
                    }
                }
            });
        })
    })

  

}

dibujarChart();