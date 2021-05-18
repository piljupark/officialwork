$(document).ready(function () {

    $(".menu-btn > a > .mob-menu").click(function () {
         $("body").css("overflow-y", "hidden");
         $("html").css("overflow-y", "hidden");
         $(".sidebar-menu").css("height", "100%");
         $(".sidebar-menu").css("transition-duration", "1s");
         $(".header").css("background", "rgb(41,41,41)");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(2)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","2");
     });

    


    $(".menu-btn > a > .mob-close").on("click", function () {
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
    });

    $("#home-box > .swiper-container > .swiper-wrapper > .home-b").click(function () {
        $("#support").css("display", "block");
        $("#home-box").css("display", "none");
    });
    $("#home-box > .home-finder-wrapper > .home-finder > .finder").click(function () {

        $("#home-box > .home-finder-wrapper > .home-finder > .finder-active").css("border-bottom", "1px solid #003478");
    });

    $(".sidebar-menu > .menu-wrap > li > .car").click(function () {
        $("#car-info").css("display", "block");
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").show();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");

        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");

    });
    $(".sidebar-menu > .menu-wrap > li > .suv").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").css("display", "block");
        $("#suv-info").show();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });
    $(".sidebar-menu > .menu-wrap > li > .commercial").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").css("display", "block");
        $("#commercial-info").show();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });
    $(".sidebar-menu > .menu-wrap > li > .hybrid").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").css("display", "block");
        $("#hybrid-info").show();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");

    });
    $(".sidebar-menu > .menu-wrap > li > .performance").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").css("display", "block");
        $("#performance-info").show();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });
    $(".sidebar-menu > .menu-wrap > li > .truck").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();

        $("#truck-info").show();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });
    $(".sidebar-menu > .menu-wrap > li > .future").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").css("display", "block");
        $("#future-info").show();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .parts-service").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").css("display", "block");
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .maintain").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").css("display", "block");
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");

    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .sync3-ecoboost").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").css("display", "block");
        $("#promotion").hide();
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .promotion").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").css("display", "block");
        $("#drive-test").hide();
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .drive-test").click(function () {
        $(".sidebar-menu").css("height", "100%");
        $(".sidebar-menu").css("transition-duration", "1s");
        $(".header").css("background", "rgb(41,41,41)");
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").css("display", "block");
        $("#home-box").hide();
        $(".menu-btn > a > img:nth-child(2)").css("opacity","0");
        $(".menu-btn > a > img:nth-child(2)").css("z-index","1");
        $(".menu-btn > a > img:nth-child(1)").css("opacity","1");
        $(".menu-btn > a > img:nth-child(1)").css("z-index","2");
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").css("height", "0%");
        $(".sidebar-menu").css("transition-duration", ".4s");
        $(".header").css("background", "rgba(255,255,255,0.2)");
    });

    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .car").click(function () {
        $("#car-info").css("display", "block");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");

        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });
    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .suv").click(function () {
        $("#suv-info").css("display", "block");
        $("#car-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");

        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });
    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .commercial").click(function () {
        $("#commercial-info").css("display", "block");
        $("#suv-info").css("display", "none");
        $("#car-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");

        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });
    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .hybrid").click(function () {
        $("#hybrid-info").css("display", "block");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#car-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");

        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });
    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .performance").click(function () {
        $("#performance-info").css("display", "block");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#car-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");

        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });
    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .truck").click(function () {
        $("#truck-info").css("display", "block");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#car-info").css("display", "none");
        $("#future-info").css("display", "none");

        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });

    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .future").click(function () {
        $("#car-info").css("display", "none");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "block");

        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });



    $(".tablet-pc-btn > .tablet-pc-btn-menu-wrap > .parts-service").click(function () {
        $("#car-info").css("display", "none");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");
        $("#parts").css("display", "block");
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });

    $(".tablet-pc-btn > .tablet-pc-btn-menu-wrap > .maintain").click(function () {
        $("#car-info").css("display", "none");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");
        $("#parts").hide();
        $("#maintain").css("display", "block");
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });

    $(".tablet-pc-btn > .tablet-pc-btn-menu-wrap > .sync3-ecoboost").click(function () {
        $("#car-info").css("display", "none");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").css("display", "block");
        $("#promotion").hide();
        $("#drive-test").hide();

        $("#home-box").hide();
    });

    $(".tablet-pc-btn > .tablet-pc-btn-menu-wrap > .promotion").click(function () {
        $("#car-info").css("display", "none");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").css("display", "block");
        $("#drive-test").hide();

        $("#home-box").hide();
    });

    $(".tablet-pc-btn > .tablet-pc-btn-menu-wrap > .drive-test").click(function () {
        $("#car-info").css("display", "none");
        $("#suv-info").css("display", "none");
        $("#commercial-info").css("display", "none");
        $("#hybrid-info").css("display", "none");
        $("#performance-info").css("display", "none");
        $("#truck-info").css("display", "none");
        $("#future-info").css("display", "none");
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#drive-test").css("display", "block");
        $("#home-box").hide();
    });

    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder").click(function () {
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder > img").css("opacity", "0");
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder > img").css("transition-duration", ".2s");
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder2").css("opacity", "1");
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder2").css("z-index", "2");
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder2").css("transition-duration", "1s");
        $(".finder-place").css("height", "50px");
        $(".finder-place > .finder").css("transition-duration", "2.5s");
        $(".finder-place > p").css("transition-duration", "2.5s");
        $(".finder-place > .finder").css("opacity", "1");
        $(".finder-place > .finder").css("cursor", "text");
        $(".finder-place > p").css("opacity", "1");
        $(".finder-shadow").css("opacity", ".7");
        $(".finder-shadow").css("z-index", "9");
        $("html, body").css("overflow", "hidden");
    });

    $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder2").click(function () {
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder > img").css("transition-duration", "1s");
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder > img").css("opacity", "1");
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder2").css("transition-duration", ".2s");
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder2").css("opacity", "0");
        $(".header > .tablet-pc-vehicle-menu > .tablet-pc-vehicle-menu-wrap > .tablet-pc-vehicle-menu-wrapper > .finder2").css("z-index", "-1");

        $(".finder-place").css("height", "0px");
        $(".finder-place > .finder").css("transition-duration", ".3s");
        $(".finder-place > .finder").css("opacity", "0");
        $(".finder-place > .finder").css("cursor", "default");
        $(".finder-place > p").css("opacity", "0");
        $(".finder-place > p").css("transition-duration", ".3s");
        $(".finder-shadow").css("opacity", "0");
        $(".finder-shadow").css("z-index", "0");
        $("html, body").css("overflow", "auto");
    });

    $(".mobile-small-button").click(function () {
        $(".mobile-small-button2").css("bottom", "160px");
        $(".mobile-small-button2").css("z-index", "2");
        $(".mobile-small-button2 > img").css("opacity", "1");
        $(".mobile-small-button3").css("bottom", "100px");
        $(".mobile-small-button3").css("z-index", "2");
        $(".mobile-small-button3 > img").css("opacity", "1");
        $(".mobile-small-ex").css("display", "block");
        $(".mobile-small-button").css("display", "none");
    });
    $(".mobile-small-ex").click(function () {
        $(".mobile-small-button2").css("width", "50px");
        $(".mobile-small-button2").css("height", "50px");
        $(".mobile-small-button2").css("bottom", "40px");
        $(".mobile-small-button2").css("right", "15px");
        $(".mobile-small-button2").css("background-color", "#000");
        $(".mobile-small-button2 > .contact-info").css("opacity", "0");
        $(".mobile-small-button2 > .contact-info").css("transition-duration", "0.1s");
        $(".mobile-small-button2 > .contact-info").css("overflow", "hidden");
        $(".mobile-small-button2").css("opacity", ".8");
        $(".mobile-small-button2").css("z-index", "-2");

        $(".mobile-small-button3").css("bottom", "40px");
        $(".mobile-small-button3").css("width", "50px");
        $(".mobile-small-button3 > .finder").css("opacity", "0");
        $(".mobile-small-button3 > .finder").css("transition-duration", "0.1s");
        $(".mobile-small-button3").css("z-index", "-2");



        $(".mobile-small-ex").css("display", "none");
        $(".mobile-small-button").css("display", "block");
    });

    $(".mobile-small-button2").click(function () {
        $(".mobile-small-button2").css("width", "98%");
        $(".mobile-small-button2").css("height", "400px");
        $(".mobile-small-button2").css("right", "0.5%");
        $(".mobile-small-button2").css("opacity", "1");
        $(".mobile-small-button2").css("background-color", "#f1f1f1");
        $(".mobile-small-button2 > img").css("opacity", "0");
        $(".mobile-small-button2 > .contact-info").css("opacity", "1");
        $(".mobile-small-button2 > .contact-info").css("transition-duration", "1s");
        $(".mobile-small-button2 > .contact-info").css("overflow", "visible");

        $(".mobile-small-button3").css("width", "50px");
        $(".mobile-small-button3 > .finder").css("opacity", "0");
        $(".mobile-small-button3 > .finder").css("transition-duration", "0.1s");
    });


    $(".mobile-small-button3").click(function () {
        $(".mobile-small-button2").css("width", "50px");
        $(".mobile-small-button2").css("height", "50px");
        $(".mobile-small-button2").css("right", "15px");
        $(".mobile-small-button2 > img").css("opacity", "1");
        $(".mobile-small-button2 > .contact-info").css("opacity", "0");
        $(".mobile-small-button2 > .contact-info").css("transition-duration", "0.1s");
        $(".mobile-small-button2").css("background-color", "#000");
        $(".mobile-small-button2 > .contact-info").css("overflow", "hidden");
        $(".mobile-small-button2").css("opacity", ".8");

        $(".mobile-small-button3").css("width", "250px");

        $(".mobile-small-button3 > .finder").css("transition-duration", "3s");
        $(".mobile-small-button3 > .finder").css("opacity", "1");

        $(".mobile-small-button3 > img").css("opacity", "1");
        $(".mobile-small-button3 > img").css("float", "right");
        $(".mobile-small-button3 > img").css("margin-right", "10px");
    });

    $('.header, #home-box, footer').mouseover(function () {
        $(".mobile-small-button2").css("width", "50px");
        $(".mobile-small-button2").css("height", "50px");
        $(".mobile-small-button2").css("right", "15px");
        $(".mobile-small-button2 > img").css("opacity", "1");
        $(".mobile-small-button2 > .contact-info").css("opacity", "0");
        $(".mobile-small-button2 > .contact-info").css("transition-duration", "0.1s");
        $(".mobile-small-button2").css("background-color", "#000");
        $(".mobile-small-button2 > .contact-info").css("overflow", "hidden");
        $(".mobile-small-button2").css("opacity", ".8");
        $(".mobile-small-button2").css("bottom", "40px");

        $(".mobile-small-button3").css("width", "50px");
        $(".mobile-small-button3 > .finder").css("opacity", "0");
        $(".mobile-small-button3 > .finder").css("transition-duration", "0.1s");
        $(".mobile-small-button3").css("bottom", "40px");

        $(".mobile-small-ex").css("display", "none");
        $(".mobile-small-button").css("display", "block");
    });



    $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(1)").click(function(){
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(1)").css("background-color","#292929");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(1)").css("color","#fff");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(n+2)").css("color","#292929");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(n+2)").css("background-color","#fff");
        
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-txt > mention1").css("opacity","1");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-txt > maintain-mention:nth-child(n+2)").css("opacity","0");
    });
    
    $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(2)").click(function(){
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(1)").css("background-color","#fff");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(1)").css("color","#292929");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(2)").css("background-color","#292929");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(2)").css("color","#fff");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(n+3)").css("color","#292929");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(n+3)").css("background-color","#fff");
        
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-txt > mention1").css("opacity","0");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-txt > maintain-mention:nth-child(2)").css("opacity","1");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-txt > maintain-mention:nth-child(n+3)").css("opacity","0");
    });
    
    
    $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(3)").click(function(){
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(n+1):nth-child(-n+2)").css("background-color","#fff");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(n+1):nth-child(-n+2)").css("color","#292929");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(3)").css("background-color","#292929");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(3)").css("color","#fff");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(n+4)").css("color","#292929");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-wrap > .maintain-explain-title > p:nth-child(n+4)").css("background-color","#fff");
        
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-txt > mention1").css("opacity","0");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-txt > mention2").css("opacity","1");
        $("#maintain > .maintain-explain-wrapper > .maintain-explain-txt > maintain-mention:nth-child(n+3)").css("opacity","0");
    });


    
    
    $("#support > .support-main-img-wrap > .support-img2").click(function () {
        $("#support > .support-main-img-wrap > .support-img1").css("width", "25%");
        $("#support > .support-main-img-wrap > .support-img1").css("opacity", "0.3");
        $("#support > .support-main-img-wrap > .support-img1 > p").css("font-size", "20px");
        $("#support > .support-main-img-wrap > .support-img1 > p").css("margin-top", "125px");
        $("#support > .support-main-img-wrap > .support-img2").css("opacity", "1");
        $("#support > .support-main-img-wrap > .support-img2 > p").css("font-size", "40px");
        $("#support > .support-main-img-wrap > .support-img2").css("width", "70%");
        $("#support > .support-main-img-wrap > .support-img2 > p").css("margin-top", "100px");
        $("#support > .support-ex-wrapper2").css("display", "block");
        $("#support > .support-ex-wrapper1").css("display", "none");
        $("#support > .support-caution-wrap").css("display", "none");
    });
    $("#support > .support-main-img-wrap > .support-img1").click(function () {
        $("#support > .support-main-img-wrap > .support-img2").css("width", "25%");
        $("#support > .support-main-img-wrap > .support-img2").css("opacity", "0.3");
        $("#support > .support-main-img-wrap > .support-img2 > p").css("font-size", "20px");
        $("#support > .support-main-img-wrap > .support-img2 > p").css("margin-top", "115px");
        $("#support > .support-main-img-wrap > .support-img1").css("opacity", "1");
        $("#support > .support-main-img-wrap > .support-img1 > p").css("font-size", "40px");
        $("#support > .support-main-img-wrap > .support-img1").css("width", "70%");
        $("#support > .support-main-img-wrap > .support-img1 > p").css("margin-top", "115px");
        $("#support > .support-ex-wrapper1").css("display", "block");
        $("#support > .support-ex-wrapper2").css("display", "none");
        $("#support > .support-caution-wrap").css("display", "block");
    });


    $("#promotion > .promotion-wrap > .promotion-img-wrap1").hover(function () {

        $("#promotion > .promotion-wrap > .promotion-img-wrap1 > .promotion-txt").css("display", "none");
        $("#promotion > .promotion-wrap > .promotion-img-wrap2 > .promotion-txt").css("display", "block");
        $("#promotion > .promotion-wrap > .promotion-img-wrap3 > .promotion-txt").css("display", "block");
    });

    $("#promotion > .promotion-wrap > .promotion-img-wrap2").hover(function () {

        $("#promotion > .promotion-wrap > .promotion-img-wrap1 > .promotion-txt").css("display", "block");
        $("#promotion > .promotion-wrap > .promotion-img-wrap2 > .promotion-txt").css("display", "none");
        $("#promotion > .promotion-wrap > .promotion-img-wrap3 > .promotion-txt").css("display", "block");
    });

    $("#promotion > .promotion-wrap > .promotion-img-wrap3").hover(function () {
        $("#promotion > .promotion-wrap > .promotion-img-wrap1 > .promotion-txt").css("display", "block");
        $("#promotion > .promotion-wrap > .promotion-img-wrap2 > .promotion-txt").css("display", "block");
        $("#promotion > .promotion-wrap > .promotion-img-wrap3 > .promotion-txt").css("display", "none");
    });



    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text1").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text2").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text3").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text4").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text5").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text6").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text7").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text8").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text9").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text10").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text11").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text12").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text13").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text14").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text15").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text16").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });


    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text17").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text18").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text19").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text20").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text21").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text22").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "1");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "0");
    });

    $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .detail-text23").click(function () {
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose1").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose2").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose3").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose4").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose5").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose6").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose7").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose8").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose9").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose10").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose11").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose12").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose13").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose14").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose15").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose16").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose17").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose18").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose19").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose20").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose21").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose22").css("opacity", "0");
        $("#drive-test > .drive-test-wrap > .into-wrap > .detail-wrap > .detail > .choose23").css("opacity", "1");
    });


    $("#drive-test > .drive-test-model-wrap > .drive-test-next").click(function () {
        $("#drive-test > .drive-test-area").css("display", "block");
        $("#drive-test > .drive-test-area").css("opacity", "1");
        $("#drive-test > .drive-test-model-wrap").css("display", "none");
        $("#drive-test > .drive-test-model-wrap").css("opacity", "0");
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    $("#drive-test > .drive-test-area > .drive-test-prev").click(function () {
        $("#drive-test > .drive-test-area").css("display", "none");
        $("#drive-test > .drive-test-area").css("opacity", "0");
        $("#drive-test > .drive-test-model-wrap").css("display", "block");
        $("#drive-test > .drive-test-model-wrap").css("opacity", "1");
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $("#drive-test > .drive-test-area > .drive-test-next").click(function () {
        $("#drive-test > .drive-test-area").css("display", "none");
        $("#drive-test > .drive-test-area").css("opacity", "0");
        $("#drive-test > .drive-test-information").css("display", "block");
        $("#drive-test > .drive-test-information").css("opacity", "1");
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $("#drive-test > .drive-test-information > .drive-test-prev").click(function () {
        $("#drive-test > .drive-test-area").css("display", "block");
        $("#drive-test > .drive-test-area").css("opacity", "1");
        $("#drive-test > .drive-test-information").css("display", "none");
        $("#drive-test > .drive-test-information").css("opacity", "0");
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });






    $('footer > .footer-wrap > .footer-img-box-wrap > .footer-logo-img-box > .bottom-logo').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
