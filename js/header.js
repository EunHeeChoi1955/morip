jQuery(function(){
	var t = 0; // false === 0 같다는 표시   toggle
	
	//헤더에서 마우스 오버시 클래스 추가이벤트
	jQuery('#header').on({
		mouseenter:	function(){
			jQuery(this).addClass('addFixed');
		},
		mouseleave:	function(){
			if( t !== 1 ){	//스크롤 탑값이 50 초과가 아니면
				jQuery(this).removeClass('addFixed');
			}
			/* else{
				return false;
			} */
		}
	});
	
	
	//scrollEvent 스크롤시 상단헤더 배경화면이 white가 된다.
	jQuery(window).scroll(function(){		
		
			if( $(window).scrollTop() > 50 ){
				jQuery('#header').addClass('addFixed');				
				
				if( t === 0 ){ //토글변수 활용
					t = 1;	//스크롤 실행했다는 의미 t === true
					$('html, body').stop().animate({scrollTop: $('#section2').offset().top-125 }, 800, 'easeOutExpo');
				}
			}
			else{
				jQuery('#header').removeClass('addFixed');
				t = 0;	//초기화 스크롤 실행 안한 상태의 의미
			}
		
	});
	
	
	
	
	
	
	
});//header.js