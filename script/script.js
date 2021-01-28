$(document).ready(function () {
    
    $(".menu-btn>a").on("click",function(){
        $(".click-to-black").show();
        $(".sidebar-menu").show();
        $(".sidebar-menu").animate({
            right:0
        });
        $("body").css("overflow-y","hidden");
        $("html").css("overflow-y","hidden");
        $(".header").css("z-index","8");
    });
    $(".close-btn>a").on("click",function(){
        $(".click-to-black").hide();
        $(".sidebar-menu").hide();
        $(".sidebar-menu").animate({
            right:"-" + 65 + "%"
        });
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
    });
    $(".click-to-black").on("click",function(){
        $(".click-to-black").hide();
        $(".sidebar-menu").hide();
        $(".sidebar-menu").animate({
            right:"-" + 65 + "%"
        });
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
    })
    
    $(".sidebar-menu > .menu-wrap > li > .car").click(function () {
        $("#car-info").css("height","810px");
        $(".sidebar-menu").hide(100);
        $("#car-info").show();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .suv").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").css("height","810px");
        $("#suv-info").show();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .commercial").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").css("height","810px");
        $("#commercial-info").show();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .hybrid").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").css("height","810px");
        $("#hybrid-info").show();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
        
    });
    $(".sidebar-menu > .menu-wrap > li > .performance").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").css("height","810px");
        $("#performance-info").show();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .truck").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").css("height","810px");
        $("#truck-info").show();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .future").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").css("height","810px");
        $("#future-info").show();
        $("#parts").hide();
        $("#maintain").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .parts-service").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").css("display","block");
        $("#maintain").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .maintain").click(function(){
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").css("display","block");
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    
    
    $("#maintain > .maintain-menu > a > .menu1").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","block");
        $("#maintain > .maintain-menu > a > .mention1").css("transition-delay",".4s");
        $("#maintain > .maintain-menu > a > .mention2").css("display","none");
        $("#maintain > .maintain-menu > a > .mention3").css("display","none");
        $("#maintain > .maintain-menu > a > .mention4").css("display","none");
        $("#maintain > .maintain-menu > a > .mention5").css("display","none");
        $("#maintain > .maintain-menu > a > .mention6").css("display","none");
        $("#maintain > .maintain-menu > a > .mention7").css("display","none");
        $("#maintain > .maintain-menu > a > .mention8").css("display","none");
        $("#maintain > .maintain-menu > a > .mention9").css("display","none");
    });
    $("#maintain > .maintain-menu > a > .menu2").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","none");
        $("#maintain > .maintain-menu > a > .mention2").css("display","block");
        $("#maintain > .maintain-menu > a > .mention3").css("display","none");
        $("#maintain > .maintain-menu > a > .mention4").css("display","none");
        $("#maintain > .maintain-menu > a > .mention5").css("display","none");
        $("#maintain > .maintain-menu > a > .mention6").css("display","none");
        $("#maintain > .maintain-menu > a > .mention7").css("display","none");
        $("#maintain > .maintain-menu > a > .mention8").css("display","none");
        $("#maintain > .maintain-menu > a > .mention9").css("display","none");
    });
    $("#maintain > .maintain-menu > a > .menu3").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","none");
        $("#maintain > .maintain-menu > a > .mention2").css("display","none");
        $("#maintain > .maintain-menu > a > .mention3").css("display","block");
        $("#maintain > .maintain-menu > a > .mention4").css("display","none");
        $("#maintain > .maintain-menu > a > .mention5").css("display","none");
        $("#maintain > .maintain-menu > a > .mention6").css("display","none");
        $("#maintain > .maintain-menu > a > .mention7").css("display","none");
        $("#maintain > .maintain-menu > a > .mention8").css("display","none");
        $("#maintain > .maintain-menu > a > .mention9").css("display","none");
    });
    $("#maintain > .maintain-menu > a > .menu4").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","none");
        $("#maintain > .maintain-menu > a > .mention2").css("display","none");
        $("#maintain > .maintain-menu > a > .mention3").css("display","none");
        $("#maintain > .maintain-menu > a > .mention4").css("display","block");
        $("#maintain > .maintain-menu > a > .mention5").css("display","none");
        $("#maintain > .maintain-menu > a > .mention6").css("display","none");
        $("#maintain > .maintain-menu > a > .mention7").css("display","none");
        $("#maintain > .maintain-menu > a > .mention8").css("display","none");
        $("#maintain > .maintain-menu > a > .mention9").css("display","none");
    });
    $("#maintain > .maintain-menu > a > .menu5").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","none");
        $("#maintain > .maintain-menu > a > .mention2").css("display","none");
        $("#maintain > .maintain-menu > a > .mention3").css("display","none");
        $("#maintain > .maintain-menu > a > .mention4").css("display","none");
        $("#maintain > .maintain-menu > a > .mention5").css("display","block");
        $("#maintain > .maintain-menu > a > .mention6").css("display","none");
        $("#maintain > .maintain-menu > a > .mention7").css("display","none");
        $("#maintain > .maintain-menu > a > .mention8").css("display","none");
        $("#maintain > .maintain-menu > a > .mention9").css("display","none");
    });
    $("#maintain > .maintain-menu > a > .menu6").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","none");
        $("#maintain > .maintain-menu > a > .mention2").css("display","none");
        $("#maintain > .maintain-menu > a > .mention3").css("display","none");
        $("#maintain > .maintain-menu > a > .mention4").css("display","none");
        $("#maintain > .maintain-menu > a > .mention5").css("display","none");
        $("#maintain > .maintain-menu > a > .mention6").css("display","block");
        $("#maintain > .maintain-menu > a > .mention7").css("display","none");
        $("#maintain > .maintain-menu > a > .mention8").css("display","none");
        $("#maintain > .maintain-menu > a > .mention9").css("display","none");
    });
    $("#maintain > .maintain-menu > a > .menu7").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","none");
        $("#maintain > .maintain-menu > a > .mention2").css("display","none");
        $("#maintain > .maintain-menu > a > .mention3").css("display","none");
        $("#maintain > .maintain-menu > a > .mention4").css("display","none");
        $("#maintain > .maintain-menu > a > .mention5").css("display","none");
        $("#maintain > .maintain-menu > a > .mention6").css("display","none");
        $("#maintain > .maintain-menu > a > .mention7").css("display","block");
        $("#maintain > .maintain-menu > a > .mention8").css("display","none");
        $("#maintain > .maintain-menu > a > .mention9").css("display","none");
    });
    $("#maintain > .maintain-menu > a > .menu8").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","none");
        $("#maintain > .maintain-menu > a > .mention2").css("display","none");
        $("#maintain > .maintain-menu > a > .mention3").css("display","none");
        $("#maintain > .maintain-menu > a > .mention4").css("display","none");
        $("#maintain > .maintain-menu > a > .mention5").css("display","none");
        $("#maintain > .maintain-menu > a > .mention6").css("display","none");
        $("#maintain > .maintain-menu > a > .mention7").css("display","none");
        $("#maintain > .maintain-menu > a > .mention8").css("display","block");
        $("#maintain > .maintain-menu > a > .mention9").css("display","none");
    });
    $("#maintain > .maintain-menu > a > .menu9").click(function(){
        $("#maintain > .maintain-menu > a > .mention1").css("display","none");
        $("#maintain > .maintain-menu > a > .mention2").css("display","none");
        $("#maintain > .maintain-menu > a > .mention3").css("display","none");
        $("#maintain > .maintain-menu > a > .mention4").css("display","none");
        $("#maintain > .maintain-menu > a > .mention5").css("display","none");
        $("#maintain > .maintain-menu > a > .mention6").css("display","none");
        $("#maintain > .maintain-menu > a > .mention7").css("display","none");
        $("#maintain > .maintain-menu > a > .mention8").css("display","none");
        $("#maintain > .maintain-menu > a > .mention9").css("display","block");
    });
    
    $('footer > .footer-logo-img-box > img').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
