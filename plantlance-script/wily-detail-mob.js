$(document).ready(function () {

  $(".mob-option-up").click(function(){
      $(".mob-option-wrap").css("height","500px");
      $(".mob-option-up").css("display","none");
      $(".mob-option-down").css("display","block");
  });
    
    
    $(".mob-option-down").click(function(){
      $(".mob-option-wrap").css("height","80px");
      $(".mob-option-up").css("display","block");
      $(".mob-option-down").css("display","none");
  });



});
