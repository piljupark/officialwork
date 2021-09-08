$(document).ready(function () {
    
    $("nav > .nav-wrap > a > .menu-icon").click(function(){
        $("#nav-slide").css("width","50%");
        
        $("nav > .nav-wrap > a > .menu-icon").css("opacity","0");
    });
    
    $("#nav-slide > .nav-slide-wrap > .nav-slide-top > a > .close-button").click(function(){
       $("#nav-slide").css("width","0"); 
        
        $("nav > .nav-wrap > a > .menu-icon").css("opacity","1");
    });
})