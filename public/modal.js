$(document).ready(function() {

  $("#final_CheckOut").hide();

  $("#yourCart").on("click", function(){
    $("#final_CheckOut").show();
  });
  $(".close").on("click", function(){
    $("#final_CheckOut").hide();
  });

});