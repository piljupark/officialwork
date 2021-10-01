$(document).ready(function () {
    $(".sofa-title .down-menu").click(function(){
        $(".category-sofa").css("height","155px");
        
        $(".sofa-title .up-menu").css("width","10px");
        $(".sofa-title .down-menu").css("width","0");
    });
    $(".sofa-title .up-menu").click(function(){
        $(".category-sofa").css("height","0");
        
        $(".sofa-title .up-menu").css("width","0");
        $(".sofa-title .down-menu").css("width","10px");
    });
    $(".table-title .down-menu").click(function(){
        $(".category-table").css("height","95px");
        
        $(".table-title .up-menu").css("width","10px");
        $(".table-title .down-menu").css("width","0");
    });
    $(".table-title .up-menu").click(function(){
        $(".category-table").css("height","0");
        
        $(".table-title .up-menu").css("width","0");
        $(".table-title .down-menu").css("width","10px");
    });
});