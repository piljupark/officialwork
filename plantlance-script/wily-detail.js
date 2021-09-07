$(document).ready(function () {
    $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > a > .arrow-down").click(function(){
        
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind").css("height","200px");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > a > .arrow-up").css("display","block");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > a > .arrow-down").css("display","none");
        
    });
    
    $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > a > .arrow-up").click(function(){
        
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind").css("height","0px");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > a > .arrow-up").css("display","none");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > a > .arrow-down").css("display","block");
        
    });
    
});