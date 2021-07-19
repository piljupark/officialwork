$(document).ready(function () {
   $(".main-box > .main-wrap > .mode > .button-wrap > .button > .dark-btn").click(function(){
       $(".main-box > .main-wrap > .mode > .button-wrap > .button > .dark-btn").css("z-index","-1");
       $(".main-box > .main-wrap > .mode > .button-wrap > .button > .light-btn").css("z-index","11");
       
       $(".main-box > .main-wrap > .mode > .button-wrap > .button").css("animation-name","darkMode");
       $(".main-box > .main-wrap > .mode > .button-wrap > .button").css("animation-duration",".6s");
       $(".main-box > .main-wrap > .mode > .button-wrap > .button").css("animation-fill-mode","forwards");
       
       $(".main-box > .main-wrap > .mode > .button-wrap > .dark").css("opacity","0");
       $(".main-box > .main-wrap > .mode > .button-wrap > .light").css("opacity","1");
       
       
       $(".main-box > .main-wrap > .mode > .button-wrap").css("background-color","#ccc");
       
       
       
       
       
       $(".main-box > .main-wrap > .txt-box").css("background-color","#292929");
       $(".main-box > .main-wrap > .txt-box").css("border","1px solid #aaa");
       
       $("body").css("background-color","#292929");
       $("a,p,li").css("color","#fafafa");
       
       
       $("nav > .nav-wrap > a > .logo").css("color","#6c91a1");
   });
    
    
    $(".main-box > .main-wrap > .mode > .button-wrap > .button > .light-btn").click(function(){
        $(".main-box > .main-wrap > .mode > .button-wrap > .button > .light-btn").css("z-index","-1");
        $(".main-box > .main-wrap > .mode > .button-wrap > .button > .dark-btn").css("z-index","11");
        
        
       $(".main-box > .main-wrap > .mode > .button-wrap > .button").css("animation-name","lightMode");
       $(".main-box > .main-wrap > .mode > .button-wrap > .button").css("animation-duration",".6s");
       $(".main-box > .main-wrap > .mode > .button-wrap > .button").css("animation-fill-mode","forwards");
       
       $(".main-box > .main-wrap > .mode > .button-wrap > .dark").css("opacity","1");
       $(".main-box > .main-wrap > .mode > .button-wrap > .light").css("opacity","0");
       
       
       
       
       
       $(".main-box > .main-wrap > .txt-box").css("background-color","#fff");
       $(".main-box > .main-wrap > .txt-box").css("border","none");
        
         
       $(".main-box > .main-wrap > .mode > .button-wrap").css("background-color","#fff");
       $(".main-box > .main-wrap > .mode").css("background-color","#abe9fc");
        
        $("body").css("background-color","#ebf9ff");
        $("a,p,li").css("color","#292929");
        
        
        $("nav > .nav-wrap > a > .logo").css("color","#0073a3");
   });
});
