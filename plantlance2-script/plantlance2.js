$(document).ready(function () {
    $(".global-menu-button").click(function(){
        $("body").css("overflow-y","hidden");
        
        $("nav").css("z-index","8");
        
        $("#spread-menu").css("right","0");
        
        $("#click-to-black").css("z-index","9");
        $("#click-to-black").css("opacity","1");
        
      
        
    });
   
    $(".close-button").click(function(){
        $("body").css("overflow-y","auto");
        
        $("nav").css("z-index","10");
        
        $("#spread-menu").css("right","-300px");
        
        $("#click-to-black").css("opacity","0");
        $("#click-to-black").css("z-index","4");
        
        
        
    });

})