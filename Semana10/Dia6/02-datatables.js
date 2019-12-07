$("#miTabla").DataTable(
  {
    language: {
      paginate: {
        first: "Primera",
        last: "Ultima",
        next: "Siguiente",
        previous: "Anterior"
      },
      lengthMenu: "Mostrar _MENU_ filas",
      info: "Mostrando _START_ al _END_ de _TOTAL_ registros",
    }
  }
);