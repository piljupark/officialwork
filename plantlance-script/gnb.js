$(document).ready(function () {
/* 메뉴 - 슬라이드 메뉴 활성화 */
$("nav > .nav-wrap > a > .menu-icon").click(function () {
    $("#nav-slide").css("width", "100%");

    $("nav > .nav-wrap > a > .menu-icon").css("opacity", "0");

    $("#nav-slide > .nav-slide-wrap").css("transition-duration", ".2s");
    $("#nav-slide > .nav-slide-wrap").css("transition-delay", ".3s");
    $("#nav-slide > .nav-slide-wrap").css("opacity", "1");
});
/* 메뉴 - //슬라이드 메뉴 활성화 */




/* 메뉴 - 닫기 - 슬라이드 메뉴 비활성화 */
$("#nav-slide > .nav-slide-wrap > .nav-slide-side > .side-wrap > a > .close-button").click(function () {
    $("#nav-slide").css("width", "0");

    $("nav > .nav-wrap > a > .menu-icon").css("opacity", "1");

    $("#nav-slide > .nav-slide-wrap").css("transition-delay", "0s");
    $("#nav-slide > .nav-slide-wrap").css("transition-duration", ".1s");
    $("#nav-slide > .nav-slide-wrap").css("opacity", "0");



    $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .sofa").css("height","0px");
    $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .table").css("height","0px");
});
/* 메뉴 - 닫기 - 슬라이드 메뉴 비활성화 */


/* 메뉴 - 퍼니쳐 - 소파 하위메뉴 비활성화*/
$("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > a > .title-sofa").click(function () {
    $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .sofa").css("height","170px");
    $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .table").css("height","0px");
});
/* //메뉴 - 퍼니쳐 - 소파 하위메뉴 비활성화*/


/* 메뉴 - 소파 - 테이블 하위 메뉴 활성화 */
$("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > a > .title-table").click(function () {
    $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .sofa").css("height","0px");
    $("#nav-slide > .nav-slide-wrap > .nav-main-menu > .shop > .shop-wrap > .furniture > .table").css("height","100px");
});
/* //메뉴 - 소파 - 테이블 하위 메뉴 활성화 */



    
    
if (document.body.clientWidth < 850) {
    /* 메뉴 - 슬라이드 메뉴 활성화 */

    /* 메뉴 - //슬라이드 메뉴 활성화 */
}
});




