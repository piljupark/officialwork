$(document).ready(function () {
    
   
    $("nav > .nav-wrap > .mobile-menu > a > .mobile-spread").click(function(){
        
        $(".spread-mobile-menu").css("height","100vh");
        
        $("nav > .nav-wrap > .mobile-menu > a > li > .mobile-menu-img").css("display","none");
        
        $("nav > .nav-wrap > .mobile-menu > a > li > .close-img").css("display","block");
        
    });
    
    
    $("nav > .nav-wrap > .mobile-menu > a > .mobile-close").click(function(){
        
        $(".spread-mobile-menu").css("height","0vh");
        
       $("nav > .nav-wrap > .mobile-menu > a > li > .mobile-menu-img").css("display","block");
        
        $("nav > .nav-wrap > .mobile-menu > a > li > .close-img").css("display","none");
    });
        
   

})