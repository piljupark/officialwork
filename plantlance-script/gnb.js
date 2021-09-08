$(document).ready(function () {
    /* 메뉴 - 슬라이드 메뉴 활성화 */
    $("nav > .nav-wrap > a > .menu-icon").click(function () {
        $("#nav-slide").css("width", "850px");

        $("nav > .nav-wrap > a > .menu-icon").css("opacity", "0");
        
        $("#nav-slide > .nav-slide-wrap").css("transition-duration",".2s");
        $("#nav-slide > .nav-slide-wrap").css("transition-delay",".3s");
        $("#nav-slide > .nav-slide-wrap").css("opacity","1");
    });
    /* 메뉴 - //슬라이드 메뉴 활성화 */
    
    
    
    
    /* 메뉴 - 닫기 - 슬라이드 메뉴 비활성화 */
    $("#nav-slide > .nav-slide-wrap > .nav-slide-top > a > .close-button").click(function () {
        $("#nav-slide").css("width", "0");

        $("nav > .nav-wrap > a > .menu-icon").css("opacity", "1");
        
        $("#nav-slide > .nav-slide-wrap").css("transition-delay","0s");
        $("#nav-slide > .nav-slide-wrap").css("transition-duration",".1s");
        $("#nav-slide > .nav-slide-wrap").css("opacity","0");
        


        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap").css("height", "0");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > a > .furniture-txt > .arrow-down").css("display", "block");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > a > .furniture-txt > .arrow-up").css("display", "none");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap").css("margin-bottom", "0px");


        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .table-wrap").css("height", "0");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .sofa-wrap").css("height", "0");

        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .table-wrap").css("padding-top", "0px");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .sofa-wrap").css("padding-top", "0px");
    });
    /* 메뉴 - 닫기 - 슬라이드 메뉴 비활성화 */
    
    
    
    /* 메뉴 - 퍼니쳐 - 퍼니쳐 하위메뉴 활성화*/
    $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > a > .furniture-txt > .arrow-down").click(function () {
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap").css("height", "100%");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > a > .furniture-txt > .arrow-down").css("display", "none");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > a > .furniture-txt > .arrow-up").css("display", "block");

        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap").css("margin-bottom", "20px");




    });
    /* //메뉴 - 퍼니쳐 - 퍼니쳐 하위메뉴 활성화*/


    /* 메뉴 - 퍼니쳐 - 퍼니쳐 하위메뉴 비활성화*/
    $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > a > .furniture-txt > .arrow-up").click(function () {
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap").css("height", "0");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > a > .furniture-txt > .arrow-down").css("display", "block");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > a > .furniture-txt > .arrow-up").css("display", "none");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap").css("margin-bottom", "0px");


        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .table-wrap").css("height", "0");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .sofa-wrap").css("height", "0");

        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .table-wrap").css("padding-top", "0px");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .sofa-wrap").css("padding-top", "0px");
    });
    /* //메뉴 - 퍼니쳐 - 퍼니쳐 하위메뉴 비활성화*/


    /* 메뉴 - 소파 - 소파 하위 메뉴 활성화 */
    $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > a > .sofa-txt").click(function () {
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .sofa-wrap").css("height", "130px");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .sofa-wrap").css("padding-top", "10px");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .table-wrap").css("height", "0");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .table-wrap").css("padding-top", "0px");
    });
    /* //메뉴 - 소파 - 소파 하위 메뉴 활성화 */



    /* 메뉴 - 테이블 - 테이블 하위 메뉴 활성화 */
    $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > a > .table-txt").click(function () {
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .table-wrap").css("height", "70px");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .table-wrap").css("padding-top", "10px");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .sofa-wrap").css("height", "0");
        $("#nav-slide > .nav-slide-wrap > .nav-slide-middle > .middle-left > .shop-wrap > .furniture-wrap > .sofa-wrap").css("padding-top", "0px");
    });
    /* 메뉴 - 테이블 - 테이블 하위 메뉴 활성화 */
})
