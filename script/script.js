$(document).ready(function(){ 
  $(window).scroll(function(){ 
    var scroll = $(window).scrollTop(); 
    if(scroll>1){ 
      $("header").css("background","rgba(0, 0, 0, .8)"); 
 
    } 
    else{ 
      $("header").css("background","rgba(0, 0, 0, .1)"); 
    }
  });
    $("#wrap > header > .model-logo").mouseenter(function(){
        $("#model-form").show(300);
    });
     $("#model-form > .model-list > a > .car").mouseenter(function(){
        $("#int-car").show(300);
        $("#model-form").hide();
    });
});