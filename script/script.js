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
        $("#suv-info").show();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
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
        $("#commercial-info").show();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
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
        $("#hybrid-info").show();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
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
        $("#performance-info").show();
        $("#truck-info").hide();
        $("#future-info").hide();
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
        $("#truck-info").show();
        $("#future-info").hide();
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
        $("#future-info").show();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y","auto");
        $("html").css("overflow-y","auto");
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
