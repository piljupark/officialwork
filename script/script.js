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
    $("#wrap > header > .model-logo > ul > .menu > .hide > li > .car").click(function(){
        $("#wrap > header > .model-logo > ul > .menu > .hide").slideUp(100);
        $("#car-info").show();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-info").hide();
    });
    $("header > .model-logo > ul > .menu > .hide > li > .suv").click(function(){
        $("header > .model-logo > ul > .menu > .hide").slideUp(100);
        $("#car-info").hide();
        $("#suv-info").show();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-info").hide();
    });
    $("header > .model-logo > ul > .menu > .hide > li > .commercial").click(function(){
        $("header > .model-logo > ul > .menu > .hide").slideUp(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").show();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-info").hide();
    });
    $("header > .model-logo > ul > .menu > .hide > li > .hybrid").click(function(){
        $("header > .model-logo > ul > .menu > .hide").slideUp(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").show();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-info").hide();
    });
    $("header > .model-logo > ul > .menu > .hide > li > .performance").click(function(){
        $("header > .model-logo > ul > .menu > .hide").slideUp(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").show();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-info").hide();
    });
    $("header > .model-logo > ul > .menu > .hide > li > .truck").click(function(){
        $("header > .model-logo > ul > .menu > .hide").slideUp(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").show();
        $("#future-info").hide();
        $("#home-info").hide();
    });
    $("header > .model-logo > ul > .menu > .hide > li > .future").click(function(){
        $("header > .model-logo > ul > .menu > .hide").slideUp(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").show();
        $("#home-info").hide();
    });
});