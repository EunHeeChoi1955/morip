$(function(){
	
	//	1. 창너비 = 화면너비 winW=(window).innerWidth()가 변경되면
	//	2. 슬라이드 뷰박스너비 = vieBoxW = $('.section4-slide-view').innerWidth()너비가 변경된다.
	//	3. cols = 해상도 winW 에 따른 칸수(cols=3) 정하기 winW > 1024초과 (cols=3) winW >500 (500 ~ 1024) (cols=2) winW >=320 (320 ~ 500) (cols=1)	
	//	4. 슬라이드너비(slideW) = viewBox/3  // 뷰박스 viewBoxW 너비를 칸수( cols=3 )로 나누어 각 슬라이드 1개의 너비(slideW = viwBoxW/3 )가 계산.	
	//	5. 각 슬라이드 높이(slideH) = 각 슬라이드 높이( slideH = slideW * 높이비율(0.955414013) )는 슬라이드 1개의 너비에 대한 비율로 계산. 
	//	6. 슬라이드 랩핑박스 전체너비 = 슬라이드 랩핑박스 전체너비(slideTotW)와 마진레프트 값(marginL) 계산 ( $('.section4-slide-wrap').css({ width:(slide: (slideW*12) )}) )
	//	7. 마진레프트 값(marginL) =  -(slideW*3) // $('.section4-slide-wrap').css({ width:(slide: (slideW*12),marginLeft :-(slideW*3) )}) )
	//	8. $('.section4-slide-view').높이를 슬라이드 높이로 설정
	//	9. 이미지박스 너비 비율(imgBoxRateW) = 0.412738854;
	//	10. 이미지박스 너비(imgW) = slideW * imgBoxRateW 슬라이드 박스 너비에 대한 이미지 둥근박스를 비율로 계산 = 슬라이드박스너비 * 비율   완벽하게 유지 비율계산 0.412738854
	//	11. 이미지박스 높이(imgH) = imgW; 이미지박스 너비가 높이와 같다.
	
	
	
	var n = $('.sec4Slide').length; // 12개
	var winW = 1903; 				// 반응형 resize()
	var viewBoxW = 1570; 			// 반응형 resize()
	var cols = 3;					// if() or switch() 1024초과 (cols=3,2,1)  
	var slideW = viewBoxW/cols;
	var slideRateH = 0.955414013;   // 슬라이드 높이비율
	var slideH = slideW*slideRateH; // 1570/3=523.333
	var slideTotW = slideW*n;    	// 슬라이드 1개의 너비 * 총 슬라이드 갯수(3+6+3)
	var marginL = -(slideW*3);    
	var imgBoxRateW = 0.412738854;	
	var imgW = slideW * imgBoxRateW;	
	var imgH = imgW;

	
	var cnt = 0;	
	var setId = 0;	
	var count = 0;	 //타이머 카운트
	var countId  = 0;	//타이머 카운트 아이디
		
	
		
		resizeFn();
		setTimeout(resizeFn,100);
		
		function resizeFn(){		//반응형 함수 제작			 
			 winW = $(window).innerWidth(); 
			 viewBoxW = $('.section4-slide-view').innerWidth();
			 
			 if( winW > 1024 ){
				 cols = 3;
			 }
			 else if( winW > 500 ){	//201~1024
				 cols = 2;
			 }
			 else{					//500이하
				 cols = 1;
			 }
			 
			slideW = viewBoxW / cols;			 
			slideH = slideW * slideRateH; 
			slideTotW = slideW * n;     //슬라이드 1개의 너비 * 총 슬라이드 갯수(3+6+3)
			marginL = -(slideW * 3);	//이미지 갯수와 관계없이 좌측의 3개는 고정으로 보낸다.
			
			console.log('칸수:'+ cols);
			console.log('슬라이드1개의 너비:'+ slideW);
			console.log('마진레프트값:'+ marginL);
			
			
			imgW = slideW * imgBoxRateW;	//슬라이드 이미지박스의 너비
			imgH = imgW;	
			
			 
			//css 변경 적용
			$('.sec4Slide').css({width: slideW, height: slideH});
			$('.section4-slide-wrap').css({ width: slideTotW, marginLeft:marginL });
			$('.section4-slide-view').css({ height:slideH });
			$('.sec4Slide-image').css({ width:imgW, height:imgH });
			
			//6. 슬라이드 메인 함수 반응형 적용
			mainSlideFn();
			
		}
		
		$(window).resize(function(){
			resizeFn();
		});

		
		//자동 타이머 실행 
		autoTimerFn();
		
		
		//10. 슬라이드를 터치 하면 자동 타이머 일시 중지 4.터치이벤트에서 작성
		function timerControlFn(){	
			//마지막 터치후 6초동안 터치없으면 자동 재실행 하는 프로그래밍 제작 알고리즘	
			count = 0;
			clearInterval( countId ); //타이머 초기화
			
			countId = setInterval(function(){//실행
				count++;
				console.log(count);					
				if(count>6){		//6초 초과하면 
					nextCountFn();	// 즉각 실행
					autoTimerFn();	//자동 타이머 호출						
					clearInterval(countId); //자신의 타이머 일시중지
				}
			},1000);	
		}
		
		//9. 타이머 콘트롤 페이지 버튼 박스에 마우스 오버시 자동 타이머 일시중지
		$('.section4-slide-page-wrap>ul').on({
			mouseenter: function(){
				clearInterval( setId );
			},
			mouseleave: function(){
				autoTimerFn();
			}
		});
		
		
		
		
		//8.페이지버튼 클릭 이벤트
		$('.sec4PageBt').each(function(index){
			$(this).on({
				click:function(){
					
					cnt= index; //클릭한 버튼 인덱스 번호
					mainSlideFn(); //메인 슬라이드 함수 호출
					
				}
			});
		});
		
	
		
		//7. 페이지 네이션 :메인슬라이드 함수 실행 될때 호출
		function pageNationFn(){
			$('.sec4PageBt').removeClass('addsec4PageBtn');
			$('.sec4PageBt').eq(cnt).addClass('addsec4PageBtn');
		}
		
		
		
		//6. 메인함수 반응형에 함수 호출
		
		
		
		//5. 자동 타이머 함수 4초간
		
		function autoTimerFn(){
			setId = setInterval( nextCountFn ,4000);
		}
		
		
		
		
		//4터치이벤트
		$('.section4-slide-view').swipe({
			swipeLeft:	function(){
				clearInterval( setId );	//자동타이머호출
				nextCountFn();		//다음 슬라이드 호출				
				timerControlFn();	//6초간 터이 없으면 동작하는 함수
				
			},swipeRight:	function(){
				clearInterval( setId );
				prevCountFn();
				timerControlFn();
			}
		});
		
		
		
		
		//3. 카운트 next함수
		function nextCountFn(){
			cnt++;
			mainSlideFn();
		}
		
		
		//2. 카운트 prev 함수
		function prevCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		
		
		// 1. 메인 슬라이드 함수
		function mainSlideFn(){
			$('.section4-slide-wrap').stop().animate({ left: -(slideW * cnt) },600,function(){
			
				cnt>5?cnt=0:cnt;
				cnt<0?cnt=5:cnt;
				
				//초기화설정
				$('.section4-slide-wrap').stop().animate({ left: -(slideW * cnt) },0);
			});
			
			cnt>5?cnt=0:cnt;
			pageNationFn();//페이지네이션
		}
	
	
	
});//sec4Slide.js