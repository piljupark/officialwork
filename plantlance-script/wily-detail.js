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
    
    
    $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1").click(function(){
        $(".txt-eng1").css("display","block");
        $(".txt-eng2").css("display","none");
        $(".txt-eng3").css("display","none");
        
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1").css("background","rgba(0,0,0,0.03)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > .check").css("opacity","1");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > a > .txt-eng").css("font-family","Urbanist-ExtraBold");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > a > .txt-kor").css("font-family","AppleSDGothicNeoB");
        
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2").css("background","rgba(0,0,0,0.0)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > .check").css("opacity","0");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > a > .txt-eng").css("font-family","Urbanist-Medium");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > a > .txt-kor").css("font-family","AppleSDGothicNeoM");
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3").css("background","rgba(0,0,0,0.0)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > .check").css("opacity","0");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > a > .txt-eng").css("font-family","Urbanist-Medium");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > a > .txt-kor").css("font-family","AppleSDGothicNeoM");
    });
    
    
    
    $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2").click(function(){
        $(".txt-eng2").css("display","block");
        $(".txt-eng3").css("display","none");
        $(".txt-eng1").css("display","none");
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2").css("background","rgba(0,0,0,0.03)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > .check").css("opacity","1");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > a > .txt-eng").css("font-family","Urbanist-ExtraBold");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > a > .txt-kor").css("font-family","AppleSDGothicNeoB");
        
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1").css("background","rgba(0,0,0,0.0)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > .check").css("opacity","0");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > a > .txt-eng").css("font-family","Urbanist-Medium");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > a > .txt-kor").css("font-family","AppleSDGothicNeoM");
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3").css("background","rgba(0,0,0,0.0)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > .check").css("opacity","0");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > a > .txt-eng").css("font-family","Urbanist-Medium");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > a > .txt-kor").css("font-family","AppleSDGothicNeoM");
    });

    
    
     $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3").click(function(){
         $(".txt-eng3").css("display","block");
        $(".txt-eng2").css("display","none");
        $(".txt-eng1").css("display","none");
         
         
         
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3").css("background","rgba(0,0,0,0.03)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > .check").css("opacity","1");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > a > .txt-eng").css("font-family","Urbanist-ExtraBold");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box3 > a > .txt-kor").css("font-family","AppleSDGothicNeoB");
        
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1").css("background","rgba(0,0,0,0.0)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > .check").css("opacity","0");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > a > .txt-eng").css("font-family","Urbanist-Medium");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box1 > a > .txt-kor").css("font-family","AppleSDGothicNeoM");
        
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2").css("background","rgba(0,0,0,0.0)");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > .check").css("opacity","0");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > a > .txt-eng").css("font-family","Urbanist-Medium");
        $("#product-box > .product-box-wrap > .product-info-place > .choice-shape > .shape-kind > .shape-kind-box2 > a > .txt-kor").css("font-family","AppleSDGothicNeoM");
    });
    
    
    
    
    //사이드 메뉴 활성화
    
    $(".side-menu-button > a > .arrow-right").click(function(){
       $("#side-menu").css("width","350px");
        
        $(".side-menu-button > a > .arrow-right").css("display","none");
        $(".side-menu-button > a > .arrow-left").css("display","block");
        $(".side-menu-button").css("left","350px");
        
        
        $("#bg-black").css("display","block");
        
        $("body").css("overflow-y","hidden");
    });
    
    
    
    // 사이드 메뉴 비활성화 
    
    $(".side-menu-button > a > .arrow-left").click(function(){
       $("#side-menu").css("width","0px");
        
        $(".side-menu-button > a > .arrow-right").css("display","block");
        $(".side-menu-button > a > .arrow-left").css("display","none");
        $(".side-menu-button").css("left","0px");
        
        $("#bg-black").css("display","none");
        
        $("body").css("overflow-y","scroll");
    });
    
});