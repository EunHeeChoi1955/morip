jQuery(function(){
	//새로운 변수선언 let =var와 같은의미. 
	//차이는 var는 중복된 변수선언이 된다.
	//var a=4;
	//var a=5;
	//let은 안됨 오류남.. 
	//const 는 java 나 c언어에서 사용할수있음.
	const nTot = $('.mainSlide').length; //HTML 슬라이드 li 전체 갯수 5 
	const n = $('.mainSlide').length-3; //CSS 슬라이드 이미지 전체 갯수 5-2 = 3-1 = 2      0 1 2  
	let   cnt=z=setId=0;
	let	  winW = $(window).innerWidth();	//창너비
	let	  winH = $(window).innerHeight();	//창높이
	let   h2FontSize = (0.045191802*winW);  //타이틀 h2 폰트 사이즈 비율계산 86px
	let   h3FontSize = (0.012611666*winW);  //타이틀 h3 폰트 사이즈 비율계산 24px 0.012611666*1903
	
	

	$('.timerControl').on({
		mouseenter: function(){
			clearInterval( setId );
		},
		mouseleave: function(){
			autoPlayFn();
		}
	});
	
	
	//autoPlayFn();
	
	function autoPlayFn(){
		//setId = setInterval(timerCallCountFn, 4000);
	}
	
	function timerCallCountFn(){
		cnt++;
		mainSlideRollResponseFn(cnt);
	}		
		
		
		
	//피씨 모바일 터치이벤트
	$('.section1-mainSlide-wrap').swipe({
		swipeLeft:	function(){//다음슬라이드
			$('.mainNextBtn').trigger('click');
		},
		swipeRight:	function(){//이전슬라이드
			$('.mainPrevBtn').trigger('click');
		}
	});
	
	
	
	
		
	$('.mainNextBtn').on({
		click: function(){
			//애니메이트가 진행상태가 진행중이 아니라면(! = not 부정) 버튼클릭 가능
			if( !$('.section1-mainSlide-wrap').is(':animated') ){
				cnt++;				
				mainSlideRollResponseFn(cnt);
			}
		}
	});	
	$('.mainPrevBtn').on({
		click: function(){
			//애니메이트가 진행상태가 진행중이 아니라면(! = not 부정) 버튼클릭 가능
			if( !$('.section1-mainSlide-wrap').is(':animated') ){
				cnt--;
				mainSlideRollResponseFn(cnt);
			}
		}
	});
	
	
	
	
	function mainSlideRollResponseFn(z){
		//페이지네이션 함수 호출
		pageNationFn( z>n?0:z ); //z가 2보다 큰경우 0으로 초기화 버튼에 마크를 정상으로 초기화. pageNationFn(z); 이거 생략가능
		
		$('.section1-mainSlide-wrap').stop().animate({ left: (-100*z)+'%' },800,'easeOutExpo',function(){
			
			if( z > n ){
				z=cnt=0;	//z와 함수 초기화			
			}
			else if( z < 0 ){
				z=cnt=n;	//2 = 슬라이드 3개 (0, 1, 2)			
			}
			//pageNationFn(z); 처음슬라이드에서 마지막 슬라이드로 바꿔주는 역할
			$('.section1-mainSlide-wrap').stop().animate({ left: (-100*z)+'%' },0);		
		});
	};
	
	
	
	//페이지네이션 이벤트
	$('.pageBtn').each(function(idx){
		$(this).on({
			click:  function(){
				pageNationFn( idx ); //페이지네이션 클릭했을때 버튼 바뀜
				mainSlideRollResponseFn( idx );// 슬라이드가 버튼 누를때 돌아감
			}
		});
	});
	
	
/* 
	$('.pageBtn').eq(0).on({
		click: function(){
			pageNationFn(0);
		}
	});
	$('.pageBtn').eq(1).on({
		click: function(){
			pageNationFn(1);
		}
	});
	$('.pageBtn').eq(2).on({
		click: function(){
			pageNationFn(2);
		}
	});
	 */
	
	
	function pageNationFn(z){
		$('.pageBtn').removeClass('addPageBtn');
		$('.pageBtn').eq(z).addClass('addPageBtn');
	}
	
	
	
	
	//Smooth Scrolling 섹션2의 top값 : -125px
	$('.nextSmoothScrollBtn').on({
		click:	function(event){
			event.preventDefault();
			$('html, body').stop().animate({ scrollTop:$('#section2').offset().top -125 },1000,'easeOutExpo');
		}
	});
	
	
	//반응형작업할때 - 분석과 계획, 기획(순서 및 구체적인 내용), 작업, 테스트, 수정보완, 완료
	//////////////////////////////////////////////////////////////////////
	
	//반응형 모든 너비와 높이는 창 너비와 창 높이로 한다.
	//0. 배경이미지 위치 좌우 가운데(50%) 상하 탑(0), 사이즈가 슬라이드 전체 사이즈(cover) 좌,우,상,하,가운데  - style.css
	// 수정내용 : background-position:50% 0;
	// 수정내용 : background-size:cover;
	
	// 수정결과 : .mainSlide0 {  background:url(../img/mainSlide1.jpg) no-repeat 50% 0; background-size:cover; }
	// 수정결과 : .mainSlide1 {  background:url(../img/mainSlide2.jpg) no-repeat 50% 0; background-size:cover; }
	// 수정결과 : .mainSlide2 {  background:url(../img/mainSlide3.jpg) no-repeat 50% 0; background-size:cover; }
	 
	 
	//1,2 작업전 style.css 수정 내용	
	//css : 섹션1 슬라이드 전체 높이 모두 초기화 style.css 수정 height:auto 또는 삭제
	//style.css 아래 수정내용
	//.section1-mainSlide-wrap {...height: auto(삭제 또는 auto)... } 
	//.section1-mainSlide-wrap .mainSlide {...height: auto(삭제 또는 auto)...}
	//1. 슬라이드별 너비(창 너비), 높이(창 높이) 반응형으로 설정 - JS : $(window).resize(); width height
	//2. 슬라이드 전체박스 너비(슬라이드 총 추가된 것 까지 5개 너비를 전체너비로 한다.), 높이(창높이) - JS : $(window).resize();
	//3. 섹션 2의 마진 탑값 = 슬라이드 (창높이)로 설정. - JS : $(window).resize();
	//4. 슬라이드 좌우 화살버튼 크기 자동화(반응형 비율계산 - 그리드방식), 마진탑계산 - JS : $(window).resize();
	//5. 슬라이드 타이틀 텍스트(폰트사이즈) 크기 자동화(반응형 비율계산 - 그리드방식), 마진탑계산 - JS : $(window).resize();
	
	setTimeout(mainSlideResizeFn, 100);	//홈페이지 로딩 시 0.1초 후에 실행
	
	$(window).resize(function(){
		mainSlideResizeFn();
	});
	
	function mainSlideResizeFn(){
		//창 너비와 창높이 변수설정
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		h2FontSize = (0.045191802*winW);  //타이틀 h2 폰트 사이즈 비율계산 86px
	    h3FontSize = (0.012611666*winW);  //타이틀 h3 폰트 사이즈 비율계산 24px 0.012611666*1903
		
		//슬라이드 요소 - 클래스 .mainSlide 너비 높이 설정
		$('.mainSlide').css({ width: (winW), height: (winH) });
		$('.section1-mainSlide-wrap').css({ width: (winW*nTot), height: (winH), marginLeft:(-winW) });
		$('#section2').css({ marginTop:(winH) });
	
	
		if( (0.012611666*winW) < 11 ){	//폰트사이즈가 9픽셀 미만이면
			h3FontSize = 11;	//9픽셀로 설정
		}
		else{
			h3FontSize = (0.012611666*winW); //9이상은 비율계산으로 폰트사이즈설정
		}
		if( (0.045191802*winW) < 28 ){
			h2FontSize = 28;
		}
		else{
			h2FontSize = (0.045191802*winW);
		}
		
		
		$('.mainSlide-Title h3 ').css({ fontSize: h3FontSize });
		$('.mainSlide-Title h2 ').css({ fontSize: h2FontSize });		
		$('.mainSlide-Title').css({ marginTop: -(h2FontSize+h3FontSize+10)/2 });
		
		$('.mainSlide-NextBtn-wrap, .mainSlide-PrevBtn-wrap').css({ width:(0.027325276*winW), height:(1.923076923*(0.027325276*winW)), marginTop:-(1.923076923*(0.027325276*winW))/2 });
	
	
	}
	
	

	
	
	
});//mainSlideRollResponse.js