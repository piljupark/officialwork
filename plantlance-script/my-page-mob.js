$(document).ready(function () {
    $(".mob-pw-change").click(function(){
        $("html").css("overflow-y","hidden");
        
        $(".mob-pw-change-wrap").css("display","block");
    });
    
    $(".mob-pw-change-cancel").click(function(){
        $("html").css("overflow-y","auto");
        
        $(".mob-pw-change-wrap").css("display","none");
    });
});