$(document).ready(function () {

    $("#search").click(function(){
       $("#search-place").css("height","40px"); 
    });

    $(".close-img").click(function(){
       $("#search-place").css("height","0px"); 
    });
    
    $("#store").click(function(){
       $(".swiper-container").css("opacity","0"); 
       $(".swiper-container").css("animation-name","otherfadeOut"); 
       $(".swiper-container").css("animation-delay",".5s"); 
       $(".swiper-container").css("animation-fill-mode","forwards"); 
       $(".mouse").css("animation-name","fadeOut"); 
        
        
        $(".top-menu").css("opacity","0"); 
       $(".top-menu").css("animation-name","otherfadeOut"); 
       $(".top-menu").css("animation-delay",".5s"); 
       $(".top-menu").css("animation-fill-mode","forwards");
        
        
         $(".product-place").css("opacity","0"); 
       $(".product-place").css("animation-name","otherfadeOut"); 
       $(".product-place").css("animation-delay",".5s"); 
       $(".product-place").css("animation-fill-mode","forwards");
        
        
        $(".athenaeum").css("opacity","0"); 
       $(".athenaeum").css("animation-name","otherfadeOut"); 
       $(".athenaeum").css("animation-delay",".5s"); 
       $(".athenaeum").css("animation-fill-mode","forwards");
        
        
        $(".store-place").css("animation-name","storefadeIn");
        $(".store-place").css("animation-duration",".8s");
        $(".store-place").css("animation-delay",".4s");
        $(".store-place").css("animation-fill-mode","forwards");
        
        
        $("body").css("overflow-y","hidden");
    });
    
});