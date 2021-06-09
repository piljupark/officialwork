$(document).ready(function () {
    
    $("header > .top-menu > a:nth-child(1) > img").click(function(){
        $("header > .top-menu > a:nth-child(1)").css("opacity","0");
        $("header > .top-menu > a:nth-child(1)").css("transition-duration",".2s");
        $("header > .top-menu > a:nth-child(2)").css("opacity","1");
        $("header > .top-menu > a:nth-child(2)").css("transition-duration",".5s");
        
        $("header").css("height","700px");
        $("body").css("overflow-y","hidden");
        $("header").css("transition-duration",".6s");
        $("header").css("background","rgba(255, 255, 255, 0.2");
        $("header").css("backdrop-filter","blur(20px)");
        $("header").css("-webkit-backdrop-filter","blur(20px)");
        $("header").css("-moz-backdrop-filter","blur(20px)");
    });
    
    
    
    $("header > .top-menu > a:nth-child(2) > img").click(function(){
        $("header > .top-menu > a:nth-child(1)").css("opacity","1");
        $("header > .top-menu > a:nth-child(1)").css("transition-duration",".5s");
        $("header > .top-menu > a:nth-child(2)").css("opacity","0");
        $("header > .top-menu > a:nth-child(2)").css("transition-duration",".2s");
        
        $("header").css("height","60px");
        $("body").css("overflow-y","auto");
        $("header").css("transition-duration",".3s");
        $("header").css("background","rgba(255, 255, 255, 0");
        $("header").css("backdrop-filter","blur(0px)");
        $("header").css("-webkit-backdrop-filter","blur(0px)");
        $("header").css("-moz-backdrop-filter","blur(0px)");
    });
    
    $("header > .category > .category1 > a:nth-child(1)").click(function(){
        $("header > .category > .category1 > a:nth-child(1)").css("color","#004d67");
        $("header > .category > .category1 > a:nth-child(2)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(3)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(4)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(5)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(6)").css("color","#292929");
        
        $("header > .category > .category1 > a:nth-child(1)").css("font-family","AppleSDGothicNeoM");
        $("header > .category > .category1 > a:nth-child(2)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(3)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(4)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(5)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(6)").css("font-family","AppleSDGothicNeoT");
    });
    
     $("header > .category > .category1 > a:nth-child(2)").click(function(){
        $("header > .category > .category1 > a:nth-child(1)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(2)").css("color","#004d67");
        $("header > .category > .category1 > a:nth-child(3)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(4)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(5)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(6)").css("color","#292929");
        
        $("header > .category > .category1 > a:nth-child(1)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(2)").css("font-family","AppleSDGothicNeoM");
        $("header > .category > .category1 > a:nth-child(3)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(4)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(5)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(6)").css("font-family","AppleSDGothicNeoT");
    });
    
     $("header > .category > .category1 > a:nth-child(3)").click(function(){
        $("header > .category > .category1 > a:nth-child(1)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(2)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(3)").css("color","#004d67");
        $("header > .category > .category1 > a:nth-child(4)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(5)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(6)").css("color","#292929");
        
        $("header > .category > .category1 > a:nth-child(1)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(2)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(3)").css("font-family","AppleSDGothicNeoM");
        $("header > .category > .category1 > a:nth-child(4)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(5)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(6)").css("font-family","AppleSDGothicNeoT");
    });
    
    $("header > .category > .category1 > a:nth-child(4)").click(function(){
        $("header > .category > .category1 > a:nth-child(1)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(2)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(3)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(4)").css("color","#004d67");
        $("header > .category > .category1 > a:nth-child(5)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(6)").css("color","#292929");
        
        $("header > .category > .category1 > a:nth-child(1)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(2)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(3)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(4)").css("font-family","AppleSDGothicNeoM");
        $("header > .category > .category1 > a:nth-child(5)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(6)").css("font-family","AppleSDGothicNeoT");
    });
    
    $("header > .category > .category1 > a:nth-child(5)").click(function(){
        $("header > .category > .category1 > a:nth-child(1)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(2)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(3)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(4)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(5)").css("color","#004d67");
        $("header > .category > .category1 > a:nth-child(6)").css("color","#292929");
        
        $("header > .category > .category1 > a:nth-child(1)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(2)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(3)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(4)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(5)").css("font-family","AppleSDGothicNeoM");
        $("header > .category > .category1 > a:nth-child(6)").css("font-family","AppleSDGothicNeoT");
    });
    
    
    $("header > .category > .category1 > a:nth-child(6)").click(function(){
        $("header > .category > .category1 > a:nth-child(1)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(2)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(3)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(4)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(5)").css("color","#292929");
        $("header > .category > .category1 > a:nth-child(6)").css("color","#004d67");
        
        $("header > .category > .category1 > a:nth-child(1)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(2)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(3)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(4)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(5)").css("font-family","AppleSDGothicNeoT");
        $("header > .category > .category1 > a:nth-child(6)").css("font-family","AppleSDGothicNeoM");
    });
    
    
    
    
    
    
    
    
    $("#main-btn > .button:nth-child(1)").click(function(){
        $("#main-btn > .button:nth-child(1)").css("background-color","#292929");
        $("#main-btn > .button:nth-child(1)").css("color","#fff");
        
        $("#main-btn > .button:nth-child(n+2):nth-child(-n+4)").css("background-color","rgba(255,255,255,0)");
        $("#main-btn > .button:nth-child(n+2):nth-child(-n+4)").css("color","#292929");
        
        $("#main-img > a:nth-child(1) > img").css("opacity","1");
        $("#main-img > a:nth-child(n+2):nth-child(-n+4) > img").css("opacity","0");
    });
    
    $("#main-btn > .button:nth-child(2)").click(function(){
        $("#main-btn > .button:nth-child(2)").css("background-color","#292929");
        $("#main-btn > .button:nth-child(2)").css("color","#fff");
        
        
        $("#main-btn > .button:nth-child(1)").css("background-color","rgba(255,255,255,0.1)");
        $("#main-btn > .button:nth-child(1)").css("color","#292929");
        $("#main-btn > .button:nth-child(n+3):nth-child(-n+4)").css("background-color","rgba(255,255,255,0.1)");
        $("#main-btn > .button:nth-child(n+3):nth-child(-n+4)").css("color","#292929");
        
        $("#main-img > a:nth-child(2) > img").css("opacity","1");
        $("#main-img > a:nth-child(1) > img").css("opacity","0");
        $("#main-img > a:nth-child(3) > img").css("opacity","0");
        $("#main-img > a:nth-child(4) > img").css("opacity","0");
    });
    
     $("#main-btn > .button:nth-child(3)").click(function(){
        $("#main-btn > .button:nth-child(3)").css("background-color","#292929");
        $("#main-btn > .button:nth-child(3)").css("color","#fff");
        
        $("#main-btn > .button:nth-child(n+1):nth-child(-n+2)").css("background-color","rgba(255,255,255,0)");
        $("#main-btn > .button:nth-child(n+1):nth-child(-n+2)").css("color","#292929");
         $("#main-btn > .button:nth-child(4)").css("background-color","rgba(255,255,255,0)");
        $("#main-btn > .button:nth-child(4)").css("color","#292929");
        
        $("#main-img > a:nth-child(3) > img").css("opacity","1");
        $("#main-img > a:nth-child(n+1):nth-child(-n+2) > img").css("opacity","0");
         $("#main-img > a:nth-child(4) > img").css("opacity","0");
    });
    
    $("#main-btn > .button:nth-child(4)").click(function(){
        $("#main-btn > .button:nth-child(4)").css("background-color","#292929");
        $("#main-btn > .button:nth-child(4)").css("color","#fff");
        
        $("#main-btn > .button:nth-child(n+1):nth-child(-n+3)").css("background-color","rgba(255,255,255,0)");
        $("#main-btn > .button:nth-child(n+1):nth-child(-n+3)").css("color","#292929");
        
        $("#main-img > a:nth-child(4) > img").css("opacity","1");
        $("#main-img > a:nth-child(n+1):nth-child(-n+3) > img").css("opacity","0");
    });
});