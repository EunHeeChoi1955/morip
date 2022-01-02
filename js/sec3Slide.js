$(function(){
	//페이드 인 아웃 슬라이드 제작 opacity:0 ~ 1,animate(); fadeIn()/fadeOut(); 사용안함
	var n = $('.sec3Slide').length-1;	//0 1 2 3	
	var cnt = z = 0;

	
	//autoPlay();
	function autoPlay(){
		
		setId =	setInterval( prevCountFn, 4000 );
	}
	
	
	
	
	//버튼클릭 이벤트
	$('.sec3NextBtn').on({
		click: function(){
			if( !$('.sec3Slide').is(':animated') ){
				nextCountFn();
			}
		}
	});
	
	$('.sec3PrevBtn').on({
		click: function(){
			if( !$('.sec3Slide').is(':animated') ){
				prevCountFn();
			}		
		}
	});
	
	
	
	/* 작은이미지 눌렀을때 바뀜 */
	$('.imgBtn0').on({
		click:	function(){
			
			nextMainSlide(0);
		}
	});
	
	$('.imgBtn1').on({
		click:	function(){
			
			nextMainSlide(1);
		}
	});
	
	$('.imgBtn2').on({
		click:	function(){
			
			nextMainSlide(2);
		}
	});
	
	
	
	
	
		function nextCountFn(){
			cnt++;
			if( cnt > 2 ){
				cnt = 0;
			}
			console.log(cnt);
			nextMainSlide( cnt );
		}
		
			function prevCountFn(){
			cnt--;
			if( cnt < 0 ){
				cnt = n;
			}
			console.log(cnt);
			nextMainSlide( cnt );
		}
		
		
		
		//메인 다음 슬라이드 함수 오름차순 0  1  2
		function nextMainSlide(z){
			$('.sec3Slide').css({zIndex:1}).stop().animate({opacity:0},0); //초기화
			
			$('.sec3Slide').eq(z==0?n:z-1).css({zIndex:2}).stop().animate({opacity:1},0);
			$('.sec3Slide').eq( z ).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},500);
			
			
		}
		
		
		//메인 이전 슬라이드 함수 내림차순 2 1 0 
		function prevMainSlide(z){
			$('.sec3Slide').css({zIndex:1}).stop().animate({opacity:1},0); //초기화
			
			$('.sec3Slide').eq(z==n?0:z+1).css({zIndex:2}).stop().animate({opacity:1},0); 
			$('.sec3Slide').eq(z).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},500); 
			
			
		}
		
		//메인 이전 슬라이드 함수 내림차순 2  1  0 
		
		
	
});//sec3Slide.js