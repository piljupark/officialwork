$(document).ready(function () {
    /* 메뉴 - 웹 슬라이드 메뉴 활성화 */
    $("nav > .nav-wrap > a > .menu-icon").click(function () {
        $("nav > .nav-wrap > a > .menu-icon").css("opacity", "0");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-duration", ".1s");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-delay", "0s");

        $("#nav-slide").css("width", "100%");
        $("#nav-slide").css("z-index", "5");

        $("#nav-slide > .nav-slide-wrap").css("transition-duration", ".2s");
        $("#nav-slide > .nav-slide-wrap").css("transition-delay", ".3s");
        $("#nav-slide > .nav-slide-wrap").css("opacity", "1");

        $("#nav-slide > .nav-slide-wrap > .nav-slide-side > .side-wrap > a > .close-button").css("display", "block");
        
        $("body").css("overflow","hidden");
        
        
        $(".nav-mob").css("width", "100%");
        $(".nav-mob").css("z-index", "5");

        $(".nav-mob > .nav-mob-top > a > .close-button").css("display", "none");

        $(".nav-mob > .nav-mob-wrap > .nav-mob-bottom").css("transition-duration", ".2s");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-bottom").css("transition-delay", ".3s");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-bottom").css("display", "block");
    });
    /* // 메뉴 - 웹 슬라이드 메뉴 활성화 */




    /* 메뉴 - 닫기 - 슬라이드 메뉴 비활성화 */
    $("#nav-slide > .nav-slide-wrap > .nav-slide-side > .side-wrap > a > .close-button").click(function () {
        $("nav > .nav-wrap > a > .menu-icon").css("opacity", "1");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-delay", ".4s");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-duturation", ".2s");

        $("#nav-slide").css("width", "0");
        $("#nav-slide").css("z-index", "-1");

        $("#nav-slide > .nav-slide-wrap > .nav-slide-side > .side-wrap > a > .close-button").css("display", "none");

        $("#nav-slide > .nav-slide-wrap").css("transition-delay", "0s");
        $("#nav-slide > .nav-slide-wrap").css("transition-duration", ".1s");
        $("#nav-slide > .nav-slide-wrap").css("opacity", "0");


        $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .sofa").css("height", "0px");
        $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .table").css("height", "0px");





        $("nav > .nav-wrap > a > .menu-icon").css("opacity", "1");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-delay", ".4s");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-duturation", ".2s");

        $(".nav-mob").css("width", "0");
        $(".nav-mob").css("z-index", "-1");

        $(".nav-mob > .nav-mob-top > a > .close-button").css("display", "none");

        $(".nav-mob > .nav-mob-wrap > .nav-mob-bottom").css("transition-duration", ".2s");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-bottom").css("transition-delay", ".3s");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-bottom").css("display", "none");
        
        
        
        $("body").css("overflow-y","auto");
    });
    /* 메뉴 - 닫기 - 슬라이드 메뉴 비활성화 */


    /* 메뉴 - 퍼니쳐 - 소파 하위메뉴 비활성화*/
    $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > a > .title-sofa").click(function () {
        $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .sofa").css("height", "170px");
        $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .table").css("height", "0px");
    });
    /* //메뉴 - 퍼니쳐 - 소파 하위메뉴 비활성화*/


    /* 메뉴 - 소파 - 테이블 하위 메뉴 활성화 */
    $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > a > .title-table").click(function () {
        $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .sofa").css("height", "0px");
        $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .table").css("height", "100px");
    });
    /* //메뉴 - 소파 - 테이블 하위 메뉴 활성화 */







    /* 메뉴 - 모바일 슬라이드 메뉴 활성화 */
    $("nav > .nav-wrap > a > .menu-icon").click(function () {
        $("nav > .nav-wrap > a > .menu-icon").css("opacity", "0");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-duration", ".1s");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-delay", "0s");

        $(".nav-mob").css("width", "100%");
        $(".nav-mob").css("z-index", "5");

        $(".nav-mob > .nav-mob-wrap > .nav-mob-bottom").css("display", "block");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-bottom").css("opacity", "1");


        $(".nav-mob > .nav-mob-wrap").css("transition-duration", ".2s");
        $(".nav-mob > .nav-mob-wrap").css("transition-delay", ".3s");
        $(".nav-mob > .nav-mob-wrap").css("display", "block");

        $(".nav-mob > .nav-mob-top > a > .close-button").css("display", "block");
        
        
        $("body").css("overflow","hidden");
    });
    /* // 메뉴 - 모바일 슬라이드 메뉴 활성화 */


    /* 메뉴 - 닫기 - 모바일 슬라이드 메뉴 비활성화 */
    $(".nav-mob > .nav-mob-wrap > .nav-mob-top > a > .close-button").click(function () {
        $("nav > .nav-wrap > a > .menu-icon").css("opacity", "1");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-delay", ".4s");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-duturation", ".2s");

        $(".nav-mob").css("width", "0");
        $(".nav-mob").css("z-index", "-1");

        $(".nav-mob > .nav-mob-top > a > .close-button").css("display", "none");

        $(".nav-mob > .nav-mob-wrap").css("transition-duration", ".1s");
        $(".nav-mob > .nav-mob-wrap").css("transition-delay", "0s");
        $(".nav-mob > .nav-mob-wrap").css("opacity", "0");


        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture").css("height", "0");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > .table").css("height", "0");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > .sofa").css("height", "0");
        
        
        
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > a > .title-furniture > .arrow-down").css("display", "block");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > a > .title-furniture > .arrow-up").css("display", "none");
        
        





        $("nav > .nav-wrap > a > .menu-icon").css("opacity", "1");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-delay", ".4s");
        $("nav > .nav-wrap > a > .menu-icon").css("transition-duturation", ".2s");

        $("#nav-slide").css("width", "0");
        $("#nav-slide").css("z-index", "-1");

        $("#nav-slide > .nav-slide-wrap > .nav-slide-side > .side-wrap > a > .close-button").css("display", "none");

        $("#nav-slide > .nav-slide-wrap").css("transition-delay", "0s");
        $("#nav-slide > .nav-slide-wrap").css("transition-duration", ".1s");
        $("#nav-slide > .nav-slide-wrap").css("opacity", "0");


        $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .sofa").css("height", "0px");
        $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .table").css("height", "0px");
        
        
        $("body").css("overflow-y","auto");
    });
    /* 메뉴 - 닫기 - 모바일 슬라이드 메뉴 비활성화 */



    /* 모바일 메뉴 - 퍼니쳐 활성화 */

    $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > a > .title-furniture > .arrow-down").click(function () {
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture").css("height", "205px");

        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > a > .title-furniture > .arrow-down").css("display", "none");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > a > .title-furniture > .arrow-up").css("display", "block");
    });
    /* //모바일 메뉴 - 퍼니쳐 활성화 */



    /* 모바일 메뉴 - 퍼니쳐 비활성화 */

    $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > a > .title-furniture > .arrow-up").click(function () {
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture").css("height", "0px");

        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > a > .title-furniture > .arrow-down").css("display", "block");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > a > .title-furniture > .arrow-up").css("display", "none");

        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > .table").css("height", "0");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > .sofa").css("height", "0");
    });
    /* //모바일 메뉴 - 퍼니쳐 비활성화 */




    /* 모바일 메뉴 - 퍼니쳐 - 소파 활성화 */
    $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap > .furniture > a > .title-sofa").click(function () {
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > .sofa").css("height", "170px");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > .table").css("height", "0");

        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture").css("height", "375px");
    });
    /* //모바일 메뉴 - 퍼니쳐 - 소파 활성화 */



    /* 모바일 메뉴 - 퍼니쳐 - 테이블 활성화 */

    $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > a > .title-table").click(function () {
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > .sofa").css("height", "0");
        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture > .table").css("height", "110px");

        $(".nav-mob > .nav-mob-wrap > .nav-mob-main-menu > .mob-shop > .shop-wrap >  .furniture").css("height", "315px");
    });
    /* //모바일 메뉴 - 퍼니쳐 - 테이블 활성화 */

});
