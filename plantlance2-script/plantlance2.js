$(document).ready(function () {
    
   
    $("nav > .nav-wrap > ul > a > li").mouseenter(function(){
        $("nav > .nav-wrap").css("height","300px");
    });
    $("nav > .nav-wrap > ul > a > li").mouseleave(function(){
        $("nav > .nav-wrap").css("height","50px");
    });
   

})