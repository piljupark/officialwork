$(document).ready(function () {
    $("#login > .login-wrap >.login-type > .user").click(function(){
        $("#login > .login-wrap >.login-type > .user").css("border","2px solid #292929");
        $("#login > .login-wrap >.login-type > .user").css("border-bottom","none");
        $("#login > .login-wrap >.login-type > .user > a > .user-button").css("color","#292929");
        $("#login > .login-wrap > .user-login").css("display","block");
        
        $("#login > .login-wrap > .customer-login").css("display","none");
        $("#login > .login-wrap >.login-type > .not-a-user").css("border","1px solid #999");
        $("#login > .login-wrap >.login-type > .not-a-user").css("border-left","none");
        $("#login > .login-wrap >.login-type > .not-a-user > a > .not-a-user-button").css("color","#999");
    });
    
    
    
    $("#login > .login-wrap >.login-type > .not-a-user").click(function(){
        $("#login > .login-wrap >.login-type > .user").css("border","1px solid #999");
        $("#login > .login-wrap >.login-type > .user").css("border-right","none");
        $("#login > .login-wrap >.login-type > .user > a > .user-button").css("color","#999");
        $("#login > .login-wrap > .user-login").css("display","none");
        
        $("#login > .login-wrap > .customer-login").css("display","block");
        $("#login > .login-wrap >.login-type > .not-a-user").css("border","2px solid #292929");
        $("#login > .login-wrap >.login-type > .not-a-user").css("border-bottom","none");
        $("#login > .login-wrap >.login-type > .not-a-user > a > .not-a-user-button").css("color","#292929");
    });
});