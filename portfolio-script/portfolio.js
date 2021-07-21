$(document).ready(function () {

    $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button > .dark-btn").click(function () {

        $("body").css("background-color", "#292929");

        $(".logo").css("color", "#6c91a1");

        $(".txt-box").css("background-color", "#292929");
        $(".txt-box").css("border", "1px solid #aaa");

        $(".main-box > .main-wrap > .left > .info > .info-wrap > p").css("color", "#fafafa");

        $(".github .github-logo:nth-child(1)").css("opacity", "0");
        $(".github .github-logo:nth-child(2)").css("opacity", "1");
        
        $(".tool img").css("opacity","0");
        



        $(".dark-btn").css("z-index", "-1");
        $(".light-btn").css("z-index", "11");

        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-name", "darkMode");
        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-duration", ".6s");
        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-fill-mode", "forwards");

        $(".dark").css("opacity", "0");
        $(".light").css("opacity", "1");
        $(".button-wrap").css("background-color", "#ccc");
        
        $(".skill img").css("opacity","0");
        
        $(".call-img:nth-child(1)").css("opacity","0");
        $(".call-img:nth-child(2)").css("opacity","1");

    });




    $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button > .light-btn").click(function () {
        $("body").css("background-color", "#ebf9ff");

        $(".logo").css("color", "#0073a3");

        $(".txt-box").css("background-color", "#fff");
        $(".txt-box").css("border", "none");

        $(".main-box > .main-wrap > .left > .info > .info-wrap > p").css("color", "#292929");

        $(".github .github-logo:nth-child(1)").css("opacity", "1");
        $(".github .github-logo:nth-child(2)").css("opacity", "0");
        $(".github").css("background-color", "#f3d9fa");

        $(".taxi").css("background-color", "#fff3bf");

        $(".email").css("background-color", "#ffe3e3");


        $(".light-btn").css("z-index", "-1");
        $(".dark-btn").css("z-index", "11");

        $(".tool img").css("opacity","1");



        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-name", "lightMode");
        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-duration", ".6s");
        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-fill-mode", "forwards");

        $(".dark").css("opacity", "1");
        $(".light").css("opacity", "0");
        $(".button-wrap").css("background-color", "#fff");
        
        $(".skill img").css("opacity","1");

        $(".ford").css("background-color", "#a5d8ff");
        
        $(".klairs").css("background-color", "#ffe8cc");
        
        $(".call").css("background-color", "#d3f9d8");
        $(".call-img:nth-child(1)").css("opacity","1");
        $(".call-img:nth-child(2)").css("opacity","0");

    });


    /* github button */
    $(".github").mouseenter(function () {
        $(".git-btn").css("bottom", "10px");
    });
    $(".txt-box").mouseleave(function () {
        $(".git-btn").css("bottom", "-100px");
    });
    /* //github button */

    /* email button */
    $(".email").mouseenter(function () {
        $(".email-btn").css("bottom", "10px");
    });
    $(".txt-box").mouseleave(function () {
        $(".email-btn").css("bottom", "-100px");
    });
    /* //email button */
    
    /* call button */
    $(".call").mouseenter(function () {
        $(".call-btn").css("bottom", "10px");
    });
    $(".txt-box").mouseleave(function () {
        $(".call-btn").css("bottom", "-100px");
    });
    
    $(".call").click(function () {
        $(".call").css("animation", "shake 1s");
        $(".call").css("-webkit-animation", "shake 1s");
    });
    /* //call button */

    
    /* ford slideup */
    $(".ford").mouseenter(function () {
        $(".intro-ford").css("height", "165px");
        $(".intro-txt-box-wrap-ford").css("opacity", "1");
        $(".intro-txt-box-wrap-ford").css("transition-duration", ".5s");

    });
    $(".ford").mouseleave(function () {
        $(".intro-ford").css("height", "50px");
        $(".intro-txt-box-wrap-ford").css("opacity", "0");
        $(".intro-txt-box-wrap-ford").css("transition-duration", ".1s");
    });
    /* //ford slideup */
    
    
    /* taxi slideup */
    $(".taxi").mouseenter(function () {
        $(".intro-taxi").css("height", "165px");
        $(".intro-txt-box-wrap-taxi").css("opacity", "1");
        $(".intro-txt-box-wrap-taxi").css("transition-duration", ".5s");

    });
    $(".taxi").mouseleave(function () {
        $(".intro-taxi").css("height", "50px");
        $(".intro-txt-box-wrap-taxi").css("opacity", "0");
        $(".intro-txt-box-wrap-taxi").css("transition-duration", ".1s");
    });
    /* //taxi slideup */


    /* mobile */



});
