$(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true
    });
    
    $('.main-logo').on('click',function(){
        $.fn.fullpage.moveTo(1);
    });

    //methods

    
    $("nav > .nav-wrap > .menu-circle > a > .menu-btn").click(function(){
       $("nav > .spread-menu").css("top","0"); 
    });
    
    $("nav > .spread-menu > .spread-menu-wrap > a > .menu-close-btn").click(function(){
       $("nav > .spread-menu").css("top","-500px"); 
    });
});
