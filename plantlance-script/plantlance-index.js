$(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true
    });
    
    $('.main-logo').on('click',function(){
        $.fn.fullpage.moveTo(1);
    });

    //methods
});
