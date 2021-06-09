$(document).ready(function () {
    $("#stage > .main-wrap > .myinfo-btn").click(function () {
        $("#stage > .main-wrap > .myinfo").css("margin-top", "0px");
        $("#stage > .main-wrap > .myinfo-btn").css("background-color", "#292929");
        $("#stage > .main-wrap > .myinfo-btn > img").css("opacity", "1");
    });

    $("#stage > .main-wrap > .myinfo > .prev").click(function () {
        $("#stage > .main-wrap > .myinfo").css("margin-top", "-250px");
        $("#stage > .main-wrap > .myinfo-btn").css("background-color", "#939597");
    });
    
    $("#naverMap").hover(function(){
        $("#stage > .main-wrap > .taxiinfo").css("height","200px");
    });
    
    $("#stage > .main-wrap > .taxiinfo").hover(function(){
        $("#stage > .main-wrap > .taxiinfo").css("height","300px");
    });
    
    $("#stage > .main-wrap > .myinfo > .login-wrap > .login").click(function(){
        $("#stage > .main-wrap > .myinfo").css("background","rgba(255, 255, 255, 0.2)");
        $("#stage > .main-wrap > .myinfo").css("backdrop-filter","blur(5px)");
        $("#stage > .main-wrap > .myinfo").css("-webkit-backdrop-filter","blur(5px)");
        $("#stage > .main-wrap > .myinfo").css("-moz-backdrop-filter","blur(5px)");
        
        
        $("#stage > .main-wrap > .myinfo > .login-wrap").css("animation-duration",".6s");
        $("#stage > .main-wrap > .myinfo > .login-wrap").css("animation-name","slideLeft");
        
        
        $("#stage > .main-wrap > .myinfo > .sign-up > p").css("opacity","0");
        $("#stage > .main-wrap > .myinfo > .into-sign-up").css("opacity","1");
        
        $("#stage > .main-wrap > .myinfo > .into-info").css("opacity","1");
    });
});
