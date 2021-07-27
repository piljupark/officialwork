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
        
        
        $(".store-place").css("animation-name","storefadeIn");
        $(".store-place").css("animation-duration",".8s");
        $(".store-place").css("animation-delay",".4s");
        $(".store-place").css("animation-fill-mode","forwards");
    });
    
});