$(function(){
    $(".nav > .nav-wrap > .title").mouseover(function(){
        $(this).find(".sub-title").stop().fadeIn(10);
        $(".mouseon-off").show();
    });
    $(".nav > .nav-wrap > .title").mouseout(function(){
        $(this).find(".sub-title").stop().fadeOut(10);
        $(".mouseon-off").hide();
    });

});