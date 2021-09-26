$(document).ready(function(){
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
});
$("#enviarCorreo").click(function(){
  alert("El correo fue enviado correctamente...")
});

$("h4").on("click",function(element){
  $(element.target).addClass("text-danger");
});

$(".card-title").dbclick(function(){
  $(".card-text").toggle();
});
