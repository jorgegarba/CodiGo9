$(".miSelect2").select2();
$("#selectMascota").change(function () {
  let valorSeleccionado = $("#selectMascota").val();
  if (valorSeleccionado == 0) {
    $("#helperSelect").removeAttr("hidden");
  } else {
    $("#helperSelect").attr("hidden", "hidden");
  }
})