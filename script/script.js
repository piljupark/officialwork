$(document).ready(function () {

    $(".menu-btn>a").on("click", function () {
        $(".click-to-black").show();
        $(".sidebar-menu").show();
        $(".sidebar-menu").animate({
            right: 0
        });
        $("body").css("overflow-y", "hidden");
        $("html").css("overflow-y", "hidden");
        $(".header").css("z-index", "8");
    });
    $(".close-btn>a").on("click", function () {
        $(".click-to-black").hide();
        $(".sidebar-menu").hide();
        $(".sidebar-menu").animate({
            right: "-" + 65 + "%"
        });
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
    });
    $(".click-to-black").on("click", function () {
        $(".click-to-black").hide();
        $(".sidebar-menu").hide();
        $(".sidebar-menu").animate({
            right: "-" + 65 + "%"
        });
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
    })

    $(".sidebar-menu > .menu-wrap > li > .car").click(function () {
        $("#car-info").css("height", "810px");
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
        $("#support").hide();
        $("#promotion").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .suv").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").css("height", "810px");
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
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .commercial").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").css("height", "810px");
        $("#commercial-info").show();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .hybrid").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").css("height", "810px");
        $("#hybrid-info").show();
        $("#performance-info").hide();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });

    });
    $(".sidebar-menu > .menu-wrap > li > .performance").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").css("height", "810px");
        $("#performance-info").show();
        $("#truck-info").hide();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > li > .truck").click(function () {
        $(".sidebar-menu").hide(100);
        $("#car-info").hide();
        $("#suv-info").hide();
        $("#commercial-info").hide();
        $("#hybrid-info").hide();
        $("#performance-info").hide();
        $("#truck-info").css("height", "810px");
        $("#truck-info").show();
        $("#future-info").hide();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
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
        $("#future-info").css("height", "810px");
        $("#future-info").show();
        $("#parts").hide();
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
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
        $("#parts").css("display", "block");
        $("#maintain").hide();
        $("#support").hide();
        $("#promotion").hide();
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .maintain").click(function () {
        $(".sidebar-menu").hide(100);
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
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });

    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .sync3-ecoboost").click(function () {
        $(".sidebar-menu").hide(100);
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
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });
    });
    $(".sidebar-menu > .menu-wrap > .etc-menu > ul > li > .promotion").click(function () {
        $(".sidebar-menu").hide(100);
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
        $("#home-box").hide();
        $(".click-to-black").hide();
        $("body").css("overflow-y", "auto");
        $("html").css("overflow-y", "auto");
        $("body").css("overflow-x", "hidden");
        $(".sidebar-menu").animate({
            right: "-" + 70 + "%"
        });
    });


    $("#maintain > .maintain-menu > a > .menu1").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "block");
        $("#maintain > .maintain-menu > a > .mention1").css("transition-delay", ".4s");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "none");
    });
    $("#maintain > .maintain-menu > a > .menu2").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "block");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "none");
    });
    $("#maintain > .maintain-menu > a > .menu3").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "block");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "none");
    });
    $("#maintain > .maintain-menu > a > .menu4").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "block");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "none");
    });
    $("#maintain > .maintain-menu > a > .menu5").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "block");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "none");
    });
    $("#maintain > .maintain-menu > a > .menu6").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "block");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "none");
    });
    $("#maintain > .maintain-menu > a > .menu7").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "block");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "none");
    });
    $("#maintain > .maintain-menu > a > .menu8").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "block");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "none");
    });
    $("#maintain > .maintain-menu > a > .menu9").click(function () {
        $("#maintain > .maintain-menu > a > .mention1").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention2").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention3").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention4").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention5").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention6").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention7").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention8").css("display", "none");
        $("#maintain > .maintain-menu > a > .mention9").css("display", "block");
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
        $("#support > .support-caution").css("display", "none");
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
        $("#support > .support-caution").css("display", "block");
    });

    $("#promotion > .promotion-wrap > .promotion-img1 > .promotion-dark").click(function () {
        $("#promotion > .promotion-wrap > .promotion-img1").css("height", "380px");
        $("#promotion > .promotion-wrap > .promotion-img2").css("height", "220px");
        $("#promotion > .promotion-wrap > .promotion-img3").css("height", "220px");
        $("#promotion > .promotion-wrap > .promotion-img1 > .promotion-dark").css("background-color", "rgba(0,0,0,0)");
        $("#promotion > .promotion-wrap > .promotion-img2 > .promotion-dark").css("background-color", "rgba(0,0,0,0.5)");
        $("#promotion > .promotion-wrap > .promotion-img3 > .promotion-dark").css("background-color", "rgba(0,0,0,0.5)");
        $("#promotion > .promotion-wrap > .promotion-img1 > .promotion-dark > p").css("opacity", "0");
        $("#promotion > .promotion-wrap > .promotion-img2 > .promotion-dark > p").css("opacity", "1");
        $("#promotion > .promotion-wrap > .promotion-img3 > .promotion-dark > p").css("opacity", "1");
    });

    $("#promotion > .promotion-wrap > .promotion-img2 > .promotion-dark").click(function () {
        $("#promotion > .promotion-wrap > .promotion-img1").css("height", "220px");
        $("#promotion > .promotion-wrap > .promotion-img2").css("height", "438px");
        $("#promotion > .promotion-wrap > .promotion-img3").css("height", "220px");
        $("#promotion > .promotion-wrap > .promotion-img1 > .promotion-dark").css("background-color", "rgba(0,0,0,0.5)");
        $("#promotion > .promotion-wrap > .promotion-img2 > .promotion-dark").css("background-color", "rgba(0,0,0,0)");
        $("#promotion > .promotion-wrap > .promotion-img3 > .promotion-dark").css("background-color", "rgba(0,0,0,0.5)");
        $("#promotion > .promotion-wrap > .promotion-img1 > .promotion-dark > p").css("opacity", "1");
        $("#promotion > .promotion-wrap > .promotion-img2 > .promotion-dark > p").css("opacity", "0");
        $("#promotion > .promotion-wrap > .promotion-img3 > .promotion-dark > p").css("opacity", "1");
    });

    $("#promotion > .promotion-wrap > .promotion-img3 > .promotion-dark").click(function () {
        $("#promotion > .promotion-wrap > .promotion-img1").css("height", "220px");
        $("#promotion > .promotion-wrap > .promotion-img2").css("height", "220px");
        $("#promotion > .promotion-wrap > .promotion-img3").css("height", "380px");
        $("#promotion > .promotion-wrap > .promotion-img1 > .promotion-dark").css("background-color", "rgba(0,0,0,0.5)");
        $("#promotion > .promotion-wrap > .promotion-img2 > .promotion-dark").css("background-color", "rgba(0,0,0,0.5)");
        $("#promotion > .promotion-wrap > .promotion-img3 > .promotion-dark").css("background-color", "rgba(0,0,0,0)");
        $("#promotion > .promotion-wrap > .promotion-img1 > .promotion-dark > p").css("opacity", "1");
        $("#promotion > .promotion-wrap > .promotion-img2 > .promotion-dark > p").css("opacity", "1");
        $("#promotion > .promotion-wrap > .promotion-img3 > .promotion-dark > p").css("opacity", "0");
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


    $('footer > .footer-logo-img-box > img').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
