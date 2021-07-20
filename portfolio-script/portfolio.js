$(document).ready(function () {
    $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button > .dark-btn").click(function () {

        $("body").css("background-color", "#292929");

        $(".logo").css("color", "#6c91a1");

        $(".txt-box").css("background-color", "#292929");
        $(".txt-box").css("border", "1px solid #aaa");

        $(".main-box > .main-wrap > .left > .info > .info-wrap > p").css("color", "#fafafa");





        $(".dark-btn").css("z-index", "-1");
        $(".light-btn").css("z-index", "11");

        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-name", "darkMode");
        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-duration", ".6s");
        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-fill-mode", "forwards");

        $(".dark").css("opacity", "0");
        $(".light").css("opacity", "1");
    });




    $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button > .light-btn").click(function () {
        $("body").css("background-color", "#ebf9ff");

        $(".logo").css("color", "#0073a3");

        $(".txt-box").css("background-color", "#fff");
        $(".txt-box").css("border", "none");

        $(".github").css("background-color", "#fef2ff");
        $(".main-box > .main-wrap > .left > .info > .info-wrap > p").css("color", "#292929");

        $(".github").css("background-color", "#fef2ff");

        $(".taxi").css("background-color", "#fffcd8");

        $(".email").css("background-color", "#ffe5b9");


        $(".light-btn").css("z-index", "-1");
        $(".dark-btn").css("z-index", "11");


        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-name", "lightMode");
        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-duration", ".6s");
        $(".main-box > .main-wrap > .right > .mode > .button-wrap > .button").css("animation-fill-mode", "forwards");

        $(".dark").css("opacity", "1");
        $(".light").css("opacity", "0");

        $(".ford").css("background-color", "#b9d7ff");

    });


    /* github button */
    $(".github").mouseenter(function () {
        $(".git-btn").css("top", "85%");
    });
    $(".txt-box").mouseleave(function () {
        $(".git-btn").css("top", "125%");
    });
    /* //github button */

    /* email button */
    $(".email").mouseenter(function () {
        $(".email-btn").css("top", "85%");
    });
    $(".txt-box").mouseleave(function () {
        $(".email-btn").css("top", "125%");
    });
    /* //email button */

    /* email button */
    $(".ford").mouseenter(function () {
        $(".intro-ford").css("top", "75%");
    });
    $(".txt-box").mouseleave(function () {
        $(".intro-ford").css("top", "150%");
    });

    $(".taxi").mouseenter(function () {
        $(".intro-taxi").css("top", "75%");
    });
    $(".txt-box").mouseleave(function () {
        $(".intro-taxi").css("top", "150%");
    });
    /* //email button */





    /* mobile */
    if (document.body.clientWidth < 531) {


        /* github button */
        $(".github").mouseenter(function () {
            $(".git-btn").css("top", "77%");
        });
        $(".txt-box").mouseleave(function () {
            $(".git-btn").css("top", "125%");
        });
        /* //github button */


        /* email button */
        $(".email").mouseenter(function () {
            $(".email-btn").css("top", "77%");
        });
        $(".txt-box").mouseleave(function () {
            $(".email-btn").css("top", "125%");
        });
        /* //email button */

    }

});
