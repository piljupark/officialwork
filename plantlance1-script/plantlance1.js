$(document).ready(function () {
    $("nav > .nav-wrap > .mobile-menu > a > .mobile-spread").click(function(){
        $("body").css("overflow","hidden");
        
        $(".spread-mobile-menu").css("height","100vh");
        
        $("nav > .nav-wrap > .mobile-menu > a > li > .mobile-menu-img").css("transition-duration",".1s");
        $("nav > .nav-wrap > .mobile-menu > a > li > .mobile-menu-img").css("opacity","0");
        $("nav > .nav-wrap > .mobile-menu > a > li > .mobile-menu-img").css("z-index","2");
        
        $("nav > .nav-wrap > .mobile-menu > a > li > .close-img").css("transition-duration",".3s");
        $("nav > .nav-wrap > .mobile-menu > a > li > .close-img").css("opacity","1");
        $("nav > .nav-wrap > .mobile-menu > a > li > .close-img").css("z-index","3");
    });
    
    
    $("nav > .nav-wrap > .mobile-menu > a > .mobile-close").click(function(){
        $("body").css("overflow-y","auto");
        
        $(".spread-mobile-menu").css("height","0vh");
        
        $("nav > .nav-wrap > .mobile-menu > a > li > .mobile-menu-img").css("transition-duration",".3s");
        $("nav > .nav-wrap > .mobile-menu > a > li > .mobile-menu-img").css("opacity","1");
        $("nav > .nav-wrap > .mobile-menu > a > li > .mobile-menu-img").css("z-index","3");
        
        $("nav > .nav-wrap > .mobile-menu > a > li > .close-img").css("transition-duration",".1s");
        $("nav > .nav-wrap > .mobile-menu > a > li > .close-img").css("opacity","0");
        $("nav > .nav-wrap > .mobile-menu > a > li > .close-img").css("z-index","2");
    });

})