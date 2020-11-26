$(document).ready(function () {
    /*$(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $("header").css("background", "rgba(0, 0, 0, .8)");

        } else {
            $("header").css("background", "rgba(0, 0, 0, .1)");
        }
    });*/
    
    
    /*$(".menu>a").click(function () {
        var submenu = $(this).next("ul");
        if (submenu.is(":visible")) {
            submenu.slideUp(100);
        } else {
            submenu.slideDown(100);
        }
    });*/
    
    $(".menu-btn>a").on("click",function(){
        $(".click-to-black").show();
        $(".sidebar-menu").show();
        $(".sidebar-menu").animate({
            right:0
        });
    });
    $(".close-btn>a").on("click",function(){
        $(".click-to-black").hide();
        
        $(".sidebar-menu").animate({
            right:"-" + 50 + "%"
        });
    });
    
    $(".menu-btn>a").on("click",function(){
       $("body").css("overflow","hidden");
    });
    $(".close-btn>a").on("click",function(){
       $("body").css("overflow","scroll");
    });
    $(".menu-btn>a").on("click",function(){
       $(".header").css("z-index","8");
    });
    
    $(".sidebar-menu > .menu-wrap > li > .car").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").show();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow","scroll");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .suv").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").show();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow","scroll");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .commercial").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").show();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow","scroll");
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
        $("#hybrid-info").show();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow","scroll");
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
        $("#performance-info").show();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow","scroll");
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
        $("#truck-info").show();
        $("#future-info").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow","scroll");
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
        $("#future-info").show();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow","scroll");
        $("body").css("overflow-x","hidden");
        $(".sidebar-menu").animate({
            right:"-" + 70 + "%"
        });
    });
    
    $('footer > .footer-logo-img-box > img').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
