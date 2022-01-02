jQuery(function(){
	var cnt = 0;
	
	
		autoPlayFn();
		
		
		//타이머 자동 4초간 실행 반복
		function autoPlayFn(){
			setId = setInterval(function(){
				cnt++;	// 1 2 0 1 2 0 1 2 0... 
				if(cnt>2){
					alert('슬라이드 끝');
					clearInterval( setId );
				}
				mainSlideFn();
			},4000);
		}
		
	
	
	
	
	//우측버튼(Next Button) 클릭이벤트 
	//click -> 1씩 증가한다.
	jQuery('.mainSlide-NextBtn-wrap').on({
		click: function(){
			cnt++;
			if( cnt > 2 ){
				cnt = 2;
			}
			mainSlideFn();
		}
	});
	
	
	//좌측버튼(prev Button) 클릭이벤트 
	//click -> 1씩 감소한다.
	jQuery('.mainSlide-PrevBtn-wrap').on({
		click: function(){
			cnt--;
			if( cnt < 0 ){
				cnt = 0;
			}
			mainSlideFn();
		}
	});
	
	//페이지버튼 클릭이벤트 - 페이지네이션
	//요소에서 인덱스 번호 호출 사용 배열( each() )
	//메인슬라이드 호출
		jQuery('.pageBtn').each(function(index){
			jQuery(this).on({
				click:	function(){
					cnt = index; //현재 슬라이드 위치
					mainSlideFn();
					//console.log(index);
				}
			});
		});
	
	
	
	
	
	
	/////////////////////////////////////////////////////////////////////
	//메인슬라이드 메인함수
	function mainSlideFn(){
		pageBtn(cnt);
		jQuery('.section1-mainSlide-wrap').animate({left:(-100*cnt)+'%'},1000);
	}
	//페이지버튼 함수
	function pageBtn(z){
		jQuery('.pageBtn').removeClass('addPageBtn');
		jQuery('.pageBtn').eq(z).addClass('addPageBtn');
	}
	
});


//mainSlide.js