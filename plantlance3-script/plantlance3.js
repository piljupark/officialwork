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

    
    $("nav > .nav-wrap > .menu-circle > a > .menu-btn").click(function(){
       $("nav > .spread-menu").css("left","0"); 
        
    });
    
    $("nav > .spread-menu > a > .menu-close-btn").click(function(){
       $("nav > .spread-menu").css("left","-400px"); 
       
    });
    
    
    
    $('#fullpage').fullpage({			
			menu: '#anchors',
			anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage'],
			//autoScrolling: false
			navigation: false,
			navigationPosition: 'left',
			responsiveWidth: 1000, // 너비가 1000일때 수동 원페이지 -> 스크롤
		});	
});
