$(document).ready(function () {
    $("#nav > .nav-wrap > .nav-menu > .menu-title").mouseenter(function(){
        $("#nav > .nav-second-menu").css("height","300px");
        $("#nav > .nav-second-menu").css("transition",".1s");
        $("#nav > .nav-second-menu > .nav-second-menu-wrap").css("display","block");
        
    });
    
     $("#nav > .nav-second-menu").mouseleave(function(){
        $("#nav > .nav-second-menu").css("height","0px");
        $("#nav > .nav-second-menu").css("transition",".3s");
        $("#nav > .nav-second-menu > .nav-second-menu-wrap").css("display","none");
    });
});