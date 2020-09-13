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
});