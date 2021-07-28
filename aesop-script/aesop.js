$(document).ready(function () {

    $("#search").click(function () {
        $(".search-place").css("left", "240px");
        $(".bg-black").css("display", "block");
        
        $(".store-place").css("left", "-240px");
        
        $("body").css("overflow-y","hidden");
    });

    $(".prev").click(function () {
        $(".search-place").css("left", "-240px");
        $(".bg-black").css("display", "none");
        
        $("body").css("overflow-y","auto");
    });
    
    
    
    $("#store").click(function () {
        $(".store-place").css("left", "240px");
        $(".bg-black").css("display", "block");
        
        $(".search-place").css("left", "-240px");
        
        $("body").css("overflow-y","hidden");
    });

    $(".prev").click(function () {
        $(".store-place").css("left", "-240px");
        $(".bg-black").css("display", "none");
        
        
        $("body").css("overflow-y","auto");
    });

    

    
    
    
    /* 태블릿 스크립트 */
    if (document.body.clientWidth < 1021) {
        
        
        $("#store").click(function () {
            $(".store-place-mob").css("top", "70px");
            $(".store-place-mob").css("left", "0px");
            
            $(".search-place-mob").css("top", "-460px");
        
            $(".bg-black").css("display", "block");
            $("body").css("overflow","hidden");
        });

        $(".prev").click(function () {
            $(".store-place-mob").css("top", "-460px");
            $(".store-place-mob").css("left", "0px");
            $(".bg-black").css("display", "none");
            $("body").css("overflow-y","auto");
        });
        
        
        

        $("#search").click(function () {
            $(".search-place-mob").css("top", "70px");
            $(".search-place-mob").css("left", "0px");
            
            $(".store-place-mob").css("top", "-460px");
            
            $(".bg-black").css("display", "block");
            $("body").css("overflow","hidden");
        });

        $(".prev").click(function () {
            $(".search-place-mob").css("top", "-460px");
            $(".search-place-mob").css("left", "0px");
            $(".bg-black").css("display", "none");
            $("body").css("overflow-y","scroll");
        });
        
  
    }
    /* //태블릿 스크립트 */

    
    /* 모바일 스크립트*/
            if (document.body.clientWidth < 560) 
            {
                
                $(".mob-hamburger").click(function(){
                    $(".mob-video-wrap").css("opacity","0");
                    
                    $(".mob-logo-black").css("opacity","1");
                    $(".mob-logo-white").css("opacity","0");
                    
                    $(".mob-hamburger").css("display","none");
                    
                    $(".mob-menu-close").css("display","block");
                    
                    $(".mobile-menu").css("height","100vh");
                    
                    $("body").css("overflow-y","hidden");
                });
                
                
                $(".mob-menu-close").click(function(){
                    $(".mob-video-wrap").css("opacity","1");
                    
                    $(".mob-logo-black").css("opacity","0");
                    $(".mob-logo-white").css("opacity","1");
                    
                    $(".mob-hamburger").css("display","block");
                    
                    $(".mob-menu-close").css("display","none");
                    
                    $(".mobile-menu").css("height","0vh");
                    
                    $("body").css("overflow-y","auto");
                });
            }
            /* //모바일 스크립트 */


});
