$(document).ready(function(){

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$("#alertCorreo").click(function(){
  $("button").alert-success("esta es una alerta");
});
//$("#preparation").click(function(){
//  $("#preparation").css( color: red;)
//});

});