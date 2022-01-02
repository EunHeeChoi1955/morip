jQuery(function(){
	
	var boxHper = 0.367936925; // 박스 높이 비율값
	var boxW = $('.section3-Slide-containt').innerWidth(); //박스의 전체 너비
	var boxH = boxW * boxHper; //박스의 높이 계산값 초기값
	
		slideBoxResizeFn();
		setTimeout(slideBoxResizeFn, 100); //혹시 못읽었을때 0.1초 후에 실행하라
	
	
		function slideBoxResizeFn(){
			boxW = $('.section3-Slide-containt').innerWidth(); //박스의 전체 너비
			boxH = boxW * boxHper; //박스의 높이 계산값 초기값 = 박스넓이 * 박스높이 비율
			$('.section3-Slide-containt').css({ height: boxH });
			
		}
		
		$(window).resize(function(){
			slideBoxResizeFn();
		});
		
	
	
	
	
	
	
	
});
//sec3SlideResize.js