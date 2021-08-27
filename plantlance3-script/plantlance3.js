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
       $("nav > .spread-menu").css("left","0"); 
        
    });
    
    $("nav > .spread-menu > a > .menu-close-btn").click(function(){
       $("nav > .spread-menu").css("left","-400px"); 
       
    });
    
    
    
});
