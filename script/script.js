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
    $(".menu>a").click(function(){
        var submenu = $(this).next("ul");
        if( submenu.is(":visible") ){
            submenu.slideUp(100);
        }else{
            submenu.slideDown(100);
        }
    });
    $("header > .model-logo > ul > .menu > .hide > li > .car").click(function(){
        $("header > .model-logo > ul > .menu > .hide").slideUp(100);
        $(".car-info").show();
    })
});