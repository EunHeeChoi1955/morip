jQuery(function(){
	var cnt=0;
	
		jQuery('.mainSlide-NextBtn-wrap').on({
			click:	function(){
				cnt++;
				mainSlideRolFn(cnt);
			}
		});
				
		jQuery('.mainSlide-PrevBtn-wrap').on({
			click:	function(){
				cnt--;
				mainSlideRolFn(cnt);
			}
		});
		
	
	function mainSlideRolFn(z){
			pageNationFn(z);	
			
		jQuery('.section1-mainSlide-wrap').stop().animate({left:(-100*z)+'%'},600,function(){
			if( z > 2 ){	//마지막 슬라이드 초과이면 처음 슬라이드 위치로 설정 그러면 롤링
				cnt = 0;	// 첫번째 슬라이드 위치로 설정
				z = 0;		//매개변수도 같이 설정
				pageNationFn(z);
				jQuery('.section1-mainSlide-wrap').stop().animate({left:(-100*z)+'%'},0);	//0%			
			}
			if( z < 0 ){	//마지막 슬라이드 초과이면 마지막 슬라이드 위치로 설정 그러면 롤링
				cnt = 2;	// 마지막 슬라이드 위치로 설정
				z = 2;		//매개변수도 같이 설정
				jQuery('.section1-mainSlide-wrap').stop().animate({left:(-100*z)+'%'},0);//-200%				
				pageNationFn(z);
			}
			//pageNationFn(z); //마지막과 처음 슬라이드가 위치 설정되면 롤링 그때 페이지버튼 이벤트			
		});	
	}
	
	function pageNationFn(z){
		jQuery('.pageBtn').removeClass('addPageBtn');
		jQuery('.pageBtn').eq(z).addClass('addPageBtn');
	}
	
	
	
	
});//mainSlideRolling.js