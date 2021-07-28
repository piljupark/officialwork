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
            $(".store-place-mob").css("top", "90px");
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
            $(".search-place-mob").css("top", "90px");
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



});
