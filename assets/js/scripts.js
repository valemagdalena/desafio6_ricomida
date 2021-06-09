$(function(){

    $('[data-toggle="tooltip"]').tooltip()

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
      });

    $(".rojo").on("dblclick", function() {
        $(this).css("color","red");
      });

      $("#carta1, #carta2, #carta3").click(function(){
        $("p").toggle();
      });
      
      
})
