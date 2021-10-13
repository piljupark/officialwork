$(document).ready(function () {
    $(".change-pw-button").click(function(){
       $(".after-push-change").css("display","block"); 
    });
    
    $(".user-pw-change-bottom-button-wrap .prev-button").click(function(){
        $(".after-push-change").css("display","none"); 
    });
    
    
    
    $(".user-delete-button").click(function(){
       $(".after-push-delete").css("display","block"); 
    });
    
    $(".user-delete-bottom-button-wrap .prev-button").click(function(){
        $(".after-push-delete").css("display","none"); 
    });
    
});