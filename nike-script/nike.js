$(document).ready(function () {
    $(".button-info").mouseenter(function(){
         
         $(".right-button > a > .button-info >  .button-black").css("opacity","0");
         $(".right-button > a > .button-info >  .button-white").css("opacity","1");
        $(".button-info").css("background-color","#292929");
    });
    
    $(".button-info").mouseleave(function(){
         $(".button-info").css("background-color","#fff");
         $(".right-button > a > .button-info >  .button-black").css("opacity","1");
         $(".right-button > a > .button-info > .button-white").css("opacity","0");
    });
    /*  //  button-info    */
    
    
    
     $(".button-user").mouseenter(function(){
         
         $(".right-button > a > .button-user > .button-black").css("opacity","0");
         $(".right-button > a > .button-user > .button-white").css("opacity","1");
        $(".button-user").css("background-color","#292929");
         
    });
    
    $(".button-user").mouseleave(function(){
         $(".button-user").css("background-color","#fff");
         $(".right-button > a > .button-user > .button-black").css("opacity","1");
         $(".right-button > a > .button-user > .button-white").css("opacity","0");
         
    });
    /*  //  button-user    */
    
    
    
    
    
     $(".button-bag").mouseenter(function(){
         
         $(".right-button >  a > .button-bag >.button-black").css("opacity","0");
         $(".right-button > a > .button-bag > .button-white").css("opacity","1");
        $(".button-bag").css("background-color","#292929");
    });
    
    $(".button-bag").mouseleave(function(){
         $(".button-bag").css("background-color","#fff");
         $(".right-button > a > .button-bag > .button-black").css("opacity","1");
         $(".right-button > a > .button-bag > .button-white").css("opacity","0");
    });
    /*  //  button-bag    */
    
    
    
    
    
     $(".button-heart").mouseenter(function(){
         
         $(".right-button > a > .button-heart > .button-black").css("opacity","0");
         $(".right-button > a > .button-heart > .button-white").css("opacity","1");
        $(".button-heart").css("background-color","#292929");
    });
    
    $(".button-heart").mouseleave(function(){
         $(".button-heart").css("background-color","#fff");
         $(".right-button > a > .button-heart > .button-black").css("opacity","1");
         $(".right-button > a > .button-heart > .button-white").css("opacity","0");
    });
    /*  //  button-heart    */
    
    
    
});