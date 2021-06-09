$(document).ready(function () {
    $(".home > .menu > .menu-list > li > a").click(function(){
        $(".home > .banner > .img-wrap > .banner-img").css("opacity","0");
        $(".home > .banner > .img-wrap > .outer-wrap").css("z-index","20");
        $(".home > .banner > .img-wrap > .outer-wrap").css("opacity","1");
        $(".home > .banner > .img-wrap > .outer-wrap").css("overflow","inherit");
    });
});