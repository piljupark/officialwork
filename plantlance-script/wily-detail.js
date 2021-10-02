$(document).ready(function () {

    //사이드 메뉴 활성화

    $(".side-menu-button > a > .arrow-right").click(function () {
        $("#side-menu").css("width", "350px");

        $(".side-menu-button > a > .arrow-right").css("display", "none");
        $(".side-menu-button > a > .arrow-left").css("display", "block");
        $(".side-menu-button").css("left", "350px");


        $("#bg-black").css("display", "block");

        $("body").css("overflow-y", "hidden");
    });



    // 사이드 메뉴 비활성화 

    $(".side-menu-button > a > .arrow-left").click(function () {
        $("#side-menu").css("width", "0px");

        $(".side-menu-button > a > .arrow-right").css("display", "block");
        $(".side-menu-button > a > .arrow-left").css("display", "none");
        $(".side-menu-button").css("left", "0px");

        $("#bg-black").css("display", "none");

        $("body").css("overflow-y", "scroll");
    });


});
